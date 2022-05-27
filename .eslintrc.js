module.exports = {
  root: true,
  extends: ['plugin:react/recommended', '@ramseyinhouse'],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    semi: [2, 'always'],
  },
};
