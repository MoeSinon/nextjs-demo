import { resources } from "./config"

declare module "next-i18next" {
  interface CustomTypeOptions {
    resources: typeof resources["en"]
  }
}
