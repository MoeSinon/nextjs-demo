export type LabelPositionType = "left" | "top" | "right"
export type LabelAlignType = "left" | "right"

export default interface LabelProps {
  label?: string
  required?: boolean
  hideLabel?: boolean
  labelAlign?: LabelAlignType
  labelCaption?: string
  labelHidden?: boolean
  labelPosition?: LabelPositionType
  labelWidth?: number
  labelFull?: boolean
  labelWidthUnit?: "px" | "%"
  hasTooltip?: boolean
}
