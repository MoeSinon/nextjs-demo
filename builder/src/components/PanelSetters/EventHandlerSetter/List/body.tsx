import { FC } from "react"
import { ListItem } from "@/components/PanelSetters/EventHandlerSetter/List/item"
import { ListBodyProps } from "@/components/PanelSetters/EventHandlerSetter/List/interface"
import { EventHandlerEmpty } from "@/components/PanelSetters/EventHandlerSetter/List/empty"

export const ListBody: FC<ListBodyProps> = (props) => {
  const { events } = props

  if (!events || events.length === 0) return <EventHandlerEmpty />
  return (
    <>
      {events.map((item, index) => {
        return <ListItem key={item.id} index={index} />
      })}
    </>
  )
}
