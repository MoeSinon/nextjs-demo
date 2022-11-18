import { EventHandlerConfig } from "@widgetLibrarys/interface"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
export const TABLE_EVENT_HANDLER_CONFIG: EventHandlerConfig = {
  events: [
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.sortingChange",
      ),
      value: "sortingChange",
    },
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.paginationChange",
      ),
      value: "paginationChange",
    },
    {
      label: t(
        "editor.inspect.setter_content.widget_action_type_name.columnFiltersChange",
      ),
      value: "columnFiltersChange",
    },
  ],
  methods: [],
}
