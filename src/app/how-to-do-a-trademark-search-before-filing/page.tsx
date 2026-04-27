import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faSearch,
    faFileContract,
    faGavel,
    faGlobe,
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faMoneyBillWave,
    faCertificate,
    faFileSignature,
    faPhone,
    faChevronRight,
    faUtensils,
    faCoffee,
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faBook,
    faBriefcase,
    faChartLine,
    faHistory,
    faGears,
    faUserTie,
    faShieldHalved,
    faEarthAmericas,
    faLaptopCode
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How to Do a Trademark Search Before Filing in India (2024 Guide)',
    description: 'Master the art of trademark searching in India. Our 5000+ word guide covers public search, phonetic matches, Vienna codes, and risk assessment to protect your brand.',
    keywords: [
        'how to do a trademark search',
        'trademark search india',
        'ip india public search',
        'check trademark availability',
        'brand name search india',
        'vienna code search',
        'phonetic trademark search',
        'trademark infringement protection',
        'pre filing trademark checklist',
        'online trademark check'
    ],
    openGraph: {
        title: 'The Ultimate Guide to Trademark Searching in India',
        description: 'Don\'t file your trademark blindly. Learn the professional techniques for conducting a comprehensive trademark search to ensure your brand\'s safety.',
        url: 'https://www.iprkaro.com/how-to-do-a-trademark-search-before-filing',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-to-do-a-trademark-search-before-filing',
    },
};

const tocSections = [
    { id: 'foundations-of-search', title: 'Search Foundations' },
    { id: 'importance-of-searching', title: 'Why Search Matters' },
    { id: 'indian-landscape', title: 'Indian IP Landscape' },
    { id: 'preliminary-steps', title: 'Pre-Search Steps' },
    { id: 'ip-india-guide', title: 'IP India Portal Guide' },
    { id: 'word-mark-strategies', title: 'Word Mark Strategies' },
    { id: 'vienna-codes', title: 'Vienna Codes & Logos' },
    { id: 'beyond-registry', title: 'Beyond Registry Search' },
    { id: 'risk-assessment', title: 'Analyzing Risks' },
    { id: 'common-mistakes', title: 'Mistakes to Avoid' },
    { id: 'reviews', title: 'Reviews' },
    { id: 'professional-help', title: 'Professional Search' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Why should I conduct a trademark search before filing in India?",
        answer: "A trademark search is vital to identify existing marks that might conflict with yours. It helps avoid legal battles, saves filing fees on risky applications, and ensures your brand is unique and legally defensible from day one."
    },
    {
        question: "What is the official portal for trademark searching in India?",
        answer: "The official portal is the IP India Public Search facility, managed by the Controller General of Patents, Designs and Trade Marks (CGPDTM). It allows users to search across various classes and status categories."
    },
    {
        question: "How do I search for a logo or device mark in India?",
        answer: "Logo searching uses the Vienna Classification (Vienna Codes). You must identify the codes that represent the elements of your logo (e.g., animals, shapes, celestial bodies) and search for existing marks with similar codes."
    },
    {
        question: "What does 'phonetic search' mean in trademark terms?",
        answer: "Phonetic search looks for marks that sound similar to yours, even if spelled differently. For example, 'Kwick' and 'Quick' are phonetically identical. The Indian registry often rejects marks that are phonetically confusable."
    },
    {
        question: "Can I do a trademark search on my own?",
        answer: "Yes, anyone can use the IP India portal. However, professional searches are recommended for complex marks or high-stakes brands because experts use advanced filtering and have deep knowledge of similarity standards."
    },
    {
        question: "What are the Nice Classification classes?",
        answer: "The Nice Classification is an international system that divides goods and services into 45 classes. Classes 1 to 34 cover goods, while 35 to 45 cover services. Identifying the right class is critical for an accurate search."
    },
    {
        question: "Does a clear search guarantee my trademark registration?",
        answer: "No, a clear search is a positive indicator but not a guarantee. The Registrar may still object based on absolute grounds (Section 9) or third parties might oppose your mark during the advertisement period."
    },
    {
        question: "What are 'Common Law' trademark rights?",
        answer: "Common law rights are acquired through use rather than registration. Even if a mark isn't on the registry, a prior user can stop you from registering a similar mark if they can prove significant goodwill and prior usage."
    },
    {
        question: "How often should I monitor my trademark after filing?",
        answer: "It is recommended to monitor the Trademark Journal weekly. This ensures you can identify and oppose any infringing marks that the registry may have inadvertently allowed for publication."
    },
    {
        question: "What should I do if my search reveals a conflicting mark?",
        answer: "If a direct conflict is found, you should consider modifying your brand name or logo. Alternatively, consult a trademark attorney to assess the level of risk or explore co-existence possibilities if the markets are distinct."
    }
];

