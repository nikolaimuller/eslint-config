// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // Ignore cypress tests
  ignorePatterns: ['**/cypress'],
  overrides: [
    {
      files: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['**/test-utils.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/export': 'off',
      },
    },
  ],
}
