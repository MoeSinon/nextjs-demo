import { ReactComponent as ButtonWidgetIcon } from "@/assets/widgetCover/button.svg"
import { WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const BUTTON_WIDGET_CONFIG: WidgetConfig = {
  type: "BUTTON_WIDGET",
  displayName: "button",
  widgetName: t("widget.button.name"),
  keywords: ["Button", "按钮"],
  icon: <ButtonWidgetIcon />,
  sessionType: "PRESENTATION",
  w: 12,
  h: 5,
  defaults: {
    text: t("widget.button.default_text"),
    variant: "fill",
    colorScheme: "blue",
    hidden: false,
  },
}
