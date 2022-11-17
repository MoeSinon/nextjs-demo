import { PanelConfig } from "@/components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { useTranslation } from "next-i18next"
import { ReactComponent as RadioIcon } from "@/assets/radius-icon.svg"
import { generatorEventHandlerConfig } from "@/widgetLibrary/PublicSector/utils/generatorEventHandlerConfig"
import { IMAGE_EVENT_HANDLER_CONFIG } from "@/widgetLibrary/ImageWidget/eventHandlerConfig"
const { t } = useTranslation();

const baseWidgetName = "input"
export const IMAGE_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-basic`,
    groupName: t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${baseWidgetName}-basic-source`,
        attrName: "imageSrc",
        expectedType: VALIDATION_TYPES.STRING,
        labelName: t("editor.inspect.setter_label.image_source"),
        isSetterSingleRow: true,
        setterType: "INPUT_SETTER",
      },
      {
        id: `${baseWidgetName}-basic-alt-text`,
        labelName: t("editor.inspect.setter_label.alt_text"),
        labelDesc: t("editor.inspect.setter_label.alt_text_desc"),
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "altText",
        setterType: "INPUT_SETTER",
      },
      {
        id: `${baseWidgetName}-basic-scale-type`,
        labelName: t("editor.inspect.setter_label.scale_type"),
        attrName: "objectFit",
        setterType: "BASE_SELECT_SETTER",
        options: ["container", "cover", "fill", "none", "scale-down"],
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
          IMAGE_EVENT_HANDLER_CONFIG.events,
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
        expectedType: VALIDATION_TYPES.BOOLEAN,
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
      },
    ],
  },
  {
    id: `${baseWidgetName}-style`,
    groupName: t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-styles-list`,
        setterType: "LIST_SETTER",
        isSetterSingleRow: true,
        labelName: t("editor.inspect.setter_label.styles"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-radius`,
            labelName: t("editor.inspect.setter_label.radius"),
            setterType: "EDITABLE_INPUT_SETTER",
            attrName: "radius",
            icon: <RadioIcon />,
            defaultValue: "0px",
            expectedType: VALIDATION_TYPES.STRING,
          },
        ],
      },
    ],
  },
]
