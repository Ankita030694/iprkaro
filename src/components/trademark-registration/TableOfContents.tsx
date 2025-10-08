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
      className="p-4 md:p-6 rounded-xl"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <h3 className="text-white font-nunito text-lg md:text-xl font-semibold mb-4 text-center">
        Table of Contents
      </h3>

      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
              activeSection === section.id
                ? 'bg-[#FFB703] text-[#0C002B]'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`${section.icon} ${activeSection === section.id ? 'text-[#0C002B]' : 'text-[#FFB703]'}`} aria-hidden="true"></i>
            <span className="font-nunito text-sm md:text-base font-medium">
              {section.title}
            </span>
          </button>
        ))}
      </nav>

      {/* Quick Contact Card */}
      <div className="mt-6 p-4 rounded-lg" style={{ background: 'rgba(255, 183, 3, 0.1)' }}>
        <h4 className="text-white font-nunito text-sm md:text-base font-semibold mb-2">
          Need Help?
        </h4>
        <p className="text-white font-nunito text-xs opacity-80 mb-3">
          Get expert guidance for trademark registration in {stateName}
        </p>
        <button
          className="w-full py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          style={{ background: '#FFB703', color: '#0C002B' }}
        >
          Contact Expert
        </button>
      </div>
    </div>
  );
}
