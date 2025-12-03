import React from 'react';
import { Metadata } from 'next';
import HimachalPradeshPatentClient from './HimachalPradeshPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Himachal Pradesh | Pharma Patent Baddi',
  description: 'Specialized patent services for Pharmaceutical & Herbal industries in Himachal Pradesh (Baddi, Nalagarh). Expert support for Section 3(d) compliance and filing at Delhi Patent Office.',
  keywords: [
    'patent services himachal pradesh',
    'pharma patent filing india',
    'patent registration baddi',
    'pharmaceutical patent attorney',
    'section 3d patent india',
    'herbal patent registration',
    'intellectual property himachal'
  ],
  openGraph: {
    title: 'Patent Services in Himachal Pradesh | Pharma Patent Baddi',
    description: 'Specialized patent services for Pharmaceutical & Herbal industries in Himachal Pradesh.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Himachal Pradesh',
      },
    ],
  },
  alternates: {
    canonical: '/services/patent-services/himachal-pradesh',
  },
};

export default function HimachalPradeshPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where to file patents for Baddi companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Companies in Baddi, Himachal Pradesh must file their patent applications at the Delhi Patent Office (Dwarka). Online filing is available and recommended."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a new formulation of an existing drug?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is challenging due to Section 3(d) of the Indian Patents Act. You must prove 'enhanced therapeutic efficacy' over the existing substance. Our experts specialize in drafting such complex specifications."
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
      <HimachalPradeshPatentClient />
    </>
  );
}

