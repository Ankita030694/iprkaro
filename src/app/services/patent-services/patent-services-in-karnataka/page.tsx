import React from 'react';
import { Metadata } from 'next';
import KarnatakaPatentClient from './KarnatakaPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Karnataka | Patent Registration Bangalore 2025',
  description: 'Expert patent filing services in Karnataka & Bangalore. Specializing in software, biotech & engineering patents. Comprehensive support for startups and tech companies. Starting at ₹9,999.',
  keywords: [
    'patent services karnataka',
    'patent registration bangalore',
    'patent filing bangalore',
    'software patent india',
    'patent attorney bangalore',
    'patent agent karnataka',
    'ipr services bangalore',
    'patent office chennai jurisdiction',
    'technology patent filing',
    'startup patent services karnataka'
  ],
  openGraph: {
    title: 'Patent Services in Karnataka | Patent Registration Bangalore 2025',
    description: 'Expert patent filing services in Karnataka & Bangalore. Specializing in software, biotech & engineering patents.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Karnataka',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-karnataka',
  },
};

export default function KarnatakaPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the Patent Office for Karnataka applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patent applications from Karnataka fall under the jurisdiction of the Chennai Patent Office, located at Intellectual Property Building, G.S.T. Road, Guindy, Chennai - 600032. However, filing can be done completely online through the IP India portal."
        }
      },
      {
        "@type": "Question",
        "name": "Can software be patented in Bangalore/Karnataka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Software per se is not patentable in India under Section 3(k) of the Patents Act. However, software combined with hardware or having a 'technical effect' can be patented. Our experts in Bangalore specialize in drafting such applications to maximize grant probability."
        }
      },
      {
        "@type": "Question",
        "name": "What are the patent filing fees for startups in Karnataka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recognized startups in Karnataka enjoy an 80% rebate on patent filing fees, paying only ₹1,600 as government fee for online filing. IPRKaro assists startups in claiming this benefit."
        }
      },
      {
        "@type": "Question",
        "name": "How can I protect my invention in Karnataka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To protect your invention in Karnataka, you should file a patent application immediately before any public disclosure. You can start with a provisional application to secure a priority date."
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
      <KarnatakaPatentClient />
    </>
  );
}

