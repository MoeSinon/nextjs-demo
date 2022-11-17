import { ReactComponent as TabsWidgetIcon } from "@/assets/widgetCover/tabs.svg"
import { WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
import { v4 } from "uuid"
const { t } = useTranslation();
const defaultTabList = [
  { id: v4(), key: "Tab 1", label: "Tab 1" },
  { id: v4(), key: "Tab 2", label: "Tab 2" },
  { id: v4(), key: "Tab 3", label: "Tab 3" },
]

export const TABS_WIDGET_CONFIG: WidgetConfig = {
  displayName: "tabs",
  widgetName: t("widget.tabs.name"),
  h: 6,
  w: 12,
  type: "TABS_WIDGET",
  icon: <TabsWidgetIcon />,
  keywords: ["Tabs", "选项卡"],
  sessionType: "PRESENTATION",
  defaults: {
    tabList: defaultTabList,
    viewList: [],
    align: "flex-start",
    colorScheme: "blue",
    tabPosition: "top",
    currentIndex: 0,
    currentKey: "Tab 1",
  },
}
