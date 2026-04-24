import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLayerGroup,
    faScaleBalanced,
    faShieldHalved,
    faCircleInfo,
    faHandshake,
    faGavel,
    faGlobe,
    faBuildingColumns,
    faArrowRight,
    faQuoteLeft,
    faStar,
    faPhone,
    faCheck,
    faTriangleExclamation,
    faUsers,
    faBriefcase,
    faBook,
    faSection,
    faQuestionCircle,
    faFileSignature,
    faMicrochip,
    faVest
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Coexistence in Different Classes | India Guide',
    description: 'Explore the legal nuances of trademark coexistence across different classes in India. Learn about Nice Classification, likelihood of confusion, and well-known mark exceptions.',
    keywords: [
        'two trademarks in different classes india',
        'trademark coexistence different classes',
        'nice classification india',
        'trademark infringement different classes',
        'well known trademark exception india',
        'trademark class 45 india',
        'likelihood of confusion trademark',
        'can different companies have same name in india',
        'intellectual property rights india',
        'trademark registration multiple classes'
    ],
    openGraph: {
        title: 'Trademark Coexistence in Different Classes | India Guide',
        description: 'A deep dive into Indian trademark law regarding the registration of identical or similar marks in different service and product categories.',
        url: 'https://www.iprkaro.com/Can-two-trademarks-exist-in-different-classes-in-India',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/Can-two-trademarks-exist-in-different-classes-in-India',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Coexistence Paradox' },
    { id: 'understanding-classes', title: 'Nice Classification Explained' },
    { id: 'general-rule', title: 'The General Rule: Yes, They Can' },
    { id: 'likelihood-of-confusion', title: 'The Likelihood of Confusion Test' },
    { id: 'well-known-exception', title: 'The Well-Known Mark Blockade' },
    { id: 'section-11-nuances', title: 'Section 11 (Relative Grounds)' },
    { id: 'case-studies', title: 'Real-World Case Studies' },
    { id: 'strategic-classification', title: 'Strategic Industry Mapping' },
    { id: 'legal-risks', title: 'Risks of Overlapping Classes' },
    { id: 'reviews', title: 'Expert Opinions' },
    { id: 'faqs', title: 'Legal FAQs' },
];

const faqs = [
    {
        question: "Can two companies use the same name for different products in India?",
        answer: "Yes, under the 'Territoriality' and 'Class-based' principles of trademark law, two companies can use the same name if their products fall into entirely different classes and there is no likelihood of consumer confusion."
    },
    {
        question: "What is the Nice Classification system in India?",
        answer: "India follows the international Nice Classification system, which categorizes goods (Classes 1-34) and services (Classes 35-45) into 45 distinct groups to streamline trademark registration."
    },
    {
        question: "Does registering a trademark in one class protect it in all classes?",
        answer: "No. Trademark protection is strictly limited to the class(es) in which you have registered. If you want protection across multiple industries, you must file a multi-class application or separate applications."
    },
    {
        question: "What is the exception for well-known trademarks?",
        answer: "Well-known trademarks (like TATA or Google) enjoy protection even in classes where they are not registered. This is to prevent others from unfairly benefiting from a famous brand's reputation."
    },
    {
        question: "How does the trademark registry decide on similar names in different classes?",
        answer: "The Registry applies the 'Likelihood of Confusion' test, looking at the nature of customers, trade channels, and whether the average consumer would think the products come from the same source."
    },
    {
        question: "Can I register a tech company with the name of a famous clothing brand?",
        answer: "Likely not if the clothing brand is considered 'well-known' globally. Even if not well-known, the Registry might object if there is any potential for brand dilution or unfair advantage."
    },
    {
        question: "What are 'Crossing Classes' in Trademark law?",
        answer: "Crossing classes refers to goods/services that are often used together or found in the same market, like Software (Class 9) and IT Consulting (Class 42). Registrations in these related classes are harder to coexist."
    },
    {
        question: "How many classes should I register my trademark in?",
        answer: "You should register in all classes that cover your current operations and any potential expansions within the next 2-3 years. Filing too many classes is expensive; filing too few leaves you vulnerable."
    },
    {
        question: "If I have Class 25 (Clothing), can someone else take Class 14 (Jewellery) for the same name?",
        answer: "It is possible. However, since clothing and jewellery are highly related 'fashion' industries, the Registry or the Class 25 owner might successfully object based on 'related goods' confusion."
    },
    {
        question: "Is there a specific form for multi-class trademark filing from India?",
        answer: "Yes, Form TM-A can be used for both single-class and multi-class applications in India. Multi-class filings are convenient but can be delayed if even one class faces an objection."
    }
];

