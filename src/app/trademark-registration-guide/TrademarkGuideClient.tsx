'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TableOfContents from '@/components/trademark-guide/TableOfContents';
import PillarContent from '@/components/trademark-guide/PillarContent';

export default function TrademarkGuideClient() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction',
        'what-is-trademark',
        'why-register',
        'process',
        'fees',
        'documents',
        'classes',
        'objections',
        'cta',
        'related-resources'
      ];

      const scrollPosition = window.scrollY + 200; // Offset for fixed navbar + ToC

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      <TableOfContents activeSection={activeSection} />
      
      {/* Main Content */}
      <div className="pb-16 pt-[180px]" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16" style={{ transform: 'scale(1)', transformOrigin: 'top center'}}>
          <PillarContent />
        </div>
      </div>
    </div>
  );
}

