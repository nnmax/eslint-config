/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: [
    '@nnmax/eslint-config-typescript',
    require.resolve('./react'),
    require.resolve('./react-a11y'),
    require.resolve('./react-hooks'),
  ],
}

module.exports = eslintConfig
