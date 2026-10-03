import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function About() {
  useEffect(() => {
    document.title = "About Us | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">About Us</h1>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap split">
          <div className="prose" style={{ margin: 0 }}>
            <p>Obra International Ltd is a Nairobi practice in quantity surveying, project management and arbitration. The work sits with employers and contractors on housing, infrastructure and institutions across Kenya and the wider region.</p>
            <p>Reported assignments take in infrastructure and housing of more than USD 500 million in combined project value, in sectors that include housing, aviation, oil and gas, manufacturing and pharmaceuticals.</p>
            <p>The practice prepares contract documents for the funding behind the job — EPC, World Bank funded, government funded and public-private partnerships — and works with FIDIC, NEC and JCT.</p>
          </div>
          <div className="stats">
            <div className="stat"><b>QS · PM · Arbitration</b><span>The three lines under the name.</span></div>
            <div className="stat"><b>USD 500m+</b><span>Infrastructure and housing advised on, in combined project value.</span></div>
            <div className="stat"><b>FIDIC, NEC, JCT</b><span>Standard forms used on the work.</span></div>
            <div className="stat"><b>Nairobi</b><span>P.O. Box 3494 – 00200, Kenya.</span></div>
          </div>
        </div>
      </section>
      <section className="section" id="approach" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <h2 className="section-title">Our Approach</h2>
          <p>Count the cost before the ground is opened. Say what the figure includes. Stay long enough to know whether the building that was priced is the building that was built.</p>
          <p>When a job becomes a dispute, the same file should be able to stand in front of a tribunal: measurement, rate, instruction, and the time that was lost. Arbitration is not a separate language from quantity surveying. It is the same language, read under pressure.</p>
          <p><Link className="btn dark" to="/contact">Talk to the practice</Link></p>
        </div>
      </section>
    </>
  )
}
