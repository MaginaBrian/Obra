import { useEffect } from "react"
import { about, mission, vision } from "../data"

export default function About() {
  useEffect(() => {
    document.title = "About Us | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">About Us</h1>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap prose">
          {about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      <section className="section" id="mission" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <h2 className="section-title">Our Mission</h2>
          <p>{mission}</p>
        </div>
      </section>
      <section className="section" id="vision" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <h2 className="section-title">Our Vision</h2>
          <p>{vision}</p>
        </div>
      </section>
    </>
  )
}
