import { css, SerializedStyles } from "@emotion/react"
import {
  HorizontalAlign,
  VerticalAlign,
} from "@widgetLibrarys/TextWidget/interface"

export function applyAlignStyle(
  horizontalAlign?: HorizontalAlign,
  verticalAlign?: VerticalAlign,
): SerializedStyles {
  return css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${horizontalAlign};
    align-items: ${verticalAlign};
  `
}

export const fullWidthAndFullHeightStyle = css`
  width: 100%;
  height: 100%;
`
