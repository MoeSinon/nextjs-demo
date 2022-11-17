import { BaseSetter } from "@/components/PanelSetters/interface"
import { PanelFieldConfig } from "@/components/InspectPanel/interface"

export interface ViewItemShape {
  id: string
  key: string
  label: string
  disabled?: string
  hidden?: string
}

export interface ViewSetterProps extends BaseSetter {
  value: ViewItemShape[]
  childrenSetter?: PanelFieldConfig[]
}

export interface DragIconAndLabelProps {
  index: number
}
