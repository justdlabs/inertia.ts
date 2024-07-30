import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { watch } from 'vite-plugin-watch'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true
        }),
        react(),
        watch({
            pattern: 'app/{Data,Enums}/**/*.php',
            command: 'php artisan typescript:transform'
        })
    ],
    resolve: {
        alias: {
            ui: resolve('resources/js/components/ui/index.ts'),
            'ziggy-js': resolve('vendor/tightenco/ziggy')
        }
    }
})
