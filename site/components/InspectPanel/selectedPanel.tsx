import { FC, useMemo } from "react"
import { SelectedPanelProps } from "@components/InspectPanel/interface"
import { MultiSelectedPanel } from "@components/InspectPanel/multiSelectedPanel"
import { SingleSelectedPanel } from "@components/InspectPanel/singleSelectedPanel"

export const SelectedPanel: FC<SelectedPanelProps> = (props) => {
  const { selectedDisplayNames } = props

  const isMulti = useMemo(() => selectedDisplayNames.length > 1, [
    selectedDisplayNames,
  ])
  return isMulti ? <MultiSelectedPanel /> : <SingleSelectedPanel />
}

SelectedPanel.displayName = "SelectedPanel"
