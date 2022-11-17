import { PanelLabelProps } from "@/components/InspectPanel/interface"

export interface AddActionLabelProps
  extends Pick<PanelLabelProps, "labelName" | "labelDesc"> {
  handleAddItem: () => void
}
