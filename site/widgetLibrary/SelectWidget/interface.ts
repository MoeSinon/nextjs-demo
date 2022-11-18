import { SelectProps } from "@illa-design/select"
import { ValidateMessageOldProps } from "@widgetLibrarys/PublicSector/InvalidMessage/interface"
import { BaseWidgetProps } from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"

export interface WrappedSelectProps
  extends Omit<ValidateMessageOldProps, "value">,
  Pick<
    SelectProps,
    | "options"
    | "value"
    | "placeholder"
    | "disabled"
    | "loading"
    | "readOnly"
    | "showSearch"
    | "inputValue"
    | "colorScheme"
  > {
  showClear?: SelectProps["allowClear"]
  invalid?: boolean
  prefixIcon?: string // TODO: not support yet
  suffixIcon?: string // TODO: not support yet
  prefixText?: string // TODO: not support yet
  suffixText?: string // TODO: not support yet
  displayName: string
  handleUpdateDsl: (value: any) => void
  getValidateMessage: (value?: unknown) => string
  handleUpdateMultiExecutionResult: (
    updateSlice: {
      displayName: string
      value: Record<string, any>
    }[],
  ) => void
  handleOnChange?: () => void
}

export interface SelectWidgetProps
  extends WrappedSelectProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps {
  optionConfigureMode?: "dynamic" | "static"
  manualOptions?: {
    label: string
    value: string | number
    disabled?: boolean
    extra?: any
  }[]
  mappedOption?: {
    labels: string[]
    values: any[]
    disables: boolean[]
  }
  validateMessage: string
}
