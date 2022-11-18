import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import SignInBgUrl from "@assets/sign-bg.svg"

export const containerStyle: SerializedStyles = css`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const asideStyle: SerializedStyles = css`
  width: 520px;
  position: relative;
  padding: 0 40px;
  background: url(${SignInBgUrl})
    ${globalColor(`--${illaPrefix}-techPurple-01`)} no-repeat;
`

export const logoStyle: SerializedStyles = css`
  position: absolute;
  top: 40px;
  left: 24px;
`

export const introductionStyle: SerializedStyles = css`
  font-size: 34px;
  margin-top: 37.5vh;
  font-weight: 500;
  height: 40px;
  color: ${globalColor(`--${illaPrefix}-white-01`)};
`

export const contentStyle: SerializedStyles = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
`

export const gridFormStyle: SerializedStyles = css`
  display: grid;
  gap: 40px;
  width: 400px;
`

export const gridFormFieldStyle: SerializedStyles = css`
  display: grid;
  gap: 24px;
`

export const gridItemStyle: SerializedStyles = css`
  display: grid;
  gap: 8px;
`

export const gridValidStyle: SerializedStyles = css`
  display: grid;
  gap: 4px;
`

export const formTitleStyle: SerializedStyles = css`
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: ${globalColor(`--${illaPrefix}-gray-02`)};
`

export const formLabelStyle: SerializedStyles = css`
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const forgotPwdStyle: SerializedStyles = css`
  font-size: 12px;
  line-height: 20px;
  margin-right: 8px;
`

export const forgotPwdContainerStyle: SerializedStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const descriptionStyle: SerializedStyles = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const checkboxTextStyle: SerializedStyles = css`
  font-size: 12px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const errorMsgStyle: SerializedStyles = css`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${globalColor(`--${illaPrefix}-orange-03`)};
`

export const errorIconStyle: SerializedStyles = css`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`
export const errorPageStyle = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 30vh;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  font-weight: bold;
  line-height: 22px;
  span + span {
    font-weight: normal;
    color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
  }
`




export const iconStyle = css`
  height: 96px;
  width: 96px;
  border-radius: 50px;
  background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  margin-bottom: 24px;
`

export const buttonStyle = css`
  margin-top: 24px;
  display: flex;
  gap: 8px;
`
export const navBarStyle = css`
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
`

export const navBarLogoStyle = css`
  margin-right: 40px;
`

export const navBarTabStyle = css`
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
  margin-right: 32px;
  cursor: pointer;
`






export const tabPrefixStyle = css`
  display: inline-flex;
  align-self: center;
  margin-left: 16px;
  padding: 0 16px;
  flex: 1;
`
export const preIconStyle = css`
  display: inline-block;
  align-self: center;
  margin-right: 4px;
`
export const tabPreTextStyle = css`
  font-size: 14px;
`

export const backAreaStyle = css`
  cursor: pointer;
`

export const tabSuffixStyle = css`
  visibility: hidden;
`





export const labelStyles = css`
  font-size: 14px;
  font-weight: 500;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const labelExtInfoStyles = css`
  font-size: 14px;
  font-weight: 400;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
  `
