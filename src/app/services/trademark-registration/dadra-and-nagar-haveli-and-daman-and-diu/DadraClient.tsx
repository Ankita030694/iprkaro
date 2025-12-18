'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DadraClient() {
  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <div className="pb-16 pt-[180px]" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <section className="mb-6">
            <div className="flex items-center gap-2 text-sm text-white/80 font-nunito">
              <Link href="/" className="hover:text-[#FFB703] transition-colors">
                <i className="fas fa-home" aria-hidden="true"></i>
              </Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <Link href="/services" className="hover:text-[#FFB703] transition-colors">Services</Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <Link href="/services/trademark-registration" className="hover:text-[#FFB703] transition-colors">Trademark Services</Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-medium">Dadra and Nagar Haveli and Daman and Diu</span>
            </div>
          </section>

          <section className="mb-8">
            <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Trademark Registration in Dadra and Nagar Haveli and Daman and Diu
            </h1>
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Secure your brand in Dadra and Nagar Haveli and Daman and Diu. With Silvassa and Daman as industrial hubs, trademark registration is crucial for businesses in the manufacturing, textiles, and electronics sectors.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Expert Trademark Services</h2>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Our team provides comprehensive support for trademark registration, including search, filing, and objection handling. Protect your intellectual property and establish a strong brand presence in the Union Territory.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <div className="p-8 rounded-xl text-center" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '2px solid rgba(255, 183, 3, 0.3)' }}>
              <h3 className="text-white text-2xl font-bold mb-4">Start Your Registration Process</h3>
              <Link href="/contact" className="inline-block px-8 py-3 rounded-lg font-bold text-[#0C002B]" style={{ background: '#FFB703' }}>Contact Us</Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
