import { useState } from "react"

export function ContactFacts() {
  return (
    <div>
      <h3>Obra International Ltd</h3>
      <ul className="facts">
        <li>Greenhouse Mall</li>
        <li>Second Floor, Suite 10</li>
        <li>Nairobi, Kenya</li>
        <li><b>P.O. Box:</b> 3494 – 00200</li>
        <li><b>Contact:</b> <a href="tel:+254721986325">+254 721 986 325</a></li>
        <li><b>E-mail:</b> <a href="mailto:info@obraint.co.ke">info@obraint.co.ke</a></li>
      </ul>
    </div>
  )
}

export default function ContactPanel() {
  const [note, setNote] = useState("")

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const subject = String(data.get("subject") || "").trim()
    const message = String(data.get("message") || "").trim()
    if (!name || !email.includes("@") || !subject || !message) {
      setNote("Please complete every field with a valid email.")
      return
    }
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    setNote("Opening your email app with this message to Obra International.")
    window.location.href = `mailto:info@obraint.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="contact-layout">
      <ContactFacts />
      <form className="form" onSubmit={onSubmit}>
        <input name="name" type="text" placeholder="Your Name" required aria-label="Your Name" />
        <input name="email" type="email" placeholder="Your Email" required aria-label="Your Email" />
        <input name="subject" type="text" placeholder="Subject" required aria-label="Subject" />
        <textarea name="message" placeholder="Message" required aria-label="Message" />
        <button className="btn dark" type="submit">Send Message</button>
        <p className="form-note" role="status">{note}</p>
      </form>
    </div>
  )
}
