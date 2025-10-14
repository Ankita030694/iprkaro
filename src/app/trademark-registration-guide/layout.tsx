import React from 'react';
import Footer from '@/components/Footer';

export default function TrademarkGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ background: '#0C002B' }}>
      {children}
      {/* <Footer /> */}
    </div>
  );
}

