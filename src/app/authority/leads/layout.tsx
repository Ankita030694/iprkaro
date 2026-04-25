import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leads Dashboard | Authority | IPR Karo',
  description: 'Manage and track business leads for trademark, copyright, and patent services.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
