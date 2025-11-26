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
        "name": "Tamil Nadu",
        "item": "https://iprkaro.com/services/trademark-registration/tamil-nadu"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Tamil Nadu: A Comprehensive Guide",
    "description": "Detailed guide on how to register a trademark in Tamil Nadu, covering the Chennai Registry process, documents, and benefits.",
    "author": {
      "@type": "Organization",
      "name": "IPRKaro"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPRKaro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iprkaro.com/logo/iprlogo.svg"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trademark Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Search"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Filing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Objection Handling"
          }
        }
      ]
    }
  };

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <TamilNaduClient />
    </>
  );
}
