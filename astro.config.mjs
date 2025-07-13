import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import tsconfigPaths from "vite-tsconfig-paths";
import vercel from "@astrojs/vercel";

const baseUrl = import.meta.env.PUBLIC_SITE_BASE_URL;
export default defineConfig({
  site: `https://${baseUrl}`,
  adapter: vercel({ edge: true }),
  integrations: [tailwind(), preact()],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
