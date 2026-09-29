import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faScaleBalanced,
    faCalendarDays,
    faHourglassHalf,
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
    faRotateRight,
    faFileInvoiceDollar,
    faTable,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Deadlines India: Section 131 Extension Rules",
    description: validateAndNormalizeDescription(
        "Master trademark deadlines in India. Learn Section 131 extension rules, Form TM-M filing steps, objection timelines, and strict non-extendable dates.",
        "app/trademark-deadlines-extension-of-time-section-131-india/page.tsx"
    ),
    keywords: [
        "trademark deadlines in india strict time limits",
        "section 131 trade marks act 1999 extension of time",
        "is trademark opposition deadline extendable india",
        "section 131 extension of time form tm m fee",
        "30 days trademark objection reply time limit extension",
        "rule 109 trade marks rules 2017 extension application",
        "trademark hearing adjournment deadline rule 50",
        "trademark abandonment under section 21 2 counter statement",
        "restoration of abandoned trademark application india",
        "trademark renewal grace period surcharge section 25"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-deadlines-extension-of-time-section-131-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Deadlines India: Section 131 Extension Rules",
        description: "Master trademark deadlines in India. Learn Section 131 extension rules, Form TM-M filing steps, objection timelines, and strict non-extendable dates.",
        url: "https://www.iprkaro.com/trademark-deadlines-extension-of-time-section-131-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-deadlines-extension-of-time-section-131-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Deadlines in India and Section 131 Extension of Time Rules Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Deadlines India: Section 131 Extension Rules",
        description: "Master trademark deadlines in India. Learn Section 131 extension rules, Form TM-M filing steps, objection timelines, and strict non-extendable dates.",
        images: ["https://www.iprkaro.com/images/og/trademark-deadlines-extension-of-time-section-131-india.png"],
    }
};

const faqs = [
    {
        question: "Can the 4-month trademark opposition filing deadline be extended under Section 131?",
        answer: "No. The 4-month statutory deadline under Section 21(1) of the Trade Marks Act, 1999 for filing a Notice of Opposition (Form TM-O) against an advertised mark is strictly non-extendable. The Supreme Court of India and High Courts have settled that the Registrar of Trade Marks has zero discretionary power under Section 131 to grant extensions for filing opposition notices once the 4-month journal advertisement window expires."
    },
    {
        question: "How do I request an extension of time to reply to a Trademark Examination Report?",
        answer: "If you cannot file your response to an Examination Report within the statutory 30-day window under Rule 33, you must file an application for extension of time on Form TM-M under Section 131 and Rule 109 of the Trade Marks Rules, 2017 before the 30-day period expires. You must state bona fide reasons (such as gathering user affidavits, prior sales records, or foreign certificates) and pay the prescribed official fee."
    },
    {
        question: "What is the official government fee for Form TM-M for an extension of time?",
        answer: "Under the Trade Marks Rules, 2017, the official government e-filing fee for filing an Extension of Time request on Form TM-M under Rule 109 is ₹900 for Individuals, Startups, and MSMEs/Small Enterprises. For all other corporate entities (Large Enterprises, LLPs, Private Limiteds without MSME/Startup recognition), the e-filing fee is ₹1,800."
    },
    {
        question: "What happens if I miss the 2-month deadline to file a Counter-Statement under Section 21(2)?",
        answer: "Under Section 21(2) of the Trade Marks Act, 1999, if the applicant fails to file a Counter-Statement on Form TM-O within exactly 2 months from the date of receipt of the copy of the Notice of Opposition from the Trade Marks Registry, the application is deemed to have been abandoned by operation of statutory law. This deadline cannot be extended under Section 131."
    },
    {
        question: "How many times can a trademark hearing be adjourned under Rule 50?",
        answer: "Under Rule 50(1) of the Trade Marks Rules, 2017, a trademark hearing can be adjourned for a maximum of 2 times upon a formal application filed on Form TM-M along with the prescribed fee. Each adjournment granted by the Hearing Officer cannot exceed 30 days. The adjournment application must be submitted at least 3 days before the scheduled hearing date."
    },
    {
        question: "What are the time limits for filing evidence during trademark opposition proceedings?",
        answer: "Under Rules 45, 46, and 47 of the Trade Marks Rules, 2017: (1) Opponent must file Evidence in Support of Opposition within 2 months of receiving the Counter-Statement (or file a waiver letter), failing which the opposition is deemed abandoned; (2) Applicant must file Evidence in Support of Application within 2 months of receiving opponent's evidence; and (3) Opponent may file Evidence in Reply within 1 month thereafter."
    },
    {
        question: "Can an abandoned trademark application be restored in India?",
        answer: "Yes, in specific circumstances. If a trademark application was abandoned due to non-receipt of the Examination Report or Hearing Notice, postal delivery failure, or a proven technical server glitch on the IP India portal, the applicant can file a Petition for Restoration on Form TM-M along with a detailed affidavit explaining the bona fide delay within 30 days of learning of the abandonment order."
    },
    {
        question: "What are the deadlines and grace periods for trademark renewal under Section 25?",
        answer: "A registered trademark must be renewed every 10 years under Section 25. The renewal application on Form TM-R can be filed within 1 year before the expiration date. If missed, a grace period of 6 months after expiry allows renewal with a statutory late surcharge. If still unrenewed, the mark is removed from the register, but can be restored and renewed between 6 months and 1 year post-expiry under Section 25(4)."
    }
];

