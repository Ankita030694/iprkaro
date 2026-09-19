import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Search Results | Authority | IPR Karo',
  description: 'View and analyze trademark search results and registrability reports.',
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
