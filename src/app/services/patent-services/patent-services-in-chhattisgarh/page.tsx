import React from 'react';
import { Metadata } from 'next';
import ChhattisgarhPatentClient from './ChhattisgarhPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Chhattisgarh | Patent Registration Raipur 2025',
  description: 'Expert patent services in Chhattisgarh. Specializing in Power, Steel, and Tribal innovations. Filing at Mumbai Patent Office.',
  keywords: [
    'patent services chhattisgarh',
    'patent registration raipur',
    'power sector patent india',
    'patent attorney bhilai',
    'tribal innovation patent',
    'intellectual property chhattisgarh',
    'industrial patent korba'
  ],
  openGraph: {
    title: 'Patent Services in Chhattisgarh | Patent Registration Raipur 2025',
    description: 'Expert patent services in Chhattisgarh. Specializing in Power, Steel, and Tribal innovations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Chhattisgarh',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-chhattisgarh',
  },
};

export default function ChhattisgarhPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the patent office for Chhattisgarh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chhattisgarh falls under the jurisdiction of the Mumbai Patent Office. Filing is done online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a power generation improvement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, technical improvements in power generation efficiency or equipment can be patented."
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
      <ChhattisgarhPatentClient />
    </>
  );
}

