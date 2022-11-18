import { SwitchProps } from "@illa-design/switch"
import { ValidateMessageOldProps } from "@widgetLibrarys/PublicSector/InvalidMessage/interface"
import { BaseWidgetProps } from "@widgetLibrarys/interface"
import LabelProps from "@widgetLibrarys/PublicSector/Label/interface"
import { TooltipWrapperProps } from "@widgetLibrarys/PublicSector/TooltipWrapper/interface"

export interface WrappedSwitchProps
  extends Pick<SwitchProps, "disabled" | "colorScheme">,
  Omit<ValidateMessageOldProps, "value"> {
  value?: SwitchProps["checked"]
  handleOnChange: () => void
  handleUpdateDsl: (value: Record<string, boolean | undefined>) => void
}

export interface SwitchWidgetProps
  extends WrappedSwitchProps,
  BaseWidgetProps,
  LabelProps,
  TooltipWrapperProps {
  handleUpdateDsl: (value: Record<string, boolean | undefined>) => void
  validateMessage: string
}
