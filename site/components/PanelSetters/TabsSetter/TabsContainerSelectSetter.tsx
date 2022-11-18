import { FC, useCallback, useMemo } from "react"
import { ChartDataSourceSetterProps } from "@components/PanelSetters/ChartSetter/interface"
import { useSelector } from "react-redux"
import { getAllContainerWidget } from "@redux/currentApp/editor/components/componentsSelector"
import { get } from "lodash"
import { BaseSelectSetter } from "@components/PanelSetters/SelectSetter/baseSelect"

export const TabsContainerSelectSetter: FC<ChartDataSourceSetterProps> = (
  props,
) => {
  const {
    value,
    handleUpdateMultiAttrDSL,
    handleUpdateOtherMultiAttrDSL,
    widgetDisplayName,
    attrName,
    allowClear,
    componentNode,
    isSetterSingleRow,
    widgetOrAction,
    widgetType,
    expectedType,
  } = props
  const containers = useSelector(getAllContainerWidget)

  const selectedOptions = useMemo(() => {
    if (!containers) return
    return Object.keys(containers)
  }, [containers])

  const handleUpdateDsl = useCallback(
    (attrName: string, targetDisplayName: string) => {
      try {
        const newList = get(containers, `${targetDisplayName}.viewList`, {})
        const currentIndex = get(
          containers,
          `${targetDisplayName}.currentIndex`,
          0,
        )
        const currentKey = get(
          containers,
          `${targetDisplayName}.currentKey`,
          "",
        )
        handleUpdateMultiAttrDSL?.({
          viewList: newList,
          currentIndex,
          currentKey,
          [attrName]: targetDisplayName,
        })
        if (value) {
          // remove old link
          handleUpdateOtherMultiAttrDSL?.(value, {
            linkWidgetDisplayName: undefined,
          })
        }
        // add new link
        handleUpdateOtherMultiAttrDSL?.(targetDisplayName, {
          linkWidgetDisplayName: widgetDisplayName,
        })
      } catch { }
      handleUpdateMultiAttrDSL?.({
        [attrName]: targetDisplayName,
      })
    },
    [handleUpdateMultiAttrDSL, value],
  )

  return (
    <BaseSelectSetter
      options={selectedOptions}
      expectedType={expectedType}
      value={value}
      allowClear={allowClear}
      attrName={attrName}
      componentNode={componentNode}
      handleUpdateDsl={handleUpdateDsl}
      isSetterSingleRow={isSetterSingleRow}
      widgetDisplayName={widgetDisplayName}
      widgetOrAction={widgetOrAction}
      widgetType={widgetType}
    />
  )
}

TabsContainerSelectSetter.displayName = "TabsContainerSelectSetter"
