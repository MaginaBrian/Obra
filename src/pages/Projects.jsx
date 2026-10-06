import { useEffect } from "react"
import { stories } from "../data"

export default function Projects() {
  useEffect(() => {
    document.title = "Obra Projects | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Obra Projects</h1>
      <p className="lead">Named assignments from the project list. Photos without a name in the list stay untitled.</p>
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
        </div>
      </section>
    </>
  )
}
