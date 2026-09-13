import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // `dist` was the Vite build; Next emits `.next` and the exported `out`.
  globalIgnores(['.next', 'out']),
  {
    files: ['**/*.{js,jsx,mjs}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      // Server components render in Node, so allow both sets of globals.
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
