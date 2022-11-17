import { PanelConfig } from "@/components/InspectPanel/interface"
import { useTranslation } from "next-i18next"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { generatorEventHandlerConfig } from "@/widgetLibrary/PublicSector/utils/generatorEventHandlerConfig"
import { ColumnTypeOption } from "@/widgetLibrary/TableWidget/interface"
import { TABLE_EVENT_HANDLER_CONFIG } from "@/widgetLibrary/TableWidget/eventHandlerConfig"
const { t } = useTranslation();
const baseWidgetName = "table"

export const TABLE_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-data`,
    groupName: t("editor.inspect.setter_group.data"),
    children: [
      {
        id: `${baseWidgetName}-basic-data`,
        labelName: t("editor.inspect.setter_label.data"),
        attrName: "data",
        isSetterSingleRow: true,
        setterType: "TABLE_DATA_INPUT_SETTER",
        expectedType: VALIDATION_TYPES.ARRAY,
      },
      {
        id: `${baseWidgetName}-basic-emptyState`,
        labelName: t("editor.inspect.setter_label.empty_state"),
        labelDesc: t("editor.inspect.setter_tooltip.placeholder"),
        attrName: "emptyState",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-basic-loading`,
        labelName: t("editor.inspect.setter_label.loading"),
        labelDesc: t("editor.inspect.setter_tooltip.loading"),
        attrName: "loading",
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        openDynamic: true,
        useCustomLayout: true,
      },
    ],
  },
  {
    id: `${baseWidgetName}-column`,
    groupName: t("editor.inspect.setter_group.column"),
    children: [
      {
        id: `${baseWidgetName}-basic-columns`,
        useCustomLayout: true,
        attrName: "columns",
        setterType: "COLUMN_SETTER",
        openDynamic: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-column-header`,
            labelName: t("editor.inspect.setter_label.column_title"),
            attrName: "header",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.STRING,
          },
          {
            id: `${baseWidgetName}-column-type`,
            labelName: t("editor.inspect.setter_label.column_type"),
            attrName: "type",
            setterType: "BASE_SELECT_SETTER",
            options: ColumnTypeOption,
          },
          {
            id: `${baseWidgetName}-column-decimalPlaces`,
            labelName: t("editor.inspect.setter_label.decimal_places"),
            attrName: "decimalPlaces",
            bindAttrName: ["type"],
            shown: (value) => value === "number" || value === "percent",
            placeholder: "{{ 0 }}",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.NUMBER,
          },
          {
            id: `${baseWidgetName}-column-format`,
            labelName: t("editor.inspect.setter_label.format"),
            attrName: "format",
            bindAttrName: ["type"],
            shown: (value) => value === "date",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.STRING,
          },
          {
            id: `${baseWidgetName}-basic-enableSorting`,
            labelName: t("editor.inspect.setter_label.enable_sorting"),
            attrName: "enableSorting",
            setterType: "DYNAMIC_SWITCH_SETTER",
            expectedType: VALIDATION_TYPES.BOOLEAN,
            openDynamic: true,
            useCustomLayout: true,
          },
        ],
      },
    ],
  },
  {
    id: `${baseWidgetName}-sort`,
    groupName: t("editor.inspect.setter_group.sort"),
    children: [
      {
        id: `${baseWidgetName}-basic-defaultSortKey`,
        labelName: t("editor.inspect.setter_label.default_sort_key"),
        attrName: "defaultSortKey",
        setterType: "COLUMNS_SELECT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        openDynamic: true,
      },
      {
        id: `${baseWidgetName}-basic-defaultSortOrder`,
        labelName: t("editor.inspect.setter_label.default_sort_order"),
        attrName: "defaultSortOrder",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          { label: t("widget.table.ascend"), value: "ascend" },
          { label: t("widget.table.descend"), value: "descend" },
        ],
      },
    ],
  },
  {
    id: `${baseWidgetName}-rowSelection`,
    groupName: t("editor.inspect.setter_group.row_selection"),
    children: [
      {
        id: `${baseWidgetName}-basic-multiRowSelection`,
        labelName: t("editor.inspect.setter_label.multi_row_selection"),
        attrName: "multiRowSelection",
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        openDynamic: true,
        useCustomLayout: true,
      },
    ],
  },
  {
    id: `${baseWidgetName}-PAGINATION`,
    groupName: t("editor.inspect.setter_group.pagination"),
    children: [
      {
        id: `${baseWidgetName}-basic-overFlow`,
        labelName: t("editor.inspect.setter_label.overFlow"),
        attrName: "overFlow",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          { label: t("widget.table.pagination"), value: "pagination" },
          { label: t("widget.table.scroll"), value: "scroll" },
        ],
      },
      {
        id: `${baseWidgetName}-basic-pageSize`,
        labelName: t("editor.inspect.setter_label.pageSize"),
        attrName: "pageSize",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
      },
    ],
  },
  {
    id: `${baseWidgetName}-toolbar`,
    groupName: t("editor.inspect.setter_group.toolbar"),
    children: [
      {
        id: `${baseWidgetName}-basic-download`,
        labelName: t("editor.inspect.setter_label.download"),
        labelDesc: t("editor.inspect.setter_tooltip.download"),
        attrName: "download",
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        openDynamic: true,
        useCustomLayout: true,
      },
      {
        id: `${baseWidgetName}-basic-filter`,
        labelName: t("editor.inspect.setter_label.filter"),
        labelDesc: t("editor.inspect.setter_tooltip.filter"),
        attrName: "filter",
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        openDynamic: true,
        useCustomLayout: true,
      },
    ],
  },
  {
    id: `${baseWidgetName}-interaction`,
    groupName: t("editor.inspect.setter_group.interaction"),
    children: [
      {
        ...generatorEventHandlerConfig(
          baseWidgetName,
          TABLE_EVENT_HANDLER_CONFIG.events,
        ),
      },
      {
        id: `${baseWidgetName}-interaction-disabled`,
        labelName: t("editor.inspect.setter_label.disabled"),
        labelDesc: t("editor.inspect.setter_tooltip.disabled"),
        attrName: "disabled",
        setterType: "INPUT_SETTER",
        placeholder: "{{false}}",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
]
