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
    faGlobe,
    faClock,
    faRotate,
    faStamp,
    faGavel,
    faHandshake,
    faBuildingShield,
    faFileLines,
    faBan
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Respond to a Trademark Infringement Legal Notice in India",
    description: validateAndNormalizeDescription(
        "Received a trademark infringement notice in India? Learn how to respond, statutory defenses under Section 30 & 34, reply drafting, and caveat rules.",
        "app/how-to-respond-to-trademark-infringement-legal-notice-in-india/page.tsx"
    ),
    keywords: [
        "how to respond to trademark infringement legal notice in india",
        "reply to trademark legal notice format india",
        "trademark infringement cease and desist reply",
        "trademark notice defense section 30 34",
        "section 142 groundless threats trademark india",
        "trademark caveat petition high court india",
        "prior user rights defense trademark notice",
        "trademark legal notice response timeline",
        "trademark coexistence agreement india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-respond-to-trademark-infringement-legal-notice-in-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How to Respond to a Trademark Infringement Legal Notice in India",
        description: "Received a trademark infringement notice in India? Learn how to respond, statutory defenses under Section 30 & 34, reply drafting, and caveat rules.",
        url: "https://www.iprkaro.com/how-to-respond-to-trademark-infringement-legal-notice-in-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-respond-to-trademark-infringement-legal-notice-in-india.png",
                width: 1200,
                height: 630,
                alt: "How to Respond to a Trademark Infringement Legal Notice in India Defenses & Reply Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Respond to a Trademark Infringement Legal Notice in India",
        description: "Received a trademark infringement notice in India? Learn how to respond, statutory defenses under Section 30 & 34, reply drafting, and caveat rules.",
        images: ["https://www.iprkaro.com/images/og/how-to-respond-to-trademark-infringement-legal-notice-in-india.png"],
    }
};

const faqs = [
    {
        question: "What should be my first step upon receiving a trademark infringement legal notice?",
        answer: "The very first step is to preserve all records and refrain from contacting the sender or their advocate directly without legal guidance. Note the exact date and mode of receipt to calculate the statutory reply deadline (usually 7, 15, or 30 days). Conduct an immediate audit of the claimant's trademark on the IP India portal to verify if their mark is genuinely registered, pending, abandoned, or subject to class disclaimers, and consult an intellectual property advocate to formulate a response strategy."
    },
    {
        question: "What is the typical time limit to respond to a trademark legal notice in India?",
        answer: "Most trademark cease-and-desist notices stipulate a response window of 7, 15, or 30 days from the date of receipt. While there is no rigid statutory code setting a universal deadline for private notices, failing to reply within the demanded timeframe allows the claimant to approach the District Court or High Court for an ex-parte interim injunction under Order 39 Rules 1 and 2 of the CPC. If drafting requires archival proof, an interim holding reply can request a reasonable 10 to 14-day extension."
    },
    {
        question: "Can I be sued in court if I ignore a trademark infringement legal notice?",
        answer: "Yes. Ignoring a legal notice does not halt legal consequences; in fact, it severely damages your credibility before commercial courts. Under Indian civil procedure, unreplied notices are used by plaintiffs to demonstrate deliberate, willful infringement and bad faith. Courts are significantly more inclined to grant ex-parte ad-interim restraining injunctions and seizure orders when the defendant has completely neglected a formal pre-litigation cease-and-desist demand."
    },
    {
        question: "What is the 'Prior User' defense under Section 34 of the Trade Marks Act?",
        answer: "Under Section 34 of the Trade Marks Act, 1999, prior continuous commercial use of a trademark supersedes a subsequent registration. India follows the 'first-to-use' common-law principle over 'first-to-file'. As established by the Supreme Court in Neon Laboratories v. Medical Technologies, if you can prove commercial use of the mark prior to the claimant's registration date or claimed use date through invoices, tax filings, and domain receipts, the registered proprietor cannot restrain your continuous business operations."
    },
    {
        question: "Can I claim defense under Section 30 if my business sells compatible accessories or spare parts?",
        answer: "Yes. Section 30(2)(d) of the Trade Marks Act explicitly provides that using a registered trademark to indicate the intended purpose of goods—such as compatible spare parts, replacement accessories, or specialized repair services—does not constitute infringement. This statutory defense applies provided the use is strictly necessary, conforms to honest industrial practices, and does not falsely imply affiliation, sponsorship, or official brand endorsement."
    },
    {
        question: "What legal recourse do I have if a competitor issues a baseless or groundless trademark threat?",
        answer: "If a competitor issues reckless or unfounded legal notices without legitimate proprietary standing or in bad faith to disrupt your market operations, you can counter-attack under Section 142 of the Trade Marks Act, 1999. Section 142 empowers the aggrieved party to file a civil suit for a declaration that the threats are unjustifiable, obtain a permanent injunction restraining further threats, and recover damages sustained from the commercial disruption."
    },
    {
        question: "What is a Caveat petition and should I file one after receiving a notice?",
        answer: "A Caveat petition under Section 148A of the Code of Civil Procedure (CPC) is a proactive legal safeguard filed in the Commercial Court or High Court having jurisdiction. It mandates that the court cannot grant any ex-parte interim order or injunction against you without serving prior advance notice to your counsel. If the notice sender threatens immediate litigation, filing a caveat prevents surprise store closures, website takedowns, or warehouse seizures."
    },
    {
        question: "Can a trademark legal notice dispute be resolved through an amicable Coexistence Agreement?",
        answer: "Yes. Many trademark conflicts do not stem from intentional counterfeiting but from commercial overlap in related market segments. Parties frequently resolve notice disputes without expensive litigation by negotiating a formal Trademark Coexistence Agreement. Such settlements establish clear demarcations—such as territorial restrictions, distinctive font or color guidelines, trade channel separations, and explicit disclaimers on packaging and digital assets."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "anatomy-of-notice", title: "Anatomy of Legal Notice" },
    { id: "initial-triage", title: "Initial 48-Hour Triage" },
    { id: "statutory-defenses", title: "Key Legal Defenses" },
    { id: "step-by-step-reply", title: "7-Step Reply Workflow" },
    { id: "defense-matrix-table", title: "Defense & Risk Matrix" },
    { id: "groundless-threats", title: "Section 142 Counter-Suit" },
    { id: "critical-mistakes", title: "Mistakes to Avoid" },
    { id: "checklist", title: "Response Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic IP Advice" },
];

