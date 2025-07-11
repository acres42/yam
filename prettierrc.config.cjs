module.exports = {
  singleQuote: false, // <-- enforce double quotes
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  printWidth: 100,
  endOfLine: "lf",
};
