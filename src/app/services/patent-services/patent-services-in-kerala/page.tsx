import React from 'react';
import { Metadata } from 'next';
import KeralaPatentClient from './KeralaPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Kerala | Patent Registration Kochi 2025',
  description: 'Expert patent services in Kerala. Specializing in Ayurvedic patents, Marine technology, and IT sector innovations (Kochi Infopark). Filing at Chennai Patent Office.',
  keywords: [
    'patent services kerala',
    'patent registration kochi',
    'ayurvedic patent filing india',
    'marine technology patent',
    'intellectual property rights kerala',
    'patent attorney trivandrum',
    'startup patent kerala'
  ],
  openGraph: {
    title: 'Patent Services in Kerala | Patent Registration Kochi 2025',
    description: 'Expert patent services in Kerala. Specializing in Ayurvedic patents, Marine technology, and IT sector innovations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Kerala',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-kerala',
  },
};

export default function KeralaPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I patent an Ayurvedic medicine in Kerala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but it must be a novel formulation with a synergistic effect. Mere admixture of known herbs is not patentable under Section 3(e). We help draft specifications that highlight the inventive step."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the patent office for Kerala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kerala falls under the jurisdiction of the Chennai Patent Office. All filings can be done online through the IP India portal."
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
      <KeralaPatentClient />
    </>
  );
}

