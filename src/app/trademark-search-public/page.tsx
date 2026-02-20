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
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Public Trademark Search India | IP India Step-by-Step Guide 2026',
    description: 'Master the IP India public search portal. Learn how to perform Wordmark, Phonetic, and Vienna code searches to ensure your brand name is available and conflict-free.',
    keywords: [
        'public trademark search india',
        'ip india online search',
        'wordmark search trademark',
        'phonetic trademark search',
        'vienna code search guide',
        'trademark class search nice classification',
        'check trademark availability india',
        'tmr public search status',
        'deceptively similar trademark search',
        'madrid protocol trademark search india'
    ],
    openGraph: {
        title: 'Brand Protection 101: The Ultimate Guide to Public Trademark Search',
        description: 'Dont file blindly. Learn how to use the IP India portal to find similar brands and avoid costly legal rejections. Comprehensive Wordmark & Phonetic search guide.',
        url: 'https://www.iprkaro.com/trademark-search-public',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-search-public',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The First Line of Defense: Why Trademark Search Matters' },
    { id: 'ip-portal-overview', title: 'Navigating the IP India Portal: An Introduction' },
    { id: 'wordmark-search', title: 'Wordmark Search: Mastering the "Contains" Strategy' },
    { id: 'phonetic-search', title: 'The Sound of Conflict: Why Phonetic Search is Critical' },
    { id: 'vienna-code', title: 'Decoding Logos: The Vienna Classification System' },
    { id: 'nice-classification', title: 'Nice Classification (Classes 1-45): Finding Your Niche' },
    { id: 'cross-class-conflicts', title: 'The Hidden Trap: Cross-Class Conflicts in Search' },
    { id: 'madrid-international', title: 'Madrid Protocol: Searching for International Designations' },
    { id: 'search-status-meaning', title: 'Understanding Search Results: What "Registered" vs "Objected" Means' },
    { id: 'zombie-trademarks', title: 'Zombie Trademarks: Rectification and Removal Opportunities' },
    { id: 'well-known-marks', title: 'The Forbidden Zone: Well-Known and Prohibited Marks' },
    { id: 'why-iprkaro', title: 'IPR Karo: The Forensics of Brand Availability' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Securing Your Brand’s Future Today' },
];

const faqs = [
    {
        question: "Is the IP India public trademark search free?",
        answer: "Yes, the official IP India portal (ipindiaonline.gov.in) provides a free public search tool that anyone can use to check the availability of brand names and logos."
    },
    {
        question: "What is a Phonetic Search?",
        answer: "A phonetic search identifies trademarks that sound similar to your name, even if they are spelled differently (e.g., 'Koka' vs 'Coca'). It is vital because Indian law protects against deceptively similar sounding marks."
    },
    {
        question: "How do I find a trademark class for my business?",
        answer: "Trademarks are categorized into 45 classes under the Nice Classification. You must identify whether your business provides goods (Classes 1-34) or services (Classes 35-45). Common examples include Class 25 for clothing and Class 35 for retail."
    },
    {
        question: "What is the Vienna Code?",
        answer: "The Vienna Code is an international classification used to index the figurative elements (logos, shapes, symbols) of trademarks. It allows you to search for similar logos even if they don't have text."
    },
    {
        question: "Does 'No Match Found' mean my trademark is safe?",
        answer: "Not necessarily. A basic search might miss phonetic similarities, well-known marks protected across all classes, or trademarks registered under different but related international classes."
    },
    {
        question: "Can I search for International trademarks in India?",
        answer: "Yes. The IP India portal has a specific section for 'International Registration' which lists trademarks filed under the Madrid Protocol that have designated India for protection."
    },
    {
        question: "What if my search shows a 'Registered' trademark with the same name?",
        answer: "If the mark is in the same class and relates to similar goods/services, you should ideally modify your brand name. Filing for an identical registered name usually leads to immediate objection and potential legal action."
    },
    {
        question: "What does 'Objected' status in search results mean?",
        answer: "It means the Trademark Registrar has examined the application and raised concerns about its validity, often because it is too similar to an existing mark or lacks distinctiveness (Section 9/11)."
    },
    {
        question: "How often should I conduct a trademark search?",
        answer: "You should conduct a fresh search immediately before filing your application, as hundreds of new trademarks are filed daily on the portal."
    },
    {
        question: "Why should I hire a professional for a search?",
        answer: "Professional searches by firms like IPR Karo include an 'Opinion of Registrability' which analyzes legal precedents, prior-user rights, and cross-class conflicts that a basic free search often misses."
    }
];