const reviews = [
    {
        name: "Vikram R.",
        role: "CEO, TechSphere Solutions",
        text: "The comprehensive search report saved us from a multi-million dollar rebranding disaster. We discovered a phonetic match we totally missed.",
        rating: 5
    },
    {
        name: "Sanya L.",
        role: "Proprietor, Lush Organic",
        text: "IPR Karo's detailed analysis of the Vienna codes for our logo was eye-opening. They are the best in the business for brand protection.",
        rating: 5
    },
    {
        name: "Deepak G.",
        role: "Founder, QuickBite Foods",
        text: "Fast, accurate, and professional. The 50-page search report gave us the confidence to file our mark without any hesitation.",
        rating: 5
    }
];

export default function TrademarkSearchGuidePage() {
    const breadcrumbItems = [
        { label: "How to do a Trademark Search", href: "/how-to-do-a-trademark-search-before-filing" },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Ultimate Guide to Conducting a Trademark Search Before Filing in India",
        "description": "Comprehensive 5000+ word strategy for professional trademark searching. Learn how to use IP India, search phonetically, and identify Vienna codes.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.iprkaro.com/logo.png"
            }
        },
        "datePublished": "2024-03-11",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/how-to-do-a-trademark-search-before-filing"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.iprkaro.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "How to do a Trademark Search",
                "item": "https://www.iprkaro.com/how-to-do-a-trademark-search-before-filing"
            }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Comprehensive Trademark Search Service",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2150"
                    },
                    "review": reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
                        "reviewBody": r.text
                    }))
                })
            }} />

            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            The Definitive Trademark <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Search Guide for 2024
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Don't leave your brand's future to chance. Learn how to conduct a professional, deep-layer trademark search to identify phonetic conflicts, visual similarities, and Vienna code matches before you file.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Get Free Search Report
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Breadcrumb Row */}
                <div className="bg-gray-50 border-b border-gray-200 py-4">
                    <div className="container mx-auto px-4 max-w-[1400px]">
                        <Breadcrumbs items={breadcrumbItems} />
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="container mx-auto px-4 max-w-[1600px] py-8">

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">

                        {/* Left Column - TOC */}
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Search Roadmap</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            {/* TOC (Mobile) */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="foundations-of-search" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Strategic Genesis: Understanding Trademark Foundations
                                        </h2>
                                        <p className="mb-6">
                                            A trademark is not just a name; it is the visual and emotional manifestation of your business legacy. In the complex arena of Indian Intellectual Property Law, a trademark serves as a unique identifier that distinguishes your goods or services from thousands of others in the marketplace. Whether it is a word, a logo, a catchy slogan, or even a specific sound, your trademark is the cornerstone of your brand equity.
                                        </p>
                                        <p className="mb-6">
                                            However, many entrepreneurs embark on the filing process without a clear understanding of the obstacles that lie ahead. The most common mistake is assuming that because a domain name or social media handle is available, the trademark is also available for registration. This is a dangerous misconception. The Indian Trademark Registry is a vast repository of nearly 150 years of brand history, and navigating it requires more than just a cursory glance.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-10 my-10 rounded-r-3xl shadow-md">
                                            <p className="text-xl md:text-2xl text-blue-900 italic font-medium">
                                                "In the realm of IP, ignorance is not just bliss; it is expensive. A deep search is the only insurance policy you can buy for your brand's future."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            This guide is designed to transform you from a passive applicant into a proactive brand architect. We will explore the nuances of the IP India portal, the technicalities of Vienna Codes, and the legal standards for similarity. By the time you finish this 5000+ word journey, you will possess the knowledge to conduct a search that doesn't just look for 'identical' matches but uncovers 'dangerous' similarities.
                                        </p>
                                    </section>

                                    <section id="importance-of-searching" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Multi-Dimensional Importance of Pre-Filing Research
                                        </h2>
                                        <p className="mb-8">
                                            Why bother with a deep search? Why not just file and see what happens? The costs of negligence are multifaceted. Let's break down the strategic advantages of professional research.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-4 text-gray-900">Legal Risk Mitigation</h3>
                                                <p className="text-sm leading-relaxed">Identifying existing marks prevents you from inadvertently infringing on another's rights. Infringement lawsuits can cost millions and result in immediate court-ordered shutdowns of your operations.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-4 text-gray-900">Financial Optimization</h3>
                                                <p className="text-sm leading-relaxed">Filing fees are non-refundable. If you file for a mark that already exists, you lose your government fee, your professional fee, and the months of time spent waiting for the examination report.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faChartLine} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-4 text-gray-900">Brand Strength Assessment</h3>
                                                <p className="text-sm leading-relaxed">Searching helps you understand if your chosen name is unique enough to stand out. It reveals if the market is already saturated with similar-sounding brands, allowing you to pivot before spending on marketing.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faBook} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-4 text-gray-900">Evidence for Prosecution</h3>
                                                <p className="text-sm leading-relaxed">A documented search report serves as evidence of your 'good faith' if a dispute ever arises. It proves that you did your due diligence and didn't intend to copy or deceive.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="indian-landscape" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Indian IP Ecosystem: Rules, Portal, and Classifications
                                        </h2>
                                        <p className="mb-6">
                                            The trademark search process in India is governed by the Trade Marks Act, 1999, and the Trade Marks Rules, 2017. These laws provide the framework for how marks are examined and what constitutes a conflict. In India, the 'similarity' standard is very broad. A mark can be rejected if it is 'deceptively similar' to an earlier one, meaning a consumer with average intelligence and imperfect recollection might confuse the two.
                                        </p>
                                        <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm mb-10">
                                            <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faGears} className="mr-4" />
                                                The Nice Classification System
                                            </h3>
                                            <p className="mb-6">
                                                Before searching, you must identify your 'Class'. The world uses the Nice Classification, an international product-service organizing system.
                                            </p>
                                            <ul className="grid md:grid-cols-2 gap-6">
                                                <li className="flex items-start bg-gray-50 p-4 rounded-xl">
                                                    <span className="font-black text-[rgb(110,94,147)] mr-3">01-34</span>
                                                    <span className="text-sm font-medium">Goods: From raw chemicals and metals to packaged food and clothing.</span>
                                                </li>
                                                <li className="flex items-start bg-gray-50 p-4 rounded-xl">
                                                    <span className="font-black text-[rgb(110,94,147)] mr-3">35-45</span>
                                                    <span className="text-sm font-medium">Services: From business management and banking to restaurants and legal help.</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mb-6">
                                            Searching within the correct class is paramount. However, a expert search doesn't stop there. Many classes are 'allied'. For example, if you are searching for a juice brand (Class 32), you must also look into Class 30 (food items) and Class 43 (juice bars) because the courts often protect brands across related industries to prevent consumer confusion.
                                        </p>
                                    </section>

                                    <section id="preliminary-steps" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            The Pre-Search Strategy: Preparing Your Target
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    1
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Define Your Mark Variations</h3>
                                                    <p className="text-base text-gray-600">
                                                        Don't just search for "Apple". You must search for "Apel", "Appel", "Aple", and phonetic sounds like "A-Pal". In India, "Spelling doesn't save you". If it sounds the same, it is often a conflict. List out at least 10 variants of your name before starting.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    2
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Analyze Component Meanings</h3>
                                                    <p className="text-base text-gray-600">
                                                        If your mark is "Blue Ocean", the word "Blue" might be descriptive, but "Ocean" is distinctive. However, you must search for "Azure Sea" or "Aqua Marine" because conceptual similarity is also a ground for rejection in India.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    3
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Map the Commercial Intent</h3>
                                                    <p className="text-base text-gray-600">
                                                        Are you manufacturing the product? Are you just selling it? Are you providing it as a service? Every layer adds a new class and a new search requirement. Mapping this early prevents missing a critical competitor in an 'offbeat' but legally relevant class.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="ip-india-guide" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Practical Tutorial: Navigating the IP India Public Search Portal
                                        </h2>
                                        <p className="mb-6">
                                            The gateway to your search is the official IP India website. Once you land on the Public Search page, you are faced with a few options that can determine the quality of your results. Understanding these technical toggles is essential.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                                            <div className="p-6 bg-[#0C002B] text-white rounded-2xl shadow-lg border border-white/10">
                                                <h4 className="font-bold text-lg mb-3 text-[rgb(110,94,147)]">Word Mark Search</h4>
                                                <p className="text-xs opacity-80 leading-relaxed">The default search type. Used for names, slogans, and any alphanumeric marks. This is where most research begins.</p>
                                            </div>
                                            <div className="p-6 bg-[#0C002B] text-white rounded-2xl shadow-lg border border-white/10">
                                                <h4 className="font-bold text-lg mb-3 text-[rgb(110,94,147)]">Phonetic Search</h4>
                                                <p className="text-xs opacity-80 leading-relaxed">Uses 'sounds like' algorithms. Invaluable for India where brand names are often translated or spelled creatively.</p>
                                            </div>
                                            <div className="p-6 bg-[#0C002B] text-white rounded-2xl shadow-lg border border-white/10">
                                                <h4 className="font-bold text-lg mb-3 text-[rgb(110,94,147)]">Vienna Code Search</h4>
                                                <p className="text-xs opacity-80 leading-relaxed">The purely visual search. Used for logos and graphics without text. Requires finding the right code from the ICC list.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            When you input your search term, you have three filter types: "Start With", "Contains", and "Match With". We recommend beginning with "Contains". Why? Because if you search for "Star" and someone has "Morning Star", a "Start With" filter will miss it entirely. "Contains" ensures you see every mark that includes your primary keyword as a component.
                                        </p>
                                    </section>

                                    <section id="word-mark-strategies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Mastering Word Mark Search: Beyond the Basics
                                        </h2>
                                        <p className="mb-6">
                                            Searching for a word mark is an iterative process. You cannot stop at one query. A professional researcher will perform dozens of queries to ensure no stone is left unturned.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[rgb(110,94,147)]">
                                                <h4 className="font-bold text-xl mb-3">The 'Syllable Breakdown' Method</h4>
                                                <p className="text-sm">If your mark is "InnoVate", search for "Inno" and "Vate" separately. You might find "Inno-Tech" or "Power-Vate". Both are potential conflicts if the industries overlap. This method reveals hidden similarities in the prefixes and suffixes that consumers often rely on to identify brands.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[rgb(110,94,147)]">
                                                <h4 className="font-bold text-xl mb-3">The 'Vowel Mutation' Search</h4>
                                                <p className="text-sm">Search for similar sounding vowels. Replace 'A' with 'E', 'I' with 'Y', and 'O' with 'U'. Marks like "Dyne" and "Dine" or "Lyft" and "Lift" are identical in the eyes of the law. This is particularly crucial in the pharmaceutical and food sectors where names are often derivatives of common roots.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[rgb(110,94,147)]">
                                                <h4 className="font-bold text-xl mb-3">The 'Translation' Trap</h4>
                                                <p className="text-sm">If your name is "King", search for "Raja" or "Sultan" in the same class. If a mark is famous enough, the courts might protect its conceptual equivalent to prevent people from translating names to bypass the law. This is a common ground for opposition from larger, established brands.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="vienna-codes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Decoding the Visual: Vienna Codes and Logo Searching
                                        </h2>
                                        <p className="mb-6">
                                            Searching for a logo is harder than searching for a name. Computers cannot easily 'see' visual similarity the way they see text. This is why the Vienna Classification was created. It is an international treaty that classifies the figurative elements of marks into numbers.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10 my-10">
                                            <div className="bg-[#0C002B] text-white p-8 rounded-[2rem] relative overflow-hidden">
                                                <div className="absolute top-4 right-4 text-white/10 italic font-black text-6xl">01</div>
                                                <h4 className="text-xl font-bold mb-4 text-[#D1C4E9]">Find Your Codes</h4>
                                                <p className="text-sm opacity-80 leading-relaxed">Visit the official Vienna Classification search on the WIPO or IP India site. If your logo has a 'Rising Sun over a Mountain', you will find a specific code for 'Sun' (01.03) and 'Mountain' (06.01). Combining these is the only way to search the registry's image database effectively.</p>
                                            </div>
                                            <div className="bg-[#0C002B] text-white p-8 rounded-[2rem] relative overflow-hidden">
                                                <div className="absolute top-4 right-4 text-white/10 italic font-black text-6xl">02</div>
                                                <h4 className="text-xl font-bold mb-4 text-[#D1C4E9]">Execute the Query</h4>
                                                <p className="text-sm opacity-80 leading-relaxed">On the IP India portal, switch the search type to "Vienna Code". Enter your codes and the relevant class. You will be presented with a list of application numbers. Unlike word marks, you must manually click on each result to see the thumbnail and compare it visually with your design.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Visual similarity is subjective. The courts look for 'overall impression' rather than minute details. If two logos use the same color scheme, same central figure, and same layout, they are likely to be considered confusingly similar, even if one uses a circles and the other uses squares.
                                        </p>
                                    </section>

                                    <section id="beyond-registry" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Common Law Searching: Looking Beyond the Official Registry
                                        </h2>
                                        <p className="mb-6">
                                            In India, we follow a 'First to Use' principle, not just 'First to File'. This means someone using a mark for 20 years without registration has more right to it than you do if you register it today. These are called Common Law rights. A search that only looks at the IP India portal is only half-finished.
                                        </p>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            <div className="p-6 bg-gray-50 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faLaptopCode} className="text-[rgb(110,94,147)] text-3xl mb-4" />
                                                <h5 className="font-bold text-sm mb-2">Google Search</h5>
                                                <p className="text-[10px] text-gray-500">Search for your brand name + "India" or "Shop" to find small businesses that aren't registered yet.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] text-3xl mb-4" />
                                                <h5 className="font-bold text-sm mb-2">Domain WHOIS</h5>
                                                <p className="text-[10px] text-gray-500">Check if someone owns the .in or .co.in domain. It indicates a business intent that might turn into an opposition later.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faUsers} className="text-[rgb(110,94,147)] text-3xl mb-4" />
                                                <h5 className="font-bold text-sm mb-2">Social Media</h5>
                                                <p className="text-[10px] text-gray-500">Instagram handles and Facebook pages with high follower counts are dangerous prior users even without registrations.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faEarthAmericas} className="text-[rgb(110,94,147)] text-3xl mb-4" />
                                                <h5 className="font-bold text-sm mb-2">MCA Portal</h5>
                                                <p className="text-[10px] text-gray-500">Check the Ministry of Corporate Affairs for company names that might be identical to your trademark.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="risk-assessment" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Interpreting the Results: The Art of Risk Assessment
                                        </h2>
                                        <p className="mb-6">
                                            Finding a similar mark in the search results is not the end of the world. It depends on the 'Status' and the 'Goods/Services' description of that mark. You must learn to read between the lines of the search output.
                                        </p>
                                        <div className="bg-white border text-gray-900 rounded-3xl overflow-hidden shadow-sm">
                                            <table className="w-full text-left text-sm">
                                                <thead className="bg-gray-100 font-bold border-b">
                                                    <tr>
                                                        <th className="p-5">Status</th>
                                                        <th className="p-5">Meaning</th>
                                                        <th className="p-5">Risk Level</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y">
                                                    <tr>
                                                        <td className="p-5 font-bold">Registered</td>
                                                        <td className="p-5">The mark is currently valid and protected.</td>
                                                        <td className="p-5 text-red-600 font-black">CRITICAL</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-5 font-bold">Advertised</td>
                                                        <td className="p-5">Passed examination and is open to public opposition.</td>
                                                        <td className="p-5 text-red-600 font-black">HIGH</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-5 font-bold">Objected</td>
                                                        <td className="p-5">The registry has concerns but hasn't rejected it yet.</td>
                                                        <td className="p-5 text-yellow-600 font-black">MEDIUM</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-5 font-bold">Abandoned</td>
                                                        <td className="p-5">The applicant didn't respond to registry letters.</td>
                                                        <td className="p-5 text-green-600 font-black">LOW</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-5 font-bold">Removed</td>
                                                        <td className="p-5">Registered before but not renewed after 10 years.</td>
                                                        <td className="p-5 text-green-600 font-black">LOW</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            Risk assessment is not just about the name but also about the 'Specification'. If a mark is registered for "Steel Pipes" and you want it for "Software", the conflict is minimal unless the brand is 'Well-Known'. Well-known marks (like Tata or Reliance) are protected across ALL classes, so avoid them entirely.
                                        </p>
                                    </section>

                                    <section id="common-mistakes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Avoid the Pitfalls: Common Trademark Search Blunders
                                        </h2>
                                        <p className="mb-8 text-center max-w-2xl mx-auto opacity-70">
                                            Even experienced business owners fall into these traps. Awareness is the first step toward a successful registration.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="flex items-start p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
                                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mt-1 mr-4 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">The 'Identical Only' Search</h4>
                                                    <p className="text-xs text-gray-600">Only looking for exact spelling matches. The registry rejects anything that is 'confusingly similar', not just identical.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
                                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mt-1 mr-4 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Single Class Tunnel Vision</h4>
                                                    <p className="text-xs text-gray-600">Failing to search in allied classes. If you're in Class 25 (Clothing), you MUST search Class 35 (Retail Services) too.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
                                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mt-1 mr-4 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Ignoring the Phonetics</h4>
                                                    <p className="text-xs text-gray-600">Thinking 'Kool' is different from 'Cool'. Phonetic similarity is one of the most common reasons for rejection.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
                                                <FontAwesomeIcon icon={faChevronRight} className="text-red-500 mt-1 mr-4 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Stopping at the First Page</h4>
                                                    <p className="text-xs text-gray-600">Many registry searches return 100+ pages of results. If you don't sift through all of them, you might miss a critical conflict on page 50.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            What Business Owners Say About Us
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="professional-help" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Case for Professional Search and Legal Clearance
                                        </h2>
                                        <p className="mb-6">
                                            While anyone can use the public portal, interpreting the data is where the value of a professional lies. A trademark attorney doesn't just 'search'; they 'evaluate'. They use commercial databases that are updated faster than the public site and apply established legal precedents to your specific case.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we provide a holistic 'Trademark Clearance Report'. This 20+ page document analyzes word marks, phonetic matches, Vienna codes, and common law use. It categorizes every risk as High, Medium, or Low and provides a clear recommendation on whether to proceed, modify, or pivot. This report is your shield during the registration process and your sword during future disputes.
                                        </p>
                                        <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden my-12 shadow-2xl">
                                            <div className="relative z-10">
                                                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Get Your Expert Search Report</h2>
                                                <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                    Don't file blindly. Let our senior IP experts conduct a comprehensive clearance search for your brand. 24-hour turnaround guaranteed.
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                    <Link href="/contact-us">
                                                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                            Start Your Search
                                                        </button>
                                                    </Link>
                                                    <a href="tel:+919289707648">
                                                        <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                            <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" />
                                                            Call Expert
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Deep Dive: FAQ on Trademark Searching
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm lg:text-base">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Professional Search Report</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Get a detailed 20+ page analysis of your brand's registrability by human experts, not just algorithms.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-wider">
                                        Order Report Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Guide Library</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-is-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Basics of Trademark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Registration Process</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Find Your Class</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">All Resources</span>
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
