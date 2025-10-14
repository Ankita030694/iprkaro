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

export default function CopyrightProtectionSlugPage({ params }: { params: { slug: string } }) {
  const stateName = getStateName(params.slug);

  return <CopyrightProtectionClient stateName={stateName} />;
}

