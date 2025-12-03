import React from 'react';
import { Metadata } from 'next';
import UttarPradeshPatentClient from './UttarPradeshPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Uttar Pradesh | Patent Registration Noida 2025',
  description: 'Expert patent services in Uttar Pradesh. Specializing in Electronics (Noida), Leather (Kanpur), and Textile innovations. Filing at Delhi Patent Office.',
  keywords: [
    'patent services uttar pradesh',
    'patent registration noida',
    'patent attorney kanpur',
    'software patent india',
    'leather industry patent',
    'textile patent varanasi',
    'intellectual property lucknow'
  ],
  openGraph: {
    title: 'Patent Services in Uttar Pradesh | Patent Registration Noida 2025',
    description: 'Expert patent services in Uttar Pradesh. Specializing in Electronics, Leather, and Textile innovations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Uttar Pradesh',
      },
    ],
  },
  alternates: {
    canonical: '/services/patent-services/uttar-pradesh',
  },
};

export default function UttarPradeshPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Uttar Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uttar Pradesh falls under the jurisdiction of the Delhi Patent Office located in Dwarka. Online filing is available."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a software developed in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, software that has a technical effect and is used in conjunction with hardware can be patented. Pure code is protected under Copyright."
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
      <UttarPradeshPatentClient />
    </>
  );
}

