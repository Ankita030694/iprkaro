'use client';

import { useRouter } from 'next/navigation';
import PlansSection from './PlansSection';

export default function PricingCard() {
  const router = useRouter();

  return (
    <div className="hidden lg:block sticky top-24 ml-40" style={{ zoom: 0.68 }}>
      <div
        className="relative flex flex-col p-4 md:p-5 lg:p-6 w-full max-w-full md:max-w-[505px] mx-auto bg-white rounded-[24px] border border-slate-200 shadow-xl shadow-slate-200/80"
        style={{
          minHeight: '520px'
        }}
      >
        <div
          className="mb-5 p-4 rounded-[16px] text-center relative bg-slate-50 border border-slate-200"
        >
          <h3 className="text-[#0C002B] font-nunito font-medium text-lg md:text-3xl leading-[50px]">
            Get Your Trademark Registered
          </h3>
        </div>

        <div
          className="mb-6 p-4 rounded-[16px] w-full"
        >
          <h4 className="text-[#0C002B] font-nunito font-medium text-lg md:text-3xl leading-[16px] mb-5 text-center">
            Price Breakdown
          </h4>

          <div className="space-y-2.5">
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
              <span className="text-[#4B5563] font-nunito text-base md:text-2xl">Government Fee (per class)</span>
              <span className="text-[#0C002B] font-nunito text-base md:text-2xl">₹4,500</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
              <span className="text-[#4B5563] font-nunito text-base md:text-2xl">Professional Fee (from)</span>
              <span className="text-[#0C002B] font-nunito text-base md:text-2xl">₹1,999</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
              <span className="text-[#4B5563] font-nunito text-base md:text-2xl">GST (18% on professional fee)</span>
              <span className="text-[#0C002B] font-nunito text-base md:text-2xl">As applicable</span>
            </div>
            <div className="flex justify-between items-center py-2.5 font-semibold">
              <span className="text-[#0C002B] font-nunito text-lg md:text-2xl">Total (from)</span>
              <span className="text-[#0C002B] font-nunito text-lg md:text-2xl">₹6,499</span>
            </div>

            <button
              onClick={() => router.push('/thank-you')}
              className="w-full py-2.5 px-3 rounded-lg font-nunito font-semibold text-lg md:text-3xl transition-all duration-300 hover:scale-105 mt-3 bg-[#1952C7] text-white shadow-lg shadow-[#1952C7]/30 hover:bg-[#123ea9]"
            >
              Start Registration
            </button>
          </div>
        </div>

        <PlansSection />
      </div>
    </div>
  );
}




