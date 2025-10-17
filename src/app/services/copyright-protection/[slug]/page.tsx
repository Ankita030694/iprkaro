import React from 'react';
import { Metadata } from 'next';
import CopyrightProtectionClient from './CopyrightProtectionClient';

// Convert slug to proper state name
function getStateName(slug: string): string {
  const stateSlug = slug.replace('copyright-protection-in-', '');
  return stateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate dynamic metadata for SEO and AEO optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const stateName = getStateName(slug);
  
  const title = `Copyright Protection in ${stateName} | Online Copyright Registration 2025`;
  const description = `Secure copyright protection in ${stateName} with expert legal support. Fast filing, lifetime protection, and affordable pricing from ₹1,999. Register books, music, software & more today!`;
  
  return {
    title,
    description,
    keywords: [
      `copyright protection ${stateName}`,
      `copyright registration ${stateName}`,
      `${stateName} copyright filing`,
      `register copyright ${stateName}`,
      `copyright registration online ${stateName}`,
      `music copyright ${stateName}`,
      `book copyright ${stateName}`,
      `software copyright ${stateName}`,
      `artistic work copyright ${stateName}`,
      `copyright lawyer ${stateName}`,
      `copyright attorney ${stateName}`,
      `affordable copyright services ${stateName}`,
      'copyright protection India',
      'intellectual property rights'
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
          alt: `Copyright Protection in ${stateName}`,
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
      canonical: `/services/copyright-protection/${slug}`,
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
      'article:section': 'Copyright Protection Services',
      'article:tag': `Copyright Protection ${stateName}`,
      'geo.region': 'IN',
      'geo.placename': stateName,
    },
  };
}

export default async function CopyrightProtectionSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stateName = getStateName(slug);

  // State-specific FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How can I register copyright in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can register copyright in ${stateName} online through IPRKaro. Our platform provides expert legal support for copyright registration of books, music, software, artistic works, and digital content with complete filing assistance for creators across ${stateName}.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the cost of copyright registration in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Copyright registration costs in ${stateName} start from ₹1,999 including government fees, professional fees, and GST. IPRKaro offers transparent pricing with expert legal guidance for protecting your creative works throughout the registration process.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does copyright registration take in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Copyright registration in ${stateName} typically takes 4-6 months from application filing to certificate issuance. IPRKaro's expert team ensures proper documentation and timely filing for creators and businesses in ${stateName}.`
        }
      },
      {
        "@type": "Question",
        "name": `What types of works can be copyrighted in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `In ${stateName}, you can copyright literary works (books, articles), artistic works (paintings, photography), musical works, cinematographic films, sound recordings, and software. IPRKaro provides comprehensive copyright protection for all creative works under the Indian Copyright Act.`
        }
      },
      {
        "@type": "Question",
        "name": `Is online copyright registration valid in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! Online copyright registration through IPRKaro is completely valid and legally recognized in ${stateName} and throughout India. Our digital platform provides the same legal protection as offline filing with added convenience and expert support.`
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
      
      <CopyrightProtectionClient stateName={stateName} />
    </>
  );
}

