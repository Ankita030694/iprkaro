import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navbar, Footer, CitiesAndTerritories } from "@/components";
import ConditionalLayout from "./ConditionalLayout";
import { Analytics } from "@vercel/analytics/next"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

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
    "url": "https://www.iprkaro.com",
    "logo": "https://www.iprkaro.com/logo/iprlogo.svg",
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
        {/* Critical preconnects — exactly 4, highest impact origins */}
        <link rel="preconnect" href="https://iprkaro-729d3.firebaseapp.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />

        {/* DNS-prefetch fallbacks for lower-priority 3rd parties */}
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://apis.google.com" />
        <link rel="dns-prefetch" href="https://mpc-prod-23-s6uit34pua-ue.a.run.app" />

        {/* Preload critical self-hosted Aileron fonts — eliminates fonts.cdnfonts.com round-trip */}
        <link rel="preload" href="/fonts/aileron/Aileron-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/aileron/Aileron-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />

        {/* Preload LCP video — browser hints to start fetching early */}
        <link rel="preload" href="/hero/bg.mp4" as="video" type="video/mp4" />

        {/* Font Awesome CSS — dynamically injected after page idle to avoid render-blocking */}
        <Script id="fa-css-loader" strategy="lazyOnload">
          {`
            var l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            l.integrity = 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==';
            l.crossOrigin = 'anonymous';
            document.head.appendChild(l);
          `}
        </Script>
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google Analytics — lazyOnload defers until page is idle (non-blocking) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7DNEQJ9TBP"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7DNEQJ9TBP');
          `}
        </Script>

        {/* Meta Pixel — lazyOnload so it never blocks FCP/LCP */}
        <Script
          id="fb-pixel"
          strategy="lazyOnload"
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
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased overflow-x-hidden`}
      >
        <div className="w-full">
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

// Force new deployment: 2026-01-12 10:48 AM
