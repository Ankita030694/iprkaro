import React from 'react';
import { Metadata } from 'next';
import DelhiPatentClient from './DelhiPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Delhi | Patent Filing & Registration India 2025',
  description: 'Expert patent services in Delhi. File provisional, utility & design patents with complete IP protection. Get patent search, filing, and prosecution support at Delhi Patent Office. Starting at ₹9,999.',
  keywords: [
    'patent services delhi',
    'patent registration delhi',
    'patent filing delhi',
    'patent attorney delhi',
    'patent agent in delhi',
    'patent consultants delhi',
    'patent office delhi',
    'provisional patent filing delhi',
    'patent search delhi',
    'software patent delhi',
    'patent law firm delhi',
    'intellectual property rights delhi'
  ],
  openGraph: {
    title: 'Patent Services in Delhi | Patent Filing & Registration India 2025',
    description: 'Expert patent services in Delhi. File provisional, utility & design patents with complete IP protection. Get patent search, filing, and prosecution support.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Delhi',
      },
    ],
  },
  alternates: {
    canonical: '/services/patent-services/delhi',
  },
};

export default function DelhiPatentPage() {
  // Delhi-specific FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the Patent Office located in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Patent Office in Delhi is located at Baudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi - 110078. It has jurisdiction over the states of Haryana, Himachal Pradesh, Jammu and Kashmir, Punjab, Rajasthan, Uttar Pradesh, Uttarakhand, Delhi, and the Union Territory of Chandigarh."
        }
      },
      {
        "@type": "Question",
        "name": "How can I file a patent in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can file a patent in Delhi either physically at the Patent Office in Dwarka or online through the official IP India portal. IPRKaro provides expert assistance for e-filing, ensuring all documents like Form 1, Form 2, and Form 3 are correctly drafted and submitted to avoid objections."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of patent filing in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patent filing government fees in Delhi start at ₹1,600 for individuals/startups and ₹8,000 for other entities. Professional fees vary based on complexity. IPRKaro offers comprehensive patent packages starting from ₹9,999 covering search, drafting, and filing support."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get a patent granted in Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard timeline for patent grant in Delhi is 3-5 years. However, startups and small entities can opt for Expedited Examination (Form 18A) to potentially reduce the grant time to 12-18 months."
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
      <DelhiPatentClient />
    </>
  );
}

