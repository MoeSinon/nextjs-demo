import { TabPane, Tabs } from "@illa-design/tabs"
import { useTranslation } from "next-i18next"
import { FC, HTMLAttributes, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { getSelectedComponents } from "@/redux/config/configSelector"
import { componentPanelCss } from "./style"
import { FocusManager } from "@/utils/focusManager"
import { ConfigPanel } from "@/components/ConfigPanel"
import { ComponentPanel } from "@/components/ComponentPanel"
import { PagePanel } from "@/components/PagePanel"

export const ComponentsManager: FC<HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  const { t } = useTranslation()

  const [activeKey, setActiveKey] = useState("Insert")

  const selectedDisplayNames = useSelector(getSelectedComponents)
  const isClickChange = useRef<boolean>(false)

  useEffect(() => {
    if (!isClickChange.current) {
      if (selectedDisplayNames.length > 0) {
        setActiveKey("Inspect")
      } else {
        if (activeKey === "Page") {
          setActiveKey("Page")
        }
        if (activeKey === "Inspect") {
          setActiveKey("Insert")
        }
      }
    }
    isClickChange.current = false
  }, [activeKey, selectedDisplayNames])

  return (
    <div
      className={props.className}
      css={componentPanelCss}
      onClick={() => {
        FocusManager.switchFocus("components")
      }}
    >
      <Tabs
        variant="text"
        activeKey={activeKey}
        colorScheme="grayBlue"
        onChange={(key) => {
          isClickChange.current = true
          setActiveKey(key)
        }}
      >
        <TabPane title={t("editor.page.tab_title")} key="Page">
          <PagePanel />
        </TabPane>
        <TabPane title={t("editor.inspect.tab_title")} key="Inspect">
          <ConfigPanel />
        </TabPane>
        <TabPane title={t("editor.widget_picker.tab_title")} key="Insert">
          <ComponentPanel />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default ComponentsManager

ComponentsManager.displayName = "ComponentsManager"
