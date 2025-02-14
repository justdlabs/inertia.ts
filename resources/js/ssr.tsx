import { createInertiaApp } from "@inertiajs/react"
import createServer from "@inertiajs/react/server"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import ReactDOMServer from "react-dom/server"
import { route } from "ziggy-js"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"

createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
      resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob("./pages/**/*.tsx")),
    setup: ({ App, props }) => {
      // @ts-ignore
      global.route = (name, params, absolute) =>
        route(name, params as any, absolute, {
          // @ts-ignore
          ...page.props.ziggy,
          // @ts-ignore
          location: new URL(page.props.ziggy.location),
        })
      return <App {...props} />
    },
  }),
)
