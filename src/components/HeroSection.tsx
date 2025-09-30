import dynamic from 'next/dynamic';

const SearchClient = dynamic(() => import('./SearchClient'));
const ClientLogoSlider = dynamic(() => import('./ClientLogoSlider'));

export default function HeroSection() {
  return (
    <section className="w-full h-screen relative overflow-hidden flex flex-col justify-center items-center rounded-b-[40px]">
      {/* Background using linear gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #FFFFFF 100%)'
        }}
      />
    
      {/* Main Content Section - Responsive Layout */}
      <div className="flex flex-col lg:flex-row w-full h-full z-[60] px-4 lg:px-0">
        {/* Mobile Layout - Centered Content */}
        <div className="flex flex-col justify-center items-center w-full h-full lg:hidden pt-[50px]">
          <div className="flex flex-col items-center gap-4 text-center max-w-sm">
            {/* Main Heading */}
            <h1 className="text-[#F8F9FA] font-nunito text-[24px] font-bold leading-[30px]">
            How to Register a Trademark? Start Online with Smart AI Search Reports – <span className="animated-gradient text-[24px] font-bold">Start in 60 Seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[rgba(255,255,255,0.77)] font-nunito text-[12px] font-normal leading-[14px]">
              AI-powered search, risk check & filing – all in one place. Protect your brand name
              in minutes with iprkaro.com.
            </p>

            {/* Search Bar */}
            <div className="w-full mt-4">
              <SearchClient />
            </div>

            {/* Underhero Image - Mobile Only */}
            <div className="w-full mt-6 flex justify-center">
              <img
                src="/underhero.svg"
                alt="Underhero"
                className="w-full max-w-sm object-contain"
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

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-3/5 flex-col justify-center items-start pl-20">
          <div className="flex flex-col items-start gap-5 text-left">
            {/* Main Heading */}
            <h1 className="w-full text-[#F8F9FA] font-nunito text-[40px] font-bold leading-[50px]">
            Trademark Registration Made Easy: Fast, Accurate, and Powered by AI – <span className="animated-gradient text-[40px] font-bold">Start in 60 Seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="w-full text-[rgba(255,255,255,0.77)] font-nunito text-[13px] font-normal leading-[15.6px] max-w-lg">
            AI-powered reports ensure your trademark is unique and legally secure before you apply.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full mt-6">
            <SearchClient />
          </div>
        </div>

        {/* Middle Container - Empty space (hidden on mobile) */}
        <div className="hidden lg:block w-1/4"></div>

        {/* Right Container - Hero Dashboard Image (hidden on mobile) */}
        <div className="hidden lg:flex w-1/3 justify-end items-center pr-0">
          <div className="relative">
            <img
              src="/figmacomp/herodash.svg"
              alt="Hero Dashboard"
              className="h-[570px] w-auto object-contain"
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
      
      <ClientLogoSlider />
    </section>
  );
}