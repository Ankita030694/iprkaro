'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with proper error handling for mobile browsers
const TrademarkSearchPopup = dynamic(() => import('@/components/TrademarkSearchPopup'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  )
});

function FormContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('trademark') || '';
  const trademarkClass = searchParams.get('class') || '';

  const handleClose = () => {
    try {
      window.history.back();
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback: redirect to home
      window.location.href = '/';
    }
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
    <>
      <h1 className="sr-only">Trademark Registration Application Form</h1>
      <Suspense fallback={
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <ErrorBoundary>
        <FormContent />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple error boundary for mobile compatibility
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error('Component error:', error);
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-xl mb-4">Something went wrong</div>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-yellow-500 text-black px-4 py-2 rounded"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }
}


