import React from 'react';
import { Metadata } from 'next';
import JharkhandPatentClient from './JharkhandPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Jharkhand | Patent Registration Ranchi 2025',
  description: 'Expert patent services in Jharkhand. Specializing in Mining technology, Metallurgy, and Heavy Industry innovations. Filing at Kolkata Patent Office.',
  keywords: [
    'patent services jharkhand',
    'patent registration ranchi',
    'mining patent india',
    'patent attorney jamshedpur',
    'metallurgy patent',
    'intellectual property jharkhand',
    'heavy industry patent'
  ],
  openGraph: {
    title: 'Patent Services in Jharkhand | Patent Registration Ranchi 2025',
    description: 'Expert patent services in Jharkhand. Specializing in Mining technology and Metallurgy.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Jharkhand',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-jharkhand',
  },
};

export default function JharkhandPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Jharkhand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jharkhand falls under the jurisdiction of the Kolkata Patent Office. Online filing is the standard procedure."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a manufacturing process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, new and inventive manufacturing processes (e.g., in steel production) are patentable as process patents."
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
      <JharkhandPatentClient />
    </>
  );
}

