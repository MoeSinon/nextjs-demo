import { ActionType } from "@redux/currentApp/action/actionState"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();

export interface ActionDataItem {
  actionType: ActionType
  isDraft: boolean
}

export const Databases: ActionDataItem[] = [
  {
    actionType: "postgresql",
    isDraft: false,
  },
  {
    actionType: "mysql",
    isDraft: false,
  },
  {
    actionType: "mariadb",
    isDraft: false,
  },
  {
    actionType: "tidb",
    isDraft: false,
  },
  {
    actionType: "redis",
    isDraft: false,
  },
  {
    actionType: "mongodb",
    isDraft: false,
  },
  {
    actionType: "elastic",
    isDraft: true,
  },
  {
    actionType: "snowflake",
    isDraft: true,
  },
]

export const Apis: ActionDataItem[] = [
  {
    actionType: "restapi",
    isDraft: false,
  },
  {
    actionType: "graphql",
    isDraft: true,
  },
  {
    actionType: "s3",
    isDraft: true,
  },
  {
    actionType: "zapier",
    isDraft: true,
  },
  {
    actionType: "datadog",
    isDraft: true,
  },
  {
    actionType: "smtp",
    isDraft: true,
  },
]

export const JsTransformer: ActionDataItem[] = [
  {
    actionType: "transformer",
    isDraft: false,
  },
]

export const ActionTypeList = [
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
  {
    title: t("editor.action.type.js_transformer"),
    item: JsTransformer,
    category: "jsTransformer" as const,
  },
]
