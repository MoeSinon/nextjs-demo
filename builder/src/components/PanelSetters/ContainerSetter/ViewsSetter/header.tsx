import { FC } from "react"
import { Button } from "@illa-design/button"
import { AddIcon } from "@illa-design/icon"
import {
  HeaderLabelStyle,
  HeaderWrapperStyle,
} from "@/components/PanelSetters/ContainerSetter/ViewsSetter/style"
import { useTranslation } from "next-i18next"

export interface HeaderProps {
  labelName: string
  addAction: () => void
  hasAddAction: boolean
}

export const Header: FC<HeaderProps> = (props) => {
  const { t } = useTranslation()
  const { labelName, addAction, hasAddAction } = props
  return (
    <div css={HeaderWrapperStyle}>
      <span css={HeaderLabelStyle}>{labelName}</span>
      {hasAddAction && (
        <Button
          leftIcon={<AddIcon />}
          colorScheme="techPurple"
          variant="text"
          onClick={addAction}
        >
          {t("editor.inspect.setter_content.column_setter.new")}
        </Button>
      )}
    </div>
  )
}
