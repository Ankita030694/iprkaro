import React from 'react';

export default function HowItWorks() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8">
      <div className="flex items-center gap-8 max-w-7xl w-full">
        
        {/* Left Side: Main Credentials Card */}
        <div className="w-[487px] rounded-[25px] border-[6px] border-white/10 bg-gradient-to-br from-[rgba(0,0,0,0.88)] via-[rgba(138,56,245,0.25)] to-[rgba(255,183,3,0.25)] shadow-[0_0_50px_rgba(255,255,255,0.15)_inset] backdrop-blur-[32px] p-8">
          <div className="flex flex-col gap-[30px]">
            
            {/* Rating Section */}
            <div className="p-[15px] rounded-[20px] border-2 border-white/15 bg-gradient-to-r from-[rgba(255,183,3,0.62)] to-[rgba(255,255,255,0.62)] backdrop-blur-[16px]">
              <div className="flex items-start gap-[20px]">
                <div className="flex items-center gap-[15px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700"/>
                  </svg>
                  <span className="text-white font-nunito text-[25px] font-bold leading-[25px]">
                    4.7
                  </span>
                </div>
                <div className="flex flex-col gap-[6px] flex-1">
                  <h4 className="text-white font-nunito text-[20px] font-medium leading-[24px]">
                    Loved and Trusted by 1.25L Indians
                  </h4>
                  <p className="text-white/80 font-nunito text-[14px] font-normal italic leading-[18px]">
                    Rated 5 stars by Startups, Entrepreneur and Companies
                  </p>
                </div>
              </div>
            </div>
            
            {/* Checkmarks Section */}
            <div className="p-[15px] rounded-[20px] border-2 border-white/15 bg-gradient-to-r from-[rgba(255,183,3,0.62)] to-[rgba(255,255,255,0.62)] backdrop-blur-[16px]">
              <div className="flex flex-col gap-[12px]">
                {[
                  'MSME Registered',
                  'ISO',
                  'Govt. Registered',
                  'PAN India Services',
                  '35+ Years Experience',
                  'Privacy & Data Security'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[15px]">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8L7 13L18 2" stroke="url(#paint0_linear_checkmark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="paint0_linear_checkmark" x1="2" y1="2" x2="18" y2="13" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#22C55E"/>
                          <stop offset="1" stopColor="#16A34A"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-white font-nunito text-[18px] font-medium leading-[22px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Guidelines Section */}
            <div className="p-[15px] rounded-[20px] border-2 border-white/15 bg-gradient-to-r from-[rgba(255,183,3,0.62)] to-[rgba(255,255,255,0.62)] backdrop-blur-[16px]">
              <div className="flex flex-col items-center gap-[15px]">
                <h4 className="text-white text-center font-nunito text-[18px] font-medium leading-[22px]">
                  We work with Guidelines of
                </h4>
                <div className="flex items-center gap-[15px] justify-center">
                  {/* Placeholder logos - you can replace with actual logo images */}
                  {[1,2,3,4].map((_, index) => (
                    <div key={index} className="w-[60px] h-[40px] bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-[30px] h-[20px] bg-white/40 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Right Side: Registrability Chances Meter */}
        <div className="w-[300px] h-[200px] rounded-[20px] border-[6px] border-white/10 bg-gradient-to-br from-[rgba(0,0,0,0.88)] via-[rgba(138,56,245,0.25)] to-[rgba(255,183,3,0.25)] shadow-[0_0_50px_rgba(255,255,255,0.15)_inset] backdrop-blur-[32px] flex flex-col items-center justify-center p-6">
          <h3 className="text-white font-nunito text-[18px] font-medium mb-6 text-center">
            Registrability Chances
          </h3>
          
          {/* Circular Progress Meter */}
          <div className="relative w-[120px] h-[120px] flex items-center justify-center">
            <svg className="w-[120px] h-[120px] transform -rotate-90" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50 * 0.9} ${2 * Math.PI * 50}`}
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="50%" stopColor="#EAB308" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#22C55E] font-nunito text-[32px] font-bold">
                90%
              </span>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* New Two-Column Section with hiwleft.svg */}
      <div className="w-full max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex items-center justify-center">
            <img 
              src="/hiwleft.svg" 
              alt="How it works illustration left" 
              className="w-full h-auto max-w-full"
            />
          </div>
          
          {/* Right Column */}
          <div className="flex items-center justify-center">
            <img 
              src="/hiwleft.svg" 
              alt="How it works illustration right" 
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}
