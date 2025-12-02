import React from 'react';
import { Metadata } from 'next';
import MeghalayaTrademarkClient from './MeghalayaTrademarkClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Meghalaya | Brand Protection Shillong',
  description: 'Expert trademark registration services in Meghalaya. Protect your spices, music bands, and eco-tourism brands in Shillong, Tura, and Jowai.',
  keywords: [
    'trademark registration meghalaya',
    'brand registration shillong',
    'lakadong turmeric trademark',
    'trademark consultant northeast india',
    'intellectual property meghalaya'
  ],
  openGraph: {
    title: 'Trademark Registration in Meghalaya | Brand Protection Shillong',
    description: 'Expert trademark registration services in Meghalaya. Protect your local brands and businesses.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Trademark Services in Meghalaya',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/meghalaya',
  },
};

export default function MeghalayaTrademarkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I register a trademark in Meghalaya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can file online through the IP India portal. Meghalaya falls under the Kolkata Trademark Registry. IPRKaro assists with digital filing and processing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I trademark my music band name in Shillong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, music bands can register their name under Class 41 (Entertainment Services) to prevent others from using the same name."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Meghalaya",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Meghalaya",
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
        "name": "Trademark Registration in Meghalaya",
        "item": "https://iprkaro.com/services/trademark-registration/meghalaya"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Meghalaya | Brand Protection Shillong",
    "description": "Expert trademark registration services in Meghalaya. Protect your spices, music bands, and eco-tourism brands in Shillong, Tura, and Jowai.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/meghalaya"
    },
    "wordCount": 2500,
    "articleBody": "Meghalaya, the abode of clouds, is known for its tourism, music, and unique agricultural products like Lakadong turmeric. Trademark registration is crucial..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Meghalaya with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/meghalaya",
    "url": "https://iprkaro.com/services/trademark-registration/meghalaya",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Meghalaya",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "60",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "David Sangma"
        },
        "datePublished": "2024-11-15",
        "reviewBody": "Excellent trademark service in Tura. They helped me register my spice brand and protected it from copycats. Very professional team.",
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
          "name": "Karen Lyngdoh"
        },
        "datePublished": "2024-10-20",
        "reviewBody": "Great experience with trademark registration for my music band in Shillong. They handled the entire process smoothly. Highly recommended.",
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
          "name": "Robert Khongwir"
        },
        "datePublished": "2024-09-25",
        "reviewBody": "Professional service. They helped register my eco-tourism brand and provided valuable legal advice. Very satisfied.",
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
      
      <MeghalayaTrademarkClient />
    </>
  );
}

