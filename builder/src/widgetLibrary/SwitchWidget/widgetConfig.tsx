import { ReactComponent as SwitchWidgetIcon } from "@/assets/widgetCover/switch.svg"
import { RESIZE_DIRECTION, WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
export const SWITCH_WIDGET_CONFIG: WidgetConfig = {
  displayName: "switch",
  widgetName: t("widget.switch.name"),
  h: 3,
  w: 10,
  type: "SWITCH_WIDGET",
  icon: <SwitchWidgetIcon />,
  keywords: ["Switch", "开关"],
  sessionType: "SELECT",
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  defaults: {
    label: "Label",
    labelAlign: "left",
    labelPosition: "left",
    labelWidth: "{{33}}",
    labelFull: "{{true}}",
    colorScheme: "blue",
    hidden: "{{false}}",
  },
}
