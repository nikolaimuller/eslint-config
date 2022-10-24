Eslint config by mullerstd

## Install

Using yarn:

```bash
yarn add -D @mullerstd/eslint-config
```

Or using npm:

```bash
npm i @mullerstd/eslint-config --save-dev
```

## Usage

Base config:

```json
{
  "extends": "@mullerstd/eslint-config"
}
```

Extended config:

```json
{
  "extends": [
    "@mullerstd/eslint-config",
    "@mullerstd/eslint-config/react",
    "@mullerstd/eslint-config/tailwindcss",
    "@mullerstd/eslint-config/storybook",
    "@mullerstd/eslint-config/mdx",
    "@mullerstd/eslint-config/testing-library",
    "@mullerstd/eslint-config/cypress",
    "@mullerstd/eslint-config/regexp",
    "@mullerstd/eslint-config/prettier"
  ]
}
```

Using modern-module-resolution:

**.eslintrc.js**

```js
require('@mullerstd/eslint-config/patch/modern-module-resolution')

module.exports = {
  ...
}
```
