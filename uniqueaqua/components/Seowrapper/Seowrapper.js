// components/SeoWrapper/SeoWrapper.jsx
// ONLY injects JSON-LD structured data.
// All <title>/<meta> come from generateMetadata() in each page.js — Next.js 15 App Router best practice.

import { siteSEO } from "@/utils/seoConfig";

export default function SeoWrapper({ schemas = [], pageUrl = "/", children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteSEO.baseUrl}/#localbusiness`,
        name: siteSEO.siteName,
        alternateName: [
          "Unique Aqua",
          "Unique Aqua Technologies",
          "Water Treatment Solutions",
        ],
        url: `${siteSEO.baseUrl}${pageUrl}`,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        logo: `${siteSEO.baseUrl}/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No. X-27, Additional MIDC, Satpur",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: "422007",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.9975,
          longitude: 73.7898,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        areaServed: [
          "Nashik",
          "Satpur MIDC",
          "Ambad MIDC",
          "Sinnar",
          "Pune",
          "Chakan",
          "Mumbai",
          "Gujarat",
          "Maharashtra",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#organization`,
        name: siteSEO.siteName,
        legalName: "Unique Aqua Technologies Private Limited",
        foundingDate: "2010", // Update with actual founding year
        founder: {
          "@type": "Person",
          name: "Founder Name", // Add actual founder name
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteSEO.phone,
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Marathi", "Gujarati"],
        },
      },
      ...schemas,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}