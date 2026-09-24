import { Metadata } from 'next';
import SlugClient from './SlugClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in September 2026 | IPR Karo',
  description: 'Practical guide to trademark registration in India (September 2026). Learn about search, classification, documents, filing, objections, cost & timeline.',
  keywords: ['trademark registration in september 2026', 'trademark registration guide', 'trademark registration process', 'IPR Karo'],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-registration-in-september-26',
  },
  openGraph: {
    title: 'Trademark Registration in September 2026 | IPR Karo',
    description: 'Practical guide to trademark registration in India (September 2026). Learn about search, classification, documents, filing, objections, cost & timeline.',
    url: 'https://www.iprkaro.com/trademark-registration-in-september-26',
    images: [
      {
        url: '/images/og/trademark-registration-in-september-2026.png',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in September 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in September 2026 | IPR Karo',
    description: 'Practical guide to trademark registration in India (September 2026). Learn about search, classification, documents, filing, objections, cost & timeline.',
    images: ['/images/og/trademark-registration-in-september-2026.png'],
  },
};

export default function Page() {
  return <SlugClient />;
}
