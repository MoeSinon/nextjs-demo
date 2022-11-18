import { PanelConfig } from "@components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@utils/validationFactory"
import { useTranslation } from "next-i18next"
const { t } = useTranslation();
const baseWidgetName = "timeline"
export const TIMELINE_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-basic`,
    groupName: t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${baseWidgetName}-items`,
        labelName: t("editor.inspect.setter_label.items"),
        attrName: "items",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.ARRAY,
        isSetterSingleRow: true,
      },
      {
        id: `${baseWidgetName}-direction`,
        labelName: t("editor.inspect.setter_label.direction"),
        labelDesc: t("editor.inspect.setter_tooltip.timeline_direction"),
        setterType: "RADIO_GROUP_SETTER",
        attrName: "direction",
        options: [
          { label: t("widget.timeline.vertical"), value: "vertical" },
          {
            label: t("widget.timeline.horizontal"),
            value: "horizontal",
          },
        ],
      },
      {
        id: `${baseWidgetName}-pending`,
        labelName: t("editor.inspect.setter_label.pending"),
        labelDesc: t("editor.inspect.setter_tooltip.timeline_pending"),
        attrName: "pending",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
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
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
]
