import { projects } from "./data.js"

export const SITE_URL = "https://obraint.co.ke"

const homeDescription =
  "Nairobi quantity surveyors for bills of quantities, project management and construction arbitration across Kenya."

const ogImage = `${SITE_URL}/images/og.jpg`

export const pages = {
  "/": {
    title: "Quantity Surveyors in Nairobi | Obra International",
    description: homeDescription,
  },
  "/services": {
    title: "Quantity Surveying Services in Nairobi | Obra International",
    description:
      "Bills of quantities, cost planning, project management and construction arbitration from Obra International in Nairobi, Kenya.",
  },
  "/portfolio": {
    title: "Construction Projects across Kenya | Obra International",
    description:
      "Housing, county offices, churches and markets delivered with quantity surveying and project management by Obra International.",
  },
  "/quality": {
    title: "ISO 9001 Quality Policy | Obra International",
    description:
      "Obra International’s ISO 9001 quality policy for quantity surveying, project management and arbitration in Kenya.",
  },
  "/about": {
    title: "About Obra International | Nairobi Consultants",
    description:
      "Obra International, established in 2010 in Nairobi, provides quantity surveying, project management and arbitration across Kenya.",
  },
  "/leadership": {
    title: "Leadership | Obra International",
    description:
      "QS William M. Njogu (RQS, MCIArb), Founder and Director of Obra International, leads the firm’s quantity surveying, arbitration and project management practice.",
  },
  "/contact": {
    title: "Contact Obra International in Nairobi, Kenya",
    description:
      "Obra International Ltd, Greenhouse Mall, Suite 10, Nairobi. Call +254 721 986 325 or email info@obraint.co.ke.",
  },
  "/404": {
    title: "Page not found | Obra International",
    description: "This address is not part of the Obra International site.",
    robots: "noindex, follow",
  },
}

export const organization = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: "Obra International Ltd",
  alternateName: "Obra International",
  url: SITE_URL,
  image: ogImage,
  logo: `${SITE_URL}/images/logo.webp`,
  email: "info@obraint.co.ke",
  telephone: "+254721986325",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Greenhouse Mall, Second Floor, Suite 10",
    addressLocality: "Nairobi",
    postalCode: "00200",
    postOfficeBoxNumber: "3494-00200",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  description: homeDescription,
  knowsAbout: [
    "Quantity Surveying",
    "Bills of Quantities",
    "Project Management",
    "Construction Arbitration",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction consultancy",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Quantity Surveying" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arbitration" } },
    ],
  },
}

function rolePhrase(role = "") {
  if (/project management/i.test(role)) return "project management"
  if (/quantity/i.test(role)) return "quantity surveying"
  if (/qs/i.test(role)) return "quantity surveying, including bills of quantities"
  return role ? role.toLowerCase() : "quantity surveying and project management"
}

export function seoFor(pathname) {
  const project = projects.find((item) => pathname === `/portfolio/${item.id}`)
  if (project) {
    const role = project.description?.role
    const client = project.description?.client
    const value = project.description?.value
    const firstSentence = project.story?.split(/(?<=\.)\s+/)[0]
    let description = firstSentence && firstSentence.length <= 170
      ? firstSentence
      : `Obra International provided ${rolePhrase(role)} for ${project.title} in ${project.place}`
    if (!firstSentence || firstSentence.length > 170) {
      description += client ? `, appointed by ${client}.` : "."
      if (value) description += ` Project value ${value}.`
    }
    return {
      title: `${project.title} | Obra International`,
      description,
      image: `${SITE_URL}${project.image}`,
      robots: "index, follow",
    }
  }

  const page = pages[pathname]
  if (!page) {
    return {
      title: "Page not found | Obra International",
      description: "This address is not part of the Obra International site.",
      image: ogImage,
      robots: "noindex, follow",
    }
  }
  return {
    image: ogImage,
    robots: "index, follow",
    ...page,
  }
}

export function publicPaths() {
  return [
    "/",
    "/services",
    "/portfolio",
    "/quality",
    "/about",
    "/leadership",
    "/contact",
    ...projects.map((item) => `/portfolio/${item.id}`),
  ]
}
