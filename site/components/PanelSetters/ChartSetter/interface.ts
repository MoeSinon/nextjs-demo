import { BaseSetter } from "@components/PanelSetters/interface"
import { PanelLabelProps } from "@components/InspectPanel/interface"
import { BaseSelectSetterProps } from "@components/PanelSetters/SelectSetter/interface"

export interface ChartDataSourceSetterProps
  extends BaseSetter,
  PanelLabelProps {
  allowClear?: boolean
}

export interface ChartColorSelectSetterProps extends BaseSetter { }

export interface ChartTypeSelectSetterProps extends BaseSelectSetterProps { }
