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
    faShip,
    faPassport,
    faHandcuffs
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Customs Trademark Recordation India: Block Port Counterfeits",
    description: validateAndNormalizeDescription(
        "Record trademarks with Indian Customs under IPR Rules 2007. Block fake imports at seaports and airports with ICEGATE notice, bonds, and port seizures.",
        "app/customs-recordation-of-trademark-in-india-ipr-rules/page.tsx"
    ),
    keywords: [
        "customs recordation of trademark in india ipr rules 2007",
        "how to stop counterfeit imports at customs india",
        "intellectual property rights imported goods enforcement rules 2007",
        "icegate ipr registration trademark",
        "customs seizure of fake goods india",
        "section 11 customs act 1962 trademark infringement",
        "customs indemnity bond ipr rules form",
        "cbic customs ipr recordation portal",
        "parallel imports trademark exhaustion india",
        "port detention of counterfeit products india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/customs-recordation-of-trademark-in-india-ipr-rules",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Customs Trademark Recordation India: Block Port Counterfeits",
        description: "Record trademarks with Indian Customs under IPR Rules 2007. Block fake imports at seaports and airports with ICEGATE notice, bonds, and port seizures.",
        url: "https://www.iprkaro.com/customs-recordation-of-trademark-in-india-ipr-rules",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/customs-recordation-of-trademark-in-india-ipr-rules.png",
                width: 1200,
                height: 630,
                alt: "Customs Recordation of Trademarks in India under IPR Rules 2007 to Block Counterfeit Imports",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Customs Trademark Recordation India: Block Port Counterfeits",
        description: "Record trademarks with Indian Customs under IPR Rules 2007. Block fake imports at seaports and airports with ICEGATE notice, bonds, and port seizures.",
        images: ["https://www.iprkaro.com/images/og/customs-recordation-of-trademark-in-india-ipr-rules.png"],
    }
};

const faqs = [
    {
        question: "What is Customs Recordation of Trademarks in India?",
        answer: "Customs Recordation is the official legal process under the Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007. Under this process, a registered trademark owner registers their IP rights with the Central Board of Indirect Taxes and Customs (CBIC) via the online ICEGATE portal. This enables Indian Customs border officers at all seaports, international airports, and Inland Container Depots (ICDs) to proactively intercept, detain, and confiscate counterfeit consignments entering India before they clear customs."
    },
    {
        question: "Can an unregistered or pending trademark be recorded with Indian Customs?",
        answer: "No. Customs recordation strictly requires a valid, active Registered Trademark Certificate (Form TM-RG) issued by the Trade Marks Registry of India. Pending trademark applications or common law unregistered marks cannot be registered under the IPR (Imported Goods) Enforcement Rules, 2007."
    },
    {
        question: "What is the validity period of a Customs IPR Recordation in India?",
        answer: "A Customs IPR Recordation in India is valid for a period of 1 year from the date of registration approval by the Commissioner of Customs (or the validity of the underlying trademark registration, whichever is shorter). Brand owners must submit a renewal application at least 30 days before expiry via the ICEGATE portal along with updated product authentication guidelines."
    },
    {
        question: "What is the role of an Indemnity Bond and Bank Guarantee under IPR Rules 2007?",
        answer: "Under Rule 5 of the IPR Rules 2007, the trademark owner must execute a general Indemnity Bond undertaking to protect the Customs Department against any claim or damages resulting from wrongful or mistaken detention of genuine goods. Furthermore, upon specific detention of a suspicious consignment, the brand owner must furnish a consignment-specific bond and security (usually 110% of the duty/CIF value) within statutory timelines to maintain the hold."
    },
    {
        question: "What are the statutory timelines for inspecting detained goods at Indian ports?",
        answer: "Upon receiving written notice of detention from the Customs Officer under Rule 6, the trademark proprietor or their authorized legal counsel must join the physical joint inspection within 10 working days (or 3 working days for perishable commodities). If the right holder fails to join or furnish the required bond/security within this window, Customs authorities are obligated to release the detained consignment to the importer."
    },
    {
        question: "What happens to the counterfeit goods once confiscated by Indian Customs?",
        answer: "Under Rule 9 of the IPR (Imported Goods) Enforcement Rules 2007 and Section 111 of the Customs Act 1962, confiscated counterfeit goods are strictly prohibited from being re-exported or auctioned back into commercial trade channels. They must be destroyed in an eco-friendly manner under the supervision of Customs officials or disposed of outside commercial channels without causing harm to the trademark owner."
    },
    {
        question: "Can parallel imports (grey market goods) be blocked through Customs Recordation in India?",
        answer: "Generally no, unless the goods are materially altered. The Delhi High Court Division Bench in the landmark 'Kapil Wadhwa v. Samsung Electronics' judgment held that India adheres to the principle of International Exhaustion under Section 30(3)(b) of the Trade Marks Act, 1999. Authentic goods legally manufactured abroad and imported without the local distributor's consent cannot be blocked as counterfeit unless they have been altered or lack mandatory statutory compliances."
    },
    {
        question: "Can brand owners pursue criminal or civil action after a Customs port seizure?",
        answer: "Yes. In addition to customs confiscation and statutory penalties under Section 112 of the Customs Act 1962, brand owners can initiate criminal complaints under Section 115 of the Trade Marks Act 1999 and Section 420 IPC / Section 318(4) BNS against the importing entity, or file commercial suits for permanent injunction and punitive damages in High Court."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "legal-framework", title: "Customs IPR Statutory Framework" },
    { id: "icegate-recordation-process", title: "ICEGATE Recordation Protocol" },
    { id: "documents-required", title: "Required Documentation Checklist" },
    { id: "indemnity-bond-security", title: "Indemnity Bond & Bank Guarantee" },
    { id: "step-by-step-port-seizure", title: "7-Step Port Detention Workflow" },
    { id: "destruction-penalties", title: "Destruction & Importer Penalties" },
    { id: "parallel-imports-grey-market", title: "Parallel Imports vs Counterfeits" },
    { id: "customs-vs-police-vs-civil", title: "Customs vs Police Raid vs Court" },
    { id: "vulnerable-port-matrix", title: "Port Infringement Risk Matrix" },
    { id: "customs-action-checklist", title: "Border Enforcement Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Legal Advice" },
];

