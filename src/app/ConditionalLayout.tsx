'use client';

import { usePathname } from 'next/navigation';
import { Navbar, Footer } from '@/components';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Pages where navbar and footer should not be shown
  const excludedPaths = ['/form'];
  const shouldHideLayout = excludedPaths.some(path => pathname?.startsWith(path));

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