export default function TrademarkNoticeReplyPage() {
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
        "headline": "How to Respond to a Trademark Infringement Legal Notice in India: Defenses & Reply Guide",
        "description": "Received a trademark infringement notice in India? Learn how to respond, statutory defenses under Section 30 & 34, reply drafting, and caveat rules.",
        "image": "https://www.iprkaro.com/images/og/how-to-respond-to-trademark-infringement-legal-notice-in-india.png",
        "datePublished": "2026-09-28T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/how-to-respond-to-trademark-infringement-legal-notice-in-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Respond to a Trademark Infringement Legal Notice in India",
        "url": "https://www.iprkaro.com/how-to-respond-to-trademark-infringement-legal-notice-in-india",
        "description": "Received a trademark infringement notice in India? Learn how to respond, statutory defenses under Section 30 & 34, reply drafting, and caveat rules.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-respond-to-trademark-infringement-legal-notice-in-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-respond-to-trademark-infringement-legal-notice-in-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Notice Reply Guide", "item": "https://www.iprkaro.com/how-to-respond-to-trademark-infringement-legal-notice-in-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Respond to a Trademark Infringement Legal Notice in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Receipt Logging & Statutory Timeline Docketing" },
            { "@type": "ListItem", "position": 2, "name": "Claimant Title & Registry Status Verification on IP India Portal" },
            { "@type": "ListItem", "position": 3, "name": "Archival Inception & Prior Commercial Use Evidence Collation" },
            { "@type": "ListItem", "position": 4, "name": "Formulation of Statutory Defenses under Section 30, 34, or 35" },
            { "@type": "ListItem", "position": 5, "name": "Drafting Formal Rebuttal Reply with Advocate Authorization" },
            { "@type": "ListItem", "position": 6, "name": "Service of Legal Response via Registered Post AD & E-Mail" },
            { "@type": "ListItem", "position": 7, "name": "Protective Caveat Lodging & Rectification Counter-Strategy" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">IP Litigation &amp; Defense Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to Respond to a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Infringement Legal Notice</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Receiving a formal cease-and-desist or trademark infringement legal notice can threaten your brand identity, e-commerce listings, and business operations. Under the Trade Marks Act, 1999, an uncalculated reply or failure to respond can expose your enterprise to ex-parte injunctions, account seizures, and punitive damages. Discover the complete legal protocol to deconstruct infringement allegations, assert statutory defenses under Sections 30, 34, and 35, draft an unassailable legal rebuttal, and protect your commercial enterprise against groundless threats.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Defense Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Draft Legal Reply Now <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/how-to-respond-to-trademark-infringement-legal-notice-in-india.png"
                                    alt="How to Respond to a Trademark Infringement Legal Notice in India Defenses & Reply Guide"
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
                        { label: "Trademark Notice Reply Guide", href: "/how-to-respond-to-trademark-infringement-legal-notice-in-india" }
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
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Legal Notice Reply
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                A trademark infringement legal notice (cease-and-desist letter) is a formal pre-litigation document sent by a trademark proprietor alleging unauthorized use of an identical or deceptively similar mark under Section 29 of the Trade Marks Act, 1999. In India, you must respond through legal counsel within the stipulated window (typically 7 to 15 days). Valid statutory defenses include prior commercial use under Section 34, honest concurrent use or fair descriptive use under Section 30, use of personal or descriptive names under Section 35, or non-use cancellation vulnerability under Section 47. If the notice constitutes a baseless threat, a counter-suit under Section 142 can be initiated.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            In India’s fast-evolving commerce landscape, receiving a cease-and-desist letter from a competitor, legacy conglomerate, or legal firm is one of the most critical operational emergencies a startup, D2C manufacturer, or e-commerce merchant can encounter. It typically demands an immediate cessation of brand usage, destruction of inventory, handover of domain names, de-listing from digital marketplaces, and financial compensation for alleged infringement or <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off</Link>.
                                        </p>
                                        <p className="mb-6">
                                            However, receiving a notice is not a court summons, nor does it establish legal guilt. In Indian trademark jurisprudence, many cease-and-desist notices are tactical maneuvers designed to intimidate newer market entrants. The Trade Marks Act, 1999 provides robust statutory defenses that shield bona fide businesses from overreaching trademark monopolies. Understanding your rights under substantive IP law and procedural law under the Code of Civil Procedure (CPC) enables you to neutralize unwarranted claims and preserve your market standing.
                                        </p>
                                        <p className="mb-6">
                                            Before reacting emotionally or acquiescing to punitive demands, businesses must execute an analytical legal audit. By dissecting the claimant’s registered claims, examining product class overlap, verifying continuous dates of usage, and engaging seasoned trademark counsel, you can transform a potential litigation crisis into a strategic commercial defense.
                                        </p>
                                    </section>

                                    {/* SECTION 2: ANATOMY OF A LEGAL NOTICE */}
                                    <section id="anatomy-of-notice" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Anatomy of a Trademark Notice
                                        </h2>
                                        <p className="mb-6">
                                            A standard trademark infringement notice drafted by an IP advocate contains specific statutory assertions. Recognizing these structural components helps you and your counsel identify vulnerabilities in the claimant’s posture:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Proprietary Title &amp; Class Scope
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    The notice outlines the claimant’s trademark registration numbers, registered word/device marks, filing dates, and specific <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">Nice classification classes</Link>. It asserts exclusive ownership rights under Section 28 of the Trade Marks Act, 1999.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Allegations of Infringement &amp; Passing Off
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    The notice alleges that your commercial use creates consumer confusion, dilutes brand reputation, or dishonestly misappropriates goodwill under Section 29 (statutory infringement) or common-law passing off.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Demands for Cease, Desist &amp; Surrender
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Demands typically mandate immediate cessation of commercial use, withdrawal of pending trademark applications, cancellation of domain names, destruction of packaging, and handover of promotional materials.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Litigation Threats &amp; Time Deadlines
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    The document stipulates a strict reply window (typically 7 to 15 days), threatening civil suits under Section 134, <Link href="/civil-vs-criminal-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">criminal complaints</Link> under Sections 103/104, Anton Piller seizure orders, and heavy damages if compliance is not confirmed.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: INITIAL 48-HOUR TRIAGE */}
                                    <section id="initial-triage" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Immediate 48-Hour Triage Protocol
                                        </h2>
                                        <p className="mb-6">
                                            How you manage the initial 48 hours after receiving a trademark legal notice sets the trajectory of any future dispute. Follow this 5-point triage protocol to prevent unforced legal errors:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Do Not Panic and Never Ignore the Communication</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Disregarding a formal notice is catastrophic. Silence allows the claimant to establish before a High Court or Commercial District Court that you had constructive knowledge of their proprietary mark and willfully continued infringing, making ex-parte injunctions far easier to obtain.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Strictly Prohibit Direct Contact with the Sender</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Do not call, WhatsApp, or email the sender or their legal counsel directly to apologize, offer settlements, or explain your innocence. Informal statements and admissions of similarity made in panic can be produced in court as admissible admissions of liability under the Indian Evidence Act.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Record and Preserve the Exact Date of Receipt</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Retain the postal envelope showing the India Post Speed Post / Registered AD tracking barcode, courier receipt, or email headers. The legal clock to reply starts strictly from the verified date you received the communication, not the drafting date on the letterhead.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Conduct an Independent IP Registry Audit</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Use the official <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India Portal</a> or perform a comprehensive <Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link> to inspect the claimant’s trademark application number. Confirm whether the mark is actively registered, pending examination, opposed, abandoned, or subject to registry disclaimers and conditions.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">5. Engage Specialized Intellectual Property Counsel</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Retain a registered trademark attorney or IP litigation advocate who understands the nuances of the Trade Marks Act, 1999 and the Commercial Courts Act, 2015. General civil lawyers frequently miss crucial IP-specific defenses such as prior user superiority, anti-dissection doctrines, and non-use vulnerabilities.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: KEY STATUTORY DEFENSES */}
                                    <section id="statutory-defenses" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Key Legal Defenses in India
                                        </h2>
                                        <p className="mb-6">
                                            The Trade Marks Act, 1999 provides well-defined statutory shields against claims of infringement and passing off. When formulating your rebuttal reply, your advocate will evaluate which of the following statutory defenses apply to your commercial operations:
                                        </p>

                                        {/* DEFENSE 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Defense 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Statutory Provision: Section 34</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Prior Continuous Commercial Use (First-to-Use Rule)</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                India is fundamentally a common-law &ldquo;first-to-use&rdquo; trademark jurisdiction rather than a &ldquo;first-to-file&rdquo; system. Under <strong>Section 34 of the Trade Marks Act, 1999</strong>, a registered trademark proprietor cannot interfere with or restrain the continuous commercial use of an identical or similar mark by a person who has continuously used that mark from a date prior to the claimant&rsquo;s registration date or claimed use date.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                This statutory defense was firmly upheld by the Supreme Court of India in the landmark judgment <em>Neon Laboratories Ltd. v. Medical Technologies Ltd. (2016)</em>. If your business possesses GST invoices, purchase orders, audited balance sheets, utility bills, or domain records showing continuous trade prior to the sender&rsquo;s priority date, your prior user rights override their registration. Learn more about compiling your commercial timeline in our guide on <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit format and rules</Link>.
                                            </p>
                                        </div>

                                        {/* DEFENSE 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Defense 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Statutory Provision: Section 30</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Acts Not Constituting Infringement (Fair &amp; Descriptive Use)</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Under <strong>Section 30 of the Trade Marks Act</strong>, certain categories of commercial use are statutorily declared as non-infringing:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Descriptive Indications (Section 30(2)(a)):</strong> Using a word mark in good faith to describe the kind, quality, quantity, intended purpose, value, geographical origin, or time of production of goods or services.</li>
                                                <li><strong>Accessories &amp; Spare Parts (Section 30(2)(d)):</strong> Using a mark to indicate that your goods are compatible spare parts, accessories, or adapted components for the claimant&rsquo;s machinery or consumer products, provided such use conforms to honest commercial practices.</li>
                                                <li><strong>Exhaustion of Rights &amp; Parallel Imports (Section 30(3)):</strong> Reselling genuine, lawfully purchased branded goods under the principle of market exhaustion, provided the goods have not been impaired or materially altered.</li>
                                            </ul>
                                        </div>

                                        {/* DEFENSE 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Defense 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Statutory Provision: Section 35</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Bona Fide Use of Personal Name or Place of Business</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                <strong>Section 35</strong> provides absolute protection for individuals and business proprietors using their own bona fide personal names, family surnames, or names of their place of business in commercial dealings. A registered proprietor cannot restrain a person from genuinely trading under their actual name, provided the usage is honest and devoid of deceptive intention to piggyback on another&rsquo;s established goodwill.
                                            </p>
                                        </div>

                                        {/* DEFENSE 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Defense 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Statutory Provision: Section 17 &amp; 28(2)</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Disclaimers, Composite Marks &amp; Anti-Dissection Rule</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Under <strong>Section 17 of the Trade Marks Act</strong>, when a trademark consists of several matters, its registration confers exclusive rights to the use of the mark taken as a whole. The proprietor cannot claim exclusive proprietary rights over individual non-distinctive, generic, or descriptive elements of a composite label.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Furthermore, if the Trade Marks Registry granted registration with an explicit condition or disclaimer (e.g., &ldquo;No exclusive right over the descriptive word BIO or INDIA&rdquo;), the proprietor cannot enforce exclusivity over that specific term against third parties. Review how conditions operate in our detailed analysis on <Link href="/trademark-disclaimer-condition-meaning-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark disclaimer and condition meaning in India</Link>.
                                            </p>
                                        </div>

                                        {/* DEFENSE 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Defense 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Statutory Provision: Section 29(1) &amp; Case Law</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Absence of Deceptive Similarity &amp; Disparate Trade Channels</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                To establish infringement under Section 29(1), the claimant must prove that your mark is deceptively similar and likely to cause confusion among consumers with average intelligence and imperfect recollection (the classic <em>Cadila Healthcare Ltd. v. Cadila Pharmaceuticals Ltd.</em> 7-factor test).
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                If the marks exhibit pronounced visual, phonetic, and structural differences, cater to sophisticated B2B buyers rather than ordinary consumers, or operate in distinctly separated trade channels with vast price differentials, the allegation of consumer confusion collapses under judicial scrutiny.
                                            </p>
                                        </div>

                                        {/* DEFENSE 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Defense 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Statutory Provision: Section 47 &amp; 57</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Vulnerability to Rectification &amp; Non-Use Cancellation</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Under <strong>Section 47 of the Trade Marks Act</strong>, a registered trademark that has remained unused in commerce for a continuous period of 5 years and 3 months from the date of registration is vulnerable to complete removal from the register.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                If the notice sender has parked their trademark without genuine commercial sales, your reply can place them on notice of an impending rectification petition under Section 57. The risk of losing their entire registration often induces aggressive claimants to withdraw notices or seek an amicable settlement. Explore our complete guide on <Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark cancellation for 5-year non-use in India</Link> and <Link href="/how-to-file-trademark-rectification-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to file trademark rectification in India</Link>.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 5: 7-STEP PROFESSIONAL REPLY WORKFLOW */}
                                    <section id="step-by-step-reply" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Professional Reply Process
                                        </h2>
                                        <p className="mb-6">
                                            Executing a legally airtight reply to a trademark infringement notice requires systematic drafting, evidentiary validation, and formal service. Follow these 7 professional stages:
                                        </p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Notice Deconstruction</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Notice Deconstruction &amp; Timeline Docketing</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Carefully review every paragraph of the notice letter. Identify the claimant entity, their instructing legal counsel, specific registration citations, alleged infringing activities (e.g., logo, word mark, packaging trade dress, domain name), and demanded deadline.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Calculate the exact reply deadline based on the date of physical receipt or electronic timestamp. If substantial evidentiary gathering is necessary, instruct your counsel to issue an immediate interim holding reply seeking a formal extension of 10 to 14 days.
                                            </p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Registry Verification</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Claimant Standing &amp; Registry Scrutiny</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Inspect the electronic register of trademarks on the IP India portal. Examine the claimant’s original Form TM-A or TM-1, claimed user date affidavit, examination reports, and journal advertisements.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Confirm whether the mark is actively registered or merely pending/objected. Check if the claimant claimed &ldquo;Proposed to be Used&rdquo; at the time of filing, as this severely compromises their claims against prior market users. You can evaluate the distinction between pending and registered marks in our guide on <Link href="/difference-between-tm-and-r-symbol-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">difference between TM and R symbol in India</Link>.
                                            </p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Evidence Collation</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Collation of Commercial Inception Evidence</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Gather comprehensive documentary proof establishing the commercial genesis and continuous market adoption of your mark:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li>First GST sales invoices, vendor contracts, and purchase orders bearing the mark.</li>
                                                <li>Domain registration WHOIS receipts and Wayback Machine website archives.</li>
                                                <li>Product packaging photographs, manufacturing batch records, and FSSAI/ISO licenses.</li>
                                                <li>Audited turnover certificates from a Chartered Accountant demonstrating extensive brand investments.</li>
                                            </ul>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Defense Strategy</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Formulating the Defense Strategy &amp; Reply Posture</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Collaborate with your IP advocate to determine the strategic posture of your reply:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Aggressive Rebuttal:</strong> Asserting senior prior use under Section 34, disproving deceptive similarity, and threatening counter-suits under Section 142.</li>
                                                <li><strong>Statutory Justification:</strong> Demonstrating fair descriptive use, compatibility spare parts usage under Section 30, or personal name defense under Section 35.</li>
                                                <li><strong>Commercial Settlement / Coexistence:</strong> Offering minor packaging modifications, logo font alterations, or market segment boundaries under a formal <Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark consent letter and coexistence agreement</Link>.</li>
                                            </ul>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Rebuttal Drafting</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Drafting the Formal Legal Reply</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Your advocate drafts a comprehensive, point-by-point rebuttal on their official legal letterhead. The reply must include:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li>Formal denial of all allegations of bad faith, piracy, passing off, and dishonest adoption.</li>
                                                <li>Detailed factual history of your bona fide commercial adoption and continuous market goodwill.</li>
                                                <li>Elaboration of applicable statutory defenses (Sections 30, 34, 35, 17).</li>
                                                <li>Citations of binding Supreme Court and High Court precedents establishing no likelihood of confusion.</li>
                                                <li>Formal demand that the claimant unconditionally withdraw their notice within 7 days, failing which legal counter-actions will follow at their sole risk and expense.</li>
                                            </ul>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Formal Service</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Formal Service via Registered AD &amp; Electronic Modes</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                The executed legal reply must be formally dispatched to both the claimant’s registered address and their instructing advocate&rsquo;s office address.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Dispatch the response simultaneously via India Post Speed Post / Registered Post with Acknowledgment Due (RPAD) and digitally via email with read-receipt tracking. Retain postal receipts and India Post delivery tracking certificates as conclusive legal proof of service.
                                            </p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Preemptive Injunction Safeguard</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Filing a Caveat Petition under Section 148A CPC</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                If the claimant is a well-funded enterprise with a history of aggressive IP litigation, do not wait passively for a court summons. File a <strong>Caveat Petition under Section 148A of the Code of Civil Procedure, 1908</strong> in the High Court or Commercial District Court having territorial jurisdiction.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                A Caveat remains valid for 90 days and legally obligates the court to notify your counsel and grant an oral hearing before passing any ex-parte ad-interim injunction, product seizure, or restraining order against your commercial operations.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 6: DEFENSE & RISK MATRIX TABLE */}
                                    <section id="defense-matrix-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Defense &amp; Risk Strategy Matrix
                                        </h2>
                                        <p className="mb-6">
                                            Evaluating your dispute scenario against established statutory thresholds enables you to select the most effective legal response while minimizing commercial litigation risks:
                                        </p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Dispute Scenario</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Primary Defense Provision</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Key Evidence Required</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Recommended Legal Action</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Litigation Risk Level</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Continuous Use Before Claimant's Priority Date</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Section 34 (Prior User Superiority)</td>
                                                        <td className="px-6 py-4">Invoices, tax records, domain receipts predating filing date</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Aggressive Rebuttal + Caveat Petition</td>
                                                        <td className="px-6 py-4 text-green-600 font-semibold">Low (Strong Legal Defense)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Selling Compatible Accessories / Spare Parts</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Section 30(2)(d) (Fair Descriptive Use)</td>
                                                        <td className="px-6 py-4">Packaging disclaimers of non-affiliation &amp; fitment notes</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">Statutory Clarification Reply + Packaging Review</td>
                                                        <td className="px-6 py-4 text-green-600 font-semibold">Low</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Trading Under Own Name / Family Surname</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Section 35 (Bona Fide Personal Name)</td>
                                                        <td className="px-6 py-4">Aadhaar, PAN, incorporation certificate, ancestral usage</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">Legal Rebuttal under Section 35</td>
                                                        <td className="px-6 py-4 text-amber-600 font-semibold">Moderate</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Claimant Has Not Used Mark for 5+ Years</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Section 47 &amp; Section 57</td>
                                                        <td className="px-6 py-4">Market search report showing lack of genuine sales</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">Reply Warning + Rectification Application (TM-O)</td>
                                                        <td className="px-6 py-4 text-green-600 font-semibold">Low (High Counter-Leverage)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Baseless Bullying by Competitor</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Section 142 (Groundless Threats)</td>
                                                        <td className="px-6 py-4">Notice copy, proof of no likelihood of confusion</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">Counter-Suit for Injunction &amp; Damages</td>
                                                        <td className="px-6 py-4 text-green-600 font-semibold">Favorable</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Identical Mark Adopted Recently without Prior Search</td>
                                                        <td className="px-6 py-4 font-medium text-amber-700">None (Substantive Infringement)</td>
                                                        <td className="px-6 py-4">Recent commercial adoption records</td>
                                                        <td className="px-6 py-4 text-amber-700 font-bold">Negotiate Coexistence or Phased Rebrand</td>
                                                        <td className="px-6 py-4 text-red-600 font-semibold">High (Immediate Settlement Recommended)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 7: SECTION 142 GROUNDLESS THREATS */}
                                    <section id="groundless-threats" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Countering Groundless Legal Threats
                                        </h2>
                                        <p className="mb-6">
                                            Large corporations and aggressive competitors frequently weaponize trademark legal notices to stifle emerging competitors who have not committed any actual infringement. To prevent IP bullying, the Indian Parliament enacted a powerful legal deterrent: <strong>Section 142 of the Trade Marks Act, 1999</strong> (Groundless threats of legal proceedings).
                                        </p>

                                        <div className="bg-amber-50/60 p-6 md:p-8 rounded-2xl border border-amber-200 mb-8 not-prose">
                                            <h3 className="text-lg font-bold text-amber-950 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5 mr-2 text-amber-800" />
                                                Statutory Remedies under Section 142
                                            </h3>
                                            <p className="text-sm text-amber-900 leading-relaxed mb-4">
                                                Where any person by circulars, advertisements, or written notices threatens any other person with an action or proceeding for trademark infringement, the person aggrieved may institute a civil suit against the sender and obtain:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-amber-950 mb-4 font-medium">
                                                <li>A judicial declaration that the threats are unjustifiable and unwarranted.</li>
                                                <li>A permanent injunction restraining the continuance of the threats.</li>
                                                <li>Recovery of actual and punitive damages sustained as a result of the threats (e.g., compensation for lost e-commerce sales or cancelled distributor contracts).</li>
                                            </ul>
                                            <p className="text-xs text-amber-900 m-0">
                                                <strong>Strategic Advantage:</strong> Merely citing Section 142 and indicating readiness to file a declaratory suit in the commercial court shifts litigation liability directly onto the claimant, forcing them to justify their claims or withdraw the notice.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            However, Section 142(2) provides that this provision does not apply if the registered proprietor with due diligence commences and prosecutes an action against the person threatened for infringement. Therefore, coupling a Section 142 rebuttal with a timely Caveat petition ensures complete tactical protection. Learn more about how courts penalize frivolous litigation in our review on <Link href="/penalty-for-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">penalty for trademark infringement in India</Link> and study landmark battles in our analysis of <Link href="/famous-trademark-infringement-cases-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">famous trademark infringement cases in India</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 8: CRITICAL MISTAKES TO AVOID */}
                                    <section id="critical-mistakes" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Mistakes to Avoid When Replying
                                        </h2>
                                        <p className="mb-6">
                                            Responding to intellectual property notices requires strict precision. Avoid these common errors that routinely compromise legal defense strategies:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Admitting Similarity or Inadvertent Copying</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Phrases like &ldquo;we were unaware of your mark and will stop using it if asked&rdquo; or &ldquo;we only chose this name because it was similar to yours&rdquo; act as fatal admissions in court. Every communication must be reviewed by legal counsel.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Firing off an Emotional, Unrepresented Email</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Responding directly from your personal or corporate email without formal legal backing signals weakness and lack of legal sophistication. Corporate notices require a formal response from an enrolled advocate under legal letterhead.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Destroying Historical Commercial Records</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Never discard old invoices, packaging archives, domain receipts, or brochures. In trademark litigation under Section 34, your oldest date-stamped document is your most valuable asset.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Venting on Social Media / Public Platforms</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Publishing the legal notice on LinkedIn, X (Twitter), or Instagram to garner sympathy often backfires. It gives the claimant grounds to file additional claims for commercial defamation, trade libel, and aggravated damages.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: RESPONSE CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Notice Response Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Log &amp; Calculate Deadline:</strong> Record date of physical/email delivery and calculate the reply deadline (typically 7–15 days).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Verify IP India Database:</strong> Check claimant&rsquo;s registration status, classes, disclaimers, and user date on the official registry portal.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Assemble Prior Invoices:</strong> Collate the earliest date-stamped tax invoices, purchase orders, and audited balance sheets proving continuous usage.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Execute Form TM-48 Power of Attorney:</strong> Retain experienced IP litigation counsel and execute stamped authorization.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Draft Comprehensive Legal Reply:</strong> Detail statutory defenses under Sections 30, 34, 35, or 17 with case law precedents.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Serve via Registered AD &amp; Email:</strong> Dispatch physical speed post with tracking and send digital copy via certified email.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>File Section 148A CPC Caveat:</strong> Lodge a caveat in the jurisdictional High Court or Commercial District Court to block ex-parte injunctions.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 10: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 11: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Legal Advice &amp; Defense Guidance
                                        </h2>
                                        <p className="mb-6">
                                            A trademark infringement legal notice is a high-stakes legal juncture that demands swift, calculated action. By asserting prior use under Section 34, establishing descriptive or fair use under Section 30, disproving deceptive similarity, and threatening counter-actions under Section 142 against groundless threats, you can effectively defend your brand and prevent commercial loss.
                                        </p>
                                        <p className="mb-6">
                                            Never attempt to resolve an infringement notice through informal phone calls or unvetted email admissions. Engaging specialized IP litigation advocates ensures that your legal reply is framed with judicial rigor, evidentiary strength, and procedural protection. If you are also looking to protect your brand proactively from unauthorized use by third parties, consult our comprehensive handbook on <Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send trademark legal notice in India</Link> and learn <Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">how to stop trademark infringement</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Trademark Defense
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Respond to Trademark Legal Notice Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Partner with expert IP litigation attorneys to evaluate infringement claims, formulate statutory defenses under Section 30 &amp; 34, and draft an unassailable legal reply before the deadline expires.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Draft Legal Reply Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified IP Advocates • Same-Day Notice Triage • High Court Caveat &amp; Injunction Defense
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, trademark dispute resolution, and commercial litigation defense under the Trade Marks Act, 1999. He assists enterprises in safeguarding their brand autonomy.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Draft Legal Reply Now</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Received an infringement notice? Defend your brand with senior IP litigation advocates before the court deadline lapses.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Consult IP Litigator
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Infringement vs Passing Off</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/civil-vs-criminal-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Civil vs Criminal TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Penalties</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-consent-letter-coexistence-agreement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faHandshake} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Coexistence Pact</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">5-Yr Non-Use Cancel</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-file-trademark-rectification-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBan} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Rectification</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Famous TM Cases</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span>
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
