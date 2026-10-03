import { useEffect } from "react"

export default function Quality() {
  useEffect(() => {
    document.title = "Quality Policy | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Quality Policy</h1>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="prose">
          <p>A quantity is only useful if someone else can follow it back to a drawing, a rate, or a clause. That is the standard Obra International works to.</p>
          <h3>What we check</h3>
          <ul>
            <li>Every estimate names its drawings, its rates and its exclusions.</li>
            <li>Every valuation can be tied to work done, materials on site, or a variation that has been instructed.</li>
            <li>Every claim separates what is measured from what is argued.</li>
            <li>We do not certify what we have not seen or reconciled.</li>
          </ul>
          <h3>How the work is held</h3>
          <ul>
            <li>Files stay traceable: instruction, measurement, rate, and the person who signed.</li>
            <li>Advice that affects cost or time is written down, not left in a meeting.</li>
            <li>Where a conflict of interest exists, it is declared before the instruction is accepted.</li>
            <li>Client and project information is kept confidential.</li>
          </ul>
          <h3>Competence</h3>
          <p>The practice works on local and international forms, including FIDIC, NEC and JCT, and on funding models that include EPC, public-private partnerships, government programmes and donor-funded work. People are put on a job they can actually measure.</p>
          <h3>Improvement</h3>
          <p>After final account or award, the file is reviewed for what the first budget missed. Those lessons go into the next feasibility, not into a drawer.</p>
        </div>
      </section>
    </>
  )
}
