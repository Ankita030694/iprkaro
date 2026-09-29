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
    faMagnifyingGlass,
    faLightbulb,
    faShieldHalved,
    faCheck,
    faPhone,
    faRocket
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Register a Trademark for My Startup | IPR Karo",
    description: validateAndNormalizeDescription(
        "Register a trademark for your startup in India. Guide on DPIIT 50% fee rebate, Form TM-A filing, fast-track examination, and brand security.",
        "app/how-to-register-a-trademark-for-my-startup/page.tsx"
    ),
    keywords: [
        "how to register a trademark for my startup",
        "startup trademark registration India",
        "trademark registration for startups",
        "DPIIT startup trademark fee discount",
        "fast track trademark examination startup",
        "Form TM-A filing for startups",
        "trademark classes for tech startups",
        "protect startup brand name India",
        "SIPP scheme trademark"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-register-a-trademark-for-my-startup",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How to Register a Trademark for My Startup | IPR Karo",
        description: "Register a trademark for your startup in India. Guide on DPIIT 50% fee rebate, Form TM-A filing, fast-track examination, and brand security.",
        url: "https://www.iprkaro.com/how-to-register-a-trademark-for-my-startup",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-register-a-trademark-for-my-startup.png",
                width: 1200,
                height: 630,
                alt: "How to Register a Trademark for My Startup in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Register a Trademark for My Startup | IPR Karo",
        description: "Register a trademark for your startup in India. Guide on DPIIT 50% fee rebate, Form TM-A filing, fast-track examination, and brand security.",
        images: ["https://www.iprkaro.com/images/og/how-to-register-a-trademark-for-my-startup.jpg"],
    }
};

