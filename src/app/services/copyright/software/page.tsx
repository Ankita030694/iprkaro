import React from 'react';
import { Metadata } from 'next';
import SoftwareClient from './SoftwareClient';

export const metadata: Metadata = {
  title: 'Software Code Copyright Registration & Protection Services India | Secure Your Code',
  description: 'Professional software copyright registration services in India. Protect source code, mobile apps, web applications, SaaS platforms, and APIs with expert legal assistance and Copyright Office registration.',
  keywords: [
    'software copyright India',
    'software copyright registration',
    'source code copyright',
    'software code protection',
    'mobile app copyright',
    'web application copyright',
    'SaaS copyright protection',
    'API copyright India',
    'software copyright lawyer',
    'code copyright registration',
    'software IP protection',
    'software copyright services',
    'computer program copyright',
    'software copyright India 2025',
    'IPRKaro software copyright',
    'software copyright consultant',
    'app copyright registration',
    'software licensing India',
    'software copyright law',
    'protect software code'
  ],
  openGraph: {
    title: 'Software Code Copyright Registration & Protection | IPRKaro',
    description: 'Expert software copyright services. Protect your source code, mobile apps, and web applications with professional registration and enforcement.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Code Copyright Protection Services India',
    description: 'Professional copyright registration for software, apps, and code. Protect your development work with expert assistance.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/copyright/software',
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

export default function SoftwareCopyrightPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is software copyright protected in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, software and computer programs are protected under copyright law in India as 'literary works' under the Copyright Act, 1957. Both source code and object code are protected, including mobile apps, web applications, SaaS platforms, APIs, databases, and software documentation."
        }
      },
      {
        "@type": "Question",
        "name": "How do I register software copyright in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "File copyright application with the Copyright Office using Form XIV along with source code extracts, flowcharts, technical documentation, and developer details. Registration typically takes 6-12 months. While registration is not mandatory, it provides legal evidence of ownership and is crucial for enforcement."
        }
      },
      {
        "@type": "Question",
        "name": "What parts of software are protected by copyright?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright protects source code, object code, architecture, algorithms (if expressed in code), user interfaces, documentation, database structures, API designs, and software architecture. However, ideas, concepts, functionality, and methods are not protected—only the specific expression/implementation."
        }
      },
      {
        "@type": "Question",
        "name": "Can I protect open source software with copyright?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, open source software is also copyrighted. The copyright owner retains ownership but licenses the software under open source terms (GPL, MIT, Apache, etc.). These licenses grant users specific rights while retaining copyright protection and requiring attribution and license compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between software copyright and patent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright protects the expression/code of software automatically without registration, while patents protect novel inventions and require extensive application process. Copyright prevents copying, while patents prevent others from implementing the same functionality. Software can have both copyright and patent protection."
        }
      },
      {
        "@type": "Question",
        "name": "How long does software copyright protection last in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Software copyright lasts for 60 years from the year of publication in India. For unpublished works, protection lasts for the lifetime of the author plus 60 years. This applies to all types of software including mobile apps, web applications, and enterprise software systems."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Code Copyright Registration & Protection Services",
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
        "name": "Software Copyright",
        "item": "https://iprkaro.com/services/copyright/software"
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
      
      <SoftwareClient />
    </>
  );
}

