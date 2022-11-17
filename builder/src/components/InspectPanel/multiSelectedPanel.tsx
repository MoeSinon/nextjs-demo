import { FC, useCallback, useContext } from "react"
import { useSelector } from "react-redux"
import { getSelectedComponents } from "@/redux/config/configSelector"
import {
  formContentItemStyle,
  formContentStyle,
  formHeaderStyle,
  multiSelectedPanelWrapper,
} from "@/components/InspectPanel/style"
import { Button } from "@illa-design/button"
import { useTranslation } from "next-i18next"
import { ShortCutContext } from "@/utils/shortcut/shortcutProvider"

export const MultiSelectedPanel: FC = () => {
  const selectedComponents = useSelector(getSelectedComponents)
  const { t } = useTranslation()
  const shortcut = useContext(ShortCutContext)

  const handleClickDeleteButton = useCallback(() => {
    shortcut.showDeleteDialog(selectedComponents)
  }, [selectedComponents, shortcut])
  return (
    <div css={multiSelectedPanelWrapper}>
      <div css={formHeaderStyle}>
        {t("editor.inspect.multi_selected_header", {
          number: selectedComponents.length,
        })}
      </div>
      <div css={formContentStyle}>
        {selectedComponents.map((displayName) => {
          return (
            <div key={displayName} css={formContentItemStyle}>
              {displayName}
            </div>
          )
        })}
      </div>
      <Button
        fullWidth
        size="medium"
        colorScheme="red"
        variant="light"
        onClick={handleClickDeleteButton}
      >
        {t("editor.component.delete")}
      </Button>
    </div>
  )
}

MultiSelectedPanel.displayName = "MultiSelectedPanel"
