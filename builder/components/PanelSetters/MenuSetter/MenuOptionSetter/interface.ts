import { BaseSetter } from "@/components/PanelSetters/interface"
import { PanelFieldConfig } from "@/components/InspectPanel/interface"
import { MenuList, SubMenu } from "@/widgetLibrary/MenuWidget/interface"

export interface HeaderProps {
  labelName: string
  handleAddOption: () => void
}

export interface MenuItemProps extends MenuList {
  index: number
}

export interface DragIconAndLabelProps extends SubMenu {
  index: number
}

export interface SubMenuLabelProps extends SubMenu {
  index: number
  subIndex: number
  attrPath: string
}

export interface ColumnListSetterProps extends BaseSetter {
  value: MenuList[]
  childrenSetter?: PanelFieldConfig[]
}
