import { getLayout as getSiteLayout } from '@components/layouts/user';
import { useRef, useState } from "react"
import { useRouter } from 'next/router'
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useTranslation, Trans } from "next-i18next"
import { Input, Password } from "@illa-design/input"
import { Checkbox } from "@illa-design/checkbox"
import { Button } from "@illa-design/button"
import { Link } from "@illa-design/link"
import { Message } from "@illa-design/message"
import { Countdown } from "@illa-design/statistic"
import { WarningCircleIcon } from "@illa-design/icon"
import { EMAIL_FORMAT } from "@/constants/regExp"
import { Api } from "@api/base"
import {
  formLabelStyle,
  formTitleStyle,
  gridFormFieldStyle,
  gridFormStyle,
  gridItemStyle,
  gridValidStyle,
  errorMsgStyle,
  errorIconStyle,
  checkboxTextStyle,
  descriptionStyle,
} from "@pages/Register/style"
import { RegisterFields, RegisterResult } from "./interface"
import { useDispatch } from "react-redux"
import { currentUserActions } from "@redux/currentUser/currentUserSlice"
import { setLocalStorage } from "@utils/storage"
import { TextLink } from "@components/TextLink"

export function getLocalLanguage(): string {
  const lang = window.navigator.language
  if (lang === "zh-CN" || lang === "zh") {
    return "zh-CN"
  }
  return "en-US"
}

