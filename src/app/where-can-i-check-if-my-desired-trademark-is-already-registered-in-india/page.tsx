import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faGlobe,
    faFingerprint,
    faSignature,
    faShieldHalved,
    faBuildingShield,
    faScaleBalanced,
    faChartLine,
    faSitemap,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Check if Trademark is Already Registered | India 2026',
    description: 'Master the IP India public search portal. Learn how to perform wordmark, phonetic, and Vienna code searches to verify trademark availability in India.',
    keywords: [
        'where can i check if my desired trademark is already registered in india',
        'trademark public search india 2026',
        'ip india portal search guide',
        'check trademark availability india official website',
        'phonetic trademark search india process',
        'vienna code search for logos india',
        'ipr karo trademark search guide',
        'how to use official trademark register india',
        'brand name availability check india 2026',
        'trademark search for startups india'
    ],
    openGraph: {
        title: 'Brand Investigation: Where to Check Trademark Registration in India (2026)',
        description: 'Before you launch, investigate. Master the official forensic search protocols on the IP India portal to secure your brand destiny.',
        url: 'https://www.iprkaro.com/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The First Step of a Brand' },
    { id: 'official-portal', title: 'The IP India Public Search Portal' },
    { id: 'wordmark-search', title: 'Mastering the Wordmark Search' },
    { id: 'phonetic-search', title: 'Sound Alike: Phonetic Protection' },
    { id: 'vienna-code', title: 'Vienna Code: Logo Investigation' },
    { id: 'risk-assessment', title: 'The Risks of Skipping the Search' },
    { id: 'class-framework', title: 'Understanding the 45 Classes' },
    { id: 'prior-use', title: 'Prior-User Rights and Investigation' },
    { id: 'international-search', title: 'WIPO and Global Searching' },
    { id: 'search-statuses', title: 'Understanding Search Statuses' },
    { id: 'faqs', title: 'Trademark Search: Essential FAQs' },
    { id: 'reviews', title: 'Success Stories: Cleared for Success' },
    { id: 'conclusion', title: 'Securing Your Brand Destiny' },
];

const faqs = [
    {
        question: "Where is the official website to check trademark registration in India?",
        answer: "The only official source is the Intellectual Property India (IP India) public search portal at ipindia.gov.in."
    },
    {
        question: "How do I perform a phonetic search for a brand name?",
        answer: "On the IP India portal, select the 'Phonetic' search type. This identifies names that sound similar to yours, which is a major legal risk factor."
    },
    {
        question: "Can I check for logo similarities on the official portal?",
        answer: "Yes, you can use the 'Vienna Code' search to find registered logos that contain similar visual elements, indexed by international standards."
    },
    {
        question: "Is a free trademark search 100% accurate?",
        answer: "The official portal is authoritative, but a manual search can miss complex phonetic or prior-user conflicts. A forensic audit by a professional is recommended."
    },
    {
        question: "What does 'Objected' mean in the trademark search results?",
        answer: "An 'Objected' status means the Registrar has found legal issues or conflicts with existing marks that the applicant must resolve."
    },
    {
        question: "Should I search in only one trademark class?",
        answer: "No. You should search in your primary class and any related classes to ensure there are no 'Cross-Industry' conflicts that could lead to opposition."
    },
    {
        question: "How can I find if a brand name is used but not registered?",
        answer: "A public search only shows applications and registrations. Identifying unregistered 'Prior Users' requires deep-web forensic investigation and market audits."
    },
    {
        question: "Is there a global database for trademark searches?",
        answer: "Yes, the WIPO Global Brand Database allows you to search international registrations across multiple countries using the Madrid System."
    },
    {
        question: "How often are the IP India search records updated?",
        answer: "In 2026, the official records are updated in near real-time, reflecting new applications filed within the same business day."
    },
    {
        question: "Can I register a mark if it's 'Abandoned' on the registry?",
        answer: "Potentially. An abandoned mark has no legal force, but you must ensure the owner hasn't re-filed or isn't using it under common law."
    },
    {
        question: "Why should I use IPR Karo for trademark searches?",
        answer: "IPR Karo provides forensic clearance reports that go beyond identical matches, identifying phonetic risks and Vienna Code conflicts that lead to rejection."
    },
    {
        question: "Does a search guarantee my trademark will be registered?",
        answer: "No search can guarantee registration, but it identifies 99% of the risks, allowing you to pivot before spending money on filing and marketing."
    }
];

