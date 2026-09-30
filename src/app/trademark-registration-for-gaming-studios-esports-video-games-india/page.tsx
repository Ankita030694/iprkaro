import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faScaleBalanced,
    faTable,
    faCheckCircle,
    faExclamationTriangle,
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faCheck,
    faPhone,
    faGavel,
    faStamp,
    faBan,
    faGamepad,
    faTrophy,
    faLaptopCode,
    faMobileScreenButton,
    faCloud,
    faCoins,
    faShirt
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark for Gaming Studios & Esports in India",
    description: validateAndNormalizeDescription(
        "Protect video games, gaming studio brand & esports team logos in India. Complete guide to Classes 9, 41, 28 & 25, app store takedowns, and IP defenses.",
        "app/trademark-registration-for-gaming-studios-esports-video-games-india/page.tsx"
    ),
    keywords: [
        "trademark registration for gaming studios esports teams and video games in india",
        "how to trademark video game title in india",
        "esports clan name trademark protection",
        "trademark class for mobile games and in-game assets",
        "class 9 28 41 gaming trademark",
        "game character copyright vs trademark india",
        "google play store trademark infringement takedown",
        "esports team jersey class 25 brand registration",
        "game engine saas class 42 trademark",
        "in game currency virtual goods trademark"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-for-gaming-studios-esports-video-games-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark for Gaming Studios & Esports in India",
        description: "Protect video games, gaming studio brand & esports team logos in India. Complete guide to Classes 9, 41, 28 & 25, app store takedowns, and IP defenses.",
        url: "https://www.iprkaro.com/trademark-registration-for-gaming-studios-esports-video-games-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-registration-for-gaming-studios-esports-video-games-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Registration for Gaming Studios, Esports Clans & Video Games in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark for Gaming Studios & Esports in India",
        description: "Protect video games, gaming studio brand & esports team logos in India. Complete guide to Classes 9, 41, 28 & 25, app store takedowns, and IP defenses.",
        images: ["https://www.iprkaro.com/images/og/trademark-registration-for-gaming-studios-esports-video-games-india.png"],
    }
};

