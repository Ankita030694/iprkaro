'use client';

import React, { useState, useEffect } from 'react';
import TableOfContents from '@/components/patent-services/TableOfContents';
import CompactContactForm from '@/components/patent-services/CompactContactForm';

export default function BiharPatentClient() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarsFixed, setSidebarsFixed] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const updateSidebarPosition = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;
      const scrollY = window.scrollY;
      const footerTop = footer.getBoundingClientRect().top + scrollY;
      const shouldApplyConstraint = footerTop < scrollY + 400;
      setSidebarsFixed(!shouldApplyConstraint);
    };
    updateSidebarPosition();
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSidebarPosition();
          const sections = ['overview', 'criteria', 'documents', 'process', 'validity', 'support'];
          const scrollPosition = window.scrollY + 100;
          for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSidebarPosition);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSidebarPosition);
    };
  }, []);

  const documentsRequired = [
    "Form 1 (Application for Grant of Patent)",
    "Form 2 (Complete Specification)",
    "Form 3 (Statement and Undertaking)",
    "Form 5 (Declaration of Inventorship)",
    "Form 26 (Power of Attorney)",
    "MSME Certificate"
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden mt-20" style={{ 
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(19, 69, 195, 0.15), transparent), linear-gradient(180deg, #0C002B 0%, #1a0052 50%, #0C002B 100%)'
    }}>
      <TableOfContents activeSection={activeSection} stateName="Bihar" />

      <div className="relative z-10 pt-[160px] pb-16 md:pb-8">
        <div className="container mx-auto px-3 sm:px-4 lg:px-5 xl:px-6 2xl:px-8 max-w-7xl">
          <div className={`text-center mb-8 lg:mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block mb-4">
              <h1 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-1.5">
                Patent Services in
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-nunito font-extrabold leading-none" style={{ background: 'linear-gradient(135deg, #FFB703 0%, #FFC93D 50%, #FFB703 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Bihar
              </h2>
            </div>
            <p className="text-white/90 font-nunito text-xs md:text-sm lg:text-sm xl:text-sm leading-relaxed max-w-3xl mx-auto mb-5">
              Empowering Bihar's Innovators. Patent filing services for Agri-Tech, Food Processing, and Manufacturing sectors.
            </p>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            <div className={`lg:col-span-8 min-h-[500px] transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ contain: 'layout style', contentVisibility: 'auto' }}>
              <div className="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
                
                <section id="overview" className="scroll-mt-20">
                   <div className="group relative p-4 lg:p-5 xl:p-6 2xl:p-8 rounded-lg lg:rounded-xl xl:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.01]" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                      <p className="relative text-white/95 font-nunito text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg leading-relaxed mb-4">
                        Bihar is witnessing a resurgence in industrial activity, particularly in food processing and agricultural technology. The state falls under the <strong>Kolkata Patent Office</strong> jurisdiction.
                      </p>
                      <p className="relative text-white/95 font-nunito text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg leading-relaxed">
                        We assist innovators in Patna, Muzaffarpur, and Bhagalpur in securing patents for agricultural machinery, food preservation techniques, and local innovations.
                      </p>
                    </div>
                </section>

                <section id="criteria" className="scroll-mt-20">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 xl:gap-5">
                      <div className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                        <span className="text-white font-nunito font-semibold">Agri-Tech Patents</span>
                        <p className="text-white/90 text-xs mt-2">New tools or machinery for farming efficiency.</p>
                      </div>
                      <div className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <span className="text-white font-nunito font-semibold">Grassroots Innovation</span>
                        <p className="text-white/90 text-xs mt-2">Protection for rural innovators and small scale industries.</p>
                      </div>
                   </div>
                </section>

                <section id="documents" className="scroll-mt-20">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
                      <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        Required Documents
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                      {documentsRequired.map((document, index) => (
                        <div key={index} className="group flex items-start gap-2 p-3 lg:p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                          <span className="text-white/95 font-nunito text-xs md:text-sm lg:text-base">{document}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Support Section */}
                <section id="support" className="scroll-mt-20">
                  <div className="relative overflow-hidden p-4 lg:p-5 xl:p-6 rounded-lg lg:rounded-xl backdrop-blur-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                    <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
                      IPRKaro offers affordable patent filing packages specifically designed for Bihar's MSMEs and startups, ensuring cost is not a barrier to innovation protection.
                    </p>
                  </div>
                </section>

              </div>
            </div>

            <div className={`lg:col-span-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ contain: 'layout style paint', contentVisibility: 'auto' }}>
              <div className={`${sidebarsFixed ? 'lg:sticky lg:top-[180px]' : ''}`}>
                <CompactContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

