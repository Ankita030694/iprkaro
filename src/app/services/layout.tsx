import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Legal Services | IPR Karo',
  description: 'Explore our comprehensive legal services including trademark registration, patent filing, copyright protection, and more.',
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}