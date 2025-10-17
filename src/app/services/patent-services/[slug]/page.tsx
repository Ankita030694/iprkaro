import React from 'react';
import { Metadata } from 'next';
import PatentServicesClient from './PatentServicesClient';

// Convert slug to proper state name
function getStateName(slug: string): string {
  const stateSlug = slug.replace('patent-services-in-', '');
  return stateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate dynamic metadata for SEO and AEO optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const stateName = getStateName(slug);
  
  const title = `Patent Services in ${stateName} | Patent Filing & Registration India 2025`;
  const description = `Expert patent services in ${stateName}. File provisional, utility & design patents with complete IP protection. Get patent search, filing, and prosecution support. Starting at ₹1,999. Protect your innovation today!`;
  
  return {
    title,
    description,
    keywords: [
      `patent services ${stateName}`,
      `patent registration ${stateName}`,
      `${stateName} patent filing`,
      `file patent ${stateName}`,
      `patent application ${stateName}`,
      `provisional patent ${stateName}`,
      `utility patent ${stateName}`,
      `design patent ${stateName}`,
      `patent search ${stateName}`,
      `patent lawyer ${stateName}`,
      `patent attorney ${stateName}`,
      `patent agent ${stateName}`,
      `innovation protection ${stateName}`,
      'patent registration India',
      'intellectual property patent'
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      siteName: 'IPRKaro',
      images: [
        {
          url: '/figmacomp/iprhero.svg',
          width: 1200,
          height: 630,
          alt: `Patent Services in ${stateName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/figmacomp/iprhero.svg'],
    },
    alternates: {
      canonical: `/services/patent-services/${slug}`,
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
    other: {
      // AEO (Answer Engine Optimization) structured data
      'article:section': 'Patent Services',
      'article:tag': `Patent Services ${stateName}`,
      'geo.region': 'IN',
      'geo.placename': stateName,
    },
  };
}

export default async function PatentServicesSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stateName = getStateName(slug);

  // State-specific FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How can I file a patent in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can file a patent in ${stateName} online through IPRKaro. Our AI-powered platform provides comprehensive patent search, professional specification drafting, and complete filing assistance with expert legal support for inventors and businesses across ${stateName}.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the cost of patent filing in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Patent filing costs in ${stateName} start from ₹15,999 including government fees, professional drafting fees, and GST. IPRKaro offers transparent pricing with AI-powered prior art search and expert legal guidance throughout the patent application process.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does patent registration take in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Patent registration in ${stateName} typically takes 3-5 years from filing to grant, depending on examination and objections. IPRKaro's AI-powered prior art search and expert specification drafting help minimize delays and improve grant success for inventors in ${stateName}.`
        }
      },
      {
        "@type": "Question",
        "name": `What types of patents can be filed in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `In ${stateName}, you can file provisional patents, complete patents, utility patents, and design patents for inventions, processes, machines, and industrial designs. IPRKaro provides comprehensive patent services for all patentable subject matter under the Indian Patents Act.`
        }
      },
      {
        "@type": "Question",
        "name": `Is online patent filing valid in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! Online patent filing through IPRKaro is completely valid and legally recognized in ${stateName} and throughout India. Our digital platform provides professional patent services with the same legal validity as offline filing, plus added convenience and expert support.`
        }
      }
    ]
  };

  return (
    <>
      {/* Server-side FAQ Schema for Google Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <PatentServicesClient stateName={stateName} />
    </>
  );
}

