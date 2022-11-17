import { ActionDataItem } from "@/components/Actions/ActionGenerator/config"
import { ActionType } from "@/redux/currentApp/action/actionState"

export interface ActionTypeSelectorCardProps extends ActionDataItem {
  onSelect?: (item: ActionType) => void
}
