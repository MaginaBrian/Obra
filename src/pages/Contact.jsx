import { useEffect } from "react"
import ContactPanel from "../components/ContactPanel"

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Obra International"
  }, [])

  return (
    <>
      <h1 className="page-title">Contact Us</h1>
      <section className="section">
        <div className="wrap">
          <ContactPanel showCity />
        </div>
      </section>
    </>
  )
}
