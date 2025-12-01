import React from 'react';
import { Metadata } from 'next';
import MeghalayaTrademarkClient from './MeghalayaTrademarkClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Meghalaya | Brand Protection Shillong',
  description: 'Expert trademark registration services in Meghalaya. Protect your spices, music bands, and eco-tourism brands in Shillong, Tura, and Jowai.',
  keywords: [
    'trademark registration meghalaya',
    'brand registration shillong',
    'lakadong turmeric trademark',
    'trademark consultant northeast india',
    'intellectual property meghalaya'
  ],
  openGraph: {
    title: 'Trademark Registration in Meghalaya | Brand Protection Shillong',
    description: 'Expert trademark registration services in Meghalaya. Protect your local brands and businesses.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Trademark Services in Meghalaya',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/meghalaya',
  },
};

export default function MeghalayaTrademarkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I register a trademark in Meghalaya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can file online through the IP India portal. Meghalaya falls under the Kolkata Trademark Registry. IPRKaro assists with digital filing and processing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I trademark my music band name in Shillong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, music bands can register their name under Class 41 (Entertainment Services) to prevent others from using the same name."
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
      <MeghalayaTrademarkClient />
    </>
  );
}

