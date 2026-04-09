'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Navbar, NewFooter } from '@/components';

// Lazy-load heavy components that aren't needed for initial render
const GlobalPopupForm = dynamic(() => import('@/components/common/GlobalPopupForm'), {
  ssr: false,  // Only renders client-side after 5s delay anyway
});
const WhatsAppWidget = dynamic(() => import('@/components/WhatsAppWidget'), {
  ssr: false,  // Floating button, not needed for SSR
});

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


