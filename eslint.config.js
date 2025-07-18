import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tailwindcss from "eslint-plugin-tailwindcss";
import prettier from "eslint-plugin-prettier";
import jsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";

const commonGlobals = {
  document: "readonly",
  window: "readonly",
  console: "readonly",
  fetch: "readonly",
  process: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
};

export default [
  // 🔧 Base JS rules
  js.configs.recommended,

  // 🟦 TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        jsxImportSource: "preact",
        project: "./tsconfig.json",
        sourceType: "module",
      },
      globals: { ...commonGlobals },
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

  // 🪐 Astro
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsparser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...commonGlobals,
        URL: "readonly",
      },
    },
    plugins: {
      astro,
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...astro.configs["flat/recommended"][0].rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  // 🧾 JSON
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

  // 🎨 Tailwind CSS
  {
    files: ["**/*.{ts,tsx,astro}"],
    plugins: { tailwindcss },
    rules: {
      "tailwindcss/classnames-order": "warn",
    },
  },

  // 💅 Prettier integration
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx,astro,json,md}"],
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // 🧰 Node-style utils (CommonJS)
  {
    files: ["src/utils/**/*.ts"],
    languageOptions: {
      globals: {
        module: true,
        require: true,
        __dirname: true,
        ...commonGlobals,
      },
    },
  },

  // 🧪 Vitest (unit & component tests)
  {
    files: ["**/*.test.{ts,tsx,js}"],
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        vi: true,
        global: true,
      },
    },
  },

  // 🚫 Ignored paths
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.astro/**",
      "**/*.d.ts",
      "**/*.md",
      "prettierrc.config.cjs",
    ],
  },
];
