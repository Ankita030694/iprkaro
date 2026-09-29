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
    faHandcuffs,
    faShieldCat,
    faFileInvoiceDollar
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Anti-Counterfeiting Police Raids India: Section 115 Guide",
    description: validateAndNormalizeDescription(
        "Learn how to conduct anti-counterfeiting police raids in India under Section 115. Master Registrar opinions, DSP search powers, and seizure memos.",
        "app/anti-counterfeiting-police-raid-procedure-section-115-india/page.tsx"
    ),
    keywords: [
        "how to conduct police raid for counterfeit goods in india section 115",
        "section 115 trade marks act registrar opinion",
        "police raid for fake products in india",
        "criminal search and seizure counterfeit trademark",
        "dsp registrar certificate raid section 115",
        "anti counterfeiting investigation india",
        "trademark criminal complaint eow crime branch",
        "panchnama seizure memo counterfeit trademark india",
        "section 103 104 trade marks act non bailable",
        "brand protection police raid procedure india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/anti-counterfeiting-police-raid-procedure-section-115-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Anti-Counterfeiting Police Raids India: Section 115 Guide",
        description: "Learn how to conduct anti-counterfeiting police raids in India under Section 115. Master Registrar opinions, DSP search powers, and seizure memos.",
        url: "https://www.iprkaro.com/anti-counterfeiting-police-raid-procedure-section-115-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/anti-counterfeiting-police-raid-procedure-section-115-india.png",
                width: 1200,
                height: 630,
                alt: "Anti-Counterfeiting Police Raids and Section 115 Search and Seizure Procedure in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Anti-Counterfeiting Police Raids India: Section 115 Guide",
        description: "Learn how to conduct anti-counterfeiting police raids in India under Section 115. Master Registrar opinions, DSP search powers, and seizure memos.",
        images: ["https://www.iprkaro.com/images/og/anti-counterfeiting-police-raid-procedure-section-115-india.png"],
    }
};

const faqs = [
    {
        question: "Is trademark counterfeiting a cognizable and non-bailable offence in India?",
        answer: "Yes. Under Section 115(3) of the Trade Marks Act, 1999, offences under Section 103 (applying false trade marks) and Section 104 (selling goods with false trade marks) are cognizable. The Supreme Court of India and High Courts have consistently held that because these offences carry penalties of up to 3 years imprisonment, they are non-bailable under the Code of Criminal Procedure (and Bharatiya Nagarik Suraksha Sanhita, 2023). This allows police to arrest counterfeiters without a prior warrant."
    },
    {
        question: "What rank of police officer is authorized to conduct a search and seizure under Section 115?",
        answer: "Under Section 115(4) of the Trade Marks Act, 1999, search and seizure without a warrant can only be executed by a police officer not below the rank of Deputy Superintendent of Police (DSP), Assistant Commissioner of Police (ACP), or an equivalent rank. If subordinate officers execute the raid, they must be officially authorized and accompanied by a DSP/ACP rank officer to preserve statutory validity."
    },
    {
        question: "Is the Registrar's opinion mandatory before conducting a Section 115 police raid?",
        answer: "Yes. The Proviso to Section 115(4) explicitly mandates that before conducting any search and seizure, the police officer must obtain the formal opinion of the Registrar of Trade Marks on the facts involved in the offence and abide by that opinion. Raids executed without securing the Registrar's certificate or opinion risk being quashed in High Court under Section 482 CrPC (or Section 528 BNSS 2023) for procedural non-compliance."
    },
    {
        question: "What evidence must a brand owner gather before filing a criminal raid complaint?",
        answer: "A brand owner must compile: (1) Certified copy of the Registered Trademark Certificate or Legal Proceedings Certificate from IP India, (2) Board Resolution or Power of Attorney authorizing the raid representative, (3) Mystery shopping test purchase invoices, (4) Physical counterfeit sample units, (5) Technical product authenticity comparison report demonstrating spurious markers, and (6) Accurate intelligence dossier detailing godown/factory locations, suspect names, and logistics hubs."
    },
    {
        question: "What items can police seize during an anti-counterfeiting raid under Section 115?",
        answer: "Under Section 115(4), police are empowered to seize all counterfeit finished goods, packaging materials, labels, cartons, holograms, security stickers, dies, blocks, printing plates, machinery, moulding equipment, computers, billing software, and accounting registers used directly or indirectly in the commission of the counterfeiting offence."
    },
    {
        question: "What is a Panchnama (Seizure Memo) and why is it critical during a police raid?",
        answer: "A Panchnama (or Seizure Memo under Section 100 CrPC / Section 103 BNSS 2023) is the official contemporaneous record of the search and recovery. It itemizes every seized item, batch number, quantity, and packaging state. It must be prepared on the spot, sealed in evidence bags, and signed by at least two independent respectable local witnesses (Panchas) and the raiding officer to establish an unbroken chain of custody in court."
    },
    {
        question: "Can an anti-counterfeiting police raid be conducted without a registered trademark?",
        answer: "No. Criminal search and seizure under Section 115 specifically enforces registered proprietary rights under the Trade Marks Act, 1999. If your trademark is unregistered or pending, you cannot invoke Section 115 powers or obtain a favorable Registrar's opinion. Unregistered brand owners must instead pursue civil passing-off remedies or file general cheating complaints under Section 420 IPC / Section 318(4) BNS."
    },
    {
        question: "What happens to the seized counterfeit goods after the criminal raid?",
        answer: "Seized goods are deposited in the police evidence room (Malkhana) or released to the brand owner under Superdari custody (interim bond under Section 451 CrPC / Section 497 BNSS) subject to court production. Upon conclusion of the criminal trial and conviction of the accused under Section 103/104, the Trial Court issues a final order under Section 111 for the complete confiscation and destruction of the spurious goods."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "legal-framework", title: "Section 115 Legal Framework" },
    { id: "offences-penalties", title: "Offences & Penalties" },
    { id: "pre-raid-groundwork", title: "Pre-Raid Investigation" },
    { id: "registrar-opinion", title: "Registrar's Opinion" },
    { id: "police-complaint-drafting", title: "Drafting Criminal Complaint" },
    { id: "step-by-step-raid-procedure", title: "7-Step Raid Execution" },
    { id: "seizure-memo-chain-custody", title: "Seizure Memo & Panchnama" },
    { id: "civil-vs-criminal-comparison", title: "Criminal Raid vs Civil Action" },
    { id: "vulnerable-industry-matrix", title: "Vulnerable Industries Matrix" },
    { id: "brand-protection-checklist", title: "Raid Action Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Enforcement Advice" },
];

