<div align="center">
  <img src="header.png" alt="eslint-config-nitpicky" width="60%">
</div>

[![package version](https://img.shields.io/npm/v/eslint-config-nitpicky.svg?style=flat-square)](https://npmjs.org/package/eslint-config-nitpicky)
[![package downloads](https://img.shields.io/npm/dm/eslint-config-nitpicky.svg?style=flat-square)](https://npmjs.org/package/eslint-config-nitpicky)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/eslint-config-nitpicky.svg?style=flat-square)](https://npmjs.org/package/eslint-config-nitpicky)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![nitpicky-code-style](https://img.shields.io/badge/code%20style-nitpicky-7681ED.svg?style=flat-square)](https://github.com/tiaanduplessis/eslint-config-nitpicky)

> ESLint config for the refined individual

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Configuration](#configuration)
- [Other](#other)
- [Contribute](#contribute)
- [License](#license)

## About

Shareable configs are designed to work with the `extends` feature of `eslint` files.
You can learn more about
[shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

## Usage

This package has several peer dependencies. Run `npm info "eslint-config-nitpicky@latest" peerDependencies` to list them all.

Install all the dependencies:

```bash
npm install --save-dev eslint-config-nitpicky eslint babel-eslint prettier eslint-config-prettier eslint-plugin-promise eslint-plugin-import

# or

yarn add --dev eslint-config-nitpicky eslint babel-eslint prettier eslint-config-prettier eslint-plugin-promise eslint-plugin-import
```


Then, add this to your `.eslintrc` file:

```json
{
  "extends": "nitpicky",
  "env": {
    "browser": true,
  }
}
```

_Note: The `eslint-config-` prefix  has been omitted since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### Using with prettier

Follow instructions for [prettier-eslint-cli](https://github.com/prettier/prettier-eslint-cli) installation and add script:

```
"format": "prettier-eslint --write --eslint-ignore"
```

### Add a badge [![nitpicky-code-style](https://img.shields.io/badge/code%20style-nitpicky-7681ED.svg?style=flat-square)](https://github.com/tiaanduplessis/eslint-config-nitpicky)

```
[![nitpicky-code-style](https://img.shields.io/badge/code%20style-nitpicky-7681ED.svg?style=flat-square)](https://github.com/tiaanduplessis/eslint-config-nitpicky)
```

## Configurations

## React

Includes the [default configuration](./index.js) as well as [React](https://reactjs.org/) specific environment specification and rules via:

- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)

Setup:

```bash
$ npm install --save-dev eslint-config-nitpicky eslint babel-eslint prettier eslint-config-prettier eslint-plugin-promise eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks

# or

yarn add --dev eslint-config-nitpicky eslint babel-eslint prettier eslint-config-prettier eslint-plugin-promise eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks

```

In your `.eslintrc`:

```json
{
  "extends": "nitpicky/react"
}
```

## Other

Useful project specific plugins to consider:

- [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest)
- [`eslint-plugin-security`](https://github.com/nodesecurity/eslint-plugin-security)
- [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype)
- [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT

