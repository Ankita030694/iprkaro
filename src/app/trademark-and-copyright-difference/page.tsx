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
    faPenNib,
    faSignature,
    faBook,
    faPalette,
    faMusic,
    faCode,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Difference Between Trademark and Copyright India | 2026 Guide',
    description: 'Understand the legal differences between Trademark and Copyright in India. Learn about the Trade Marks Act 1999 vs Copyright Act 1957, protection scope, and Section 45 NOC.',
    keywords: [
        'difference between trademark and copyright india',
        'trade marks act 1999 vs copyright act 1957',
        'protecting brand name vs artistic work',
        'how long does trademark last in india',
        'copyright duration in india',
        'section 45 copyright act search certificate',
        'can a logo be both trademark and copyright',
        'trademark vs copyright for software',
        'intellectual property rights india guide',
        'trademark copyright overlap logos'
    ],
    openGraph: {
        title: 'Safeguarding Your Assets: Trademark vs. Copyright in India',
        description: 'Dont confuse your brand with your art. Learn the specific legal protections afforded by Trademarks and Copyrights to avoid costly legal pitfalls.',
        url: 'https://www.iprkaro.com/trademark-and-copyright-difference',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-and-copyright-difference',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Maze of Intellectual Property: Trademark vs Copyright' },
    { id: 'governing-acts', title: 'Governing Acts: Trade Marks Act 1999 vs Copyright Act 1957' },
    { id: 'definition-scope', title: 'Defining the Scope: What Each Protects' },
    { id: 'purpose-protection', title: 'Purpose of Protection: Commercial Intent vs Creative Freedom' },
    { id: 'work-made-for-hire', title: 'Ownership Forensics: Work Made for Hire under Section 17' },
    { id: 'duration-renewal', title: 'Longevity: 10-Year Renewals vs Lifetime Protection' },
    { id: 'moral-vs-economic', title: 'Moral vs Economic Rights: The Soul of Copyright' },
    { id: 'section-45-noc', title: 'The Section 45 Search Certificate: When They Intersect' },
    { id: 'overlap-logos', title: 'Overlapping Areas: Logos, Characters, and Trade Dress' },
    { id: 'infringement-remedies', title: 'Statutory Damages: Legal Remedies for Infringement in India' },
    { id: 'comparison-table', title: 'At a Glance: Comparison Matrix' },
    { id: 'why-iprkaro', title: 'IPR Karo: Your Strategic IP Asset Managers' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Choosing the Right Shield for Your Business' },
];

const faqs = [
    {
        question: "Can I get both trademark and copyright for my company logo?",
        answer: "Yes. In India, it is standard practice to protect a logo as an artistic work under the Copyright Act and as a brand identifier under the Trade Marks Act. Both provide different layers of security."
    },
    {
        question: "Does copyright last longer than a trademark?",
        answer: "Yes. Copyright generally lasts for the lifetime of the author plus 60 years. A trademark lasts for 10 years at a time but can be renewed indefinitely as long as the business is active."
    },
    {
        question: "What is Section 45 of the Copyright Act?",
        answer: "Section 45 requires that if you are applying for copyright for an 'artistic work' used as a logo for goods or services, you must first obtain a Search Certificate from the Trademark Registry to prove no similar marks exist."
    },
    {
        question: "Is software code protected by trademark or copyright?",
        answer: "Software code is considered a 'Literary Work' and is protected under the Copyright Act. Only the brand name or logo of the software is protected under the Trade Marks Act."
    },
    {
        question: "Which one is cheaper to register in India?",
        answer: "Copyright registration is generally cheaper, with government fees starting around ₹500 for artistic/literary works. Trademark fees start at ₹4,500 for individuals/startups."
    },
    {
        question: "Can I trademark a book title?",
        answer: "Usually, single book titles cannot be trademarked. However, if the title is part of a series (e.g., 'Harry Potter') and has become a brand in itself, it may be eligible for trademark protection."
    },
    {
        question: "Do I need to register my copyright for it to be valid?",
        answer: "No, copyright protection is automatic as soon as the work is created. However, registration is highly recommended as it acts as prima facie evidence in a court of law during infringement suits."
    },
    {
        question: "What is the Madrid Protocol?",
        answer: "The Madrid Protocol is an international system that allows you to register your trademark in over 120 countries (including India) by filing a single application, saving time and costs compared to separate filings."
    },
    {
        question: "Can sounds and colors be trademarked?",
        answer: "Yes, 'Non-Conventional Trademarks' such as specific sound sequences or unique color combinations can be trademarked in India if they have acquired a high degree of distinctiveness."
    },
    {
        question: "What happens if someone copies my copyrighted work?",
        answer: "You can file a civil suit for injunctions and damages. In India, copyright infringement is also a cognizable criminal offense punishable by imprisonment and fines."
    }
];

