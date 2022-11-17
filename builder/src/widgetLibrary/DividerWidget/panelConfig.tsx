import {
  HorizontalCenterIcon,
  HorizontalEndIcon,
  HorizontalStartIcon,
} from "@illa-design/icon"
import { PanelConfig } from "@/components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { useTranslation } from "next-i18next"
import { ReactComponent as TextSizeIcon } from "@/assets/text-size-icon.svg"
const { t } = useTranslation();

const baseWidgetName = "divider"
export const DIVIDER_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-basic`,
    groupName: t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${baseWidgetName}-basic-text`,
        labelName: t("editor.inspect.setter_label.text"),
        attrName: "text",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-basic-text-align`,
        labelName: t("editor.inspect.setter_label.text_align"),
        attrName: "textAlign",
        setterType: "RADIO_GROUP_SETTER",
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
    ],
  },
  {
    id: `${baseWidgetName}-style`,
    groupName: t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-style-list`,
        setterType: "LIST_SETTER",
        attrName: "styles",
        labelName: t("editor.inspect.setter_label.styles"),
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-text-size`,
            labelName: t("editor.inspect.setter_label.text_size"),
            setterType: "EDITABLE_INPUT_SETTER",
            attrName: "fs",
            icon: <TextSizeIcon />,
            defaultValue: "14px",
            expectedType: VALIDATION_TYPES.STRING,
          },
        ],
      },
    ],
  },
]
