import { BaseWidgetProps } from "@widgetLibrarys/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"
import { TabsProps } from "@illa-design/tabs"
import { viewListItemShaper } from "@widgetLibrarys/ContainerWidget/interface"

export interface WrappedTabsProps extends TabsProps, BaseWidgetProps {
  value?: string
  disabled?: boolean
  viewList?: viewListItemShaper[]
  tabList?: viewListItemShaper[]
  handleOnChange?: () => void
  handleUpdateOriginalDSLMultiAttr: (updateSlice: Record<string, any>) => void
}

export interface TabsWidgetProps
  extends WrappedTabsProps,
  BaseWidgetProps,
  TooltipWrapperProps {
  navigateContainer?: boolean
  linkWidgetDisplayName?: string
  currentKey?: string
  handleUpdateOriginalDSLOtherMultiAttr: (
    displayName: string,
    updateSlice: Record<string, any>,
  ) => void
}
