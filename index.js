module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'plugin:flowtype/recommended', 'plugin:jest/recommended', 'plugin:compat/recommended'],
    env: {
        jest: true,
        browser: true,
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        semi: [2, 'never'],
    },
}
