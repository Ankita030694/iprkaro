import React from 'react';
import { Metadata } from 'next';
import SikkimClient from './SikkimClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Sikkim | Brand Protection Services',
  description: 'Secure your brand with professional Trademark Registration services in Sikkim. Expert legal guidance for organic, pharma, and tourism businesses. File your application today!',
  keywords: ['Trademark Registration in Sikkim', 'Brand Registration Sikkim', 'Trademark Attorney Gangtok', 'IPR Services Sikkim', 'Trademark Filing Online'],
  openGraph: {
    title: 'Trademark Registration in Sikkim | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Sikkim. Expert legal guidance for organic, pharma, and tourism businesses.',
    url: 'https://iprkaro.com/services/trademark-registration/sikkim',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/og-sikkim-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Sikkim',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Sikkim | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Sikkim. Expert legal guidance for organic, pharma, and tourism businesses.',
    images: ['https://iprkaro.com/assets/og-sikkim-trademark.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/sikkim',
  },
};

export default function SikkimPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Sikkim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Sikkim, conduct a comprehensive search, prepare required documents, file Form TM-A online through IP India portal, pay applicable fees, respond to examination objections if any, and wait for publication and registration. The process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Sikkim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include identity proof, address proof, business registration documents, clear trademark representation in high resolution, description of goods/services, and Power of Attorney if filing through an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in Sikkim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in Sikkim typically takes 12 to 18 months from filing to certificate issuance, including examination, publication, opposition period, and final registration."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Sikkim",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Sikkim",
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
        "name": "Trademark Registration in Sikkim",
        "item": "https://iprkaro.com/services/trademark-registration/sikkim"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration in Sikkim | Brand Protection Services",
    "description": "Secure your brand with professional Trademark Registration services in Sikkim. Expert legal guidance for organic, pharma, and tourism businesses.",
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
      "@id": "https://iprkaro.com/services/trademark-registration/sikkim"
    },
    "wordCount": 2500,
    "articleBody": "Sikkim, India's first organic state, offers unique branding opportunities in agriculture, tourism, and pharmaceuticals. Trademark registration is vital for protecting the distinct identity of Sikkim-based brands..."
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services in Sikkim with expert assistance, comprehensive search, and complete filing support.",
    "@id": "https://iprkaro.com/services/trademark-registration/sikkim",
    "url": "https://iprkaro.com/services/trademark-registration/sikkim",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Sikkim",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "40",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Karma Bhutia"
        },
        "datePublished": "2024-11-05",
        "reviewBody": "Excellent trademark service in Gangtok. They helped me register my organic tea brand and protected it from copycats. Very professional team.",
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
          "name": "Pema Sherpa"
        },
        "datePublished": "2024-10-12",
        "reviewBody": "Great experience with trademark registration for my travel agency. They handled the entire process smoothly. Highly recommended.",
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
          "name": "Tenzing Lepcha"
        },
        "datePublished": "2024-09-20",
        "reviewBody": "Professional service. They helped register my pharmaceutical brand and provided valuable legal advice. Very satisfied.",
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
      
      <SikkimClient />
    </>
  );
}
