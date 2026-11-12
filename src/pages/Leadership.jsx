import { useState } from "react"
import { leaders } from "../data"

function Profile({ person }) {
  const [open, setOpen] = useState(false)
  const more = person.more ?? []

  return (
    <article className="leader">
      <div className="leader-copy">
        <h2>{person.name}</h2>
        {person.role && <p className="leader-role">{person.role}</p>}
        {person.quote && <blockquote>“{person.quote}”</blockquote>}
        {open
          ? more.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          : <p>{person.summary}</p>}
        {more.length > 0 && (
          <button
            className="text-toggle"
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Show less" : "Read more"}
            <span aria-hidden="true">{open ? "‹" : "›"}</span>
          </button>
        )}
      </div>
    </article>
  )
}

export default function Leadership() {
  return (
    <>
      <h1 className="page-title">Leadership</h1>
      <section className="section leaders-section">
        <div className="wrap leaders">
          {leaders.map((person) => <Profile key={person.name} person={person} />)}
        </div>
      </section>
    </>
  )
}
