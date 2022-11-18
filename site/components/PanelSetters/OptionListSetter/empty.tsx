import { FC } from "react"
import { emptyEmptyBodyStyle } from "@components/PanelSetters/OptionListSetter/style"

export const EmptyBody: FC = () => {
  return <div css={emptyEmptyBodyStyle}>No options</div>
}

EmptyBody.displayName = "OptionListEmptyBody"
