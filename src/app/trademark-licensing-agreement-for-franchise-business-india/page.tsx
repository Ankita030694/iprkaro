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
    faBookOpen,
    faStore,
    faHandshake,
    faCoins,
    faRotate
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Franchise Licensing India: Form TM-U Guide",
    description: validateAndNormalizeDescription(
        "Franchise trademark licensing guide in India. Learn FOCO & FOFO brand licensing rules, quality control terms, and Form TM-U filing.",
        "app/trademark-licensing-agreement-for-franchise-business-india/page.tsx"
    ),
    keywords: [
        "trademark licensing agreement for franchise business in india",
        "franchise brand licensing agreement india format",
        "trademark registered user section 49 form tm u",
        "foco fofo model trademark rights india",
        "royalty clauses trademark franchise agreement",
        "naked licensing trademark cancellation india",
        "quality control clause trademark license",
        "section 48 49 trade marks act 1999",
        "form tm u filing procedure ip india",
        "franchise trademark stamp duty india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-licensing-agreement-for-franchise-business-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Franchise Licensing India: Form TM-U Guide",
        description: "Franchise trademark licensing guide in India. Learn FOCO & FOFO brand licensing rules, quality control terms, and Form TM-U filing.",
        url: "https://www.iprkaro.com/trademark-licensing-agreement-for-franchise-business-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-licensing-agreement-for-franchise-business-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Licensing Agreement for Franchise Business in India: Format, Rules & Form TM-U",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Franchise Licensing India: Form TM-U Guide",
        description: "Franchise trademark licensing guide in India. Learn FOCO & FOFO brand licensing rules, quality control terms, and Form TM-U filing.",
        images: ["https://www.iprkaro.com/images/og/trademark-licensing-agreement-for-franchise-business-india.png"],
    }
};