export const Register = () => {
  const router = useRouter()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState({ email: "", verificationCode: "" })
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [showCountDown, setShowCountDown] = useState(false)
  const verificationToken = useRef<string>("")
  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<RegisterFields>({
    mode: "onSubmit",
    defaultValues: {
      isSubscribed: true,
    },
  })
  const onSubmit: SubmitHandler<RegisterFields> = (data) => {
    Api.request<RegisterResult>(
      {
        method: "POST",
        url: "/auth/signup",
        data: {
          verificationToken: verificationToken.current,
          language: getLocalLanguage(),
          ...data,
        },
      },
      (res) => {
        Message.success(t("user.sign_up.tips.success"))
        const token = res.headers["illa-token"]
        if (!token) return
        setLocalStorage("token", token, -1)
        dispatch(
          currentUserActions.updateCurrentUserReducer({
            userId: res.data.userId,
            nickname: res.data.nickname,
            language: res.data.language,
            email: res.data.email,
          }),
        )
        router.push("/",
          undefined)
      },
      (res) => {
        Message.error(t("user.sign_up.tips.fail"))
        switch (res.data.errorMessage) {
          case "duplicate email address":
            setErrorMsg({
              ...errorMsg,
              email: t("user.sign_up.error_message.email.registered"),
            })
            break
          case "invalid verification code":
            setErrorMsg({
              ...errorMsg,
              verificationCode: t(
                "user.sign_up.error_message.verification_code.invalid",
              ),
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
        <div css={formTitleStyle}>{t("user.sign_up.title")}</div>
        <div css={descriptionStyle}>
          <Trans
            i18nKey="user.sign_up.description.login"
            t={t}
            components={[
              <TextLink
                key="go-to-login"
                onClick={() => {
                  router.push("/user/login", undefined)
                }}
              />,
            ]}
          />
        </div>
      </header>
      <section css={gridFormFieldStyle}>
        <section css={gridItemStyle}>
          <label css={formLabelStyle}>
            {t("user.sign_up.fields.username")}
          </label>
          <div css={gridValidStyle}>
            <Controller
              name="nickname"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  borderColor="techPurple"
                  size="large"
                  error={!!errors.nickname}
                  variant="fill"
                  placeholder={t("user.sign_up.placeholder.username")}
                />
              )}
              rules={{
                required: t("user.sign_up.error_message.username.require"),
                maxLength: {
                  value: 15,
                  message: t("user.sign_up.error_message.username.length"),
                },
                minLength: {
                  value: 3,
                  message: t("user.sign_up.error_message.username.length"),
                },
              }}
            />
            {errors.nickname && (
              <div css={errorMsgStyle}>
                <WarningCircleIcon css={errorIconStyle} />
                {errors.nickname.message}
              </div>
            )}
          </div>
        </section>
        <section css={gridItemStyle}>
          <label css={formLabelStyle}>{t("user.sign_up.fields.email")}</label>
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
                  borderColor="techPurple"
                  size="large"
                  error={!!errors.email || !!errorMsg.email}
                  variant="fill"
                  placeholder={t("user.sign_up.placeholder.email")}
                />
              )}
              rules={{
                required: t("user.sign_up.error_message.email.require"),
                pattern: {
                  value: EMAIL_FORMAT,
                  message: t(
                    "user.sign_up.error_message.email.invalid_pattern",
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
          <label css={formLabelStyle}>
            {t("user.sign_up.fields.verification_code")}
          </label>
          <div css={gridValidStyle}>
            <Controller
              name="verificationCode"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  borderColor="techPurple"
                  maxLength={6}
                  onChange={(value, event) => {
                    field.onChange(event)
                    if (errorMsg.verificationCode !== "") {
                      setErrorMsg({ ...errorMsg, verificationCode: "" })
                    }
                  }}
                  size="large"
                  error={
                    !!errors.verificationCode || !!errorMsg.verificationCode
                  }
                  variant="fill"
                  suffix={{
                    render: showCountDown ? (
                      <Countdown
                        value={Date.now() + 1000 * 60}
                        mode="site"
                        now={Date.now()}
                        format="ss"
                        onFinish={() => {
                          setShowCountDown(false)
                        }}
                      />
                    ) : (
                      <Link
                        colorScheme="techPurple"
                        hoverable={false}
                        onClick={async () => {
                          const res = await trigger("email")
                          if (res) {
                            setShowCountDown(true)
                            Api.request<{ verificationToken: string }>(
                              {
                                method: "POST",
                                url: "/auth/verification",
                                data: {
                                  email: getValues("email"),
                                  usage: "signup",
                                },
                              },
                              (res) => {
                                Message.success(
                                  t("user.sign_up.tips.verification_code"),
                                )
                                verificationToken.current =
                                  res.data.verificationToken
                              },
                              () => {
                                Message.error(t("user.sign_up.tips.fail_sent"))
                                setShowCountDown(false)
                              },
                              () => {
                                Message.warning(t("network_error"))
                                setShowCountDown(false)
                              },
                              () => { },
                            )
                          }
                        }}
                      >
                        {t("user.sign_up.actions.send")}
                      </Link>
                    ),
                  }}
                  placeholder={t("user.sign_up.placeholder.verification_code")}
                />
              )}
              rules={{
                required: t(
                  "user.sign_up.error_message.verification_code.require",
                ),
              }}
            />
            {(errors.verificationCode || errorMsg.verificationCode) && (
              <div css={errorMsgStyle}>
                <WarningCircleIcon css={errorIconStyle} />
                {errors.verificationCode?.message || errorMsg.verificationCode}
              </div>
            )}
          </div>
        </section>
        <section css={gridItemStyle}>
          <label css={formLabelStyle}>
            {t("user.sign_up.fields.password")}
          </label>
          <div css={gridValidStyle}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Password
                  {...field}
                  borderColor="techPurple"
                  size="large"
                  error={!!errors.password}
                  variant="fill"
                  placeholder={t("user.sign_up.placeholder.password")}
                />
              )}
              rules={{
                required: t("user.sign_up.error_message.password.require"),
                maxLength: {
                  value: 20,
                  message: t("user.sign_up.error_message.password.length"),
                },
                minLength: {
                  value: 6,
                  message: t("user.sign_up.error_message.password.length"),
                },
                validate: (value) => {
                  return value.includes(" ")
                    ? t("setting.password.error_password_has_empty")
                    : true
                },
              }}
            />
            {errors.password && (
              <div css={errorMsgStyle}>
                <WarningCircleIcon css={errorIconStyle} />
                {errors.password.message}
              </div>
            )}
          </div>
        </section>
      </section>
      <section css={gridItemStyle}>
        <div>
          <Controller
            name="isSubscribed"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                checked={field.value}
                colorScheme="techPurple"
              >
                <span css={checkboxTextStyle}>
                  {t("user.sign_up.description.subscribe")}
                </span>
              </Checkbox>
            )}
          />
        </div>
      </section>
      <Button
        colorScheme="techPurple"
        size="large"
        loading={submitLoading}
        fullWidth
      >
        {t("user.sign_up.actions.create")}
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

Register.getLayout = getLayout;


Register.displayName = "Register"
