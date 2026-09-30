import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faScaleBalanced,
    faTable,
    faCheckCircle,
    faExclamationTriangle,
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faPhone,
    faBuildingShield,
    faGavel,
    faStamp,
    faBan,
    faBookOpen,
    faHandHoldingHand,
    faHandcuffs,
    faBullhorn,
    faMoneyBillTrendUp,
    faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Section 142 Groundless Threats Guide: Trade Marks Act",
    description: validateAndNormalizeDescription(
        "Understand Section 142 of Trade Marks Act 1999 in India. Learn how to counter baseless cease & desist notices, seek injunctions, and claim damages.",
        "app/groundless-threats-of-legal-proceedings-section-142-trademark-india/page.tsx"
    ),
    keywords: [
        "groundless threats of legal proceedings under section 142 trademark act india",
        "how to fight fake trademark legal notice",
        "section 142 trade marks act 1999 suit for damages",
        "malicious cease and desist notice defense",
        "suing for groundless trademark threats",
        "unjustifiable trademark infringement threat remedy",
        "section 142 proviso due diligence infringement action",
        "anti trademark bullying laws in india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/groundless-threats-of-legal-proceedings-section-142-trademark-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Section 142 Groundless Threats Guide: Trade Marks Act",
        description: "Understand Section 142 of Trade Marks Act 1999 in India. Learn how to counter baseless cease & desist notices, seek injunctions, and claim damages.",
        url: "https://www.iprkaro.com/groundless-threats-of-legal-proceedings-section-142-trademark-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/groundless-threats-of-legal-proceedings-section-142-trademark-india.png",
                width: 1200,
                height: 630,
                alt: "Groundless Threats of Legal Proceedings under Section 142 Trade Marks Act India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Section 142 Groundless Threats Guide: Trade Marks Act",
        description: "Understand Section 142 of Trade Marks Act 1999 in India. Learn how to counter baseless cease & desist notices, seek injunctions, and claim damages.",
        images: ["https://www.iprkaro.com/images/og/groundless-threats-of-legal-proceedings-section-142-trademark-india.png"],
    }
};

