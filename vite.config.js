import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { watch } from "vite-plugin-watch";

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: "resources/js/app.tsx",
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
        react(),
        watch({
            pattern: "routes/web.php",
            command: "php artisan ziggy:generate",
        }),
    ],
    resolve: {
        alias: {
            ui: resolve("resources/js/components/ui/index.ts"),
            "ziggy-js": resolve("vendor/tightenco/ziggy"),
        },
    },
});
