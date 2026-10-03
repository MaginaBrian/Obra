import { useEffect, useState } from "react"
import { filters } from "../data"

export default function PortfolioGrid({ items }) {
  const [filter, setFilter] = useState("all")
  const [photo, setPhoto] = useState(null)
  const visible = filter === "all" ? items : items.filter((item) => item.cat === filter)

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
      <ul className="filters">
        {filters.map((name) => (
          <li key={name}>
            <button
              type="button"
              className={filter === name ? "is-on" : undefined}
              onClick={() => setFilter((current) => (current === name ? "all" : name))}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <div className="grid">
        {visible.map((item) => (
          <article className="card" key={item.title}>
            <button className="card-hit" type="button" onClick={() => setPhoto(item)}>
              <img src={item.image} alt={item.alt} />
              <span>{item.title}</span>
            </button>
          </article>
        ))}
      </div>
      <p className="note">Photographs show the kinds of buildings the practice advises on. They are not site records of the named assignments.</p>
      {photo && (
        <div className="lightbox is-open" onClick={(event) => { if (event.target === event.currentTarget) setPhoto(null) }}>
          <button className="lb-close" type="button" aria-label="Close" onClick={() => setPhoto(null)}>×</button>
          <img src={photo.image} alt={photo.caption} />
          <p>{photo.caption}</p>
        </div>
      )}
    </>
  )
}
