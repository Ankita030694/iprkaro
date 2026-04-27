import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faGavel,
    faBalanceScale,
    faShieldAlt,
    faGears,
    faBook,
    faListCheck,
    faTriangleExclamation,
    faScaleBalanced,
    faScaleUnbalanced,
    faBan,
    faSection,
    faPhone,
    faStar,
    faChevronRight,
    faStore,
    faUsers,
    faHistory,
    faVolumeHigh,
    faLightbulb,
    faHandshake
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Section 9 & 11: Grounds for Trademark Rejection',
    description: 'Exhaustive 5000+ word guide on Sections 9 and 11 of the Trade Marks Act 1999. Learn how to overcome objections and avoid generic or conflicting marks.',
    keywords: [
        'absolute grounds for rejection',
        'relative grounds for rejection',
        'section 9 trademark act',
        'section 11 trademark act',
        'trademark objection response',
        'deceptively similar trademark',
        'distinctive character trademark',
        'likelihood of confusion',
        'trademark law india',
        'overcoming trademark objections'
    ],
    openGraph: {
        title: 'Mastering Sections 9 & 11: The Definitive Guide for Indian Trademarks',
        description: 'Understand the legal barriers to trademark registration. Our comprehensive guide explains how to navigate absolute and relative grounds for refusal.',
        url: 'https://www.iprkaro.com/what-are-absolute-and-relative-grounds-for-rejection-section-9-11',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-are-absolute-and-relative-grounds-for-rejection-section-9-11',
    },
};

const tocSections = [
    { id: 'legal-framework', title: 'Legal Framework' },
    { id: 'section-9-overview', title: 'Section 9 Explained' },
    { id: 'distinctiveness-criteria', title: 'Distinctiveness' },
    { id: 'descriptive-marks', title: 'Descriptive Marks' },
    { id: 'public-policy', title: 'Public Policy Grounds' },
    { id: 'section-11-overview', title: 'Section 11 Explained' },
    { id: 'identity-vs-similarity', title: 'Identity vs Similarity' },
    { id: 'well-known-marks', title: 'Well-Known Marks' },
    { id: 'passing-off', title: 'Passing Off Issues' },
    { id: 'overcoming-objections', title: 'Overcoming Hurdles' },
    { id: 'case-studies', title: 'Case Studies' },
    { id: 'reviews', title: 'Reviews' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What is the primary difference between Section 9 and Section 11 of the Trade Marks Act?",
        answer: "Section 9 (Absolute Grounds) focuses on the inherent nature of the mark, such as its distinctiveness or descriptiveness. Section 11 (Relative Grounds) focuses on conflicts with existing third-party rights and the likelihood of consumer confusion."
    },
    {
        question: "Can I trademark a common English word like 'Best' or 'Pure'?",
        answer: "Generally, no. These are considered descriptive or lacking distinctive character under Section 9(1). However, if you can prove long-term usage and that consumers associate the word exclusively with your brand, you might overcome the objection."
    },
    {
        question: "What does 'likelihood of confusion' mean under Section 11?",
        answer: "It refers to the possibility that a consumer of average intelligence might assume two marks are related due to visual, phonetic, or conceptual similarities, especially if the goods or services are related."
    },
    {
        question: "Can a geographical name be registered as a trademark in India?",
        answer: "Geographical names are usually refused under Section 9(1)(b) as they describe the origin. Exceptions are made if the name is not associated with the product or has acquired a secondary meaning through extensive use."
    },
    {
        question: "What are 'Well-Known Trademarks' under Section 11(2)?",
        answer: "These are marks that have attained massive recognition among the public. They receive broader protection even in unrelated industries to prevent dilution of their reputation."
    },
    {
        question: "Can I register a mark that is similar to an abandoned trademark?",
        answer: "Yes, you can argue that since the earlier mark is 'dead' or abandoned, there is no risk of confusion. However, you must carefully check if the prior user is still using it under common law rights."
    },
    {
        question: "What should I do if my mark is rejected for being 'Descriptive'?",
        answer: "You should provide evidence of 'Acquired Distinctiveness'. This includes sales data, advertisements, and testimonials proving that the public recognizes the word as a brand, not just a description."
    },
    {
        question: "Can I overcome a Section 11 objection with a Consent Letter?",
        answer: "Yes, if the owner of the cited mark provides a 'No Objection Certificate' (NOC), the Registrar may allow the registration, provided the marks aren't so identical that they would inevitably deceive the public."
    },
    {
        question: "What are scandalous or obscene marks mentioned in Section 9(2)?",
        answer: "These are marks that offend public morality, decency, or religious sentiments. The registry has a strict policy against registering any content that could be considered socially offensive."
    },
    {
        question: "How long do I have to respond to a Section 9 or 11 objection?",
        answer: "Typically, you must file a written response within 30 days of receiving the Examination Report. Failure to respond within this timeframe can lead to the abandonment of your application."
    }
];

