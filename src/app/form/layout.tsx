import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Search - IPR Karo',
  description: 'Search and verify trademark availability',
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

