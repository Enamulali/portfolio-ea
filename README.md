# Enamul Ali — Portfolio (React + Vite + Tailwind)

A minimal, animated portfolio site built with React, Vite and TailwindCSS.

## Quick start

Install deps:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

Preview + deploy worker (Cloudflare):

```bash
npm run preview:worker
npm run deploy:worker
```

## Useful scripts (from `package.json`)

- `dev` — start Vite dev server
- `build` — build production assets to `dist`
- `preview` — preview production build locally
- `preview:worker` / `deploy:worker` — build + Cloudflare Wrangler dev / deploy

## Important files

```
src/
  ├─ App.jsx                # Main layout + timeline
  ├─ main.jsx               # Entrypoint
  ├─ index.css              # All styles, gradient + glitch keyframes
  ├─ assets/icons.jsx       # Local SVG icons (IconReact, IconCloudflare, etc.)
  ├─ components/
  │   ├─ Header.jsx         # Hero + glitch subtitle
  │   ├─ TimelineItem.jsx   # Timeline entry component
  │   ├─ ProjectCard.jsx
  │   └─ ContactPopper.jsx
  └─ data/                  # content (experiences, projects, certs...)
vite.config.js
wrangler.toml                # Cloudflare worker config (deploy target)
```

## Deployment

- The project builds to `dist`. `wrangler.toml` is configured to serve those static assets on Cloudflare Workers (see `preview:worker` / `deploy:worker` scripts).

## Author

Enamul Ali