export default function AntiCounterfeitingPoliceRaidPage() {
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
        "headline": "How to Conduct Anti-Counterfeiting Police Raids in India: Section 115 Search & Seizure",
        "description": "Learn how to conduct anti-counterfeiting police raids in India under Section 115. Master Registrar opinions, DSP search powers, and seizure memos.",
        "image": "https://www.iprkaro.com/images/og/anti-counterfeiting-police-raid-procedure-section-115-india.png",
        "datePublished": "2026-09-28T08:30:00+05:30",
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
            "@id": "https://www.iprkaro.com/anti-counterfeiting-police-raid-procedure-section-115-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Anti-Counterfeiting Police Raids India: Section 115 Guide",
        "url": "https://www.iprkaro.com/anti-counterfeiting-police-raid-procedure-section-115-india",
        "description": "Learn how to conduct anti-counterfeiting police raids in India under Section 115. Master Registrar opinions, DSP search powers, and seizure memos.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/anti-counterfeiting-police-raid-procedure-section-115-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/anti-counterfeiting-police-raid-procedure-section-115-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Anti-Counterfeiting Police Raid Guide", "item": "https://www.iprkaro.com/anti-counterfeiting-police-raid-procedure-section-115-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Anti-Counterfeiting Police Raid Protocol under Section 115",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Deploy Private Investigators for Market Surveillance & Test Purchases" },
            { "@type": "ListItem", "position": 2, "name": "Compile Technical Counterfeit Authenticity Analysis & Target Dossier" },
            { "@type": "ListItem", "position": 3, "name": "Secure Certified Trademark Registration & Legal Certificate from IP India" },
            { "@type": "ListItem", "position": 4, "name": "Obtain Mandatory Registrar Opinion under Section 115(4) Proviso" },
            { "@type": "ListItem", "position": 5, "name": "Draft and Lodge Criminal Complaint with Police Commissioner / SSP / EOW" },
            { "@type": "ListItem", "position": 6, "name": "Execute Multi-Location Search and Seizure Led by DSP/ACP Rank Officers" },
            { "@type": "ListItem", "position": 7, "name": "Draft Panchnama, Arrest Accused, Lodge FIR, and Oppose Bail in Court" }
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
                                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Criminal Trademark Enforcement</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Anti-Counterfeiting Police Raids Under <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Section 115 in India</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Counterfeiting inflicts devastating revenue loss, consumer safety hazards, and reputational damage on legitimate enterprises across India. Under<strong>Section 115 of the Trade Marks Act, 1999</strong>, brand owners possess powerful criminal remedies to coordinate with law enforcement, secure search and seizure without a warrant, confiscate spurious inventory, and arrest counterfeiters. Master the pre-raid investigation, mandatory Registrar&apos;s opinion, DSP authorization protocol, Seizure Memo (Panchnama) drafting, and post-raid criminal prosecution strategies.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified Criminal IP Practice</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Initiate Anti-Counterfeiting Raid <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/anti-counterfeiting-police-raid-procedure-section-115-india.png"
                                    alt="Anti-Counterfeiting Police Raids and Section 115 Search and Seizure Procedure in India"
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
                        { label: "Anti-Counterfeiting Police Raid Guide", href: "/anti-counterfeiting-police-raid-procedure-section-115-india" }
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
                                            Overview of Section 115 Police Raids
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">An anti-counterfeiting police raid in India is executed under Section 115 of the Trade Marks Act, 1999. It empowers a police officer not below the rank of Deputy Superintendent of Police (DSP) or Assistant Commissioner of Police (ACP) to search premises and seize counterfeit goods, packaging materials, dies, and manufacturing machinery without a warrant. Before conducting the raid, the police officer must obtain a formal opinion from the Registrar of Trade Marks verifying the trademark registration and infringement facts. Offences under Sections 103 and 104 are cognizable and non-bailable, punishable by up to 3 years imprisonment and ₹2,00,000 in fines.</p>
                                        </div>

                                        <p className="mb-6">Counterfeit manufacturing and illicit trade represent an existential crisis for legitimate brand proprietors in India. From spurious life-saving pharmaceuticals and automotive components to cosmetic duplicates and fast-moving consumer goods (FMCG), counterfeiters siphon billions in enterprise valuation while exposing end consumers to severe health and safety hazards.</p>
                                        <p className="mb-6">While civil remedies—such as commercial injunction suits and Local Commissioner appointments under Order 39 of the Code of Civil Procedure (CPC)—provide financial compensation and restraining orders, they often lack the immediate deterrent shock of criminal law. A criminal raid under Section 115 physically seizes counterfeit inventory, halts manufacturing assembly lines, arrests perpetrators on the spot, and initiates criminal prosecution under the<strong>Trade Marks Act, 1999</strong>, the<strong>Indian Penal Code (IPC)</strong>, and the<strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.</p>
                                        <p className="mb-6">To execute an effective criminal police raid that withstands judicial scrutiny and avoids quashing petitions, brand protection directors and legal counsels must follow strict statutory procedures. Learn how criminal remedies integrate into overall brand defense in our detailed analysis on<Link href="/civil-vs-criminal-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">civil vs criminal trademark infringement</Link>and<Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">how to stop trademark infringement</Link>.</p>
                                    </section>

                                    {/* SECTION 2: SECTION 115 LEGAL FRAMEWORK */}
                                    <section id="legal-framework" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 115 Statutory Framework &amp; Mandate
                                        </h2>
                                        <p className="mb-6">Section 115 of the Trade Marks Act, 1999 governs the cognizance of offences and vests specific search and seizure powers in Indian law enforcement authorities. Understanding its sub-clauses is essential for lawful raid execution:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Cognizance of General Registry Offences — Section 115(1)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 115(1) establishes that no court shall take cognizance of offences relating to false representation of a mark as registered (Section 107), improper description of a place of business (Section 108), or falsification of entries in the register (Section 109), except upon a written complaint made by the Registrar of Trade Marks or an authorized officer.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Cognizable Status of Counterfeiting Offences — Section 115(3)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 115(3) explicitly declares that offences under<strong>Section 103</strong>(applying false trade marks and trade descriptions),<strong>Section 104</strong>(selling goods or providing services with false trade marks), and<strong>Section 105</strong>(enhanced penalty for second or subsequent conviction) are<strong>cognizable</strong>. This statutory recognition allows police officers to register a First Information Report (FIR) and start immediate criminal investigation.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Search &amp; Seizure Without Warrant — Section 115(4)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 115(4) grants extraordinary authority: any police officer not below the rank of<strong>Deputy Superintendent of Police (DSP)</strong>, Assistant Commissioner of Police (ACP), or equivalent, who is satisfied that an offence under Sections 103, 104, or 105 is being or is likely to be committed, may<em>search and seize without warrant</em>any goods, dies, blocks, machines, plates, or other instruments used in committing the crime.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. The Mandatory Proviso: Registrar&apos;s Opinion — Section 115(4) Proviso</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Proviso to Section 115(4) contains a vital procedural check:<em>&ldquo;Provided that the police officer, before making any search and seizure, shall obtain the opinion of the Registrar on facts involved in the offence and shall abide by the opinion so obtained.&rdquo;</em>Failure to comply with this proviso can render the entire search illegal and lead to discharge of the accused in High Court.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: OFFENCES & CRIMINAL PENALTIES */}
                                    <section id="offences-penalties" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandcuffs} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Offences &amp; Criminal Penalties in India
                                        </h2>
                                        <p className="mb-6">The Trade Marks Act, 1999 imposes strict criminal sanctions on individuals and corporate syndicates engaged in commercial counterfeiting:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Section 103 (Falsification)
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Applies to anyone who applies a false trademark to goods, forges any trademark, or makes/possesses dies, blocks, or machines for falsification.</p>
                                                <div className="bg-purple-100/60 p-2.5 rounded-lg text-xs font-bold text-[#6E5E93]">
                                                    6 Months to 3 Years Jail + ₹50,000 to ₹2,00,000 Fine
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-2"></span>
                                                    Section 104 (Trading Spurious)
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Applies to wholesalers, retailers, distributors, and e-commerce vendors who sell, let for hire, or possess counterfeit goods for sale.</p>
                                                <div className="bg-indigo-100/60 p-2.5 rounded-lg text-xs font-bold text-indigo-800">
                                                    6 Months to 3 Years Jail + ₹50,000 to ₹2,00,000 Fine
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></span>
                                                    Section 105 (Repeat Offence)
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Applies to habitual counterfeiters convicted of a second or subsequent offence under Section 103 or Section 104.</p>
                                                <div className="bg-red-100/60 p-2.5 rounded-lg text-xs font-bold text-red-800">
                                                    1 Year to 3 Years Jail + ₹1,00,000 to ₹2,00,000 Fine
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200 mb-8 not-prose">
                                            <h3 className="text-base font-bold text-amber-950 mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 mr-2 text-amber-800" />
                                                Interplay with IPC / Bharatiya Nyaya Sanhita (BNS) 2023
                                            </h3>
                                            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed m-0">Police complaints are routinely drafted invoking both the Trade Marks Act and general criminal provisions:<strong>Section 420 IPC / Section 318(4) BNS</strong>(Cheating and dishonestly inducing delivery of property),<strong>Section 486 IPC</strong>(Selling goods marked with a counterfeit property mark), and<strong>Sections 468 &amp; 471 IPC / Sections 336 &amp; 340 BNS</strong>(Forgery of packaging labels and security holograms for cheating). For more on statutory liabilities, review our comprehensive breakdown on<Link href="/penalty-for-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-bold">penalty for trademark infringement in India</Link>.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: PRE-RAID GROUNDWORK & INVESTIGATION */}
                                    <section id="pre-raid-groundwork" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faSearch} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Pre-Raid Market Intelligence &amp; Evidence Collation
                                        </h2>
                                        <p className="mb-6">A successful Section 115 police raid depends almost entirely on the quality and confidentiality of pre-raid intelligence. Police departments will not mobilize senior DSP/ACP officers based on mere hearsay or speculation. Brand owners must present an airtight investigation dossier.</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Market Surveillance &amp; Supply Chain Mapping</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Deploy certified private corporate investigators to trace the counterfeit distribution network. Identify manufacturing units, packaging printing presses, transit hubs, and clandestine storage godowns. Key counterfeit epicenters in India include Chandni Chowk, Sadar Bazar, and Gaffar Market in Delhi NCR, Bhiwandi and Crawford Market in Mumbai, Surat in Gujarat, and wholesale clusters in Kolkata, Chennai, and Ludhiana.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Sample Test Purchases (Mystery Shopping)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Execute controlled test purchases of the spurious products. Ensure undercover investigators obtain physical tax invoices, cash receipts, visiting cards, WhatsApp communication records, or UPI payment transaction IDs that directly link the counterfeit goods to the target premises and suspects.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Technical Authenticity Verification Report</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Brand technical experts or Quality Assurance (QA) directors must prepare a side-by-side comparative examination report. Document subtle discrepancies between authentic and counterfeit items, including micro-printing errors, inferior packaging cardstock, missing UV security ink, distorted logo proportions, altered batch serial numbers, and fake QR codes.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Title Verification &amp; Legal Proceedings Certificate</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Ensure your trademark registration is active, renewed, and free from adverse registry orders. Obtain a certified copy of the<strong>Trademark Registration Certificate (Form TM-RG)</strong>or apply for a<strong>Legal Proceedings Certificate</strong>from the Indian Trade Marks Registry to prove clear statutory title under Section 28 and Section 31.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: REGISTRAR'S OPINION UNDER SECTION 115(4) */}
                                    <section id="registrar-opinion" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Obtaining Registrar&apos;s Opinion under Section 115(4)
                                        </h2>
                                        <p className="mb-6">The Proviso to Section 115(4) is one of the most litigated provisions in Indian criminal IP jurisprudence. It was introduced to prevent frivolous or vexatious criminal raids initiated by business rivals against genuine traders.</p>

                                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mb-8 not-prose">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Judicial Precedents on Section 115(4) Compliance
                                            </h3>
                                            <ul className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed list-disc list-inside">
                                                <li><strong>Supreme Court of India (Aneeta Hada &amp; Subhashchandra Patni):</strong>The Apex Court and various High Courts have reiterated that obtaining the Registrar&apos;s opinion is a statutory condition precedent before a police officer conducts search and seizure under Section 115(4).</li>
                                                <li><strong>Delhi High Court (Sanyo Electric Co. Ltd. V. State):</strong>The High Court affirmed that while police can initiate preliminary inquiry upon receiving a complaint, executing search and seizing goods without first seeking the Registrar&apos;s opinion vitiates the recovery.</li>
                                                <li><strong>Procedure for Securing Opinion:</strong>The investigating officer or the brand owner&apos;s legal counsel submits a formal requisition along with certified trademark certificates, test purchase samples, and the comparison matrix to the Registrar of Trade Marks. The Registrar evaluates whether the impugned mark is deceptively similar or identical under Section 102 and issues an official opinion certificate.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 6: DRAFTING CRIMINAL COMPLAINT */}
                                    <section id="police-complaint-drafting" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Drafting &amp; Lodging Criminal Complaints
                                        </h2>
                                        <p className="mb-6">A standard police complaint filed at a local police station desk is frequently delayed or mishandled due to lack of specialized IP training. Brand owners must draft a comprehensive complaint and present it to senior supervisory officers.</p>

                                        <div className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 p-6 md:p-8 rounded-2xl border border-purple-100 mb-8 not-prose">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Where to Lodge the Anti-Counterfeiting Complaint in India
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                    <p className="font-bold text-gray-900 mb-1">1. Economic Offences Wing (EOW)</p>
                                                    <p className="text-xs text-gray-600 m-0">Specialized state police wing equipped with dedicated IPR cells to investigate commercial counterfeiting syndicates exceeding designated financial thresholds.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                    <p className="font-bold text-gray-900 mb-1">2. Crime Branch / Special Cell</p>
                                                    <p className="text-xs text-gray-600 m-0">Handles multi-jurisdictional, inter-district, and organized illicit supply chains involving clandestine factories and major transport godowns.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                    <p className="font-bold text-gray-900 mb-1">3. Commissioner / SSP / DCP Office</p>
                                                    <p className="text-xs text-gray-600 m-0">Filing directly before the Commissioner of Police, Senior Superintendent of Police (SSP), or Deputy Commissioner of Police (DCP) ensures direct DSP/ACP rank assignment.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                    <p className="font-bold text-gray-900 mb-1">4. Magistrate Section 156(3) Route</p>
                                                    <p className="text-xs text-gray-600 m-0">If police hesitate to register an FIR, filing an application under Section 156(3) CrPC / Section 175(3) BNSS 2023 before the Judicial Magistrate mandates an FIR.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: 7-STEP POLICE RAID PROCESS */}
                                    <section id="step-by-step-raid-procedure" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTruckFast} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Anti-Counterfeiting Raid Execution Process
                                        </h2>
                                        <p className="mb-6">Executing an anti-counterfeiting police raid in India requires synchronization between corporate brand protection teams, private investigators, IP advocates, and law enforcement officers:</p>

                                        <div className="space-y-6">
                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    1
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ground Surveillance &amp; Target Dossier Finalization</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Investigators conduct pre-raid reconnaissance 24 to 48 hours before the operation. Confirm suspect presence, active inventory movement, factory operating hours, and exact GPS coordinates with photographs of building entryways and godown shutters.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    2
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Briefing the Senior Police Officer (DSP / ACP Rank)</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Brand representatives and advocates brief the designated DSP/ACP. Present the investigation dossier, sample test purchases, authenticity discrepancies, and trademark registration proofs to satisfy statutory suspicion requirements under Section 115(4).</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    3
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Mobilizing the Police Raiding Party</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Form the raiding team comprising the DSP/ACP, Station House Officer (SHO), sub-inspectors, armed constables, female police personnel (if residential/commercial premises involve female occupants), and two independent local respectable witnesses (Panchas).</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    4
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Simultaneous Multi-Location Search &amp; Entry</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">To prevent suspects from alerting suppliers or moving inventory, execute simultaneous entries across manufacturing units, printing presses, and retail outlets. Secure all exits, confiscate mobile devices, and isolate electronic billing terminals.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    5
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Identification, Physical Seizure &amp; Sealing</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Brand technical experts inspect and identify counterfeit goods on the spot. Police confiscate finished goods, packaging labels, cartons, dies, screen printing blocks, injection moulds, and raw chemical ingredients. Pack items into evidence sacks and apply official police wax seals.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    6
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Drafting the Panchnama (Seizure Memo) on the Spot</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">The investigating officer prepares a detailed recovery memo (Panchnama) under Section 100 CrPC / Section 103 BNSS 2023. Record exact quantities, descriptions, seal impressions, and obtain signatures from independent witnesses, the accused, and the raiding officer.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="w-10 h-10 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base shrink-0 mr-4 mt-0.5">
                                                    7
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Arrest of Suspects, FIR Registration &amp; Court Remand</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">Arrest the kingpins and operators under Sections 103 and 104 of the Trade Marks Act and Section 420 IPC / Section 318(4) BNS. Transport the accused and sealed evidence to the police station, register the formal FIR, and produce the accused before the Judicial Magistrate within 24 hours.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: SEIZURE MEMO & CHAIN OF CUSTODY */}
                                    <section id="seizure-memo-chain-custody" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBoxOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Seizure Memo (Panchnama) &amp; Chain of Custody
                                        </h2>
                                        <p className="mb-6">The Seizure Memo (Panchnama) is the evidentiary backbone of the prosecution case. In criminal trials, defense advocates routinely challenge the integrity of the raid by attacking procedural lapses in the Panchnama.</p>

                                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mb-8 not-prose">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 mr-2 text-green-600" />
                                                Essential Elements of a Valid Section 115 Seizure Memo
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Exact Date &amp; Time:</strong>start and conclusion of search.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Accurate Location Description:</strong>Full postal address and physical boundaries.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Two Independent Witnesses:</strong>Names, parentage, addresses, and ID proofs of Panchas.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Granular Inventory List:</strong>Exact count of finished goods, packaging, and machinery.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Sample Seal Impressions:</strong>Detailed record of sample units extracted for forensics.</span></li>
                                                <li className="flex items-start"><span className="w-2 h-2 bg-[#6E5E93] rounded-full mt-1.5 mr-2 shrink-0"></span><span><strong>Signatures &amp; Copy Service:</strong>Signed by accused, receiving a mandatory carbon copy.</span></li>
                                            </ul>
                                        </div>

                                        <p className="mb-6"><strong>Preserving Chain of Custody &amp; Superdari Custody:</strong>After seizure, goods are deposited in the police evidence store (Malkhana). Due to storage constraints for large bulk seizures (e.g., thousands of counterfeit auto parts or electronic appliances), brand owners can file an application under<strong>Section 451 CrPC / Section 497 BNSS 2023</strong>for release of goods on &ldquo;Superdari&rdquo; (interim custody on bond), preserving the sealed evidence safely until trial completion.</p>
                                    </section>

                                    {/* SECTION 9: CRIMINAL RAID VS CIVIL ACTION */}
                                    <section id="civil-vs-criminal-comparison" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Criminal Police Raid vs Civil Injunction Action
                                        </h2>
                                        <p className="mb-6">Brand owners facing widespread infringement often debate whether to initiate a criminal police raid under Section 115 or file a civil commercial suit in High Court / District Commercial Court:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden text-xs sm:text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 border-b border-gray-200">
                                                        <th className="px-5 py-4 font-bold">Key Parameter</th>
                                                        <th className="px-5 py-4 font-bold text-[#6E5E93]">Criminal Raid (Section 115)</th>
                                                        <th className="px-5 py-4 font-bold text-gray-700">Civil Action (Order 39 / CPC)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Primary Objective</td>
                                                        <td className="px-5 py-4 text-[#6E5E93] font-semibold">Immediate deterrence, seizure &amp; criminal arrest</td>
                                                        <td className="px-5 py-4">Injunction, damages &amp; rendition of accounts</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Enforcing Authority</td>
                                                        <td className="px-5 py-4">State Police (DSP/ACP &amp; EOW / Crime Branch)</td>
                                                        <td className="px-5 py-4">Court-appointed Local Commissioner / Advocate</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Speed of Action</td>
                                                        <td className="px-5 py-4 font-semibold text-emerald-600">Rapid (within 24 to 72 hours of intelligence)</td>
                                                        <td className="px-5 py-4">Requires drafting suit, listing, &amp; ex-parte hearing</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Arrest Powers</td>
                                                        <td className="px-5 py-4 font-semibold text-red-600">Yes (Non-bailable offences under Sec 103/104)</td>
                                                        <td className="px-5 py-4">No (Contempt of court only upon order breach)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Unknown Infringers</td>
                                                        <td className="px-5 py-4">Investigated on ground via police powers</td>
                                                        <td className="px-5 py-4">Handled via John Doe (Ashok Kumar) orders</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Financial Damages</td>
                                                        <td className="px-5 py-4">Government fines only (no corporate damages)</td>
                                                        <td className="px-5 py-4 font-semibold text-emerald-600">Monetary compensation &amp; punitive damages awarded</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-6"><strong>The Hybrid Strategy:</strong>Leading multinational and Indian enterprises frequently employ a hybrid model: launching Section 115 criminal raids against clandestine manufacturing units and godowns for immediate seizure and deterrence, while concurrently filing civil commercial suits against corporate entities to secure permanent injunctions and substantial financial damages under<Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark infringement and passing off</Link>.</p>
                                    </section>

                                    {/* SECTION 10: VULNERABLE INDUSTRY MATRIX */}
                                    <section id="vulnerable-industry-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Industry Counterfeiting Vulnerability Matrix
                                        </h2>
                                        <p className="mb-6">Counterfeiting impacts specific commercial sectors with distinct modus operandi. The following matrix illustrates key sectors, target classes, and specialized raid considerations:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden text-xs sm:text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 border-b border-gray-200">
                                                        <th className="px-5 py-4 font-bold">Industry Vertical</th>
                                                        <th className="px-5 py-4 font-bold">Trademark Class</th>
                                                        <th className="px-5 py-4 font-bold">Typical Modus Operandi</th>
                                                        <th className="px-5 py-4 font-bold">Raid Seizure Focus</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Pharmaceuticals &amp; Healthcare</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Class 5</td>
                                                        <td className="px-5 py-4">Chalk/starch formulations, spurious blister foils, cloned batch codes</td>
                                                        <td className="px-5 py-4">Active pharmaceutical ingredients, tableting machines, foil printing dies</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Automotive Spares &amp; Lubricants</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Classes 4, 7, 12</td>
                                                        <td className="px-5 py-4">Recycled engine oil, spurious brake pads, fake branded cardboard boxes</td>
                                                        <td className="px-5 py-4">Oil blending drums, fake hologram labels, laser etching machines</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Electronics &amp; Mobile Accessories</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Class 9</td>
                                                        <td className="px-5 py-4">Substandard lithium batteries, fire-hazard adapters, fake brand logos</td>
                                                        <td className="px-5 py-4">Pad printing machinery, unbranded accessories, counterfeit packaging</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">FMCG, Cosmetics &amp; Perfumery</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Classes 3, 29, 30</td>
                                                        <td className="px-5 py-4">Toxic chemical creams, fake shampoo bottles, spurious ghee/spices</td>
                                                        <td className="px-5 py-4">Bottle blow moulding units, screen printing screens, packaging rolls</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-5 py-4 font-bold text-gray-900">Apparel, Footwear &amp; Luxury Goods</td>
                                                        <td className="px-5 py-4 font-medium text-[#6E5E93]">Classes 18, 25</td>
                                                        <td className="px-5 py-4">First-copy luxury bags, fake sports jerseys, counterfeit shoe soles</td>
                                                        <td className="px-5 py-4">Embroidery machines, metal brand badges, heat transfer stickers</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-6">Explore sector-specific protection strategies in our guides on<Link href="/trademark-registration-for-pharmaceuticals" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for pharmaceuticals</Link>,<Link href="/trademark-for-clothing-brand" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for clothing brands</Link>, and<Link href="/trademark-for-d2c-brand-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for D2C brands</Link>.</p>
                                    </section>

                                    {/* SECTION 11: RAID ACTION CHECKLIST */}
                                    <section id="brand-protection-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Anti-Counterfeiting Raid Action Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Verify Registered Title:</strong>Ensure valid Trademark Registration Certificate on Form TM-RG or Legal Proceedings Certificate from IP India.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Execute Mystery Shopping:</strong>Secure verified sample test purchases with authentic commercial receipts, UPI records, or video evidence.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Draft QA Technical Report:</strong>Prepare an expert comparative analysis highlighting forensic packaging and manufacturing discrepancies.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Obtain Section 115(4) Opinion:</strong>Procure the mandatory verification opinion from the Registrar of Trade Marks before executing search and seizure.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Approach Senior Police Command:</strong>Lodge a detailed criminal complaint before the Commissioner of Police, SSP, or EOW to assign a DSP/ACP rank officer.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Execute Multi-Location Raids:</strong>Conduct simultaneous search, seize finished goods, packaging, dies, and printing machines, and seal in evidence sacks.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Complete Panchnama Protocol:</strong>Ensure on-the-spot execution of Seizure Memos signed by two independent respectable local witnesses (Panchas).</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>FIR &amp; Judicial Prosecution:</strong>Register FIR under Sections 103/104 Trade Marks Act + Section 420 IPC / Section 318(4) BNS, oppose bail, and apply for Superdari custody.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 12: FAQS */}
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

                                    {/* SECTION 13: STRATEGIC ENFORCEMENT ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Anti-Counterfeiting Enforcement Advice
                                        </h2>
                                        <p className="mb-6">Protecting your intellectual property against counterfeit syndicates requires relentless vigilance, thorough investigation, and decisive legal execution. Conducting police raids under Section 115 dismantles illegal supply chains at their root, penalizes rogue operators, and sends a powerful deterrence message across the marketplace.</p>
                                        <p className="mb-6">Never permit counterfeit products to erode your brand reputation or endanger consumer safety. Partner with veteran intellectual property litigators and brand protection specialists to coordinate pre-raid investigations, secure Registrar opinions, liaison with Crime Branch and EOW officials, and obtain permanent commercial injunctions. For related enforcement workflows, review our guides on<Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send trademark legal notices</Link>,<Link href="/flipkart-brand-approval-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Flipkart brand approval &amp; lock</Link>, and<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry requirements</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Nationwide Brand Protection &amp; Anti-Counterfeiting
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Shut Down Counterfeiters with Section 115 Police Raids
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy expert IP litigators to secure Registrar opinions, coordinate with State Police &amp; EOW, execute search and seizure raids, and prosecute infringers under Indian criminal law.</p>

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

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered IP Advocates • Pre-Raid Intelligence • Section 115 Police Raids • Pan-India Enforcement</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in criminal trademark litigation, anti-counterfeiting investigations, Section 115 police raid coordination, and border enforcement across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Stop Fake Goods Now</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Facing counterfeiters copying your brand or packaging? Initiate police raids and injunctions with IP litigators.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Contact Raid Specialist
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/civil-vs-criminal-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Civil vs Criminal TM</span></Link></li>
                                    <li><Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandcuffs} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Penalties India</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Notice Reply</span></Link></li>
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
