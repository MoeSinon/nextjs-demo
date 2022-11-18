import { ReactComponent as DateRangeWidgetIcon } from "@assets/widgetCover/dateRange.svg"
import { RESIZE_DIRECTION, WidgetConfig } from "@widgetLibrarys/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const DATE_RANGE_WIDGET_CONFIG: WidgetConfig = {
  type: "DATE_RANGE_WIDGET",
  displayName: "dateRange",
  widgetName: t("widget.date_range.name"),
  icon: <DateRangeWidgetIcon />,
  keywords: ["Date Range", "日期范围选择器"],
  sessionType: "CALENDAR",
  w: 16,
  h: 5,
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  defaults: {
    dateFormat: "YYYY-MM-DD",
    startPlaceholder: "Start date",
    endPlaceholder: "End date",
    value: ["2022-05-02", "2022-05-03"],
    colorScheme: "blue",
    label: "Label",
    labelAlign: "left",
    labelPosition: "left",
    labelWidth: "{{33}}",
    hidden: false,
    formDataKey: "radioButton",
  },
}
