import React from 'react';

export default function FeatureCards() {
  return (
    <section className="w-full bg-[#171717] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-6">
          {/* Card 1: Instant AI search & class suggestions */}
          <div className="group bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-[15px] p-[25px_27.5px_24px_28.5px] flex items-center justify-center gap-10 w-[469px] h-[114px] hover:h-[240px] transition-all duration-700 ease-out cursor-pointer relative overflow-hidden backdrop-blur-[17.7px]">
            {/* Icon - moves to background on hover and stays visible */}
            <div className="flex-shrink-0 relative z-10 group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-20 group-hover:blur-[2px] group-hover:scale-150 transition-all duration-500 ease-in-out group-hover:z-0">
              <i className="fas fa-bolt text-[#22c55e] text-4xl" style={{ WebkitTextStroke: '1px #fbbf24', color: 'transparent' }}></i>
            </div>
            
            {/* Default state content */}
            <div className="text-white font-nunito text-sm leading-tight group-hover:hidden">
              Instant AI search & class suggestions.
            </div>
            
            {/* Hover state content */}
            <div className="w-full text-center group-hover:block hidden relative z-10">
              <h3 className="text-[#fbbf24] font-bold text-lg mb-2 w-full">Instant AI search & class suggestions</h3>
              <div className="w-full h-px bg-[#fbbf24] mb-3 mx-auto"></div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Get instant AI-powered search results and intelligent class suggestions to streamline your trademark filing process.
              </p>
            </div>
          </div>

          {/* Card 2: Risk prediction & objection alerts */}
          <div className="group bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-[15px] p-[25px_27.5px_24px_28.5px] flex items-center justify-center gap-10 w-[469px] h-[114px] hover:h-[240px] transition-all duration-700 ease-out cursor-pointer relative overflow-hidden backdrop-blur-[17.7px]">
            {/* Icon - moves to background on hover and stays visible */}
            <div className="flex-shrink-0 relative z-10 group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-20 group-hover:blur-[2px] group-hover:scale-150 transition-all duration-500 ease-in-out group-hover:z-0">
              <i className="fas fa-brain text-[#fbbf24] text-4xl" style={{ WebkitTextStroke: '1px #fbbf24', color: 'transparent' }}></i>
            </div>
            
            {/* Default state content */}
            <div className="text-white font-nunito text-sm leading-tight group-hover:hidden">
              Risk prediction & objection alerts.
            </div>
            
            {/* Hover state content */}
            <div className="w-full text-center group-hover:block hidden relative z-10">
              <h3 className="text-[#fbbf24] font-bold text-lg mb-2 w-full">Risk prediction & objection alerts</h3>
              <div className="w-full h-px bg-[#fbbf24] mb-3 mx-auto"></div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Stay ahead with intelligent insights that highlight risks early and alert you to potential objections before they become issues.
              </p>
            </div>
          </div>

          {/* Card 3: Easy filing with expert support */}
          <div className="group bg-[rgba(251,191,36,0.10)] hover:bg-[rgba(251,191,36,0.15)] rounded-[15px] p-[25px_27.5px_24px_28.5px] flex items-center justify-center gap-10 w-[469px] h-[114px] hover:h-[240px] transition-all duration-700 ease-out cursor-pointer relative overflow-hidden backdrop-blur-[17.7px]">
            {/* Icon - moves to background on hover and stays visible */}
            <div className="flex-shrink-0 relative z-10 group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-20 group-hover:blur-[2px] group-hover:scale-150 transition-all duration-500 ease-in-out group-hover:z-0">
              <i className="fas fa-file-alt text-[#86efac] text-4xl" style={{ WebkitTextStroke: '1px #fbbf24', color: 'transparent' }}></i>
            </div>
            
            {/* Default state content */}
            <div className="text-white font-nunito text-sm leading-tight group-hover:hidden">
              Easy filing with expert support.
            </div>
            
            {/* Hover state content */}
            <div className="w-full text-center group-hover:block hidden relative z-10">
              <h3 className="text-[#fbbf24] font-bold text-lg mb-2 w-full">Easy filing with expert support</h3>
              <div className="w-full h-px bg-[#fbbf24] mb-3 mx-auto"></div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Streamline your trademark filing process with our intuitive platform and get expert support whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
