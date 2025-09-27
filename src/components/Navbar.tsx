'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-[100px] bg-[rgba(32,32,32,0.1)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.1)] flex items-center justify-between px-4 md:px-20 z-[100]">
        {/* Logo */}
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-col items-center justify-center gap-[15px] flex-1 h-[47px]">
          <div className="flex items-center gap-[50px]">
            <Link href="/">
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                Home
                <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>  
              </div>
            </Link>
            <Link href="/services"> 
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                Services
                <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            <Link href="/blog"> 
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                Blogs
                <div className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-[60px] h-0.5 bg-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            <Link href="/about"> 
              <div className="text-white text-[17px] font-normal leading-normal cursor-pointer relative group hover:text-[#ffb703] transition-colors duration-300">
                About Us
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
        <div className="hidden md:inline-flex px-2 py-[4px] justify-center items-center gap-[10px] bg-transparent w-[110px] h-[40px] cursor-pointer transition-all duration-300 relative group"
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
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none group"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Glass Morphism Menu Overlay */}
      <div className={`fixed inset-0 z-[90] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>
        
        {/* Glass Container */}
        <div className={`absolute top-[100px] left-4 right-4 mx-auto max-w-sm transform transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-8 scale-95'}`}>
          <div 
            className="bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] rounded-2xl p-6 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '0 25px 45px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {/* Mobile Navigation Links */}
            <div className="space-y-6">
              <Link href="/" onClick={closeMobileMenu}>
                <div className="text-white text-lg font-normal cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 py-2 border-b border-[rgba(255,255,255,0.1)] last:border-b-0">
                  <i className="fas fa-home mr-3 text-[#ffb703]"></i>
                  Home
                </div>
              </Link>
              <Link href="/services" onClick={closeMobileMenu}> 
                <div className="text-white text-lg font-normal cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 py-2 border-b border-[rgba(255,255,255,0.1)] last:border-b-0">
                  <i className="fas fa-cogs mr-3 text-[#ffb703]"></i>
                  Services
                </div>
              </Link>
              <Link href="/blog" onClick={closeMobileMenu}> 
                <div className="text-white text-lg font-normal cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 py-2 border-b border-[rgba(255,255,255,0.1)] last:border-b-0">
                  <i className="fas fa-blog mr-3 text-[#ffb703]"></i>
                  Blogs
                </div>
              </Link>
              <Link href="/about" onClick={closeMobileMenu}> 
                <div className="text-white text-lg font-normal cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 py-2 border-b border-[rgba(255,255,255,0.1)] last:border-b-0">
                  <i className="fas fa-info-circle mr-3 text-[#ffb703]"></i>
                  About Us
                </div>
              </Link>
              <Link href="/contact" onClick={closeMobileMenu}> 
                <div className="text-white text-lg font-normal cursor-pointer relative group hover:text-[#ffb703] transition-all duration-300 py-2 border-b border-[rgba(255,255,255,0.1)] last:border-b-0">
                  <i className="fas fa-envelope mr-3 text-[#ffb703]"></i>
                  Contact Us
                </div>
              </Link>
              
              {/* Mobile Sign Up Button */}
              <div className="pt-4">
                <div
                  className="inline-flex px-4 py-3 justify-center items-center gap-2 bg-transparent w-full h-12 cursor-pointer transition-all duration-300 relative group rounded-xl"
                  style={{
                    border: "2px solid transparent",
                    borderImage: "linear-gradient(to right, #FFFFFF 0%, #8A38F5 49%, #FFB703 88%) 1",
                    borderImageSlice: 1,
                    background: 'linear-gradient(135deg, rgba(255,183,3,0.1) 0%, rgba(138,56,245,0.1) 100%)'
                  }}
                >
                  <i className="fas fa-user-plus mr-2 text-[#FFB703]"></i>
                  <span className="text-white text-lg font-normal group-hover:text-[#FFB703] transition-colors duration-300">Sign Up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
