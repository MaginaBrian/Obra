import { useState } from "react"
import { Link } from "react-router-dom"
import { filters } from "../data"

export default function PortfolioGrid({ items, initialFilter = "all" }) {
  const [filter, setFilter] = useState(initialFilter)
  const visible = filter === "all" ? items : items.filter((item) => item.cat === filter)

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
              <Link className="card-hit" to={`/portfolio/${item.id}`}>
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                {(item.title || item.place) && (
                  <span>
                    {item.title && <strong>{item.title}</strong>}
                    {item.place && <small>{item.place}</small>}
                  </span>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  )
}
