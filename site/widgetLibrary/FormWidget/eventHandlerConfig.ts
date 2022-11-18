import { EventHandlerConfig } from "@widgetLibrarys/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const FORM_EVENT_HANDLER_CONFIG: EventHandlerConfig = {
  events: [
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.submit",
      ),
      value: "submit",
    },
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.invalid",
      ),
      value: "invalid",
    },
  ],
  methods: ["submit", "reset", "setValue", "validate"],
}
