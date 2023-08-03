module.exports = {
  extends: [
    '@aotw/eslint-config',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended'
  ],
  plugins: [
    'lit',
    'lit-a11y'
  ],
  rules: {
    'lit/no-invalid-html': 'warn',
    'lit/no-legacy-template-syntax': 'error',
    'lit/no-template-arrow': 'error',
    'lit/no-template-map': 'warn',
    'lit/quoted-expressions': 'error'
  }
}
