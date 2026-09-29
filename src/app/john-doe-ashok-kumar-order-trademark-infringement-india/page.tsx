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
    faTruckFast,
    faLandmark,
    faGlobe,
    faUserSecret,
    faHandcuffs,
    faTowerBroadcast
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "John Doe Orders Indian Trademark: Ashok Kumar Guide",
    description: validateAndNormalizeDescription(
        "Master John Doe (Ashok Kumar) orders in India. Learn how to secure ex-parte injunctions, dynamic blocking, and local commissioner raids against unknown infringers.",
        "app/john-doe-ashok-kumar-order-trademark-infringement-india/page.tsx"
    ),
    keywords: [
        "john doe ashok kumar order trademark infringement india",
        "ex parte ad interim injunction against unknown defendants",
        "ashok kumar order delhi high court trademark",
        "dynamic injunction website blocking india",
        "local commissioner anton piller order trademark",
        "order 39 rules 1 and 2 cpc anonymous infringers",
        "section 135 trade marks act ex parte injunction",
        "commercial courts act 2015 urgent interim relief",
        "phishing website rogue domain takedown john doe",
        "delhi high court john doe trademark jurisprudence"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/john-doe-ashok-kumar-order-trademark-infringement-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "John Doe Orders Indian Trademark: Ashok Kumar Guide",
        description: "Master John Doe (Ashok Kumar) orders in India. Learn how to secure ex-parte injunctions, dynamic blocking, and local commissioner raids against unknown infringers.",
        url: "https://www.iprkaro.com/john-doe-ashok-kumar-order-trademark-infringement-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/john-doe-ashok-kumar-order-trademark-infringement-india.png",
                width: 1200,
                height: 630,
                alt: "John Doe Ashok Kumar Orders in Indian Trademark Law Ex-Parte Injunctions Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "John Doe Orders Indian Trademark: Ashok Kumar Guide",
        description: "Master John Doe (Ashok Kumar) orders in India. Learn how to secure ex-parte injunctions, dynamic blocking, and local commissioner raids against unknown infringers.",
        images: ["https://www.iprkaro.com/images/og/john-doe-ashok-kumar-order-trademark-infringement-india.png"],
    }
};

