import { BaseSetter } from "@/components/PanelSetters/interface"
import { PanelLabelProps } from "@/components/InspectPanel/interface"

export interface BaseSwitchProps extends BaseSetter {
  options?: any
}

type SwitchProProps = BaseSwitchProps & PanelLabelProps

export interface DynamicSwitchProps extends SwitchProProps {
  panelConfig: Record<string, any>
  openDynamic?: boolean
}
