import { Link, useParams } from "react-router-dom"
import { projects } from "../data"

const rows = [
  ["client", "Client"],
  ["location", "Location"],
  ["role", "Role"],
  ["value", "Value"],
]

export default function Project() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <section className="section">
        <div className="wrap">
          <h1 className="page-title">Page not found</h1>
          <p>This address is not part of the Obra International site.</p>
        </div>
      </section>
    )
  }

  const details = { location: project.place, ...(project.description ?? {}) }
  const related = projects.filter((item) => item.cat === project.cat && item.id !== project.id).slice(0, 3)
  const role = /project management/i.test(details.role || "")
    ? "project management"
    : /quantity/i.test(details.role || "")
      ? "quantity surveying"
      : /qs/i.test(details.role || "")
        ? "quantity surveying, including bills of quantities"
        : (details.role || "quantity surveying and project management").toLowerCase()

  const fallback = `Obra International provided ${role} for ${project.title} in ${project.place}${details.client ? `, appointed by ${details.client}` : ""}.${details.value ? ` The project value is ${details.value}.` : ""}`

  return (
    <>
      <h1 className="page-title">{project.title}</h1>
      <p className="lead">{project.place}</p>
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="wrap sheet-wrap">
          <img src={project.image} alt={project.alt} />
          <h2>Project Description</h2>
          <p className="story">{project.story || fallback}</p>
          <h2>Project Details</h2>
          <table className="sheet">
            <tbody>
              <tr>
                <th scope="row">Project</th>
                <td>{project.title}</td>
              </tr>
              {rows.map(([key, label]) => (
                <tr key={key}>
                  <th scope="row">{label}</th>
                  <td>{details[key] || "n/a"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="sheet-back"><Link to="/portfolio">Back to projects</Link> · <Link to="/services">Our services</Link></p>
          {related.length > 0 && (
            <>
              <h2>More projects</h2>
              <ul className="related">
                {related.map((item) => (
                  <li key={item.id}><Link to={`/portfolio/${item.id}`}>{item.title}</Link>, {item.place}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  )
}
