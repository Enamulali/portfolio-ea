import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// the dev server prerenders like the build does, so what you see while working is what ships
function prerenderInDev() {
  return {
    name: "prerender-in-dev",
    async transformIndexHtml(html, ctx) {
      if (!ctx.server) return html;
      const { render } = await ctx.server.ssrLoadModule("/src/entry-server.jsx");
      return html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
    },
    // nothing hydrates, so a component edit reloads the page; css keeps tailwind's own hot update
    handleHotUpdate({ server, file }) {
      if (file.includes("/src/") && !file.endsWith(".css")) {
        server.hot.send({ type: "full-reload" });
        return [];
      }
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), prerenderInDev()],
  esbuild: { jsx: "automatic" },
  build: {
    // nothing emits modulepreload tags here, so the polyfill is dead weight
    modulePreload: { polyfill: false },
    // the slider ships unminified, so anyone who opens it can read it
    minify: false,
    cssMinify: true,
  },
});
