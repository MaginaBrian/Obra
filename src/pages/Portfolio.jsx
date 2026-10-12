import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import PortfolioGrid from "../components/PortfolioGrid"
import { filters, projects } from "../data"

export default function Portfolio() {
  const [params] = useSearchParams()
  const requested = params.get("cat")
  const initialFilter = filters.some((item) => item.id === requested) ? requested : "all"

  useEffect(() => {
    document.title = "Projects | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="lead">Projects from the list. A photo is titled only where the list gives a name.</p>
      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <PortfolioGrid items={projects} initialFilter={initialFilter} />
        </div>
      </section>
    </>
  )
}
