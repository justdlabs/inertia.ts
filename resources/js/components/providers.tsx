import { ThemeProvider } from "@/components/theme-provider"
import { router } from "@inertiajs/react"
import type React from "react"
import { RouterProvider } from "react-aria-components"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RouterProvider navigate={(to, options) => router.visit(to, options as any)}>
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  )
}
