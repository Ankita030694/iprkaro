import React from 'react';
import { Metadata } from 'next';
import AssignmentClient from './AssignmentClient';

export const metadata: Metadata = {
  title: 'Trademark Assignment & Licensing Services India | Expert Legal Documentation',
  description: 'Professional trademark assignment and licensing services in India. Expert legal assistance for trademark transfers, licensing agreements, franchising, and Registry recordation with Form TM-P and TM-U filing.',
  keywords: [
    'trademark assignment India',
    'trademark licensing India',
    'trademark transfer India',
    'trademark assignment agreement',
    'trademark license agreement',
    'Form TM-P filing',
    'Form TM-U filing',
    'trademark assignment services',
    'trademark licensing services',
    'brand licensing India',
    'trademark franchise agreement',
    'trademark assignment deed',
    'trademark assignment fees',
    'trademark transfer process',
    'license trademark India',
    'trademark assignment lawyer',
    'trademark licensing consultant',
    'trademark assignment India 2025',
    'IPRKaro assignment services',
    'trademark assignment cost'
  ],
  openGraph: {
    title: 'Trademark Assignment & Licensing Services | IPRKaro',
    description: 'Expert trademark assignment and licensing services. Professional legal documentation for trademark transfers, licensing agreements, and Registry recordation.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Assignment & Licensing Services India',
    description: 'Professional legal assistance for trademark assignments, licensing agreements, and commercial trademark transactions.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark/assignment',
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

export default function TrademarkAssignmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is trademark assignment in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark assignment is the permanent transfer of trademark ownership from one party (assignor) to another (assignee). It includes transfer of all rights, title, and interest in the trademark. The assignment must be recorded with the Trademark Registry through Form TM-P to be legally valid and enforceable."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between trademark assignment and licensing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assignment transfers complete ownership of the trademark permanently to another party, while licensing grants temporary permission to use the trademark while retaining ownership. Assignment is usually a one-time transaction, whereas licensing involves ongoing royalty payments and contractual terms."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark assignment registration take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark assignment registration typically takes 6-12 months from filing the Form TM-P. The process includes submission of assignment deed, examination by the Registry, and updating records. Proper documentation and compliance can expedite the process."
        }
      },
      {
        "@type": "Question",
        "name": "Can a pending trademark application be assigned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, pending trademark applications can be assigned before registration is complete. The assignment deed should clearly state that the application is being transferred. Form TM-P must be filed with the Trademark Registry along with the original assignment agreement to record the transfer."
        }
      },
      {
        "@type": "Question",
        "name": "What is trademark licensing and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark licensing is a legal arrangement where the trademark owner (licensor) grants permission to another party (licensee) to use the trademark under specified terms and conditions. The license agreement defines usage scope, territory, duration, quality control standards, and royalty payments."
        }
      },
      {
        "@type": "Question",
        "name": "Is it mandatory to register a trademark license agreement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While not legally mandatory, registering a trademark license agreement with the Trademark Registry using Form TM-U is highly recommended. Registration provides legal validity, protects licensee rights, prevents unauthorized use claims, and ensures enforceability. Registered licenses also protect against third-party assignments."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Assignment & Licensing Services",
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
      "name": "Trademark Assignment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Assignment",
            "description": "Complete trademark ownership transfer with assignment deed drafting and Form TM-P filing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Licensing",
            "description": "Trademark licensing agreement drafting and Form TM-U registration with the Trademark Registry"
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
        "name": "Trademark Assignment",
        "item": "https://iprkaro.com/services/trademark/assignment"
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
      
      <AssignmentClient />
    </>
  );
}

