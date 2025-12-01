'use client';

import React, { useState, useEffect } from 'react';
import TableOfContents from '@/components/patent-services/TableOfContents';
import CompactContactForm from '@/components/patent-services/CompactContactForm';

export default function RajasthanPatentClient() {
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
    "Form 2 (Provisional/Complete Specification)",
    "Drawings (Technical Diagrams of Invention)",
    "Form 3 (Statement and Undertaking)",
    "Form 5 (Declaration of Inventorship)",
    "Form 26 (Power of Attorney)",
    "Startup/MSME Certificate (for fee concession)",
    "Priority Documents (if claiming priority)"
  ];

  const processSteps = [
    {
      step: "Prior Art Search",
      description: "Checking global databases to ensure your invention is unique, especially important for Rajasthan's export-oriented industries."
    },
    {
      step: "Drafting Specification",
      description: "Writing the technical and legal description. For handicrafts/designs, we distinguish between Design Registration and Patents."
    },
    {
      step: "Filing at Delhi Patent Office",
      description: "Online submission to the Delhi jurisdiction which covers Rajasthan. Fast and paperless."
    },
    {
      step: "Examination & Prosecution",
      description: "Responding to objections raised by the Patent Office. We handle technical and legal arguments."
    },
    {
      step: "Grant & Renewal",
      description: "Once granted, the patent is valid for 20 years. Annual renewal fees apply."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden mt-20" style={{ 
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(19, 69, 195, 0.15), transparent), linear-gradient(180deg, #0C002B 0%, #1a0052 50%, #0C002B 100%)'
    }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'layout style paint' }}>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #FFB703 0%, transparent 70%)', animation: 'float 8s ease-in-out infinite', willChange: 'transform' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #1345C3 0%, transparent 70%)', animation: 'float 10s ease-in-out infinite reverse', animationDelay: '2s', willChange: 'transform' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #069A81 0%, transparent 70%)', animation: 'glow-pulse 6s ease-in-out infinite' }} />
      </div>

      <TableOfContents activeSection={activeSection} stateName="Rajasthan" />

      <div className="relative z-10 pt-[160px] pb-16 md:pb-8">
        <div className="container mx-auto px-3 sm:px-4 lg:px-5 xl:px-6 2xl:px-8 max-w-7xl">
          <div className={`text-center mb-8 lg:mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-1.5 mb-3 text-[10px] lg:text-xs">
              <span className="text-white/60 font-nunito">Home</span>
              <i className="fas fa-chevron-right text-white/40 text-[8px]" aria-hidden="true"></i>
              <span className="text-white/60 font-nunito">Services</span>
              <i className="fas fa-chevron-right text-white/40 text-[8px]" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-nunito font-medium">Patent Services</span>
            </div>

            <div className="relative inline-block mb-4">
              <h1 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-1.5">
                Patent Services in
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-nunito font-extrabold leading-none" style={{ background: 'linear-gradient(135deg, #FFB703 0%, #FFC93D 50%, #FFB703 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 40px rgba(255, 183, 3, 0.3)' }}>
                Rajasthan
              </h2>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full" style={{ width: '60%', background: 'linear-gradient(90deg, transparent, #FFB703, transparent)', boxShadow: '0 0 20px rgba(255, 183, 3, 0.5)' }} />
            </div>

            <p className="text-white/90 font-nunito text-xs md:text-sm lg:text-sm xl:text-sm leading-relaxed max-w-3xl mx-auto mb-5">
              Protecting innovation in the Land of Kings. From <span className="text-[#FFB703] font-semibold">Jaipur's Startups</span> to <span className="text-[#FFB703] font-semibold">Jodhpur's Handicrafts</span>, we secure your intellectual property.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-paint-brush text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito font-medium">Design Patents</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-rocket text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito font-medium">Startup Benefits</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-industry text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito font-medium">Industrial IP</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <i className="fas fa-gavel text-[#FFB703] text-xs" aria-hidden="true"></i>
                <span className="text-white text-[10px] lg:text-xs font-nunito font-medium">Legal Defense</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button className="group px-6 py-2 lg:px-8 lg:py-3 rounded-lg font-nunito font-bold text-xs lg:text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFB703 0%, #FFA000 100%)', color: '#0C002B', boxShadow: '0 10px 30px rgba(255, 183, 3, 0.4)' }}>
                <span className="relative z-10 flex items-center gap-1.5">File Patent Now <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-[10px]" aria-hidden="true"></i></span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #FFC93D 0%, #FFB703 100%)' }} />
              </button>
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            <div className={`lg:col-span-8 min-h-[500px] transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ contain: 'layout style', contentVisibility: 'auto' }}>
              
              <div className="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
                {/* Overview Section */}
                <section id="overview" className="scroll-mt-20">
                  <div className="space-y-3 lg:space-y-4 xl:space-y-5">
                    <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)' }}>
                        <div className="absolute inset-0 rounded-full animate-ping" style={{ background: '#FFB703', opacity: 0.4 }} />
                      </div>
                      <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        Patent Services in Rajasthan
                      </h2>
                    </div>
                    <div className="group relative p-4 lg:p-5 xl:p-6 2xl:p-8 rounded-lg lg:rounded-xl xl:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.01]" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                      <p className="relative text-white/95 font-nunito text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg leading-relaxed mb-4">
                        Rajasthan is blending its traditional strengths with modern innovation. While <strong>Jaipur</strong> emerges as a Tier-2 startup hub, cities like <strong>Kota</strong>, <strong>Jodhpur</strong>, and <strong>Udaipur</strong> are driving industrial growth. The state falls under the <strong>Delhi Patent Office</strong> jurisdiction.
                      </p>
                      <p className="relative text-white/95 font-nunito text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg leading-relaxed">
                        We specialize in helping Rajasthan's businesses - from stone processing units in Kishangarh to textile innovators in Bhilwara - identify and protect their intellectual property. Whether it's a utility patent for a new machine or a design patent for a jewelry collection, we have you covered.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Criteria Section */}
                <section id="criteria" className="scroll-mt-20">
                  <div className="space-y-3 lg:space-y-4 xl:space-y-5">
                    <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative" style={{ background: '#FFB703', boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)' }}>
                        <div className="absolute inset-0 rounded-full animate-ping" style={{ background: '#FFB703', opacity: 0.4 }} />
                      </div>
                      <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        Patent vs Design Registration
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 xl:gap-5">
                      <div className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)', border: '1px solid rgba(255, 183, 3, 0.2)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                        <div className="flex items-center gap-2 lg:gap-3 mb-2">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)' }}>
                            <i className="fas fa-cogs text-[#0C002B] text-sm lg:text-base" aria-hidden="true"></i>
                          </div>
                          <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Utility Patent</span>
                        </div>
                        <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">Protects HOW it works. Ideal for new machines, processes, or chemical formulas.</p>
                      </div>
                      <div className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                        <div className="flex items-center gap-2 lg:gap-3 mb-2">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 183, 3, 0.15)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                            <i className="fas fa-eye text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                          </div>
                          <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">Design Patent</span>
                        </div>
                        <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">Protects HOW it looks. Ideal for handicrafts, jewelry, and textile patterns.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documents Section */}
                <section id="documents" className="scroll-mt-20">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative" style={{ background: '#FFB703', boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)' }}>
                        <div className="absolute inset-0 rounded-full animate-ping" style={{ background: '#FFB703', opacity: 0.4 }} />
                      </div>
                      <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        Required Documents
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                      {documentsRequired.map((document, index) => (
                        <div key={index} className="group flex items-start gap-2 p-3 lg:p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}>
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#FFB703', boxShadow: '0 0 10px rgba(255, 183, 3, 0.5)' }} />
                          <span className="text-white/95 font-nunito text-xs md:text-sm lg:text-base">{document}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Process Section */}
                <section id="process" className="scroll-mt-20">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative" style={{ background: '#FFB703', boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)' }}>
                        <div className="absolute inset-0 rounded-full animate-ping" style={{ background: '#FFB703', opacity: 0.4 }} />
                      </div>
                      <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        Registration Process
                      </h2>
                    </div>
                    <div className="relative space-y-3 lg:space-y-4">
                      <div className="absolute left-4 lg:left-5 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                      {processSteps.map((step, index) => (
                        <div key={index} className="relative flex gap-3 lg:gap-4">
                          <div className="relative z-10 flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-nunito font-bold text-sm lg:text-base" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)' }}>{index + 1}</div>
                          <div className="flex-1 p-3 lg:p-4 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                            <h4 className="text-white font-nunito text-sm md:text-base lg:text-lg font-semibold mb-1.5">{step.step}</h4>
                            <p className="text-white/90 font-nunito text-xs lg:text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Support Section */}
                <section id="support" className="scroll-mt-20">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative" style={{ background: '#FFB703', boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)' }}>
                        <div className="absolute inset-0 rounded-full animate-ping" style={{ background: '#FFB703', opacity: 0.4 }} />
                      </div>
                      <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                        Why IPRKaro for Rajasthan?
                      </h2>
                    </div>
                    <div className="relative overflow-hidden p-4 lg:p-5 xl:p-6 rounded-lg lg:rounded-xl backdrop-blur-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 183, 3, 0.2)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                        <div className="flex items-start gap-2">
                          <i className="fas fa-check-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                          <div>
                            <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">Industry Knowledge</h4>
                            <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Handicrafts to Heavy Industry</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <i className="fas fa-users text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                          <div>
                            <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">Delhi Presence</h4>
                            <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Close to Patent Office</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <i className="fas fa-bolt text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                          <div>
                            <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">Affordable</h4>
                            <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Packages from ₹9,999</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
                        We understand the diverse needs of Rajasthan's economy. Whether you need to protect a traditional block printing technique or a modern software algorithm developed in Jaipur's startup hubs, our experts provide tailored advice.
                      </p>
                    </div>
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

