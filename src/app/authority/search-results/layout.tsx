import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Search Results | Authority | IPR Karo',
  description: validateAndNormalizeDescription('View and analyze trademark search results and registrability reports.', "app/authority/search-results/layout.tsx "),
  robots: {
    index: false,
    follow: false,
  },
};

export default function SearchResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
