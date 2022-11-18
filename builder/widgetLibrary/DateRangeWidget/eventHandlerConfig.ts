import { EventHandlerConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export const DATE_RANGE_EVENT_HANDLER_CONFIG: EventHandlerConfig = {
  events: [
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.change",
      ),
      value: "change",
    },
  ],
  methods: [
    "setStartValue",
    "setEndValue",
    "clearValue",
    "validate",
    "clearValidation",
    "setDisabled",
  ],
}
