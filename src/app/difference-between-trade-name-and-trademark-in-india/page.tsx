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
    faLandmark,
    faFileInvoiceDollar,
    faStore,
    faIdCard,
    faCircleXmark,
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trade Name vs Trademark in India: GST & MSME Limits",
    description: validateAndNormalizeDescription(
        "Understand the difference between trade names and trademarks in India. Discover why GST, MSME Udyam, and MCA registrations do not protect your brand.",
        "app/difference-between-trade-name-and-trademark-in-india/page.tsx"
    ),
    keywords: [
        "difference between trade name and trademark in india",
        "does gst registration protect brand name in india",
        "msme udyam registration vs trademark brand protection",
        "trade name vs trademark legal difference india",
        "shop act license vs trademark",
        "can someone steal my business name if i have gst",
        "company name mca registration vs registered trademark",
        "section 29 trade marks act 1999 infringement",
        "section 16 companies act rectification of name",
        "passing off trade name dispute india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/difference-between-trade-name-and-trademark-in-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trade Name vs Trademark in India: GST & MSME Limits",
        description: "Understand the difference between trade names and trademarks in India. Discover why GST, MSME Udyam, and MCA registrations do not protect your brand.",
        url: "https://www.iprkaro.com/difference-between-trade-name-and-trademark-in-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/difference-between-trade-name-and-trademark-in-india.png",
                width: 1200,
                height: 630,
                alt: "Trade Name vs Trademark in India: Why GST and MSME Registration Does Not Protect Your Brand",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trade Name vs Trademark in India: GST & MSME Limits",
        description: "Understand the difference between trade names and trademarks in India. Discover why GST, MSME Udyam, and MCA registrations do not protect your brand.",
        images: ["https://www.iprkaro.com/images/og/difference-between-trade-name-and-trademark-in-india.png"],
    }
};

