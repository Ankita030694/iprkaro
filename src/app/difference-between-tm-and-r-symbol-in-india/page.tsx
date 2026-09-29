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
    faRocket,
    faGlobe,
    faClock,
    faCertificate,
    faTrademark,
    faGavel,
    faBan
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "TM vs R Symbol in India: Rules & Penalties | IPR Karo",
    description: validateAndNormalizeDescription(
        "Learn the difference between TM and R symbol in India. Understand legal rules, usage timelines, and Section 107 penalties for false trademark claims.",
        "app/difference-between-tm-and-r-symbol-in-india/page.tsx"
    ),
    keywords: [
        "difference between tm and r symbol in india",
        "tm vs r symbol india",
        "when to use r symbol trademark",
        "penalty for using r symbol without registration section 107",
        "tm symbol meaning india",
        "registered trademark symbol rules",
        "sm symbol service mark india",
        "jan vishwas act trademark section 107 penalty",
        "unregistered vs registered trademark india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/difference-between-tm-and-r-symbol-in-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Difference Between TM and R Symbol in India: Legal Rules & Penalties",
        description: "Learn the difference between TM and R symbol in India. Understand legal rules, usage timelines, and Section 107 penalties for false trademark claims.",
        url: "https://www.iprkaro.com/difference-between-tm-and-r-symbol-in-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/difference-between-tm-and-r-symbol-in-india.png",
                width: 1200,
                height: 630,
                alt: "Difference between TM and R symbol legal rules and Section 107 penalties in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Difference Between TM and R Symbol in India: Legal Rules & Penalties",
        description: "Learn the difference between TM and R symbol in India. Understand legal rules, usage timelines, and Section 107 penalties for false trademark claims.",
        images: ["https://www.iprkaro.com/images/og/difference-between-tm-and-r-symbol-in-india.png"],
    }
};

