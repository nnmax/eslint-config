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
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: false,
        allowNamedExports: true,
        enums: false,
        typedefs: false,
        ignoreTypeReferences: true,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreOnInitialization: true,
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
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
