// renders the page to html at build time. react is the template engine here,
// not something the visitor downloads.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { render } from "./.ssr/entry-server.js";

const marker = '<div id="root"></div>';
const html = readFileSync("dist/index.html", "utf8");

if (!html.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`);
}

writeFileSync("dist/index.html", html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(".ssr", { recursive: true, force: true });
