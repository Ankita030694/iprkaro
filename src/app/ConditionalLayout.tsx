'use client';

import { usePathname } from 'next/navigation';
import { Navbar, NewFooter } from '@/components';
import GlobalPopupForm from '@/components/common/GlobalPopupForm';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Pages where navbar, footer, and widgets should not be shown
  const excludedPaths = ['/form', '/authority', '/dashboard/pdf'];
  const shouldHideLayout = excludedPaths.some(path =>
    pathname === path || pathname?.startsWith(`${path}/`)
  );

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <NewFooter />
      <WhatsAppWidget />
      <GlobalPopupForm />
    </>
  );
}


