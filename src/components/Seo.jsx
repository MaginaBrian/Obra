import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { SITE_URL, organization, pages } from "../seo"

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
  const page = pages[pathname]

  useEffect(() => {
    const title = page?.title ?? "Obra International"
    const description = page?.description ?? organization.description
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`
    const image = `${SITE_URL}/images/logo.png`

    document.title = title
    upsertMeta("name", "description", description)
    upsertMeta("name", "robots", page ? "index, follow" : "noindex, follow")
    upsertCanonical(url)
    upsertMeta("property", "og:type", "website")
    upsertMeta("property", "og:site_name", "Obra International")
    upsertMeta("property", "og:title", title)
    upsertMeta("property", "og:description", description)
    upsertMeta("property", "og:url", url)
    upsertMeta("property", "og:image", image)
    upsertMeta("name", "twitter:card", "summary")
    upsertMeta("name", "twitter:title", title)
    upsertMeta("name", "twitter:description", description)
    upsertMeta("name", "twitter:image", image)

    let script = document.getElementById("seo-jsonld")
    if (!script) {
      script = document.createElement("script")
      script.id = "seo-jsonld"
      script.type = "application/ld+json"
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(organization)
  }, [page, pathname])

  return null
}
