// utils/seoConfig.js — Chemical Company | SEO Perfect

export const siteSEO = {
  siteName: "Your Chemical Company Name",
  defaultTitle:
    "Your Chemical Company Name | Water Treatment & Industrial Chemicals | Nashik",
  defaultDescription:
    "Leading manufacturer and supplier of water treatment chemicals, industrial chemicals, and specialty chemicals in Nashik. Quality products since [year]",
  baseUrl: "https://yourchemicalcompany.com",
  defaultImage: "/og-default.jpg",
  locale: "en_IN",
  email: "info@yourchemicalcompany.com",
  phone: "+91-XXXXXXXXXX",
  address: "Your Office Address, Nashik, Maharashtra - 422XXX",
  foundingYear: "20XX",
  founder: "Company Founder Name",
};

export const pageSEO = {
  home: {
    title:
      "Your Chemical Company Name | Water Treatment & Industrial Chemicals Manufacturer Nashik",
    description:
      "Premier chemical company in Nashik specializing in water treatment chemicals, industrial chemicals, and specialty chemicals. Quality solutions for diverse industries.",
    keywords:
      "chemical company Nashik, water treatment chemicals manufacturer, industrial chemicals supplier, specialty chemicals Nashik, chemical manufacturer Maharashtra",
    canonical: "/",
    ogImage: "/og-home.jpg",
  },
  contact: {
    title:
      "Contact Us | Your Chemical Company | Chemical Manufacturer Nashik",
    description:
      "Get in touch with Your Chemical Company for inquiries about water treatment chemicals, industrial chemicals, and specialty chemicals. Call or email us today.",
    keywords:
      "contact chemical company Nashik, chemical supplier phone number, chemical manufacturer email, chemical company address Nashik",
    canonical: "/contact",
    ogImage: "/og-contact.jpg",
  },
  company: {
    title:
      "About Us | Your Chemical Company | Leading Chemical Manufacturer Nashik",
    description:
      "Learn about Your Chemical Company's journey, mission, and expertise in manufacturing high-quality water treatment and industrial chemicals in Nashik since [year].",
    keywords:
      "about chemical company, chemical manufacturer profile, chemical company history Nashik, chemical industry experts Maharashtra",
    canonical: "/company",
    ogImage: "/og-company.jpg",
  },
  product: {
    title:
      "Our Products | Industrial & Water Treatment Chemicals | Your Chemical Company",
    description:
      "Explore our comprehensive range of water treatment chemicals, industrial chemicals, and specialty chemicals. Quality products for every industrial need.",
    keywords:
      "chemical products Nashik, industrial chemicals catalog, water treatment chemicals list, specialty chemicals range, chemical manufacturer products",
    canonical: "/product",
    ogImage: "/og-product.jpg",
  },
  client: {
    title:
      "Our Clients | Industries We Serve | Your Chemical Company Nashik",
    description:
      "Trusted by leading industries across Maharashtra. See the clients and sectors that rely on Your Chemical Company for their chemical needs.",
    keywords:
      "chemical company clients, industrial clients Nashik, water treatment clients, chemical manufacturer customers, industries served Maharashtra",
    canonical: "/client",
    ogImage: "/og-client.jpg",
  },
  newsEvents: {
    title:
      "News & Events | Industry Updates | Your Chemical Company Nashik",
    description:
      "Stay updated with the latest news, events, and industry insights from Your Chemical Company. Chemical industry updates and company announcements.",
    keywords:
      "chemical industry news, company events Nashik, chemical manufacturer updates, industry insights Maharashtra, chemical news",
    canonical: "/news-events",
    ogImage: "/og-news.jpg",
  },
  privacy: {
    title: "Privacy Policy | Your Chemical Company Nashik",
    description:
      "Read our privacy policy to understand how we collect, use, and protect your personal information when you use our chemical manufacturing services.",
    keywords:
      "privacy policy, data protection, chemical company privacy, information security",
    canonical: "/privacy-policy",
    ogImage: "/og-default.jpg",
  },
  terms: {
    title: "Terms & Conditions | Your Chemical Company Nashik",
    description:
      "Review our terms and conditions for using Your Chemical Company's website and services. Clear guidelines for our chemical supply engagement.",
    keywords:
      "terms and conditions, service terms, legal agreement, chemical company terms",
    canonical: "/terms-conditions",
    ogImage: "/og-default.jpg",
  },
};

