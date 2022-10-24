// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:regexp/recommended'],
  overrides: [
    {
      // To ensure best performance enable only on e2e test files
      files: ['*.{js,jsx,jsx,tsx}'],
      extends: ['plugin:regexp/recommended'],
      rules: {
        'regexp/prefer-result-array-groups': 'off',
      },
    },
  ],
}
