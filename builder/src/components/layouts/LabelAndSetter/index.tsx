import { FC } from "react"
import { SettingLabel } from "@/pages/Setting/Components/label"
import { WarningCircleIcon } from "@illa-design/icon"
import { LabelAndSetterProps } from "@/components/layouts/LabelAndSetter/interface"
import {
  errorLineStyle,
  errorTextStyle,
  publicInputMarginWrapperStyle,
  publicLabelAndInputWrapperStyle,
} from "@/components/layouts/LabelAndSetter/style"

export const LabelAndSetter: FC<LabelAndSetterProps> = (props) => {
  const { children, errorMessage, label } = props
  return (
    <div css={publicLabelAndInputWrapperStyle}>
      <SettingLabel label={label} />
      <div css={publicInputMarginWrapperStyle}>
        {children}
        {errorMessage && (
          <div css={errorLineStyle}>
            <WarningCircleIcon />
            <span css={errorTextStyle}>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  )
}

LabelAndSetter.displayName = "LabelAndSetter"
