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
    faPhone,
    faRocket,
    faGlobe,
    faClock,
    faRotate,
    faStamp,
    faHandshake,
    faGavel,
    faLink,
    faLinkSlash,
    faDiagramProject,
    faBuildingShield,
    faFileLines,
    faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "What is an Associated Trademark in India? Section 16 Guide",
    description: validateAndNormalizeDescription(
        "Understand Associated Trademarks under Section 16 of the Trade Marks Act 1999. Learn registry association rules, joint assignment restrictions, and dissolution.",
        "app/what-is-associated-trademark-in-india-section-16/page.tsx"
    ),
    keywords: [
        "what is an associated trademark in india",
        "section 16 trade marks act 1999",
        "associated trademark meaning india",
        "why trademark registry associates marks",
        "how to dissolve association of trademark",
        "section 16 4 trademark dissolution",
        "section 44 trademark assignment restriction",
        "section 55 defensive trademark use",
        "associated with tm no status meaning",
        "trademark association condition examination report"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/what-is-associated-trademark-in-india-section-16",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "What is an Associated Trademark in India? Section 16 Guide",
        description: "Understand Associated Trademarks under Section 16 of the Trade Marks Act 1999. Learn registry association rules, joint assignment restrictions, and dissolution.",
        url: "https://www.iprkaro.com/what-is-associated-trademark-in-india-section-16",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/what-is-associated-trademark-in-india-section-16.png",
                width: 1200,
                height: 630,
                alt: "What is an Associated Trademark in India Section 16 Complete Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "What is an Associated Trademark in India? Section 16 Guide",
        description: "Understand Associated Trademarks under Section 16 of the Trade Marks Act 1999. Learn registry association rules, joint assignment restrictions, and dissolution.",
        images: ["https://www.iprkaro.com/images/og/what-is-associated-trademark-in-india-section-16.jpg"],
    }
};

