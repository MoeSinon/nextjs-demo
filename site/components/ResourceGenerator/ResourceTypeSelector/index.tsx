import { FC } from "react"
import { ResourceTypeSelectorProps } from "./interface"
import { categoryStyle, containerStyle, resourceListStyle } from "./style"
import { ResourceTypeList } from "@pages/Dashboard/components/ResourceGenerator/config"
import { ResourceCard } from "@pages/Dashboard/components/ResourceGenerator/ResourceCard"

export const ResourceTypeSelector: FC<ResourceTypeSelectorProps> = (props) => {
  const { onSelect } = props

  return (
    <div css={containerStyle}>
      {ResourceTypeList.map(({ title, item, category }) => (
        <div key={category}>
          <span css={categoryStyle}>{title}</span>
          <div css={resourceListStyle}>
            {item.map((prop) => (
              <ResourceCard
                key={prop.resourceType}
                onSelect={(item) => {
                  onSelect(item)
                }}
                {...prop}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

ResourceTypeSelector.displayName = "ResourceTypeSelector"
