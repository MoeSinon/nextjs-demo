import {
  ActionContent,
  ActionItem,
} from "@redux/currentApp/action/actionState"
import { omit } from "@illa-design/system"
import { DisplayNameGenerator } from "@utils/generators/generateDisplayName"
import { Api } from "@api/base"
import { Message } from "@illa-design/message"
import { useTranslation } from "next-i18next"
import { actionActions } from "@redux/currentApp/action/actionSlice"
import { configActions } from "@redux/config/configSlice"
import store from "@store/store"
import { getAppId } from "@redux/currentApp/appInfo/appInfoSelector"
const { t } = useTranslation()

function getBaseActionUrl() {
  const rootState = store.getState()
  const appId = getAppId(rootState)
  return `/apps/${appId}/actions`
}

export function onCopyActionItem(action: ActionItem<ActionContent>) {
  const baseActionUrl = getBaseActionUrl()
  const newAction = omit(action, ["displayName", "actionId"])
  const displayName = DisplayNameGenerator.generateDisplayName(
    action.actionType,
  )
  const data: Partial<ActionItem<ActionContent>> = {
    ...newAction,
    displayName,
  }



  Api.request(
    {
      url: baseActionUrl,
      method: "POST",
      data,
    },
    ({ data }: { data: ActionItem<ActionContent> }) => {
      Message.success(
        t("editor.action.action_list.message.success_created"),
      )
      store.dispatch(actionActions.addActionItemReducer(data))
      store.dispatch(configActions.changeSelectedAction(data))
    },
    () => {
      Message.error(t("editor.action.action_list.message.failed"))
      DisplayNameGenerator.removeDisplayName(displayName)
    },
    () => {
      DisplayNameGenerator.removeDisplayName(displayName)
    },
    (loading) => { },
  )
}


export function onDeleteActionItem(action: ActionItem<ActionContent>) {
  const baseActionUrl = getBaseActionUrl()
  const { actionId, displayName } = action

  Api.request(
    {
      url: `${baseActionUrl}/${actionId}`,
      method: "DELETE",
    },
    ({ data }: { data: ActionItem<ActionContent> }) => {
      DisplayNameGenerator.removeDisplayName(displayName)
      store.dispatch(actionActions.removeActionItemReducer(displayName))
      Message.success(
        t("editor.action.action_list.message.success_deleted"),
      )
    },
    () => {
      Message.error(
        t("editor.action.action_list.message.failed_to_delete"),
      )
    },
    () => { },
    (loading) => { },
  )
}
