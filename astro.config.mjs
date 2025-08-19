import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  output: "server",
  site: "https://youngadultmedicine.com",
  adapter: vercel({ runtime: "edge" }),
  integrations: [tailwind(), preact(), sitemap()],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
