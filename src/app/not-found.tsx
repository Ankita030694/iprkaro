import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden mt-20" style={{ backgroundColor: '#0C002B' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full blur-[3rem]" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[4rem]" style={{ background: 'linear-gradient(45deg, #FFB70310, transparent)' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 
            className="text-[120px] md:text-[180px] font-bold font-nunito leading-none"
            style={{
              background: 'linear-gradient(135deg, #FFB703 0%, #FFA000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(255, 183, 3, 0.3)'
            }}
          >
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
              boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
              backdropFilter: 'blur(87.876px)',
              border: '1px solid rgba(255, 183, 3, 0.2)'
            }}
          >
            <i className="fas fa-exclamation-triangle text-[#FFB703] text-4xl md:text-5xl"></i>
          </div>
        </div>

        {/* Error Message */}
        <div 
          className="mb-8 p-6 md:p-8 rounded-[14.4px]"
          style={{
            background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
            boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
            backdropFilter: 'blur(87.876px)',
            border: '1px solid rgba(255, 183, 3, 0.2)'
          }}
        >
          <h2 className="text-white font-nunito text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-white/80 font-nunito text-base md:text-lg font-medium leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            It might have been deleted, renamed, or the URL might be incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="group relative px-8 py-4 rounded-lg font-nunito font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #FFB703, #FFA000)',
              color: '#0C002B',
              boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)'
            }}
          >
            <i className="fas fa-home mr-2"></i>
            Go to Homepage
          </Link>

          <Link 
            href="/our-services/trademark-registration"
            className="group relative px-8 py-4 rounded-lg font-nunito font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center hover:bg-[rgba(255,183,3,0.1)]"
            style={{
              background: 'transparent',
              border: '2px solid #FFB703',
              color: '#FFB703',
            }}
          >
            <i className="fas fa-search mr-2"></i>
            Search Trademark
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 font-nunito text-sm mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/about-us" 
              className="text-white/70 hover:text-[#FFB703] font-nunito text-sm transition-colors duration-300"
            >
              About Us
            </Link>
            <span className="text-white/30">•</span>
            <Link 
              href="/resources" 
              className="text-white/70 hover:text-[#FFB703] font-nunito text-sm transition-colors duration-300"
            >
              Resources
            </Link>
            <span className="text-white/30">•</span>
            <Link 
              href="/contact-us" 
              className="text-white/70 hover:text-[#FFB703] font-nunito text-sm transition-colors duration-300"
            >
              Contact
            </Link>
            <span className="text-white/30">•</span>
            <Link 
              href="/our-services/trademark-registration"  
              className="text-white/70 hover:text-[#FFB703] font-nunito text-sm transition-colors duration-300"
            >
              Services
            </Link>
          </div>
        </div>
      </div>

      {/* FontAwesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}

