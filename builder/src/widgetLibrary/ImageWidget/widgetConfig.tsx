import { ReactComponent as ImageWidgetIcon } from "@/assets/widgetCover/image.svg"
import { WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const IMAGE_WIDGET_CONFIG: WidgetConfig = {
  type: "IMAGE_WIDGET",
  displayName: "image",
  widgetName: t("widget.image.name"),
  icon: <ImageWidgetIcon />,
  keywords: ["Image", "图片"],
  sessionType: "PRESENTATION",
  h: 16,
  w: 6,
  defaults: {
    imageSrc:
      "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    radius: "0px",
    hidden: false,
    objectFit: "cover",
  },
}
