// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: [
        '**/cypress/*.test.js',
        '**/cypress/*.test.jsx',
        '**/cypress/*.test.tsx',
        '**/cypress/*.spec.js',
        '**/cypress/*.spec.jsx',
        '**/cypress/*.spec.tsx',
      ],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
      plugins: ['cypress'],
    },
  ],
}
