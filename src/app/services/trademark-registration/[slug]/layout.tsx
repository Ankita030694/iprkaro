import type { Metadata } from "next";

// Convert slug to proper state name
function getStateName(slug: string): string {
  const stateSlug = slug.replace('trademark-registration-in-', '');
  return stateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate dynamic metadata for SEO and AEO optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const stateName = getStateName(slug);
  
  // Use shorter format for very long state names to keep under 60 chars
  const baseTitle = `Trademark Registration ${stateName} | IPR Karo`;
  const title = baseTitle.length > 60 ? `${stateName} Trademark | IPR Karo` : baseTitle;
  const description = `Get your trademark registered in ${stateName} with AI-powered search, expert guidance & 24/7 support. Starting at ₹1999. Fast processing, 100% secure. Register your brand today!`;
  const canonicalUrl = `https://iprkaro.com/services/trademark-registration/${slug}`;
  
  return {
    title,
    description,
    keywords: [
      `trademark registration ${stateName}`,
      `trademark registration in ${stateName}`,
      `${stateName} trademark filing`,
      `register trademark ${stateName}`,
      `brand registration ${stateName}`,
      `TM registration ${stateName}`,
      `trademark lawyer ${stateName}`,
      `trademark attorney ${stateName}`,
      `online trademark registration ${stateName}`,
      `affordable trademark services ${stateName}`,
      `fast trademark registration`,
      'AI-powered trademark search',
      'trademark protection India',
      `${stateName} intellectual property`,
      `trademark office ${stateName}`,
      `brand protection ${stateName}`
    ],
    authors: [{ name: 'IPRKaro' }],
    creator: 'IPRKaro',
    publisher: 'IPRKaro',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'IPRKaro',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://iprkaro.com/figmacomp/iprhero.svg',
          width: 1200,
          height: 630,
          alt: `Trademark Registration in ${stateName} - IPRKaro`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://iprkaro.com/figmacomp/iprhero.svg'],
      creator: '@iprkaro',
      site: '@iprkaro',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    category: 'Legal Services',
    other: {
      // AEO (Answer Engine Optimization) structured data
      'article:section': 'Trademark Registration Services',
      'article:tag': `Trademark Registration ${stateName}`,
      'geo.region': 'IN',
      'geo.placename': stateName,
      'og:locality': stateName,
      'og:country-name': 'India',
    },
  };
}

export default function TrademarkRegistrationSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

