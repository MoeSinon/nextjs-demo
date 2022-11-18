import { FC } from "react"
import { optionListHeaderStyle } from "./style"
import { HeaderProps } from "./interface"
import { useTranslation } from "next-i18next"

export const OptionListHeader: FC<HeaderProps> = (props) => {
  const { labelName } = props
  const { t } = useTranslation()

  return (
    <div css={optionListHeaderStyle}>
      <div>{labelName}</div>
    </div>
  )
}

OptionListHeader.displayName = "OptionListHeader"
