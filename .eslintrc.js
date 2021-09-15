module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'class-methods-use-this': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'react/prop-types': 'off',
  },
};
