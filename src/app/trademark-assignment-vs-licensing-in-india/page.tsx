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
    faPhone,
    faRocket,
    faGlobe,
    faClock,
    faRotate,
    faStamp,
    faHandshake,
    faMoneyBillWave,
    faBuilding,
    faGavel
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Assignment vs Licensing in India | Brand Rights",
    description: validateAndNormalizeDescription(
        "Compare trademark assignment vs licensing in India. Learn Form TM-P vs TM-U rules, stamp duty, goodwill, and brand rights transfer.",
        "app/trademark-assignment-vs-licensing-in-india/page.tsx"
    ),
    keywords: [
        "trademark assignment vs licensing in india",
        "how to transfer trademark ownership in india",
        "form tm p trademark assignment procedure",
        "trademark licensing agreement stamp duty india",
        "transferring brand rights india",
        "trademark assignment with goodwill",
        "registered user form tm u",
        "trade marks act 1999 section 37",
        "trademark license quality control",
        "naked licensing trademark india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-assignment-vs-licensing-in-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Assignment vs Licensing in India | Brand Rights",
        description: "Compare trademark assignment vs licensing in India. Learn Form TM-P vs TM-U rules, stamp duty, goodwill, and brand rights transfer.",
        url: "https://www.iprkaro.com/trademark-assignment-vs-licensing-in-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-assignment-vs-licensing-in-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Assignment vs Trademark Licensing in India Brand Transfer Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Assignment vs Licensing in India | Brand Rights",
        description: "Compare trademark assignment vs licensing in India. Learn Form TM-P vs TM-U rules, stamp duty, goodwill, and brand rights transfer.",
        images: ["https://www.iprkaro.com/images/og/trademark-assignment-vs-licensing-in-india.jpg"],
    }
};

const faqs = [
    {
        question: "What is the primary difference between trademark assignment and licensing?",
        answer: "Trademark assignment is an absolute, permanent transfer of proprietary title and brand ownership from the assignor to the assignee (comparable to selling real estate). In contrast, trademark licensing grants temporary, conditional permission to use the brand under specified terms while legal ownership and equity remain permanently with the licensor (comparable to leasing property)."
    },
    {
        question: "Which official forms are required for assignment and licensing on IP India?",
        answer: "Trademark assignment must be recorded on Form TM-P (Application for change of proprietor) along with the stamped deed of assignment. Trademark licensing, when registering a licensee as an official Registered User under Section 49, is filed on Form TM-U jointly by the licensor and licensee accompanied by the license agreement and statutory affidavit."
    },
    {
        question: "What is the difference between assignment with goodwill and without goodwill?",
        answer: "Assignment 'with goodwill' transfers the entire commercial reputation, consumer recognition, and customer loyalty associated with the brand, allowing the assignee to claim prior use from day one. Assignment 'without goodwill' (gross assignment) transfers the mark for specific goods while the assignor retains general business goodwill. Under Section 42, an assignment without goodwill requires prior directions from the Registrar and mandatory public advertisement within 6 months."
    },
    {
        question: "Is registration of a trademark licensing agreement mandatory in India?",
        answer: "Recording a trademark license on Form TM-U as a 'Registered User' is optional but legally advantageous under the Trade Marks Act, 1999. If registered under Section 49, the licensee gains independent statutory rights under Section 52 to institute infringement proceedings if the proprietor fails to sue within three months. Common law permitted users (unregistered licensees) cannot sue infringers in their own name under Section 53."
    },
    {
        question: "What is naked licensing, and how can brand owners prevent it in India?",
        answer: "Naked licensing occurs when a trademark proprietor licenses their brand without exercising effective quality control, supervision, or standards compliance over the licensee's products or services. In Indian jurisprudence, naked licensing dilutes the mark's distinctiveness as a badge of origin, leading to commercial deception and making the registration vulnerable to cancellation or rectification under Section 57."
    },
    {
        question: "How much stamp duty is payable on a trademark assignment deed in India?",
        answer: "Stamp duty on a trademark assignment deed is governed by State Stamp Acts and is typically levied on an ad valorem basis calculated on the consideration amount or the commercial market value of the transferred goodwill (commonly between 3% and 5% in commercial hubs like Maharashtra, Delhi, and Karnataka). Under Section 35 of the Indian Stamp Act, 1899, an unstamped or understamped assignment deed is inadmissible as legal evidence."
    },
    {
        question: "What are the official government fees for Form TM-P and Form TM-U?",
        answer: "Under the Trade Marks Rules, 2017, the official e-filing fee for Form TM-P (Assignment) is ₹9,000 per class if filed within 6 months from the date of the assignment deed. Filing between 6 and 12 months attracts an additional statutory fee of ₹4,500 per class, while filing after 12 months attracts an additional ₹9,000 per class. The official e-filing fee for Form TM-U (Registered User Licensing) is ₹4,500 per mark per class."
    },
    {
        question: "How does trademark commercialization impact taxation and GST in India?",
        answer: "Permanent transfer through trademark assignment constitutes a transfer of a capital asset subject to Capital Gains Tax under Section 55(2)(a) of the Income Tax Act, 1961, plus Goods and Services Tax (GST) at 18% on intellectual property transfers. Trademark licensing generates recurring royalty income classified as business revenue, subject to Tax Deducted at Source (TDS) under Section 194J and 18% GST under commercial service provisions."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "key-differences", title: "Key Differences" },
    { id: "trademark-assignment", title: "Trademark Assignment" },
    { id: "goodwill-comparison", title: "With vs Without Goodwill" },
    { id: "form-tm-p-workflow", title: "Form TM-P Procedure" },
    { id: "trademark-licensing", title: "Trademark Licensing" },
    { id: "registered-vs-permitted", title: "Registered vs Permitted" },
    { id: "form-tm-u-workflow", title: "Form TM-U Procedure" },
    { id: "stamp-duty-formalities", title: "Stamp Duty & Formalities" },
    { id: "tax-and-gst", title: "Tax & GST Liability" },
    { id: "naked-licensing-pitfalls", title: "Naked Licensing Risks" },
    { id: "decision-matrix", title: "Decision Matrix" },
    { id: "faqs", title: "FAQs" },
    { id: "strategic-advice", title: "Strategic Advice" },
];

