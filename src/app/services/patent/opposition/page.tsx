import React from 'react';
import { Metadata } from 'next';
import OppositionClient from './OppositionClient';

export const metadata: Metadata = {
  title: 'Patent Opposition & Revocation Services India | Challenge Invalid Patents',
  description: 'Professional patent opposition and revocation services in India. Expert legal assistance for pre-grant opposition, post-grant opposition, and patent revocation proceedings before Patent Office and IPAB.',
  keywords: [
    'patent opposition India',
    'patent revocation India',
    'pre-grant opposition',
    'post-grant opposition',
    'patent opposition services',
    'challenge patent India',
    'patent invalidity India',
    'patent opposition lawyer',
    'revoke patent India',
    'patent opposition procedure',
    'patent opposition grounds',
    'IPAB patent revocation',
    'patent opposition India 2025',
    'IPRKaro patent opposition',
    'patent opposition consultant',
    'patent invalidity search',
    'oppose patent application',
    'patent revocation petition',
    'patent opposition fees',
    'patent challenge services'
  ],
  openGraph: {
    title: 'Patent Opposition & Revocation Services | IPRKaro',
    description: 'Expert patent opposition services to challenge invalid patents. Professional representation for pre-grant and post-grant opposition proceedings.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patent Opposition & Revocation Services India',
    description: 'Challenge invalid patents with expert legal assistance. Pre-grant and post-grant opposition services.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent/opposition',
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

export default function PatentOppositionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is patent opposition in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patent opposition is a legal proceeding to challenge a patent application before or after grant. Pre-grant opposition can be filed by any person within specified time after publication, while post-grant opposition can be filed within 1 year of patent grant by interested parties. Opposition prevents invalid patents from being granted or revokes already granted patents."
        }
      },
      {
        "@type": "Question",
        "name": "What are the grounds for patent opposition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common grounds include lack of novelty (prior art exists), lack of inventive step (obvious to skilled person), non-patentable subject matter under Sections 3 & 4, insufficient disclosure, wrongful obtainment from true inventor, prior public use or publication, and anticipation by prior claiming in earlier patent application."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between pre-grant and post-grant opposition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pre-grant opposition can be filed by anyone after publication but before grant, focusing on preventing grant of invalid patents. Post-grant opposition can only be filed by 'interested persons' within 1 year of grant, seeking revocation of already granted patent. Post-grant has stricter standing requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does patent opposition proceeding take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patent opposition proceedings typically take 2-4 years from filing to final decision. Timeline includes filing representation/petition, patent holder's reply, evidence rounds, written submissions, oral hearings, and Controller/IPAB decision. Complexity and evidence volume impact duration."
        }
      },
      {
        "@type": "Question",
        "name": "What is patent revocation in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patent revocation is the process of invalidating a granted patent through legal proceedings before the IPAB (Intellectual Property Appellate Board) or through counterclaim in infringement suit. Revocation can be sought on grounds similar to opposition, plus grounds like non-working of patent or frivolous/vexatious infringement proceedings."
        }
      },
      {
        "@type": "Question",
        "name": "Can I oppose a patent if I have a similar patent application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you have a conflicting patent application or believe the patent being opposed is not novel given your technology, you can file opposition. As an interested person with competing interests, you have standing to oppose, especially in post-grant opposition where business interests create standing."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Patent Opposition & Revocation Services",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iprkaro.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://iprkaro.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Patent Services",
        "item": "https://iprkaro.com/services/patent-services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Patent Opposition",
        "item": "https://iprkaro.com/services/patent/opposition"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <OppositionClient />
    </>
  );
}

