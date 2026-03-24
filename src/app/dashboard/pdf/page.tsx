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
      <div className="min-h-screen flex items-center justify-center p-4" style={{ 
        background: '#0C002B',
      }}>
        <div className="text-center max-w-lg mx-auto px-8 py-10 rounded-2xl border-2 border-white/10" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
          <h2 className="text-white font-nunito text-2xl font-bold mb-4">Report Not Found</h2>
          <p className="text-white/60 font-nunito mb-0">
            No analysis data found for "{trademark}" in Class {classNumber}.
          </p>
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

