import { FC } from "react"
import { useTranslation } from "next-i18next"
import { useRouter } from 'next/router';
import { useSelector } from "react-redux"
import { TabPane, Tabs } from "@illa-design/tabs"
import { DownIcon } from "@illa-design/icon"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Divider } from "@illa-design/divider"
import { Dropdown } from "@illa-design/dropdown"
import { ReactComponent as Logo } from "@/assets/illa-logo.svg"
import {
  containerStyle,
  expandStyle,
  navBarAvatarContainerStyle,
  navBarLogoContainerStyle,
  settingBodyStyle,
  settingUserStyle,
  applyUserAvatarStyle,
  usernameStyle,
  settingItemStyle,
  settingListStyle,
} from "./style"
import { clearLocalStorage } from "@/utils/storage"
import { getCurrentUser } from "@/redux/currentUser/currentUserSelector"

const SettingTrigger: FC<{
  avatarBgColor: string
  avatarText: string
}> = (props) => {
  const router = useRouter();
  const { avatarBgColor, avatarText } = props
  const { t } = useTranslation()
  const userInfo = useSelector(getCurrentUser)
  return (
    <div css={settingBodyStyle}>
      <div css={settingUserStyle}>
        <span css={applyUserAvatarStyle(avatarBgColor)}>{avatarText}</span>
        <span css={usernameStyle}>{userInfo?.nickname}</span>
      </div>
      <Divider />
      <div css={settingListStyle}>
        <div
          css={settingItemStyle}
          onClick={() => {
            router.push("/setting", undefined)
          }}
        >
          {t("Setting")}
        </div>
        <div
          css={settingItemStyle}
          onClick={() => {
            clearLocalStorage()
            window.location.href = "/user/login"
          }}
        >
          {t("Logout")}
        </div>
      </div>
    </div>
  )
}

export const DashboardTitleBar: FC = () => {
  const router = useRouter();
  const { t } = useTranslation()
  const userInfo = useSelector(getCurrentUser)
  const avatarBgColor =
    `${userInfo?.userId}`.padEnd(6, "0").substring(0, 6) || "654aec"
  const avatarText = userInfo?.nickname?.substring?.(0, 1).toUpperCase() || "U"
  let pathList = router.pathname.split("/")
  const tabs: {
    key: string
    title: string
  }[] = [
      {
        key: "apps",
        title: t("apps"),
      },
      {
        key: "resources",
        title: t("resources"),
      },
    ]

  return (
    <Tabs
      prefix={
        <div css={navBarLogoContainerStyle} key="prefix">
          <Logo
            onClick={() => {
              router.push("/", undefined)
            }}
          />
        </div>
      }
      suffix={
        <div css={navBarAvatarContainerStyle} key="suffix">
          <Dropdown
            position="bottom-end"
            trigger="click"
            triggerProps={{ closeDelay: 0, openDelay: 0 }}
            dropList={
              <SettingTrigger
                avatarBgColor={avatarBgColor}
                avatarText={avatarText}
              />
            }
          >
            <div>
              <span css={applyUserAvatarStyle(avatarBgColor)}>
                {avatarText}
              </span>
              <DownIcon
                _css={expandStyle}
                size="12px"
                color={globalColor(`--${illaPrefix}-grayBlue-05`)}
              />
            </div>
          </Dropdown>
        </div>
      }
      activeKey={pathList[pathList.length - 1]}
      css={containerStyle}
      withoutContent
      colorScheme="grayBlue"
      size="large"
      onChange={(key) => {
        switch (key) {
          case "apps":
            router.push("./apps" , undefined)
            break
          case "resources":
            router.push("./resources" , undefined)
            break
        }
      }}
    >
      {tabs.map((item) => {
        return <TabPane title={item.title} key={item.key} />
      })}
    </Tabs>
  )
}

DashboardTitleBar.displayName = "DashboardTitleBar"
