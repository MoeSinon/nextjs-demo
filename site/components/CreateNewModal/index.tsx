import { CreateNewModalProps } from "./interface"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { useTranslation } from "next-i18next"
import { Input } from "@illa-design/input"
import { Modal } from "@illa-design/modal"
import { Message } from "@illa-design/message"
import { DashboardApp } from "@/redux/dashboard/apps/dashboardAppState"
import { Api } from "@//api/base"
import { dashboardAppActions } from "@/redux/dashboard/apps/dashboardAppSlice"
import { useRouter } from 'next/router'
import { BASIC_APP_CONFIG } from "@/config/newAppConfig"

export const CreateNewModal: FC<CreateNewModalProps> = (props) => {
  const { visible, onVisibleChange } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState<string>()

  return (
    <Modal
      w="496px"
      simple
      closable
      autoFocus
      footerAlign="right"
      okButtonProps={{
        colorScheme: "techPurple",
      }}
      visible={visible}
      confirmLoading={loading}
      onCancel={() => {
        onVisibleChange(false)
      }}
      cancelText={t("dashboard.common.cancel")}
      onOk={() => {
        if (name === undefined || name === "") {
          Message.error(t("dashboard.app.name_empty"))
          return
        }
        Api.request<DashboardApp>(
          {
            url: "/apps",
            method: "POST",
            data: {
              appName: name,
              initScheme: BASIC_APP_CONFIG,
            },
          },
          (response) => {
            dispatch(
              dashboardAppActions.addDashboardAppReducer({
                app: response.data,
              }),
            )
            router.push(`/app/${response.data.appId}`)
          },
          (failure) => { },
          (error) => { },
          (loading) => {
            setLoading(loading)
          },
          (errorState) => {
            if (errorState) {
              Message.error({ content: t("create_fail") })
            }
          },
        )
      }}
      title={t("dashboard.app.create_app")}
      okText={t("save")}
    >
      <Input
        borderColor="techPurple"
        onChange={(res) => {
          setName(res)
        }}
      />
    </Modal>
  )
}
