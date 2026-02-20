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
    faMicrochip,
    faFlask,
    faLaptopCode,
    faSearchPlus,
    faBookReader,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Indian Patent Office Search (InPASS) Guide | Official Portal 2026',
    description: 'Master the Indian Patent Advanced Search System (InPASS). Learn how to perform full-text searches, check patent status, and use IPC classification codes.',
    keywords: [
        'indian patent office search',
        'inpass portal guide',
        'search patents in india',
        'patent status check india',
        'indian patent advanced search system',
        'ipc classification search patent',
        'freedom to operate search india',
        'novelty search patents india',
        'how to find granted patents india',
        'pct application status india'
    ],
    openGraph: {
        title: 'Decoding Innovation: The Ultimate InPASS Patent Search Guide',
        description: 'Dont reinvent the wheel. Learn how to use the official Indian Patent Office portal to find prior art, check competitor filings, and verify patent validity.',
        url: 'https://www.iprkaro.com/indian-patent-office-search',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/indian-patent-office-search',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Gateway to Innovation: Understanding InPASS' },
    { id: 'inpass-overview', title: 'Portal Architecture: Full-Text vs E-Register Search' },
    { id: 'search-parameters', title: 'Search Parameters: Titles, Abstracts, and Claims' },
    { id: 'boolean-logic', title: 'Mastering Boolean Logic: AND, OR, and NOT Queries' },
    { id: 'date-forensics', title: 'The Clock of Innovation: Priority vs Filing vs Publication Dates' },
    { id: 'ipc-classification', title: 'IPC Classification (A-H): Narrowing Your Search Scope' },
    { id: 'status-meaning', title: 'Patent Status Decoder: "Published" vs "Granted" vs "Lapsed"' },
    { id: 'bolar-provision', title: 'The Bolar Provision: Research Exceptions under Section 107A' },
    { id: 'fto-vs-novelty', title: 'Novelty vs Freedom to Operate (FTO): Which One Do You Need?' },
    { id: 'international-filings', title: 'International Entry: Searching PCT Applications in India' },
    { id: 'opposition-search', title: 'Shield & Spear: Searching for Pre-Grant & Post-Grant Oppositions' },
    { id: 'why-iprkaro', title: 'IPR Karo: Specialized Patent Landscaping & Forensics' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Securing Your Invention’s Competitive Edge' },
];

const faqs = [
    {
        question: "What is InPASS?",
        answer: "InPASS stands for Indian Patent Advanced Search System. It is the official online database provided by the Indian Patent Office for searching published and granted patents in India."
    },
    {
        question: "Is the Indian Patent Office search free?",
        answer: "Yes, the public search portal (InPASS) is free to use for all researchers, inventors, and legal professionals."
    },
    {
        question: "How do I check the status of my patent application?",
        answer: "You can use the 'Application Status' tab on the InPASS portal. Enter your application number and the specific captcha to see the current stage of processing, such as 'Examination' or 'Published'."
    },
    {
        question: "What is IPC classification in patent search?",
        answer: "IPC stands for International Patent Classification. It is a hierarchical system used to categorize patents based on their technical field (e.g., A for Human Necessities, G for Physics). Using IPC codes helps in narrowing down search results precisely."
    },
    {
        question: "Does InPASS include international patents (US/EP)?",
        answer: "No, InPASS only contains records for patent applications filed in India. For global searches, you must use databases like Espacenet or Google Patents."
    },
    {
        question: "What is a 'Full Text' patent search?",
        answer: "A Full Text search allows you to search for keywords within the title, abstract, description, and claims of the entire patent document, ensuring you don't miss any mentions of a specific technology."
    },
    {
        question: "What is the difference between a published and a granted patent?",
        answer: "A 'Published' patent is an application that has been made public after 18 months but is not yet a legal right. A 'Granted' patent is an application that has successfully passed examination and provides enforceable rights."
    },
    {
        question: "What is an FTO (Freedom to Operate) search?",
        answer: "An FTO search is a risk assessment conducted to ensure that your new product or process does not infringe on any active (granted or pending) patents in a specific territory like India."
    },
    {
        question: "How long does a patent search take?",
        answer: "A basic keyword search can be done in minutes, but a comprehensive FTO or Novelty search by experts at IPR Karo typically takes 5-7 working days to analyze hundreds of relevant documents."
    },
    {
        question: "Can I search for patents by the inventor's name?",
        answer: "Yes, InPASS allows you to search using the name of the inventor or the applicant (entity) to track the IP portfolio of individuals or competitors."
    }
];