export const productSEO = {
  "water-treatment": {
    title:
      "Water Treatment Chemicals | Industrial Water Solutions | Your Chemical Company Nashik",
    description:
      "High-quality water treatment chemicals including coagulants, flocculants, biocides, and anti-scalants. Effective solutions for industrial water treatment in Nashik.",
    keywords:
      "water treatment chemicals Nashik, industrial water treatment, coagulants manufacturer, flocculants supplier, biocides Nashik, anti-scalants Maharashtra",
    h1: "Premium Water Treatment Chemicals for Industries",
    breadcrumb: "Water Treatment Chemicals",
    benefits: [
      "Superior water purification efficiency",
      "Cost-effective treatment solutions",
      "Compliant with industry standards",
      "Technical support and guidance"
    ],
    applications: [
      "Industrial wastewater treatment",
      "Cooling water systems",
      "Boiler water treatment",
      "Process water purification"
    ]
  },
  industrial: {
    title:
      "Industrial Chemicals | Manufacturing & Processing | Your Chemical Company Nashik",
    description:
      "Wide range of industrial chemicals for manufacturing, processing, and production industries. Quality assured chemicals for consistent results.",
    keywords:
      "industrial chemicals Nashik, manufacturing chemicals supplier, processing chemicals Maharashtra, industrial chemical manufacturer, bulk chemicals Nashik",
    h1: "Comprehensive Industrial Chemicals for Manufacturing",
    breadcrumb: "Industrial Chemicals",
    benefits: [
      "Consistent quality and purity",
      "Bulk supply capability",
      "Competitive pricing",
      "Timely delivery guaranteed"
    ],
    applications: [
      "Manufacturing processes",
      "Industrial cleaning",
      "Raw material processing",
      "Production enhancement"
    ]
  },
  specialty: {
    title:
      "Specialty Chemicals | Custom Chemical Solutions | Your Chemical Company Nashik",
    description:
      "Custom-formulated specialty chemicals for specific industrial applications. Tailored solutions to meet your unique chemical requirements.",
    keywords:
      "specialty chemicals Nashik, custom chemical solutions, specialized chemical manufacturer, custom formulation Nashik, industrial specialty chemicals",
    h1: "Custom Specialty Chemicals for Specific Applications",
    breadcrumb: "Specialty Chemicals",
    benefits: [
      "Custom formulation available",
      "Application-specific solutions",
      "Expert technical consultation",
      "Quality control testing"
    ],
    applications: [
      "Specialized manufacturing",
      "Unique industrial processes",
      "Research and development",
      "Quality enhancement"
    ]
  }
};

// Build metadata for main pages
export function buildMetadata(pageKey) {
  const seo = pageSEO[pageKey] || pageSEO.home;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}${seo.canonical}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

// Build metadata for product subpages
export function buildProductMetadata(productKey) {
  const seo = productSEO[productKey];
  if (!seo) return buildMetadata("product");
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}/product/${productKey}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}/product/${productKey}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}/og-product-${productKey}.jpg`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}/og-product-${productKey}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

// Schema generators for chemical company
export function getProductSchema(productData, productKey) {
  return {
    "@type": "Product",
    name: productData.h1,
    description: productData.description,
    category: productData.breadcrumb,
    brand: {
      "@type": "Brand",
      name: siteSEO.siteName,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
      },
    },
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteSEO.baseUrl}${item.href}`,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@type": "ChemicalCompany",
    name: siteSEO.siteName,
    description: siteSEO.defaultDescription,
    url: siteSEO.baseUrl,
    telephone: siteSEO.phone,
    email: siteSEO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSEO.address.split(",")[0],
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: siteSEO.address.match(/\d{6}/)?.[0] || "422005",
      addressCountry: "IN",
    },
    foundingDate: siteSEO.foundingYear,
    founder: {
      "@type": "Person",
      name: siteSEO.founder,
    },
    areaServed: {
      "@type": "City",
      name: "Nashik",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chemical Products",
      itemListElement: Object.values(productSEO).map((product, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: product.h1,
          description: product.description,
        },
      })),
    },
  };
}

export function getFAQSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// Navigation structure for reference (can be used in components)
export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'Company', href: '/company' },
  { 
    name: 'Product', 
    href: '/product',
    dropdown: [
      { name: 'Water Treatment Chemicals', href: '/product/water-treatment' },
      { name: 'Industrial Chemicals', href: '/product/industrial' },
      { name: 'Specialty Chemicals', href: '/product/specialty' },
    ]
  },
  { name: 'Client', href: '/client' },
  { name: 'News And Event', href: '/news-events' },
];