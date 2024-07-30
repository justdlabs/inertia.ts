import '../css/app.css'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Providers } from './providers'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const appElement = (
            <Providers>
                <App {...props} />
            </Providers>
        )
        if (import.meta.env.DEV) {
            createRoot(el).render(appElement)
            return
        }

        hydrateRoot(el, appElement)
    },
    progress: {
        color: '#4B5563'
    }
})
