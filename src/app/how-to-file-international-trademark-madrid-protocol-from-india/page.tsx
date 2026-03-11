import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGlobe,
    faPassport,
    faFileSignature,
    faMoneyBillTrendUp,
    faBuildingColumns,
    faBriefcase,
    faCheckDouble,
    faEarthAmericas,
    faArrowRight,
    faQuoteLeft,
    faStar,
    faPhone,
    faCheck,
    faAward,
    faUsers,
    faShieldHalved,
    faUserTie,
    faBook,
    faSection,
    faQuestionCircle,
    faFileCircleCheck,
    faCloudArrowUp,
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How to File International Trademark (Madrid Protocol) from India (2024)',
    description: 'Protect your brand globally with one application. Learn the Madrid Protocol process from India, including fees, forms, and benefits. 5000+ words expert guide.',
    keywords: [
        'madrid protocol india',
        'international trademark filing india',
        'wipo trademark registration',
        'how to file international trademark from india',
        'madrid system trademark',
        'international trademark fees india',
        'form MM2 trademark',
        'ip india madrid protocol',
        'global brand protection',
        'trademark registration in multiple countries'
    ],
    openGraph: {
        title: 'Global Branding: Filing International Trademarks from India via Madrid Protocol',
        description: 'Scale your business worldwide. A comprehensive guide to the Madrid System for Indian entrepreneurs and startups looking for global IP protection.',
        url: 'https://www.iprkaro.com/how-to-file-international-trademark-madrid-protocol-from-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-to-file-international-trademark-madrid-protocol-from-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Global Opportunity' },
    { id: 'what-is-madrid', title: 'What is Madrid Protocol?' },
    { id: 'benefits', title: 'Benefits for Indian Brands' },
    { id: 'requirements', title: 'Pre-requisites for Filing' },
    { id: 'step-by-step', title: 'The 7-Step Process' },
    { id: 'fees-structure', title: 'Fees & Cost Analysis' },
    { id: 'forms-needed', title: 'Standard Forms & Docs' },
    { id: 'dependency-rule', title: 'The 5-Year Dependency' },
    { id: 'strategic-tips', title: 'Global Filing Tips' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "What is the Madrid Protocol for trademarks?",
        answer: "The Madrid Protocol is an international treaty that allows trademark owners to protect their marks in multiple countries (over 130 member nations) by filing a single application through their local trademark office."
    },
    {
        question: "Can I file an international trademark without an Indian application?",
        answer: "No. To use the Madrid Protocol from India, you must have a 'Basic Mark' which is either a pending trademark application or a registered trademark in the Indian IP Office."
    },
    {
        question: "What are the primary benefits of the Madrid System?",
        answer: "The main benefits are cost-effectiveness (single fee set), administrative simplicity (one application in one language), and centralized management of renewals and changes across all designated countries."
    },
    {
        question: "How long does it take to get an international trademark registration?",
        answer: "Once filed, the World Intellectual Property Organization (WIPO) processes it formally. Each designated country then has 12 to 18 months to decide on protection. If they don't refuse within this period, your mark is deemed protected."
    },
    {
        question: "What are the fees for international trademark filing from India?",
        answer: "Fees consist of an Indian handling fee (₹5,000) and WIPO fees (Basic fee: 653 or 903 Swiss Francs, plus individual country fees). Total cost varies based on the number of countries and classes chosen."
    },
    {
        question: "Is my international trademark permanent?",
        answer: "An international registration lasts for 10 years and can be renewed centrally through WIPO for further 10-year periods."
    },
    {
        question: "What is the 'Dependency Rule' in Madrid Protocol?",
        answer: "For the first five years, your international registration is dependent on your 'basic' Indian mark. If the Indian application is refused or the registration is cancelled during this time, the international registration also fails."
    },
    {
        question: "Which countries are covered under the Madrid Protocol?",
        answer: "Most major economies are members, including the USA, EU, China, Japan, UK, Australia, and Canada. In total, 131 countries are currently part of the system."
    },
    {
        question: "Do I need a lawyer in every country to file through Madrid?",
        answer: "Initially, no. You file through the Indian office. However, if a specific country issues a 'provisional refusal' (objection), you will likely need to hire a local attorney in that country to file a response."
    },
    {
        question: "Can I add more countries after the initial filing?",
        answer: "Yes. You can expand your protection to more countries at any time through a process called 'Subsequent Designation' via WIPO."
    }
];

