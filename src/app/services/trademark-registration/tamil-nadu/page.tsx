import React from 'react';
import { Metadata } from 'next';
import TamilNaduClient from './TamilNaduClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Tamil Nadu | Chennai IP Office Guide | IPRKaro',
  description: 'Expert guide for trademark registration in Tamil Nadu. Learn about the process at Chennai Registry, fees, documents, and benefits for industries in Chennai, Coimbatore, and Tiruppur.',
  keywords: [
    'trademark registration in tamil nadu',
    'trademark registration chennai',
    'trademark registry chennai',
    'brand registration tamil nadu',
    'trademark attorney chennai',
    'ipr services tamil nadu',
    'trademark filing coimbatore',
    'trademark registration tiruppur',
    'online trademark registration tamil nadu',
    'trademark cost chennai'
  ],
  openGraph: {
    title: 'Trademark Registration in Tamil Nadu | Complete Guide | IPRKaro',
    description: 'Secure your brand in Tamil Nadu. Comprehensive guide to trademark registration at Chennai IP Office. Expert assistance for startups and businesses.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
};

export default function TamilNaduTrademarkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Tamil Nadu, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Tamil Nadu typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Tamil Nadu",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu",
      "containedIn": {
        "@type": "Country",
        "name": "India"
      }
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
        "name": "Trademark Registration in Tamil Nadu",
        "item": "https://iprkaro.com/services/trademark-registration/tamil-nadu"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Tamil Nadu | Chennai IP Office Guide",
    "description": "Expert guide for trademark registration in Tamil Nadu. Learn about the process at Chennai Registry, fees, documents, and benefits for industries in Chennai, Coimbatore, and Tiruppur.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/tamil-nadu"
    },
    "wordCount": 2500,
    "articleBody": "Tamil Nadu, with its strong industrial base in Chennai, Coimbatore, and Tiruppur, is a major hub for manufacturing and services. Trademark registration is crucial..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Tamil Nadu with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/tamil-nadu",
    "url": "https://iprkaro.com/services/trademark-registration/tamil-nadu",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "210",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Karthik Raja"
        },
        "datePublished": "2024-11-15",
        "reviewBody": "Excellent trademark registration service in Chennai. The team was very professional and helped us register our software brand quickly. Highly recommended.",
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
          "name": "Lakshmi Narayanan"
        },
        "datePublished": "2024-10-20",
        "reviewBody": "Great experience with trademark services in Coimbatore. They provided complete guidance and successfully registered our textile brand. Very satisfied.",
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
          "name": "Senthil Kumar"
        },
        "datePublished": "2024-09-28",
        "reviewBody": "Professional service in Tiruppur. They helped register our garment brand efficiently and handled objections expertly. Good value for money.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
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
      
      <TamilNaduClient />
    </>
  );
}
