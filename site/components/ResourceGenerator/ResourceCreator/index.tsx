import { FC, useMemo } from "react"
import { ResourceCreatorProps } from "@pages/Dashboard/components/ResourceGenerator/ResourceCreator/interface"
import { MysqlLikeConfigElement } from "@components/Actions/MysqlLikeConfigElement"
import { useSelector } from "react-redux"
import { RootState } from "@store/store"
import { RestApiConfigElement } from "@components/Actions/RestApiConfigElement"
import { RedisConfigElement } from "@components/Actions/RedisConfigElement"
import { MongoDbConfigElement } from "@components/Actions/MongoDbConfigElement"

export const ResourceCreator: FC<ResourceCreatorProps> = (props) => {
  const { resourceType, resourceId, onBack, onFinished } = props
  const resource = useSelector((state: RootState) => {
    return state.resource.find((r) => r.resourceId === resourceId)
  })

  const finalResourceType = resource ? resource.resourceType : resourceType

  const element = useMemo(() => {
    switch (finalResourceType) {
      case "tidb":
      case "mariadb":
      case "mysql":
      case "postgresql":
        return (
          <MysqlLikeConfigElement
            resourceType={finalResourceType}
            resourceId={resourceId}
            onBack={() => {
              onBack("select")
            }}
            onFinished={onFinished}
          />
        )
      case "restapi":
        return (
          <RestApiConfigElement
            resourceId={resourceId}
            onBack={() => {
              onBack("select")
            }}
            onFinished={onFinished}
          />
        )
      case "mongodb":
        return (
          <MongoDbConfigElement
            resourceId={resourceId}
            onBack={() => {
              onBack("select")
            }}
            onFinished={onFinished}
          />
        )
      case "redis":
        return (
          <RedisConfigElement
            resourceId={resourceId}
            onBack={() => {
              onBack("select")
            }}
            onFinished={onFinished}
          />
        )
      default:
        return null
    }
  }, [finalResourceType, onBack, onFinished, resourceId])

  return <>{element}</>
}
