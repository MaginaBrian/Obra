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
      <p className="lead">Projects from the list. A photo is titled only where the list gives a name.</p>
      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap">
          <PortfolioGrid items={projects} />
        </div>
      </section>
    </>
  )
}
