import { PanelConfig } from "@components/InspectPanel/interface"
import { useTranslation } from "next-i18next"
import { VALIDATION_TYPES } from "@utils/validationFactory"
import { BarChartIcon, LineChartIcon, ScatterPlotIcon } from "@illa-design/icon"
import {
  chartTypeIconCss,
  chartTypeStringCss,
} from "@components/PanelSetters/ChartSetter/style"
import { CHART_DATASET_AGGREGATION_METHOD } from "@widgetLibrarys/Chart/interface"
const { t } = useTranslation();

const datasetsTypeOption = [
  {
    label: (
      <span>
        <BarChartIcon css={chartTypeIconCss} />
        <span css={chartTypeStringCss}>
          {t("editor.inspect.setter_content.chart_type.bar")}
        </span>
      </span>
    ),
    value: "bar",
  },
  {
    label: (
      <div>
        <LineChartIcon css={chartTypeIconCss} />
        <span css={chartTypeStringCss}>
          {t("editor.inspect.setter_content.chart_type.line")}
        </span>
      </div>
    ),
    value: "line",
  },
  {
    label: (
      <div>
        <ScatterPlotIcon css={chartTypeIconCss} />
        <span css={chartTypeStringCss}>
          {t("editor.inspect.setter_content.chart_type.scatterplot")}
        </span>
      </div>
    ),
    value: "scatter",
  },
]

const aggregationMethodOptions = [
  CHART_DATASET_AGGREGATION_METHOD.SUM,
  CHART_DATASET_AGGREGATION_METHOD.COUNT,
  CHART_DATASET_AGGREGATION_METHOD.MAX,
  CHART_DATASET_AGGREGATION_METHOD.MIN,
  CHART_DATASET_AGGREGATION_METHOD.AVERAGE,
  CHART_DATASET_AGGREGATION_METHOD.MEDIAN,
]

