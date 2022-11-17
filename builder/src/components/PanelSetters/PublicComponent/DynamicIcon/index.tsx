import { FC } from "react"
import { FxIcon } from "@illa-design/icon"
import { DynamicIconProps } from "@/components/PanelSetters/PublicComponent/DynamicIcon/interface"
import { applyCustomIconStyle } from "@/components/PanelSetters/PublicComponent/DynamicIcon/style"

export const DynamicIcon: FC<DynamicIconProps> = (props) => {
  const { isDynamic, hasRightContent, onClick } = props
  return (
    <div
      css={applyCustomIconStyle(isDynamic, hasRightContent)}
      onClick={onClick}
    >
      <FxIcon />
    </div>
  )
}
