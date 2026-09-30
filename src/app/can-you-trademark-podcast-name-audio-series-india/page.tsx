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
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faPhone,
    faBuildingShield,
    faGavel,
    faStamp,
    faBan,
    faBookOpen,
    faMicrophone,
    faTowerBroadcast,
    faCompactDisc,
    faVolumeHigh,
    faPhotoFilm,
    faPodcast,
    faLayerGroup,
    faCheck,
    faFileSignature,
    faGlobe,
    faStore
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Podcast Trademark in India: Classes 9, 38 & 41 Guide",
    description: validateAndNormalizeDescription(
        "Can you trademark a podcast name in India? Learn multi-class protection under Classes 9, 38 & 41, copyright vs trademark rules, and logo filing.",
        "app/can-you-trademark-podcast-name-audio-series-india/page.tsx"
    ),
    keywords: [
        "can you trademark a podcast title in india",
        "trademark class for podcast in india",
        "how to trademark podcast name and logo",
        "trademark class 9 38 41 podcast",
        "audio series trademark registration india",
        "trademark vs copyright for podcast title",
        "can i register sound mark for podcast intro jingle",
        "protect spotify apple podcast brand name india",
        "podcast merchandising trademark class 25 35",
        "podcast title infringement passing off india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/can-you-trademark-podcast-name-audio-series-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Podcast Trademark in India: Classes 9, 38 & 41 Guide",
        description: "Can you trademark a podcast name in India? Learn multi-class protection under Classes 9, 38 & 41, copyright vs trademark rules, and logo filing.",
        url: "https://www.iprkaro.com/can-you-trademark-podcast-name-audio-series-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/can-you-trademark-podcast-name-audio-series-india.png",
                width: 1200,
                height: 630,
                alt: "Can You Trademark a Podcast Title or Audio Series Name in India? (Classes 9, 38 & 41)",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Podcast Trademark in India: Classes 9, 38 & 41 Guide",
        description: "Can you trademark a podcast name in India? Learn multi-class protection under Classes 9, 38 & 41, copyright vs trademark rules, and logo filing.",
        images: ["https://www.iprkaro.com/images/og/can-you-trademark-podcast-name-audio-series-india.png"],
    }
};

