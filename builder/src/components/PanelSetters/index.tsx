import { OptionListSetter } from "@/components/PanelSetters/OptionListSetter"
import { MappedOptionSetter } from "@/components/PanelSetters/MappedOptionSetter"
import { SearchSelectSetter } from "@/components/PanelSetters/SelectSetter/searchSelect"
import { EventTargetWidgetSelect } from "@/components/PanelSetters/SelectSetter/eventTargetWidgetSelect"
import { EventTargetActionSelect } from "@/components/PanelSetters/SelectSetter/eventTargetActionSelect"
import { OptionMappedInputSetter } from "@/components/PanelSetters/InputSetter/optionMappedInputSetter"
import { EventHandlerSetter } from "@/components/PanelSetters/EventHandlerSetter"
import { EventWidgetMethodSelect } from "@/components/PanelSetters/SelectSetter/eventWidgetMethodSelect"
import { EventActionTypeSelect } from "@/components/PanelSetters/SelectSetter/eventActionTypeSelect"
import { ColorPickerSetter } from "@/components/PanelSetters/ColorPickerSetter"
import { EditableInputSetter } from "@/components/PanelSetters/InputSetter/editableInputSetter"
import { BaseRadioGroupSetter } from "@/components/PanelSetters/RadioGroupSetter/baseRadioGroup"
import { BaseSwitchSetter } from "@/components/PanelSetters/SwitchSetter/baseSwitch"
import { BaseInput } from "@/components/PanelSetters/InputSetter/baseInput"
import { ListSetter } from "@/components/PanelSetters/ListSetter"
import { DynamicSwitchSetter } from "@/components/PanelSetters/SwitchSetter/dynamicSwitch"
import { BaseSelectSetter } from "@/components/PanelSetters/SelectSetter/baseSelect"
import { CalcSelfInput } from "@/components/PanelSetters/InputSetter/calcSelfInput"
import { BaseDynamicSelect } from "@/components/PanelSetters/SelectSetter/baseDynamicSelect"
import { ChartDataSourceSetter } from "@/components/PanelSetters/ChartSetter/chartDataSource"
import { ChartKeysSelectSetter } from "@/components/PanelSetters/ChartSetter/chartKeysSelectSetter"
import { ChartDatasetsSetter } from "@/components/PanelSetters/ChartSetter/chartDatasetsSetter"
import { ChartColorSelectSetter } from "@/components/PanelSetters/ChartSetter/chartColorSelectSetter"
import { ChartTypeSelectSetter } from "@/components/PanelSetters/ChartSetter/chartTypeSelectSetter"
import { ColumnSetter } from "@/components/PanelSetters/TableSetter/ColumnSetter"
import { ColumnsSelectSetter } from "@/components/PanelSetters/TableSetter/columsSelectSetter"
import { TableDataInputSetter } from "@/components/PanelSetters/TableSetter/tableDataInputSetter"
import { ViewsSetter } from "@/components/PanelSetters/ContainerSetter/ViewsSetter"
import { ContainerDefaultViewKeySetter } from "@/components/PanelSetters/ContainerSetter/defaultViewKeySetter"
import { TabListSetter } from "@/components/PanelSetters/TabsSetter/TabListSetter"
import { TabsContainerSelectSetter } from "@/components/PanelSetters/TabsSetter/TabsContainerSelectSetter"
import { TabsDefaultKeySetter } from "@/components/PanelSetters/TabsSetter/defaultTabKeySetter"
import { MenuOptionSetter } from "@/components/PanelSetters/MenuSetter/MenuOptionSetter"
import { EventTargetPageSelect } from "./SelectSetter/pageSelect"
import { EventTargetViewSelect } from "./SelectSetter/eventBodyViewSelect"

const SetterTypeMapSetter = {
  INPUT_SETTER: BaseInput,
  RADIO_GROUP_SETTER: BaseRadioGroupSetter,
  SWITCH_SETTER: BaseSwitchSetter,
  SEARCH_SELECT_SETTER: SearchSelectSetter,
  LIST_SETTER: ListSetter,
  CALC_SELF_INPUT_SETTER: CalcSelfInput,
  DYNAMIC_SWITCH_SETTER: DynamicSwitchSetter,
  BASE_SELECT_SETTER: BaseSelectSetter,
  COLOR_PICKER_SETTER: ColorPickerSetter,
  OPTION_LIST_SETTER: OptionListSetter,
  COLUMN_SETTER: ColumnSetter,
  COLUMNS_SELECT_SETTER: ColumnsSelectSetter,
  TABS_LIST_SETTER: TabListSetter,
  TABS_DEFAULT_KEY_SETTER: TabsDefaultKeySetter,
  TABS_CONTAINER_SELECT_SETTER: TabsContainerSelectSetter,
  TABLE_DATA_INPUT_SETTER: TableDataInputSetter,
  OPTION_MAPPED_SETTER: MappedOptionSetter,
  EVENT_HANDLER_SETTER: EventHandlerSetter,
  EVENT_TARGET_SELECT_SETTER: EventTargetWidgetSelect,
  EVENT_TARGET_ACTION_SELECT_SETTER: EventTargetActionSelect,
  EVENT_TARGET_PAGE_SELECT_SETTER: EventTargetPageSelect,
  EVENT_TARGET_VIEW_PATH_SELECT_SETTER: EventTargetViewSelect,
  OPTION_MAPPED_INPUT_SETTER: OptionMappedInputSetter,
  EVENT_WIDGET_METHOD_SELECT_SETTER: EventWidgetMethodSelect,
  EVENT_ACTION_SELECT_SETTER: EventActionTypeSelect,
  EDITABLE_INPUT_SETTER: EditableInputSetter,
  BASE_DYNAMIC_SELECT_SETTER: BaseDynamicSelect,
  CHART_DATASOURCE_SELECT_SETTER: ChartDataSourceSetter,
  CHART_KEYS_SELECT_SETTER: ChartKeysSelectSetter,
  CHART_DATASETS_SETTER: ChartDatasetsSetter,
  CHART_COLOR_SELECT_SETTER: ChartColorSelectSetter,
  CHART_TYPE_SELECT_SETTER: ChartTypeSelectSetter,
  CONTAINER_VIEW_SETTER: ViewsSetter,
  CONTAINER_DEFAULT_VIEW_SETTER: ContainerDefaultViewKeySetter,
  MENU_OPTION_SETTER: MenuOptionSetter,
}

export type SetterType = keyof typeof SetterTypeMapSetter

export const getSetterByType = (type: SetterType) => {
  return SetterTypeMapSetter[type]
}
