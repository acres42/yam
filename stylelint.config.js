// stylelint.config.js
export default {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-tailwindcss',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          // optionally add custom at-rules here
        ],
      },
    ],
    'at-rule-no-deprecated': null, // to silence @apply warning if desired
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
};
