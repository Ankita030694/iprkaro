import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { fetchAnalysisData } from '@/lib/firebase-server';
import MetricsSectionPDF from '@/components/dashboard/MetricsSectionPDF';
import MetricsSectionPDFPage2 from '@/components/dashboard/MetricsSectionPDFPage2';

interface PDFPageProps {
  searchParams: Promise<{ trademark?: string; class?: string }>;
}

async function PDFContent({ searchParams }: PDFPageProps) {
  const params = await searchParams;
  const trademark = params.trademark;
  const classNumber = params.class;

  if (!trademark || !classNumber) {
    redirect('/');
  }

  const analysisData = await fetchAnalysisData(trademark, classNumber);

  if (!analysisData) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ 
        background: '#0C002B',
      }}>
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-white font-nunito text-3xl mb-4">Analysis data not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="w-full min-h-screen" 
      style={{ 
        background: '#0C002B',
        padding: '15px 20px',
        minHeight: '100vh',
        margin: 0,
        width: '100%',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <MetricsSectionPDF analysisData={analysisData} />
        <MetricsSectionPDFPage2 analysisData={analysisData} />
      </div>
    </div>
  );
}

export default function PDFPage(props: PDFPageProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ 
          background: '#0C002B',
        }}>
          <div className="text-center">
            <p className="text-white font-nunito text-xl">Loading...</p>
          </div>
        </div>
      }>
        <PDFContent {...props} />
      </Suspense>
    </>
  );
}

