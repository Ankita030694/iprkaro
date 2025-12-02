import React from 'react';
import type { Metadata } from 'next';
import OdishaClient from './OdishaClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Odisha | Protect Your Brand Identity',
  description: 'Expert Trademark Registration services in Odisha. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Odisha districts including Bhubaneswar, Cuttack, and Rourkela.',
  keywords: ['trademark registration in odisha', 'brand registration odisha', 'trademark consultant bhubaneswar', 'tm registration odisha', 'ipr services eastern india', 'trademark attorney odisha', 'logo registration odisha'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/odisha',
  },
  openGraph: {
    title: 'Trademark Registration in Odisha | Protect Your Brand Identity',
    description: 'Expert Trademark Registration services in Odisha. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Odisha districts.',
    url: 'https://iprkaro.com/services/trademark-registration/odisha',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-odisha.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Odisha',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function OdishaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Odisha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Odisha, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Odisha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Odisha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Odisha typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Odisha",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Odisha",
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
        "name": "Trademark Registration in Odisha",
        "item": "https://iprkaro.com/services/trademark-registration/odisha"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Odisha | Protect Your Brand Identity",
    "description": "Expert Trademark Registration services in Odisha. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Odisha districts.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/odisha"
    },
    "wordCount": 2500,
    "articleBody": "Odisha, with its rich cultural heritage and growing industrial sectors in Bhubaneswar and Rourkela, offers immense potential for businesses. Trademark registration is vital..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Odisha with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/odisha",
    "url": "https://iprkaro.com/services/trademark-registration/odisha",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Odisha",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "80",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Das"
        },
        "datePublished": "2024-11-14",
        "reviewBody": "Excellent trademark registration service in Bhubaneswar. The team was very professional and helped me register my IT startup brand quickly. Highly recommended.",
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
          "name": "Priya Mohanty"
        },
        "datePublished": "2024-10-19",
        "reviewBody": "Great experience with trademark services in Cuttack. They handled the entire process efficiently and kept me informed. Very satisfied.",
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
          "name": "Anil Sahoo"
        },
        "datePublished": "2024-09-26",
        "reviewBody": "Professional service in Rourkela. They helped register my manufacturing brand and provided excellent legal support. Good value for money.",
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
      
      <OdishaClient />
    </>
  );
}
