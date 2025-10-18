'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactFormPopup from './ContactFormPopup';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isTrademarkSubmenuOpen, setIsTrademarkSubmenuOpen] = useState(false);
  const [isCopyrightSubmenuOpen, setIsCopyrightSubmenuOpen] = useState(false);
  const [isPatentSubmenuOpen, setIsPatentSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const trademarkServices = [
    { name: 'Trademark Search & Availability Check', href: '/form' },
    { name: 'Trademark Filing / Registration', href: '/services/trademark-registration' },
    { name: 'Trademark Renewal & Restoration', href: '/services/trademark/renewal' },
    { name: 'Trademark Opposition & Counter-Statement', href: '/services/trademark/opposition' },
    { name: 'Trademark Objection Reply Drafting', href: '/services/trademark/objection' },
    { name: 'Trademark Watch / Monitoring Services', href: '/services/trademark/watch' },
    { name: 'Trademark Assignment & Licensing', href: '/services/trademark/assignment' },
    { name: 'Trademark Rectification / Removal', href: '/services/trademark/rectification' },
  ];

  const copyrightServices = [
    { name: 'Copyright Registration (Artistic, Literary, Musical, Software, Film)', href: '/services/copyright-protection' },
    { name: 'Copyright Transfer / Assignment Agreements', href: '/services/copyright/transfer' },
    { name: 'Infringement Notice Drafting & Legal Action', href: '/services/copyright/infringement' },
    { name: 'Software Code Copyright & Protection', href: '/services/copyright/software' },
    { name: 'Copyright Renewal / Update Services', href: '/services/copyright/renewal' },
  ];

  const patentServices = [
    { name: 'Patent Search & Novelty Check (Prior Art Search)', href: '/services/patent-services' },
    { name: 'Provisional & Complete Patent Drafting and Filing', href: '/services/patent/filing' },
    { name: 'Patent Opposition & Revocation', href: '/services/patent/opposition' },
    { name: 'Patent Renewal & Maintenance', href: '/services/patent/renewal' },
    { name: 'Patent Licensing & Commercialization Support', href: '/services/patent/licensing' },
  ];

  const services = [
    { name: 'Trademark', href: '/services/trademark-registration', hasSubmenu: true, submenuType: 'trademark' },
    { name: 'Copyright', href: '/services/copyright-protection', hasSubmenu: true, submenuType: 'copyright' },
    { name: 'Patent', href: '/services/patent-services', hasSubmenu: true, submenuType: 'patent' },
    { name: 'AI Trademark Search', href: '/form' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full h-[100px] bg-[#0C002B]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.1)] flex items-center justify-between px-4 md:px-20 z-[100]">
        {/* Logo */}
        <Link href="/">
        <div className="w-12 h-9 md:w-16 md:h-12 flex-shrink-0">
          <Image
            src="/logo/iprlogo.svg"
            alt="IPR Karo Logo"
            width={64}
            height={48}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-col items-center justify-center gap-[15px] flex-1 h-[47px]">
          <div className="flex items-center gap-[50px]">
            <Link href="/">
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                Home
                <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>  
              </div>
            </Link>
            <Link href="/about"> 
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                About Us
                <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link href="/services"> 
                <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300 flex items-center gap-1">
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
              {/* Services Dropdown */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-64">
                  <div className="bg-[#0C002B]/95 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-lg shadow-lg overflow-visible">
                  {services.map((service, index) => (
                    <div key={index} className="relative">
                      {service.hasSubmenu ? (
                        <div 
                          className="relative group/submenu"
                          onMouseEnter={() => {
                            if (service.submenuType === 'trademark') setIsTrademarkSubmenuOpen(true);
                            if (service.submenuType === 'copyright') setIsCopyrightSubmenuOpen(true);
                            if (service.submenuType === 'patent') setIsPatentSubmenuOpen(true);
                          }}
                          onMouseLeave={() => {
                            if (service.submenuType === 'trademark') setIsTrademarkSubmenuOpen(false);
                            if (service.submenuType === 'copyright') setIsCopyrightSubmenuOpen(false);
                            if (service.submenuType === 'patent') setIsPatentSubmenuOpen(false);
                          }}
                        >
                          <Link href={service.href}>
                            <div className="px-4 py-3 text-white text-[15px] hover:bg-[#ffb703]/20 hover:text-[#ffb703] transition-all duration-300 cursor-pointer border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                              {service.name}
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                          {/* Submenu */}
                          {((service.submenuType === 'trademark' && isTrademarkSubmenuOpen) ||
                            (service.submenuType === 'copyright' && isCopyrightSubmenuOpen) ||
                            (service.submenuType === 'patent' && isPatentSubmenuOpen)) && (
                            <div className="absolute left-full top-0 ml-1 w-72 bg-[#0C002B]/95 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-lg shadow-lg overflow-hidden z-10">
                              {(service.submenuType === 'trademark' ? trademarkServices :
                                service.submenuType === 'copyright' ? copyrightServices :
                                patentServices).map((subService, subIndex) => (
                                <Link key={subIndex} href={subService.href}>
                                  <div className="px-4 py-3 text-white text-[14px] hover:bg-[#ffb703]/20 hover:text-[#ffb703] transition-all duration-300 cursor-pointer border-b border-[rgba(255,255,255,0.05)] last:border-b-0">
                                    {subService.name}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link href={service.href}>
                          <div className="px-4 py-3 text-white text-[15px] hover:bg-[#ffb703]/20 hover:text-[#ffb703] transition-all duration-300 cursor-pointer border-b border-[rgba(255,255,255,0.05)] last:border-b-0">
                            {service.name}
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/blog "> 
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                Blogs
                <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          
            
            <Link href="/contact"> 
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                Contact Us
                <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Desktop Sign Up Button */}
        <div 
          onClick={() => setIsContactFormOpen(true)}
          className="hidden md:inline-flex px-2 py-[4px] justify-center items-center gap-[10px] bg-transparent w-[110px] h-[40px] cursor-pointer transition-all duration-300 relative group"
          style={{
            border: "2px solid transparent",
            borderRadius: "20px",
            borderImage: "linear-gradient(to right, #FFFFFF 0%, #8A38F5 49%, #FFB703 88%) 1",
            borderImageSlice: 1,
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude"
          }}>
          <span className="text-white text-[17px] font-normal leading-[17px] group-hover:text-[#FFB703] transition-colors duration-300">Sign Up</span>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none group z-[110] relative bg-white/20 rounded-md border border-white/30"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Horizontal Gradient Menu Overlay */}
      <div className={`fixed inset-0 z-[90] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>
        
        {/* Full Screen Gradient Container */}
        <div 
          className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-8 scale-95'}`}
          style={{
            background: 'linear-gradient(90deg, #0C002B 2.05%, rgba(12, 0, 43, 0.99) 43.55%, rgba(12, 0, 43, 0.55) 100%)',
            backdropFilter: 'blur(3.1500000953674316px)'
          }}
        >
          {/* Mobile Navigation Links */}
          <div className="flex flex-col justify-start items-start h-full px-8 pt-32 pb-8 space-y-8 overflow-y-auto">
            {/* Main Navigation Links (matching desktop) */}
            <div className="space-y-10 text-left">
              <Link href="/" onClick={closeMobileMenu}>
                <div 
                  className="cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 mb-3"
                  style={{
                    color: 'rgba(255, 255, 255, 0.60)',
                    fontFamily: 'Nunito',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '40px'
                  }}
                >
                  Home
                </div>
              </Link>
               
              <Link href="/about" onClick={closeMobileMenu}> 
                <div 
                  className="cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 mb-3"
                  style={{
                    color: 'rgba(255, 255, 255, 0.60)',
                    fontFamily: 'Nunito',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '40px'
                  }}
                >
                  About Us
                </div>
              </Link>
               
              <Link href="/blog" onClick={closeMobileMenu}> 
                <div 
                  className="cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 mb-3"
                  style={{
                    color: 'rgba(255, 255, 255, 0.60)',
                    fontFamily: 'Nunito',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '40px'
                  }}
                >
                  Blogs
                </div>
              </Link>
              
              {/* Services with Dropdown for Mobile */}
              <div>
                <div 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 mb-3 flex items-center gap-2"
                  style={{
                    color: 'rgba(255, 255, 255, 0.60)',
                    fontFamily: 'Nunito',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '40px'
                  }}
                >
                  Services
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {isServicesOpen && (
                  <div className="ml-6 space-y-4 mb-6">
                    {services.map((service, index) => (
                      <div key={index}>
                        {service.hasSubmenu ? (
                          <div>
                            <div 
                              onClick={() => {
                                if (service.submenuType === 'trademark') setIsTrademarkSubmenuOpen(!isTrademarkSubmenuOpen);
                                if (service.submenuType === 'copyright') setIsCopyrightSubmenuOpen(!isCopyrightSubmenuOpen);
                                if (service.submenuType === 'patent') setIsPatentSubmenuOpen(!isPatentSubmenuOpen);
                              }}
                              className="cursor-pointer hover:text-[#ffb703] transition-all duration-300 flex items-center gap-2"
                              style={{
                                color: 'rgba(255, 255, 255, 0.50)',
                                fontFamily: 'Nunito',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '32px'
                              }}
                            >
                              {service.name}
                              <svg 
                                className={`w-5 h-5 transition-transform duration-300 ${
                                  (service.submenuType === 'trademark' && isTrademarkSubmenuOpen) ||
                                  (service.submenuType === 'copyright' && isCopyrightSubmenuOpen) ||
                                  (service.submenuType === 'patent' && isPatentSubmenuOpen) ? 'rotate-180' : ''
                                }`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            {((service.submenuType === 'trademark' && isTrademarkSubmenuOpen) ||
                              (service.submenuType === 'copyright' && isCopyrightSubmenuOpen) ||
                              (service.submenuType === 'patent' && isPatentSubmenuOpen)) && (
                              <div className="ml-6 mt-3 space-y-3">
                                {(service.submenuType === 'trademark' ? trademarkServices :
                                  service.submenuType === 'copyright' ? copyrightServices :
                                  patentServices).map((subService, subIndex) => (
                                  <Link key={subIndex} href={subService.href} onClick={closeMobileMenu}>
                                    <div 
                                      className="cursor-pointer hover:text-[#ffb703] transition-all duration-300"
                                      style={{
                                        color: 'rgba(255, 255, 255, 0.40)',
                                        fontFamily: 'Nunito',
                                        fontSize: '22px',
                                        fontStyle: 'normal',
                                        fontWeight: '300',
                                        lineHeight: '28px'
                                      }}
                                    >
                                      {subService.name}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link href={service.href} onClick={closeMobileMenu}>
                            <div 
                              className="cursor-pointer hover:text-[#ffb703] transition-all duration-300"
                              style={{
                                color: 'rgba(255, 255, 255, 0.50)',
                                fontFamily: 'Nunito',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '32px'
                              }}
                            >
                              {service.name}
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            
              <Link href="/contact" onClick={closeMobileMenu}> 
                <div 
                  className="cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 mb-3"
                  style={{
                    color: 'rgba(255, 255, 255, 0.60)',
                    fontFamily: 'Nunito',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '40px'
                  }}
                >
                  Contact Us
                </div>
              </Link>
            </div>

            {/* Faded Line Divider */}
            <div className="w-1/2 h-1 bg-gradient-to-r from-white to-transparent rounded-full"></div>

            {/* Secondary Links */}
            <div className="space-y-6 text-left">
              <Link href="/terms-and-conditions" onClick={closeMobileMenu}>
                <div className="text-white text-lg font-normal cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300"
                 style={{
                  color: 'rgba(255, 255, 255, 0.60)',
                  fontFamily: 'Nunito',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '200',
                  lineHeight: '40px'
                }}>
                  Terms of Services
                </div>
              </Link>
              <Link href="/privacy-policy" onClick={closeMobileMenu}>
                <div className="text-white text-lg font-normal cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300"
                 style={{
                  color: 'rgba(255, 255, 255, 0.60)',
                  fontFamily: 'Nunito',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '200',
                  lineHeight: '40px'
                }}>
                  Privacy Policy
                </div>
              </Link>
              <Link href="/trademark-registration-guide" onClick={closeMobileMenu}>
                <div className="text-white text-lg font-normal cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300"
                 style={{
                  color: 'rgba(255, 255, 255, 0.60)',
                  fontFamily: 'Nunito',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '200',
                  lineHeight: '40px'
                }}>
                   Trademark Registration Guide
                </div>
              </Link>
            </div>
            

            {/* Sign Up Button for Mobile */}
            <div 
              onClick={() => {
                closeMobileMenu();
                setIsContactFormOpen(true);
              }}
              className="inline-flex px-4 py-2 justify-center items-center gap-2 bg-transparent cursor-pointer transition-all duration-300 relative group"
              style={{
                border: "2px solid transparent",
                borderRadius: "20px",
                borderImage: "linear-gradient(to right, #FFFFFF 0%, #8A38F5 49%, #FFB703 88%) 1",
                borderImageSlice: 1,
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude"
              }}>
              <span className="text-white text-base font-normal group-hover:text-[#FFB703] transition-colors duration-300">Sign Up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Popup */}
      <ContactFormPopup 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
}
