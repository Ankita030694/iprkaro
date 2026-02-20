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
    faInfoCircle,
    faSignature,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'MCA Company Name Check | Availability, Rules & RUN Guide 2026',
    description: 'Learn how to check company name availability on MCA V3 portal. Complete guide to name reservation rules, RUN service, and SPICe+ Part A for companies and LLPs.',
    keywords: [
        'mca company name check',
        'company name availability india',
        'RUN mca name reservation',
        'naming guidelines companies act 2013',
        'check llp name availability',
        'spice plus part a name check',
        'mca v3 name search',
        'restricted words company name',
        'reserve unique name process',
        'company name rejection reasons'
    ],
    openGraph: {
        title: 'Naming Your Business: MCA Company Name Availability Guide',
        description: 'Ensure your proposed company name is unique and compliant. Step-by-step masterclass on MCA naming rules and the RUN reservation service.',
        url: 'https://www.iprkaro.com/mca-company-name-check',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/mca-company-name-check',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Power of a Name: First Step to Incorporation' },
    { id: 'ai-algorithms', title: 'AI in MCA V3: The Machine Behind the Screen' },
    { id: 'how-to-check', title: 'How to Check Name Availability on MCA V3 Portal' },
    { id: 'naming-rules', title: 'Naming Rules: The Companies (Incorporation) Rules 2014' },
    { id: 'restricted-words', title: 'Restricted Words: What Requires Prior Approval?' },
    { id: 'capital-requirements', title: 'Capital Requirements for Global and International Names' },
    { id: 'identical-names', title: 'Identical vs. Too Nearly Resembling: The Legal Test' },
    { id: 'run-service', title: 'RUN Service: Reserving Your Unique Name' },
    { id: 'spice-plus', title: 'SPICe+ Part A: The Modern Reservation Workflow' },
    { id: 're-submission', title: 'Mastering the Re-Submission: Strategic Plan B' },
    { id: 'trademark-conflict', title: 'The Hidden Trap: MCA vs. Trademark Registry' },
    { id: 'rejection-reasons', title: 'Top 10 Reasons Why MCA Rejects Company Names' },
    { id: 'llp-naming', title: 'Naming an LLP: Differences You Must Know' },
    { id: 'why-iprkaro', title: 'Why Trust IPR Karo for Your Business Naming?' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Building a Brand on a Solid Foundation' },
];

const faqs = [
    {
        question: "How do I check company name availability on the MCA portal?",
        answer: "You can check name availability on the MCA V3 portal by navigating to the 'MCA Services' section and using the 'Company e-Filing' tool. You will need to create a login to access the advanced search algorithms that detect phonetic similarities."
    },
    {
        question: "What is the RUN service in MCA?",
        answer: "RUN (Reserve Unique Name) is a web-based service for reserving a proposed name for a new company or changing the name of an existing company. It costs ₹1,000 per application and allows for two name preferences."
    },
    {
        question: "Can I use the word 'Global' or 'International' in my company name?",
        answer: "Yes, but there are specific requirements. Generally, using 'International' or 'Global' requires a higher authorized capital (often ₹5 Lakhs or more) and the business must have a demonstrable international scope of operations."
    },
    {
        question: "What are the restricted words for company names in India?",
        answer: "Words like 'National', 'Federal', 'Republic', 'Central', 'Insurance', 'Bank', 'Stock Exchange', and 'Mutual Fund' are restricted. These require prior approval from the Central Government or sectoral regulators like RBI and SEBI."
    },
    {
        question: "How long is a company name reserved once approved?",
        answer: "For a new company, the name is reserved for 20 days. For an existing company changing its name, the reservation is valid for 60 days from the date of approval."
    },
    {
        question: "Is it mandatory to check for trademarks before naming a company?",
        answer: "Yes. Under Rule 8, the MCA will reject a name if it is identical to or too similar to a registered trademark or a pending trademark application. A thorough check on the IP India portal is essential."
    },
    {
        question: "What if my proposed name is phonetically similar to an existing one?",
        answer: "MCA will likely reject names that are phonetically similar (e.g., 'Jio' vs 'Giyo') even if the spellings are different. The goal is to prevent public confusion between two different entities."
    },
    {
        question: "Can I use my own name for my company?",
        answer: "Yes, you can use your own name, but it must be followed by a unique business prefix (e.g., 'Rahul Kumar Consultants Pvt Ltd') to ensure it is not merely a generic name."
    },
    {
        question: "Can I use a celebrity brand name if it's in a different industry?",
        answer: "No. Famous or well-known trademarks are protected across all industries. Using a name like 'Google' or 'Tata' for a clothing brand will likely be rejected by both MCA and the Trademark Registry."
    },
    {
        question: "What happens if my name reservation (RUN) is rejected?",
        answer: "If rejected, you typically get one chance to re-submit the application with two new name preferences without paying the ₹1,000 fee again. If the second attempt fails, you must file a fresh application."
    }
];

