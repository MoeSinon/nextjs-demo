import { createContext } from "react"
import { ActionPanelContextProps } from "@/components/Actions/ActionPanel/interface"

export const ActionPanelContext = createContext<ActionPanelContextProps>({})

ActionPanelContext.displayName = "ActionPanelContext"
