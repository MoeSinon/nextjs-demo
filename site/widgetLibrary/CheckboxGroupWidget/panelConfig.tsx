import { PanelConfig } from "@components/InspectPanel/interface"
import { HorizontalEndIcon, HorizontalStartIcon } from "@illa-design/icon"
import { VALIDATION_TYPES } from "@utils/validationFactory"
import { useTranslation } from "next-i18next"
import { generatorEventHandlerConfig } from "@widgetLibrarys/PublicSector/utils/generatorEventHandlerConfig"
import { CHECK_BOX_GROUP_EVENT_HANDLER_CONFIG } from "@widgetLibrarys/CheckboxGroupWidget/eventHandlerConfig"
const { t } = useTranslation();

const baseWidgetName = "checkboxGroup"
export const CHECKBOX_GROUP_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-options`,
    groupName: t("editor.inspect.setter_group.options"),
    children: [
      {
        id: `${baseWidgetName}-options-mode`,
        attrName: "optionConfigureMode",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          {
            label: t("widget.public.select_options.manual"),
            value: "static",
          },
          {
            label: t("widget.public.select_options.mapped"),
            value: "dynamic",
          },
        ],
      },
      {
        id: `${baseWidgetName}-basic-options`,
        useCustomLayout: true,
        attrName: "manualOptions",
        setterType: "OPTION_LIST_SETTER",
        bindAttrName: ["optionConfigureMode"],
        shown: (value) => !value || value === "static",
        childrenSetter: [
          {
            id: `${baseWidgetName}-options-label`,
            labelName: t("editor.inspect.setter_label.label"),
            attrName: "label",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.STRING,
          },
          {
            id: `${baseWidgetName}-options-value`,
            labelName: t("editor.inspect.setter_label.value"),
            attrName: "value",
            setterType: "INPUT_SETTER",
          },
          {
            id: `${baseWidgetName}-options-disabled`,
            labelName: t("editor.inspect.setter_label.disabled"),
            attrName: "disabled",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.BOOLEAN,
          },
        ],
      },
      {
        id: `${baseWidgetName}-options-data-sources`,
        labelName: t("editor.inspect.setter_label.data_sources"),
        attrName: "dataSources",
        setterType: "INPUT_SETTER",
        bindAttrName: ["optionConfigureMode"],
        expectedType: VALIDATION_TYPES.ARRAY,
        shown: (value) => value === "dynamic",
        isSetterSingleRow: true,
      },
      {
        id: `${baseWidgetName}-options-mapped`,
        labelName: t("editor.inspect.setter_label.mapped_option"),
        useCustomLayout: true,
        attrName: "mappedOption",
        setterType: "OPTION_MAPPED_SETTER",
        bindAttrName: ["optionConfigureMode"],
        shown: (value) => value === "dynamic",
        childrenSetter: [
          {
            id: `${baseWidgetName}-mappedOption-labels`,
            labelName: t("editor.inspect.setter_label.label"),
            attrName: "labels",
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            placeholder: "{{item}}",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-mappedOption-values`,
            labelName: t("editor.inspect.setter_label.value"),
            attrName: "values",
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            placeholder: "{{item}}",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-mappedOption-disables`,
            labelName: t("editor.inspect.setter_label.disabled"),
            attrName: "disables",
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            placeholder: "{{false}}",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
        ],
      },
      {
        id: `${baseWidgetName}-options-default-value`,
        labelName: t("editor.inspect.setter_label.default_value"),
        labelDesc: t(
          "editor.inspect.setter_tooltip.component_default_value",
        ),
        attrName: "value",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.ARRAY,
      },
    ],
  },
  {
    id: `${baseWidgetName}-label`,
    groupName: t("editor.inspect.setter_group.label"),
    children: [
      {
        id: `${baseWidgetName}-label-label`,
        labelName: t("editor.inspect.setter_label.label"),
        attrName: "label",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-label-caption`,
        labelName: t("editor.inspect.setter_label.caption"),
        attrName: "labelCaption",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-label-hidden`,
        labelName: t("editor.inspect.setter_label.hidden_label"),
        attrName: "labelHidden",
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
      },
      {
        id: `${baseWidgetName}-label-position`,
        labelName: t("editor.inspect.setter_label.label_position"),
        attrName: "labelPosition",
        setterType: "RADIO_GROUP_SETTER",
        bindAttrName: ["labelHidden"],
        shown: (value) => !value,
        options: [
          { label: t("widget.public.left"), value: "left" },
          { label: t("widget.public.top"), value: "top" },
        ],
      },
      {
        id: `${baseWidgetName}-label-alignment`,
        labelName: t("editor.inspect.setter_label.label_alignment"),
        attrName: "labelAlign",
        setterType: "RADIO_GROUP_SETTER",
        bindAttrName: ["labelHidden"],
        shown: (value) => !value,
        options: [
          {
            label: <HorizontalStartIcon />,
            value: "left",
          },
          {
            label: <HorizontalEndIcon />,
            value: "right",
          },
        ],
      },
      {
        id: `${baseWidgetName}-label-labelWidth`,
        labelName: t("editor.inspect.setter_label.label_width"),
        attrName: "labelWidth",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
        bindAttrName: ["labelHidden"],
        shown: (value) => !value,
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
          CHECK_BOX_GROUP_EVENT_HANDLER_CONFIG.events,
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
  {
    id: `${baseWidgetName}-adornments`,
    groupName: t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: `${baseWidgetName}-adornments-tooltip`,
        labelName: t("editor.inspect.setter_label.tooltip"),
        labelDesc: t("editor.inspect.setter_tooltip.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
    ],
  },
  {
    id: `${baseWidgetName}-validation`,
    groupName: t("editor.inspect.setter_group.validation"),
    children: [
      {
        id: `${baseWidgetName}-validation-required`,
        labelName: t("editor.inspect.setter_label.required_field"),
        labelDesc: t("editor.inspect.setter_tooltip.required_field"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        useCustomLayout: true,
        openDynamic: true,
        attrName: "required",
      },
      {
        id: `${baseWidgetName}-validation-custom`,
        labelName: t("editor.inspect.setter_label.custom_rule"),
        labelDesc: t("editor.inspect.setter_tooltip.custom_rule"),
        setterType: "INPUT_SETTER",
        attrName: "customRule",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-validation-hide-message`,
        labelName: t(
          "editor.inspect.setter_label.hide_validation_message",
        ),
        labelDesc: t(
          "editor.inspect.setter_tooltip.hide_validation_message",
        ),
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        useCustomLayout: true,
        openDynamic: true,
        attrName: "hideValidationMessage",
      },
      {
        id: `${baseWidgetName}-validation-form-data-key`,
        labelName: t("editor.inspect.setter_label.form_data_key"),
        labelDesc: t("editor.inspect.setter_tooltip.form_data_key"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "formDataKey",
      },
    ],
  },
  {
    id: `${baseWidgetName}-layout`,
    groupName: t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: `${baseWidgetName}-layout-hidden`,
        labelName: t("editor.inspect.setter_label.hidden"),
        labelDesc: t("editor.inspect.setter_tooltip.hidden"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "hidden",
        placeholder: "false",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-layout-direction`,
        labelName: t("editor.inspect.setter_label.group_layout"),
        setterType: "RADIO_GROUP_SETTER",
        attrName: "direction",
        options: [
          {
            label: "horizontal",
            value: "horizontal",
          },
          {
            label: "vertical",
            value: "vertical",
          },
        ],
      },
    ],
  },
  {
    id: `${baseWidgetName}-styles`,
    groupName: t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-style`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.colors"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-coloScheme`,
            labelName: t("editor.inspect.setter_label.theme_color"),
            attrName: "colorScheme",
            setterType: "COLOR_PICKER_SETTER",
            defaultValue: "blue",
          },
        ],
      },
    ],
  },
]
