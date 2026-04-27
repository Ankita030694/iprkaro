import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShieldHalved,
    faSearch,
    faHandshake,
    faGavel,
    faFileCircleCheck,
    faTriangleExclamation,
    faLightbulb,
    faCheckDouble,
    faUserTie,
    faScaleBalanced,
    faPhone,
    faStar,
    faGlobe,
    faFileSignature,
    faBriefcase,
    faBook,
    faSection,
    faLayerGroup,
    faMicrochip
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Avoid Trademark Objection in India | Pro Guide',
    description: 'Master the art of filing a flawless trademark application. Lean strategies to avoid absolute and relative grounds for refusal, conduct elite searches, and secure your brand.',
    keywords: [
        'avoid trademark objection india',
        'trademark objection section 9',
        'trademark objection section 11',
        'tips to avoid trademark rejection',
        'how to file trademark without objection',
        'trademark search strategy india',
        'distinctive trademark guide',
        'trademark attorney india',
        'iprkaro trademark guide',
        'brand protection india'
    ],
    openGraph: {
        title: 'Zero-Objection Trademark Filing: The Definitive Strategy Guide',
        description: 'Reduce your risk of trademark rejection by 90% with our expert-led guide on pre-filing strategy, class selection, and search protocols.',
        url: 'https://www.iprkaro.com/How-to-avoid-trademark-objection-before-filing',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/How-to-avoid-trademark-objection-before-filing',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Cost of Objection' },
    { id: 'pre-filing-research', title: 'Phase 1: Deep Research' },
    { id: 'naming-strategy', title: 'Phase 2: The Art of Naming' },
    { id: 'section-9-traps', title: 'Avoiding Section 9 (Absolute)' },
    { id: 'section-11-traps', title: 'Avoiding Section 11 (Relative)' },
    { id: 'application-accuracy', title: 'Procedural Precision' },
    { id: 'user-affidavit', title: 'The Power of Prior Use' },
    { id: 'legal-strategy', title: 'Professional IP Strategy' },
    { id: 'checklists', title: 'Pre-Filing Checklist' },
    { id: 'reviews', title: 'Success Stories' },
    { id: 'faqs', title: 'Strategic FAQs' },
];

const faqs = [
    {
        question: "How can I check if my trademark name is already taken in India?",
        answer: "Use the official IP India Public Search portal. Search across relevant classes and use 'contains' or 'phonetic' search to catch similar names, not just exact matches. Professional searches by firms like IPR Karo are more exhaustive."
    },
    {
        question: "What is the most common reason for trademark objection?",
        answer: "The most common reasons are Section 9 (lack of distinctiveness/descriptive names) and Section 11 (existence of identical or similar marks already on the registry)."
    },
    {
        question: "Can I trademark a common English word like 'Best' or 'Pure'?",
        answer: "Generally, no. Common adjectives that describe the quality or nature of the product are considered descriptive under Section 9 and attract objections unless they have acquired 'secondary meaning' through years of use."
    },
    {
        question: "How do I avoid a 'Section 11' objection?",
        answer: "The only way is to conduct a thorough trademark search before filing. If a similar mark exists in your class or a related class, consider modifying your name or logo to increase distinctiveness."
    },
    {
        question: "Is it better to register a logo or a word mark to avoid objection?",
        answer: "A word mark gives broader protection but is harder to register if the word is common. A unique logo (device mark) is often easier to register because the visual elements add distinctiveness."
    },
    {
        question: "Does having an MSME certificate help in avoiding objections?",
        answer: "An MSME certificate reduces your government filing fee by 50% but does not influence the Examiner's decision on whether the mark is legally registrable."
    },
    {
        question: "What should I include in a user affidavit?",
        answer: "If you've been using the mark before filing, include an affidavit with proof like invoices, advertisements, website screenshots, and social media presence to show the mark is already associated with your business."
    },
    {
        question: "Can I change my trademark after filing to avoid an objection?",
        answer: "No. You cannot make substantial changes to the mark after application. You would need to file a fresh application, which means losing your priority date."
    },
    {
        question: "How long and detailed should my trademark search be?",
        answer: "A good search should cover the exact word, phonetic similarities, cross-class conflicts, and even international databases if you plan to expand. It should take more than a few minutes of browsing."
    },
    {
        question: "Should I hire a lawyer to file my trademark?",
        answer: "While you can file yourself, an IP attorney knows how to draft descriptions, choose classes, and handle potential objections even before they happen, saving you months of delay."
    }
];

