import React from 'react';
import { Metadata } from 'next';
import AndamanPatentClient from './AndamanPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Andaman & Nicobar | Patent Registration Port Blair',
  description: 'Expert patent services in Andaman and Nicobar Islands. Specializing in Marine Biotechnology, Eco-tourism innovations, and Sustainable technologies. Filing at Chennai Patent Office.',
  keywords: [
    'patent services andaman nicobar',
    'patent registration port blair',
    'marine biotechnology patent',
    'eco-friendly patent india',
    'patent attorney andaman',
    'biodiversity patent india',
    'sustainable technology patent'
  ],
  openGraph: {
    title: 'Patent Services in Andaman & Nicobar | Patent Registration Port Blair',
    description: 'Expert patent services in Andaman and Nicobar Islands. Specializing in Marine Biotechnology and Sustainable technologies.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Andaman & Nicobar',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-andaman-and-nicobar-islands',
  },
};

export default function AndamanPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Andaman & Nicobar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Andaman & Nicobar Islands fall under the jurisdiction of the Chennai Patent Office. Applications are filed online."
        }
      },
      {
        "@type": "Question",
        "name": "Is special permission needed for marine patents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the invention uses biological resources from India (e.g., marine organisms), permission from the National Biodiversity Authority (NBA) is required before the patent grant."
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
      <AndamanPatentClient />
    </>
  );
}

