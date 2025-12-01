import React from 'react';
import { Metadata } from 'next';
import PunjabPatentClient from './PunjabPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Punjab | Patent Registration Ludhiana 2025',
  description: 'Expert patent services in Punjab. Specializing in Agricultural Machinery, Textile Engineering, and Sports Goods innovations. Filing at Delhi Patent Office.',
  keywords: [
    'patent services punjab',
    'patent registration ludhiana',
    'agricultural machinery patent',
    'sports goods patent jalandhar',
    'patent attorney chandigarh',
    'textile machinery patent india',
    'auto parts patent punjab'
  ],
  openGraph: {
    title: 'Patent Services in Punjab | Patent Registration Ludhiana 2025',
    description: 'Expert patent services in Punjab. Specializing in Agricultural Machinery and Textile Engineering.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Punjab',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-punjab',
  },
};

export default function PunjabPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Punjab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Punjab falls under the jurisdiction of the Delhi Patent Office. All filings can be done online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a new design for a tractor part?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if the design offers a functional improvement, it can be patented. Purely aesthetic designs should be registered under Design Registration."
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
      <PunjabPatentClient />
    </>
  );
}

