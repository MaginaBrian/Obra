import ContactPanel from "../components/ContactPanel"

export default function Contact() {
  return (
    <>
      <h1 className="page-title">Contact Us</h1>
      <p className="lead">Talk to our Nairobi team about quantity surveying, bills of quantities, project management or construction arbitration in Kenya.</p>
      <section className="section">
        <div className="wrap">
          <ContactPanel />
        </div>
      </section>
    </>
  )
}
