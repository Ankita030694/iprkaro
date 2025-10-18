import React from 'react';
import { Metadata } from 'next';
import InfringementClient from './InfringementClient';

export const metadata: Metadata = {
  title: 'Copyright Infringement Notice & Legal Action Services India | Stop Piracy & Plagiarism',
  description: 'Professional copyright infringement legal services in India. Expert assistance for cease and desist notices, DMCA takedowns, civil litigation, criminal complaints, and damages recovery against copyright violators.',
  keywords: [
    'copyright infringement India',
    'copyright infringement notice',
    'cease and desist copyright',
    'copyright infringement lawyer',
    'copyright infringement legal action',
    'DMCA takedown India',
    'copyright piracy action',
    'copyright plagiarism legal action',
    'copyright infringement suit',
    'copyright damages India',
    'copyright litigation India',
    'stop copyright infringement',
    'copyright enforcement India',
    'online copyright infringement',
    'copyright infringement remedies',
    'copyright violation legal action',
    'copyright infringement India 2025',
    'IPRKaro copyright enforcement',
    'copyright protection services',
    'copyright infringement consultant'
  ],
  openGraph: {
    title: 'Copyright Infringement Notice & Legal Action Services | IPRKaro',
    description: 'Aggressive copyright enforcement services. Expert legal action against infringement, piracy, and plagiarism with cease and desist notices and litigation.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copyright Infringement Legal Action Services India',
    description: 'Stop copyright infringers with expert legal assistance. Cease and desist notices, litigation, and damages recovery.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/copyright/infringement',
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

export default function CopyrightInfringementPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What constitutes copyright infringement in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright infringement occurs when someone uses, reproduces, distributes, displays, or performs a copyrighted work without authorization from the copyright owner. This includes unauthorized copying, plagiarism, piracy, illegal downloading/streaming, and commercial exploitation of protected works under the Copyright Act, 1957."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if someone infringes my copyright?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First, gather evidence of infringement (screenshots, URLs, copies). Send a cease and desist notice demanding immediate stoppage. If ignored, file a copyright infringement suit in civil court for injunction and damages, or file criminal complaint under Section 63 of the Copyright Act for imprisonment and fines."
        }
      },
      {
        "@type": "Question",
        "name": "What is a cease and desist notice for copyright infringement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A cease and desist notice is a formal legal letter sent to an infringer demanding immediate cessation of unauthorized use of copyrighted work. It outlines the infringement, demands removal/destruction of infringing content, and warns of legal consequences if compliance is not achieved within a specified timeframe."
        }
      },
      {
        "@type": "Question",
        "name": "Can I take legal action for online copyright infringement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can take action against online infringement through DMCA takedown notices to platforms, court injunctions for website blocking, civil suits for damages against infringers, and criminal complaints. Courts can order ISPs to block infringing websites and platforms to remove infringing content."
        }
      },
      {
        "@type": "Question",
        "name": "What damages can I claim in copyright infringement cases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the Copyright Act, you can claim actual damages (lost profits, revenue), additional damages up to ₹2 lakh per work infringed, delivery/destruction of infringing copies, permanent injunction, cost of legal proceedings, and in criminal cases, imprisonment up to 3 years and fines up to ₹3 lakh."
        }
      },
      {
        "@type": "Question",
        "name": "How long does copyright infringement litigation take in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright infringement cases typically take 2-5 years for final judgment, though interim injunctions can be obtained within weeks or months. Timeline depends on complexity, evidence volume, court backlog, and whether criminal or civil proceedings. Urgent interim relief can be sought to stop ongoing infringement immediately."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Copyright Infringement Notice & Legal Action Services",
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
        "name": "Copyright Services",
        "item": "https://iprkaro.com/services/copyright-protection"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Copyright Infringement",
        "item": "https://iprkaro.com/services/copyright/infringement"
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
      
      <InfringementClient />
    </>
  );
}

