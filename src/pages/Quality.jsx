import { useEffect } from "react"

export default function Quality() {
  useEffect(() => {
    document.title = "Quality Policy | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Our Quality Policy</h1>
      <section className="section" style={{ paddingTop: 36 }}>
        <div className="wrap quality">
          <img src="/images/iso-9001.jpg" alt="ISO 9001 Bureau Veritas Certification" />
          <div className="prose">
            <p>The management and staff of Obra International Ltd are committed to quantity surveying, project management and arbitration that meet our clients’ needs.</p>
            <p>Obra International Ltd meets the requirements of ISO 9001 and continually improves the quality management system that supports this work.</p>
            <p>Quality objectives are set across the firm and reviewed so that the consultancy we deliver stays efficient, accurate and timely.</p>
          </div>
        </div>
      </section>
    </>
  )
}
