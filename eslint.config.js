import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tailwindcss from "eslint-plugin-tailwindcss";
import prettier from "eslint-plugin-prettier";
import jsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";

export default [
  js.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
      },
    },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsparser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: { astro },
    rules: {
      ...astro.configs["flat/recommended"][0].rules,
    },
  },

  {
    files: ["**/*.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: { jsonc },
    rules: {
      "jsonc/auto": "error",
      "jsonc/no-dupe-keys": "error",
      "jsonc/quote-props": ["error", "always"],
    },
  },

  {
    files: ["**/*.{ts,tsx,astro}"],
    plugins: { tailwindcss },
    rules: {
      "tailwindcss/classnames-order": "warn",
    },
  },

  {
    files: ["**/*.{ts,tsx,astro,json}"],
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
    },
  },

  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.astro/**", "**/*.d.ts"],
  },
];
