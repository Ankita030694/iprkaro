'use client';

import { SimplePlans, Faq } from "@/components";
import Image from 'next/image';

// Create a Services Hero Component similar to HeroSection
function ServicesHeroSection() {
  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130), #ffffff)',
          backgroundSize: '120% 120%',
          backgroundPosition: '10% 0%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Main Content Container with Glassmorphism */}
      <div className="relative z-10 w-full w-full mx-auto px-30 mt-30">
          <div 
            className="p-8 md:p-12"
            style={{
              borderRadius: '20px',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
              boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
              backdropFilter: 'blur(31.7px)',
              WebkitBackdropFilter: 'blur(31.7px)'
            }}
          >
            {/* Section Header */}
            <div className="text-left mb-12">
              <h1 className="text-white font-nunito text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Our Services
              </h1>
              <p className="text-white font-nunito text-lg md:text-xl max-w-3xl">
                Comprehensive intellectual property solutions powered by AI technology and expert legal guidance
              </p>
            </div>

            {/* Three Service Containers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Service 1 - Trademark Search & Registration */}
              <div 
                className="p-6 md:p-8 text-center space-y-6 relative group cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(28.95px)',
                  WebkitBackdropFilter: 'blur(28.95px)'
                }}
              >
                <div className="mb-4">
                  <h3 className="text-white font-nunito text-xl font-bold mb-2">
                    AI-Powered Trademark Search
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '100px' }}></div>
                <p className="text-white font-nunito text-sm leading-relaxed mt-17">
                  Advanced AI algorithms scan millions of existing trademarks to identify potential conflicts and calculate your approval chances.
                </p>
                <ul className="text-left space-y-2 text-white text-sm">
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Instant similarity analysis
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Risk assessment report
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Smart filing recommendations
                  </li>
                </ul>
                
                {/* Learn More Button - appears on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 text-[#FFB703] font-nunito text-sm font-medium hover:text-white transition-colors">
                    Learn More
                    <i className="fas fa-arrow-right text-xs"></i>
                  </button>
                </div>
              </div>

              {/* Service 2 - Registration & Filing */}
              <div 
                className="p-6 md:p-8 text-center space-y-6 relative group cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(28.95px)',
                  WebkitBackdropFilter: 'blur(28.95px)'
                }}
              >
                <div className="mb-4">
                  <h3 className="text-white font-nunito text-xl font-bold mb-2">
                    Complete Registration Service
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '100px' }}></div>
                <p className="text-white font-nunito text-sm leading-relaxed mt-17">
                  End-to-end trademark registration with expert legal review and government filing support.
                </p>
                <ul className="text-left space-y-2 text-white text-sm">
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Professional application preparation
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Expert legal review
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Government filing support
                  </li>
                </ul>
                
                {/* Learn More Button - appears on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 text-[#FFB703] font-nunito text-sm font-medium hover:text-white transition-colors">
                    Learn More
                    <i className="fas fa-arrow-right text-xs"></i>
                  </button>
                </div>
              </div>

              {/* Service 3 - Monitoring & Protection */}
              <div 
                className="p-6 md:p-8 text-center space-y-6 relative group cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(28.95px)',
                  WebkitBackdropFilter: 'blur(28.95px)'
                }}
              >
                
                <div className="mb-4">
                  <h3 className="text-white font-nunito text-xl font-bold mb-2">
                    24/7 Brand Monitoring
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '100px' }}></div>
                <p className="text-white font-nunito text-sm leading-relaxed mt-17">
                  Continuous monitoring and protection of your registered trademarks against infringement and misuse.
                </p>
                <ul className="text-left space-y-2 text-white text-sm">
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Real-time infringement alerts
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Enforcement support
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-[#FFB703] text-xs mr-2"></i>
                    Legal action guidance
                  </li>
                </ul>
                
                {/* Learn More Button - appears on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 text-[#FFB703] font-nunito text-sm font-medium hover:text-white transition-colors">
                    Learn More
                    <i className="fas fa-arrow-right text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <SimplePlans />
      <Faq />
    </>
  );
}
