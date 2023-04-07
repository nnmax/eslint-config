/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nnmax/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: {
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'],
      },
    },
    'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'],
  },
}

module.exports = eslintConfig
