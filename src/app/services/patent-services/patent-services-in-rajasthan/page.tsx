import React from 'react';
import { Metadata } from 'next';
import RajasthanPatentClient from './RajasthanPatentClient';

export const metadata: Metadata = {
  title: 'Patent Services in Rajasthan | Patent Registration Jaipur 2025',
  description: 'Expert patent services in Rajasthan & Jaipur. Protect your handicrafts designs, stone processing tech, and startup innovations. Complete filing support at Delhi Patent Office jurisdiction.',
  keywords: [
    'patent services rajasthan',
    'patent registration jaipur',
    'patent attorney rajasthan',
    'design patent handicrafts',
    'stone industry patent',
    'startup patent filing jaipur',
    'intellectual property rajasthan',
    'patent agent jodhpur',
    'kota innovation protection'
  ],
  openGraph: {
    title: 'Patent Services in Rajasthan | Patent Registration Jaipur 2025',
    description: 'Expert patent services in Rajasthan. Protect your handicrafts designs, stone processing tech, and startup innovations.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Patent Services in Rajasthan',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent-services/patent-services-in-rajasthan',
  },
};

export default function RajasthanPatentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where do I file a patent application from Rajasthan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rajasthan falls under the jurisdiction of the Delhi Patent Office (Dwarka). However, you don't need to travel to Delhi. You can file your application online through the IP India portal with the help of IPRKaro's registered patent agents."
        }
      },
      {
        "@type": "Question",
        "name": "Can I patent a handicraft design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Handicrafts are typically protected under 'Design Registration' (for aesthetic look) or 'Geographical Indication' (for regional origin). However, if there is a functional innovation in the manufacturing process or tool, a Patent can be filed. We help you choose the right IP tool."
        }
      },
      {
        "@type": "Question",
        "name": "Are there special schemes for startups in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under the SIPP scheme, startups recognized by DPIIT get an 80% rebate on patent filing fees and can avail expedited examination to get a patent granted faster."
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
      <RajasthanPatentClient />
    </>
  );
}

