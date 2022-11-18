import { FC, HTMLAttributes } from "react"
import { Divider } from "@illa-design/divider"
import { InspectPanel } from "@/components/InspectPanel"
import { configPanelStyle } from "./style"

interface ConfigPanelProps extends HTMLAttributes<HTMLDivElement> { }

export const ConfigPanel: FC<ConfigPanelProps> = (props) => {
  const { className } = props

  return (
    <div className={className} css={configPanelStyle}>
      <Divider />
      <InspectPanel />
    </div>
  )
}

ConfigPanel.displayName = "ConfigPanel"