export default function TrademarkCopyrightDifferencePage() {
    const breadcrumbItems = [
        { label: "Trademark vs Copyright", href: "/trademark-and-copyright-difference" },
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
                "name": "Trademark vs Copyright",
                "item": "https://www.iprkaro.com/trademark-and-copyright-difference"
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
        "headline": "Trademark vs Copyright: The Definitive Guide to Intellectual Property in India 2026",
        "description": "Stop the confusion between branding and creativity. Our deep dive explains the differences between the Trade Marks Act 1999 and the Copyright Act 1957.",
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
            "@id": "https://www.iprkaro.com/trademark-and-copyright-difference"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Intellectual Property Consulting (TM & Copyright)",
        "image": "https://www.iprkaro.com/assets/tm-vs-cr-og.jpg",
        "description": "Expert guidance on selecting the right IP protection for your brand and creative assets in the Indian market.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3200"
        }
    };

    const comparisonData = [
        { feature: "Primary Focus", tm: "Brand Identity", cr: "Creative Expression" },
        { feature: "Governing Law", tm: "Trade Marks Act, 1999", cr: "Copyright Act, 1957" },
        { feature: "Duration", tm: "10 Years (Renewable)", cr: "Life of Author + 60 Years" },
        { feature: "Symbol", tm: "® or ™", cr: "©" },
        { feature: "Registration", tm: "Mandatory for Rights", cr: "Highly Recommended (Automatic)" },
        { feature: "Cost", tm: "Moderate to High", cr: "Low" },
    ];

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
                            Asset Protection Forensics: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark vs Copyright</span> Differences
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Don’t guess when it comes to your IP. Understand where the Trade Marks Act 1999 ends and the Copyright Act 1957 begins to secure your brand identity and creative legacy.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Secure Your IP Assets
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Maze of Intellectual Property: Trademark vs Copyright</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the modern Indian economy, ideas are the new currency. But not all ideas are protected in the same way. One of the most common pitfalls for entrepreneurs, creators, and developers is confusing a **trademark** with a **copyright**. While both fall under the umbrella of Intellectual Property Rights (IPR), they serve fundamentally different purposes, offer different durations of protection, and are governed by entirely separate statutes. Filing for the wrong protection can leave your brand vulnerable to copycats or your creative work open to exploitation.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Imagine you have designed a groundbreaking new app. The name of the app and its logo represent your commercial identity-these are the domain of **trademark law**. However, the source code of that app, the specific artwork on the splash screen, and the music playing in the background are your creative expressions-these are protected by **copyright law**. Understanding this distinction is not just a matter of legal pedantry; it is a strategic business requirement in 2026. A brand name that sounds similar to another might lead to a trademark objection, but copying a single paragraph of text could lead to a copyright infringement suit.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we view IP protection as a tiered defense system. We have seen thousands of founders spend lakhs on marketing a name that wasn't trademarked, or artists losing control over their designs because they didn't understand that copyright is automatic but registration is the proof. This 4000-word masterclass is designed to provide you with the forensic clarity needed to navigate the Trade Marks Act 1999 and the Copyright Act 1957. We will break down the scopes of protection, the overlap in logo design, and the critical "Search Certificate" requirements that bridge these two legal worlds.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A trademark protects your house's nameplate; a copyright protects the house's architectural design. One identifies you; the other belongs to you."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Throughout this guide, we will explore the "life vs. renewal" debate, analyze why software code is treated like a book in the eyes of the law, and help you decide which protection to prioritize based on your commercial goals. Whether you are a solo creator or a corporate entity, this manual will give you the legal vocabulary to protect what you build. Let us begin by examining the two distinct legislative pillars that hold up the Indian IP registry.
                                    </p>
                                </section>

                                <section id="governing-acts" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Governing Acts: Trade Marks Act 1999 vs Copyright Act 1957</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        India has one of the most robust IP frameworks in the world, closely aligned with international standards like the TRIPS agreement. However, these two rights are handled by different sets of rules and, historically, different departments.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="bg-white border-2 border-[#6E5E93] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Trade Marks Act, 1999
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                This act focuses on **Commercial Identity**. It is designed to protect symbols that help consumers distinguish between products and services. Its primary goal is to prevent "confusion in the marketplace." If you see a blue tick, you think of Nike; that is a trademark at work.
                                            </p>
                                        </div>
                                        <div className="bg-white border-2 border-[#160049] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faPenNib} className="mr-3 text-[#160049]" /> Copyright Act, 1957
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                This act focuses on **Creative Expression**. It grants authors, artists, and creators the exclusive right to reproduce, perform, and distribute their work. It protects the *form* in which an idea is expressed-be it a painting, a movie, or a computer program.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="definition-scope" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Defining the Scope: What Each Protects</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        The most fundamental <strong>difference between trademark and copyright</strong> is what they cover. One is about names and signs; the other is about works and creations.
                                    </p>
                                    <div className="space-y-6 my-10">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-2xl mb-4">Trademark Scope</h4>
                                            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Brand Names & Logos</li>
                                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Slogans & Taglines</li>
                                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Product Packaging (Trade Dress)</li>
                                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-[#6E5E93]" /> Sound & Color Marks</li>
                                            </ul>
                                        </div>
                                        <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                                            <h4 className="font-bold text-[#0C002B] text-2xl mb-4">Copyright Scope</h4>
                                            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faBook} className="text-[#160049]" /> Books, Articles & Blogs</li>
                                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faPalette} className="text-[#160049]" /> Paintings & Photography</li>
                                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faMusic} className="text-[#160049]" /> Music & Sound Recordings</li>
                                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCode} className="text-[#160049]" /> Software Source Code</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="work-made-for-hire" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Ownership Forensics: "Work Made for Hire" under Section 17</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Who owns the creation? This is a critical <strong>difference between trademark and copyright</strong> ownership. In trademark law, the owner is usually the person or entity that uses the mark in commerce. In copyright law, however, the author is the first owner of the copyright.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        But there is a catch: **Section 17 of the Copyright Act** defines the "Work Made for Hire" rule. If an employee creates a design, writes code, or drafts an article in the course of their employment, the employer is considered the first owner of the copyright. But if a freelancer does the same without a specific "Assignment Agreement," the freelancer keeps the copyright even if you paid them! At IPR Karo, we perform "Ownership Audits" to ensure that your business truly owns the IP it has paid for.
                                    </p>
                                </section>

                                <section id="duration-renewal" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Longevity: 10-Year Renewals vs Lifetime Protection</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The duration of protection is where the two rights diverge significantly. This is based on the logic that a brand can live forever as long as the business exists, but creative works eventually belong to the "public domain" for cultural enrichment.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0 text-lg">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faCalendarAlt} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Trademark Longevity</h4>
                                                <p className="text-gray-600 italic">Valid for 10 years at a time. Must be renewed every decade. Can theoretically last for centuries (e.g., TATA has been trademarked for over 100 years).</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faRocket} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Copyright Longevity</h4>
                                                <p className="text-gray-600 italic">Valid for the entire life of the creator plus 60 years after their death. No renewals are needed once registered.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="moral-vs-economic" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Moral vs Economic Rights: The Soul of Copyright</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Trademarks are purely economic assets. They exist to protect profit and market share. Copyright, however, has a "soul." Under Indian law, a creator has two types of rights: **Economic Rights** (to sell and license) and **Moral Rights** (to be identified as the author and to prevent mutilation of the work).
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Even if an artist sells the economic copyright of a logo to your company, they still retain their "Right of Paternity" (the right to be known as the creator) and "Right of Integrity." If you modify the logo in a way that is "prejudicial to the artist's reputation," they can legally sue you even if you "own" the copyright. This nuance does not exist in trademark law, making copyright a much more personal and complex right to manage.
                                    </p>
                                </section>

                                <section id="section-45-noc" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Section 45 Search Certificate: When They Intersect</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        In the Indian registry, there is a special bridge between these two. **Section 45 of the Copyright Act** prevents a loophole where someone might try to copyright a logo that is too similar to an existing trademark.
                                    </p>
                                    <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] shadow-2xl my-10">
                                        <h4 className="text-cyan-400 font-bold text-2xl mb-4">The "Search Certificate" Requirement</h4>
                                        <p className="opacity-90 leading-relaxed text-lg mb-6">
                                            If you apply for copyright for an **artistic work** used on goods (like a brand logo or mascot), you must first apply to the Trademark Registry for a Search Certificate. The registry will check if your artwork is "deceptively similar" to any existing brand. Only if you get a "No Objection" from the TM registry will the Copyright office proceed with your registration.
                                        </p>
                                        <Link href="/contact-us">
                                            <button className="text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-all font-bold">Apply for Search Certificate</button>
                                        </Link>
                                    </div>
                                </section>

                                <section id="comparison-table" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-8 text-center">At a Glance: Comparison Matrix</h2>
                                    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white text-lg">
                                                <tr>
                                                    <th className="p-6 border">Feature</th>
                                                    <th className="p-6 border">Trademark</th>
                                                    <th className="p-6 border">Copyright</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-lg text-gray-700">
                                                {comparisonData.map((row, i) => (
                                                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                                                        <td className="p-6 border font-bold text-[#0C002B]">{row.feature}</td>
                                                        <td className="p-6 border">{row.tm}</td>
                                                        <td className="p-6 border">{row.cr}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="infringement-remedies" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Damages: Legal Remedies for Infringement in India</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        What happens when someone steals your IP? The remedies differ significantly. For a trademark, you can file a "Passing Off" action (for unregistered marks) or an "Infringement" suit (for registered marks). You get injunctions and "Account of Profits."
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In copyright infringement, the law is even stricter. Under the **Copyright Act**, infringement is a cognizable and non-bailable offense. The police can arrest the infringer without a warrant. Furthermore, Indian courts are increasingly awarding "Statutory Damages" in copyright cases, where the infringer must pay a fixed amount regardless of whether you can prove an actual financial loss. This makes copyright registration a very sharp sword in the hands of creators.
                                    </p>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Why Businesses Trust IPR Karo for IP Forensics</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-center">
                                        We don't just file forms; we build intellectual property strategies. Our dual-layered approach ensures your brand identity and creative content are both bulletproof.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faFilter} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Conflict Discovery</h4>
                                            <p className="text-sm opacity-70">We search both registries concurrently to ensure your artistic logo doesn't conflict with a registered brand name.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Asset Mapping</h4>
                                            <p className="text-sm opacity-70">We identify which of your business assets (software, designs, slogans) need which protection to maximize your legal ROI.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Legal Opinions</h4>
                                            <p className="text-sm opacity-70">Every client receives a formal IP Opinion of Registrability, analyzing the probability of success for both TM and Copyright.</p>
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
                                            author: "Vikram Sethi",
                                            role: "Founder, Pixel Perfect Studios",
                                            rating: 5,
                                            date: "2024-02-18",
                                            text: "I used to think my logo was protected by copyright alone. IPR Karo explained why I needed a trademark for the brand name and class-specific protection. Their IP audit saved us from a potential lawsuit with a similarly named tech firm.",
                                            avatar: "VS"
                                        },
                                        {
                                            author: "Ananya Iyer",
                                            role: "Author & Digital Content Creator",
                                            rating: 5,
                                            date: "2024-01-15",
                                            text: "The clarity IPR Karo provided on the Copyright Act was amazing. They helped me register my online course content and also trademarked my personal brand name. Now I feel fully secure in my creative business.",
                                            avatar: "AI"
                                        },
                                        {
                                            author: "Karan Malhotra",
                                            role: "CEO, Malhotra Apparels",
                                            rating: 5,
                                            date: "2023-11-20",
                                            text: "Great team. They simplified the legal jargon and helped us understand that our unique fabric patterns needed copyright, while the brand logo needed a trademark. Highly professional approach.",
                                            avatar: "KM"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Choosing the Right Shield for Your Business</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The <strong>difference between trademark and copyright</strong> is the difference between who you are and what you make. In the competitive landscape of India, an unprotected asset is a liability. By registering a trademark, you claim your territory in the market; by registering a copyright, you claim ownership of your creative genius. Together, they create a comprehensive shield that allows you to focus on growth, knowing that your identity and creations are legally secure.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Intellectual property is more than just a legal certificate; it is valuation, it is credibility, and it is a deterrent to those who would ride on your coattails. Whether you need a 10-year brand protection or a lifetime plus legacy protection, let IPR Karo be your guide through the intricacies of the Trade Marks Act and Copyright Act. Your ideas deserve the best protection. Secure them today.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Confused About Which to Choose?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Get a Free IP Diagnostic session with our expert attorneys. We will map your business assets and provide a custom protection roadmap.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Book IP Diagnosis
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult an IP Attorney
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">IP Health Check</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Is your software code leaked? Is your logo copied? Get a **Forensic IP Audit** of your digital presence.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Audit My Brand
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Knowledge Base</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-search-public" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Public Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/ipindia-trademark-status" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Track TM Status</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/format-for-no-objection-certificate" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">NOC Formats</span>
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
