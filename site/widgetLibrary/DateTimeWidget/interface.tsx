import { DatePickerProps } from "@illa-design/date-picker"
import { ValidateMessageOldProps } from "@widgetLibrarys/PublicSector/InvalidMessage/interface"
import { BaseWidgetProps } from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"

export interface WrappedDateTimeProps
  extends Pick<
    DatePickerProps,
    "placeholder" | "disabled" | "readOnly" | "colorScheme"
  > {
  value?: string
  format?: string
  minuteStep?: number
  tooltipText?: string
  loading?: boolean
  showClear?: DatePickerProps["allowClear"]
  minDate?: string
  maxDate?: string
  displayName: string
  getValidateMessage: (value?: unknown) => string
  handleUpdateMultiExecutionResult: (
    updateSlice: {
      displayName: string
      value: Record<string, any>
    }[],
  ) => void
  handleOnChange?: () => void
}

export interface DateTimeWidgetProps
  extends WrappedDateTimeProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps,
  Omit<ValidateMessageOldProps, "value"> {
  validateMessage: string
}
