import React from 'react';
import { Metadata } from 'next';
import SearchClient from '@/app/services/trademark/search/SearchClient';

export const metadata: Metadata = {
  title: 'Trademark Search & Availability Check Services India | Comprehensive Brand Analysis',
  description: 'Professional trademark search and availability check services in India. Comprehensive analysis of trademark conflicts, availability assessment, and detailed search reports to secure your brand registration.',
  keywords: [
    'trademark search India',
    'trademark availability check',
    'trademark search services',
    'brand name availability',
    'trademark conflict search',
    'trademark search report',
    'trademark clearance search',
    'trademark search cost',
    'trademark search process',
    'trademark search consultant',
    'trademark search lawyer',
    'trademark search online',
    'trademark search database',
    'trademark search India 2025',
    'IPRKaro trademark search',
    'trademark search fees',
    'trademark search timeline',
    'comprehensive trademark search',
    'trademark search analysis',
    'trademark search verification'
  ],
  openGraph: {
    title: 'Trademark Search & Availability Check Services | IPRKaro',
    description: 'Expert trademark search and availability analysis. Comprehensive brand clearance services to ensure your trademark is available for registration.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Search & Availability Check Services India',
    description: 'Professional trademark search services with comprehensive analysis and detailed reports for brand clearance.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark/search',
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

export default function TrademarkSearchPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is trademark search and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark search is a comprehensive analysis of existing trademarks to determine if your proposed mark is available for registration. It's crucial because it helps avoid conflicts, reduces rejection risks, and saves time and money by identifying potential issues before filing your application."
        }
      },
      {
        "@type": "Question",
        "name": "What types of trademark searches are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three types of searches: 1) Identical Search - exact matches, 2) Similarity Search - phonetically, visually, or conceptually similar marks, and 3) Comprehensive Search - includes all variations, translations, and related marks across multiple classes and databases."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a trademark search take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our trademark search services typically take 3-5 business days for a comprehensive analysis. This includes database searches, conflict analysis, and preparation of detailed search reports with recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "What information do I need to provide for trademark search?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need to provide: the proposed trademark name/logo, description of goods/services, preferred Nice Classification classes, and any specific variations or stylizations you plan to use. Additional context about your business and target market helps in comprehensive analysis."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if conflicts are found in the search?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If conflicts are found, we provide detailed analysis of the conflicting marks, assess the risk level, and suggest alternatives or modifications. We also advise on the likelihood of successful registration and potential strategies to overcome objections."
        }
      },
      {
        "@type": "Question",
        "name": "Is trademark search mandatory before filing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While not legally mandatory, trademark search is highly recommended and considered best practice. It significantly reduces the risk of application rejection, saves costs on unsuccessful applications, and helps in strategic brand planning."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Search & Availability Check Services",
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
      "name": "Trademark Search Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Identical Trademark Search",
            "description": "Search for exact matches of your proposed trademark in the Trademark Registry database"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Similarity Trademark Search",
            "description": "Comprehensive search for phonetically, visually, or conceptually similar trademarks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Comprehensive Trademark Search",
            "description": "Complete trademark availability analysis including all variations and related marks"
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
        "name": "Trademark Search",
        "item": "https://iprkaro.com/services/trademark/search"
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
      
      <SearchClient />
    </>
  );
}
