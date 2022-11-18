import { ReactComponent as NumberInputWidgetIcon } from "@assets/widgetCover/numberInput.svg"
import { RESIZE_DIRECTION, WidgetConfig } from "@widgetLibrarys/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
export const NUMBER_INPUT_WIDGET_CONFIG: WidgetConfig = {
  type: "NUMBER_INPUT_WIDGET",
  widgetName: t("widget.number_input.name"),
  displayName: "numberInput",
  icon: <NumberInputWidgetIcon />,
  keywords: ["Number Input", "数字输入框"],
  sessionType: "INPUTS",
  w: 12,
  h: 5,
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  defaults: {
    label: "Label",
    labelAlign: "left",
    labelPosition: "left",
    labelWidth: "{{33}}",
    colorScheme: "blue",
    max: "{{Infinity}}",
    min: "{{-Infinity}}",
    hidden: false,
    formDataKey: "numberInput",
  },
}
