import { ReactComponent as DateTimeWidgetIcon } from "@/assets/widgetCover/dateTime.svg"
import { RESIZE_DIRECTION, WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const DATE_TIME_WIDGET_CONFIG: WidgetConfig = {
  type: "DATE_TIME_WIDGET",
  displayName: "dateTime",
  widgetName: t("widget.date_time.name"),
  keywords: ["Date Time", "日期时间选择器"],
  icon: <DateTimeWidgetIcon />,
  sessionType: "CALENDAR",
  w: 20,
  h: 5,
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  defaults: {
    placeholder: t("widget.date_time.placeholder"),
    format: "YYYY-MM-DD HH:mm:ss",
    minuteStep: "{{1}}",
    colorScheme: "blue",
    label: "Label",
    labelAlign: "left",
    labelPosition: "left",
    labelWidth: "{{33}}",
    hidden: false,
    formDataKey: "radioButton",
  },
}
