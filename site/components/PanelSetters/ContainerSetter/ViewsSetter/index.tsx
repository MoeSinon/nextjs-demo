import { FC, memo, useCallback, useMemo } from "react"
import { Header } from "@components/PanelSetters/ContainerSetter/ViewsSetter/header"
import {
  ViewItemShape,
  ViewSetterProps,
} from "@components/PanelSetters/ContainerSetter/ViewsSetter/interface"
import { generateNewViewItem } from "@components/PanelSetters/ContainerSetter/ViewsSetter/utils/generateNewOptions"
import { ListBody } from "@components/PanelSetters/ContainerSetter/ViewsSetter/listBody"
import { ViewListSetterProvider } from "@components/PanelSetters/ContainerSetter/ViewsSetter/context/viewsListContext"
import { get } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { getExecutionResult } from "@redux/currentApp/executionTree/executionSelector"
import {
  setterPublicWrapper,
  viewSetterWrapperStyle,
} from "@components/PanelSetters/ContainerSetter/ViewsSetter/style"
import { generateComponentNode } from "@utils/generators/generateComponentNode"
import { BasicContainerConfig } from "@widgetLibrarys/BasicContainer/BasicContainer"
import { componentsActions } from "@redux/currentApp/editor/components/componentsSlice"
import store, { RootState } from "@store/store"
import { useTranslation } from "next-i18next"
import {
  getCanvas,
  searchDsl,
} from "@redux/currentApp/editor/components/componentsSelector"
import { ComponentNode } from "@redux/currentApp/editor/components/componentsState"

export const ViewsSetter: FC<ViewSetterProps> = memo(
  (props: ViewSetterProps) => {
    const {
      value,
      attrName,
      widgetDisplayName,
      childrenSetter,
      handleUpdateMultiAttrDSL,
      handleUpdateOtherMultiAttrDSL,
      componentNode,
    } = props
    const { t } = useTranslation()
    const executionResult = useSelector(getExecutionResult)

    const dispatch = useDispatch()

    const targetComponentProps = useSelector<RootState, Record<string, any>>(
      (rootState) => {
        const executionTree = getExecutionResult(rootState)
        return get(executionTree, widgetDisplayName, {})
      },
    )

    const linkWidgetDisplayName = useMemo(() => {
      return get(targetComponentProps, "linkWidgetDisplayName", "") as string
    }, [targetComponentProps])

    const allViews = useMemo(() => {
      return get(
        executionResult,
        `${widgetDisplayName}.${attrName}`,
        [],
      ) as ViewItemShape[]
    }, [attrName, executionResult, widgetDisplayName])

    const allViewsKeys = useMemo(() => {
      return allViews.map((view) => view.key)
    }, [allViews])

    const updateMultiAttrDSL = useCallback(
      (updateSlice) => {
        handleUpdateMultiAttrDSL?.(updateSlice)
        if (linkWidgetDisplayName) {
          handleUpdateOtherMultiAttrDSL?.(linkWidgetDisplayName, updateSlice)
        }
      },
      [
        handleUpdateMultiAttrDSL,
        handleUpdateOtherMultiAttrDSL,
        linkWidgetDisplayName,
      ],
    )

    const handleUpdateDsl = useCallback(
      (attrName: string, value: any) => {
        handleUpdateMultiAttrDSL?.({
          [attrName]: value,
        })
        if (linkWidgetDisplayName) {
          handleUpdateOtherMultiAttrDSL?.(linkWidgetDisplayName, {
            [attrName]: value,
          })
        }
      },
      [
        handleUpdateMultiAttrDSL,
        handleUpdateOtherMultiAttrDSL,
        linkWidgetDisplayName,
      ],
    )

    const _componentNode = useMemo(() => {
      if (componentNode.type === "CONTAINER_WIDGET") {
        return componentNode
      }
      const finalNode = searchDsl(
        getCanvas(store.getState()),
        linkWidgetDisplayName,
      )
      if (finalNode?.type === "CONTAINER_WIDGET") return finalNode
      return {} as ComponentNode
    }, [componentNode, linkWidgetDisplayName])

    const handleAddViewItem = useCallback(() => {
      const newItem = generateNewViewItem(allViewsKeys)
      const newChildrenNodes = generateComponentNode(
        BasicContainerConfig,
        _componentNode?.displayName,
      )
      handleUpdateMultiAttrDSL?.({
        [attrName]: [...value, newItem],
      })
      if (linkWidgetDisplayName) {
        handleUpdateOtherMultiAttrDSL?.(linkWidgetDisplayName, {
          [attrName]: [...value, newItem],
        })
      }
      dispatch(componentsActions.addComponentReducer([newChildrenNodes]))
    }, [
      allViewsKeys,
      _componentNode?.displayName,
      handleUpdateMultiAttrDSL,
      attrName,
      value,
      linkWidgetDisplayName,
      dispatch,
      handleUpdateOtherMultiAttrDSL,
    ])

    return (
      <ViewListSetterProvider
        viewsList={value}
        childrenSetter={childrenSetter || []}
        widgetDisplayName={widgetDisplayName}
        attrPath={attrName}
        handleUpdateDsl={handleUpdateDsl}
        handleUpdateMultiAttrDSL={updateMultiAttrDSL}
        handleUpdateOtherMultiAttrDSL={handleUpdateOtherMultiAttrDSL}
        componentNode={_componentNode}
      >
        <div css={setterPublicWrapper}>
          <div css={viewSetterWrapperStyle}>
            <Header
              labelName={t("editor.inspect.setter_content.view_setter.views")}
              addAction={handleAddViewItem}
              hasAddAction
            />
            <ListBody />
          </div>
        </div>
      </ViewListSetterProvider>
    )
  },
)

ViewsSetter.displayName = "ViewsSetter"