const faqs = [
    {
        question: "What is a John Doe (Ashok Kumar) order in Indian trademark law?",
        answer: "A John Doe order (judicially referred to in India as an 'Ashok Kumar' order) is an ex-parte ad-interim injunction granted by a High Court or Commercial Court against anonymous, unidentified, or clandestine infringers under Section 135 of the Trade Marks Act, 1999 and Order 39 Rules 1 & 2 of the Code of Civil Procedure, 1908 (CPC). It enables brand owners to restrain infringement, block rogue websites, freeze payment gateways, and execute surprise search and seizure raids even when the exact identities of the infringers are unknown at the time of filing the suit."
    },
    {
        question: "Why are unknown defendants named 'Ashok Kumar' in Indian court suits?",
        answer: "In common law Western jurisdictions like the United States and United Kingdom, unidentified or anonymous defendants are traditionally designated as 'John Doe' or 'Jane Doe'. In Indian legal jurisprudence, the judiciary adopted the generic Indian name 'Ashok Kumar' as the standardized placeholder for unknown parties in civil suits, first popularized in landmark intellectual property litigations before the Delhi High Court."
    },
    {
        question: "What legal elements must be established to obtain an ex-parte John Doe injunction?",
        answer: "Under Indian civil law, the plaintiff brand owner must satisfy the classic three-prong test: (1) A robust prima facie case demonstrating registered trademark ownership and blatant unauthorized commercial exploitation, (2) Balance of convenience tilting heavily in favour of the plaintiff, and (3) Irreparable injury, showing that giving advance notice to the infringers would result in immediate destruction of digital traces, clandestine relocation of inventory, or ongoing consumer deception."
    },
    {
        question: "What powers does a Court-appointed Local Commissioner (LC) exercise during an Ashok Kumar raid?",
        answer: "Under Order 26 Rule 9 CPC, the High Court appoints a Local Commissioner (typically an independent advocate) who is vested with 'Anton Piller' powers to make unannounced visits to suspect factories, godowns, or premises. The LC is empowered to break open locks if obstructed, seek local police assistance under the court's direction, inspect inventory, seize counterfeit products, packaging, and manufacturing machinery, take custody of books of accounts, and seal the premises."
    },
    {
        question: "What is a Dynamic Injunction and how does it apply to rogue online portals?",
        answer: "Originating in the Delhi High Court's landmark judgment in 'UTV Software Communication Ltd. V. 1337x.to (2019)', a Dynamic Injunction allows a trademark or copyright proprietor to block mirror, redirect, or alphanumeric variations of infringing websites without filing a fresh commercial suit each time. The plaintiff simply files an affidavit before the Court Registrar or Department of Telecommunications (DoT) to extend the existing injunction to newly surfaced rogue domain variations."
    },
    {
        question: "Can an Ashok Kumar order direct banks, payment gateways, and telecom providers?",
        answer: "Yes. In modern trademark litigation involving phishing websites and fraudulent e-commerce portals, High Courts routinely issue directions to third-party intermediaries: directing Telecom Service Providers (TSPs) to suspend fraudulent phone numbers, Domain Name Registrars (DNRs) to lock domain names, Payment Gateways (Razorpay, Paytm, Cashfree) to freeze merchant balances, and scheduled commercial banks to freeze bank accounts receiving illicit funds."
    },
    {
        question: "What happens after an unknown infringer is identified during the local commission?",
        answer: "Once the Local Commissioner executes the raid and discovers the true legal identity, company name, and addresses of the infringers, the plaintiff brand owner files an application under Order 1 Rule 10 CPC to amend the 'Memo of Parties'. The placeholder name 'Ashok Kumar' is formally substituted with the actual name of the infringing individual or corporate entity, and regular trial proceedings proceed against them."
    },
    {
        question: "How does a John Doe civil injunction differ from a Section 115 criminal police raid?",
        answer: "A Section 115 criminal police raid is conducted by state police officers (DSP rank) resulting in arrest, FIR registration, and state criminal prosecution. An Ashok Kumar John Doe civil action is filed in the High Court / Commercial Court. This grants broader equitable remedies including nationwide website blocking, freezing of bank accounts, appointment of advocate Local Commissioners, and substantial financial damages and profits."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "origins-ashok-kumar", title: "Origins of Ashok Kumar Orders" },
    { id: "legal-framework", title: "Statutory Grounding & CPC" },
    { id: "three-prong-test", title: "Three-Prong Injunction Test" },
    { id: "types-of-john-doe-orders", title: "4 Types of Ashok Kumar Relief" },
    { id: "step-by-step-court-procedure", title: "7-Step Injunction Workflow" },
    { id: "local-commissioner-raids", title: "Local Commissioner Anton Piller Raids" },
    { id: "dynamic-injunctions-blocking", title: "Dynamic Injunctions & ISP Blocking" },
    { id: "landmark-case-law", title: "Landmark High Court Precedents" },
    { id: "ashok-kumar-vs-traditional", title: "Ashok Kumar vs Traditional Suits" },
    { id: "litigation-action-checklist", title: "Litigation Action Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Enforcement Advice" },
];

