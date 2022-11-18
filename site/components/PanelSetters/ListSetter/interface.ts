import {
  PanelFieldConfig,
  PanelLabelProps,
} from "@components/InspectPanel/interface"
import { BaseSetter } from "@components/PanelSetters/interface"

export interface ListSetterProps extends PanelLabelProps, BaseSetter {
  childrenSetter?: PanelFieldConfig[]
}
