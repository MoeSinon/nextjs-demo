import { ReactComponent as SelectWidgetIcon } from "@assets/widgetCover/select.svg"
import { RESIZE_DIRECTION, WidgetConfig } from "@widgetLibrarys/interface"
import { v4 } from "uuid"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
export const SELECT_WIDGET_CONFIG: WidgetConfig = {
  type: "SELECT_WIDGET",
  displayName: "select",
  widgetName: t("widget.select.name"),
  icon: <SelectWidgetIcon />,
  keywords: ["Select", "选择器"],
  sessionType: "SELECT",
  w: 12,
  h: 5,
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
    dataSources: "{{[]}}",
    colorScheme: "blue",
    hidden: false,
    formDataKey: "select",
  },
}