export default function CustomsRecordationTrademarksIndiaPage() {
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
        "headline": "Customs Recordation of Trademarks in India: How to Block Counterfeit Imports at Ports",
        "description": "Record trademarks with Indian Customs under IPR Rules 2007. Block fake imports at seaports and airports with ICEGATE notice, bonds, and port seizures.",
        "image": "https://www.iprkaro.com/images/og/customs-recordation-of-trademark-in-india-ipr-rules.png",
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
            "@id": "https://www.iprkaro.com/customs-recordation-of-trademark-in-india-ipr-rules"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Customs Trademark Recordation India: Block Port Counterfeits",
        "url": "https://www.iprkaro.com/customs-recordation-of-trademark-in-india-ipr-rules",
        "description": "Record trademarks with Indian Customs under IPR Rules 2007. Block fake imports at seaports and airports with ICEGATE notice, bonds, and port seizures.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/customs-recordation-of-trademark-in-india-ipr-rules#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/customs-recordation-of-trademark-in-india-ipr-rules#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Customs Trademark Recordation Guide", "item": "https://www.iprkaro.com/customs-recordation-of-trademark-in-india-ipr-rules" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Customs Trademark Recordation and Port Detention Procedure in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Verify Valid Registered Trademark Title and Obtain Legal Certificate" },
            { "@type": "ListItem", "position": 2, "name": "Prepare Technical Product Authenticity Dossier and Authorized Importer List" },
            { "@type": "ListItem", "position": 3, "name": "File Online IPR Recordation Notice on ICEGATE Portal (CBIC)" },
            { "@type": "ListItem", "position": 4, "name": "Execute General Indemnity Bond with Commissioner of Customs" },
            { "@type": "ListItem", "position": 5, "name": "Receive Customs UTR / Unique IPR Notice Registration Number" },
            { "@type": "ListItem", "position": 6, "name": "Interception & 10-Day Joint Inspection of Detained Port Cargo" },
            { "@type": "ListItem", "position": 7, "name": "Formal Seizure, Importer Penalties, and Complete Eco-Friendly Destruction" }
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
                                <FontAwesomeIcon icon={faShip} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Border IP Enforcement &amp; Port Protection</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Customs Recordation of <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademarks in India</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Illicit international counterfeits enter Indian commercial markets through major seaports, air cargo hubs, and inland dry ports. Under the<strong>Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007</strong>and<strong>Section 11 of the Customs Act, 1962</strong>, brand owners can record registered trademarks with Indian Customs via ICEGATE. Master the online registration protocol, indemnity bond execution, port cargo interception, joint sample inspection, and counterfeit destruction procedures.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ CBIC &amp; Customs Act 1962</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Record Trademark with Customs <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Customs IP Counsel: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/customs-recordation-of-trademark-in-india-ipr-rules.png"
                                    alt="Customs Recordation of Trademarks in India under IPR Rules 2007 to Block Counterfeit Imports"
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
                        { label: "Customs Trademark Recordation Guide", href: "/customs-recordation-of-trademark-in-india-ipr-rules" }
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
                                            Overview of Customs Trademark Recordation
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Customs Recordation of Trademarks in India is governed by the Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007 under Section 11 of the Customs Act, 1962. By recording a registered trademark on the ICEGATE portal with the Central Board of Indirect Taxes and Customs (CBIC), brand owners empower customs officials across all Indian seaports, airports, and Inland Container Depots (ICDs) to automatically intercept, inspect, detain, and confiscate counterfeit goods before they clear customs. Registrations remain active for 1 year upon execution of an indemnity bond.</p>
                                        </div>

                                        <p className="mb-6">India is one of the world&apos;s largest consumer markets, making its international entry points prime targets for transnational counterfeiting syndicates. Spurious electronics, pharmaceuticals, cosmetics, automotive spare parts, and luxury consumer goods are routinely manufactured in foreign jurisdictions and shipped in massive cargo containers to Indian ports such as JNPT (Nhava Sheva), Mundra, Chennai, and Kolkata.</p>
                                        <p className="mb-6">Once counterfeit cargo clears customs and enters domestic distribution channels, tracing and seizing the inventory becomes exponentially more expensive. This requires multi-state police raids under<Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 115 criminal police raids</Link>or complex high-court litigations. Customs border recordation stops infringement at the frontier, intercepting fake goods before they ever step onto Indian soil.</p>
                                        <p className="mb-6">Understanding the statutory mechanism of border control allows brand owners to construct an impenetrable maritime and air defense. Learn how port protection integrates with broader enforcement strategies in our guides on<Link href="/civil-vs-criminal-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">civil vs criminal trademark infringement</Link>and<Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">how to stop trademark infringement</Link>.</p>
                                    </section>

                                    {/* SECTION 2: STATUTORY LEGAL FRAMEWORK */}
                                    <section id="legal-framework" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Customs IPR Statutory Framework
                                        </h3>
                                        <p className="mb-6">Border enforcement of intellectual property in India operates at the intersection of international treaties, central customs statutes, and specialized procedural rules:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">1. Section 11 of the Customs Act, 1962</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Empowers the Central Government to prohibit the import or export of goods of any specified description for the protection of patents, trademarks, copyrights, and designs, or for the prevention of deceptive trade practices.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">2. IPR (Imported Goods) Enforcement Rules, 2007</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Notified vide Notification No. 47/2007-Customs (N.T.) on May 8, 2007. These rules lay down the procedural mechanism for right holders to give notice to the Commissioner of Customs, execute indemnity bonds, participate in joint cargo inspections, and secure final confiscation orders.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">3. Section 140 of the Trade Marks Act, 1999</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Empowers a registered trademark proprietor to serve written notice upon the Commissioner of Customs requesting the detention of imported goods suspected of bearing false or infringing trademarks.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">4. WTO TRIPS Agreement (Articles 51 to 60)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">India is a signatory to TRIPS, which mandates member states to establish effective border measures enabling right holders who suspect the importation of counterfeit trademark or pirated copyright goods to lodge an application for customs suspension of release.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: ICEGATE RECORDATION PROTOCOL */}
                                    <section id="icegate-recordation-process" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faPassport} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            ICEGATE Online IPR Recordation Protocol
                                        </h3>
                                        <p className="mb-6">The Central Board of Indirect Taxes and Customs (CBIC) maintains a digitized, centralized web portal via the Indian Customs Electronic Gateway (ICEGATE). Instead of approaching individual ports, brand owners execute a single centralized recordation that covers all Indian customs stations:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Step 1: Digital ICEGATE Registration
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">The brand owner or authorized IP attorney creates an account on the CBIC IPR portal. Details of the corporate entity, registered addresses, and authorized signatory contacts are validated through Digital Signature Certificates (DSC Class 3).</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-2"></span>
                                                    Step 2: Uploading Trademark Title
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Submit certified copies of Trademark Registration Certificates from IP India. Provide exact Nice Classifications, depiction of device logos, word marks, and valid renewal certificates demonstrating active proprietary rights under<Link href="/passing-off-vs-trademark-infringement-india" className="text-[#6E5E93] hover:underline font-bold">registered trademark rights</Link>.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2"></span>
                                                    Step 3: Technical Product Guide
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Upload a comprehensive technical authenticity manual. This document educates Customs Appraisers on distinguishing genuine products from fakes (e.g., micro-text, QR codes, hologram features, typical country of origin, authorized packaging, and typical declared CIF pricing).</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2"></span>
                                                    Step 4: UTR Number Generation
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Upon scrutiny by the nodal Commissioner of Customs, the system issues a<strong>Unique Technical Reference (UTR)</strong>/ IPR Notice number. This UTR is integrated into the national Risk Management System (RMS) across all Indian customs EDI locations.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: REQUIRED DOCUMENTATION CHECKLIST */}
                                    <section id="documents-required" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Required Documentation for Customs IPR Recordation
                                        </h3>
                                        <p className="mb-6">To ensure seamless approval by the Commissioner of Customs without deficiency requisitions, brand owners must compile the following mandatory evidentiary dossier:</p>

                                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mb-8 not-prose">
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Certified Trademark Certificate:</strong>Form TM-RG or Legal Proceedings Certificate issued by IP India.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Power of Attorney / TM-48:</strong>Stamped authorization in favor of legal counsel or port customs agent.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Authorized Importer Whitelist:</strong>List of genuine overseas suppliers, authorized Indian importers, and their IEC codes.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Known Counterfeiter Blacklist:</strong>Intelligence data on suspect foreign exporters, transhipment hubs, and suspicious Indian consignees.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Technical Authenticity Guide:</strong>High-resolution side-by-side photographic comparison of real vs counterfeit markers.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>General Indemnity Bond:</strong>Executed on non-judicial stamp paper under Rule 5 of IPR Rules 2007.</span></li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 5: INDEMNITY BOND & SECURITY RULES */}
                                    <section id="indemnity-bond-security" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Indemnity Bond &amp; Bank Guarantee Rules (Rule 5)
                                        </h3>
                                        <p className="mb-6">A critical legal prerequisite under Rule 5 of the IPR (Imported Goods) Enforcement Rules, 2007 is the execution of statutory bonds by the trademark proprietor:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. General Indemnity Bond (At Time of Recordation)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The right holder executes a general bond binding themselves to pay any demurrage, port storage fees, customs costs, or damages claimed by an importer in the event of an erroneous or wrongful detention.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Consignment-Specific Bond &amp; Security (Upon Actual Detention)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">When Customs intercepts a specific suspicious container, the Deputy/Assistant Commissioner of Customs issues an order requiring the brand owner to execute a consignment-specific bond along with a<strong>Bank Guarantee or cash security</strong>(typically amounting to<strong>110% of the duty and CIF value</strong>of the detained cargo). This guarantees compensation if the goods are ultimately adjudicated as authentic.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: STEP-BY-STEP PORT SEIZURE WORKFLOW */}
                                    <section id="step-by-step-port-seizure" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTruckFast} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Port Detention &amp; Seizure Procedure
                                        </h3>
                                        <p className="mb-6">The operational workflow from cargo arrival at an Indian port to final confiscation involves strictly monitored statutory steps:</p>

                                        <div className="space-y-6">
                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    1
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Bill of Entry Filing &amp; Automated RMS Interception</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The overseas importer submits an electronic Bill of Entry. The Customs automated Risk Management System (RMS) matches the declared HS codes, trademark keywords, or consignor details against active IPR UTR notices and automatically flags the shipment for physical examination.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    2
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Notice of Cargo Suspension Issued (Rule 6)</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The Proper Officer of Customs halts clearance and promptly serves a formal written Notice of Suspension of Clearance on both the Right Holder (or authorized attorney) and the Importer, stating reasons for suspension.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    3
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Right Holder Joins Joint Inspection within 10 Days</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Under Rule 6, the brand owner or their technical expert must join the physical joint inspection within<strong>10 working days</strong>(extendable by 10 days upon reasonable cause, or 3 days for perishable goods). Right holders are permitted to draw representative samples for forensic examination.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    4
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Submission of Product Authenticity Report &amp; Bond</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The right holder submits a formal technical analysis report confirming whether the goods are counterfeit, accompanied by the consignment indemnity bond and bank guarantee. If the right holder confirms the goods are genuine or fails to respond, Customs releases the cargo.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    5
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Formal Seizure under Section 110 of Customs Act</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Once infringement is substantiated, the Customs Appraiser passes a formal Seizure Order under Section 110 of the Customs Act, 1962. The entire consignment is confiscated and transferred to bonded customs warehouses.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    6
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Customs Adjudication Proceedings (Section 122)</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The Commissioner or Additional Commissioner of Customs conducts quasi-judicial adjudication hearings. A Show Cause Notice (SCN) is issued to the rogue importer. This grants them an opportunity to prove legitimate authorization.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    7
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Final Confiscation &amp; Imposition of Personal Penalties</h4>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The Adjudicating Authority orders absolute confiscation under Section 111(d) of the Customs Act, imposes heavy personal penalties under Section 112, and issues directions for the destruction of the counterfeit goods under Rule 9.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: DESTRUCTION & IMPORTER PENALTIES */}
                                    <section id="destruction-penalties" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Destruction Protocols &amp; Statutory Penalties
                                        </h3>
                                        <p className="mb-6">Indian law enforces stringent prohibitions against counterfeit goods re-entering the market:</p>

                                        <div className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 p-6 md:p-8 rounded-2xl border border-purple-100 mb-8 not-prose">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Mandatory Destruction under Rule 9
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">Rule 9 of the IPR Rules 2007 explicitly states that confiscated infringing goods shall not be permitted to be re-exported in an unaltered state or sold at public customs auctions. Instead, they must be completely destroyed under customs supervision in environmentally approved facilities, or gifted to charitable institutions only after the counterfeit trademark has been permanently removed.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                    <p className="font-bold text-gray-900 mb-1">Customs Act Penalties (Section 112)</p>
                                                    <p className="text-xs text-gray-600 m-0">Personal monetary penalties on the importer up to five times the value of the goods or ₹5,000, whichever is greater, alongside permanent cancellation of their Import Export Code (IEC).</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                    <p className="font-bold text-gray-900 mb-1">Trade Marks Act Criminal Sanctions</p>
                                                    <p className="text-xs text-gray-600 m-0">Importers face prosecution under Sections 103 and 104 carrying 6 months to 3 years imprisonment and fines up to ₹2,00,000. Review our detailed breakdown on<Link href="/penalty-for-trademark-infringement-india" className="text-[#6E5E93] hover:underline font-bold">penalty for trademark infringement in India</Link>.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: PARALLEL IMPORTS VS COUNTERFEITS */}
                                    <section id="parallel-imports-grey-market" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Parallel Imports vs Counterfeits (Kapil Wadhwa)
                                        </h3>
                                        <p className="mb-6">A crucial legal distinction exists under Indian trademark law between<strong>counterfeit (spurious) products</strong>and<strong>parallel imports (grey market goods)</strong>:</p>

                                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mb-8 not-prose">
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                The Doctrine of International Exhaustion in India
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">Under<strong>Section 30(3)(b) of the Trade Marks Act, 1999</strong>, once genuine trademarked goods have been lawfully put on the market anywhere in the world by the proprietor or with their consent, the exclusive right to control further distribution is exhausted.</p>
                                            <ul className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed list-disc list-inside">
                                                <li><strong>Kapil Wadhwa v. Samsung Electronics Co. Ltd. (Delhi High Court Division Bench, 2012):</strong>The High Court held that India recognizes the principle of<em>International Exhaustion</em>. Importing genuine Samsung printers from foreign markets without authorization from Samsung India did not constitute trademark infringement, provided the importer clearly disclaimed that after-sales services and warranties were not provided by the official Indian distributor.</li>
                                                <li><strong>Customs Circular No. 13/2012-Customs:</strong>CBIC clarified that Customs IPR Rules 2007 cannot be used by brand owners to block legitimate parallel imports of genuine goods, unless the goods have been materially altered, impaired, or violate mandatory domestic legal standards (e.g., Legal Metrology Act, BIS standards).</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 9: CUSTOMS VS POLICE RAID VS CIVIL ACTION */}
                                    <section id="customs-vs-police-vs-civil" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Customs Recordation vs Police Raids vs Civil Suits
                                        </h3>
                                        <p className="mb-6">Compare the three primary enforcement pillars available to brand owners in India:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden text-xs sm:text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 border-b border-gray-200">
                                                        <th className="px-5 py-4 font-bold">Feature / Parameter</th>
                                                        <th className="px-5 py-4 font-bold text-[#6E5E93]">Customs Recordation (IPR Rules)</th>
                                                        <th className="px-5 py-4 font-bold text-gray-700">Police Raid (Section 115)</th>
                                                        <th className="px-5 py-4 font-bold text-gray-700">Civil Suit (Order 39 CPC)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Enforcement Stage</td>
                                                        <td className="px-5 py-4 text-[#6E5E93] font-semibold">Border Entry (Seaports &amp; Air Cargo)</td>
                                                        <td className="px-5 py-4">Domestic Factories &amp; Godowns</td>
                                                        <td className="px-5 py-4">Commercial Courts / High Court</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Primary Authority</td>
                                                        <td className="px-5 py-4">Customs Officers (CBIC / EDI System)</td>
                                                        <td className="px-5 py-4">State Police (DSP/ACP &amp; EOW)</td>
                                                        <td className="px-5 py-4">Local Commissioner &amp; High Court Judge</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Cost Efficiency</td>
                                                        <td className="px-5 py-4 font-semibold text-emerald-600">Extremely High (Proactive Centralized Hold)</td>
                                                        <td className="px-5 py-4">Moderate (Requires Ground Intel)</td>
                                                        <td className="px-5 py-4">High (Court Fees &amp; Litigation Costs)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Destruction Mandate</td>
                                                        <td className="px-5 py-4 text-[#6E5E93] font-semibold">Mandatory Eco-Friendly Destruction</td>
                                                        <td className="px-5 py-4">Trial Court Order under Section 111</td>
                                                        <td className="px-5 py-4">Final Decree for Delivery-Up</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Monetary Damages</td>
                                                        <td className="px-5 py-4">Customs Fines Only (To Government)</td>
                                                        <td className="px-5 py-4">Criminal Penalties Only</td>
                                                        <td className="px-5 py-4 font-semibold text-emerald-600">Substantial Enterprise Damages &amp; Profits</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: VULNERABLE PORT-IMPORT SECTOR MATRIX */}
                                    <section id="vulnerable-port-matrix" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBoxOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Vulnerable Port-Import Industry Matrix
                                        </h3>
                                        <p className="mb-6">Customs seizure patterns in India demonstrate high vulnerability across specific consumer goods classes:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden text-xs sm:text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 border-b border-gray-200">
                                                        <th className="px-5 py-4 font-bold">Commercial Sector</th>
                                                        <th className="px-5 py-4 font-bold">Class</th>
                                                        <th className="px-5 py-4 font-bold">Major Entry Ports</th>
                                                        <th className="px-5 py-4 font-bold">Typical Counterfeit Modus</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Consumer Electronics &amp; Mobile Spares</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Class 9</td>
                                                        <td className="px-5 py-4">Nhava Sheva (JNPT), Chennai, Delhi Air Cargo</td>
                                                        <td className="px-5 py-4">Unbranded items with loose brand stickers, fake BIS marks, spurious batteries</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Cosmetics, Fragrances &amp; Personal Care</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Class 3</td>
                                                        <td className="px-5 py-4">Mundra, JNPT, Kolkata Sea Port</td>
                                                        <td className="px-5 py-4">Misdeclared toxic formulations, cloned luxury perfume bottles, missing batch data</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Automotive Bearings &amp; Critical Spares</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Classes 7, 12</td>
                                                        <td className="px-5 py-4">Pipavav, JNPT, ICD Tughlakabad</td>
                                                        <td className="px-5 py-4">Substandard recycled steel bearings packed in counterfeit OEM cardboard boxes</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Apparel, Footwear &amp; Luxury Fashion</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Classes 18, 25</td>
                                                        <td className="px-5 py-4">Mumbai Air Cargo, Chennai Sea, Cochin</td>
                                                        <td className="px-5 py-4">First-copy designer handbags, fake sports shoes, cloned designer logos</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Toys, Video Games &amp; Merchandise</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Class 28</td>
                                                        <td className="px-5 py-4">Nhava Sheva, Tuticorin, Kolkata Port</td>
                                                        <td className="px-5 py-4">Toxic plastic character figurines, unlicensed anime merchandise, fake gaming accessories</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-6">Explore sector-specific brand strategies in our guides on<Link href="/trademark-registration-for-pharmaceuticals" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for pharmaceuticals</Link>,<Link href="/trademark-for-clothing-brand" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for clothing brands</Link>, and<Link href="/trademark-for-d2c-brand-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for D2C brands</Link>.</p>
                                    </section>

                                    {/* SECTION 11: ACTION CHECKLIST */}
                                    <section id="customs-action-checklist" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Customs Recordation Action Checklist
                                        </h3>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Audit Registered Trademarks:</strong>Verify active trademark certificates on Form TM-RG from IP India for all critical product lines.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Compile Technical Authenticity Dossier:</strong>Document micro-printing, security packaging, and authorized overseas consignor data.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Execute ICEGATE Online Recordation:</strong>Submit centralized electronic IPR notice with CBIC and obtain your Unique UTR number.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Furnish General Indemnity Bond:</strong>Execute statutory stamp bond with the Nodal Commissioner of Customs under Rule 5.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Establish Rapid Port Response Protocol:</strong>Designate authorized local counsel at JNPT, Chennai, Mundra, and Delhi to join 10-day joint inspections.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Submit Consignment Security:</strong>Furnish consignment bond and 110% bank guarantee promptly upon receiving detention notices.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Secure Final Destruction &amp; Importer Prosecution:</strong>Ensure absolute customs confiscation, eco-friendly destruction, and criminal FIR registration.</span></li>
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
                                            Strategic Border Enforcement Advice
                                        </h3>
                                        <p className="mb-6">Customs recordation is the single most cost-effective brand protection instrument for enterprises operating in India. By establishing automated Risk Management System (RMS) filters at Indian borders, you intercept entire shipping containers of counterfeit inventory before they inflict catastrophic financial and reputational harm on your domestic market.</p>
                                        <p className="mb-6">Never wait for counterfeit goods to saturate Indian retail markets or online e-commerce platforms. Partner with veteran intellectual property attorneys and customs practitioners to manage your ICEGATE IPR filings, liaise with Customs Appraising Groups, execute port sampling, and ensure total destruction of spurious consignments. For multi-channel brand defense, explore our specialized guides on<Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send trademark legal notices</Link>,<Link href="/flipkart-brand-approval-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Flipkart brand approval</Link>, and<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry requirements</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Nationwide Border IP Protection &amp; Port Defense
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Block Counterfeit Imports with Indian Customs Recordation
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy seasoned IP attorneys to record your trademarks on ICEGATE, execute customs indemnity bonds, intercept suspicious port cargo, and shut down overseas counterfeiting syndicates.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Record with Customs Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered IP Advocates • ICEGATE IPR Notices • Port Sampling • Pan-India Border Defense</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in customs border recordation, anti-counterfeiting investigations, IPR Rules 2007 compliance, and international port enforcement across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Stop Port Counterfeits</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Intercept fake imports before they clear customs. Record your brand on ICEGATE with expert IP counsels.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Consult Customs Specialist
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 115 Police Raids</span></Link></li>
                                    <li><Link href="/civil-vs-criminal-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Civil vs Criminal TM</span></Link></li>
                                    <li><Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandcuffs} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Penalties India</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/flipkart-brand-approval-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Flipkart Brand Lock</span></Link></li>
                                    <li><Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Amazon Brand Registry</span></Link></li>
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
