import React from 'react';
import { Metadata } from 'next';
import TamilNaduPatentClient from './TamilNaduPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Tamil Nadu | Patent Registration Chennai 2025',
  description: 'Expert patent services in Tamil Nadu & Chennai. Protect your automotive, textile, and software innovations. Complete filing support at Chennai Patent Office (Guindy).',
  keywords: [
    'patent services tamil nadu',
    'patent registration chennai',
    'patent attorney chennai',
    'software patent chennai',
    'textile machinery patent coimbatore',
    'automotive patent india',
    'intellectual property rights tamil nadu',
    'patent agent in chennai',
    'startup patent filing'
  ],
  openGraph: {
    title: 'Patent Services in Tamil Nadu | Patent Registration Chennai 2025',
    description: 'Expert patent services in Tamil Nadu. Protect your automotive, textile, and software innovations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Tamil Nadu',
      },
    ],
  },
  alternates: {
    canonical: '/services/patent-services/tamil-nadu',
  },
};

export default function TamilNaduPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the Patent Office located in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Patent Office in Tamil Nadu is located at the Intellectual Property Building, G.S.T. Road, Guindy, Chennai - 600032. It serves the southern region including Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can software be patented in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Software per se is not patentable, but software combined with hardware or having a 'technical effect' can be patented. Chennai's IT sector often files such patents successfully with expert drafting."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of filing a patent in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Government filing fees are ₹1,600 for individuals/startups/MSMEs and ₹8,000 for other entities. Professional fees vary. Startups can avail 80% fee rebate."
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
      <TamilNaduPatentClient />
    </>
  );
}

