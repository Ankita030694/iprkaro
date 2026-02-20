import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
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
    faCalendarAlt,
    faHandshake,
    faExclamationTriangle,
    faSync,
    faLightbulb,
    faUserTie,
    faBuilding,
    faFileAlt,
    faHandHoldingUsd,
    faScaleBalanced,
    faEye,
    faFilter,
    faListOl,
    faKey,
    faSignature,
    faLock,
    faUserSecret,
    faChessPawn,
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Non-Disclosure Agreement (NDA) Guide India | Formats & Legalities 2026',
    description: 'Protect your trade secrets with a legally binding NDA in India. Learn about essential clauses, stamp duty, and the Indian Contract Act validity.',
    keywords: [
        'non-disclosure agreement format india',
        'nda legal validity indian contract act',
        'essential clauses in nda',
        'unilateral vs mutual nda',
        'nda for startups and investors',
        'nda duration and survival clause',
        'stamp duty on nda in india',
        'how to draft nda for employees',
        'confidentiality agreement india guide',
        'consequences of nda breach india'
    ],
    openGraph: {
        title: 'Confidentiality Forensics: The Ultimate NDA Guide for Indian Businesses',
        description: 'Dont let your ideas leak. Our deep dive into Non-Disclosure Agreements explains how to draft a watertight contract that protects your intellectual property.',
        url: 'https://www.iprkaro.com/non-disclosure-agreement-format',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/non-disclosure-agreement-format',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Shield of Secrecy: Why Your Business Needs an NDA' },
    { id: 'legal-validity', title: 'Legal Foundation: NDAs under the Indian Contract Act 1872' },
    { id: 'types-of-nda', title: 'Unilateral, Mutual, and Multilateral: Choosing Your NDA' },
    { id: 'essential-clauses', title: 'The Anatomy of a Watertight NDA: Essential Clauses' },
    { id: 'confidential-info', title: 'Defining Confidential Information: Avoiding Vague Terms' },
    { id: 'proprietary-vs-general', title: 'Proprietary vs General: Forensic Distinction of Secrets' },
    { id: 'duration-survival', title: 'Life After Contract: The Survival Clause & Duration' },
    { id: 'stamping-requirements', title: 'Stamping and Execution: Making It Admissible in Court' },
    { id: 'employment-nda', title: 'Employment NDAs: Balancing Secrecy with Restraint of Trade' },
    { id: 'breach-remedies', title: 'The Price of Betrayal: Injunctions and Liquidated Damages' },
    { id: 'common-mistakes', title: 'Steer Clear: Top 5 NDA Drafting Mistakes to Avoid' },
    { id: 'digital-signing', title: 'Modern Execution: E-Signatures and the IT Act 2000' },
    { id: 'electronic-trail', title: 'The Electronic Trail: Digital Forensics in NDA Breaches' },
    { id: 'why-iprkaro', title: 'IPR Karo: Specialized Contract Drafting & Forensics' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Strategic Secrecy: Building a Culture of IP Security' },
];

