export const SITE_URL = "https://obraint.co.ke"

const homeDescription =
  "Obra International is a Nairobi construction consultancy specializing in quantity surveying, project management and arbitration."

export const pages = {
  "/": {
    title: "Obra International | Quantity Surveying, Project Management, Arbitration",
    description: homeDescription,
  },
  "/services": {
    title: "Services | Obra International",
    description:
      "Quantity surveying, project management and arbitration, from budgets and bills of quantities to valuations, final accounts and dispute resolution.",
  },
  "/portfolio": {
    title: "Projects | Obra International",
    description:
      "Residential, public, religious and market projects by Obra International in Kenya.",
  },
  "/quality": {
    title: "Quality Policy | Obra International",
    description:
      "Obra International’s ISO 9001 quality policy for quantity surveying, project management and arbitration.",
  },
  "/about": {
    title: "About Us | Obra International",
    description:
      "Obra International, established in 2010, is a Nairobi consultancy in quantity surveying, project management and arbitration.",
  },
  "/contact": {
    title: "Contact Us | Obra International",
    description:
      "Obra International Ltd, Greenhouse Mall, Second Floor, Suite 10, Nairobi. Phone 020 240 6394. Email info@obraint.co.ke.",
  },
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Obra International Ltd",
  url: SITE_URL,
  image: `${SITE_URL}/images/logo.png`,
  email: "info@obraint.co.ke",
  telephone: "+254202406394",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Greenhouse Mall, Second Floor, Suite 10",
    addressLocality: "Nairobi",
    postalCode: "00200",
    postOfficeBoxNumber: "3494-00200",
    addressCountry: "KE",
  },
  description: homeDescription,
  knowsAbout: ["Quantity Surveying", "Project Management", "Arbitration"],
}
