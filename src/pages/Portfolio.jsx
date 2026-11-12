import { useSearchParams } from "react-router-dom"
import PortfolioGrid from "../components/PortfolioGrid"
import { filters, projects } from "../data"

export default function Portfolio() {
  const [params] = useSearchParams()
  const requested = params.get("cat")
  const initialFilter = filters.some((item) => item.id === requested) ? requested : "all"

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="lead">Quantity surveying and project management work across Kenya, from housing and public buildings to churches and markets.</p>
      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <PortfolioGrid items={projects} initialFilter={initialFilter} />
        </div>
      </section>
    </>
  )
}
