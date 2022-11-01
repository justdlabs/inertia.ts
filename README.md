### tl;dr
```bash
git clone https://github.com/irsyadadl/inertia.ts.git 'project'
cd project
composer install
cp .env.example .env
php artisan key:generate
npm i && npm run build
```

> This project using React `v18` and Laravel `v9`

### Laravel Inertia React w/ Typescript

By default, if we use package like Laravel breeze, it'll use regular javascript react by default. But this project is for you who want to use inertia.js with typescript boilerplate.

### About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.

### About Inertia.js

Inertia.js lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and controllers.

### About Typescript
Typescript is a strict syntactical superset of JavaScript and adds optional static typing to the language.

### Available scripts
Feel free to use someting like [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/). It just node package manager I have, so make yours.
```bash
# Format with prettier
npm run format

# Start development
npm run dev

# Build the app
npm run dev

# Testing for SSR
npm run test-ssr
```

### Routing JS
This project has no routing plugin like [ziggy](https://github.com/tighten/ziggy), if you want a ziggy to this project, please do it yourself. But if you want, you can make a pull request to make the project updated.

### Thanks to
* [Laravel](https://github.com/laravel/framework)
* [Inertia](https://github.com/inertiajs/inertia) with [React](https://github.com/facebook/react) and [Typescript](https://github.com/microsoft/TypeScript)
* [Vite](https://vitejs.dev/) with [Vite plugin](https://github.com/laravel/vite-plugin) and friends
* [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) and friends
* [clsx](https://github.com/lukeed/clsx)

### Premium Partners

[//]: # (-   **[Teil]&#40;https://teil.app/&#41;**)
-   **[Parsinta](https://parsinta.com/)**
-   **[Irsyad Notes](https://irsyadnotes.com/)**
