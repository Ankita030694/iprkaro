import React from 'react';
import { Metadata } from 'next';
import DadraPatentClient from './DadraPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Dadra & Nagar Haveli | Patent Registration Silvassa',
  description: 'Expert patent services in Dadra and Nagar Haveli (Silvassa). Specializing in Plastics, Polymers, and Textile engineering patents. Filing at Mumbai Patent Office.',
  keywords: [
    'patent services dadra nagar haveli',
    'patent registration silvassa',
    'plastic industry patent',
    'textile machinery patent',
    'patent attorney silvassa',
    'polymer patent india',
    'industrial patent services'
  ],
  openGraph: {
    title: 'Patent Services in Dadra & Nagar Haveli | Patent Registration Silvassa',
    description: 'Expert patent services in Dadra and Nagar Haveli. Specializing in Plastics and Textile engineering patents.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Dadra & Nagar Haveli',
      },
    ],
  },
  alternates: {
    canonical: '/services/patent-services/dadra-and-nagar-haveli',
  },
};

export default function DadraPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Silvassa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Silvassa and the entire Dadra & Nagar Haveli territory fall under the jurisdiction of the Mumbai Patent Office."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a plastic molding process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if the molding process involves a novel technique that improves efficiency or product quality, it can be patented as a process patent."
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
      <DadraPatentClient />
    </>
  );
}

