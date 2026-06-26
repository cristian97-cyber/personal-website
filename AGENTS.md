# Repository Guidelines

## Project Structure & Module Organization

This is an Angular 22 personal website. Application code lives in `src/app`, with the root shell in `app.ts`, `app.html`, and `app.scss`. Route definitions are in `src/app/app.routes.ts`; feature pages should live under `src/app/pages/<page-name>/`. Shared application services belong in `src/app/services/`, with matching `*.spec.ts` tests beside the service. Global styles and Tailwind CSS tokens are in `src/styles.css`. Static assets belong in `public/`.

## Build, Test, and Development Commands

- `npm start`: runs the Angular dev server locally.
- `npm run build`: creates a production build in `dist/personal-website`.
- `npm run watch`: builds continuously in development mode.
- `npm test`: runs the Angular unit test target.
- `npx tsc -p tsconfig.app.json --noEmit`: type-checks application code.
- `npx tsc -p tsconfig.spec.json --noEmit`: type-checks tests.

Use Node `24.15.0+` or another version accepted by Angular 22. This repo was verified with Node `24.18.0`.

## Coding Style & Naming Conventions

Use TypeScript, Angular standalone components, and SCSS/CSS consistent with the current files. Prefer 2-space indentation and single quotes in TypeScript. Name pages and services by purpose, for example `home.ts`, `theme.service.ts`, and `theme.service.spec.ts`. Keep mutable signal state private in services and expose read-only signals plus explicit mutation methods.

## Styling & UI

Tailwind CSS v4 is configured through `@tailwindcss/postcss` and `src/styles.css`. Reuse the existing CSS variables for theme colors, radius, borders, and foreground/background values. Use `@lucide/angular` standalone icons. Keep layout responsive and avoid adding large design abstractions until repeated patterns appear.

## Testing Guidelines

Tests use the Angular unit test setup with Vitest support. Place specs next to the code they cover using the `*.spec.ts` suffix. At minimum, add tests for services, routing-sensitive behavior, and state logic such as theme persistence. Run `npm test` and both TypeScript checks before opening a PR.

## Commit & Pull Request Guidelines

The current history uses short imperative commit messages, e.g. `Initialize personal website scaffold`. Keep commits focused and descriptive. Pull requests should include a concise summary, test/build results, linked issues if any, and screenshots or recordings for visible UI changes, especially layout, theme, or responsive behavior.
