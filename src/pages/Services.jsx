import { useEffect } from "react"
import { services } from "../data"

export default function Services() {
  useEffect(() => {
    document.title = "Services | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Our Services</h1>
      <p className="lead">Three disciplines on the mark: quantity surveying, project management and arbitration. The work around them follows from those.</p>
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="wrap">
          {services.map((service) => (
            <article className="service-block" key={service.title}>
              <img src={service.icon} alt="" />
              <div>
                <h3>{service.title}</h3>
                <ul>
                  {service.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
