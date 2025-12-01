import React from 'react';
import { Metadata } from 'next';
import SikkimPatentClient from './SikkimPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Sikkim | Patent Registration Gangtok 2025',
  description: 'Expert patent services in Sikkim. Specializing in Organic Farming, Floriculture, and Medicinal Plants. Filing at Kolkata Patent Office.',
  keywords: [
    'patent services sikkim',
    'patent registration gangtok',
    'organic farming patent',
    'floriculture patent india',
    'patent attorney sikkim',
    'biodiversity patent india',
    'medicinal plant patent'
  ],
  openGraph: {
    title: 'Patent Services in Sikkim | Patent Registration Gangtok 2025',
    description: 'Expert patent services in Sikkim. Specializing in Organic Farming and Floriculture.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Sikkim',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-sikkim',
  },
};

export default function SikkimPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Sikkim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sikkim falls under the jurisdiction of the Kolkata Patent Office. Online filing is the standard."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent an organic farming method?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if the organic farming method is novel, involves an inventive step, and has industrial applicability, it can be patented."
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
      <SikkimPatentClient />
    </>
  );
}