const faqs = [
    {
        question: "What constitutes a 'groundless threat' under Section 142 of the Trade Marks Act, 1999?",
        answer: "Under Section 142(1), a groundless threat occurs when a person—whether having registered trademark rights or not—threatens any other business with legal proceedings, civil litigation, or criminal liability for alleged trademark infringement through circulars, advertisements, emails, letters, or social media statements, where the threat has no legal justification or genuine merit."
    },
    {
        question: "What statutory remedies can an aggrieved party claim under Section 142?",
        answer: "An aggrieved recipient can institute a civil suit in a Commercial Court seeking three distinct statutory remedies: (1) A judicial declaration that the threats are unjustifiable and groundless; (2) A permanent injunction restraining the defendant from continuing or repeating such threats; and (3) Recovery of financial damages sustained due to commercial injury, lost sales, or canceled distributor contracts caused by the threats."
    },
    {
        question: "What is the Section 142(2) proviso defense available to trademark proprietors?",
        answer: "Under Section 142(2), Section 142 does not apply if the person issuing the legal notice commences and prosecutes with due diligence an action for trademark infringement against the alleged infringer. If the sender files a substantive infringement suit in a competent court promptly, the groundless threat action gets stayed or merged with the infringement trial."
    },
    {
        question: "Is a formal lawyer's Cease and Desist notice considered a groundless threat?",
        answer: "A mere polite notice informing an entity of existing registered rights and requesting confirmation of non-use is generally permissible. However, if the notice contains aggressive, coercive ultimata, threatens unwarranted damages, or is issued by a party with no registered rights or prior use against a bona fide prior user, Indian courts classify it as an actionable groundless threat under Section 142."
    },
    {
        question: "Can a startup sue an enterprise corporation for trademark bullying under Section 142?",
        answer: "Yes. Section 142 is a powerful anti-bullying statutory weapon specifically enacted by Parliament to protect small enterprises and startups from monopolistic intimidation. If an enterprise brand sends baseless infringement threats to coerce a startup into surrendering a distinctive, non-infringing mark, the startup can file a Section 142 suit and claim monetary compensation."
    },
    {
        question: "Which court has jurisdiction to hear a Section 142 suit in India?",
        answer: "A suit under Section 142 is filed before a District Court or the High Court exercising Original Civil Jurisdiction (such as Delhi, Bombay, Madras, or Calcutta High Courts) within whose local jurisdiction the cause of action arises—specifically where the groundless threats were received or where the plaintiff carries on business."
    },
    {
        question: "How can damages be proved and calculated in a Section 142 groundless threat lawsuit?",
        answer: "The plaintiff must provide documented evidence of tangible financial injury directly caused by the threat—such as termination letters from e-commerce platforms (Amazon/Flipkart), canceled supply contracts from distributors, lost customer purchase orders, marketing expenditure wasted on recalled campaigns, and professional legal fees incurred in rebutting the false claims."
    },
    {
        question: "How should a business respond immediately upon receiving a suspicious trademark notice?",
        answer: "Never panic, concede liability, or take down products prematurely. Immediately verify the sender's trademark registration status on the IP India portal, check the date of first commercial use against your own continuous prior invoices under Section 34, evaluate class coverage and disclaimers, and have a seasoned IP litigator draft a robust statutory rebuttal reserving your right to initiate a Section 142 counter-suit."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "statutory-mandate", title: "Section 142 Mandate" },
    { id: "available-remedies", title: "3 Statutory Remedies" },
    { id: "section-142-proviso", title: "Section 142(2) Proviso" },
    { id: "landmark-precedents", title: "Landmark Case Precedents" },
    { id: "notice-vs-threat-matrix", title: "Notice vs Threat Matrix" },
    { id: "step-by-step-defense", title: "Recipient Action Plan" },
    { id: "damages-recovery", title: "Calculating Damages" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Anti-Bullying Advice" },
];

export default function GroundlessThreatsSection142GuidePage() {
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
        "headline": "Groundless Threats of Legal Proceedings: Section 142 Trademark Act Guide in India",
        "description": "Understand Section 142 of Trade Marks Act 1999 in India. Learn how to counter baseless cease & desist notices, seek injunctions, and claim damages.",
        "image": "https://www.iprkaro.com/images/og/groundless-threats-of-legal-proceedings-section-142-trademark-india.png",
        "datePublished": "2026-09-30T09:30:00+05:30",
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
            "@id": "https://www.iprkaro.com/groundless-threats-of-legal-proceedings-section-142-trademark-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Section 142 Groundless Threats Guide: Trade Marks Act",
        "url": "https://www.iprkaro.com/groundless-threats-of-legal-proceedings-section-142-trademark-india",
        "description": "Understand Section 142 of Trade Marks Act 1999 in India. Learn how to counter baseless cease & desist notices, seek injunctions, and claim damages.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/groundless-threats-of-legal-proceedings-section-142-trademark-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/groundless-threats-of-legal-proceedings-section-142-trademark-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Section 142 Groundless Threats", "item": "https://www.iprkaro.com/groundless-threats-of-legal-proceedings-section-142-trademark-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Statutory Defense against Groundless Trademark Infringement Threats in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Audit Sender Trademark Registration, Disclaimers, and Class Coverage on IP India Portal" },
            { "@type": "ListItem", "position": 2, "name": "Compile Prior Continuous Commercial Invoices and User Evidence under Section 34" },
            { "@type": "ListItem", "position": 3, "name": "Assess Non-Use Vulnerability and Formulate Section 47 Rectification Counter-Claim" },
            { "@type": "ListItem", "position": 4, "name": "Serve Detailed Legal Rebuttal Letter Reserving Section 142 Statutory Rights" },
            { "@type": "ListItem", "position": 5, "name": "Institute Section 142 Civil Suit in Commercial Court for Injunction and Declaration" },
            { "@type": "ListItem", "position": 6, "name": "Lead Evidence on Commercial Disruption to Recover Financial Damages and Litigation Costs" }
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
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Anti-Bullying IP Law &amp; Counter-Litigation</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Groundless Threats of Legal Proceedings: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Section 142 Guide</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Receiving an aggressive cease &amp; desist notice or coercive infringement ultimatum can disrupt business operations, terrorize distributors, and destroy brand morale. Under <strong>Section 142 of the Trade Marks Act, 1999</strong>, Indian law provides an explicit statutory right to sue the sender of unjustifiable threats—securing a <strong>court declaration of groundlessness</strong>, a <strong>restraining injunction</strong>, and <strong>full monetary recovery of financial damages</strong>.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 30-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 15 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Commercial Court Jurisprudence</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Evaluate Legal Notice Risk <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult IP Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/groundless-threats-of-legal-proceedings-section-142-trademark-india.jpg"
                                    alt="Groundless Threats of Legal Proceedings under Section 142 Trade Marks Act India"
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
                        { label: "Section 142 Groundless Threats", href: "/groundless-threats-of-legal-proceedings-section-142-trademark-india" }
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
                                                    <span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span>
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
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Section 142 Groundless Threats
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Section 142 of the Trade Marks Act, 1999 creates a special statutory cause of action allowing any person threatened with groundless or unjustifiable legal proceedings for trademark infringement to file a civil counter-suit against the person issuing the threats. The court can grant: (1) a declaration that the threats are unjustified, (2) an injunction restraining the continuance of the threats, and (3) compensatory damages for business losses caused by the threats.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            In the Indian commercial landscape, established competitors frequently engage in predatory &ldquo;trademark bullying&rdquo; by dispatching intimidating cease &amp; desist letters, threatening criminal police raids, or issuing takedown notices to e-commerce aggregators against emerging businesses without possessing legitimate, enforceable trademark rights.
                                        </p>
                                        <p className="mb-6">
                                            To curb this weaponization of intellectual property, Parliament enacted <strong>Section 142</strong>, balancing the monopoly of registered proprietors with stringent defenses for honest market participants. Learn how this interacts with our guides on <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">responding to trademark legal notices</Link>, <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement</Link>, and <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 34 prior user rights</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY MANDATE */}
                                    <section id="statutory-mandate" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 142 Statutory Mandate &amp; Analysis
                                        </h3>
                                        <p className="mb-6">
                                            The text of Section 142(1) of the Trade Marks Act, 1999 establishes broad coverage over all forms of coercive commercial communications:
                                        </p>

                                        <div className="bg-gray-50 border-l-4 border-purple-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;Where a person, by means of circulars, advertisements or otherwise, threatens a person with an action or proceeding for infringement of a trade mark which is registered, or alleged by the first-mentioned person to be registered, or with some other like proceeding, a person aggrieved may bring an action against the first-mentioned person...&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6 not-prose">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Scope of Mediums: &lsquo;Or Otherwise&rsquo;</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The phrase &ldquo;circulars, advertisements or otherwise&rdquo; has been expansively interpreted by Indian High Courts to encompass formal advocate notices, emails, WhatsApp messages, verbal threats in trade meetings, and third-party notices sent to distributors, retail vendors, or online marketplaces.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Registration Status of the Threatener is Irrelevant</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">A defendant cannot escape Section 142 by claiming they do not own a registered trademark. The section explicitly covers marks that are registered, <em>or alleged to be registered</em>, by the threatener.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Meaning of &lsquo;Person Aggrieved&rsquo;</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The plaintiff is not limited to the brand owner. Retailers, manufacturers, logistics partners, or distributors whose commercial viability is endangered by the threats have legal standing to sue under Section 142.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: 3 STATUTORY REMEDIES */}
                                    <section id="available-remedies" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The 3 Core Statutory Remedies under Section 142(1)
                                        </h3>
                                        <p className="mb-6">
                                            When an aggrieved business proves that the threats issued against them are unjustifiable, the Commercial Court can award three cumulative remedies:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mb-3">
                                                    <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">1. Judicial Declaration</h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    An authoritative court decree declaring that the threats of legal proceedings issued by the defendant are groundless, baseless, and without legal force.
                                                </p>
                                            </div>

                                            <div className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-200">
                                                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mb-3">
                                                    <FontAwesomeIcon icon={faBan} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">2. Permanent Injunction</h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    An injunction restraining the defendant, its directors, agents, and advocates from issuing, publishing, or continuing any further infringement threats or notices.
                                                </p>
                                            </div>

                                            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3">
                                                    <FontAwesomeIcon icon={faMoneyBillTrendUp} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">3. Recovery of Damages</h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    An award of substantial monetary damages to compensate for lost customer revenue, cancelled distributor agreements, commercial disruption, and attorney fees.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: SECTION 142(2) PROVISO */}
                                    <section id="section-142-proviso" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Crucial Section 142(2) Proviso Defense
                                        </h3>
                                        <p className="mb-6">
                                            Section 142 contains an essential statutory caveat under sub-section (2) designed to protect genuine trademark proprietors seeking to enforce legitimate rights:
                                        </p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;This section shall not apply if the registered proprietor or a registered user of the trade mark commences and prosecutes with due diligence an action for infringement of the trade mark against the person threatened.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-4 my-6 not-prose">
                                            <div className="p-4 bg-purple-50/40 rounded-xl border border-purple-100">
                                                <p className="text-sm font-bold text-gray-900 mb-1">Requirement 1: Must be Registered Proprietor or User</p>
                                                <p className="text-xs text-gray-700 m-0">Unregistered trademark claimants cannot invoke the Section 142(2) proviso defense. Only registered owners with active valid registrations in the relevant class can plead this exception.</p>
                                            </div>

                                            <div className="p-4 bg-indigo-50/40 rounded-xl border border-indigo-100">
                                                <p className="text-sm font-bold text-gray-900 mb-1">Requirement 2: Substantive Suit for Infringement</p>
                                                <p className="text-xs text-gray-700 m-0">The sender must actually institute a formal civil suit for trademark infringement. Simply filing an opposition in the Trademark Registry or sending another reminder letter does not satisfy this condition.</p>
                                            </div>

                                            <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100">
                                                <p className="text-sm font-bold text-gray-900 mb-1">Requirement 3: &lsquo;Due Diligence&rsquo; Standard</p>
                                                <p className="text-xs text-gray-700 m-0">The infringement suit must be instituted promptly and pursued actively. If the threatener issues letters and waits 18 months before filing a suit, courts hold that due diligence was abandoned.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: LANDMARK PRECEDENTS */}
                                    <section id="landmark-precedents" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark High Court Precedents on Section 142
                                        </h3>
                                        <p className="mb-6">
                                            Indian jurisprudence has established critical legal principles defining what transforms a routine legal notice into an unlawful groundless threat:
                                        </p>

                                        <div className="space-y-6 not-prose">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Dolphin Laboratories Ltd. v. Keno Pharma (AIR 1991 Cal 129)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Calcutta High Court held that a mere lawyer&apos;s notice bringing trademark rights to the notice of another party without coercive intimidation does not automatically constitute a groundless threat. However, once the notice threatens coercive actions or damages without genuine basis, Section 142 activates.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Sidarth Wheels Pvt. Ltd. v. Bedrock Ramgirish (AIR 1988 Del 228)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Delhi High Court ruled that where an infringement suit is subsequently instituted with due diligence by the registered owner, the Section 142 suit ceases to be maintainable, ensuring both claims are adjudicated in a unified trial.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Chartered Institute of Taxation v. Institute of Chartered Tax Advisers (Delhi HC)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The court affirmed that foreign or multinational corporations cannot intimidate domestic Indian enterprises with aggressive legal threats when the domestic entity holds prior continuous user rights under Section 34.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-3 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Bata India Limited v. Pyare Lal &amp; Co. (AIR 1982 All 236)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Allahabad High Court addressed cross-category trade dress and mark overlaps, emphasizing that threats of legal action against dissimilar non-competing goods without proof of commercial association are groundless.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: NOTICE VS THREAT MATRIX */}
                                    <section id="notice-vs-threat-matrix" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Comparison: Legitimate Notice vs Groundless Threat
                                        </h3>
                                        <p className="mb-6">
                                            Understanding the thin line between a valid legal communication and an actionable groundless threat is essential for both senders and recipients:
                                        </p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Parameter</th>
                                                        <th className="p-3.5 sm:p-4">Legitimate Legal Notice</th>
                                                        <th className="p-3.5 sm:p-4">Actionable Groundless Threat</th>
                                                        <th className="p-3.5 sm:p-4">Section 142 Liability</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Proprietor Rights</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Active valid registration in matching class</td>
                                                        <td className="p-3.5 sm:p-4 text-red-600 font-medium">Pending, abandoned, or unrelated class mark</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-red-700">High Risk of Counter-Suit</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Communication Tone</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Objective notification of rights &amp; inquiry</td>
                                                        <td className="p-3.5 sm:p-4 text-red-600 font-medium">Coercive ultimata, police raid threats, defamation</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-red-700">Actionable under Section 142</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Target Audience</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Sent strictly to the primary alleged infringer</td>
                                                        <td className="p-3.5 sm:p-4 text-red-600 font-medium">Sent to third-party clients, distributors &amp; platforms</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-red-700">Substantial Damages Awardable</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Follow-up Action</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Files infringement suit with due diligence</td>
                                                        <td className="p-3.5 sm:p-4 text-red-600 font-medium">No lawsuit filed; repeated harassing reminders</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-red-700">Proviso Exception Denied</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 7: STEP-BY-STEP DEFENSE */}
                                    <section id="step-by-step-defense" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Action Plan for Recipients of Baseless Threats
                                        </h3>
                                        <p className="mb-6">
                                            If your company receives an intimidating trademark notice, execute this battle-tested counter-strategy:
                                        </p>

                                        <div className="space-y-4 my-6 not-prose">
                                            <div className="flex items-start p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">1</span>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 mb-1">Verify Registration &amp; Disclaimers on IP India Portal</p>
                                                    <p className="text-xs text-gray-600 m-0">Examine the sender&apos;s trademark application number. Confirm if the mark is registered or merely pending, check class specifications, and inspect if the Registry imposed a condition or disclaimer under <Link href="/trademark-disclaimer-condition-meaning-in-india" className="text-[#6E5E93] hover:underline font-semibold">trademark disclaimer rules</Link>.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">2</span>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 mb-1">Audit Continuous Prior Use under Section 34</p>
                                                    <p className="text-xs text-gray-600 m-0">Collate date-stamped tax invoices, CA turnover certificates, domain registration receipts, and packaging bills to establish senior continuous user rights under <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="text-[#6E5E93] hover:underline font-semibold">Section 34</Link>.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">3</span>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 mb-1">Assess Non-Use Vulnerability under Section 47</p>
                                                    <p className="text-xs text-gray-600 m-0">If the sender has not utilized the trademark commercially in India for a continuous period of 5 years and 3 months, prepare a counter-action for <Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="text-[#6E5E93] hover:underline font-semibold">trademark cancellation under Section 47</Link>.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">4</span>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 mb-1">Serve a Formal Rebuttal Reserving Section 142 Rights</p>
                                                    <p className="text-xs text-gray-600 m-0">Have an IP litigator serve a detailed reply refuting the allegations, asserting senior user rights, and explicitly warning the sender that continued harassment will trigger a Section 142 damages lawsuit.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">5</span>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 mb-1">File Section 142 Suit in Commercial Court</p>
                                                    <p className="text-xs text-gray-600 m-0">If the sender contacts your distributors, payment gateways, or e-commerce portals, immediately institute a Section 142 suit seeking an ex-parte interim injunction against the harassment.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: CALCULATING DAMAGES */}
                                    <section id="damages-recovery" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMoneyBillTrendUp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Proving &amp; Calculating Damages under Section 142
                                        </h3>
                                        <p className="mb-6">
                                            To successfully claim financial damages in a groundless threats lawsuit, the plaintiff must satisfy three evidentiary burdens under Indian civil law:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2">1. Direct Causation</h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    Proving that the financial loss resulted directly from the defendant&apos;s wrongful threat (e.g., product delisting from Amazon or retailer contract termination).
                                                </p>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2">2. Quantum of Loss</h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    Submitting certified audited accounts, profit margin records, inventory holding costs for stalled stock, and marketing campaign wastage.
                                                </p>
                                            </div>

                                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2">3. Legal &amp; Defense Costs</h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    Recovering attorney fees, court fees, and litigation expenses incurred in defending against the unjustified allegations.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: FAQS */}
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

                                    {/* SECTION 10: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Anti-Bullying Defense Advice
                                        </h3>
                                        <p className="mb-6">
                                            A trademark is a commercial asset intended to distinguish authentic products, not a weapon to monopolize markets through groundless intimidation. When confronted with aggressive legal notices, knowledge of Section 142 shifts the strategic advantage from the predator to the defender.
                                        </p>
                                        <p className="mb-6">
                                            Consult experienced IP litigators to audit your prior use documents, draft decisive legal responses, and institute Section 142 counter-actions in Commercial Courts. For related enforcement and defense strategies, review our guides on <Link href="/famous-trademark-infringement-cases-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">famous trademark infringement cases</Link>, <Link href="/john-doe-ashok-kumar-order-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">John Doe Ashok Kumar orders</Link>, and <Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark coexistence agreements</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        IP Defense &amp; Counter-Litigation
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Fight Baseless Trademark Threats
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Deploy veteran IP litigators to evaluate cease &amp; desist notices, assert Section 34 prior use, and file Section 142 counter-suits to protect your business.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Litigator</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Section 142 Injunction Suits • Cease &amp; Desist Rebuttal • Commercial Courts Representation • Pan-India
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
                                <h4 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h4>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in IP litigation defense, Section 142 groundless threats remedies, Section 34 prior user rights, and commercial dispute resolution.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Received a Trademark Notice?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Don&apos;t panic or concede. Get an urgent attorney review of the notice validity and explore Section 142 defenses.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Review Legal Notice
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Respond to Notice</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Prior User Rights</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/john-doe-ashok-kumar-order-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">John Doe Orders</span></Link></li>
                                    <li><Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandHoldingHand} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Non-Use Cancellation</span></Link></li>
                                    <li><Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBullhorn} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Famous TM Cases</span></Link></li>
                                    <li><Link href="/trademark-consent-letter-coexistence-agreement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandcuffs} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Coexistence Agreements</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
