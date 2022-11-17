import { FC } from "react"
import { ListItem } from "./listItem"
import { ListBodyProps } from "@/components/PanelSetters/ChartSetter/chartDatasetsSetter/interface"

export const ListBody: FC<ListBodyProps> = (props) => {
  const { datasets } = props
  return (
    <>
      {datasets?.map((dataset, index) => {
        return (
          <ListItem
            index={index}
            key={dataset.id}
            color={dataset.color}
            isHidden={dataset.isHidden}
            datasetMethod={dataset.aggregationMethod}
            datasetName={dataset.datasetName}
          />
        )
      })}
    </>
  )
}
