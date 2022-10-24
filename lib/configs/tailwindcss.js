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
      files: ['*.{jsx,tsx}'],
      extends: ['plugin:tailwindcss/recommended'],
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ],
}
