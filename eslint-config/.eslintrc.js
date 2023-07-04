module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
    'plugin:lit/recommended',
    'prettier'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint',
    'lit'
	],
	rules: {
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
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/semi': ['error'],
    
    'eol-last': ['error', 'always'],
    'lit/no-invalid-html': 'warn',
    'lit/no-legacy-template-syntax': 'error',
    'lit/no-template-arrow': 'error',
    'lit/no-template-map': 'warn',
    'lit/quoted-expressions': 'error',
    'no-multiple-empty-lines': 'error',
		semi: 'off'
	}
}