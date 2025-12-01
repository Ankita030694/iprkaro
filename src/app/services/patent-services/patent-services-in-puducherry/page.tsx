import React from 'react';
import { Metadata } from 'next';
import PuducherryPatentClient from './PuducherryPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Puducherry | Patent Registration Pondicherry 2025',
  description: 'Expert patent services in Puducherry. Specializing in Sustainable Technology (Auroville), Chemicals, and Pharma. Filing at Chennai Patent Office.',
  keywords: [
    'patent services puducherry',
    'patent registration pondicherry',
    'sustainable technology patent',
    'auroville patent services',
    'patent attorney puducherry',
    'chemical patent india',
    'green tech patent'
  ],
  openGraph: {
    title: 'Patent Services in Puducherry | Patent Registration Pondicherry 2025',
    description: 'Expert patent services in Puducherry. Specializing in Sustainable Technology and Chemical innovations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Puducherry',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-puducherry',
  },
};

export default function PuducherryPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Puducherry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puducherry falls under the jurisdiction of the Chennai Patent Office. We facilitate online filing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a green building technology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, innovative construction materials or methods that improve sustainability are patentable."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <PuducherryPatentClient />
    </>
  );
}

