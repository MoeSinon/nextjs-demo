import { createContext, ReactNode, FC, useCallback } from "react"
import { PanelFieldConfig } from "@components/InspectPanel/interface"
import { generateOptionItemId } from "@components/PanelSetters/OptionListSetter/utils/generateNewOptions"

interface ProviderProps {
  eventItems: any[]
  childrenSetter: PanelFieldConfig[]
  widgetDisplayName: string
  attrPath: string
  handleUpdateDsl: (attrPath: string, value: any) => void
  children: ReactNode
}

interface Inject extends Omit<ProviderProps, "children"> {
  handleDeleteEventItem: (index: number) => void
  handleCopyEventItem: (index: number) => void
}

export const BaseEventHandlerContext = createContext<Inject>({} as Inject)

export const BaseEventHandlerProvider: FC<ProviderProps> = (props) => {
  const { eventItems, attrPath, handleUpdateDsl } = props

  const handleDeleteEventItem = useCallback(
    (index: number) => {
      const updatedArray = eventItems.filter(
        (optionItem: Record<string, any>, i: number) => {
          return i !== index
        },
      )
      handleUpdateDsl(attrPath, updatedArray)
    },
    [eventItems, handleUpdateDsl, attrPath],
  )

  const handleCopyEventItem = useCallback(
    (index: number) => {
      let targetEventItem = eventItems.find(
        (optionItem: Record<string, any>, i: number) => {
          return i === index
        },
      )
      if (!targetEventItem) return
      targetEventItem = {
        ...targetEventItem,
        id: generateOptionItemId(),
      }
      const updatedArray = [...eventItems, targetEventItem]
      handleUpdateDsl(attrPath, updatedArray)
    },
    [eventItems, handleUpdateDsl, attrPath],
  )

  const value = {
    ...props,
    handleDeleteEventItem,
    handleCopyEventItem,
  }

  return (
    <BaseEventHandlerContext.Provider value={value}>
      {props.children}
    </BaseEventHandlerContext.Provider>
  )
}

BaseEventHandlerProvider.displayName = "BaseEventHandlerProvider"
