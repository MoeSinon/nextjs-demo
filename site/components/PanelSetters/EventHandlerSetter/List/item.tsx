import { FC } from "react"
import {
  groupWrapperStyle,
  listItemWrapperStyle,
} from "@components/PanelSetters/EventHandlerSetter/List/style"
import { More } from "@components/PanelSetters/EventHandlerSetter/List/more"
import { EventAndMethodLabel } from "@components/PanelSetters/EventHandlerSetter/List/eventAndMethodLabel"
import { ListItemProps } from "@components/PanelSetters/EventHandlerSetter/List/interface"

export const ListItem: FC<ListItemProps> = (props) => {
  const { index } = props
  return (
    <div css={listItemWrapperStyle}>
      <div css={groupWrapperStyle}>
        <EventAndMethodLabel index={index} />
        <More index={index} />
      </div>
    </div>
  )
}
