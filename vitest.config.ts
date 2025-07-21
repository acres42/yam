import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";
import path, { dirname, resolve } from "path";
import preact from "@preact/preset-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [preact(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@tests": path.resolve(__dirname, "./tests"),
    },
    conditions: ["astro"],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  optimizeDeps: {
    exclude: ["astro"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.ts?(x)"],
    server: {
      deps: {
        inline: [/preact/, /@testing-library/],
      },
    },
    includeSource: ["src/**/*.{ts,tsx,js,jsx,astro}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      all: true,
      exclude: [
        "**/*.astro",
        "**/*.d.ts",
        "**/node_modules/**",
        "**/tests/**",
        "**/.astro/**",
        "**/vitest.config.ts",
        "**/astro.config.mjs",
        "**/*.config.*",
        "**/scripts/initAOS.js",
      ],
    },
  },
});
