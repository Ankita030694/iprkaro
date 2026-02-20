"use client";

import { useState, useEffect, useRef } from "react";

interface TableOfContentsProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export default function TableOfContents({ sections, orientation = "horizontal", className = "" }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Debounce function to limit scroll event firing
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = orientation === "vertical" ? 120 : 160;
      // We look a bit further down to switch active states earlier

      // Find the first section that is visible or just above the "fold"
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport (within headerOffset)
          // OR if the bottom of the element is still in view, it's a candidate.
          // But usually we want the one that is currently "reading".
          // Logic: if rect.top is < headerOffset, it has started or passed.
          // We want the *last* one that satisfies this.
          if (rect.top <= headerOffset + 50) { // +50 tolerance
            currentSection = section.id;
          }
        }
      }

      // If we are at the very bottom of the page, highlight the last item
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        if (sections.length > 0) {
          currentSection = sections[sections.length - 1].id;
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Use a small throttle/debounce if performance is an issue, but for TOC, requestAnimationFrame is often smoothest.
    // For simplicity and reactiveness, direct attachment is okay, but let's be careful.
    // Let's stick to the previous direct binding but maybe optimize if needed.
    // Actually, simple scroll listener is fine for modern browsers.
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, orientation, activeSection]);

  // Scroll active button into view
  useEffect(() => {
    if (activeSection && scrollContainerRef.current && buttonRefs.current[activeSection]) {
      const container = scrollContainerRef.current;
      const button = buttonRefs.current[activeSection];

      if (!button) return;

      if (orientation === "horizontal") {
        const containerWidth = container.offsetWidth;
        const buttonLeft = button.offsetLeft; // This is relative to the scroll parent if positioned, or just body if not. 
        // The container needs to be relative for offsetLeft to be relative to it? 
        // Actually offsetLeft is relative to offsetParent. 
        // Let's assume the container is the offsetParent (it usually is if it has transform/relative).

        const buttonWidth = button.offsetWidth;
        const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      } else {
        // Vertical logic
        const containerHeight = container.clientHeight;
        const buttonTop = button.offsetTop;
        const buttonHeight = button.offsetHeight;

        // Try to center the active button
        const scrollTop = buttonTop - containerHeight / 2 + buttonHeight / 2;

        container.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      }
    }
  }, [activeSection, orientation]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = orientation === "vertical" ? 100 : 140;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (orientation === "vertical") {
    return (
      <aside className={`sticky top-28 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm overflow-y-auto transform scale-[0.9] origin-top ${className}`} style={{ maxHeight: 'calc(85vh - 100px)' }}>
        <h3 className="font-bold text-[#0C002B] mb-4 text-lg border-b pb-2">Guide Sections</h3>
        <nav
          ref={scrollContainerRef}
          className="flex flex-col space-y-3"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              ref={(el) => {
                buttonRefs.current[section.id] = el;
              }}
              onClick={() => scrollToSection(section.id)}
              className={`text-left text-sm transition-all duration-200 font-semibold ${activeSection === section.id
                ? "text-[#6E5E93] translate-x-1"
                : "text-gray-600 hover:text-[#6E5E93]"
                }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>
    );
  }

  return (
    <div className={`bg-white border-b border-gray-200 sticky top-[100px] z-30 shadow-sm -mx-4 md:mx-0 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          ref={scrollContainerRef}
          className="flex items-center py-2 md:py-3 overflow-x-auto no-scrollbar scroll-smooth relative"
        >
          <div className="flex items-center space-x-2 md:space-x-4 mx-auto px-4">
            {/* Added px-4 to inner container to ensure first/last items aren't cut off by padding if any */}
            {sections.map((section) => (
              <button
                key={section.id}
                ref={(el) => {
                  buttonRefs.current[section.id] = el;
                }}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1.5 md:px-3 md:py-2 text-xs md:text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 flex-shrink-0 ${activeSection === section.id
                  ? "bg-[rgb(110,94,147)] text-white shadow-md"
                  : "text-gray-600 hover:text-[rgb(110,94,147)] hover:bg-gray-50"
                  }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
