# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


## Build Setup: Site + Library

This project builds two separate outputs from one repo:

- **Site** (`dist/`) — React app showcasing the library, deployed to Vercel
- **Library** (`dist-lib/`) — publishable npm package

### Why two configs

Vite's `build.lib` mode only emits JS/CSS bundles — it ignores `index.html`.
Using one config for both builds caused either a missing site (404 on Vercel)
or a `dist` overwrite that deleted `index.html`.

### Files

- `vite.config.ts` — site build, entry `index.html`, outputs to `dist`
- `vite.lib.config.ts` — library build, entry `src/index.ts`, outputs to `dist-lib`
- `tsconfig.lib.json` — generates `.d.ts` files for the library, outDir must match `dist-lib`

### package.json scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:lib": "vite build -c vite.lib.config.ts && tsc -p tsconfig.lib.json",
  "preview": "vite preview"
}
```

- `build` → site only, no type generation needed (no external consumers)
- `build:lib` → library bundle + `.d.ts` files for npm consumers
- `-c vite.lib.config.ts` flag tells Vite to use the lib config instead of the default

### package.json fields for publishing

```json
"main": "./dist-lib/easeui.umd.js",
"module": "./dist-lib/easeui.es.js",
"types": "./dist-lib/index.d.ts",
"files": ["dist-lib"]
```

### Vercel

- Build command: `npm run build` (default)
- Output directory: `dist`

### npm publish

```bash
npm run build:lib
npm version patch
npm publish
```
