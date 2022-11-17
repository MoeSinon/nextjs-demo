import { BaseSetter } from "@/components/PanelSetters/interface"
import {
  PanelFieldConfig,
  PanelLabelProps,
} from "@/components/InspectPanel/interface"
import { CHART_DATASET_AGGREGATION_METHOD } from "@/widgetLibrary/Chart"
import { ChartType } from "chart.js"

export interface ListItemProps {
  color: string
  isHidden: boolean
  datasetName: string
  datasetMethod: string
  index: number
}

export interface ChartDatasetShape {
  id: string
  datasetName: string
  datasetValues: string
  aggregationMethod: CHART_DATASET_AGGREGATION_METHOD
  type: ChartType
  color: string
  isHidden: boolean
}

export interface ChartDatasetsSetterProps extends BaseSetter, PanelLabelProps {
  childrenSetter?: PanelFieldConfig[]
}

export interface ListBodyProps {
  datasets: ChartDatasetShape[]
}
