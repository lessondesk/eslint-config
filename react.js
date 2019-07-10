module.exports = {
  'extends': [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    './index.js',
  ],
  'plugins': ['jsx-a11y', 'react-hooks'],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  settings: {
    react: {
      version: "detect"
    },
  },
  'rules': {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': ['error', { 'forbid': ['>', '"', '}'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-did-mount-set-state': 'off',
    'react/prop-types': 'off',
  },
}