const baseWidgetName = "chart"
export const CHART_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-data`,
    groupName: t("editor.inspect.setter_group.data"),
    children: [
      {
        id: `${baseWidgetName}-data-source`,
        labelName: t("editor.inspect.setter_label.data_source"),
        useCustomLayout: true,
        attrName: "dataSource",
        setterType: "CHART_DATASOURCE_SELECT_SETTER",
      },
      {
        id: `${baseWidgetName}-data-chart-type`,
        labelName: t("editor.inspect.setter_label.chart_type"),
        attrName: "chartType",
        setterType: "CHART_TYPE_SELECT_SETTER",
      },
      {
        id: `${baseWidgetName}-data-x-asis`,
        labelName: t("editor.inspect.setter_label.x_axis_value"),
        isSetterSingleRow: true,
        attrName: "xAxis",
        setterType: "CHART_KEYS_SELECT_SETTER",
        bindAttrName: ["chartType"],
        shown: (chartType: string) => chartType !== "pie",
      },
      {
        id: `${baseWidgetName}-data-value-labels`,
        labelName: t("editor.inspect.setter_label.value_labels"),
        isSetterSingleRow: true,
        attrName: "xAxis",
        setterType: "CHART_KEYS_SELECT_SETTER",
        bindAttrName: ["chartType"],
        shown: (chartType: string) => chartType === "pie",
      },
      {
        id: `${baseWidgetName}-data-group-by`,
        labelName: t("editor.inspect.setter_label.group_by"),
        isSetterSingleRow: true,
        attrName: "groupBy",
        setterType: "CHART_KEYS_SELECT_SETTER",
        allowClear: true,
        bindAttrName: ["chartType"],
        shown: (chartType: string) => chartType !== "pie",
      },
      {
        id: `${baseWidgetName}-data-datasets`,
        labelName: t("editor.inspect.setter_label.datasets"),
        useCustomLayout: true,
        attrName: "datasets",
        setterType: "CHART_DATASETS_SETTER",
        bindAttrName: ["chartType"],
        shown: (chartType: string) => chartType !== "pie",
        childrenSetter: [
          {
            id: `${baseWidgetName}-datasets-name`,
            labelName: t("editor.inspect.setter_label.dataset.name"),
            isSetterSingleRow: true,
            attrName: "datasetName",
            setterType: "INPUT_SETTER",
          },
          {
            id: `${baseWidgetName}-datasets-value`,
            labelName: t("editor.inspect.setter_label.dataset.value"),
            isSetterSingleRow: true,
            attrName: "datasetValues",
            setterType: "CHART_KEYS_SELECT_SETTER",
          },
          {
            id: `${baseWidgetName}-aggregation-method`,
            labelName: t(
              "editor.inspect.setter_label.dataset.aggregation_method",
            ),
            isSetterSingleRow: true,
            attrName: "aggregationMethod",
            setterType: "BASE_SELECT_SETTER",
            options: aggregationMethodOptions,
          },
          {
            id: `${baseWidgetName}-chart-type`,
            labelName: t("editor.inspect.setter_label.chart_type"),
            isSetterSingleRow: true,
            attrName: "type",
            setterType: "BASE_SELECT_SETTER",
            options: datasetsTypeOption,
          },
          {
            id: `${baseWidgetName}-color`,
            labelName: t("editor.inspect.setter_label.color"),
            isSetterSingleRow: true,
            attrName: "color",
            setterType: "CHART_COLOR_SELECT_SETTER",
          },
        ],
      },
      {
        id: `${baseWidgetName}-data-datasets-bar`,
        labelName: t("editor.inspect.setter_label.datasets"),
        useCustomLayout: true,
        attrName: "datasets",
        setterType: "CHART_DATASETS_SETTER",
        bindAttrName: ["chartType"],
        shown: (chartType: string) => chartType === "pie",
        childrenSetter: [
          {
            id: `${baseWidgetName}-datasets-name`,
            labelName: t("editor.inspect.setter_label.dataset.name"),
            isSetterSingleRow: true,
            attrName: "datasetName",
            setterType: "INPUT_SETTER",
          },
          {
            id: `${baseWidgetName}-datasets-value`,
            labelName: t("editor.inspect.setter_label.dataset.value"),
            isSetterSingleRow: true,
            attrName: "datasetValues",
            setterType: "CHART_KEYS_SELECT_SETTER",
          },
          {
            id: `${baseWidgetName}-aggregation-method`,
            labelName: t(
              "editor.inspect.setter_label.dataset.aggregation_method",
            ),
            isSetterSingleRow: true,
            attrName: "aggregationMethod",
            setterType: "BASE_SELECT_SETTER",
            options: aggregationMethodOptions,
          },
          {
            id: `${baseWidgetName}-color`,
            labelName: t("editor.inspect.setter_label.color"),
            isSetterSingleRow: true,
            attrName: "color",
            setterType: "CHART_COLOR_SELECT_SETTER",
          },
        ],
      },
    ],
  },
  {
    id: `${baseWidgetName}-adornments`,
    groupName: t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: `${baseWidgetName}-adornments-tooltip`,
        labelName: t("editor.inspect.setter_label.tooltip"),
        labelDesc: t("editor.inspect.setter_tooltip.tooltip"),
        attrName: "tooltipText",
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: `${baseWidgetName}-layout`,
    groupName: t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: `${baseWidgetName}-layout-title`,
        labelName: t("editor.inspect.setter_label.chart_title"),
        attrName: "chartTitle",
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
      },
      {
        id: `${baseWidgetName}-layout-x-axis`,
        labelName: t("editor.inspect.setter_label.x_axis_name"),
        attrName: "xAxisName",
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
      },
      {
        id: `${baseWidgetName}-layout-y-axis`,
        labelName: t("editor.inspect.setter_label.y_axis_name"),
        attrName: "yAxisName",
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
      },
    ],
  },
  // {
  //   id: `${baseWidgetName}-interaction`,
  //   groupName: t("editor.inspect.setter_group.adornments"),
  //   children: [
  //     {
  //       id: `${baseWidgetName}-adornments-tooltip`,
  //       labelName: t("editor.inspect.setter_label.tooltip"),
  //       labelDesc: t("editor.inspect.setter_tooltip.tooltip"),
  //       attrName: "tooltipText",
  //       expectedType: VALIDATION_TYPES.STRING,
  //       setterType: "INPUT_SETTER",
  //     },
  //   ],
  // },
]
