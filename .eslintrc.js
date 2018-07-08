module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    plugins: ['react', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'eol-last': ['error', 'always'],
        quotes: ['error', 'single'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'arrow-body-style': ['warn', 'always'],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: [],
                specialLink: [],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
    },
};
