import { useEffect, useState } from "react"
import { gallery } from "../data"

export default function Gallery() {
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    document.title = "Gallery | Obra International"
  }, [])

  useEffect(() => {
    if (!photo) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") setPhoto(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [photo])

  return (
    <>
      <h1 className="page-title">Gallery</h1>
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="wrap">
          <div className="grid">
            {gallery.map(([src, label, caption]) => (
              <button className="card-hit" type="button" key={src} onClick={() => setPhoto({ src, caption })}>
                <img src={src} alt={caption || "Residential property"} />
                {label ? <span>{label}</span> : null}
              </button>
            ))}
          </div>
        </div>
      </section>
      {photo && (
        <div className="lightbox is-open" onClick={(event) => { if (event.target === event.currentTarget) setPhoto(null) }}>
          <button className="lb-close" type="button" aria-label="Close" onClick={() => setPhoto(null)}>×</button>
          <img src={photo.src} alt={photo.caption} />
          <p>{photo.caption}</p>
        </div>
      )}
    </>
  )
}