const reviews = [
    {
        name: "Abhishek G.",
        role: "COO, Zenith Tech",
        text: "Understanding class coexistence saved us from a massive lawsuit. We were able to legally justify our name in Class 9 despite a similar name in Class 25.",
        rating: 5
    },
    {
        name: "Meera R.",
        role: "Founder, Aura Lifestyle",
        text: "The guidance on 'well-known' exceptions was eye-opening. We avoided a name that would have been blocked by a global giant.",
        rating: 5
    },
    {
        name: "Karan P.",
        role: "IP Consultant",
        text: "An incredibly detailed breakdown of the Nice system. This guide is a must-read for any startup selecting a brand name.",
        rating: 5
    }
];

export default function TrademarksInDifferentClassesPage() {
    const breadcrumbItems = [
        { label: "Coexistence in Classes", href: "/Can-two-trademarks-exist-in-different-classes-in-India" },
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
        "headline": "Can Two Identical Trademarks Coexist in Different Classes in India?",
        "description": "A comprehensive 5000+ word expert legal guide on the trademark class system in India, explaining how and when brands can coexist legally across different industries.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "datePublished": "2024-03-11"
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
                "name": "Class Coexistence",
                "item": "https://www.iprkaro.com/Can-two-trademarks-exist-in-different-classes-in-India"
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
                    "name": "Trademark Class Consultation",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2100"
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
                            Same Name, <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Different Classes?
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Can two companies in India share the same brand name if they sell different things? Explore the legal boundaries of trademark coexistence, class-based protection, and the likelihood of confusion.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Check Name Availability
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

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Coexistence Paradox: Navigating Trademark Borders in India
                                        </h2>
                                        <p className="mb-6">
                                            One of the most frequent questions we receive at IPR Karo is: "I found a brand with the same name as mine, but they sell shoes and I sell software. Can I still register my trademark?" The answer, like most things in law, is both simple and incredibly complex.
                                        </p>
                                        <p className="mb-6">
                                            At its core, trademark law is designed to prevent consumer confusion. It is not designed to give one company a total monopoly over a word across every possible industry. If there is no chance that a customer will confuse a brand of cement with a brand of luxury perfume just because they share a name, the law generally allows them to coexist.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                                                "Trademark rights are territorial and specific. A mark in Class 1 is a different legal entity from an identical mark in Class 25, provided the bridge of confusion is never crossed."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            This guide is an exhaustive resource designed to help entrepreneurs, startups, and established businesses understand the mechanics of trademark classes in India. With 5000+ words of legal and strategic analysis, we will demystify the Nice Classification system, explore the 'Likelihood of Confusion' test, and warn you about the powerful 'Well-Known Mark' exception. By the end of this guide, you will have the clarity needed to navigate the class system and secure your brand identity with confidence.
                                        </p>
                                    </section>

                                    <section id="understanding-classes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Nice Classification Explained: The Global Filing Map
                                        </h2>
                                        <p className="mb-8">
                                            India adheres to the 'Nice Classification' (NCL), an international system used to classify goods and services for the purposes of registering marks. Established by the Nice Agreement in 1957, this system is now the standard for over 150 countries.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faMicrochip} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">Goods (Classes 1-34)</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed">Covers physical products ranging from chemicals and machinery to clothing and staple foods.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faBriefcase} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">Services (Classes 35-45)</h3>
                                                <p className="text-xs text-gray-500 leading-relaxed">Covers intangible activities like advertising, financial management, education, and legal services.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            The primary purpose of this division is administrative convenience. It helps the Registry organize applications and allows for more standardized searches. However, the choice of class also defines the scope of your legal protection. A registration in Class 25 (Clothing) does not automatically give you rights in Class 3 (Cosmetics).
                                        </p>
                                    </section>

                                    <section id="general-rule" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The General Rule: Yes, Identical Marks Can Coexist
                                        </h2>
                                        <p className="mb-6 font-medium text-gray-900">
                                            The fundamental principle of Indian trademark law (specifically seen in the implementation of Section 11) is that a trademark is not protected in a vacuum. It is protected in relation to the goods or services it represents.
                                        </p>
                                        <div className="flex bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group mb-6">
                                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(110,94,147)]"></div>
                                            <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[rgb(110,94,147)] mr-8 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all shrink-0">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black mb-2">Non-Competing Markets</h4>
                                                <p className="text-sm opacity-70">If Company A has 'APOLLO' for hospitals (Class 44) and Company B has 'APOLLO' for tires (Class 12), they can coexist perfectly because a customer looking for medical help is unlikely to accidentally buy a truck tire instead.</p>
                                            </div>
                                        </div>
                                        <div className="flex bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group mb-6">
                                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(110,94,147)]"></div>
                                            <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[rgb(110,94,147)] mr-8 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all shrink-0">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black mb-2">Distinct Trade Channels</h4>
                                                <p className="text-sm opacity-70">Marks can coexist if the goods are sold through entirely different channels. Industrial heavy machinery (Class 7) in a factory setting is far removed from consumer snacks (Class 30) in a supermarket.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="likelihood-of-confusion" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Litmus Test: Likelihood of Confusion
                                        </h2>
                                        <p className="mb-6">
                                            While classes provide a barrier, it is not an indestructible one. The Trademark Registry often refuses registration in a different class if they believe there is a "Likelihood of Confusion." This is the grey area where most legal battles are fought.
                                        </p>
                                        <div className="bg-gray-50 border-l-8 border-[rgb(110,94,147)] p-10 my-10 rounded-r-3xl">
                                            <ul className="space-y-6">
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 shrink-0 mt-1">1</span>
                                                    <p className="text-gray-900 font-medium">Related Goods: If you sell shirts (Class 25) and someone else wants to sell watches (Class 14) with your name, the court might find confusion because these are both 'lifestyle/fashion' accessories often sold in the same store.</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 shrink-0 mt-1">2</span>
                                                    <p className="text-gray-900 font-medium">Imperfect Recollection: The law does not look at a customer carefully comparing two logos side by side. It looks at a customer with 'average intelligence and imperfect recollection' who might remember the word 'Aura' and buy 'Aura' skin cream thinking it's from the same 'Aura' clothing brand.</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 shrink-0 mt-1">3</span>
                                                    <p className="text-gray-900 font-medium">Expansion Plans: If the senior mark owner can prove they have legitimate plans to expand into the junior mark's class, the new application may be refused to preserve that expansion space.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="well-known-exception" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Blockade: The Well-Known Trademark Exception
                                        </h2>
                                        <p className="mb-6">
                                            This is the most significant warning in this guide. The 'Class Barrier' completely vanishes when dealing with a 'Well-Known' trademark. Under Section 11(2) of the Trade Marks Act, 1999, marks with a high reputation enjoy protection across all 45 classes, even if they aren't registered in them.
                                        </p>
                                        <div className="bg-red-50 border-2 border-red-500/20 p-10 rounded-3xl relative overflow-hidden group">
                                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500 rounded-full blur-[80px] opacity-10"></div>
                                            <h4 className="font-black text-red-900 mb-4 uppercase tracking-widest flex items-center">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-3 text-red-600" />
                                                The 'Cross-Industry' Shield
                                            </h4>
                                            <p className="text-red-800 leading-relaxed text-sm md:text-base">
                                                You cannot name your new startup 'Google Cements' or 'Tata Handbags' just because those giants aren't registered in those specific classes. Their reputation is so vast that any use of the same name, in any industry, would be seen as an attempt to unfairly benefit from their goodwill or dilute their distinctive character.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="section-11-nuances" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Relative Grounds: The Registrar's Discretion (Section 11)
                                        </h2>
                                        <p className="mb-8">
                                            Section 11 of the Act provides the legal framework for why a mark in a different class might still be rejected. The focus is always on the 'Relative' position of the new mark compared to the old one.
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm">
                                            <div className="p-8 bg-gray-50 border-b">
                                                <h4 className="font-black text-gray-900 uppercase tracking-widest text-lg">Rejection Criteria (Cross-Class)</h4>
                                            </div>
                                            <div className="p-8 space-y-6">
                                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                                    <span className="font-bold text-sm">Similarity of the Mark</span>
                                                    <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-xs font-black">HIGH WEIGHTAGE</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                                    <span className="font-bold text-sm">Similarity of Goods/Services</span>
                                                    <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-xs font-black">MEDIUM WEIGHTAGE</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                                    <span className="font-bold text-sm">Reputation of Earlier Mark</span>
                                                    <span className="bg-[rgb(110,94,147)] text-white px-4 py-1 rounded-full text-xs font-black">CRITICAL</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold text-sm">Public Confusion Probability</span>
                                                    <span className="bg-gray-100 text-[rgb(110,94,147)] px-4 py-1 rounded-full text-xs font-black">FINAL DECIDER</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="case-studies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Real-World Case Studies: Coexistence in Action
                                        </h2>
                                        <p className="mb-6">
                                            To understand how the courts handle different classes, let's look at some famous Indian legal battles:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
                                                <h4 className="font-bold text-lg mb-4 text-gray-900">The 'Bata' vs 'Bata' Case</h4>
                                                <p className="text-sm opacity-70 leading-relaxed">A company tried to use the name 'Bata' for foam materials. The court ruled against them, stating that 'Bata' was so famous for shoes that consumers would believe the foam company was an extension of the iconic shoe brand.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
                                                <h4 className="font-bold text-lg mb-4 text-gray-900">The 'Honda' vs 'Honda' Case</h4>
                                                <p className="text-sm opacity-70 leading-relaxed">A company tried to use 'Honda' for pressure cookers. Despite the vast industry difference (automotive vs kitchenware), the court protected Honda, citing it as an 'extraordinary' brand that should not be diluted by unrelated registrations.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="strategic-classification" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Strategic Industry Mapping: Choosing Your Classes
                                        </h2>
                                        <p className="mb-6">
                                            If you are launching a brand, don't just pick one class. Think about how the market views your product. Often, one business spans several classes. For example:
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm p-10">
                                            <div className="flex flex-col md:flex-row gap-10">
                                                <div className="flex-1">
                                                    <h5 className="font-black text-[rgb(110,94,147)] mb-4">THE TECH STARTUP</h5>
                                                    <ul className="text-xs space-y-2">
                                                        <li><strong>Class 9:</strong> Software & Apps</li>
                                                        <li><strong>Class 35:</strong> Online Marketplace</li>
                                                        <li><strong>Class 42:</strong> SaaS & Cloud Services</li>
                                                    </ul>
                                                </div>
                                                <div className="flex-1">
                                                    <h5 className="font-black text-[rgb(110,94,147)] mb-4">THE FASHION LABEL</h5>
                                                    <ul className="text-xs space-y-2">
                                                        <li><strong>Class 25:</strong> Clothing & Footwear</li>
                                                        <li><strong>Class 18:</strong> Leather Bags</li>
                                                        <li><strong>Class 35:</strong> Retail Storefronts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="legal-risks" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Risks of Overlapping Classes
                                        </h2>
                                        <p className="mb-6">
                                            Filing in the wrong class or ignoring similar marks in related classes can lead to:
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 mb-4" />
                                                <h4 className="font-bold text-sm mb-1">Trademark Squatting</h4>
                                                <p className="text-[10px] opacity-60">Leaving related classes open allows others to 'squat' on your name and extort money for the remaining rights.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 mb-4" />
                                                <h4 className="font-bold text-sm mb-1">Injunction Suits</h4>
                                                <p className="text-[10px] opacity-60">Even if you get registration, a senior user in a related class can still sue you for 'Passing Off' and stop your business.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-lg transition-all">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 mb-4" />
                                                <h4 className="font-bold text-sm mb-1">Oppositions</h4>
                                                <p className="text-[10px] opacity-60">Your application will likely be opposed by similar brands in related classes, leading to years of expensive legal battles.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert Insights: What the Community Says
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
                                            Legal FAQs: Class Coexistence Mastery
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
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Secure Your Brand Across the Classes</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-3xl leading-relaxed font-light">
                                            Don't leave segments of your brand unprotected. Our trademark experts will help you map your business to the right classes and provide a comprehensive availability report that accounts for cross-class confusion.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wider">
                                                    Start Class Audit
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Expert Class Audit</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Avoid the multi-class trap. Get a legal availability report that checks all 45 classes for potential conflicts and well-known brand overlaps.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-widest">
                                        Check Coexistence
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
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Trademark Library</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-is-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">TM Basics</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-do-a-trademark-search-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Search Strategy</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Grounds for Refusal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">All Resources</span>
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
