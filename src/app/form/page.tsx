'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import TrademarkSearchPopup from '@/components/TrademarkSearchPopup';

function FormContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('trademark') || '';
  const trademarkClass = searchParams.get('class') || '';

  const handleClose = () => {
    window.history.back();
  };

  return (
    <TrademarkSearchPopup
      isOpen={true}
      onClose={handleClose}
      searchTerm={searchTerm}
      trademarkClass={trademarkClass}
    />
  );
}

export default function FormPage() {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <FormContent />
    </Suspense>
  );
}

