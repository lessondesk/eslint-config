<div align="center">
  <img src="header.png" alt="eslint-config-nitpicky">
</div>


[![package version](https://img.shields.io/npm/v/eslint-config-nitpicky.svg?style=flat-square)](https://npmjs.org/package/eslint-config-nitpicky)
[![package downloads](https://img.shields.io/npm/dm/eslint-config-nitpicky.svg?style=flat-square)](https://npmjs.org/package/eslint-config-nitpicky)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/eslint-config-nitpicky.svg?style=flat-square)](https://npmjs.org/package/eslint-config-nitpicky)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Personalized eslint config

## Table of Contents

- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Usage

Shareable configs are designed to work with the `extends` feature of `eslint` files.
You can learn more about
[shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use this config, run:

```bash
npm install --save-dev eslint-config-nitpicky eslint-config-airbnb eslint-plugin-babel eslint-plugin-compat eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-jest eslint-plugin-react babel-eslint eslint
```

Then, add this to your `.eslintrc` file:

```
{
  "extends": "nitpicky"
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

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    
