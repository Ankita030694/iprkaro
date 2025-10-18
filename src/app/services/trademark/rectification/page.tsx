import React from 'react';
import { Metadata } from 'next';
import RectificationClient from './RectificationClient';

export const metadata: Metadata = {
  title: 'Trademark Rectification & Removal Services India | Challenge Wrongful Registrations',
  description: 'Professional trademark rectification and removal services in India. Expert legal assistance to challenge wrongful registrations, remove conflicting marks, and protect your trademark rights through IPAB proceedings.',
  keywords: [
    'trademark rectification India',
    'trademark removal India',
    'trademark cancellation India',
    'remove trademark registration',
    'trademark rectification services',
    'Form TM-57 filing',
    'trademark non-use removal',
    'trademark cancellation petition',
    'IPAB trademark proceedings',
    'trademark rectification lawyer',
    'cancel trademark registration',
    'trademark rectification grounds',
    'trademark rectification process',
    'trademark removal for non-use',
    'trademark cancellation consultant',
    'trademark rectification fees',
    'trademark rectification timeline',
    'trademark rectification India 2025',
    'IPRKaro rectification services',
    'Section 57 rectification'
  ],
  openGraph: {
    title: 'Trademark Rectification & Removal Services | IPRKaro',
    description: 'Expert trademark rectification services to challenge wrongful registrations and remove conflicting marks. Professional legal representation before IPAB.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Rectification & Removal Services India',
    description: 'Challenge wrongful trademark registrations with expert legal support. Professional rectification and removal services.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark/rectification',
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

export default function TrademarkRectificationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is trademark rectification in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark rectification is a legal proceeding to remove or correct entries in the Trademark Register. It can be filed to cancel a registered trademark, remove unlawful entries, correct errors, or challenge wrongful registrations. Applications are filed using Form TM-57 before the Intellectual Property Appellate Board (IPAB) or with the Registrar."
        }
      },
      {
        "@type": "Question",
        "name": "Who can file for trademark rectification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any person aggrieved by the existence of a trademark registration can file for rectification. This includes competitors whose marks conflict, prior users of similar marks, or anyone who believes the registration was obtained fraudulently or violates trademark law. The Registrar can also initiate rectification suo moto."
        }
      },
      {
        "@type": "Question",
        "name": "What are valid grounds for trademark rectification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Valid grounds include: registration obtained fraudulently or by misrepresentation, violation of absolute or relative grounds under Sections 9 and 11, mark is identical or deceptively similar to prior marks, non-use for continuous 5 years, mark has become generic or deceptive, or incorrect entries in the register."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark rectification take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark rectification proceedings typically take 2-4 years depending on case complexity, evidence volume, and whether the matter is contested. The process involves filing petition, respondent's counter-statement, evidence rounds, written submissions, and final hearing before IPAB or Registrar."
        }
      },
      {
        "@type": "Question",
        "name": "Can I remove a trademark for non-use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file for removal/rectification of a trademark that has not been used for continuous 5 years or more. The non-use rectification application must be filed using Form TM-57, and the burden of proving use lies with the registered proprietor. If non-use is established, the mark will be removed from the register."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between rectification and cancellation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rectification is a broad remedy to correct or remove entries in the Trademark Register for various legal grounds. Cancellation specifically refers to removing a trademark registration, which is one type of rectification. The term rectification also covers corrections of errors, address changes, and other amendments to register entries."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Rectification & Removal Services",
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
      "name": "Trademark Rectification Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Rectification Petition",
            "description": "Filing Form TM-57 for trademark rectification before IPAB or Trademark Registry"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Non-Use Removal Proceedings",
            "description": "Removal of trademarks for non-use under Section 47 of the Trademarks Act"
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
        "name": "Trademark Rectification",
        "item": "https://iprkaro.com/services/trademark/rectification"
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
      
      <RectificationClient />
    </>
  );
}