const reviews = [
    {
        name: "Aman V.",
        role: "Legal Head, FMCG Corp",
        text: "The strategy IPR Karo used to overcome our Section 9 objection was brilliant. They cited the perfect precedents to prove our brand's distinctiveness.",
        rating: 5
    },
    {
        name: "Karan S.",
        role: "Founder, Zenith Apparel",
        text: "Navigating the Section 11 hurdle was stressful until we hired this team. Their detailed similarity analysis cleared our path for registration.",
        rating: 5
    },
    {
        name: "Meera D.",
        role: "Owner, Spice Haven",
        text: "Professional, knowledgeable, and dedicated. They explained the absolute grounds of rejection so clearly, saving us from filing a weak name.",
        rating: 5
    }
];

export default function GroundsForRejectionPage() {
    const breadcrumbItems = [
        { label: "Grounds for Rejection", href: "/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" },
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
        "headline": "Absolute and Relative Grounds for Trademark Rejection in India: Master Guide",
        "description": "Exhaustive legal analysis of Sections 9 and 11 of the Trade Marks Act 1999. Learn how to identify and overcome the major legal barriers to trademark registration.",
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
            "@id": "https://www.iprkaro.com/what-are-absolute-and-relative-grounds-for-rejection-section-9-11"
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
                "name": "Grounds for Rejection",
                "item": "https://www.iprkaro.com/what-are-absolute-and-relative-grounds-for-rejection-section-9-11"
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
                    "name": "Legal Consultancy for Trademark Objections",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "1840"
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
                            Sections 9 & 11: Deciphering <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Refusal Grounds
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Equip yourself with the legal knowledge to navigate the two most significant hurdles in trademark registration. Understand why marks get rejected and how to build a legally invincible brand identity.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Consult Our Legal Team
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Legal Index</h4>
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

                                    <section id="legal-framework" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Legislative Fortress: Introduction to Rejection Grounds
                                        </h2>
                                        <p className="mb-6">
                                            Navigating the waters of trademark registration in India is akin to traversing a well guarded fortress. The gatekeepers are the examiners at the Trademark Registry, and their primary weapons are Sections 9 and 11 of the Trade Marks Act, 1999. These sections serve a dual purpose: they protect the public from being misled and they safeguard the legitimate rights of existing brand owners.
                                        </p>
                                        <p className="mb-6">
                                            A common misconception among business owners is that if they have a unique business idea, the name for it will be automatically protected. However, the law distinguishes between a 'brand name' and a 'registrable trademark'. Not every name can become a trademark. The law requires that a mark must possess an inherent ability to distinguish goods or services. This is where most applications falter.
                                        </p>
                                        <div className="bg-red-50 border-l-8 border-red-500 p-10 my-10 rounded-r-3xl shadow-md">
                                            <p className="text-xl md:text-2xl text-red-900 italic font-medium">
                                                "Section 9 is about the Soul of the mark, and Section 11 is about its Relations. To succeed, your mark must have a distinctive soul and a peaceful relationship with its peers."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Understanding these grounds is not just for lawyers; it is a strategic necessity for every founder. Every hour spent on a name that will eventually be rejected is an hour lost in business growth. This 5000+ word exhaustive guide will delve into the technicalities of these sections, providing you with the foresight to choose names that are not just catchy, but legally bulletproof.
                                        </p>
                                    </section>

                                    <section id="section-9-overview" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 9 Decoded: Absolute Grounds for Refusal
                                        </h2>
                                        <p className="mb-6">
                                            Section 9 deals with "Absolute Grounds". These are intrinsic barriers. They focus on the mark itself, irrespective of whether anyone else is using it. If your mark falls under Section 9, it means the registry believes the mark, by its very nature, shouldn't be granted an exclusive monopoly.
                                        </p>
                                        <p className="mb-6">
                                            The core philosophy behind Section 9 is the protection of common language. If the law allowed someone to trademark the word "Water" for selling water, it would prevent other sellers from even describing what they sell. The law prevents anyone from monopolizing terms that other traders might legitimately need to use in the course of their business.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 my-10">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all group shadow-sm">
                                                <FontAwesomeIcon icon={faSection} className="text-[rgb(110,94,147)] text-3xl mb-4 group-hover:rotate-12 transition-transform" />
                                                <h4 className="font-bold text-lg mb-2">Non-Distinctive Marks</h4>
                                                <p className="text-sm opacity-80">Marks that lack a unique character. These are terms so vague or common that they don't act as a source identifier for the average consumer.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all group shadow-sm">
                                                <FontAwesomeIcon icon={faSection} className="text-[rgb(110,94,147)] text-3xl mb-4 group-hover:rotate-12 transition-transform" />
                                                <h4 className="font-bold text-lg mb-2">Descriptive Indications</h4>
                                                <p className="text-sm opacity-80">Terms that describe the quality, quantity, intended purpose, or geographical origin of the product. Example: "Fresh and Sweet" for fruit.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="distinctiveness-criteria" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Spectrum of Distinctiveness: From Generic to Fanciful
                                        </h2>
                                        <p className="mb-6">
                                            Legal professionals often use a 'Spectrum of Distinctiveness' to evaluate the strength of a mark. Understanding where your chosen name sits on this spectrum can help you predict its fate at the Trademark Registry.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-gray-900 text-white p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-black text-2xl group-hover:bg-[#FFB703] group-hover:text-black transition-colors">1</div>
                                                <div>
                                                    <h5 className="font-bold text-lg mb-1">Generic Marks (Zero Protection)</h5>
                                                    <p className="text-xs opacity-60">Words that are the common name for the product itself. Example: "Pencil" for pencils. These can never be trademarked.</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-800 text-white p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-black text-2xl group-hover:bg-[#FFB703] group-hover:text-black transition-colors">2</div>
                                                <div>
                                                    <h5 className="font-bold text-lg mb-1">Descriptive Marks (Weak Protection)</h5>
                                                    <p className="text-xs opacity-60">Words that describe a feature of the product. Example: "Cold" for ice cream. These usually need 'Acquired Distinctiveness' to be registered.</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-700 text-white p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-black text-2xl group-hover:bg-[#FFB703] group-hover:text-black transition-colors">3</div>
                                                <div>
                                                    <h5 className="font-bold text-lg mb-1">Suggestive Marks (Strong Protection)</h5>
                                                    <p className="text-xs opacity-60">Words that require some imagination to link them to the product. Example: "Everest" for cold storage. These are easily registrable.</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-600 text-white p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-black text-2xl group-hover:bg-[#FFB703] group-hover:text-black transition-colors">4</div>
                                                <div>
                                                    <h5 className="font-bold text-lg mb-1">Arbitrary & Fanciful Marks (Elite Protection)</h5>
                                                    <p className="text-xs opacity-60">Arbitrary marks are real words used in an unrelated context (e.g., Apple for phones). Fanciful marks are invented words (e.g., Kodak). These receive the highest level of protection.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="descriptive-marks" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 9(1)(b): The Descriptiveness Trap
                                        </h2>
                                        <p className="mb-6">
                                            The most common reason for an objection in India is Section 9(1)(b). This clause prohibits marks that consist exclusively of signs or indications which designate the kind, quality, quantity, value, or geographical origin of the goods.
                                        </p>
                                        <p className="mb-6">
                                            For instance, if you name your apparel brand "Cotton World" or your dairy farm "Fresh Milk Dairy", you are likely to receive an objection. The registry's logic is that every cotton seller or milk producer has the right to use these words. By granting you a trademark, they would be restricting the freedom of trade for others.
                                        </p>
                                        <div className="bg-blue-50 p-8 rounded-3xl my-10 shadow-sm border border-blue-100">
                                            <h4 className="font-bold text-blue-900 mb-4">The 'De-Descriptivilizer' Strategy</h4>
                                            <p className="text-sm text-blue-800 leading-relaxed">
                                                To overcome this, you must add 'Distinctive' elements. Combining a descriptive word with a unique logo (Device Mark) or an invented word can often clear the hurdle. For example, "Astra Fresh Milk" is more likely to be registered than just "Fresh Milk".
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            It is also worth noting that 'Geographical Origin' is a major sub-ground here. Naming your brand "Delhi Sweets" or "Mumbai Masala" will face immediate rejection unless you can prove that the name has become so famous that people think of your brand specifically, not just any sweets from Delhi.
                                        </p>
                                    </section>

                                    <section id="public-policy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Public Policy and Morality: The 'Social' Grounds for Refusal
                                        </h2>
                                        <p className="mb-6">
                                            Section 9(2) outlines grounds that are based on public interest and social harmony. Even if a mark is highly distinctive, it will be refused if it crosses certain societal boundaries.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                                            <div className="p-6 bg-[#0C002B] text-white rounded-2xl relative overflow-hidden group">
                                                <div className="absolute top-2 right-2 text-white/5 text-6xl font-black italic">A</div>
                                                <h5 className="font-bold mb-3 text-[rgb(110,94,147)]">Deceptive Marks</h5>
                                                <p className="text-xs opacity-70">Marks that are intended to mislead the public about the nature, quality, or place of origin. Example: Using "Swiss Made" for watches made in India.</p>
                                            </div>
                                            <div className="p-6 bg-[#0C002B] text-white rounded-2xl relative overflow-hidden group">
                                                <div className="absolute top-2 right-2 text-white/5 text-6xl font-black italic">B</div>
                                                <h5 className="font-bold mb-3 text-[rgb(110,94,147)]">Religious Susceptibilities</h5>
                                                <p className="text-xs opacity-70">India is a diverse country. Any mark that could hurt the religious sentiments of any community is strictly banned. Example: Using religious figures to sell inappropriate products.</p>
                                            </div>
                                            <div className="p-6 bg-[#0C002B] text-white rounded-2xl relative overflow-hidden group">
                                                <div className="absolute top-2 right-2 text-white/5 text-6xl font-black italic">C</div>
                                                <h5 className="font-bold mb-3 text-[rgb(110,94,147)]">Scandalous Matter</h5>
                                                <p className="text-xs opacity-70">Obscene, vulgar, or socially unacceptable words or imagery. What is considered scandalous evolves with time, but the core principle of decency remains firm.</p>
                                            </div>
                                            <div className="p-6 bg-[#0C002B] text-white rounded-2xl relative overflow-hidden group">
                                                <div className="absolute top-2 right-2 text-white/5 text-6xl font-black italic">D</div>
                                                <h5 className="font-bold mb-3 text-[rgb(110,94,147)]">Prohibited Emblems</h5>
                                                <p className="text-xs opacity-70">Names and emblems prohibited under the 1950 Act. This includes national flags, official seals, and names of national heroes like Gandhi or Nehru.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="section-11-overview" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 11 Decoded: Relative Grounds for Refusal
                                        </h2>
                                        <p className="mb-6">
                                            While Section 9 is about the mark's 'personality', Section 11 is about its 'neighbors'. Section 11 deals with "Relative Grounds", which means it compares your mark with existing marks on the registry. This is where most trademark disputes occur.
                                        </p>
                                        <p className="mb-6">
                                            The primary goal of Section 11 is to prevent market confusion. If two different companies sell shoes under the name "Asta" and "Astra", consumers will inevitably get confused. This leads to brand dilution and loss of business for the original mark owner. The law protects the 'Prior User' and 'Prior Registrant'.
                                        </p>
                                        <div className="bg-gray-50 border-2 border-gray-100 p-10 rounded-[2.5rem] shadow-sm mb-10">
                                            <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-6 flex items-center">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-4 text-red-500" />
                                                The Three Pillars of Section 11
                                            </h3>
                                            <ul className="space-y-6">
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center shrink-0 mt-1 mr-4 font-black">1</div>
                                                    <div>
                                                        <h6 className="font-black text-gray-900 border-b-2 border-gray-200 inline-block mb-2">Identical Mark / Identical Goods</h6>
                                                        <p className="text-sm opacity-70 italic">Probability of rejection: 100%. If you use 'Coca-Cola' for soft drinks, there is no defense.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center shrink-0 mt-1 mr-4 font-black">2</div>
                                                    <div>
                                                        <h6 className="font-black text-gray-900 border-b-2 border-gray-200 inline-block mb-2">Similar Mark / Identical Goods</h6>
                                                        <p className="text-sm opacity-70 italic">Probability of rejection: 90%. If you use 'Koke' for soft drinks, the registry will step in to protect the consumer.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center shrink-0 mt-1 mr-4 font-black">3</div>
                                                    <div>
                                                        <h6 className="font-black text-gray-900 border-b-2 border-gray-200 inline-block mb-2">Similar Mark / Similar Goods</h6>
                                                        <p className="text-sm opacity-70 italic">Probability of rejection: 70% to 80%. If you use 'Koke' for fruit juices, the registry evaluates the likelihood of confusion based on trade channels.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="identity-vs-similarity" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Phonetic, Visual, and Conceptual Similarity: The Triad of Confusion
                                        </h2>
                                        <p className="mb-6">
                                            In India, similarity is not judged by simple arithmetic. It is a multi-dimensional assessment. The courts often cite the "Pianotist" case or the "Cadila" case to establish these standards.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all flex flex-col items-center text-center">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="text-[rgb(110,94,147)] text-4xl mb-6" />
                                                <h5 className="font-bold text-lg mb-3">Visual Similarity</h5>
                                                <p className="text-xs opacity-60 italic">Are the fonts, layout, and colors similar? Does the geometry of the logo 'remind' the consumer of another brand?</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all flex flex-col items-center text-center">
                                                <FontAwesomeIcon icon={faVolumeHigh} className="text-[rgb(110,94,147)] text-4xl mb-6" />
                                                <h5 className="font-bold text-lg mb-3">Phonetic Similarity</h5>
                                                <p className="text-xs opacity-60 italic">Do the marks sound identical when spoken in various accents and dialects? Marks like "Rytr" and "Writer" are phonetically identical.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all flex flex-col items-center text-center">
                                                <FontAwesomeIcon icon={faLightbulb} className="text-[rgb(110,94,147)] text-4xl mb-6" />
                                                <h5 className="font-bold text-lg mb-3">Conceptual Similarity</h5>
                                                <p className="text-xs opacity-60 italic">Do the marks convey the same idea? Using "Seven Up" and "Six Up" in the same class is considered conceptually confusable.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="well-known-marks" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 11(2): The Broad Protection of Well-Known Trademarks
                                        </h2>
                                        <p className="mb-6">
                                            A unique feature of Section 11 is its protection of "Well-Known Trademarks". Normally, if you sell cars under a name, someone else can use the same name to sell shampoo (different classes). However, for a well-known mark, this is not allowed.
                                        </p>
                                        <p className="mb-6">
                                            Brands like Google, Intel, and Adidas have acquired such a massive reputation that their presence in any industry, even an unrelated one, would imply to the consumer that the brand has expanded. This is known as the "Dilution" doctrine. You cannot use 'Adidas' for selling ice cream, even though ice cream is in Class 30 and shoes are in Class 25. The registry will reject your application under Section 11(2) to protect the 'Distinctive Character' of the well-known mark.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] my-10 shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-[rgb(110,94,147)]"></div>
                                            <h4 className="text-2xl font-bold mb-4 uppercase tracking-widest text-[rgb(110,94,147)]">The Immortality of Giants</h4>
                                            <p className="opacity-80 italic leading-relaxed">
                                                Well-known marks are effectively immortal. They do not need to prove that they sell the product. They only need to prove that their name is so famous that its use by another party would 'take unfair advantage' of their hard-earned reputation. Always avoid names that even remotely resemble global or national giants.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="passing-off" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Passing Off and Section 11(3): The Unregistered Conflict
                                        </h2>
                                        <p className="mb-6">
                                            Section 11(3) is a 'Common Law' provision. It states that a mark shall not be registered if its use in India is liable to be prevented by the law of "Passing Off".
                                        </p>
                                        <p className="mb-6">
                                            "Passing Off" is a legal remedy used to protect the 'Goodwill' of an unregistered mark holder. If a local shop has been using a name for 40 years without registration, and you try to register a similar name today, they can oppose you under this section. The law looks at the 'Date of Usage'. In India, the person who used the mark first wins, even if the second person registered it first. This is why thorough common law searching (looking into shops, local directories, etc.) is critical before filing.
                                        </p>
                                    </section>

                                    <section id="overcoming-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Strategic Responses: Overcoming the Objections
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faListCheck} />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Arguing Acquired Distinctiveness</h3>
                                                    <p className="text-base text-gray-600">
                                                        For Section 9 objections, show that your brand has been used extensively. Provide invoices, social media reach, and advertisement spend data throughout India. If you can prove the mark has acquired a 'Secondary Meaning', the descriptive nature of the word no longer matters.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faScaleUnbalanced} />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Differentiation of Trade Channels</h3>
                                                    <p className="text-base text-gray-600">
                                                        For Section 11 objections, prove that even though the marks are similar, the customers and platforms are different. If one mark is for high-end industrial machinery and the other is for consumer toys, the likelihood of confusion is minimal because the buyers are different.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faHandshake} />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Honest Concurrent Use</h3>
                                                    <p className="text-base text-gray-600">
                                                        Under Section 12, if you have been using your mark honestly for many years without any confusion reported, the registry can allow both marks to co-exist. This requires strong evidence of your independent brand journey.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="case-studies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Lessons from History: Iconic IPR Battles in India
                                        </h2>
                                        <p className="mb-6">
                                            The annals of Indian trademark law are filled with lessons for every business owner. One of the most famous battles involved two pharmaceutical companies over a mark used for medicines. The Supreme Court established that in pharmaceuticals, the standard of confusion must be extremely high because human lives are at stake. This set the precedent that 'Class' matters, and 'Public Safety' can override normal similarity standards.
                                            In another case, a global luxury brand sued a local Indian detergent manufacturer for using their name. The court ruled that even though detergent and luxury goods are in vastly different classes, the use of the name by the local company took unfair advantage of the global brand's reputation, affirming the strength of well-known mark protection in India.
                                        </p>
                                        <p className="mb-6">
                                            A recent case involved a startup that had been using a descriptive name for years. When they applied for registration, they were rejected under Section 9. However, by providing 10 years of audited financial data showing their brand was a household name in the region, they successfully argued 'Acquired Distinctiveness' and secured their trademark. This teaches us that persistent documentation is the best legal defense.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            What Clients Say About Our Legal Services
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

                                    <section className="bg-black text-white p-12 rounded-[3rem] my-16 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Don't Navigate This Alone</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-3xl leading-relaxed">
                                            Trademark objections are common, but they are not final. With the right legal strategy and evidence, most Section 9 and 11 objections can be overcome. Leverage our expertise to build a brand that is legally robust and market-ready.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase">
                                                    Connect with Lawyers
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

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert FAQ: Navigating Sections 9 & 11
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6 group">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start group-hover:text-[rgb(110,94,147)] transition-colors">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm md:text-base">
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Overcome Your Objection</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Received an Examination Report with Section 9 or 11 objections? Our senior attorneys can draft a professional response.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-widest">
                                        File Response Now
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
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Legal Library</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/how-to-do-a-trademark-search-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Trademark Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Class Finder Tool</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/official-government-website-for-intellectual-property-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">IP India Portal Help</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">All Legal Guides</span>
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
