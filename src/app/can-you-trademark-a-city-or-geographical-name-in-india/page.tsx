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
    faBoxOpen,
    faLandmark,
    faMapLocationDot,
    faCompassDrafting,
    faFileLines,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Can You Trademark a City or Geographical Name in India?",
    description: validateAndNormalizeDescription(
        "Learn if you can trademark a city, state, or geographical name in India under Section 9(1)(b). Understand secondary meaning, GI Act, and case laws.",
        "app/can-you-trademark-a-city-or-geographical-name-in-india/page.tsx"
    ),
    keywords: [
        "can you trademark a city name in india",
        "section 9 1 b geographical name trademark objection",
        "trademark geographical name secondary meaning india",
        "geographical indication vs trademark difference india",
        "can i register brand named after city in india",
        "trademark objection section 9 1 b reply format",
        "imperial tobacco simla trademark case",
        "arbitrary geographical mark registration india",
        "trademark disclaimer geographical name india",
        "acquired distinctiveness geographical trademark"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/can-you-trademark-a-city-or-geographical-name-in-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Can You Trademark a City or Geographical Name in India? (Section 9(1)(b) Rules)",
        description: "Learn if you can trademark a city, state, or geographical name in India under Section 9(1)(b). Understand secondary meaning, GI Act, and case laws.",
        url: "https://www.iprkaro.com/can-you-trademark-a-city-or-geographical-name-in-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/can-you-trademark-a-city-or-geographical-name-in-india.png",
                width: 1200,
                height: 630,
                alt: "Can You Trademark a City, State, or Geographical Name in India Section 9(1)(b) Rules",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Can You Trademark a City or Geographical Name in India? (Section 9(1)(b) Rules)",
        description: "Learn if you can trademark a city, state, or geographical name in India under Section 9(1)(b). Understand secondary meaning, GI Act, and case laws.",
        images: ["https://www.iprkaro.com/images/og/can-you-trademark-a-city-or-geographical-name-in-india.png"],
    }
};

