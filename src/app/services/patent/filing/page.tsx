import React from 'react';
import { Metadata } from 'next';
import FilingClient from './FilingClient';

export const metadata: Metadata = {
  title: 'Provisional & Complete Patent Drafting and Filing Services India | Expert Patent Attorneys',
  description: 'Professional patent drafting and filing services in India. Expert assistance for provisional and complete patent specifications, claims drafting, prior art search, and patent application filing with Patent Office.',
  keywords: [
    'patent drafting India',
    'patent filing India',
    'provisional patent filing',
    'complete patent specification',
    'patent application India',
    'patent drafting services',
    'patent attorney India',
    'patent specification drafting',
    'patent filing fees India',
    'patent claim drafting',
    'patent application process',
    'file patent India',
    'patent registration India',
    'patent filing consultant',
    'provisional patent India',
    'patent drafting India 2025',
    'IPRKaro patent filing',
    'patent attorney services',
    'patent application filing',
    'patent specification services'
  ],
  openGraph: {
    title: 'Patent Drafting & Filing Services India | IPRKaro',
    description: 'Expert patent drafting and filing for provisional and complete specifications. Professional patent attorneys for strong, enforceable patents.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patent Drafting & Filing Services India',
    description: 'Professional patent drafting and filing services with expert claim strategy and prior art analysis.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/patent/filing',
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

export default function PatentFilingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between provisional and complete patent applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A provisional patent application establishes an early filing date and gives 12 months to file a complete specification. It requires basic disclosure without claims. A complete patent application includes detailed description, claims, drawings, and abstract. Provisional applications are cheaper and faster to file, allowing refinement before committing to complete filing."
        }
      },
      {
        "@type": "Question",
        "name": "How long does patent registration take in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patent registration typically takes 3-5 years from complete specification filing to grant. The process includes filing, publication (18 months), examination request, FER response, and final grant. Using expedited examination can reduce timeline to 1-2 years for eligible applicants like startups, small entities, and certain technology sectors."
        }
      },
      {
        "@type": "Question",
        "name": "What inventions can be patented in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Novel, non-obvious inventions with industrial applicability can be patented. This includes products, processes, machines, compositions, improvements, and new uses. However, software per se, business methods, mathematical formulas, scientific theories, and inventions contrary to public order/morality cannot be patented under Section 3 and 4 of the Patents Act."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for patent filing in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include patent application Form 1, complete/provisional specification with description, claims, drawings, and abstract, applicant/inventor details, Form 3 (undertaking), priority documents (if claiming priority), power of attorney (if filing through agent), and proof of right to apply."
        }
      },
      {
        "@type": "Question",
        "name": "Can I file a patent application without a patent agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, individuals and entities can file patent applications directly. However, patent drafting requires technical and legal expertise to ensure strong claims, proper disclosure, and compliance with patent law. Professional patent agents/attorneys significantly increase success rates and strengthen patent protection through expert claim drafting."
        }
      },
      {
        "@type": "Question",
        "name": "What are the patent filing fees in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patent fees vary by entity type and filing stage. For individuals/startups/small entities, provisional filing is around ₹1,600, complete specification ₹4,000, examination request ₹4,000, and grant fee ₹2,400. Larger entities pay 4x these amounts. Professional drafting and attorney fees are additional to government fees."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Patent Drafting and Filing Services",
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
        "name": "Patent Filing",
        "item": "https://iprkaro.com/services/patent/filing"
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
      
      <FilingClient />
    </>
  );
}