const faqs = [
    {
        question: "Which trademark classes are essential for video games and mobile game developers in India?",
        answer: "A complete gaming trademark strategy spans five core classes: Class 9 (Downloadable video game software, mobile games, console ROMs, VR/AR software, and downloadable in-game assets), Class 41 (Providing online non-downloadable games, esports tournament organization, game streaming, and clan management), Class 42 (Game engine SaaS, cloud server matchmaking hosting, and anti-cheat infrastructure), Class 28 (Gaming consoles, arcade machines, physical controllers, and action figures), and Class 25 (Esports jerseys, team hoodies, caps, and branded merchandise)."
    },
    {
        question: "Can I trademark an individual video game title or mobile game app name?",
        answer: "Yes. An individual video game title (e.g., 'Battlelands', 'Shadow Blade', 'Ludo Empire') can be registered as a word mark in Class 9 and Class 41, provided the title is arbitrary, suggestive, or coined. Generic descriptive titles like '3D Car Racing' or 'Cricket 2026' face refusal under Section 9(1)(b) unless accompanied by a stylized logo device mark."
    },
    {
        question: "How do I protect esports clan names, guild tags, and gaming streamer logos?",
        answer: "Esports organizations and clan owners must register their team name, clan tag, and team crest across Class 41 (Esports competitive teams, entertainment, and tournament participation), Class 25 (Branded jerseys, apparel, and footwear), and Class 35 (Sponsorship management, merchandise advertising, and influencer talent representation). Registering through an incorporated entity (LLP or Pvt Ltd) prevents co-founder and player roster disputes."
    },
    {
        question: "What is the legal difference between trademark and copyright protection for video games?",
        answer: "Copyright automatically protects the creative expression — including underlying source code, 2D/3D graphics, character art meshes, animations, background music (OST), and storyline script under the Copyright Act, 1957. Trademark protects commercial brand identifiers — such as the game title, studio name, character names, guild logos, and in-game currencies against consumer confusion, copycat apps, and trademark passing off on app stores."
    },
    {
        question: "How does trademark registration help remove clone apps from Google Play and Apple App Store?",
        answer: "A registered trademark certificate under Section 23 serves as conclusive proof of ownership on Google Play Console and Apple App Store IP Grievance Portals. App stores immediately execute expedited takedowns of unauthorized clone games, fake APK distributors, and deceptive title copycats without requiring prolonged court litigation."
    },
    {
        question: "Can iconic video game characters, avatars, and in-game virtual currencies be trademarked?",
        answer: "Yes. Iconic game characters (such as distinctive mascots, hero silhouettes, and villain names) can be registered as both word marks and device marks in Class 9 and Class 41. Similarly, proprietary in-game virtual currencies, gems, and token names can be protected in Class 9 (digital virtual assets) and Class 36 (virtual currency services)."
    },
    {
        question: "Can a gaming studio or indie game developer claim the 50% government fee concession?",
        answer: "Yes. Indie game developers filing as individuals, or gaming startups holding DPIIT Startup Recognition or a valid Udyam MSME Certificate, qualify for a 50% statutory fee discount, paying an official fee of ₹4,500 per class (e-filing) instead of the standard ₹9,000 corporate fee."
    },
    {
        question: "How do I avoid descriptive trademark objections under Section 9 for game titles?",
        answer: "To bypass Section 9(1)(b) objections, adopt fanciful or coined words (e.g., 'Rovio', 'Krafton', 'Zynga'), combine arbitrary words, or design a highly distinctive graphical logo device mark with unique typography and visual mascots. If filing after game launch, submit a Rule 25(2) User Affidavit with download metrics, Play Store revenue receipts, and YouTube stream analytics."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "gaming-ip-landscape", title: "The Gaming & Esports IP Landscape" },
    { id: "what-to-protect", title: "The 6-Pillar Gaming Brand Moat" },
    { id: "multi-class-strategy", title: "Multi-Class: 9, 41, 28, 25 & 42" },
    { id: "tm-vs-copyright", title: "Trademark vs Copyright Overlap" },
    { id: "app-store-takedowns", title: "Play Store & App Store Takedowns" },
    { id: "esports-roster-merch", title: "Esports Rosters & Merchandising" },
    { id: "startup-fee-concessions", title: "MSME & Startup 50% Concession" },
    { id: "overcoming-objections", title: "Overcoming Section 9 & 11 Issues" },
    { id: "asset-classification-matrix", title: "Gaming Asset IP Matrix" },
    { id: "step-by-step-process", title: "Step-by-Step Filing Workflow" },
    { id: "faqs", title: "FAQs" },
    { id: "scaling-gaming-ip", title: "Scaling Game Studios & Global IP" },
];

export default function GamingStudiosEsportsTrademarkPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Trademark Registration for Gaming Studios, Esports Clans & Video Games in India",
        "description": "Protect video games, gaming studio brand & esports team logos in India. Complete guide to Classes 9, 41, 28 & 25, app store takedowns, and IP defenses.",
        "image": "https://www.iprkaro.com/images/og/trademark-registration-for-gaming-studios-esports-video-games-india.png",
        "datePublished": "2026-09-30T10:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": {
            "@type": "Person",
            "name": "Rahul Roy",
            "url": "https://www.iprkaro.com/about-us",
            "image": "https://www.iprkaro.com/images/author/rahul-roy.jpg"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-registration-for-gaming-studios-esports-video-games-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark for Gaming Studios & Esports in India",
        "url": "https://www.iprkaro.com/trademark-registration-for-gaming-studios-esports-video-games-india",
        "description": "Protect video games, gaming studio brand & esports team logos in India. Complete guide to Classes 9, 41, 28 & 25, app store takedowns, and IP defenses.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-registration-for-gaming-studios-esports-video-games-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-registration-for-gaming-studios-esports-video-games-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Gaming & Esports Trademark Guide", "item": "https://www.iprkaro.com/trademark-registration-for-gaming-studios-esports-video-games-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Comprehensive Trademark Protection Framework for Gaming Studios & Esports in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Multi-Platform Clearance Search on IP India Public Search, Google Play Console, and App Store" },
            { "@type": "ListItem", "position": 2, "name": "Structure Cross-Class Protection across Classes 9 (Game Software), 41 (Esports & Streaming), 28 (Hardware/Toys), 25 (Merch), & 42 (SaaS Engines)" },
            { "@type": "ListItem", "position": 3, "name": "Claim 50% Official Fee Concession via DPIIT Startup or Udyam MSME Registration (₹4,500 vs ₹9,000)" },
            { "@type": "ListItem", "position": 4, "name": "File Form TM-A with Precise Specifications for Mobile Games, Virtual Assets, and Cloud Matchmaking" },
            { "@type": "ListItem", "position": 5, "name": "Submit Rule 25(2) Prior User Affidavit backed by Steam/App Store Launch Timestamps, In-App Purchase Receipts, and DAU Metrics" },
            { "@type": "ListItem", "position": 6, "name": "Overcome Section 9(1)(b) Descriptive Gaming Terms and Section 11 Prior Similar Titles" },
            { "@type": "ListItem", "position": 7, "name": "Secure Registration Certificate and Deploy for Rapid App Store Takedowns & John Doe Anti-Piracy Injunctions" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-200 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faGamepad} className="w-3.5 h-3.5 text-indigo-700 mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-indigo-800 uppercase">Gaming &amp; Esports Intellectual Property</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Registration for <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Gaming Studios, Esports Clans &amp; Video Games</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                India&apos;s digital gaming and esports industry is exploding. From indie mobile game studios and AAA console developers to competitive esports clans, tournament leagues, and gaming creators, securing comprehensive trademark rights across<strong>Class 9 (Game Software &amp; Apps)</strong>,<strong>Class 41 (Esports, Tournaments &amp; Streaming)</strong>,<strong>Class 28 (Gaming Hardware &amp; Toys)</strong>, and<strong>Class 25 (Esports Apparel &amp; Merch)</strong>is vital to defending your game titles, character assets, and team identities against copycats and rogue APK clone distributors.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Gaming &amp; Tech IP Specialist</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 Updated 30-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 16 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🎮 Multi-Class Gaming Defense</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Protect Game Brand Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-indigo-400" />
                                    Gaming IP Helpline: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-registration-for-gaming-studios-esports-video-games-india.png"
                                    alt="Trademark Registration for Gaming Studios Esports Clans and Video Games in India"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Gaming & Esports Trademark Registration", href: "/trademark-registration-for-gaming-studios-esports-video-games-india" }
                    ]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        <main className="min-w-0">
                            {/* MOBILE TABLE OF CONTENTS */}
                            <div className="lg:hidden mb-6 not-prose">
                                <details className="group bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 border border-indigo-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-indigo-50/40 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <div>
                                                <span className="text-sm font-bold text-gray-900 block">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Topics)</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:hidden">
                                                Tap to Expand
                                            </span>
                                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full hidden group-open:inline-block">
                                                Close
                                            </span>
                                            <svg className="w-4 h-4 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </summary>
                                    <div className="p-3.5 pt-2 border-t border-indigo-100 bg-white/70">
                                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {tocSections.map((section, idx) => (
                                                <a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                >
                                                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-900 flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span>
                                                    <span className="truncate">{section.title}</span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </details>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                                    <div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose">
                                        <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 m-0">Written by <Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Gaming, Web3 &amp; Esports IP Counsel</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGamepad} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Gaming &amp; Esports Trademark Law
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Trademark registration for gaming studios, esports clans, and video game titles in India requires a multi-class architecture spanning Class 9 (Downloadable video game software, mobile apps, and digital assets) and Class 41 (Esports tournament organizing, live gaming streaming, and online non-downloadable gaming services), supported by Class 28 (Gaming hardware &amp; toys), Class 25 (Esports jerseys &amp; merchandise), and Class 42 (Game engines &amp; cloud server SaaS). A registered trademark certificate serves as the primary legal instrument to execute fast-track app takedowns on Google Play Store, Apple App Store, and Steam.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            India has rapidly become one of the world&apos;s fastest-growing mobile gaming and esports ecosystems, boasting over 500 million active gamers. However, with massive player monetization and multi-million-dollar publisher valuations comes rampant intellectual property infringement: <strong>clone mobile games, rip-off APK files, stolen character assets, and counterfeit esports clan merchandise</strong>.
                                        </p>
                                        <p className="mb-6">
                                            While copyright protects the underlying source code and visual illustrations, only a registered trademark under the Trade Marks Act, 1999 gives game developers exclusive statutory ownership over titles, logos, clan tags, and character brands. It provides the legal weapon needed to instantly delist clone apps from app stores and obtain John Doe (Ashok Kumar) injunctions in Indian High Courts.
                                        </p>
                                        <p className="mb-6">
                                            Explore how trademark law intersects with tech and media in our specialized guides on <Link href="/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for mobile app names</Link>, <Link href="/can-you-trademark-book-title-movie-name-character-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademarking characters and entertainment titles</Link>, and <Link href="/trademark-for-saas-product" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for SaaS and software</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: THE GAMING & ESPORTS IP LANDSCAPE */}
                                    <section id="gaming-ip-landscape" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-indigo-700" />
                                            The Gaming &amp; Esports IP Threat Landscape
                                        </h2>
                                        <p className="mb-6">
                                            The video game industry operates across complex digital distribution networks, exposing developers and esports organizations to five severe commercial vulnerabilities:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border-l-4 border-indigo-600 pl-5 py-3 bg-indigo-50/50 rounded-r-2xl border border-gray-100">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Lookalike App Store Clone Games</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Rogue studios monitor trending indie games and publish copycat titles with nearly identical names and app icons on Google Play and Apple App Store within days of launch, siphoning organic player installs and ad revenue.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-purple-600 pl-5 py-3 bg-purple-50/50 rounded-r-2xl border border-gray-100">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Unofficial Modded APK Mirrors</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Third-party APK repositories host cracked, modded game clients using the authentic studio logo, injecting malware and damaging player trust and brand integrity.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-rose-600 pl-5 py-3 bg-rose-50/50 rounded-r-2xl border border-gray-100">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Esports Clan Squatting &amp; Roster Breakups</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    When esports teams qualify for national tournaments without formal trademark registration, departing players or rival managers often attempt to register the clan tag, triggering catastrophic ownership litigation.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-amber-600 pl-5 py-3 bg-amber-50/50 rounded-r-2xl border border-gray-100">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Counterfeit Esports Apparel &amp; Merch</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Unlicensed e-commerce vendors print bootleg esports jerseys, hoodies, and gaming mousepads using team logos on Amazon, Flipkart, and Meesho.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: THE 6-PILLAR GAMING BRAND MOAT */}
                                    <section id="what-to-protect" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTrophy} className="w-8 h-8 mr-3 text-amber-500" />
                                            The 6-Pillar Gaming Brand Moat
                                        </h2>
                                        <p className="mb-6">
                                            A sophisticated gaming intellectual property portfolio covers six distinct commercial assets:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3 font-black text-sm">1</div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Studio / Publisher Brand</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    The overarching corporate identity (e.g., Krafton, Supercell, Nazara) registered as a word mark and logo in Classes 9, 41, and 42 across all gaming publishing pipelines.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3 font-black text-sm">2</div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Individual Game Titles</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Specific video game names and franchise titles (e.g., &apos;Battlegrounds&apos;, &apos;Raji: An Ancient Epic&apos;) protected in Class 9 and Class 41 before public Beta launch.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 mr-3 font-black text-sm">3</div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Esports Clan &amp; Guild Logos</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Esports organization names, acronyms, clan tags, and crests protected in Class 41 (Tournaments) and Class 25 (Apparel) to secure sponsorship deals.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-700 mr-3 font-black text-sm">4</div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Iconic Characters &amp; Mascots</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Hero silhouettes, distinctive character names, and 3D avatar designs registered as Device Marks in Class 9 and Class 28 (Action figures &amp; toys).
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mr-3 font-black text-sm">5</div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">In-Game Currencies &amp; Assets</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Proprietary virtual currency names, gems, skins, and digital battle pass brands registered under Class 9 and Class 36 to prevent black-market coin fraud.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mr-3 font-black text-sm">6</div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Tournament &amp; League Brands</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Esports championship titles, seasonal premier leagues, and LAN tournament series protected in Class 41 and Class 35 for broadcast licensing.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: MULTI-CLASS STRATEGY */}
                                    <section id="multi-class-strategy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Multi-Class Strategy: Classes 9, 41, 28, 25 &amp; 42
                                        </h2>
                                        <p className="mb-6">
                                            Under the International Nice Classification system, gaming covers software, streaming entertainment, physical hardware, and lifestyle apparel:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-indigo-50/70 p-6 rounded-2xl border border-indigo-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-800 mr-3">
                                                        <FontAwesomeIcon icon={faMobileScreenButton} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 9: Video Game Software &amp; Apps</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Mandatory core class for all developers. Covers downloadable mobile game software, PC/console executables, VR/AR gaming applications, downloadable game patches, and digital virtual items.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-indigo-900 border border-indigo-200">
                                                    Mandatory for: All Game Developers &amp; Mobile Publishers
                                                </div>
                                            </div>

                                            <div className="bg-purple-50/70 p-6 rounded-2xl border border-purple-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faGamepad} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 41: Esports &amp; Online Gaming</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers providing non-downloadable online video games, conducting esports competitions, live gaming streaming, clan entertainment services, and gaming broadcast production.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-[#6E5E93] border border-purple-200">
                                                    Mandatory for: Esports Clans, Leagues &amp; Cloud Game Hosts
                                                </div>
                                            </div>

                                            <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 mr-3">
                                                        <FontAwesomeIcon icon={faGamepad} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 28: Hardware, Toys &amp; Collectibles</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers arcade game machines, video game consoles, physical controllers, gaming joysticks, board games, and collectible action figures based on video game characters.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-amber-900 border border-amber-200">
                                                    Mandatory for: Physical Merchandising &amp; Toy Licensing
                                                </div>
                                            </div>

                                            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mr-3">
                                                        <FontAwesomeIcon icon={faShirt} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 25: Esports Jerseys &amp; Apparel</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers esports team jerseys, gaming hoodies, caps, t-shirts, jackets, and lifestyle footwear sold under the team or game brand.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-emerald-800 border border-emerald-200">
                                                    Mandatory for: Esports Teams &amp; Gaming Lifestyle Brands
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-4">
                                            Additionally, studios developing proprietary game engines, matchmaking cloud servers, and anti-cheat middleware should file in <strong>Class 42 (Software as a Service &amp; Cloud Hosting)</strong>, while those managing creator sponsorships and in-game ad networks should secure <strong>Class 35 (Advertising &amp; Sponsorship Management)</strong>.
                                        </p>
                                    </section>

                                    {/* SECTION 5: TRADEMARK VS COPYRIGHT OVERLAP */}
                                    <section id="tm-vs-copyright" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark vs Copyright Overlap in Gaming
                                        </h2>
                                        <p className="mb-6">
                                            Game developers often ask whether copyright alone is sufficient. The answer is an emphatic NO. Both IP rights perform distinct and complementary protective functions:
                                        </p>

                                        <div className="overflow-x-auto my-6 not-prose">
                                            <table className="min-w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm text-xs">
                                                <thead className="bg-[#1A1A24] text-white">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Protection Parameter</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Copyright (Copyright Act, 1957)</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Trademark (Trade Marks Act, 1999)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Protected Subject Matter</td>
                                                        <td className="py-3 px-4">Source code, 3D character mesh, music/OST, voiceovers, background art, script</td>
                                                        <td className="py-3 px-4 font-bold text-[#6E5E93]">Game title, studio logo, character names, clan crest, virtual currency</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">App Store Clone Takedowns</td>
                                                        <td className="py-3 px-4">Slow; requires proving literal code or artwork theft</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">Instant; automated takedown for deceptive title or icon similarity</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Merchandising &amp; Licensing</td>
                                                        <td className="py-3 px-4">Protects static artwork reproduction</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">Protects commercial brand rights on apparel, toys, and sponsor deals</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Duration of Monopoly</td>
                                                        <td className="py-3 px-4">Author&apos;s life + 60 years (finite term)</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">10 years, renewable perpetually every 10 years forever</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-4">
                                            Read our comprehensive analysis on <Link href="/difference-between-trademark-copyright-and-patent-protection-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark vs copyright difference in India</Link> and <Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark vs device mark strategy</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 6: PLAY STORE & APP STORE TAKEDOWNS */}
                                    <section id="app-store-takedowns" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-red-600" />
                                            Play Store &amp; App Store Takedown Procedures
                                        </h2>
                                        <p className="mb-6">
                                            When a clone game launches on Google Play or Apple App Store, time is of the essence. Holding a registered trademark number or certificate unlocks fast-track administrative delisting:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Google Play Store IP Infringement Portal</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                                    Submit an official complaint through the Google Play Trademark Removal Form citing your Indian Trademark Registration Number in Class 9. Google algorithms and human compliance teams verify the certificate and delist the infringing clone within 24 to 72 hours.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Apple App Store Content Dispute Portal</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                                    File a formal grievance via Apple Legal Dispute Management. Apple notifies the infringing developer to provide proof of license within a strict deadline; failure to produce a valid license results in immediate app delisting across all global store regions.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">High Court John Doe (Ashok Kumar) Injunctions</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                                    For widespread modded APK syndicates and private cheat servers operating on rogue domains, gaming studios can file an omnibus suit in Indian High Courts obtaining dynamic John Doe orders directing Department of Telecommunications (DoT) and Internet Service Providers (ISPs) to block hundreds of pirate mirror URLs simultaneously.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: ESPORTS ROSTERS & MERCHANDISING */}
                                    <section id="esports-roster-merch" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTrophy} className="w-8 h-8 mr-3 text-indigo-700" />
                                            Esports Rosters &amp; Merchandising Contracts
                                        </h2>
                                        <p className="mb-6">
                                            In esports, roster volatility is extremely high. Players frequently switch organizations between competitive seasons. Structuring bulletproof IP contracts is vital:
                                        </p>

                                        <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200 my-6 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-3">Key Legal Safeguards for Esports Organizations:</h3>
                                            <ul className="space-y-2 text-xs text-gray-700 leading-relaxed list-disc pl-4">
                                                <li><strong>Entity-Level TM Ownership:</strong> Never register the team trademark in an individual gamer&apos;s or streamer&apos;s personal name. Register exclusively under the organization&apos;s Private Limited or LLP entity.</li>
                                                <li><strong>Player Contract Assignment Clauses:</strong> Ensure player contracts explicitly stipulate that in-game handles used under team branding remain the property of the organization during tournament participation.</li>
                                                <li><strong>Merchandising Licensing under Section 49:</strong> When partnering with apparel manufacturers or energy drink sponsors, execute formal Registered User agreements on Form TM-U to safeguard brand title.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 8: 50% STARTUP / MSME CONCESSION */}
                                    <section id="startup-fee-concessions" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCoins} className="w-8 h-8 mr-3 text-emerald-600" />
                                            Government Fees &amp; 50% Startup Subsidy
                                        </h2>
                                        <p className="mb-6">
                                            Indian trademark filing fees offer substantial statutory concessions for early-stage game studios and indie developers:
                                        </p>

                                        <div className="overflow-x-auto my-6 not-prose">
                                            <table className="min-w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm text-xs">
                                                <thead className="bg-[#1A1A24] text-white">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Applicant Status</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Official E-Filing Fee</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Eligibility Proof</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Indie Developer (Individual)</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">₹4,500 per class</td>
                                                        <td className="py-3 px-4">PAN Card / Aadhaar</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">DPIIT Recognized Gaming Startup</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">₹4,500 per class</td>
                                                        <td className="py-3 px-4">DPIIT Startup Recognition Certificate</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Udyam Registered MSME Studio</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">₹4,500 per class</td>
                                                        <td className="py-3 px-4">Udyam Registration Certificate</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Large Gaming Corporation (Non-MSME)</td>
                                                        <td className="py-3 px-4">₹9,000 per class</td>
                                                        <td className="py-3 px-4">Certificate of Incorporation</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-4">
                                            For a gaming studio protecting its brand across 4 key classes (9, 41, 28, 25), holding an MSME Udyam certificate cuts official filing costs from ₹36,000 down to ₹18,000.
                                        </p>
                                    </section>

                                    {/* SECTION 9: OVERCOMING SECTION 9 & 11 OBJECTIONS */}
                                    <section id="overcoming-objections" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Overcoming Section 9 &amp; 11 Objections
                                        </h2>
                                        <p className="mb-6">
                                            Gaming trademark applications frequently encounter examination objections from the Trade Marks Registry:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Handling Section 9(1)(b) Descriptive Gaming Terms</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                    Words like &apos;Sniper&apos;, &apos;Racing&apos;, &apos;Cricket&apos;, &apos;Ludo&apos;, or &apos;Battle&apos; directly describe game genres. To overcome objections:
                                                </p>
                                                <ul className="space-y-1.5 text-xs text-gray-700">
                                                    <li className="flex items-start"><span className="text-[#6E5E93] mr-2 font-bold">&bull;</span> <strong>Composite Device Marks:</strong> Combine the genre term with a distinctive coined word and unique 3D game logo styling.</li>
                                                    <li className="flex items-start"><span className="text-[#6E5E93] mr-2 font-bold">&bull;</span> <strong>Acquired Distinctiveness:</strong> If the game has already amassed millions of downloads, file a Rule 25(2) User Affidavit with Google Play Console download reports, press releases, and esports tournament viewership statistics.</li>
                                                </ul>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Handling Section 11(1) Prior Similar Titles</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                    If the examiner cites an existing registered mark in Class 9 or Class 41:
                                                </p>
                                                <ul className="space-y-1.5 text-xs text-gray-700">
                                                    <li className="flex items-start"><span className="text-[#6E5E93] mr-2 font-bold">&bull;</span> <strong>Specification Restriction:</strong> Narrow the description of goods from broad &apos;computer software&apos; to &apos;mobile electronic video games specifically in the tactical shooter genre&apos;.</li>
                                                    <li className="flex items-start"><span className="text-[#6E5E93] mr-2 font-bold">&bull;</span> <strong>Non-Use Rectification:</strong> If the cited mark has remained unutilized on commercial app stores for over 5 years, file a cancellation petition under Section 47.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: GAMING ASSET IP MATRIX */}
                                    <section id="asset-classification-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Gaming Asset IP Classification Matrix
                                        </h2>
                                        <p className="mb-6">
                                            Quick reference guide to classifying and registering gaming brand assets:
                                        </p>

                                        <div className="overflow-x-auto my-6 not-prose">
                                            <table className="min-w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm text-xs">
                                                <thead className="bg-[#1A1A24] text-white">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Asset Type</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Primary Class</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Recommended TM Type</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Enforcement Scope</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Game Studio Brand</td>
                                                        <td className="py-3 px-4">Class 9, 41, 42</td>
                                                        <td className="py-3 px-4">Word Mark + Device Logo</td>
                                                        <td className="py-3 px-4 font-semibold text-[#6E5E93]">Company-wide publishing title</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Video Game Title</td>
                                                        <td className="py-3 px-4">Class 9 &amp; Class 41</td>
                                                        <td className="py-3 px-4">Word Mark + App Icon Device</td>
                                                        <td className="py-3 px-4 font-semibold text-[#6E5E93]">Play Store &amp; App Store clone takedowns</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Esports Clan &amp; Tag</td>
                                                        <td className="py-3 px-4">Class 41 &amp; Class 25</td>
                                                        <td className="py-3 px-4">Device Crest + Word Mark</td>
                                                        <td className="py-3 px-4 font-semibold text-[#6E5E93]">Tournament entry &amp; Jersey merch</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Game Mascots &amp; Avatars</td>
                                                        <td className="py-3 px-4">Class 9 &amp; Class 28</td>
                                                        <td className="py-3 px-4">Device Mark (Artwork)</td>
                                                        <td className="py-3 px-4 font-semibold text-[#6E5E93]">Action figures &amp; Spin-off media</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">In-Game Currencies</td>
                                                        <td className="py-3 px-4">Class 9 &amp; Class 36</td>
                                                        <td className="py-3 px-4">Word Mark</td>
                                                        <td className="py-3 px-4 font-semibold text-[#6E5E93]">Virtual asset black-market defense</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: STEP-BY-STEP FILING WORKFLOW */}
                                    <section id="step-by-step-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Filing Workflow
                                        </h2>
                                        <p className="mb-6">
                                            Executing an airtight gaming trademark application in India follows six statutory phases:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Cross-Class Availability &amp; App Store Search</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Search IP India database across Classes 9, 41, 28, and 25. Concurrently conduct phonetic and visual audits on Google Play, Steam, and Apple App Store to avoid naming collisions.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Drafting Tailored Goods &amp; Services Descriptions</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Draft specific gaming specifications avoiding overly broad boilerplate text to prevent unnecessary Section 11 similarity citations with enterprise enterprise software.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Form TM-A Filing with MSME Claim</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Submit Form TM-A on the IP India portal. Attach Udyam MSME certificate to claim the 50% government fee concession (₹4,500/class). If claiming prior use, attach a Rule 25(2) User Affidavit.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Examination Report Defense</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Respond to statutory examination reports within 30 days, filing legal replies asserting distinctiveness, anti-dissection doctrine, and specialized gaming trade channels.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Journal Publication &amp; Opposition Monitoring</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        The mark is advertised in the Trade Marks Journal for 4 months. Maintain active IP watch services to detect competitor bad-faith oppositions.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">6</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Registration Certificate &amp; App Store Deployment</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Receive Form RG-2 Registration Certificate. Register brand credentials on Google Play Brand Registry, Steam Partner portal, and Apple IP dispute channels.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6 not-prose">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 13: SCALING GAMING IP */}
                                    <section id="scaling-gaming-ip" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-indigo-500" />
                                            Scaling Gaming Studios &amp; Global IP Strategy
                                        </h2>
                                        <p className="mb-6">
                                            As Indian gaming studios scale globally, filing international trademark applications via the Madrid Protocol (managed by WIPO) becomes essential. Securing your base registration in India allows seamless extension into North America, Southeast Asia, Europe, and the Middle East under a single international application.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, institutional venture capital investors in the gaming ecosystem conduct deep IP audits before Series A and B funding rounds. Clear legal title across game titles, character assets, and clan identities maximizes studio valuation and unlocks global publishing distribution partnerships. Review our guides on <Link href="/how-to-file-international-trademark-madrid-protocol-from-india" className="text-[rgb(110,94,147)] hover:underline font-medium">international trademark registration under Madrid Protocol</Link>, <Link href="/trademark-valuation-methods-for-startups-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark valuation for tech startups</Link>, and <Link href="/reclaim-squatted-social-media-username-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">reclaiming squatted social media and gaming handles</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Elite Gaming &amp; Esports IP Protection
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Video Game &amp; Esports Brand
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Lock in exclusive trademark rights across Classes 9, 41, 28 &amp; 25. Shield your games from app store clones, protect clan tags, and scale enterprise valuation.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult Gaming IP Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Specialized Gaming IP Counsel • App Store Clone Takedowns • 50% MSME Subsidy • Pan-India
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-4 sticky top-24">
                            {/* About Author */}
                            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-16 h-16 rounded-full mb-2.5 shadow-md object-cover border-2 border-[#6E5E93]/20" />
                                <h3 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h3>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Gaming &amp; Esports IP Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                    Rahul advises indie game developers, mobile studios, and top esports clans on multi-class trademark filing, app clone takedowns, and brand protection.
                                </p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Launching a Video Game?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">
                                    Clear your game title and studio brand across Classes 9 &amp; 41 before public Beta launch on Google Play or Steam.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Check Game Title Availability
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faMobileScreenButton} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Mobile App Trademark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/can-you-trademark-book-title-movie-name-character-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGamepad} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Character &amp; Title TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-saas-product" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCloud} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">SaaS &amp; Engine TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/reclaim-squatted-social-media-username-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTrophy} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Reclaim Gaming Handles</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/types-of-trademark-classes" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Trademark Classes</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-file-international-trademark-madrid-protocol-from-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Madrid Protocol Global TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Overcome Objections</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">AI Trademark Search</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
