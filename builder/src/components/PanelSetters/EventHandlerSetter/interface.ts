import { BaseSetter } from "@/components/PanelSetters/interface"
import {
  PanelFieldConfig,
  PanelLabelProps,
} from "@/components/InspectPanel/interface"

export interface NewBaseEventHandlerSetterProps
  extends BaseSetter,
  PanelLabelProps {
  childrenSetter?: PanelFieldConfig[]
}