export default function McaNameCheckPage() {
    const breadcrumbItems = [
        { label: "MCA Company Name Check", href: "/mca-company-name-check" },
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
                "name": "MCA Name Check",
                "item": "https://www.iprkaro.com/mca-company-name-check"
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
        "headline": "MCA Company Name Check: The Complete Guide to Selection and Reservation",
        "description": "Examine the technical rules of company naming in India. Learn about RUN, SPICe+ Part A, and how to avoid name rejections by the Ministry of Corporate Affairs.",
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
        "datePublished": "2026-02-20",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/mca-company-name-check"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Company Name Availability Check Service",
        "image": "https://www.iprkaro.com/assets/mca-name-og.jpg",
        "description": "Expert assistance in company name selection, availability check, and RUN/SPICe+ filing.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1920"
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
                            The Identity Architect: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>MCA Company Name Check</span> & Naming Rules
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            More than just a search; it is a legal strategy. Navigate the Ministry of Corporate Affairs (MCA) V3 portal with IPR Karo and ensure your dream business name is both available and legally bulletproof.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Check My Name Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Power of a Name: The First Step to Incorporation</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        When an entrepreneur embarks on the journey of starting a business in India, the most exciting moment is often choosing the brand name. It is the face that the world will see, the title on every invoice, and the identity that your customers will come to trust. However, in the world of corporate law, a name is much more than a creative choice; it is a legal asset that must be vetted through a rigorous <strong>mca company name check</strong>. The Ministry of Corporate Affairs (MCA) maintains a comprehensive database of millions of companies and LLPs, and the rules governing what you can and cannot name your business are surprisingly complex.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The Companies Act of 2013 and the Companies (Incorporation) Rules of 2014 provide a strict framework designed to prevent public confusion. A name that sounds too similar to an existing giant, or one that uses restricted words without permission, will be rejected by the Registrar of Companies (ROC) without hesitation. This rejection is not just an administrative hiccup; it can cost you thousands of rupees in non refundable fees and set back your incorporation timeline by weeks. At IPR Karo, we understand that the name check is the foundation upon which your entire corporate structure is built. A weak foundation leads to future legal battles, re-branding costs, and lost goodwill.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The transition from the traditional MCA V2 portal to the advanced V3 ecosystem has made the name check process more sophisticated. The new search algorithms are trained to detect not just identical names, but phonetic similarities and trademark conflicts that were previously missed by simpler systems. This means that entrepreneurs need to be more strategic than ever before. You cannot simply change a letter or add a generic word like "Global" and expect it to pass. In this definitive 2026 manual, we will explore the depths of the MCA naming guidelines, the nuances of the RUN service, and the critical importance of aligning your company name with the Intellectual Property India database.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "Your company name is your first contract with the market. If the law doesn't recognize it, the market won't respect it. A thorough MCA check is the difference between a name and a brand."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Whether you are planning to incorporate a Private Limited Company, a One Person Company (OPC), or a Limited Liability Partnership (LLP), the principles of a name check remain the same: uniqueness, compliance, and strategic foresight. As we move through this guide, we will break down the technicalities of Rule 8, explain why "similar" is a broad legal term, and show you how to leverage the SPICe+ Part A form to your advantage. Your journey to creating a legacy starts here, with the professional validation of your business identity.
                                    </p>
                                </section>

                                <section id="ai-algorithms" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Machine Behind the Screen: AI in MCA V3 Name Check</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The transition to the MCA V3 portal in 2024–2025 was not just a UI upgrade; it was an intelligence upgrade. The new portal uses advanced <strong>fuzzy matching algorithms</strong> and phonetic search capabilities. This means that if "Astra Healthcare" exists, the system will automatically flag "Astra Health-Care," "Astraa Helthcare," and even "Astra Wellness" if the keywords are too similar.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        For entrepreneurs, this means that the "lazy naming" strategies of the past no longer work. Previously, one could successfully register a name by simply adding a prefix like "New" or a suffix like "India." Today, the AI evaluates the 'Distinctive Word' of the title. If the primary distinctive word is already in use by a company in a similar industry (identified by the NIC codes), the system will generate a "High Similarity" alert during the pre-scrutiny phase. At IPR Karo, we use similar heuristic tools to stress-test your proposed names before we ever hit the 'Submit' button on the government portal.
                                    </p>
                                </section>

                                <section id="how-to-check" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">How to Check Name Availability on the MCA V3 Portal</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The MCA V3 portal is the modern digital gateway for all corporate filings in Bharat. Accessing the name check service correctly is vital to ensure you are getting the most accurate, real-time results from the database.
                                    </p>
                                    <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                                        <h4 className="font-bold text-[#0C002B] text-xl mb-4">The Official Workflow</h4>
                                        <ol className="space-y-4 list-decimal pl-6 text-gray-700 leading-relaxed text-lg">
                                            <li><strong>Login</strong>: Unlike the old version, the V3 portal requires a registered user login (Business User or Registered User) to access the advanced name check features.</li>
                                            <li><strong>Navigate to Services</strong>: Once logged in, go to the 'MCA Services' menu and select 'Company e-Filing'.</li>
                                            <li><strong>Select Part A</strong>: If you are incorporating a new company, select 'SPICe+ Part A'. If it is an LLP, look for 'LLP RUN'.</li>
                                            <li><strong>Enter Proposed Name</strong>: The V3 system allows you to search against both existing companies and LLPs simultaneously.</li>
                                            <li><strong>Analyze Results</strong>: The system will provide a 'Pre-scrutiny' result. If it flags an existing name, it will show you the CIN (Corporate Identity Number) of the existing entity.</li>
                                        </ol>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-red-600 font-bold">
                                        Warning: A 'No matches found' result on the basic search tool does NOT guarantee approval. The ROC office performs a much deeper manual check that includes phonetic similarity and trademark databases.
                                    </p>

                                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 my-10">
                                        <h4 className="font-bold text-[#0C002B] text-xl mb-4">Pro-Tip: Use the 'Partial Search' Feature</h4>
                                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                            Never search for your full name as a single string. If you want "Blue Ocean Logistics," search for just "Blue Ocean" and then search for "Ocean Logistics." This broadens the search net and catches entities that might have been hidden by the middle word. The MCA V3 portal's "Search Company Name" feature allows for these wildcard-style inquiries, which are essential for identifying indirect conflicts.
                                        </p>
                                    </div>
                                </section>

                                <section id="naming-rules" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Naming Rules: The Companies (Incorporation) Rules 2014</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Rule 8 of the Incorporation Rules is the "Holy Grail" for naming a business. It defines what constitutes an undesirable name. To pass this test, your name must not fall into any of the following traps:
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-blue-900 text-xl mb-2">The 'Too Similar' Exception</h4>
                                                <p className="text-blue-800">Minor spellings, spacing, or pluralizing a word does not make it unique. For example, if 'Agile Solutions Pvt Ltd' exists, you cannot register 'Agiles Solutions Pvt Ltd' or 'Agile-Solutions Pvt Ltd'.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faGavel} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-blue-900 text-xl mb-2">The Common Prefix Rule</h4>
                                                <p className="text-blue-800">You cannot have a name that consists only of common generic words. 'Technology Software Private Limited' would be rejected. You must add a unique, distinctive prefix like 'Zenith Technology Software Private Limited'.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-blue-900 text-xl mb-2">Business Object Alignment</h4>
                                                <p className="text-blue-800">Your name should generally reflect your primary business activity. If your name is 'Suraj Real Estate Pvt Ltd', but your business object is IT Services, the ROC will reject it for being misleading to the public.</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="p-8 bg-yellow-50 rounded-3xl border border-yellow-100 italic my-10">
                                        <p className="text-yellow-900 leading-relaxed text-lg">
                                            <strong>Legacy Warning:</strong> If you are planning to name your company after a deceased person, you must provide proof of legal heirship or a No Objection Certificate (NOC) from the surviving family members. The ROC is increasingly strict about preventing the unauthorized use of family legacies for commercial purposes.
                                        </p>
                                    </div>
                                </section>

                                <section id="restricted-words" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Restricted Words: What Requires Prior Approval?</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Certain words carry a weight of authority and can only be used if your business meets specific criteria or has received a No Objection Certificate from the relevant government bodies.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faBuilding} className="mr-3 text-[#6E5E93]" />
                                                Government/State Words
                                            </h4>
                                            <p className="text-gray-600">'National', 'Central', 'Federal', 'Republic', 'Union', 'Statutory'. These are almost never allowed for private entities as they imply government patronage.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="mr-3 text-[#6E5E93]" />
                                                Regulated Segments
                                            </h4>
                                            <p className="text-gray-600">'Insurance', 'Bank', 'Stock Exchange', 'Mutual Fund', 'Venture Capital'. Use of these requires a 'No Objection Certificate' from RBI, IRDAI, or SEBI respectively.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[#6E5E93]" />
                                                Financial Strength Words
                                            </h4>
                                            <p className="text-gray-600">'Global', 'International', 'Universal', 'Industries', 'Corporation'. These often require the entity to have multiple business units or represent a significant scale of operations.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="capital-requirements" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Capital Requirements: Naming Based on Financial Power</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        In the past, the MCA had very strict authorized capital requirements linked to specific words. While some of these have been relaxed in the 2026 guidelines to promote Ease of Doing Business, the Registrar still looks for financial credibility when you use 'Prestige' titles.
                                    </p>
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white">
                                                <tr>
                                                    <th className="p-5 font-bold border border-purple-700">Word in Name</th>
                                                    <th className="p-5 font-bold border border-purple-700">Recommended Min. Capital (Auth.)</th>
                                                    <th className="p-5 font-bold border border-purple-700">Requirement Criteria</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 text-base">
                                                <tr>
                                                    <td className="p-4 font-bold border">International / Global</td>
                                                    <td className="p-4 border">₹ 5,00,000</td>
                                                    <td className="p-4 border">Business in more than 2 countries</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold border">Hindustan / India / Bharat</td>
                                                    <td className="p-4 border">₹ 5,00,000</td>
                                                    <td className="p-4 border">Pan-India operations presence</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold border">Industries / Udyog</td>
                                                    <td className="p-4 border">₹ 1,00,00,000</td>
                                                    <td className="p-4 border">Manufacturing/Large scale units</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold border">Venture / Enterprise</td>
                                                    <td className="p-4 border">₹ 1,00,000</td>
                                                    <td className="p-4 border">Standard for startups</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">Note: These are directional guidelines used by the ROC. The final decision depends on the 'Principal Business Object' clause in your Memorandum of Association (MOA).</p>
                                </section>

                                <section id="identical-names" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Legal Test: Identical vs. Too Nearly Resembling</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        This is where most DIY <strong>mca company name check</strong> attempts fail. The law uses a "public lens" to determine similarity. If a common man could confuse Company A with Company B, then the names are too similar.
                                    </p>
                                    <div className="bg-white border-l-[10px] border-l-[#0C002B] p-8 my-10 rounded-r-3xl shadow-xl">
                                        <h4 className="font-bold text-[#0C002B] text-2xl mb-4">What the ROC Ignores for Uniqueness:</h4>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                            <li className="flex items-start gap-2"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-1" /> Use of plural version (e.g., 'Toy' vs 'Toys')</li>
                                            <li className="flex items-start gap-2"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-1" /> Change in type/case of letters</li>
                                            <li className="flex items-start gap-2"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-1" /> Spacing between words</li>
                                            <li className="flex items-start gap-2"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-1" /> Different combination of the same words</li>
                                            <li className="flex items-start gap-2"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-1" /> Use of 'The', 'A', 'An', 'And'</li>
                                            <li className="flex items-start gap-2"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-1" /> Translation into another language</li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="run-service" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">RUN Service: Reserving Your Unique Name</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The <strong>Reserve Unique Name (RUN)</strong> is a post-login service on the MCA portal specifically designed for reserving a name before the full incorporation process starts. It is the preferred choice for those who are still finalizing their legal documents but want to secure their brand name first.
                                    </p>
                                    <div className="space-y-12 my-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[31px] before:-z-10 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:via-purple-200 before:to-transparent">
                                        {/* Step 1 */}
                                        <div className="relative flex items-center gap-6 md:gap-10">
                                            <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">1</div>
                                            <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-2">Two Preferences</h4>
                                                <p className="text-gray-600 leading-relaxed text-lg">The RUN form allows you to submit up to two name preferences. List your favorite name first. If the ROC finds the first choice unavailable, they will automatically check the second.</p>
                                            </div>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="relative flex items-center gap-6 md:gap-10">
                                            <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">2</div>
                                            <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-2">Government Fee (₹1,000)</h4>
                                                <p className="text-gray-600 leading-relaxed text-lg">The fee is non-refundable. If both names are rejected, you have one chance to 'Resubmit' with two new names for free. If those are also rejected, you lose the ₹1,000 and must pay again.</p>
                                            </div>
                                        </div>
                                        {/* Step 3 */}
                                        <div className="relative flex items-center gap-6 md:gap-10">
                                            <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">3</div>
                                            <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-2">Reservation Validity</h4>
                                                <p className="text-gray-600 leading-relaxed text-lg">Once approved, the name is blocked for you for 20 days. You must file the final incorporation forms (SPICe+) within this window, or the name will revert to the public pool.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="spice-plus" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">SPICe+ Part A: The Modern Integrated Workflow</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        While RUN is a standalone service, most modern entrepreneurs use the <strong>SPICe+ (Simplified Proforma for Incorporating Company electronically)</strong> portal. Part A of the SPICe+ form is dedicated purely to name reservation.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The advantage of SPICe+ Part A is that it is integrated with several other services, including the generation of DIN (Director Identification Number), PAN, TAN, and EPFO/ESIC registration. When you check your name via SPICe+ Part A, the system performs a primary check against the Trademark database automatically, alerting you to potential conflicts before you spend a single rupee.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 my-10 text-white">
                                        <div className="bg-[#0C002B] p-8 rounded-[2rem] border border-gray-700">
                                            <h4 className="text-xl font-bold mb-4">When to use RUN</h4>
                                            <ul className="text-sm opacity-80 space-y-2 mb-6 p-0 list-none">
                                                <li>• Name change of an existing company.</li>
                                                <li>• Reserving a name before foreign JV finalization.</li>
                                                <li>• If you are only testing the 'Distinctiveness' of a brand.</li>
                                            </ul>
                                            <Link href="/contact-us" className="text-[#6E5E93] font-bold hover:underline">File RUN Application →</Link>
                                        </div>
                                        <div className="bg-[#160049] p-8 rounded-[2rem] border border-gray-700">
                                            <h4 className="text-xl font-bold mb-4">When to use SPICe+ Part A</h4>
                                            <ul className="text-sm opacity-80 space-y-2 mb-6 p-0 list-none">
                                                <li>• Most new business incorporations.</li>
                                                <li>• Integrated filing (Name + PAN + TAN).</li>
                                                <li>• Cost-effective (part of the main formation fee).</li>
                                            </ul>
                                            <Link href="/contact-us" className="text-[#6E5E93] font-bold hover:underline">Start Incorporation →</Link>
                                        </div>
                                    </div>
                                </section>

                                <section id="re-submission" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Mastering the Re-Submission: Strategic Plan B</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        If your <strong>mca company name check</strong> results in a 'Send Back for Resubmission' (Resub) status, don't panic. It is a common part of the process. The CRC (Central Registration Centre) officer will provide a "Reason for Rejection." This is your roadmap.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Usually, you have 15 days to resubmit. Instead of trying to argue with the officer (which rarely works), try to pivot. If they say "Phonetically similar to X," don't just change the spelling. Change the prefix. If they say "Objects are vague," refine your NIC code selection. At IPR Karo, we handle resubmissions by providing a "Legal Memo" along with the new name, explaining why the new choice satisfies the ROC's concerns while citing Rule 8 precedents.
                                    </p>
                                </section>

                                <section id="trademark-conflict" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-red-700">The Hidden Trap: MCA Approval vs. Trademark Registry</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        This is the single most common reason why businesses fail in their first year. Receiving an approval letter from the MCA for 'Company ABC Pvt Ltd' does **NOT** mean you have the right to use 'ABC' as a brand name.
                                    </p>
                                    <div className="p-8 bg-red-50 rounded-3xl border border-red-100 my-10">
                                        <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faShieldAlt} className="mr-3" /> Rule 8 Cross-Pollination
                                        </h4>
                                        <p className="text-red-800 leading-relaxed text-lg">
                                            Under the Companies Act, the ROC must ensure that a proposed name does not violate the Trade Marks Act of 1999. If a company named 'Tesla' does not exist in India, but the trademark 'Tesla' is registered to Elon Musk's entity, the ROC will reject your application for 'Tesla Auto India Pvt Ltd'. At IPR Karo, we perform a dual search on both the MCA database and the IP India Trademark database to ensure you are safe from future lawsuits.
                                        </p>
                                    </div>
                                </section>

                                <section id="rejection-reasons" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Top 10 Reasons Why MCA Rejects Company Names</h2>
                                    <div className="grid md:grid-cols-2 gap-4 my-8">
                                        {[
                                            "Phonetic similarity with an existing brand.",
                                            "Name too descriptive of the business activity.",
                                            "Conflict with an existing registered trademark.",
                                            "Use of restricted words without NOC.",
                                            "Misleading business objects in the name.",
                                            "Using names of famous celebrities or brands.",
                                            "Generic words as a prefix (no uniqueness).",
                                            "Name that implies government patronage.",
                                            "Using names of existing LLPs for companies.",
                                            "Minor spelling variations of giant corporations."
                                        ].map((reason, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold">{idx + 1}</div>
                                                <span className="text-gray-700 font-medium">{reason}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="llp-naming" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Naming an LLP: Critical Differences</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        While the broad rules of similarity apply, Limited Liability Partnerships (LLPs) have their own set of suffixes and slight variations in the RUN process. An LLP must always end with the words <strong>Limited Liability Partnership</strong> or the acronym <strong>LLP</strong>. You cannot use 'Pvt Ltd' or 'Ltd' for an LLP. Interestingly, the MCA V3 portal now allows you to check for both LLP and Company names in a single search, recognizing that they are part of the same corporate ecosystem.
                                    </p>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why Hundreds of Startups Choose IPR Karo for Naming</h2>
                                    <p className="mb-10 leading-relaxed text-lg">
                                        We don't just 'check' a database; we design your legal identity. Our process is designed to save you from the ₹1,000 rejection cycle.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faRocket} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Duo-Database Audit</h4>
                                            <p className="text-sm opacity-70">We sync MCA and Trademark Registry data to ensure your name is clear on both fronts, preventing future re-branding.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faSignature} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">NOC Assistance</h4>
                                            <p className="text-sm opacity-70">Need a name similar to a parent company? We draft the legal NOCs and board resolutions required to pass ROC scrutiny.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faSignature} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">24-Hour Clearance</h4>
                                            <p className="text-sm opacity-70">Our status as professional filing agents allows us to get your name reservation approved faster than DIY attempts.</p>
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
                                            author: "Sanjay Singhal",
                                            role: "Founder, Fintech Innovators",
                                            rating: 5,
                                            date: "2024-02-12",
                                            text: "I tried twice to register my startup name and got rejected both times. IPR Karo identified the trademark conflict I missed and suggested a name that got approved in 24 hours. Highly recommended!",
                                            avatar: "SS"
                                        },
                                        {
                                            author: "Ishita Gupta",
                                            role: "CEO, EcoLife Ventures",
                                            rating: 5,
                                            date: "2024-01-28",
                                            text: "Their dual-search on MCA and TM databases is a game-changer. It gave us the confidence that our brand was legally safe before we even printed our first business cards.",
                                            avatar: "IG"
                                        },
                                        {
                                            author: "Amit Khurana",
                                            role: "Director, Khurana Logistics LLP",
                                            rating: 5,
                                            date: "2023-12-15",
                                            text: "Excellent support for LLP name reservation. They handled the resubmission query about 'phonetic similarity' perfectly by citing Rule 8 precedents. Very professional team.",
                                            avatar: "AK"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Building a Brand on a Solid Foundation</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Ultimately, a professional <strong>mca company name check</strong> is about more than just avoiding a rejection letter. It is about the sanctity of your brand and the peace of mind of your investors. In a crowded marketplace like India, a unique name is your most powerful tool for differentiation. By following the statutory rules, respecting trademark boundaries, and leveraging professional services like IPR Karo, you ensure that your business starts its journey on the right side of the law.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Don't let your business project be stalled by a name selection error. Take the time to research, validate, and reserve your identity correctly. Your brand is the story you tell the world; make sure it begins with a name that is worth remembering.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Found Your Perfect Name?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Don't wait for someone else to claim it. Secure your company name today with our expert 1-hour availability check and reservation service.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Check Name Availability
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Talk to a Specialist
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Instant Check</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Ready to incorporate? Get a **Priority Verification** against MCA & Trademark databases.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Verify Now
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Key Links</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Trademark Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/small-company-definition" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Small Company Benefits</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/udyam-registration-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Udyam Registration</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </aside>

                    </div >
                </div >
            </div >
        </>
    );
}
