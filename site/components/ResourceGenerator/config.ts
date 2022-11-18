import { useTranslation } from "next-i18next"
import { ResourceType } from "@redux/resource/resourceState"
const { t } = useTranslation();

export interface ResourceDataItem {
  resourceType: ResourceType
  isDraft: boolean
}

export const Databases: ResourceDataItem[] = [
  {
    resourceType: "postgresql",
    isDraft: false,
  },
  {
    resourceType: "mysql",
    isDraft: false,
  },
  {
    resourceType: "mariadb",
    isDraft: false,
  },
  {
    resourceType: "tidb",
    isDraft: false,
  },
  {
    resourceType: "redis",
    isDraft: false,
  },
  {
    resourceType: "mongodb",
    isDraft: false,
  },
  {
    resourceType: "elastic",
    isDraft: true,
  },
  {
    resourceType: "snowflake",
    isDraft: true,
  },
]

export const Apis: ResourceDataItem[] = [
  {
    resourceType: "restapi",
    isDraft: false,
  },
  {
    resourceType: "graphql",
    isDraft: true,
  },
  {
    resourceType: "s3",
    isDraft: true,
  },
  {
    resourceType: "zapier",
    isDraft: true,
  },
  {
    resourceType: "datadog",
    isDraft: true,
  },
  {
    resourceType: "smtp",
    isDraft: true,
  },
]

export const ResourceTypeList = [
  {
    title: t("editor.action.type.database"),
    item: Databases,
    category: "databases" as const,
  },
  {
    title: t("editor.action.type.api"),
    item: Apis,
    category: "apis" as const,
  },
]