const tocSections = [
    { id: "overview", title: "Overview of Indian TM Deadlines" },
    { id: "statutory-time-limits", title: "Statutory Time Limits Across Stages" },
    { id: "section-131-powers", title: "Section 131: Extension Powers" },
    { id: "extendable-vs-strict-deadlines", title: "Extendable vs Non-Extendable Limits" },
    { id: "form-tm-m-filing-steps", title: "Form TM-M Extension Filing Procedure" },
    { id: "objection-reply-extension", title: "Objection Reply: 30-Day Rule" },
    { id: "opposition-deadlines-bar", title: "Opposition: 4-Month Strict Bar" },
    { id: "hearing-adjournments-rule-50", title: "Hearing Adjournments under Rule 50" },
    { id: "renewal-restoration-deadlines", title: "Renewal & Restoration Timelines" },
    { id: "remedies-abandoned-marks", title: "Remedies for Abandoned Marks" },
    { id: "deadline-action-checklist", title: "Deadline Compliance Checklist" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "strategic-litigation-advice", title: "Strategic Legal Advice" },
];

export default function TrademarkDeadlinesExtensionPage() {
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
        "headline": "Trademark Deadlines in India: Strict Time Limits & Section 131 Extension of Time Rules",
        "description": "Master trademark deadlines in India under Section 131. Learn extension of time rules, Form TM-M procedures, 30-day objection limits, and non-extendable dates.",
        "image": "https://www.iprkaro.com/images/og/trademark-deadlines-extension-of-time-section-131-india.png",
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
            "@id": "https://www.iprkaro.com/trademark-deadlines-extension-of-time-section-131-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Deadlines India: Section 131 Extension Rules",
        "url": "https://www.iprkaro.com/trademark-deadlines-extension-of-time-section-131-india",
        "description": "Master trademark deadlines in India under Section 131. Learn extension of time rules, Form TM-M procedures, 30-day objection limits, and non-extendable dates.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-deadlines-extension-of-time-section-131-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-deadlines-extension-of-time-section-131-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Deadlines & Section 131 Guide", "item": "https://www.iprkaro.com/trademark-deadlines-extension-of-time-section-131-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure to File Section 131 Extension of Time on Form TM-M",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Track Impending Statutory Deadline on IP India Portal" },
            { "@type": "ListItem", "position": 2, "name": "Identify Valid Bona Fide Cause for Extension under Rule 109" },
            { "@type": "ListItem", "position": 3, "name": "Draft Formal Request for Extension of Time with Supporting Grounds" },
            { "@type": "ListItem", "position": 4, "name": "Log in to IP India Comprehensive E-Filing Gateway" },
            { "@type": "ListItem", "position": 5, "name": "Select Form TM-M and Choose Extension of Time under Section 131" },
            { "@type": "ListItem", "position": 6, "name": "Upload Reason Document and Pay Government Fee (₹900 / ₹1,800)" },
            { "@type": "ListItem", "position": 7, "name": "Obtain Official CBR Receipt and File Substantive Response within Extended Window" }
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
                                <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Statutory Time Limits &amp; Compliance</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Deadlines in India: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Strict Time Limits &amp; Section 131 Extension Rules</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Missing a statutory trademark deadline in India causes automatic abandonment, permanent loss of brand priority, or forfeiture of legal defenses. Under <strong>Section 131 of the Trade Marks Act, 1999</strong> and <strong>Rule 109 of the Trade Marks Rules, 2017</strong>, applicants can seek procedural time extensions on <strong>Form TM-M</strong>. Understand which deadlines are strictly non-extendable by law, how to secure objection response extensions, manage hearing adjournments, and restore abandoned marks.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 15 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified Procedural Law</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Form TM-M Extension Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-purple-400" />
                                    Urgent Deadline Helpline: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-deadlines-extension-of-time-section-131-india.png"
                                    alt="Trademark Deadlines in India and Section 131 Extension of Time Rules"
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
                        { label: "Trademark Deadlines & Section 131 Guide", href: "/trademark-deadlines-extension-of-time-section-131-india" }
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
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Indian Trademark Deadlines
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Trademark deadlines in India are strictly governed by the Trade Marks Act, 1999 and the Trade Marks Rules, 2017. While procedural steps—such as replying to an Examination Report (30 days) and requesting hearing adjournments (Rule 50)—can be extended under Section 131 and Rule 109 by filing Form TM-M with prescribed fees (₹900 for MSME/Individuals, ₹1,800 for Others), statutory deadlines such as the 4-month trademark opposition period under Section 21(1) and the 2-month counter-statement filing window under Section 21(2) are non-extendable by law. Missing these strict dates triggers automatic statutory abandonment.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            In trademark prosecution, time is of the essence. The Indian Trade Marks Registry enforces rigid timelines across every stage of the brand registration lifecycle. When an applicant misses a statutory deadline, the online automated portal of the Intellectual Property India (IP India) office marks the application as <strong>&ldquo;Abandoned&rdquo;</strong> under Section 21(2) or Rule 33.
                                            Understanding how to navigate these dates—and knowing precisely when and how to invoke <strong>Section 131</strong> for an extension of time—is what separates protected brand portfolios from catastrophic loss of trademark rights.
                                        </p>
                                        <p className="mb-6">
                                            Whether you are dealing with an impending <Link href="/how-to-respond-to-trademark-examination-report" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark examination report reply</Link>, coordinating an urgent <Link href="/trademark-opposed-what-happens-next-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark opposition counter-statement</Link>, or seeking <Link href="/trademark-abandoned-how-to-restore" className="text-[rgb(110,94,147)] hover:underline font-medium">restoration of an abandoned trademark</Link>, this comprehensive guide breaks down the exact statutory limits, extension protocols, judicial precedents, and action frameworks you need to protect your intellectual property.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY TIME LIMITS ACROSS ALL STAGES */}
                                    <section id="statutory-time-limits" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Time Limits Across All Stages
                                        </h2>
                                        <p className="mb-6">
                                            Every procedural step in Indian trademark law operates on a defined statutory timeline. The table below outlines all primary milestones, their governing sections/rules, official deadlines, and whether an extension under Section 131 is legally permissible:
                                        </p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 text-left text-xs md:text-sm">
                                                <thead className="bg-gray-100 text-gray-900 font-bold uppercase tracking-wider">
                                                    <tr>
                                                        <th className="py-3 px-4">Prosecution Stage</th>
                                                        <th className="py-3 px-4">Governing Provision</th>
                                                        <th className="py-3 px-4">Statutory Deadline</th>
                                                        <th className="py-3 px-4">Section 131 Extendable?</th>
                                                        <th className="py-3 px-4">Consequence of Missing</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Formality Check Correction</td>
                                                        <td className="py-3.5 px-4">Rule 29</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">30 Days from Notice</td>
                                                        <td className="py-3.5 px-4 font-semibold text-emerald-700">Yes (Form TM-M)</td>
                                                        <td className="py-3.5 px-4 text-red-600">Application Abandoned</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Examination Report Reply</td>
                                                        <td className="py-3.5 px-4">Section 18 / Rule 33</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">30 Days from Dispatch</td>
                                                        <td className="py-3.5 px-4 font-semibold text-emerald-700">Yes (30-day ext. on TM-M)</td>
                                                        <td className="py-3.5 px-4 text-red-600">Marked Abandoned under Rule 33</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Notice of Opposition Filing</td>
                                                        <td className="py-3.5 px-4">Section 21(1)</td>
                                                        <td className="py-3.5 px-4 font-semibold text-red-800">4 Months from TM Journal</td>
                                                        <td className="py-3.5 px-4 font-bold text-red-600">STRICTLY NO (Non-Extendable)</td>
                                                        <td className="py-3.5 px-4 text-gray-900">Mark Proceeds to Registration</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Counter-Statement (Form TM-O)</td>
                                                        <td className="py-3.5 px-4">Section 21(2) / Rule 44</td>
                                                        <td className="py-3.5 px-4 font-semibold text-red-800">2 Months from Receipt of Notice</td>
                                                        <td className="py-3.5 px-4 font-bold text-red-600">STRICTLY NO (Non-Extendable)</td>
                                                        <td className="py-3.5 px-4 text-red-600">Deemed Abandoned by Law</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Evidence in Support of Opposition</td>
                                                        <td className="py-3.5 px-4">Rule 45</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">2 Months from Counter-Statement</td>
                                                        <td className="py-3.5 px-4 font-semibold text-amber-700">Strict Rule (Waiver required)</td>
                                                        <td className="py-3.5 px-4 text-red-600">Opposition Deemed Abandoned</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Evidence in Support of Application</td>
                                                        <td className="py-3.5 px-4">Rule 46</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">2 Months from Opponent Evidence</td>
                                                        <td className="py-3.5 px-4 font-semibold text-amber-700">Strict Rule (Waiver required)</td>
                                                        <td className="py-3.5 px-4 text-red-600">Application Deemed Abandoned</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Hearing Adjournment Request</td>
                                                        <td className="py-3.5 px-4">Rule 50</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">Min. 3 Days Before Hearing</td>
                                                        <td className="py-3.5 px-4 font-semibold text-emerald-700">Yes (Max 2 times, ≤30 days each)</td>
                                                        <td className="py-3.5 px-4 text-red-600">Order Passed Ex-Parte / Refused</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Trademark Renewal (Standard)</td>
                                                        <td className="py-3.5 px-4">Section 25(1) / Rule 57</td>
                                                        <td className="py-3.5 px-4 font-semibold text-emerald-800">Within 1 Year Prior to Expiry</td>
                                                        <td className="py-3.5 px-4 font-semibold text-emerald-700">Standard Filing Window</td>
                                                        <td className="py-3.5 px-4 text-amber-700">Enters Surcharge Period</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Renewal Grace Period (Surcharge)</td>
                                                        <td className="py-3.5 px-4">Section 25(3) / Rule 58</td>
                                                        <td className="py-3.5 px-4 font-semibold text-amber-800">Up to 6 Months After Expiry</td>
                                                        <td className="py-3.5 px-4 font-bold text-red-600">No (Statutory Grace Only)</td>
                                                        <td className="py-3.5 px-4 text-red-600">Mark Removed from Register</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Restoration of Expired Mark</td>
                                                        <td className="py-3.5 px-4">Section 25(4) / Rule 60</td>
                                                        <td className="py-3.5 px-4 font-semibold text-red-800">6 Months to 1 Year After Expiry</td>
                                                        <td className="py-3.5 px-4 font-semibold text-emerald-700">Discretionary (Form TM-R)</td>
                                                        <td className="py-3.5 px-4 text-red-600">Permanent Lapse of Trademark</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 3: SECTION 131 EXTENSION POWERS */}
                                    <section id="section-131-powers" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 131: Extension of Time Power
                                        </h2>
                                        <p className="mb-6">
                                            <strong>Section 131 of the Trade Marks Act, 1999</strong> is the foundational statutory provision granting the Registrar discretionary authority to extend procedural timelines. The text of Section 131 states:
                                        </p>

                                        <div className="bg-purple-50/60 border-l-4 border-[#6E5E93] p-5 rounded-r-xl my-6">
                                            <p className="text-sm font-semibold text-gray-900 italic m-0">
                                                &ldquo;131. Extension of time.—(1) If the Registrar is satisfied, on application made to him in the prescribed manner and on payment of the prescribed fee, that there is sufficient cause for extending the time for doing any act (not being a time expressly provided in this Act), whether the time so specified has expired or not, he may, subject to such conditions as he may think fit to impose, extend the time and notify the parties accordingly.&rdquo;
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Three critical legal principles emerge from Section 131(1):
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    1. &ldquo;Sufficient Cause&rdquo; Test
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    The applicant must substantiate genuine reasons—such as foreign documentary legalisation, collecting verified sales turnover affidavits, or medical emergencies—showing no willful negligence.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-2"></span>
                                                    2. &ldquo;Not Expressly Provided&rdquo;
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Section 131 cannot override time limits explicitly fixed in the primary Act (such as the 4-month opposition bar in Section 21(1) and the 2-month counter-statement bar in Section 21(2)).
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2"></span>
                                                    3. Discretionary Imposition
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    The Registrar may impose reasonable conditions, including costs or time caps (typically 30 additional days), and must notify opposing parties where inter-partes proceedings are ongoing.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: EXTENDABLE VS STRICT NON-EXTENDABLE DEADLINES */}
                                    <section id="extendable-vs-strict-deadlines" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Extendable vs Non-Extendable Deadlines
                                        </h2>
                                        <p className="mb-6">
                                            Indian trademark jurisprudence distinguishes between <em>substantive statutory time bars</em> (which cannot be extended by any administrative authority) and <em>procedural registry timelines</em> (which can be extended under Section 131 and Rule 109).
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
                                                <div className="flex items-center space-x-2 text-emerald-800 font-bold mb-3">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-emerald-600" />
                                                    <h3 className="text-base font-bold text-emerald-950 m-0">Extendable Timelines (Section 131)</h3>
                                                </div>
                                                <ul className="space-y-2 text-xs text-gray-700 leading-relaxed">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span><strong>Examination Report Reply:</strong> Additional 30 days grantable via Form TM-M under Rule 109.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span><strong>Formality Check Requirements:</strong> Curing discrepancies, Form TM-48 submission, or translation certificates.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span><strong>Hearing Adjournment:</strong> Postponement of show-cause or opposition hearing under Rule 50 (max 2 times).</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span><strong>Filing Power of Attorney (Form TM-48):</strong> Can be filed subsequent to application with an extension request. Learn more in our <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-emerald-800 font-bold underline">Form TM-48 legal guide</Link>.</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-red-50/60 p-6 rounded-2xl border border-red-200">
                                                <div className="flex items-center space-x-2 text-red-800 font-bold mb-3">
                                                    <FontAwesomeIcon icon={faBan} className="w-5 h-5 text-red-600" />
                                                    <h3 className="text-base font-bold text-red-950 m-0">Strictly Non-Extendable Deadlines</h3>
                                                </div>
                                                <ul className="space-y-2 text-xs text-gray-700 leading-relaxed">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faBan} className="w-3.5 h-3.5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span><strong>Section 21(1) Notice of Opposition:</strong> 4 months strictly non-extendable by the Registrar under any circumstance.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faBan} className="w-3.5 h-3.5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span><strong>Section 21(2) Counter-Statement:</strong> 2 months strictly non-extendable; failure results in immediate deemed abandonment.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faBan} className="w-3.5 h-3.5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span><strong>Rule 45 Opposition Evidence:</strong> 2 months to file affidavit or letter relying on facts stated in notice.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faBan} className="w-3.5 h-3.5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span><strong>Section 25(3) Renewal Surcharge Limit:</strong> 6-month grace window is a statutory cap that cannot be enlarged by Form TM-M.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: FORM TM-M EXTENSION FILING PROCEDURE */}
                                    <section id="form-tm-m-filing-steps" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-M Extension Filing Procedure
                                        </h2>
                                        <p className="mb-6">
                                            Under <strong>Rule 109 of the Trade Marks Rules, 2017</strong>, any application for an extension of time under Section 131 must be submitted electronically through the IP India Comprehensive E-Filing portal on <strong>Form TM-M</strong>. Follow this step-by-step workflow:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">1</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 1: Track Impending Expiration Date</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Determine the exact calendar date when your 30-day or hearing timeline expires based on the dispatch date or registry record.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">2</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 2: Draft Sufficient Cause Petition</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Prepare a formal legal application detailing the genuine factual impediment preventing compliance within the regular timeline.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">3</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 3: Access Form TM-M on IP India Gateway</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Log into your attorney or applicant digital signature portal, select Form TM-M, and select category &ldquo;Application for Extension of Time (Rule 109 / Section 131)&rdquo;.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">4</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 4: Pay Prescribed Government Fee</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Pay ₹900 (for Individuals, Startups, and MSMEs with valid Udyam certificates) or ₹1,800 (for Other Corporate Entities) via the Bharatkosh payment gateway.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">5</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 5: File Substantive Response Within Extended Window</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Once the extension is filed, submit your substantive reply, evidence affidavit, or documentation before the 30-day extended window lapses.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: OBJECTION REPLY: 30-DAY LIMIT & EXTENSION */}
                                    <section id="objection-reply-extension" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHourglassHalf} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Objection Reply: 30-Day Rule &amp; Extension
                                        </h2>
                                        <p className="mb-6">
                                            When the Trade Marks Registry issues an Examination Report citing objections under <strong>Section 9 (Absolute Grounds)</strong> or <strong>Section 11 (Relative Grounds)</strong>, Rule 33(1) mandates that the applicant file a formal written response within <strong>30 days</strong> from the date of receipt of the report.
                                        </p>
                                        <p className="mb-6">
                                            In practice, brand owners often require additional time to:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mb-6">
                                            <li>Execute and notarize a comprehensive <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Trademark User Affidavit under Rule 25</Link> establishing prior continuous commercial use.</li>
                                            <li>Obtain a formal <Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Trademark Consent Letter or Coexistence Agreement</Link> from a cited proprietor.</li>
                                            <li>Collect statutory consent affidavits under <Link href="/section-14-trade-marks-act-consent-living-deceased-person" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 14 for names of living or deceased persons</Link>.</li>
                                            <li>Secure legalized foreign registration certificates for claiming international priority.</li>
                                        </ul>
                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                                            <p className="text-sm font-bold text-amber-900 m-0">
                                                Crucial Practice Tip: File Form TM-M BEFORE the 30-Day Expiry Date
                                            </p>
                                            <p className="text-xs text-amber-800 m-0 mt-1">
                                                Although Section 131 allows an extension application &ldquo;whether the time so specified has expired or not&rdquo;, the IP India online system automatically triggers abandonment flags upon the 31st day. Filing Form TM-M prior to day 30 prevents automated algorithmic abandonment and preserves the application in &ldquo;Objected&rdquo; status.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 7: OPPOSITION DEADLINES: 4-MONTH STRICT BAR */}
                                    <section id="opposition-deadlines-bar" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Opposition: 4-Month Strict Statutory Bar
                                        </h2>
                                        <p className="mb-6">
                                            Under <strong>Section 21(1) of the Trade Marks Act, 1999</strong>, any person may give notice in writing on Form TM-O to the Registrar of opposition to the registration of an advertised mark <em>&ldquo;within four months from the date of the advertisement or re-advertisement of an application for registration&rdquo;</em>.
                                        </p>
                                        <p className="mb-6">
                                            Historically under the 1958 Act and early 2002 rules, an opponent could seek an extension of 1 month beyond the initial 3 months upon showing good cause. However, the <strong>Trade Marks Rules, 2017</strong> completely eliminated the extendable 1-month provision and established a single, fixed 4-month statutory window.
                                        </p>
                                        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 my-6">
                                            <h3 className="text-base font-bold text-gray-900 mb-2">Landmark Judicial Precedents on Non-Extendability of Section 21(1)</h3>
                                            <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                The Delhi High Court, Intellectual Property Appellate Board (IPAB), and various High Courts have repeatedly held that the period of 4 months under Section 21(1) is a <strong>mandatory statutory period of limitation</strong>.
                                            </p>
                                            <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                In <em>Delta Dental Plan Association v. Registrar of Trade Marks</em> and <em>Sunrider Corporation</em>, the courts ruled that the Registrar lacks jurisdiction under Section 131 to entertain any Notice of Opposition received even a single day after the expiry of the 4-month window. If you miss this deadline, your sole legal remedy is to wait for registration and file a <Link href="/how-to-file-trademark-rectification-india" className="text-[rgb(110,94,147)] hover:underline font-bold">Trademark Rectification / Cancellation petition under Section 57</Link>.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 8: HEARING ADJOURNMENTS UNDER RULE 50 */}
                                    <section id="hearing-adjournments-rule-50" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCalendarDays} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Hearing Adjournments under Rule 50
                                        </h2>
                                        <p className="mb-6">
                                            When an application is scheduled for a show-cause hearing (before the Hearing Officer) or an inter-partes opposition hearing via video conferencing, either party can seek an adjournment under <strong>Rule 50 of the Trade Marks Rules, 2017</strong>.
                                        </p>
                                        <p className="mb-6">
                                            The strict conditions governing hearing adjournments include:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <p className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">Timing Rule</p>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">The Form TM-M requesting adjournment must be filed at least <strong>3 days prior</strong> to the scheduled hearing date.</p>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <p className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">Adjournment Cap</p>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">No party shall be given more than <strong>2 adjournments</strong> throughout the entire proceeding.</p>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <p className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">Duration Cap</p>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Each adjournment granted by the Hearing Officer shall not exceed <strong>30 days</strong>.</p>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <p className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">Fee Obligation</p>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Official Form TM-M fee of ₹900 (MSME/Individual) or ₹1,800 (Large Entity) must accompany the request.</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700">
                                            Learn the full step-by-step hearing preparation protocol in our detailed guide on <Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark hearing video conferencing procedure</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 9: RENEWAL & RESTORATION TIMELINES */}
                                    <section id="renewal-restoration-deadlines" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRotateRight} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Renewal &amp; Restoration Timelines
                                        </h2>
                                        <p className="mb-6">
                                            Under <strong>Section 25 of the Trade Marks Act, 1999</strong>, trademark registrations are valid for a duration of 10 years from the date of application, renewable indefinitely in successive 10-year periods. The three distinct renewal phases are:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-sm font-bold text-emerald-950 mb-1">Phase 1: Standard Renewal Window (1 Year Before Expiry)</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    The proprietor can file <strong>Form TM-R</strong> at any time within 1 year before the expiration of the last registration. Standard e-filing fee is ₹9,000 per class (or ₹4,500 if applicable) without any penalty. See our <Link href="/how-to-renew-a-registered-trademark-in-india" className="text-emerald-800 font-bold underline">trademark renewal guide</Link>.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-3 bg-amber-50/40 rounded-r-xl">
                                                <h3 className="text-sm font-bold text-amber-950 mb-1">Phase 2: Grace Period Renewal with Surcharge (0 to 6 Months After Expiry)</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    Under Section 25(3) and Rule 58, if the mark is not renewed before expiry, the proprietor has a statutory grace period of 6 months to file Form TM-R along with the prescribed late renewal surcharge.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-sm font-bold text-red-950 mb-1">Phase 3: Restoration &amp; Renewal (6 Months to 1 Year After Expiry)</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    Under Section 25(4) and Rule 60, if the mark has been removed from the register for non-payment of renewal fees, the proprietor can apply for <strong>Restoration and Renewal</strong> on Form TM-R within 1 year from the expiration date, supported by an affidavit demonstrating valid reasons for the lapse. Learn more in our <Link href="/how-to-restore-expired-trademark" className="text-red-800 font-bold underline">expired trademark restoration guide</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: REMEDIES FOR ABANDONED MARKS */}
                                    <section id="remedies-abandoned-marks" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Remedies for Abandoned Trademark Marks
                                        </h2>
                                        <p className="mb-6">
                                            If your trademark application has been marked as &ldquo;Abandoned&rdquo; due to a missed deadline, all hope is not lost. The following legal remedies exist depending on why the deadline was missed:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    1. Registry Restoration Petition
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    If the examination report or hearing notice was never served on the applicant or agent of record, file a Petition under Section 131 / Rule 109 on Form TM-M supported by an affidavit proving non-receipt and breach of natural justice principles.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-2"></span>
                                                    2. Review Petition (Sec. 127)
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Under Section 127(c) and Rule 119, file a formal Application for Review of the Registrar&apos;s decision within 30 days of the abandonment order, citing errors apparent on the face of the record.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2"></span>
                                                    3. High Court Writ Petition
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    In landmark cases like <em>Tata Motors Ltd. v. Registrar of Trade Marks</em>, the Delhi High Court set aside arbitrary online abandonment orders where the Registry failed to provide a mandatory personal hearing under Section 18(4).
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: DEADLINE ACTION CHECKLIST */}
                                    <section id="deadline-action-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Deadline Compliance Action Checklist
                                        </h2>
                                        <p className="mb-6">
                                            Protect your brand from accidental abandonment by executing this rigorous statutory compliance checklist:
                                        </p>

                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4 not-prose my-8">
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Implement Automated Docketing Systems</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Track every application status weekly to catch examination reports and journal publications the moment they are generated.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Verify Attorney &amp; Correspondence Email Addresses</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Ensure your Form TM-48 contains active email addresses so notices sent via IP India automated servers are not lost to spam filters. If you need to update counsel, read <Link href="/how-to-change-trademark-attorney-in-india" className="text-[#6E5E93] font-bold underline">how to change trademark attorney</Link>.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">File TM-M Extension on Day 20-25</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Never wait until Day 30 to file an extension request. Server timeouts or payment gateway reconciliation delays can result in irreparable abandonment.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Audit 10-Year Renewal Calendars</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Initiate renewal instructions 11 months before the 10-year expiry to avoid the need for surcharges or high-risk restoration proceedings.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <p className="mb-6">
                                            Find definitive legal answers to the most common queries regarding trademark deadlines, Section 131 extensions, and abandonment rules in India:
                                        </p>

                                        <div className="space-y-4 not-prose my-8">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                    <h3 className="text-base font-bold text-gray-900 mb-2">
                                                        {index + 1}. {faq.question}
                                                    </h3>
                                                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed m-0">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 13: STRATEGIC LITIGATION ADVICE */}
                                    <section id="strategic-litigation-advice" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Strategic Advice from IP Litigators
                                        </h2>
                                        <p className="mb-6">
                                            Statutory deadlines in Indian trademark law are unyielding guardrails designed to maintain registry integrity. While <strong>Section 131</strong> offers vital relief for procedural bottlenecks, relying on last-minute extensions carries substantial risk. A single day of delay in a Section 21 opposition or Section 21(2) counter-statement permanently forfeits your brand&apos;s statutory protections.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, our senior IP litigators and registered trademark attorneys manage proactive docketing, execute rapid Form TM-M extension petitions, and successfully contest arbitrary abandonment orders before the Registrar and High Courts nationwide.
                                        </p>

                                        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#0C002B] via-[#1A0B3B] to-[#2E1065] p-8 text-white shadow-2xl relative overflow-hidden not-prose">
                                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                                                    Facing an Impending Trademark Deadline?
                                                </h3>
                                                <p className="text-sm text-purple-100/90 leading-relaxed mb-8">
                                                    Don&apos;t let procedural delays destroy your brand equity. Speak with our senior trademark attorneys to file urgent Form TM-M extension requests, draft solid objection replies, or restore abandoned applications.
                                                </p>
                                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                                    <Link
                                                        href="/contact-us"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-white px-8 text-base font-bold text-[#0C002B] shadow-lg transition-all duration-300 hover:bg-gray-100 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Attorney</span>
                                                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 text-[#0C002B]" />
                                                    </Link>
                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>
                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered IP Advocates • Section 131 Extension Filing • Hearing Representation • Restoration Petitions
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in trademark prosecution timelines, Section 131 extension filings, opposition proceedings, and high-stakes registry restoration petitions across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Urgent Deadline Relief</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Is your trademark reply or hearing due in less than 72 hours? File Section 131 extension on Form TM-M immediately.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        File Extension Form TM-M
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Exam Report Reply</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-opposed-what-happens-next-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Opposition Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-abandoned-how-to-restore" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Restore Abandoned TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-hearing-video-conferencing-procedure-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCalendarDays} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Hearing Procedure</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48 Rules</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-change-trademark-attorney-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Change TM Attorney</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Renewal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-restore-expired-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Restore Expired Mark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM User Affidavit</span>
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
