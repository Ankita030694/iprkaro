'use client';

import { SimplePlans, Faq } from "@/components";
import Image from 'next/image';
import Link from "next/link";

// Create a Services Hero Component similar to HeroSection
function ServicesHeroSection() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center pt-20 md:pt-0">
      {/* Background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130), #ffffff)',
          backgroundSize: '120% 120%',
          backgroundPosition: '10% 0%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Main Content Container with Glassmorphism */}
      <div className="relative z-10 w-full mx-auto px-4 md:px-30 mt-8 md:mt-30">
          <div 
            className="p-4 md:p-12"
            style={{
              borderRadius: '20px',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)',
              boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
              backdropFilter: 'blur(31.7px)',
              WebkitBackdropFilter: 'blur(31.7px)'
            }}
          >
            {/* Section Header */}
            <div className="text-left mb-8 md:mb-12">
              <h1 className="text-white font-nunito text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Our Services
              </h1>
              <p className="text-white font-nunito text-base md:text-xl max-w-3xl">
                Comprehensive intellectual property solutions powered by AI technology and expert legal guidance
              </p>
            </div>

            {/* Three Service Containers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
              {/* Service 1 - Trademark Registration */}
              <div
                className="p-4 md:p-8 text-center space-y-4 md:space-y-6 relative group transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(28.95px)',
                  WebkitBackdropFilter: 'blur(28.95px)'
                }}
              >
                <div className="mb-4">
                  <h3 className="text-white font-nunito text-xl font-bold mb-2 text-center">
                    Trademark Registration
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '72px' }}></div>
                <div className="pt-8 text-left">
                  <p className="text-white font-nunito text-sm leading-relaxed">
                    <span className="font-semibold">How can I register a trademark online with AI?</span><br />
                    Use our AI-powered trademark search to instantly check name availability, assess risks, and get fast filing support. Easily register your trademark online and safeguard your brand’s identity with expert guidance every step of the way.
                  </p>
                </div>
                <Link href="/services/trademark-registration">
                <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                    Learn More →
                  </span>
                </p>
                </Link>
              </div>

              {/* Service 2 - Copyright Protection */}
              <div
                className="p-4 md:p-8 text-center space-y-4 md:space-y-6 relative group transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(28.95px)',
                  WebkitBackdropFilter: 'blur(28.95px)'
                }}
              >
                <div className="mb-4">
                  <h3 className="text-white font-nunito text-xl font-bold mb-2 text-center">
                    Copyright Protection
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '72px' }}></div>
                <div className="pt-8 text-left">
                  <p className="text-white font-nunito text-sm leading-relaxed">
                    <span className="font-semibold">How does copyright protection work at IPR Karo?</span><br />
                    Secure your art, music, software, and content through fast online copyright registration. Our platform and legal experts ensure full control and ownership rights, using AI to detect infringement and keep your creations protected.
                  </p>
                </div>
                <Link href="/services/copyright-protection">
                <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                    Learn More →
                  </span>
                </p>
                </Link>
              </div>

              {/* Service 3 - Patent Services */}
              <div
                className="p-4 md:p-8 text-center space-y-4 md:space-y-6 relative group transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '25px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(28.95px)',
                  WebkitBackdropFilter: 'blur(28.95px)'
                }}
              >
                <div className="mb-4">
                  <h3 className="text-white font-nunito text-xl font-bold mb-2 text-center">
                    Patent Services
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '72px' }}></div>
                <div className="pt-8 text-left">
                  <p className="text-white font-nunito text-sm leading-relaxed">
                    <span className="font-semibold">How do I get patent protection for my invention?</span><br />
                    From filing to legal action, our patent services leverage AI for prior art search and efficient patent drafting. Get step-by-step support to defend your unique ideas, technologies, and maintain your competitive edge.
                  </p>
                </div>
                <Link href="/services/patent-services">
                <p className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-medium">
                    Learn More →
                  </span>
                </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <SimplePlans />
      <Faq />
    </>
  );
}
