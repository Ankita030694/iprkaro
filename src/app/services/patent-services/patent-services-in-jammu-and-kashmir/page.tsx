import React from 'react';
import { Metadata } from 'next';
import JKPatentClient from './JKPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Jammu & Kashmir | Patent Registration Srinagar 2025',
  description: 'Expert patent services in Jammu & Kashmir. Specializing in Horticulture, Saffron processing, and Pashmina innovations. Filing at Delhi Patent Office.',
  keywords: [
    'patent services jammu kashmir',
    'patent registration srinagar',
    'saffron processing patent',
    'pashmina technology patent',
    'horticulture patent india',
    'patent attorney jammu',
    'apple preservation patent'
  ],
  openGraph: {
    title: 'Patent Services in Jammu & Kashmir | Patent Registration Srinagar 2025',
    description: 'Expert patent services in J&K. Specializing in Horticulture and Handicraft innovations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Jammu & Kashmir',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-jammu-and-kashmir',
  },
};

export default function JKPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Jammu & Kashmir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jammu & Kashmir falls under the jurisdiction of the Delhi Patent Office. Applications are filed online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a handicraft tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a new tool that improves the efficiency or quality of handicraft production (e.g., carpet weaving loom improvement) is patentable."
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
      <JKPatentClient />
    </>
  );
}

