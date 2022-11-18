import { PanelConfig } from "@components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@utils/validationFactory"
import { useTranslation } from "next-i18next"
import { generatorEventHandlerConfig } from "@widgetLibrarys/PublicSector/utils/generatorEventHandlerConfig"
import { BUTTON_EVENT_HANDLER_CONFIG } from "@widgetLibrarys/ButtonWidget/eventHandlerConfig"
const { t } = useTranslation();

const baseWidgetName = "button"
export const BUTTON_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-basic`,
    groupName: t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${baseWidgetName}-basic-Text`,
        labelName: t("editor.inspect.setter_label.text"),
        attrName: "text",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
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
          BUTTON_EVENT_HANDLER_CONFIG.events,
        ),
      },
      {
        id: `${baseWidgetName}-interaction-formId`,
        labelName: t("editor.inspect.setter_label.submit_form"),
        // labelDesc: t("xxxxx"),
        attrName: "formId",
        setterType: "INPUT_SETTER",
        bindAttrName: ["submit"],
        shown: (value) => value === true,
      },
      {
        id: `${baseWidgetName}-interaction-loading`,
        labelName: t("editor.inspect.setter_label.loading"),
        labelDesc: t("editor.inspect.setter_tooltip.loading"),
        attrName: "loading",
        placeholder: "{{false}}",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        bindAttrName: ["submit"],
        shown: (value) => {
          return !value
        },
      },
      {
        id: `${baseWidgetName}-interaction-disabled`,
        labelName: t("editor.inspect.setter_label.disabled"),
        labelDesc: t("editor.inspect.setter_tooltip.disabled"),
        placeholder: "{{false}}",
        attrName: "disabled",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        bindAttrName: ["submit"],
        shown: (value) => !value,
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
        id: `${baseWidgetName}-layout-hidden`,
        setterType: "DYNAMIC_SWITCH_SETTER",
        openDynamic: true,
        labelName: t("editor.inspect.setter_label.hidden"),
        labelDesc: t("editor.inspect.setter_tooltip.hidden"),
        useCustomLayout: true,
        attrName: "hidden",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
  {
    id: `${baseWidgetName}-style`,
    groupName: t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-style-variant`,
        setterType: "RADIO_GROUP_SETTER",
        labelName: t("editor.inspect.setter_label.variant"),
        attrName: "variant",
        options: [
          {
            label: t("editor.inspect.setter_default_value.fill"),
            value: "fill",
          },
          {
            label: t("editor.inspect.setter_default_value.outline"),
            value: "outline",
          },
        ],
      },
      {
        id: `${baseWidgetName}-style-list`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.colors"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-bg`,
            labelName: t("editor.inspect.setter_label.theme_color"),
            setterType: "COLOR_PICKER_SETTER",
            attrName: "colorScheme",
            defaultValue: "blue",
          },
        ],
      },
    ],
  },
]
