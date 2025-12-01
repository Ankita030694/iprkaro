import React from 'react';
import { Metadata } from 'next';
import UttarakhandPatentClient from './UttarakhandPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Uttarakhand | Patent Registration Dehradun 2025',
  description: 'Expert patent services in Uttarakhand. Specializing in Herbal Medicines (Ayush), Wellness Technology, and Industrial manufacturing. Filing at Delhi Patent Office.',
  keywords: [
    'patent services uttarakhand',
    'patent registration dehradun',
    'herbal patent india',
    'ayurvedic patent filing',
    'patent attorney haridwar',
    'wellness technology patent',
    'industrial patent pantnagar'
  ],
  openGraph: {
    title: 'Patent Services in Uttarakhand | Patent Registration Dehradun 2025',
    description: 'Expert patent services in Uttarakhand. Specializing in Herbal Medicines and Wellness Technology.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Uttarakhand',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-uttarakhand',
  },
};

export default function UttarakhandPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Uttarakhand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uttarakhand falls under the jurisdiction of the Delhi Patent Office. Applications are typically filed online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent an Ayurvedic medicine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, provided it is a synergistic formulation that shows enhanced efficacy and is not just a mere admixture of known herbs (Section 3(e))."
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
      <UttarakhandPatentClient />
    </>
  );
}

