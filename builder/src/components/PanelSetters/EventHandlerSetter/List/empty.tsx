import { FC, memo } from "react"
import { emptyBodyStyle } from "@/components/PanelSetters/EventHandlerSetter/List/style"
import { useTranslation } from "next-i18next"

export const EventHandlerEmpty: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <div css={emptyBodyStyle}>
      {t("editor.inspect.setter_content.event_handler_list.empty")}
    </div>
  )
})

EventHandlerEmpty.displayName = "EventHandlerEmpty"
