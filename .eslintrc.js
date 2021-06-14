module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['auto-import'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    }
};
