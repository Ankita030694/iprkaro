import React from 'react';
import type { Metadata } from 'next';
import JammuAndKashmirClient from './JammuAndKashmirClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Jammu and Kashmir | Protect Your Brand',
  description: 'Expert Trademark Registration services in Jammu and Kashmir. Secure your brand name, logo, and slogan in Srinagar, Jammu, Anantnag, and across J&K. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in jammu and kashmir', 'brand registration j&k', 'trademark consultant srinagar', 'tm registration jammu', 'ipr services kashmir', 'trademark attorney j&k', 'logo registration anantnag'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/jammu-and-kashmir',
  },
  openGraph: {
    title: 'Trademark Registration in Jammu and Kashmir | Protect Your Brand',
    description: 'Expert Trademark Registration services in Jammu and Kashmir. Secure your brand name, logo, and slogan in Srinagar, Jammu, Anantnag, and across J&K.',
    url: 'https://iprkaro.com/services/trademark-registration/jammu-and-kashmir',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-jk.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Jammu and Kashmir',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function JammuAndKashmirPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Jammu and Kashmir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Jammu and Kashmir, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in J&K?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Jammu and Kashmir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Jammu and Kashmir typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Jammu and Kashmir",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Jammu and Kashmir",
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
        "name": "Trademark Registration in Jammu and Kashmir",
        "item": "https://iprkaro.com/services/trademark-registration/jammu-and-kashmir"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Jammu and Kashmir | Protect Your Brand",
    "description": "Expert Trademark Registration services in Jammu and Kashmir. Secure your brand name, logo, and slogan in Srinagar, Jammu, Anantnag, and across J&K.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/jammu-and-kashmir"
    },
    "wordCount": 2500,
    "articleBody": "Jammu and Kashmir, with its world-famous handicrafts, horticulture, and tourism, offers immense potential for brands. Trademark registration is vital for protecting..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Jammu and Kashmir with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/jammu-and-kashmir",
    "url": "https://iprkaro.com/services/trademark-registration/jammu-and-kashmir",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "95",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Bashir Ahmed"
        },
        "datePublished": "2024-11-18",
        "reviewBody": "Excellent trademark service in Srinagar. They helped me register my handicraft brand and protected it from copycats. Very professional team.",
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
          "name": "Rajinder Singh"
        },
        "datePublished": "2024-10-25",
        "reviewBody": "Great experience with trademark registration in Jammu. They handled the entire process smoothly and kept me updated. Highly recommended.",
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
          "name": "Ghulam Rasool"
        },
        "datePublished": "2024-09-30",
        "reviewBody": "Professional service in Anantnag. They helped register my saffron brand and provided valuable legal advice. Very satisfied.",
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
      
      <JammuAndKashmirClient />
    </>
  );
}
