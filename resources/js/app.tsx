import "../css/app.css"
import "./bootstrap"

import { Providers } from "@/components/providers"
import { Ziggy } from "@/ziggy"
import { createInertiaApp } from "@inertiajs/react"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import { createRoot } from "react-dom/client"
import { useRoute } from "ziggy-js"
import { initializeTheme } from "@/utils/use-theme"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"

createInertiaApp({
  title: (title) => (title ? `${title} / ${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob("./pages/**/*.tsx")),
  setup({ el, App, props }) {
    const root = createRoot(el)
    // @ts-expect-error
    window.route = useRoute(Ziggy)
    root.render(
      <Providers>
        <App {...props} />
      </Providers>,
    )
  },
  progress: false,
})

initializeTheme()
