'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import TableOfContents from '@/components/trademark-registration/TableOfContents';
import CompactContactForm from '@/components/trademark-registration/CompactContactForm';
import DynamicContent from '@/components/trademark-registration/DynamicContent';

export default function TrademarkRegistrationSlugPage() {
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarsFixed, setSidebarsFixed] = useState(true);

  // Convert slug to proper state name (e.g., "trademark-registration-in-jharkhand" -> "Jharkhand")
  const getStateName = (slug: string) => {
    const stateSlug = slug.replace('trademark-registration-in-', '');
    return stateSlug.charAt(0).toUpperCase() + stateSlug.slice(1);
  };

  const stateName = getStateName(slug as string);

  useEffect(() => {
    // Stop sidebars at current position when footer approaches
    const updateSidebarPosition = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const scrollY = window.scrollY;
      const footerTop = footer.getBoundingClientRect().top + scrollY;

      // Switch to absolute positioning when footer is 300px from viewport top
      // This ensures sidebars stop at the position shown in screenshot
      const shouldApplyConstraint = footerTop < scrollY + 400; // 400px threshold
      setSidebarsFixed(!shouldApplyConstraint);
    };

    // Initial check
    updateSidebarPosition();

    // Update on scroll with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSidebarPosition();

          // Section tracking logic
          const sections = ['overview', 'criteria', 'documents', 'process', 'validity', 'support'];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
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

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 overflow-x-hidden" style={{ backgroundColor: '#0C002B' }}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 py-6 lg:py-12 max-w-8xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium leading-tight mb-3 max-w-xl mx-auto">
            Trademark Registration in <br /> {stateName}
          </h1>
          <p className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl opacity-80 max-w-xl mx-auto">
            Complete guide to trademark registration services in {stateName} with AI-powered search and expert legal guidance
          </p>
        </div>

        <div className="relative">
          {/* Floating Sidebars */}
          {/* Left Sidebar - Table of Contents */}
          <div className={`sidebar-left ${sidebarsFixed ? 'xl:fixed xl:top-34' : 'xl:absolute'} hidden lg:block lg:left-3 xl:left-6 2xl:left-12 lg:w-80 xl:w-96 2xl:w-[420px] lg:z-20`}>
            <TableOfContents activeSection={activeSection} stateName={stateName} />
          </div>

          {/* Right Sidebar - Compact Contact Form */}
          <div className={`sidebar-right ${sidebarsFixed ? 'xl:fixed xl:top-34' : 'xl:absolute'} hidden lg:block lg:right-3 xl:right-6 2xl:right-12 lg:w-80 xl:w-96 2xl:w-[420px] lg:z-20`}>
            <CompactContactForm />
          </div>

          {/* Main Content Area - With Responsive Margins for Sidebars */}
          <div className="min-h-[500px] lg:ml-80 xl:ml-96 2xl:ml-[420px] lg:mr-80 xl:mr-96 2xl:mr-[420px]">
            <DynamicContent stateName={stateName} />
          </div>
        </div>
      </div>
    </div>
  );
}
