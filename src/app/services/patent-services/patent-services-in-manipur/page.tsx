import React from 'react';
import { Metadata } from 'next';
import ManipurPatentClient from './ManipurPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Manipur | Patent Registration Imphal 2025',
  description: 'Expert patent services in Manipur. Specializing in Handlooms, Food Processing, and unique agricultural products. Filing at Kolkata Patent Office.',
  keywords: [
    'patent services manipur',
    'patent registration imphal',
    'handloom patent india',
    'black rice processing patent',
    'patent attorney northeast',
    'textile patent manipur',
    'food technology patent'
  ],
  openGraph: {
    title: 'Patent Services in Manipur | Patent Registration Imphal 2025',
    description: 'Expert patent services in Manipur. Specializing in Handlooms and Food Processing.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Manipur',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-manipur',
  },
};

export default function ManipurPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Manipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manipur falls under the jurisdiction of the Kolkata Patent Office. We handle the entire process online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a new weaving technique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if the weaving technique involves a technical advancement and is novel, it can be patented as a process."
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
      <ManipurPatentClient />
    </>
  );
}

