module.exports = {
  root: true,
  extends: ['plugin:react/recommended', '@ramseyinhouse'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'comma-dangle': [1, 'always-multiline'],
    'no-console': 'off',
    'no-unused-vars': "warn",
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react/prop-types': 'off',
    semi: [1, 'always'],
  },
};
