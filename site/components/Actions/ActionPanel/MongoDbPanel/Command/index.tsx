import { FC } from "react"
import {
  codeEditorLabelStyle,
  mongoItemCodeEditorStyle,
  mongoItemStyle,
} from "@components/Actions/ActionPanel/MongoDbPanel/style"
import { CodeEditor } from "@components/CodeEditor"
import { VALIDATION_TYPES } from "@utils/validationFactory"
import { useTranslation } from "next-i18next"
import { MongoDbActionPartProps } from "@components/Actions/ActionPanel/MongoDbPanel/interface"
import { useDispatch, useSelector } from "react-redux"
import { getCachedAction } from "@redux/config/configSelector"
import { CommandContent } from "@redux/currentApp/action/mongoDbAction"
import { configActions } from "@redux/config/configSlice"

export const CommandPart: FC<MongoDbActionPartProps> = (props) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const cachedAction = useSelector(getCachedAction)

  const typeContent = props.typeContent as CommandContent

  return (
    <>
      <div css={mongoItemStyle}>
        <span css={codeEditorLabelStyle}>
          {t("editor.action.panel.mongodb.document")}
        </span>
        <CodeEditor
          lineNumbers
          height="88px"
          css={mongoItemCodeEditorStyle}
          mode="TEXT_JS"
          value={typeContent.document}
          onChange={(value) => {
            dispatch(
              configActions.updateCachedAction({
                ...cachedAction,
                content: {
                  ...cachedAction.content,
                  typeContent: {
                    ...typeContent,
                    document: value,
                  } as CommandContent,
                },
              }),
            )
          }}
          expectedType={VALIDATION_TYPES.STRING}
        />
      </div>
    </>
  )
}

CommandPart.displayName = "CommandPart"
