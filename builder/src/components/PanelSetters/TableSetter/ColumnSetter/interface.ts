import { BaseSetter } from "@/components/PanelSetters/interface"
import {
  PanelFieldConfig,
  PanelLabelProps,
} from "@/components/InspectPanel/interface"
import { ColumnItemShape } from "@/widgetLibrary/TableWidget/interface"
import { ColumnsSelectSetter } from "@/components/PanelSetters/TableSetter/columsSelectSetter"

export interface HeaderProps {
  labelName: string
  handleAddOption: () => void
}

export interface ColumnItemProps extends Omit<ColumnItemShape, "disabled"> {
  index: number
}

export interface DragIconAndLabelProps {
  index: number
  label?: string
  visible?: boolean
  custom?: boolean
}

export interface ColumnListSetterProps extends BaseSetter {
  value: ColumnItemShape[]
  childrenSetter?: PanelFieldConfig[]
}

export interface DragItem {
  index: number
  id: string
  type: string
}

export interface ActionMenuProps {
  index: number
  handleCloseMode: () => void
}
