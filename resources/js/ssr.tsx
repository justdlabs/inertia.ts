import { createInertiaApp } from "@inertiajs/react"
import createServer from "@inertiajs/react/server"
import ReactDOMServer from "react-dom/server"
import { route } from "ziggy-js"
import { Ziggy as ziggy } from "@/ziggy"

createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob("./pages/**/*.tsx", {
        eager: true,
      })
      return pages[`./pages/${name}.tsx`]
    },
    setup: ({ App, props }) => {
      // @ts-expect-error
      global.route = (name, params, absolute) =>
        // @ts-expect-error
        route(name, params as any, absolute, {
          ...ziggy,
          // @ts-expect-error
          location: new URL(page.props.ziggy.location),
        })
      return <App {...props} />
    },
  }),
)
