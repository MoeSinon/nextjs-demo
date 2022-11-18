import { FC } from "react"
import { ErrorPage } from "@/components/layouts/errorPage"
import { Result500Icon } from "@illa-design/icon"
import { buttonStyle, iconStyle } from "@/pages/Setting/Others/style"
import { Button } from "@illa-design/button"
import { useRouter } from 'next/router'
import { useTranslation } from "next-i18next"

export const Page500: FC = () => {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <ErrorPage
      title="500"
      des={t("status.500.des")}
      img={<Result500Icon css={iconStyle} />}
    >
      <div css={buttonStyle}>
        <Button onClick={() => router.push("/", undefined)}>{t("status.back")}</Button>
      </div>
    </ErrorPage>
  )
}
