import React from 'react';
import { Metadata } from 'next';
import RenewalClient from './RenewalClient';

export const metadata: Metadata = {
  title: 'Copyright Renewal & Update Services India | Maintain Copyright Records',
  description: 'Professional copyright renewal and update services in India. Expert assistance for updating Copyright Office records, ownership transfers, corrections, and maintaining accurate copyright registration details.',
  keywords: [
    'copyright renewal India',
    'copyright update services',
    'copyright record update',
    'copyright registration update',
    'copyright ownership update',
    'copyright renewal services',
    'update copyright details',
    'copyright rectification India',
    'copyright maintenance India',
    'copyright term India',
    'copyright duration India',
    'copyright record correction',
    'copyright transfer recording',
    'copyright India 2025',
    'IPRKaro copyright renewal',
    'copyright update consultant',
    'copyright office update',
    'copyright registration correction',
    'copyright lifetime India',
    'maintain copyright India'
  ],
  openGraph: {
    title: 'Copyright Renewal & Update Services | IPRKaro',
    description: 'Expert copyright update services. Update ownership, correct errors, and maintain accurate Copyright Office records with professional assistance.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copyright Renewal & Update Services India',
    description: 'Professional copyright record updates and corrections. Keep your copyright registration current with expert assistance.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/copyright/renewal',
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

export default function CopyrightRenewalPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need to renew copyright registration in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, copyright protection in India does not require renewal. Once a work is created and/or registered, copyright lasts for the lifetime of the author plus 60 years (for literary, dramatic, musical, and artistic works) or 60 years from publication (for cinematograph films, sound recordings, and photographs). No renewal fees or procedures are required."
        }
      },
      {
        "@type": "Question",
        "name": "What is copyright renewal service then?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright 'renewal' services typically refer to updating copyright records with the Copyright Office when there are changes in ownership, author details, title modifications, or corrections to registration particulars. It also includes filing updated information, change of address, or rectification of errors in the copyright register."
        }
      },
      {
        "@type": "Question",
        "name": "How do I update copyright ownership details?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "File an application with the Copyright Office requesting updates to proprietorship details along with supporting documents like assignment deeds, succession certificates, or court orders. The Copyright Office will examine and update the register upon verification of legal transfer or change."
        }
      },
      {
        "@type": "Question",
        "name": "Can I correct errors in my copyright registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file a rectification application to correct clerical errors, typographical mistakes, or inaccurate information in your copyright registration. This includes corrections to author names, work titles, publication dates, or ownership details. Supporting evidence must be provided for substantive corrections."
        }
      },
      {
        "@type": "Question",
        "name": "What happens when copyright term expires?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When copyright protection expires, the work enters the public domain and can be freely used, reproduced, distributed, or adapted by anyone without permission or payment. In India, this occurs 60 years after the author's death for most works, or 60 years from publication for certain categories like films and photographs."
        }
      },
      {
        "@type": "Question",
        "name": "How do I maintain copyright protection for my work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright protection is automatic and doesn't require renewal or maintenance fees. To maintain enforceability, keep registration certificates safe, maintain evidence of creation dates, track any assignments or licenses granted, and monitor for infringement. Update Copyright Office records if ownership or details change."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Copyright Renewal & Update Services",
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
        "name": "Copyright Renewal",
        "item": "https://iprkaro.com/services/copyright/renewal"
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
      
      <RenewalClient />
    </>
  );
}

