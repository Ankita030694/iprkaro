import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - IPR Karo',
  description: 'Trademark search dashboard',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function DashboardLayout({
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


