'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import TableOfContents from '@/components/trademark-registration/TableOfContents';
import CompactContactForm from '@/components/trademark-registration/CompactContactForm';
import DynamicContent from '@/components/trademark-registration/DynamicContent';

export default function TrademarkRegistrationSlugPage() {
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState('overview');

  // Convert slug to proper state name (e.g., "trademark-registration-in-jharkhand" -> "Jharkhand")
  const getStateName = (slug: string) => {
    const stateSlug = slug.replace('trademark-registration-in-', '');
    return stateSlug.charAt(0).toUpperCase() + stateSlug.slice(1);
  };

  const stateName = getStateName(slug as string);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-24 md:pb-8 overflow-x-hidden" style={{ backgroundColor: '#0C002B' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-4">
            Trademark Registration in {stateName}
          </h1>
          <p className="text-white font-nunito text-base md:text-lg opacity-80 max-w-3xl mx-auto">
            Complete guide to trademark registration services in {stateName} with AI-powered search and expert legal guidance
          </p>
        </div>

        <div className="relative">
          {/* Floating Sidebars */}
          {/* Left Sidebar - Table of Contents */}
          <div className="lg:fixed lg:top-28 lg:left-4 lg:w-80 lg:z-20">
            <TableOfContents activeSection={activeSection} stateName={stateName} />
          </div>

          {/* Right Sidebar - Compact Contact Form */}
          <div className="lg:fixed lg:top-28 lg:right-4 lg:w-80 lg:z-20">
            <CompactContactForm />
          </div>

          {/* Main Content Area - With Margins for Sidebars */}
          <div className="min-h-[600px] lg:ml-84 lg:mr-84">
            <DynamicContent stateName={stateName} />
          </div>
        </div>
      </div>
    </div>
  );
}