export default function JohnDoeAshokKumarOrdersPage() {
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
        "headline": "John Doe (Ashok Kumar) Orders in Indian Trademark Law: Ex-Parte Injunctions Guide",
        "description": "Master John Doe (Ashok Kumar) orders in India. Learn how to secure ex-parte injunctions, dynamic blocking, and local commissioner raids against unknown infringers.",
        "image": "https://www.iprkaro.com/images/og/john-doe-ashok-kumar-order-trademark-infringement-india.png",
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
            "@id": "https://www.iprkaro.com/john-doe-ashok-kumar-order-trademark-infringement-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "John Doe Orders Indian Trademark: Ashok Kumar Guide",
        "url": "https://www.iprkaro.com/john-doe-ashok-kumar-order-trademark-infringement-india",
        "description": "Master John Doe (Ashok Kumar) orders in India. Learn how to secure ex-parte injunctions, dynamic blocking, and local commissioner raids against unknown infringers.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/john-doe-ashok-kumar-order-trademark-infringement-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/john-doe-ashok-kumar-order-trademark-infringement-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "John Doe Ashok Kumar Orders Guide", "item": "https://www.iprkaro.com/john-doe-ashok-kumar-order-trademark-infringement-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Procedure to Obtain and Execute a John Doe (Ashok Kumar) Order in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Pre-Litigation Cyber Forensics & Mystery Shopping Purchases" },
            { "@type": "ListItem", "position": 2, "name": "Draft Commercial Plaint Naming Unknown Defendants as Ashok Kumar" },
            { "@type": "ListItem", "position": 3, "name": "File Section 12A Commercial Courts Act Urgent Interim Relief Exemption" },
            { "@type": "ListItem", "position": 4, "name": "Argue Ex-Parte Ad-Interim Injunction before High Court Commercial Bench" },
            { "@type": "ListItem", "position": 5, "name": "Secure Local Commissioner Appointment and Intermediary Blocking Directions" },
            { "@type": "ListItem", "position": 6, "name": "Execute Surprise Local Commission Raids with Police Assistance" },
            { "@type": "ListItem", "position": 7, "name": "Implead Real Accused under Order 1 Rule 10 CPC and Pursue Damages" }
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
                                <FontAwesomeIcon icon={faUserSecret} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Ex-Parte Court Injunctions &amp; Litigations</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                John Doe Orders in Indian Trademark Law: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Ex-Parte Injunctions</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Anonymous counterfeiters, fly-by-night operators, and rogue phishing domains operate in secrecy to evade traditional trademark litigation. Under<strong>Section 135 of the Trade Marks Act, 1999</strong>and<strong>Order 39 Rules 1 &amp; 2 of the CPC</strong>, Indian High Courts grant powerful<strong>John Doe (Ashok Kumar) orders</strong>. Secure ex-parte ad-interim injunctions, dynamic website blocking, bank account freezes, and surprise Local Commissioner search-and-seizure raids against unidentified infringers nationwide.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 16 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ High Court Commercial Bench</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Ashok Kumar Injunction Suit <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call IP Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/john-doe-ashok-kumar-order-trademark-infringement-india.png"
                                    alt="John Doe Ashok Kumar Orders in Indian Trademark Law Ex-Parte Injunctions Guide"
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
                        { label: "John Doe Ashok Kumar Orders Guide", href: "/john-doe-ashok-kumar-order-trademark-infringement-india" }
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
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Ashok Kumar (John Doe) Orders
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">A John Doe order in Indian trademark law—judicially termed an &ldquo;Ashok Kumar&rdquo. Order—is an ex-parte ad-interim injunction granted under Section 135 of the Trade Marks Act, 1999 and Order 39 Rules 1 &amp. 2 of the Code of Civil Procedure, 1908 (CPC). It restrains anonymous, unidentified, or clandestine infringers from manufacturing, selling, broadcasting, or digitally distributing counterfeit goods or impersonating brands. Indian High Courts pair John Doe injunctions with Local Commissioner search-and-seizure appointments, dynamic website blocking orders to ISPs, and bank account freeze directives.</p>
                                        </div>

                                        <p className="mb-6">In the modern globalized economy, intellectual property infringement has evolved into a sophisticated, decentralized enterprise. Counterfeiting syndicates, illicit broadcast streamers, and cyber-fraud networks operate anonymously through proxy domain registrations, encrypted messaging applications (Telegram, WhatsApp), shell trading companies, and clandestine physical godowns.</p>
                                        <p className="mb-6">Under traditional civil litigation, a plaintiff must identify the full legal name and physical address of every defendant before serving a summons. If brand owners were required to identify every rogue distributor or clandestine manufacturer before approaching the court, infringers would simply move inventory, scrub electronic servers, and alter digital domain names before a hearing could occur.</p>
                                        <p className="mb-6">The<strong>Ashok Kumar John Doe order</strong>bridges this critical enforcement gap. It provides immediate judicial relief against the infringement itself, arming brand owners with court-backed enforcement tools to hunt down infringers, freeze assets, and dismantle illegal operations. Learn how this interacts with broader enforcement options in our comprehensive guide on<Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement</Link>and<Link href="/civil-vs-criminal-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">civil vs criminal trademark infringement</Link>.</p>
                                    </section>

                                    {/* SECTION 2: ORIGINS & ASHOK KUMAR CONCEPT */}
                                    <section id="origins-ashok-kumar" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Origins of John Doe &amp; Ashok Kumar Jurisprudence
                                        </h3>
                                        <p className="mb-6">The legal concept of issuing injunctions against unidentified parties traces its roots back to English equity courts and landmark common-law decisions:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">1. The English Precedents: Anton Piller &amp; Mareva Injunctions</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">In<em>Anton Piller KG v. Manufacturing Processes Ltd. [1976]</em>, the English Court of Appeal established the right of a court to order unannounced search and preservation of evidence. Paired with<em>Mareva Compania Naviera SA v. International Bulkcarriers SA [1975]</em>(asset-freezing orders), equity jurisprudence recognized that stealth operations require pre-emptive, ex-parte judicial intervention.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">2. India&apos;s Genesis: Taj Television Ltd. v. Rajan Mandal (2002)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Delhi High Court introduced John Doe jurisprudence to India in the historic<em>Taj Television Ltd. V. Rajan Mandal (2002)</em>case. Taj Television (Ten Sports) held exclusive broadcast rights for the FIFA Football World Cup, which was being illegally transmitted by rogue, unregistered local cable operators across India. The Delhi High Court passed the country&apos;s first ex-parte ad-interim injunction against unidentified cable operators. This establishes the precedent.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">3. Why the Name &ldquo;Ashok Kumar&rdquo;?</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">While American and British courts use &ldquo;John Doe&rdquo; or &ldquo;Jane Doe&rdquo;, Indian litigators and judges adopted &ldquo;Ashok Kumar&rdquo; as the standard generic Indian pseudonym. When filing a commercial plaint where certain infringers are unidentified, the caption reads:<em>&ldquo;[Plaintiff Brand] v. Ashok Kumar &amp; Ors.&rdquo;</em></p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: STATUTORY LEGAL FRAMEWORK & CPC */}
                                    <section id="legal-framework" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Grounding under Indian Law
                                        </h3>
                                        <p className="mb-6">Ashok Kumar orders in India are backed by explicit statutory provisions spanning the Trade Marks Act, the Code of Civil Procedure, and the Commercial Courts Act:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Section 135(1) &amp; (2) Trade Marks Act, 1999
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Authorizes courts in trademark infringement or passing-off suits to grant ex-parte injunctions, order discovery of documents, preserve infringing goods/materials, and direct the seizure and destruction of counterfeit inventory.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-2"></span>
                                                    Order 39 Rules 1 &amp; 2 read with Section 151 CPC
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Empowers the court to grant temporary restraining orders to prevent property from being damaged, alienated, or sold in bad faith. Section 151 enables inherent powers to ensure complete justice.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2"></span>
                                                    Order 26 Rule 9 CPC (Local Commissioners)
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Empowers the Court to issue a commission appointing an independent advocate to execute on-the-spot physical investigations, take photographic evidence, and seize infringing stock without prior notice.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2"></span>
                                                    Section 12A Commercial Courts Act, 2015
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">While mandatory pre-institution mediation is generally required for commercial suits, Section 12A explicitly exempts suits that contemplate &ldquo;urgent interim relief&rdquo;. This allows direct listing of John Doe applications.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: THREE-PRONG INJUNCTION TEST */}
                                    <section id="three-prong-test" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Three-Prong Injunction Test in India
                                        </h3>
                                        <p className="mb-6">Because John Doe injunctions are granted<em>ex-parte</em>(without hearing the defendants in advance), Indian High Courts apply strict judicial standards before passing such extraordinary orders:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Irrefutable Prima Facie Case</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The plaintiff must furnish unimpeachable proof of trademark registration (Legal Proceedings Certificate under Section 31), market goodwill, extensive sales figures, and clear photographic or digital evidence of the counterfeit mark being applied to inferior goods.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Balance of Convenience</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The plaintiff must demonstrate that the balance of convenience lies overwhelmingly in their favour. An anonymous infringer has no legitimate right to trade on stolen brand equity. In contrast, the genuine proprietor suffers acute erosion of reputation and brand equity.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Irreparable Injury &amp; Extreme Urgency</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The plaintiff must convince the bench that issuing advance notice under Order 39 Rule 3 CPC would defeat the very purpose of the injunction. If warned in advance, rogue operators will instantly delete domain DNS records, transfer bank balances, or relocate counterfeit warehouses overnight.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: 4 TYPES OF JOHN DOE ORDERS */}
                                    <section id="types-of-john-doe-orders" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTowerBroadcast} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            4 Modern Types of Ashok Kumar Injunction Relief
                                        </h3>
                                        <p className="mb-6">In contemporary Indian litigation, Ashok Kumar orders are customized to combat both physical manufacturing cartels and cyber-enabled fraud:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    1. Physical Anton Piller Seizure Orders
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Directs court-appointed Local Commissioners to conduct unannounced raids on physical factories, markets, and godowns, confiscate spurious finished goods, packaging labels, and printing dies, and inventory financial registers.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-2"></span>
                                                    2. Dynamic Injunctions (Mirror Domain Blocking)
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Directs the Department of Telecommunications (DoT), MeitY, and Internet Service Providers (Jio, Airtel, Vodafone) to block rogue piracy websites and automatically extend blocking to future mirror, redirect, and alphanumeric variations.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2"></span>
                                                    3. Financial &amp; Payment Gateway Freeze Orders
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Restrains payment aggregators (Razorpay, Paytm, Cashfree, PhonePe) and scheduled banks from disbursing illicit customer funds collected through phishing websites impersonating the plaintiff brand.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2"></span>
                                                    4. Telecom &amp; Domain Registrar Lockdown
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Directs Domain Name Registrars (GoDaddy, Namecheap, Tucows) to lock and suspend infringing domain names, and compels Telecom Service Providers (TSPs) to deactivate fraudulent WhatsApp/calling numbers.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: 7-STEP INJUNCTION PROCEDURE */}
                                    <section id="step-by-step-court-procedure" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Ashok Kumar Injunction Procedure
                                        </h3>
                                        <p className="mb-6">Executing an Ashok Kumar commercial litigation before an Indian High Court involves strict adherence to procedural milestones:</p>

                                        <div className="space-y-6">
                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    1
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Pre-Suit Cyber Forensics &amp; Mystery Purchases</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Private investigators capture timestamped screenshots, WHOIS records, IP server hosts, payment transaction UPI IDs, and execute test purchases with tax invoices to establish an unbroken chain of commercial infringement.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    2
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Drafting Commercial Plaint &amp; Interim Applications</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Legal counsel drafts the commercial plaint naming known entities alongside &ldquo;Ashok Kumar / John Doe&rdquo;. Applications are filed under Order 39 Rules 1 &amp; 2 (Interim Injunction), Order 26 Rule 9 (Local Commissioner), and Order 39 Rule 3 (Exemption from Prior Notice).</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    3
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Section 12A Mediation Exemption Application</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">File an urgent application under Section 12A of the Commercial Courts Act, 2015, satisfying the court that pre-institution mediation must be dispensed with due to imminent irreparable harm and ongoing fraud.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    4
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Ex-Parte Oral Arguments before High Court Bench</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Senior counsel argues the ex-parte motion before the Commercial Division Bench. Present side-by-side authenticity comparisons, trademark certificates, and forensic evidence to satisfy the three-prong test.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    5
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Passing of Injunction Order &amp; LC Appointment</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The High Court passes an ex-parte ad-interim restraining order, directs DoT/MeitY/ISPs/banks to block assets, and appoints Local Commissioners with directions to the local Station House Officer (SHO) to provide armed police protection.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    6
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Execution of Local Commission &amp; Evidence Seizure</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The Local Commissioner arrives unannounced at target premises, serves the court order, inventories counterfeit goods, seizes machinery and computers, and seals the spurious stock under superdari.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    7
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">LC Report Filing &amp; Impleadment under Order 1 Rule 10</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The LC files their official report with photographs in High Court. The plaintiff amends the memo of parties under Order 1 Rule 10 CPC, substituting &ldquo;Ashok Kumar&rdquo. With the actual names of the infringers to pursue permanent injunctions and punitive damages.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: LOCAL COMMISSIONER ANTON PILLER RAIDS */}
                                    <section id="local-commissioner-raids" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBoxOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Local Commissioner Raids &amp; Powers
                                        </h3>
                                        <p className="mb-6">The Court-appointed Local Commissioner (LC) acts as the eyes and ears of the High Court. Their contemporaneous report is treated as prima facie evidence under Order 26 Rule 10(2) CPC:</p>

                                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mb-8 not-prose">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 mr-2 text-green-600" />
                                                Key Powers Conferred on Local Commissioners
                                            </h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Unannounced Entry:</strong>Right to enter premises without prior notice or search warrant.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Breaking Open Locks:</strong>Power to break open locks and godowns if the infringer refuses entry.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Police Assistance:</strong>Mandatory police protection from local SHO / ACP as directed by the court.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Digital Device Mirroring:</strong>Authority to copy hard drives, billing software, and customer ledgers.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Seizure &amp; Sealing:</strong>Confiscation of all spurious goods, packaging materials, and manufacturing dies.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Superdari Custody:</strong>Releasing sealed stock to the plaintiff or defendant on undertaking for trial production.</span></li>
                                            </ul>
                                        </div>

                                        <p className="mb-6">For parallel criminal enforcement strategies, examine our detailed manual on<Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="text-[rgb(110,94,147)] hover:underline font-medium">anti-counterfeiting police raid procedure under Section 115</Link>.</p>
                                    </section>

                                    {/* SECTION 8: DYNAMIC INJUNCTIONS & ISP BLOCKING */}
                                    <section id="dynamic-injunctions-blocking" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Dynamic Injunctions &amp; Website Blocking
                                        </h3>
                                        <p className="mb-6">Online brand piracy often involves rogue digital portals that instantly clone their operations across alphanumeric URL permutations whenever an original domain is blocked:</p>

                                        <div className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 p-6 md:p-8 rounded-2xl border border-purple-100 mb-8 not-prose">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                The UTV Software &ldquo;Dynamic Injunction&rdquo; Doctrine
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">In<em>UTV Software Communication Ltd. V. 1337x.to (2019)</em>, the Delhi High Court resolved the &ldquo;whack-a-mole&rdquo; problem. Instead of requiring brand owners to file fresh suits or amend plaints every time an infringer launches a mirror domain (e.g., brand-fake1.com, brand-fake2.com), the court created the<strong>Dynamic Injunction</strong>.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                    <p className="font-bold text-gray-900 mb-1">Affidavit before Court Joint Registrar</p>
                                                    <p className="text-xs text-gray-600 m-0">The plaintiff simply files an affidavit before the Joint Registrar of the High Court detailing newly discovered mirror websites that redirect to identical infringing content.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                    <p className="font-bold text-gray-900 mb-1">Direct DoT / ISP Enforcement</p>
                                                    <p className="text-xs text-gray-600 m-0">Upon registrar certification, DoT and MeitY immediately issue executive blocking orders to all internet service providers without re-arguing the main suit before a judge.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-6">Learn more about resolving domain squatting through administrative arbitration in our guide on<Link href="/domain-name-trademark-dispute-cybersquatting-indrp-india" className="text-[rgb(110,94,147)] hover:underline font-medium">domain name trademark disputes &amp; INDRP rules</Link>.</p>
                                    </section>

                                    {/* SECTION 9: LANDMARK HIGH COURT PRECEDENTS */}
                                    <section id="landmark-case-law" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Indian Ashok Kumar Precedents
                                        </h3>
                                        <p className="mb-6">Indian jurisprudence on John Doe injunctions has developed through landmark judgments that expanded protection across diverse commercial sectors:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden text-xs sm:text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 border-b border-gray-200">
                                                        <th className="px-5 py-4 font-bold">Landmark Case</th>
                                                        <th className="px-5 py-4 font-bold">Court / Year</th>
                                                        <th className="px-5 py-4 font-bold">Infringement Context</th>
                                                        <th className="px-5 py-4 font-bold">Key Legal Principle Established</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Taj Television v. Rajan Mandal</td>
                                                        <td className="px-5 py-4">Delhi HC (2002)</td>
                                                        <td className="px-5 py-4">FIFA World Cup Broadcast Piracy</td>
                                                        <td className="px-5 py-4 text-[#6E5E93] font-semibold">First John Doe injunction in Indian legal history.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">ESPN Software v. Tudu Enterprise</td>
                                                        <td className="px-5 py-4">Delhi HC (2011)</td>
                                                        <td className="px-5 py-4">ICC Cricket World Cup Transmission</td>
                                                        <td className="px-5 py-4">Blanket injunction against hundreds of unidentifiable cable operators.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">UTV Software v. 1337x.to</td>
                                                        <td className="px-5 py-4">Delhi HC (2019)</td>
                                                        <td className="px-5 py-4">Digital Torrent &amp; Streaming Portals</td>
                                                        <td className="px-5 py-4 text-[#6E5E93] font-semibold">Created Dynamic Injunctions for automatic mirror domain blocking.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Tata Sky Ltd. V. Nimble TV</td>
                                                        <td className="px-5 py-4">Delhi HC (2016)</td>
                                                        <td className="px-5 py-4">Brand Impersonation &amp; Over-the-Top App</td>
                                                        <td className="px-5 py-4">Restrained anonymous mobile app developers from using registered marks.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Universal City Studios v. Dotmovies</td>
                                                        <td className="px-5 py-4">Delhi HC (2023)</td>
                                                        <td className="px-5 py-4">Rogue Websites &amp; Phishing Networks</td>
                                                        <td className="px-5 py-4">Real-time dynamic blocking extended to alphanumeric URL variations.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: ASHOK KUMAR VS TRADITIONAL SUITS */}
                                    <section id="ashok-kumar-vs-traditional" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Ashok Kumar Suits vs Traditional Litigation
                                        </h3>
                                        <p className="mb-6">Evaluate how John Doe actions compare with named commercial suits and criminal raids:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden text-xs sm:text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 border-b border-gray-200">
                                                        <th className="px-5 py-4 font-bold">Litigation Factor</th>
                                                        <th className="px-5 py-4 font-bold text-[#6E5E93]">Ashok Kumar (John Doe) Suit</th>
                                                        <th className="px-5 py-4 font-bold text-gray-700">Named Commercial Suit</th>
                                                        <th className="px-5 py-4 font-bold text-gray-700">Section 115 Police Raid</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Defendant Identity</td>
                                                        <td className="px-5 py-4 text-[#6E5E93] font-semibold">Unknown / Clandestine / Rogue</td>
                                                        <td className="px-5 py-4">Known entity with verified address</td>
                                                        <td className="px-5 py-4">Suspects identified via police intel</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Prior Notice to Infringer</td>
                                                        <td className="px-5 py-4 font-semibold text-emerald-600">Dispensed With (Ex-Parte Relief)</td>
                                                        <td className="px-5 py-4">Mandatory notice / advance copy</td>
                                                        <td className="px-5 py-4">No advance notice (Secret raid)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Intermediary Directions</td>
                                                        <td className="px-5 py-4 font-semibold text-[#6E5E93]">Broad (ISPs, Banks, DoT, Registrars)</td>
                                                        <td className="px-5 py-4">Limited to named defendants</td>
                                                        <td className="px-5 py-4">None (Police operational powers)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">On-Site Evidence Seizure</td>
                                                        <td className="px-5 py-4">Court-Appointed Local Commissioner</td>
                                                        <td className="px-5 py-4">Requires specific LC motion</td>
                                                        <td className="px-5 py-4 font-semibold text-red-600">DSP/ACP Criminal Seizure Memo</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Future Infringement Control</td>
                                                        <td className="px-5 py-4 font-semibold text-emerald-600">Dynamic Injunctions cover mirror URLs</td>
                                                        <td className="px-5 py-4">Requires amending plaint</td>
                                                        <td className="px-5 py-4">Requires fresh FIR / complaint</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: LITIGATION ACTION CHECKLIST */}
                                    <section id="litigation-action-checklist" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            John Doe Litigation Action Checklist
                                        </h3>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Establish Statutory Title:</strong>Obtain certified Legal Proceedings Certificates from IP India verifying trademark validity.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Collate Forensic Digital &amp; Physical Evidence:</strong>Secure timestamped screen recordings, WHOIS logs, bank transaction trails, and mystery test purchases.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Draft Urgent Interim Applications:</strong>Frame applications under Order 39 Rules 1 &amp; 2, Order 26 Rule 9 (Local Commission), and Order 39 Rule 3 (Notice Exemption).</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>File Section 12A Mediation Exemption:</strong>Plead urgent interim relief before the Commercial Court to dispense with mandatory pre-institution mediation.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Serve Orders on Intermediaries:</strong>Transmit certified copies to DoT, MeitY, ISPs, Domain Registrars, and Payment Gateways for immediate compliance.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Execute Local Commission Raids:</strong>Coordinate with court-appointed Local Commissioners and local police to seize physical counterfeit inventory.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Implead Real Infringers:</strong>File Order 1 Rule 10 CPC applications substituting &ldquo;Ashok Kumar&rdquo; with actual accused entities for final trial and damages.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 12: FAQS */}
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

                                    {/* SECTION 13: STRATEGIC ENFORCEMENT ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Litigation Advice
                                        </h3>
                                        <p className="mb-6">John Doe (Ashok Kumar) orders represent the pinnacle of judicial agility in Indian commercial jurisprudence. When anonymous infringers threaten your brand equity or defraud consumers through counterfeit physical goods or fraudulent websites, waiting to identify every infringer guarantees defeat.</p>
                                        <p className="mb-6">By securing an ex-parte Ashok Kumar order from the High Court, you take immediate control of the battlefield: paralyzing rogue websites, freezing illicit bank accounts, and deploying Local Commissioners to seize counterfeit inventory unannounced. Partner with seasoned IP litigators to draft airtight pleadings, coordinate with cyber investigators, argue urgent ex-parte motions, and secure permanent commercial injunctions. For related enforcement workflows, review our guides on<Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send trademark legal notices</Link>,<Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to respond to trademark notices</Link>, and<Link href="/trade-dress-protection-under-indian-trademark-law" className="text-[rgb(110,94,147)] hover:underline font-medium">trade dress protection in India</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        High Court IP Litigation &amp; Injunction Practice
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Shut Down Anonymous Infringers with Ashok Kumar Orders
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy veteran High Court IP litigators to secure ex-parte John Doe injunctions, dynamic website blocking, Local Commissioner search raids, and multi-crore damages.</p>

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

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">High Court Advocates • Ex-Parte Injunctions • Local Commissioners • Dynamic Blocking • Pan-India Relief</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in commercial IP litigation, John Doe (Ashok Kumar) injunctions, dynamic domain blocking, and Local Commissioner raid coordination across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Stop Unknown Infringers</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Facing anonymous copycats or phishing sites? File an Ashok Kumar suit in High Court for instant injunctions.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Contact Injunction Counsel
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 115 Police Raids</span></Link></li>
                                    <li><Link href="/civil-vs-criminal-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Civil vs Criminal TM</span></Link></li>
                                    <li><Link href="/customs-recordation-of-trademark-in-india-ipr-rules" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Customs Port Recordation</span></Link></li>
                                    <li><Link href="/domain-name-trademark-dispute-cybersquatting-indrp-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">INDRP Domain Disputes</span></Link></li>
                                    <li><Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandcuffs} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Penalties India</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span></Link></li>
                                    <li><Link href="/competitor-bidding-on-my-trademark-google-ads-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Google Ads TM Bidding</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
