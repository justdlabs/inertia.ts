import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { watch } from 'vite-plugin-watch';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        watch({
            pattern: 'app/{Data,Enums}/**/*.php',
            command: 'php artisan typescript:transform',
        }),
    ],
    resolve: {
        alias: {
            'ziggy-js': resolve('vendor/tightenco/ziggy'),
        },
    },
});
