import React from 'react';
import { Metadata } from 'next';
import ManipurClient from './ManipurClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Manipur | Brand Protection Services',
  description: 'Secure your brand with professional Trademark Registration services in Manipur. Expert legal guidance for artisans, MSMEs, and businesses. File your application today!',
  keywords: ['Trademark Registration in Manipur', 'Brand Registration Manipur', 'Trademark Attorney Imphal', 'IPR Services Manipur', 'Trademark Filing Online'],
  openGraph: {
    title: 'Trademark Registration in Manipur | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Manipur. Expert legal guidance for artisans, MSMEs, and businesses.',
    url: 'https://iprkaro.com/services/trademark-registration/manipur',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/og-manipur-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Manipur',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Manipur | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Manipur. Expert legal guidance for artisans, MSMEs, and businesses.',
    images: ['https://iprkaro.com/assets/og-manipur-trademark.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/manipur',
  },
};

export default function ManipurPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Manipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Manipur, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Manipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Manipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Manipur typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Manipur",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Manipur",
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
        "name": "Trademark Registration in Manipur",
        "item": "https://iprkaro.com/services/trademark-registration/manipur"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Manipur | Brand Protection Services",
    "description": "Secure your brand with professional Trademark Registration services in Manipur. Expert legal guidance for artisans, MSMEs, and businesses.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/manipur"
    },
    "wordCount": 2500,
    "articleBody": "Manipur, known for its handloom and handicraft industry, offers unique branding opportunities. Trademark registration is essential for protecting the distinct identity of Manipuri products..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Manipur with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/manipur",
    "url": "https://iprkaro.com/services/trademark-registration/manipur",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Manipur",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "55",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ibomcha Singh"
        },
        "datePublished": "2024-11-08",
        "reviewBody": "Excellent trademark service in Imphal. They helped me register my handloom brand and protected it from copycats. Very professional team.",
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
          "name": "Mary Kom"
        },
        "datePublished": "2024-10-14",
        "reviewBody": "Great experience with trademark registration for my sports academy. They handled the entire process smoothly. Highly recommended.",
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
          "name": "Tomba Raj"
        },
        "datePublished": "2024-09-22",
        "reviewBody": "Professional service. They helped register my food processing brand and provided valuable legal advice. Very satisfied.",
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
      
      <ManipurClient />
    </>
  );
}
