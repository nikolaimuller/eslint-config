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
      files: ['**/*.stories.{ts,tsx,mdx}'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
}