const faqs = [
    {
        question: "What is an Associated Trademark under Indian Trademark Law?",
        answer: "Under Section 16 of the Trade Marks Act, 1999, an associated trademark is a mark that is legally tied to another registered or pending trademark owned by the very same proprietor. The Trade Marks Registry mandates this association when the marks are identical or confusingly similar and cover the same or similar goods/services, ensuring that multiple similar brand variants cannot be owned by competing entities."
    },
    {
        question: "Why does the Trade Marks Registry order the association of trademarks?",
        answer: "The primary purpose is public interest and consumer protection. If an owner registers both a wordmark and a logo, or slightly modified brand variants, the law prevents those marks from being transferred to separate third parties in the future. Without statutory association, two unrelated companies could sell identical products under confusingly similar marks originally created by the same business."
    },
    {
        question: "What are the core restrictions on assigning an associated trademark?",
        answer: "Under Section 44 of the Trade Marks Act, 1999, associated trademarks are assignable and transmissible only as a single indivisible whole and never separately. An owner cannot sell or transfer Trademark 'A' to one company while keeping Associated Trademark 'B' for themselves or selling it to another party."
    },
    {
        question: "What is the key legal benefit of Section 55 for associated trademarks?",
        answer: "Section 55(1) provides a major tactical shield: if a rival attempts to cancel your trademark registration for 5 years of continuous non-use under Section 47, you can submit evidence of active use of an associated registered trademark (or the mark with non-substantial modifications) to prove statutory use of the challenged mark."
    },
    {
        question: "How can I dissolve the association between two trademarks in India?",
        answer: "Under Section 16(4) of the Trade Marks Act, 1999, the registered proprietor can apply to the Registrar to dissolve the association by filing Form TM-M along with the prescribed statutory fee (₹1,800 for individuals/startups/MSMEs, ₹3,000 for other entities). The applicant must prove that the goods or services have been sufficiently differentiated so there is no likelihood of public confusion if used by different persons."
    },
    {
        question: "What does 'Associated with TM No.' mean in the IP India status portal?",
        answer: "When your online application status displays 'Associated with TM No. XXXXXX', it indicates that the Trade Marks Registry has formally linked your current application to an earlier existing trademark registration or pending application in your corporate portfolio under Section 16."
    },
    {
        question: "Are series trademarks automatically considered associated trademarks?",
        answer: "Yes. Under Section 15 and Section 16(3) of the Trade Marks Act, 1999, where a proprietor registers a series of marks in a single application (marks sharing core material particulars with minor non-distinctive differences like color, price, or size), they are deemed by law to be associated trademarks."
    },
    {
        question: "Do I have to renew associated trademarks together in a single filing?",
        answer: "No. While associated marks are legally linked for assignment and use purposes, each trademark registration maintains its own individual registration number and 10-year renewal cycle. You must file a separate Form TM-R with the statutory renewal fee of ₹9,000 per class for each individual registered mark."
    },
    {
        question: "What should I do if the Examination Report requires me to associate my mark?",
        answer: "If the Trade Marks Registry issues an examination objection stating 'The applicant shall agree to associate the subject application with TM No. XXXXXX', you can formally submit a written response confirming your consent to the association, provided both applications share identical proprietorship and commercial lineage."
    },
    {
        question: "Can I license one associated trademark to a third party without licensing the others?",
        answer: "Yes, brand owners can grant a non-exclusive license or registered user agreement (Form TM-U) for a specific mark or specific territory. However, you cannot permanently assign (transfer title of) one associated mark separately without transferring all associated marks together."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Definition" },
    { id: "statutory-provisions", title: "Section 16 Statutory Law" },
    { id: "why-registry-associates", title: "Why Registry Associates" },
    { id: "assignment-restrictions", title: "Section 44 Assignment Rule" },
    { id: "defensive-use-benefit", title: "Section 55 Proof of Use" },
    { id: "comparison-table", title: "Key Legal Comparisons" },
    { id: "dissolution-procedure", title: "Dissolving Association (16(4))" },
    { id: "examination-condition", title: "Handling Exam Conditions" },
    { id: "compliance-checklist", title: "Portfolio Audit Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function AssociatedTrademarkPage() {
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
        "headline": "What is an Associated Trademark in India? (Section 16 Complete Guide)",
        "description": "Understand Associated Trademarks under Section 16 of the Trade Marks Act 1999. Learn registry association rules, joint assignment restrictions, and dissolution.",
        "image": "https://www.iprkaro.com/images/og/what-is-associated-trademark-in-india-section-16.png",
        "datePublished": "2026-09-25T10:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/what-is-associated-trademark-in-india-section-16"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "What is an Associated Trademark in India? Section 16 Guide",
        "url": "https://www.iprkaro.com/what-is-associated-trademark-in-india-section-16",
        "description": "Understand Associated Trademarks under Section 16 of the Trade Marks Act 1999. Learn registry association rules, joint assignment restrictions, and dissolution.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/what-is-associated-trademark-in-india-section-16#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/what-is-associated-trademark-in-india-section-16#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Associated Trademark Guide", "item": "https://www.iprkaro.com/what-is-associated-trademark-in-india-section-16" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Procedure to Dissolve Trademark Association under Section 16(4)",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Portfolio Audit & Chain of Title Verification" },
            { "@type": "ListItem", "position": 2, "name": "Commercial Grounds Assessment for No Public Confusion" },
            { "@type": "ListItem", "position": 3, "name": "Drafting Legal Representation & Statement of Grounds" },
            { "@type": "ListItem", "position": 4, "name": "Online E-Filing of Form TM-M on IP India Portal" },
            { "@type": "ListItem", "position": 5, "name": "Statutory Fee Remittance & Registry Verification" },
            { "@type": "ListItem", "position": 6, "name": "Registrar Order & Trade Marks Register Amendment" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            {/* HERO SECTION */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Indian Trade Marks Act, 1999 • Statutory Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                What is an <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Associated Trademark</span> in India? (Section 16 Complete Guide)
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                When a business registers multiple identical or closely resembling trademarks for similar goods or services, the Indian Trade Marks Registry links them as <strong>Associated Trademarks</strong> under <strong>Section 16 of the Trade Marks Act, 1999</strong>. This statutory link prevents market confusion, restricts separate transfers under Section 44, and unlocks powerful defensive evidentiary benefits under Section 55. Learn how association works, why the registry enforces it, how it impacts your brand transactions, and the legal procedure to dissolve association on Form TM-M.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Consult IP Attorney <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Expert: +91-9289707648
                                </a>
                            </div>
                        </div>

                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/what-is-associated-trademark-in-india-section-16.png"
                                    alt="What is an Associated Trademark in India Section 16 Complete Guide"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMBS */}
            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Associated Trademark Guide", href: "/what-is-associated-trademark-in-india-section-16" }
                    ]} />
                </div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        
                        {/* DESKTOP TABLE OF CONTENTS */}
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* ARTICLE BODY */}
                        <main className="min-w-0">
                            {/* MOBILE TABLE OF CONTENTS - ACCORDION */}
                            <div className="lg:hidden mb-6 not-prose">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <div>
                                                <span className="text-sm font-bold text-gray-900 block">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Sections)</span>
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
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist & IP Consultant</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLink} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview & Definition of Associated Trademarks
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                <strong>Quick Answer:</strong> An Associated Trademark in India is a trademark that is legally linked by the Trade Marks Registry to one or more other marks owned by the exact same applicant under <strong>Section 16 of the Trade Marks Act, 1999</strong>. This occurs when the marks are identical or confusingly similar and relate to the same or similar goods/services. The two most critical legal consequences are: <strong>(1)</strong> Associated marks can only be assigned or sold together as an indivisible group under Section 44; and <strong>(2)</strong> Commercial use of one associated mark can legally count as proof of use to defend other associated marks against non-use cancellation under Section 55.
                                            </p>
                                        </div>

                                        <p>
                                            As brands grow, companies frequently file multiple trademark applications for brand iterations. A company might register a standalone plain text <Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] font-medium underline">wordmark</Link>, an artistic logo (device mark), a localized tagline, or marks across multiple product classes. When these marks originate from the same business entity and exhibit structural, phonetic, or visual similarities, the Trade Marks Registry does not treat them as totally independent silos.
                                        </p>

                                        <p>
                                            Instead, the Registrar requires these applications to be registered as <strong>Associated Trademarks</strong>. The rationale is anchored in preventing confusion in trade: the law ensures that multiple brand assets pointing to a single business origin cannot later be split up and transferred into the hands of rival commercial operators.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY PROVISIONS */}
                                    <section id="statutory-provisions" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Framework: Section 16 of the Trade Marks Act
                                        </h2>

                                        <p>
                                            The Trade Marks Act, 1999 dedicates several statutory sections to governing how associated marks are created, classified, and maintained on the register:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                        16(1)
                                                    </span>
                                                    <h3 className="font-bold text-gray-900 text-base m-0">Mandatory Association</h3>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed m-0">
                                                    Where a trademark applied for is identical with or so nearly resembles another trademark of the same proprietor for the same goods or description of goods/services that it is likely to deceive or cause confusion if used by someone else, the Registrar may require the marks to be entered as associated marks.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                        16(2)
                                                    </span>
                                                    <h3 className="font-bold text-gray-900 text-base m-0">Parts of Trademarks</h3>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed m-0">
                                                    Where a trademark and any part or parts thereof are registered as separate trademarks in the name of the same proprietor (under Section 15(3)), they shall automatically be deemed to be, and shall be registered as, associated trademarks.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                        16(3)
                                                    </span>
                                                    <h3 className="font-bold text-gray-900 text-base m-0">Series Trademarks</h3>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed m-0">
                                                    Where a series of trademarks is registered in the name of the same proprietor in respect of the same or similar goods/services (under Section 15(4)), all marks comprising the series are statutorily deemed to be associated trademarks.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                        16(4)
                                                    </span>
                                                    <h3 className="font-bold text-gray-900 text-base m-0">Dissolution Mechanism</h3>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed m-0">
                                                    The registered proprietor may apply to the Registrar on Form TM-M to dissolve the association if they prove there would be no likelihood of deception or confusion if the marks were used by different persons in the marketplace.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6">
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-base font-bold text-amber-900 m-0 mb-1">Critical Prerequisite: Identical Proprietorship</h4>
                                                    <p className="text-sm text-amber-800 m-0">
                                                        Trademarks can <strong>only</strong> be associated if they belong to the <em>exact same legal entity or individual</em>. If Mark A is owned by "ABC Private Limited" and Mark B is owned by "Mr. John Doe (Director)", the registry cannot associate them until both marks are formally assigned under Form TM-P to a single proprietor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: WHY REGISTRY ASSOCIATES */}
                                    <section id="why-registry-associates" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faDiagramProject} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Why Does the Trade Marks Registry Associate Marks?
                                        </h2>

                                        <p>
                                            The Trade Marks Registry does not mandate association to burden applicants with administrative red tape. Instead, the association rule is a core pillar of Indian intellectual property jurisprudence designed to accomplish three fundamental commercial goals:
                                        </p>

                                        <div className="space-y-4 my-6">
                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base m-0 mb-1">Preventing Public Deception & Dual Source Confusion</h3>
                                                    <p className="text-gray-600 text-sm m-0">
                                                        Trademarks function as badges of commercial origin. If a brand owner registers "NEXUS" in plain text and "NEXUS PRO" with a stylized crest, ordinary consumers perceive both as emerging from the same company. By associating the marks, the registry ensures these related assets cannot be sold off separately, which would lead to two competing businesses manufacturing goods with nearly identical marks.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base m-0 mb-1">Accommodating Natural Brand Identity Evolution</h3>
                                                    <p className="text-gray-600 text-sm m-0">
                                                        Businesses routinely refresh their corporate visual identity, redesign logos, or adapt marks for digital apps. Rather than abandoning an older registered logo (and losing valuable priority dates), brand owners file a new application for the redesigned version. Association allows the proprietor to hold both registrations peacefully without the registry citing the applicant’s own older mark as a conflicting Section 11 objection.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base m-0 mb-1">Facilitating Cross-Class Line Expansions</h3>
                                                    <p className="text-gray-600 text-sm m-0">
                                                        When a fashion company (Class 25) expands into luxury perfumes (Class 3) and eyewear (Class 9) using the same flagship brand name, filing <Link href="/single-class-vs-multi-class-trademark-application-india" className="text-[rgb(110,94,147)] font-medium underline">multi-class or single-class applications</Link> often leads examiners to link the filings across related classes to maintain an unbroken corporate title chain.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: ASSIGNMENT RESTRICTIONS UNDER SECTION 44 */}
                                    <section id="assignment-restrictions" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandshake} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            The Section 44 Mandatory Joint Assignment Rule
                                        </h2>

                                        <p>
                                            The most critical practical consequence of trademark association lies in <strong>Section 44 of the Trade Marks Act, 1999</strong>. Section 44 explicitly states:
                                        </p>

                                        <blockquote className="border-l-4 border-[#6E5E93] bg-purple-50/50 p-4 rounded-r-xl italic my-6 text-gray-800">
                                            &ldquo;Associated trademarks shall be assignable and transmissible only as a whole and not separately, but they shall be deemed - severally registered trademarks for all other purposes.&rdquo;
                                        </blockquote>

                                        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">What Does This Mean in Commercial Practice?</h3>
                                        <p>
                                            If your company owns three associated trademarks (e.g., Mark 1: Wordmark, Mark 2: Label Design, Mark 3: Sub-brand):
                                        </p>

                                        <ul className="space-y-2 my-4">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>Allowed:</strong> You can assign (sell) Mark 1, Mark 2, and Mark 3 together to Buyer XYZ via a single <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] font-medium underline">Trademark Assignment Deed (Form TM-P)</Link>.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-rose-600 mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>Strictly Prohibited:</strong> You cannot sell Mark 1 to Company A, sell Mark 2 to Company B, or sell Mark 1 while retaining Mark 2 for your own use. Any assignment agreement attempting a partial transfer of associated marks is void and will be rejected by the Registrar.</span>
                                            </li>
                                        </ul>

                                        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md my-8 not-prose">
                                            <h3 className="text-base font-bold text-amber-400 mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-4 h-4 mr-2" />
                                                Mergers & Acquisitions (M&A) Due Diligence Warning
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed m-0">
                                                During startup acquisitions, joint ventures, or IP asset sales, corporate buyers conduct rigorous IP due diligence. If the seller promises to transfer a specific standalone trademark without realizing that the mark is statutorily associated with 4 other legacy marks still used by the seller’s parent entity, the transaction will hit an immediate regulatory deadlock at the IP India counter. The association must either be dissolved under Section 16(4) prior to closing, or the entire associated bundle must be transferred together.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 5: DEFENSIVE BENEFIT UNDER SECTION 55 */}
                                    <section id="defensive-use-benefit" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            The Strategic Superpower: Defensive Use Under Section 55
                                        </h2>

                                        <p>
                                            While association imposes assignment restrictions, it also grants brand owners one of the most potent defensive shields in Indian IP law under <strong>Section 55(1) of the Trade Marks Act, 1999</strong>:
                                        </p>

                                        <blockquote className="border-l-4 border-emerald-500 bg-emerald-50/50 p-4 rounded-r-xl italic my-6 text-gray-800">
                                            &ldquo;Where under the provisions of this Act, use of a registered trade mark is required to be proved for any purpose, the tribunal may accept the use of an associated registered trade mark, or of the trade mark with additions or alterations not substantially affecting its identity, as an equivalent for the use required to be proved.&rdquo;
                                        </blockquote>

                                        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Defending Against 5-Year Non-Use Rectification (Section 47)</h3>
                                        <p>
                                            Under Section 47 of the Act, any third party or competitor can file a rectification petition to cancel your registered trademark if you fail to show bona fide commercial use of the mark in India for a continuous period of <strong>5 years and 1 month</strong>.
                                        </p>

                                        <p>
                                            However, if your challenged mark is registered as an <strong>associated trademark</strong> with another mark in your portfolio that you <em>have</em> actively used (e.g., you registered both a stylized device mark and a plain wordmark, but only printed the wordmark on product packaging), Section 55 allows the court or Registrar to accept the use of the active associated mark as legal equivalent use for the dormant mark!
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl">
                                                <h4 className="font-bold text-emerald-900 text-sm mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    Case A: Marks are Associated
                                                </h4>
                                                <p className="text-xs text-emerald-800 m-0 leading-relaxed">
                                                    Competitor files non-use cancellation against your registered Logo B. You prove continuous sales invoices under Associated Wordmark A. <strong>Result:</strong> Section 55 applies; cancellation petition is dismissed; your Logo B remains registered.
                                                </p>
                                            </div>

                                            <div className="bg-rose-50 border border-rose-200 p-5 rounded-xl">
                                                <h4 className="font-bold text-rose-900 text-sm mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-rose-600 mr-2" />
                                                    Case B: Marks are Unassociated
                                                </h4>
                                                <p className="text-xs text-rose-800 m-0 leading-relaxed">
                                                    Competitor files non-use cancellation against independent Logo B. You prove use of Wordmark A, but the marks were never associated. <strong>Result:</strong> Section 55 does not automatically rescue Logo B; high risk of removal from register.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: COMPARISON TABLE */}
                                    <section id="comparison-table" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Legal Comparison: Associated vs Independent vs Series Trademarks
                                        </h2>

                                        <p>
                                            Understanding the precise operational differences between associated trademarks, independent marks, and series filings helps brand managers structure their corporate IP portfolios efficiently:
                                        </p>

                                        <div className="overflow-x-auto my-6 not-prose">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm text-left text-xs sm:text-sm">
                                                <thead>
                                                    <tr className="bg-[#6E5E93] text-white">
                                                        <th className="py-3 px-4 font-bold border-b border-gray-200">Legal Parameter</th>
                                                        <th className="py-3 px-4 font-bold border-b border-gray-200">Associated Trademarks</th>
                                                        <th className="py-3 px-4 font-bold border-b border-gray-200">Independent Trademarks</th>
                                                        <th className="py-3 px-4 font-bold border-b border-gray-200">Series Trademarks</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Governing Section</td>
                                                        <td className="py-3 px-4">Section 16, Trade Marks Act 1999</td>
                                                        <td className="py-3 px-4">Section 18 / Section 23</td>
                                                        <td className="py-3 px-4">Section 15 & Section 16(3)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Proprietorship Rule</td>
                                                        <td className="py-3 px-4">Must be 100% identical proprietor</td>
                                                        <td className="py-3 px-4">Can belong to separate owners</td>
                                                        <td className="py-3 px-4">Must be 100% identical proprietor</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Assignment / Transfer</td>
                                                        <td className="py-3 px-4 text-rose-600 font-semibold">Only as a whole bundle (Sec 44)</td>
                                                        <td className="py-3 px-4 text-emerald-600 font-semibold">Freely transferable individually</td>
                                                        <td className="py-3 px-4 text-rose-600 font-semibold">Only as a whole series</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Defensive Proof of Use</td>
                                                        <td className="py-3 px-4 text-emerald-600 font-semibold">Cross-mark use allowed (Sec 55)</td>
                                                        <td className="py-3 px-4 text-gray-500">Each mark must prove own use</td>
                                                        <td className="py-3 px-4 text-emerald-600 font-semibold">Cross-mark use allowed (Sec 55)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Filing Method</td>
                                                        <td className="py-3 px-4">Separate Form TM-A filings linked by registry</td>
                                                        <td className="py-3 px-4">Separate Form TM-A filings</td>
                                                        <td className="py-3 px-4">Single Form TM-A covering full series</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900"><Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] font-medium underline">Renewal Process</Link></td>
                                                        <td className="py-3 px-4">Each mark renewed individually (TM-R)</td>
                                                        <td className="py-3 px-4">Each mark renewed individually (TM-R)</td>
                                                        <td className="py-3 px-4">Renewed together in series</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Dissolution Mechanism</td>
                                                        <td className="py-3 px-4">Available on Form TM-M under Sec 16(4)</td>
                                                        <td className="py-3 px-4">Not applicable (already independent)</td>
                                                        <td className="py-3 px-4">Difficult unless marks severed</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 7: DISSOLUTION PROCEDURE */}
                                    <section id="dissolution-procedure" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLinkSlash} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            How to Dissolve Trademark Association: Step-by-Step Guide
                                        </h2>

                                        <p>
                                            If a business wishes to divest a product line, sell a specific trademark to an investor, or restructure its subsidiaries, it must formally sever the statutory link between associated marks. Under <strong>Section 16(4) of the Trade Marks Act, 1999</strong>, a registered proprietor can apply to the Registrar for <strong>Dissolution of Association</strong>.
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Step 1: Conduct Portfolio Audit & Verify Registration Status</h3>
                                                    <p className="text-gray-600 text-sm m-0 leading-relaxed">
                                                        Identify all trademark application and registration numbers currently marked as "Associated" in the IP India public register. Confirm that both marks are fully registered, in active standing, and not subject to pending opposition proceedings.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Step 2: Establish Grounds Showing No Likelihood of Public Confusion</h3>
                                                    <p className="text-gray-600 text-sm m-0 leading-relaxed">
                                                        The Registrar will only approve dissolution if convinced that separate ownership will not deceive the public. Valid legal grounds include: distinct goods/services specifications, separate commercial channels, substantial differences in visual design, or territorial market divisions.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Step 3: Draft Legal Statement of Grounds & Supporting Affidavit</h3>
                                                    <p className="text-gray-600 text-sm m-0 leading-relaxed">
                                                        Draft a comprehensive Statement of Case explaining why the association is no longer necessary. Accompany this with an <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] font-medium underline">affidavit</Link> from the authorized signatory detailing business separation, turnover data, and evidence of distinct consumer target demographics.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Step 4: Execute Form TM-48 (Power of Attorney)</h3>
                                                    <p className="text-gray-600 text-sm m-0 leading-relaxed">
                                                        If the dissolution is being filed through an intellectual property attorney or registered trademark agent, execute a specific <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] font-medium underline">Form TM-48 Power of Attorney</Link> authorizing the counsel to represent the applicant in dissolution proceedings.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Step 5: E-File Form TM-M & Remit Statutory Government Fees</h3>
                                                    <p className="text-gray-600 text-sm m-0 leading-relaxed">
                                                        File Form TM-M (Request for Dissolution of Association under Section 16(4)) on the IP India e-filing gateway. The statutory government fee is <strong>₹1,800 per mark</strong> for individuals, startups, and MSMEs (or ₹3,000 for standard corporate bodies).
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">6</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Step 6: Hearing & Entry of Dissolution Order on Register</h3>
                                                    <p className="text-gray-600 text-sm m-0 leading-relaxed">
                                                        The Registrar scrutinizes the submission. If satisfied, an official order is passed severing the link and amending the Register of Trade Marks. The marks now become completely independent and can be assigned freely.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: HANDLING EXAMINATION CONDITIONS */}
                                    <section id="examination-condition" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileLines} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            How to Respond to Examination Report Association Conditions
                                        </h2>

                                        <p>
                                            When you file a new trademark application, the Trade Marks Examiner might issue a condition in your <Link href="/how-to-respond-to-trademark-examination-report" className="text-[rgb(110,94,147)] font-medium underline">Examination Report</Link> stating:
                                        </p>

                                        <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-xl font-mono text-xs sm:text-sm text-gray-800 my-4 not-prose">
                                            &ldquo;The applicant shall agree to associate the mark with registered/pending trademark application no(s). [XXXXXXX] under Section 16 of the Trade Marks Act, 1999.&rdquo;
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Strategic Action Plan for Applicants</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                                            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                                <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs mr-2">A</span>
                                                    When to Agree to Association
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    If the cited mark is indeed your own earlier trademark and you plan to keep both marks permanently within the same company, simply accept the condition in your formal written reply. Agreeing to association clears the Section 11 conflict and allows the application to proceed smoothly to <em>"Accepted & Advertised"</em> in the Trade Marks Journal.
                                                </p>
                                            </div>

                                            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                                <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mr-2">B</span>
                                                    When to Contest Association
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    If the examiner mistakenly associates marks covering completely unrelated goods/services (e.g., software in Class 9 vs agricultural seeds in Class 31), or if the cited mark belongs to a different legal entity that happens to share a similar name, you should contest the association condition by highlighting the lack of commercial overlap and non-identical proprietorship.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: COMPLIANCE CHECKLIST */}
                                    <section id="compliance-checklist" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Brand Owner’s Section 16 Compliance Checklist
                                        </h2>

                                        <p>
                                            Before executing any brand licensing agreement, corporate restructuring, venture capital round, or M&A exit, review this essential compliance checklist:
                                        </p>

                                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-6 not-prose">
                                            <ul className="space-y-4 text-sm text-gray-700">
                                                <li className="flex items-start">
                                                    <input type="checkbox" className="mt-1 mr-3 h-4 w-4 text-[#6E5E93] rounded border-gray-300 pointer-events-none" defaultChecked />
                                                    <div>
                                                        <strong>Conduct a Complete IP Registry Audit:</strong> Search the <Link href="/trademark-search" className="text-[rgb(110,94,147)] font-medium underline">IP India Public Search</Link> portal to list every mark registered under your entity and flag all marks carrying association notices.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <input type="checkbox" className="mt-1 mr-3 h-4 w-4 text-[#6E5E93] rounded border-gray-300 pointer-events-none" defaultChecked />
                                                    <div>
                                                        <strong>Verify Unified Legal Entity Names:</strong> Ensure all associated marks are registered in the identical legal name, corporate entity form, and address on the register.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <input type="checkbox" className="mt-1 mr-3 h-4 w-4 text-[#6E5E93] rounded border-gray-300 pointer-events-none" defaultChecked />
                                                    <div>
                                                        <strong>Review M&A Deal Term Sheets:</strong> Ensure that contracts do not attempt to carve out and assign a single associated trademark without assigning its companion registrations.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <input type="checkbox" className="mt-1 mr-3 h-4 w-4 text-[#6E5E93] rounded border-gray-300 pointer-events-none" defaultChecked />
                                                    <div>
                                                        <strong>Leverage Section 55 for Dormant Marks:</strong> Maintain evidence of commercial use (invoices, marketing materials, sales receipts) of your primary mark to shield dormant associated marks.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <input type="checkbox" className="mt-1 mr-3 h-4 w-4 text-[#6E5E93] rounded border-gray-300 pointer-events-none" defaultChecked />
                                                    <div>
                                                        <strong>Initiate Timely Dissolution on Form TM-M:</strong> If a specific trademark is slated for an independent sale or spinoff, initiate Form TM-M dissolution at least 3 to 6 months prior to closing.
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 10: FAQS */}
                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions on Associated Trademarks
                                        </h2>

                                        <div className="space-y-4 my-6 not-prose">
                                            {faqs.map((faq, index) => (
                                                <details key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200 open:border-[#6E5E93] open:shadow-md">
                                                    <summary className="flex items-center justify-between p-5 text-left font-bold text-gray-900 cursor-pointer select-none bg-gray-50/50 hover:bg-purple-50/30 transition-colors">
                                                        <span className="text-sm sm:text-base pr-4 flex items-center">
                                                            <span className="w-6 h-6 rounded-full bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                                                                {index + 1}
                                                            </span>
                                                            {faq.question}
                                                        </span>
                                                        <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </summary>
                                                    <div className="p-5 pt-3 border-t border-gray-100 text-gray-600 text-xs sm:text-sm leading-relaxed bg-white">
                                                        {faq.answer}
                                                    </div>
                                                </details>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 11: FINAL TAKEAWAYS */}
                                    <section id="final-takeaway" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Strategic Takeaways for Brand Custodians
                                        </h2>

                                        <p>
                                            Associated trademarks under Section 16 represent a dual-edged legal instrument in Indian IP management. On one hand, they safeguard brand integrity by eliminating public confusion and allow brand owners to assert defensive proof of use across registrations under Section 55. On the other hand, their mandatory joint assignment restriction under Section 44 can complicate corporate spinoffs, licensing deals, and asset sales if not proactively managed.
                                        </p>

                                        <p>
                                            Before expanding your trademark portfolio or executing any IP monetization deal, ensure you partner with experienced trademark attorneys who can audit your registry entries, navigate registry examination association conditions, and execute timely dissolution proceedings when necessary.
                                        </p>

                                        <div className="bg-gradient-to-r from-purple-900 to-[#1A1A24] text-white p-8 rounded-2xl shadow-xl mt-8 not-prose text-center">
                                            <h3 className="text-xl sm:text-2xl font-black mb-3 text-white">Need Help Managing Your Associated Trademarks?</h3>
                                            <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6">
                                                Our team of registered trademark attorneys and IP consultants provides end-to-end portfolio management, examination reply drafting, Form TM-M dissolution filing, and M&A IP due diligence.
                                            </p>
                                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                                <Link href="/e-filing-trademark">
                                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider w-full sm:w-auto">
                                                        Schedule IP Consultation
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl border border-white/20 transition-all text-sm flex items-center justify-center w-full sm:w-auto">
                                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                                    Call: +91-9289707648
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>
                            </div>
                        </main>

                        {/* RIGHT SIDEBAR */}
                        <aside className="space-y-8 lg:sticky lg:top-32">
                            {/* Consultation Box */}
                            <div className="bg-gradient-to-br from-purple-900 via-[#2A2A38] to-[#1A1A24] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-800/30">
                                <div className="inline-flex items-center bg-white/10 rounded-full px-3 py-1 mb-4 text-[11px] font-bold tracking-wider text-purple-200 uppercase">
                                    <FontAwesomeIcon icon={faShieldHalved} className="w-3 h-3 mr-1.5 text-pink-400" />
                                    Expert IP Legal Advisory
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">Trademark Portfolio Audit & Dissolution</h3>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                                    Facing an association condition in your Examination Report, or need to dissolve Section 16 links for an upcoming brand sale? Get expert legal guidance from registered IP attorneys.
                                </p>
                                <div className="space-y-3">
                                    <Link href="/e-filing-trademark" className="block w-full">
                                        <button className="w-full bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-4 rounded-xl transition-all text-xs uppercase tracking-wider shadow-lg">
                                            Book Consultation Now &rarr;
                                        </button>
                                    </Link>
                                    <a href="tel:+919289707648" className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl border border-white/10 transition-all text-xs">
                                        <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                        Call: +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Quick Takeaways Box */}
                            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 shadow-sm">
                                <h3 className="text-xs font-black text-amber-900 mb-3 uppercase tracking-widest flex items-center">
                                    <FontAwesomeIcon icon={faLightbulb} className="w-3.5 h-3.5 text-amber-600 mr-2" />
                                    Key Section 16 Takeaways
                                </h3>
                                <ul className="space-y-3 text-xs text-amber-950 font-medium">
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Governed by Section 16 of Trade Marks Act 1999.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Requires 100% identical legal proprietorship.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Section 44 restricts transfer: assignable only as a whole.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Section 55 allows cross-mark evidence of commercial use.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Dissolution filed on Form TM-M under Section 16(4).</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-xs font-black text-gray-500 mb-4 uppercase tracking-widest">Related Legal Guides</h3>
                                <ul className="space-y-4 text-xs font-semibold text-gray-800">
                                    <li>
                                        <Link href="/trademark-assignment-vs-licensing-in-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faHandshake} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Assignment vs Licensing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/word-mark-vs-device-mark-trademark-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faStamp} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Word Mark vs Device Mark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single-class-vs-multi-class-trademark-application-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faTable} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Single vs Multi-Class Filing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faFileContract} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Form TM-48 Power of Attorney</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faFileLines} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Trademark User Affidavit Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-trademark" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faRotate} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>How to Renew a Trademark</span>
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
