module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true, // Temporary: remove in Phase 3
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'off', // Allow console for now
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-var': 'error',
    'prefer-const': 'warn',
    'prefer-arrow-callback': 'warn',
  },
  globals: {
    // jQuery globals (temporary - remove in Phase 3)
    jQuery: 'readonly',
    $: 'readonly',
    // Plugin globals (will be removed)
    WOW: 'readonly',
    Isotope: 'readonly',
  },
};

