import {
  HorizontalCenterIcon,
  HorizontalEndIcon,
  HorizontalStartIcon,
  VerticalEndIcon,
  VerticalStartIcon,
} from "@illa-design/icon"
import { PanelConfig } from "@/components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { useTranslation } from "next-i18next"
import { generatorEventHandlerConfig } from "@/widgetLibrary/PublicSector/utils/generatorEventHandlerConfig"
import { TABS_EVENT_HANDLER_CONFIG } from "@/widgetLibrary/TabsWidget/eventHandlerConfig"
const { t } = useTranslation();
const baseWidgetName = "tabs"
export const TABS_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-tabs`,
    groupName: t("editor.inspect.setter_group.tabs"),
    children: [
      {
        id: `${baseWidgetName}-linkContainer`,
        labelName: t("editor.inspect.setter_label.link_to_container"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "navigateContainer",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-column-decimalPlaces`,
        labelName: t("editor.inspect.setter_label.container"),
        attrName: "linkWidgetDisplayName",
        bindAttrName: ["navigateContainer"],
        shown: (value) => value,
        setterType: "TABS_CONTAINER_SELECT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-tabList`,
        labelName: t("editor.inspect.setter_label.data_source"),
        useCustomLayout: true,
        attrName: "tabList",
        setterType: "TABS_LIST_SETTER",
        bindAttrName: ["navigateContainer"],
        shown: (value) => !value,
        childrenSetter: [
          {
            id: `${baseWidgetName}-tabList-key`,
            labelName: t("editor.inspect.setter_label.key"),
            attrName: "key",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.STRING,
          },
          {
            id: `${baseWidgetName}-tabList-label`,
            labelName: t("editor.inspect.setter_label.label"),
            attrName: "label",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.STRING,
          },
          {
            id: `${baseWidgetName}-tabList-disabled`,
            labelName: t("editor.inspect.setter_label.disabled"),
            attrName: "disabled",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.BOOLEAN,
          },
          {
            id: `${baseWidgetName}-tabList-hidden`,
            labelName: t("editor.inspect.setter_label.hidden"),
            attrName: "hidden",
            setterType: "DYNAMIC_SWITCH_SETTER",
            useCustomLayout: true,
            openDynamic: true,
            expectedType: VALIDATION_TYPES.BOOLEAN,
          },
        ],
      },
      {
        id: `${baseWidgetName}-views-list`,
        labelName: t("editor.inspect.setter_label.data_source"),
        useCustomLayout: true,
        attrName: "viewList",
        setterType: "CONTAINER_VIEW_SETTER",
        bindAttrName: ["navigateContainer", "linkWidgetDisplayName"],
        shown: (isLink, id) => isLink && id,
        childrenSetter: [
          {
            id: `${baseWidgetName}-viewList-key`,
            labelName: t("editor.inspect.setter_label.key"),
            attrName: "key",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.STRING,
          },
          {
            id: `${baseWidgetName}-viewList-label`,
            labelName: t("editor.inspect.setter_label.label"),
            attrName: "label",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.STRING,
          },
          {
            id: `${baseWidgetName}-viewList-disabled`,
            labelName: t("editor.inspect.setter_label.disabled"),
            attrName: "disabled",
            setterType: "INPUT_SETTER",
            expectedType: VALIDATION_TYPES.BOOLEAN,
          },
          {
            id: `${baseWidgetName}-viewList-hidden`,
            labelName: t("editor.inspect.setter_label.hidden"),
            attrName: "hidden",
            setterType: "DYNAMIC_SWITCH_SETTER",
            useCustomLayout: true,
            openDynamic: true,
            expectedType: VALIDATION_TYPES.BOOLEAN,
          },
        ],
      },
      {
        id: `${baseWidgetName}-views-default`,
        labelName: t("editor.inspect.setter_label.default_tab"),
        attrName: "currentKey",
        bindAttrName: ["navigateContainer"],
        shown: (value) => !value,
        setterType: "TABS_DEFAULT_KEY_SETTER",
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
          TABS_EVENT_HANDLER_CONFIG.events,
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
        id: `${baseWidgetName}-adornments-startAdornment`,
        labelName: t("editor.inspect.setter_label.tooltip"),
        labelDesc: t("editor.inspect.setter_tooltip.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
    ],
  },
  {
    id: `${baseWidgetName}-layout`,
    groupName: t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: `${baseWidgetName}-layout-layout`,
        labelName: t("editor.inspect.setter_label.layout"),
        setterType: "RADIO_GROUP_SETTER",
        attrName: "tabPosition",
        options: [
          {
            label: <HorizontalStartIcon />,
            value: "left",
          },
          {
            label: <VerticalStartIcon />,
            value: "top",
          },
          {
            label: <HorizontalEndIcon />,
            value: "right",
          },
          {
            label: <VerticalEndIcon />,
            value: "bottom",
          },
        ],
      },
      {
        id: `${baseWidgetName}-layout-align`,
        labelName: t("editor.inspect.setter_label.align"),
        attrName: "align",
        setterType: "RADIO_GROUP_SETTER",
        bindAttrName: ["tabPosition"],
        shown: (tabPosition) =>
          tabPosition === "top" || tabPosition === "bottom",
        options: [
          {
            label: <HorizontalStartIcon />,
            value: "flex-start",
          },
          {
            label: <HorizontalCenterIcon />,
            value: "center",
          },
          {
            label: <HorizontalEndIcon />,
            value: "flex-end",
          },
        ],
      },
      {
        id: `${baseWidgetName}-layout-hidden`,
        labelName: t("editor.inspect.setter_label.hidden"),
        labelDesc: t("editor.inspect.setter_tooltip.hidden"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "hidden",
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
        id: `${baseWidgetName}-style-color`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.colors"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-color`,
            labelName: t("editor.inspect.setter_label.text"),
            setterType: "COLOR_PICKER_SETTER",
            attrName: "colorScheme",
            defaultValue: "blue",
          },
        ],
      },
    ],
  },
]
