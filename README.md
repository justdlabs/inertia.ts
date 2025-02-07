### tl;dr

```bash
composer create-project justd/laravel your-project-name
```

## Using NPM

when you're using npm, you have to include `--legacy-peer-deps` flag.

```bash
npm i --legacy-peer-deps
composer run dev
```

## Using Bun

```bash
bun i && composer run dev
```

You absolutely need to run the `bun run dev`, because the route is generated and watching while it's in dev.

### Laravel Inertia React w/ Typescript

By default, if we use package like Laravel breeze, it'll use regular javascript react by default. But this project is
for you who want to use inertia.js with typescript boilerplate.

This project has come with some features like:

- Authentication
- User Profile
- User Password
- User Delete
- User Resources (--only=[index, show, edit, update, destroy])
- Pagination

### Quick Login

This project has a feature to login quickly. You can use this feature by adding `/dev/login/{user_id}` to the url. For
example: `http://localhost:8000/dev/login/1`. And then you can login as user with id `1`. But this feature only works in
development mode with `APP_ENV=local` in `.env` file. Make sure you have a user with id `1` in your database.

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

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and
creative experience to be truly fulfilling.

### About Inertia.js

Inertia.js lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and
controllers.

### About Typescript

Typescript is a strict syntactical superset of JavaScript and adds optional static typing to the language.

### Available scripts

Feel free to use someting like [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/). It just node package manager I
have, so make yours.

```bash
# Format with prettier
bun run format

# Start development
bun run dev

# Build the app
bun run build

# Testing for SSR
bun run preview
```

### Update profile information

Of course it is not just about authentication, but also about updating user profile information, password, and deleting
account.

### Dashboard Layout

This project has 3 layout:

1. Guest Layout
2. App Layout (Default)

User layout will make a layout side by side, it has a sidebar. So this is will be useful when you need an admin panel or
something like that.

If you like making new features, feel free to make a [pull request](https://github.com/irsyadadl/inertia.ts/pulls). I'll
be happy to review it.

## Sponsored
- [Premium Blocks](https://blocks.getjustd.com)
- [Parsinta](https://parsinta.com)
