### tl;dr

```bash
git clone https://github.com/irsyadadl/inertia.ts.git 'project'
cd project
composer install
cp .env.example .env
php artisan key:generate
npm i && npm run build
php artisan serve
```

> This project using React `v18` and Laravel `v10`

### Laravel Inertia React w/ Typescript

By default, if we use package like Laravel breeze, it'll use regular javascript react by default. But this project is for you who want to use inertia.js with typescript boilerplate.

This project has come with some features like:

-   Authentication
-   User Profile
-   User Avatar
-   User Password
-   User Delete
-   User Resources (--only=[index, show, destroy])
-   Simple Pagination

### Quick Login

This project has a feature to login quickly. You can use this feature by adding `/dev/login/{user_id}` to the url. For example: `http://localhost:8000/dev/login/1`. And then you can login as user with id `1`. But this feature only works in development mode with `APP_ENV=local` in `.env` file. Make sure you have a user with id `1` in your database.

### The default branch has been renamed!

**9.x** is now named **laravel-9.x**

If you have a local clone, you can update it by running the following commands.

```bash
git branch -m 9.x laravel-9.x
git fetch origin
git branch -u origin/laravel-9.x laravel-9.x
git remote set-head origin -a
```

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
npm run build

# Testing for SSR
npm run preview
```

### Components

This project has a few helpers available to you. You can use them in your components like this:

### Update profile information

Of course it is not just about authentication, but also about updating user profile information, password, and deleting account.

![Screenshot of the project](https://pbs.twimg.com/media/Fhh7nR0aUAESOfq?format=jpg&name=4096x4096)

If you like making new features, feel free to make a [pull request](https://github.com/irsyadadl/inertia.ts). I'll be happy to review it.

### Learn More

Everything you need to understand is clearly can be found in: [UI / UX with Laravel and React](https://parsinta.com/series/ui-laravel-dan-react-nqp6j)

### Thanks to

-   [Laravel](https://github.com/laravel/framework)
-   [Inertia](https://github.com/inertiajs/inertia) with [React](https://github.com/facebook/react) and [Typescript](https://github.com/microsoft/TypeScript)
-   [Vite](https://vitejs.dev/) with [Vite plugin](https://github.com/laravel/vite-plugin) and friends
-   [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) and friends
-   [clsx](https://github.com/lukeed/clsx)

### Premium Partners

[//]: # '-   **[Teil](https://teil.app/)**'

-   **[Parsinta.com](https://parsinta.com/)**
-   **[Karteil.com](https://karteil.com/)**
-   **[IrsyadNotes.com](https://irsyadnotes.com/)**
