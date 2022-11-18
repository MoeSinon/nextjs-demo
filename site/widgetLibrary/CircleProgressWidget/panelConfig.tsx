import {
  HorizontalCenterIcon,
  HorizontalEndIcon,
  HorizontalStartIcon,
} from "@illa-design/icon"
import { PanelConfig } from "@components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@utils/validationFactory"
import { useTranslation } from "next-i18next"
import { ReactComponent as StrokeWidthIcon } from "@assets/stroke-width-icon.svg"
const { t } = useTranslation();

const baseWidgetName = "circle-progress"
export const CIRCLE_PROGRESS_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-basic`,
    groupName: t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${baseWidgetName}-basic-Value`,
        labelName: t("editor.inspect.setter_label.value"),
        labelDesc: t("editor.inspect.setter_tooltip.progress_percentage"),
        attrName: "value",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-basic-showText`,
        labelName: t("editor.inspect.setter_label.hide_value_label"),
        attrName: "showText",
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
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
    id: `${baseWidgetName}-layout`,
    groupName: t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: `${baseWidgetName}-layout-hidden`,
        setterType: "DYNAMIC_SWITCH_SETTER",
        labelName: t("editor.inspect.setter_label.hidden"),
        labelDesc: t("editor.inspect.setter_tooltip.hidden"),
        attrName: "hidden",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-layout-alignment`,
        setterType: "RADIO_GROUP_SETTER",
        labelName: t("editor.inspect.setter_label.label_alignment"),
        attrName: "alignment",
        options: [
          {
            label: <HorizontalStartIcon />,
            value: "start",
          },
          {
            label: <HorizontalCenterIcon />,
            value: "center",
          },
          {
            label: <HorizontalEndIcon />,
            value: "end",
          },
        ],
      },
    ],
  },
  {
    id: `${baseWidgetName}-style`,
    groupName: t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-color-list`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.colors"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-color`,
            labelName: t("editor.inspect.setter_label.styles"),
            setterType: "COLOR_PICKER_SETTER",
            attrName: "color",
            defaultValue: "blue",
          },
          {
            id: `${baseWidgetName}-trailColor`,
            labelName: t("editor.inspect.setter_label.trail_color"),
            setterType: "COLOR_PICKER_SETTER",
            attrName: "trailColor",
            defaultValue: "gray",
          },
        ],
      },
      {
        id: `${baseWidgetName}-style-list`,
        setterType: "LIST_SETTER",
        labelName: t("editor.inspect.setter_label.styles"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-strokeWidth`,
            labelName: t("editor.inspect.setter_label.stroke_width"),
            setterType: "EDITABLE_INPUT_SETTER",
            icon: <StrokeWidthIcon />,
            attrName: "strokeWidth",
            defaultValue: "4px",
            expectedType: VALIDATION_TYPES.STRING,
          },
        ],
      },
    ],
  },
]
