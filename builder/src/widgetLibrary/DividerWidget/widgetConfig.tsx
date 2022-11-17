import { ReactComponent as DividerWidgetIcon } from "@/assets/widgetCover/divider.svg"
import { WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const DIVIDER_WIDGET_CONFIG: WidgetConfig = {
  type: "DIVIDER_WIDGET",
  displayName: "divider",
  widgetName: t("widget.divider_progress.name"),
  icon: <DividerWidgetIcon />,
  keywords: ["Divider", "分割线"],
  sessionType: "PRESENTATION",
  w: 16,
  h: 5,
  defaults: {
    colorScheme: "grayBlue",
    fs: "14px",
    hidden: false,
  },
}
