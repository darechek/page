module.exports = {
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "mocha": true,
        "browser": true,
    },
    "globals": {
        "jest": true,
        "require": true
    },
    "rules": {
        "no-tabs": 0,
        "react/jsx-indent-props": ['error', 'tab'],
        'react/no-array-index-key': 0,
        'react/require-default-props': 1,
        "react/jsx-indent": ['error', 'tab'],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": 0,
        "indent": ["error", "tab"]
    },
    "plugins": [
        "import",
        "react"
    ],
};