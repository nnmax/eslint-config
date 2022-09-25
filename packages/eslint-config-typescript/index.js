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
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
}

module.exports = eslintConfig
