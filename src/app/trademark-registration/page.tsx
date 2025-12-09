import React from 'react';
import { Metadata, Viewport } from 'next';
import TrademarkRegistrationClient from './TrademarkRegistrationClient';

export const viewport: Viewport = {
  themeColor: '#0C002B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Trademark Registration Online | Register Brand Name & Logo | IPRKaro',
  description: 'Complete guide to Trademark Registration in India. File trademark online, check costs & fees 2025, documents required, and process. Expert trademark registration services.',
  keywords: [
    'Trademark registration',
    'Register a trademark',
    'Brand name registration',
    'Logo trademark',
    'Trademark filing',
    'Online trademark application',
    'Business name trademark',
    'Copyright vs trademark',
    'Trademark search',
    'File trademark online',
    'Trademark registration services',
    'Best trademark attorney',
    'Trademark filing service near me',
    'Fast trademark registration',
    'Affordable trademark filing',
    'Trademark registration cost',
    'Trademark filing fees 2025',
    'Cheapest way to trademark',
    'Trademark renewal cost',
    'How to register a trademark for free',
    'How long does trademark registration take',
    'Trademark for digital assets',
    'International trademark registration'
  ],
  openGraph: {
    title: 'Trademark Registration Online | Complete Guide 2025 | IPRKaro',
    description: 'Secure your brand identity with expert Trademark Registration services. Learn about process, fees, and documents required to file trademark online.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    url: 'https://iprkaro.com/trademark-registration',
    images: [
      {
        url: 'https://iprkaro.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration Online | Register Brand Name & Logo',
    description: 'Complete guide to Trademark Registration. File trademark online, check costs & fees 2025. Expert assistance available.',
    images: ['https://iprkaro.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/trademark-registration',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function TrademarkRegistrationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You cannot register a trademark for free as government fees are mandatory (₹4,500 for individuals/startups, ₹9,000 for companies). However, you can save on professional fees by filing the application yourself online, though hiring a trademark attorney is recommended to avoid rejection."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The trademark registration process typically takes 12 to 18 months in India, provided there are no objections or oppositions. If objections are raised, the process can take longer. Expedited processing is available for an additional fee."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lawyer to trademark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While not legally mandatory, hiring a trademark lawyer or attorney is highly advisable. They conduct proper trademark searches, select the right classes, draft the application correctly, and handle office actions (objections), significantly increasing the chances of successful registration."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of trademark registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For individuals, startups, and MSMEs, the government fee for online filing is ₹4,500 per class. For other entities like private limited companies, the fee is ₹9,000 per class. Professional fees for trademark attorneys are additional."
        }
      },
      {
        "@type": "Question",
        "name": "Can I trademark a slogan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can trademark a slogan or tagline if it is distinctive and identifies the source of your goods or services. Common or descriptive phrases are generally difficult to trademark."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trademark Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Search",
            "description": "Comprehensive availability check for brand names and logos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Trademark Filing",
            "description": "Filing of Form TM-A for trademark registration."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Objection Reply",
            "description": "Drafting and filing responses to examination reports."
          }
        }
      ]
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
        "name": "Trademark Registration",
        "item": "https://iprkaro.com/trademark-registration"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trademark Registration Online: Complete Guide 2025",
    "description": "Complete guide to trademark registration. Learn step-by-step process, fees, documents required, and expert assistance for trademark registration.",
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
    "datePublished": "2025-01-01T09:00:00+05:30",
    "dateModified": "2025-01-01T09:00:00+05:30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://iprkaro.com/trademark-registration"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "IPRKaro - Trademark Registration Services",
    "image": "https://iprkaro.com/og-image.jpg",
    "description": "Professional trademark registration services with expert assistance.",
    "@id": "https://iprkaro.com/trademark-registration",
    "url": "https://iprkaro.com/trademark-registration",
    "telephone": "+91-9289707648",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rahul Sharma"
        },
        "datePublished": "2024-12-15",
        "reviewBody": "Excellent service! They helped me register my brand name smoothly. The team is very knowledgeable about trademark classes.",
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
          "name": "Anita Desai"
        },
        "datePublished": "2024-11-20",
        "reviewBody": "Best trademark attorney I found online. Affordable filing fees and fast processing. Highly recommended for startups.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
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
      
      <TrademarkRegistrationClient />
    </>
  );
}
