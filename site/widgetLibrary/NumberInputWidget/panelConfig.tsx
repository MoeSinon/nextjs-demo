import { HorizontalEndIcon, HorizontalStartIcon } from "@illa-design/icon"
import { PanelConfig } from "@components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@utils/validationFactory"
import { useTranslation } from "next-i18next"
import { generatorEventHandlerConfig } from "@widgetLibrarys/PublicSector/utils/generatorEventHandlerConfig"
import { INPUT_NUMBER_EVENT_HANDLER_CONFIG } from "@widgetLibrarys/NumberInputWidget/eventHandlerConfig"
const { t } = useTranslation();
const widgetBaseName = "number-input"
export const NUMBER_INPUT_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${widgetBaseName}-basic`,
    groupName: t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${widgetBaseName}-basic-default-value`,
        labelName: t("editor.inspect.setter_label.default_value"),
        labelDesc: t("editor.inspect.setter_tooltip.input_default_value"),
        attrName: "value",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
      },
      {
        id: `${widgetBaseName}-basic-placeholder`,
        labelName: t("editor.inspect.setter_label.placeholder"),
        labelDesc: t("editor.inspect.setter_tooltip.placeholder"),
        attrName: "placeholder",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${widgetBaseName}-basic-decimal-place`,
        labelName: t("editor.inspect.setter_label.decimal_place"),
        attrName: "precision",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
      },
      {
        id: `${widgetBaseName}-basic-minimum`,
        labelName: t("editor.inspect.setter_label.minimum"),
        attrName: "min",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
      },
      {
        id: `${widgetBaseName}-basic-maximum  `,
        labelName: t("editor.inspect.setter_label.maximum"),
        attrName: "max",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
      },
      {
        id: `${widgetBaseName}-separator`,
        labelName: t("editor.inspect.setter_label.thousand_separator"),
        attrName: "openThousandSeparator",
        useCustomLayout: true,
        openDynamic: true,
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
  {
    id: `${widgetBaseName}-label`,
    groupName: t("editor.inspect.setter_group.label"),
    children: [
      {
        id: `${widgetBaseName}-label-label`,
        labelName: t("editor.inspect.setter_label.label"),
        attrName: "label",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${widgetBaseName}-label-caption`,
        labelName: t("editor.inspect.setter_label.caption"),
        attrName: "labelCaption",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${widgetBaseName}-label-hidden`,
        labelName: t("editor.inspect.setter_label.hidden_label"),
        attrName: "labelHidden",
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
      },
      {
        id: `${widgetBaseName}-label-position`,
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
        id: `${widgetBaseName}-label-alignment`,
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
        id: `${widgetBaseName}-label-width`,
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
    id: `${widgetBaseName}-interaction`,
    groupName: t("editor.inspect.setter_group.interaction"),
    children: [
      {
        ...generatorEventHandlerConfig(
          widgetBaseName,
          INPUT_NUMBER_EVENT_HANDLER_CONFIG.events,
        ),
      },
      {
        id: `${widgetBaseName}-interaction-loading`,
        labelName: t("editor.inspect.setter_label.loading"),
        labelDesc: t("editor.inspect.setter_tooltip.loading"),
        attrName: "loading",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${widgetBaseName}-interaction-disabled`,
        labelName: t("editor.inspect.setter_label.disabled"),
        labelDesc: t("editor.inspect.setter_tooltip.disabled"),
        attrName: "disabled",
        setterType: "INPUT_SETTER",
        placeholder: "{{false}}",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${widgetBaseName}-interaction-readonly`,
        labelName: t("editor.inspect.setter_label.read_only"),
        labelDesc: t("editor.inspect.setter_tooltip.read_only"),
        attrName: "readOnly",
        setterType: "INPUT_SETTER",
        placeholder: "{{false}}",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
  {
    id: `${widgetBaseName}-adornments`,
    groupName: t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: `${widgetBaseName}-adornments-tooltip`,
        labelName: t("editor.inspect.setter_label.tooltip"),
        labelDesc: t("editor.inspect.setter_tooltip.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${widgetBaseName}-adornments-prefix`,
        labelName: t("editor.inspect.setter_label.prefix_text"),
        attrName: "prefix",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${widgetBaseName}-adornments-suffix`,
        labelName: t("editor.inspect.setter_label.suffix_text"),
        attrName: "suffix",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
    ],
  },
  {
    id: `${widgetBaseName}-validation`,
    groupName: t("editor.inspect.setter_group.validation"),
    children: [
      {
        id: `${widgetBaseName}-validation-required`,
        labelName: t("editor.inspect.setter_label.required_field"),
        labelDesc: t("editor.inspect.setter_tooltip.required_field"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        useCustomLayout: true,
        openDynamic: true,
        attrName: "required",
      },
      {
        id: `${widgetBaseName}-validation-custom`,
        labelName: t("editor.inspect.setter_label.custom_rule"),
        labelDesc: t("editor.inspect.setter_tooltip.custom_rule"),
        setterType: "INPUT_SETTER",
        attrName: "customRule",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${widgetBaseName}-validation-hide-message`,
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
        id: `${widgetBaseName}-validation-form-data-key`,
        labelName: t("editor.inspect.setter_label.form_data_key"),
        labelDesc: t("editor.inspect.setter_tooltip.form_data_key"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "formDataKey",
      },
    ],
  },
  {
    id: `${widgetBaseName}-layout`,
    groupName: t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: `${widgetBaseName}-layout-hidden`,
        labelName: t("editor.inspect.setter_label.hidden"),
        labelDesc: t("editor.inspect.setter_tooltip.hidden"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "hidden",
        placeholder: "false",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
  {
    id: `${widgetBaseName}-styles`,
    groupName: t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${widgetBaseName}-styles-styles`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.colors"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${widgetBaseName}-styles-color`,
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
