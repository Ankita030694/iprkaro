import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navbar, Footer, CitiesAndTerritories } from "@/components";
import ConditionalLayout from "./ConditionalLayout";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iprkaro.com'),
  title: "Trademark Registration India | IPR Karo",
  description: "Instant trademark search, risk checks, and online registration. Register your trademark with AI-powered reports for fast, secure brand protection. Start in under 60 seconds with IPR Karo.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPR Karo",
    "url": "https://iprkaro.com",
    "logo": "https://iprkaro.com/logo/iprlogo.svg",
    "description": "Turn Ideas Into Assets - IPR Karo. AI-powered trademark registration, patent services, and copyright protection in India.",
    "sameAs": [
      "https://www.linkedin.com/company/iprkaro/",
      "https://www.instagram.com/iprkaro",
      "https://www.facebook.com/profile.php?id=61580675227718"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  return (
    <html lang="en">
      <head>
      
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7DNEQJ9TBP"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7DNEQJ9TBP');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1641589187020786');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1641589187020786&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased overflow-x-hidden`}
      >
        <div className="w-full">
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <WhatsAppWidget />
        </div>
      </body>
    </html>
  );
}

// Force new deployment: 2026-01-12 10:48 AM
