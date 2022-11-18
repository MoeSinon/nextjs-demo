import { BaseSetter } from "@/components/PanelSetters/interface"
import { PanelLabelProps } from "@/components/InspectPanel/interface"
import { BaseInputSetterProps } from "@/components/PanelSetters/InputSetter/interface"

export type SelectOptions = (
  | string
  | number
  | {
    label: string
    value: string | number
  }
)[]

export interface ColumnsSelectSetterProps extends BaseSetter, PanelLabelProps {
  allowClear?: boolean
}
export interface TableDataInputSetterProps extends BaseInputSetterProps { }
