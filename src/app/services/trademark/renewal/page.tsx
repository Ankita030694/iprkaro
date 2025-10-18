import React from 'react';
import { Metadata } from 'next';
import RenewalClient from './RenewalClient';

export const metadata: Metadata = {
  title: 'Trademark Renewal & Restoration Services India | Extend Your Brand Protection',
  description: 'Professional trademark renewal and restoration services in India. Renew your trademark registration before expiry, restore removed trademarks, and maintain continuous brand protection with expert assistance.',
  keywords: [
    'trademark renewal India',
    'trademark renewal process',
    'trademark renewal fees',
    'trademark restoration India',
    'renew trademark online',
    'trademark renewal form',
    'trademark expiry renewal',
    'restore removed trademark',
    'trademark renewal timeline',
    'trademark renewal services',
    'how to renew trademark',
    'trademark renewal cost',
    'trademark validity extension',
    'trademark renewal consultant',
    'TM-R form filing',
    'trademark renewal deadline',
    'trademark renewal late fees',
    'trademark restoration form TM-13',
    'trademark renewal India 2025',
    'IPRKaro trademark renewal'
  ],
  openGraph: {
    title: 'Trademark Renewal & Restoration Services India | IPRKaro',
    description: 'Expert trademark renewal and restoration services. Extend your trademark protection for another 10 years with professional assistance and timely filing.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Renewal & Restoration Services India',
    description: 'Professional trademark renewal services to maintain your brand protection. Expert assistance with Form TM-R filing and trademark restoration.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark/renewal',
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

export default function TrademarkRenewalPage() {
  // JSON-LD Schema for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When should I renew my trademark in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark renewal should be filed within 6 months before the expiry of the 10-year registration period. You can also file within 6 months after expiry with a late fee surcharge. It's recommended to start the renewal process at least 6 months before expiry to avoid penalties."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I miss the trademark renewal deadline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you miss the renewal deadline, you have a grace period of 6 months to file renewal with additional late fees. After this grace period expires, the trademark will be removed from the register. However, you can file for restoration within 1 year of removal by paying restoration fees and showing valid reasons."
        }
      },
      {
        "@type": "Question",
        "name": "What are the fees for trademark renewal in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The government fee for trademark renewal varies based on entity type: ₹9,000 for companies/other entities, ₹4,500 for individuals/startups/MSMEs per class. Late fees apply if filed after the expiry date. Professional service fees are additional."
        }
      },
      {
        "@type": "Question",
        "name": "Can a removed trademark be restored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a removed trademark can be restored within 1 year from the date of removal. You need to file Form TM-13 along with the renewal application (Form TM-R), pay prescribed restoration fees, and provide a valid reason for the delay in renewal."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark renewal take in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark renewal typically takes 2-4 months if filed before expiry without any objections. The process includes filing Form TM-R, examination by the Trademark Registry, and issuance of the renewed registration certificate valid for another 10 years."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to submit any documents for trademark renewal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard renewal, minimal documentation is required - mainly the trademark registration certificate and applicant details. For restoration cases, you need to submit an affidavit explaining the delay and any supporting documents as evidence for the reason of non-renewal."
        }
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Renewal & Restoration Services",
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
      "name": "Trademark Renewal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Renewal Filing",
            "description": "Complete trademark renewal filing with Form TM-R before expiry date"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Restoration",
            "description": "Restoration of removed trademarks within 1 year using Form TM-13"
          }
        }
      ]
    }
  };

  // Breadcrumb Schema
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
        "name": "Trademark Renewal",
        "item": "https://iprkaro.com/services/trademark/renewal"
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
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
      
      <RenewalClient />
    </>
  );
}

