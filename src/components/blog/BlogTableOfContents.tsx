'use client';

import React, { useEffect, useState, useRef } from 'react';

interface BlogTableOfContentsProps {
  activeSection: string;
  blogTitle: string;
  sections: Array<{ id: string; title: string }>;
  variant?: 'horizontal' | 'vertical';
}

export default function BlogTableOfContents({ 
  activeSection, 
  blogTitle, 
  sections,
  variant = 'horizontal'
}: BlogTableOfContentsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to active section in horizontal TOC
  useEffect(() => {
    if (activeSection && variant === 'horizontal' && activeButtonRef.current && scrollContainerRef.current) {
      const button = activeButtonRef.current;
      const container = scrollContainerRef.current;
      
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.offsetWidth;
      
      const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeSection, variant]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (variant === 'vertical') {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-[#0C002B] font-nunito font-bold text-lg mb-2 flex items-center gap-2">
          <i className="fas fa-list-ul text-[#B3A1FF]" aria-hidden="true"></i>
          Table of Contents
        </h3>
        <div className="flex flex-col gap-1 border-l-2 border-gray-100">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-left px-4 py-2 text-sm font-nunito transition-all duration-300 border-l-2 -ml-[2px] ${
                activeSection === section.id
                  ? 'text-[#B3A1FF] border-[#B3A1FF] font-semibold bg-[#B3A1FF]/5'
                  : 'text-[#0C002B]/60 border-transparent hover:text-[#0C002B] hover:bg-gray-50'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`fixed top-24 left-0 right-0 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      style={{
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(179, 161, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Blog Title */}
          <div className="hidden md:flex items-center gap-2 min-w-0 flex-shrink-0">
            <i className="fas fa-book-open text-[#B3A1FF] text-sm" aria-hidden="true"></i>
            <span className="text-[#0C002B] font-nunito font-semibold text-xs truncate max-w-[200px]">
              {blogTitle}
            </span>
          </div>

          {/* Horizontal Navigation */}
          <div ref={scrollContainerRef} className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 min-w-max">
              {sections.map((section) => (
                <button
                  key={section.id}
                  ref={activeSection === section.id ? activeButtonRef : null}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-1.5 rounded-lg font-nunito text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-[#B3A1FF] text-white shadow-lg'
                      : 'text-[#0C002B]/60 hover:text-[#0C002B] hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#B3A1FF] to-[#D5CCFF] transition-all duration-300 rounded-full"
                style={{ 
                  width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` 
                }}
              />
            </div>
            <span className="text-[#0C002B]/40 text-[10px] font-nunito">
              {sections.findIndex(s => s.id === activeSection) + 1}/{sections.length}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

