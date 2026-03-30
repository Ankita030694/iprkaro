'use client';

const plans = [
  {
    name: 'Starter Plan',
    price: '1,999',
    subtitle: 'Perfect for: Early-stage founders & startups',
    buttonText: 'Get Started',
    popular: false,
    features: [
      'Complete online trademark filing',
      'AI-powered name search & conflict check',
      'Basic risk analysis before filing',
      'Expert legal support throughout',
      'Hassle-free documentation',
    ]
  },
  {
    name: 'Growth Plan',
    price: '2,999',
    subtitle: 'Perfect for: Growing brands & serious founders',
    buttonText: 'Get Protected',
    popular: true,
    features: [
      'Smart conflict detection (deep scan)',
      'Advanced AI trademark search + detailed risk report',
      'Priority filing & faster processing',
      'Dedicated legal expert guidance',
      'Brand protection strategy insights',
    ]
  },
  {
    name: 'Scale Plan',
    price: '3,999',
    subtitle: 'Perfect for: Established & scaling brands',
    buttonText: 'Get Started',
    popular: false,
    features: [
      'Continuous legal support',
      '24/7 AI-powered trademark & brand monitoring',
      'Real-time infringement alerts',
      'Proactive brand safeguarding',
      'Continuous protection across platforms',
    ]
  }
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
    <path d="M5 13L9 17L19 7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SimplePricing() {
  return (
    <section className="w-full bg-white py-5 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <h2 className="text-[#0C002B] font-nunito text-[32px] md:text-[52px] font-semibold text-center mb-12 md:mb-16 leading-[1.1] tracking-tight max-w-[320px] md:max-w-none">
          Simple Pricing. Serious<br /> Brand Protection.
        </h2>

        <div className="w-full flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-6 md:gap-8 pb-8 no-scrollbar -mx-4 px-4 scrollbar-hide">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[90vw] md:w-auto snap-center bg-[#F4F4F6] rounded-[32px] flex flex-col border border-gray-200"
            >
              <div className="relative p-1.5 md:p-2">
                <div className="bg-white rounded-[24px] p-6 md:p-6 flex flex-col relative overflow-hidden border border-gray-100">
                  {/* Highlight background gradient for popular plan */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#99BBFF]/40 via-[#D0E0FF]/20 to-transparent pointer-events-none"></div>
                  )}

                  <div className="relative z-10 flex flex-col">
                    <span className="text-[#0C002B]/70 font-medium text-[15px] mb-2">
                      {plan.name}
                    </span>

                    <div className="flex items-baseline mb-0.5">
                      <span className="text-[#0C002B] font-nunito font-bold text-[40px] md:text-[46px] leading-none tracking-tight">
                        ₹{plan.price}
                      </span>
                    </div>

                    <p className="text-[#0C002B]/60 text-[13px] italic mb-4 mt-0.5 leading-relaxed">
                      {plan.subtitle}
                    </p>

                    <button className="w-full bg-[#0C002B] text-white py-2.5 rounded-[12px] font-semibold text-[15px] transition-all duration-300 hover:bg-[#1A0B42]">
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-6 py-6 md:px-7 md:py-4 flex flex-col gap-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[#0C002B]/80 text-[14px] font-medium leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
