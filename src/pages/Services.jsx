import { useEffect } from "react"
import { serviceIntro, serviceStages, services } from "../data"

export default function Services() {
  useEffect(() => {
    document.title = "Services | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Our Services</h1>
      <p className="lead">{serviceIntro}</p>
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="wrap">
          {services.map((service) => (
            <article className="service-block" key={service.title}>
              <img src={service.icon} alt="" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          {serviceStages.map((stage) => (
            <div key={stage.title} id={stage.id}>
              <h3>{stage.title}</h3>
              <ul>
                {stage.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
