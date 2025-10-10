'use client';

import React from 'react';

interface TableOfContentsProps {
  activeSection: string;
  stateName: string;
}

export default function TableOfContents({ activeSection, stateName }: TableOfContentsProps) {
  const sections = [
    { id: 'overview', title: 'Overview', icon: 'fas fa-eye' },
    { id: 'criteria', title: 'Criteria', icon: 'fas fa-list-check' },
    { id: 'documents', title: 'Documents', icon: 'fas fa-file-alt' },
    { id: 'process', title: 'Process', icon: 'fas fa-cogs' },
    { id: 'validity', title: 'Validity', icon: 'fas fa-clock' },
    { id: 'support', title: 'Support', icon: 'fas fa-headset' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 160; // Account for navbar (80px) + horizontal nav height (80px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className="fixed top-[100px] left-0 right-0 z-50 backdrop-blur-xl border-b"
      style={{
        background: 'linear-gradient(180deg, rgba(12, 0, 43, 0.95) 0%, rgba(12, 0, 43, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
        <div className="flex items-center justify-between py-3">
          {/* Left side - Navigation items */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide flex-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeSection === section.id
                    ? 'scale-105'
                    : 'hover:scale-105'
                }`}
                style={
                  activeSection === section.id
                    ? {
                        background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                        boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)',
                        color: '#0C002B'
                      }
                    : {
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'white'
                      }
                }
              >
                <div 
                  className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${
                    activeSection === section.id ? '' : 'group-hover:scale-110'
                  }`}
                  style={
                    activeSection === section.id
                      ? {
                          background: 'rgba(12, 0, 43, 0.2)',
                          color: '#0C002B'
                        }
                  : {
                      background: 'rgba(255, 183, 3, 0.15)',
                      color: '#FFB703'
                    }
                  }
                >
                  <i className={`${section.icon} text-[10px] sm:text-xs`} aria-hidden="true"></i>
                </div>
                <span className={`font-nunito text-xs sm:text-sm font-semibold ${activeSection === section.id ? 'text-[#0C002B]' : 'text-white'}`}>
                  {section.title}
                </span>
              </button>
            ))}
          </div>


        </div>
      </div>

      {/* Progress bar indicator */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
        style={{
          width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`,
          background: 'linear-gradient(90deg, #FFB703, #FFA000)',
          boxShadow: '0 0 10px rgba(255, 183, 3, 0.5)'
        }}
      />
    </nav>
  );
}