export default function TrademarkSearchPublicPage() {
    const breadcrumbItems = [
        { label: "Public Trademark Search", href: "/trademark-search-public" },
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
                "name": "Public Trademark Search",
                "item": "https://www.iprkaro.com/trademark-search-public"
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
        "headline": "Public Trademark Search India: The Definitive 2026 Guide to IP India Portal",
        "description": "Don't risk a trademark objection. Use our comprehensive guide to master Wordmark, Phonetic, and Vienna searches on the official IP India portal.",
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
            "@id": "https://www.iprkaro.com/trademark-search-public"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Comprehensive Trademark Search & Opinion Service",
        "image": "https://www.iprkaro.com/assets/tm-search-og.jpg",
        "description": "Professional forensic trademark search covering phonetic similarity, vienna classification, and well-known mark conflicts.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "2850"
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
                            Brand Probability Forensics: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Public Trademark Search</span> India 2026
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Don’t launch a brand that is already taken. Use the official IP India database to detect phonetic conflicts, logo similarities, and well-known mark boundaries before you file.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Start Your Search Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The First Line of Defense: Why Trademark Search Matters</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the high velocity world of business in Bharat, a brand name is your most valuable asset. It represents your reputation, your promise to the consumer, and the very identity of your enterprise. However, thousands of ambitious entrepreneurs make a fatal mistake every month: they launch a brand, invest in marketing, and print packaging, only to receive a cease and desist notice or a trademark objection. Why? Because the name was already taken, or worse, was <strong>deceptively similar</strong> to an existing brand. This is where the <strong>trademark search public</strong> process becomes your ultimate legal shield.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Filing a trademark without a comprehensive search is like building a house on a land you don't own. The IP India portal, managed by the Office of the Controller General of Patents, Designs and Trademarks, offers a window into the nation's vast intellectual property registry. But simply typing a name into a search box is not enough. You must navigate the complexities of phonetic similarities, Vienna codes for logos, and the intricate web of the Nice Classification system. A name that looks different on paper might sound identical in a crowded marketplace, and the law protects the "average consumer" from such confusion.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we view a trademark search as an act of brand forensics. It is not just about finding an identical name; it is about analyzing the "probability of confusion." In 2026, with the sheer volume of digital businesses exploding, the registry is more crowded than ever. An objection from the registrar or an opposition from a rival can delay your registration by years and cost lakhs in legal fees. This 4000-word masterclass is designed to convert you from a curious searcher into a strategic brand owner. We will walk you through the forensic tools available on the IP India portal and show you how to think like a trademark examiner.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A search today prevents a lawsuit tomorrow. In trademark law, being unique is not just a creative choice; it is a statutory requirement."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Throughout this guide, we will explore the three pillars of search: Wordmark, Phonetic, and Vienna. We will help you identify which of the 45 classes your business belongs to and why searching the Madrid Protocol database is no longer optional. Whether you are a solo founder with a breakthrough idea or a corporate giant expanding into new territories, this manual will provide the tactical clarity needed to secure your brand’s future in the Indian market. Let us begin by exploring the official portal’s architecture.
                                    </p>
                                </section>

                                <section id="ip-portal-overview" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Navigating the IP India Portal: An Introduction</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The official <strong>trademark search public</strong> portal is located at `ipindiaonline.gov.in`. It is an enormous database that contains every trademark application filed in India since the enactment of the Trade Marks Act. Navigating it requires an understanding of how data is indexed.
                                    </p>
                                    <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                                        <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Key Entry Requirements
                                        </h4>
                                        <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                            <li className="flex items-start gap-3">
                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1" />
                                                <span><strong>Search Type:</strong> You must select between 'Wordmark', 'Phonetic', or 'Vienna Code'.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1" />
                                                <span><strong>Class:</strong> India follows the Nice Classification, requiring you to specify a class from 1 to 45.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1" />
                                                <span><strong>Captcha:</strong> A standard security feature to prevent automated data scraping.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="wordmark-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Wordmark Search: Mastering the "Contains" Strategy</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        The Wordmark search is the most common entry point. When you select 'Wordmark', the portal gives you three match types. Choosing the right one is the difference between a shallow check and a professional deep dive.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3">Starts With</h4>
                                            <p className="text-sm text-gray-600">Finds marks beginning with your string. (e.g., 'Apple' finds 'AppleGreen'). This is limited as it misses marks where your string is at the end.</p>
                                        </div>
                                        <div className="p-6 bg-[#160049] text-white rounded-2xl border border-gray-200 shadow-lg scale-105">
                                            <h4 className="font-bold text-cyan-400 text-xl mb-3">Contains (Best)</h4>
                                            <p className="text-sm opacity-90">The most thorough search. Finds your string anywhere in the trademark. Searching 'Star' finds 'Starbucks', 'NorthStar', and 'RisingStar'.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3">Match With</h4>
                                            <p className="text-sm text-gray-600">Exact match only. While quick, it is highly dangerous as it misses even slight variations that can cause a legal conflict.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="phonetic-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Sound of Conflict: Why Phonetic Search is Critical</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Indian courts have consistently held that the "test of similarity" is one of ear as much as eye. A <strong>phonetic search</strong> is designed to find marks that sound similar, even if they have different spellings. This is based on the logic that a typical consumer might mishear a brand name or misspell it when searching for its product.
                                    </p>
                                    <div className="p-8 bg-red-50 rounded-3xl border border-red-100 my-10">
                                        <h4 className="font-bold text-red-900 text-2xl mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3" /> The Deceptive Similarity Rule
                                        </h4>
                                        <p className="text-red-800 leading-relaxed text-lg">
                                            Consider 'Koca' vs 'Coca-Cola' or 'Fanta' vs 'Phanta'. Visually, they look different. But phonetically, they are identical. In a <strong>trademark search public</strong> report, a phonetic match is often a high risk indicator. If you find a mark that sounds like yours in the same class, the Registrar is likely to cite 'Relative Grounds for Refusal' under Section 11 of the Act.
                                        </p>
                                    </div>
                                </section>

                                <section id="vienna-code" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Decoding Logos: The Vienna Classification System</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        What if your brand is primarily a picture? A "Device Mark" (logo) cannot be searched by typing text. Instead, the global intellectual property community uses the **Vienna Agreement** to classify shapes and symbols.
                                    </p>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        Every logo is broken down into numerical codes. For example, if your logo contains an animal, it falls under Class 03. If it contains a horse, the specific code might be 03.01.02. By searching these codes in the <strong>trademark search public</strong> portal, you can find every other registered logo that uses similar imagery. This prevents logo plagiarism and ensures your visual brand is as unique as your name.
                                    </p>
                                </section>

                                <section id="nice-classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Nice Classification (Classes 1-45): Finding Your Niche</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        You cannot search the entire database at once. You must specify a class. The "Nice Classification" (named after the French city) divides all products and services into 45 segments.
                                    </p>
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white">
                                                <tr>
                                                    <th className="p-5 font-bold border">Category</th>
                                                    <th className="p-5 font-bold border">Classes</th>
                                                    <th className="p-5 font-bold border">Common Examples</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 text-lg">
                                                <tr>
                                                    <td className="p-5 font-bold border">Goods</td>
                                                    <td className="p-5 border">1 to 34</td>
                                                    <td className="p-5 border">Chemicals (1), Cosmetics (3), Clothing (25), Coffee/Snacks (30)</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold border">Services</td>
                                                    <td className="p-5 border">35 to 45</td>
                                                    <td className="p-5 border">Business/Advertising (35), Finance (36), Education (41), Legal (45)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Choosing the wrong class during a search is the most common reason for failed due diligence. For instance, a clothing brand must search Class 25, but if they plan to sell online through their own platform, they should also check Class 35 for retail services. At IPR Karo, we perform "Cross Class Searches" to ensure your brand is protected from all angles.
                                    </p>
                                </section>

                                <section id="cross-class-conflicts" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Hidden Trap: Cross-Class Conflicts in Search</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        One of the most dangerous misconceptions in a <strong>trademark search public</strong> is that checking your specific class is sufficient. However, the Treadmarks Act protects against confusion not just for "identical" goods, but also for "similar" goods or services. This is known as a cross-class conflict.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        For example, if you are launching an online clothing store, searching Class 25 (Clothing) is obvious. But if a competitor has registered the same name in Class 35 (Advertising, Business Management, Retail Services), they might still be able to block your application. Why? Because the consumer might believe the online store (Class 35) and the brand of clothing (Class 25) originate from the same source. A professional search at IPR Karo involves checking "allied and related classes" to ensure you don't walk into a legal ambush.
                                    </p>
                                </section>

                                <section id="madrid-international" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Madrid Protocol: Searching for International Designations</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        India is a signatory to the <strong>Madrid Protocol</strong>, which allows international brands to file a single application to protect their mark in multiple countries, including India. In many cases, these international applications take a few weeks to appear in the local "Wordmark" database but are already legally active.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        When performing a thorough <strong>trademark search public</strong>, it is imperative to check the "International Registration" section of the IP India portal. This section lists brands from the USA, Europe, China, and elsewhere that have designated India for protection. If you miss a global giant that has just filed through the Madrid route, your local application will be hit with an opposition that is extremely difficult and expensive to fight.
                                    </p>
                                </section>

                                <section id="search-status-meaning" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Understanding Search Results: What "Registered" vs "Objected" Means</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        When a search list appears, you will see various statuses. Here is a decoder for your findings:
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-blue-500">
                                            <div className="w-12 h-12 shrink-0 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faCertificate} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Registered</h4>
                                                <p className="text-gray-600">The mark is fully protected. Avoid names similar to these to prevent legal battles.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-yellow-500">
                                            <div className="w-12 h-12 shrink-0 bg-yellow-500 rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faExclamationTriangle} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Objected / Opposed</h4>
                                                <p className="text-gray-600">These marks are facing legal hurdles. They are not yet safe, but they still block the path for new applications.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-red-500">
                                            <div className="w-12 h-12 shrink-0 bg-red-500 rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faGavel} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Refused / Abandoned</h4>
                                                <p className="text-gray-600">The application failed. Reviewing these is crucial to understand which brand names the Registrar dislikes.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="zombie-trademarks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Zombie Trademarks: Rectification and Removal Opportunities</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        What happens if your dream brand name is already registered, but the owner hasn't used it for years? In trademark law, these are often called "Zombie Trademarks." Under the Trade Marks Act, a registered trademark can be removed from the registry on the grounds of <strong>Non-Use</strong> if it hasn't been used for a continuous period of five years and three months.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        During our <strong>trademark search public</strong> analysis, we don't just stop at "Name is Registered." we investigate the usage status. If we find that a conflicting mark is vulnerable to cancellation due to non-use, it opens a strategic window for you. We can file a "Rectification Application" to have the blocking mark removed, clearing the runway for your brand to be registered. This is the difference between a simple search and a strategic brand acquisition plan.
                                    </p>
                                </section>

                                <section id="well-known-marks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Forbidden Zone: Well-Known and Prohibited Marks</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        A common trap in <strong>trademark search public</strong> is thinking you are safe because a name is not registered in your specific class. But certain marks are "Well-Known"—like 'Tata', 'Reliance', 'Google', or 'Amul'. These brands enjoy protection across all 45 classes, even if they don't sell products in those classes.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Furthermore, Section Nine of the Act prohibits trademarks that are purely descriptive (e.g., searching 'Sweet' for sugar) or are part of national emblems. A professional search identifies these pitfalls before you pay the non-refundable government filing fee.
                                    </p>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why Thousands of Brands Trust IPR Karo for Search Services</h2>
                                    <p className="mb-10 leading-relaxed text-lg">
                                        We don't just find names; we build brand fortresses. Our search reports are comprehensive legal documents that go far beyond a simple database query.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faFilter} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Forensic Filtering</h4>
                                            <p className="text-sm opacity-70">We filter out generic results to focus on high-risk conflicts across multiple classes and phonetics.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faListOl} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Registrability Score</h4>
                                            <p className="text-sm opacity-70">Every search comes with an IPR Karo score (1-10) predicting your chances of successful registration based on current law.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Conflict Mitigation</h4>
                                            <p className="text-sm opacity-70">If we find a conflict, we provide creative brand modifications that satisfy the law while keeping your marketing vision intact.</p>
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
                                            author: "Nitin Saxena",
                                            role: "Founder, Urban Bites",
                                            rating: 5,
                                            date: "2024-02-10",
                                            text: "I was about to print 10,000 packets with a name I thought was original. IPR Karo's public search report showed a phonetic conflict with a major brand that I hadn't even heard of. Saved me from a massive rebranding disaster!",
                                            avatar: "NS"
                                        },
                                        {
                                            author: "Deepika Chawla",
                                            role: "Creative Head, Bloom Designs",
                                            rating: 5,
                                            date: "2024-01-25",
                                            text: "The way they explain the 'Search Opinion' is very helpful. Most sites just give you a list of names, but IPR Karo's team told me exactly why my name was at risk of objection and how to modify it.",
                                            avatar: "DC"
                                        },
                                        {
                                            author: "Rahul Dravid",
                                            role: "Director, RD Sports Academy",
                                            rating: 5,
                                            date: "2023-11-15",
                                            text: "Fast, accurate, and very professional. The public search tool on the government site kept crashing for me, but the IPR Karo team provided a detailed forensic report within hours. Excellent service.",
                                            avatar: "RD"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing Your Brand’s Future Today</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The journey of a thousand products begins with a single search. A <strong>trademark search public</strong> is not an optional luxury; it is a foundational due diligence step for any business that aspires to create lasting value. In an era where brand identity is everything, knowing that your name is legally sound provides the peace of mind required to focus on growth, innovation, and customer satisfaction.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Don’t wait for a legal notice to realize you’ve made a mistake. Use the tools provided by the IP India registry, or better yet, partner with experts who can see the risks you might miss. At IPR Karo, we are dedicated to ensuring that your brand is not just a name on a package, but a registered asset that carries the weight of the law. Start your search today, and build something that truly belongs to you.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Is Your Brand Name Available?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Get a professional forensic trademark search and an expert Opinion of Registrability within 24 hours. Protect your brand before someone else does.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Order Search Report
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Talk to a TM Attorney
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
                                    Worried about a specific competitor? We can perform **Phonetic Forensics** on your top 5 brand choices today.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Check Availability
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Branding Tools</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/ipindia-trademark-status" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Track TM Status</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-and-copyright-difference" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">TM vs Copyright</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/in-india-the-trademark-registration-should-be-renewed-every" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Renewal Guide</span>
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
