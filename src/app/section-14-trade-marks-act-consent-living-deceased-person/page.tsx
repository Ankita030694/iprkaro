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
    faSignature,
    faIdCard,
    faUserCheck,
    faUserShield,
    faClock,
    faFileSignature,
    faBookOpen
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Section 14 Trademark Consent: Living & Deceased Names",
    description: validateAndNormalizeDescription(
        "Overcome Section 14 trademark objections in India. Master consent letter rules, 20-year deceased person limits, legal heir NOCs, and reply formats.",
        "app/section-14-trade-marks-act-consent-living-deceased-person/page.tsx"
    ),
    keywords: [
        "section 14 trademark objection reply format",
        "can you trademark a person name in india consent letter",
        "trademark named after founder or deceased person",
        "rule 38 trade marks rules",
        "section 14 trade marks act consent living deceased person",
        "trademark consent affidavit living person india",
        "legal heir consent trademark deceased person",
        "trademark celebrity name personality rights india",
        "section 14 trade marks act 1999 20 year rule",
        "how to respond to section 14 trademark examination report"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/section-14-trade-marks-act-consent-living-deceased-person",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Section 14 Trademark Consent: Living & Deceased Names",
        description: "Overcome Section 14 trademark objections in India. Master consent letter rules, 20-year deceased person limits, legal heir NOCs, and reply formats.",
        url: "https://www.iprkaro.com/section-14-trade-marks-act-consent-living-deceased-person",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/section-14-trade-marks-act-consent-living-deceased-person.png",
                width: 1200,
                height: 630,
                alt: "Trademark Objection Under Section 14: Using Names of Living or Deceased Persons in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Section 14 Trademark Consent: Living & Deceased Names",
        description: "Overcome Section 14 trademark objections in India. Master consent letter rules, 20-year deceased person limits, legal heir NOCs, and reply formats.",
        images: ["https://www.iprkaro.com/images/og/section-14-trade-marks-act-consent-living-deceased-person.png"],
    }
};

