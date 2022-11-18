import { FC, ReactNode, useMemo } from "react"
import { ResourceEditorProps } from "./interface"
import { useSelector } from "react-redux"
import { getAllResources } from "@redux/resource/resourceSelector"
import { MysqlLikeConfigElement } from "@components/Actions/MysqlLikeConfigElement"
import { RestApiConfigElement } from "@components/Actions/RestApiConfigElement"
import { MongoDbConfigElement } from "@components/Actions/MongoDbConfigElement"
import { RedisConfigElement } from "@components/Actions/RedisConfigElement"

export const ActionResourceCreator: FC<ResourceEditorProps> = (props) => {
  const { onBack, onFinished, resourceType } = props

  const resourceList = useSelector(getAllResources)
    .filter((r) => r.resourceType == resourceType)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

  let renderElement: ReactNode | null = useMemo(() => {
    switch (resourceType) {
      case "tidb":
      case "mariadb":
      case "mysql":
      case "postgresql":
        return (
          <MysqlLikeConfigElement
            resourceType={resourceType}
            onBack={() => {
              if (resourceList.length > 0) {
                onBack("createAction")
              } else {
                onBack("select")
              }
            }}
            onFinished={onFinished}
          />
        )
      case "restapi":
        return (
          <RestApiConfigElement
            onBack={() => {
              if (resourceList.length > 0) {
                onBack("createAction")
              } else {
                onBack("select")
              }
            }}
            onFinished={onFinished}
          />
        )
      case "mongodb":
        return (
          <MongoDbConfigElement
            onBack={() => {
              if (resourceList.length > 0) {
                onBack("createAction")
              } else {
                onBack("select")
              }
            }}
            onFinished={onFinished}
          />
        )
      case "redis":
        return (
          <RedisConfigElement
            onBack={() => {
              if (resourceList.length > 0) {
                onBack("createAction")
              } else {
                onBack("select")
              }
            }}
            onFinished={onFinished}
          />
        )
      default:
        return null
    }
  }, [onBack, onFinished, resourceList.length, resourceType])

  return <>{renderElement}</>
}

ActionResourceCreator.displayName = "ActionResourceCreator"
