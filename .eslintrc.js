module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Use indentation of 2 spaces
    indent: ['error', 2],

    // Follow unix line endings
    'linebreak-style': ['error', 'unix'],

    // Use single quotes
    quotes: ['error', 'single'],

    // Use semicolons
    semi: ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
