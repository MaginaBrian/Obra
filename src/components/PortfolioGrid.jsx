import { useEffect, useState } from "react"
import { filters } from "../data"

export default function PortfolioGrid({ items, initialFilter = "all" }) {
  const [filter, setFilter] = useState(initialFilter)
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
        {filters.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={filter === item.id ? "is-on" : undefined}
              onClick={() => setFilter((current) => (current === item.id ? "all" : item.id))}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      {visible.length === 0 ? (
        <p className="note">Photos for this category are next.</p>
      ) : (
        <div className="grid">
          {visible.map((item) => (
            <article className="card" key={item.id}>
              <button className="card-hit" type="button" onClick={() => setPhoto(item)}>
                <img src={item.image} alt={item.alt} />
                {(item.title || item.place) && (
                  <span>
                    {item.title && <strong>{item.title}</strong>}
                    {item.place && <small>{item.place}</small>}
                  </span>
                )}
              </button>
            </article>
          ))}
        </div>
      )}
      {photo && (
        <div className="lightbox is-open" onClick={(event) => { if (event.target === event.currentTarget) setPhoto(null) }}>
          <button className="lb-close" type="button" aria-label="Close" onClick={() => setPhoto(null)}>×</button>
          <img src={photo.image} alt={photo.alt} />
          <p>
            {photo.title && <strong>{photo.title}</strong>}
            {photo.place && <small>{photo.place}</small>}
          </p>
        </div>
      )}
    </>
  )
}
