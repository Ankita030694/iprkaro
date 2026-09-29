import { validateAndNormalizeDescription, validateAndNormalizeTitle } from '@/lib/seo-utils';
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
    faPercent,
    faReceipt,
    faStamp,
    faClock,
    faIdCard,
    faGavel,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: validateAndNormalizeTitle("Trademark Fee Concessions for MSMEs & Startups", "app/trademark-fee-concession-msme-udyam-startup-india/page.tsx"),
    description: validateAndNormalizeDescription(
        "Learn how to get a 50% discount on trademark fees in India with MSME / Udyam registration. Save ₹4,500 per class on Form TM-A with our legal guide.",
        "app/trademark-fee-concession-msme-udyam-startup-india/page.tsx"
    ),
    keywords: [
        "how to get 50% discount on trademark fees",
        "trademark fee concession msme udyam startup india",
        "government fee for trademark registration private limited company",
        "udyam registration for trademark discount",
        "msme trademark fee 4500",
        "form tm a small enterprise concession",
        "startup india trademark fee exemption",
        "trademark government fees for llp with msme",
        "rule 2 1 v trade marks rules 2017",
        "fast track trademark msme discount"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-fee-concession-msme-udyam-startup-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Fee Concessions for MSMEs & Startups",
        description: "Learn how to get a 50% discount on trademark fees in India with MSME / Udyam registration. Save ₹4,500 per class on Form TM-A with our legal guide.",
        url: "https://www.iprkaro.com/trademark-fee-concession-msme-udyam-startup-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-fee-concession-msme-udyam-startup-india.png",
                width: 1200,
                height: 630,
                alt: "How to Get 50% Discount on Trademark Fees with MSME Udyam Registration Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Fee Concessions for MSMEs & Startups",
        description: "Learn how to get a 50% discount on trademark fees in India with MSME / Udyam registration. Save ₹4,500 per class on Form TM-A with our legal guide.",
        images: ["https://www.iprkaro.com/images/og/trademark-fee-concession-msme-udyam-startup-india.jpg"],
    }
};

