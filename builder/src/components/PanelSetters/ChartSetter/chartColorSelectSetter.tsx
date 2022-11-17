import { FC, useMemo } from "react"
import { Select } from "@illa-design/select"
import { ChartColorSelectSetterProps } from "./interface"
import { applyBaseSelectWrapperStyle } from "@/components/PanelSetters/SelectSetter/style"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { getExecutionResult } from "@/redux/currentApp/executionTree/executionSelector"
import { get } from "lodash"
import {
  CHART_COLOR_TYPE_CONFIG,
  CHART_COLOR_TYPE_CONFIG_KEYS,
  ColorArea,
} from "@/components/PanelSetters/ChartSetter/chartDatasetsSetter/listItem"
import { chartColorLabelStyle } from "@/components/PanelSetters/ChartSetter/style"

interface CHartColorLabelProps {
  color: string
}

export const ChartColorLabel: FC<CHartColorLabelProps> = (props) => {
  const { color } = props
  return (
    <div css={chartColorLabelStyle}>
      <ColorArea color={color} />
      {color}
    </div>
  )
}

export const ChartColorSelectSetter: FC<ChartColorSelectSetterProps> = (
  props,
) => {
  const {
    isSetterSingleRow,
    attrName,
    handleUpdateDsl,
    value,
    widgetDisplayName,
  } = props

  const targetComponentProps = useSelector<RootState, Record<string, any>>(
    (rootState) => {
      const executionTree = getExecutionResult(rootState)
      return get(executionTree, widgetDisplayName, {})
    },
  )

  const chartType = useMemo(() => {
    return get(targetComponentProps, "chartType", "bar")
  }, [targetComponentProps])

  const isCanGroupBy = useMemo(() => {
    return !!get(targetComponentProps, "groupBy", "")
  }, [targetComponentProps])

  const options = useMemo(() => {
    if (isCanGroupBy || chartType === "pie") {
      return CHART_COLOR_TYPE_CONFIG_KEYS.map((key) => {
        return {
          label: <ChartColorLabel color={key} />,
          value: key,
        }
      })
    }
    return CHART_COLOR_TYPE_CONFIG["illa-preset"].map((key) => {
      return {
        label: <ChartColorLabel color={key} />,
        value: key,
      }
    })
  }, [chartType, isCanGroupBy])

  return (
    <div css={applyBaseSelectWrapperStyle(isSetterSingleRow)}>
      <Select
        options={options}
        size="medium"
        value={value}
        colorScheme="techPurple"
        onChange={(value) => {
          handleUpdateDsl(attrName, value)
        }}
      />
    </div>
  )
}

ChartColorSelectSetter.displayName = "BaseSelect"
