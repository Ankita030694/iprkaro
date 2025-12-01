import React from 'react';
import { Metadata } from 'next';
import HimachalPradeshTrademarkClient from './HimachalPradeshTrademarkClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Himachal Pradesh | Brand Protection',
  description: 'Expert trademark registration services in Himachal Pradesh. Protect your brand in tourism, pharmaceuticals, and horticulture sectors. Online filing support for Shimla, Manali, Baddi businesses.',
  keywords: [
    'trademark registration himachal pradesh',
    'brand registration shimla',
    'trademark attorney baddi',
    'pharmaceutical trademark india',
    'hotel trademark registration manali',
    'intellectual property himachal',
    'apple brand trademark'
  ],
  openGraph: {
    title: 'Trademark Registration in Himachal Pradesh | Brand Protection',
    description: 'Expert trademark registration services in Himachal Pradesh. Protect your brand in tourism, pharmaceuticals, and horticulture sectors.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Trademark Services in Himachal Pradesh',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/himachal-pradesh',
  },
};

export default function HimachalPradeshTrademarkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I register a trademark in Himachal Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can register a trademark online through the IP India portal. Himachal Pradesh falls under the Delhi Trademark Registry jurisdiction. IPRKaro can handle the entire process digitally."
        }
      },
      {
        "@type": "Question",
        "name": "Is trademark mandatory for hotels in Manali/Shimla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is not mandatory but highly recommended. A registered trademark protects your hotel's name from being used by unauthorized booking agents or fake websites."
        }
      },
      {
        "@type": "Question",
        "name": "Can I trademark a medicine name in Baddi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, pharmaceutical brand names are the most common trademarks filed from Baddi. It is crucial to ensure the name is not deceptively similar to existing medicines to avoid rejection."
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
      <HimachalPradeshTrademarkClient />
    </>
  );
}

