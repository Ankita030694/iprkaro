import React from 'react';
import { Metadata } from 'next';
import ChandigarhClient from './ChandigarhClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Chandigarh | Brand Protection Services',
  description: 'Secure your brand with professional Trademark Registration services in Chandigarh. Expert legal guidance for startups, businesses, and MSMEs. File your application today!',
  keywords: ['Trademark Registration in Chandigarh', 'Brand Registration Chandigarh', 'Trademark Attorney Chandigarh', 'IPR Services Chandigarh', 'Trademark Filing Online'],
  openGraph: {
    title: 'Trademark Registration in Chandigarh | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Chandigarh. Expert legal guidance for startups, businesses, and MSMEs.',
    url: 'https://iprkaro.com/services/trademark-registration/chandigarh',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/og-chandigarh-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Chandigarh',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Chandigarh | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Chandigarh. Expert legal guidance for startups, businesses, and MSMEs.',
    images: ['https://iprkaro.com/assets/og-chandigarh-trademark.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/chandigarh',
  },
};

export default function ChandigarhPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Chandigarh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Chandigarh, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Chandigarh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Chandigarh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Chandigarh typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Chandigarh",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Chandigarh",
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
        "name": "Trademark Registration in Chandigarh",
        "item": "https://iprkaro.com/services/trademark-registration/chandigarh"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Chandigarh | Brand Protection Services",
    "description": "Secure your brand with professional Trademark Registration services in Chandigarh. Expert legal guidance for startups, businesses, and MSMEs.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/chandigarh"
    },
    "wordCount": 2500,
    "articleBody": "Chandigarh, being the capital of both Punjab and Haryana and a hub for startups and businesses, requires strong brand protection. Trademark registration helps businesses..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Chandigarh with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/chandigarh",
    "url": "https://iprkaro.com/services/trademark-registration/chandigarh",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chandigarh",
      "addressRegion": "Chandigarh",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Manish Kapoor"
        },
        "datePublished": "2024-11-16",
        "reviewBody": "Excellent trademark service in Chandigarh. The team was very professional and helped me register my startup brand quickly. Great support throughout the process.",
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
          "name": "Simran Kaur"
        },
        "datePublished": "2024-10-22",
        "reviewBody": "Great experience with trademark registration. They handled everything professionally and got my brand registered without any issues. Highly recommended for Chandigarh businesses.",
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
          "name": "Rohit Verma"
        },
        "datePublished": "2024-09-30",
        "reviewBody": "Professional and efficient service. They guided me through the entire trademark registration process and successfully handled objections. Very satisfied.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
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
      
      <ChandigarhClient />
    </>
  );
}
