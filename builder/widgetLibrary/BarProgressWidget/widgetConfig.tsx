import { ReactComponent as LineProgressWidgetIcon } from "@/assets/widgetCover/lineProgress.svg"
import { RESIZE_DIRECTION, WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const BAR_PROGRESS_WIDGET_CONFIG: WidgetConfig = {
  type: "BAR_PROGRESS_WIDGET",
  displayName: "barProgress",
  widgetName: t("widget.bar_progress.name"),
  keywords: ["Bar Progress", "进度条"],
  icon: <LineProgressWidgetIcon />,
  sessionType: "PRESENTATION",
  w: 16,
  h: 3,
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  defaults: {
    value: "50",
    color: "blue",
    trailColor: "gray",
    strokeWidth: "4px",
    label: "Label",
    labelAlign: "left",
    labelPosition: "left",
    labelWidth: "{{33}}",
  },
}
