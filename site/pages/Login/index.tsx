import { getLayout as getSiteLayout } from '@components/layouts/user';
import { useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useTranslation, Trans } from "next-i18next"
import { useDispatch } from "react-redux"
import { useRouter } from 'next/router'
import { Input, Password } from "@illa-design/input"
import { Message } from "@illa-design/message"
import { Button } from "@illa-design/button"
import { WarningCircleIcon } from "@illa-design/icon"
import { EMAIL_FORMAT } from "@/constants/regExp"
import { currentUserActions } from "@redux/currentUser/currentUserSlice"
import { Api } from "@api/base"
import {
  formLabelStyle,
  formTitleStyle,
  gridFormFieldStyle,
  gridFormStyle,
  gridItemStyle,
  descriptionStyle,
  gridValidStyle,
  errorMsgStyle,
  errorIconStyle,
  forgotPwdStyle,
  forgotPwdContainerStyle,
} from "@pages/Login/style"
import { TextLink } from "@components/TextLink"
import { LoginFields } from "./interface"
import { setLocalStorage } from "@utils/storage"
import { CurrentUser } from "@redux/currentUser/currentUserState"

export const Login = () => {
  const { state } = window.history.state
  const [submitLoading, setSubmitLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState({ email: "", password: "" })
  const { t } = useTranslation()
  const router = useRouter()
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    mode: "onSubmit",
  })
  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    Api.request<CurrentUser>(
      { method: "POST", url: "/auth/signin", data },
      (res) => {
        const token = res.headers["illa-token"]
        if (!token) return
        setLocalStorage("token", token, -1)
        dispatch(
          currentUserActions.updateCurrentUserReducer({
            userId: res.data.userId,
            nickname: res.data.nickname,
            language: res.data.language || "en-US",
            email: res.data.email,
          }),
        )
        router.push(router?.pathname ?? "/", undefined, { shallow: true })
        Message.success(t("user.sign_in.tips.success"))
      },
      (res) => {
        Message.error(t("user.sign_in.tips.fail"))
        switch (res.data.errorMessage) {
          case "no such user":
            setErrorMsg({
              ...errorMsg,
              email: t("user.sign_in.error_message.email.registered"),
            })
            break
          case "invalid password":
            setErrorMsg({
              ...errorMsg,
              password: t("user.sign_in.error_message.password.incorrect"),
            })
            break
          default:
        }
      },
      () => {
        Message.warning(t("network_error"))
      },
      (loading) => {
        setSubmitLoading(loading)
      },
    )
  }

  return (
    <form css={gridFormStyle} onSubmit={handleSubmit(onSubmit)}>
      <header css={gridItemStyle}>
        <div css={formTitleStyle}>{t("user.sign_in.title")}</div>
        <div css={descriptionStyle}>
          <Trans
            i18nKey="user.sign_in.description.register"
            t={t}
            components={[
              <TextLink
                key="text-link"
                onClick={() => {
                  router.push("/user/register", undefined)
                }}
              />,
            ]}
          />
        </div>
      </header>
      <section css={gridFormFieldStyle}>
        <section css={gridItemStyle}>
          <label css={formLabelStyle}>{t("user.sign_in.fields.email")}</label>
          <div css={gridValidStyle}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  onChange={(value, event) => {
                    field.onChange(event)
                    if (errorMsg.email !== "") {
                      setErrorMsg({ ...errorMsg, email: "" })
                    }
                  }}
                  size="large"
                  error={!!errors.email || !!errorMsg.email}
                  variant="fill"
                  placeholder={t("user.sign_in.placeholder.email")}
                  borderColor="techPurple"
                />
              )}
              rules={{
                required: t("user.sign_in.error_message.email.require"),
                pattern: {
                  value: EMAIL_FORMAT,
                  message: t(
                    "user.sign_in.error_message.email.invalid_pattern",
                  ),
                },
              }}
            />
            {(errors.email || errorMsg.email) && (
              <div css={errorMsgStyle}>
                <WarningCircleIcon css={errorIconStyle} />
                {errors.email?.message || errorMsg.email}
              </div>
            )}
          </div>
        </section>
        <section css={gridItemStyle}>
          <div css={forgotPwdContainerStyle}>
            <label css={formLabelStyle}>
              {t("user.sign_in.fields.password")}
            </label>
            <TextLink
              css={forgotPwdStyle}
              onClick={() => {
                router.push("/user/forgotPassword", undefined)
              }}
            >
              {t("user.sign_in.description.forgot_password")}
            </TextLink>
          </div>
          <div css={gridValidStyle}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Password
                  {...field}
                  onChange={(event) => {
                    field.onChange(event)
                    if (errorMsg.password !== "") {
                      setErrorMsg({ ...errorMsg, password: "" })
                    }
                  }}
                  size="large"
                  error={!!errors.password || !!errorMsg.password}
                  variant="fill"
                  placeholder={t("user.sign_in.placeholder.password")}
                  borderColor="techPurple"
                />
              )}
              rules={{
                required: t("user.sign_in.error_message.password.require"),
                maxLength: {
                  value: 20,
                  message: t("user.sign_in.error_message.password.length"),
                },
                minLength: {
                  value: 6,
                  message: t("user.sign_in.error_message.password.length"),
                },
              }}
            />
            {(errors.password || errorMsg.password) && (
              <div css={errorMsgStyle}>
                <WarningCircleIcon css={errorIconStyle} />
                {errors.password?.message || errorMsg.password}
              </div>
            )}
          </div>
        </section>
      </section>
      <Button
        colorScheme="techPurple"
        size="large"
        loading={submitLoading}
        fullWidth
      >
        {t("user.sign_in.actions.login")}
      </Button>
    </form>
  )
}

const getLayout = (page: React.ReactElement) =>
  getSiteLayout(
    <div>
      {page}
    </div>

  );

Login.getLayout = getLayout;

Login.displayName = "Login"
