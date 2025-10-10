'use client';

import { SimplePlans, Faq } from "@/components";
import Link from "next/link";
import dynamic from 'next/dynamic';

const SearchClient = dynamic(() => import('@/components/SearchClient'));

// Create a Services Hero Component similar to HeroSection
function ServicesHeroSection() {
  return (
    <section className="w-full min-h-[110vh] relative overflow-hidden flex flex-col justify-center items-center pt-16 md:pt-0 pb-16 md:pb-24 mt-15">
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

      {/* Unified Hero and Services Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 md:px-8 mt-6 md:mt-20 mb-8 md:mb-12">
        <div 
          className="p-6 md:p-12 lg:p-16"
          style={{
            borderRadius: '28px',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.45)',
            boxShadow: '0 0 24px 0 rgba(255, 255, 255, 0.28) inset, 0 8px 32px 0 rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {/* Our Services Heading */}
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4">
              Our Services
            </h1>
            <p className="text-[rgba(255,255,255,0.85)] font-nunito text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
              Comprehensive intellectual property solutions powered by AI and backed by expert legal guidance. From trademarks to patents, we protect what matters most to your business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full flex justify-center mb-10 md:mb-14">
            <div className="w-full max-w-2xl">
              <SearchClient />
            </div>
          </div>

          {/* Elegant Divider */}
          <div className="relative w-full h-px mb-10 md:mb-14">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFB703] to-transparent opacity-20 blur-sm"></div>
          </div>

          {/* Three Service Containers */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {/* Service 1 - Trademark Registration */}
              <div
                className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '20px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(23.16px)',
                  WebkitBackdropFilter: 'blur(23.16px)'
                }}
              >
                <div className="mb-3">
                  <h3 className="text-white font-nunito text-lg font-bold mb-2 text-center">
                    Trademark Registration
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '58px' }}></div>
                <div className="pt-6 text-left">
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
                className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '20px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(23.16px)',
                  WebkitBackdropFilter: 'blur(23.16px)'
                }}
              >
                <div className="mb-3">
                  <h3 className="text-white font-nunito text-lg font-bold mb-2 text-center">
                    Copyright Protection
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '58px' }}></div>
                <div className="pt-6 text-left">
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
                className="p-3 md:p-6 text-center space-y-3 md:space-y-5 relative group transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '20px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(23.16px)',
                  WebkitBackdropFilter: 'blur(23.16px)'
                }}
              >
                <div className="mb-3">
                  <h3 className="text-white font-nunito text-lg font-bold mb-2 text-center">
                    Patent Services
                  </h3>
                </div>
                <div className="absolute left-0 right-0 h-px bg-white" style={{ top: '58px' }}></div>
                <div className="pt-6 text-left">
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
