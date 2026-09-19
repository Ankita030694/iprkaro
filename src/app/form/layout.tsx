import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Registration Form | IPR Karo',
  description: 'Complete your trademark registration application online with IPR Karo. AI-powered search and expert legal guidance included.',
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
