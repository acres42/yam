// tests/utils/renderAstroComponent.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

export async function renderAstroComponentAsHTML(
  componentPath: string,
  props: Record<string, any> = {},
) {
  const absolutePath = path.resolve(componentPath);

  // 👇 simulate what Astro normally compiles
  const component = (await import(absolutePath)).default;

  // call the Astro component (returns a string if SSR-compatible)
  const html = await component(props);

  const dom = new JSDOM(html);
  return {
    html,
    dom,
    container: dom.window.document.body,
  };
}
