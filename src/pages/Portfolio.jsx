import { useEffect } from "react"
import PortfolioGrid from "../components/PortfolioGrid"
import { projects } from "../data"

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Portfolio</h1>
      <p className="lead">Selected assignments associated with the practice, across housing, institutions, commercial work and infrastructure.</p>
      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <PortfolioGrid items={projects} />
        </div>
      </section>
    </>
  )
}
