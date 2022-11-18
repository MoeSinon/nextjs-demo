import { BaseSetter } from "@components/PanelSetters/interface"
import { PanelFieldConfig } from "@components/InspectPanel/interface"
import { ComponentNode } from "@redux/currentApp/editor/components/componentsState"

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
  componentNode: ComponentNode
}

export interface DragIconAndLabelProps {
  index: number
}
