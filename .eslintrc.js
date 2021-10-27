module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended',
    'standard'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {}
}