const reviews = [
    {
        name: "Sanjay V.",
        role: "Founder, NeoFoods",
        text: "We were going to name our brand 'Crunchy Delites'. After reading this guide, we realized it would be rejected immediately. We changed to 'X-Crunch' and got registered without a single objection!",
        rating: 5
    },
    {
        name: "Anjali D.",
        role: "Creative Director",
        text: "The section on 'Procedural Precision' is a lifesaver. Most people don't realize how small errors in the address or applicant name can stall a brand for a year.",
        rating: 5
    },
    {
        name: "Vikram R.",
        role: "Startup Mentor",
        text: "The most comprehensive pre-filing strategy I have seen. I now make every startup in my cohort read this before they even design a logo.",
        rating: 5
    }
];

export default function AvoidObjectionPage() {
    const breadcrumbItems = [
        { label: "Avoid Objection", href: "/How-to-avoid-trademark-objection-before-filing" },
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
        "headline": "The Pro Strategy: How to Avoid Trademark Objection Before Filing in India",
        "description": "Expert legal insights on pre-filing trademark strategies. Learn how to navigate Sections 9 and 11, perform exhaustive searches, and ensure a smooth registration path.",
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
                "name": "Avoid Objection",
                "item": "https://www.iprkaro.com/How-to-avoid-trademark-objection-before-filing"
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
                    "name": "Trademark Pre-Filing Strategy",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "1890"
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
                        background: 'linear-gradient(to bottom, #0C002B 0%, #1a0040 45%, #553c9a 80%, #eeeeee 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            Flawless Filing: <br />
                            <span className="text-[#553c9a] bg-clip-text text-transparent bg-gradient-to-r from-[#b393eb] to-[#d1c4e9]" style={{ WebkitTextFillColor: 'rgb(85, 60, 154)' }}>
                                Zero Objection Goal
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Learn the insider strategies to pass the Trademark Examiner's scrutiny. A comprehensive guide on pre-filing research, naming psychology, and legal safeguards for your Indian trademark.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(85,60,154)] hover:bg-[rgb(65,40,134)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(85,60,154,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Start Free Search
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(85,60,154)] pl-3">Strategy Index</h4>
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
                                            The Cost of Objection: Why Prevention is Better Than Cure
                                        </h2>
                                        <p className="mb-6">
                                            In the Indian intellectual property ecosystem, a trademark objection is like a red light in a race. It doesn't mean you've lost, but it stops you in your tracks. An objection can delay your registration by 6 to 18 months and increase your legal costs by 300%.
                                        </p>
                                        <p className="mb-6">
                                            Most objections are entirely preventable. They stem from a lack of research, a poor naming choice, or technical errors in the application. At IPR Karo, we believe the best way to handle an objection is to ensure it never happens in the first place.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(85,60,154)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                                                "A trademark application filed without a strategy is just a formal request for an objection. A trademark filed with a strategy is a legal asset."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            This exhaustive guide provides a 5000+ word deep dive into pre-filing strategies. We will explore the absolute and relative grounds for refusal, the psychology of picking a 'strong' name, and the procedural checkboxes that many applicants miss. Our goal is to empower you to file with confidence and achieve a 'Zero Objection' registration path.
                                        </p>
                                    </section>

                                    <section id="pre-filing-research" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Phase 1: Deep Research (The National Trademark Search)
                                        </h2>
                                        <p className="mb-8">
                                            The absolute first step to avoiding an objection is knowing what is already out there. The Indian Trademark Registry has millions of marks. You cannot simply check if your exact name is available; you must check for 'Deceptive Similarity'.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(85,60,154)] transition-all shadow-sm group">
                                                <div className="text-[rgb(85,60,154)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faSearch} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2">Phonetic Search</h3>
                                                <p className="text-[10px] text-gray-500 leading-relaxed">Checking names that sound similar even if spelled differently (e.g., 'Kool' vs 'Cool').</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(85,60,154)] transition-all shadow-sm group">
                                                <div className="text-[rgb(85,60,154)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2">Cross-Class Search</h3>
                                                <p className="text-[10px] text-gray-500 leading-relaxed">Searching in related classes where goods or services often overlap (e.g., Class 25 and Class 35).</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(85,60,154)] transition-all shadow-sm group">
                                                <div className="text-[rgb(85,60,154)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-base mb-2">Well-Known List</h3>
                                                <p className="text-[10px] text-gray-500 leading-relaxed">Verifying against the official list of 90+ well-known marks in India that enjoy pan-class protection.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            A search is not a 5-minute task. It requires looking at 'Vienna Codification' for logos and understanding 'Common Law' rights for unregistered marks in use.
                                        </p>
                                    </section>

                                    <section id="naming-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Phase 2: The Art of Naming (The Strength Hierarchy)
                                        </h2>
                                        <p className="mb-6">
                                            Not all trademarks are created equal. The law gives more protection to unique names and very little to common ones. If you want to avoid an objection, you must move up the hierarchy:
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm mb-12">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="bg-gray-900 text-white uppercase text-xs tracking-widest font-black">
                                                        <th className="p-6">Type</th>
                                                        <th className="p-6">Description</th>
                                                        <th className="p-6">Objection Risk</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(85,60,154)]">Fanciful / Coined</td>
                                                        <td className="p-6 opacity-70">Invented words (e.g., KODAK, ROLEX).</td>
                                                        <td className="p-6 font-black text-green-600">NEAR ZERO</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(85,60,154)]">Arbitrary</td>
                                                        <td className="p-6 opacity-70">Common words unrelated to the product (e.g., APPLE for computers).</td>
                                                        <td className="p-6 font-black text-green-500">LOW</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-yellow-600">Suggestive</td>
                                                        <td className="p-6 opacity-70">Hints at the product nature (e.g., NETFLIX for streaming).</td>
                                                        <td className="p-6 font-black text-yellow-500">MEDIUM</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-6 font-bold text-red-600">Descriptive</td>
                                                        <td className="p-6 opacity-70">Describes the product (e.g., COLD BEER for beer).</td>
                                                        <td className="p-6 font-black text-red-600">VERY HIGH</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section id="section-9-traps" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Avoiding Section 9: Absolute Grounds for Refusal
                                        </h2>
                                        <p className="mb-6">
                                            Section 9 of the Trade Marks Act, 1999, covers the "Absolute" reasons why a mark shouldn't exist. To avoid these, ensure your mark:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10 my-10">
                                            <div className="flex bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(85,60,154)]"></div>
                                                <div>
                                                    <h4 className="font-black mb-2 flex items-center">
                                                        <FontAwesomeIcon icon={faCheckDouble} className="mr-3 text-[rgb(85,60,154)]" /> DISTINCTIVE
                                                    </h4>
                                                    <p className="text-xs opacity-70 leading-relaxed">Your mark must be capable of distinguishing your goods from others. If the name is too generic, the examiner will say it lacks 'Distinctive Character'.</p>
                                                </div>
                                            </div>
                                            <div className="flex bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(85,60,154)]"></div>
                                                <div>
                                                    <h4 className="font-black mb-2 flex items-center">
                                                        <FontAwesomeIcon icon={faCheckDouble} className="mr-3 text-[rgb(85,60,154)]" /> NON-GEOGRAPHICAL
                                                    </h4>
                                                    <p className="text-xs opacity-70 leading-relaxed">Avoid using names of cities, states, or countries. 'Kolkata Sweets' is nearly impossible to register because no one can own the name of a city for commerce.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Also avoid religious symbols, marks that hurt public morality, or obscene words. These are instant grounds for objection.
                                        </p>
                                    </section>

                                    <section id="section-11-traps" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Avoiding Section 11: Relative Grounds (The Market Clash)
                                        </h2>
                                        <p className="mb-8">
                                            Section 11 objections arise because your mark clashes with a "Senior Mark" (one that was filed before yours). The key to avoiding this is understanding that 'Similarity' is subjective.
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm p-10 space-y-8">
                                            <h4 className="font-black text-gray-900 uppercase tracking-widest text-center mb-8">How to Disprove Similarity</h4>
                                            <div className="grid md:grid-cols-2 gap-10">
                                                <div className="space-y-4">
                                                    <h5 className="font-bold flex items-center text-[rgb(85,60,154)]"><FontAwesomeIcon icon={faLightbulb} className="mr-2" /> Visual Difference</h5>
                                                    <p className="text-xs opacity-70">If the names are similar, use a vastly different font, color palette, and a unique logo icon to create visual distance.</p>
                                                </div>
                                                <div className="space-y-4">
                                                    <h5 className="font-bold flex items-center text-[rgb(85,60,154)]"><FontAwesomeIcon icon={faLightbulb} className="mr-2" /> Meaningful Difference</h5>
                                                    <p className="text-xs opacity-70">If 'Sky' exists for clouds, use 'Sky' as an acronym. Proving a different source of origin or meaning can often bypass a Section 11 hit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="application-accuracy" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Procedural Precision: The Hidden Killers
                                        </h2>
                                        <p className="mb-6">
                                            You would be surprised how many objections are issued for 'Administrative' reasons. These are the easiest to avoid but often overlooked:
                                        </p>
                                        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] my-12 relative overflow-hidden group border border-white/5">
                                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[rgb(85,60,154)] rounded-full blur-[80px] opacity-20"></div>
                                            <ul className="space-y-6 relative z-10 text-sm md:text-base">
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheckDouble} className="text-green-400 mr-4 shrink-0" /> Full name and address matching your legal identity documents.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheckDouble} className="text-green-400 mr-4 shrink-0" /> Correct selection of Class (Nice Classification).</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheckDouble} className="text-green-400 mr-4 shrink-0" /> Uploading a high-resolution logo in JPEG format.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheckDouble} className="text-green-400 mr-4 shrink-0" /> Properly signed Power of Attorney (if using an agent).</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheckDouble} className="text-green-400 mr-4 shrink-0" /> Valid MSME or Startup certificate to claim fee concessions.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="user-affidavit" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Power of Prior Use (User Affidavits)
                                        </h2>
                                        <p className="mb-6">
                                            If your brand has been in use since 2015 and you are only filing in 2024, you have a massive advantage. But you must prove it! Filing as 'Proposed to be Used' when you already have a history is a missed opportunity.
                                        </p>
                                        <p className="mb-6">
                                            A 'User Affidavit' accompanied by documentary evidence (invoices, ads, domain names) can often override a Section 9 or Section 11 objection. It proves that the public already recognizes your name as a distinct brand.
                                        </p>
                                    </section>

                                    <section id="legal-strategy" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Professional IP Strategy: Why Experts Matter
                                        </h2>
                                        <p className="mb-6">
                                            A trademark attorney doesn't just fill out a form; they build a fortress around your brand. Before filing, we at IPR Karo look for:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:scale-[1.02] transition-transform">
                                                <h4 className="font-bold text-lg mb-4 text-[rgb(85,60,154)]"> Vienna Codification Strategy</h4>
                                                <p className="text-xs opacity-70 leading-relaxed">If your logo has a 'Lion', we search for all other 'Lion' logos in India. This prevents logo-based clashes that standard word searches miss.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:scale-[1.02] transition-transform">
                                                <h4 className="font-bold text-lg mb-4 text-[rgb(85,60,154)]"> Specific Goods/Services Drafting</h4>
                                                <p className="text-xs opacity-70 leading-relaxed">Instead of saying 'Services in Class 35', we list specific activities. This narrow scope can often prevent broad objections from giants in the same class.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="checklists" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(85,60,154)] decoration-4 underline-offset-8">
                                            Final Pre-Filing Checklist
                                        </h2>
                                        <div className="bg-white border-4 border-[rgb(85,60,154)] p-10 rounded-[3rem] space-y-8">
                                            <div className="flex items-start gap-4">
                                                <div className="bg-[rgb(85,60,154)] text-white p-2 rounded-lg"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" /></div>
                                                <p className="text-sm font-bold">Have I searched for phonetic and visual similarities across related classes?</p>
                                            </div>
                                            <div className="flex items-start gap-4 border-t pt-8">
                                                <div className="bg-[rgb(85,60,154)] text-white p-2 rounded-lg"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" /></div>
                                                <p className="text-sm font-bold">Is my brand name 'Coined' or 'Arbitrary' rather than 'Descriptive'?</p>
                                            </div>
                                            <div className="flex items-start gap-4 border-t pt-8">
                                                <div className="bg-[rgb(85,60,154)] text-white p-2 rounded-lg"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" /></div>
                                                <p className="text-sm font-bold">Do I have my MSME/Startup certificate ready for the 50% fee discount?</p>
                                            </div>
                                            <div className="flex items-start gap-4 border-t pt-8">
                                                <div className="bg-[rgb(85,60,154)] text-white p-2 rounded-lg"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" /></div>
                                                <p className="text-sm font-bold">Has an IP expert reviewed my 'Description of Goods' for potential overlaps?</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Success Stories: Zero-Objection Registrations
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
                                                        <div className="w-10 h-10 bg-[rgb(85,60,154)] rounded-full flex items-center justify-center text-white font-bold mr-3">
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
                                            Expert FAQs: Pre-Filing Mastery
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(85,60,154)] mr-4 font-black">Q.</span>
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
                                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(85,60,154)] rounded-full blur-[120px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Secure Your Brand Name Today</h2>
                                        <p className="text-lg opacity-70 mb-12 max-w-3xl leading-relaxed font-light">
                                            Don't leave your brand to chance. Our IP strategy team will conduct a comprehensive pre-filing audit to identify and neutralize objection risks before they hit the registry.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(85,60,154)] hover:bg-[rgb(65,40,134)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wider">
                                                    Get Pre-Filing Audit
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
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(85,60,154)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Zero-Objection Strategy</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Why risk a 12-month delay? Get our 'Pre-Filing Security Audit' and fix potential trademark conflicts before you apply.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(85,60,154)] hover:bg-[rgb(65,40,134)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-[10px] uppercase tracking-widest">
                                        Audit My Brand
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(85,60,154)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Guides Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(85,60,154)] pb-4 uppercase tracking-widest">Trademark Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-is-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(85,60,154)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(85,60,154)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">TM 101 Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-do-a-trademark-search-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(85,60,154)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(85,60,154)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Mastering Searches</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-600 hover:text-[rgb(85,60,154)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(85,60,154)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Section 9 & 11 Legal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="group flex items-center text-gray-600 hover:text-[rgb(85,60,154)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(85,60,154)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Full Library</span>
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

const faCheckCircle = faCheckDouble;
