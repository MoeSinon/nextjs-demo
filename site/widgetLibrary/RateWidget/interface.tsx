import { RateProps } from "@illa-design/rate"
import { BaseWidgetProps } from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"

export interface WrappedRateProps
  extends Pick<RateProps, "allowHalf" | "allowClear" | "disabled"> {
  value?: number
  loading?: boolean
  readOnly?: boolean
  icon?: "star" | "heart"
  maxCount?: RateProps["count"]
  handleUpdateDsl: (value: any) => void
}

export interface RateWidgetProps
  extends WrappedRateProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps { }
