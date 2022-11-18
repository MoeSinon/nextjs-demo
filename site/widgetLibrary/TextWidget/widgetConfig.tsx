import { ReactComponent as TextWidgetIcon } from "@assets/widgetCover/text.svg"
import { WidgetConfig } from "@widgetLibrarys/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
export const TEXT_WIDGET_CONFIG: WidgetConfig = {
  displayName: "text",
  widgetName: t("widget.text.name"),
  h: 5,
  w: 12,
  type: "TEXT_WIDGET",
  icon: <TextWidgetIcon />,
  keywords: ["Text", "文本"],
  sessionType: "PRESENTATION",
  defaults: {
    value: t("widget.text.default_value"),
    horizontalAlign: "start",
    verticalAlign: "center",
    colorScheme: "grayBlue",
    disableMarkdown: false,
    hidden: false,
    fs: "14px",
  },
}
