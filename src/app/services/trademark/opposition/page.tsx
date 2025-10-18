import React from 'react';
import { Metadata } from 'next';
import OppositionClient from './OppositionClient';

export const metadata: Metadata = {
  title: 'Trademark Opposition & Counter-Statement Services India | Expert Legal Representation',
  description: 'Professional trademark opposition and counter-statement services in India. Challenge conflicting trademarks or defend your application with expert legal representation before the Trademark Registry.',
  keywords: [
    'trademark opposition India',
    'trademark opposition services',
    'file trademark opposition',
    'trademark counter-statement',
    'opposition hearing',
    'trademark opposition procedure',
    'trademark opposition grounds',
    'TM-O form filing',
    'TM-6 counter-statement',
    'trademark opposition lawyer',
    'oppose trademark application',
    'trademark opposition timeline',
    'trademark opposition fees',
    'trademark journal monitoring',
    'trademark opposition evidence',
    'trademark opposition hearing',
    'defend trademark opposition',
    'trademark opposition India 2025',
    'trademark opposition consultant',
    'IPRKaro opposition services'
  ],
  openGraph: {
    title: 'Trademark Opposition & Counter-Statement Services | IPRKaro',
    description: 'Expert trademark opposition services to protect your brand rights. Professional legal representation for opposing conflicting trademarks and defending applications.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Opposition & Counter-Statement Services India',
    description: 'Challenge conflicting trademarks or defend your application with expert legal assistance.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark/opposition',
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

export default function TrademarkOppositionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is trademark opposition in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark opposition is a legal proceeding where any person can challenge a trademark application that has been accepted and published in the Trademark Journal. The opposition must be filed within 4 months of publication, stating grounds why the trademark should not be registered."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to file a trademark opposition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You have 4 months from the date of publication in the Trademark Journal to file a Notice of Opposition (Form TM-O). This deadline is strict and cannot be extended. After 4 months, the trademark proceeds to registration if no opposition is filed."
        }
      },
      {
        "@type": "Question",
        "name": "What are the grounds for filing trademark opposition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common grounds include: similarity with existing marks causing confusion, prior use or registration of the mark, descriptiveness or lack of distinctiveness, bad faith filing, violation of Section 9 (absolute grounds) or Section 11 (relative grounds) of the Trademarks Act."
        }
      },
      {
        "@type": "Question",
        "name": "What is a counter-statement in trademark proceedings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A counter-statement is the applicant's response to the Notice of Opposition filed in Form TM-6. It must be filed within 2 months of receiving the opposition notice. The counter-statement defends the trademark application and addresses each ground of opposition raised."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark opposition proceeding take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark opposition proceedings typically take 18-36 months from filing to final decision. The timeline includes filing opposition, counter-statement, evidence rounds (2 months each for both parties), written submissions, and hearing before the Registrar."
        }
      },
      {
        "@type": "Question",
        "name": "Can I withdraw my trademark opposition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can withdraw your opposition at any time during the proceedings by filing a withdrawal notice. However, you may need to bear the costs incurred by the applicant. Once withdrawn, you cannot file opposition again on the same grounds for the same trademark."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Opposition & Counter-Statement Services",
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
      "name": "Trademark Opposition Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Filing Trademark Opposition",
            "description": "Filing Notice of Opposition (Form TM-O) against conflicting trademark applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Counter-Statement Drafting",
            "description": "Preparing and filing counter-statement (Form TM-6) defending trademark applications"
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
        "name": "Trademark Opposition",
        "item": "https://iprkaro.com/services/trademark/opposition"
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

