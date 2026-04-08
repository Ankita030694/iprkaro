import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import { fetchAnalysisData } from '@/lib/firebase-server';

import MetricsSection from '@/components/dashboard/MetricsSection';
import FAQSection from '@/components/dashboard/FAQSection';
import PricingCard from '@/components/dashboard/PricingCard';
import ContentSection from '@/components/dashboard/ContentSection';
import DownloadButton from '@/components/dashboard/DownloadButton';

interface DashboardPageProps {
  searchParams: Promise<{ trademark?: string; class?: string }>;
}

async function DashboardContent({ searchParams }: DashboardPageProps) {
  const params = await searchParams;
  const trademark = params.trademark;
  const classNumber = params.class;

  if (!trademark || !classNumber) {
    redirect('/');
  }

  const analysisData = await fetchAnalysisData(trademark, classNumber);

  if (!analysisData) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center p-4 bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div 
          className="text-center max-w-lg mx-auto px-8 py-10 rounded-[30px] border border-slate-200 bg-white shadow-xl shadow-slate-200/80"
        >
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-search text-red-500 text-3xl"></i>
          </div>
          <h2 className="text-[#0C002B] font-nunito text-3xl font-bold mb-4">Analysis Not Found</h2>
          <p className="text-[#6B7280] font-nunito mb-8 leading-relaxed">
            We couldn&apos;t find analysis data for <span className="text-[#1952C7] font-bold">"{trademark}"</span> 
            {classNumber && <span> in <span className="text-[#1952C7] font-bold">Class {classNumber}</span></span>}.
            This might happen if the analysis hasn&apos;t been completed yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/form?trademark=${encodeURIComponent(trademark || '')}&class=${encodeURIComponent(classNumber || '')}`}
              className="bg-[#1952C7] text-white px-8 py-3 rounded-xl font-nunito font-bold hover:bg-[#123ea9] transition-all transform hover:scale-105 shadow-lg shadow-[#1952C7]/20"
            >
              Analyze Now
            </Link>
            <Link 
              href="/" 
              className="bg-white text-[#0C002B] px-8 py-3 rounded-xl font-nunito font-semibold hover:bg-slate-50 transition-all border border-slate-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-0 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="ml-2 mr-2 md:mx-10 px-2 md:px-6 lg:px-8 py-8 lg:py-16">
        <div className="flex justify-end mb-4 md:mb-6">
          <DownloadButton trademark={trademark} classNumber={classNumber} />
        </div>
        <MetricsSection analysisData={analysisData} />

        <h1 className="hidden md:block text-[#0C002B] font-nunito text-xl md:text-3xl lg:text-4xl xl:text-3xl font-bold text-center mb-10">
          Register Today and get your Trademark in <span style={{ color: '#1952C7' }}>9 months</span>
        </h1>

        <div className="relative flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_425px] gap-0 md:gap-6 lg:gap-10 items-start mb-12 w-full max-w-7xl">
            <ContentSection analysisData={analysisData} />
            <PricingCard />
          </div>
        </div>

        <FAQSection />
      </div>
    </div>
  );
}

export default function DashboardPage(props: DashboardPageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-[#1952C7] text-5xl mb-4"></i>
          <p className="text-[#0C002B] font-nunito text-xl">Loading dashboard...</p>
        </div>
      </div>
    }>
      <DashboardContent {...props} />
    </Suspense>
  );
}
