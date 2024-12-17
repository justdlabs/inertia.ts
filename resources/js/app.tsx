import '../css/app.css';
import './bootstrap';

import { Ziggy } from '@/ziggy';
import { createInertiaApp } from '@inertiajs/react';
import { Providers } from 'components/providers';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { useRoute } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => (title ? title + ' / ' + appName : appName),
  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    // @ts-expect-error
    window.route = useRoute(Ziggy as any);
    const appElement = (
      <Providers>
        <App {...props} />
      </Providers>
    );
    if (import.meta.env.SSR) {
      hydrateRoot(el, appElement);
      return;
    }

    createRoot(el).render(appElement);
  },
  progress: false
});
