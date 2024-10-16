import '../css/app.css';
import './bootstrap';

import { Ziggy } from '@/ziggy';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { useRoute } from 'ziggy-js';
import { Providers } from './providers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} / ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        window.route = useRoute(Ziggy as any);
        const appElement = (
            <Providers>
                <App {...props} />
            </Providers>
        );
        if (import.meta.env.DEV) {
            createRoot(el).render(appElement);
            return;
        }

        hydrateRoot(el, appElement);
    },
    progress: {
        color: '#4B5563'
    }
});
