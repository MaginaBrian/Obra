import { useEffect } from "react"
import { stories } from "../data"

export default function Projects() {
  useEffect(() => {
    document.title = "Obra Projects | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Obra Projects</h1>
      <p className="lead">A short list of assignments associated with the practice. The role is cost, contract and delivery — not the architect’s name on the drawing.</p>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          {stories.map((story) => (
            <article className="project" key={story.title}>
              <img src={story.image} alt={story.alt} />
              <div className="project-copy">
                <p className="kicker">{story.kicker}</p>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </div>
            </article>
          ))}
          <p className="note">Photographs are representative of building type. They are not records of these sites.</p>
        </div>
      </section>
    </>
  )
}
