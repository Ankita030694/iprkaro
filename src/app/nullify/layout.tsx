import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | IPR Karo - Intellectual Property Solutions',
  description: 'Sign in to your IPR Karo account to access trademark registration, patent services, and copyright protection management.',
  robots: 'noindex, nofollow', // Prevent indexing of login page
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



