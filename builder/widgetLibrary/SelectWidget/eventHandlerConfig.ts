import { EventHandlerConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
export const SELECT_EVENT_HANDLER_CONFIG: EventHandlerConfig = {
  events: [
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.change",
      ),
      value: "change",
    },
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.focus",
      ),
      value: "focus",
    },
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.blur",
      ),
      value: "blur",
    },
  ],
  methods: ["setValue", "clearValue", "validate", "clearValidation"],
}
