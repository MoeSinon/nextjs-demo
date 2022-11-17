import { FC } from "react"
import {
  navBarLogoStyle,
  navBarStyle,
  navBarTabStyle,
} from "@/pages/Setting/style"
import { ReactComponent as Logo } from "@/assets/illa-logo.svg"
import { useTranslation } from "next-i18next"
import { useRouter } from 'next/router'

export const SettingNavBar: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div css={navBarStyle}>
      <Logo
        css={navBarLogoStyle}
        onClick={() => {
          router.push("/", undefined)
        }}
      />
      <span css={navBarTabStyle} onClick={() => router.push("/dashboard/apps", undefined)}>
        {t("apps")}
      </span>
      <span
        css={navBarTabStyle}
        onClick={() => router.push("/dashboard/resources", undefined)}
      >
        {t("resources")}
      </span>
    </div>
  )
}

SettingNavBar.displayName = "SettingNavBar"
