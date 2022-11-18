import { FC, useCallback, useMemo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@store/store"
import { get, isEqual } from "lodash"
import { getExecutionResult } from "@redux/currentApp/executionTree/executionSelector"
import { TableDataInputSetterProps } from "./interface"
import { BaseInput } from "@components/PanelSetters/InputSetter/baseInput"
import { tansTableDataToColumns } from "@widgetLibrarys/TableWidget/utils"
import { evaluateDynamicString } from "@utils/evaluateDynamicString"
import { BUILDER_CALC_CONTEXT } from "@pages/App/context/globalDataProvider"

export const TableDataInputSetter: FC<TableDataInputSetterProps> = (props) => {
  const {
    widgetDisplayName,
    attrName,
    isSetterSingleRow,
    widgetOrAction,
    widgetType,
    expectedType,
    value,
    placeholder,
    isInList,
    handleUpdateMultiAttrDSL,
  } = props

  const targetComponentProps = useSelector<RootState, Record<string, any>>(
    (rootState) => {
      const executionTree = getExecutionResult(rootState)
      return get(executionTree, widgetDisplayName, {})
    },
  )

  const columns = useMemo(() => {
    return get(targetComponentProps, "columns", [])
  }, [targetComponentProps])

  const handleUpdateDsl = useCallback(
    (attrName: string, newValue: any) => {
      try {
        const data = evaluateDynamicString("", newValue, BUILDER_CALC_CONTEXT)
        let newColumns = tansTableDataToColumns(data)
        if (!isEqual(newColumns, columns)) {
          handleUpdateMultiAttrDSL?.({
            columns: newColumns,
            [attrName]: newValue,
          })
          return
        }
      } catch { }
      handleUpdateMultiAttrDSL?.({
        [attrName]: newValue,
      })
    },
    [columns, handleUpdateMultiAttrDSL],
  )

  return (
    <BaseInput
      attrName={attrName}
      handleUpdateDsl={handleUpdateDsl}
      value={value}
      placeholder={placeholder}
      expectedType={expectedType}
      widgetDisplayName={widgetDisplayName}
      widgetOrAction={widgetOrAction}
      widgetType={widgetType}
      isInList={isInList}
      isSetterSingleRow={isSetterSingleRow}
    />
  )
}

TableDataInputSetter.displayName = "TableDataInputSetter"
