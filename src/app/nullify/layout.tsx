import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Authority Dashboard | IPR Karo',
  description: validateAndNormalizeDescription('Access the IPR Karo authority dashboard to manage trademark searches, leads, and legal filings.', "app/nullify/layout.tsx "),
  robots: {
    index: false, // Don't index login pages
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