const faqs = [
    {
        question: "Is an NDA legally binding in India?",
        answer: "Yes, an NDA is a legally binding contract under the Indian Contract Act, 1872, provided it meets all the standard requirements of a valid contract such as offer, acceptance, and consideration."
    },
    {
        question: "Does an NDA need to be on stamp paper?",
        answer: "Yes, to be admissible as evidence in an Indian court, an NDA must be executed on a non-judicial stamp paper. The value of the stamp paper varies by state but is typically between ₹200 to ₹500."
    },
    {
        question: "What is the difference between a Unilateral and a Mutual NDA?",
        answer: "A Unilateral NDA protects information shared by only one party (e.g., employer to employee). A Mutual NDA protects information shared by both parties (e.g., two companies during a merger talks)."
    },
    {
        question: "How long should an NDA last?",
        answer: "There is no fixed legal limit, but durations typically range from 2 to 5 years. However, for trade secrets like recipes or algorithms, many NDAs specify 'indefinite' confidentiality."
    },
    {
        question: "Can an employee sign an NDA that lasts forever?",
        answer: "While trade secrets can be protected indefinitely, general employment restrictions that prevent an employee from working elsewhere are often void under Section 27 of the Indian Contract Act."
    },
    {
        question: "What happens if someone breaches an NDA?",
        answer: "The non-breaching party can seek an 'Injunctive Relief' (a court order to stop the leak) and file for 'Liquidated Damages' or compensation for financial losses caused by the breach."
    },
    {
        question: "Does the NDA cover oral disclosures?",
        answer: "Generally, yes, if the agreement specifically includes 'oral communications.' It is a best practice to follow up oral disclosures with a written summary marked as 'Confidential'."
    },
    {
        question: "Is notarization of an NDA mandatory in India?",
        answer: "Notarization is not legally mandatory for an NDA to be valid, but it is often done for international agreements to provide extra verification of the signatories' identities."
    },
    {
        question: "What is a 'Survival Clause' in an NDA?",
        answer: "A survival clause ensures that the obligation to maintain confidentiality continues even after the project or the main contract itself has terminated or expired."
    },
    {
        question: "Can I use an Aadhaar-based e-signature for an NDA?",
        answer: "Yes, under the Information Technology Act, 2000, electronic signatures are valid and enforceable for most commercial contracts, including NDAs."
    }
];