const faqs = [
    {
        question: "Can I register a city or state name as a trademark in India?",
        answer: "As a general rule under Section 9(1)(b) of the Trade Marks Act, 1999, bare geographical names (such as Mumbai, Kashmir, or Gujarat) cannot be registered if they serve to designate the geographical origin of the goods or services. However, registration is permissible if: (1) the geographical name is used arbitrarily for unrelated goods with no geographical association (e.g., 'Amazon' for e-commerce or 'Montblanc' for pens), (2) the brand has acquired extensive 'secondary meaning' through continuous long-standing commercial use under the Section 9 proviso, or (3) it is filed as a stylized composite device mark with a disclaimer on the place name."
    },
    {
        question: "What is the absolute ground of refusal under Section 9(1)(b)?",
        answer: "Section 9(1)(b) prohibits registration of trade marks that consist exclusively of marks or indications which may serve in trade to designate the kind, quality, quantity, intended purpose, values, geographical origin, or the time of production of the goods or rendering of the service. This ensures geographical names remain in the public domain so local enterprises can honestly describe the origin of their products."
    },
    {
        question: "How do you prove 'acquired distinctiveness' for a geographical mark?",
        answer: "Under the Proviso to Section 9(1), an applicant must submit a User Affidavit under Rule 25 supported by documentary evidence: (1) Chartered Accountant certified annual sales turnover certificates spanning several years, (2) pan-India advertising and marketing invoices, (3) continuous tax invoices showing sales across multiple states, (4) sample packaging, promotional materials, and media coverage, and (5) consumer association surveys proving the public associates the name exclusively with the applicant rather than the physical location."
    },
    {
        question: "What is the difference between a Trademark and a Geographical Indication (GI)?",
        answer: "A Trademark is a private proprietary right owned by a single individual, company, or entity to distinguish its commercial goods/services from competitors. A Geographical Indication (GI) under the GI Act, 1999 is a collective public right granted to an entire community of producers in a specific region where the product's quality, reputation, or characteristics are strictly attributable to its geographical origin (e.g., Darjeeling Tea, Kanchipuram Silk, Kolhapuri Chappal). A GI can never be monopolized as an individual trademark."
    },
    {
        question: "What happened in the landmark Simla Cigarettes case (Imperial Tobacco)?",
        answer: "In Imperial Tobacco Co. of India Ltd. v. Registrar of Trade Marks (AIR 1977 Cal 413), the Calcutta High Court refused trademark registration for 'Simla' regarding cigarettes. The Court held that Simla was a prominent, well-known hill station and capital city. Because the word was primarily geographical and lacked overwhelming acquired distinctiveness at the date of application, no single manufacturer could claim a commercial monopoly over it."
    },
    {
        question: "Can I register a composite logo containing a city name?",
        answer: "Yes. While a standalone word mark for a city name is strictly scrutinized, applicants can successfully register composite device marks or logo marks that incorporate unique graphic crests, distinct color combinations, typography, and additional brand elements. In such cases, the Trade Marks Registry usually imposes a statutory condition or disclaimer under Section 18(4) stating that the registration grants no exclusive right to the standalone geographical name."
    },
    {
        question: "Can foreign city or country names be registered as trademarks in India?",
        answer: "Foreign geographical names can be registered in India if they are used arbitrarily and the Indian purchasing public does not associate that foreign location with the specific goods (e.g., 'Boston Scientific' for medical devices or 'Manhattan' for fashion apparel). However, if the foreign region is globally renowned for specific goods (e.g., 'Champagne' or 'Swiss' for watches), registration is prohibited under Section 9(1)(b) and international treaties."
    },
    {
        question: "How do I reply to a Section 9(1)(b) geographical objection from the Registry?",
        answer: "To overcome a Section 9(1)(b) objection, your IP attorney must file a comprehensive written response within 30 days: (1) establishing that the mark is fanciful/arbitrary with no geographical link to the goods, (2) demonstrating that the goods are not produced in that region and the public is not deceived, (3) submitting a Section 9 user affidavit with audited sales turnover proving secondary meaning, or (4) offering a voluntary disclaimer on the geographical term while protecting the distinct composite device mark."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "section-9-1-b-law", title: "Section 9(1)(b) Legal Rule" },
    { id: "public-domain-rationale", title: "Why Place Names Are Protected" },
    { id: "secondary-meaning-exception", title: "Secondary Meaning Exception" },
    { id: "bare-vs-arbitrary-composite", title: "Bare vs Arbitrary & Composite" },
    { id: "trademark-vs-gi-act", title: "Trademark vs GI Act 1999" },
    { id: "landmark-case-laws", title: "Landmark Indian Case Precedents" },
    { id: "reply-objection-strategy", title: "Overcoming Section 9(1)(b)" },
    { id: "evidence-checklist", title: "User Evidence Dossier" },
    { id: "clearance-matrix", title: "Geographical Naming Matrix" },
    { id: "step-by-step-registration", title: "Step-by-Step Filing Strategy" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Trademark Counsel" },
];

export default function TrademarkGeographicalNamePage() {
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
        "headline": "Can You Trademark a City, State, or Geographical Name in India? Section 9(1)(b) Rules",
        "description": "Learn if you can trademark a city, state, or geographical name in India under Section 9(1)(b). Understand secondary meaning, GI Act, and case laws.",
        "image": "https://www.iprkaro.com/images/og/can-you-trademark-a-city-or-geographical-name-in-india.png",
        "datePublished": "2026-09-28T09:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/can-you-trademark-a-city-or-geographical-name-in-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Can You Trademark a City or Geographical Name in India?",
        "url": "https://www.iprkaro.com/can-you-trademark-a-city-or-geographical-name-in-india",
        "description": "Learn if you can trademark a city, state, or geographical name in India under Section 9(1)(b). Understand secondary meaning, GI Act, and case laws.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/can-you-trademark-a-city-or-geographical-name-in-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/can-you-trademark-a-city-or-geographical-name-in-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Geographical Trademark Guide", "item": "https://www.iprkaro.com/can-you-trademark-a-city-or-geographical-name-in-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7-Step Roadmap to Register a Geographical Brand Name in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Comprehensive Trademark Clearance & Geographical Link Analysis" },
            { "@type": "ListItem", "position": 2, "name": "Verify Non-Conflict with Registered Geographical Indications (GI Act 1999)" },
            { "@type": "ListItem", "position": 3, "name": "Structure Brand as Arbitrary Word Mark or Composite Device with Stylized Logo" },
            { "@type": "ListItem", "position": 4, "name": "Compile Section 9 Proviso Acquired Distinctiveness Evidence & Sales Turnover" },
            { "@type": "ListItem", "position": 5, "name": "Draft and File Rule 25 User Affidavit with Earliest Documented Commercial Date" },
            { "@type": "ListItem", "position": 6, "name": "Respond to Section 9(1)(b) Examination Report with Judicial Precedents" },
            { "@type": "ListItem", "position": 7, "name": "Accept Voluntary Disclaimer on Geographical Element to Secure Grant Certificate" }
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
                                <FontAwesomeIcon icon={faMapLocationDot} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Section 9(1)(b) Trademark Law</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Can You Trademark a City, State, or Geographical Name in India? <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Section 9(1)(b) Rules</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Business founders frequently name their ventures after iconic cities, states, rivers, and historical territories. Under <strong>Section 9(1)(b) of the Trade Marks Act, 1999</strong>, marks designating geographical origin face absolute statutory refusal. Discover how to legally register geographical brand names through arbitrary usage, secondary meaning acquired distinctiveness, composite logo structures, and the critical boundary between <strong>Trademarks and Geographical Indications (GI)</strong>.
                            </p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 13 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified Section 9 Practice</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Check Brand Name Clearance <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call IP Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/can-you-trademark-a-city-or-geographical-name-in-india.png"
                                    alt="Can You Trademark a City, State, or Geographical Name in India Section 9(1)(b) Rules"
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
                        { label: "Geographical Trademark Guide", href: "/can-you-trademark-a-city-or-geographical-name-in-india" }
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </summary>
                                    <div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70">
                                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {tocSections.map((section, idx) => (
                                                <a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                >
                                                    <span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="truncate">{section.title}</span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </details>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose">
                                        <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 m-0">Written by <Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMapLocationDot} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Geographical Trademarks
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Under Section 9(1)(b) of the Trade Marks Act, 1999, you cannot register a standalone city, state, country, or geographical name as a trademark if it indicates the geographical origin of the goods or services. However, geographical names can be registered in India if: (1) the name is used arbitrarily with no geographical connection to the product (e.g., &ldquo;Amazon&rdquo; for retail or &ldquo;Patagonia&rdquo; for apparel), (2) the mark has acquired proven secondary meaning and distinctiveness through long continuous commercial sales under the Section 9 proviso, or (3) the mark is filed as a distinctive composite device logo with a statutory disclaimer on the geographical term.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Founders frequently draw inspiration from geographical landmarks, historic capitals, and regional identities when naming their commercial brands. Whether launching &ldquo;Kashmir Organic Walnuts&rdquo;, &ldquo;Jaipur Royal Jewels&rdquo;, &ldquo;Mysore Silk Crafts&rdquo;, or &ldquo;Calcutta Sweets&rdquo;, trademark applicants routinely run into severe examination objections from the Trade Marks Registry.
                                        </p>
                                        <p className="mb-6">
                                            The fundamental purpose of trademark law is to indicate commercial source—identifying that a product originates from one particular company rather than a physical territory. Granting an exclusive commercial monopoly over a city or region would unfairly prevent honest local businesses from describing where their products are manufactured.
                                        </p>
                                        <p className="mb-6">
                                            Understanding the statutory prohibitions of Section 9(1)(b), the doctrine of acquired distinctiveness, and the distinction between individual trademarks and collective Geographical Indications (GIs) is vital for brand protection. Review our related guides on <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-[rgb(110,94,147)] hover:underline font-medium">absolute grounds for trademark rejection</Link> and <Link href="/trademark-disclaimer-condition-meaning-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark disclaimers and conditions</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: SECTION 9(1)(b) STATUTORY PROVISION */}
                                    <section id="section-9-1-b-law" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 9(1)(b) Statutory Mandate
                                        </h2>
                                        <p className="mb-6">
                                            Section 9(1)(b) of the Trade Marks Act, 1999 establishes an absolute ground for the refusal of trademark registration:
                                        </p>

                                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-6 not-prose">
                                            <div className="border-l-4 border-[#6E5E93] pl-4">
                                                <p className="text-sm font-semibold text-gray-900 italic mb-2">
                                                    &ldquo;Section 9(1) — The trade marks—
                                                </p>
                                                <p className="text-sm text-gray-800 leading-relaxed italic mb-2">
                                                    (b) which consist exclusively of marks or indications which may serve in trade to designate the kind, quality, quantity, intended purpose, values, geographical origin or the time of production of the goods or of rendering of the service or other characteristics of goods or services,
                                                </p>
                                                <p className="text-sm font-bold text-[#6E5E93] m-0">
                                                    shall not be registered.&rdquo;
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            Under this provision, the Trade Marks Examiner issues an official Examination Report objecting to the mark if the name consists exclusively of a geographical location. The statutory test hinges on whether the public or competitors would reasonably perceive the word as describing where the goods are cultivated, manufactured, or traded.
                                        </p>
                                    </section>

                                    {/* SECTION 3: PUBLIC DOMAIN RATIONALE */}
                                    <section id="public-domain-rationale" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Why Place Names Belong in Public Domain
                                        </h2>
                                        <p className="mb-6">
                                            The legal prohibition against monopolizing geographical names is anchored in three foundational IP doctrines:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                                                <div className="w-10 h-10 bg-[#6E5E93] text-white rounded-xl flex items-center justify-center font-bold mb-4 shadow-sm">
                                                    1
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Protection of Honest Trade</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Traders operating in a specific city (e.g., brass artisans in Moradabad or leather tanners in Kanpur) have a legitimate commercial right to state their geographical location on invoices, packaging, and advertising.
                                                </p>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                                                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold mb-4 shadow-sm">
                                                    2
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Preventing Consumer Deception</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    If an enterprise uses a renowned place name (e.g., &ldquo;Kashmiri Saffron&rdquo;) for products grown in Maharashtra, it misleads buyers regarding the authenticity, climate, and soil characteristics of the goods.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                                                <div className="w-10 h-10 bg-[#6E5E93] text-white rounded-xl flex items-center justify-center font-bold mb-4 shadow-sm">
                                                    3
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Preserving Public Commons</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Names of sovereign states, capital cities, pilgrimage towns, and natural rivers are collective national heritage and cannot be privatized by a single corporate entity.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: THE SECTION 9 PROVISO EXCEPTION */}
                                    <section id="secondary-meaning-exception" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Proviso: Secondary Meaning Defense
                                        </h2>
                                        <p className="mb-6">
                                            The statutory bar under Section 9(1)(b) is not insurmountable. The <strong>Proviso to Section 9(1)</strong> creates an explicit statutory exception:
                                        </p>

                                        <div className="bg-emerald-50/70 border-l-4 border-emerald-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2">Section 9(1) Statutory Proviso</h3>
                                            <p className="text-sm text-emerald-950 leading-relaxed m-0">
                                                <em>&ldquo;Provided that a trade mark shall not be refused registration, if before the date of application for registration it has in fact acquired a distinctive character as a result of the use made of it or is a well-known trade mark.&rdquo;</em>
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Under this proviso, if an applicant can prove that through continuous, extensive, and long-standing commercial exploitation, the relevant purchasing public no longer identifies the word with the geographical territory, but exclusively identifies it with the applicant&apos;s enterprise, the mark is deemed to have acquired <strong>Secondary Meaning</strong>.
                                        </p>
                                        <p className="mb-6">
                                            For example, while &ldquo;Bikanervala&rdquo; contains the geographical name Bikaner, its nationwide restaurant chain and continuous usage since 1905 established overwhelming secondary meaning, enabling successful trademark protection across food classes.
                                        </p>
                                    </section>

                                    {/* SECTION 5: BARE VS ARBITRARY VS COMPOSITE */}
                                    <section id="bare-vs-arbitrary-composite" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCompassDrafting} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Bare vs Arbitrary &amp; Composite Marks
                                        </h2>
                                        <p className="mb-6">
                                            Indian trademark jurisprudence categorizes geographical name applications into three distinct legal classes:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Bare Descriptive Geographical Marks (Strictly Prohibited)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Applying for a plain word mark of a geographical location for goods directly originating from or famous in that location (e.g., &ldquo;Agra&rdquo; for Petha, &ldquo;Nagpur&rdquo; for Oranges, &ldquo;Surat&rdquo; for Diamonds, or &ldquo;Banaras&rdquo; for Sarees). These applications face immediate refusal under Section 9(1)(b) because no single trader can privatize descriptive origin markers.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Arbitrary / Fanciful Geographical Marks (Permissible)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    When a geographical name is used on goods that have <strong>no geographical connection or historical association</strong> with that location, the name is arbitrary and inherently distinctive. Classic examples include:
                                                </p>
                                                <ul className="text-xs text-gray-600 mt-2 space-y-1 list-disc list-inside">
                                                    <li><strong>Amazon:</strong> Geographical river/forest used for an e-commerce platform.</li>
                                                    <li><strong>Montblanc:</strong> Highest Alpine peak used for luxury writing instruments.</li>
                                                    <li><strong>Patagonia:</strong> South American region used for outdoor apparel.</li>
                                                    <li><strong>Boston Scientific:</strong> American city used for specialized cardiovascular catheters.</li>
                                                </ul>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Composite Device Marks with Disclaimers (Widely Accepted)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Combining a geographical name with distinctive graphic devices, logos, crests, stylized typography, or unique prefix/suffix words (e.g., &ldquo;Jaipur Jewels&rdquo; inside a distinctive royal crest logo). The Registry accepts such applications by entering a statutory disclaimer under Section 18(4) disclaiming exclusive proprietary rights over the standalone geographical word.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: TRADEMARK VS GI ACT 1999 */}
                                    <section id="trademark-vs-gi-act" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark vs Geographical Indication (GI)
                                        </h2>
                                        <p className="mb-6">
                                            A critical legal distinction exists between individual Trademarks under the Trade Marks Act, 1999 and registered Geographical Indications under the <strong>Geographical Indications of Goods (Registration and Protection) Act, 1999</strong>:
                                        </p>

                                        <div className="overflow-x-auto my-8">
                                            <table className="min-w-full text-left border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <thead className="bg-[#FAF9F6] border-b border-gray-200">
                                                    <tr>
                                                        <th className="py-3 px-4 text-xs font-bold text-gray-900 uppercase">Comparison Parameter</th>
                                                        <th className="py-3 px-4 text-xs font-bold text-[#6E5E93] uppercase">Trademark (TM Act 1999)</th>
                                                        <th className="py-3 px-4 text-xs font-bold text-indigo-700 uppercase">Geographical Indication (GI Act 1999)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Right Ownership</td>
                                                        <td className="py-3 px-4">Private individual, company, or single legal entity</td>
                                                        <td className="py-3 px-4">Collective public right owned by an entire community/association</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Primary Purpose</td>
                                                        <td className="py-3 px-4">Identifies commercial source and distinguishes brand origin</td>
                                                        <td className="py-3 px-4">Identifies goods originating in a specific territory with unique regional qualities</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Link to Geography</td>
                                                        <td className="py-3 px-4">Geography is prohibited unless secondary meaning or arbitrary use exists</td>
                                                        <td className="py-3 px-4">Geographical territory is mandatory; qualities must stem from soil/climate/craft</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Assignability &amp; Licensing</td>
                                                        <td className="py-3 px-4">Freely assignable, licensable, and transferable under Section 37/45</td>
                                                        <td className="py-3 px-4">Strictly non-assignable and non-transferable (Section 24 GI Act)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Statutory Conflict Rule</td>
                                                        <td className="py-3 px-4">Cannot register a recognized GI as an individual private trademark</td>
                                                        <td className="py-3 px-4">Section 25 GI Act invalidates conflicting subsequent trademarks</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Representative Examples</td>
                                                        <td className="py-3 px-4">Tata, Infosys, Bikanervala, Amul, Raymond</td>
                                                        <td className="py-3 px-4">Darjeeling Tea, Kanchipuram Silk, Kolhapuri Chappal, Alphonso Mango</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 7: LANDMARK CASE LAWS */}
                                    <section id="landmark-case-laws" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Judicial Precedents in India
                                        </h2>
                                        <p className="mb-6">
                                            Indian High Courts and the Supreme Court have developed a rich body of jurisprudence regarding geographical trademarks:
                                        </p>

                                        <div className="space-y-6 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">Imperial Tobacco Co. of India v. Registrar of Trade Marks (AIR 1977 Cal 413)</h3>
                                                    <span className="text-xs bg-red-100 text-red-800 font-bold px-2.5 py-1 rounded-full">Simla Case</span>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    <strong>The Dispute:</strong> Imperial Tobacco sought to register the word mark &ldquo;SIMLA&rdquo; for cigarettes with a snow-capped mountain label. The Registrar refused under Section 9, holding Simla to be a well-known hill city.
                                                </p>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-0">
                                                    <strong>Ruling:</strong> The Calcutta High Court affirmed the refusal. The Court ruled that a geographical name with well-known topographical identity cannot be registered as an ordinary word mark without conclusive, overwhelming proof of acquired distinctiveness displacing its primary geographical meaning at the time of application.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">Bikanervala v. Aggarwal Bikanervala (Delhi High Court)</h3>
                                                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">Secondary Meaning</span>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    <strong>The Dispute:</strong> The plaintiff registered &ldquo;Bikanervala&rdquo; for sweets and savouries and sued a competitor using an identical geographical business name.
                                                </p>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-0">
                                                    <strong>Ruling:</strong> The Delhi High Court held that continuous, extensive commercial use spanning several decades had vested the geographical term &ldquo;Bikanervala&rdquo; with strong secondary meaning, granting the proprietor proprietary rights to restrain deceptively similar commercial use.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">London Dairy vs Londonderry (Bombay High Court)</h3>
                                                    <span className="text-xs bg-purple-100 text-[#6E5E93] font-bold px-2.5 py-1 rounded-full">Foreign Location</span>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    <strong>The Dispute:</strong> Conflict between premium ice cream brand &ldquo;London Dairy&rdquo; and confectionery brand &ldquo;Londonderry&rdquo; regarding phonetics and geographical associations.
                                                </p>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-0">
                                                    <strong>Ruling:</strong> The Bombay High Court emphasized that foreign city names or regional references used in commercial branding must be evaluated based on the perception of the average Indian consumer and whether the public associates the goods with the foreign territory.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: HOW TO REPLY TO SECTION 9(1)(b) OBJECTION */}
                                    <section id="reply-objection-strategy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Overcoming Section 9(1)(b) Examination Objections
                                        </h2>
                                        <p className="mb-6">
                                            When the Trade Marks Registry issues a Section 9(1)(b) objection in your Examination Report, your IP counsel can adopt four proven defense strategies:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    1. Establish Arbitrary Non-Origin Use
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Demonstrate that the geographical location has zero reputation or commercial association with the applied goods or services (e.g., using &ldquo;Everest&rdquo; for spices or &ldquo;Sahara&rdquo; for airline services). Prove that the average consumer would never assume the goods are produced there.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    2. File Rule 25 User Affidavit with Sales
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Invoke the Section 9(1) Proviso by submitting a formal User Affidavit on stamp paper enclosing audited balance sheets, CA sales turnover certificates, pan-India invoices, and advertising spends showing acquired distinctiveness.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    3. Offer a Voluntary Section 18(4) Disclaimer
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Explicitly state: <em>&ldquo;The applicant disclaims any exclusive right to the standalone use of the geographical term [City Name] except as substantially shown in the composite logo representation.&rdquo;</em> This frequently secures immediate registry acceptance.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    4. Amend to Composite Device Mark (TM-M)
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    If a plain word mark is rejected, file Form TM-M to convert the application into a distinctive composite device mark featuring unique geometric badges, custom fonts, emblem artwork, and taglines.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            Learn the procedural mechanics of filing formal objection replies in our guide on <Link href="/how-to-respond-to-trademark-examination-report" className="text-[rgb(110,94,147)] hover:underline font-medium">how to respond to trademark examination reports</Link> and <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit formats and rules</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 9: EVIDENCE DOSSIER CHECKLIST */}
                                    <section id="evidence-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileLines} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Acquired Distinctiveness Evidence Dossier
                                        </h2>
                                        <p className="mb-6">
                                            To successfully invoke the Section 9(1) Proviso before the Trade Marks Hearing Officer, your legal dossier should compile:
                                        </p>

                                        <div className="space-y-4 not-prose">
                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 m-0">Chartered Accountant Certified Turnover Certificate</p>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Year-wise audited revenue figures under the brand name spanning at least 5 to 10 years.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 m-0">Multi-State Commercial Tax Invoices</p>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">GST tax invoices demonstrating pan-India sales distribution and commercial presence across diverse states.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 m-0">Promotional &amp; Advertising Expenditure Proofs</p>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Invoices for TV commercials, digital marketing, hoardings, print ads, and influencer campaigns.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 m-0">Independent Market &amp; Consumer Surveys</p>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Empirical evidence showing consumers identify the term exclusively with your enterprise.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: GEOGRAPHICAL NAMING MATRIX */}
                                    <section id="clearance-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Geographical Brand Clearance Matrix
                                        </h2>
                                        <p className="mb-6">
                                            Evaluate your proposed brand name against the Indian Trade Marks Registry clearance matrix:
                                        </p>

                                        <div className="overflow-x-auto my-8">
                                            <table className="min-w-full text-left border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <thead className="bg-[#FAF9F6] border-b border-gray-200">
                                                    <tr>
                                                        <th className="py-3 px-4 text-xs font-bold text-gray-900 uppercase">Brand Name Scenario</th>
                                                        <th className="py-3 px-4 text-xs font-bold text-[#6E5E93] uppercase">Section 9(1)(b) Risk Level</th>
                                                        <th className="py-3 px-4 text-xs font-bold text-gray-900 uppercase">Recommended Registration Strategy</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">&ldquo;Banaras Sarees&rdquo; for Silk Garments</td>
                                                        <td className="py-3 px-4"><span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded text-xs">Extreme (100% Refusal)</span></td>
                                                        <td className="py-3 px-4">Conflict with GI Act &amp; Section 9(1)(b). Must rebrand or create distinctive composite logo with heavy disclaimer.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">&ldquo;Jaipur Royal Living&rdquo; for Furniture</td>
                                                        <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 font-bold px-2 py-0.5 rounded text-xs">Moderate (Objection Likely)</span></td>
                                                        <td className="py-3 px-4">File as Device Mark with artistic logo. Agree to disclaimer on &ldquo;Jaipur&rdquo; under Section 18(4).</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">&ldquo;Amazon&rdquo; for E-Commerce / Cloud</td>
                                                        <td className="py-3 px-4"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-xs">Low (Permissible)</span></td>
                                                        <td className="py-3 px-4">Arbitrary use. Geographical location has no association with computer software or internet retail.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">&ldquo;Bikanervala&rdquo; (Established 50+ Yrs)</td>
                                                        <td className="py-3 px-4"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-xs">Low (Overcome via Proviso)</span></td>
                                                        <td className="py-3 px-4">Submit Rule 25 User Affidavit with multi-crore turnover establishing nationwide secondary meaning.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: STEP-BY-STEP FILING STRATEGY */}
                                    <section id="step-by-step-registration" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Roadmap to Register a Geographical Brand
                                        </h2>
                                        <p className="mb-6">
                                            Follow this systematic legal roadmap to successfully secure trademark registration for a brand containing geographical elements:
                                        </p>

                                        <div className="space-y-6 not-prose">
                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Search &amp; Geographical Link Analysis</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Conduct public search on the IP India portal. Evaluate whether the location is historically or commercially linked to the designated goods.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Verify Non-Conflict with GI Registry</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Cross-reference the official Geographical Indications Registry at Chennai to ensure no registered GI exists for that product category.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Design a Distinctive Composite Device</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Instead of a bare word mark, design a distinct logo with stylized typography, graphic crests, and unique color schemes.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Compile Prior Use Evidence Dossier</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Gather CA turnover certificates, tax invoices, media coverage, and advertisement expenses to substantiate prior commercial use.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Draft &amp; File User Affidavit under Rule 25</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Execute an affidavit on non-judicial stamp paper stating the exact date of continuous commercial use across India.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">6</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Respond to Section 9(1)(b) Objection</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Submit a comprehensive legal response citing Imperial Tobacco, Bikanervala, and arbitrary usage doctrines within 30 days.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">7</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Accept Disclaimer &amp; Obtain Grant Certificate</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Accept a Section 18(4) disclaimer condition during the show cause hearing to secure journal advertisement and final registration.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 13: STRATEGIC ENFORCEMENT ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[#6E5E93]" />
                                            Strategic Geographical Trademark Counsel
                                        </h2>
                                        <p className="mb-6">
                                            Securing trademark protection for a brand containing geographical terms requires meticulous clearance search, creative brand structuring, and robust evidentiary proof. Relying on an unprepared word mark application often triggers avoidable Section 9(1)(b) refusals and prolonged Registry litigation.
                                        </p>
                                        <p className="mb-6">
                                            Partner with experienced trademark attorneys at IPR Karo to conduct pre-filing clearance searches, structure arbitrary or composite logo applications, draft bulletproof Rule 25 user affidavits, and represent your brand during Registry show cause hearings. For further strategic guidance, explore our analyses on <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="text-[rgb(110,94,147)] hover:underline font-medium">prior user rights under Section 34</Link>, <Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark vs device mark strategies</Link>, and <Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark hearing procedures</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Strategic Brand Clearance &amp; Protection
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Register Your Geographical Brand with Legal Certainty
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Deploy expert trademark advocates to structure composite marks, overcome Section 9(1)(b) objections, draft user affidavits, and secure proprietary brand ownership.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult Trademark Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered IP Attorneys • Section 9 Proviso Evidentiary Dossiers • Pan-India Show Cause Hearings
                                                </p>
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
                                <h3 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h3>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in trademark clearance searches, absolute grounds Section 9 replies, acquired distinctiveness evidence, and Registry hearings across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Got a Section 9 Objection?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Facing a geographical or descriptive objection from IP India? Get an expert response drafted within 24 hours.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Reply to Objection
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Section 9 &amp; 11 Grounds</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-disclaimer-condition-meaning-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Disclaimer Meaning</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">User Affidavit Rules</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Prior User Section 34</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileLines} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Exam Report Reply</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCompassDrafting} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Word Mark vs Device</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-get-well-known-trademark-status-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Well-Known TM Status</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/deceptive-similarity-trademark-test-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Deceptive Similarity</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-win-trademark-objection-case" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Win TM Objection</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-hearing-video-conferencing-procedure-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faLandmark} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Video Hearing</span>
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
