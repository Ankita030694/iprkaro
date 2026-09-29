import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faScaleBalanced,
    faTable,
    faCheckCircle,
    faExclamationTriangle,
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faCheck,
    faPhone,
    faBuildingShield,
    faGavel,
    faStamp,
    faBan,
    faChartLine,
    faCoins,
    faCalculator,
    faPercent,
    faFileInvoiceDollar,
    faHandshake,
    faLandmark
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Valuation Methods for Startups in India",
    description: validateAndNormalizeDescription(
        "Master trademark valuation for Indian startups: Relief from Royalty, IBBI registered valuer rules, Ind AS 38 capitalization, M&A due diligence & tax.",
        "app/trademark-valuation-methods-for-startups-india/page.tsx"
    ),
    keywords: [
        "trademark valuation methods for startups in india",
        "how to calculate trademark value in india",
        "relief from royalty method brand valuation",
        "registered valuer intangible asset valuation companies act 2013",
        "ind as 38 trademark capitalization",
        "brand valuation for startup fundraising india",
        "purchase price allocation ind as 103 trademark",
        "section 32 depreciation on trademark income tax india",
        "cost of acquisition trademark section 55 capital gains",
        "ibbi registered valuer brand valuation report format"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-valuation-methods-for-startups-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Valuation Methods for Startups in India",
        description: "Master trademark valuation for Indian startups: Relief from Royalty, IBBI registered valuer rules, Ind AS 38 capitalization, M&A due diligence & tax.",
        url: "https://www.iprkaro.com/trademark-valuation-methods-for-startups-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-valuation-methods-for-startups-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Valuation for Indian Startups: Methods, Balance Sheet Capitalization and M&A",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Valuation Methods for Startups in India",
        description: "Master trademark valuation for Indian startups: Relief from Royalty, IBBI registered valuer rules, Ind AS 38 capitalization, M&A due diligence & tax.",
        images: ["https://www.iprkaro.com/images/og/trademark-valuation-methods-for-startups-india.png"],
    }
};

