# Copilot Instructions for welcome-page

A Vue 3 + TypeScript + Vite web application with a design system built on SCSS design tokens.

## Build, Test, and Lint

### Development
```bash
npm run dev          # Start dev server with hot reload (port 5173)
npm run preview      # Preview production build locally
```

### Production Build
```bash
npm run build        # Compile with type-checking, then bundle with Vite
```

### Linting and Type Checking
```bash
npm run lint         # Run all linters (ESLint + Stylelint)
npm run lint:eslint  # ESLint with auto-fix (includes TypeScript)
npm run lint:stylelint  # Stylelint with auto-fix for CSS/SCSS/Vue styles
npm run type-check   # TypeScript type-checking without emitting
npm run format       # Prettier formatting (src/ only)
```

## Architecture Overview

### Core Structure
- **Entry Point**: `src/main.ts` - Bootstraps Vue app, mounts Pinia store, and router
- **Root Component**: `src/App.vue` - Minimal wrapper that renders the Layout
- **Layout**: `src/components/Layout.vue` - Main page structure with NavBar, router-view, and footer
- **Router**: `src/router/index.ts` - Vue Router setup with lazy-loaded routes
- **State**: Pinia ready for use (imported in main.ts, no stores created yet)

### Design System
The project uses **SCSS design tokens** as the primary styling approach:
- **`src/styles/tokens/`** - Design token definitions (colors, typography, spacing, effects, layout)
- **`src/styles/_variables.scss`** - Imports all tokens as CSS custom properties
- **`src/styles/_mixins.scss`** - Reusable SCSS mixins
- **Colors** use CSS variables: `--color-background`, `--color-text-primary`, `--color-accent`
- **Spacing** via CSS variables: referenced in tokens/layout.scss
- **Typography** via CSS variables from tokens/typography.scss

### Component Organization
- **`src/components/`** - Reusable components (NavBar, Layout)
- **`src/views/`** - Page-level components loaded by router
- Each component uses `<script setup lang="ts">` (Composition API)
- Scoped styles with SCSS preprocessing

## Key Conventions

### TypeScript & JavaScript
- **Quotes**: Single quotes in `.ts` files (enforced by ESLint)
- **Trailing commas**: ES5 style (commas in objects/arrays, not function params)
- **Semicolons**: None (enforced by Prettier)
- **Path aliases**: Use `@/` prefix (e.g., `@/components/NavBar.vue`) - configured in Vite and tsconfig.json

### SCSS & Styling
- **Design tokens**: Always add new colors/spacing/typography to `src/styles/tokens/` as CSS variables, not inline values
- **Quotes**: Double quotes in `.scss` files (enforced by Stylelint)
- **Variable naming**: Use kebab-case (e.g., `--color-background`, `--transition-base`)
- **Module approach**: Use `@use` to import SCSS modules (mixins, variables), not `@import`
- **Component styles**: Prefer CSS variables from design tokens over hardcoded values

### Vue Components
- Use `<script setup lang="ts">` (Composition API preferred)
- Import only what's needed (components, functions)
- Lazy-load routes using dynamic imports: `() => import('@/views/PageName.vue')`
- Define route names: `name: 'route-name'` in router config

### Line Length & Formatting
- **Max line length**: 120 characters
- **Indentation**: 2 spaces
- **Line endings**: LF (Unix-style)
- Configured in `.editorconfig` and `.prettierrc.json`

### ESLint & Type Safety
- ESLint setup includes Vue 3, TypeScript, and Prettier integration
- Prefer type annotations over `any`
- Use TypeScript strict mode (configured in tsconfig.json)

## Vite Configuration
- **Alias**: `@/` resolves to `src/`
- **SCSS preprocessor**: Automatically includes `src/styles/_mixins.scss` (additionalData)
- **Plugins**: Vue 3 plugin + Vue DevTools for debugging
- **Output**: Builds to `dist/`

## Node Version
Requires Node.js `^22.18.0` or `>=24.12.0` (check `package.json` engines field)
