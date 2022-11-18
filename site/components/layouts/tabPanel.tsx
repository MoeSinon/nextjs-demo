import { TabPane, Tabs } from "@illa-design/tabs"
import {
  backAreaStyle,
  preIconStyle,
  tabPrefixStyle,
  tabPreTextStyle,
  tabSuffixStyle,
} from "@pages/Setting/style"
import { PreIcon } from "@illa-design/icon"
import { css } from "@emotion/react"
import { useRouter } from 'next/router'
// import { userouter.push, Outlet, useLocation } from "react-router-dom"
import { useTranslation } from "next-i18next"
import { SettingLayout } from "@pages/Setting/Components/Layout"

export default function SettingTabNavBarLayout({ children }: React.PropsWithChildren<{}>) {
  const router = useRouter()
  const { t } = useTranslation()
  const pathList = router.pathname.split("/")
  const key = pathList[pathList.length - 1]

  const TabItems = [
    {
      title: t("setting.account.title"),
      key: "account",
    },
    {
      title: t("setting.password.title"),
      key: "password",
    },
    {
      title: t("setting.other.title"),
      key: "others",
    },
  ]

  const prefixTabs = (
    <div key="tab-prefix" css={tabPrefixStyle}>
      <div
        css={backAreaStyle}
        onClick={() => {
          router.push("/dashboard", undefined)
        }}
      >
        <PreIcon css={preIconStyle} />
        <span css={tabPreTextStyle}>{t("back")}</span>
      </div>
    </div>
  )

  const suffixTabs = (
    <div css={css(tabPrefixStyle, tabSuffixStyle)} key="tab-suffix">
      <div css={backAreaStyle}>
        <PreIcon css={preIconStyle} />
        <span css={tabPreTextStyle}>{t("back")}</span>
      </div>
    </div>
  )

  return (
    <>
      <Tabs
        prefix={prefixTabs}
        suffix={suffixTabs}
        activeKey={key}
        colorScheme="grayBlue"
        size="large"
        withoutContent
        onChange={(key) => {
          switch (key) {
            case "account":
              router.push("/account", undefined)
              break
            case "password":
              router.push("/password", undefined)
              break
            case "others":
              router.push("/others", undefined)
              break
          }
        }}
      >
        {TabItems.map((item) => (
          <TabPane title={item.title} key={item.key}></TabPane>
        ))}
      </Tabs>
      <SettingLayout>
        {children}
      </SettingLayout>
    </>
  )
}

export const getLayout = (page: React.ReactElement) => (
  <SettingTabNavBarLayout>{page}</SettingTabNavBarLayout>
);
