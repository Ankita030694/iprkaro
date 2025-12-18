import React from 'react';
import { Metadata } from 'next';
import NagalandClient from './NagalandClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Nagaland | Complete Guide & Process 2025 | IPRKaro',
  description: 'Complete guide to trademark registration in Nagaland. Learn step-by-step process, documents required, timeline, and expert assistance for trademark registration in Nagaland, India. Get started today.',
  keywords: [
    'trademark registration in nagaland',
    'trademark registration nagaland',
    'how to register trademark in nagaland',
    'trademark registration process nagaland',
    'trademark registration documents nagaland',
    'trademark registration online nagaland',
    'trademark registration kohima',
    'trademark registration dimapur',
    'trademark registration nagaland india',
    'trademark registration nagaland 2025',
    'trademark registration nagaland timeline',
    'trademark registration nagaland requirements',
    'trademark registration nagaland procedure',
    'trademark registration nagaland steps',
    'trademark registration nagaland guide',
    'trademark registration nagaland consultant',
    'trademark registration nagaland lawyer',
    'trademark registration nagaland attorney',
    'trademark registration nagaland services',
    'trademark registration nagaland help',
    'IPRKaro trademark registration nagaland'
  ],
  openGraph: {
    title: 'Trademark Registration in Nagaland | Complete Guide & Process | IPRKaro',
    description: 'Expert trademark registration services in Nagaland. Complete guide with step-by-step process, documents, and timeline. Get professional assistance for trademark registration in Nagaland.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Nagaland | Complete Guide & Process',
    description: 'Complete guide to trademark registration in Nagaland with expert assistance, step-by-step process, and timeline.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/nagaland',
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

export default function NagalandTrademarkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Nagaland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Nagaland, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Respond to any examination objections if raised, 5) Wait for publication in Trademark Journal, and 6) Receive registration certificate upon successful completion. The entire process typically takes 12-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Nagaland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents for trademark registration in Nagaland include: Identity proof of applicant (Aadhar card, passport, or driving license), Address proof (utility bills, rental agreement, or voter ID), Clear representation of trademark (logo image or wordmark in high resolution), Description of goods or services for which registration is sought, Power of Attorney (Form TM-48) if filing through an agent, Incorporation certificate if applicant is a company, Partnership deed if applicant is a partnership firm, and any supporting documents showing use of trademark if already in use."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Registration Services in Nagaland",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Nagaland",
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
        "name": "Trademark Registration in Nagaland",
        "item": "https://iprkaro.com/services/trademark-registration/nagaland"
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
      
      <NagalandClient />
    </>
  );
}
