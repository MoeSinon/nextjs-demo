import { HorizontalStartIcon, HorizontalEndIcon } from "@illa-design/icon"
import { PanelConfig } from "@components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@utils/validationFactory"
import { useTranslation } from "next-i18next"
import { generatorEventHandlerConfig } from "@widgetLibrarys/PublicSector/utils/generatorEventHandlerConfig"
import { EDITABLE_EVENT_HANDLER_CONFIG } from "@widgetLibrarys/EditableWidget/eventHandlerConfig"
const { t } = useTranslation();

const baseWidgetName = "editable-text"
export const EDITABLE_TEXT_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-basic`,
    groupName: t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${baseWidgetName}-basic-defaultValue`,
        labelName: t("editor.inspect.setter_label.default_value"),
        labelDesc: t(
          "editor.inspect.setter_tooltip.component_default_value",
        ),
        attrName: "value",
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
      },
      {
        id: `${baseWidgetName}-basic-placeholder`,
        labelName: t("editor.inspect.setter_label.placeholder"),
        labelDesc: t("editor.inspect.setter_tooltip.placeholder"),
        attrName: "placeholder",
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
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
        expectedType: VALIDATION_TYPES.STRING,
        setterType: "INPUT_SETTER",
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
        id: `${baseWidgetName}-label-label-width`,
        labelName: t("editor.inspect.setter_label.label_width"),
        attrName: "labelWidth",
        expectedType: VALIDATION_TYPES.NUMBER,
        setterType: "INPUT_SETTER",
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
          EDITABLE_EVENT_HANDLER_CONFIG.events,
        ),
      },
      {
        id: `${baseWidgetName}-interaction-disabled`,
        labelName: t("editor.inspect.setter_label.disabled"),
        labelDesc: t("editor.inspect.setter_tooltip.disabled"),
        attrName: "disabled",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        placeholder: "{{false}}",
      },
      {
        id: `${baseWidgetName}-interaction-readonly`,
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
    id: `${baseWidgetName}-Adornments`,
    groupName: t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: `${baseWidgetName}-adornments-showClear`,
        labelName: t("editor.inspect.setter_label.show_clear_button"),
        attrName: "allowClear",
        useCustomLayout: true,
        openDynamic: true,
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-adornments-showChartCount`,
        labelName: t("editor.inspect.setter_label.show_character_count"),
        attrName: "showCharacterCount",
        useCustomLayout: true,
        setterType: "DYNAMIC_SWITCH_SETTER",
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-adornments-prefixText`,
        labelName: t("editor.inspect.setter_label.prefix_text"),
        attrName: "prefixText",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-adornments-suffixText`,
        labelName: t("editor.inspect.setter_label.suffix_text"),
        attrName: "suffixText",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
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
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
        useCustomLayout: true,
        attrName: "required",
      },
      {
        id: `${baseWidgetName}-validation-pattern`,
        labelName: t("editor.inspect.setter_label.pattern"),
        setterType: "SEARCH_SELECT_SETTER",
        attrName: "pattern",
        options: [
          {
            label: t(
              "editor.inspect.setter_default_value.validation_pattern.email",
            ),
            value: "Email",
          },
          {
            label: t(
              "editor.inspect.setter_default_value.validation_pattern.url",
            ),
            value: "URL",
          },
          {
            label: t(
              "editor.inspect.setter_default_value.validation_pattern.regex",
            ),
            value: "Regex",
          },
        ],
      },
      {
        id: `${baseWidgetName}-validation-regex`,
        labelName: t("editor.inspect.setter_label.regex"),
        setterType: "INPUT_SETTER",
        attrName: "regex",
        bindAttrName: ["pattern"],
        expectedType: VALIDATION_TYPES.STRING,
        shown: (value) => value === "Regex",
      },
      {
        id: `${baseWidgetName}-validation-max`,
        labelName: t("editor.inspect.setter_label.max_length"),
        setterType: "INPUT_SETTER",
        attrName: "maxLength",
        expectedType: VALIDATION_TYPES.NUMBER,
      },
      {
        id: `${baseWidgetName}-validation-min`,
        labelName: t("editor.inspect.setter_label.min_length"),
        setterType: "INPUT_SETTER",
        attrName: "minLength",
        expectedType: VALIDATION_TYPES.NUMBER,
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
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
        useCustomLayout: true,
        attrName: "hideValidationMessage",
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
    ],
  },
  {
    id: `${baseWidgetName}-style`,
    groupName: t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-style-colors`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.colors"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-color`,
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
