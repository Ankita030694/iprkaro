'use client';

import { useRouter } from 'next/navigation';
import PlansSection from './PlansSection';

export default function PricingCard() {
  const router = useRouter();

  return (
    <div className="hidden lg:block sticky top-24 ml-40" style={{ zoom: 0.68 }}>
      <div
        className="relative flex flex-col p-4 md:p-5 lg:p-6 w-full max-w-full md:max-w-[505px] mx-auto"
        style={{
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 0.10)',
          boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.10) inset, 0 0 16px 5px rgba(255, 255, 255, 0.20) inset',
          minHeight: '520px'
        }}
      >
        <div
          className="mb-5 p-4 rounded-[16px] text-center relative"
          style={{
            background: 'rgba(0, 0, 0, 0.26)'
          }}
        >
          <h3 className="text-white font-nunito font-medium text-lg md:text-3xl leading-[50px]">
            Get Your Trademark Registered
          </h3>
        </div>

        <div
          className="mb-6 p-4 rounded-[16px] w-full"
          style={{
            background: 'transparent'
          }}
        >
          <h4 className="text-white font-nunito font-medium text-lg md:text-3xl leading-[16px] mb-5 text-center">
            Price Breakdown
          </h4>

          <div className="space-y-2.5">
            <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
              <span className="text-white font-nunito text-base md:text-2xl opacity-90">Government Fee</span>
              <span className="text-white font-nunito text-base md:text-2xl">₹4,500</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
              <span className="text-white font-nunito text-base md:text-2xl opacity-90">Professional Fee</span>
              <span className="text-white font-nunito text-base md:text-2xl">₹2,500</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
              <span className="text-white font-nunito text-base md:text-2xl opacity-90">GST (18%)</span>
              <span className="text-white font-nunito text-base md:text-2xl">₹1,260</span>
            </div>
            <div className="flex justify-between items-center py-2.5 font-semibold">
              <span className="text-white font-nunito text-lg md:text-2xl">Total</span>
              <span className="text-white font-nunito text-lg md:text-2xl">₹8,260</span>
            </div>

            <button
              onClick={() => router.push('/thank-you')}
              className="w-full py-2.5 px-3 rounded-lg font-nunito font-semibold text-lg md:text-3xl transition-all duration-300 hover:scale-105 mt-3"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 16px 0 #000 inset',
                color: '#0C002B'
              }}
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




