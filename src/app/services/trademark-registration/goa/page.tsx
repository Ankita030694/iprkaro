import React from 'react';
import type { Metadata } from 'next';
import GoaClient from './GoaClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Goa | Protect Your Brand',
  description: 'Expert Trademark Registration services in Goa. Secure your brand name, logo, and slogan in Panaji, Margao, Vasco, and across the state. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in goa', 'brand registration panaji', 'trademark consultant margao', 'tm registration vasco', 'ipr services goa', 'trademark attorney mapusa', 'logo registration goa'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/goa',
  },
  openGraph: {
    title: 'Trademark Registration in Goa | Protect Your Brand',
    description: 'Expert Trademark Registration services in Goa. Secure your brand name, logo, and slogan in Panaji, Margao, Vasco, and across the state.',
    url: 'https://iprkaro.com/services/trademark-registration/goa',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-goa.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Goa',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function GoaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Goa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Goa, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Goa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Goa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Goa typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Goa",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Goa",
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
        "name": "Trademark Registration in Goa",
        "item": "https://iprkaro.com/services/trademark-registration/goa"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Goa | Protect Your Brand",
    "description": "Expert Trademark Registration services in Goa. Secure your brand name, logo, and slogan in Panaji, Margao, Vasco, and across the state.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/goa"
    },
    "wordCount": 2500,
    "articleBody": "Goa, with its vibrant tourism and hospitality industry alongside growing business sectors in Panaji, Margao, and Vasco, offers unique opportunities for brand protection..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Goa with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/goa",
    "url": "https://iprkaro.com/services/trademark-registration/goa",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Goa",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "78",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Maria Fernandes"
        },
        "datePublished": "2024-11-09",
        "reviewBody": "Excellent trademark service in Panaji. The team helped me register my hospitality brand smoothly. Very professional and knowledgeable about the process.",
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
          "name": "Rohan Velinkar"
        },
        "datePublished": "2024-10-14",
        "reviewBody": "Great experience with trademark registration in Margao. They provided complete support and got my tourism brand registered efficiently. Highly recommended for Goa businesses.",
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
          "name": "Deepak Naik"
        },
        "datePublished": "2024-09-19",
        "reviewBody": "Professional service in Vasco. They helped register my export business brand and handled objections effectively. Very satisfied with their expertise.",
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
      
      <GoaClient />
    </>
  );
}
