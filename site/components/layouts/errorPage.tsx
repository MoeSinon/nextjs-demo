import { FC } from "react"
import { ErrorPageProps } from "@pages/status/interface"
import { errorPageStyle } from "@pages/status/style"

export const ErrorPage: FC<ErrorPageProps> = (props) => {
  const { title, des, img, children } = props
  return (
    <div css={errorPageStyle}>
      {img}
      <span> {title} </span>
      <span>{des}</span>
      {children}
    </div>
  )
}
