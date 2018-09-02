module.exports = {
    "parser": "babel-eslint",
    extends: ['airbnb', 'plugin:flowtype/recommended', 'plugin:jest/recommended', 'plugin:compat/recommended'],
    "plugins": [
        "babel"
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        semi: [2, 'never'],
    },
}