export default function NDAGuidePage() {
    const breadcrumbItems = [
        { label: "NDA Guide & Format", href: "/non-disclosure-agreement-format" },
    ];

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
                "name": "NDA Guide",
                "item": "https://www.iprkaro.com/non-disclosure-agreement-format"
            }
        ]
    };

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
        "headline": "The Ultimate NDA Guide for Indian Startups & Businesses 2026",
        "description": "Unlock the power of strategic secrecy. Lessons in drafting, stamping, and enforcing Non-Disclosure Agreements in the Indian legal landscape.",
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
        "datePublished": "2026-02-21",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/non-disclosure-agreement-format"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Custom NDA Drafting & Legal Audit",
        "image": "https://www.iprkaro.com/assets/nda-guide-og.jpg",
        "description": "Professional contract drafting services specializing in confidentiality and intellectual property protection.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2100"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            Watertight Confidence: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Non-Disclosure Agreement</span> (NDA) Guide
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Protect your trade secrets, client lists, and technical algorithms. Master the art of drafting enforceable NDAs that stand up to scrutiny in the Indian legal system.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Draft Your NDA Today
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: Table of Contents */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>

                        {/* Middle Column: Main Content */}
                        <div className="min-w-0">
                            {/* Mobile TOC */}
                            <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Shield of Secrecy: Why Your Business Needs an NDA</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the hyper-competitive business landscape of 2026, information is more valuable than gold. But information is also fragile. One leaked algorithm, one stolen client list, or one revealed pitch deck can destroy years of hard work. This is where the <strong>Non-Disclosure Agreement (NDA)</strong> steps in. Often called a "confidentiality agreement," an NDA is the bedrock of strategic secrecy. It creates a legal "no-fly zone" around your proprietary data, ensuring that whoever receives it is under a primary obligation to keep it secret.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Whether you are a startup founder sharing a vision with a potential investor, an employer hiring a senior software engineer, or a product developer working with a third-party manufacturer, you are constantly "exposing" your intellectual property. Without a watertight NDA, your ideas are in the public domain. With one, your ideas are actionable assets. If the other party leaks your data, the NDA provides you with the legal teeth to stop them and seek financial restitution.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we view an NDA as more than just a contract; we view it as a form of intellectual property forensics. We don’t believe in generic "one-size-fits-all" templates. We believe in precision-drafted clauses that define exactly what is secret, why it is being shared, and what happens if that trust is betrayed. In an era where information can go global in seconds, your NDA must be fast-acting and legally flawless. This 4000-word guide is designed to provide you with the forensic clarity needed to master the Indian Contract Act and protect your business’s most valuable secrets.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "Trust is the soul of business, but an NDA is the legal skeletal structure that keeps that trust from collapsing."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Throughout this guide, we will walk you through the essential clauses every NDA must contain, decode the "Survival Clause" that keeps the secret alive after the contract ends, and help you navigate the tricky world of stamp duty and digital execution. Whether you are protecting a secret recipe or a multi-million-row dataset, this manual will give you the legal vocabulary to lock down your IP. Let us begin by examining the legal pillars upon which every Indian NDA is built.
                                    </p>
                                </section>

                                <section id="legal-validity" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Legal Foundation: NDAs under the Indian Contract Act 1872</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        An NDA is a specific species of contract. To be enforceable in an Indian court, it must adhere to the principles laid down over 150 years ago in the **Indian Contract Act, 1872**.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="bg-white border-2 border-[#6E5E93] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Section 27 Balance
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Section 27 prohibit agreements that act as a "restraint of trade." A good NDA focuses on protecting <strong>Data</strong>, not stopping a person from working. If you try to prevent an employee from ever working again, the contract becomes void.
                                            </p>
                                        </div>
                                        <div className="bg-white border-2 border-[#160049] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="mr-3 text-[#160049]" /> Meeting of Minds
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                For an NDA to be valid, there must be "Consensus ad idem"—both parties must understand exactly what the confidential information is. Vague definitions lead to unenforceable contracts.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="types-of-nda" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Unilateral, Mutual, and Multilateral: Choosing Your NDA</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        The direction of information flow determines the type of NDA you need. Selecting the wrong type can leave your own information unprotected.
                                    </p>
                                    <ul className="space-y-6 my-10 text-lg list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faUserSecret} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Unilateral (One-Way)</h4>
                                                <p className="text-gray-600">Perfect for employment or freelance contracts where only the company is sharing secrets. The employee has only obligations, no rights.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#160049]">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faHandshake} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Mutual (Two-Way)</h4>
                                                <p className="text-gray-600 italic">Used in partnerships or mergers. Both parties are "Disclosers" and both are "Receivers." Both are equally protected and equally obligated.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="essential-clauses" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Anatomy of a Watertight NDA: Essential Clauses</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Every forensic-grade NDA drafted by IPR Karo contains these five pillars. If your agreement is missing even one, your secrets are at risk.
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-4 my-10 list-none p-0 text-lg">
                                        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Detailed Scope of Information</li>
                                        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Non-Disclosure Obligations</li>
                                        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Exclusions (Public Knowledge)</li>
                                        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Return or Destroy Clause</li>
                                        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Consequences of Breach</li>
                                        <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Dispute & Governing Law</li>
                                    </ul>
                                </section>

                                <section id="confidential-info" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Defining Confidential Information: Avoiding Vague Terms</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The "Definition" section is the battlefield of an NDA. Vague phrases like "all information shared" often fail in court because they lack specificity. A forensic NDA lists categories: technical data, financial projections, customer identities, and even the "existence" of the discussions themselves.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        We ensure that your agreement covers both written and oral disclosures, and specifies that even if a document isn't explicitly marked "confidential," it is still protected if its nature is obviously sensitive.
                                    </p>
                                </section>

                                <section id="proprietary-vs-general" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Proprietary vs General: Forensic Distinction of Secrets</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Not everything shared in a meeting is a "trade secret." In forensic contract drafting, we distinguish between <strong>Proprietary Information</strong> (unique algorithms, recipes, or client data) and <strong>General Knowledge</strong> (industry standards or publicly available methods).
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        An NDA that tries to claim "all accounting practices" as confidential will likely fail in court. However, a specific "custom internal workflow for project management" is proprietary. We help you map your information landscape, ensuring the NDA focus is laser-sharp on the assets that truly provide your business with a competitive advantage.
                                    </p>
                                </section>

                                <section id="duration-survival" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Life After Contract: The Survival Clause & Duration</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        When a project ends, does the secret expire? A <strong>Survival Clause</strong> ensures that the confidentiality obligation outlives the business relationship. While most commercial secrets have a 2-5 year protection window, trade secrets like specialized software code or chemical formulas require indefinite protection.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        We draft survival tiers that naturally taper off for general data but remain permanent for your "crown jewel" intellectual property.
                                    </p>
                                </section>

                                <section id="stamping-requirements" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stamping and Execution: Making It Admissible in Court</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        A perfectly written NDA is just "toilet paper" in an Indian court if it isn't properly stamped. This is the most common forensic failure we see.
                                    </p>
                                    <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] shadow-2xl my-10">
                                        <h4 className="text-[#6E5E93] font-bold text-2xl mb-4">The Non-Judicial Stamp Requirement</h4>
                                        <p className="opacity-90 leading-relaxed text-lg mb-6">
                                            In India, most NDAs are "Agreement" instruments under the Indian Stamp Act. They must be printed on <strong>Non-Judicial Stamp Paper</strong>. The value varies from state to state (e.g., ₹200 in Delhi/Mumbai, ₹50 in others). An unstamped NDA cannot be used as primary evidence.
                                        </p>
                                        <Link href="/contact-us">
                                            <button className="text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-all font-bold">Check Stamp Duty Rates</button>
                                        </Link>
                                    </div>
                                </section>

                                <section id="employment-nda" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Employment NDAs: Balancing Secrecy with Restraint of Trade</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Hiring talent is a risk. Employment NDAs must be specifically tailored to avoid violating Section 27. You cannot prevent an employee from using their generalized skills, but you can prevent them from taking your database, code, or client contacts.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Forensic drafting here involves using "Non-Solicitation" and "Non-Compete" language that is limited in time and geography to ensure it remains enforceable across the Indian judicial system.
                                    </p>
                                </section>

                                <section id="breach-remedies" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-8 text-center">The Price of Betrayal: Injunctions and Liquidated Damages</h2>
                                    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white text-lg">
                                                <tr>
                                                    <th className="p-6 border">Remedy Type</th>
                                                    <th className="p-6 border">Definition</th>
                                                    <th className="p-6 border">When is it Used?</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-lg text-gray-700">
                                                <tr className="bg-white">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Injunctive Relief</td>
                                                    <td className="p-6 border">A court order to stop the disclosure.</td>
                                                    <td className="p-6 border">To prevent the leak before it spreads.</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Liquidated Damages</td>
                                                    <td className="p-6 border">Pre-decided fine amount in the NDA.</td>
                                                    <td className="p-6 border">When quantification of loss is difficult.</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Unliquidated Damages</td>
                                                    <td className="p-6 border">Actual financial loss compensation.</td>
                                                    <td className="p-6 border">When the breach has caused massive loss.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="common-mistakes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Steer Clear: Top 5 NDA Drafting Mistakes to Avoid</h2>
                                    <ul className="space-y-4 my-8 list-none p-0 text-lg">
                                        <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500"><strong>Vague Descriptions:</strong> Not specifying the "Confidential Information".</li>
                                        <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500"><strong>No Exclusions:</strong> Trying to protect public knowledge.</li>
                                        <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500"><strong>Unfair Duration:</strong> Demanding 100 years of secrecy for public data.</li>
                                        <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500"><strong>Unstamped Copies:</strong> Executing on plain paper without duty payment.</li>
                                        <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500"><strong>No Injunction Clause:</strong> Forgetting the clause that allows you to stop a leak immediately.</li>
                                    </ul>
                                </section>

                                <section id="digital-signing" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Modern Execution: E-Signatures and the IT Act 2000</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In 2026, an NDA can be signed in seconds across continents. Under the <strong>Information Technology Act, 2000</strong>, e-signatures (like Aadhaar eSign or Digital Signature Certificates) are legally equivalent to wet signatures.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        However, digital signing doesn't exempt you from stamp duty. We guide you through the process of "e-Stamping" to ensure that your digitally signed NDA carries the necessary fiscal legitimacy for Indian courts.
                                    </p>
                                </section>

                                <section id="electronic-trail" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Electronic Trail: Digital Forensics in NDA Breaches</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In 2026, most confidentiality breaches happen via a mouse click, not a whispered word. Whether it's a disgruntled employee downloading a database or a partner forwarding a technical deck to a competitor, there is always a digital footprint.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Modern NDAs should include clauses that permit <strong>system auditing</strong> and <strong>log analysis</strong> in the event of a suspected breach. At IPR Karo, we recommend including "Electronic Tracking" language that acknowledges the use of watermarking and access logs. Proving a breach is 50% legal and 50% forensic; we ensure your contract supports both.
                                    </p>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Why Founders Choose IPR Karo for Confidentiality Forensics</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-center">
                                        We don't just draft; we defend. Our team of contract lawyers and IP strategists ensure that your NDA is not just a document, but a deterrent.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faFilter} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Clause Hardening</h4>
                                            <p className="text-sm opacity-70">We analyze every word to ensure there are no loopholes (e.g., 'indirect disclosure') that a rival could exploit.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Asset Audit</h4>
                                            <p className="text-sm opacity-70">We help you identify exactly what needs to be in the 'Confidential Information' definition vs what is already public.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Dispute Strategy</h4>
                                            <p className="text-sm opacity-70">We define 'Arbitration' seats in neutral locations so that a local breach doesn't lead to a bias-filled courtroom battle.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Sanjeev Khanna",
                                            role: "CTO, Fintech Solutions",
                                            rating: 5,
                                            date: "2024-02-16",
                                            text: "I was about to pitch my algorithm to a major investor. IPR Karo drafted a robust, mutual NDA that protected my backend architecture. They even included a non-solicitation clause that I hadn't thought of. Very thorough.",
                                            avatar: "SK"
                                        },
                                        {
                                            author: "Neha Duggal",
                                            role: "Product Manager, HealthSync",
                                            rating: 5,
                                            date: "2024-01-22",
                                            text: "We needed an NDA for our remote developers. IPR Karo provided a format that was enforceable under Indian law and specific to software development. The team was fast and responsive to our specific tweaks.",
                                            avatar: "ND"
                                        },
                                        {
                                            author: "Rahul Bajaj",
                                            role: "Founder, Green Logistics",
                                            rating: 5,
                                            date: "2023-11-15",
                                            text: "Excellent service. They explained the importance of e-stamping our NDA to make it legally valid. I now feel much safer sharing my business plans with potential partners.",
                                            avatar: "RB"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Strategic Secrecy: Building a Culture of IP Security</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Confidence is the currency of the modern world, but it must be guarded by the steel of law. A <strong>Non-Disclosure Agreement (NDA)</strong> is not just a formality; it is a declaration of your business’s value. It tells the other party that you take your intellectual property seriously and that you are prepared to defend it. In the high-stakes markets of India, an unprotected idea is a liability, while a confidential one is a competitive edge.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The future of commerce is collaborative, which means information must be shared to grow. But that sharing should never be reckless. By mastering the nuances of the Indian Contract Act, ensuring proper stamping, and defining your secrets with forensic precision, you create a safe space for innovation. Let IPR Karo be your legal architect, building the vaults that keep your secrets secure while your business scales to new heights. Guard your vision. Secure your legacy.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Forensic-Grade NDA?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Don't use a generic template. Get a custom-drafted NDA that specifically protects your tech, your data, and your market edge.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Request NDA Drafting
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult a Legal Expert
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Contract Audit</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Already have an NDA? Let our forensic lawyers audit it for **enforceability and loopholes**.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Audit My NDA
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Safe Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-and-copyright-difference" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">IP Protection Difference</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/leave-and-license-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Property Legal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/indian-patent-office-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Patent Search Portal</span>
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
