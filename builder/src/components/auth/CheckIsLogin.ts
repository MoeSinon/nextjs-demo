import { useEffect, FC, ReactNode } from "react"
import { getLocalStorage } from "@/utils/storage"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUser } from "@/redux/currentUser/currentUserSelector"
import { Api } from "@//api/base"
import { CurrentUser } from "@/redux/currentUser/currentUserState"
import { currentUserActions } from "@/redux/currentUser/currentUserSlice"
import { clearRequestPendingPool } from "@//api/helpers/axiosPendingPool"
import { useRouter } from 'next/router'

interface CheckIsLoginWrapperProps {
  children: ReactNode
}

export const CheckIsLogin: FC<CheckIsLoginWrapperProps> = (props) => {
  const { children } = props
  const router = useRouter()
  const token = getLocalStorage("token")
  const currentUserId = useSelector(getCurrentUser).userId
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      clearRequestPendingPool()
      router.push("/user/login", undefined)
      return
    }
    if (currentUserId === "" || currentUserId == undefined) {
      Api.request<CurrentUser>(
        {
          url: "/users",
          method: "GET",
        },
        (response) => {
          // TIPS: can check user role
          dispatch(
            currentUserActions.updateCurrentUserReducer({
              ...response.data,
              nickname: response.data.nickname,
            }),
          )
        },
        () => { },
        () => {
          clearRequestPendingPool()
          router.push("/user/login", undefined)
        },
      )
    }
  }, [token, currentUserId, dispatch])

  return <>{ children } < />
}
