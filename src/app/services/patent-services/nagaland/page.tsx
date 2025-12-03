import React from 'react';
import { Metadata } from 'next';
import NagalandPatentClient from './NagalandPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Nagaland | Patent Registration Dimapur 2025',
  description: 'Expert patent services in Nagaland. Specializing in Agricultural products, Traditional Knowledge protection, and Handicrafts. Filing at Kolkata Patent Office.',
  keywords: [
    'patent services nagaland',
    'patent registration dimapur',
    'traditional knowledge patent',
    'naga mircha patent',
    'patent attorney kohima',
    'handicraft patent india',
    'agri-product patent nagaland'
  ],
  openGraph: {
    title: 'Patent Services in Nagaland | Patent Registration Dimapur 2025',
    description: 'Expert patent services in Nagaland. Specializing in Agricultural products and Traditional Knowledge protection.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Nagaland',
      },
    ],
  },
  alternates: {
    canonical: '/services/patent-services/nagaland',
  },
};

export default function NagalandPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Nagaland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nagaland falls under the jurisdiction of the Kolkata Patent Office. Online filing is available."
        }
      },
      {
        "@type": "Question",
        "name": "Can traditional knowledge be patented?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional knowledge itself cannot be patented, but novel improvements or new products derived from it can be, provided they meet patentability criteria."
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
      <NagalandPatentClient />
    </>
  );
}

