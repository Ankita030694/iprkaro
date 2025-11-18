import { Suspense } from 'react';
import { redirect } from 'next/navigation';

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
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
      }}>
        <div className="text-center max-w-md mx-auto px-4">
          <i className="fas fa-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h2 className="text-white font-nunito text-3xl mb-4">Analysis data not found</h2>
          <a href="/" className="bg-[#FFB703] text-black px-6 py-3 rounded-lg font-nunito font-semibold hover:bg-[#e6a602] transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-0" style={{ 
      background: '#0C002B',
      backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="ml-2 mr-2 md:mx-10 px-2 md:px-6 lg:px-8 py-8 lg:py-16">
        <div className="flex justify-end mb-4 md:mb-6">
          <DownloadButton trademark={trademark} classNumber={classNumber} />
        </div>
        <MetricsSection analysisData={analysisData} />

        <h1 className="hidden md:block text-white font-nunito text-xl md:text-3xl lg:text-4xl xl:text-3xl font-bold text-center mb-10">
          Register Today and get your Trademark in <span style={{ color: '#FFB703' }}>9 months</span>
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
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
      }}>
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-white text-5xl mb-4"></i>
          <p className="text-white font-nunito text-xl">Loading dashboard...</p>
        </div>
      </div>
    }>
      <DashboardContent {...props} />
    </Suspense>
  );
}
