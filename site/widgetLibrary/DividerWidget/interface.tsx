import { BaseWidgetProps } from "@widgetLibrarys/interface"
import { DividerTextAlign } from "@illa-design/divider"

export interface WrappedDividerProps {
  text: string
  fs: string
  textAlign: DividerTextAlign
}

export interface DividerWidgetProps
  extends WrappedDividerProps,
  BaseWidgetProps { }
