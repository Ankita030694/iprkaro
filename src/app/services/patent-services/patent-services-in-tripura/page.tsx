import React from 'react';
import { Metadata } from 'next';
import TripuraPatentClient from './TripuraPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Tripura | Patent Registration Agartala 2025',
  description: 'Expert patent services in Tripura. Specializing in Rubber technology, Bamboo products, and Agro-processing innovations. Filing at Kolkata Patent Office.',
  keywords: [
    'patent services tripura',
    'patent registration agartala',
    'rubber technology patent',
    'bamboo patent india',
    'patent attorney tripura',
    'agro-processing patent',
    'intellectual property agartala'
  ],
  openGraph: {
    title: 'Patent Services in Tripura | Patent Registration Agartala 2025',
    description: 'Expert patent services in Tripura. Specializing in Rubber technology and Bamboo products.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Tripura',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-tripura',
  },
};

export default function TripuraPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Tripura?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tripura falls under the jurisdiction of the Kolkata Patent Office. Applications are filed online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a new rubber processing method?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, novel methods of processing rubber latex or creating new rubber compounds are patentable."
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
      <TripuraPatentClient />
    </>
  );
}

