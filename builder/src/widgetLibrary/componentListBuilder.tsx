import { widgetBuilder, WidgetType, WidgetTypeList } from "./widgetBuilder"
import { WidgetCardInfo, WidgetConfig } from "./interface"
import { useTranslation } from "next-i18next"
import {
  ComponentSessionProps,
  NewTypeMapComponent,
} from "@/components/ComponentPanel/interface"
const { t } = useTranslation();

export type SessionType = keyof typeof sessionTypeMapSessionNameKey

export const sessionTypeMapSessionNameKey = {
  COMMON: t("editor.widget_picker.sessions.commonly"),
  INPUTS: t("editor.widget_picker.sessions.inputs"),
  SELECT: t("editor.widget_picker.sessions.selects"),
  CALENDAR: t("editor.widget_picker.sessions.calendar"),
  PRESENTATION: t("editor.widget_picker.sessions.presentation"),
  DATE: t("editor.widget_picker.sessions.data"),
  CONTAINER: t("editor.widget_picker.sessions.container"),
  NAVIGATION: t("editor.widget_picker.sessions.navigation"),
}

const COMMONLY_WIDGET = new Set([
  "TABLE_WIDGET",
  "TEXT_WIDGET",
  "BUTTON_WIDGET",
  "INPUT_WIDGET",
  "NUMBER_INPUT_WIDGET",
  "SELECT_WIDGET",
  "CONTAINER_WIDGET",
  "FORM_WIDGET",
  "MODAL_WIDGET",
  "CHART_WIDGET",
  "IMAGE_WIDGET",
  "NAVIGATION_WIDGET",
])

const getListItemConfig = (type: WidgetType): WidgetConfig => {
  return widgetBuilder(type).config
}

const translateChildren = (componentConfigs: WidgetConfig[]) => {
  const sessionConfigs: NewTypeMapComponent = {
    COMMON: [],
    INPUTS: [],
    SELECT: [],
    CALENDAR: [],
    PRESENTATION: [],
    DATE: [],
    CONTAINER: [],
    NAVIGATION: [],
  }
  componentConfigs.forEach((item) => {
    const { sessionType = "COMMON", type, displayName } = item
    if (!sessionConfigs[sessionType]) {
      sessionConfigs[sessionType] = []
    }
    const childrenConfig: WidgetCardInfo = {
      id: `${sessionType}-${type}-${displayName}`,
      ...item,
    }
    if (COMMONLY_WIDGET.has(type as string)) {
      sessionConfigs.COMMON.push(childrenConfig)
    }
    sessionConfigs[sessionType].push(childrenConfig)
  })
  return sessionConfigs
}

const buildSessionTypeMapComponentConfig = (): NewTypeMapComponent => {
  const componentConfigs = WidgetTypeList.map((item) => {
    return getListItemConfig(item) as WidgetConfig
  }) as WidgetConfig[]
  return translateChildren(componentConfigs)
}

export const buildComponentList = (): ComponentSessionProps[] => {
  const configs = buildSessionTypeMapComponentConfig()
  const keys = Object.keys(configs) as SessionType[]
  return keys.map((key) => {
    return {
      title: sessionTypeMapSessionNameKey[key],
      widgetCardInfos: configs[key],
    }
  })
}
