import React from 'react';
import type { Metadata } from 'next';
import ArunachalPradeshClient from './ArunachalPradeshClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Arunachal Pradesh | Protect Your Brand',
  description: 'Expert Trademark Registration services in Arunachal Pradesh. Secure your brand name, logo, and slogan in Itanagar, Tawang, Pasighat, and across the state. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in arunachal pradesh', 'brand registration itanagar', 'trademark consultant tawang', 'tm registration pasighat', 'ipr services arunachal', 'trademark attorney northeast india', 'logo registration ziro'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/arunachal-pradesh',
  },
  openGraph: {
    title: 'Trademark Registration in Arunachal Pradesh | Protect Your Brand',
    description: 'Expert Trademark Registration services in Arunachal Pradesh. Secure your brand name, logo, and slogan in Itanagar, Tawang, Pasighat, and across the state.',
    url: 'https://iprkaro.com/services/trademark-registration/arunachal-pradesh',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-arunachal.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Arunachal Pradesh',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ArunachalPradeshPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Arunachal Pradesh",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Arunachal Pradesh",
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
        "name": "Trademark Registration in Arunachal Pradesh",
        "item": "https://iprkaro.com/services/trademark-registration/arunachal-pradesh"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Arunachal Pradesh | Protect Your Brand",
    "description": "Expert Trademark Registration services in Arunachal Pradesh. Secure your brand name, logo, and slogan in Itanagar, Tawang, Pasighat, and across the state.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/arunachal-pradesh"
    },
    "wordCount": 2500,
    "articleBody": "Arunachal Pradesh, with its unique cultural heritage and growing business opportunities in Itanagar, Tawang, and Pasighat, offers exciting potential for brands. Trademark registration..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Arunachal Pradesh with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/arunachal-pradesh",
    "url": "https://iprkaro.com/services/trademark-registration/arunachal-pradesh",
    "telephone": "+91-9289707648",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Arunachal Pradesh",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "68",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Tage Taki"
        },
        "datePublished": "2024-11-08",
        "reviewBody": "Excellent trademark service in Itanagar. The team provided complete guidance and made the registration process very smooth for my handicraft business. Very professional.",
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
          "name": "Lobsang Dorjee"
        },
        "datePublished": "2024-10-15",
        "reviewBody": "Great experience with trademark registration in Tawang. They helped register my tourism brand successfully. Highly recommended for Arunachal Pradesh businesses.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Kaling Dai"
        },
        "datePublished": "2024-09-22",
        "reviewBody": "Professional service for organic product branding in Pasighat. They handled everything efficiently and got my trademark registered. Very satisfied.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.6",
          "bestRating": "5"
        }
      }
    ]
  };

  return (
    <>
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
      <ArunachalPradeshClient />
    </>
  );
}
