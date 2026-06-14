import { readFileSync, writeFileSync } from 'node:fs'

const BASE = 'https://nielspfeffer.de'
const ROUTES = ['vita', 'media', 'contact']

const indexHtml = readFileSync('dist/index.html', 'utf8')

// SPA fallback for unknown routes. GitHub Pages serves 404.html with a 404
// status, which is correct for genuinely-missing URLs.
writeFileSync('dist/404.html', indexHtml)

// Flat .html files (not directories) so GitHub Pages serves e.g. /contact with
// a 200 and no trailing-slash redirect. Each page gets a self-referencing
// canonical / og:url so Google indexes it on its own URL.
for (const route of ROUTES) {
  const url = `${BASE}/${route}`
  const html = indexHtml
    .replace(
      `rel="canonical" href="${BASE}/"`,
      `rel="canonical" href="${url}"`
    )
    .replace(
      `property="og:url" content="${BASE}/"`,
      `property="og:url" content="${url}"`
    )
  writeFileSync(`dist/${route}.html`, html)
}
