import React from 'react';
import { Metadata } from 'next';
import BiharClient from './BiharClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Bihar | Complete Guide & Process 2025 | IPRKaro',
  description: 'Complete guide to trademark registration in Bihar. Learn step-by-step process, fees, documents required, and expert assistance for trademark registration in Patna, Muzaffarpur, and across Bihar.',
  keywords: [
    'trademark registration in bihar',
    'trademark registration bihar',
    'trademark registration patna',
    'trademark registration muzaffarpur',
    'trademark registration gaya',
    'trademark registration bhagalpur',
    'trademark consultant in bihar',
    'trademark lawyer in bihar',
    'brand registration bihar',
    'logo registration bihar',
    'trademark registration process bihar',
    'trademark registration fees bihar',
    'trademark registration online bihar',
    'ipr services bihar',
    'trademark registration bihar 2025'
  ],
  openGraph: {
    title: 'Trademark Registration in Bihar | Complete Guide & Process | IPRKaro',
    description: 'Expert trademark registration services in Bihar. Complete guide with step-by-step process, fees, documents, and timeline. Get professional assistance for trademark registration in Bihar.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Bihar | Complete Guide & Process',
    description: 'Complete guide to trademark registration in Bihar with expert assistance, step-by-step process, fees, and timeline.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/bihar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BiharTrademarkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I register a trademark in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Bihar is a centralized online process governed by the Controller General of Patents, Designs, and Trademarks (CGPDTM). You can file your application online through the official IP India portal. While the process is online, the jurisdiction for Bihar falls under the Trademark Registry in Kolkata. It is advisable to consult with IP professionals to ensure a smooth registration process."
        }
      },
      {
        "@type": "Question",
        "name": "Which Trademark Registry covers Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For applicants based in Bihar, the appropriate jurisdiction is the Trademark Registry located in Kolkata. All legal proceedings, hearings, and official correspondence regarding your trademark application will be handled by the Kolkata office."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The documents required depend on the type of applicant. Generally, you need: Individuals: ID proof (Aadhaar/PAN), address proof, and the trademark logo/name. Businesses (Companies/LLPs): Certificate of Incorporation, MSME certificate (for fee concession), Board Resolution, and ID proof of the authorized signatory. Partnerships: Partnership Deed and ID proofs of partners."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the trademark registration process take in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process typically takes 6 to 12 months if there are no objections or oppositions. However, if legal hurdles arise, such as third-party oppositions or registry objections, the timeline can extend to 18-24 months."
        }
      },
      {
        "@type": "Question",
        "name": "Can I register a Geographical Indication (GI) as a trademark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, a Geographical Indication (GI) cannot be registered as a private trademark by an individual. GIs like 'Madhubani Paintings' or 'Bhagalpur Silk' belong to the community of that region. However, you can register a unique brand name under which you sell these authentic products, provided it doesn't infringe on the GI protection."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Bihar",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Bihar",
      "containedIn": {
        "@type": "Country",
        "name": "India"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trademark Registration Services in Bihar",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Search in Bihar",
            "description": "Comprehensive trademark availability search before registration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Application Filing in Bihar",
            "description": "Complete trademark registration application filing service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Objection Reply in Bihar",
            "description": "Professional objection reply drafting and filing services"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iprkaro.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://iprkaro.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Trademark Services",
        "item": "https://iprkaro.com/services/trademark-registration"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Trademark Registration in Bihar",
        "item": "https://iprkaro.com/services/trademark-registration/bihar"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Bihar: Complete Guide & Process 2025",
    "description": "Comprehensive guide to trademark registration in Bihar, covering process, documents, fees, and benefits for businesses in Patna, Muzaffarpur, and other districts.",
    "author": {
      "@type": "Organization",
      "name": "IPRKaro"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPRKaro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iprkaro.com/logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15"
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Service",
      "name": "Trademark Registration Services in Bihar",
      "description": "Expert trademark registration services in Bihar"
    },
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <BiharClient />
    </>
  );
}
