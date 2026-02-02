'use client';



export default function PartnerLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c002b] via-[#190a3c] to-[#0c002b] px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <img 
              src="/logo/iprlogo.svg" 
              alt="IPR Karo Logo" 
              className="h-20 w-20 mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-white font-nunito mb-2">
            Partner Portal
          </h1>
        </div>

        {/* Status Message (Clerk Auth Removed) */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center w-full">
            <i className="fas fa-shield-halved text-4xl text-[#FFB703] mb-4"></i>
            <h2 className="text-xl font-bold text-white mb-2">Service Update</h2>
            <p className="text-white/70 text-sm font-nunito">
              Authentication is currently disabled for indexing improvements.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="mt-6 px-6 py-2 bg-[#FFB703] text-[#0C002B] rounded-full font-bold text-sm transition-transform hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-xs font-nunito">
            Need access? Contact your administrator
          </p>
        </div>
      </div>

      {/* FontAwesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <style jsx global>{`
        .cl-socialButtons,
        .cl-socialButtons__action,
        .cl-socialButtonsIconButton,
        .cl-socialButtonsBlockButton,
        .cl-dividerText,
        .cl-dividerLine,
        .cl-divider,
        .cl-footer,
        .cl-footerAction,
        .cl-footerActionLink {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

