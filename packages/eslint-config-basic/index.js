/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', '@nnmax/eslint-config-import'],
  rules: {
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],
    'no-constructor-return': ['error'],
    'no-promise-executor-return': ['error'],
    'no-self-compare': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unreachable': ['error'],
    'accessor-pairs': ['error'],
    'block-scoped-var': ['error'],
    'default-case': ['error'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'require-atomic-updates': ['error'],
    'default-param-last': ['error'],
    'eqeqeq': ['error', 'always'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-label': ['error'],
    'no-invalid-this': ['error'],
    'no-label-var': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    'no-negated-condition': ['error'],
    'no-var': ['error'],
    'no-shadow': ['error'],
    'prefer-rest-params': ['error'],
    'radix': ['error'],
  },
}

module.exports = eslintConfig