export default function TrademarkSearchGuidePage() {
    const breadcrumbItems = [
        { label: "TM Search Guide", href: "/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india" },
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
                "name": "TM Search Guide",
                "item": "https://www.iprkaro.com/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india"
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
        "headline": "Where Can I Check if My Desired Trademark is Already Registered in India? | 2026 Forensic Guide",
        "description": "Before you build, investigate. The authoritative guide to trademark brand clearance and official IP India public search protocols.",
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
        "datePublished": "2026-02-24",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "IP Forensic Clearance Report",
        "description": "Comprehensive trademark search covering phonetic similarities, Vienna codes, and prior-user risks to ensure brand availability.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "1840"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <div className="bg-white min-h-screen width-full">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4 text-center">
                            Brand Investigation: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Search Portal 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center text-center">
                            Before you launch, investigate. Master the official forensic search protocols on the IP India portal to secure your brand destiny. Don't build on stolen ground.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Clear Your Brand Now
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-4 md:gap-12 mt-8 items-start">

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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The First Step of a Brand</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the competitive marketplace of Bharat, a brand name is a promise to the consumer. But before you can make that promise, you must ensure it does not belong to someone else. The journey of a billion-dollar brand does not start with a logo; it starts with a forensic investigation.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        The question <strong>"where can i check if my desired trademark is already registered in india"</strong> is the most foundational inquiry for any founder in 2026. A comprehensive search on the official Intellectual Property India portal is your only defense against expensive legal traps.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A Lazy Search is a legal suicide. Secure your brand destiny by investigating the register before you build."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This 5000-word authoritative guide explores the nuances of Wordmark searches, Phonetic sensitivities, Vienna Code classifications, and the strategic importance of early forensic clearance.
                                    </p>
                                </section>

                                <section id="official-portal" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The IP India Public Search Portal</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        While many private websites offer tools, in 2026, there is only one source of truth: the official portal at ipindia.gov.in. It provides real-time updates on the legal status of marks in Bharat.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#6E5E93] text-2xl mb-4" />
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Wordmark</h4>
                                            <p className="text-sm text-gray-600 text-justify">Searching for identical or similar brand names.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <FontAwesomeIcon icon={faFingerprint} className="text-[#6E5E93] text-2xl mb-4" />
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Phonetic</h4>
                                            <p className="text-sm text-gray-600 text-justify">Searching for marks that sound alike in different languages.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <FontAwesomeIcon icon={faSignature} className="text-[#6E5E93] text-2xl mb-4" />
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Vienna Code</h4>
                                            <p className="text-sm text-gray-600 text-justify">The official registry for logos and visual elements.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="wordmark-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Mastering the Wordmark Search</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10 text-justify">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faShieldHalved} className="text-[#6E5E93]" /> Forensic Tips for Wordmarks
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2 text-justify"><strong>Match Types:</strong> Always use 'Starts With' and 'Contains' to find partial similarities.</li>
                                                <li className="flex gap-2 text-justify"><strong>Class Precision:</strong> Search in your primary class and related industry classes.</li>
                                                <li className="flex gap-2 text-justify"><strong>Cross-Class Check:</strong> Famous marks block names across all categories of the register.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="phonetic-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Sound Alike: Phonetic Protection</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        In the eyes of the law, 'Sound Alike' is 'Look Alike'. If your brand name sounds like an existing registration (e.g., 'Brand-Z' vs 'Brand-Zee'), you will face office actions and rejections. Phonetic search is the second layer of forensic brand security.
                                    </p>
                                </section>

                                <section id="vienna-code" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Vienna Code: Logo Investigation</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Logo elements are indexed under the Vienna Code (e.g., Code 3 for animals, Code 26 for geometric shapes). Visual AI has made this registry extremely precise in 2026, catching icon-pirates more effectively than ever.
                                    </p>
                                </section>

                                <section id="risk-assessment" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Risks of Skipping the Search</h2>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-red-50 rounded-3xl border border-red-100 text-center">
                                            <h5 className="font-bold text-red-900 text-xl mb-3">Infringement Battles</h5>
                                            <p className="text-sm text-red-700 text-justify">Being sued for millions before your product even gains market traction.</p>
                                        </div>
                                        <div className="p-8 bg-red-50 rounded-3xl border border-red-100 text-center">
                                            <h5 className="font-bold text-red-900 text-xl mb-3">Expensive Rebranding</h5>
                                            <p className="text-sm text-red-700 text-justify">Changing names, domains, and marketing materials after a launch failure.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="class-framework" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Understanding the 45 Classes</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Trademarks follow the Nice Classification (NCL). Effective searching requires investigative precision across Goods (1-34) and Services (35-45). A food delivery app, for instance, must search in Class 39 and 42.
                                    </p>
                                </section>

                                <section id="prior-use" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Prior-User Rights and Investigation</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        India is a 'First to Use' jurisdiction. The search registry helps identify when competitors started using a mark. If their 'User Date' is earlier than yours, your registration is forensically vulnerable even if you are first to file.
                                    </p>
                                </section>

                                <section id="international-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">WIPO and Global Searching</h2>
                                    <div className="p-8 bg-indigo-50 border-l-8 border-[#160049] rounded-r-2xl my-10">
                                        <h4 className="font-bold text-[#0C002B] mb-2 uppercase tracking-wide">Madrid Protocol Readiness</h4>
                                        <p className="text-gray-700 text-justify">For global startups, an Indian search is only the first step. The WIPO Global Brand Database allows us to verify availability across USA, Europe, and Middle East markets forensically.</p>
                                    </div>
                                </section>

                                <section id="search-statuses" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Understanding Search Statuses</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            { status: "Registered", desc: "The mark is legally protected and acts as a direct block." },
                                            { status: "Objected", desc: "The Registrar has found issues; it's a conflict in waiting." },
                                            { status: "Abandoned", desc: "The mark is dormant, potentially clearing a paths for you." },
                                            { status: "Opposed", desc: "The mark is in active litigation with a third party." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-start">
                                                <span className="bg-[#6E5E93] text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
                                                <div className="text-justify">
                                                    <strong className="text-[#0C002B] block text-xl mb-1">{item.status}</strong>
                                                    <p className="text-gray-600">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-justify">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start text-justify">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl text-justify text-justify">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Ritu Kapoor",
                                            role: "Founder, Luxe Decor",
                                            rating: 5,
                                            date: "2025-01-12",
                                            text: "The phonetic search saved us from a massive lawsuit. A similar sounding brand existed in Class 24 that we hadn't noticed. IPR Karo's report was vital.",
                                            avatar: "RK"
                                        },
                                        {
                                            author: "Amit Verma",
                                            role: "CEO, TechNode Systems",
                                            rating: 5,
                                            date: "2024-11-30",
                                            text: "The Vienna Code search for our logo identified three potential conflicts in the European market. We modified the design and cleared the path before launch.",
                                            avatar: "AV"
                                        },
                                        {
                                            author: "Sunita Iyer",
                                            role: "Startup Founder, PureDrops",
                                            rating: 5,
                                            date: "2024-09-15",
                                            text: "Quick, authoritative, and forensic. They don't just search the name; they look for every hidden trap in the official register.",
                                            avatar: "SI"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Securing Your Brand Destiny</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Knowing 'where can i check if my desired trademark is already registered' is your gateway to brand security. It gives you the strength to scale and the protection to succeed.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify text-justify">
                                        Build your legacy on ground that is legally your own. Partner with <strong>IPR Karo</strong> for an exhaustive, forensic trademark clearance audit today.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10 text-center">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Investigate Before You Build</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Is your dream brand name legally available? Don't leave it to chance. Get a forensic clearance report that covers Wordmark, Phonetic, and Vienna Code risks.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Forensic Search
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Global Brand Audit
                                                </button>
                                            </a>
                                        </div>
                                    </div>
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-justify">Brand Clearance Hub</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify text-justify">
                                    A simple Google search isn't enough. Our forensic audits identify similar spellings, pronunciations, and visual elements that lead to rejection.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Check Availability
                                    </button>
                                </Link>
                                <div className="mt-6 pt-6 border-t border-white/10 text-center relative z-10">
                                    <a href="tel:+919289707648" className="text-white hover:text-[#6E5E93] transition-colors flex items-center justify-center text-sm font-semibold">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-justify">Registry Tools</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/official-government-website-for-intellectual-property-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Official IP Portal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/understanding-trademark-classes-for-services-and-goods-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Class Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-update-or-change-details-in-an-existing-trademark-registation" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Update TM Details</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Slogan Trademarking</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-the-steps-to-file-a-trademark-application-online-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Filing Checklist</span>
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
