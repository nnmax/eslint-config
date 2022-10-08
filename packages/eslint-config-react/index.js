/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: [
    '@nnmax/eslint-config-basic',
    '@nnmax/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    require.resolve('./react'),
    require.resolve('./react-a11y'),
    require.resolve('./react-hooks'),
  ],
}

module.exports = eslintConfig
