import { ReactNode } from "react"
import { DatePickerProps } from "@illa-design/date-picker"
import { BaseWidgetProps } from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"
import { ValidateMessageOldProps } from "@widgetLibrarys/PublicSector/InvalidMessage/interface"

export interface WrappedDateProps
  extends Pick<
    DatePickerProps,
    "value" | "readOnly" | "disabled" | "placeholder" | "colorScheme"
  > {
  value?: string
  dateFormat?: string
  loading?: boolean
  showClear?: DatePickerProps["allowClear"]
  beforeIcon?: ReactNode // TODO: not support yet
  Aftericon?: ReactNode // TODO: not support yet
  beforeText?: string // TODO: not support yet
  afterText?: string // TODO: not support yet
  minDate?: string
  maxDate?: string
  handleUpdateDsl: (value: any) => void
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

export interface DateWidgetProps
  extends WrappedDateProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps,
  Omit<ValidateMessageOldProps, "value"> {
  validateMessage: string
}
