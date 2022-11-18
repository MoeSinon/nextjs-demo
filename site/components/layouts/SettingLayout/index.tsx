import { FC } from "react"
import {
  layoutStyle,
  layoutWrapperStyle,
} from "@/pages/Setting/Components/Layout/style"

export const SettingLayout: FC = (props) => {
  const { children } = props
  return (
    <div css={layoutWrapperStyle}>
      <div css={layoutStyle}>{children}</div>
    </div>
  )
}
