import { InputProps } from "@illa-design/input"
import { BaseWidgetProps } from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { ValidateMessageOldProps } from "@widgetLibrarys/PublicSector/InvalidMessage/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"

export interface WrappedInputProps
  extends Pick<
    InputProps,
    "placeholder" | "disabled" | "readOnly" | "maxLength" | "minLength"
  >,
  BaseWidgetProps {
  showCharacterCount?: InputProps["showCount"]
  value?: string
  prefixIcon?: InputProps["prefix"]
  prefixText?: string
  suffixIcon?: InputProps["suffix"]
  suffixText?: string
  colorScheme?: InputProps["borderColor"]
  allowClear?: InputProps["allowClear"]
  handleOnChange?: () => void
  handleUpdateMultiExecutionResult: (
    updateSlice: {
      displayName: string
      value: Record<string, any>
    }[],
  ) => void
  getValidateMessage: (value: string) => string
}

export interface InputWidgetProps
  extends WrappedInputProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps,
  Omit<ValidateMessageOldProps, "value"> {
  validateMessage: string
}
