import { FC, memo } from "react"
import { ComponentSessionProps } from "./interface"
import {
  componentListContainerStyle,
  sessionContainerStyle,
  sessionTitleStyle,
} from "./style"
import { ComponentItem } from "./ComponentItem"
import { useTranslation } from "next-i18next"

export const ComponentSession = memo((props: ComponentSessionProps) => {
  const { title, widgetCardInfos } = props
  const { t } = useTranslation()

  return widgetCardInfos.length > 0 ? (
    <div css={sessionContainerStyle}>
      <span css={sessionTitleStyle}>{t(title)}</span>
      <div css={componentListContainerStyle}>
        {widgetCardInfos.map((item) => (
          <ComponentItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  ) : null
})

ComponentSession.displayName = "ComponentSession"
