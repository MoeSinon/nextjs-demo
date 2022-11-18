import { FC, useCallback, useMemo, useRef, useState } from "react"
import {
  actionContentStyle,
  actionPanelStyle,
} from "@components/Actions/ActionPanel/style"
import { useSelector } from "react-redux"
import { getCachedAction } from "@redux/config/configSelector"
import { ActionTitleBar } from "@components/Actions/ActionPanel/ActionTitleBar"
import { MysqlLikePanel } from "./MysqlLikePanel"
import { RestApiPanel } from "@components/Actions/ActionPanel/RestApiPanel"
import { TransformerPanel } from "@components/Actions/ActionPanel/TransformerPanel"
import { ActionResult } from "@components/Actions/ActionPanel/ActionResult"
import { ActionResultType } from "@components/Actions/ActionPanel/ActionResult/interface"
import { RedisPanel } from "@components/Actions/ActionPanel/RedisPanel"
import { MongoDbPanel } from "@components/Actions/ActionPanel/MongoDbPanel"
import { ActionPanelContainerProps } from "@components/Actions/ActionPanel/interface"
import { ActionPanelContext } from "@components/Actions/ActionPanel/actionPanelContext"

export const ActionPanel: FC<ActionPanelContainerProps> = (props) => {
  const { maxHeight } = props
  const panelRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cachedAction = useSelector(getCachedAction)
  const [actionResult, setActionResult] = useState<ActionResultType>()

  const run = useCallback((result, error) => {
    setActionResult({ result, error })
  }, [])

  const panel = useMemo(() => {
    switch (cachedAction?.actionType) {
      case "mysql":
      case "tidb":
      case "mariadb":
      case "postgresql":
        return <MysqlLikePanel />
      case "restapi":
        return <RestApiPanel />
      case "redis":
        return <RedisPanel />
      case "mongodb":
        return <MongoDbPanel />
      case "transformer":
        return <TransformerPanel />
      default:
        return <></>
    }
  }, [cachedAction])

  const clearActionResult = () => {
    setActionResult(undefined)
    if (contentRef.current) {
      contentRef.current.style.paddingBottom = "48px"
    }
  }

  if (cachedAction === null || cachedAction === undefined) {
    return <></>
  }

  return (
    <div css={actionPanelStyle} ref={panelRef}>
      <ActionPanelContext.Provider
        value={{
          onChangeSelectedResource: clearActionResult,
        }}
      >
        <ActionTitleBar onActionRun={run} />
        <div ref={contentRef} css={actionContentStyle}>
          {panel}
        </div>
        <ActionResult
          result={actionResult}
          onClose={clearActionResult}
          maxHeight={maxHeight}
          placeholderRef={contentRef}
        />
      </ActionPanelContext.Provider>
    </div>
  )
}

ActionPanel.displayName = "ActionPanel"
