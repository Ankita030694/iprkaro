import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leads Dashboard | IPR Karo Authority',
  description: 'View and manage all leads for IPR Karo trademark registration, patent services, and copyright protection.',
  robots: 'noindex, nofollow', // Prevent indexing of authority pages
};

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



