'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center py-8 mt-20"
      style={{
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130),rgb(91, 88, 88))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
        {/* Glassmorphism Container */}
        <div
          className="rounded-xl p-6 sm:p-8 text-center"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
            boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
            backdropFilter: 'blur(31.7px)',
            WebkitBackdropFilter: 'blur(31.7px)'
          }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src="/logo/iprlogo.svg"
                alt="IPR Karo Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Success Icon */}
          <div className="mb-3">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#FFB703]">
              <i className="fas fa-check text-[#0C002B] text-3xl sm:text-4xl" aria-hidden="true"></i>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-nunito text-2xl sm:text-3xl font-bold text-white mb-2">
            Thank You!
          </h1>

          {/* Subheading */}
          <h2 className="font-nunito text-lg sm:text-xl font-normal text-[#FFB703] mb-4">
            Your Message Has Been Received
          </h2>

          {/* Message */}
          <p className="text-white/90 font-nunito text-sm sm:text-base mb-5 max-w-xl mx-auto leading-relaxed">
            We appreciate you reaching out to IPR Karo. Our team of trademark experts will review your inquiry and get back to you within 2-4 hours during business hours.
          </p>

          {/* Additional Info */}
          <div className="bg-white/10 rounded-lg p-4 mb-5">
            <h3 className="text-white font-nunito text-base sm:text-lg font-semibold mb-2">
              What Happens Next?
            </h3>
            <ul className="text-white/80 font-nunito text-xs sm:text-sm space-y-1.5 text-left max-w-md mx-auto">
              <li className="flex items-start gap-2">
                <i className="fas fa-circle-check text-[#FFB703] mt-0.5 flex-shrink-0 text-sm"></i>
                <span>Our IP expert will review your requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-circle-check text-[#FFB703] mt-0.5 flex-shrink-0 text-sm"></i>
                <span>You'll receive a personalized consultation plan</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-circle-check text-[#FFB703] mt-0.5 flex-shrink-0 text-sm"></i>
                <span>We'll guide you through the trademark registration process</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <p className="text-white/70 font-nunito text-xs sm:text-sm mb-5">
            Need immediate assistance? Email us at{' '}
            <a 
              href="mailto:info@iprkaro.com" 
              className="text-[#FFB703] underline hover:text-[#e6a602] transition-colors"
            >
              info@iprkaro.com
            </a>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#FFB703] hover:bg-[#e6a602] transition-colors cursor-pointer"
            >
              <span className="text-[#0C002B] font-nunito text-sm sm:text-base font-medium">
                Back to Home
              </span>
            </Link>
            
            <Link
              href="/services/trademark-registration"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border-2 border-white/30 hover:border-white/50 transition-colors cursor-pointer"
            >
              <span className="text-white font-nunito text-sm sm:text-base font-medium">
                Learn About Our Services
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

