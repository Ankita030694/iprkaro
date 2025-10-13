import dynamic from 'next/dynamic';
import Image from 'next/image';

const SearchClient = dynamic(() => import('./SearchClient'));
const ClientLogoSlider = dynamic(() => import('./ClientLogoSlider'));

export default function HeroSection() {
  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col rounded-b-[40px]">
      {/* Background using linear gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
        }}
      />
    
      {/* Main Content Section - Responsive Layout - Reserve space for logo slider */}
      <div className="flex flex-col lg:flex-row w-full z-[60] px-4 lg:px-0 pt-16 lg:pt-28" style={{ height: 'calc(100vh - 100px)' }}>
        {/* Mobile Layout - Centered Content */}
        <div className="flex flex-col justify-start items-center w-full h-full lg:hidden pt-20">
          <div className="flex flex-col items-center gap-2 text-center max-w-sm">
            {/* Main Heading */}
            <h1 className="text-[#F8F9FA] font-nunito text-[20px] font-bold leading-[26px]">
            Trademark Registration Made Easy: Fast, Accurate, and Powered by AI <span className="animated-gradient text-[20px] font-bold">- Start in 60 Seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[rgba(255,255,255,0.77)] font-nunito text-[11px] font-normal leading-[13px]">
              AI-powered search, risk check & filing all in one place. Protect your brand name
              in minutes with iprkaro.com.
            </p>

            {/* Search Bar */}
            <div className="w-full mt-2">
              <SearchClient />
            </div>

            {/* Underhero Image - Mobile Only */}
            <div className="w-full mt-3 flex justify-center">
              <Image
                src="/underhero.svg"
                alt="Underhero"
                className="w-full max-w-[300px] object-contain"
                width={600}
                height={600}
                priority
                quality={100}
                style={{
                  imageRendering: 'auto',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-3/5 flex-col justify-center items-start pl-20">
          <div className="flex flex-col items-start gap-3 text-left">
            {/* Main Heading */}
            <h1 className="w-full text-[#F8F9FA] font-nunito text-[32px] font-bold leading-[40px]">
            Trademark Registration Made Easy: Fast, Accurate, and Powered by AI <span className="animated-gradient text-[32px] font-bold">- Start in 60 Seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="w-full text-[rgba(255,255,255,0.77)] font-nunito text-[13px] font-normal leading-[15.6px] max-w-lg">
            AI-powered reports ensure your trademark is unique and legally secure before you apply.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full mt-3">
            <SearchClient />
          </div>
        </div>

        {/* Middle Container - Empty space (hidden on mobile) */}
        <div className="hidden lg:block w-1/4"></div>

        {/* Right Container - Hero Dashboard Image (hidden on mobile) */}
        <div className="hidden lg:flex w-200 justify-end items-center pr-0">
          <div className="relative">
            <img
              src="/figmacomp/herodash.svg"
              alt="Hero Dashboard"
              className="h-[400px] w-auto object-contain -mt-5"
              loading="lazy"
              decoding="async"
              style={{
                imageRendering: 'auto',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Logo Slider at the bottom - Fixed height */}
      <div className="w-full z-[60] h-[100px] flex items-center mt-10">
        <ClientLogoSlider />
      </div>
    </section>
  );
}