/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "auto",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        singleQuote: false,
      },
    },
    {
      files: "*.json",
      options: {
        tabWidth: 2,
      },
    },
  ],
};

export default config;
