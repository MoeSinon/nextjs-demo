import { PanelConfig } from "@/components/InspectPanel/interface"
import { useTranslation } from "next-i18next"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { generatorEventHandlerConfig } from "@/widgetLibrary/PublicSector/utils/generatorEventHandlerConfig"
import { CONTAINER_EVENT_HANDLER_CONFIG } from "@/widgetLibrary/ContainerWidget/eventHandlerConfig"
import { ReactComponent as RadioIcon } from "@/assets/radius-icon.svg"
import { ReactComponent as StrokeWidthIcon } from "@/assets/stroke-width-icon.svg"
const { t } = useTranslation();

const baseWidgetName = "container"
export const CONTAINER_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-views`,
    groupName: t("editor.inspect.setter_group.views"),
    children: [
      {
        id: `${baseWidgetName}-views-list`,
        labelName: t("editor.inspect.setter_label.data_source"),
        useCustomLayout: true,
        attrName: "viewList",
        setterType: "CONTAINER_VIEW_SETTER",
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
        labelName: t("editor.inspect.setter_label.default_views"),
        attrName: "defaultView",
        setterType: "CONTAINER_DEFAULT_VIEW_SETTER",
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
          CONTAINER_EVENT_HANDLER_CONFIG.events,
        ),
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
        labelName: t("editor.inspect.setter_label.hidden"),
        labelDesc: t("editor.inspect.setter_tooltip.hidden"),
        attrName: "hidden",
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
      },
    ],
  },
  {
    id: `${baseWidgetName}-styles`,
    groupName: t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-styles-color`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.border"),
        attrName: "border",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-border`,
            labelName: t("editor.inspect.setter_label.color"),
            attrName: "borderColor",
            setterType: "COLOR_PICKER_SETTER",
            defaultValue: "#ffffffff",
          },
          {
            id: `${baseWidgetName}-style-radius`,
            labelName: t("editor.inspect.setter_label.radius"),
            attrName: "radius",
            setterType: "EDITABLE_INPUT_SETTER",
            icon: <RadioIcon />,
            defaultValue: "4px",
          },
          {
            id: `${baseWidgetName}-style-border-width`,
            labelName: t("editor.inspect.setter_label.width"),
            attrName: "borderWidth",
            icon: <StrokeWidthIcon />,
            setterType: "EDITABLE_INPUT_SETTER",
            defaultValue: "4px",
          },
        ],
      },
      {
        id: `${baseWidgetName}-styles-style`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.style"),
        attrName: "style",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-background`,
            labelName: t("editor.inspect.setter_label.background"),
            attrName: "backgroundColor",
            setterType: "COLOR_PICKER_SETTER",
            defaultValue: "#ffffffff",
          },
          // {
          //   id: `${baseWidgetName}-style-shadow`,
          //   labelName: t("editor.inspect.setter_label.shadow"),
          //   attrName: "shadow",
          //   icon: <ShadowIcon />,
          //   setterType: "EDITABLE_INPUT_SETTER",
          //   defaultValue: "small",
          // },
        ],
      },
    ],
  },
]
