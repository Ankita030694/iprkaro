'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Expert() {
  const [selectedService, setSelectedService] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Memoize services data to prevent recreation
  const services = useMemo(() => [
    {
      title: "Trademark Registration",
      subtitle: "Register your trademark online start with our AI trademark search, review your report, and file instantly. India's fastest, most reliable brand protection platform.",
      backgroundImage: "/rs2.svg",
      icon: "fa-trademark",
      color: "from-yellow-400 to-yellow-600",
      accentColor: "#FFB400",
      items: [
        "AI-powered trademark search for instant conflict detection and brand availability.",
        "Register trademark online with a fast, step-by-step guided application.",
        "How to register a trademark in India: Complete filing and legal support.",
        "Get your trademark search report with AI to maximize registerability and minimize risk.",
        "Secure your brand identity with expert trademark protection."
      ]
    },
    {
      title: "Copyright Protection",
      subtitle: "Secure creative works digitally AI copyright search and seamless online application keep your assets protected.",
      backgroundImage: "/rs1.svg",
      icon: "fa-copyright",
      color: "from-green-400 to-green-600",
      accentColor: "#16a34a",
      items: [
        "Online copyright registration for digital content and creative works.",
        "AI copyright search for originality and infringement checks.",
        "How to protect your copyright online: From application to monitoring.",
        "Efficient copyright filing and expert guidance for complete protection."
      ]
    },
    {
      title: "Patent Services",
      subtitle: "Protect inventions with AI-optimized patent search and application file quickly, stay ahead of the competition.",
      backgroundImage: "/rs3.svg",
      icon: "fa-lightbulb",
      color: "from-yellow-300 to-green-500",
      accentColor: "#86efac",
      items: [
        "Patent registration for inventions with AI-powered search and risk analysis.",
        "How to file a patent: Quick patent search, filing, and legal compliance in India.",
        "End-to-end patent application support for maximizing protection and market advantage."
      ]
    }
  ], []);

  // Simple dropdown click handler - no image transitions
  const handleDropdownClick = useCallback((index: number) => {
    // Toggle dropdown
    setOpenDropdown(openDropdown === index ? -1 : index);
    
    // Update selected service for styling purposes
    if (index !== selectedService) {
      setSelectedService(index);
    }
  }, [selectedService, openDropdown]);

  return (
    <section className="w-full min-h-fit md:min-h-screen relative bg-[#0C002B] flex items-center justify-center overflow-hidden py-12 md:py-0">
      {/* Simple Decorative Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient accents - no blur for performance */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-[#FFB400] opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-[#16a34a] opacity-5 rounded-full"></div>
      </div>

      {/* Background images with simple fade transition */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-transparent">
        {/* Desktop only: All background images with simple fade */}
        <div className="hidden md:block">
          {services.map((service, index) => (
            <div 
              key={index}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{
                opacity: selectedService === index ? 0.2 : 0,
                pointerEvents: 'none'
              }}
            >
              <Image 
                src={service.backgroundImage}
                alt={`${service.title} background`}
                className="w-full h-full object-cover object-center"
                width={1920}
                height={1080}
                priority={index === 0}
                quality={60}
                sizes="100vw"
                placeholder="empty"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Centered Main Heading with Decorative Elements */}
        <div className="text-center mb-12 md:mb-16 pt-8 md:pt-12">
          <div className="inline-block relative">
            {/* Simple decorative line on top */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-[#FFB400]"></div>
            
            <h2 className="text-white font-nunito text-[28px] md:text-[48px] font-bold leading-[36px] md:leading-[56px] tracking-tight">
              Expert <span className="text-[#FFB400]">IPR Solutions</span>
              <br className="hidden md:block" />
              <span className="text-[24px] md:text-[40px] font-semibold">for Your Brand Protection</span>
            </h2>
            
            {/* Simple decorative line on bottom */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-[#16a34a]"></div>
          </div>
          
          <p className="text-white/70 font-nunito text-[14px] md:text-[16px] mt-6 max-w-2xl mx-auto">
            Seamless protection powered by AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Side - Dropdown Section */}
          <div className="space-y-6 md:space-y-8">

            {/* Explore Services Section */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center space-x-3">
                <div className="h-1 w-12 bg-[#FFB400] rounded-full"></div>
                <h3 className="text-white font-nunito text-[18px] md:text-[32px] font-bold leading-[24px] md:leading-[38px]">
                  Explore Our Services
                </h3>
              </div>

              {/* Service Dropdowns */}
              <div className="space-y-4 md:space-y-5">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative overflow-hidden rounded-xl bg-black/20 border border-white/10 transition-all duration-300 group-hover:border-white/20"
                      style={{
                        backgroundColor: 'rgba(23, 23, 23, 0.5)',
                      }}
                    >
                      {/* Simple top border accent */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          backgroundColor: service.accentColor
                        }}
                      ></div>

                      {/* Dropdown Header */}
                      <button
                        onClick={() => handleDropdownClick(index)}
                        className="w-full p-4 md:p-6 flex items-center justify-between text-left transition-all duration-300"
                      >
                        <div className="flex items-start space-x-3 md:space-x-5 flex-1">
                          {/* Icon with solid background */}
                          <div className="flex-shrink-0">
                            <div 
                              className="w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300"
                              style={{
                                backgroundColor: service.accentColor
                              }}
                            >
                              <i className={`fas ${service.icon} text-white text-[16px] md:text-[24px]`}></i>
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="flex-1 min-w-0">
                            <div 
                              className="font-nunito text-[16px] md:text-[22px] font-semibold mb-1 transition-colors duration-300"
                              style={{
                                color: hoveredIndex === index ? service.accentColor : 'white'
                              }}
                            >
                              {service.title}
                            </div>
                            <div className="text-white/70 font-nunito text-[12px] md:text-[14px] font-normal leading-relaxed line-clamp-2">
                              {service.subtitle}
                            </div>
                          </div>
                        </div>
                        
                        {/* Arrow Icon */}
                        <div className="flex-shrink-0 ml-3">
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center transform transition-all duration-300 ${openDropdown === index ? 'rotate-180' : ''} group-hover:bg-white/10`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </button>

                      {/* Dropdown Content */}
                      <div className={`overflow-hidden transition-all duration-500 ${openDropdown === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-4 md:px-6 pb-5 md:pb-6 space-y-2 md:space-y-3 border-t border-white/10">
                          <div className="h-3"></div>
                          {service.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-2 md:space-x-3">
                              {/* Check Icon */}
                              <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                                <div className="w-full h-full rounded-full flex items-center justify-center" style={{backgroundColor: '#16a34a'}}>
                                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              </div>
                              <span className="text-white/80 font-nunito text-[12px] md:text-[15px] font-normal leading-relaxed flex-1">
                                {item}
                              </span>
                            </div>
                          ))}
                          
                          {/* Learn More Button */}
                          <div className="mt-4 pt-3 border-t border-white/10">
                            <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                              <div 
                                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-80"
                                style={{
                                  backgroundColor: `${service.accentColor}15`
                                }}
                              >
                                <span className="font-nunito font-semibold text-[13px] md:text-[15px]" style={{color: service.accentColor}}>
                                  Learn More
                                </span>
                                <i className="fas fa-arrow-right text-[11px] md:text-[13px]" style={{color: service.accentColor}}></i>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Additional Content Space */}
         
        </div>
      </div>
    </section>
  );
}
