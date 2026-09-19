'use client';
import { useState, useEffect } from 'react';

export default function TrademarkCounter() {
  const [counters, setCounters] = useState({
    clients: 0,
    registered: 0,
    applied: 0
  });

  const targets = {
    clients: 5000,
    registered: 7000,
    applied: 10000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // Animation steps
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let completed = true;

        Object.keys(targets).forEach(k => {
          const key = k as keyof typeof targets;
          if (newCounters[key] < targets[key]) {
            const remaining = targets[key] - newCounters[key];
            const step = Math.max(1, Math.floor(remaining / (steps * 0.1))); // Slow down as we approach target
            newCounters[key] = Math.min(targets[key], newCounters[key] + step);
            completed = false;
          }
        });

        if (completed) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="w-full max-w-2xl lg:max-w-2xl mt-6 px-4 lg:px-0">
      {/* Decorative background element */}
      <div className="relative">
        <div className="absolute inset-0 blur-xl"></div>
        <div className="relative p-6">
          <div className="flex flex-row gap-4 sm:gap-8 justify-center items-center">
            {/* Clients */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFB703] to-[#e6a602] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative text-2xl lg:text-3xl font-bold text-[#F8F9FA] font-nunito bg-gradient-to-b from-[#FFB703] to-[#F8F9FA] bg-clip-text text-transparent">
                  {formatNumber(counters.clients)}+
                </div>
              </div>
              <div className="text-sm lg:text-base text-[rgba(255,255,255,0.77)] font-nunito font-medium mt-2">
                Client With Us
              </div>
            </div>

            {/* Trademark Registered */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFB703] to-[#e6a602] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative text-2xl lg:text-3xl font-bold text-[#F8F9FA] font-nunito bg-gradient-to-b from-[#FFB703] to-[#F8F9FA] bg-clip-text text-transparent">
                  {formatNumber(counters.registered)}+
                </div>
              </div>
              <div className="text-sm lg:text-base text-[rgba(255,255,255,0.77)] font-nunito font-medium mt-2">
                Trademark Registered
              </div>
            </div>

            {/* Trademark Applied */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFB703] to-[#e6a602] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative text-2xl lg:text-3xl font-bold text-[#F8F9FA] font-nunito bg-gradient-to-b from-[#FFB703] to-[#F8F9FA] bg-clip-text text-transparent">
                  {formatNumber(counters.applied)}+
                </div>
              </div>
              <div className="text-sm lg:text-base text-[rgba(255,255,255,0.77)] font-nunito font-medium mt-2">
                Trademark Applied
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
