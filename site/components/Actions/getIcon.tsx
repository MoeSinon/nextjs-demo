import { ResourceType } from "@redux/resource/resourceState"
import { ReactElement } from "react"
import { ActionType } from "@redux/currentApp/action/actionState"
import { MySqlIcon } from "@components/Icons/mysql"
import { RestApiIcon } from "@components/Icons/restapi"
import { MongoDbIcon } from "@components/Icons/mongodb"
import { RedisIcon } from "@components/Icons/redis"
import { PostgreSqlIcon } from "@components/Icons/postgresql"
import { MariaDbIcon } from "@components/Icons/mariadb"
import { SnowflakeIcon } from "@components/Icons/snowflake"
import { TidbIcon } from "@components/Icons/tidb"
import { DataDogIcon } from "@components/Icons/datadog"
import { ZapierIcon } from "@components/Icons/zapier"
import { S3Icon } from "@components/Icons/s3"
import { TransformerIcon } from "@components/Icons/transformer"
import { GraphQLIcon } from "@components/Icons/graphql"
import { ElasticIcon } from "@components/Icons/elastic"
import { SmtpIcon } from "@components/Icons/smtp"

export function getIconFromResourceType(
  type: ResourceType,
  size: string,
): ReactElement | null {
  switch (type) {
    case "graphql":
      return <GraphQLIcon size={size} />
    case "elastic":
      return <ElasticIcon size={size} />
    case "smtp":
      return <SmtpIcon size={size} />
    case "mariadb":
      return <MariaDbIcon size={size} />
    case "snowflake":
      return <SnowflakeIcon size={size} />
    case "tidb":
      return <TidbIcon size={size} />
    case "datadog":
      return <DataDogIcon size={size} />
    case "zapier":
      return <ZapierIcon size={size} />
    case "s3":
      return <S3Icon size={size} />
    case "mysql":
      return <MySqlIcon size={size} />
    case "restapi":
      return <RestApiIcon size={size} />
    case "mongodb":
      return <MongoDbIcon size={size} />
    case "redis":
      return <RedisIcon size={size} />
    case "postgresql":
      return <PostgreSqlIcon size={size} />
  }
  return null
}

export function getIconFromActionType(
  type: ActionType,
  size: string,
): ReactElement | null {
  switch (type) {
    case "graphql":
      return <GraphQLIcon size={size} />
    case "elastic":
      return <ElasticIcon size={size} />
    case "smtp":
      return <SmtpIcon size={size} />
    case "transformer":
      return <TransformerIcon size={size} />
    case "mariadb":
      return <MariaDbIcon size={size} />
    case "snowflake":
      return <SnowflakeIcon size={size} />
    case "tidb":
      return <TidbIcon size={size} />
    case "datadog":
      return <DataDogIcon size={size} />
    case "zapier":
      return <ZapierIcon size={size} />
    case "s3":
      return <S3Icon size={size} />
    case "mysql":
      return <MySqlIcon size={size} />
    case "restapi":
      return <RestApiIcon size={size} />
    case "mongodb":
      return <MongoDbIcon size={size} />
    case "redis":
      return <RedisIcon size={size} />
    case "postgresql":
      return <PostgreSqlIcon size={size} />
  }
  return null
}
