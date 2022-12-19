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
    // Enforce capitalization of first letter of the comment
    'capitalized-comments': ['error', 'always'],

    // Use indentation of 2 spaces
    indent: ['error', 2],

    // Follow unix line endings
    'linebreak-style': ['error', 'unix'],

    // Prefer starred block structures for multiline comments
    'multiline-comment-style': ['error', 'starred-block'],

    // Disallow inline comments
    'no-inline-comments': 'error',

    // Allow specific patterns of unused variables
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],

    // Encouraging use of let or const over var
    'no-var': 'error',

    // Use single quotes
    quotes: ['error', 'single'],

    // Prevent mistakes. Using a prop name with no value to imply 'true' looks
    // a lot like object shorthand. If you have `const myVar = false` and then
    // do <SomeComponent myVar />, the component will receive a value of `true`
    'react/jsx-boolean-value': ['error', 'always'],

    // Disallow components in JSX extension
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

    // Prevent unnecessary fragments
    'react/jsx-no-useless-fragment': 'error',

    // Supress errors for missing React import
    'react/react-in-jsx-scope': 'off',

    // Use semicolons
    semi: ['error', 'always'],

    // Enforce sorted import declarations
    'sort-imports': ['error', { allowSeparatedGroups: true }],

    // Enforce consistent spacing after the // or /* in a comment
    'spaced-comment': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
