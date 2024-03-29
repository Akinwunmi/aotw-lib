module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['enum', 'enumMember', 'interface', 'typeParameter'],
        format: ['PascalCase']
      },
      {
        selector: 'function',
        format: ['camelCase']
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase']
      },
      {
        selector: 'variable',
        modifiers: ['global'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',    
    '@typescript-eslint/semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'import/no-extraneous-dependencies': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always'
      }
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'max-len': [
      'error',
      {
        'code': 90
      }
    ],
    'max-lines': [
      'error',
      {
        'max': 200
      }
    ],
    'no-multiple-empty-lines': 'error',
    'padding-line-between-statements': [
      'warn',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'class'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'function'
      },
      {
        'blankLine': 'always',
        'prev': 'block-like',
        'next': ['let', 'const']
      }
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': 'off'
  }
};
