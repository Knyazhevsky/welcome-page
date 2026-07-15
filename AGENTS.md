# Repository Guidelines

## Project Structure & Module Organization

This is a Vue 3, TypeScript, and Vite personal site. `src/main.ts` boots the app, installs Pinia and Vue Router, and renders `src/App.vue`. Put reusable UI in `src/components/`, route-level screens in `src/views/`, and route definitions in `src/router/`. Global SCSS lives in `src/styles/`; add reusable design values under `src/styles/tokens/` and expose them through `_variables.scss`. Static files that must keep their names belong in `public/`. Production container and server configuration lives in `Dockerfile`, `docker-compose.yml`, and `nginx/`.

## Build, Test, and Development Commands

- `npm ci` installs the locked dependency set. Use a supported Node version: `^22.18.0` or `>=24.12.0`.
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` type-checks the project and creates the production bundle in `dist/`.
- `npm run preview` serves the built bundle locally for final inspection.
- `npm run type-check` runs `vue-tsc` without emitting files.
- `npm run lint` runs ESLint and Stylelint; both scripts apply fixes in place, so review the resulting diff.
- `npm run format` formats `src/` with Prettier.
- `docker compose up --build -d` serves the production container at `http://localhost:3000`.

## Coding Style & Naming Conventions

Use two-space indentation, LF line endings, no semicolons, single quotes in TypeScript, and a 120-character print width. Vue components use PascalCase filenames such as `HeroSection.vue` and the Composition API with `<script setup lang="ts">`. Prefer the `@/` alias for imports from `src/`. Keep component styles scoped where practical, use SCSS `@use`, BEM-like class names, and kebab-case CSS custom properties. Extend the token files instead of introducing repeated hard-coded colors or spacing.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Before submitting changes, run `npm run lint`, `npm run type-check`, and `npm run build`, then manually verify affected routes and responsive states. If adding tests, include the runner configuration and npm script in the same change; name unit files `*.spec.ts` beside the feature or under `src/**/__tests__/`.

## Commit & Pull Request Guidelines

Recent history uses short Conventional Commit-style subjects such as `feat:`, `fix:`, and `chore:`; keep messages imperative and focused on one change. Pull requests should explain the user-visible effect, list validation commands, link an issue when applicable, and include before/after screenshots for visual changes. Do not commit `dist/`, local environment files, or credentials.
