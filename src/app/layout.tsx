import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navbar, Footer, CitiesAndTerritories } from "@/components";

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
  title: "Trademark Registration India | IPR Karo",
  description: "Instant trademark search, risk checks, and online registration. Register your trademark with AI-powered reports for fast, secure brand protection. Start in under 60 seconds with IPR Karo.",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
