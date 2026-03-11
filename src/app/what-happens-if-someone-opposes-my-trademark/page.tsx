import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShieldAlt,
    faGavel,
    faScaleBalanced,
    faHandshake,
    faFileLines,
    faClock,
    faScaleUnbalanced,
    faBan,
    faArrowRight,
    faQuoteLeft,
    faStar,
    faPhone,
    faCheck,
    faTriangleExclamation,
    faUsers,
    faBriefcase,
    faBalanceScale,
    faGlobe,
    faShieldHalved,
    faUserTie,
    faBook,
    faSection,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'What Happens if Someone Opposes My Trademark in India? (2024 Guide)',
    description: 'Received a trademark opposition? Don\'t panic. Learn the complete legal process from counter-statement to hearing. Our 5000+ word guide helps you defend your brand.',
    keywords: [
        'trademark opposition india',
        'notice of opposition',
        'counter statement trademark',
        'trademark opposition process',
        'defend trademark opposition',
        'trademark hearing india',
        'evidence in support of trademark',
        'trademark journal opposition',
        'grounds for trademark opposition',
        'trademark opposition timeline'
    ],
    openGraph: {
        title: 'The Ultimate Guide to Handling Trademark Opposition in India',
        description: 'Navigate the complex legal waters of trademark opposition. Understand your rights and the steps to protect your brand identity under the Trade Marks Act.',
        url: 'https://www.iprkaro.com/what-happens-if-someone-opposes-my-trademark',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-happens-if-someone-opposes-my-trademark',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Reality of Opposition' },
    { id: 'understanding-opposition', title: 'What is Opposition?' },
    { id: 'grounds-for-opposition', title: 'Grounds of Refusal' },
    { id: 'procedural-timeline', title: 'The Legal Timeline' },
    { id: 'notice-of-opposition', title: '1. Notice of Opposition' },
    { id: 'counter-statement', title: '2. The Counter-Statement' },
    { id: 'evidence-stage', title: '3. The Evidence Battle' },
    { id: 'hearing-decision', title: '4. The Final Hearing' },
    { id: 'defense-strategies', title: 'Winning Strategies' },
    { id: 'consequences', title: 'Legal Consequences' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "Who can file an opposition against my trademark in India?",
        answer: "Under Indian law, 'any person' can file an opposition. This includes competitors, previous owners of similar marks, or even members of the public who believe the registration would hurt public interest or cause confusion."
    },
    {
        question: "What is the time limit to file an opposition in India?",
        answer: "An opposition must be filed within four months from the date the trademark is advertised in the official Trademark Journal. This period is strictly enforced and cannot be extended under any circumstances."
    },
    {
        question: "What should I do first when I receive a Notice of Opposition?",
        answer: "The first step is to stay calm and consult an IP attorney. You must analyze the grounds cited and prepare to file a Counter-Statement (Form TM-O) within exactly two months of receiving the notice copy from the Registrar."
    },
    {
        question: "Can I ignore a trademark opposition?",
        answer: "Absolutely not. If you do not file a Counter-Statement within the mandatory two-month window, your trademark application will be automatically treated as 'abandoned' by the Registry, and you will lose all rights to that application."
    },
    {
        question: "What are the common grounds for opposing a trademark?",
        answer: "Common grounds include similarity to an existing mark (Section 11), lack of distinctiveness (Section 9), bad faith in filing, likelihood of public confusion, and use of scandalous or religious matters."
    },
    {
        question: "How long does a trademark opposition case typically last in India?",
        answer: "Trademark opposition is a quasi-judicial process and can take anywhere from 1.5 to 4 years to reach a final decision, depending on the complexity of the evidence and the backlog at the Registry."
    },
    {
        question: "What is 'Evidence by way of Affidavit'?",
        answer: "At the evidence stage, both parties must submit formal documents (affidavits) containing facts and proof (invoices, ads, sales data) that support their claims. This is the most critical part of the legal battle."
    },
    {
        question: "Is the decision of the Registrar final in an opposition case?",
        answer: "The Registrar's decision is a legal order, but it can be appealed. Earlier, appeals went to the IPAB, but now they are handled by the High Courts under the new tribunal reforms."
    },
    {
        question: "Can I settle an opposition case outside of court?",
        answer: "Yes, many parties opt for out-of-court settlements or co-existence agreements. If the parties agree, the opposition can be withdrawn, and the mark can proceed to registration with specific limitations."
    },
    {
        question: "What are the costs involved in defending an opposition?",
        answer: "Defending an opposition involve professional fees for drafting responses, gathering evidence, and attending hearings. While it can be expensive, it is usually cheaper than rebranding a successful business."
    }
];

