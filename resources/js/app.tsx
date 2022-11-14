import '../css/app.css';
import './bootstrap';
import React from 'react';
import { RouteContext } from '@/Hooks/useRoute';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} / ${appName}`,
    // @ts-ignore
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <RouteContext.Provider value={(window as any).route}>
                <App {...props} />
            </RouteContext.Provider>
        );
    },
}).then((r) => r);

InertiaProgress.init({ color: '#4B5563' });
