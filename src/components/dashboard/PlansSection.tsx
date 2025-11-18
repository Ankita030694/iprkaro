'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { plans } from '@/lib/dashboard-data';

export default function PlansSection() {
  const router = useRouter();
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  return (
    <div className="flex-1 space-y-3">
      <h4 className="text-white font-nunito font-medium text-lg md:text-3xl leading-[20px] mb-5 text-center">
        Our Plans
      </h4>

      {plans.map((plan) => (
        <div key={plan.id} className="mb-3">
          <div
            onClick={() => togglePlan(plan.id)}
            className="w-full p-2.5 rounded-lg text-white font-nunito font-medium text-base md:text-lg border-2 border-white/20 cursor-pointer hover:border-white/40 transition-all duration-300 flex items-center justify-between"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          >
            <span className="text-sm md:text-xl">{plan.name} - {plan.price}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`w-3 h-3 transition-transform duration-300 ${
                expandedPlan === plan.id ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expandedPlan === plan.id ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <div
              className="relative p-5 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.10)',
                backdropFilter: 'blur(13px)',
                WebkitBackdropFilter: 'blur(13px)',
                border: plan.highlighted ? '1.5px solid #1345C3' : 'none',
                boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.10) inset, inset 0 0 16px rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-center mb-5">
                <h3 className="text-white font-nunito text-lg md:text-3xl font-semibold mb-1.5">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-white font-nunito text-sm md:text-xl opacity-80">{plan.description}</span>
                </div>
                <div className="text-right">
                  <span className="text-white font-nunito font-bold text-lg md:text-3xl">
                    {plan.price}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 mb-5">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <i className="fas fa-check text-green-400 mt-0.5 flex-shrink-0 text-xs"></i>
                    <span className="text-white font-nunito text-sm md:text-xl leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => router.push('/thank-you')}
                className="w-full py-2.5 px-3 rounded-lg font-nunito font-semibold text-sm md:text-3xl transition-all duration-300 hover:scale-105"
                style={{
                  background: '#1345C3',
                  boxShadow: '0 0 16px 0 #000 inset',
                  color: '#FFFFFF'
                }}
              >
                Get Protected
              </button>

              <div className="mt-3 text-center">
                <span className="text-white font-nunito text-[10px] opacity-80">
                  {plan.subtitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}




