'use client';

import React, { useEffect, useState, useRef } from 'react';

interface BlogTableOfContentsProps {
  activeSection: string;
  blogTitle: string;
  sections: Array<{ id: string; title: string }>;
}

export default function BlogTableOfContents({ activeSection, blogTitle, sections }: BlogTableOfContentsProps) {
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
    if (activeButtonRef.current && scrollContainerRef.current) {
      const button = activeButtonRef.current;
      const container = scrollContainerRef.current;
      
      // Calculate the position to scroll to center the active button
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.offsetWidth;
      
      // Center the active button in the container
      const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 200;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`fixed top-24 left-0 right-0 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      style={{
        background: 'linear-gradient(180deg, rgba(12, 0, 43, 0.98) 0%, rgba(12, 0, 43, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 183, 3, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Blog Title */}
          <div className="hidden md:flex items-center gap-2 min-w-0 flex-shrink-0">
            <i className="fas fa-book-open text-[#FFB703] text-sm" aria-hidden="true"></i>
            <span className="text-white font-nunito font-semibold text-xs truncate max-w-[200px]">
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
                      ? 'bg-[#FFB703] text-[#0C002B] shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#FFB703] to-[#FFA000] transition-all duration-300 rounded-full"
                style={{ 
                  width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` 
                }}
              />
            </div>
            <span className="text-white/60 text-[10px] font-nunito">
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

