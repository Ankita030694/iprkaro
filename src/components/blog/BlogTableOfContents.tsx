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
  variant = 'horizontal',
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

      const scrollPosition = buttonLeft - containerWidth / 2 + buttonWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
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
        behavior: 'smooth',
      });
    }
  };

  if (variant === 'vertical') {
    return (
      <div className="bg-white p-6 rounded-3xl border border-stone-200/70 shadow-xs">
        <h3 className="text-slate-900 font-black text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
          <span>ON THIS PAGE</span>
        </h3>
        <nav className="flex flex-col space-y-3">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-left text-xs transition-all duration-200 leading-snug cursor-pointer font-medium ${
                  isActive
                    ? 'text-[#7C3AED] font-extrabold scale-[1.01]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {section.title}
              </button>
            );
          })}
        </nav>
      </div>
    );
  }

  return (
    <div
      className={`fixed top-20 left-0 right-0 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Blog Title */}
          <div className="hidden md:flex items-center gap-2 min-w-0 flex-shrink-0">
            <span className="text-[#7C3AED] text-xs">⚖️</span>
            <span className="text-slate-800 font-semibold text-xs truncate max-w-[220px]">
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    activeSection === section.id
                      ? 'bg-[#7C3AED] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7C3AED] transition-all duration-300 rounded-full"
                style={{
                  width: `${
                    ((sections.findIndex((s) => s.id === activeSection) + 1) /
                      Math.max(sections.length, 1)) *
                    100
                  }%`,
                }}
              />
            </div>
            <span className="text-slate-400 text-[10px] font-bold">
              {sections.findIndex((s) => s.id === activeSection) + 1}/{sections.length}
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
