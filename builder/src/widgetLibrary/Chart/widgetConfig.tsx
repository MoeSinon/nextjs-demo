import { ReactComponent as ChartWidgetIcon } from "@/assets/widgetCover/chart.svg"
import { WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
import store from "@/store/store"
import { getActionList } from "@/redux/currentApp/action/actionSelector"
const { t } = useTranslation();

export const CHART_WIDGET_CONFIG: WidgetConfig = {
  type: "CHART",
  displayName: "chart",
  widgetName: t("widget.chart.name"),
  keywords: ["Chart", "图表"],
  icon: <ChartWidgetIcon />,
  sessionType: "DATE",
  w: 20,
  h: 40,
  defaults: initChartWidgetDefaultProps,
}

export function initChartWidgetDefaultProps() {
  const rootState = store.getState()
  const actions = getActionList(rootState)
  if (!actions.length) return {}
  const action = actions[0]
  return {
    dataSource: `{{${action.displayName}.data}}`,
    chartType: "bar",
  }
}
