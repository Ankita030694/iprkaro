import React from 'react';
import { Metadata } from 'next';
import ObjectionClient from './ObjectionClient';

export const metadata: Metadata = {
  title: 'Trademark Objection Reply Drafting Services India | Expert Legal Solutions',
  description: 'Professional trademark objection reply services in India. Expert legal assistance to overcome examination objections, draft comprehensive replies, and secure your trademark registration successfully.',
  keywords: [
    'trademark objection reply India',
    'trademark objection reply services',
    'trademark examination report reply',
    'trademark objection response',
    'overcome trademark objection',
    'trademark objection lawyer',
    'trademark objection hearing',
    'trademark objection timeline',
    'trademark objection fees',
    'Section 9 objection reply',
    'Section 11 objection reply',
    'trademark objection drafting',
    'trademark objection consultant',
    'trademark objection help',
    'examination report response',
    'trademark objection India 2025',
    'trademark objection success rate',
    'trademark objection evidence',
    'IPRKaro objection services'
  ],
  openGraph: {
    title: 'Trademark Objection Reply Drafting Services | IPRKaro',
    description: 'Expert trademark objection reply services to overcome examination objections and secure your brand registration with professional legal assistance.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Objection Reply Drafting Services India',
    description: 'Professional objection reply drafting with strong legal arguments and evidence to overcome trademark examination objections.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark/objection',
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

export default function TrademarkObjectionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a trademark objection in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A trademark objection is a formal notice issued by the Trademark Examiner when your application doesn't meet registration requirements. The Examination Report lists specific grounds for objection under Sections 9 or 11 of the Trademarks Act. You have 30 days from receipt to file a comprehensive reply addressing each objection."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to respond to a trademark objection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You have 30 days from the date of receiving the Examination Report to file your objection reply. This deadline can be extended for an additional 30 days by filing an extension request before the initial deadline expires. It's crucial to respond within the deadline to avoid application abandonment."
        }
      },
      {
        "@type": "Question",
        "name": "What are common reasons for trademark objections?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common objection grounds include: descriptiveness or lack of distinctiveness (Section 9), similarity with existing marks (Section 11), incorrect class selection, improper specimen submission, inadequate use evidence, generic terms, geographical names, or common surnames without acquired distinctiveness."
        }
      },
      {
        "@type": "Question",
        "name": "Can a trademark objection be overcome?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most trademark objections can be overcome with a well-drafted reply supported by proper evidence. The success rate depends on the strength of your legal arguments, evidence of use, distinctiveness proof, and how well you distinguish your mark from cited prior marks. Expert legal assistance significantly improves success rates."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I don't reply to a trademark objection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you fail to respond to an objection within the stipulated time (30 days + extension if requested), your trademark application will be considered abandoned and removed from the register. You will lose your application date priority and will need to re-file the application, which may face additional conflicts."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to attend a hearing after filing objection reply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always. If the Examiner is satisfied with your written reply and evidence, the objection may be withdrawn without a hearing. However, if the Examiner remains unconvinced, a hearing notice will be issued where you or your attorney can present oral arguments to support your case."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Objection Reply Drafting Services",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trademark Objection Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Objection Reply Drafting",
            "description": "Comprehensive trademark objection reply drafting with legal arguments and evidence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hearing Representation",
            "description": "Professional representation at trademark objection hearings before the Registry"
          }
        }
      ]
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
        "name": "Trademark Services",
        "item": "https://iprkaro.com/services/trademark-registration"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Trademark Objection Reply",
        "item": "https://iprkaro.com/services/trademark/objection"
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
      
      <ObjectionClient />
    </>
  );
}

