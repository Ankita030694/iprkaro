import React from 'react';
import { Metadata } from 'next';
import PuducherryClient from './PuducherryClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Puducherry | Complete Guide 2025 | IPRKaro',
  description: 'Complete guide to trademark registration in Puducherry. Learn step-by-step process, fees, documents required, timeline, and expert assistance for trademark registration in Pondicherry, Auroville, and Karaikal. Get started today.',
  keywords: [
    'trademark registration in puducherry',
    'trademark registration pondicherry',
    'how to register trademark in puducherry',
    'trademark registration process puducherry',
    'trademark registration fees puducherry',
    'trademark registration cost puducherry',
    'trademark registration documents puducherry',
    'trademark registration online puducherry',
    'trademark registration auroville',
    'trademark registration karaikal',
    'trademark registration mahe',
    'trademark registration yanam',
    'trademark registration puducherry india',
    'trademark registration puducherry 2025',
    'trademark registration puducherry timeline',
    'trademark registration puducherry requirements',
    'trademark registration puducherry procedure',
    'trademark registration puducherry steps',
    'trademark registration puducherry guide',
    'trademark registration puducherry consultant',
    'trademark registration puducherry lawyer',
    'trademark registration puducherry attorney',
    'trademark registration puducherry services',
    'trademark registration puducherry help',
    'IPRKaro trademark registration puducherry'
  ],
  openGraph: {
    title: 'Trademark Registration in Puducherry | Complete Guide 2025 | IPRKaro',
    description: 'Expert trademark registration services in Puducherry. Complete guide with step-by-step process, fees, documents, and timeline. Get professional assistance for trademark registration in Pondicherry.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Puducherry | Complete Guide 2025',
    description: 'Complete guide to trademark registration in Puducherry with expert assistance, step-by-step process, fees, and timeline.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/puducherry',
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

export default function PuducherryTrademarkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Puducherry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Puducherry, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Pay the applicable fees, 5) Respond to any examination objections if raised, 6) Wait for publication in Trademark Journal, and 7) Receive registration certificate upon successful completion. The process is handled by the Chennai Trademark Registry jurisdiction."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Puducherry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents for trademark registration in Puducherry include: Identity proof of applicant (Aadhar card, PAN card), Address proof in Puducherry (utility bills, rental agreement), Clear representation of trademark (logo or wordmark), Description of goods/services, Power of Attorney (Form TM-48) if filing through an agent, Udyam Registration (for MSMEs to avail fee concession), and Incorporation certificate for companies/LLPs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I file trademark application online from Pondicherry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file a trademark application completely online from Pondicherry, Auroville, or any part of the Union Territory through the official IP India portal (ipindiaservices.gov.in). The online filing process is efficient, paperless, and provides instant acknowledgment. Professional trademark attorneys can assist you with the online filing process to ensure accuracy and compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Which trademark office has jurisdiction over Puducherry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Trademark Registry in Chennai has jurisdiction over trademark applications from the Union Territory of Puducherry. All physical documents (if not filed online) and hearings (if required) are handled by the Chennai office. However, with the digital system, most processes including filing, objection replies, and hearings (via video conferencing) can be managed remotely."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Puducherry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Puducherry typically takes 12 to 18 months from the date of filing to certificate issuance, provided there are no complex objections or third-party oppositions. If the application faces opposition or multiple objections, the timeline may extend beyond 18 months."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Puducherry",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Puducherry",
      "containedIn": {
        "@type": "Country",
        "name": "India"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trademark Registration Services in Puducherry",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Search in Puducherry",
            "description": "Comprehensive trademark availability search and risk assessment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Application Filing in Puducherry",
            "description": "Professional filing of trademark application Form TM-A"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Objection Reply in Puducherry",
            "description": "Expert drafting and filing of replies to examination reports"
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
        "name": "Trademark Registration in Puducherry",
        "item": "https://iprkaro.com/services/trademark-registration/puducherry"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Puducherry: Complete Guide for 2025",
    "description": "Comprehensive guide covering trademark registration process, requirements, documents, timeline, and expert assistance for Puducherry businesses",
    "image": {
      "@type": "ImageObject",
      "url": "https://iprkaro.com/og-image.jpg",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPRKaro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iprkaro.com/logo.png",
        "width": 200,
        "height": 60
      }
    },
    "datePublished": "2025-01-15T09:00:00+05:30",
    "dateModified": "2025-01-15T09:00:00+05:30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://iprkaro.com/services/trademark-registration/puducherry"
    },
    "wordCount": 2500,
    "articleBody": "Puducherry, with its French colonial heritage and growing tourism and hospitality sector, offers unique branding opportunities. Trademark registration is essential..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Puducherry with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/puducherry",
    "url": "https://iprkaro.com/services/trademark-registration/puducherry",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Puducherry",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "45",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jean-Pierre"
        },
        "datePublished": "2024-11-12",
        "reviewBody": "Excellent trademark service in Pondicherry. They helped me register my cafe brand and provided great support. Very professional.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lakshmi Devi"
        },
        "datePublished": "2024-10-18",
        "reviewBody": "Great experience with trademark registration for my boutique hotel. They guided me through the entire process. Highly recommended.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ramesh Kumar"
        },
        "datePublished": "2024-09-24",
        "reviewBody": "Professional service in Auroville. They helped register my organic product brand and handled everything smoothly. Very satisfied.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.7",
          "bestRating": "5"
        }
      }
    ]
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
      
      <PuducherryClient />
    </>
  );
}

