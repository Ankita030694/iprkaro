import React from 'react';
import type { Metadata } from 'next';
import MadhyaPradeshClient from './MadhyaPradeshClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Madhya Pradesh | Protect Your Brand',
  description: 'Expert Trademark Registration services in Madhya Pradesh. Secure your brand name, logo, and slogan in Indore, Bhopal, Gwalior, and across MP. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in madhya pradesh', 'brand registration mp', 'trademark consultant indore', 'tm registration bhopal', 'ipr services madhya pradesh', 'trademark attorney gwalior', 'logo registration jabalpur'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/madhya-pradesh',
  },
  openGraph: {
    title: 'Trademark Registration in Madhya Pradesh | Protect Your Brand',
    description: 'Expert Trademark Registration services in Madhya Pradesh. Secure your brand name, logo, and slogan in Indore, Bhopal, Gwalior, and across MP.',
    url: 'https://iprkaro.com/services/trademark-registration/madhya-pradesh',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-mp.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Madhya Pradesh',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MadhyaPradeshPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Madhya Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Madhya Pradesh, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in MP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Madhya Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Madhya Pradesh typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Madhya Pradesh",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Madhya Pradesh",
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
        "name": "Trademark Registration in Madhya Pradesh",
        "item": "https://iprkaro.com/services/trademark-registration/madhya-pradesh"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Madhya Pradesh | Protect Your Brand",
    "description": "Expert Trademark Registration services in Madhya Pradesh. Secure your brand name, logo, and slogan in Indore, Bhopal, Gwalior, and across MP.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/madhya-pradesh"
    },
    "wordCount": 2500,
    "articleBody": "Madhya Pradesh, the heart of India, offers a strategic location for businesses. With industrial hubs in Indore, Bhopal, and Gwalior, trademark registration is essential..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Madhya Pradesh with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/madhya-pradesh",
    "url": "https://iprkaro.com/services/trademark-registration/madhya-pradesh",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "130",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Vikas Sharma"
        },
        "datePublished": "2024-11-10",
        "reviewBody": "Excellent trademark registration service in Indore. The team was very professional and helped me register my food brand quickly. Highly recommended.",
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
          "name": "Rohan Jain"
        },
        "datePublished": "2024-10-15",
        "reviewBody": "Great experience with trademark services in Bhopal. They handled the entire process efficiently and kept me informed. Very satisfied.",
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
          "name": "Suresh Patel"
        },
        "datePublished": "2024-09-20",
        "reviewBody": "Professional service in Gwalior. They helped register my textile brand and provided excellent legal support. Good value for money.",
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
      
      <MadhyaPradeshClient />
    </>
  );
}