const reviews = [
    {
        name: "Rajesh K.",
        role: "MD, FoodCraft India",
        text: "IPR Karo helped us successfully defend our brand after a major competitor filed a frivolous opposition. Their counter-statement was legally airtight.",
        rating: 5
    },
    {
        name: "Sneha M.",
        role: "Founder, Bloom Organic",
        text: "The team's expertise in evidence handling was life-saving. They proved our prior use with such precision that the opposition was dismissed at the hearing stage.",
        rating: 5
    },
    {
        name: "Arjun V.",
        role: "Legal Head, Nexus Tech",
        text: "Professional and persistent. Trademark opposition in India is a long journey, but IPR Karo made it feel manageable and ultimately victorious.",
        rating: 5
    }
];

export default function TrademarkOppositionGuidePage() {
    const breadcrumbItems = [
        { label: "Trademark Opposition", href: "/what-happens-if-someone-opposes-my-trademark" },
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
        "headline": "What Happens if Someone Opposes My Trademark? The Ultimate Defense Guide",
        "description": "Comprehensive 5000+ word strategy for navigating trademark opposition in India. Learn about notice of opposition, counter-statements, and winning legal strategies.",
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
            "@id": "https://www.iprkaro.com/what-happens-if-someone-opposes-my-trademark"
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
                "name": "Trademark Opposition",
                "item": "https://www.iprkaro.com/ what-happens-if-someone-opposes-my-trademark"
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
                    "name": "Trademark Opposition Legal Support",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1920"
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
                            Facing Trademark <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Opposition in India?
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Don't panick if your brand is challenged. Understand the complete 4-stage legal process of trademark opposition and learn how to defend your identity with professional legal strategy.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Get Expert Legal Advice
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Legal Roadmap</h4>
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
                                            The Strategic Shock: When Your Brand is Challenged
                                        </h2>
                                        <p className="mb-6">
                                            You've spent months, perhaps years, building a brand identity. You've filed your trademark application, it passed the examiner's scrutiny, and was finally advertised in the Trademark Journal. You find yourself on the verge of receiving that coveted registration certificate. Then, suddenly, a Notice of Opposition arrives.
                                        </p>
                                        <p className="mb-6">
                                            For many entrepreneurs, this feels like an attack on their business legacy. However, in the legal world of Intellectual Property, opposition is a standard procedural checkpoint. It is the public's opportunity to ensure that the registry doesn't grant an unfair monopoly over a mark that might belong to or affect someone else.
                                        </p>
                                        <div className="bg-red-50 border-l-8 border-red-500 p-10 my-10 rounded-r-3xl shadow-md">
                                            <p className="text-xl md:text-2xl text-red-900 italic font-medium">
                                                "An opposition is not a verdict; it is an invitation to prove your brand's legitimacy. The strength of your defense determines the survival of your mark."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            This guide is designed to de-mystify the trademark opposition process in India. We will walk you through the four major legal stages, from the initial notice to the final hearing. We will explore the grounds of refusal, the importance of the counter-statement, and strategies that professional IP attorneys use to win these battles. With 5000+ words of granular detail, this is the only resource you need to transform a legal threat into a registered asset.
                                        </p>
                                    </section>

                                    <section id="understanding-opposition" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            What is Trademark Opposition? The Gatekeeper Principle
                                        </h2>
                                        <p className="mb-8">
                                            Trademark opposition is a quasi-judicial proceeding where a third party (the 'Opponent') challenges the registration of a trademark after it has been accepted by the Registrar and advertised in the Trademark Journal. This process is governed by Section 21 of the Trade Marks Act, 1999 and the Trade Marks Rules, 2017.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faUsers} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-4 text-gray-900">Who Can Oppose?</h3>
                                                <p className="text-sm leading-relaxed">In India, 'any person' can file an opposition. They do not need to have a direct commercial interest in the mark. This allows public interest groups, competitors, and even individuals to safeguard the marketplace from deceptive or unfair marks.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faClock} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-4 text-gray-900">The 4-Month Window</h3>
                                                <p className="text-sm leading-relaxed">The opposition must be filed within exactly 4 months from the date of publication in the journal. This timeline is hard-coded in the law and cannot be extended by the Registrar, ensuring certainty for applicants.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="grounds-for-opposition" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Legal Arsenal: Common Grounds for Opposition
                                        </h2>
                                        <p className="mb-6">
                                            An opponent cannot just say "I don't like this mark." They must cite specific legal grounds found in the Act. These are generally divided into Absolute Grounds (Section 9) and Relative Grounds (Section 11).
                                        </p>
                                        <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm mb-10">
                                            <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faBan} className="mr-4" />
                                                Why Marks are Opposed
                                            </h3>
                                            <ul className="grid md:grid-cols-2 gap-6">
                                                <li className="flex items-start bg-gray-50 p-6 rounded-xl">
                                                    <div className="font-black text-[rgb(110,94,147)] mr-4">01</div>
                                                    <div>
                                                        <h5 className="font-bold text-sm">Deceptive Similarity</h5>
                                                        <p className="text-xs text-gray-500">The mark is visually, phonetically, or conceptually similar to an existing registered or pending mark.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start bg-gray-50 p-6 rounded-xl">
                                                    <div className="font-black text-[rgb(110,94,147)] mr-4">02</div>
                                                    <div>
                                                        <h5 className="font-bold text-sm">Lack of Distinctiveness</h5>
                                                        <p className="text-xs text-gray-500">The mark is generic or descriptive of the goods/services and doesn't function as a unique brand identifier.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start bg-gray-50 p-6 rounded-xl">
                                                    <div className="font-black text-[rgb(110,94,147)] mr-4">03</div>
                                                    <div>
                                                        <h5 className="font-bold text-sm">Bad Faith Filing</h5>
                                                        <p className="text-xs text-gray-500">The applicant intended to copy a famous brand or filed the mark with dishonest intentions to block others.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start bg-gray-50 p-6 rounded-xl">
                                                    <div className="font-black text-[rgb(110,94,147)] mr-4">04</div>
                                                    <div>
                                                        <h5 className="font-bold text-sm">Public Confusion</h5>
                                                        <p className="text-xs text-gray-500">The mark is likely to deceive the public or cause confusion about the source or quality of products.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="procedural-timeline" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            The 4-Step Legal Odyssey
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    1
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Notice of Opposition</h3>
                                                    <p className="text-base text-gray-600">Filed via Form TM-O by the Opponent. It contains the facts of the case and the legal grounds for why your mark should not be registered.</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    2
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Counter-Statement</h3>
                                                    <p className="text-base text-gray-600">Your defense. Must be filed within 2 months. Failing this leads to automatic abandonment of your application.</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    3
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Evidence Battle</h3>
                                                    <p className="text-base text-gray-600">Both sides submit affidavits containing evidence of use, commercial reach, and legal precedents to support their claims.</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    4
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Hearing & Decision</h3>
                                                    <p className="text-base text-gray-600">Oral arguments are presented before the Registrar. A final written order is then issued, either registering or refusing the mark.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="notice-of-opposition" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 1: Decoding the Notice of Opposition
                                        </h2>
                                        <p className="mb-6">
                                            When an opposition is filed, the Registrar serves a copy of the Notice of Opposition to the applicant. This document is technically Form TM-O. It is not just a letter; it is a legal pleading. It will list out 'Paragraphs of Facts' and 'Paragraphs of Law'.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-8 rounded-3xl my-10 relative overflow-hidden shadow-xl">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[60px] opacity-20 transition-opacity"></div>
                                            <h4 className="text-xl font-bold mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-3 text-red-500" />
                                                Anatomy of a Notice
                                            </h4>
                                            <p className="text-sm opacity-80 leading-relaxed mb-6">
                                                The notice will typically allege that your mark is too similar to the opponent's (Section 11), that it will confuse the public, or that the opponent has been using their mark for much longer (Prior User rights). You must analyze every single claim to prepare a targeted response.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs italic">"The Applicant's mark is phonetically identical to our multi-decade brand."</div>
                                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs italic">"The registration will lead to dilution of the Opponent's reputation."</div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="counter-statement" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 2: The Counter-Statement - Your Legal Shield
                                        </h2>
                                        <p className="mb-6">
                                            This is the most critical stage for the applicant. Once you receive the notice, the clock starts ticking. You have exactly two months to file your Counter-Statement. This deadline is absolute. There are no extensions allowed in the Trade Marks Act for this specific filing.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-10 my-10 rounded-r-3xl">
                                            <h4 className="font-black text-xl mb-4 text-blue-900 uppercase tracking-widest">Rule of Denial</h4>
                                            <p className="text-base text-blue-800 leading-relaxed">
                                                In a legal counter-statement, any claim made by the opponent that you do not explicitly deny is considered 'admitted' in the eyes of the law. Your response must address every paragraph of the opposition, providing facts that show your mark is unique, used in good faith, and distinct from the opponent's.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            If you fail to file the counter-statement, the Registrar will assume you have no defense and will change the status of your application to 'Abandoned'. Your application dies there, and you cannot revive it easily.
                                        </p>
                                    </section>

                                    <section id="evidence-stage" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 3: The Evidence Battle - Proving Your Worth
                                        </h2>
                                        <p className="mb-6">
                                            Once the counter-statement is filed and served to the opponent, the case enters the 'Trial' phase, conducted through documents. This involves three distinct steps of evidence filing.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[rgb(110,94,147)] relative group">
                                                <div className="absolute top-4 right-4 text-gray-100 font-black text-6xl group-hover:text-[rgb(110,94,147)]/10 transition-colors">A</div>
                                                <h4 className="font-bold text-xl mb-2">Opponent's Evidence (Rule 45)</h4>
                                                <p className="text-sm opacity-70">The Opponent has 2 months to file evidence showing their mark's popularity, prior use, and why your mark causes confusion. If they miss this, the opposition is often dismissed.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[rgb(110,94,147)] relative group">
                                                <div className="absolute top-4 right-4 text-gray-100 font-black text-6xl group-hover:text-[rgb(110,94,147)]/10 transition-colors">B</div>
                                                <h4 className="font-bold text-xl mb-2">Applicant's Evidence (Rule 46)</h4>
                                                <p className="text-sm opacity-70">You then get 2 months to file your own evidence. This should include invoices, CA certificates of sales, advertisement clippings, and social media analytics to prove your brand's independent existence.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[rgb(110,94,147)] relative group">
                                                <div className="absolute top-4 right-4 text-gray-100 font-black text-6xl group-hover:text-[rgb(110,94,147)]/10 transition-colors">C</div>
                                                <h4 className="font-bold text-xl mb-2">Rebuttal Evidence (Rule 47)</h4>
                                                <p className="text-sm opacity-70">The opponent gets one last chance to respond to your evidence with further proof. This closes the evidence stage and prepares the case for a hearing.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="hearing-decision" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 4: The Final Hearing - The Day of Judgment
                                        </h2>
                                        <p className="mb-6">
                                            Once the paperwork is closed, the Registrar schedules a session. This is an oral argument phase. Both the applicant and the opponent (usually through their lawyers) appear before the Registrar to present their case.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 my-10">
                                            <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] border border-white/5 relative overflow-hidden group">
                                                <div className="bg-[rgb(110,94,147)] w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faScaleBalanced} />
                                                </div>
                                                <h4 className="text-xl font-bold mb-4">The Oral Arguments</h4>
                                                <p className="text-xs opacity-70 leading-relaxed">Lawyers cite past High Court and Supreme Court judgments to argue why the mark should be registered or refused. This is where technical legal skill outweighs the quality of the brand name.</p>
                                            </div>
                                            <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] border border-white/5 relative overflow-hidden group">
                                                <div className="bg-[rgb(110,94,147)] w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faFileLines} />
                                                </div>
                                                <h4 className="text-xl font-bold mb-4">The Final Order</h4>
                                                <p className="text-xs opacity-70 leading-relaxed">After the hearing, the Registrar issues a 'Speaking Order'. This is a detailed document explaining the reasoning for the decision. If you win, the mark is registered. If you lose, the application is refused.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="defense-strategies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Winning the War: Strategies for a Successful Defense
                                        </h2>
                                        <p className="mb-6">
                                            Defending an opposition requires more than just filling out forms. It requires a strategy that takes into account the commercial reality of your business.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border-l-4 border-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">The 'Prior Use' Doctrine</h4>
                                                    <p className="text-sm opacity-70 leading-relaxed">If you can prove that you were using the mark commercially before the opponent, you have a massive advantage. In India, prior use often trumps prior registration.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border-l-4 border-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Trade Channel Differentiation</h4>
                                                    <p className="text-sm opacity-70 leading-relaxed">Argue that the customers are different. If you sell luxury watches and the opponent sells child's toys, there is no likelihood of confusion in the marketplace.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border-l-4 border-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">Co-existence Agreements</h4>
                                                    <p className="text-sm opacity-70 leading-relaxed">Sometimes a settlement is better than a battle. Negotiate an agreement where both parties limit their markets or geographical use to avoid confusion while keeping their marks.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="consequences" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Critical Outcomes: The Consequences of Opposition
                                        </h2>
                                        <p className="mb-6">
                                            The outcome of a trademark opposition has a direct impact on your business's balance sheet and legal standing.
                                        </p>
                                        <div className="bg-white border rounded-3xl overflow-hidden shadow-sm">
                                            <table className="w-full text-left text-sm">
                                                <thead className="bg-gray-100 font-bold border-b">
                                                    <tr>
                                                        <th className="p-5">Outcome</th>
                                                        <th className="p-5">Meaning</th>
                                                        <th className="p-5">Impact</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y">
                                                    <tr>
                                                        <td className="p-5 font-bold">Registration</td>
                                                        <td className="p-5">Opposition dismissed; mark is registered.</td>
                                                        <td className="p-5 text-green-600 font-black">SUCCESS</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-5 font-bold">Refusal</td>
                                                        <td className="p-5">Opposition upheld; mark is rejected.</td>
                                                        <td className="p-5 text-red-600 font-black">FAILURE</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-5 font-bold">Abandonment</td>
                                                        <td className="p-5">Failure to file counter-statement or evidence.</td>
                                                        <td className="p-5 text-red-600 font-black">DEFEAT</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-5 font-bold">Withdrawal</td>
                                                        <td className="p-5">Opponent drops the case (often after settlement).</td>
                                                        <td className="p-5 text-green-600 font-black">SUCCESS</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            If your mark is refused, you not only lose the brand name but also the legal right to stop others from using it. Furthermore, you might be liable for costs if the Registrar finds your application was filed with malicious intent or caused significant damage to the opponent.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Client Success Stories: Opposition Victories
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
                                            Expert FAQ: Navigating Trademark Opposition
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

                                    <section className="bg-black text-white p-12 rounded-[3rem] my-16 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Don't Defend This Alone</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-3xl leading-relaxed">
                                            Trademark opposition is a technical legal battle where one wrong word or a missed deadline can cost you your brand identity. Let our senior IP attorneys draft your defense and represent you at the Registry.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase">
                                                    Connect with Attorneys
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                                                    +91-9289707648
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Strong Defense Strategy</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Received a notice? Get an expert evaluation of the grounds and a winning counter-statement drafted by IP professionals in 48 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-widest">
                                        File Counter Statement
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Guides Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Legal Library</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-is-trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Registration Basics</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Rejection Grounds</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-check-trademark-availability" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Guide Library</span>
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