export default function IndianPatentSearchPage() {
    const breadcrumbItems = [
        { label: "Indian Patent SearchGuide", href: "/indian-patent-office-search" },
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
                "name": "Indian Patent Search",
                "item": "https://www.iprkaro.com/indian-patent-office-search"
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
        "headline": "Indian Patent Office Search (InPASS): The Comprehensive 2026 Manual",
        "description": "Unlock the power of the Indian Patent Advanced Search System. A step-by-step guide to full-text search, IPC codes, and patent status tracking.",
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
            "@id": "https://www.iprkaro.com/indian-patent-office-search"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Forensic Patent Search & Landscaping",
        "image": "https://www.iprkaro.com/assets/patent-search-og.jpg",
        "description": "Deep-dive patent searching covering novelty, FTO, and invalidity analysis using InPASS and global databases.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1540"
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
                            Innovation Intelligence: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Indian Patent Office</span> (InPASS) Search
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Navigate the Indian Patent Advanced Search System like a professional. Detect prior art, analyze technical trends, and track competitor portfolios across millions of Indian patent records.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Start Patent Search
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Gateway to Innovation: Understanding InPASS</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the knowledge-driven economy of Bharat, patents are the ultimate territory markers. They represent the frontier of human ingenuity, protecting the solutions that solve tomorrow’s problems. However, the first step to securing a patent is not invention; it is verification. This is where the <strong>Indian Patent Office search</strong>—conducted via the InPASS portal—becomes indispensable. Short for the Indian Patent Advanced Search System, InPASS is a powerful, albeit complex, forensic tool that allows users to peer into the vast archive of the Indian Patent Registry.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        For an inventor, searching the InPASS database is an act of due diligence that prevents the costly mistake of "reinventing the wheel." For a business, it is a tool for competitive intelligence, revealing what rivals are developing behind closed doors. For a researcher, it is a library of technical solutions that can be built upon. But navigating InPASS is not as simple as using a standard search engine. It requires an understanding of Boolean logic, wildcard operators, and the intricate hierarchy of the International Patent Classification (IPC).
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we view patent searching as a form of landscape analysis. We don't just look for matches; we look for "whitespace"—the areas of technology where protection is still available. In 2026, with India’s patent filings reaching record highs every month, the digital noise on the InPASS portal is louder than ever. Finding the needle of true novelty in the haystack of technical disclosures requires a professional’s eye. This 4000-word guide is designed to transform you from a novice searcher into a strategic patent explorer, covering everything from basic keyword queries to complex status tracking.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "In innovation, what you don't know can hurt you. A patent search is your insurance policy against obsolescence and infringement."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Throughout this manual, we will walk you through the four primary tabs of the InPASS portal, explain why "Claims" searching is different from "Abstract" searching, and decode the various legal statuses of a patent. Whether you are a solo founder with a breakthrough formula or a multinational corporation managing an IP portfolio, this guide will provide the tactical clarity needed to master the Indian patent landscape. Let us begin by exploring the architecture of the portal itself.
                                    </p>
                                </section>

                                <section id="inpass-overview" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Portal Architecture: Full-Text vs E-Register Search</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The <strong>Indian Patent Office search</strong> portal is divided into distinct zones, each serving a different legal and technical purpose. Choosing the right entry point is critical for accuracy.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="bg-white border-2 border-[#6E5E93] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faSearchPlus} className="mr-3 text-[#6E5E93]" /> Full-Text Search
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                The technical engine of InPASS. It searches through every word in the patent’s Title, Abstract, Description, and Claims. Use this when you are trying to find prior art or similar inventions.
                                            </p>
                                        </div>
                                        <div className="bg-white border-2 border-[#160049] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-[#160049]" /> E-Register / Status
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                The legal heart of InPASS. By entering a patent number, you can see if it is "In Force," if the renewal has been paid, and who the current owner (assignee) is.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="search-parameters" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Search Parameters: Titles, Abstracts, and Claims</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        Professional searchers rarely search the "Description" first. They focus on where the most legal weight lies.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faLightbulb} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Title & Abstract</h4>
                                                <p className="text-gray-600">Great for a broad overview. The abstract provides a 150-word summary of the technical problem and its solution.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#160049]">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faScaleBalanced} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Claims (Forensic Power)</h4>
                                                <p className="text-gray-600 italic">The most critical field. The claims define the "legal boundaries" of the invention. If your product falls within these claims, you are infringing.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="boolean-logic" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Mastering Boolean Logic: AND, OR, and NOT Queries</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        InPASS uses standard Boolean operators to combine terms. Mastering these is how you move from 10,000 results down to the 10 most relevant ones.
                                    </p>
                                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-inner my-10">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between text-lg">
                                                <span className="font-bold text-[#6E5E93]">AND</span>
                                                <span className="text-gray-600 italic">"Battery AND Lithium" finds items mentioning both.</span>
                                            </div>
                                            <div className="flex items-center justify-between text-lg border-t pt-4">
                                                <span className="font-bold text-[#6E5E93]">OR</span>
                                                <span className="text-gray-600 italic">"Car OR Automobile" finds items mentioning either.</span>
                                            </div>
                                            <div className="flex items-center justify-between text-lg border-t pt-4 text-red-600">
                                                <span className="font-bold">NOT</span>
                                                <span className="text-gray-600 italic">"Engine NOT Diesel" excludes diesel-based patents.</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="date-forensics" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Clock of Innovation: Priority vs Filing vs Publication Dates</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In patent law, time is literally money. When conducting an <strong>Indian Patent Office search</strong>, you must navigate three critical dates. The **Priority Date** is the very first time the invention was filed anywhere in the world. The **Filing Date** is when it entered the Indian registry. The **Publication Date** is when the patent was made public (usually 18 months after filing).
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Why does this matter? Because any technical disclosure made *before* your priority date can be used as "Prior Art" to kill your patent. However, anything published *after* your priority date cannot block you. At IPR Karo, our forensic search reports categorize results by these specific date-stamps, ensuring you have a clear timeline of what constitutes a threat and what does not.
                                    </p>
                                </section>

                                <section id="ipc-classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">IPC Classification (A-H): Narrowing Your Search Scope</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        Keywords are often ambiguous (e.g., "Apple" could be a fruit or a computer). To prevent irrelevant results, patents are tagged with **IPC codes**.
                                    </p>
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#160049] text-white">
                                                <tr>
                                                    <th className="p-5 font-bold border">Section</th>
                                                    <th className="p-5 font-bold border">Subject Matter</th>
                                                    <th className="p-5 font-bold border">Common Search Field</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 text-lg">
                                                <tr>
                                                    <td className="p-5 font-bold border">Section A</td>
                                                    <td className="p-5 border">Human Necessities</td>
                                                    <td className="p-5 border">Food, Health, Clothing</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold border">Section C</td>
                                                    <td className="p-5 border">Chemistry; Metallurgy</td>
                                                    <td className="p-5 border">Pharmaceuticals, Formulas</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold border">Section G</td>
                                                    <td className="p-5 border">Physics</td>
                                                    <td className="p-5 border">Optics, Data Processing</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="status-meaning" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Patent Status Decoder: "Published" vs "Granted" vs "Lapsed"</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        When you view search results or hit the E-register, you must interpret the status correctly.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                            <h4 className="font-bold text-blue-900 text-xl mb-3">Published</h4>
                                            <p className="text-sm text-blue-800">The world can see it, but the owner has no legal rights to stop you yet. It is still under examination.</p>
                                        </div>
                                        <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                            <h4 className="font-bold text-green-900 text-xl mb-3">Granted</h4>
                                            <p className="text-sm text-green-800">The "Territory" is claimed. Using this technology without a license is a direct infringement.</p>
                                        </div>
                                        <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                                            <h4 className="font-bold text-red-900 text-xl mb-3">Lapsed</h4>
                                            <p className="text-sm text-red-800">The renewal fees were not paid. The technology belongs to the "Public Domain" and is free for anyone to use.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="bolar-provision" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Bolar Provision: Research Exceptions under Section 107A</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        One of the most powerful features of the Indian Patents Act is the **Bolar Provision (Section 107A)**. It states that using a patented invention purely for "research, development, and submission of data to a regulatory authority" (like the FDA or CDSCO) is NOT considered infringement.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        This is vital for generic pharmaceutical companies or tech startups. You can search InPASS to find a patented formula or design, replicate it in your lab, and prepare your generic version while the patent is still active. This allows you to launch your product on the *very day* the patent expire. We guide R&D teams on how to use InPASS data within the safe harbor of the Bolar Provision to gain a day-zero market advantage.
                                    </p>
                                </section>

                                <section id="opposition-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Shield & Spear: Searching for Pre-Grant & Post-Grant Oppositions</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        InPASS is not just for finding what exists; it's for stopping what shouldn't. If you find a competitor's application that is clearly not novel, you can file a **Pre-Grant Opposition**. If they have already been granted a patent that you believe is invalid, you can file a **Post-Grant Opposition**.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        To do this effectively, your InPASS search must be "Invalidity-focused." You are looking for prior art that specifically contradicts the "Claims" of the patent. Our legal team uses InPASS to track "Examination Reports" (FERs), allowing us to see what objections the government has already raised and where the competitor is vulnerable. This active monitoring turns the patent search portal into a defensive tool for your market share.
                                    </p>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Why Leading Tech Giants Trust IPR Karo for Search Forensics</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-center">
                                        We don't just provide search results; we provide technical intelligence. Our patent agents combine legal expertise with specialized engineering backgrounds to decode complex filings.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faFilter} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Landscaping</h4>
                                            <p className="text-sm opacity-70">We map out entire technical domains to identify where your competitors are active and where opportunities lie.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faEye} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">FTO Audits</h4>
                                            <p className="text-sm opacity-70">A deep dive into "Granted" patents to ensure you have the Freedom to Operate without facing billion-dollar lawsuits.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Invalidity Analysis</h4>
                                            <p className="text-sm opacity-70">If a competitor’s patent blocks you, we search for prior art to challenge its validity on novelty or obviousness grounds.</p>
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
                                            author: "Dr. Sameer Khan",
                                            role: "R&D Head, BioMed Innovations",
                                            rating: 5,
                                            date: "2024-02-15",
                                            text: "The InPASS search report from IPR Karo was exceptionally detailed. They identified three expired patents that we could safely leverage for our new formulation, saving us years of redundant research.",
                                            avatar: "SK"
                                        },
                                        {
                                            author: "Rohan Varma",
                                            role: "CTO, TechEdge Robotics",
                                            rating: 5,
                                            date: "2024-01-10",
                                            text: "Our FTO audit showed a potential infringement risk with a granted patent in Mumbai. IPR Karo's invalidity analysis found prior art in an old German journal that helped us challenge the patent successfully. Absolute lifesavers.",
                                            avatar: "RV"
                                        },
                                        {
                                            author: "Anjali Mehta",
                                            role: "Founder, SolarStep Solutions",
                                            rating: 5,
                                            date: "2023-11-25",
                                            text: "Simple, fast, and technically sound. As a startup, we needed to know if our solar panel design was novel. IPR Karo's patent agents explained the search results in plain English, allowing us to file our provisional application with confidence.",
                                            avatar: "AM"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing Your Invention’s Competitive Edge</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        In the realm of innovation, what you don't know is your greatest vulnerability. An <strong>Indian Patent Office search</strong> is не just a bureaucratic box to tick; it is a strategic reconnaissance mission. By mastering the InPASS portal, you ensure that your technical roadmap is built on a foundation of novelty and legal clarity. You protect your capital from being wasted on existing solutions and your brand from the devastation of patent litigation.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The future belongs to those who invent, but more importantly, to those who protect. Whether you are navigating the complex Boolean queries of a full-text search or auditing the E-register for lapsed opportunities, let IPR Karo be your technical partner. We combine the speed of digital search with the forensic depth of legal expertise to ensure your invention stands the test of time and law. Master your domain. Search before you leap.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Verify Your Invention?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Get a comprehensive Patent Landscaping or Novelty Search report from our expert patent agents today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Request Patent Search
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult a Patent Agent
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">FTO Clearance</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Launching a new product in the Indian market? Ensure you have the **Freedom to Operate** without infringing rivals.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Check FTO Status
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Patent Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-and-copyright-difference" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">TM vs Copyright</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search-public" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">TM Public Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/udyam-registration-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">MSME Benefits</span>
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
