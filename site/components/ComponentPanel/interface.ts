import { HTMLAttributes, ReactNode } from "react"
import { WidgetCardInfo } from "@widgetLibrarys/interface"
import { SessionType } from "@widgetLibrarys/componentListBuilder"

export interface ComponentPanelProps extends HTMLAttributes<HTMLDivElement> {
  componentList?: ComponentSessionProps[]
}

export type ComponentSessionProps = {
  title: any
  widgetCardInfos: WidgetCardInfo[]
}

export type NewTypeMapComponent = {
  [key in SessionType]: WidgetCardInfo[]
}

export interface ComponentItemProps extends WidgetCardInfo { }
