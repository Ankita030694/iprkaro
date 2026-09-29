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
    faRocket,
    faBuilding,
    faLayerGroup,
    faDiagramProject,
    faCompass,
    faClock,
    faGavel,
    faCoins,
    faCodeBranch,
    faHandshake
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Single Class vs Multi-Class Trademark India: Pros & Cons",
    description: validateAndNormalizeDescription(
        "Compare single class vs multi-class trademark filing in India. Discover fee facts, Section 11 objection risks, Form TM-A rules, pros, and cons.",
        "app/single-class-vs-multi-class-trademark-application-india/page.tsx"
    ),
    keywords: [
        "single class vs multi class trademark application india",
        "single class vs multi class trademark pros and cons",
        "is multi class trademark cheaper in india",
        "form tm a multi class application",
        "trademark class division section 22",
        "multi class trademark objection risks",
        "trademark filing strategy india",
        "trademark fees single vs multi class",
        "nice classification trademark filing india",
        "form tm m division of application"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/single-class-vs-multi-class-trademark-application-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Single Class vs Multi-Class Trademark India: Pros & Cons",
        description: "Compare single class vs multi-class trademark filing in India. Discover fee facts, Section 11 objection risks, Form TM-A rules, pros, and cons.",
        url: "https://www.iprkaro.com/single-class-vs-multi-class-trademark-application-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/single-class-vs-multi-class-trademark-application-india.png",
                width: 1200,
                height: 630,
                alt: "Single Class vs Multi-Class Trademark Application in India Pros and Cons Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Single Class vs Multi-Class Trademark India: Pros & Cons",
        description: "Compare single class vs multi-class trademark filing in India. Discover fee facts, Section 11 objection risks, Form TM-A rules, pros, and cons.",
        images: ["https://www.iprkaro.com/images/og/single-class-vs-multi-class-trademark-application-india.jpg"],
    }
};

