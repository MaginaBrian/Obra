import { useEffect } from "react"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import ContactPanel from "../components/ContactPanel"
import { filters, projects, services } from "../data"

export default function Home() {
  useEffect(() => {
    document.title = "Obra International | Quantity Surveying, Project Management, Arbitration"
  }, [])

  return (
    <>
      <Hero />
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">Our Services</h2>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <img src={service.icon} alt="" />
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="cta-photo" style={{ backgroundImage: "url(/images/cta-site.jpg)" }} role="img" aria-label="Construction site" />
        <div className="cta-panel" style={{ backgroundImage: "url(/images/cta-house.jpg)" }}>
          <div>
            <h2>WE'D LOVE TO HEAR FROM YOU.</h2>
            <Link className="btn" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">Obra Projects</h2>
          <div className="project-list">
            {filters.map((filter) => {
              const sample = projects.find((item) => item.cat === filter.id)
              if (!sample) return null
              return (
                <Link className="project" key={filter.id} to={`/portfolio?cat=${filter.id}`}>
                  <img src={sample.image} alt={filter.label} />
                  <div className="project-copy">
                    <h3>{filter.label}</h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <h2 className="section-title">Contact Us</h2>
          <ContactPanel />
        </div>
      </section>
    </>
  )
}