export default function TrademarkAssignmentVsLicensingPage() {
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
        "headline": "Trademark Assignment vs Trademark Licensing in India: Transferring Brand Rights",
        "description": "Compare trademark assignment vs licensing in India. Learn Form TM-P vs TM-U rules, stamp duty, goodwill, and brand rights transfer.",
        "image": "https://www.iprkaro.com/images/og/trademark-assignment-vs-licensing-in-india.png",
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
            "@id": "https://www.iprkaro.com/trademark-assignment-vs-licensing-in-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Assignment vs Licensing in India | Brand Rights",
        "url": "https://www.iprkaro.com/trademark-assignment-vs-licensing-in-india",
        "description": "Compare trademark assignment vs licensing in India. Learn Form TM-P vs TM-U rules, stamp duty, goodwill, and brand rights transfer.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-assignment-vs-licensing-in-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-assignment-vs-licensing-in-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Assignment vs Licensing", "item": "https://www.iprkaro.com/trademark-assignment-vs-licensing-in-india" }
        ]
    };

    const assignmentWorkflowSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Trademark Brand Rights Transfer Workflow in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Commercial Assessment & Legal Structuring (Sale vs License)" },
            { "@type": "ListItem", "position": 2, "name": "Comprehensive Trademark Clearance & Title Due Diligence" },
            { "@type": "ListItem", "position": 3, "name": "Drafting Assignment Deed or Licensing Agreement with Quality Controls" },
            { "@type": "ListItem", "position": 4, "name": "State Stamp Duty Adjudication & Notarized Execution" },
            { "@type": "ListItem", "position": 5, "name": "Filing Form TM-P or Form TM-U on IP India Portal" },
            { "@type": "ListItem", "position": 6, "name": "Registry Scrutiny, Journal Notification, and Official Recordal" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(assignmentWorkflowSchema) }} />

            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Brand Monetization &amp; Transfer</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Assignment vs Trademark Licensing in India: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Transferring Brand Rights</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Deciding how to commercialize, monetize, or transfer an intellectual property brand asset in India requires a definitive legal choice: should you execute a trademark assignment or enter into a trademark licensing agreement? Governed by Chapters V and VI of the Trade Marks Act, 1999, the distinction between permanently selling brand ownership and granting controlled commercial usage rights impacts valuation, ongoing royalties, litigation powers, stamp duty costs, and registry compliance under Form TM-P and Form TM-U. Uncover the comparative statutory frameworks, goodwill rules, procedural workflows, and tactical strategies to protect your commercial enterprise.
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
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Transfer Your Brand Rights <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/trademark-assignment-vs-licensing-in-india.png"
                                    alt="Trademark Assignment vs Trademark Licensing in India Brand Transfer Guide"
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
                        { label: "Trademark Assignment vs Licensing", href: "/trademark-assignment-vs-licensing-in-india" }
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

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview: Assignment vs Licensing
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                In India, trademark assignment is the complete and permanent sale of brand ownership, legal title, and goodwill from the assignor to the assignee under Sections 37 to 45 of the Trade Marks Act, 1999, requiring formal recording on Form TM-P. In contrast, trademark licensing is a temporary commercial authorization under Sections 48 to 54 permitting a licensee to use the mark while proprietary ownership, underlying equity, and goodwill remain strictly with the licensor, optionally recorded on Form TM-U as a Registered User.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            A registered trademark represents far more than an artistic logo or a corporate name; it is an invaluable intangible commercial asset capable of being sold, pledged, mortgaged, franchised, or licensed. Under Indian intellectual property jurisprudence, brand proprietors frequently need to transfer rights during corporate mergers, acquisitions, venture capital financing rounds, joint ventures, and distribution agreements.
                                        </p>
                                        <p className="mb-6">
                                            However, confusing an <strong>assignment</strong> with a <strong>license</strong> can trigger severe commercial and legal hazards. An inadvertent assignment permanently extinguishes the founder&apos;s title to the brand. Conversely, an improperly drafted license agreement lacking enforceable quality control covenants results in &ldquo;naked licensing,&rdquo; which can destroy the distinctiveness of the trademark and expose the registration to permanent rectification under Section 57.
                                        </p>
                                        <p className="mb-6">
                                            Whether your organization is negotiating an asset buyout, establishing a nationwide franchise network, or licensing software brand marks to subsidiaries, understanding the procedural mechanics under the <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">Trade Marks Registry (CGPDTM)</a> is mandatory to safeguard brand equity.
                                        </p>
                                    </section>

                                    {/* SECTION 2: KEY DIFFERENCES AT A GLANCE */}
                                    <section id="key-differences" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Key Differences at a Glance
                                        </h2>
                                        <p className="mb-6">
                                            To evaluate the structural, procedural, and commercial distinctions between trademark assignment and licensing under Indian law, review this comparative breakdown:
                                        </p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full border-collapse border border-gray-200 text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="border border-gray-200 p-3.5 text-left font-bold text-gray-900">Legal Parameter</th>
                                                        <th className="border border-gray-200 p-3.5 text-left font-bold text-[#6E5E93]">Trademark Assignment</th>
                                                        <th className="border border-gray-200 p-3.5 text-left font-bold text-emerald-800">Trademark Licensing</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Nature of Transfer</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Permanent and absolute transfer of brand ownership and title (Sale).</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Temporary, limited authorization to use the trademark (Lease / Permitted Use).</td>
                                                    </tr>
                                                    <tr className="bg-gray-50/50">
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Governing Statutory Law</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Sections 37 to 45, Trade Marks Act, 1999.</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Sections 48 to 54, Trade Marks Act, 1999.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Statutory Form on IP India</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700"><strong>Form TM-P</strong> (Application for change of registered proprietor).</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700"><strong>Form TM-U</strong> (Application for registration as a Registered User).</td>
                                                    </tr>
                                                    <tr className="bg-gray-50/50">
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Goodwill Allocation</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Can be assigned either <em>with goodwill</em> or <em>without goodwill</em>.</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Goodwill remains strictly with the Licensor; use by licensee accrues to owner.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Official Government E-Filing Fees</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">₹9,000 per class (within 6 mos); escalating late surcharges apply.</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">₹4,500 per mark per class for Registered User entry.</td>
                                                    </tr>
                                                    <tr className="bg-gray-50/50">
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Quality Control Requirement</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Not required; assignee obtains total editorial and production control.</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700"><strong>Mandatory.</strong> Absence constitutes naked licensing, risking cancellation.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Right to Sue Infringers</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Assignee steps into proprietor&apos;s shoes and can sue in their own name.</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Only Registered Users under Sec. 52; unregistered licensees cannot (Sec. 53).</td>
                                                    </tr>
                                                    <tr className="bg-gray-50/50">
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Stamp Duty Requirement</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Ad valorem duty on consideration or goodwill value (State Stamp Acts).</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Non-judicial stamp paper based on license tenure and royalty structure.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-200 p-3.5 font-bold text-gray-900">Taxation Framework</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Capital Gains Tax (Sec. 55(2)(a) Income Tax Act) + 18% GST.</td>
                                                        <td className="border border-gray-200 p-3.5 text-gray-700">Revenue Income (Royalties) subject to TDS (Sec. 194J) + 18% GST.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 3: TRADEMARK ASSIGNMENT */}
                                    <section id="trademark-assignment" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Assignment Under Section 37
                                        </h2>
                                        <p className="mb-6">
                                            Under Section 2(1)(b) of the Trade Marks Act, 1999, an <strong>&ldquo;assignment&rdquo;</strong> is defined as an assignment in writing by act of the parties concerned. It represents a permanent legal conveyance where the original brand owner (Assignor) completely divests all proprietary rights, title, and commercial interest in the trademark, transferring them unconditionally to the purchaser (Assignee).
                                        </p>
                                        <p className="mb-6">
                                            Section 37 explicitly affirms the power of the registered proprietor to assign the trade mark and give effectual receipts for any consideration for such assignment. Once the assignment deed is finalized, the original owner ceases to possess any legal title to the mark and cannot subsequently restrict the assignee&apos;s use, alter its presentation, or demand royalties.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Complete Assignment
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Transfers all rights, privileges, and exclusive ownership across all registered classes, goods, and commercial activities. The assignee assumes absolute ownership for all operational verticals without geographical reservations in India.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Partial Assignment
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Transfers rights restricted to specific goods, services, or product categories. For instance, transferring a mark for clothing while retaining it for retail services, subject to statutory restrictions under Sections 40 and 41 to avoid public deception.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            Before finalizing an assignment, the buyer must conduct due diligence by verifying the registry status on the <Link href="/trademark-application-status" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark application status</Link> portal to ensure the mark is unencumbered, valid, and not facing rectification or non-use cancellation.
                                        </p>
                                    </section>

                                    {/* SECTION 4: WITH VS WITHOUT GOODWILL */}
                                    <section id="goodwill-comparison" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Assignment With vs Without Goodwill
                                        </h2>
                                        <p className="mb-6">
                                            Sections 38 and 39 of the Trade Marks Act, 1999 establish that both registered and unregistered trademarks are assignable either <strong>with the goodwill of the business</strong> or <strong>without the goodwill of the business</strong>. This distinction is critical in commercial valuation and procedural compliance.
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border border-purple-200 bg-purple-50/50 p-6 rounded-2xl">
                                                <h3 className="text-lg font-black text-[#6E5E93] mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                    1. Assignment With Goodwill (Business Transfer)
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    Under an assignment with goodwill, the assignee acquires not only the physical trademark and registration certificate, but also the entire established commercial reputation, customer base, prior trading history, and marketing equity built by the assignor.
                                                </p>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    <strong>Strategic Benefit:</strong> The assignee can directly claim the original applicant&apos;s priority filing date and historical prior commercial use. This provides bulletproof defense in opposition hearings and passing off disputes. To establish unbroken prior use, the assignee should review how evidence is presented in a <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit</Link>.
                                                </p>
                                            </div>

                                            <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl">
                                                <h3 className="text-lg font-black text-amber-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 mr-2 text-amber-700" />
                                                    2. Assignment Without Goodwill (Gross Assignment)
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    Under an assignment without goodwill, the brand mark is transferred for specific products or services, while the assignor retains the general commercial business goodwill or continues trading under related business lines.
                                                </p>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    <strong>Mandatory Section 42 Condition:</strong> Under Section 42, an assignment without goodwill does not take legal effect until the assignee applies to the Registrar within <strong>6 months</strong> (extendable up to 9 months) for directions to advertise the assignment. The assignee must publish the assignment notice in newspapers and the Trade Marks Journal as directed by the Registrar. Overlooking Section 42 renders the assignment legally void!
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: FORM TM-P WORKFLOW */}
                                    <section id="form-tm-p-workflow" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-P Assignment Procedure
                                        </h2>
                                        <p className="mb-6">
                                            Under Section 45 of the Trade Marks Act, 1999 and Rule 75 of the Trade Marks Rules, 2017, where a person becomes entitled by assignment or transmission to a registered trade mark, they must apply to the Registrar on <strong>Form TM-P</strong> to register their title. Follow this 6-step statutory procedure:
                                        </p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Commercial &amp; Legal Audit</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Title Due Diligence &amp; Trademark Audit</h3>
                                            <p className="text-gray-700 leading-relaxed m-0 text-sm">
                                                Audit the target trademark across the official register. Verify that the mark is in &ldquo;Registered&rdquo; status, check renewal dates under the decennial cycle (as detailed in our <Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">how to renew a trademark guide</Link>), and confirm whether any licensing agreements, hypothecations, or pending rectification proceedings exist.
                                            </p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Contract Drafting &amp; Execution</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Execution of Deed of Assignment</h3>
                                            <p className="text-gray-700 leading-relaxed m-0 text-sm">
                                                Draft a formal, comprehensive Deed of Assignment defining: (a) transfer of proprietary rights and title; (b) explicit specification of whether transfer is with or without goodwill; (c) consideration amount; (d) indemnification clauses protecting against prior infringements; and (e) no-objection declarations. Both parties execute the deed in the presence of two witnesses.
                                            </p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: State Revenue Compliance</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Stamp Duty Adjudication &amp; Notarization</h3>
                                            <p className="text-gray-700 leading-relaxed m-0 text-sm">
                                                Pay statutory stamp duty on the assignment deed under the relevant State Stamp Act where the instrument is executed. The deed must be attested by a Notary Public. If executing through legal counsel, execute a stamped <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48 Power of Attorney</Link>.
                                            </p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Online Portal Submission</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">E-Filing Form TM-P on IP India Gateway</h3>
                                            <p className="text-gray-700 leading-relaxed m-0 text-sm">
                                                File Form TM-P electronically on the comprehensive e-filing gateway. Upload the stamped Assignment Deed, Statement of Case under Rule 76, original registration certificate copy, Form TM-48, and corporate resolution documents. Remit the statutory fee of ₹9,000 per class.
                                            </p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Scrutiny &amp; Advertisement</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Registry Scrutiny &amp; Journal Notification</h3>
                                            <p className="text-gray-700 leading-relaxed m-0 text-sm">
                                                The Trade Marks Registry scrutinizes the assignment documents. If compliant, the assignment details are published in the Trade Marks Journal. For assignments without goodwill, compliance with Section 42 directions and newspaper advertisement clippings must be filed on record.
                                            </p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Register Update</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Certificate of Assignment Recordal</h3>
                                            <p className="text-gray-700 leading-relaxed m-0 text-sm">
                                                Upon approval, the Registrar issues an official Certificate of Recordal of Assignment. The Assignee&apos;s legal name and address replace the original proprietor on the Register of Trade Marks. Under Section 45(2), this official recordal is essential to prove title before courts in trademark infringement litigation.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 6: TRADEMARK LICENSING */}
                                    <section id="trademark-licensing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Licensing Under Section 48
                                        </h2>
                                        <p className="mb-6">
                                            Under Chapter VI of the Trade Marks Act, 1999, <strong>trademark licensing</strong> is an agreement whereby the trademark proprietor (Licensor) grants another commercial entity (Licensee) legal permission to use the trademark in commerce, subject to strict contractual conditions, territorial boundaries, and quality standards.
                                        </p>
                                        <p className="mb-6">
                                            Crucially, in a licensing arrangement, <strong>ownership, legal title, and underlying brand equity are NEVER transferred</strong>. The licensor remains the sole registered proprietor on the Trade Marks Register. In return for usage rights, the licensee typically pays an upfront franchise fee, ongoing percentage royalties, or reciprocal commercial consideration.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Exclusive License</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Grants rights solely to the licensee, excluding all other third parties and even prohibiting the licensor themselves from commercializing the mark in the designated territory or business vertical.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Sole License</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Grants usage rights to the licensee while allowing the licensor to continue using the trademark concurrently. However, the licensor cannot license the mark to any other third-party competitors.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Non-Exclusive License</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Allows the licensor to grant simultaneous usage rights to multiple licensees, franchisees, or distributors across different territories, maximizing market reach and recurring royalty inflows.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: REGISTERED VS PERMITTED USER */}
                                    <section id="registered-vs-permitted" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Registered User vs Permitted User
                                        </h2>
                                        <p className="mb-6">
                                            Indian trademark jurisprudence draws a sharp statutory distinction between a <strong>Registered User</strong> and a <strong>Permitted User</strong>. Understanding this distinction is vital when structuring franchising agreements or enforcing trademark rights against counterfeiters:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border border-indigo-200 bg-indigo-50/40 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-3 h-3 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Registered User (Section 49 Formal Registration)
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    A Registered User is a licensee who has been officially registered with the Trade Marks Registry by filing <strong>Form TM-U</strong>. Once registered, the user is recorded on the Register of Trade Marks.
                                                </p>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    <strong>Litigation Power Under Section 52:</strong> A Registered User has the statutory right to call upon the proprietor to institute proceedings for infringement. If the proprietor refuses or neglects to do so within <strong>three months</strong>, the Registered User can institute infringement proceedings in their own name, making the proprietor a co-defendant!
                                                </p>
                                            </div>

                                            <div className="border border-gray-200 bg-gray-50/60 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-3 h-3 bg-gray-600 rounded-full mr-2"></span>
                                                    Permitted User (Section 2(1)(r)(ii) Unregistered Licensee)
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    A Permitted User uses the registered mark under a written license agreement with the consent of the proprietor, but without recording their name on Form TM-U at the Trade Marks Registry.
                                                </p>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    <strong>Statutory Bar Under Section 53:</strong> Section 53 explicitly bars a permitted user from instituting infringement proceedings. Unregistered licensees cannot file trademark infringement lawsuits independently; all litigation must be instituted solely by the registered proprietor.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            Under Section 54, commercial use by either a Registered User or a permitted user is deemed to be use by the proprietor himself. This protects the registered trademark against cancellation for non-use under Section 47 of the Trade Marks Act, 1999.
                                        </p>
                                    </section>

                                    {/* SECTION 8: FORM TM-U LICENSING PROCEDURE */}
                                    <section id="form-tm-u-workflow" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-U Licensing Procedure
                                        </h2>
                                        <p className="mb-6">
                                            To officially record a licensee as a Registered User on the Trade Marks Register, the licensor and licensee must jointly file Form TM-U under Rule 86 of the Trade Marks Rules, 2017. The process requires specific statutory documentation:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">1. License Agreement Execution</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    A written Trademark License Agreement executed on non-judicial stamp paper, specifying exact goods/services, territorial limitations, royalty mechanics, and mandatory quality inspection mechanisms.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">2. Statutory Section 49 Affidavit</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    An affidavit signed by the proprietor exhibiting details of the commercial relationship, terms of payment, degree of quality control, and whether the proposed user is an exclusive or non-exclusive licensee.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">3. Form TM-U Online E-Filing</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Submission of Form TM-U on the IP India gateway with the statutory fee of ₹4,500 per mark per class, supported by corporate resolutions and Form TM-48 legal authorization.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">4. Journal Notification &amp; Entry</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    The Registrar examines the application to ensure it does not facilitate trademark trafficking, advertises the user entry in the Trade Marks Journal, and issues the official Registered User Entry.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: STAMP DUTY & FORMALITIES */}
                                    <section id="stamp-duty-formalities" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Stamp Duty &amp; Mandatory Formalities
                                        </h2>
                                        <p className="mb-6">
                                            One of the most frequent legal reasons trademark assignment applications encounter objections or are rejected in commercial courts is the failure to pay adequate state stamp duty. Intellectual property is legally classified as movable property, and deeds transferring title or licensing usage must comply with the Indian Stamp Act, 1899 or specific State Stamp Acts.
                                        </p>

                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 my-8 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-3">State Stamp Duty Rates for Trademark Assignment Deeds:</h3>
                                            <ul className="space-y-3 text-sm text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="font-bold text-[#6E5E93] mr-2">• Maharashtra:</span>
                                                    <span>Governed by Article 25 of the Maharashtra Stamp Act. Stamp duty on an assignment deed transferring movable property/goodwill is typically levied at <strong>3% to 5%</strong> ad valorem based on the market value or consideration.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="font-bold text-[#6E5E93] mr-2">• Delhi:</span>
                                                    <span>Under the Delhi Stamp Rules, assignment of intellectual property is assessed as a conveyance deed on consideration or value of the asset (commonly <strong>3% to 5%</strong> depending on whether goodwill is included).</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="font-bold text-[#6E5E93] mr-2">• Karnataka:</span>
                                                    <span>Article 20 of the Karnataka Stamp Act levies ad valorem conveyance duty on intellectual property assignments based on the declared consideration.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <p className="mb-6">
                                            <strong>Evidentiary Consequence of Inadequate Stamp Duty:</strong> Under Section 35 of the Indian Stamp Act, 1899, an unstamped or understamped instrument cannot be admitted in evidence for any purpose, nor can it be acted upon, registered, or authenticated by any public officer or court. If an assignee attempts to enforce a trademark against an infringer using an understamped deed, the court will impound the deed until the deficit duty and a statutory penalty (up to 10 times the deficit) are deposited!
                                        </p>
                                    </section>

                                    {/* SECTION 10: TAX AND GST LIABILITY */}
                                    <section id="tax-and-gst" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuilding} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Tax Implications &amp; GST Liability
                                        </h2>
                                        <p className="mb-6">
                                            Transferring trademark rights triggers immediate direct and indirect tax liabilities under Indian tax statutes. The tax treatment differs significantly between assignment and licensing:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="border border-purple-200 bg-purple-50/40 p-6 rounded-2xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Taxation on Trademark Assignment</h3>
                                                <ul className="space-y-2 text-xs text-gray-700">
                                                    <li><strong>Capital Gains Tax:</strong> Under Section 55(2)(a) of the Income Tax Act, 1961, self-generated trademarks have a deemed acquisition cost of NIL. The entire consideration received is taxed as Capital Gains (Short-Term or Long-Term based on 24-month holding period).</li>
                                                    <li><strong>GST Rate:</strong> Permanent transfer of intellectual property rights is treated as a supply of goods or services taxed at <strong>18% GST</strong>.</li>
                                                    <li><strong>Depreciation for Assignee:</strong> The assignee can claim depreciation on acquired intangible trademark assets at 25% under Section 32 of the Income Tax Act.</li>
                                                </ul>
                                            </div>

                                            <div className="border border-emerald-200 bg-emerald-50/40 p-6 rounded-2xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Taxation on Trademark Licensing</h3>
                                                <ul className="space-y-2 text-xs text-gray-700">
                                                    <li><strong>Revenue Income (Royalty):</strong> Royalties received by the licensor are treated as regular business income taxed at prevailing corporate or personal income tax rates.</li>
                                                    <li><strong>TDS Deductions:</strong> The licensee must deduct Tax Deducted at Source (TDS) under Section 194J at <strong>10% or 2%</strong> upon royalty payouts.</li>
                                                    <li><strong>GST on Services:</strong> Licensing services attract <strong>18% GST</strong>, payable by the licensor or via Reverse Charge Mechanism (RCM) if licensing from a foreign entity.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: NAKED LICENSING PITFALLS */}
                                    <section id="naked-licensing-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Common Pitfalls &amp; Naked Licensing
                                        </h2>
                                        <p className="mb-6">
                                            When transferring or licensing brand rights in India, business owners frequently commit procedural and strategic mistakes that compromise their legal exclusivity:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border border-red-200 bg-red-50/50 p-6 rounded-2xl">
                                                <h3 className="text-base font-black text-red-900 mb-2">1. Naked Licensing (Failure of Quality Control)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The primary legal purpose of a trademark is to guarantee the source and consistent quality of goods to consumers. If a licensor licenses a mark without active inspection, audit rights, and technical standards enforcement, the law deems this &ldquo;naked licensing.&rdquo; Indian courts hold that uncontrolled licensing destroys the mark&apos;s distinctiveness, deceiving consumers and rendering the registration liable to cancellation under Section 57.
                                                </p>
                                            </div>

                                            <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl">
                                                <h3 className="text-base font-black text-amber-900 mb-2">2. Section 40 &amp; 41 Anti-Fragmentation Violations</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Section 40 prohibits assignments that create multiple exclusive rights in different persons for identical or confusingly similar goods. Section 41 restricts territorial splitting within India. Any assignment deed that creates confusing market fragmentation will be refused registration by the Registrar.
                                                </p>
                                            </div>

                                            <div className="border border-gray-200 bg-gray-50 p-6 rounded-2xl">
                                                <h3 className="text-base font-black text-gray-900 mb-2">3. Unregistered Licensees Attempting Infringement Litigation</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Many franchisees or distributors attempt to file trademark infringement suits against local counterfeiters. However, under Section 53, an unregistered licensee has no locus standi to sue. All infringement suits filed without joining the registered proprietor or registering on Form TM-U are summarily dismissed.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: DECISION MATRIX */}
                                    <section id="decision-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Decision Matrix for Brand Owners
                                        </h2>
                                        <p className="mb-6">
                                            To determine whether your enterprise should execute a Trademark Assignment or Trademark License, apply this practical commercial decision framework:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 border border-purple-200 p-6 rounded-2xl">
                                                <h3 className="text-base font-bold text-[#6E5E93] mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Choose Trademark Assignment When:
                                                </h3>
                                                <ul className="space-y-2 text-xs text-gray-700">
                                                    <li>• Executing a complete corporate M&amp;A, slump sale, or business buyout.</li>
                                                    <li>• Exiting a brand completely to realize maximum upfront lump-sum capital.</li>
                                                    <li>• Reorganizing group holding structures (assigning IP from individual promoters to an operating company or LLP).</li>
                                                    <li>• Selling off non-core product verticals (e.g. single-class brand assets as discussed in our <Link href="/single-class-vs-multi-class-trademark-application-india" className="text-[#6E5E93] hover:underline font-bold">single vs multi-class trademark guide</Link>).</li>
                                                    <li>• Resolving brand dispute settlements with complete ownership severance.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-emerald-50/60 border border-emerald-200 p-6 rounded-2xl">
                                                <h3 className="text-base font-bold text-emerald-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full mr-2"></span>
                                                    Choose Trademark Licensing When:
                                                </h3>
                                                <ul className="space-y-2 text-xs text-gray-700">
                                                    <li>• Expanding rapidly through franchising networks (QSRs, gyms, retail chains).</li>
                                                    <li>• Generating predictable, long-term recurring royalty cash flows.</li>
                                                    <li>• Authorizing contract manufacturers, white-labelers, or regional distributors.</li>
                                                    <li>• Licensing brand marks to foreign subsidiaries while keeping Indian IP centralized.</li>
                                                    <li>• Preserving complete long-term ownership equity and brand control.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 13: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <p className="mb-6">
                                            Explore answers to the most critical legal and commercial queries regarding trademark assignment and licensing under Indian law:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                    <h3 className="text-base font-bold text-gray-900 mb-3 flex items-start">
                                                        <span className="text-[#6E5E93] font-black mr-2">Q{index + 1}:</span>
                                                        <span>{faq.question}</span>
                                                    </h3>
                                                    <p className="text-sm text-gray-700 leading-relaxed m-0 pl-6 border-l-2 border-purple-100">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 14: STRATEGIC ADVICE */}
                                    <section id="strategic-advice" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Strategic Legal Recommendations
                                        </h2>
                                        <p className="mb-6">
                                            Transferring intellectual property brand rights is among the most consequential transactions in the lifecycle of any commercial enterprise. Executing an unvetted agreement or failing to record instruments on the official IP India register can irrevocably damage your asset valuation and leave your business defenseless against infringers.
                                        </p>
                                        <p className="mb-6">
                                            Always partner with certified trademark attorneys to conduct due diligence, adjudicate correct state stamp duty, incorporate stringent quality control covenants, and file Form TM-P or Form TM-U within statutory timelines. Prior to drafting transfer agreements, ensure your logos and device marks comply with proper classifications and <Link href="/vienna-code-search-for-logo-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Vienna code search standards</Link> to ensure undisputed brand boundaries.
                                        </p>

                                        <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-[#0C002B] p-8 text-white shadow-2xl border border-white/10 sm:p-12">
                                            <div className="text-center">
                                                <h3 className="text-2xl font-black sm:text-3xl text-white mb-4">
                                                    Transfer Your Brand Rights with Legal Certainty
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Partner with expert IP attorneys at IPR Karo to structure your trademark assignment or licensing transaction. From due diligence and stamp duty adjudication to Form TM-P and Form TM-U recording on the IP India portal.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Transfer Rights Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified IP Advocates • Form TM-P &amp; TM-U Filing • Complete Stamp Duty Compliance
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand asset commercialization, trademark assignment due diligence, licensing agreements, and portfolio monetization under the Trade Marks Act, 1999.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Transfer Brand Rights</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Safeguard your title with bulletproof assignment deeds and Form TM-P or Form TM-U e-filing.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        E-File Form TM-P / TM-U
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Single vs Multi</span>
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
                                        <Link href="/how-to-renew-a-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRotate} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Renewal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Status Check</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">User Affidavit</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vienna-code-search-for-logo-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Vienna Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faListUl} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Filing Steps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/international-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Global TM</span>
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
