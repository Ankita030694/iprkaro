import React from 'react';
import type { Metadata } from 'next';
import JharkhandClient from './JharkhandClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Jharkhand | Protect Your Brand Identity',
  description: 'Expert Trademark Registration services in Jharkhand. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Jharkhand districts including Ranchi, Jamshedpur, and Dhanbad.',
  keywords: ['trademark registration in jharkhand', 'brand registration jharkhand', 'trademark consultant ranchi', 'tm registration jharkhand', 'ipr services eastern india', 'trademark attorney jharkhand', 'logo registration jharkhand'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/jharkhand',
  },
  openGraph: {
    title: 'Trademark Registration in Jharkhand | Protect Your Brand Identity',
    description: 'Expert Trademark Registration services in Jharkhand. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Jharkhand districts.',
    url: 'https://iprkaro.com/services/trademark-registration/jharkhand',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-jharkhand.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Jharkhand',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function JharkhandPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Jharkhand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Jharkhand, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Jharkhand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Jharkhand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Jharkhand typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Jharkhand",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Jharkhand",
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
        "name": "Trademark Registration in Jharkhand",
        "item": "https://iprkaro.com/services/trademark-registration/jharkhand"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Jharkhand | Protect Your Brand Identity",
    "description": "Expert Trademark Registration services in Jharkhand. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Jharkhand districts.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/jharkhand"
    },
    "wordCount": 2500,
    "articleBody": "Jharkhand, with its rich mineral resources and industrial hubs in Jamshedpur, Ranchi, and Dhanbad, offers significant opportunities for businesses. Trademark registration..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Jharkhand with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/jharkhand",
    "url": "https://iprkaro.com/services/trademark-registration/jharkhand",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Jharkhand",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "110",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Amit Kumar"
        },
        "datePublished": "2024-11-12",
        "reviewBody": "Excellent trademark registration service in Ranchi. The team was very professional and helped me register my startup brand quickly. Highly recommended.",
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
          "name": "Sanjay Singh"
        },
        "datePublished": "2024-10-18",
        "reviewBody": "Great experience with trademark services in Jamshedpur. They handled the entire process efficiently and kept me informed. Very satisfied.",
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
          "name": "Rahul Gupta"
        },
        "datePublished": "2024-09-24",
        "reviewBody": "Professional service in Dhanbad. They helped register my mining equipment brand and provided excellent legal support. Good value for money.",
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
      
      <JharkhandClient />
    </>
  );
}
