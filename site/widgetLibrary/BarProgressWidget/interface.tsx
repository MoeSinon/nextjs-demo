import { ProgressProps } from "@illa-design/progress"
import { BaseWidgetProps } from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"

export interface WrappedBarProgressProps
  extends Pick<
    ProgressProps,
    "showText" | "trailColor" | "color" | "strokeWidth"
  > {
  value?: number
}

export interface BarProgressWidgetProps
  extends WrappedBarProgressProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps { }
