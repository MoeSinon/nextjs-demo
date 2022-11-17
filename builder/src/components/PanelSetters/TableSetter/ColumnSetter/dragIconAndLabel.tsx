import { FC, useCallback, useContext, useState } from "react"
import { useTranslation } from "next-i18next"
import {
  ReduceIcon,
  DragPointIcon,
  EyeOffIcon,
  EyeOnIcon,
} from "@illa-design/icon"
import { Trigger } from "@illa-design/trigger"
import {
  baseIconStyle,
  dragItemStyle,
  iconAreaStyle,
  labelNameAndIconStyle,
  labelNameWrapperStyle,
  movableIconWrapperStyle,
} from "./style"
import { DragIconAndLabelProps } from "./interface"
import { BaseModal } from "@/components/PanelSetters/PublicComponent/Modal"
import { ColumnListSetterContext } from "@/components/PanelSetters/TableSetter/ColumnSetter/context/columnListContext"

export const DragIconAndLabel: FC<DragIconAndLabelProps> = (props) => {
  const { index, label, visible, custom } = props
  const [modalVisible, setModalVisible] = useState(false)
  const {
    widgetDisplayName,
    attrPath,
    childrenSetter,
    handleUpdateItemVisible,
    handleDeleteColumnItem,
  } = useContext(ColumnListSetterContext)

  const { t } = useTranslation()

  const handleCloseModal = useCallback(() => {
    setModalVisible(false)
  }, [])

  return (
    <Trigger
      withoutPadding
      colorScheme="white"
      popupVisible={modalVisible}
      content={
        <BaseModal
          title={label ?? ""}
          handleCloseModal={handleCloseModal}
          attrPath={`${attrPath}.${index}`}
          widgetDisplayName={widgetDisplayName}
          childrenSetter={childrenSetter}
        />
      }
      trigger="click"
      showArrow={false}
      position="left"
      clickOutsideToClose
      onVisibleChange={(visible) => {
        setModalVisible(visible)
      }}
    >
      <div css={dragItemStyle}>
        <div css={labelNameAndIconStyle}>
          <span css={movableIconWrapperStyle} className="movableIconWrapper">
            <DragPointIcon />
          </span>
          <span css={labelNameWrapperStyle}>
            {label ||
              t("editor.inspect.setter_content.option_list.list_no_label")}
          </span>
        </div>
        <div css={iconAreaStyle}>
          <span
            css={baseIconStyle}
            onClick={(event) => {
              handleUpdateItemVisible(`${attrPath}.${index}.visible`, !visible)
              event.stopPropagation()
            }}
          >
            {visible ? <EyeOnIcon /> : <EyeOffIcon />}
          </span>
          {custom ? (
            <span
              css={baseIconStyle}
              onClick={(event) => {
                handleDeleteColumnItem(index)
                event.stopPropagation()
              }}
            >
              <ReduceIcon />
            </span>
          ) : null}
        </div>
      </div>
    </Trigger>
  )
}

DragIconAndLabel.displayName = "DragIconAndLabel"