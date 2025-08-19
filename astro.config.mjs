import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import tsconfigPaths from "vite-tsconfig-paths";

const baseUrl = import.meta.env.PUBLIC_SITE_BASE_URL;
export default defineConfig({
  output: "server",
  site: `https://${baseUrl}`,
  adapter: vercel({ runtime: "edge" }),
  integrations: [tailwind(), preact(), sitemap()],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
