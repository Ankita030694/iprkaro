import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Search - IPR Karo',
  description: 'Search and verify trademark availability',
  alternates: {
    canonical: 'https://www.iprkaro.com/form',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}