const faqs = [
    {
        question: "Can an Indian startup capitalize its internally generated trademark on its balance sheet?",
        answer: "No. Under Indian Accounting Standard (Ind AS) 38 (Intangible Assets) Paragraph 63 and AS 26, internally generated brands, mastheads, publishing titles, customer lists, and trademarks cannot be recognized as intangible assets on the balance sheet because the expenditure cannot be distinguished from the cost of developing the business as a whole. Capitalization is only permitted when a trademark is acquired separately or as part of a business combination under Ind AS 103."
    },
    {
        question: "What is the Relief from Royalty (RfR) valuation method and why is it preferred for startups?",
        answer: "The Relief from Royalty (RfR) method is an income-based valuation technique that calculates the present economic value of a trademark by estimating the hypothetical royalty payments the startup avoids by owning the mark rather than licensing it from a third party. It is widely preferred by IBBI Registered Valuers and audit firms because benchmark royalty rates can be cross-referenced against empirical licensing transactions across comparable industries."
    },
    {
        question: "Who is legally authorized to issue a statutory trademark valuation report in India?",
        answer: "Under Section 247 of the Companies Act, 2013 and Rule 11UA of the Income Tax Rules, statutory trademark valuations for corporate restructuring, share allotments, mergers, and regulatory compliance must be conducted by an Insolvency and Bankruptcy Board of India (IBBI) Registered Valuer in the 'Securities or Financial Assets' asset class or an authorized Merchant Banker."
    },
    {
        question: "Is depreciation allowable on acquired trademarks under the Income Tax Act, 1961?",
        answer: "Yes. Under Section 32(1)(ii) of the Income Tax Act, 1961, acquired trademarks, franchises, patents, and intellectual property rights qualify as intangible assets eligible for statutory tax depreciation at the rate of 25% on a Written Down Value (WDV) basis. However, self-generated trademarks do not have an acquisition cost and therefore cannot claim depreciation."
    },
    {
        question: "How are capital gains calculated when a founder sells or assigns a self-generated trademark?",
        answer: "Under Section 55(2)(a) of the Income Tax Act, 1961, the cost of acquisition for self-generated trademarks, brand names, and goodwill is statutorily deemed to be 'NIL'. Consequently, the entire gross sale consideration received upon trademark assignment or transfer is taxable as capital gains (short-term or long-term depending on the holding period) without any deduction for indexation or historical brand-building costs."
    },
    {
        question: "How does trademark valuation impact startup fundraising and venture debt negotiations?",
        answer: "A certified trademark valuation establishes an empirical dollar value for brand equity, proprietary software names, and customer loyalty. In equity fundraising (Series A/B/C), it justifies premium share valuations under discounted cash flow models. In venture debt, registered trademarks and IP portfolios can serve as secondary intangible collateral to secure favorable credit terms and loan covenants."
    },
    {
        question: "What is Purchase Price Allocation (PPA) under Ind AS 103 for trademark acquisitions?",
        answer: "In M&A transactions and corporate takeovers, Purchase Price Allocation (PPA) under Ind AS 103 requires the acquirer to identify and allocate the total acquisition cost to all identifiable tangible and intangible assets at fair market value. Identifiable registered trademarks meeting the contractual-legal or separability criteria are recognized on the post-merger balance sheet at fair value, with the residual amount booked as goodwill."
    },
    {
        question: "What key documents are required by a Registered Valuer to conduct a trademark valuation?",
        answer: "A Registered Valuer requires: (1) Certified copy of Trademark Registration Certificate (Form TM-RG), (2) 3 to 5 years historical audited financials and 5-year projected profit & loss statements, (3) Historical marketing, advertising, and PR expenditure records, (4) Commercial licensing, franchising, or royalty agreements, (5) Market share analysis and competitor benchmarking reports, and (6) Any existing IP litigation or opposition status summaries."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Valuation Summary" },
    { id: "valuation-methodologies", title: "3 Core Valuation Methods" },
    { id: "relief-from-royalty", title: "Relief from Royalty (RfR) Deep Dive" },
    { id: "balance-sheet-capitalization", title: "Ind AS 38 Capitalization Rules" },
    { id: "registered-valuer-mandate", title: "Section 247 Registered Valuer" },
    { id: "startup-ma-due-diligence", title: "Trademark Valuation in M&A" },
    { id: "step-by-step-workflow", title: "7-Step Brand Valuation Workflow" },
    { id: "methods-comparison-matrix", title: "Valuation Methods Comparison" },
    { id: "tax-and-depreciation", title: "Taxation: Section 32 & 55 Rules" },
    { id: "valuation-readiness-checklist", title: "Valuation Audit Checklist" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic IP Advisory & Valuations" },
];

export default function TrademarkValuationStartupsPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Trademark Valuation for Indian Startups: Methods, Balance Sheet Capitalization & M&A",
        "description": "Master trademark valuation for Indian startups: Relief from Royalty, IBBI registered valuer rules, Ind AS 38 capitalization, M&A due diligence & tax.",
        "image": "https://www.iprkaro.com/images/og/trademark-valuation-methods-for-startups-india.png",
        "datePublished": "2026-09-28T09:30:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": {
            "@type": "Person",
            "name": "Rahul Roy",
            "url": "https://www.iprkaro.com/about-us",
            "image": "https://www.iprkaro.com/images/author/rahul-roy.jpg"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-valuation-methods-for-startups-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Valuation Methods for Startups in India",
        "url": "https://www.iprkaro.com/trademark-valuation-methods-for-startups-india",
        "description": "Master trademark valuation for Indian startups: Relief from Royalty, IBBI registered valuer rules, Ind AS 38 capitalization, M&A due diligence & tax.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-valuation-methods-for-startups-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-valuation-methods-for-startups-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Valuation for Startups", "item": "https://www.iprkaro.com/trademark-valuation-methods-for-startups-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7-Step Protocol for Startup Trademark Valuation & Balance Sheet Recognition",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Perform IP Title Clearance & Verify Registered Trademark Ownership" },
            { "@type": "ListItem", "position": 2, "name": "Compile Financial Dossier: Historical Revenue, Projections & Marketing Spend" },
            { "@type": "ListItem", "position": 3, "name": "Determine Industry Benchmark Royalty Rates & Premium Pricing Drivers" },
            { "@type": "ListItem", "position": 4, "name": "Calculate Net Present Value (NPV) using Relief from Royalty & DCF Models" },
            { "@type": "ListItem", "position": 5, "name": "Engage IBBI Registered Valuer for Section 247 Statutory Valuation Report" },
            { "@type": "ListItem", "position": 6, "name": "Execute Purchase Price Allocation (PPA) & Balance Sheet Entry under Ind AS 103/38" },
            { "@type": "ListItem", "position": 7, "name": "Establish Annual Impairment Review & Section 32 Tax Depreciation Schedule" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-purple-50 border border-purple-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faChartLine} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Corporate Finance &amp; IP Valuation</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Valuations Methods for <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Startups in India</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">For high-growth Indian startups, D2C brands, and SaaS enterprises, proprietary trademarks and brand reputation constitute up to 80% of total enterprise value. Mastering trademark valuation methodologies—including the<strong>Relief from Royalty (RfR)</strong>method,<strong>Ind AS 38</strong>balance sheet capitalization rules,<strong>IBBI Registered Valuer</strong>mandates under Section 247 of the Companies Act, and<strong>Section 32/55 Income Tax</strong>implications—is vital for successful venture fundraising, M&amp;A exits, and balance sheet structuring.</p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Trademark Research Specialist</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 28-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified Valuation Practice</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Commission Brand Valuation <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Talk to Valuation Expert: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-valuation-methods-for-startups-india.png"
                                    alt="Trademark Valuation for Indian Startups: Methods, Balance Sheet Capitalization and M&A"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Trademark Valuation for Startups", href: "/trademark-valuation-methods-for-startups-india" }
                    ]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        <main className="min-w-0">
                            {/* MOBILE TABLE OF CONTENTS */}
                            <div className="lg:hidden mb-6 not-prose">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <div>
                                                <span className="text-sm font-bold text-gray-900 block">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Topics)</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:hidden">
                                                Tap to Expand
                                            </span>
                                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full hidden group-open:inline-block">
                                                Close
                                            </span>
                                            <svg className="w-4 h-4 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div></summary><div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70"><nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{tocSections.map((section, idx) => (<a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                ><span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span><span className="truncate">{section.title}</span></a>))}</nav></div></details></div><div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content"><article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal"><div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose"><img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" /><div><p className="text-sm font-bold text-gray-900 m-0">Written by<Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                                    <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                                </div>
                                                </div>

                                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                                    <section id="overview" className="scroll-mt-32">
                                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faCalculator} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                                            Overview &amp; Quick Valuation Summary
                                                        </h2>

                                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                                            <p className="font-semibold text-gray-900 m-0">Trademark valuation for Indian startups is the quantitative financial assessment of a brand&apos;s economic worth, recognized under International Valuation Standards (IVS 210) and ICAI Valuation Standards. The most widely accepted method is the Income Approach via the Relief from Royalty (RfR) method, which discounts hypothetical future royalty savings to Present Value. Under Ind AS 38, self-generated trademarks cannot be capitalized on balance sheets, but acquired trademarks are recognized at fair value under Ind AS 103 (Purchase Price Allocation). Statutory valuation reports must be issued by an IBBI Registered Valuer under Section 247 of the Companies Act, 2013.</p>
                                                        </div>

                                                        <p className="mb-6">In India&apos;s burgeoning innovation economy, the primary drivers of enterprise value have shifted decisively from physical plants and machinery to intangible assets—principally registered trademarks, brand goodwill, proprietary algorithms, and customer stickiness. When a venture-backed startup prepares for a Series A/B funding round, corporate restructuring, joint venture, or merger &amp. Acquisition (M&amp;A) transaction, quantifying the standalone financial value of its trademark portfolio becomes indispensable.</p>
                                                        <p className="mb-6">However, valuing a brand is fundamentally different from auditing physical inventory. It requires a rigorous cross-disciplinary synthesis of corporate finance, intellectual property jurisprudence under the<strong>Trade Marks Act, 1999</strong>, accounting mandates under<strong>Ind AS 38 and Ind AS 103</strong>, and statutory tax rules under the<strong>Income Tax Act, 1961</strong>.</p>
                                                        <p className="mb-6">To understand how trademark valuation impacts licensing structures and tax liability, explore our comprehensive analyses on<Link href="/gst-tds-and-tax-rules-on-trademark-royalty-sale-india" className="text-[rgb(110,94,147)] hover:underline font-medium">GST and TDS on trademark royalties</Link>and<Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark assignment vs licensing in India</Link>.</p>
                                                    </section>

                                                    {/* SECTION 2: 3 CORE VALUATION METHODS */}
                                                    <section id="valuation-methodologies" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            The Three Core Valuation Methodologies
                                                        </h3>
                                                        <p className="mb-6">Under both Indian and global valuation frameworks (such as IVS 210 and ISO 10668 for monetary brand valuation), three recognized valuation approaches exist:</p>

                                                        <div className="space-y-6">
                                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                                <h4 className="text-lg font-bold text-gray-900 mb-1">1. The Income Approach (Primary &amp; Most Accurate)</h4>
                                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Income Approach measures the future economic earnings directly attributable to the trademark over its remaining economic life and discounts those cash flows to Net Present Value (NPV). Sub-methods include: (a)<strong>Relief from Royalty (RfR)</strong>, (b)<strong>Multi-Period Excess Earnings Method (MPEEM)</strong>, and (c)<strong>Incremental Cash Flow / Price Premium Method</strong>.</p>
                                                            </div>

                                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                                <h4 className="text-lg font-bold text-gray-900 mb-1">2. The Market Approach (Comparable Transactions)</h4>
                                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Market Approach determines value by analyzing observable market transactions involving the sale, assignment, or licensing of comparable brands within the same industry sector. Key metrics include Enterprise Value to Revenue multiples (EV/Revenue) and Brand Value to EBITDA ratios. However, because proprietary brands are inherently unique, direct comparables can be challenging to locate in early-stage markets.</p>
                                                            </div>

                                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                                <h4 className="text-lg font-bold text-gray-900 mb-1">3. The Cost Approach (Historical vs Replacement)</h4>
                                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Cost Approach calculates the total financial expenditure necessary to recreate or replace an identical brand of equivalent utility and recognition. It encompasses: (a)<strong>Historical Cost</strong>(accumulated R&amp;D, trademark registration fees, marketing spend), and (b)<strong>Replacement Cost</strong>(current advertising costs to achieve equal brand awareness). This approach is primarily used as a baseline floor value for early-stage pre-revenue startups.</p>
                                                            </div>
                                                        </div>
                                                    </section>

                                                    {/* SECTION 3: RELIEF FROM ROYALTY DEEP DIVE */}
                                                    <section id="relief-from-royalty" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faPercent} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Income Approach &amp; Relief from Royalty
                                                        </h3>
                                                        <p className="mb-6">The<strong>Relief from Royalty (RfR)</strong>method is universally recognized as the gold standard for trademark valuation by institutional investors, big-four audit firms, and Registered Valuers.</p>
                                                        <p className="mb-6"><strong>Core Premise:</strong>Owning a registered trademark relieves the business from having to pay an ongoing royalty fee to an independent third-party IP licensor. Therefore, the value of the trademark equals the present value of the stream of post-tax royalty payments saved over the asset&apos;s useful economic life.</p>

                                                        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200 my-6 not-prose">
                                                            <h4 className="text-base font-bold text-[#0C002B] mb-3 flex items-center">
                                                                <FontAwesomeIcon icon={faCalculator} className="w-4 h-4 mr-2 text-[#6E5E93]" />
                                                                The Relief from Royalty Mathematical Formula
                                                            </h4>
                                                            <div className="bg-white p-4 rounded-xl border border-purple-100 font-mono text-xs sm:text-sm text-gray-800 leading-relaxed mb-4 overflow-x-auto">
                                                                <strong>Trademark Value (NPV) = &sum; [ (Revenue<sub>t</sub> &times; Royalty Rate &times; (1 - Tax Rate)) / (1 + WACC)<sup>t</sup> ] + Tax Amortization Benefit (TAB)</strong>
                                                            </div>
                                                            <ul className="text-xs sm:text-sm text-gray-700 space-y-2 m-0">
                                                                <li><strong>Revenue<sub>t</sub>:</strong>Projected annual revenue forecast for years 1 to n.</li>
                                                                <li><strong>Royalty Rate:</strong>Arm&apos;s length benchmark percentage (typically 1.5% to 6% in India depending on sector).</li>
                                                                <li><strong>Tax Rate:</strong>Applicable corporate income tax rate (e.g., 22% or 25% + surcharge/cess).</li>
                                                                <li><strong>WACC:</strong>Weighted Average Cost of Capital (discount rate adjusted for intangible asset risk premium).</li>
                                                                <li><strong>TAB:</strong>Present value of future tax shield from Section 32 statutory depreciation deductions.</li>
                                                            </ul>
                                                        </div>
                                                    </section>

                                                    {/* SECTION 4: BALANCE SHEET CAPITALIZATION (IND AS 38) */}
                                                    <section id="balance-sheet-capitalization" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Balance Sheet Capitalization: Ind AS 38
                                                        </h3>
                                                        <p className="mb-6">Founders frequently ask:<em>&ldquo;Can we show our ₹50 Crore brand valuation on our audited balance sheet to increase net worth?&rdquo;</em>The answer under Indian accounting frameworks is governed strictly by<strong>Ind AS 38 (Intangible Assets)</strong>and<strong>AS 26</strong>:</p>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                                            <div className="bg-red-50/60 p-6 rounded-2xl border border-red-200">
                                                                <h4 className="text-base font-bold text-red-950 mb-2 flex items-center">
                                                                    <FontAwesomeIcon icon={faBan} className="w-4 h-4 mr-2 text-red-600" />
                                                                    Self-Generated Trademarks (Ind AS 38.63)
                                                                </h4>
                                                                <p className="text-xs text-gray-700 leading-relaxed mb-3"><strong>Prohibited from Balance Sheet Capitalization.</strong>Expenditure incurred on internally generating brands, mastheads, publishing titles, and customer lists cannot be distinguished from the ongoing operating cost of developing the business as a whole. All brand-building expenses (advertising, PR, design) must be expensed in the Profit &amp; Loss statement.</p>
                                                                <div className="bg-red-100/70 p-2.5 rounded-lg text-xs font-bold text-red-800">
                                                                    Accounting Treatment: 100% P&amp;L Expense • ₹0 Asset Entry
                                                                </div>
                                                            </div>

                                                            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
                                                                <h4 className="text-base font-bold text-emerald-950 mb-2 flex items-center">
                                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-emerald-600" />
                                                                    Acquired Trademarks (Ind AS 103 / 38)
                                                                </h4>
                                                                <p className="text-xs text-gray-700 leading-relaxed mb-3"><strong>Permitted at Fair Market Value.</strong>When a company acquires a trademark separately or through a corporate takeover/amalgamation under Ind AS 103, the identifiable trademark is capitalized on the balance sheet at fair value determined via an independent Purchase Price Allocation (PPA) study.</p>
                                                                <div className="bg-emerald-100/70 p-2.5 rounded-lg text-xs font-bold text-emerald-800">
                                                                    Accounting Treatment: Capitalized as Intangible Asset
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200 mb-8 not-prose">
                                                            <h4 className="text-base font-bold text-amber-950 mb-2 flex items-center">
                                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 mr-2 text-amber-800" />
                                                                Amortization vs Indefinite Useful Life (Ind AS 36 Impairment)
                                                            </h4>
                                                            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed m-0">Once an acquired trademark is capitalized, the company must assess whether its useful life is<strong>Finite</strong>(amortized over 10 to 20 years on a straight-line basis) or<strong>Indefinite</strong>(not amortized, but subjected to mandatory annual impairment testing under<strong>Ind AS 36</strong>). If brand revenues decline or consumer sentiment deteriorates, an impairment loss must be written down in the P&amp;L immediately.</p>
                                                        </div>
                                                    </section>

                                                    {/* SECTION 5: REGISTERED VALUER MANDATE (SECTION 247) */}
                                                    <section id="registered-valuer-mandate" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Registered Valuer Mandate: Section 247
                                                        </h3>
                                                        <p className="mb-6">In India, brand valuation reports are not merely theoretical pitch-deck slides; they are statutory legal documents governed by strict regulatory oversight:</p>

                                                        <div className="space-y-4 my-6 not-prose">
                                                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                                <h4 className="text-sm font-bold text-gray-900 mb-1">Mandatory IBBI Registration</h4>
                                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Under<strong>Section 247 of the Companies Act, 2013</strong>, any valuation of stocks, shares, debentures, securities, or intangible assets required under corporate law must be executed by a Registered Valuer registered with the Insolvency and Bankruptcy Board of India (IBBI).</p>
                                                            </div>

                                                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                                <h4 className="text-sm font-bold text-gray-900 mb-1">Income Tax Rule 11UA Compliance</h4>
                                                                <p className="text-xs text-gray-600 leading-relaxed m-0">When raising equity funds from domestic or foreign investors at a premium (Section 56(2)(viib) angel tax provisions), fair market value justification requires a valuation report signed by a SEBI-registered Merchant Banker or an IBBI Registered Valuer.</p>
                                                            </div>

                                                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                                <h4 className="text-sm font-bold text-gray-900 mb-1">Foreign Exchange Management Act (FEMA) Guidelines</h4>
                                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Cross-border IP transfers, overseas technology licensing, and foreign direct investment (FDI) into Indian brand holding entities must satisfy RBI pricing guidelines and arm&apos;s length transfer pricing benchmarks under Section 92C of the Income Tax Act.</p>
                                                            </div>
                                                        </div>
                                                    </section>

                                                    {/* SECTION 6: STARTUP M&A DUE DILIGENCE */}
                                                    <section id="startup-ma-due-diligence" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Trademark Valuation in Startup M&amp;A
                                                        </h3>
                                                        <p className="mb-6">During mergers, corporate acquisitions, and strategic buyouts, intellectual property due diligence forms the bedrock of deal pricing:</p>

                                                        <ul className="list-disc pl-6 space-y-3 mb-6">
                                                            <li><strong>Chain of Title Verification:</strong>Ensuring the startup holds unencumbered, registered trademark certificates (Form TM-RG) from IP India across all operational classes without adverse opposition or rectification proceedings.</li>
                                                            <li><strong>Separation of Founder IP vs Company IP:</strong>Verifying that trademarks were officially assigned by the original founder to the Private Limited entity via registered Assignment Deeds (Form TM-P) with valid stamp duty. Learn more about<Link href="/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark ownership structures in India</Link>.</li>
                                                            <li><strong>Brand Carve-Outs &amp; Transitional Licensing:</strong>Structuring multi-year transitional brand license agreements (TMA) when an acquirer purchases a specific business division while the parent company retains other brand extensions.</li>
                                                        </ul>
                                                    </section>

                                                    {/* SECTION 7: STEP BY STEP WORKFLOW */}
                                                    <section id="step-by-step-workflow" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            7-Step Brand Valuation Workflow
                                                        </h3>
                                                        <p className="mb-6">Commissioning a defensible brand valuation report involves a structured 7-step quantitative and legal procedure:</p>

                                                        <div className="space-y-6 my-8 not-prose">
                                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</span>
                                                                <div>
                                                                    <h4 className="text-base font-bold text-gray-900 mb-1">IP Legal Audit &amp; Registry Verification</h4>
                                                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Validate active status, renewal dates, class specifications, and freedom-to-operate status across Indian Trade Marks Registry portals.</p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-start bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100">
                                                                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</span>
                                                                <div>
                                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Financial &amp; Revenue Projection Modeling</h4>
                                                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Collate 3-5 years historical P&amp;L statements and build 5-year discrete cash flow forecasts broken down by brand-specific product lines.</p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</span>
                                                                <div>
                                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Royalty Rate Benchmarking &amp; Brand Driver Analysis</h4>
                                                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Conduct empirical benchmarking using global royalty databases (ktMINE, RoyaltyStat) to determine market royalty rates (e.g., 2.5% to 5.0%).</p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-start bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100">
                                                                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</span>
                                                                <div>
                                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Discount Rate (WACC) &amp; Risk Premium Calculation</h4>
                                                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Calculate Weighted Average Cost of Capital adding a specific intangible asset risk premium (typically WACC + 2% to 5%) to discount cash flows.</p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</span>
                                                                <div>
                                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Tax Amortization Benefit (TAB) Modeling</h4>
                                                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Incorporate present value of tax shields generated under Section 32(1)(ii) depreciation allowances into the net enterprise value.</p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-start bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100">
                                                                <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">6</span>
                                                                <div>
                                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Issuance of Statutory Valuation Certificate</h4>
                                                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">IBBI Registered Valuer issues the formal valuation certificate under Section 247 for regulatory filing, board approvals, and audit compliance.</p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">7</span>
                                                                <div>
                                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Annual Ind AS 36 Impairment Monitoring</h4>
                                                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Establish annual intangible asset review protocols to ensure balance sheet book values remain aligned with recoverable market amounts.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>

                                                    {/* SECTION 8: METHODS COMPARISON MATRIX */}
                                                    <section id="methods-comparison-matrix" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Valuation Approaches Comparison Matrix
                                                        </h3>
                                                        <p className="mb-6">Compare the primary valuation approaches, ideal use cases, data requirements, and audit defensibility:</p>

                                                        <div className="overflow-x-auto my-8 not-prose">
                                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                                <thead>
                                                                    <tr className="bg-gray-100/80 text-gray-900 text-xs sm:text-sm font-bold">
                                                                        <th className="p-3.5 border border-gray-200">Approach</th>
                                                                        <th className="p-3.5 border border-gray-200">Primary Methodology</th>
                                                                        <th className="p-3.5 border border-gray-200">Ideal Startup Stage</th>
                                                                        <th className="p-3.5 border border-gray-200">Audit Acceptance</th>
                                                                        <th className="p-3.5 border border-gray-200">Key Input Variable</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-200">
                                                                    <tr className="hover:bg-purple-50/30">
                                                                        <td className="p-3.5 font-bold text-gray-900 border border-gray-200">Income Approach</td>
                                                                        <td className="p-3.5 border border-gray-200">Relief from Royalty (RfR) / DCF</td>
                                                                        <td className="p-3.5 border border-gray-200">Revenue Generating (Series A+)</td>
                                                                        <td className="p-3.5 text-emerald-600 font-semibold border border-gray-200">Highest (Universal Standard)</td>
                                                                        <td className="p-3.5 border border-gray-200">Royalty Rate &amp; Revenue Projections</td>
                                                                    </tr>
                                                                    <tr className="hover:bg-purple-50/30">
                                                                        <td className="p-3.5 font-bold text-gray-900 border border-gray-200">Income Approach</td>
                                                                        <td className="p-3.5 border border-gray-200">Multi-Period Excess Earnings (MPEEM)</td>
                                                                        <td className="p-3.5 border border-gray-200">Mature Brands &amp; M&amp;A Takeovers</td>
                                                                        <td className="p-3.5 text-emerald-600 font-semibold border border-gray-200">Very High (Ind AS 103 PPA)</td>
                                                                        <td className="p-3.5 border border-gray-200">Contributory Asset Charges (CAC)</td>
                                                                    </tr>
                                                                    <tr className="hover:bg-purple-50/30">
                                                                        <td className="p-3.5 font-bold text-gray-900 border border-gray-200">Market Approach</td>
                                                                        <td className="p-3.5 border border-gray-200">Comparable Transactions Multiple</td>
                                                                        <td className="p-3.5 border border-gray-200">Strategic M&amp;A Buyouts</td>
                                                                        <td className="p-3.5 text-amber-600 font-semibold border border-gray-200">Moderate (Data Availability Limit)</td>
                                                                        <td className="p-3.5 border border-gray-200">EV/Revenue &amp; Brand Deal Multiples</td>
                                                                    </tr>
                                                                    <tr className="hover:bg-purple-50/30">
                                                                        <td className="p-3.5 font-bold text-gray-900 border border-gray-200">Cost Approach</td>
                                                                        <td className="p-3.5 border border-gray-200">Historical / Replacement Cost</td>
                                                                        <td className="p-3.5 border border-gray-200">Pre-Revenue / Seed Stage</td>
                                                                        <td className="p-3.5 text-amber-600 font-semibold border border-gray-200">Low to Moderate (Floor Value)</td>
                                                                        <td className="p-3.5 border border-gray-200">Historical Marketing &amp; IP Costs</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </section>

                                                    {/* SECTION 9: TAXATION & DEPRECIATION */}
                                                    <section id="tax-and-depreciation" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Tax &amp; Depreciation: Section 32 &amp; 55
                                                        </h3>
                                                        <p className="mb-6">Trademark valuation carries profound direct and indirect tax consequences in India:</p>

                                                        <div className="space-y-4 my-6 not-prose">
                                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                                <h4 className="text-sm font-bold text-gray-900 mb-1">Section 32(1)(ii) — 25% Tax Depreciation</h4>
                                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Acquired trademarks qualify for 25% annual depreciation on Written Down Value (WDV). If the trademark is acquired and put to use for less than 180 days in the financial year, 50% of allowable depreciation (12.5%) is claimed in Year 1.</p>
                                                            </div>

                                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                                <h4 className="text-sm font-bold text-gray-900 mb-1">Section 55(2)(a) — Deemed Nil Cost on Self-Generated Brands</h4>
                                                                <p className="text-xs text-gray-700 leading-relaxed m-0">When selling an internally developed trademark, the cost of acquisition is legally deemed to be<strong>NIL</strong>. The full transfer consideration is taxable as capital gains without standard cost indexation benefits.</p>
                                                            </div>

                                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                                <h4 className="text-sm font-bold text-gray-900 mb-1">GST &amp; TDS Withholding Mandates</h4>
                                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Trademark licensing and assignment attract<strong>18% GST</strong>under SAC Code 997336. Domestic royalty payments require<strong>2% TDS withholding</strong>under Section 194J(1)(ba) for technical/royalty services.</p>
                                                            </div>
                                                        </div>
                                                    </section>

                                                    {/* SECTION 10: VALUATION READINESS CHECKLIST */}
                                                    <section id="valuation-readiness-checklist" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Valuation Readiness Audit Checklist
                                                        </h3>
                                                        <p className="mb-6">Before commissioning a registered brand valuation report for investors or statutory audits, ensure your corporate documentation is fully organized:</p>

                                                        <div className="space-y-4 my-6 not-prose">
                                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                                <p className="text-xs sm:text-sm text-gray-700 m-0"><strong>Unbroken Registered Title:</strong>Possess official Trademark Registration Certificates (Form TM-RG) in the company&apos;s corporate name across core commercial classes.</p>
                                                            </div>
                                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                                <p className="text-xs sm:text-sm text-gray-700 m-0"><strong>Audited Financial Statements:</strong>Compile 3 years of audited balance sheets, P&amp;L accounts, and itemized marketing/PR expenditure ledgers.</p>
                                                            </div>
                                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                                <p className="text-xs sm:text-sm text-gray-700 m-0"><strong>Five-Year Financial Forecasts:</strong>Prepare defensible, management-approved 5-year discrete revenue projections supported by market size and customer acquisition unit economics.</p>
                                                            </div>
                                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                                <p className="text-xs sm:text-sm text-gray-700 m-0"><strong>Commercial Licensing Agreements:</strong>Collate all active franchise, distribution, or royalty agreements documenting existing brand monetization.</p>
                                                            </div>
                                                        </div>
                                                    </section>

                                                    {/* SECTION 11: FAQS */}
                                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Frequently Asked Questions
                                                        </h3>
                                                        <div className="space-y-4 not-prose">
                                                            {faqs.map((faq, index) => (
                                                                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                                    <h4 className="text-base font-bold text-gray-900 mb-2">{faq.question}</h4>
                                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">{faq.answer}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </section>

                                                    {/* SECTION 12: FINAL TAKEAWAY & CTA */}
                                                    <section id="final-takeaway" className="scroll-mt-32 pt-12">
                                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                                            <FontAwesomeIcon icon={faCoins} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                                            Strategic IP Advisory &amp; Valuations
                                                        </h3>
                                                        <p className="mb-6">An authoritative, mathematically defensible trademark valuation is one of the most powerful financial instruments a startup founder can possess. Whether you are pitching venture capital funds, preparing for an M&amp;A acquisition, structuring cross-border brand licensing, or fulfilling statutory Ind AS 103 purchase price allocations, partnering with accredited IBBI Registered Valuers and senior IP litigators ensures full audit defensibility and unlocks maximum brand value.</p>

                                                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C002B] via-[#1A0B3B] to-[#2D1254] p-8 sm:p-12 text-white shadow-2xl my-10 not-prose">
                                                            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-[#7664A0] blur-3xl opacity-30"></div>
                                                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                                                <h4 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">Commission an IBBI Certified Brand Valuation Report</h4>
                                                                <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">Get certified trademark valuation reports compliant with Section 247 Companies Act, Ind AS 38/103, and Rule 11UA for fundraising, M&amp;A due diligence, and balance sheet capitalization.</p>
                                                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                                                    <Link
                                                                        href="/contact-us"
                                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                                    >
                                                                        <span>Consult Valuation Specialist</span>
                                                                    </Link>

                                                                    <a
                                                                        href="tel:+919289707648"
                                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                                    >
                                                                        <span>Call: +91-9289707648</span>
                                                                    </a>
                                                                </div>

                                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">IBBI Registered Valuers • Relief from Royalty Experts • Ind AS 103 PPA Reports • Startup Advisory</p>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-4 sticky top-24">
                            {/* About Author */}
                            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-16 h-16 rounded-full mb-2.5 shadow-md object-cover border-2 border-[#6E5E93]/20" />
                                <h4 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h4>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in intangible asset valuation, Relief from Royalty modeling, Ind AS 38 balance sheet capitalization, and IP due diligence in startup M&amp;A transactions.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Value Your Brand Equity</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Preparing for fundraising or M&amp;A due diligence? Secure an IBBI certified trademark valuation report.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Get Valuation Quote
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/gst-tds-and-tax-rules-on-trademark-royalty-sale-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileInvoiceDollar} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Tax on TM Royalties</span></Link></li>
                                    <li><Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandshake} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Assignment vs License</span></Link></li>
                                    <li><Link href="/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faLandmark} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Who Can Apply For TM</span></Link></li>
                                    <li><Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faPercent} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup TM Concession</span></Link></li>
                                    <li><Link href="/difference-between-trade-name-and-trademark-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trade Name vs TM</span></Link></li>
                                    <li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Register TM Startup</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
