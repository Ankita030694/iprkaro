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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 rounded lg:rounded-md xl:rounded-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <h3 className="text-white font-nunito text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold mb-1 lg:mb-1.5 xl:mb-2 text-center">
        Table of Contents
      </h3>

      <nav className="space-y-0.5 lg:space-y-0.5 xl:space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-full text-left p-1 lg:p-1 xl:p-1.5 2xl:p-2 rounded-sm lg:rounded xl:rounded-md transition-all duration-300 flex items-center gap-1 lg:gap-1 xl:gap-1.5 ${
              activeSection === section.id
                ? 'bg-[#FFB703] text-[#0C002B]'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`${section.icon} ${activeSection === section.id ? 'text-[#0C002B]' : 'text-[#FFB703]'} text-[10px] lg:text-xs xl:text-xs 2xl:text-sm`} aria-hidden="true"></i>
            <span className="font-nunito text-[10px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-medium">
              {section.title}
            </span>
          </button>
        ))}
      </nav>

      {/* Quick Contact Card */}
      <div className="mt-1.5 lg:mt-2 xl:mt-3 p-1 lg:p-1.5 xl:p-2 2xl:p-2.5 rounded-sm lg:rounded xl:rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)' }}>
        <h4 className="text-white font-nunito text-[10px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-sm font-semibold mb-0.5 lg:mb-0.5 xl:mb-1">
          Need Help?
        </h4>
        <p className="text-white font-nunito text-[10px] lg:text-[10px] xl:text-xs opacity-80 mb-1 lg:mb-1 xl:mb-1.5">
          Get expert guidance for trademark registration in {stateName}
        </p>
        <button
          className="w-full py-0.5 lg:py-1 xl:py-1 2xl:py-1.5 px-1 lg:px-1.5 xl:px-1.5 2xl:px-2 rounded-sm lg:rounded xl:rounded-md text-[10px] lg:text-[10px] xl:text-xs 2xl:text-xs font-medium transition-colors"
          style={{ background: '#FFB703', color: '#0C002B' }}
        >
          Contact Expert
        </button>
      </div>
    </div>
  );
}
