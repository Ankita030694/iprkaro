import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Registration Form | IPR Karo',
  description: validateAndNormalizeDescription('Complete your trademark registration application online with IPR Karo. AI-powered search and expert legal guidance included.', "app/form/layout.tsx "),
  robots: {
    index: false, // Don't index the form page itself as it's a utility page
    follow: true,
  },
};

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
