import React from 'react';
import { Metadata } from 'next';
import MizoramClient from './MizoramClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Mizoram | Complete Guide & Process 2025 | IPRKaro',
  description: 'Complete guide to trademark registration in Mizoram. Learn step-by-step process, documents required, timeline, and expert assistance for trademark registration in Mizoram, India. Get started today.',
  keywords: [
    'trademark registration in mizoram',
    'trademark registration mizoram',
    'how to register trademark in mizoram',
    'trademark registration process mizoram',
    'trademark registration documents mizoram',
    'trademark registration online mizoram',
    'trademark registration aizawl',
    'trademark registration mizoram india',
    'trademark registration mizoram 2025',
    'trademark registration mizoram timeline',
    'trademark registration mizoram requirements',
    'trademark registration mizoram procedure',
    'trademark registration mizoram steps',
    'trademark registration mizoram guide',
    'trademark registration mizoram consultant',
    'trademark registration mizoram lawyer',
    'trademark registration mizoram attorney',
    'trademark registration mizoram services',
    'trademark registration mizoram help',
    'IPRKaro trademark registration mizoram'
  ],
  openGraph: {
    title: 'Trademark Registration in Mizoram | Complete Guide & Process | IPRKaro',
    description: 'Expert trademark registration services in Mizoram. Complete guide with step-by-step process, documents, and timeline. Get professional assistance for trademark registration in Mizoram.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Mizoram | Complete Guide & Process',
    description: 'Complete guide to trademark registration in Mizoram with expert assistance, step-by-step process, and timeline.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/mizoram',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MizoramTrademarkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to register a trademark in Mizoram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Mizoram, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Respond to any examination objections if raised, 5) Wait for publication in Trademark Journal, and 6) Receive registration certificate upon successful completion. The entire process typically takes 12-18 months."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MizoramClient />
    </>
  );
}
