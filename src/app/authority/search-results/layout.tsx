import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results Dashboard | IPR Karo Authority',
  description: 'View and manage trademark search results and analysis for IPR Karo.',
  robots: 'noindex, nofollow',
};

export default function SearchResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