const faqs = [
    {
        question: "Does having a GST registration protect my brand name across India?",
        answer: "No. A GSTIN (Goods and Services Tax Identification Number) is solely a tax compliance registration issued under the CGST Act, 2017. The GST portal does not perform brand clearance searches, nor does it confer exclusive proprietary ownership. Multiple entities across different states (or within the same jurisdiction) can operate with identical trade names on GST certificates without legal immunity from trademark infringement."
    },
    {
        question: "Does an MSME Udyam Registration grant exclusive brand ownership?",
        answer: "No. Udyam Registration under the MSMED Act, 2006 serves only to qualify your enterprise for government subsidies, priority sector lending, collateral-free credit, and delayed payment dispute resolution under the Samadhaan portal. It provides zero intellectual property monopoly or legal standing to stop competitors from copying your brand name."
    },
    {
        question: "What is the core difference between a Trade Name and a Trademark?",
        answer: "A Trade Name (business name) is the commercial identity under which an entity conducts routine operations, signs vendor contracts, files taxes, and maintains bank accounts. A Trademark is a legally protected intellectual property asset registered under the Trade Marks Act, 1999 that identifies the commercial source of specific goods or services and grants an exclusive, nationwide monopoly to prevent third-party infringement."
    },
    {
        question: "If I register a Private Limited Company with MCA, do I still need a trademark?",
        answer: "Yes. While the Ministry of Corporate Affairs (MCA) checks name availability before incorporating a company or LLP, Section 16(1)(b) of the Companies Act, 2013 explicitly empowers a registered trademark owner to file a rectification petition and legally force the company to change its name within three months if it infringes a prior registered trademark."
    },
    {
        question: "Can someone steal my brand name if I only have a Shop & Establishment License?",
        answer: "Yes. A Shop and Establishment license is purely a state municipal permit governing local working hours, health standards, and employee working conditions. It grants zero proprietary rights. Any competitor can register your brand name as a trademark with the Trade Marks Registry and issue a cease-and-desist notice forcing you to stop using your business name."
    },
    {
        question: "What legal remedies exist for a registered trademark owner against a trade name infringer?",
        answer: "Under the Trade Marks Act, 1999, a registered trademark owner can file a civil infringement suit under Section 29 to obtain interim and permanent injunctions, confiscate infringing goods, recover damages or accounts of profits under Section 135, and initiate criminal proceedings under Section 103 and 104 with search and seizure police raids under Section 115."
    },
    {
        question: "Can an unregistered trade name owner file a lawsuit against a copycat?",
        answer: "An unregistered trade name owner cannot file a statutory trademark infringement suit. Their only recourse is a common law 'passing off' action under Section 27(2). Passing off requires proving extensive commercial goodwill, deceptive misrepresentation by the defendant, and actual financial damage, which involves heavy evidentiary burdens and substantial legal expenses."
    },
    {
        question: "How does having an MSME certificate help in trademark registration?",
        answer: "While MSME Udyam registration does not protect your brand automatically, holding a valid Udyam certificate entitles micro and small enterprises to a 50% government fee concession on trademark filing under the Trade Marks Rules, 2017 (reducing the official filing fee from ₹9,000 to ₹4,500 per class)."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & The Brand Myth" },
    { id: "core-definitions", title: "Trade Name vs Trademark" },
    { id: "why-gst-msme-fail", title: "Why GST & MSME Fail to Protect" },
    { id: "statutory-comparison-matrix", title: "Legal Comparison Matrix" },
    { id: "mca-company-name-conflict", title: "MCA Names vs Trademarks" },
    { id: "case-law-precedents", title: "High Court Jurisprudence" },
    { id: "real-world-risks", title: "Real-World Business Risks" },
    { id: "transition-playbook", title: "6-Step Trademark Roadmap" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Expert Legal Advice" },
];

export default function TradeNameVsTrademarkPage() {
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
        "headline": "Trade Name vs Trademark in India: Why GST & MSME Registration Does Not Protect Your Brand",
        "description": "Understand the difference between trade names and trademarks in India. Discover why GST, MSME Udyam, and MCA registrations do not protect your brand.",
        "image": "https://www.iprkaro.com/images/og/difference-between-trade-name-and-trademark-in-india.png",
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
            "@id": "https://www.iprkaro.com/difference-between-trade-name-and-trademark-in-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trade Name vs Trademark in India: GST & MSME Limits",
        "url": "https://www.iprkaro.com/difference-between-trade-name-and-trademark-in-india",
        "description": "Understand the difference between trade names and trademarks in India. Discover why GST, MSME Udyam, and MCA registrations do not protect your brand.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/difference-between-trade-name-and-trademark-in-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/difference-between-trade-name-and-trademark-in-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trade Name vs Trademark Guide", "item": "https://www.iprkaro.com/difference-between-trade-name-and-trademark-in-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "6-Step Strategic Roadmap for Transitioning from Trade Name to Registered Trademark",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Comprehensive Public Trademark Search & Phonetic Clearance on IP India Portal" },
            { "@type": "ListItem", "position": 2, "name": "Map Core Goods and Services to Accurate NICE Trademark Classes" },
            { "@type": "ListItem", "position": 3, "name": "Leverage MSME Udyam Certificate for 50 Percent Government Fee Subsidy" },
            { "@type": "ListItem", "position": 4, "name": "Compile Prior User Proof and Draft Rule 25 User Date Affidavit" },
            { "@type": "ListItem", "position": 5, "name": "File Form TM-A Online to Secure Legal TM Filing Status and Application Number" },
            { "@type": "ListItem", "position": 6, "name": "Track Examination, Address Objections, and Obtain Registration Certificate" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Brand Protection &amp; IP Strategy</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trade Name vs Trademark in India: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Key Differences</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Millions of Indian entrepreneurs, MSME founders, and traders mistakenly believe that securing a <strong>GST registration</strong>, <strong>MSME Udyam certificate</strong>, <strong>Shop Act license</strong>, or <strong>MCA company incorporation</strong> gives them legal ownership over their brand name. In reality, commercial and tax registrations offer <strong>zero intellectual property protection</strong>. Learn why only a registered trademark under the <strong>Trade Marks Act, 1999</strong> grants an exclusive nationwide monopoly, and how failing to register leaves your brand vulnerable to theft, copycats, and devastating cease-and-desist lawsuits.
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
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified IP Law Analysis</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Register Your Trademark Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call IP Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/difference-between-trade-name-and-trademark-in-india.png"
                                    alt="Trade Name vs Trademark in India: Why GST and MSME Registration Does Not Protect Your Brand"
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
                        { label: "Trade Name vs Trademark Guide", href: "/difference-between-trade-name-and-trademark-in-india" }
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
                                            <span className="font-bold text-gray-900 text-sm sm:text-base">Table of Contents</span>
                                        </div>
                                        <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:rotate-180 transition-transform duration-200">
                                            &#9660;
                                        </span>
                                    </summary>
                                    <div className="p-4 pt-2 border-t border-purple-100/60 bg-white/80">
                                        <TableOfContents sections={tocSections} orientation="vertical" />
                                    </div>
                                </details>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700">
                                <article className="space-y-12">
                                    {/* SECTION 1: OVERVIEW & THE BRAND MYTH */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="w-7 h-7 mr-3 text-amber-500" />
                                            The Dangerous Myth of Commercial Registration
                                        </h2>
                                        <p className="mb-4">
                                            One of the most widespread and costly misconceptions among Indian MSME founders, traders, D2C startups, and retail store owners is the assumption that obtaining a <strong>GST Certificate</strong> or an <strong>MSME Udyam Registration</strong> gives them legal ownership over their business name. Business owners invest years of hard work, millions of rupees in inventory, digital marketing, signage, and customer goodwill, only to receive a sudden cease-and-desist legal notice from an entity holding a registered trademark.
                                        </p>
                                        <div className="p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl my-6">
                                            <p className="font-bold text-amber-900 mb-1">Critical Legal Reality:</p>
                                            <p className="text-amber-800 text-sm m-0">
                                                Commercial, municipal, and tax registrations (GSTIN, Udyam, Shop &amp; Establishment, FSSAI, Import Export Code) are statutory administrative licenses intended solely for taxation, regulation, or state welfare schemes. They do <strong>NOT</strong> grant intellectual property ownership, brand exclusivity, or the legal right to stop competitors from copying your name under Indian law.
                                            </p>
                                        </div>
                                        <p>
                                            In India, brand ownership is governed strictly by the <strong>Trade Marks Act, 1999</strong> administered by the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM / IP India). If you do not hold a registered trademark, any third party can legally register your brand name, secure exclusive statutory rights, and force you to rebrand your entire business.
                                        </p>
                                    </section>

                                    {/* SECTION 2: CORE DEFINITIONS */}
                                    <section id="core-definitions" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Defining Trade Name vs Registered Trademark
                                        </h3>
                                        <p className="mb-4">
                                            To understand why tax registrations fail to protect your commercial goodwill, it is essential to distinguish between a Trade Name and a Trademark under Indian legal jurisprudence.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold mr-3">
                                                        <FontAwesomeIcon icon={faStore} className="w-4 h-4" />
                                                    </span>
                                                    <h4 className="text-lg font-bold text-gray-900 m-0">What is a Trade Name?</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">
                                                    A <strong>Trade Name</strong> (or business/trading name) is the official or operational name under which an individual, partnership firm, LLP, or company conducts its day-to-day business. It is used on invoices, tax filings, lease agreements, vendor contracts, and bank accounts.
                                                </p>
                                                <ul className="text-xs text-gray-600 space-y-1.5 pl-4 m-0">
                                                    <li>• Governed by local municipal, tax, or corporate acts.</li>
                                                    <li>• Grants no exclusive right over goods or services.</li>
                                                    <li>• Confined to immediate local geographical territory.</li>
                                                    <li>• Enforceable only through costly common law passing off suits.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold mr-3">
                                                        <FontAwesomeIcon icon={faStamp} className="w-4 h-4" />
                                                    </span>
                                                    <h4 className="text-lg font-bold text-gray-900 m-0">What is a Trademark?</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">
                                                    A <strong>Trademark</strong> under Section 2(1)(zb) of the Trade Marks Act, 1999 is a visually distinctive mark (word, brand, heading, label, ticket, name, signature, letter, numeral, shape of goods, packaging, or combination of colours) capable of distinguishing the goods or services of one enterprise from those of others.
                                                </p>
                                                <ul className="text-xs text-gray-600 space-y-1.5 pl-4 m-0">
                                                    <li>• Governed exclusively by the Trade Marks Act, 1999.</li>
                                                    <li>• Grants nationwide statutory monopoly under Section 28.</li>
                                                    <li>• Right to file infringement lawsuits &amp; claim damages under Section 135.</li>
                                                    <li>• Criminal remedies including police search and seizure under Section 115.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: WHY GST & MSME FAIL TO PROTECT */}
                                    <section id="why-gst-msme-fail" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faCircleXmark} className="w-7 h-7 mr-3 text-red-500" />
                                            Why GST, MSME &amp; Shop Act Do Not Protect Your Brand
                                        </h3>
                                        <p className="mb-4">
                                            Let us dissect the precise legal limitations of standard commercial registrations that business owners commonly rely upon in place of a registered trademark:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-5 h-5 mr-2 text-[rgb(110,94,147)]" />
                                                    1. GST Registration (CGST Act, 2017)
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    GST registration is a tax collection mechanism enacted under Article 246A of the Indian Constitution and the Central Goods and Services Tax Act, 2017. When you apply for a GST number, the tax officer only verifies PAN details, identity proofs, and principal place of business.
                                                </p>
                                                <p className="text-sm text-gray-600 m-0">
                                                    The GST portal does not cross-check pending or registered trademarks on the IP India database. Ten different companies across Maharashtra, Gujarat, Delhi, and Karnataka can obtain GST registrations under the exact same trade name (e.g., &quot;Apex Enterprises&quot;). Having a GST certificate provides <strong>zero defense</strong> against a trademark infringement lawsuit under Section 29 of the Trade Marks Act.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faIdCard} className="w-5 h-5 mr-2 text-[rgb(110,94,147)]" />
                                                    2. MSME Udyam Registration (MSMED Act, 2006)
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Udyam Registration is a self-declared government portal operated by the Ministry of Micro, Small and Medium Enterprises to categorize businesses based on investment in plant/machinery and annual turnover.
                                                </p>
                                                <p className="text-sm text-gray-600 m-0">
                                                    Its sole purpose is to extend government benefits such as lower interest rates on bank loans, exemption on tender earnest money deposits (EMD), and statutory interest on delayed payments under Section 16 of the MSMED Act. It does not evaluate brand distinctiveness, prior conflicting marks, or trademark exclusivity.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faStore} className="w-5 h-5 mr-2 text-[rgb(110,94,147)]" />
                                                    3. Shop &amp; Establishment Act Licenses (Gumasta / Trade License)
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Issued by local municipal corporations (e.g., BMC Mumbai, MCD Delhi, BBMP Bengaluru), these licenses regulate working hours, weekly holidays, wage payments, and health/fire safety standards for commercial establishments.
                                                </p>
                                                <p className="text-sm text-gray-600 m-0">
                                                    Municipal corporations possess no statutory authority to grant intellectual property rights. A Shop Act license is confined strictly to the physical municipal address listed on the certificate and provides zero nationwide brand exclusivity.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: STATUTORY COMPARISON MATRIX */}
                                    <section id="statutory-comparison-matrix" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Comprehensive Statutory Comparison Matrix
                                        </h3>
                                        <p className="mb-4">
                                            Compare the legal standing, territorial jurisdiction, and protection levels of common Indian business registrations against a registered trademark:
                                        </p>

                                        <div className="overflow-x-auto my-6">
                                            <table className="min-w-full text-xs sm:text-sm text-left border-collapse border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                                                <thead className="bg-[#0C002B] text-white">
                                                    <tr>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Registration Type</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Governing Act</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Territorial Scope</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Brand Exclusivity</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Infringement Remedy</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">E-Commerce Protection</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">GST Registration</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">CGST Act, 2017</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">State / Pan-India (Tax)</td>
                                                        <td className="p-3 sm:p-4 text-red-600 font-bold">None (0%)</td>
                                                        <td className="p-3 sm:p-4 text-red-600">No Right to Sue</td>
                                                        <td className="p-3 sm:p-4 text-red-600">Seller Onboarding Only</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">MSME Udyam</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">MSMED Act, 2006</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">National (Benefits)</td>
                                                        <td className="p-3 sm:p-4 text-red-600 font-bold">None (0%)</td>
                                                        <td className="p-3 sm:p-4 text-red-600">No Right to Sue</td>
                                                        <td className="p-3 sm:p-4 text-red-600">No Brand Lock</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">Shop &amp; Establishment</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">State Specific Acts</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">Local Municipal Limit</td>
                                                        <td className="p-3 sm:p-4 text-red-600 font-bold">None (0%)</td>
                                                        <td className="p-3 sm:p-4 text-red-600">No Right to Sue</td>
                                                        <td className="p-3 sm:p-4 text-red-600">Rejected for Brand Registry</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">MCA Company / LLP Name</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">Companies Act, 2013</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">Pan-India Corporate Name</td>
                                                        <td className="p-3 sm:p-4 text-amber-600 font-semibold">Limited (Corporate Only)</td>
                                                        <td className="p-3 sm:p-4 text-amber-600">Common Law Passing Off</td>
                                                        <td className="p-3 sm:p-4 text-amber-600">Partial / Unprotected Listings</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/80 bg-purple-50/40">
                                                        <td className="p-3 sm:p-4 font-black text-[#6E5E93]">Registered Trademark (®)</td>
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">Trade Marks Act, 1999</td>
                                                        <td className="p-3 sm:p-4 font-bold text-emerald-700">All 28 States &amp; 8 UTs</td>
                                                        <td className="p-3 sm:p-4 font-black text-emerald-700">Complete Monopoly (100%)</td>
                                                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Section 29 Civil &amp; Criminal</td>
                                                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Amazon Registry &amp; Flipkart Lock</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: MCA COMPANY NAME CONFLICT */}
                                    <section id="mca-company-name-conflict" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            MCA Company Name vs Registered Trademark
                                        </h3>
                                        <p className="mb-4">
                                            Many founders believe that incorporating a Private Limited Company or LLP with the Ministry of Corporate Affairs (MCA) grants complete brand security because the Registrar of Companies (ROC) checks name availability under the SPICe+ portal.
                                        </p>
                                        <p className="mb-4">
                                            While ROC name approval prevents another business from incorporating a company with the exact same corporate name, <strong>a company registration does not override trademark rights</strong>.
                                        </p>

                                        <div className="p-5 bg-purple-50 border border-purple-200 rounded-2xl my-6">
                                            <h4 className="text-base font-bold text-purple-950 mb-2">Section 16(1)(b) of the Companies Act, 2013 (Rectification of Name)</h4>
                                            <p className="text-sm text-purple-900 m-0">
                                                Under Section 16(1)(b) of the Companies Act, 2013, if a company is registered with a name that is identical with or too nearly resembles a registered trademark, the proprietor of the registered trademark can file an application before the Regional Director (RD) / Central Government. The government will direct the infringing company to <strong>change its registered company name within three months</strong>!
                                            </p>
                                        </div>
                                        <p>
                                            Consequently, even if you successfully incorporate &quot;Zylos Technologies Private Limited&quot; on the MCA portal, if another enterprise holds a prior registered trademark for &quot;Zylos&quot; in Class 9 or 42, they can legally compel you to change your corporate name and surrender all domain names and product branding.
                                        </p>
                                    </section>

                                    {/* SECTION 6: HIGH COURT CASE LAWS */}
                                    <section id="case-law-precedents" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Judicial Precedents on Trade Names
                                        </h3>
                                        <p className="mb-4">
                                            The Supreme Court of India and various High Courts have repeatedly affirmed the supremacy of registered trademarks over mere trade names, company names, and tax registrations:
                                        </p>

                                        <div className="space-y-4 my-6">
                                            <div className="p-4 rounded-xl bg-gray-50 border-l-4 border-[rgb(110,94,147)]">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Montari Overseas Ltd. v. Montari Industries Ltd. (1996 - Delhi High Court)</h4>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                    The Delhi High Court held that adopting a corporate name under the Companies Act does not grant immunity from trademark infringement. An enterprise cannot start a business using a corporate name that is deceptively similar to an existing established trademark or trade name of another company, as it causes confusion in the minds of consumers.
                                                </p>
                                            </div>

                                            <div className="p-4 rounded-xl bg-gray-50 border-l-4 border-[rgb(110,94,147)]">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Mahendra &amp; Mahendra Paper Mills Ltd. v. Mahindra &amp; Mahindra Ltd. (2002 - Supreme Court of India)</h4>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                    The Supreme Court restrained the appellant from using the name &quot;Mahendra &amp; Mahendra&quot; for their paper mill business despite having corporate registration, holding that the name was deceptively similar to the famous registered mark &quot;Mahindra &amp; Mahindra&quot;, creating an undeniable likelihood of commercial confusion and dilution of goodwill.
                                                </p>
                                            </div>

                                            <div className="p-4 rounded-xl bg-gray-50 border-l-4 border-[rgb(110,94,147)]">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Laxmikant V. Patel v. Chetanbhai Shah (2002 - Supreme Court of India)</h4>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                    The Supreme Court ruled that honest commercial adoption of a business name requires conducting thorough due diligence. If an entity uses a trade name that damages the reputation or diverts customers from an established prior business, courts must immediately grant interim injunctions to protect goodwill, regardless of local commercial registrations.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: REAL-WORLD RISKS */}
                                    <section id="real-world-risks" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-7 h-7 mr-3 text-red-500" />
                                            Real-World Business Risks of Operating Without a Trademark
                                        </h3>
                                        <p className="mb-4">
                                            Relying solely on GST and MSME registrations exposes your enterprise to devastating operational, legal, and financial catastrophes:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                                            <div className="bg-red-50/50 p-5 rounded-2xl border border-red-200">
                                                <div className="text-red-600 font-black text-lg mb-2">1. Brand Hijacking</div>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                    A competitor or rogue distributor discovers your unregistered brand gaining traction, files a trademark application first on the IP India portal, and becomes the legal owner of your brand.
                                                </p>
                                            </div>

                                            <div className="bg-red-50/50 p-5 rounded-2xl border border-red-200">
                                                <div className="text-red-600 font-black text-lg mb-2">2. E-Commerce Listing Bans</div>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                    Platforms like Amazon, Flipkart, and Meesho require a trademark application or registration for <Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] font-medium hover:underline">Amazon Brand Registry</Link> and <Link href="/flipkart-brand-approval-trademark-requirements-india" className="text-[rgb(110,94,147)] font-medium hover:underline">Flipkart Brand Lock</Link>. Without a TM, copycats can hijack your product listings.
                                                </p>
                                            </div>

                                            <div className="bg-red-50/50 p-5 rounded-2xl border border-red-200">
                                                <div className="text-red-600 font-black text-lg mb-2">3. Forced Rebranding Loss</div>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                    Receiving an infringement injunction forces you to destroy printed packaging, tear down retail signage, change domains, and abandon accumulated customer search rankings overnight.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: 6-STEP TRADEMARK ROADMAP */}
                                    <section id="transition-playbook" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-7 h-7 mr-3 text-emerald-600" />
                                            6-Step Roadmap: Transition from Trade Name to Trademark
                                        </h3>
                                        <p className="mb-4">
                                            Transform your vulnerable business trade name into a legally protected intellectual property asset through this systematic process:
                                        </p>

                                        <div className="space-y-4 my-6">
                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">1</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Public Trademark Clearance Search</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        Conduct an exhaustive phonetic, visual, and semantic clearance search across the IP India public database to verify that your proposed mark is not deceptively similar to existing marks under Section 11.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">2</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Accurate Trademark Class Mapping</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        Identify all applicable classes among the 45 NICE classification classes (e.g., Class 25 for apparel, Class 30 for food products, Class 35 for retail/e-commerce, Class 42 for SaaS/software) to guarantee complete protection.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">3</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Claim 50% MSME Government Fee Concession</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        Attach your valid MSME Udyam Registration or DPIIT Startup India Certificate to reduce the official government filing fee from ₹9,000 to ₹4,500 per mark per class under the Trade Marks Rules, 2017. See our detailed guide on <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] font-medium hover:underline">MSME trademark fee concessions</Link>.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">4</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Draft Prior User Date Affidavit (Rule 25)</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        If you have already been operating under your trade name, compile historical GST invoices, domain receipts, and packaging bills to claim your continuous prior use date under <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="text-[rgb(110,94,147)] font-medium hover:underline">Section 34 prior user rights</Link>.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">5</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">File Form TM-A Online &amp; Use ™ Symbol</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        Submit Form TM-A through a registered trademark attorney. Immediately upon receiving your electronic acknowledgment receipt and application number, you are legally entitled to display the ™ symbol next to your brand. Review the <Link href="/difference-between-tm-and-r-symbol-in-india" className="text-[rgb(110,94,147)] font-medium hover:underline">difference between TM and R symbol</Link>.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">6</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Secure Certificate &amp; Enforce Brand Monopoly</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        Overcome examination objections, clear trademark journal publication, and receive your 10-year renewable Registration Certificate (®), unlocking nationwide brand lock and enforcement powers.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h3>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80">
                                                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-3 font-black text-xl">Q.</span>{faq.question}
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 pl-8 m-0 leading-relaxed">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 10: STRATEGIC LEGAL ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-7 h-7 mr-3 text-yellow-500" />
                                            Strategic Trade Name vs Trademark Advice
                                        </h3>
                                        <p className="mb-4">
                                            Your brand name, logo, and commercial reputation are among the most valuable intangible assets of your business. Do not make the fatal mistake of relying on GST, MSME, or Shop Act licenses for brand security. Tax registrations certify your obligation to pay taxes; only a registered trademark certifies your right to own and defend your brand.
                                        </p>
                                        <p className="mb-4">
                                            Partner with experienced intellectual property attorneys to conduct comprehensive trademark clearance, claim MSME fee subsidies, secure registration under the Trade Marks Act, 1999, and establish an unshakeable legal moat around your enterprise. For related enforcement workflows, explore our guides on <Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send trademark legal notices</Link>, <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement</Link>, and <Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 115 police raid procedures</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Nationwide Brand Protection &amp; Trademark Registration
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand with an Official Registered Trademark
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Do not leave your business name unprotected. Claim 50% MSME government fee discounts and secure pan-India brand ownership with senior IP advocates.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered IP Advocates • Free TM Search Report • 50% MSME Subsidy • Pan-India Protection
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in brand protection strategies, trade name vs trademark disputes, Section 16 MCA rectifications, and trademark registration for Indian MSMEs.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Secure Your Brand Name</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Operating with only GST or MSME? Prevent copycats from stealing your brand name with a registered trademark.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Start TM Registration
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">MSME TM Fee Discount</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Prior User Rights Sec 34</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Notice Reply</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Amazon Brand Registry</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/flipkart-brand-approval-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Flipkart Brand Lock</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/difference-between-tm-and-r-symbol-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM vs R Symbol</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/difference-between-trademark-registration-and-copyright-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM vs Copyright</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Startup TM Guide</span>
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
