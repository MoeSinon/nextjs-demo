import { css, SerializedStyles } from "@emotion/react"
import { fixedWidthStyle } from "@components/PanelSetters/style"

export const applyRadioGroupWrapperStyle = (
  isSetterSingleRow: boolean = false,
): SerializedStyles => {
  return isSetterSingleRow
    ? css`
        width: 100%;
      `
    : fixedWidthStyle
}

export const radioGroupStyle = css`
  width: 100%;
`
