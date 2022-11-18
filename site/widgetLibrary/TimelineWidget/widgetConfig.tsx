import { ReactComponent as TimelineWidgetIcon } from "@assets/widgetCover/timeline.svg"
import { WidgetConfig } from "@widgetLibrarys/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
export const TIMELINE_WIDGET_CONFIG: WidgetConfig = {
  type: "TIMELINE_WIDGET",
  widgetName: t("widget.timeline.name"),
  displayName: "timeline",
  icon: <TimelineWidgetIcon />,
  keywords: ["Timeline", "时间线"],
  sessionType: "PRESENTATION",
  w: 12,
  h: 28,
  defaults: {
    direction: "vertical",
    items: `{{["The first milestone","The second milestone","The third milestone"]}}`,
    width: "200px",
    height: "20px",
    hidden: false,
  },
}