const faqs = [
    {
        question: "Can an early-stage startup register a trademark before incorporation?",
        answer: "Yes. Founders can file Form TM-A in their individual names as proprietors on a 'Proposed to be Used' basis before incorporating a Private Limited Company or LLP. Once incorporated, the pending application or registered mark can be formally assigned to the corporate entity via Form TM-P with a nominal stamp duty."
    },
    {
        question: "What government fee concession do DPIIT-recognized startups receive?",
        answer: "Under Rule 11 of the Trade Marks Rules, 2017, recognized startups with a valid DPIIT Certificate of Recognition and MSMEs with Udyam registration receive a 50% discount on official government filing fees, paying ₹4,500 per class for online e-filing instead of the standard ₹9,000 corporate fee."
    },
    {
        question: "How does fast-track examination work for startups in India?",
        answer: "Under Rule 34 of the Trade Marks Rules, 2017, DPIIT-recognized startups are eligible for expedited examination. By submitting an expedited request along with the prescribed fee, the registry issues the examination report within a few working weeks rather than the typical 6 to 12 months."
    },
    {
        question: "Which trademark classes should a tech or SaaS startup file under?",
        answer: "Tech and SaaS startups typically file in multiple classes: Class 9 for downloadable software, mobile apps, and digital algorithms. Class 42 for cloud computing, software as a service (SaaS), and technical consulting. And Class 35 if running an e-commerce platform, marketplace, or advertising portal."
    },
    {
        question: "When can a startup begin using the TM and registered symbols?",
        answer: "A startup can display the TM symbol immediately after e-filing Form TM-A and receiving the official government application number. The registered circle-R symbol can only be legally displayed after the Trade Marks Registry officially issues the final Trademark Registration Certificate."
    },
    {
        question: "Why do venture capital investors insist on trademark registration during due diligence?",
        answer: "Investors perform IP due diligence to confirm that brand equity, domain names, and core technologies are legally owned by the company rather than individual founders or vulnerable to third-party infringement claims. An unregistered brand poses severe legal and valuation risks for fundraising rounds."
    },
    {
        question: "What is the SIPP scheme for startup trademark registration?",
        answer: "The Scheme for Facilitating Start-Ups and Intellectual Property Protection (SIPP) provides startups with access to government-empaneled IP facilitators who draft and prosecute trademark applications with advisory fees disbursed directly by the government, meaning startups only pay the statutory official fee."
    },
    {
        question: "What should a startup do if its trademark application faces an objection?",
        answer: "If the registry issues an Examination Report citing Section 9 (distinctiveness) or Section 11 (similar existing marks), the startup must submit a formal legal response within 30 days. The reply must present legal precedents, distinct commercial evidence, and user affidavits to clear the objection."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "prerequisites", title: "Startup Prerequisites" },
    { id: "step-by-step", title: "7-Step Process" },
    { id: "process-stages-table", title: "Stages & Fast-Track" },
    { id: "common-pitfalls", title: "Common Pitfalls" },
    { id: "post-registration", title: "Fundraising & Valuation" },
    { id: "checklist", title: "Startup Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function StartupTrademarkRegistrationPage() {
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
        "headline": "How to Register a Trademark for My Startup in India",
        "description": "Register a trademark for your startup in India. Guide on DPIIT 50% fee rebate, Form TM-A filing, fast-track examination, and brand security.",
        "image": "https://www.iprkaro.com/images/og/how-to-register-a-trademark-for-my-startup.png",
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
            "@id": "https://www.iprkaro.com/how-to-register-a-trademark-for-my-startup"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Register a Trademark for My Startup in India",
        "url": "https://www.iprkaro.com/how-to-register-a-trademark-for-my-startup",
        "description": "Register a trademark for your startup in India. Guide on DPIIT 50% fee rebate, Form TM-A filing, fast-track examination, and brand security.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-register-a-trademark-for-my-startup#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-register-a-trademark-for-my-startup#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "How to Register a Trademark for My Startup", "item": "https://www.iprkaro.com/how-to-register-a-trademark-for-my-startup" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Register a Trademark for a Startup in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Comprehensive Trademark Clearance & Cross-Class Conflict Search" },
            { "@type": "ListItem", "position": 2, "name": "Strategic Multi-Class Mapping for Tech, D2C, and Digital Platforms" },
            { "@type": "ListItem", "position": 3, "name": "DPIIT Startup Recognition & SIPP Documentation Preparation" },
            { "@type": "ListItem", "position": 4, "name": "Online E-Filing of Form TM-A & Securing the TM Symbol" },
            { "@type": "ListItem", "position": 5, "name": "Fast-Track Examination under Rule 34 & Replying to Objections" },
            { "@type": "ListItem", "position": 6, "name": "Trade Marks Journal Advertisement & 4-Month Opposition Watch" },
            { "@type": "ListItem", "position": 7, "name": "Issuance of Certificate, IP Assignment to Entity & Decennial Maintenance" }
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
                                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Startup Brand Protection Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to Register a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark for My Startup</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">For an ambitious startup, brand identity is the foundation of user trust, marketing traction, and institutional investor valuation. Under Indian intellectual property law and the Trade Marks Rules, 2017, recognized startups qualify for special statutory benefits, including a 50% concession on government filing fees and access to fast-track examination. Discover how to plan your trademark registration from clearance search and multi-class filing to objection handling and VC investor readiness.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Startup Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Startup Trademark Now <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/how-to-register-a-trademark-for-my-startup.png"
                                    alt="How to Register a Trademark for My Startup in India - DPIIT Fast-Track & Brand Protection"
                                    width={1200}
                                    height={675}
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
                        { label: "How to Register a Trademark for My Startup", href: "/how-to-register-a-trademark-for-my-startup" }
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
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Startup Trademark Registration Overview
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">To register a trademark for your startup in India: (1) Conduct a trademark clearance search across Nice classes, (2) Claim startup status with DPIIT or MSME Udyam certificate for a 50% government fee concession (&#8377;4,500 instead of &#8377;9,000 per class), (3) Draft and file Form TM-A online on the IP India gateway, (4) Request expedited examination under Rule 34 if eligible, (5) Respond to examination reports within 30 days, (6) Complete the 4-month Trade Marks Journal advertisement, and (7) Receive your 10-year registration certificate.</p>
                                        </div>

                                        <p className="mb-6">In the fast-moving startup ecosystem, founders often dedicate capital to product engineering, user acquisition, and hiring while leaving brand protection as an afterthought. However, intellectual property is one of the few intangible assets that appreciates in tandem with enterprise valuation. Without statutory trademark protection under the Trade Marks Act, 1999, a startup remains vulnerable to copycats, trademark squatters, and devastating re-branding demands right when scaling.</p>
                                        <p className="mb-6">The Indian government actively fosters entrepreneurial innovation through the Startup India initiative. Under the Trade Marks Rules, 2017, recognized entities benefit from statutory concessions, including a 50% waiver on official government fees and priority access to expedited examination. Furthermore, through the SIPP (Scheme for Facilitating Start-Ups and Intellectual Property Protection), the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM) assists emerging ventures in securing exclusive rights efficiently.</p>
                                        <p className="mb-6">Understanding the registration sequence ensures that founders avoid common traps such as descriptive naming, improper class mapping, or personal vs corporate ownership conflicts that can derail subsequent institutional fundraising rounds.</p>
                                    </section>

                                    {/* SECTION 2: PREREQUISITES */}
                                    <section id="prerequisites" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Startup Trademark Prerequisites &amp; DPIIT Benefits
                                        </h3>
                                        <p className="mb-6">Before filing Form TM-A on the government portal, startup founders must organize foundational legal structures to secure statutory rebates and prevent administrative defects.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    DPIIT Recognition or MSME Udyam
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">To claim the 50% government fee rebate (&#8377;4,500 per class instead of &#8377;9,000), upload a valid DPIIT Startup Recognition Certificate or an MSME Udyam Registration Certificate along with Form TM-A.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Applicant Ownership Structure
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Decide whether to file under the corporate entity (Private Limited / LLP) or under founder names. For VC-backed entities, filing directly under the incorporated company prevents complicated IP assignment transfers during due diligence.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Commercial User Date Assessment
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Determine whether the mark is applied on a &ldquo;Proposed to be Used&rdquo; basis or with prior MVP/beta usage. Prior use requires a notarized Rule 25 User Affidavit with dated invoices, app store links, or domain receipts.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Brand Representation &amp; Scope
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Decide between a Word Mark (protects the text in any font or styling) or a Device/Logo Mark. Startups typically prioritize the Word Mark first for broad protection, followed by the mobile app icon and company logo.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: 7-STEP PROCESS */}
                                    <section id="step-by-step" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Trademark Registration Process for Startups
                                        </h3>
                                        <p className="mb-6">The trademark registration roadmap for startups follows a disciplined sequence from pre-filing clearance to final certification. This ensures that the brand holds defensible value in front of customers, partners, and investors.</p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Pre-Filing Clearance</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Trademark Clearance &amp; Conflict Search</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Before committing capital to marketing, domain acquisition, or app development, conduct an exhaustive availability search on the official Trade Marks Registry database. You can also use our<Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">free AI powered trademark search</Link>to identify phonetic similarities, spelling variations, and visual resemblances that human keyword searches often miss.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">The search must evaluate conflicts under Section 9 (distinctiveness) and Section 11 (relative similarity) across primary and related classes. For step-by-step guidance on public registry records, consult our tutorial on<Link href="/how-to-search-for-existing-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">how to search for existing trademark</Link>or run queries directly via the<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search tool</Link>.</p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Strategic Classification</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Multi-Class Mapping for Tech, D2C, and Platforms</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Under the Nice Classification system, trademarks are registered across 45 classes (1–34 for goods, 35–45 for services). Startups often make the mistake of filing under only one class, leaving their core commercial activities completely exposed.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">For instance, a tech or SaaS startup typically requires protection under<strong>Class 9</strong>(downloadable software, mobile applications) and<strong>Class 42</strong>(cloud hosting, software-as-a-service, platform architecture). A direct-to-consumer (D2C) brand often requires<strong>Class 35</strong>(online marketplace and retail services) in addition to specific product classes.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">To determine your startup&apos;s precise classification breakdown, explore our interactive<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>.</p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Documentation &amp; Subsidies</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">DPIIT Recognition Verification &amp; Document Drafting</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">To capture the 50% statutory fee discount and qualify for fast-track review, compile the necessary verification documents:</p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>DPIIT Certificate / Udyam Certificate:</strong>Official proof of startup recognition for fee concessions.</li>
                                                <li><strong>Company Constitutional Records:</strong>Certificate of Incorporation, Memorandum of Association (MOA), or LLP Agreement.</li>
                                                <li><strong>Rule 25 User Affidavit:</strong>Notarized affidavit supported by exhibits (invoices, social media launch posts, beta analytics) if claiming prior use.</li>
                                                <li><strong>Form TM-48 (Power of Attorney):</strong>Stamped legal authorization empowering your trademark attorney or agent to represent the startup before the registry.</li>
                                            </ul>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Statutory E-Filing</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Online E-Filing of Form TM-A &amp; TM Symbol Rights</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Form TM-A is submitted electronically through the IP India gateway using a Class 3 Digital Signature Certificate (DSC). The government fee is processed instantly at the concessional rate of &#8377;4,500 per class.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">Upon successful transmission, the portal generates an official Application Number along with a time-stamped filing receipt.</p>
                                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                                <p className="text-xs sm:text-sm text-amber-900 font-medium m-0"><strong>Startup Milestone:</strong>From the moment your application number is generated, your startup is legally authorized to display the<strong>TM</strong>symbol on your website, app store listing, pitch decks, and packaging, deterring prospective competitors.</p>
                                            </div>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Fast-Track Examination</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Rule 34 Expedited Examination &amp; Objection Response</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Under Rule 34 of the Trade Marks Rules, 2017, recognized startups can request expedited examination by submitting Form TM-M. Instead of waiting 6 to 12 months for the initial examination report, expedited applications are reviewed in a matter of weeks. Learn more about the<Link href="/fast-track-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">fast-track trademark registration</Link>route.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">If the examiner raises objections under Section 9 (distinctiveness) or Section 11 (conflict with earlier marks), an Examination Report is issued. The startup has exactly<strong>30 days</strong>to file a comprehensive written response.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">A robust reply highlights phonetic differences, commercial distinctions, and acquired reputation to secure acceptance. Review our detailed guide on<Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>.</p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Journal Advertisement</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Trade Marks Journal Publication &amp; 4-Month Opposition Watch</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Once the examiner accepts the application, the mark is advertised in the weekly Trade Marks Journal on the official<a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India Portal</a>.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Publication triggers a statutory<strong>4-month opposition window</strong>under Section 21. Third parties who believe the mark encroaches on their prior rights can file a Notice of Opposition (Form TM-O). If no opposition is filed, or if an opposition is decided in the applicant&apos;s favor, the application proceeds to final registration.</p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Certificate Grant</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Certificate Issuance, Corporate Assignment &amp; Maintenance</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">After clearing the opposition period, the Registrar issues an electronically authenticated Trademark Registration Certificate bearing the seal of the Trade Marks Registry.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">You can now replace the TM symbol with the prestigious registered<strong>&reg;</strong>symbol. If the mark was originally filed in the personal name of a founder, execute a formal IP Assignment Agreement transferring all rights to the corporate entity via Form TM-P to satisfy investor due diligence.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Trademark protection is valid for 10 years from the date of application and can be preserved indefinitely through decennial<Link href="/how-to-renew-a-registered-trademark-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark renewals</Link>via Form TM-R.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: TABLE OF STAGES, TIMELINES, & FEES */}
                                    <section id="process-stages-table" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Startup Trademark Timelines, Costs &amp; Fast-Track
                                        </h3>
                                        <p className="mb-6">Review the structured breakdown of the startup trademark lifecycle, highlighting statutory forms, government filing fees with startup concessions, standard durations, and fast-track expedited options.</p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Process Stage</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Statutory Form</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Startup Govt Fee</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Standard Corporate Fee</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Standard Duration</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Rule 34 Fast-Track</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Clearance Search</td>
                                                        <td className="px-6 py-4">AI / Registry Search</td>
                                                        <td className="px-6 py-4">Free / Advisory</td>
                                                        <td className="px-6 py-4">Free / Advisory</td>
                                                        <td className="px-6 py-4">1–2 Days</td>
                                                        <td className="px-6 py-4 font-semibold text-[#6E5E93]">Immediate</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Online E-Filing</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-A</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;4,500 / class</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4">Same Day</td>
                                                        <td className="px-6 py-4 font-semibold text-[#6E5E93]">Same Day</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Registry Examination</td>
                                                        <td className="px-6 py-4">Registry Review</td>
                                                        <td className="px-6 py-4">No extra fee</td>
                                                        <td className="px-6 py-4">No extra fee</td>
                                                        <td className="px-6 py-4">6–12 Months</td>
                                                        <td className="px-6 py-4 font-semibold text-[#6E5E93]">1–3 Months</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Objection Response</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Written Reply / TM-M</td>
                                                        <td className="px-6 py-4">Attorney costs only</td>
                                                        <td className="px-6 py-4">Attorney costs only</td>
                                                        <td className="px-6 py-4">Within 30 Days</td>
                                                        <td className="px-6 py-4 font-semibold text-[#6E5E93]">Within 30 Days</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Journal Publication</td>
                                                        <td className="px-6 py-4">TM Journal</td>
                                                        <td className="px-6 py-4">Included in filing</td>
                                                        <td className="px-6 py-4">Included in filing</td>
                                                        <td className="px-6 py-4">4 Months (Fixed)</td>
                                                        <td className="px-6 py-4 font-semibold text-[#6E5E93]">4 Months (Fixed)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Certificate Issuance</td>
                                                        <td className="px-6 py-4">Form TM-RG</td>
                                                        <td className="px-6 py-4">Nil</td>
                                                        <td className="px-6 py-4">Nil</td>
                                                        <td className="px-6 py-4">2–4 Weeks</td>
                                                        <td className="px-6 py-4 font-semibold text-[#6E5E93]">1–2 Weeks</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Decennial Renewal</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-R</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4">Every 10 Years</td>
                                                        <td className="px-6 py-4 font-semibold text-[#6E5E93]">Every 10 Years</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: COMMON PITFALLS */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common Startup Trademark Pitfalls &amp; Solutions
                                        </h3>
                                        <p className="mb-6">Startup founders face unique operational pressures that can lead to strategic mistakes during trademark filing. Avoid these common traps to safeguard your intellectual property and capital.</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">1. Filing in the Founder&apos;s Personal Name Without Assignment</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Founders often file trademarks personally before company incorporation. However, institutional investors require all IP to reside strictly within the corporate balance sheet. Failing to execute a formal IP Assignment Agreement (Form TM-P) can stall funding rounds and create co-founder equity disputes.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">2. Choosing Descriptive or Generic Brand Names</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Startups frequently choose literal names to explain what their product does (e.g., &ldquo;FastDeliver&rdquo; or &ldquo;EasyTax&rdquo;). The Trade Marks Registry refuses descriptive marks under Section 9(1)(a). Instead, opt for coined words (e.g., Swiggy, Zerodha) or suggestive marks that build distinctive brand equity.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">3. Inadequate Multi-Class Coverage</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Modern digital products rarely fit into a single category. Filing an e-commerce platform only under Class 35 leaves mobile app code (Class 9) and SaaS infrastructure (Class 42) unprotected against copycats. Map your product roadmap across all operational categories.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">4. Missing the 30-Day Objection Response Window</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If the registry issues an Examination Report, founders have strictly 30 days to file a legal reply. Missing this statutory deadline results in the application being marked &ldquo;Abandoned&rdquo;, forfeiting priority filing dates and government fees.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: POST-REGISTRATION, FUNDRAISING & VALUATION */}
                                    <section id="post-registration" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Rights, Fundraising &amp; Valuation for Startups
                                        </h3>
                                        <p className="mb-6">Securing a registered trademark transforms your brand from an unprotected marketing label into an enforceable corporate asset that enhances balance sheet strength and investor confidence.</p>
                                        <p className="mb-6">Under Section 28 of the Trade Marks Act, 1999, registration grants exclusive commercial monopoly rights across all Indian states and Union Territories. Registered owners can enforce civil infringement actions, seek interim court injunctions, claim statutory damages, and initiate criminal anti-counterfeiting proceedings under Sections 103 and 104 of the Act.</p>
                                        <p className="mb-6">During seed, Series A, and growth funding rounds, venture capital firms conduct rigorous IP due diligence. Having a registered trademark or pending application with clean corporate ownership demonstrates regulatory maturity and defensible market moat. Furthermore, registered trademarks can be monetized through licensing, franchise agreements, and commercial assignment.</p>
                                    </section>

                                    {/* SECTION 7: CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Startup Trademark Registration Checklist
                                        </h3>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Conduct Deep Clearance Search:</strong>Verify brand name and logo across primary and adjacent Nice classes using AI and registry databases.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Secure DPIIT / Udyam Certification:</strong>Obtain your official recognition certificate to claim the 50% government fee concession.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Map Multi-Class Strategy:</strong>Cover immediate core products and anticipated tech or digital expansions over a 3 to 5 year horizon.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Establish Clean Corporate Ownership:</strong>File under the incorporated entity or execute an IP assignment agreement for investor due diligence.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Submit Form TM-A with User Proofs:</strong>E-file through the official gateway and immediately begin using the TM symbol.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Leverage Rule 34 Fast-Track:</strong>Apply for expedited examination to shorten the registry review cycle from months to weeks.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Monitor 4-Month Opposition Window:</strong>Track journal publications until the final registration certificate is officially issued.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 8: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions
                                        </h3>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h4>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 9: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Brand Protection for Startup Growth
                                        </h3>
                                        <p className="mb-6">Registering a trademark for your startup is more than a defensive compliance checklist. It is a foundational business milestone that solidifies your enterprise value, builds competitive moats, and protects investor capital.</p>
                                        <p className="mb-6">By capitalizing on Startup India incentives—including the 50% government fee concession, SIPP facilitation, and Rule 34 fast-track examination—founders can secure institutional-grade brand protection without burning limited runway. Check your brand availability today and file with seasoned IP attorneys.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Startup Trademark Registration
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Startup Brand Identity Today
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Partner with expert IP attorneys to file Form TM-A with DPIIT 50% fee concessions, comprehensive multi-class mapping, expedited examination, and investor-ready IP structuring.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Start Startup Registration</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">DPIIT Recognition Assistance • 100% Online Paperless Process • SIPP Facilitation</p>
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h4>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in preliminary trademark clearance, startup brand protection strategy, and IP portfolio structuring for venture-backed enterprises.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-xl font-black mb-4 relative z-10 leading-tight">Fast-Track for Startups</h4>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Claim your 50% government fee concession and Rule 34 expedited examination with certified trademark counsel.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        E-File Startup TM-A
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trademark Search</span></Link></li>
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Guide</span></Link></li>
                                    <li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li>
                                    <li><Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Objection Guide</span></Link></li>
                                    <li><Link href="/how-to-search-for-existing-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Search Guide</span></Link></li>
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Standard Steps</span></Link></li>
                                    <li><Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">50% MSME Fee Discount</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
