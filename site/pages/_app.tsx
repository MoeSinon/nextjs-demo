import App from "./App"
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import store from "../store/store"
import "@utils/dayjs"

import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"

// if (import.meta.env.VITE_INSTANCE_ID === "CLOUD") {
//   Sentry.init({
//     dsn: "http://bc9865122a714315921fbb995643f7cb@sentry.illasoft.com/1",
//     integrations: [new BrowserTracing()],
//     environment: import.meta.env.VITE_SENTRY_ENV,
//     tracesSampleRate: 1.0,
//   })
// }

export default function MyApp({ APP }: AppProps) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

