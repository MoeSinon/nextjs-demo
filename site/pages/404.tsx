import { FC } from "react"
import { ErrorPage } from "@components/layouts/errorPage"
import { Result404Icon } from "@illa-design/icon"
import { buttonStyle, iconStyle } from "@pages/Setting/Others/style"
import { Button } from "@illa-design/button"
import { useRouter } from 'next/router'
import { useTranslation } from "next-i18next"

export const Page404: FC = () => {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <ErrorPage
      title="404"
      des={t("status.404.des")}
      img={<Result404Icon css={iconStyle} />}
    >
      <div css={buttonStyle}>
        <Button onClick={() => router.push("/", undefined, { shallow: true })} colorScheme={"gray"}>
          {t("status.404.again")}
        </Button>
        <Button onClick={() => router.push("/", undefined)}>{t("status.back")}</Button>
      </div>
    </ErrorPage>
  )
}
