import tailwindConfig from 'stylelint-config-tailwindcss';
import standardConfig from 'stylelint-config-standard';

export default {
  extends: [standardConfig, tailwindConfig],
  rules: {
    'at-rule-no-deprecated': null,
  },
};
