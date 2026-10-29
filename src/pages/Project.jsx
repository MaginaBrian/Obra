import { Link, useParams } from "react-router-dom"
import { projects } from "../data"

const rows = [
  ["client", "Client"],
  ["architect", "Architect"],
  ["structural", "Civil/Structural Engineer"],
  ["mechanical", "Mechanical Engineer"],
  ["electrical", "Electrical Engineer"],
  ["surveyor", "Quantity Surveyor"],
  ["contractor", "Main Contractor"],
  ["others", "Others"],
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

  const details = project.description ?? {}

  return (
    <>
      <h1 className="page-title">{project.title}</h1>
      <p className="lead">{project.place}</p>
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="wrap sheet-wrap">
          <img src={project.image} alt={project.alt} />
          <h2>Project Description</h2>
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
          <p className="sheet-back"><Link to="/portfolio">Back to projects</Link></p>
        </div>
      </section>
    </>
  )
}
