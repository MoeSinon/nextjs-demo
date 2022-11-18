import { ReactComponent as CircleProgressWidgetIcon } from "@assets/widgetCover/circleProgress.svg"
import { WidgetConfig } from "@widgetLibrarys/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const CIRCLE_PROGRESS_WIDGET_CONFIG: WidgetConfig = {
  type: "CIRCLE_PROGRESS_WIDGET",
  displayName: "circleProgress",
  widgetName: t("widget.circle_progress.name"),
  keywords: ["Circle Progress", "圆形进度条"],
  icon: <CircleProgressWidgetIcon />,
  sessionType: "PRESENTATION",
  w: 6,
  h: 12,
  defaults: {
    value: "50",
    alignment: "center",
    color: "blue",
    trailColor: "gray",
    strokeWidth: "4px",
  },
}
