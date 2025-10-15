'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactFormPopup from './ContactFormPopup';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
            <Link href="/services"> 
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                Services
                <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
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
          <div className="flex flex-col justify-start items-start h-full px-8 pt-32 space-y-8">
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
              <Link href="/services" onClick={closeMobileMenu}> 
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
                  Services
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
