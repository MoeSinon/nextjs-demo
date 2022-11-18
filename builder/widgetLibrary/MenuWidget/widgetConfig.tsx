import { ReactComponent as MenuWidgetIcon } from "@/assets/widgetCover/menu.svg"
import { WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"

const menuList = [
  {
    id: "1",
    title: "Menu 1",
  },
  {
    id: "2",
    title: "Menu 2",
    subMenu: [
      {
        id: "2-1",
        title: "SubMenu 1",
      },
      {
        id: "2-2",
        title: "SubMenu 2",
      },
    ],
  },
  {
    id: "3",
    title: "Menu 3",
    subMenu: [
      {
        id: "3-1",
        title: "SubMenu 1",
      },
      {
        id: "3-2",
        title: "SubMenu 2",
      },
    ],
  },
]
const { t } = useTranslation();

export const MENU_WIDGET_CONFIG: WidgetConfig = {
  displayName: "menu",
  widgetName: t("widget.menu.name"),
  h: 7,
  w: 30,
  type: "MENU_WIDGET",
  icon: <MenuWidgetIcon />,
  keywords: ["Menu", "菜单"],
  sessionType: "PRESENTATION",
  defaults: {
    menuList,
    selectedKeys: ["1"],
    mode: "horizontal",
    horizontalAlign: "flex-start",
  },
}