const faqs = [
    {
        question: "What is Section 14 of the Trade Marks Act, 1999?",
        answer: "Section 14 of the Trade Marks Act, 1999 regulates trademark applications that falsely suggest a connection with any living person or a person who died within 20 years before the application date. In such cases, the Registrar of Trade Marks requires the applicant to submit the written consent of the living individual or the legal representatives of the deceased person before proceeding with registration."
    },
    {
        question: "What is the 20-year rule under Section 14 for deceased persons?",
        answer: "The 20-year rule stipulates that if a trademark incorporates the name or representation of a person who passed away within 20 years before the trademark filing date, mandatory written consent from all legal heirs or executors is required. If the individual passed away more than 20 years before the filing date, Section 14 consent is not statutorily required, though the mark must still comply with Section 9 and the Emblems and Names Act, 1950."
    },
    {
        question: "Can I register my own personal name as a trademark without Section 14 objection?",
        answer: "Yes. An individual can register their own personal name or signature. If the Trademark Registry issues an examination objection under Section 14 assuming the mark refers to a third party, the applicant can overcome it by submitting a self-declaration affidavit, government identity proof (such as Passport, PAN, or Aadhaar), and confirming that the applicant is the named individual."
    },
    {
        question: "What format is required for a Section 14 written consent letter or affidavit?",
        answer: "The consent must be executed as a formal Consent Affidavit or No Objection Certificate (NOC) on non-judicial stamp paper of appropriate value and duly notarized. It must clearly state the full legal name and address of the consenting individual, the exact trademark name/logo, the trademark application number and class, and an explicit, irrevocable grant of permission to use and register the name/portrait."
    },
    {
        question: "What documents must legal heirs submit if the named person is deceased?",
        answer: "Legal heirs must provide: (1) A notarized Consent Affidavit signed by all surviving legal heirs, (2) A certified copy of the Death Certificate, and (3) Legal proof of heirship, such as a Surviving Member Certificate, Legal Heir Certificate issued by the Revenue Authority/Tehsildar, or a Probate/Succession Certificate issued by a competent Civil Court."
    },
    {
        question: "Can I trademark a historical figure or national leader without consent?",
        answer: "If the historical figure died more than 20 years ago, Section 14 consent is not applicable. However, names and representations of national leaders (e.g., Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel, Shivaji Maharaj) and national emblems are protected against commercial exploitation under the Emblems and Names (Prevention of Improper Use) Act, 1950 and Section 9(2) of the Trade Marks Act, 1999."
    },
    {
        question: "How do celebrity personality rights interact with Section 14?",
        answer: "Celebrity personality and publicity rights prevent unauthorized commercial exploitation of a celebrity's name, voice, likeness, signature, or moniker. Filing a trademark containing a celebrity's name without their express written authorization triggers an immediate refusal under Section 14, alongside potential passing-off lawsuits and civil damages in the High Court."
    },
    {
        question: "How do I file the Section 14 consent letter on the IP India portal?",
        answer: "The consent affidavit and supporting identity or succession documents must be submitted online through the IP India e-filing portal. The applicant's trademark attorney uploads the documents as an attachment to the formal Written Reply to the Examination Report, or files them via Form TM-M under Miscellaneous Request along with the prescribed statutory fee."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "statutory-text", title: "Section 14 Legal Text" },
    { id: "twenty-year-rule", title: "The 20-Year Deceased Rule" },
    { id: "consent-requirements", title: "Consent Letter & Affidavit" },
    { id: "legal-heir-protocol", title: "Legal Heirs Verification" },
    { id: "personality-rights", title: "Celebrity Personality Rights" },
    { id: "overcoming-objections", title: "How to Reply to Registry" },
    { id: "comparison-matrix", title: "Name Category Comparison" },
    { id: "compliance-checklist", title: "Section 14 Action Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function Section14TrademarkConsentPage() {
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
        "headline": "Trademark Objection Under Section 14: Using Names of Living or Deceased Persons in India",
        "description": "Overcome Section 14 trademark objections in India. Master consent letter rules, 20-year deceased person limits, legal heir NOCs, and reply formats.",
        "image": "https://www.iprkaro.com/images/og/section-14-trade-marks-act-consent-living-deceased-person.png",
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
            "@id": "https://www.iprkaro.com/section-14-trade-marks-act-consent-living-deceased-person"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Section 14 Trademark Consent: Living & Deceased Names",
        "url": "https://www.iprkaro.com/section-14-trade-marks-act-consent-living-deceased-person",
        "description": "Overcome Section 14 trademark objections in India. Master consent letter rules, 20-year deceased person limits, legal heir NOCs, and reply formats.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/section-14-trade-marks-act-consent-living-deceased-person#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/section-14-trade-marks-act-consent-living-deceased-person#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Section 14 Trademark Guide", "item": "https://www.iprkaro.com/section-14-trade-marks-act-consent-living-deceased-person" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure to Overcome Section 14 Trademark Objection",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Analyze Examination Report for Section 14 Objection and Cited Personal Names" },
            { "@type": "ListItem", "position": 2, "name": "Determine Legal Status: Living Person, Deceased under 20 Years, or Historical" },
            { "@type": "ListItem", "position": 3, "name": "Draft Verified Consent Affidavit / NOC on Non-Judicial Stamp Paper" },
            { "@type": "ListItem", "position": 4, "name": "Obtain Legal Heirship / Succession Certificates if Named Person is Deceased" },
            { "@type": "ListItem", "position": 5, "name": "Notarize Consent Affidavit with Government Identity Proofs (PAN, Passport, Aadhaar)" },
            { "@type": "ListItem", "position": 6, "name": "Draft Comprehensive Written Response under Rule 38 and Submit via Form TM-M" },
            { "@type": "ListItem", "position": 7, "name": "Attend Show-Cause Hearing before Registrar if Required to Secure Acceptance" }
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
                                <FontAwesomeIcon icon={faSignature} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trade Marks Act 1999 Compliance</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Objection Under Section 14: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Names of Persons</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Naming a brand after a founder, family patriarch, celebrity, or historical luminary is a time-honored branding tradition in India. However, under<strong>Section 14 of the Trade Marks Act, 1999</strong>, the Trade Marks Registry mandates express written consent to prevent unauthorized commercial exploitation and deceptive association. Master the<strong>20-year deceased rule</strong>, Consent Affidavit drafting, legal heir verification, personality rights defense, and step-by-step objection resolution protocols.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 13 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Statutory Compliance Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Resolve Section 14 Objection <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/section-14-trade-marks-act-consent-living-deceased-person.png"
                                    alt="Trademark Objection Under Section 14: Using Names of Living or Deceased Persons in India"
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
                        { label: "Section 14 Trademark Consent Guide", href: "/section-14-trade-marks-act-consent-living-deceased-person" }
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
                                            <FontAwesomeIcon icon={faUserShield} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Section 14 Objections
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Under Section 14 of the Trade Marks Act, 1999, if a trademark application incorporates the name, signature, portrait, or representation of a living person or a person who died within 20 years before the application date, the Registrar of Trade Marks will issue an examination objection. To overcome this objection, the applicant must submit a formal, notarized written consent letter or Consent Affidavit on non-judicial stamp paper from the living individual or all legal heirs of the deceased person, explicitly authorizing the commercial use and registration of the personal name.</p>
                                        </div>

                                        <p className="mb-6">Personal names, family surnames, signatures, and ancestral titles form the cornerstone of commercial branding across India—from heritage sweets manufacturers and fashion designer couture houses to multi-specialty hospitals, legal practices, and real estate empires. However, Indian trademark law strictly balances commercial creativity against personal privacy, reputation, and the prevention of public confusion.</p>
                                        <p className="mb-6">When an entrepreneur files a trademark containing a personal name (e.g., &ldquo;Dr. Roy&apos;s Clinic&rdquo;, &ldquo;Kapoor Jewelers&rdquo;, or &ldquo;Ananya Couture&rdquo;), the Trademark Examiner scrutinizes whether the mark falsely implies an endorsement, sponsorship, or association with an actual person. Under<strong>Section 14 of the Trade Marks Act, 1999</strong>, the registry enforces statutory checks requiring verifiable authorization before granting exclusive monopoly rights.</p>
                                        <p className="mb-6">Failing to respond properly to a Section 14 objection or submitting an unverified consent document leads to application abandonment or refusal. Understand how personal names fit within distinctiveness criteria in our comprehensive analysis on<Link href="/can-you-trademark-your-own-name-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">can you trademark your own name in India</Link>and<Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark consent letter and coexistence agreements</Link>.</p>
                                    </section>

                                    {/* SECTION 2: STATUTORY TEXT & PURPOSE */}
                                    <section id="statutory-text" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Text of Section 14
                                        </h3>
                                        <p className="mb-6">Section 14 of the Trade Marks Act, 1999 is titled<em>&ldquo;Use of names and representations of living persons or persons recently deceased&rdquo;</em>and provides as follows:</p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;Where an application is made for the registration of a trade mark which falsely suggests a connection with any living person, or a person whose death took place within twenty years prior to the date of application for registration of the trade mark, the Registrar may, before he proceeds with the application, require the applicant to furnish him with the consent in writing of such living person, or, as the case may be, of the legal representative of the deceased person to the connection or the use of the name or representation, and may, in default of such consent, refuse to proceed with the application for the registration of the trade mark.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">1. Protection Against False Commercial Association</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The primary legislative objective is preventing applicants from unfairly trading upon the goodwill, prestige, or consumer trust associated with an individual without their knowledge or permission.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">2. Scope Beyond Word Names (Portraits &amp; Signatures)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 14 applies not only to textual names or surnames but equally to artistic representations, photographic portraits, caricatures, monograms, and handwritten signatures of individuals.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">3. Discretionary Powers of the Registrar</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Registrar has statutory discretion to demand written proof whenever an application appears to reference an identifiable person. In default of such furnished consent, the Registrar is statutorily empowered to refuse the application.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: THE 20-YEAR DECEASED RULE */}
                                    <section id="twenty-year-rule" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The 20-Year Rule for Deceased Persons
                                        </h3>
                                        <p className="mb-6">A distinct feature of Section 14 is the temporal threshold governing deceased individuals. Indian law recognizes that a deceased person&apos;s commercial identity and estate rights retain immediate post-mortem significance for two decades:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-3 h-3 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Death Occurred Within 20 Years</h4>
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">If the individual passed away within 20 years before the trademark filing date, mandatory written consent must be obtained from the executor or all surviving legal representatives.</p>
                                                <div className="bg-purple-100 p-3 rounded-xl text-xs font-semibold text-[#6E5E93]">
                                                    Statutory Requirement: Death Certificate + Heirship Certificate + Notarized Consent Affidavit
                                                </div>
                                            </div>

                                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-3 h-3 bg-slate-700 rounded-full mr-2"></span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Death Occurred Over 20 Years Ago</h4>
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">If the individual died more than 20 years before the trademark filing date, Section 14 consent is statutorily exempted. The applicant need not secure legal heir permissions.</p>
                                                <div className="bg-slate-200/70 p-3 rounded-xl text-xs font-semibold text-slate-800">
                                                    Statutory Requirement: Exemption Statement under Section 14 + Historical Proof of Demise
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50/80 p-6 rounded-2xl border border-amber-200 mb-8 not-prose">
                                            <h4 className="text-base font-bold text-amber-950 mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 mr-2 text-amber-800" />
                                                Crucial Caveat: Emblems &amp; Names Act &amp; Section 9(2)
                                            </h4>
                                            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed m-0">Even if a historical luminary or national leader died more than 20 years ago, commercial registration may still be strictly barred under the<strong>Emblems and Names (Prevention of Improper Use) Act, 1950</strong>or<strong>Section 9(2)(b)</strong>of the Trade Marks Act (marks likely to hurt religious or cultural susceptibilities). You cannot register marks such as &ldquo;Mahatma Gandhi&rdquo;, &ldquo;Rabindranath Tagore&rdquo;, or &ldquo;Chhatrapati Shivaji Maharaj&rdquo; for commercial goods.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: CONSENT LETTER & AFFIDAVIT REQUIREMENTS */}
                                    <section id="consent-requirements" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Consent Letter &amp; Affidavit Drafting
                                        </h3>
                                        <p className="mb-6">A standard informal letter or handwritten email note is insufficient to satisfy the Trademark Registry. The consent document must be executed as a legally binding Consent Affidavit or No Objection Certificate (NOC) compliant with Indian evidentiary laws:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Non-Judicial Stamp Paper &amp; Notarization</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The consent affidavit must be printed on non-judicial stamp paper of appropriate denomination (typically ₹50 or ₹100 depending on the state of execution) and attested before a Notary Public or Oath Commissioner.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Clear Identification of the Consenting Party</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Specify the full legal name, parentage, permanent residential address, age, and official government identity numbers (Aadhaar Card, Passport, or PAN) of the consenting person.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Explicit Reference to the Trademark Application</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The affidavit must state the exact trademark name/device, application number, trademark class, description of goods/services, and the name and constitution of the applicant entity (Proprietorship, LLP, or Private Limited).</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Unconditional &amp; Irrevocable Authorization</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The affidavit must contain an unambiguous declaration confirming that the affiant has no objection whatsoever to the applicant using and registering the name/likeness, and confirms that such use will not cause public deception.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: LEGAL HEIR PROTOCOL */}
                                    <section id="legal-heir-protocol" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faIdCard} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Legal Heirs Consent Protocol for Deceased
                                        </h3>
                                        <p className="mb-6">When applying for a trademark commemorating a founder or family patriarch deceased within 20 years. This establishes the authority of the consenting party is critical. Submitting consent from one sibling while excluding others will invite registry refusal or future trademark rectification disputes:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    1. Certified Death Certificate
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Submit an official death certificate issued by the Municipal Corporation, Registrar of Births and Deaths, or local Gram Panchayat establishing the precise date of demise.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-2"></span>
                                                    2. Proof of Legal Heirship
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Furnish a Surviving Member Certificate, Legal Heir Certificate from the Tehsildar, or Succession Certificate / Letter of Administration issued by a civil court confirming all surviving Class I legal heirs.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2"></span>
                                                    3. Joint Consent / NOC
                                                </h4>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">All identified legal heirs must either jointly execute the Consent Affidavit or execute individual notarized No Objection Certificates authorizing the applicant entity to hold trademark ownership.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: PERSONALITY RIGHTS & CELEBRITY MARKS */}
                                    <section id="personality-rights" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Personality Rights &amp; Celebrity Trademarks
                                        </h3>
                                        <p className="mb-6">Section 14 operates as the statutory gateway protecting celebrity personality rights, publicity rights, and privacy rights in Indian trademark prosecution. Unauthorized attempts to trademark celebrity names, stage monikers, or sports personalities are routinely struck down:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Gautam Gambhir v. D.A.P. &amp; Co. (Delhi High Court)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Delhi High Court affirmed that an individual has a natural, proprietary right in their own name. While a person running a restaurant with the same bona fide personal name may use it honestly under Section 35, they cannot commercially exploit the celebrity aura or mislead the public into believing an endorsement exists.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Titan Industries Ltd. v. M/s Ramkumar Jewellers (Delhi High Court)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The court recognized the right of publicity, holding that when the identity of a famous living personality is used commercially without consent, the celebrity suffers misappropriation of their right to control their commercial likeness.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">D.M. Entertainment Pvt. Ltd. v. Baby Gift House (Delhi High Court)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">In the landmark Daler Mehndi caricature case, the court held that creating novelty dolls singing and looking like the pop artist without licensing constituted false endorsement and passing off under common law.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: OVERCOMING OBJECTIONS IN EXAMINATION REPORT */}
                                    <section id="overcoming-objections" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Replying to a Section 14 Examination Objection
                                        </h3>
                                        <p className="mb-6">When the Trademark Registry issues an Examination Report citing Section 14, the applicant has a strict statutory window of<strong>30 days</strong>(extendable under Section 131) to file a formal written response. Follow this strategic approach based on your factual scenario:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Scenario A: The Mark is the Applicant&apos;s Own Name</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If your trademark reflects your own personal name or signature, file a self-declaration affidavit affirming that the applicant and the named person are one and the same entity. Attach certified copies of your Passport, Aadhaar, and PAN card. Citing Section 35 (bona fide use of one&apos;s own name) reinforces your entitlement.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Scenario B: The Mark Uses a Third-Party Living Person&apos;s Name</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Submit the formal notarized Consent Affidavit and NOC executed by the living individual on non-judicial stamp paper, accompanied by self-attested identity proofs of the affiant.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Scenario C: The Person Died Over 20 Years Ago</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Submit historical evidence, obituary archives, or biographical records establishing that the individual passed away more than 20 years before the filing date. Clarify that Section 14 consent is statutorily inapplicable, and demonstrate compliance with Section 9.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Scenario D: The Name is Coincidental / Arbitrary Word</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If the mark happens to coincide with a common first name or surname but was coined arbitrarily (e.g., &ldquo;AURA&rdquo;, &ldquo;NOVA&rdquo;, or &ldquo;MAX&rdquo;), submit written submissions explaining the conceptual origin of the mark and demonstrating that it does not falsely suggest any connection with any identifiable individual.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: COMPARISON MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Name Trademark Categories Comparison
                                        </h3>
                                        <p className="mb-6">The table below outlines the statutory requirements, consent protocols, and evidentiary thresholds for different personal name scenarios under Indian trademark practice:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Name Category</th>
                                                        <th className="p-3.5 sm:p-4">Section 14 Applicable?</th>
                                                        <th className="p-3.5 sm:p-4">Required Documentation</th>
                                                        <th className="p-3.5 sm:p-4">Key Risk Factors</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Applicant&apos;s Own Name</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Examiner Discretion</td>
                                                        <td className="p-3.5 sm:p-4">Self-declaration affidavit + Passport/PAN proof</td>
                                                        <td className="p-3.5 sm:p-4">Section 9(1)(a) surname distinctiveness challenge</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Third-Party Living Person</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Mandatory Yes</td>
                                                        <td className="p-3.5 sm:p-4">Notarized Consent Affidavit on Stamp Paper + ID Proof</td>
                                                        <td className="p-3.5 sm:p-4">Personality rights infringement &amp; refusal</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Deceased Person (&lt;20 Yrs)</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Mandatory Yes</td>
                                                        <td className="p-3.5 sm:p-4">Death Certificate + Heirship Proof + Legal Heirs NOC</td>
                                                        <td className="p-3.5 sm:p-4">Family dispute / excluded heir rectifications</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Deceased Person (&gt;20 Yrs)</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">Exempted</td>
                                                        <td className="p-3.5 sm:p-4">Historical date of death documentation</td>
                                                        <td className="p-3.5 sm:p-4">Emblems &amp; Names Act &amp; religious sensitivity</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Fictional / Mythological Character</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">No (Not a person)</td>
                                                        <td className="p-3.5 sm:p-4">Coined mark explanation &amp; public domain source</td>
                                                        <td className="p-3.5 sm:p-4">Third-party copyright or character merchandising rights</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 9: ACTION CHECKLIST */}
                                    <section id="compliance-checklist" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-green-500" />
                                            Section 14 Compliance Action Checklist
                                        </h3>
                                        <p className="mb-6">Execute this verified checklist to eliminate procedural defects and secure registration for personal name marks:</p>

                                        <ul className="space-y-4 my-6 not-prose list-none p-0">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Examine Name Provenance:</strong>Ascertain whether the mark constitutes an applicant name, living third party, recently deceased founder, or arbitrary word.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Execute Non-Judicial Stamp Affidavit:</strong>Draft the formal consent on stamp paper of appropriate state value and complete public notarization.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Collect Government ID Proofs:</strong>Obtain self-attested copies of Aadhaar, Passport, or PAN card of the consenting person or legal representatives.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Verify All Legal Heirs:</strong>For deceased founders (&lt;20 yrs), attach the Death Certificate and Legal Heir Certificate signed by all surviving members.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Submit Online via Form TM-M:</strong>File the comprehensive written reply and supporting documents through the IP India e-filing portal within 30 days.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 10: FAQS */}
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

                                    {/* SECTION 11: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Section 14 Name Trademarking Advice
                                        </h3>
                                        <p className="mb-6">Trademarking personal names, founder legacies, and heritage signatures is a powerful strategy to build emotional resonance and enterprise value. However, statutory compliance under Section 14 is non-negotiable. Securing proper consent affidavits and legal heir clearances at the filing stage prevents costly delays, show-cause hearings, and post-registration rectification battles.</p>
                                        <p className="mb-6">Partner with seasoned trademark attorneys to draft airtight consent affidavits, navigate Section 14 examination reports, and protect your intellectual property assets across India. For related procedural guides, explore our resources on<Link href="/how-to-respond-to-trademark-examination-report" className="text-[rgb(110,94,147)] hover:underline font-medium">how to respond to trademark examination reports</Link>,<Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit rules</Link>, and<Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48 Power of Attorney rules</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Section 14 Legal Compliance &amp; Trademark Registration
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Resolve Section 14 Trademark Objections Fast
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Draft legally binding Consent Affidavits, compile legal heir documentation, and file expert written replies with the Trade Marks Registry.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult Trademark Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • Consent Affidavits • Legal Heir Approvals • Pan-India Representation</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in trademark prosecution, Section 14 consent compliance, personality rights protection, and registry dispute resolution across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Got Section 14 Objection?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Need an official Consent Affidavit or Legal Heir NOC to overcome your registry objection? Consult our IP attorneys.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Draft Consent Affidavit
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/can-you-trademark-your-own-name-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faIdCard} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trademark Your Name</span></Link></li>
                                    <li><Link href="/trademark-consent-letter-coexistence-agreement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSignature} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Consent Letter Rules</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Exam Report Reply</span></Link></li>
                                    <li><Link href="/trademark-objection-reply-format-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Objection Formats</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileSignature} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit Guide</span></Link></li>
                                    <li><Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Form TM-48 Guide</span></Link></li>
                                    <li><Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Prior User Rights</span></Link></li>
                                    <li><Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span></Link></li>
                                    <li><Link href="/how-to-change-trademark-attorney-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Change TM Attorney</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
