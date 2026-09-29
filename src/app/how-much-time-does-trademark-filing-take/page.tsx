import { validateAndNormalizeDescription, validateAndNormalizeTitle } from '@/lib/seo-utils';
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
    faRocket,
    faGlobe,
    faClock,
    faHourglassHalf,
    faBolt,
    faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: validateAndNormalizeTitle("How Long Does Trademark Filing Take in India?", "app/how-much-time-does-trademark-filing-take/page.tsx"),
    description: validateAndNormalizeDescription(
        "How much time does trademark filing take in India? Explore the complete timeline from 24-hr e-filing to examination, publication, and registration.",
        "app/how-much-time-does-trademark-filing-take/page.tsx"
    ),
    keywords: [
        "how much time does trademark filing take",
        "trademark filing timeline india",
        "time taken for trademark registration",
        "form TM-A filing time",
        "instant tm symbol timeline",
        "fast track trademark registration time",
        "trademark examination duration india",
        "trademark journal publication period",
        "trademark processing time ip india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-much-time-does-trademark-filing-take",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How Long Does Trademark Filing Take in India?",
        description: "How much time does trademark filing take in India? Explore the complete timeline from 24-hr e-filing to examination, publication, and registration.",
        url: "https://www.iprkaro.com/how-much-time-does-trademark-filing-take",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-much-time-does-trademark-filing-take.png",
                width: 1200,
                height: 630,
                alt: "Trademark Filing Timeline and Processing Stages in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How Long Does Trademark Filing Take in India?",
        description: "How much time does trademark filing take in India? Explore the complete timeline from 24-hr e-filing to examination, publication, and registration.",
        images: ["https://www.iprkaro.com/images/og/how-much-time-does-trademark-filing-take.jpg"],
    }
};

