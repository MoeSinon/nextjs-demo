import { ProgressProps } from "@illa-design/progress"
import {
  BaseComponentNodeProps,
  BaseWidgetProps,
} from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"
export type Alignment = "start" | "center" | "end"
export interface WrappedCircleProgressProps
  extends Pick<
    ProgressProps,
    "showText" | "color" | "trailColor" | "strokeWidth"
  >,
  BaseComponentNodeProps {
  value?: number
  alignment?: "start" | "center" | "end"
}

export interface CircleProgressWidgetProps
  extends WrappedCircleProgressProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps { }
