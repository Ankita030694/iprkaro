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
    faGavel,
    faFileLines,
    faStamp,
    faReceipt,
    faBuilding,
    faCalendarCheck,
    faFolderOpen,
    faSignature
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark User Affidavit Format & Rules in India | Rule 25",
    description: validateAndNormalizeDescription(
        "Master the Trademark User Affidavit format and rules in India under Rule 25. Learn prior use claims, stamp duty, notarization, and acceptable invoice proofs.",
        "app/trademark-user-affidavit-format-and-rules-india/page.tsx"
    ),
    keywords: [
        "trademark user affidavit format india",
        "user affidavit rule 25 trade marks rules 2017",
        "prior use claim trademark india stamp paper",
        "user affidavit documentary evidence",
        "section 34 trade marks act prior user",
        "trademark user affidavit notarization",
        "form tm a user date proof",
        "trademark turnover certificate ca format",
        "trademark user affidavit sample draft",
        "prior user vs proposed to be used"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-user-affidavit-format-and-rules-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark User Affidavit Format & Rules in India | Rule 25",
        description: "Master the Trademark User Affidavit format and rules in India under Rule 25. Learn prior use claims, stamp duty, notarization, and acceptable invoice proofs.",
        url: "https://www.iprkaro.com/trademark-user-affidavit-format-and-rules-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-user-affidavit-format-and-rules-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark User Affidavit Format and Rules in India Rule 25 Compliance Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark User Affidavit Format & Rules in India | Rule 25",
        description: "Master the Trademark User Affidavit format and rules in India under Rule 25. Learn prior use claims, stamp duty, notarization, and acceptable invoice proofs.",
        images: ["https://www.iprkaro.com/images/og/trademark-user-affidavit-format-and-rules-india.jpg"],
    }
};

