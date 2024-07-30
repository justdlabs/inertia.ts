import { router } from '@inertiajs/react'
import { ThemeProvider } from 'components/theme-provider'
import React from 'react'
import { RouterProvider } from 'react-aria-components'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <RouterProvider navigate={(to, options) => router.visit(to, options as any)}>
            <ThemeProvider defaultTheme="system" storageKey="ui-theme">
                {children}
            </ThemeProvider>
        </RouterProvider>
    )
}
