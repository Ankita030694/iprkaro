import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Legal Services | IPR Karo',
  description: validateAndNormalizeDescription('Explore our comprehensive legal services including trademark registration, patent filing, copyright protection, and more.', "app/our-services/layout.tsx "),
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}