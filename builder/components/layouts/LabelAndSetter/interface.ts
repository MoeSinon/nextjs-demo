import { ReactNode } from "react"
import { LabelProps } from "@/components/layouts/lable/interface"

export interface LabelAndSetterProps extends LabelProps {
  children: ReactNode
  errorMessage: string
}
