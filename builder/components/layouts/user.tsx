import { useTranslation } from "next-i18next"
import { ReactComponent as Logo } from "@/assets/illa-logo-white.svg"
import Seo from '@/components/seo/seo';
import {
  asideStyle,
  containerStyle,
  contentStyle,
  introductionStyle,
  logoStyle,
} from "./style"


export default function UserLoginLayout({ children }: React.PropsWithChildren<{}>) {
  const { t } = useTranslation()
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div css={containerStyle}>
        <aside css={asideStyle}>
          <Logo css={logoStyle} />
          <section css={introductionStyle}>{t("user.description")}</section>
        </aside>
        <div css={contentStyle}>
          {children}
        </div>
      </div>
    </>
  )
}

export const getLayout = (page: React.ReactElement) => (
  <UserLoginLayout>{page}</UserLoginLayout>
);
