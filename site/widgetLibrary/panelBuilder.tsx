import { widgetBuilder, WidgetType } from "./widgetBuilder"
import { PanelConfig } from "@components/InspectPanel/interface"

export const panelBuilder = (type: WidgetType): PanelConfig[] | null => {
  if (!type) return null
  if (!widgetBuilder(type)) return null
  return widgetBuilder(type).panelConfig
}
