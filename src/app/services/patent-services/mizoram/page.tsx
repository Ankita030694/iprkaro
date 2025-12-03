import React from 'react';
import { Metadata } from 'next';
import MizoramPatentClient from './MizoramPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Mizoram | Patent Registration Aizawl 2025',
  description: 'Expert patent services in Mizoram. Specializing in Bamboo technology, Agriculture, and Food Processing innovations. Filing at Kolkata Patent Office.',
  keywords: [
    'patent services mizoram',
    'patent registration aizawl',
    'bamboo technology patent',
    'food processing patent india',
    'patent attorney northeast india',
    'agricultural patent services',
    'innovation in mizoram'
  ],
  openGraph: {
    title: 'Patent Services in Mizoram | Patent Registration Aizawl 2025',
    description: 'Expert patent services in Mizoram. Specializing in Bamboo technology and Food Processing innovations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Mizoram',
      },
    ],
  },
  alternates: {
    canonical: '/services/patent-services/mizoram',
  },
};

export default function MizoramPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Mizoram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mizoram falls under the jurisdiction of the Kolkata Patent Office. We facilitate online filing for all applicants."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a bamboo processing machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, machinery or tools that provide a new way of processing bamboo or improving efficiency are patentable."
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
      <MizoramPatentClient />
    </>
  );
}

