import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// the build prerenders via prerender.js; this does the same for the dev server,
// so what you see while working is what ships
function prerenderInDev() {
  return {
    name: 'prerender-in-dev',
    async transformIndexHtml(html, ctx) {
      if (!ctx.server) return html
      const { render } = await ctx.server.ssrLoadModule('/src/entry-server.jsx')
      return html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
    },
    // nothing hydrates, so a component edit cannot hot-update. reload instead,
    // and leave css alone so tailwind keeps its own hmr
    handleHotUpdate({ server, file }) {
      if (file.includes('/src/') && !file.endsWith('.css')) {
        server.hot.send({ type: 'full-reload' })
        return []
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    prerenderInDev()
  ],
    build: {
    outDir: 'dist',
    // nothing emits modulepreload tags here; the polyfill was half the bundle
    modulePreload: { polyfill: false },
  },
})
