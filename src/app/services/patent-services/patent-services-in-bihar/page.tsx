import React from 'react';
import { Metadata } from 'next';
import BiharPatentClient from './BiharPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Bihar | Patent Registration Patna 2025',
  description: 'Expert patent services in Bihar. Focusing on Agricultural innovations, Food processing technology, and Grassroots innovations. Filing at Kolkata Patent Office.',
  keywords: [
    'patent services bihar',
    'patent registration patna',
    'agri-tech patent india',
    'patent attorney bihar',
    'grassroots innovation patent',
    'intellectual property bihar',
    'startup patent patna'
  ],
  openGraph: {
    title: 'Patent Services in Bihar | Patent Registration Patna 2025',
    description: 'Expert patent services in Bihar. Focusing on Agricultural innovations and Food processing technology.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Bihar',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-bihar',
  },
};

export default function BiharPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bihar falls under the jurisdiction of the Kolkata Patent Office. Applications can be filed online from anywhere in Bihar."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent an agricultural tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, new and inventive agricultural tools or machinery can be patented. We help draft technical specifications for such mechanical inventions."
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
      <BiharPatentClient />
    </>
  );
}