const faqs = [
    {
        question: "What is a Trademark Licensing Agreement in a franchise business?",
        answer: "A Trademark Licensing Agreement is a legally binding contract where the brand owner (Franchisor/Licensor) grants a franchisee (Licensee) the conditional, non-exclusive or exclusive legal right to use its registered brand name, logo, trade dress, and business format in exchange for upfront franchise fees and ongoing royalties."
    },
    {
        question: "Is it mandatory to register a franchise licensee as a 'Registered User' on Form TM-U?",
        answer: "Under the Trade Marks Act, 1999, registration on Form TM-U is permissive rather than strictly mandatory. However, registering the franchisee as a 'Registered User' under Section 49 grants statutory recognition, enables the licensee to defend against infringers under Section 52, and creates irrebuttable proof of 'permitted use' defending against non-use cancellations under Section 47."
    },
    {
        question: "What is 'Naked Licensing' and how does it endanger the franchisor's trademark?",
        answer: "'Naked licensing' occurs when a franchisor licenses their trademark to franchisees without maintaining active, verifiable quality control mechanisms. Under Indian law and common law doctrine, licensing without quality inspection dilutes distinctiveness, misleads the public, and exposes the trademark to cancellation under Section 57."
    },
    {
        question: "What is the difference between FOCO and FOFO franchise models in trademark licensing?",
        answer: "In FOFO (Franchise Owned, Franchise Operated), the franchisee runs daily outlet operations, making rigorous trademark SOPs, brand audits, and training covenants crucial. In FOCO (Franchise Owned, Company Operated), the franchisor manages operations directly, retaining direct operational quality control while licensing the brand to the outlet entity."
    },
    {
        question: "What documents and details are required to file Form TM-U with IP India?",
        answer: "Filing Form TM-U requires: (1) Duly stamped and executed Trademark License / Franchise Agreement, (2) An affidavit by the licensor confirming relationship terms, degree of quality control, goods/services covered, and license duration, (3) Prescribed official fee of ₹4,500 per mark per class, and (4) Form TM-48 Power of Attorney."
    },
    {
        question: "How should royalties and franchise fees be structured in the agreement?",
        answer: "The agreement should define: (1) Upfront non-refundable franchise onboarding fee, (2) Recurring monthly royalty (either a fixed amount or 4%-10% of gross revenue/turnover), (3) Marketing/brand development fund contribution (typically 1%-3%), (4) GST applicability (18% under SAC 997331), and (5) Strict interest penalties for late payments."
    },
    {
        question: "What happens to the franchisee's brand rights upon contract termination?",
        answer: "Upon termination or non-renewal, the franchisee's license immediately ceases. The contract must mandate immediate de-branding within 7 to 14 days, removal of all signboards, destruction or handover of branded packaging, cessation of social media accounts, and strict adherence to post-term non-compete covenants."
    },
    {
        question: "What is the stamp duty requirement for a Trademark Franchise Agreement in India?",
        answer: "Stamp duty on trademark license agreements is governed by respective State Stamp Acts. For instance, in Maharashtra under Article 25/36, stamp duty is levied on the total royalty/consideration, while Delhi and Karnataka have specific slab-based stamp duties. Non-stamping or under-stamping renders the agreement inadmissible in Indian courts under Section 35 of the Indian Stamp Act."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "statutory-framework", title: "Section 48 & 49 Statutory Rules" },
    { id: "franchise-models", title: "FOCO vs FOFO Franchise IP Models" },
    { id: "quality-control", title: "Quality Control & Naked Licensing" },
    { id: "agreement-clauses", title: "Essential Clauses in IP Pacts" },
    { id: "royalty-structures", title: "Royalty Structures & Taxes" },
    { id: "form-tm-u-filing", title: "Form TM-U Filing Procedure" },
    { id: "comparison-table", title: "Registered User vs Licensee" },
    { id: "stamp-duty-compliance", title: "Stamp Duty & Registration" },
    { id: "landmark-precedents", title: "Landmark Judicial Precedents" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Franchisor Advice" },
];

export default function TrademarkLicensingFranchiseBusinessPage() {
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
        "headline": "Trademark Licensing Agreement for Franchise Business in India: Format, Rules & Form TM-U",
        "description": "Franchise trademark licensing guide in India. Learn FOCO & FOFO brand licensing rules, quality control terms, and Form TM-U filing.",
        "image": "https://www.iprkaro.com/images/og/trademark-licensing-agreement-for-franchise-business-india.png",
        "datePublished": "2026-09-29T10:15:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-licensing-agreement-for-franchise-business-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Franchise Licensing India: Form TM-U Guide",
        "url": "https://www.iprkaro.com/trademark-licensing-agreement-for-franchise-business-india",
        "description": "Franchise trademark licensing guide in India. Learn FOCO & FOFO brand licensing rules, quality control terms, and Form TM-U filing.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-licensing-agreement-for-franchise-business-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-licensing-agreement-for-franchise-business-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Franchise Trademark Licensing", "item": "https://www.iprkaro.com/trademark-licensing-agreement-for-franchise-business-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Trademark Licensing & Registered User Recordation Workflow for Franchises",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Comprehensive Trademark Title & Validity Audit" },
            { "@type": "ListItem", "position": 2, "name": "Draft Comprehensive Franchise Trademark License Agreement" },
            { "@type": "ListItem", "position": 3, "name": "Incorporate Stringent Quality Control and Audit Mechanisms" },
            { "@type": "ListItem", "position": 4, "name": "Execute Agreement on Prescribed State Stamp Paper with Notarization" },
            { "@type": "ListItem", "position": 5, "name": "File Form TM-U Joint Application for Registered User Entry with IP India" },
            { "@type": "ListItem", "position": 6, "name": "Pay Official Government Statutory Fee (₹4,500 per class)" },
            { "@type": "ListItem", "position": 7, "name": "Receive Certificate of Registered User from Trade Marks Registry" }
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
                                <FontAwesomeIcon icon={faStore} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Franchise Brand Protection &amp; Licensing</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Licensing for Franchise Business: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Form TM-U Guide</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Scaling a restaurant, retail, salon, or cloud kitchen chain through franchising requires robust intellectual property protection. Governed by<strong>Sections 48 and 49 of the Trade Marks Act, 1999</strong>, a well-crafted trademark licensing agreement shields your brand goodwill across<strong>FOCO and FOFO franchise networks</strong>. Master mandatory quality control clauses, prevent fatal naked licensing risks, structure royalty payments, and file<strong>Form TM-U</strong>for official Registered User recordation.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 29-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 16 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">📜 Form TM-U &amp; Section 49</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Draft Franchise Agreement <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Franchise IP Specialist: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-licensing-agreement-for-franchise-business-india.png"
                                    alt="Trademark Licensing Agreement for Franchise Business in India: Format, Rules & Form TM-U"
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
                        { label: "Franchise Trademark Licensing", href: "/trademark-licensing-agreement-for-franchise-business-india" }
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
                                            Overview of Franchise Trademark Licensing
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">In India, trademark licensing in a franchise model grants the franchisee a conditional legal right to commercially use the franchisor&apos;s brand, logo, and trade dress while retaining 100% trademark title with the franchisor. Governed by Sections 48 and 49 of the Trade Marks Act, 1999, every valid agreement must mandate strict quality control to avoid &quot;naked licensing&quot; brand cancellation. Filing Form TM-U registers the franchisee as an official &quot;Registered User&quot; on the IP India e-Register, ensuring the franchisee&apos;s commercial use protects the mark from non-use cancellation under Section 47.</p>
                                        </div>

                                        <p className="mb-6">Franchising is the primary growth engine for India&apos;s food &amp; beverage, retail, hospitality, education, and wellness sectors. Whether operating a Quick Service Restaurant (QSR) network, a fitness studio chain, or a salon franchise, the entire commercial value proposition hinges upon consumer trust in the registered brand name.</p>
                                        <p className="mb-6">However, granting third-party business partners the authority to display your trademark without airtight contractual safeguards can result in catastrophic brand dilution, customer confusion, non-payment of royalties, and even judicial cancellation of your trademark. Understanding the legal difference between trademark assignment and licensing is vital—learn more in our guide on <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark assignment vs licensing in India</Link>.</p>
                                        <p className="mb-6">Discover the statutory requirements, mandatory clauses, tax implications, and procedural steps to register your franchise brand on Form TM-U.</p>
                                    </section>

                                    {/* SECTION 2: STATUTORY FRAMEWORK */}
                                    <section id="statutory-framework" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 48 and 49 Statutory Framework
                                        </h2>
                                        <p className="mb-6">The Trade Marks Act, 1999 contains clear statutory provisions establishing the rights, duties, and recordation of authorized users:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Section 48 (Registered Users &amp; Permitted Use)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 48(1) permits a person other than the registered proprietor to be registered as a &quot;Registered User.&quot; Crucially, Section 48(2) provides that &quot;permitted use&quot; of a trade mark by a registered user shall be deemed to be use by the proprietor himself for all statutory purposes, including defending against <Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 47 non-use cancellation actions</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Section 49 (Form TM-U Application)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 49 dictates that the proprietor and the proposed registered user must apply jointly in writing to the Registrar on Form TM-U, accompanied by the written agreement and an affidavit disclosing the relationship, degree of quality control, goods/services covered, and license term.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Section 52 (Right of Registered User to Sue Infringers)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">A recorded Registered User holds the statutory right under Section 52 to call upon the registered proprietor to institute legal proceedings against third-party infringers. If the proprietor refuses or neglects to do so within two months, the Registered User can institute the infringement suit in their own name.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: FRANCHISE IP MODELS (FOCO VS FOFO) */}
                                    <section id="franchise-models" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStore} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            FOCO vs FOFO Franchise Trademark Models
                                        </h2>
                                        <p className="mb-6">The structure of your trademark licensing agreement depends on the commercial operational format deployed in India:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Operational Dimension</th>
                                                        <th className="p-3.5 sm:p-4">FOFO (Franchise Owned, Franchise Operated)</th>
                                                        <th className="p-3.5 sm:p-4">FOCO (Franchise Owned, Company Operated)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Store Operations &amp; Staffing</td>
                                                        <td className="p-3.5 sm:p-4">Franchisee hires staff and manages daily store</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Franchisor manages store operations directly</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Trademark License Scope</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold">Comprehensive license for commercial operations</td>
                                                        <td className="p-3.5 sm:p-4">Limited license tied to revenue-sharing entity</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Quality Control Scrutiny</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">High risk: Requires strict audits, mystery shoppers &amp; SOPs</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Low risk: Direct operational oversight by brand</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Brand Dilution Risk</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Moderate to High if franchisee cuts quality corners</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Minimal (Uniform corporate quality standards)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Form TM-U Recordation</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-purple-700">Highly Recommended to prove permitted use</td>
                                                        <td className="p-3.5 sm:p-4">Recommended for financial compliance &amp; tax clarity</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 4: QUALITY CONTROL & NAKED LICENSING */}
                                    <section id="quality-control" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Quality Control and Naked Licensing Dangers
                                        </h2>
                                        <p className="mb-6">The single most perilous mistake franchisors make is executing a &quot;naked license&quot;—licensing a brand name without active and legally enforceable quality control provisions:</p>

                                        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <h3 className="text-base font-bold text-red-900 mb-2">The Legal Danger of &apos;Naked Licensing&apos;</h3>
                                            <p className="text-xs sm:text-sm text-red-800 leading-relaxed m-0">Under Indian trademark jurisprudence, a trademark serves as a guarantee of consistent commercial quality. If a brand owner licenses their mark without actively monitoring or enforcing quality standards, the mark ceases to indicate origin. Courts view this as abandonment, paving the way for rivals to file <Link href="/how-to-cancel-or-dispute-someone-else-s-trademark-registration" className="text-red-950 font-bold underline">trademark cancellation petitions under Section 57</Link>.</p>
                                        </div>

                                        <div className="space-y-4 not-prose">
                                            <div className="p-4 bg-purple-50/40 rounded-xl border border-purple-100">
                                                <h3 className="font-bold text-gray-900 text-sm mb-1">1. Mandatory Supplier Sourcing Covenants</h3>
                                                <p className="text-xs text-gray-600 m-0">Mandate that all raw materials, ingredients, store fixtures, and branded packaging must be procured exclusively from franchisor-approved vendors.</p>
                                            </div>

                                            <div className="p-4 bg-indigo-50/40 rounded-xl border border-indigo-100">
                                                <h3 className="font-bold text-gray-900 text-sm mb-1">2. Unannounced Inspection &amp; Audit Rights</h3>
                                                <p className="text-xs text-gray-600 m-0">Franchisor auditors must have express contractual rights to enter franchise premises unannounced to inspect hygiene, service quality, accounting software, and brand compliance.</p>
                                            </div>

                                            <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100">
                                                <h3 className="font-bold text-gray-900 text-sm mb-1">3. Mandatory Staff Training &amp; Certification</h3>
                                                <p className="text-xs text-gray-600 m-0">Franchisees and outlet managers must undergo continuous training programs and maintain compliance with standard operating procedure (SOP) manuals.</p>
                                            </div>

                                            <div className="p-4 bg-amber-50/40 rounded-xl border border-amber-100">
                                                <h3 className="font-bold text-gray-900 text-sm mb-1">4. Immediate Termination for Quality Breaches</h3>
                                                <p className="text-xs text-gray-600 m-0">Any compromise on consumer safety, hygiene, or counterfeit ingredient substitution must trigger immediate suspension and contract termination without cure periods.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: ESSENTIAL AGREEMENT CLAUSES */}
                                    <section id="agreement-clauses" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Essential Clauses in Franchise IP Agreements
                                        </h2>
                                        <p className="mb-6">Every professional Trademark Licensing Agreement for a franchise business must incorporate the following comprehensive clauses:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Scope of Grant &amp; Territorial Exclusivity</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Explicitly define whether the license is non-exclusive, sole, or exclusive within a defined geographic radius (e.g., 3-kilometer radius around the outlet) and restrict online sales if reserved for the parent brand.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Goodwill Accrual Exclusively to Franchisor</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">An unequivocal acknowledgment that all commercial goodwill, brand equity, and reputation generated by the franchisee&apos;s use vests solely and perpetually in the franchisor, preventing any equity claim by the franchisee upon exit.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Trade Dress &amp; Interior Design Protection</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Enforce strict adherence to store aesthetic layouts, interior colour palettes, staff uniforms, and menu typography under <Link href="/trade-dress-protection-under-indian-trademark-law" className="text-[rgb(110,94,147)] hover:underline font-medium">trade dress protection in India</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Post-Termination De-Branding Covenants</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Impose a strict 7-day timeline for full de-branding upon contract expiry, including removal of signboards, return of confidential recipes, transfer of local Google Business listings, and a 2-year non-compete covenant within the territory.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: ROYALTY STRUCTURES & TAXES */}
                                    <section id="royalty-structures" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCoins} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Royalty Structures and Financial Terms
                                        </h2>
                                        <p className="mb-6">The financial framework of a franchise trademark licensing agreement must balance operational incentives with statutory tax compliance in India:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Upfront Franchise Fee</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">One-time, non-refundable onboarding fee covering territory reservation, initial training, site setup, and license activation.</p>
                                                <div className="bg-purple-50 p-2 rounded-lg text-[11px] font-semibold text-[#6E5E93]">18% GST Applicable</div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Recurring Royalty</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Monthly royalty calculated either as a percentage of gross sales (typically 4%-8%) or a fixed monthly floor amount.</p>
                                                <div className="bg-indigo-50 p-2 rounded-lg text-[11px] font-semibold text-indigo-700">TDS u/s 194J (2% / 10%)</div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Marketing Levy (MDF)</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Brand development fund (1%-3% of revenue) pooled exclusively for national advertising, digital campaigns, and PR.</p>
                                                <div className="bg-emerald-50 p-2 rounded-lg text-[11px] font-semibold text-emerald-700">Audit Proof Mandatory</div>
                                            </div>
                                        </div>

                                        <p className="mb-6">For detailed tax guidelines on GST rates, reverse charge mechanism (RCM), and TDS deductions on intellectual property royalties, review our comprehensive guide on <Link href="/gst-tds-and-tax-rules-on-trademark-royalty-sale-india" className="text-[rgb(110,94,147)] hover:underline font-medium">GST, TDS and tax rules on trademark royalties in India</Link>.</p>
                                    </section>

                                    {/* SECTION 7: FORM TM-U FILING PROCESS */}
                                    <section id="form-tm-u-filing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-U Registered User Filing Process
                                        </h2>
                                        <p className="mb-6">To record a franchise licensee as an official Registered User under Section 49, follow this procedural roadmap on the IP India portal:</p>

                                        <div className="space-y-4 not-prose my-6">
                                            <div className="flex items-start p-4 bg-purple-50/50 rounded-2xl border border-purple-100">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Execute Duly Stamped Licensing Agreement</h3>
                                                    <p className="text-xs text-gray-600 m-0">Execute the agreement on state-compliant non-judicial stamp paper with full details of registered marks, classes, and quality control terms.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                                                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Draft Licensor Affidavit &amp; Statement of Case</h3>
                                                    <p className="text-xs text-gray-600 m-0">Prepare an affidavit affirmed by the licensor verifying the license terms, degree of franchisor inspection, and confirmation that the mark is valid.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                                                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Submit Joint Form TM-U on IP India Portal</h3>
                                                    <p className="text-xs text-gray-600 m-0">File Form TM-U jointly listing the registered proprietor and registered user details, attaching the agreement, affidavit, and <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[#6E5E93] hover:underline font-semibold">Form TM-48 Power of Attorney</Link>.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-amber-50/50 rounded-2xl border border-amber-100">
                                                <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Pay Official Fee &amp; Obtain Registered User Entry</h3>
                                                    <p className="text-xs text-gray-600 m-0">Pay the statutory fee of ₹4,500 per mark per class. The Registrar publishes the entry in the Trade Marks Journal and issues the Registered User certificate.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: REGISTERED USER VS LICENSEE TABLE */}
                                    <section id="comparison-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Registered User vs Unregistered Licensee
                                        </h2>
                                        <p className="mb-6">Understanding the legal distinction between an unregistered licensee (common law contractual licensee) and a recorded Registered User under Section 49 is crucial:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Legal Parameter</th>
                                                        <th className="p-3.5 sm:p-4">Registered User (Form TM-U Recorded)</th>
                                                        <th className="p-3.5 sm:p-4">Unregistered Licensee (Contract Only)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Statutory Recognition</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Recognized under Section 49 on IP India e-Register</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Private contract under Indian Contract Act 1872</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Right to Sue Infringers</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Direct statutory right under Section 52</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Cannot sue independently under Trade Marks Act</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Proof of Commercial Use</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Conclusive proof of &apos;permitted use&apos; u/s 48(2)</td>
                                                        <td className="p-3.5 sm:p-4">Requires extensive invoices to establish common law use</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Third-Party Notice</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Public notice through Trade Marks Journal</td>
                                                        <td className="p-3.5 sm:p-4">Confidential between contracting parties</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 9: STAMP DUTY COMPLIANCE */}
                                    <section id="stamp-duty-compliance" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Stamp Duty and Registration Compliance
                                        </h2>
                                        <p className="mb-6">A trademark license agreement that is improperly stamped is legally inadmissible in court under Section 35 of the Indian Stamp Act, 1899:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. State-Wise Stamp Duty Rates</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">In states like Maharashtra (Article 25/36), stamp duty is calculated as a percentage of total consideration or minimum fixed amounts. In Delhi and Karnataka, slab-based non-judicial stamp duty applies.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Impounding Risk for Under-Stamped Agreements</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If a dispute arises and an under-stamped agreement is presented before a High Court or arbitrator, the document will be impounded, attracting a 10x penalty on the deficit stamp duty before proceedings can commence.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Notarization and Attestation</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The licensing agreement should be signed by authorized signatories on each page and attested by a public notary to ensure evidentiary authenticity.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: LANDMARK PRECEDENTS */}
                                    <section id="landmark-precedents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Judicial Rulings on IP Licensing
                                        </h2>
                                        <p className="mb-6">Indian courts have settled fundamental principles governing brand licensing and negative covenants in franchise contracts:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Gujarat Bottling Co. Ltd. v. Coca Cola Co. (1995) 5 SCC 545</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Supreme Court upheld negative covenants during the term of a trademark franchise license, ruling that a clause prohibiting a franchisee from manufacturing or selling competing beverages during the agreement does not violate Section 27 of the Indian Contract Act (restraint of trade) and is essential to protect brand integrity.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Rob Mathys Group v. Synthes AG (1997) PTC 669</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The court established that licensing a trademark without exercising quality control destroys the distinctiveness of the mark, reducing it to a deceptive symbol and forfeiting statutory protection.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Bata India Ltd. v. Pyare Lal &amp; Co. AIR 1985 All 242</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The court ruled that brand goodwill created through authorized commercial licensees vests entirely in the brand owner, protecting well-known trademarks from misappropriation by local operators.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
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

                                    {/* SECTION 12: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Brand Protection for Franchisors
                                        </h2>
                                        <p className="mb-6">Expanding a franchise brand in India offers explosive growth potential, but scaling without a customized Trademark Licensing Agreement exposes your enterprise to operational disruption and brand dilution. Always include rigorous quality control mechanisms, execute state-compliant stamped documents, and record major franchise partners as Registered Users on Form TM-U.</p>
                                        <p className="mb-6">Collaborate with veteran franchise IP attorneys to draft customized licensing contracts and protect your brand equity. For related commercial IP strategies, review our guides on <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">responding to trademark infringement notices</Link>, <Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="text-[rgb(110,94,147)] hover:underline font-medium">anti-counterfeiting police raids under Section 115</Link>, and <Link href="/how-to-get-well-known-trademark-status-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to get well-known trademark status</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Franchise Trademark Licensing &amp; Form TM-U
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Franchise Brand Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy expert franchise IP attorneys to draft airtight licensing agreements, incorporate quality audit clauses, and record Registered Users on Form TM-U.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Draft Franchise Agreement</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Section 48 &amp; 49 Compliance • Quality Control Audits • Form TM-U Recordation • Pan-India</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in commercial franchise IP drafting, trademark licensing compliance under Sections 48 &amp; 49, Form TM-U filings, and brand quality protection.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Licensing Your Brand?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Scale your franchise safely with customized quality control clauses, royalty structures, and Form TM-U registration.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Draft Licensing Pact
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Assignment vs License</span></Link></li>
                                    <li><Link href="/gst-tds-and-tax-rules-on-trademark-royalty-sale-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCoins} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Royalty Tax &amp; GST</span></Link></li>
                                    <li><Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStore} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span></Link></li>
                                    <li><Link href="/how-to-get-well-known-trademark-status-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Well-Known Status</span></Link></li>
                                    <li><Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 115 Raids</span></Link></li>
                                    <li><Link href="/trademark-consent-letter-coexistence-agreement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandshake} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Coexistence Pacts</span></Link></li>
                                    <li><Link href="/how-to-stop-someone-using-your-brand-name" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Brand Copycats</span></Link></li>
                                    <li><Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">AI Trademark Search</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
