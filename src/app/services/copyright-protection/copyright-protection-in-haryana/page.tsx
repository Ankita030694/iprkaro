import React from 'react';
import { Metadata } from 'next';
import HaryanaCopyrightClient from './HaryanaCopyrightClient';

export const metadata: Metadata = {
  title: 'Copyright Protection in Haryana | Register Copyright in Gurugram',
  description: 'Expert copyright registration services in Haryana & Gurugram. Protect your software, music, literary works & artistic content. Legal support for creators & businesses in NCR.',
  keywords: [
    'copyright registration haryana',
    'copyright consultant gurugram',
    'software copyright india',
    'music copyright haryanvi',
    'literary work copyright',
    'artistic work registration',
    'copyright lawyer gurgaon',
    'intellectual property rights haryana',
    'content protection ncr'
  ],
  openGraph: {
    title: 'Copyright Protection in Haryana | Register Copyright in Gurugram',
    description: 'Expert copyright registration services in Haryana. Protect your creative works including software, music, and literature.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Copyright Services in Haryana',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/copyright-protection/copyright-protection-in-haryana',
  },
};

export default function HaryanaCopyrightPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I register a copyright in Haryana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright registration is a centralized process in India. You can file your application online through the Copyright Office website or with the help of IPRKaro's experts in Gurugram. We handle the filing, objections, and registration process for you."
        }
      },
      {
        "@type": "Question",
        "name": "Can I copyright my software code in Gurugram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, software source code can be registered as a 'Literary Work' under the Copyright Act. This is crucial for IT companies in Gurugram to protect their proprietary code from theft and unauthorized use."
        }
      },
      {
        "@type": "Question",
        "name": "How do I protect Haryanvi music songs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can register the lyrics as a 'Literary Work' and the musical composition as a 'Musical Work'. The sound recording itself can be registered separately. This provides comprehensive protection against piracy."
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
      <HaryanaCopyrightClient />
    </>
  );
}