const faqs = [
    {
        question: "Can I trademark a single podcast episode title in India?",
        answer: "No, a single standalone podcast episode title generally cannot be registered as a trademark because it serves merely as a descriptive identifier of one piece of content. However, an overarching podcast show title or recurring audio series name that identifies multiple episodes across seasons acts as a distinctive badge of commercial origin and is fully registrable under the Trade Marks Act, 1999."
    },
    {
        question: "Which trademark classes apply to podcasts and audio series in India?",
        answer: "Podcasts require a multi-class filing approach: Class 9 covers downloadable audio files, MP3 podcasts, and digital media software; Class 38 covers telecommunication services, streaming audio over the internet, and digital audio broadcasting; and Class 41 covers entertainment services, podcast production, live storytelling, and audio programming."
    },
    {
        question: "What is the difference between copyright and trademark for a podcast?",
        answer: "Copyright under the Copyright Act, 1957 automatically protects the underlying creative expression—such as the spoken script (literary work), background score (musical work), and final audio master (sound recording). However, copyright does not protect short titles or brand names. A trademark registered under the Trade Marks Act, 1999 is essential to secure exclusive proprietary rights over the show's name, cover art, and sonic logo."
    },
    {
        question: "Can I register a podcast's theme music or intro jingle as a sound trademark?",
        answer: "Yes, signature intro jingles, recurring theme music, or distinct sonic chimes can be registered as Sound Marks in India under Rule 26 of the Trade Marks Rules, 2017. The applicant must submit an MP3 recording not exceeding 30 seconds along with precise musical notation (stave notation) demonstrating that the sound uniquely identifies the podcast."
    },
    {
        question: "Should I register my podcast name as a Word Mark or a Device (Logo) Mark?",
        answer: "For maximum legal protection, creators should first file a Word Mark for the show's title to monopolize the name regardless of visual styling, font, or color. Additionally, filing a Device Mark for the podcast's square cover artwork protects the visual typography, graphic illustrations, and distinctive brand aesthetics on Spotify and Apple Podcasts."
    },
    {
        question: "What classes are needed if I sell branded merchandise for my podcast?",
        answer: "If you monetize your podcast by selling branded merchandise, you should expand your trademark coverage to Class 25 for apparel (t-shirts, hoodies, caps), Class 21 for coffee mugs and drinkware, and Class 35 for operating an e-commerce online retail store or managing podcast advertising and sponsorship campaigns."
    },
    {
        question: "How much does it cost to register a trademark for a podcast in India?",
        answer: "The official IP India government statutory fee for an Individual creator, Sole Proprietor, or recognized Startup/MSME (with Udyam certificate) is ₹4,500 per class for online e-filing (Form TM-A). For corporate entities and LLPs without MSME status, the statutory fee is ₹9,000 per class."
    },
    {
        question: "How do I take down a copycat podcast infringing on my registered trademark?",
        answer: "With a registered trademark (or established prior user rights), you can issue a formal Notice of Infringement to the infringer and submit an official IP infringement takedown request to digital streaming platforms (including Spotify, Apple Podcasts, YouTube Music, and Amazon Music). You can also file a civil suit under Section 29 of the Trade Marks Act, 1999 for permanent injunctions and damages."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "copyright-vs-trademark", title: "Copyright vs Trademark for Audio" },
    { id: "multi-class-classification", title: "Nice Classes: 9, 38, 41 & 35" },
    { id: "series-vs-single-work", title: "Series Title vs Single Episode" },
    { id: "word-vs-device-vs-sound", title: "Word, Logo & Sound Marks" },
    { id: "clearance-search-strategy", title: "Trademark Search Strategy" },
    { id: "step-by-step-registration", title: "Step-by-Step Filing Workflow" },
    { id: "platform-takedown-disputes", title: "Platform Disputes & Enforcement" },
    { id: "licensing-sponsorship-merch", title: "Licensing & Merchandising IP" },
    { id: "comparative-matrix", title: "Podcast IP Protection Matrix" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Creator IP Advice" },
];

export default function PodcastTrademarkRegistrationPage() {
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
        "headline": "Can You Trademark a Podcast Title or Audio Series Name in India? (Classes 9, 38 & 41)",
        "description": "Can you trademark a podcast name in India? Learn multi-class protection under Classes 9, 38 & 41, copyright vs trademark rules, and logo filing.",
        "image": "https://www.iprkaro.com/images/og/can-you-trademark-podcast-name-audio-series-india.png",
        "datePublished": "2026-09-29T10:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/can-you-trademark-podcast-name-audio-series-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Podcast Trademark in India: Classes 9, 38 & 41 Guide",
        "url": "https://www.iprkaro.com/can-you-trademark-podcast-name-audio-series-india",
        "description": "Can you trademark a podcast name in India? Learn multi-class protection under Classes 9, 38 & 41, copyright vs trademark rules, and logo filing.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/can-you-trademark-podcast-name-audio-series-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/can-you-trademark-podcast-name-audio-series-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Podcast Trademark Guide", "item": "https://www.iprkaro.com/can-you-trademark-podcast-name-audio-series-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Trademark Registration Workflow for Podcasts in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Comprehensive Multi-Class Trademark Search across Classes 9, 38, and 41" },
            { "@type": "ListItem", "position": 2, "name": "Determine Mark Format: Word Mark, Square Cover Art Device Mark, or Sound Mark" },
            { "@type": "ListItem", "position": 3, "name": "Identify Accurate User Date and Compile First Broadcast Proof on Spotify or YouTube" },
            { "@type": "ListItem", "position": 4, "name": "Prepare User Affidavit under Rule 25 with Invoices, RSS Logs, and Listenership Metrics" },
            { "@type": "ListItem", "position": 5, "name": "File Form TM-A Online with IP India Portal under Individual or MSME Subsidized Rates" },
            { "@type": "ListItem", "position": 6, "name": "Address Examination Reports and Section 9/11 Objections within 30 Days" },
            { "@type": "ListItem", "position": 7, "name": "Secure Journal Publication and Receive Statutory Registration Certificate under Section 23" }
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
                            <div className="inline-flex items-center bg-purple-50 border border-purple-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faMicrophone} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Creator Economy &amp; Media IP</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Can You Trademark a Podcast Title or Audio Series Name in India? <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>(Classes 9, 38 &amp; 41)</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">As the Indian podcast and digital audio entertainment industry surges across Spotify, Apple Podcasts, YouTube, and Audible, protecting your show&apos;s brand identity has become vital. Under the<strong>Trade Marks Act, 1999</strong>, creators can secure nationwide title monopolies for recurring audio series, protect cover artwork, register signature sound marks, and prevent copycat channels through multi-class filings across<strong>Classes 9, 38, 41, and 35</strong>.</p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Trademark Research Specialist</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 29-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🎙️ Digital Media IP Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Register Podcast Trademark <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult Media IP Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/can-you-trademark-podcast-name-audio-series-india.png"
                                    alt="Can You Trademark a Podcast Title or Audio Series Name in India? (Classes 9, 38 & 41)"
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
                        { label: "Podcast Trademark Guide", href: "/can-you-trademark-podcast-name-audio-series-india" }
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
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
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
                                    <div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70">
                                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {tocSections.map((section, idx) => (
                                                <a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                >
                                                    <span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span>
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
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faPodcast} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview: Protecting Podcast Names in India
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Yes, you can trademark a podcast title or audio series name in India under the Trade Marks Act, 1999, provided the title is used for an ongoing or recurring series rather than a single standalone episode. Complete brand protection requires a multi-class filing strategy across Class 9 (downloadable audio files &amp; MP3s), Class 38 (audio streaming &amp; telecommunication transmission), and Class 41 (production of podcast shows, entertainment &amp; audio storytelling). While copyright law under the Copyright Act, 1957 protects the underlying script, sound recording, and musical composition, it does not grant proprietary title monopolies. Trademarking secures the exclusive right to the show title, square cover artwork (Device Mark), and signature intro jingles (Sound Mark) across Spotify, Apple Podcasts, YouTube, and Amazon Music.</p>
                                        </div>

                                        <p className="mb-6">The Indian creator economy is experiencing exponential growth in audio storytelling, interview podcasts, investigative true-crime docuseries, and business talk shows. With millions of downloads across Spotify, Apple Podcasts, JioSaavn, Gaana, and YouTube Music, top-tier audio series have transformed into multi-crore intellectual property assets.</p>
                                        <p className="mb-6">However, many creators mistakenly assume that uploading an audio episode or registering copyright on their script automatically secures their show name against copycats. In Indian intellectual property jurisprudence, titles and names are not protected under copyright law. Without a registered trademark under the<strong>Trade Marks Act, 1999</strong>, another creator or production house can launch a show with a confusingly similar name, cannibalize your audience, and dilute your sponsorship valuation.</p>
                                        <p className="mb-6">Learn how trademark law intersects with creative media assets in our guides on <Link href="/difference-between-trademark-registration-and-copyright-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark vs copyright registration</Link>, <Link href="/trademark-for-youtube-channel-name" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration for YouTube channel names</Link>, and <Link href="/can-you-trademark-book-title-movie-name-character-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademarking book and movie titles in India</Link>.</p>
                                    </section>

                                    {/* SECTION 2: COPYRIGHT VS TRADEMARK */}
                                    <section id="copyright-vs-trademark" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Copyright vs Trademark for Audio Content
                                        </h2>
                                        <p className="mb-6">Understanding the distinct spheres of copyright and trademark protection is foundational for digital audio creators:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-sm">
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg">
                                                        <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" />
                                                    </span>
                                                    <div>
                                                        <h3 className="text-lg font-black text-gray-900 m-0">Copyright Protection</h3>
                                                        <span className="text-xs font-semibold text-indigo-600">Copyright Act, 1957</span>
                                                    </div>
                                                </div>
                                                <ul className="space-y-3 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Script &amp; Text:</strong> Protects original written scripts, show notes, and research as literary works.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Sound Recording:</strong> Protects the recorded voice tracks, mastered audio files, and episode stems.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Original Music:</strong> Protects background scores, theme songs, and instrumental sound beds.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faBan} className="w-4 h-4 text-rose-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Title Limitation:</strong> Under Supreme Court rulings (<em>Krishika Lulla v. Shyam Vithalrao Devkatta</em>), copyright does not protect short titles or brand names.</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm">
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <span className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] flex items-center justify-center font-bold text-lg">
                                                        <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                                    </span>
                                                    <div>
                                                        <h3 className="text-lg font-black text-gray-900 m-0">Trademark Protection</h3>
                                                        <span className="text-xs font-semibold text-[#6E5E93]">Trade Marks Act, 1999</span>
                                                    </div>
                                                </div>
                                                <ul className="space-y-3 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Show Title Monopoly:</strong> Grants exclusive nationwide rights over the podcast title and audio show brand.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Cover Artwork:</strong> Protects the square 1:1 graphic logo, visual layout, typography, and color palette.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Sonic Branding:</strong> Protects unique 5–15 second intro audio chimes and signature stings as Sound Marks.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Commercial Merchandising:</strong> Secures licensing rights for apparel, events, and brand sponsorships.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: MULTI-CLASS CLASSIFICATION */}
                                    <section id="multi-class-classification" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLayerGroup} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Nice Classification: Classes 9, 38 &amp; 41
                                        </h2>
                                        <p className="mb-6">Under the international Nice Classification system adopted by IP India, podcasting spans hardware, telecommunications, and entertainment production. A comprehensive filing strategy requires registration across multiple core classes:</p>

                                        <div className="space-y-6 not-prose my-8">
                                            {/* Class 9 */}
                                            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/60 via-white to-indigo-50/40 border border-blue-100 shadow-sm">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="bg-blue-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">Class 9</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Downloadable Digital Media &amp; Audio Recordings</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">Covers downloadable audio files, podcasts, MP3 recordings, digital audiobooks, downloadable media players, mobile application software for streaming, and recorded media formats.</p>
                                                <div className="bg-white/80 rounded-xl p-3 border border-blue-100">
                                                    <p className="text-xs font-semibold text-blue-900 m-0"><strong>Key Specification Drafting:</strong> &ldquo;Downloadable audio and video podcasts in the field of entertainment, news, business, and storytelling; downloadable sound recordings; digital media software.&rdquo;</p>
                                                </div>
                                            </div>

                                            {/* Class 38 */}
                                            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50/60 via-white to-pink-50/40 border border-purple-100 shadow-sm">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="bg-[#6E5E93] text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">Class 38</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Telecommunications &amp; Audio Broadcasting Services</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">Covers digital transmission and broadcasting of podcasts, streaming audio over the internet, digital telecommunications, webcasting services, and electronic delivery of audio programming.</p>
                                                <div className="bg-white/80 rounded-xl p-3 border border-purple-100">
                                                    <p className="text-xs font-semibold text-[#6E5E93] m-0"><strong>Key Specification Drafting:</strong> &ldquo;Broadcasting of audio and video programming via the internet; streaming of audio material on digital networks; podcast transmission services.&rdquo;</p>
                                                </div>
                                            </div>

                                            {/* Class 41 */}
                                            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 border border-emerald-100 shadow-sm">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="bg-emerald-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">Class 41</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Entertainment, Production &amp; Live Shows</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">The primary service class for creators. Covers production and distribution of podcast shows, audio drama series, interview programs, non-downloadable streaming entertainment, live stage shows, and sound studio production.</p>
                                                <div className="bg-white/80 rounded-xl p-3 border border-emerald-100">
                                                    <p className="text-xs font-semibold text-emerald-900 m-0"><strong>Key Specification Drafting:</strong> &ldquo;Production of podcasts and audio series; entertainment services, namely, providing ongoing audio and video programs; live performance events.&rdquo;</p>
                                                </div>
                                            </div>

                                            {/* Ancillary Classes */}
                                            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/60 via-white to-yellow-50/40 border border-amber-100 shadow-sm">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="bg-amber-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">Commercial Expansion</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Classes 35 &amp; 25: Advertising, Sponsorships &amp; Merch</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Class 35:</strong> Advertising services, influencer marketing, podcast sponsorship monetization, and online retail store services for podcast merchandise.<br /><strong>Class 25:</strong> Apparel, printed t-shirts, caps, hoodies, and promotional clothing bearing the podcast logo.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: SERIES VS SINGLE WORK */}
                                    <section id="series-vs-single-work" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCompactDisc} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Single Episode vs Ongoing Series Rule
                                        </h2>
                                        <p className="mb-6">In trademark jurisprudence across common law jurisdictions and the Indian Registry, there is a fundamental legal distinction between a<strong>single standalone creative work</strong>and an<strong>ongoing series of works</strong>:</p>

                                        <div className="bg-gray-50 border-l-4 border-[#6E5E93] p-6 rounded-r-2xl mb-8 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-2">The &ldquo;Series of Works&rdquo; Distinctiveness Doctrine</h3>
                                            <p className="text-sm text-gray-700 leading-relaxed m-0">A single book title or single episode title indicates the content of that specific creative output rather than pointing to a continuous commercial source. However, when a title is applied to a<strong>recurring audio series, episodic podcast, or multi-season show</strong>(such as <em>The Ranveer Show</em>, <em>Cyrus Says</em>, or <em>Finshots Daily</em>), the name indicates that all episodes originate from the same production source. It functions as a true trademark under<strong>Section 2(1)(zb)</strong>of the Trade Marks Act, 1999.</p>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-3">Proving Secondary Meaning for Descriptive Titles</h3>
                                        <p className="mb-6">If your podcast title incorporates common industry terms (e.g., &ldquo;The AI Startup Podcast&rdquo; or &ldquo;Daily Tech Pulse&rdquo;), the Trademark Examiner may issue an objection under<strong>Section 9(1)(b)</strong>for descriptive character. To secure registration, creators must submit a comprehensive User Affidavit under<strong>Rule 25</strong>with verifiable listenership analytics, Spotify wrapped summaries, Apple Podcasts ranking charts, media press mentions, and sponsorship invoices proving that the show has acquired distinctiveness through extensive commercial use.</p>
                                    </section>

                                    {/* SECTION 5: WORD VS DEVICE VS SOUND MARKS */}
                                    <section id="word-vs-device-vs-sound" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faVolumeHigh} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Word Mark, Cover Artwork &amp; Sound Marks
                                        </h2>
                                        <p className="mb-6">Top-tier podcast brands deploy a three-tier asset registration strategy to create an unbreachable IP perimeter:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/40 border border-purple-100 rounded-2xl p-5 text-center">
                                                <div className="w-12 h-12 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center mx-auto mb-3 text-xl font-black">
                                                    W
                                                </div>
                                                <h3 className="text-base font-black text-gray-900 mb-2">1. Word Mark</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Protects the text and phonetic pronunciation of your show name across all fonts, styles, languages, and platforms. Highest statutory protection against copycat titles.</p>
                                            </div>

                                            <div className="bg-indigo-50/40 border border-indigo-100 rounded-2xl p-5 text-center">
                                                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-3 text-xl font-black">
                                                    <FontAwesomeIcon icon={faPhotoFilm} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-base font-black text-gray-900 mb-2">2. Device (Cover Art)</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Protects the square 1:1 podcast cover artwork, thumbnail illustration, custom lettering, typography, and graphic layout displayed on streaming directories.</p>
                                            </div>

                                            <div className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-5 text-center">
                                                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 text-xl font-black">
                                                    <FontAwesomeIcon icon={faVolumeHigh} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-base font-black text-gray-900 mb-2">3. Sound Mark</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Registered under Rule 26 of Trade Marks Rules, 2017. Protects your show&apos;s signature audio intro jingle, theme chords, or sonic sting (e.g., Netflix ta-dum or HBO static intro).</p>
                                            </div>
                                        </div>

                                        <p className="mb-6">Explore the procedural rules for registering audio marks in our detailed guide on <Link href="/can-i-register-a-sound-or-scent-as-a-trademark-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">sound trademark registration in India</Link> and <Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark vs device mark strategies</Link>.</p>
                                    </section>

                                    {/* SECTION 6: CLEARANCE SEARCH */}
                                    <section id="clearance-search-strategy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faSearch} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Clearance for Audio Shows
                                        </h2>
                                        <p className="mb-6">Before investing thousands in audio recording equipment, branding studios, and launch marketing, conducting a rigorous trademark clearance search is critical to avoid infringement lawsuits and Section 11 objections:</p>

                                        <div className="space-y-4 not-prose my-6">
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl flex items-start space-x-3">
                                                <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Official IP India Portal Search across Classes 9, 38, 41 &amp; 35</h3>
                                                    <p className="text-xs text-gray-600 mt-1 m-0">Check for identical, phonetically similar, or deceptively similar registered and pending marks. Use our <Link href="/free-ai-powered-trademark-search" className="text-[#6E5E93] hover:underline font-semibold">free AI trademark search tool</Link> to uncover hidden phonetic conflicts.</p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white border border-gray-200 rounded-xl flex items-start space-x-3">
                                                <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Common Law &amp; Streaming Directory Search</h3>
                                                    <p className="text-xs text-gray-600 mt-1 m-0">Search Spotify, Apple Podcasts, YouTube, Audible, and Podchaser. In India, prior unregistered users possess common law rights under Section 34 and can institute passing off actions against late filers.</p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white border border-gray-200 rounded-xl flex items-start space-x-3">
                                                <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Domain Name &amp; Social Handle Clearance</h3>
                                                    <p className="text-xs text-gray-600 mt-1 m-0">Verify availability of .com / .in domains and primary handles on Instagram, YouTube, X (Twitter), and LinkedIn to ensure total cross-platform brand alignment.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: STEP BY STEP REGISTRATION */}
                                    <section id="step-by-step-registration" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Filing Workflow: Step-by-Step Guide
                                        </h2>
                                        <p className="mb-6">Registering your podcast trademark through the CGPDTM IP India portal follows a structured legal workflow:</p>

                                        <div className="space-y-6 not-prose my-8">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Step 1: Determine Applicant Category &amp; Claim MSME Fee Subsidy</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Individual creators, sole proprietorships, and startups with an Udyam Registration Certificate pay a subsidized government fee of<strong>₹4,500 per class</strong>(a 50% discount compared to ₹9,000 for standard companies). Learn more in our guide on <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[#6E5E93] hover:underline font-semibold">trademark fee concession for MSME &amp; startups</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Step 2: Draft Precise Goods &amp; Services Specification in Form TM-A</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">File Form TM-A online. Ensure multi-class or single-class specifications accurately describe downloadable digital audio (Class 9), telecommunications broadcasting (Class 38), and entertainment production (Class 41).</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Step 3: Execute User Affidavit with Prior Commercial Use Evidence</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If your podcast has already aired, claim the exact first broadcast date. Submit a notarized User Affidavit under Rule 25 accompanied by dated screenshots of episode 1 on Spotify, RSS feed logs, listener stats, and press coverage.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Step 4: Examination &amp; Show-Cause Hearing Defense</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If the Registry issues an Examination Report citing Section 9 (distinctiveness) or Section 11 (similar marks), file a comprehensive legal reply within 30 days. Represent your matter through video conferencing show-cause hearings if required.</p>
                                            </div>

                                            <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Step 5: Journal Publication &amp; Statutory Registration Certificate</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Upon acceptance, the mark is advertised in the Trade Marks Journal for a 4-month opposition window. If unopposed, IP India issues the official Registration Certificate under Section 23(2), valid for 10 years and renewable indefinitely.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: DIGITAL TAKEDOWNS & DISPUTES */}
                                    <section id="platform-takedown-disputes" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Digital Platform Take-Downs &amp; Disputes
                                        </h2>
                                        <p className="mb-6">Holding a registered trademark unlocks powerful automated enforcement mechanisms on major global and domestic streaming platforms:</p>

                                        <div className="space-y-4 not-prose my-6">
                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">Spotify Intellectual Property Takedown Portal</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Spotify maintains an expedited IP infringement reporting system. By providing your Indian Trademark Registration Number, you can have unauthorized audio clones, squatted show names, and infringing artwork removed within 48 to 72 hours.</p>
                                            </div>

                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">Apple Podcasts &amp; YouTube Copyright / Trademark Dispute Mechanisms</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Apple Legal and YouTube Brand Protection accept registered trademark claims to de-list infringing RSS feeds, transfer squatted custom handles, and prevent bad-faith impersonation across audio and video directories.</p>
                                            </div>

                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">Civil Court Injunctions &amp; Damages under Section 29</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">If a competing creator refuses to cease using your brand name after a formal Cease &amp; Desist notice, you can file an infringement suit under Section 29 of the Trade Marks Act, 1999 in the Commercial Court or High Court to obtain interim injunctions and account of profits.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: LICENSING & MERCHANDISING */}
                                    <section id="licensing-sponsorship-merch" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStore} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Podcast Licensing &amp; Merchandising IP
                                        </h2>
                                        <p className="mb-6">As audio shows scale, monetization expands beyond programmatic ads into exclusive platform deals, live tours, brand sponsorships, and physical merchandise. Your registered trademark is the legal foundation for all commercial transactions:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                                            <div className="p-5 bg-white border border-gray-200 rounded-xl">
                                                <h3 className="text-sm font-bold text-gray-900 mb-2">Platform Exclusivity Licensing</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">When licensing your show exclusively to Spotify, Audible, or Luminary, the license agreement is structured as a Trademark &amp; Content Licensing Agreement under Sections 48 and 49 of the Trade Marks Act, 1999, ensuring you retain core ownership while licensing broadcast rights.</p>
                                            </div>

                                            <div className="p-5 bg-white border border-gray-200 rounded-xl">
                                                <h3 className="text-sm font-bold text-gray-900 mb-2">Merchandise &amp; Event IP Licensing</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Licensing your show name for live comedy/storytelling tours, branded apparel (Class 25), or consumer packaged goods requires strict quality control clauses to prevent brand dilution and naked licensing risks.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: COMPARATIVE MATRIX */}
                                    <section id="comparative-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Podcast IP Protection Class Matrix
                                        </h2>
                                        <p className="mb-6">A complete reference guide for podcasters and audio media enterprises:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                                <thead>
                                                    <tr className="bg-[#0C002B] text-white text-xs sm:text-sm uppercase tracking-wider">
                                                        <th className="p-4 border border-white/10">Podcast Asset</th>
                                                        <th className="p-4 border border-white/10">Nice Class</th>
                                                        <th className="p-4 border border-white/10">IP Protection Type</th>
                                                        <th className="p-4 border border-white/10">Key Legal Benefit</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700 bg-white">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Show Title / Series Name</td>
                                                        <td className="p-4"><span className="bg-purple-100 text-[#6E5E93] px-2.5 py-1 rounded-full font-bold text-xs">Class 41</span></td>
                                                        <td className="p-4">Word Mark</td>
                                                        <td className="p-4">Nationwide title monopoly across all streaming platforms</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Downloadable Audio / MP3s</td>
                                                        <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full font-bold text-xs">Class 9</span></td>
                                                        <td className="p-4">Word / Device Mark</td>
                                                        <td className="p-4">Prevents pirate audio downloads &amp; copycat media apps</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Streaming &amp; Webcasting</td>
                                                        <td className="p-4"><span className="bg-pink-100 text-pink-800 px-2.5 py-1 rounded-full font-bold text-xs">Class 38</span></td>
                                                        <td className="p-4">Service Mark</td>
                                                        <td className="p-4">Protects digital broadcast &amp; telecommunication delivery</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Square Cover Artwork</td>
                                                        <td className="p-4"><span className="bg-purple-100 text-[#6E5E93] px-2.5 py-1 rounded-full font-bold text-xs">Classes 9 &amp; 41</span></td>
                                                        <td className="p-4">Device Mark</td>
                                                        <td className="p-4">Protects visual logo, thumbnail layout &amp; color get-up</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Intro Audio Jingle / Sting</td>
                                                        <td className="p-4"><span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold text-xs">Classes 38 &amp; 41</span></td>
                                                        <td className="p-4">Sound Mark (Rule 26)</td>
                                                        <td className="p-4">Monopoly over signature audio chords and sonic branding</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Apparel &amp; Merch</td>
                                                        <td className="p-4"><span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-bold text-xs">Class 25</span></td>
                                                        <td className="p-4">Device / Word Mark</td>
                                                        <td className="p-4">Exclusive commercial monetization for hoodies, tees &amp; caps</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4">
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

                                    {/* SECTION 12: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Creator IP Protection Advice
                                        </h2>
                                        <p className="mb-6">In the digital media landscape, your podcast title is the primary anchor of your brand value, listener loyalty, and advertising revenue. Relying solely on copyright leaves your show title vulnerable to copycats and platform hijackers. Securing multi-class trademark registrations across Classes 9, 38, and 41 guarantees nationwide legal exclusivity, elevates your show&apos;s commercial valuation, and empowers instantaneous takedowns on Spotify, Apple Podcasts, and YouTube.</p>
                                        <p className="mb-6">Partner with dedicated media trademark attorneys to conduct pre-launch clearance searches, claim MSME fee concessions, and build an airtight intellectual property fortress. For related creator brand strategies, explore our guides on <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>, <Link href="/series-trademark-application-in-india-section-15" className="text-[rgb(110,94,147)] hover:underline font-medium">series trademark applications in India</Link>, and <Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">stopping trademark infringement</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Digital Media &amp; Creator IP Law
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Podcast Brand in India
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy registered trademark attorneys to secure nationwide title monopolies, protect cover artwork, register sound marks, and handle platform infringements.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Register Podcast Mark</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • Multi-Class Strategy • Spotify/Apple Takedowns • Pan-India</p>
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
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul advises digital media creators, podcasters, OTT networks, and production houses on multi-class trademarking, sound mark registration, and platform IP disputes.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Launching a Podcast?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Conduct a comprehensive pre-launch trademark clearance search across Classes 9, 38 &amp; 41 to avoid rebranding risks.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Check Podcast Name
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/trademark-for-youtube-channel-name" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faMicrophone} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">YouTube Channel TM</span></Link></li>
                                    <li><Link href="/can-you-trademark-book-title-movie-name-character-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faPhotoFilm} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Movie &amp; Book Titles</span></Link></li>
                                    <li><Link href="/can-i-register-a-sound-or-scent-as-a-trademark-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faVolumeHigh} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Sound Mark Rules</span></Link></li>
                                    <li><Link href="/series-trademark-application-in-india-section-15" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCompactDisc} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Series Trademarks</span></Link></li>
                                    <li><Link href="/difference-between-trademark-registration-and-copyright-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM vs Copyright</span></Link></li>
                                    <li><Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Word vs Device Mark</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">AI Trademark Search</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
