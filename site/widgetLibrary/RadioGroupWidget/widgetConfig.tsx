import { ReactComponent as RadioGroupWidgetIcon } from "@assets/widgetCover/radioGroup.svg"
import { RESIZE_DIRECTION, WidgetConfig } from "@widgetLibrarys/interface"
import { v4 } from "uuid"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
export const RADIO_GROUP_WIDGET_CONFIG: WidgetConfig = {
  displayName: "radioGroup",
  type: "RADIO_GROUP_WIDGET",
  widgetName: t("widget.radio_group.name"),
  icon: <RadioGroupWidgetIcon />,
  keywords: ["Radio Group", "单选框组"],
  sessionType: "SELECT",
  w: 25,
  h: 3,
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  defaults: {
    optionConfigureMode: "static",
    label: "Label",
    labelAlign: "left",
    labelPosition: "left",
    labelWidth: "{{33}}",
    manualOptions: [
      { id: `option-${v4()}`, label: "Option 1", value: "Option 1" },
      { id: `option-${v4()}`, label: "Option 2", value: "Option 2" },
      { id: `option-${v4()}`, label: "Option 3", value: "Option 3" },
    ],
    value: "Option 1",
    direction: "horizontal",
    dataSources: "{{[]}}",
    colorScheme: "blue",
    hidden: false,
    formDataKey: "radioButton",
  },
}
