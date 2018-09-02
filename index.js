module.exports = {
    parserOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        modules: true,
      },
    },
    env: {
      browser: true,
      node: true,
      jest: true,
    },
    extends: ['airbnb', 'plugin:flowtype/recommended', 'plugin:jest/recommended', 'plugin:compat/recommended'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      semi: [2, 'never'],
    },
  }
  