const faqs = [
    {
        question: "Is a multi-class trademark application cheaper than filing single-class applications in India?",
        answer: "No. Under the First Schedule of the Trade Marks Rules, 2017, official government statutory e-filing fees are calculated strictly on a per-class basis (₹4,500 per class for Individuals, Startups, and MSMEs, and ₹9,000 per class for Companies and LLPs). Filing a 3-class multi-class application costs exactly the same government fee (₹13,500 for MSMEs or ₹27,000 for Companies) as filing three separate single-class applications."
    },
    {
        question: "What is the biggest legal risk of filing a multi-class trademark application in India?",
        answer: "The primary risk is the 'domino effect' (procedural contagion). Because a multi-class application shares a single application number, an examination objection under Section 9 or Section 11, or a third-party opposition under Section 21 against just one class will hold up the entire application across all classes. You cannot obtain a registration certificate for the undisputed classes until the contested class is fully resolved."
    },
    {
        question: "Can I separate or divide a stalled multi-class application into individual applications?",
        answer: "Yes. Under Section 22 of the Trade Marks Act, 1999 and Rule 102 of the Trade Marks Rules, 2017, an applicant can request the Registrar to divide a multi-class application by filing Form TM-M. However, this incurs additional statutory government fees (₹900 per division for MSMEs/Individuals and ₹1,800 for Companies), attorney fees, and administrative processing delays of several months."
    },
    {
        question: "Which form is used for filing single-class and multi-class trademark applications on IP India?",
        answer: "Under the Trade Marks Rules, 2017, all trademark filings use the unified Form TM-A. When filling out Form TM-A on the IP India e-filing portal, you can select whether the application is for a 'Single Class' or 'Multi-Class', and specify the applicable classes (from Class 1 to Class 45) along with their corresponding goods and services descriptions."
    },
    {
        question: "How does trademark renewal work for a multi-class registration in India?",
        answer: "A multi-class trademark is renewed under a single Form TM-R every 10 years. However, the statutory government renewal fee remains strictly per-class (₹9,000 per class for online e-filing). For a 3-class registration, the total statutory renewal fee is ₹27,000. While administrative filing is consolidated into one form, there is no discount on statutory renewal costs."
    },
    {
        question: "Can I transfer or assign only one class of a multi-class trademark to another company?",
        answer: "Yes, partial assignment of a trademark is permitted under Sections 37 to 45 of the Trade Marks Act, 1999. However, executing a partial assignment of a multi-class registration is procedurally complex. It requires carving out the specific class on Form TM-P, recording separate title entries on the Trade Marks Register, and splitting the original registration into divisional records."
    },
    {
        question: "When is it recommended to file separate single-class trademark applications?",
        answer: "Single-class filings are strongly recommended when: (1) your brand operates in competitive or litigious sectors (such as pharmaceuticals, software, or apparel) where objections are common. (2) you need swift registration in core classes to enroll in Amazon Brand Registry. (3) different classes have different commercial prior use dates requiring distinct user affidavits. Or (4) you anticipate future class-specific licensing or investment."
    },
    {
        question: "When does filing a multi-class trademark application make practical sense?",
        answer: "Multi-class applications make sense for established corporate enterprises with unique, invented, highly distinctive house marks (e.g., Google or Tata) expanding into coordinated, non-contentious goods and services, or companies seeking simplified portfolio record-keeping with a single registration certificate and uniform renewal deadlines."
    },
    {
        question: "Can I claim different 'User Dates' (prior use) across different classes in a multi-class filing?",
        answer: "Yes. However, it complicates the filing. Under Rule 25 of the Trade Marks Rules, 2017, if you claim prior commercial use, you must submit a notarized User Affidavit with documentary evidence. If your use dates vary by class (e.g., Class 25 used since 2021, but Class 35 used since 2024), you must provide separate evidential exhibits for each class in the single affidavit, increasing scrutiny during examination."
    },
    {
        question: "How does a multi-class Indian trademark affect international registration under the Madrid Protocol?",
        answer: "If you file an international application via Madrid Protocol (Form MM2(E)) using an Indian multi-class application as your basic mark, all designated foreign countries depend on that basic Indian application for 5 years (the 'dependency principle'). If your Indian multi-class mark faces refusal or cancellation in one class, it can trigger complex transformation proceedings in designated foreign jurisdictions."
    }
];

