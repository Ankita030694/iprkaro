'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/about-us' },
    { name: 'What We Protect', href: '/our-services' },
    { name: 'Learn', href: '/resources' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-6'}`}>
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <nav className="bg-[#05030E]/90 backdrop-blur-md border border-white/10 rounded-[15px] md:rounded-[12px] px-6 py-3 md:py-2 flex items-center justify-between shadow-2xl">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-8 md:w-12 md:h-10 overflow-hidden">
                <Image
                  src="/logo/iprlogo.svg"
                  alt="IPR Karo Logo"
                  fill
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-white/80 hover:text-white text-[14px] md:text-base font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-[#05030E] px-4 md:px-6 py-1.5 rounded-[10px] text-[12px] md:text-[14px] lg:text-base font-bold hover:bg-gray-100 transition-all duration-200 shadow-xl active:scale-95 whitespace-nowrap"
              >
                Get in Touch
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[110]"
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#05030E]/95 backdrop-blur-xl flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center gap-8 w-full max-w-xs">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white text-3xl font-semibold transition-all duration-500 delay-[${index * 100}ms] ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mt-4 w-full flex justify-center bg-white text-[#05030E] py-4 rounded-2xl text-xl font-bold transition-all duration-500 delay-400 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
