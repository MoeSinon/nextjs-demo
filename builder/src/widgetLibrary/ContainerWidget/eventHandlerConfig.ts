import { EventHandlerConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const CONTAINER_EVENT_HANDLER_CONFIG: EventHandlerConfig = {
  events: [
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.click",
      ),
      value: "click",
    },
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.change",
      ),
      value: "change",
    },
  ],
  methods: [
    "setCurrentViewKey",
    "setCurrentViewIndex",
    "showNextView",
    "showNextVisibleView",
    "showPreviousView",
    "showPreviousVisibleView",
  ],
}
