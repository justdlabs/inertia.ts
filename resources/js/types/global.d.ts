import { VisitOptions } from '@inertiajs/core';
import { type AxiosInstance } from 'axios';
import { type route as routeFn } from 'ziggy-js';

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  let route: typeof routeFn;
}

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: VisitOptions;
  }
}
