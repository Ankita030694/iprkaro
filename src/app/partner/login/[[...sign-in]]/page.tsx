'use client';

import { SignIn } from '@clerk/nextjs';

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

        {/* Clerk Sign In Component */}
        <div className="flex justify-center">
          <SignIn
            appearance={{
              elements: {
                rootBox: 'mx-auto',
                card: 'bg-white shadow-2xl',
                headerTitle: 'font-nunito',
                headerSubtitle: 'font-nunito',
                formButtonPrimary: 'bg-[#FFB703] hover:bg-[#FFB703]/90 text-[#0C002B] font-nunito font-semibold',
                formFieldLabel: 'font-nunito',
                formFieldInput: 'font-nunito',
                identityPreviewText: 'font-nunito',
                identityPreviewEditButton: 'font-nunito'
              }
            }}
            redirectUrl="/partners/searchResults"
          />
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

