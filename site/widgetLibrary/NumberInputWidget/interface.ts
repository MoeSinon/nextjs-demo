import { InputNumberProps } from "@illa-design/input-number"
import { BaseWidgetProps } from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"
import { ValidateMessageOldProps } from "@widgetLibrarys/PublicSector/InvalidMessage/interface"

export interface WrappedNumberInputProps
  extends Pick<
    InputNumberProps,
    | "value"
    | "placeholder"
    | "max"
    | "min"
    | "precision"
    | "disabled"
    | "readOnly"
    | "prefix"
    | "suffix"
  > {
  openThousandSeparator?: boolean
  loading?: boolean
  colorScheme?: InputNumberProps["borderColor"]
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

export interface NumberInputWidgetProps
  extends WrappedNumberInputProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps,
  ValidateMessageOldProps {
  validateMessage: string
}
