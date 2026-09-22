import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leads Dashboard | Authority | IPR Karo',
  description: validateAndNormalizeDescription('Manage and track business leads for trademark, copyright, and patent services.', "app/authority/leads/layout.tsx "),
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