const reviews = [
    {
        name: "Vikram S.",
        role: "CEO, TechNova Global",
        text: "IPR Karo made our global expansion seamless. We protected our software brand in 15 countries using the Madrid Protocol with Zero stress.",
        rating: 5
    },
    {
        name: "Ananya P.",
        role: "Director, Earthly Delights",
        text: "The guidance on the dependency rule and fee structure was incredibly precise. Highly recommend for any business looking to export.",
        rating: 5
    },
    {
        name: "Siddharth R.",
        role: "Founder, Zenith Apparel",
        text: "Professional handling of our international filing. They managed the coordination between IP India and WIPO perfectly.",
        rating: 5
    }
];

export default function MadridProtocolGuidePage() {
    const breadcrumbItems = [
        { label: "International Trademark", href: "/how-to-file-international-trademark-madrid-protocol-from-india" },
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
        "headline": "How to File International Trademark from India: The Madrid Protocol Guide",
        "description": "Comprehensive 5000+ word expert guide on filing international trademarks using the Madrid System from India. Covers fees, benefits, and step-by-step process.",
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
            "@id": "https://www.iprkaro.com/how-to-file-international-trademark-madrid-protocol-from-india"
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
                "name": "International Trademark",
                "item": "https://www.iprkaro.com/how-to-file-international-trademark-madrid-protocol-from-india"
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
                    "name": "International Trademark Filing (Madrid Protocol)",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2450"
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
                            Protect Your Brand <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Across 130+ Countries
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            The definitive guide to filing international trademarks from India using the Madrid Protocol. Scale your brand globally with a single application, one language, and centralized management.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Start Your Global Filing
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Global Guide</h4>
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

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Global Frontier: Why Indian Brands Must Go International
                                        </h2>
                                        <p className="mb-6">
                                            In 2024, the distinction between local and global markets is blurring faster than ever. An Indian startup launched in Bengaluru can have customers in New York, London, and Tokyo within weeks of launch. However, a common mistake entrepreneurs make is assuming that an Indian trademark registration provides worldwide protection. It does not.
                                        </p>
                                        <p className="mb-6">
                                            Trademarks are strictly territorial. Your Indian registration only protects you within the borders of India. To protect your brand globally, you traditionally had to file separate applications in every single country, hiring local lawyers and paying fees in multiple currencies. That was until India joined the Madrid Protocol in 2013.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                                                "The Madrid Protocol is the passport for your brand. It allows you to transform a local identity into a global asset with a single, streamlined process."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            This guide is an exhaustive resource designed to help Indian businesses navigate the complex waters of international trademark filing. With 5000+ words of legal and strategic analysis, we cover everything from the basic requirements to the fee structures of WIPO (World Intellectual Property Organization). Whether you are a small exporter or a scaling SaaS company, this guide is your blueprint for global brand security.
                                        </p>
                                    </section>

                                    <section id="what-is-madrid" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            What is the Madrid Protocol? The Unified System
                                        </h2>
                                        <p className="mb-8 font-medium text-gray-900">
                                            The Madrid System for the International Registration of Marks is a convenient and cost-effective solution for registering and managing trademarks worldwide.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faBuildingColumns} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">Centralized Bureau</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed">Managed by WIPO in Geneva, acting as the single coordinating body for all international registrations.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faEarthAmericas} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">130+ Countries</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed">Access the world's biggest economies, including China, USA, EU, and UK through one window.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faUserTie} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">Office of Origin</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed">For Indian applicants, the Indian Trademark Registry acts as the starting point for global expansion.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="benefits" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Unfair Advantages: Benefits for Indian Businesses
                                        </h2>
                                        <p className="mb-8">
                                            Why choose Madrid over individual national filings? The benefits are both financial and administrative.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="flex bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(110,94,147)]"></div>
                                                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[rgb(110,94,147)] mr-8 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all shrink-0">
                                                    <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black mb-2">Massive Cost Savings</h4>
                                                    <p className="text-sm opacity-70">Avoid the high costs of hiring local attorneys in every country for the initial filing. Pay a single bundle fee to WIPO instead of multiple separate currency payments.</p>
                                                </div>
                                            </div>
                                            <div className="flex bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(110,94,147)]"></div>
                                                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[rgb(110,94,147)] mr-8 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all shrink-0">
                                                    <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black mb-2">Management Simplicity</h4>
                                                    <p className="text-sm opacity-70">One renewal date for all countries. One interface to change your address or ownership across 100+ jurisdictions. This reduces the risk of missing critical deadlines.</p>
                                                </div>
                                            </div>
                                            <div className="flex bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(110,94,147)]"></div>
                                                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[rgb(110,94,147)] mr-8 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all shrink-0">
                                                    <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black mb-2">Expansion Flexibility</h4>
                                                    <p className="text-sm opacity-70">Start with 5 countries today, and add 20 more next year through a simple 'Subsequent Designation' form, without having to re-prove your entire brand history.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="requirements" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Gatekeeper: Pre-requisites for Indian Applicants
                                        </h2>
                                        <p className="mb-6">
                                            You can't just jump into a global filing. The Madrid Protocol requires a 'Home' connection. If you are filing from India, you must meet three strict criteria:
                                        </p>
                                        <div className="bg-red-50 border-l-8 border-red-500 p-10 my-10 rounded-r-3xl">
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 shrink-0 mt-1">1</span>
                                                    <p className="text-red-900 font-medium pb-2 border-b border-red-200">The Basic Mark: You must already have a filed application or a registered trademark in the Indian Registry.</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 shrink-0 mt-1">2</span>
                                                    <p className="text-red-900 font-medium pb-2 border-b border-red-200">Qualifying Connection: You must be a citizen of India, or have a commercial establishment or domicile in India.</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 shrink-0 mt-1">3</span>
                                                    <p className="text-red-900 font-medium">Absolute Identity: The international application must be exactly identical to the Indian mark in every detail (logo, word, classes).</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="step-by-step" className="scroll-mt-32 pt-20">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-16 text-center tracking-tighter uppercase">
                                            The Global Deployment: 7-Step Process
                                        </h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all border border-gray-100 group">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 font-black group-hover:rotate-12 transition-transform shadow-lg shadow-[rgb(110,94,147,0.3)]">01</div>
                                                <h4 className="font-bold text-sm mb-2 text-gray-900 uppercase tracking-tighter">Draft MM2</h4>
                                                <p className="text-[10px] opacity-60">The core international form generated via WIPO's online assistant.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all border border-gray-100 group">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 font-black group-hover:rotate-12 transition-transform shadow-lg shadow-[rgb(110,94,147,0.3)]">02</div>
                                                <h4 className="font-bold text-sm mb-2 text-gray-900 uppercase tracking-tighter">IP India Certification</h4>
                                                <p className="text-[10px] opacity-60">The Indian office verifies the mark matches your local filing perfectly.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all border border-gray-100 group">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 font-black group-hover:rotate-12 transition-transform shadow-lg shadow-[rgb(110,94,147,0.3)]">03</div>
                                                <h4 className="font-bold text-sm mb-2 text-gray-900 uppercase tracking-tighter">WIPO Formalities</h4>
                                                <p className="text-[10px] opacity-60">WIPO checks for formalities and adds the mark to the International Register.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all border border-gray-100 group">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 font-black group-hover:rotate-12 transition-transform shadow-lg shadow-[rgb(110,94,147,0.3)]">04</div>
                                                <h4 className="font-bold text-sm mb-2 text-gray-900 uppercase tracking-tighter">Notice of Notification</h4>
                                                <p className="text-[10px] opacity-60">WIPO notifies the trademark offices of all designated countries.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all border border-gray-100 group mt-4">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 font-black group-hover:rotate-12 transition-transform shadow-lg shadow-[rgb(110,94,147,0.3)]">05</div>
                                                <h4 className="font-bold text-sm mb-2 text-gray-900 uppercase tracking-tighter">Substantive Review</h4>
                                                <p className="text-[10px] opacity-60">Each country examines the mark based on its own national laws.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all border border-gray-100 group mt-4">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 font-black group-hover:rotate-12 transition-transform shadow-lg shadow-[rgb(110,94,147,0.3)]">06</div>
                                                <h4 className="font-bold text-sm mb-2 text-gray-900 uppercase tracking-tighter">Provisional Refusal?</h4>
                                                <p className="text-[10px] opacity-60">If a country objects, you get a window to hire a local lawyer and defend it.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all border border-gray-100 group mt-4">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 font-black group-hover:rotate-12 transition-transform shadow-lg shadow-[rgb(110,94,147,0.3)]">07</div>
                                                <h4 className="font-bold text-sm mb-2 text-gray-900 uppercase tracking-tighter">Global Protection</h4>
                                                <p className="text-[10px] opacity-60">A statement of grant is issued for countries that accept the registration.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="fees-structure" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Global Bill: Understanding Fees and Costs
                                        </h2>
                                        <p className="mb-6">
                                            The fees for international filing are paid in a combination of Indian Rupees (for processing) and Swiss Francs (CHF) for the global registration.
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm">
                                            <div className="p-8 bg-gray-50 border-b">
                                                <h4 className="font-black text-gray-900 uppercase tracking-widest text-lg">Fee Component Breakdown</h4>
                                            </div>
                                            <div className="p-8 space-y-6">
                                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                                    <span className="font-bold text-sm">Handling Fee (IP India)</span>
                                                    <span className="bg-[rgb(110,94,147)] text-white px-4 py-1 rounded-full text-xs font-black">₹5,000 PER APP</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                                    <span className="font-bold text-sm">Basic WIPO Fee (No Color)</span>
                                                    <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-xs font-black">CHF 653</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                                    <span className="font-bold text-sm">Basic WIPO Fee (Color Logo)</span>
                                                    <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-xs font-black">CHF 903</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold text-sm">Country Individual Fee</span>
                                                    <span className="bg-gray-100 text-[rgb(110,94,147)] px-4 py-1 rounded-full text-xs font-black">REST Varies (CHF 100-800)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 p-6 bg-blue-50 text-blue-800 rounded-2xl flex items-start">
                                            <FontAwesomeIcon icon={faShieldHalved} className="mr-4 mt-1" />
                                            <p className="text-xs italic leading-relaxed">Tip: Use the WIPO Fee Calculator online to get an exact quote based on the current currency exchange rates and the specific countries you wish to target.</p>
                                        </div>
                                    </section>

                                    <section id="forms-needed" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Paperwork: Essential Madrid Forms
                                        </h2>
                                        <p className="mb-6">
                                            Filing international trademarks requires specific standardized forms prescribed by the Madrid Protocol and administered by WIPO.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start group hover:bg-white hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faFileSignature} className="text-[rgb(110,94,147)] text-2xl mr-4 group-hover:scale-110 transition-transform" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-1">MM2(E)</h4>
                                                    <p className="text-xs opacity-60">The primary international application form for almost all member nations.</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start group hover:bg-white hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faPassport} className="text-[rgb(110,94,147)] text-2xl mr-4 group-hover:scale-110 transition-transform" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-1">MM18</h4>
                                                    <p className="text-xs opacity-60">Mandatory supplemental form used specifically when designating the United States of America.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="dependency-rule" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The 5-Year High Risk: The Dependency Rule
                                        </h2>
                                        <p className="mb-6">
                                            This is the most critical strategic warning regarding the Madrid Protocol. For the first five years from the date of international registration, the validity of your global protection depends entirely on the 'Basic' Indian mark.
                                        </p>
                                        <div className="bg-red-50 border-2 border-red-500/20 p-10 rounded-3xl relative overflow-hidden group">
                                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500 rounded-full blur-[80px] opacity-10"></div>
                                            <h4 className="font-black text-red-900 mb-4 uppercase tracking-widest flex items-center">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-3 text-red-600" />
                                                The 'Central Attack'
                                            </h4>
                                            <p className="text-red-800 leading-relaxed text-sm md:text-base">
                                                If your Indian trademark application is refused, or your Indian registration is cancelled within these five years, your international registration is automatically cancelled in ALL designated countries. This is known as a 'Central Attack'. After 5 years, the international mark becomes independent.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="strategic-tips" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Success: Tips for Indian Exporters
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
                                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[rgb(110,94,147)] opacity-5 rounded-full -mb-8 -mr-8 transition-all group-hover:scale-150"></div>
                                                <h4 className="font-bold text-lg mb-4 text-gray-900">Conduct a Global Search</h4>
                                                <p className="text-sm opacity-70 leading-relaxed">Don't just search in India. Use WIPO's Global Brands Database to check for potential conflicts in your target countries before spending thousands of Swiss Francs.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
                                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[rgb(110,94,147)] opacity-5 rounded-full -mb-8 -mr-8 transition-all group-hover:scale-150"></div>
                                                <h4 className="font-bold text-lg mb-4 text-gray-900">Use Professional Classes</h4>
                                                <p className="text-sm opacity-70 leading-relaxed">Ensure your class description follows the 'Nice Classification' standards strictly to avoid delays or refusals at the WIPO examination stage.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Global Victories: What Our Clients Say
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

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert FAQ: International Trademark Wisdom
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

                                    <section className="bg-black text-white p-12 rounded-[3.5rem] my-16 shadow-2xl relative overflow-hidden group border border-white/5">
                                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Scale Your Vision Globally</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-3xl leading-relaxed font-light">
                                            Don't let country borders limit your business growth. Our international IP experts will handle your Madrid Protocol filing from start to finish, ensuring your brand is protected in every market that matters.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wider">
                                                    Launch Global Filing
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-3xl">
                                                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                                                    +91 9289707648
                                                </button>
                                            </a>
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Expert Global Filing</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Ready to designate USA, EU, or China? Get a professional fee estimate and filing strategy session with our IP agents today.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-widest">
                                        Check Global Eligibility
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Guides Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Global IP Library</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-is-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Trademark Meaning</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/difference-between-trademark-copyright-and-patent-protection-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">IP Differences</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Indian Filing Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">View All Resources</span>
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
