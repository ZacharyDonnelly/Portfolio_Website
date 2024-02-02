/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    settings: {
      'import/resolver': {
        typescript: {
          directory: '**/tsconfig.json'
        }
      },
      react: {
        version: 'detect'
      },
      // we're using vitest which has a very similar API to jest
      // (so the linting plugins work nicely), but it means we have to explicitly
      // set the jest version.
      jest: {
        version: 28
      }
    }
  },
  plugins: ['@typescript-eslint', 'prettier', 'jsx-a11y'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-onchange': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': 'off',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/extensions': 'off',
    'import/export': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-self-import': 'off',
    'import/default': 'off',
    'import/no-duplicates': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'one-var': 'off',
    'no-unexpected-multiline': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ]
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['tsx']
          }
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'react/prop-types': 'off'
      }
    }
  ],
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript'
  ]
}
