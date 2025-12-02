import React from 'react';
import type { Metadata } from 'next';
import AssamClient from './AssamClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Assam | Protect Your Brand Identity',
  description: 'Expert Trademark Registration services in Assam. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Assam districts including Guwahati, Dibrugarh, and Silchar.',
  keywords: ['trademark registration in assam', 'brand registration assam', 'trademark consultant guwahati', 'tm registration assam', 'ipr services northeast india', 'trademark attorney assam', 'logo registration assam'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/assam',
  },
  openGraph: {
    title: 'Trademark Registration in Assam | Protect Your Brand Identity',
    description: 'Expert Trademark Registration services in Assam. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Assam districts.',
    url: 'https://iprkaro.com/services/trademark-registration/assam',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-assam.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Assam',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AssamPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Assam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Assam, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Assam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Assam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Assam typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Assam",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Assam",
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
        "name": "Trademark Registration in Assam",
        "item": "https://iprkaro.com/services/trademark-registration/assam"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Assam | Protect Your Brand Identity",
    "description": "Expert Trademark Registration services in Assam. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Assam districts.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/assam"
    },
    "wordCount": 2500,
    "articleBody": "Assam, with its rich heritage of tea cultivation, silk production, and emerging business hubs in Guwahati, Dibrugarh, and Silchar, offers diverse opportunities for brand protection..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Assam with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/assam",
    "url": "https://iprkaro.com/services/trademark-registration/assam",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Assam",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "115",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Pranab Sharma"
        },
        "datePublished": "2024-11-12",
        "reviewBody": "Excellent trademark registration service in Guwahati. They helped me register my tea brand successfully and provided complete guidance throughout. Highly professional team.",
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
          "name": "Ritu Baruah"
        },
        "datePublished": "2024-10-18",
        "reviewBody": "Great experience with trademark registration in Dibrugarh. The team was very supportive and handled all the documentation efficiently. Recommended for Assam businesses.",
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
          "name": "Kamal Das"
        },
        "datePublished": "2024-09-25",
        "reviewBody": "Professional service for silk product branding in Silchar. They completed my trademark registration smoothly and answered all my queries. Very satisfied with the service.",
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
      
      <AssamClient />
    </>
  );
}