const faqs = [
    {
        question: "What is the primary difference between the TM and R symbols in India?",
        answer: "The TM (™) symbol indicates that a trademark application has been filed with the Trade Marks Registry or that the owner claims common law brand rights over goods. It can be used immediately after filing Form TM-A upon receiving an official application number. In contrast, the ® (Registered) symbol can strictly and legally be used only after the Registrar issues the official Trademark Registration Certificate (Form TM-RG)."
    },
    {
        question: "Can I use the ® symbol while my trademark application is pending examination?",
        answer: "No. You cannot use the ® symbol while your trademark application is marked as 'Objected', 'Marked for Exam', 'Accepted & Advertised', or 'Opposed'. Under Section 107 of the Trade Marks Act, 1999, using the ® symbol before the registration certificate is officially granted is an unlawful false representation subject to statutory penalties."
    },
    {
        question: "What are the legal penalties for using the ® symbol without a registration certificate?",
        answer: "Under Section 107 of the Trade Marks Act, 1999, falsely representing an unregistered or pending trademark as registered is a punishable offense. Under the Jan Vishwas (Amendment of Provisions) Act, 2023, the penalty includes statutory monetary fines up to ₹5,00,000 or 0.5% of the total turnover, plus additional continuing penalties for daily non-compliance."
    },
    {
        question: "What does the SM symbol mean and when should it be used in India?",
        answer: "The SM (℠) symbol stands for 'Service Mark'. It is used for unregistered trademarks applied specifically to services (Classes 35 to 45, such as IT, consulting, hospitality, banking, or logistics). While the Indian Trade Marks Act, 1999 does not legally distinguish between goods and services regarding symbol enforcement, many service businesses use ℠ or ™ interchangeably before full registration."
    },
    {
        question: "Does using the TM symbol provide complete protection against trademark infringement?",
        answer: "No. The TM symbol does not confer statutory protection or the right to file a statutory trademark infringement suit under Section 29. With a TM symbol, your legal remedy is limited to a common law action for 'Passing Off' under Section 27(2), where the burden of proof rests heavily on you to prove prior commercial use, established goodwill, and deceptive consumer confusion."
    },
    {
        question: "Can I use the TM symbol without filing a trademark application in India?",
        answer: "Yes. Under Indian common law, an enterprise can use the TM (™) symbol on products or marketing materials to inform competitors and the general public of their intent to claim exclusive proprietary rights over a distinctive brand name, logo, or slogan, even before official filing. However, filing Form TM-A is strongly recommended to secure nationwide priority."
    },
    {
        question: "What should I do if a competitor is unlawfully using the ® symbol on an unregistered mark?",
        answer: "You can verify their application status on the official IP India public search portal. If the mark is pending, abandoned, or non-existent, your legal counsel can issue a formal cease-and-desist notice citing Section 107 of the Trade Marks Act, 1999 and file a complaint for unfair trade practice and misleading advertisement under the Consumer Protection Act, 2019."
    },
    {
        question: "How should a business transition from ™ to ® on packaging and digital assets?",
        answer: "Once the Trade Marks Registry issues your official Registration Certificate (Form TM-RG), conduct a brand asset audit. Update digital assets (website headers, mobile apps, social media graphics) immediately to the ® symbol. For physical packaging and print inventory, plan a phased transition: exhaust existing stock compliant with your filing date, and introduce ® on all subsequent production runs."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "tm-symbol-meaning", title: "TM Symbol Explained" },
    { id: "r-symbol-significance", title: "R Symbol Rules" },
    { id: "sm-symbol-usage", title: "SM Symbol Context" },
    { id: "comparison-table", title: "TM vs R vs SM Matrix" },
    { id: "legal-penalties", title: "Section 107 Penalties" },
    { id: "transition-roadmap", title: "6-Step Transition" },
    { id: "compliance-best-practices", title: "Compliance Rules" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Counsel" },
];

export default function DifferenceBetweenTmandRSymbolPage() {
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
        "headline": "Difference Between TM and R Symbol in India: Legal Rules & Penalties",
        "description": "Learn the difference between TM and R symbol in India. Understand legal rules, usage timelines, and Section 107 penalties for false trademark claims.",
        "image": "https://www.iprkaro.com/images/og/difference-between-tm-and-r-symbol-in-india.png",
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
            "@id": "https://www.iprkaro.com/difference-between-tm-and-r-symbol-in-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Difference Between TM and R Symbol in India: Legal Rules & Penalties",
        "url": "https://www.iprkaro.com/difference-between-tm-and-r-symbol-in-india",
        "description": "Learn the difference between TM and R symbol in India. Understand legal rules, usage timelines, and Section 107 penalties for false trademark claims.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/difference-between-tm-and-r-symbol-in-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/difference-between-tm-and-r-symbol-in-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "TM vs R Symbol in India", "item": "https://www.iprkaro.com/difference-between-tm-and-r-symbol-in-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Transition Steps from TM to R Symbol in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "File Form TM-A & Deploy TM Symbol Immediately" },
            { "@type": "ListItem", "position": 2, "name": "Monitor Examination & Respond to Objections" },
            { "@type": "ListItem", "position": 3, "name": "Survive 4-Month Trade Marks Journal Advertisement" },
            { "@type": "ListItem", "position": 4, "name": "Download Official Form TM-RG Registration Certificate" },
            { "@type": "ListItem", "position": 5, "name": "Switch Digital Platforms and Social Media Assets to Registered Symbol" },
            { "@type": "ListItem", "position": 6, "name": "Execute Phased Packaging & Commercial Inventory Upgrade" }
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
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Brand Compliance &amp; IP Jurisprudence</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Difference Between <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>TM and R Symbol</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Deploying the wrong trademark symbol on your brand packaging, digital store, or marketing campaigns can lead to severe legal and financial repercussions. While the<strong>TM (™)</strong>symbol indicates a pending application or claimed proprietary intent, the<strong>® (Registered)</strong>symbol is legally reserved exclusively for marks officially registered with the Indian Trade Marks Registry. Unlawful use of the ® symbol violates<strong>Section 107 of the Trade Marks Act, 1999</strong>, attracting substantial statutory penalties. Understand the distinct legal boundaries, rights, rules, and compliance workflows.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Statutory Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Register Your Brand &rarr;
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/difference-between-tm-and-r-symbol-in-india.png"
                                    alt="Difference between TM and R symbol legal rules and Section 107 penalties in India"
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
                        { label: "TM vs R Symbol in India", href: "/difference-between-tm-and-r-symbol-in-india" }
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
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation (10 Topics)</span>
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
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of TM vs R Symbols
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">In India, the<strong>TM (™)</strong>symbol denotes an unregistered or pending trademark, permitted for use immediately upon submitting an application (Form TM-A) on the IP India portal. The<strong>® (Registered)</strong>symbol indicates a fully registered mark with an issued Trademark Registration Certificate (Form TM-RG). Using the ® symbol on pending, objected, abandoned, or unregistered marks is a statutory violation under Section 107 of the Trade Marks Act, 1999, punishable with substantial fines up to ₹5 lakh or 0.5% of annual turnover under the Jan Vishwas Act, 2023.</p>
                                        </div>

                                        <p className="mb-6">Founders, creative directors, and packaging designers frequently treat brand symbols as decorative typography rather than statutory declarations. In Indian commercial law, affixing<strong>™</strong>,<strong>®</strong>, or<strong>℠</strong>to a brand name, logo, or tagline communicates a specific legal status to consumers, industry competitors, and law enforcement agencies.</p>
                                        <p className="mb-6">Premature or improper use of these symbols exposes your business to dual vulnerabilities: either forfeiting statutory remedies against counterfeiters or exposing your company to regulatory penalties for misleading the public. Navigating the journey from<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration processes</Link>to final certificate issuance requires precise adherence to statutory guidelines.</p>
                                        <p className="mb-6">Understanding the exact legal framework governing the<strong>TM</strong>and<strong>®</strong>symbols ensures that your enterprise protects its goodwill, maintains compliant packaging across e-commerce marketplaces like Amazon and Flipkart, and shields management from regulatory liabilities.</p>
                                    </section>

                                    {/* SECTION 2: WHAT THE TM SYMBOL MEANS */}
                                    <section id="tm-symbol-meaning" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTrademark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What the TM Symbol Means in India
                                        </h3>
                                        <p className="mb-6">The<strong>TM (™)</strong>symbol stands for &ldquo;Trademark&rdquo;. It acts as a public declaration that the business regards the associated wordmark, logo, character, or shape as a distinctive commercial source identifier and intends to defend its proprietary rights against unauthorized imitators.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    When to Use the TM Symbol
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">You can affix the ™ symbol immediately after completing<Link href="/e-filing-trademark" className="text-[rgb(110,94,147)] hover:underline font-semibold">online trademark e-filing</Link>on the IP India portal and securing your official application number. It may also be used for unregistered common law marks in commercial circulation.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Notice to Competitors &amp; Copycats
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The ™ symbol puts the commercial ecosystem on notice that you claim exclusive rights. This establishes prior adoption evidence and acts as a psychological deterrent against direct copying by competitors in your sector.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Pending Application Lifecycle
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Throughout all intermediate registry milestones—including<Link href="/trademark-application-status" className="text-[rgb(110,94,147)] hover:underline font-semibold">trademark application status</Link>stages like &ldquo;Formality Check Pass&rdquo;, &ldquo;Marked for Exam&rdquo;, &ldquo;Objected&rdquo;, or &ldquo;Advertised&rdquo;—the TM symbol remains your sole authorized indicator.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Legal Remedy: Passing Off
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Under Section 27(2) of the Trade Marks Act, 1999, an unregistered mark bearing the TM symbol is protected under the common law tort of<Link href="/what-to-do-if-someone-copies-your-trademark" className="text-[rgb(110,94,147)] hover:underline font-semibold">Passing Off</Link>. You must prove prior use, commercial goodwill, and actual consumer deception in court.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: WHAT THE R SYMBOL SIGNIFIES */}
                                    <section id="r-symbol-significance" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What the R Symbol Signifies
                                        </h3>
                                        <p className="mb-6">The<strong>® (Registered)</strong>symbol represents the pinnacle of intellectual property brand protection. Under Indian statutory law, this symbol indicates that the trademark has completed full administrative examination, survived public journal advertisement without opposition (or successfully defeated opposition), and received an official<strong>Certificate of Registration (Form TM-RG)</strong>from the Registrar of Trade Marks.</p>

                                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8 mb-8">
                                            <h4 className="text-lg font-bold text-emerald-950 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-emerald-600 mr-2" />
                                                Statutory Rights Conferred by the ® Symbol in India
                                            </h4>
                                            <ul className="space-y-3 text-emerald-900 text-sm md:text-base m-0 list-disc pl-5">
                                                <li><strong>Nationwide Exclusive Ownership:</strong>Under Section 28 of the Trade Marks Act, 1999, the registered proprietor obtains the exclusive right to use the mark across the entire territory of India in relation to the specified goods or services.</li>
                                                <li><strong>Statutory Infringement Action:</strong>Under Section 29, the owner can initiate a direct trademark infringement lawsuit against unauthorized users without having to prove established public goodwill or consumer confusion.</li>
                                                <li><strong>Presumption of Validity:</strong>Under Section 31, registration serves as prima facie evidence of trademark validity in all legal proceedings before High Courts and Commercial Courts.</li>
                                                <li><strong>Border Enforcement &amp; Customs Seizures:</strong>Registered marks can be recorded with the Indian Customs Intellectual Property Rights (IPR) enforcement system to intercept and confiscate imported counterfeit shipments.</li>
                                                <li><strong>Commercial Monetization:</strong>A registered mark can be licensed, franchised, assigned, or pledged as security for institutional business loans.</li>
                                            </ul>
                                        </div>

                                        <p className="mb-6">The registration validity is granted for a term of<strong>10 years</strong>from the initial application date, renewable indefinitely in 10-year cycles under Section 25. Learn the complete procedure in our guide on<Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">how to renew a trademark</Link>.</p>
                                    </section>

                                    {/* SECTION 4: THE SM SYMBOL */}
                                    <section id="sm-symbol-usage" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The SM Symbol for Service Marks
                                        </h3>
                                        <p className="mb-6">The<strong>SM (℠)</strong>symbol stands for &ldquo;Service Mark&rdquo;. It functions analogously to the TM symbol, but applies specifically to enterprises providing intangible services rather than manufactured physical goods.</p>

                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm mb-6">
                                            <h4 className="text-lg font-bold text-gray-900 mb-3">Service Classes Under the Nice Classification (Classes 35 to 45)</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">In India, service-oriented enterprises frequently use the SM symbol during the pendency of their applications across service categories:</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs md:text-sm text-gray-700 not-prose">
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>Class 35:</strong> Advertising, Retail &amp; E-commerce</div>
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>Class 36:</strong> Banking, Real Estate &amp; Fintech</div>
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>Class 37:</strong> Construction, Repair &amp; Maintenance</div>
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>Class 41:</strong> Education, Entertainment &amp; Media</div>
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>Class 42:</strong> Software, SaaS &amp; IT Development</div>
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>Class 43:</strong> Restaurants, Hospitality &amp; Hotels</div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-4 m-0"><em>Note:</em>The Trade Marks Act, 1999 does not draw a formal statutory distinction between goods and services regarding symbol enforcement. Service providers in India can use either<strong>℠</strong>or<strong>™</strong>before registration, and must transition to<strong>®</strong>once the certificate is granted. Check our<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-semibold">Trademark Class Finder</Link>to identify your exact commercial classification.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 5: COMPREHENSIVE COMPARISON TABLE */}
                                    <section id="comparison-table" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Detailed Comparison: TM vs R vs SM
                                        </h3>
                                        <p className="mb-6">The table below provides an exhaustive side-by-side analysis of the statutory differences, prerequisites, rights, and legal protections associated with each trademark symbol in India:</p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#0C002B] text-white">
                                                    <tr>
                                                        <th className="px-5 py-4 font-bold uppercase tracking-wider text-xs">Feature / Metric</th>
                                                        <th className="px-5 py-4 font-bold uppercase tracking-wider text-xs text-amber-300">TM (™) Symbol</th>
                                                        <th className="px-5 py-4 font-bold uppercase tracking-wider text-xs text-emerald-300">® (Registered) Symbol</th>
                                                        <th className="px-5 py-4 font-bold uppercase tracking-wider text-xs text-blue-300">SM (℠) Symbol</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 font-medium">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Legal Meaning</td>
                                                        <td className="px-5 py-4">Unregistered or pending trademark claimed for goods</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">Officially registered trademark with IP India certificate</td>
                                                        <td className="px-5 py-4">Unregistered or pending service mark for services</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Applicable Nice Classes</td>
                                                        <td className="px-5 py-4">Classes 1 to 34 (Goods) &amp; widely used for all classes</td>
                                                        <td className="px-5 py-4">All Classes (1 to 45) upon final registration</td>
                                                        <td className="px-5 py-4">Classes 35 to 45 (Services)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Permitted Time to Use</td>
                                                        <td className="px-5 py-4">Immediately upon filing Form TM-A or during common law use</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">ONLY after issuance of Certificate (Form TM-RG)</td>
                                                        <td className="px-5 py-4">Immediately upon filing Form TM-A for services</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Primary Legal Remedy</td>
                                                        <td className="px-5 py-4">Passing Off under Section 27(2) (Common Law)</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">Statutory Trademark Infringement under Section 29</td>
                                                        <td className="px-5 py-4">Passing Off under Section 27(2) (Common Law)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Burden of Proof in Court</td>
                                                        <td className="px-5 py-4 text-red-600">Heavy: Must prove prior use, sales turnover, and deception</td>
                                                        <td className="px-5 py-4 text-emerald-600">Light: Prima facie proof of ownership via certificate</td>
                                                        <td className="px-5 py-4 text-red-600">Heavy: Must establish service goodwill and consumer confusion</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Amazon Brand Registry</td>
                                                        <td className="px-5 py-4">Accepted with pending application number</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">Full automated protection, Project Zero &amp; Transparency</td>
                                                        <td className="px-5 py-4">Not applicable (Services)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Risk of Wrong Usage</td>
                                                        <td className="px-5 py-4">Zero penalty if used honestly</td>
                                                        <td className="px-5 py-4 text-red-600 font-bold">Severe: Section 107 offense (₹5 lakh fine / turnover penalty)</td>
                                                        <td className="px-5 py-4">Zero penalty if used honestly</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 6: LEGAL PENALTIES UNDER SECTION 107 */}
                                    <section id="legal-penalties" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Penalties for Unlawful Use of R Symbol
                                        </h3>
                                        <p className="mb-6">Many business owners falsely believe that putting an ® symbol next to their logo makes their brand look prestigious, even before registration is granted. Under Indian intellectual property legislation, this is an explicit statutory crime known as<strong>False Representation as a Registered Trade Mark</strong>.</p>

                                        {/* CRITICAL STATUTORY WARNING BOX */}
                                        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 md:p-8 mb-8 not-prose">
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-7 h-7 text-red-600 mr-4 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-lg font-black text-red-950 mb-2 uppercase tracking-wide">
                                                        Statutory Warning: Section 107 of the Trade Marks Act, 1999
                                                    </h4>
                                                    <p className="text-red-900 text-sm md:text-base leading-relaxed mb-3">Under Section 107(1), no person shall make any representation regarding a mark not being a registered trade mark to the effect that it is a registered trade mark, or for goods/services for which it is not registered.</p>
                                                    <p className="text-red-950 text-xs md:text-sm font-bold m-0">Deemed Representations include using the word &ldquo;registered&rdquo;, the &ldquo;®&rdquo; symbol, or any other abbreviation indicating registration on packaging, business cards, websites, invoices, or advertising signboards.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                                            The Jan Vishwas Act, 2023 Amendment: Modern Monetary Penalties
                                        </h4>
                                        <p className="mb-6">Historically, Section 107 provided for criminal imprisonment of up to 3 years, a fine, or both. To ease the compliance burden on honest entrepreneurs while penalizing fraudulent commercial conduct, the Parliament of India enacted the<strong>Jan Vishwas (Amendment of Provisions) Act, 2023</strong>, amending Section 107 to establish an agile administrative adjudication framework:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-black mb-4">
                                                    ₹
                                                </div>
                                                <h5 className="font-bold text-gray-900 mb-2">Statutory Fine up to ₹5,00,000</h5>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">The Adjudicating Officer appointed by the Central Government can levy a direct monetary penalty of up to ₹5 Lakh or 0.5% of total annual turnover on the defaulting entity.</p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 font-black mb-4">
                                                    ⚠️
                                                </div>
                                                <h5 className="font-bold text-gray-900 mb-2">Consumer Protection Liability</h5>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Under the Consumer Protection Act, 2019 and CCPA guidelines, falsely using the ® symbol constitutes a &ldquo;Misleading Advertisement&rdquo. And an unfair trade practice subject to compounding consumer penalties.</p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-black mb-4">
                                                    🚫
                                                </div>
                                                <h5 className="font-bold text-gray-900 mb-2">Doctrine of Unclean Hands</h5>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">If you falsely used the ® symbol before registration, courts may refuse to grant discretionary equitable relief or temporary injunctions during future infringement litigations under the equitable &ldquo;clean hands&rdquo. Doctrine.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: TRANSITION ROADMAP */}
                                    <section id="transition-roadmap" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Transition Roadmap: From TM to R
                                        </h3>
                                        <p className="mb-6">Upgrading your enterprise branding from the TM symbol to the ® symbol involves a rigorous 6-step statutory procedure. Follow this compliant roadmap:</p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Symbol: ™ (TM)</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">File Form TM-A &amp; Deploy TM Symbol</h4>
                                            <p className="text-gray-700 leading-relaxed text-sm m-0">Submit your initial trademark application on Form TM-A with the Trade Marks Registry. The moment the electronic system issues your official acknowledgment receipt and application number, immediately apply the ™ symbol to your brand assets.</p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Symbol: ™ (TM)</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Formal Examination &amp; Objection Resolution</h4>
                                            <p className="text-gray-700 leading-relaxed text-sm m-0">The trademark examiner reviews your mark under Section 9 (absolute grounds) and Section 11 (relative grounds). If an examination report is issued, your trademark attorney must submit a formal reply within 30 days. Maintain the ™ symbol during this entire period.</p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Symbol: ™ (TM)</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">4-Month Journal Advertisement Window</h4>
                                            <p className="text-gray-700 leading-relaxed text-sm m-0">Once accepted, the mark is published in the official Trade Marks Journal for a statutory 4-month public opposition window. Even though the mark is advertised,<em>do not switch to the ® symbol yet</em>—third parties may still file Form TM-O opposition.</p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-emerald-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 4</span>
                                                <span className="text-xs text-emerald-600 font-bold">Official Registration Milestone</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Issuance of Certificate of Registration (Form TM-RG)</h4>
                                            <p className="text-gray-700 leading-relaxed text-sm m-0">If no opposition is filed (or opposition is decided in your favor), the Registrar issues the official digital Certificate of Registration bearing the seal of the Trade Marks Registry.<strong>You are now legally entitled to use the ® symbol.</strong></p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Symbol: ® (Registered)</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Instant Digital Assets Upgrade</h4>
                                            <p className="text-gray-700 leading-relaxed text-sm m-0">Immediately update website headers, footers, mobile app icons, software splash screens, social media banners, email signatures, and corporate presentations to the ® symbol.</p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Symbol: ® (Registered)</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">Phased Physical Packaging &amp; Inventory Rollout</h4>
                                            <p className="text-gray-700 leading-relaxed text-sm m-0">Coordinate with your manufacturing and packaging suppliers. Incorporate the ® symbol on all newly printed product labels, cartons, shipping boxes, and point-of-sale displays while phasing out legacy ™ inventory under production cycles.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 8: COMPLIANCE BEST PRACTICES */}
                                    <section id="compliance-best-practices" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Best Practices for Brand Compliance
                                        </h3>
                                        <p className="mb-6">To maintain complete regulatory compliance and maximize commercial enforcement strength, adhere to these legal rules across your commercial operations:</p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center text-base">
                                                    <FontAwesomeIcon icon={faCheck} className="text-[#6E5E93] mr-2.5 w-4 h-4" />
                                                    International Export Packaging Compliance
                                                </h4>
                                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed m-0">If exporting products outside India, verify whether your trademark is registered in the target destination country. Using the ® symbol in a foreign jurisdiction where your mark is unregistered may violate local intellectual property statutes. If your brand exports globally, consider filing an<Link href="/international-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-semibold">International Trademark Registration under the Madrid Protocol</Link>.</p>
                                            </div>

                                            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center text-base">
                                                    <FontAwesomeIcon icon={faCheck} className="text-[#6E5E93] mr-2.5 w-4 h-4" />
                                                    E-Commerce Marketplace Brand Registries
                                                </h4>
                                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed m-0">Amazon Brand Registry in India accepts pending trademark applications bearing application numbers (TM status) to unlock Enhanced Brand Content (A+ Content) and Brand Stores. However, automated counterfeit takedowns (Project Zero) require a fully registered ® certificate.</p>
                                            </div>

                                            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center text-base">
                                                    <FontAwesomeIcon icon={faCheck} className="text-[#6E5E93] mr-2.5 w-4 h-4" />
                                                    Accurate Visual Placement Guidelines
                                                </h4>
                                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed m-0">Place the symbol as a superscript (™ or ®) or subscript at the upper-right or lower-right corner of your brand name or logo. Ensure it is legible but distinct from the core trademark graphic so it does not alter the registered mark representation.</p>
                                            </div>

                                            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center text-base">
                                                    <FontAwesomeIcon icon={faCheck} className="text-[#6E5E93] mr-2.5 w-4 h-4" />
                                                    Class-Specific Use Restriction
                                                </h4>
                                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed m-0">If your business sells multiple product lines, remember that the ® symbol is strictly restricted to the specific classes listed on your registration certificate. If you expand into new product categories, you must file a new Form TM-A and use ™ on those new categories until registered.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h3>
                                        <p className="mb-8">Here are direct legal answers to the most common questions entrepreneurs, founders, and brand custodians ask regarding TM, ®, and SM symbol usage in India:</p>

                                        <div className="space-y-6 not-prose">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border border-gray-200 rounded-2xl p-6 bg-gray-50 hover:bg-white transition-all shadow-sm">
                                                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3 flex items-start">
                                                        <span className="text-[#6E5E93] mr-3 font-black">Q{index + 1}.</span>
                                                        {faq.question}
                                                    </h4>
                                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-8 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 10: STRATEGIC COUNSEL / FINAL TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Strategic Counsel for Brand Custodians
                                        </h3>
                                        <p className="mb-6">Your brand name, logo, and visual identity are among your enterprise&apos;s most valuable commercial assets. Understanding the precise legal divide between the<strong>™</strong>and<strong>®</strong>symbols ensures that you build an impenetrable brand fortress while staying fully compliant with Indian statutory law.</p>
                                        <p className="mb-6">For early-stage startups and established corporations alike, the recommended practice is straightforward: conduct a comprehensive clearance search via a<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>, file Form TM-A immediately to claim your ™ priority, actively resolve any examination objections, and proudly deploy the ® symbol the moment your registration certificate is sealed.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Trademark Registration
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Upgrade from ™ to ® with Expert IP Lawyers
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Secure nationwide legal exclusivity for your brand name and logo. Partner with seasoned IP attorneys for comprehensive trademark search, swift Form TM-A e-filing, objection management, and guaranteed compliance.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Register Brand Online</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Certified IP Advocates • Same-Day Form TM-A E-Filing • Transparent Government Fee Invoicing</p>
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, trademark symbol compliance, and portfolio prosecution under the Trade Marks Act, 1999. He helps founders safeguard their commercial goodwill.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-xl font-black mb-4 relative z-10 leading-tight">Secure Your ® Symbol</h4>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">File your brand trademark today. Transition legally from ™ to ® with registered IP advocates.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        File Form TM-A
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Filing Steps</span></Link></li>
                                    <li><Link href="/trademark-application-status" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Track TM Status</span></Link></li>
                                    <li><Link href="/how-to-renew-a-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faClock} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Renewal</span></Link></li>
                                    <li><Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Search</span></Link></li>
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Guide</span></Link></li>
                                    <li><Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Guide</span></Link></li>
                                    <li><Link href="/international-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Global TM</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