const faqs = [
    {
        question: "What is a Trademark User Affidavit under Rule 25 in India?",
        answer: "A Trademark User Affidavit is a formal sworn statement executed on non-judicial stamp paper under Rule 25 of the Trade Marks Rules, 2017. It is mandatory whenever an applicant claims that their trademark has been in commercial use in India before the date of filing Form TM-A, rather than applying on a 'Proposed to be used' basis. The affidavit establishes the exact date of first use and includes documentary proof such as tax invoices, sales figures, and advertising records."
    },
    {
        question: "Is a User Affidavit mandatory for all trademark applications in India?",
        answer: "No. A User Affidavit is only mandatory if you claim a specific prior use date (e.g., 'Continuous use since 15/04/2019') in Form TM-A. If you file the application as 'Proposed to be used' (meaning you intend to use the mark in the future but have not conducted commercial sales yet), no user affidavit or historical documentary evidence is required at the time of initial filing."
    },
    {
        question: "What is the legal difference between 'Prior Use' and 'Proposed to be Used'?",
        answer: "Under Indian trademark law, rights are primarily established on a 'first-to-use' common-law principle rather than purely 'first-to-file'. Claiming a valid prior use date under Section 34 grants senior rights over subsequent filers, helps overcome Section 9 descriptive objections through acquired distinctiveness, and defeats Section 11 conflicting mark citations. 'Proposed to be used' applications establish priority solely from their application filing date."
    },
    {
        question: "What documents are accepted as valid proof of prior trademark use?",
        answer: "The Trade Marks Registry accepts dated GST/VAT tax invoices clearly displaying the trademark name, audited turnover certificates issued by a Chartered Accountant, bills of lading, purchase orders, packaging labels showing the brand name, domain registration WHOIS records, timestamped social media promotions, print media advertisements, and bank statements reflecting commercial transactions under the brand."
    },
    {
        question: "How much stamp paper value is required for a Trademark User Affidavit?",
        answer: "The stamp paper value is determined by the state stamp act where the affidavit is executed. In most Indian states—including Delhi, Maharashtra, Karnataka, Tamil Nadu, Uttar Pradesh, and Haryana—a Non-Judicial Stamp Paper (or e-stamp certificate) of ₹100 is standard and legally accepted. In some jurisdictions, ₹50 stamp paper is also valid, but ₹100 is universally recommended to prevent formality check objections."
    },
    {
        question: "Can I claim a prior use date before my company was incorporated?",
        answer: "Yes, but only if the brand was originally adopted and used by the founder as a sole proprietor or partnership before incorporation. In such cases, the company must execute and place on record a formal Trademark Assignment Deed or Business Transfer Agreement transferring the prior use rights and accumulated goodwill from the promoter/individual to the newly incorporated Private Limited company or LLP."
    },
    {
        question: "What happens if the date on my invoices does not match the claimed use date?",
        answer: "If the oldest documentary proof (such as a tax invoice) bears a date later than the date claimed in Form TM-A, the Trade Marks Registry will issue a Formality Check Fail notice or an Examination Objection. The applicant will either have to produce earlier corroborated evidence matching the claimed date or file Form TM-M with statutory fees to amend the user date to the earliest verifiable invoice date."
    },
    {
        question: "Can I submit the User Affidavit after filing Form TM-A if I forgot to upload it?",
        answer: "If you claimed prior use in Form TM-A but failed to attach the User Affidavit at the time of e-filing, the registry will issue a Formality Check Fail status. You can cure this defect by uploading the duly executed, stamped, and notarized User Affidavit along with supporting exhibits via the IP India portal under Form TM-M or through a formal formality compliance reply within 30 days."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Rule 25" },
    { id: "what-is-user-affidavit", title: "What is a User Affidavit?" },
    { id: "prior-use-vs-proposed", title: "Prior Use vs Proposed Use" },
    { id: "affidavit-format-structure", title: "Format & Statutory Structure" },
    { id: "sample-draft-format", title: "Sample Affidavit Draft" },
    { id: "stamp-paper-notarization", title: "Stamp Paper & Notary Rules" },
    { id: "acceptable-evidence", title: "Acceptable Evidentiary Proofs" },
    { id: "step-by-step-filing", title: "7-Step Filing Workflow" },
    { id: "common-mistakes", title: "Common Pitfalls to Avoid" },
    { id: "checklist", title: "Pre-Filing Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function TrademarkUserAffidavitPage() {
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
        "headline": "Trademark User Affidavit Format & Rules in India: Claiming Prior Use Date",
        "description": "Master the Trademark User Affidavit format and rules in India under Rule 25. Learn prior use claims, stamp duty, notarization, and acceptable invoice proofs.",
        "image": "https://www.iprkaro.com/images/og/trademark-user-affidavit-format-and-rules-india.png",
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
            "@id": "https://www.iprkaro.com/trademark-user-affidavit-format-and-rules-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark User Affidavit Format & Rules in India | Rule 25",
        "url": "https://www.iprkaro.com/trademark-user-affidavit-format-and-rules-india",
        "description": "Master the Trademark User Affidavit format and rules in India under Rule 25. Learn prior use claims, stamp duty, notarization, and acceptable invoice proofs.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-user-affidavit-format-and-rules-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-user-affidavit-format-and-rules-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark User Affidavit Format & Rules", "item": "https://www.iprkaro.com/trademark-user-affidavit-format-and-rules-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7 Steps to Execute and File a Trademark User Affidavit in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Establishing the Exact Prior Use Date and Gathering Invoices" },
            { "@type": "ListItem", "position": 2, "name": "Compiling CA Certified Turnover and Marketing Spend Certificates" },
            { "@type": "ListItem", "position": 3, "name": "Drafting the Statutory User Affidavit under Rule 25" },
            { "@type": "ListItem", "position": 4, "name": "Purchasing Non-Judicial Stamp Paper and Legal Execution" },
            { "@type": "ListItem", "position": 5, "name": "Notarization by an Authorized Notary Public" },
            { "@type": "ListItem", "position": 6, "name": "Digitizing and Attaching Exhibits with Form TM-A" },
            { "@type": "ListItem", "position": 7, "name": "Responding to Registry Formality Checks and Examination" }
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
                                <FontAwesomeIcon icon={faStamp} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Rule 25 Legal Compliance</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark User Affidavit: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Format, Rules &amp; Prior Use Claims</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Claiming a prior use date in your trademark application provides immense statutory advantage under Indian common-law jurisprudence. Under Rule 25 of the Trade Marks Rules, 2017, whenever an applicant claims continuous commercial use preceding the filing date of Form TM-A, submitting a sworn User Affidavit on Non-Judicial Stamp Paper accompanied by verifiable documentary evidence is mandatory. Discover the statutory affidavit format, state-wise stamp paper values, acceptable invoice proofs, CA turnover rules, and procedural strategies to secure unbroken brand seniority.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Draft</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Prior Use Trademark Now <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/trademark-user-affidavit-format-and-rules-india.png"
                                    alt="Trademark User Affidavit Format and Rules in India Rule 25 Stamp Paper Notarization Guide"
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
                        { label: "Trademark User Affidavit Format & Rules", href: "/trademark-user-affidavit-format-and-rules-india" }
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div></summary><div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70"><nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{tocSections.map((section, idx) => (<a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                ><span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span><span className="truncate">{section.title}</span></a>))}</nav></div></details></div><div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content"><article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal"><div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose"><img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" /><div><p className="text-sm font-bold text-gray-900 m-0">Written by<Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & RULE 25 */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Rule 25 &amp; Prior Use in India
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Under Rule 25 of the Trade Marks Rules, 2017, any trademark applicant claiming prior commercial use of a brand before the filing date on Form TM-A must submit a formal User Affidavit executed on Non-Judicial Stamp Paper (typically ₹100), duly notarized, along with documentary evidence such as earliest dated tax invoices, CA turnover certificates, and packaging proofs. Establishing prior use provides unassailable seniority under Section 34 of the Trade Marks Act, 1999 over rival claimants.</p>
                                        </div>

                                        <p className="mb-6">India adheres firmly to the common-law principle of<strong>&ldquo;First to Use&rdquo;</strong>over &ldquo;First to File&rdquo;. Unlike pure registration-based jurisdictions where ownership belongs exclusively to whoever rushes to the registry counter first, Indian intellectual property jurisprudence prioritizes the entity that first adopted and continuously used the trademark in commercial trade.</p>
                                        <p className="mb-6">Codified under<strong>Section 34 of the Trade Marks Act, 1999 (Saving for vested rights)</strong>, a registered trademark proprietor cannot restrain or interfere with the continuous prior use of an identical or similar mark by a senior user. However, claiming this legal shield during the<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration process</Link>is not a matter of mere verbal declaration; it demands strict statutory compliance through a sworn<strong>User Affidavit</strong>under Rule 25(1).</p>
                                        <p className="mb-6">If an applicant claims a prior use date without furnishing the mandatory affidavit and exhibits, the Trade Marks Registry will immediately place the application under a<em>&ldquo;Formality Check Fail&rdquo;</em>status or issue severe examination objections under Section 9 and Section 11, jeopardizing months of procedural progress.</p>
                                    </section>

                                    {/* SECTION 2: WHAT IS A USER AFFIDAVIT */}
                                    <section id="what-is-user-affidavit" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What is a Trademark User Affidavit?
                                        </h3>
                                        <p className="mb-6">A<strong>Trademark User Affidavit</strong>is an official legal instrument sworn by the proprietor, partner, or authorized director of the applicant business. It acts as sworn testimony under oath attesting to the precise historical facts surrounding the adoption, continuous commercial exploitation, geographic spread, sales volume, and promotional expenditure of the brand.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Rule 25(1) Statutory Mandate
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Rule 25(1) of Trade Marks Rules, 2017 stipulates:<em>&ldquo;An application to register a trade mark shall specify the user date. In case the use of the trade mark is claimed before the date of application, the applicant shall file an affidavit testifying to such user with supporting documents.&rdquo;</em></p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Section 34 Prior User Shield
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Section 34 shields prior users from infringement lawsuits filed by subsequent registrants. The user affidavit establishes the foundational documentary paper trail necessary to prove continuous prior adoption in commercial litigation.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faReceipt} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Overcoming Section 9 Inherent Weakness
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Under the proviso to Section 9(1), weakly distinctive or suggestive marks can achieve registration if the user affidavit proves they have acquired secondary meaning and distinctive character through prolonged commercial use.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Honest Concurrent Use (Section 12)
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If a similar mark is cited during examination under Section 11, a robust user affidavit enables counsel to argue honest concurrent adoption under Section 12. This allows co-existence on the Trade Marks Register.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: PRIOR USE VS PROPOSED TO BE USED */}
                                    <section id="prior-use-vs-proposed" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Prior Use vs Proposed to be Used: Comparison
                                        </h3>
                                        <p className="mb-6">When drafting Form TM-A, applicants must choose between two distinct legal paths: claiming a specific historical user date or applying on a &ldquo;Proposed to be used&rdquo; basis. Compare the strategic and compliance implications:</p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 bg-white text-left text-sm">
                                                <thead className="bg-gray-50 font-bold text-gray-900">
                                                    <tr>
                                                        <th className="px-5 py-4 border-b">Feature / Parameter</th>
                                                        <th className="px-5 py-4 border-b text-[#6E5E93]">Prior Use Claim (With Affidavit)</th>
                                                        <th className="px-5 py-4 border-b text-gray-700">Proposed to be Used</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Legal Basis</td>
                                                        <td className="px-5 py-4">Rule 25(1) &amp; Section 34 continuous use</td>
                                                        <td className="px-5 py-4">Section 18(1) bona fide intention to use</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Affidavit Requirement</td>
                                                        <td className="px-5 py-4 text-green-700 font-bold">Mandatory on Stamp Paper + Notary</td>
                                                        <td className="px-5 py-4 text-gray-500 font-semibold">Not Required</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Documentary Evidence</td>
                                                        <td className="px-5 py-4 text-green-700 font-bold">Invoices, CA Certificate, Media Proofs</td>
                                                        <td className="px-5 py-4 text-gray-500 font-semibold">Zero documentation required</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Seniority Date</td>
                                                        <td className="px-5 py-4 font-medium text-purple-900">Backdated to claimed date of first use</td>
                                                        <td className="px-5 py-4">Application submission timestamp only</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Section 9 Objection Defense</td>
                                                        <td className="px-5 py-4 text-green-700 font-semibold">High (Proves acquired distinctiveness)</td>
                                                        <td className="px-5 py-4 text-red-600 font-semibold">Low (Mark must be inherently distinct)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Opposition Defense (Section 11)</td>
                                                        <td className="px-5 py-4 text-green-700 font-semibold">Stronger (Defeats younger registrants)</td>
                                                        <td className="px-5 py-4 text-amber-600 font-semibold">Vulnerable to earlier filers</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Statutory Government Fee</td>
                                                        <td className="px-5 py-4">&#8377;4,500 (Startup/MSME) / &#8377;9,000</td>
                                                        <td className="px-5 py-4">&#8377;4,500 (Startup/MSME) / &#8377;9,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 4: STATUTORY AFFIDAVIT STRUCTURE */}
                                    <section id="affidavit-format-structure" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Structure of a User Affidavit
                                        </h3>
                                        <p className="mb-6">The Trade Marks Registry requires affidavits to follow a precise legal hierarchy. Submitting an informal letter or unsworn declaration will lead to summary rejection. A valid Rule 25 User Affidavit consists of eight essential statutory segments:</p>

                                        <div className="space-y-6 not-prose mb-8">
                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">1</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Cause Title &amp; Registry Forum</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">Must specify the appropriate Trade Marks Registry jurisdiction (e.g., &ldquo;BEFORE THE REGISTRAR OF TRADE MARKS, NEW DELHI / MUMBAI / CHENNAI / KOLKATA / AHMEDABAD&rdquo;) along with the pending Application Number, Mark name, and registered Class.</p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">2</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Deponent Identification &amp; Authority</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">The deponent must clearly state their full legal name, father&apos;s name, age, residential address, and capacity (e.g., Sole Proprietor, Managing Partner, or Director authorized via Board Resolution dated DD/MM/YYYY).</p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">3</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Specific Prior Use Date Declaration</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">The date of first adoption and commercial use must be declared in exact DD/MM/YYYY format. Vague declarations like &ldquo;since 2018&rdquo; or &ldquo;for the last 5 years&rdquo; violate Rule 25 and trigger formality objections.</p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">4</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Turnover &amp; Sales Breakdown Table</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">An annual financial-year breakdown of revenue generated under the brand name from the inception date to the filing year, cross-referenced with an attached CA Turnover Certificate.</p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">5</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Advertising &amp; Publicity Spends</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">Financial breakdown of marketing, digital advertising, print publicity, and exhibition expenditures deployed to popularize the brand in Indian commerce.</p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">6</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Schedule of Exhibited Documents (Annexures)</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">Explicit index of attached documentary proof: Annexure A (Earliest Invoices), Annexure B (CA Certificate), Annexure C (Domain WHOIS / Website Proofs), Annexure D (Product Labels), and Annexure E (Media Advertisements).</p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">7</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Verification &amp; Truthfulness Clause</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">Statutory affirmation certifying that the contents of paragraphs 1 to 8 are true and correct to the personal knowledge and official records of the deponent, and nothing material has been concealed.</p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">8</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Notary Attestation &amp; Official Seal</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">Execution signature of deponent accompanied by the official stamp, registration number, signature, and Notarial Seal of an authorized Notary Public or Oath Commissioner.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: SAMPLE AFFIDAVIT DRAFT */}
                                    <section id="sample-draft-format" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileLines} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Sample Trademark User Affidavit Draft Format
                                        </h3>
                                        <p className="mb-6">Below is a standardized legal draft template for a Trademark User Affidavit in India under Rule 25 of Trade Marks Rules, 2017. This template can be adapted for Sole Proprietorships, Partnerships, LLPs, or Private Limited Companies:</p>

                                        <div className="bg-slate-900 text-slate-100 p-6 md:p-8 rounded-2xl font-mono text-xs md:text-sm leading-relaxed overflow-x-auto shadow-xl not-prose mb-8">
                                            <div className="text-center font-bold pb-4 border-b border-slate-700 text-purple-300">
                                                [ON NON-JUDICIAL STAMP PAPER OF ₹100/- DULY NOTARIZED]
                                            </div>
                                            <div className="my-4 text-center font-bold text-amber-300">
                                                BEFORE THE REGISTRAR OF TRADE MARKS, [BRANCH NAME]<br />
                                                TRADE MARKS REGISTRY, GOVERNMENT OF INDIA
                                            </div>
                                            <div className="my-4 pb-4 border-b border-slate-700">
                                                <strong>IN THE MATTER OF:</strong><br />
                                                Trade Mark Application No.: <strong>[APPLICATION NUMBER]</strong><br />
                                                Word / Device Mark: <strong>&ldquo;[BRAND NAME]&rdquo;</strong><br />
                                                In Class: <strong>[NICE CLASS NUMBER]</strong><br />
                                                Applicant: <strong>[APPLICANT ENTITY NAME]</strong>
                                            </div>
                                            <div className="text-center font-bold my-4 text-purple-300">
                                                AFFIDAVIT OF USER UNDER RULE 25 OF TRADE MARKS RULES, 2017
                                            </div>
                                            <p className="my-3">I,<strong>[Deponent Full Name]</strong>, S/o<strong>[Father&apos;s Name]</strong>, aged about<strong>[Age]</strong>years, residing at<strong>[Residential Address]</strong>, do hereby solemnly affirm and state on oath as under:</p>
                                            <p className="my-3">1. That I am the<strong>[Director / Partner / Sole Proprietor]</strong>of<strong>M/s [Applicant Entity Name]</strong>having its principal place of business at<strong>[Registered Office Address]</strong>, and I am fully conversant with the facts and competent to depose this affidavit on behalf of the Applicant.</p>
                                            <p className="my-3">2. That the Applicant adopted the trademark<strong>&ldquo;[BRAND NAME]&rdquo;</strong>honestly and bona fide for<strong>[Detailed Description of Goods/Services]</strong>falling in Class<strong>[Class]</strong>on<strong>[DD/MM/YYYY]</strong>.</p>
                                            <p className="my-3">3. That the Applicant has been continuously, extensively, and uninterruptedly using the said trade mark<strong>&ldquo;[BRAND NAME]&rdquo;</strong>in India commercially since<strong>[Exact Date of First Use: DD/MM/YYYY]</strong>up to the present date without any abandonment or interruption.</p>
                                            <p className="my-3">4. That in support of the claimed prior use since<strong>[DD/MM/YYYY]</strong>, copies of the earliest tax invoices, purchase orders, and sales receipts bearing the mark are annexed herewith as<strong>ANNEXURE-A (Colly)</strong>.</p>
                                            <p className="my-3">5. That the annual commercial turnover figures generated by the Applicant under the said trade mark<strong>&ldquo;[BRAND NAME]&rdquo;</strong>in India are as follows:</p>
                                            <div className="bg-slate-800 p-4 rounded-xl my-3 text-xs">
                                                Financial Year 2021-22: ₹ [Turnover Amount in INR]<br />
                                                Financial Year 2022-23: ₹ [Turnover Amount in INR]<br />
                                                Financial Year 2023-24: ₹ [Turnover Amount in INR]<br />
                                                Financial Year 2024-25: ₹ [Turnover Amount in INR]<br />
                                                A copy of the CA Certified Sales Turnover Certificate is annexed as <strong>ANNEXURE-B</strong>.
                                            </div>
                                            <p className="my-3">6. That the Applicant has expended substantial capital towards advertising, digital marketing, website hosting, and publicizing the brand throughout India. Copies of marketing invoices and media clippings are annexed as<strong>ANNEXURE-C</strong>.</p>
                                            <p className="my-3">7. That specimen product packaging, labels, promotional brochures, and domain WHOIS records displaying the mark are annexed herewith as<strong>ANNEXURE-D</strong>.</p>
                                            <p className="my-3">8. That on account of long, continuous, and widespread use, the trade mark<strong>&ldquo;[BRAND NAME]&rdquo;</strong>has acquired distinctiveness and secondary meaning, identifying the goods/services exclusively with the Applicant.</p>
                                            <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-end">
                                                <div>
                                                    Place: [City Name]<br />
                                                    Date: [DD/MM/YYYY]
                                                </div>
                                                <div className="text-right">
                                                    __________________________<br />
                                                    <strong>DEPONENT</strong><br />
                                                    (Authorized Signatory)
                                                </div>
                                            </div>
                                            <div className="mt-8 pt-4 border-t border-slate-700">
                                                <div className="text-center font-bold text-amber-300 mb-2">VERIFICATION</div>
                                                <p className="text-xs">I, the deponent abovenamed, do hereby verify that the contents of paragraphs 1 to 8 of this affidavit are true and correct to the best of my personal knowledge and derived from the official books of account of the Applicant. No part of it is false and nothing material has been concealed therefrom.</p>
                                                <div className="mt-4 flex justify-between items-end">
                                                    <div>Verified at [City] on [DD/MM/YYYY]</div>
                                                    <div className="text-right">
                                                        __________________________<br />
                                                        <strong>DEPONENT</strong>
                                                    </div>
                                                </div>
                                                <div className="mt-6 p-3 bg-slate-800/80 rounded border border-slate-700 text-center text-xs text-purple-200">
                                                    [NOTARY PUBLIC SEAL, REGISTRATION NUMBER, AND SIGNATURE]
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-500 italic">Note: Ensure all annexed documents are marked clearly with corresponding exhibit letters (Annexure A, B, C, etc.) and carry the initial or signature of the deponent.</p>
                                    </section>

                                    {/* SECTION 6: STAMP PAPER & NOTARIZATION RULES */}
                                    <section id="stamp-paper-notarization" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Stamp Paper Values &amp; Notarization Rules
                                        </h3>
                                        <p className="mb-6">Under the Indian Stamp Act, 1899 and state-specific stamp schedules, an affidavit executed for quasi-judicial proceedings before the Trade Marks Registry must carry requisite stamp duty. The stamp duty varies across states:</p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 bg-white text-left text-sm">
                                                <thead className="bg-gray-50 font-bold text-gray-900">
                                                    <tr>
                                                        <th className="px-5 py-4 border-b">State / Union Territory</th>
                                                        <th className="px-5 py-4 border-b text-[#6E5E93]">Recommended Stamp Value</th>
                                                        <th className="px-5 py-4 border-b">Accepted Format</th>
                                                        <th className="px-5 py-4 border-b">Legal Governing Stamp Act</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Delhi (NCT)</td>
                                                        <td className="px-5 py-4 font-bold text-green-700">&#8377;100 / &#8377;50</td>
                                                        <td className="px-5 py-4">SHCIL E-Stamp Paper</td>
                                                        <td className="px-5 py-4">Delhi Stamp Rules / Schedule I-A</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Maharashtra (Mumbai)</td>
                                                        <td className="px-5 py-4 font-bold text-green-700">&#8377;100 / &#8377;500</td>
                                                        <td className="px-5 py-4">e-SBTR / Physical Stamp Paper</td>
                                                        <td className="px-5 py-4">Maharashtra Stamp Act (Article 4)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Karnataka (Bengaluru)</td>
                                                        <td className="px-5 py-4 font-bold text-green-700">&#8377;100 / &#8377;50</td>
                                                        <td className="px-5 py-4">SHCIL E-Stamp Certificate</td>
                                                        <td className="px-5 py-4">Karnataka Stamp Act, 1957</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Tamil Nadu (Chennai)</td>
                                                        <td className="px-5 py-4 font-bold text-green-700">&#8377;100 / &#8377;50</td>
                                                        <td className="px-5 py-4">Physical Non-Judicial Stamp</td>
                                                        <td className="px-5 py-4">Tamil Nadu Stamp Act, 1899</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Uttar Pradesh (Noida/Ghaziabad)</td>
                                                        <td className="px-5 py-4 font-bold text-green-700">&#8377;100</td>
                                                        <td className="px-5 py-4">E-Stamp Paper</td>
                                                        <td className="px-5 py-4">UP Stamp Act (Schedule I-B)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">West Bengal (Kolkata)</td>
                                                        <td className="px-5 py-4 font-bold text-green-700">&#8377;100 / &#8377;50</td>
                                                        <td className="px-5 py-4">Non-Judicial Stamp Paper</td>
                                                        <td className="px-5 py-4">Indian Stamp (WB Amendment) Act</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6 not-prose">
                                            <p className="text-sm text-amber-950 m-0 font-medium"><strong>Notarization Best Practice:</strong>Always ensure the Notary Public affixes their serial entry number, notary registration seal, and date stamp. An unnotarized affidavit or one lacking official notary credentials is treated as invalid under the Indian Evidence Act, triggering immediate registry scrutiny.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 7: ACCEPTABLE EVIDENTIARY PROOFS */}
                                    <section id="acceptable-evidence" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFolderOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Acceptable Documentary Evidentiary Proofs
                                        </h3>
                                        <p className="mb-6">The Trade Marks Examiner scrutinizes the evidentiary exhibits annexed to your Rule 25 affidavit. High-quality, dated, and unassailable documentary evidence includes:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faReceipt} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    1. Earliest Tax &amp; GST Invoices
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Dated GST/VAT invoices matching or immediately following the claimed use date. The invoice description must explicitly mention the brand name or product line.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faBuilding} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    2. CA Certified Turnover Certificate
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">An audited certificate issued by an independent Chartered Accountant stating annual sales revenue and marketing expenses specifically generated under the trademark with UDIN.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    3. Domain WHOIS &amp; Website Proofs
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Domain registration certificates (WHOIS timestamp records), Wayback Machine internet archive captures, and e-commerce seller dashboard screenshots.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    4. Commercial Agreements &amp; POs
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Distribution agreements, supply contracts, customer purchase orders, and export bills of lading demonstrating interstate or international trade.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: 7-STEP FILING WORKFLOW */}
                                    <section id="step-by-step-filing" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step User Affidavit Filing Workflow
                                        </h3>
                                        <p className="mb-6">To ensure seamless acceptance without registry objections, follow this 7-step statutory workflow:</p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Date Audit</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Audit Historical Evidence and Fix Exact User Date</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Review your historical business archives to identify the single oldest verifiable commercial invoice or domain registration record. Do not guess a date; your user claim must be anchored to concrete documentary proof.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Confirm that the mark was not used earlier by an unregistered predecessor entity without a valid Assignment Deed. You can verify whether any similar marks were registered during this window by conducting a comprehensive<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>.</p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Financial Collation</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Collate CA Certified Turnover and Promotional Spends</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Engage your Chartered Accountant to draft an official Turnover &amp; Advertising Certificate on their professional letterhead, certifying annual revenue figures specifically generated under the trademark.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Ensure the certificate includes the Chartered Accountant&apos;s Membership Number and statutory Unique Document Identification Number (UDIN) for digital verification by registry examiners.</p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Legal Drafting</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Draft Statutory User Affidavit under Rule 25</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Draft the complete affidavit strictly conforming to the 8-part statutory structure outlined above. Incorporate exact deponent details, continuous prior use dates, class descriptions using our<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>, and the schedule of annexures.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Review the wording carefully to ensure that it aligns with whether you are filing a Word Mark or a Device Mark under our<Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark vs device mark strategy</Link>.</p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Stamp Duty</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Execute on Non-Judicial Stamp Paper (₹100)</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Print the drafted affidavit on appropriate Non-Judicial Stamp Paper or attach it to an official Stock Holding Corporation (SHCIL) e-stamp certificate of ₹100 value.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">The authorized deponent must sign all pages of the affidavit and initial every attached documentary exhibit.</p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Notarization</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Notarize before Authorized Notary Public</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Present the executed affidavit before an authorized Notary Public or Oath Commissioner in your jurisdiction.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">The Notary will verify deponent identity, record the entry in their register, apply the official notary stamp and signature, and affix the required notarial adhesive revenue stamps.</p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: E-Filing Attachment</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Upload with Form TM-A on IP India Portal</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Digitize the notarized affidavit and all supporting annexures into an optimized, high-resolution PDF document.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">During online e-filing of Form TM-A, select &ldquo;User claim date&rdquo;, enter the exact DD/MM/YYYY date, and upload the combined PDF under the mandatory &ldquo;User Affidavit&rdquo. Attachment section using a Class 3 Digital Signature Certificate.</p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Examination &amp; Approval</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Monitor Examination and Defend Prior Use</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Track the electronic status of your application. When the examination report is issued, your trademark attorney can cite your Rule 25 affidavit to defeat cited marks. If objections arise, refer to our comprehensive guide on<Link href="/how-to-respond-to-trademark-examination-report" className="text-[rgb(110,94,147)] hover:underline font-medium">how to respond to trademark examination report</Link>and<Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objection</Link>.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Once accepted and advertised in the Trade Marks Journal, your verified prior user date stands as unassailable statutory proof of seniority.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 9: COMMON PITFALLS TO AVOID */}
                                    <section id="common-mistakes" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common User Affidavit Pitfalls to Avoid
                                        </h3>
                                        <p className="mb-6">Overlooking procedural formalities when preparing a Rule 25 affidavit can cause fatal rejections. Avoid these 4 critical mistakes:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">1. Claiming Use Dates Prior to Company Incorporation without Assignment</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If your Private Limited company was incorporated on 01/01/2022, you cannot directly claim use &ldquo;since 2018&rdquo. Under the company name unless you execute and file a formal Trademark Assignment Deed transferring the founder&apos;s prior individual rights to the corporate entity.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">2. Attaching Invoices Lacking the Brand Name or Trademark Logo</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Submitting general company sales invoices that mention product categories (e.g. &ldquo;Cotton Shirts&rdquo;) without explicitly displaying the trademark name (e.g. &ldquo;BrandX Cotton Shirts&rdquo;) will be rejected by the examiner as inconclusive proof of mark adoption.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">3. Vague or Ambiguous Date Declarations</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Phrases like &ldquo;since 2019&rdquo; or &ldquo;for approximately four years&rdquo; violate Rule 25. The registry e-filing system strictly requires an unambiguous day, month, and year (DD/MM/YYYY).</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">4. Unnotarized Affidavits or Defective Stamp Duty</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Executing an affidavit on plain company letterhead or submitting a scanned copy without a live Notary Public seal and serial entry number constitutes a formal defect resulting in a Formality Check Fail notice.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: PRE-FILING CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark User Affidavit Checklist
                                        </h3>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Fix Exact User Date:</strong>Identify the oldest authenticated invoice date and enter it in DD/MM/YYYY format.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Procure ₹100 Stamp Paper:</strong>Purchase Non-Judicial E-Stamp paper in the name of the applicant entity or deponent.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Obtain CA Turnover Certificate:</strong>Secure an audited turnover statement with UDIN certifying brand sales and ad spends.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Collate Earliest Tax Invoices:</strong>Assemble sales bills clearly showing the brand name and customer details.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Execute and Notarize:</strong>Have the authorized deponent sign before a certified Notary Public with seal.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Digitize into Unified PDF:</strong>Combine affidavit and Annexures A to E into an optimized PDF for TM-A e-filing.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 11: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 12: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Legal Counsel
                                        </h3>
                                        <p className="mb-6">Claiming prior use is one of the most powerful legal strategies available in Indian trademark practice. It transforms a vulnerable mark into a senior intellectual property asset that can defeat younger registrations, overcome examination objections, and withstand third-party oppositions.</p>
                                        <p className="mb-6">However, the strength of your prior use claim depends entirely on the legal accuracy of your Rule 25 User Affidavit. Partnering with seasoned trademark attorneys ensures your affidavit is drafted flawlessly, stamp duty is reconciled, and documentary exhibits are structured to secure fast-track acceptance. Initiate your prior use trademark filing today to solidify your brand legacy.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Prior Use Filing
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Claim Your Brand Seniority Today
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Work with expert IP attorneys to draft, stamp, notarize, and file your Trademark User Affidavit under Rule 25. Protect years of goodwill and secure nationwide exclusivity.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>File Prior Use TM Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Certified IP Advocates • Rule 25 Compliant Drafting • CA Certificate Assistance</p>
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h4>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, prior use evidence compilation, and trademark user affidavit compliance under Rule 25 of the Trade Marks Rules, 2017.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-xl font-black mb-4 relative z-10 leading-tight">Claim Prior Use</h4>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Lock in your historical brand usage date. File Form TM-A with a certified User Affidavit today.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        E-File Form TM-A
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Filing Steps</span></Link></li>
                                    <li><Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Word vs Logo</span></Link></li>
                                    <li><Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Objections</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Exam Reply</span></Link></li>
                                    <li><Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Search</span></Link></li>
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Guide</span></Link></li>
                                    <li><Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Guide</span></Link></li>
                                    <li><Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSignature} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Form TM-48</span></Link></li>
                                    <li><Link href="/how-to-renew-a-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRotate} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Renewal</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
