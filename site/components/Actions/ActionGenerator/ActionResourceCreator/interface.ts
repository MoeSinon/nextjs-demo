import { ResourceType } from "@/redux/resource/resourceState"
import { ActionCreatorPage } from "@/components/Actions/ActionGenerator/interface"

export interface ResourceEditorProps {
  resourceId?: string
  resourceType: ResourceType
  onBack: (page: ActionCreatorPage) => void
  onFinished: (resourceId: string) => void
}