const faqs = [
    {
        question: "Who is eligible for the 50% discount on trademark filing fees in India?",
        answer: "Under the First Schedule of the Trade Marks Rules, 2017, individuals, sole proprietorships, DPIIT-recognized Startups, and Micro and Small Enterprises holding a valid Udyam Registration Certificate are eligible for a 50% statutory fee concession on Form TM-A. Qualifying entities pay ₹4,500 per class for online e-filing instead of the standard ₹9,000 corporate rate."
    },
    {
        question: "How much is the trademark government fee with MSME / Udyam registration?",
        answer: "With a valid MSME / Udyam registration certificate, the official government e-filing fee for a trademark application (Form TM-A) is ₹4,500 per class. If filed physically in paper format at the Trade Marks Registry counter, the fee is ₹5,000 per class. This represents an exact 50% reduction from the ₹9,000 (online) and ₹10,000 (physical) standard corporate fees."
    },
    {
        question: "Can a Private Limited company or LLP get the 50% trademark fee discount?",
        answer: "Yes. Private Limited companies, One Person Companies (OPCs), Limited Liability Partnerships (LLPs), and Partnership Firms that qualify as Micro or Small enterprises under the MSMED Act can claim the 50% fee concession. To claim the benefit, the entity must hold a valid Udyam Certificate issued in the exact company name and upload it during Form TM-A submission."
    },
    {
        question: "Is Udyam registration required for an Individual or Sole Proprietor to get the discount?",
        answer: "No. Individuals and sole proprietorships automatically qualify for the ₹4,500 statutory fee tier under the 'Individual' applicant category without mandatory Udyam registration. However, obtaining an Udyam certificate is highly beneficial for business verification, opening commercial accounts, and claiming state government IP subsidies."
    },
    {
        question: "What happens if I select 'Small Enterprise' on Form TM-A but forget to upload the Udyam Certificate?",
        answer: "If you select 'Small Enterprise' or 'Startup' and pay the subsidized ₹4,500 fee without uploading a valid supporting certificate, the Trade Marks Registry examiner will issue a 'Formality Check Fail' or deficiency notice. You will be required to upload the valid certificate via Form TM-M or pay the ₹4,500 fee deficit within 30 days to prevent abandonment."
    },
    {
        question: "Does the 50% MSME discount apply to trademark renewal (Form TM-R)?",
        answer: "No. The 50% statutory concession under the Trade Marks Rules, 2017 applies strictly to initial trademark applications (Form TM-A) and expedited examination requests (Form TM-M under Rule 34). For decennial trademark renewals (Form TM-R), a uniform government fee of ₹9,000 per class applies across all applicant categories, regardless of MSME or startup status."
    },
    {
        question: "Can MSMEs and Startups apply for expedited fast-track trademark examination?",
        answer: "Yes. Under Rule 34 of the Trade Marks Rules, 2017, MSMEs and DPIIT-recognized Startups are legally eligible to request fast-track expedited examination on Form TM-M. Furthermore, MSMEs pay a subsidized expedited fee of ₹20,000 per class compared to ₹40,000 for large corporates, reducing examination turnaround from 8–12 months to just 2–3 months."
    },
    {
        question: "How do I update my Udyam certificate if my business activity doesn't match the trademark class?",
        answer: "You can update or add National Industry Classification (NIC) codes on your Udyam Certificate for free on the official government portal (udyamregistration.gov.in) using your Aadhaar OTP. Once updated with the relevant manufacturing or service NIC codes matching your intended Nice trademark classes, download the revised certificate and upload it with Form TM-A."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Legal Basis" },
    { id: "eligibility", title: "Who is Eligible?" },
    { id: "fee-comparison", title: "Fee Structure & Savings" },
    { id: "step-by-step", title: "8-Step Claim Workflow" },
    { id: "udyam-verification", title: "Udyam & NIC Alignment" },
    { id: "common-pitfalls", title: "Pitfalls & Discrepancies" },
    { id: "additional-benefits", title: "Fast-Track & SIPP Perks" },
    { id: "checklist", title: "MSME TM Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Recommendations" },
];

export default function TrademarkFeeConcessionPage() {
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
        "headline": "How to Get 50% Discount on Trademark Fees with MSME / Udyam Registration",
        "description": "Learn how to get a 50% discount on trademark fees in India with MSME / Udyam registration. Save ₹4,500 per class on Form TM-A with our legal guide.",
        "image": "https://www.iprkaro.com/images/og/trademark-fee-concession-msme-udyam-startup-india.png",
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
            "@id": "https://www.iprkaro.com/trademark-fee-concession-msme-udyam-startup-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Get 50% Discount on Trademark Fees with MSME / Udyam",
        "url": "https://www.iprkaro.com/trademark-fee-concession-msme-udyam-startup-india",
        "description": "Learn how to get a 50% discount on trademark fees in India with MSME / Udyam registration. Save ₹4,500 per class on Form TM-A with our legal guide.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-fee-concession-msme-udyam-startup-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-fee-concession-msme-udyam-startup-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "50% Trademark Discount with MSME", "item": "https://www.iprkaro.com/trademark-fee-concession-msme-udyam-startup-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Claim 50% Discount on Trademark Fees with MSME",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Procure or Update Udyam Registration Certificate" },
            { "@type": "ListItem", "position": 2, "name": "Audit Applicant Entity Name & Legal Status" },
            { "@type": "ListItem", "position": 3, "name": "Align NIC Classification with Trademark Classes" },
            { "@type": "ListItem", "position": 4, "name": "Execute Stamped Power of Attorney (Form TM-48)" },
            { "@type": "ListItem", "position": 5, "name": "Log in to IP India Portal with Class 3 DSC" },
            { "@type": "ListItem", "position": 6, "name": "Select Small Enterprise / Startup Category on Form TM-A" },
            { "@type": "ListItem", "position": 7, "name": "Upload Authenticated Udyam Certificate in PDF Format" },
            { "@type": "ListItem", "position": 8, "name": "Remit ₹4,500 Concession Fee and Generate CBR Receipt" }
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
                                <FontAwesomeIcon icon={faPercent} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">MSME &amp; Startup IP Concession</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to Get <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>50% Discount on Trademark Fees</span> with MSME / Udyam Registration
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Under the First Schedule of the Trade Marks Rules, 2017, the Government of India provides an official 50% statutory fee waiver for Micro and Small Enterprises, DPIIT-recognized Startups, and Individuals. Instead of paying the standard corporate government fee of ₹9,000 per class on Form TM-A, qualifying businesses pay only ₹4,500 per class. Discover the statutory eligibility criteria, exact Udyam certificate linking protocols, NIC code alignment rules, and step-by-step e-filing strategies to eliminate discrepancy notices and save thousands on brand protection.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Claim 50% Trademark Discount <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/trademark-fee-concession-msme-udyam-startup-india.png"
                                    alt="50 Percent Discount on Trademark Government Fees with MSME and Udyam Registration India"
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
                        { label: "50% Trademark Fee Discount with MSME", href: "/trademark-fee-concession-msme-udyam-startup-india" }
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
                                            <FontAwesomeIcon icon={faPercent} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of MSME Trademark Fee Concession
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Under the First Schedule of the Trade Marks Rules, 2017, the Government of India provides a statutory 50% discount on official trademark registration fees (Form TM-A). Standard corporate entities without MSME status pay ₹9,000 per class for online e-filing (₹10,000 physical). Businesses registered under the Udyam portal as Micro or Small Enterprises, DPIIT-recognized Startups, and Individuals pay only ₹4,500 per class for online e-filing (₹5,000 physical), saving ₹4,500 per class instantly.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Intellectual property protection is a critical foundation for modern business equity, securing brand identity, preventing counterfeit duplication, and unlocking brand licensing revenue. Historically, high government filing fees created a substantial barrier to entry for early-stage entrepreneurs, private limited companies, and emerging manufacturing units.
                                        </p>
                                        <p className="mb-6">
                                            To cultivate a robust innovation ecosystem and democratize brand protection, the Ministry of Commerce and Industry amended the statutory framework through the Trade Marks Rules, 2017. By creating a differentiated fee structure under Rule 2(1)(v) and Rule 2(1)(tb), the Government created a two-tier fee system that slashes official fees by exactly 50% for qualifying micro, small, and startup entities.
                                        </p>
                                        <p className="mb-6">
                                            Understanding how to properly link your 19-digit Udyam Registration Number (`UDYAM-XX-00-0000000`) with your <Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration application</Link> ensures that your corporate entity captures substantial capital savings across single or multi-class filings while completely avoiding procedural defects or discrepancy notices.
                                        </p>
                                    </section>

                                    {/* SECTION 2: ELIGIBILITY */}
                                    <section id="eligibility" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuilding} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Who is Eligible for the 50% Fee Concession?
                                        </h2>
                                        <p className="mb-6">
                                            The Trade Marks Registry categorizes applicants into two distinct brackets: <strong>&ldquo;Individual / Startup / Small Enterprise&rdquo;</strong> and <strong>&ldquo;Others&rdquo;</strong>. To secure the ₹4,500 e-filing fee tier, the applicant must satisfy the legal criteria established under Indian statutory law:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Micro &amp; Small Enterprises (Udyam)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Private Limited companies, LLPs, Partnership Firms, and OPCs holding a valid Udyam Registration Certificate under the MSMED Act, 2006. Qualifying criteria: <strong>Micro</strong> (Investment ≤ ₹1 Cr &amp; Turnover ≤ ₹5 Cr) or <strong>Small</strong> (Investment ≤ ₹10 Cr &amp; Turnover ≤ ₹50 Cr).
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    DPIIT Recognized Startups
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Entities recognized by the Department for Promotion of Industry and Internal Trade under the Startup India initiative. Must hold a valid DPIIT Certificate of Recognition under Rule 2(1)(tb) of the Trade Marks Rules, 2017. Learn more in our <Link href="/how-to-register-a-trademark-for-my-startup" className="text-[rgb(110,94,147)] hover:underline font-medium">startup trademark guide</Link>.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Individuals &amp; Sole Proprietorships
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Natural persons filing in their personal name (or as a Sole Proprietorship trading under a business alias) automatically qualify for the ₹4,500 fee rate without requiring mandatory MSME registration, though holding Udyam provides additional commercial benefits.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2.5"></span>
                                                    Ineligible Entities (&ldquo;Others&rdquo; Tier)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Large corporate entities exceeding the MSME thresholds (Investment &gt; ₹10 Cr or Turnover &gt; ₹50 Cr), foreign corporations without Indian MSME status, and uncertified domestic companies. These entities must remit the standard statutory fee of ₹9,000 per class.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: FEE COMPARISON & SAVINGS TABLE */}
                                    <section id="fee-comparison" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Fee Structure &amp; Comparative Savings Breakdown
                                        </h2>
                                        <p className="mb-6">
                                            The 50% discount applies across every registered commercial Nice class. Because modern businesses frequently require multi-class protection covering software, goods, and retail services, the cumulative financial savings scale dramatically:
                                        </p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Filing Category / Action</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Standard Corporate Fee (Others)</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">MSME / Startup / Individual Fee</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Net Financial Savings</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Statutory Rule</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Single Class Application (Online E-Filing)</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">&#8377;9,000</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;4,500</td>
                                                        <td className="px-6 py-4 text-emerald-800 font-black">&#8377;4,500 (50% Off)</td>
                                                        <td className="px-6 py-4">First Schedule, Entry 1</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Multi-Class Application (3 Classes E-Filing)</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">&#8377;27,000</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;13,500</td>
                                                        <td className="px-6 py-4 text-emerald-800 font-black">&#8377;13,500 (50% Off)</td>
                                                        <td className="px-6 py-4">Rule 23 &amp; Entry 1</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Multi-Class Application (5 Classes E-Filing)</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">&#8377;45,000</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;22,500</td>
                                                        <td className="px-6 py-4 text-emerald-800 font-black">&#8377;22,500 (50% Off)</td>
                                                        <td className="px-6 py-4">First Schedule, Entry 1</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Physical Filing (Paper Format at Counter)</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">&#8377;10,000 / class</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;5,000 / class</td>
                                                        <td className="px-6 py-4 text-emerald-800 font-black">&#8377;5,000 / class</td>
                                                        <td className="px-6 py-4">First Schedule, Entry 1</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Expedited Examination (Fast-Track Form TM-M)</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">&#8377;40,000</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;20,000</td>
                                                        <td className="px-6 py-4 text-emerald-800 font-black">&#8377;20,000 (50% Off)</td>
                                                        <td className="px-6 py-4">Rule 34(1)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Trademark Renewal (Form TM-R)</td>
                                                        <td className="px-6 py-4 text-gray-900 font-bold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4 text-gray-900 font-bold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4 text-gray-500 font-medium">&#8377;0 (No Concession)</td>
                                                        <td className="px-6 py-4">Section 25 &amp; Rule 57</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                            <p className="text-xs sm:text-sm text-amber-950 font-medium m-0">
                                                <strong>Crucial Legal Distinction:</strong> The 50% MSME concession applies exclusively to initial applications on Form TM-A and expedited examination requests under Rule 34. Decennial renewals on Form TM-R carry a uniform statutory fee of ₹9,000 per class for all legal entities. Check our full analysis on <Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">how to renew a trademark</Link>.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: 8-STEP CLAIM WORKFLOW */}
                                    <section id="step-by-step" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            8-Step Workflow to Claim 50% Trademark Fee Discount
                                        </h2>
                                        <p className="mb-6">
                                            Claiming the statutory fee concession requires precise execution during the e-filing workflow on the official IP India gateway. Follow these 8 verified procedural steps:
                                        </p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: MSME Procurement</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Procure or Update Udyam Registration Certificate</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                If your enterprise is not yet registered under the MSME framework, visit the official government portal at <a href="https://udyamregistration.gov.in" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">udyamregistration.gov.in</a>. Udyam registration is 100% free, paperless, and instant using your corporate PAN, GSTIN, and director/proprietor Aadhaar OTP.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Ensure that the generated dynamic PDF certificate displays a valid 19-digit Udyam number in the format `UDYAM-XX-00-0000000` and clearly classifies your enterprise as &ldquo;Micro&rdquo; or &ldquo;Small&rdquo;.
                                            </p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Identity &amp; Title Check</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Audit Applicant Entity Name &amp; Corporate Details</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Under Indian trademark registry examination standards, the <strong>Applicant Name on Form TM-A must strictly match the Enterprise Name on the Udyam Certificate</strong>. For instance, if your company is &ldquo;Apex Innovations Private Limited&rdquo;, the Udyam certificate must be issued in the corporate name, not in the personal name of a director.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                For sole proprietorships, the applicant name should be structured as &ldquo;[Proprietor Full Name] Trading As [Business Alias]&rdquo; to reconcile individual ownership with the commercial trade name.
                                            </p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: NIC Code Alignment</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Align National Industry Classification (NIC) with Nice Classes</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Your Udyam Certificate contains 2-digit, 4-digit, and 5-digit NIC codes reflecting your commercial manufacturing and service activities. Before filing Form TM-A, cross-reference these NIC activities with the Nice Classification classes selected for your trademark.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                You can look up the correct classification using our interactive <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>. If your Udyam certificate omits a relevant business activity (such as software services under Class 42), log in to the Udyam portal and add the relevant NIC code prior to TM filing.
                                            </p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Legal Authorization</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Execute Stamped Power of Attorney (Form TM-48)</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                If engaging a registered trademark attorney or agent to represent your application, an executed and stamped Power of Attorney on Form TM-48 is statutory under Rule 19 of the Trade Marks Rules, 2017.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                The authorization must be executed on state-mandated non-judicial stamp paper (e.g., ₹100 in Delhi/Karnataka/UP, ₹500 in Maharashtra) and signed by an authorized director, partner, or proprietor. Read our comprehensive guide on <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48 rules and stamp duty</Link>.
                                            </p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Portal Authentication</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Log in to the IP India Gateway via Class 3 DSC</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Navigate to the official <a href="https://ipindiaonline.gov.in/trademarkefiling/user/frmloginNew.aspx" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India E-Filing Gateway</a>. Authenticate the session using an active Class 3 Digital Signature Certificate (DSC) registered with the Controller General of Patents, Designs and Trade Marks (CGPDTM).
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Prior to submission, verify that the mark is distinct and available by conducting an exhaustive clearance via our <Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search tool</Link>.
                                            </p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Form TM-A Drafting</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Select &ldquo;Small Enterprise&rdquo; or &ldquo;Startup&rdquo; Category</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                When initiating Form TM-A (Application for Registration of Trademark), navigate to the <strong>&ldquo;Category of Applicant&rdquo;</strong> dropdown. It is crucial to select either:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Small Enterprise:</strong> For Private Limited companies, LLPs, or partnerships with Udyam registration.</li>
                                                <li><strong>Startup:</strong> For entities possessing a DPIIT Certificate of Recognition.</li>
                                                <li><strong>Individual:</strong> For sole proprietors and natural persons.</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                <strong>Warning:</strong> Never select &ldquo;Others / Body Corporate&rdquo; if you hold an MSME certificate. Selecting &ldquo;Others&rdquo; prompts the gateway to bill the full ₹9,000 corporate fee, and the Trade Marks Registry does not issue refunds for excess fees paid due to user selection errors.
                                            </p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Statutory Evidence Upload</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Enter Udyam Details &amp; Upload Authenticated Certificate</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                The gateway will generate dedicated data fields requesting your 19-digit Udyam Registration Number or DPIIT Recognition Number. Input the alphanumeric string exactly as printed on your government certificate.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                In the document attachment tab, upload the digitally authenticated Udyam Certificate in PDF format (file size below 10 MB). If claiming prior commercial use, attach your notarized user affidavit along with commercial invoices. For format guidelines, consult our guide on <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit rules</Link>.
                                            </p>
                                        </div>

                                        {/* STEP 8 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 8</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Payment &amp; CBR Generation</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Remit Subsidized Fee (₹4,500) &amp; Download CBR Receipt</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Proceed to the integrated Bharatkosh payment portal. The gateway calculates the discounted fee of <strong>₹4,500 per class</strong>. Complete the payment via net banking, debit card, or UPI.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Upon successful remittance, the portal immediately issues an electronic <strong>Cash Book Receipt (CBR)</strong> containing your official application number. Your trademark status transitions to &ldquo;Send to Vienna Codification&rdquo; or &ldquo;Marked for Exam&rdquo;. You can track real-time milestones via our <Link href="/trademark-application-status" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark status tracking guide</Link>.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 5: UDYAM VERIFICATION & NIC CODES */}
                                    <section id="udyam-verification" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faIdCard} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Udyam Certificate &amp; NIC Code Alignment Rules
                                        </h2>
                                        <p className="mb-6">
                                            During the initial examination phase, the Trade Marks Registry Formalities Check division performs automated and manual verification of your attached Udyam document. Understanding the relationship between National Industry Classification (NIC) codes and Nice trademark classes prevents unnecessary scrutiny:
                                        </p>

                                        <div className="space-y-6 mb-8">
                                            <div className="border-l-4 border-[rgb(110,94,147)] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Manufacturing vs Service NIC Codes</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    NIC codes are divided into Manufacturing (Goods) and Service activities. If you are applying for a trademark in Class 25 (Clothing &amp; Footwear), your Udyam certificate should ideally reflect NIC Division 14 (Manufacture of Wearing Apparel). If applying in Class 35 (Online Retail / E-commerce), ensure NIC Division 47 (Retail Trade) or Division 62 (Computer Programming &amp; IT) is incorporated.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[rgb(110,94,147)] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Adding Free NIC Codes Prior to TM Application</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Entrepreneurs can add multiple manufacturing and service NIC codes to their existing Udyam Certificate at zero government cost on `udyamregistration.gov.in`. Modifying your Udyam profile takes less than 5 minutes and prevents examiners from raising queries regarding enterprise business scope.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[rgb(110,94,147)] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Dynamic QR Code Authentication</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Modern Udyam certificates feature an encrypted dynamic QR code. The registry e-system validates this QR code against the Ministry of MSME database. Never upload scanned low-resolution screenshots or edited documents; always upload the authentic digitally generated PDF.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: COMMON PITFALLS & DISCREPANCIES */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common Pitfalls &amp; Discrepancy Notice Prevention
                                        </h2>
                                        <p className="mb-6">
                                            Filing under the subsidized MSME tier without adhering to strict documentary standards can trigger registry objections and delay examination by months. Avoid these critical mistakes:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Attaching Obsolete Udyog Aadhaar (UAM) or EM-II</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Legacy Udyog Aadhaar Memorandum (UAM) and Entrepreneurs Memorandum (EM-II) registrations were officially invalidated by the Ministry of MSME as of June 30, 2022. Submitting a legacy UAM certificate will cause an immediate <Link href="/trademark-formalities-check-fail-meaning" className="text-[rgb(110,94,147)] hover:underline font-medium">Formality Check Fail</Link> notice requiring the submission of a valid Udyam certificate.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Company vs Director Name Mismatch</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    A common corporate blunder occurs when a Private Limited company applies on Form TM-A, but attaches an Udyam certificate registered in the personal name of a promoter or director. The entity name, PAN, and corporate address on Form TM-A must match the Udyam document 100%. If discrepant, learn how to handle <Link href="/trademark-discrepancy-meaning" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark discrepancy notices</Link>.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Medium Enterprise Misclassification</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Under Rule 2(1)(v) of the Trade Marks Rules, 2017, the fee concession is specifically designated for <strong>&ldquo;Small Enterprises&rdquo;</strong> (encompassing Micro and Small units). If your enterprise has graduated into a &ldquo;Medium Enterprise&rdquo; (Investment &gt; ₹10 Cr or Turnover &gt; ₹50 Cr), you are legally obligated to remit the standard ₹9,000 corporate fee.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Forgetting to Upload the Document During Filing</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Selecting &ldquo;Small Enterprise&rdquo; and paying ₹4,500 without attaching the PDF certificate triggers a fee deficit notice. The applicant must file Form TM-M with an official fee of ₹900 to submit the missing certificate or pay the remaining ₹4,500 deficit.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: ADDITIONAL MSME BENEFITS */}
                                    <section id="additional-benefits" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Additional MSME Benefits: Fast-Track &amp; SIPP Perks
                                        </h2>
                                        <p className="mb-6">
                                            Holding MSME or Startup recognition unlocks substantial regulatory advantages beyond initial application fee discounts:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-[#6E5E93] mr-2.5" />
                                                    Rule 34 Expedited Examination
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0 mb-3">
                                                    MSMEs and DPIIT Startups can bypass the standard 8–12 month examination waitlist by filing for <Link href="/fast-track-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">fast-track expedited trademark registration</Link> on Form TM-M.
                                                </p>
                                                <p className="text-xs text-purple-900 font-semibold m-0">
                                                    ⚡ Subsidized Fee: ₹20,000 (vs ₹40,000 for large enterprises) with examination completed within 30 to 60 days.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5 text-[#6E5E93] mr-2.5" />
                                                    SIPP Scheme Legal Facilitators
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0 mb-3">
                                                    Under the Government&rsquo;s SIPP Scheme (Scheme for Facilitating Start-Ups and MSMEs in IP Protection), registered facilitators assist in patent and trademark drafting where legal fees are subsidized by the government.
                                                </p>
                                                <p className="text-xs text-purple-900 font-semibold m-0">
                                                    🛡️ Professional Representation with transparent government-regulated facilitator fee caps.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faReceipt} className="w-5 h-5 text-[#6E5E93] mr-2.5" />
                                                    State Government IP Subsidies
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0 mb-3">
                                                    Numerous state industrial policies (including Gujarat, Maharashtra, Karnataka, and Tamil Nadu) offer 50% to 75% reimbursements on trademark registration expenses incurred by registered MSMEs.
                                                </p>
                                                <p className="text-xs text-purple-900 font-semibold m-0">
                                                    💰 Additional financial reimbursements up to ₹25,000 per registered domestic trademark.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 text-[#6E5E93] mr-2.5" />
                                                    International Brand Building
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0 mb-3">
                                                    Securing a cost-effective Indian base trademark enables MSMEs to expand globally via <Link href="/international-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">international trademark registration</Link> under the Madrid Protocol across 130+ countries.
                                                </p>
                                                <p className="text-xs text-purple-900 font-semibold m-0">
                                                    🌍 Protect export revenue and cross-border brand equity with institutional backing.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            MSME Trademark Filing Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Valid Udyam Certificate:</strong> Ensure your enterprise holds an active Udyam certificate with dynamic QR code showing Micro or Small status.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Reconcile Entity Name:</strong> Confirm that the applicant name on Form TM-A exactly matches the enterprise name on the Udyam document.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Audit Relevant NIC Codes:</strong> Verify that your Udyam profile includes 2-digit and 4-digit NIC codes covering your intended trademark Nice classes.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Execute Form TM-48:</strong> Have the authorized signatory execute a stamped Power of Attorney on state-mandated non-judicial stamp paper.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Select Small Enterprise / Startup:</strong> Choose the correct category on the IP India portal to auto-calculate the discounted ₹4,500 fee.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Upload PDF Certificate:</strong> Attach the digitally signed Udyam / Startup recognition document in the portal attachment tab.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Download Official CBR:</strong> Secure the electronic Cash Book Receipt confirming ₹4,500 remittance and track registration milestones.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 9: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 10: STRATEGIC RECOMMENDATIONS */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Recommendations for Founders
                                        </h2>
                                        <p className="mb-6">
                                            Securing trademark protection early is the single most effective legal measure to protect your brand against copycats, trademark squatters, and infringement disputes. By leveraging the 50% MSME fee concession, private limited companies, LLPs, and startups can protect their core brand across multiple classes at half the conventional statutory expenditure.
                                        </p>
                                        <p className="mb-6">
                                            Do not allow minor paperwork mismatches or obsolete registrations to forfeit your statutory fee benefits. Verify your Udyam certificates, align your NIC classifications, and partner with registered IP attorneys to execute seamless Form TM-A filings on the official IP India gateway. Start your filing assessment today to safeguard your commercial equity with maximum cost efficiency.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track MSME Trademark Filing
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Claim Your 50% Trademark Fee Concession
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Protect your brand name, logo, and tagline with certified trademark attorneys. We ensure 100% compliant Udyam linking, comprehensive clearance searches, and seamless Form TM-A e-filing with zero discrepancy notices.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>File Trademark with 50% Off</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified IP Advocates • Same-Day Form TM-A Filing • Transparent Government Fee Invoicing
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, MSME intellectual property subsidies, and fast-track trademark compliance under the Trade Marks Rules, 2017. He assists growing startups in building defensible IP portfolios.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Save 50% on TM Fees</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">File Form TM-A with verified Udyam certificate linking and expert IP attorney assistance today.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        File Form TM-A Now
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faListUl} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Filing Steps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRocket} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Startup TM Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Class Finder</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Fast-Track TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Status Check</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-discrepancy-meaning" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Discrepancy Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-formalities-check-fail-meaning" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Formalities Check</span>
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
