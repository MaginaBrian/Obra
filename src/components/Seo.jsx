import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { organization, seoFor, SITE_URL } from "../seo"

function upsertMeta(attr, key, content) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", "canonical")
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = seoFor(pathname)
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`

    document.title = page.title
    upsertMeta("name", "description", page.description)
    upsertMeta("name", "robots", page.robots)
    upsertCanonical(url)
    upsertMeta("property", "og:type", "website")
    upsertMeta("property", "og:site_name", "Obra International")
    upsertMeta("property", "og:title", page.title)
    upsertMeta("property", "og:description", page.description)
    upsertMeta("property", "og:url", url)
    upsertMeta("property", "og:image", page.image)
    upsertMeta("property", "og:image:alt", page.title)
    if (page.image.endsWith("/images/og.jpg")) {
      upsertMeta("property", "og:image:width", "1200")
      upsertMeta("property", "og:image:height", "630")
    } else {
      document.head.querySelector('meta[property="og:image:width"]')?.remove()
      document.head.querySelector('meta[property="og:image:height"]')?.remove()
    }
    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", page.title)
    upsertMeta("name", "twitter:description", page.description)
    upsertMeta("name", "twitter:image", page.image)

    let script = document.getElementById("seo-jsonld")
    if (!script) {
      script = document.createElement("script")
      script.id = "seo-jsonld"
      script.type = "application/ld+json"
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(organization)
  }, [pathname])

  return null
}
