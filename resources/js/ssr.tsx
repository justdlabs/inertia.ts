import { Ziggy as ziggy } from '@/ziggy';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { route, type RouteName } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => (title ? `${title} / ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup: ({ App, props }) => {
      // @ts-expect-error
      global.route<RouteName> = (name, params, absolute) =>
        // @ts-expect-error
        route(name, params as any, absolute, {
          ...ziggy,
          // @ts-expect-error
          location: new URL(page.props.ziggy.location)
        });

      return <App {...props} />;
    }
  })
);
