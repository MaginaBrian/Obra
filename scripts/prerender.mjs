import { createServer } from "node:http"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { extname, join } from "node:path"
import { fileURLToPath } from "node:url"
import puppeteer from "puppeteer-core"
import { publicPaths, seoFor } from "../src/seo.js"

const root = fileURLToPath(new URL("..", import.meta.url))
const dist = join(root, "dist")
const site = "https://obraint.co.ke"
const paths = [...publicPaths(), "/404"]

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
}

function startServer() {
  const server = createServer(async (req, res) => {
    const url = decodeURIComponent((req.url || "/").split("?")[0])
    const relative = url === "/" ? "/index.html" : url
    try {
      const body = await readFile(join(dist, relative))
      res.writeHead(200, { "content-type": types[extname(relative)] || "application/octet-stream" })
      res.end(body)
      return
    } catch {
      const fallback = await readFile(join(dist, "index.html"))
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" })
      res.end(fallback)
    }
  })
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server))
  })
}

function outputFile(pathname) {
  if (pathname === "/") return join(dist, "index.html")
  if (pathname === "/404") return join(dist, "404.html")
  return join(dist, pathname.slice(1), "index.html")
}

const indexed = publicPaths()
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexed.map((pathname) => `  <url><loc>${site}${pathname === "/" ? "/" : pathname}</loc></url>`).join("\n")}
</urlset>
`
await writeFile(join(dist, "sitemap.xml"), sitemap)
await writeFile(join(root, "public", "sitemap.xml"), sitemap)

const server = await startServer()
const { port } = server.address()
const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
})

try {
  const page = await browser.newPage()
  for (const pathname of paths) {
    const expected = seoFor(pathname).title
    await page.goto(`http://127.0.0.1:${port}${pathname}`, { waitUntil: "networkidle0", timeout: 30000 })
    await page.waitForFunction((title) => document.title === title, { timeout: 10000 }, expected)
    let html = await page.content()
    if (!html.startsWith("<!doctype")) html = `<!doctype html>\n${html}`
    const file = outputFile(pathname)
    await mkdir(join(file, ".."), { recursive: true })
    await writeFile(file, html)
    console.log(pathname)
  }
} finally {
  await browser.close()
  await new Promise((resolve) => server.close(resolve))
}