const tocSections = [
    { id: "overview", title: "Classification & TM-A" },
    { id: "fee-myth", title: "The Fee Myth Busted" },
    { id: "comparison-matrix", title: "Full Comparison Matrix" },
    { id: "domino-effect", title: "The Domino Effect Risk" },
    { id: "division-remedy", title: "Section 22 Application Division" },
    { id: "single-class-pros-cons", title: "Single-Class Pros & Cons" },
    { id: "multi-class-pros-cons", title: "Multi-Class Pros & Cons" },
    { id: "decision-matrix", title: "Strategic Decision Guide" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Advice & Action Plan" },
];

export default function SingleVsMultiClassTrademarkPage() {
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
        "headline": "Single Class vs Multi-Class Trademark Application in India: Pros and Cons",
        "description": "Compare single class vs multi-class trademark filing in India. Discover fee facts, Section 11 objection risks, Form TM-A rules, pros, and cons.",
        "image": "https://www.iprkaro.com/images/og/single-class-vs-multi-class-trademark-application-india.png",
        "datePublished": "2024-03-24T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/single-class-vs-multi-class-trademark-application-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Single Class vs Multi-Class Trademark Application in India: Pros and Cons",
        "url": "https://www.iprkaro.com/single-class-vs-multi-class-trademark-application-india",
        "description": "Compare single class vs multi-class trademark filing in India. Discover fee facts, Section 11 objection risks, Form TM-A rules, pros, and cons.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/single-class-vs-multi-class-trademark-application-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/single-class-vs-multi-class-trademark-application-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Single vs Multi-Class Trademark Guide", "item": "https://www.iprkaro.com/single-class-vs-multi-class-trademark-application-india" }
        ]
    };

    const strategyListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Strategic Decision Factors for Single vs Multi-Class Trademark Filing in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Clearance Search Risk Assessment across Target Nice Classes" },
            { "@type": "ListItem", "position": 2, "name": "Statutory Government Fee Parity Verification (Form TM-A)" },
            { "@type": "ListItem", "position": 3, "name": "Evaluation of Section 9 and Section 11 Objection Vulnerabilities" },
            { "@type": "ListItem", "position": 4, "name": "Prior Commercial Use Date and User Affidavit Evidentiary Mapping" },
            { "@type": "ListItem", "position": 5, "name": "E-commerce Urgency (Amazon Brand Registry Enrollment Deadlines)" },
            { "@type": "ListItem", "position": 6, "name": "Corporate Restructuring, Vertical Licensing, and M&A Flexibility" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(strategyListSchema) }} />

            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trademark Filing Strategy</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Single Class vs Multi-Class Trademark in India: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Pros and Cons</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">When registering a brand across multiple product or service categories in India, business founders face a pivotal legal choice: should you file separate single-class applications or combine everything into one multi-class application on Form TM-A? While multi-class filing promises administrative simplicity, it introduces severe legal vulnerabilities—including statutory domino delays, all-or-nothing opposition risks, and costly division fees under Section 22. Uncover the statutory fee realities, tactical pros and cons, and expert legal strategies to protect your commercial brand assets.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Strategy Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/free-ai-powered-trademark-search" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Check Class Availability <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/single-class-vs-multi-class-trademark-application-india.png"
                                    alt="Single Class vs Multi-Class Trademark Application in India Pros and Cons Guide"
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
                        { label: "Single vs Multi-Class Trademark Guide", href: "/single-class-vs-multi-class-trademark-application-india" }
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
                            {/* MOBILE TABLE OF CONTENTS - COLLAPSIBLE ACCORDION */}
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

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCompass} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Understanding Trademark Classes in India</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">In India, brand registration operates under the international<strong>Nice Classification</strong>system, comprising<strong>45 discrete trademark classes</strong>: Classes 1 through 34 categorize physical manufactured goods (such as cosmetics in Class 3, pharmaceuticals in Class 5, electronics and software in Class 9, and apparel in Class 25), while Classes 35 through 45 cover services (such as retail/e-commerce in Class 35, fintech/financial services in Class 36, education in Class 41, and software development in Class 42).</p>

                                        <p className="text-base leading-relaxed mb-6">Under the<Link href="/process-and-steps-of-trademark-registration" className="text-[#6E5E93] font-bold hover:underline">Trade Marks Rules, 2017</Link>, the Trade Marks Registry consolidated all previous filing forms (such as TM-1, TM-2, TM-3, and the old multi-class Form TM-51) into a single unified<strong>Form TM-A</strong>. When submitting Form TM-A on the IP India e-filing portal, applicants can choose between two fundamental filing architectures:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                                            <div className="bg-gradient-to-br from-indigo-50/70 to-white p-6 rounded-2xl border border-indigo-100 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mb-3">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">Single-Class Application</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">A dedicated application filed for<strong>one specific Nice class</strong>. Each filing receives its own unique 7-digit trademark application number, independent examination report, separate journal publication, and standalone registration certificate.</p>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50/70 to-white p-6 rounded-2xl border border-purple-100 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mb-3">
                                                    <FontAwesomeIcon icon={faDiagramProject} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">Multi-Class Application</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">A single consolidated application covering<strong>two or more Nice classes</strong>under a single 7-digit trademark application number. All classes are examined collectively, advertised together in the Trade Marks Journal, and granted a single master certificate.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 2: FEE MYTH */}
                                    <section id="fee-myth" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCoins} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>The Government Fee Myth Debunked</span>
                                        </h3>

                                        <p className="text-base leading-relaxed mb-6">The single most pervasive misconception among startup founders, D2C entrepreneurs, and business owners in India is the belief that<em>"filing a multi-class trademark is cheaper than filing individual applications."</em></p>

                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl mb-8 not-prose">
                                            <div className="flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-sm font-bold text-amber-900 m-0">Statutory Fact Under Trade Marks Rules, 2017</h4>
                                                    <p className="text-xs text-amber-800 m-0 mt-1 leading-relaxed">The official government filing fee under the First Schedule of the Trade Marks Rules, 2017 is charged<strong>strictly per class</strong>. There is<strong>ZERO statutory discount</strong>or government fee waiver for combining multiple classes into one Form TM-A.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-base leading-relaxed mb-6">Whether you file three separate single-class applications or one multi-class application covering three classes, the statutory fee payable to the Trade Marks Registry is identical:</p>

                                        <div className="overflow-x-auto not-prose mb-8">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <thead className="bg-[#FAF9F6] border-b border-gray-200">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left text-xs font-black text-gray-900 uppercase tracking-wider">Applicant Category</th>
                                                        <th className="py-3 px-4 text-left text-xs font-black text-gray-900 uppercase tracking-wider">Govt Fee (1 Class)</th>
                                                        <th className="py-3 px-4 text-left text-xs font-black text-gray-900 uppercase tracking-wider">3 Single-Class Applications</th>
                                                        <th className="py-3 px-4 text-left text-xs font-black text-gray-900 uppercase tracking-wider">1 Multi-Class (3 Classes)</th>
                                                        <th className="py-3 px-4 text-left text-xs font-black text-gray-900 uppercase tracking-wider">Govt Fee Difference</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-xs">
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3 px-4 font-bold text-gray-900"> Individual / Startup / <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[#6E5E93] hover:underline">MSME (Udyam)</Link> </td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">₹4,500</td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">3 × ₹4,500 = <strong>₹13,500</strong></td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">₹4,500 × 3 = <strong>₹13,500</strong></td>
                                                        <td className="py-3 px-4 text-emerald-700 font-bold bg-emerald-50/50">₹0 (Zero Savings)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3 px-4 font-bold text-gray-900"> Companies / LLPs / Large Enterprises </td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">₹9,000</td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">3 × ₹9,000 = <strong>₹27,000</strong></td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">₹9,000 × 3 = <strong>₹27,000</strong></td>
                                                        <td className="py-3 px-4 text-emerald-700 font-bold bg-emerald-50/50">₹0 (Zero Savings)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3 px-4 font-bold text-gray-900"> Physical Counter Filing (Non-Online) </td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">₹5,000 / ₹10,000</td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">3 × ₹5,000 = <strong>₹15,000</strong></td>
                                                        <td className="py-3 px-4 text-gray-700 font-medium">₹5,000 × 3 = <strong>₹15,000</strong></td>
                                                        <td className="py-3 px-4 text-emerald-700 font-bold bg-emerald-50/50">₹0 (Zero Savings)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="text-base leading-relaxed mb-6">While some IP attorneys may offer marginal professional drafting discounts for a combined multi-class form due to reduced initial data entry, this minor upfront concession is heavily overshadowed by downstream legal costs if an objection or opposition arises.</p>
                                    </section>

                                    {/* SECTION 3: COMPARISON MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Single Class vs Multi-Class Comparison</span>
                                        </h3>

                                        <p className="text-base leading-relaxed mb-6">Evaluating the procedural, operational, and litigation differences between single-class and multi-class applications provides crucial clarity for long-term brand strategy:</p>

                                        <div className="overflow-x-auto not-prose mb-8">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <thead className="bg-[#FAF9F6] border-b border-gray-200">
                                                    <tr>
                                                        <th className="py-3.5 px-4 text-left text-xs font-black text-gray-900 uppercase tracking-wider">Evaluation Parameter</th>
                                                        <th className="py-3.5 px-4 text-left text-xs font-black text-gray-900 uppercase tracking-wider">Single-Class Application</th>
                                                        <th className="py-3.5 px-4 text-left text-xs font-black text-gray-900 uppercase tracking-wider">Multi-Class Application</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-xs">
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Application Number & Tracking</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Separate 7-digit application number per class</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Single consolidated 7-digit application number</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Official Government Fee</td>
                                                        <td className="py-3.5 px-4 text-gray-700">₹4,500 (MSME) / ₹9,000 (Others) per class</td>
                                                        <td className="py-3.5 px-4 text-gray-700">₹4,500 (MSME) / ₹9,000 (Others) per class (No discount)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Objection Impact (Sec 9 / Sec 11)</td>
                                                        <td className="py-3.5 px-4 text-emerald-800 font-semibold bg-emerald-50/30"> <strong>Isolated:</strong> Objections in Class A do not delay Class B or C </td>
                                                        <td className="py-3.5 px-4 text-rose-800 font-semibold bg-rose-50/30"> <strong>Contagion:</strong> Objection in any 1 class halts the entire application </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Third-Party Opposition (Sec 21)</td>
                                                        <td className="py-3.5 px-4 text-emerald-800 font-semibold bg-emerald-50/30"> Only the contested class undergoes opposition hearings </td>
                                                        <td className="py-3.5 px-4 text-rose-800 font-semibold bg-rose-50/30"> Registration of all classes is blocked until opposition concludes </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Registration Certificate Timeline</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Uncontested classes register fast (6–8 months)</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Delayed to match the slowest, contested class (2–5 years)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Unblocking Remedy (Section 22)</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Not needed (applications are already separate)</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Requires Form TM-M division + additional govt fees</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Prior Use / User Affidavit (Rule 25)</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Tailored user date & exhibits per product line</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Single affidavit must reconcile differing class dates</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Partial Assignment & Licensing</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Seamless transfer of specific classes via Form TM-P</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Complex class carve-out and division before transfer</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">10-Year Renewal (Form TM-R)</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Multiple renewal forms (can let weak classes lapse)</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Single renewal form (₹9,000 per class total)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Madrid Protocol International Filing</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Targeted basic registrations protect foreign rights</td>
                                                        <td className="py-3.5 px-4 text-gray-700">Central attack risk impacts all designated classes</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 4: THE DOMINO EFFECT */}
                                    <section id="domino-effect" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>The Domino Effect: Multi-Class Risks</span>
                                        </h3>

                                        <p className="text-base leading-relaxed mb-6">The legal phenomenon known as the<strong>"Domino Effect"</strong>or<strong>"Procedural Contagion"</strong>represents the single greatest vulnerability of multi-class trademark applications under the Trade Marks Act, 1999.</p>

                                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 not-prose mb-8">
                                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                <span>Real-World Scenario: The D2C Startup Dilemma</span>
                                            </h4>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-4">Imagine an omnichannel fashion brand named<strong>"VELVET OAK"</strong>filing a multi-class application covering three classes:</p>
                                            <ul className="space-y-2 text-xs text-gray-700 mb-4">
                                                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6E5E93] mr-2"></span><strong>Class 25:</strong>Ready-made clothing, footwear, and headgear.</li>
                                                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6E5E93] mr-2"></span><strong>Class 9:</strong>Mobile e-commerce application and digital software.</li>
                                                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#6E5E93] mr-2"></span><strong>Class 35:</strong>Online retail store and marketplace services.</li>
                                            </ul>
                                            <div className="p-4 bg-white rounded-xl border border-gray-200">
                                                <p className="text-xs font-bold text-rose-700 mb-1">What Happens in a Multi-Class Filing:</p>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">During examination, the Trade Marks Examiner cites an earlier conflicting registration for "OAK APPAREL" in Class 25 under Section 11(1). Because the entire application shares one number, the status changes to<Link href="/trademark-objected-what-to-do-next" className="text-[#6E5E93] font-semibold hover:underline">"Objected"</Link>for all three classes. Even though Classes 9 and 35 have zero conflicts, the Trade Marks Registry<strong>cannot issue registration certificates for Class 9 or Class 35</strong>. The startup is blocked from enrolling in<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[#6E5E93] font-semibold hover:underline">Amazon Brand Registry</Link>or executing investor warranties for up to 3 years while the Class 25 objection and hearing drag on.</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-base mb-3">
                                                    <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">Opposition Deadlock (Section 21)</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If a competitor opposes your mark in just one product class after Trade Marks Journal publication, the opposition proceedings halt certificate issuance for every uncontested service class in that filing.</p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base mb-3">
                                                    <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">Commercial Stagnation</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Without registered certificates for your clean classes, your business cannot issue formal legal notices, enforce rights against copycats, or license specific verticals to franchisees.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: SECTION 22 DIVISION */}
                                    <section id="division-remedy" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCodeBranch} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Section 22: Dividing an Application</span>
                                        </h3>

                                        <p className="text-base leading-relaxed mb-6">When a multi-class application becomes stalled by an objection or opposition in a single class, the Trade Marks Act provides a statutory legal escape route:<strong>Division of Application</strong>.</p>

                                        <p className="text-base leading-relaxed mb-6">Under<strong>Section 22 of the Trade Marks Act, 1999</strong>read with<strong>Rule 102 of the Trade Marks Rules, 2017</strong>, an applicant can file a formal interlocutory request on<strong>Form TM-M</strong>to divide the initial multi-class application into two or more separate divisional applications.</p>

                                        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-white border border-purple-100 rounded-2xl p-6 not-prose mb-8">
                                            <h4 className="text-base font-bold text-gray-900 mb-3">The Hidden Costs of Section 22 Division</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                                <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                                                    <p className="font-bold text-gray-900 mb-1">Additional Govt Fees</p>
                                                    <p className="text-gray-600 m-0">₹900 per divisional application for MSME / Individuals; ₹1,800 for Companies on Form TM-M.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                                                    <p className="font-bold text-gray-900 mb-1">Attorney Drafting Costs</p>
                                                    <p className="text-gray-600 m-0">Professional legal fees for drafting division requests, supporting affidavits, and representation.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                                                    <p className="font-bold text-gray-900 mb-1">Registry Delays</p>
                                                    <p className="text-gray-600 m-0">Processing Form TM-M division at the Trade Marks Registry typically takes 4 to 9 additional months.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-base leading-relaxed mb-6"><strong>The Strategic Reality:</strong>Filing a multi-class application to "save effort" often backfires. When an objection strikes, the applicant pays more in division fees, legal counsel charges, and administrative delays than if they had simply filed separate single-class applications on day one.</p>
                                    </section>

                                    {/* SECTION 6: SINGLE CLASS PROS & CONS */}
                                    <section id="single-class-pros-cons" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Pros & Cons of Single Class Filing</span>
                                        </h3>

                                        <p className="text-base leading-relaxed mb-6">Filing individual, standalone trademark applications for each relevant Nice class is the gold-standard recommendation of experienced IP litigators across India. Here is a comprehensive breakdown of its merits and drawbacks:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                                            {/* PROS */}
                                            <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-6">
                                                <h4 className="text-base font-bold text-emerald-900 mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-emerald-600 mr-2" />
                                                    <span>Advantages (Pros)</span>
                                                </h4>
                                                <ul className="space-y-3 text-xs text-emerald-950">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Zero Contagion Risk:</strong>An objection in Class 25 has zero legal effect on Class 9 or Class 35.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Rapid Registration:</strong>Clean, uncontested classes receive registration certificates in as little as 6–8 months.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Modular Commercialization:</strong>Seamlessly sell, license, or pledge specific classes to investors without dividing registrations.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Class-Specific Prior Use:</strong>Easily attach distinct user affidavits and invoices matching true commercial launch dates per category.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Selective Maintenance:</strong>If a product line is discontinued, you can simply let that specific class expire at renewal without altering other certificates.</span></li>
                                                </ul>
                                            </div>

                                            {/* CONS */}
                                            <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-6">
                                                <h4 className="text-base font-bold text-rose-900 mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-rose-600 mr-2" />
                                                    <span>Disadvantages (Cons)</span>
                                                </h4>
                                                <ul className="space-y-3 text-xs text-rose-950">
                                                    <li className="flex items-start"><span className="w-3.5 h-3.5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">✕</span><span><strong>Multiple Numbers to Track:</strong>Requires managing separate 7-digit application numbers and diary entries.</span></li>
                                                    <li className="flex items-start"><span className="w-3.5 h-3.5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">✕</span><span><strong>Multiple Certificates:</strong>Results in separate physical/digital registration certificates for corporate records.</span></li>
                                                    <li className="flex items-start"><span className="w-3.5 h-3.5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">✕</span><span><strong>Multiple Renewal Filings:</strong>Requires filing separate Form TM-R applications every 10 years (though statutory fee totals are identical).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: MULTI-CLASS PROS & CONS */}
                                    <section id="multi-class-pros-cons" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faDiagramProject} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Pros & Cons of Multi-Class Filing</span>
                                        </h3>

                                        <p className="text-base leading-relaxed mb-6">Multi-class applications serve a specific purpose for certain enterprise brand owners. Understanding when this structure is advantageous—and when it poses severe risks—is essential:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                                            {/* PROS */}
                                            <div className="bg-indigo-50/50 border border-indigo-200 rounded-2xl p-6">
                                                <h4 className="text-base font-bold text-indigo-900 mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-indigo-600 mr-2" />
                                                    <span>Advantages (Pros)</span>
                                                </h4>
                                                <ul className="space-y-3 text-xs text-indigo-950">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Unified Portfolio Tracking:</strong>Single 7-digit trademark application number across all registered classes.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Single Registration Certificate:</strong>One master certificate enumerating all protected goods and services.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Consolidated Renewals:</strong>Renew all classes simultaneously on a single Form TM-R every 10 years.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Single Form TM-48:</strong>One<Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[#6E5E93] font-bold hover:underline">Power of Attorney</Link>covers all classes in that application.</span></li>
                                                </ul>
                                            </div>

                                            {/* CONS */}
                                            <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-6">
                                                <h4 className="text-base font-bold text-rose-900 mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-rose-600 mr-2" />
                                                    <span>Disadvantages (Cons)</span>
                                                </h4>
                                                <ul className="space-y-3 text-xs text-rose-950">
                                                    <li className="flex items-start"><span className="w-3.5 h-3.5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">✕</span><span><strong>All-or-Nothing Delay:</strong>One citation or opposition halts certificate issuance for every single class.</span></li>
                                                    <li className="flex items-start"><span className="w-3.5 h-3.5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">✕</span><span><strong>Zero Govt Fee Discount:</strong>You pay the exact same ₹4,500/₹9,000 per class statutory rate.</span></li>
                                                    <li className="flex items-start"><span className="w-3.5 h-3.5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">✕</span><span><strong>Costly Application Division:</strong>Section 22 division on Form TM-M adds ₹900/₹1,800 plus legal fees.</span></li>
                                                    <li className="flex items-start"><span className="w-3.5 h-3.5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">✕</span><span><strong>Rigid Licensing & Assignment:</strong>Transferring one business unit to an acquirer requires complex register carving.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: DECISION MATRIX */}
                                    <section id="decision-matrix" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Strategic Decision Framework</span>
                                        </h3>

                                        <p className="text-base leading-relaxed mb-6">To determine whether your enterprise should file single-class or multi-class applications on Form TM-A, apply this practical decision framework based on your business profile:</p>

                                        <div className="space-y-4 not-prose mb-8">
                                            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                                                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                                                    1
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 mb-1">Early-Stage Startups & D2C Brands &rarr; File Single Class</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">If you sell across products (e.g. Clothing in Class 25) and services (e.g. E-commerce in Class 35), file<strong>separate single-class applications</strong>. Getting your Class 35 registration quickly allows you to enroll in Amazon Brand Registry, protect your domain, and secure investor funding without waiting for Class 25 clearance.</p>
                                                </div>
                                            </div>

                                            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                                                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                                                    2
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 mb-1">Different Commercial Launch Dates &rarr; File Single Class</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">If you began selling software in 2021 (Class 9) but launched consulting services in 2024 (Class 42), separate filings enable you to file precise<Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[#6E5E93] font-bold hover:underline">User Affidavits (Rule 25)</Link>with clear, unclouded documentary proof for each class.</p>
                                                </div>
                                            </div>

                                            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                                                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                                                    3
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 mb-1">Conglomerates with Coined House Marks &rarr; File Multi-Class</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Large corporate entities registering invented, highly distinctive coined words (e.g., "KODAK", "INFOSYS") across coordinated, non-contentious goods and services can leverage multi-class filings to minimize corporate docketing and manage a single master certificate.</p>
                                                </div>
                                            </div>

                                            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                                                <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                                                    4
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 mb-1">Businesses Planning Future Spin-Offs or M&A &rarr; File Single Class</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">If you plan to sell one product line to an acquirer or raise vertical-specific venture funding, holding standalone single-class trademark certificates allows instantaneous assignment on Form TM-P without expensive registry division.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: FAQS */}
                                    <section id="faqs" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Frequently Asked Questions</span>
                                        </h3>

                                        <div className="space-y-4 not-prose">
                                            {faqs.map((faq, index) => (
                                                <details
                                                    key={index}
                                                    className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:border-purple-200 open:shadow-md"
                                                >
                                                    <summary className="flex items-center justify-between font-bold text-gray-900 cursor-pointer list-none select-none text-base">
                                                        <span className="pr-4">{faq.question}</span>
                                                        <span className="w-7 h-7 rounded-full bg-purple-50 text-[#6E5E93] flex items-center justify-center font-bold text-sm transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                                                            &darr;
                                                        </span>
                                                    </summary>
                                                    <div className="mt-4 pt-3 border-t border-gray-100 text-sm text-gray-700 leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </details>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 10: STRATEGIC TAKEAWAY & BOTTOM CTA */}
                                    <section id="final-takeaway" className="scroll-mt-32">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Strategic Advice & Action Plan</span>
                                        </h3>

                                        <p className="text-base leading-relaxed mb-6">Protecting your brand across multiple business categories is essential for preventing competitor encroachment and securing market dominance. However, combining multiple classes into a single application creates severe legal vulnerabilities with zero government fee savings. For the vast majority of Indian businesses,<strong>filing separate single-class applications provides maximum legal protection, swift registration timelines, and uncompromised commercial agility</strong>.</p>

                                        <div className="rounded-3xl bg-gradient-to-br from-[#0C002B] via-[#1A0B3B] to-[#2D1254] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden not-prose border border-purple-500/20">
                                            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

                                            <div className="relative z-10 text-center">
                                                <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md mb-6 border border-white/10">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-purple-300" />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-purple-200">
                                                        Expert Multi-Class Trademark Strategy
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Architect Your Multi-Class Brand Defense
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Get comprehensive clearance searches across all 45 Nice classes, strategic Form TM-A classification, and end-to-end IP attorney representation with zero compliance errors.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/free-ai-powered-trademark-search"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Check Class Availability</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Certified IP Advocates • Zero Hidden Costs • Same-Day Form TM-A E-Filing</p>
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in multi-class trademark portfolio architectures, relative grounds litigation defense under Section 11, and application division proceedings under Section 22 of the Trade Marks Act, 1999.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-xl font-black mb-4 relative z-10 leading-tight">Multi-Class TM Strategy</h4>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Protect your brand across multiple classes without triggering Section 11 domino delays.</p>
                                <Link href="/free-ai-powered-trademark-search" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Check Class Availability
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li>
                                    <li><Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuilding} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">50% MSME Discount</span></Link></li>
                                    <li><Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Word vs Device Mark</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit</span></Link></li>
                                    <li><Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Form TM-48</span></Link></li>
                                    <li><Link href="/how-to-search-for-existing-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Search Guide</span></Link></li>
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Filing Process</span></Link></li>
                                    <li><Link href="/trademark-application-status" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Status Tracker</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
