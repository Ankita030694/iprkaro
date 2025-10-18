import React from 'react';
import { Metadata } from 'next';
import TransferClient from './TransferClient';

export const metadata: Metadata = {
  title: 'Copyright Transfer & Assignment Agreement Services India | Expert Legal Documentation',
  description: 'Professional copyright transfer and assignment agreement services in India. Expert legal assistance for transferring ownership of literary, artistic, musical, and software copyrights with proper documentation.',
  keywords: [
    'copyright transfer India',
    'copyright assignment agreement',
    'copyright transfer deed',
    'copyright assignment India',
    'copyright transfer agreement',
    'copyright ownership transfer',
    'copyright assignment services',
    'copyright transfer lawyer',
    'literary work copyright transfer',
    'software copyright assignment',
    'artistic work copyright transfer',
    'music copyright assignment',
    'copyright assignment deed drafting',
    'copyright transfer documentation',
    'copyright assignment registration',
    'partial copyright assignment',
    'complete copyright transfer',
    'copyright assignment India 2025',
    'IPRKaro copyright transfer',
    'copyright transfer consultant'
  ],
  openGraph: {
    title: 'Copyright Transfer & Assignment Agreement Services | IPRKaro',
    description: 'Expert copyright transfer and assignment services. Professional legal documentation for transferring ownership of creative works with Copyright Office registration.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copyright Transfer & Assignment Agreement Services India',
    description: 'Professional copyright transfer agreements for literary, artistic, musical, and software works. Expert legal assistance.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/copyright/transfer',
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

export default function CopyrightTransferPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is copyright transfer or assignment in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright transfer (assignment) is the legal process of transferring ownership rights of a copyrighted work from the original creator (assignor) to another party (assignee). The assignment can be complete or partial, covering specific rights like reproduction, distribution, adaptation, or public performance under the Copyright Act, 1957."
        }
      },
      {
        "@type": "Question",
        "name": "Is copyright assignment mandatory to be in writing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under Section 19 of the Copyright Act, 1957, copyright assignment must be in writing and signed by the assignor or their authorized agent. Oral assignments are not valid. The assignment deed should clearly specify the rights transferred, duration, territory, consideration, and other terms."
        }
      },
      {
        "@type": "Question",
        "name": "Can copyright be transferred partially?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, copyright can be assigned partially. You can transfer specific rights (like reproduction rights only) while retaining others (like adaptation rights). You can also limit the assignment to specific territories, duration, or mediums. The assignment deed should clearly define the scope of rights transferred."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between copyright assignment and licensing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright assignment transfers ownership of copyright permanently to the assignee, while licensing grants permission to use the work while the original owner retains copyright. Assignment typically involves a one-time payment, whereas licensing usually involves royalty payments. Licensing can be exclusive or non-exclusive."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to register copyright assignment with the Copyright Office?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While not mandatory, registering copyright assignment with the Copyright Office is highly recommended. Registration provides legal evidence of the transfer, protects against disputes, establishes priority, and is required for enforcement actions. The assignment can be registered by filing the assignment deed with the Copyright Office."
        }
      },
      {
        "@type": "Question",
        "name": "Can copyright assignment be revoked in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, copyright assignment cannot be easily revoked once executed unless the assignment deed contains specific revocation clauses or termination conditions. However, under Section 19(4) of the Copyright Act, if the assignee doesn't exercise assigned rights, the assignment can be terminated. Authors may also have reversion rights after certain periods."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Copyright Transfer & Assignment Agreement Services",
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
        "name": "Copyright Transfer",
        "item": "https://iprkaro.com/services/copyright/transfer"
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
      
      <TransferClient />
    </>
  );
}