const faqs = [
    {
        question: "How long does it take to file a trademark application online?",
        answer: "Filing a trademark application online on Form TM-A typically takes between 1 to 24 hours once your trademark clearance search is complete and documents such as the Power of Attorney (Form TM-48) and user affidavit are signed. As soon as the government fee is paid on the IP India portal, an official application number is generated immediately, entitling you to use the ™ symbol right away."
    },
    {
        question: "How soon can I use the TM symbol after filing?",
        answer: "You can legally use the ™ symbol immediately upon generating your official trademark application number and electronic filing receipt from the Trade Marks Registry. The ™ designation notifies the public and competitors that an application is pending. However, the registered ® symbol can only be displayed once the final Registration Certificate is sealed and issued."
    },
    {
        question: "What is the total time required for complete trademark registration?",
        answer: "In an un-opposed and straightforward case without substantive objections, full trademark registration in India takes approximately 6 to 12 months from the initial filing date. If the application faces examination objections under Section 9 or 11, or third-party opposition under Section 21, the overall timeline can extend to 18 to 24 months or more."
    },
    {
        question: "Can I expedite the trademark registration process in India?",
        answer: "Yes. Under Rule 34 of the Trade Marks Rules 2017, eligible applicants can request expedited examination by submitting Form TM-M with the prescribed statutory fee. Expedited processing accelerates examination and show-cause hearings, reducing the time required to secure publication and registration to roughly 3 to 6 months in non-contested matters."
    },
    {
        question: "How long does the trademark examination stage take?",
        answer: "Under standard processing, the Trade Marks Registry conducts examination within 1 to 3 months of filing. An examination report is subsequently issued indicating whether the mark is accepted unconditionally, accepted with conditions, or objected to on relative or absolute grounds under Sections 9 and 11 of the Trade Marks Act."
    },
    {
        question: "How long does the trademark journal publication period last?",
        answer: "Once accepted, the trademark is published in the weekly Trade Marks Journal. Under Section 21(1) of the Trade Marks Act 1999, the statutory opposition window remains open for exactly 4 months from the publication date. This 4-month period cannot be shortened or extended by the Registrar, providing third parties statutory notice to contest registration."
    },
    {
        question: "What causes the biggest delays in trademark processing?",
        answer: "The most common delays stem from examination objections under Section 9 (lack of distinctiveness) or Section 11 (similarity to earlier marks), procedural discrepancies on user dates, incorrect Nice classification, and third-party opposition proceedings on Form TM-O. Scheduling backlogs for formal show-cause hearings can also prolong registration timelines."
    },
    {
        question: "How long does it take to receive the Registration Certificate once approved?",
        answer: "If no third-party opposition is filed within the 4-month journal advertisement window, the Trade Marks Registry typically generates and issues the digital Trademark Registration Certificate within 2 to 4 weeks. Once the certificate is issued, the registration takes retroactive effect from the original filing date."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "e-filing-duration", title: "24-Hour E-Filing" },
    { id: "stage-by-stage", title: "Registration Stages" },
    { id: "fast-track", title: "Expedited Options" },
    { id: "delay-factors", title: "Influencing Factors" },
    { id: "timeline-table", title: "Timeline Table" },
    { id: "prevention-tips", title: "Preventing Delays" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function TrademarkFilingTimePage() {
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
        "headline": "How Much Time Does Trademark Filing Take in India? Complete 2026 Timeline",
        "description": "How much time does trademark filing take in India? Explore the complete timeline from 24-hr e-filing to examination, publication, and registration.",
        "image": "https://www.iprkaro.com/images/og/how-much-time-does-trademark-filing-take.png",
        "datePublished": "2026-09-25T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/how-much-time-does-trademark-filing-take"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How Much Time Does Trademark Filing Take in India? | IPR Karo",
        "url": "https://www.iprkaro.com/how-much-time-does-trademark-filing-take",
        "description": "How much time does trademark filing take in India? Explore the complete timeline from 24-hr e-filing to examination, publication, and registration.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-much-time-does-trademark-filing-take#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-much-time-does-trademark-filing-take#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Filing Time", "item": "https://www.iprkaro.com/how-much-time-does-trademark-filing-take" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Stages of Indian Trademark Filing and Processing Timeline",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Comprehensive Availability Search and Class Selection (1–2 Days)" },
            { "@type": "ListItem", "position": 2, "name": "Online Form TM-A Drafting and E-Filing Receipt Issuance (Within 24 Hours)" },
            { "@type": "ListItem", "position": 3, "name": "Formalities Check and Registry Examination Report (1–3 Months)" },
            { "@type": "ListItem", "position": 4, "name": "Reply to Examination Objection or Show-Cause Hearing (30 Days to 3 Months)" },
            { "@type": "ListItem", "position": 5, "name": "Publication in the Trade Marks Journal (Statutory 4-Month Opposition Window)" },
            { "@type": "ListItem", "position": 6, "name": "Final Registration Certificate Issuance (2–4 Weeks Post-Opposition)" }
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
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">IP India Chronology Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How Much Time Does <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Filing Take</span> in India?
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Understanding the exact chronology of securing a trademark in India helps entrepreneurs schedule product launches, guard investments, and assert brand exclusivity. While submitting Form TM-A online takes less than 24 hours to secure your application number and immediate ™ status, complete end-to-end registration generally requires 6 to 12 months for smooth applications, or 18 to 24 months if objections or oppositions arise. Explore this complete timeline breakdown, stage-wise milestones, fast-track options, and tactical steps to fast-track your approval.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 10 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Your Trademark Today <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/how-much-time-does-trademark-filing-take.png"
                                    alt="Trademark Filing Timeline and Processing Stages in India"
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
                        { label: "Trademark Filing Time", href: "/how-much-time-does-trademark-filing-take" }
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
                            {/* MOBILE TABLE OF CONTENTS - COLLAPSIBLE ACCORDION (NO OVERLAPPING) */}
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
                                            <FontAwesomeIcon icon={faHourglassHalf} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Filing Time
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Filing a trademark application in India takes less than 24 hours online on Form TM-A, granting immediate entitlement to use the ™ symbol once the official filing receipt is issued. However, achieving complete legal registration and receiving the registered ® certificate typically requires 6 to 12 months for smooth applications, or 18 to 24 months if objections or third-party oppositions occur. Eligible applicants can expedite the examination process to 3 to 6 months under Rule 34 by paying the prescribed government fees.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            When brand owners ask &ldquo;how much time does trademark filing take,&rdquo; they are usually asking two distinct questions: First, how quickly can an enterprise legally establish an official filing date and start displaying the ™ sign? Second, how long does the statutory review cycle take until the Trade Marks Registry seals the mark with full ® registration status?
                                        </p>
                                        <p className="mb-6">
                                            The initial filing step itself is fast and streamlined through the electronic gateway of the Controller General of Patents, Designs and Trade Marks (CGPDTM). With proper preparation, professional attorneys can perform clearance searches, draft documentation, and remit statutory e-filing fees within a single business day. To explore the broader procedural milestones, review our comprehensive walkthrough on <Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration processes</Link>.
                                        </p>
                                        <p className="mb-6">
                                            Conversely, the journey from pending application to definitive registration is a structured administrative and quasi-judicial procedure governed by the Trade Marks Act, 1999 and the Trade Marks Rules, 2017. Because intellectual property grants exclusive commercial monopolies, the registry enforces mandatory statutory windows for verification, public advertisement, and potential third-party objections.
                                        </p>
                                    </section>

                                    {/* SECTION 2: 24-HOUR E-FILING */}
                                    <section id="e-filing-duration" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBolt} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Preparation and 24-Hour E-Filing
                                        </h2>
                                        <p className="mb-6">
                                            The preliminary phase—from selecting your mark to securing your formal application acknowledgment—can be finished within hours when executed systematically. Here is the operational timeline for the filing stage:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Clearance Search (2–6 Hours)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Before filling out forms, comprehensive search across phonetic, visual, and semantic registers must be performed on the IP India database. Proper preliminary clearance prevents instant refusal. Perform a detailed scan using our <Link href="/how-to-search-for-existing-trademark" className="text-[#6E5E93] hover:underline font-semibold">trademark search guide</Link>.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Classification Audit (1–2 Hours)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Identifying the precise Nice Classification classes (Classes 1–34 for goods and Classes 35–45 for services) is vital. Drafting accurate specifications prevents classification objections. Check your industry segments using our <Link href="/trademark-class-finder" className="text-[#6E5E93] hover:underline font-semibold">trademark class finder</Link>.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Document Execution (2–4 Hours)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Gathering the applicant KYC details, executing the Power of Attorney on Form TM-48, and drafting a User Affidavit (if claiming prior commercial use with documentary invoices) ensures zero procedural deficiencies.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    E-Filing &amp; Receipt (Immediate)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Submitting Form TM-A on the IP India e-filing gateway with a Class 3 Digital Signature Certificate (DSC) generates your official filing number and timestamped receipt instantaneously upon fee clearance.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            The moment the e-receipt is downloaded, the applicant acquires a permanent statutory priority date. This date anchors ownership rights across India and provides the foundation for international expansion under the Madrid Protocol.
                                        </p>
                                    </section>

                                    {/* SECTION 3: STAGE-BY-STAGE TIMELINE */}
                                    <section id="stage-by-stage" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Stage-by-Stage Registration Timeline
                                        </h2>
                                        <p className="mb-6">
                                            Once Form TM-A is safely lodged, the application progresses through distinct statutory checkpoints. Knowing what happens at each milestone eliminates uncertainty and allows you to track progress accurately on the <Link href="/trademark-application-status" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark application status</Link> portal.
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-5 items-start">
                                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-[#6E5E93] rounded-xl flex items-center justify-center font-black text-lg">
                                                    01
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                        Formalities Check Pass (10 to 30 Days)
                                                    </h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        The registry verifies administrative compliance: correct applicant name, valid legal address, proper Power of Attorney on stamp paper, and accurate classification of goods or services. If all technical criteria are met, the status updates to &ldquo;Formalities Chk Pass&rdquo;.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-5 items-start">
                                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-[#6E5E93] rounded-xl flex items-center justify-center font-black text-lg">
                                                    02
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                        Substantive Examination (1 to 3 Months)
                                                    </h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        An allocated examiner reviews the mark under Section 9 (distinctiveness, generic terms, deceptive matter) and Section 11 (conflict with prior registered or pending marks). The examiner either accepts the mark or issues a formal Examination Report.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-5 items-start">
                                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-[#6E5E93] rounded-xl flex items-center justify-center font-black text-lg">
                                                    03
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                        Objection Response &amp; Show Cause Hearing (1 to 3 Months)
                                                    </h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        If an examination report raises concerns, the applicant must file a formal written rebuttal within 30 days. To prepare an effective submission, consult our guide on <Link href="/how-to-respond-to-trademark-examination-report" className="text-[#6E5E93] hover:underline font-semibold">responding to trademark examination reports</Link>. If the reply is not accepted on paper, an oral show-cause hearing before the Hearing Officer is scheduled.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-5 items-start">
                                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-[#6E5E93] rounded-xl flex items-center justify-center font-black text-lg">
                                                    04
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                        Trade Marks Journal Advertisement (Statutory 4 Months)
                                                    </h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        Once accepted, the trademark is published in the weekly Trade Marks Journal. Under Section 21 of the Trade Marks Act 1999, the general public and competitors have a mandatory, non-extendable window of exactly 4 months to oppose the registration by filing Form TM-O.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-5 items-start">
                                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-[#6E5E93] rounded-xl flex items-center justify-center font-black text-lg">
                                                    05
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                        Certificate Issuance &amp; Sealing (2 to 4 Weeks)
                                                    </h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        If no opposition notice is submitted during the 4-month advertisement period, the registry generates the official Trademark Registration Certificate bearing the seal of the Trade Marks Registry. The proprietor can now legitimately affix the coveted &reg; symbol.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: FAST-TRACK EXPEDITED FILING */}
                                    <section id="fast-track" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Standard vs Expedited Fast-Track Filing
                                        </h2>
                                        <p className="mb-6">
                                            For commercial ventures preparing funding rounds, initial public offerings, international licensing, or immediate anti-counterfeiting enforcement, waiting 12 to 18 months may prove impractical. The Trade Marks Rules, 2017 offer an official fast-track route under Rule 34.
                                        </p>
                                        <p className="mb-6">
                                            Under Rule 34, an applicant can request expedited examination by submitting Form TM-M accompanied by statutory fast-track fees. The Registrar is obligated to issue the examination report within roughly 30 days of receiving the request. Detailed parameters and qualification criteria can be checked in our analysis of <Link href="/are-there-any-fast-track-options-for-trademark-registration-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">fast track trademark registration options</Link>.
                                        </p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                                <thead>
                                                    <tr className="bg-gray-100 border-b border-gray-200 text-gray-900 text-xs uppercase tracking-wider">
                                                        <th className="p-4 font-bold">Feature</th>
                                                        <th className="p-4 font-bold">Standard Route (Rule 24)</th>
                                                        <th className="p-4 font-bold">Expedited Route (Rule 34)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Application Form</td>
                                                        <td className="p-4">Form TM-A</td>
                                                        <td className="p-4">Form TM-A + Form TM-M</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Examination Speed</td>
                                                        <td className="p-4">1 to 3 Months</td>
                                                        <td className="p-4">Within 30 Days</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Hearing Scheduling</td>
                                                        <td className="p-4">Standard Registry Roster</td>
                                                        <td className="p-4">Priority Hearing Allocation</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Journal Publication Period</td>
                                                        <td className="p-4">Mandatory 4 Months</td>
                                                        <td className="p-4">Mandatory 4 Months (Statutory)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Total Time to Certificate</td>
                                                        <td className="p-4">6 to 12 Months</td>
                                                        <td className="p-4">3 to 6 Months (Un-opposed)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-6">
                                            Crucially, while Rule 34 dramatically accelerates registry review and hearing scheduling, it cannot legally curtail the mandatory 4-month public opposition period under Section 21. Third-party statutory rights to notice remain preserved under constitutional due process.
                                        </p>
                                    </section>

                                    {/* SECTION 5: FACTORS INFLUENCING SPEED */}
                                    <section id="delay-factors" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Factors Influencing Processing Speed
                                        </h2>
                                        <p className="mb-6">
                                            The wide variance between a 6-month registration and a 24-month battle is rarely accidental. Several legal, administrative, and strategic variables dictate how swiftly an application navigates the registry:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2.5"></span>
                                                    Distinctiveness of the Mark
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Invented words, arbitrary combinations, and distinctive visual insignias pass examination smoothly. In contrast, descriptive, geographical, or praise-laden terms trigger Section 9 objections, requiring detailed legal replies and evidence of acquired distinctiveness.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2.5"></span>
                                                    Prior Conflicting Trademarks
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    If the examiner identifies phonetically or conceptually identical pending marks under Section 11, the process pauses. Overcoming citation citations requires distinguishing business lines or seeking co-existence agreements, extending timelines by several months.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-full mr-2.5"></span>
                                                    Jurisdiction &amp; Registry Load
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    India maintains five regional Trade Marks Registries in Mumbai, Delhi, Kolkata, Chennai, and Ahmedabad. Workload distribution, pending hearing backlogs, and examiner availability can cause variance across jurisdictional branches.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2.5"></span>
                                                    Third-Party Oppositions
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    If a competitor files Form TM-O during the 4-month advertisement stage, the matter enters quasi-judicial proceedings involving counter-statements, evidence under Rules 45–47, and formal cross-hearings, taking 18 to 36 months to adjudicate.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: COMPARATIVE TIMELINE SUMMARY */}
                                    <section id="timeline-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Timeline Summary and Registry Stages
                                        </h2>
                                        <p className="mb-6">
                                            Here is an at-a-glance reference breakdown summarizing the entire chronology of Indian trademark filing from initiation to registration certificate sealing:
                                        </p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-gray-200">
                                                <thead>
                                                    <tr className="bg-gray-100 border-b border-gray-200 text-gray-900 text-xs uppercase tracking-wider">
                                                        <th className="p-4 font-bold">Filing Stage</th>
                                                        <th className="p-4 font-bold">Registry Status</th>
                                                        <th className="p-4 font-bold">Standard Time</th>
                                                        <th className="p-4 font-bold">Expedited Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Application E-Filing</td>
                                                        <td className="p-4">New Application / Send to Vienna</td>
                                                        <td className="p-4">Within 24 Hours</td>
                                                        <td className="p-4">Within 24 Hours</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Formalities Audit</td>
                                                        <td className="p-4">Formalities Chk Pass</td>
                                                        <td className="p-4">10 to 30 Days</td>
                                                        <td className="p-4">5 to 10 Days</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Examination Report</td>
                                                        <td className="p-4">Marked for Exam / Objected</td>
                                                        <td className="p-4">1 to 3 Months</td>
                                                        <td className="p-4">Within 30 Days</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Objection Resolution</td>
                                                        <td className="p-4">Ready for Show Cause / Hearing</td>
                                                        <td className="p-4">1 to 4 Months</td>
                                                        <td className="p-4">15 to 30 Days</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Journal Publication</td>
                                                        <td className="p-4">Accepted &amp; Advertised</td>
                                                        <td className="p-4">4 Months (Statutory)</td>
                                                        <td className="p-4">4 Months (Statutory)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-semibold text-gray-900">Certificate Generation</td>
                                                        <td className="p-4">Registered</td>
                                                        <td className="p-4">2 to 4 Weeks</td>
                                                        <td className="p-4">1 to 2 Weeks</td>
                                                    </tr>
                                                    <tr className="bg-indigo-50/50 font-bold text-gray-900">
                                                        <td className="p-4">Total Cumulative Time</td>
                                                        <td className="p-4">Filing to Registration</td>
                                                        <td className="p-4">6 to 12 Months</td>
                                                        <td className="p-4">3 to 6 Months</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-6">
                                            Once issued, remember that your trademark registration remains valid for 10 years calculated from the application filing date. Keep your brand secure over decades by reviewing our decennial guide on <Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">how to renew a trademark</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 7: PREVENTING DELAYS */}
                                    <section id="prevention-tips" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            How to Avoid Trademark Filing Delays
                                        </h2>
                                        <p className="mb-6">
                                            Unnecessary procedural roadblocks consume valuable months. Proactive founders and corporate legal counsels adopt specific operational measures to ensure rapid and hitch-free registration:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Conduct Pre-Filing Clearance Searches</h3>
                                                    <p className="text-sm text-gray-600 m-0 leading-relaxed">
                                                        Never file blindly. A meticulous multi-class search identifying identical, phonetic, and conceptually overlapping marks prevents automatic Section 11 citations that stall proceedings for 6 to 12 months.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Draft Precise Specifications of Goods &amp; Services</h3>
                                                    <p className="text-sm text-gray-600 m-0 leading-relaxed">
                                                        Vague, overly expansive item descriptions trigger classification objections. Use approved Nice Classification terminology and avoid vague descriptions like &ldquo;all related goods&rdquo;.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Verify User Claim Dates and Affidavits</h3>
                                                    <p className="text-sm text-gray-600 m-0 leading-relaxed">
                                                        If claiming prior use before the application date, submit a notarized User Affidavit accompanied by dated invoices and tax receipts. If commercial use cannot be conclusively proven, file as &ldquo;Proposed to be used&rdquo; to avoid evidence deficiency notices.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-base mb-1">Monitor Application Status Bi-Weekly</h3>
                                                    <p className="text-sm text-gray-600 m-0 leading-relaxed">
                                                        Statutory deadlines to respond to examination reports (30 days) and opposition notices are rigid. Routine status tracking guarantees you never miss a compliance window, preventing the mark from being marked &ldquo;Abandoned&rdquo;.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6 not-prose">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                                                        <span className="text-[#6E5E93] mr-2">Q:</span>
                                                        <span>{faq.question}</span>
                                                    </h3>
                                                    <p className="text-sm text-gray-700 leading-relaxed pl-6 m-0">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 9: FINAL TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Strategic Advice for Brand Proprietors
                                        </h2>
                                        <p className="mb-6">
                                            Securing a registered trademark is not a passive waiting game—it is an active legal process. While the immediate 24-hour filing confers priority and TM authorization, protecting the mark through the subsequent 6 to 12 months requires diligent docketing, proactive legal replies, and ongoing status surveillance.
                                        </p>
                                        <p className="mb-6">
                                            Working with experienced intellectual property attorneys ensures your filing is fortified against Section 9 and Section 11 rejections from day one. Take decisive action today to safeguard your commercial legacy across India.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Trademark Filing
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    File Your Trademark in 24 Hours
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Partner with verified trademark attorneys to file Form TM-A with zero errors. Get instant ™ symbol entitlement, priority date protection, and ongoing registry docket tracking.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>File Trademark Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified IP Advocates • Same-Day Form TM-A Filing • Transparent Government Invoicing
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            {/* About Author */}
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h3>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, trademark filing compliance, and timeline management under the Trade Marks Act, 1999. He helps founders safeguard commercial assets with minimal delay.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Start Filing Today</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Secure your priority date and get instant ™ symbol authorization with registered IP attorneys.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        E-File Form TM-A
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faListUl} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Filing Steps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Check Status</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/are-there-any-fast-track-options-for-trademark-registration-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRocket} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Fast Track TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-search-for-existing-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Class Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Exam Reply</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCalendarCheck} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Renewal</span>
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
