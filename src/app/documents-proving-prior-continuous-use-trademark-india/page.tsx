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
    faReceipt,
    faFileInvoice,
    faCertificate,
    faCalendarDays,
    faFolderOpen,
    faCalculator
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Proving Prior Continuous Use: Rule 25(2) Trademark Guide",
    description: validateAndNormalizeDescription(
        "Learn how to prove prior continuous trademark use in India under Rule 25(2). Master accepted invoices, CA turnover certificates & user affidavits.",
        "app/documents-proving-prior-continuous-use-trademark-india/page.tsx"
    ),
    keywords: [
        "user affidavit rule 25 2 evidence checklist",
        "invoices accepted by trademark examiner india",
        "proving prior use section 34",
        "ca certificate for trademark turnover",
        "continuous commercial use trademark india",
        "trademark evidence of use checklist",
        "rule 25 trade marks rules 2017 affidavit",
        "century traders prior user test india",
        "sporadic vs continuous use trademark",
        "gst invoices for trademark registration"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/documents-proving-prior-continuous-use-trademark-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Proving Prior Continuous Use: What Invoices & Documents Are Accepted under Rule 25(2)",
        description: "Comprehensive statutory checklist of tax invoices, CA certificates, user affidavits, and commercial records required to prove continuous trademark use in India.",
        url: "https://www.iprkaro.com/documents-proving-prior-continuous-use-trademark-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/documents-proving-prior-continuous-use-trademark-india.png",
                width: 1200,
                height: 630,
                alt: "Proving Prior Continuous Use: What Invoices and Documents Are Accepted under Rule 25(2) in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Proving Prior Continuous Use: Rule 25(2) Trademark Guide",
        description: "Master Rule 25(2) user affidavits, accepted GST invoices, CA audit certificates, and evidentiary proof for prior continuous trademark use in India.",
        images: ["https://www.iprkaro.com/images/og/documents-proving-prior-continuous-use-trademark-india.png"],
    }
};

const faqs = [
    {
        question: "What is mandatory under Rule 25(2) of the Trade Marks Rules, 2017 when claiming a prior user date?",
        answer: "Under Rule 25(2) of the Trade Marks Rules, 2017, whenever an applicant claims a date of trademark use prior to the date of filing the application, they must file a formal User Affidavit (Form TM-A User Affidavit) affirmed by the applicant or authorized signatory, supported by documentary evidence proving continuous commercial use of the mark from the exact claimed date. Failure to submit this affidavit results in the Registry issuing a formal objection or treating the application as 'Proposed to be Used'."
    },
    {
        question: "What specific details must be visible on tax invoices to be accepted by a Trademark Examiner?",
        answer: "To be accepted as valid proof of prior use, commercial tax invoices must satisfy 4 essential criteria: (1) The exact trademark/brand name must be clearly printed in the invoice header, line-item description, or product model name, (2) The invoice must bear a chronological date on or after the claimed user date, (3) It must display genuine buyer and seller credentials with valid statutory tax identifiers (GSTIN, VAT, CST, or Service Tax numbers), and (4) Consecutive invoice numbering matching historical accounting records."
    },
    {
        question: "Is a Chartered Accountant (CA) Turnover Certificate mandatory, and what must it contain?",
        answer: "While not strictly mandatory for every initial application, a CA Turnover Certificate is the most persuasive financial document to establish extensive and continuous use in examination hearings and opposition proceedings. The certificate must be issued on the CA firm's official letterhead with a valid Unique Document Identification Number (UDIN), specifying the annual, year-by-year sales turnover and promotional expenditure strictly generated under the specific trademark from inception to the present date."
    },
    {
        question: "How does proving prior continuous use help overcome Section 11 and Section 9 objections?",
        answer: "Demonstrating prior continuous use provides a dual statutory shield: (1) Under the proviso to Section 9(1), prior usage evidence proves that an otherwise descriptive or laudatory mark has 'acquired distinctiveness' in the eyes of the purchasing public. (2) Under Section 12 and Section 34, establishing prior continuous use allows an applicant to overcome Section 11 relative grounds objections by demonstrating 'honest concurrent use' or seniority over a cited conflicting trademark."
    },
    {
        question: "What is the legal difference between 'continuous use' and 'sporadic use' under Indian trademark law?",
        answer: "Indian courts draw a sharp distinction between continuous commercial adoption and sporadic, isolated transactions. As held in Uniply Industries and Neon Laboratories, 'continuous use' requires an ongoing, unbroken commercial presence where goods or services are regularly offered in the market. 'Sporadic use'—such as a single isolated invoice followed by a 4-year hiatus—is treated as token usage and fails to confer priority or distinctiveness under Section 34."
    },
    {
        question: "Can online marketplace seller listings and digital invoices prove prior continuous use?",
        answer: "Yes. In the digital economy, timestamped Amazon/Flipkart seller invoices, e-commerce order fulfillment reports, domain registration receipts (WHOIS history), Internet Archive (Wayback Machine) dated snapshots, and Google/Meta advertising tax invoices are fully admissible as secondary digital evidence under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023."
    },
    {
        question: "What value of non-judicial stamp paper is required for a Rule 25(2) User Affidavit?",
        answer: "The stamp duty value for a User Affidavit is determined by the State Stamp Act of the jurisdiction where the affidavit is executed. Typically, in states like Delhi, Maharashtra, Karnataka, and Uttar Pradesh, non-judicial stamp paper of ₹10, ₹50, or ₹100 denomination is used. The affidavit must be duly signed by the deponent on each page and attested before an authorized Notary Public or Oath Commissioner."
    },
    {
        question: "What happens if an applicant submits fabricated or backdated invoices to prove prior use?",
        answer: "Submitting forged, backdated, or fabricated invoices to the Trade Marks Registry constitutes a grave criminal offense under Section 103 and 104 of the Trade Marks Act, 1999, Section 208 and 336 of the Bharatiya Nyaya Sanhita, 2023 (forgery and fabricating false evidence), and Section 66D of the IT Act. Examiners frequently cross-reference invoice GSTINs on the GST portal; if fraud is uncovered, the application is summarily rejected, the mark is invalidated, and the applicant faces criminal prosecution."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "rule25-framework", title: "Rule 25(2) & Section 34 Law" },
    { id: "invoices-standards", title: "Tax Invoices & Billing Standards" },
    { id: "ca-certificate", title: "CA Turnover & Audit Certificates" },
    { id: "marketing-proof", title: "Advertising & Media Documentation" },
    { id: "regulatory-licenses", title: "Government & Statutory Licenses" },
    { id: "digital-evidence", title: "Digital, E-Com & Domain Proofs" },
    { id: "user-affidavit-drafting", title: "Drafting the User Affidavit" },
    { id: "landmark-precedents", title: "Supreme Court & HC Case Law" },
    { id: "evidentiary-pitfalls", title: "Sporadic Gaps & Fatal Errors" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Prior Use Advice" },
];

export default function DocumentsProvingPriorContinuousUsePage() {
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
        "headline": "Proving Prior Continuous Use: What Invoices & Documents Are Accepted under Rule 25(2)",
        "description": "Comprehensive statutory checklist of tax invoices, CA certificates, user affidavits, and commercial records required to prove continuous trademark use in India.",
        "image": "https://www.iprkaro.com/images/og/documents-proving-prior-continuous-use-trademark-india.png",
        "datePublished": "2026-09-30T09:45:00+05:30",
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
            "@id": "https://www.iprkaro.com/documents-proving-prior-continuous-use-trademark-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Proving Prior Continuous Use: What Invoices & Documents Are Accepted under Rule 25(2)",
        "url": "https://www.iprkaro.com/documents-proving-prior-continuous-use-trademark-india",
        "description": "Master Rule 25(2) user affidavits, accepted GST invoices, CA audit certificates, and evidentiary proof for prior continuous trademark use in India.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/documents-proving-prior-continuous-use-trademark-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/documents-proving-prior-continuous-use-trademark-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Prior Use Evidence Guide", "item": "https://www.iprkaro.com/documents-proving-prior-continuous-use-trademark-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Authoritative Evidentiary Compilation Framework for Proving Prior Trademark Use under Rule 25(2)",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Audit Chronological Tax Invoices from Claimed Start Date" },
            { "@type": "ListItem", "position": 2, "name": "Obtain Chartered Accountant Turnover Certificate with Valid UDIN" },
            { "@type": "ListItem", "position": 3, "name": "Compile Media Advertisements, Digital Ad Invoices & PR Clippings" },
            { "@type": "ListItem", "position": 4, "name": "Gather Statutory Registrations (GST, MSME, FSSAI, AYUSH, IEC)" },
            { "@type": "ListItem", "position": 5, "name": "Draft and Notarize Form TM-A User Affidavit on Non-Judicial Stamp Paper" }
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
                                <FontAwesomeIcon icon={faStamp} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trademark Evidence &amp; Prosecution</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Proving Prior Continuous Use: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Rule 25(2) Invoices &amp; Evidence</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                India is a common-law, &quot;first-to-use&quot; trademark jurisdiction where prior continuous commercial usage overrides conflicting trademark registrations under <strong>Section 34 of the Trade Marks Act, 1999</strong>. When claiming a historical user date in Form TM-A, compliance with <strong>Rule 25(2) of the Trade Marks Rules, 2017</strong> is mandatory. Discover what tax invoices, CA turnover certificates, advertising tear-sheets, digital footprints, and notarized User Affidavits are strictly accepted by examiners to secure unshakeable brand seniority.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior Trademark Prosecution Counsel</p>
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
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ IP India Rule 25(2) Standard</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Audit Prior Use Evidence <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult TM Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/documents-proving-prior-continuous-use-trademark-india.png"
                                    alt="Proving Prior Continuous Use: What Invoices & Documents Are Accepted under Rule 25(2)"
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
                        { label: "Prior Use Evidence Guide", href: "/documents-proving-prior-continuous-use-trademark-india" }
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
                                            <p className="text-xs text-gray-500 m-0">Senior Trademark Prosecution Counsel</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview: Proving Prior Continuous Use under Rule 25(2)
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Under Rule 25(2) of the Trade Marks Rules, 2017, whenever an applicant claims a prior user date in Form TM-A, they must submit a notarized User Affidavit accompanied by documentary proof of continuous commercial use from that date. Accepted evidence includes: (1) Chronologically unbroken GST/VAT tax invoices clearly displaying the trademark, (2) A Chartered Accountant Turnover Certificate with valid UDIN certifying year-by-year brand revenue, (3) Advertising invoices, digital ad bills &amp; PR clippings, (4) Statutory government licenses (FSSAI, MSME, AYUSH, IEC), and (5) Timestamped e-commerce seller records and domain WHOIS history.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Unlike civil law jurisdictions governed by the rigid &quot;first-to-file&quot; principle, Indian trademark jurisprudence is anchored in the common law doctrine of <strong>&quot;first-to-use&quot; (priority of adoption)</strong>. Under <strong>Section 34 of the Trade Marks Act, 1999</strong>, a senior prior user of a mark possesses vested proprietary rights that cannot be defeated even by a subsequently registered proprietor of an identical mark.
                                        </p>
                                        <p className="mb-6">
                                            However, claiming a prior user date is not a mere formality. The Trade Marks Registry exercises stringent scrutiny under Rule 25(2). If an applicant claims commercial adoption from 2018 but submits invoices starting only from 2022, or provides generic invoices lacking the brand name, the Registry will issue severe examination objections, refuse the user claim, or convert the status to &quot;Proposed to be Used&quot;, potentially destroying the applicant&apos;s seniority in pending infringement and opposition disputes.
                                        </p>
                                        <p className="mb-6">
                                            Review our foundational guides on <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="text-[rgb(110,94,147)] hover:underline font-medium">prior user rights under Section 34</Link>, <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit formatting rules</Link>, and <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark examination objections</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY RULE 25(2) & SECTION 34 */}
                                    <section id="rule25-framework" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Statutory Framework: Rule 25 &amp; Section 34
                                        </h3>
                                        <p className="mb-6">
                                            Understanding the statutory machinery governing trademark user claims requires analyzing the interaction between the substantive Act and the procedural Rules:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="bg-gray-50 border-l-4 border-[#6E5E93] p-5 rounded-r-2xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Rule 25(1) &amp; 25(2), Trade Marks Rules, 2017</h4>
                                                <p className="text-sm text-gray-700 m-0">
                                                    <strong>Rule 25(1):</strong> An application claiming user date prior to filing must specify the exact day, month, and year of commencement. Vague claims such as &quot;since 2015&quot; without specific dates are legally non-compliant.<br />
                                                    <strong>Rule 25(2):</strong> In every application containing a user claim, the applicant must file an affidavit testifying to such user along with supporting documentary evidence demonstrating continuous use.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 border-l-4 border-indigo-600 p-5 rounded-r-2xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Section 34, Trade Marks Act, 1999 — Saving for Prior User</h4>
                                                <p className="text-sm text-gray-700 m-0">
                                                    Explicitly prevents a registered proprietor or registered user from interfering with or restraining the use of an identical or similar mark by a person who has continuously used that mark from a date prior to the registration or the registered proprietor&apos;s user date.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 border-l-4 border-emerald-600 p-5 rounded-r-2xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Section 12, Trade Marks Act, 1999 — Honest Concurrent Use</h4>
                                                <p className="text-sm text-gray-700 m-0">
                                                    Empowers the Registrar to permit registration of identical or similar marks for identical goods/services by more than one proprietor in cases of honest concurrent use supported by continuous historical sales.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 border-l-4 border-amber-600 p-5 rounded-r-2xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Section 9(1) Proviso — Acquired Distinctiveness</h4>
                                                <p className="text-sm text-gray-700 m-0">
                                                    Allows registration of descriptive, geographical, or laudatory marks if extensive prior use before the application date has established that the mark has acquired secondary meaning and distinctive character.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: INVOICES & BILLING STANDARDS */}
                                    <section id="invoices-standards" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileInvoice} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Commercial Tax Invoices: The Gold Standard Checklist
                                        </h3>
                                        <p className="mb-6">
                                            Commercial tax invoices represent the single most authoritative evidence of commercial adoption in Indian trademark prosecution. However, not all invoices are legally valid. The Trade Marks Registry strictly enforces the following evidentiary standards:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 shadow-sm">
                                                <div className="flex items-center space-x-2 text-emerald-700 font-bold mb-3 text-sm">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
                                                    <span>ACCEPTED INVOICE CHARACTERISTICS</span>
                                                </div>
                                                <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 list-disc pl-4 m-0">
                                                    <li><strong>Brand Name Prominently Displayed:</strong> The trademark is printed on the invoice header, product description line, or model name.</li>
                                                    <li><strong>Chronological Continuity:</strong> Invoices span evenly across all years from claimed user date to present (at least 2-4 sample invoices per calendar year).</li>
                                                    <li><strong>Valid Tax Registration:</strong> Invoices bear registered GSTIN, VAT, CST, or Service Tax registration details matching the applicant entity.</li>
                                                    <li><strong>Inter-State &amp; Pan-India Sales:</strong> Invoices addressed to customers across multiple Indian states proving wide geographic goodwill.</li>
                                                    <li><strong>Consecutive Numbering:</strong> Sequential invoice numbering reflecting regular and genuine commercial transactions.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border-2 border-red-200 shadow-sm">
                                                <div className="flex items-center space-x-2 text-red-600 font-bold mb-3 text-sm">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" />
                                                    <span>FATAL INVOICE DEFECTS (REJECTED)</span>
                                                </div>
                                                <ul className="space-y-2.5 text-xs md:text-sm text-gray-700 list-disc pl-4 m-0">
                                                    <li><strong>Generic Descriptions Only:</strong> Invoices stating only &quot;Cotton T-Shirts&quot; or &quot;Consulting Services&quot; without mentioning the specific trademark.</li>
                                                    <li><strong>Unnumbered Rough Receipts:</strong> Hand-written, unauthenticated cash memos without buyer details or tax identification.</li>
                                                    <li><strong>Post-Dated Invoices:</strong> Invoices dated after the claimed user date or after the date of application filing.</li>
                                                    <li><strong>Sporadic Single-Year Invoices:</strong> Invoices for only Year 1 followed by a complete 5-year gap (fails the &quot;continuous use&quot; mandate).</li>
                                                    <li><strong>Entity Mismatch:</strong> Invoices issued under an unrelated third-party entity without a formal registered assignment or user license.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: CA TURNOVER CERTIFICATE */}
                                    <section id="ca-certificate" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCalculator} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Chartered Accountant (CA) Turnover &amp; Sales Certificate
                                        </h3>
                                        <p className="mb-6">
                                            A Chartered Accountant Turnover Certificate translates voluminous stacks of thousands of sales bills into a certified, legally conclusive financial summary that examiners, Hearing Officers, and High Court judges rely upon:
                                        </p>

                                        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 my-8">
                                            <h4 className="text-lg font-bold text-[#6E5E93] mb-4">Mandatory Elements of a Valid CA Certificate:</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-800">
                                                <div className="p-3 bg-white rounded-xl border border-purple-100">
                                                    <strong>1. Unique Document Identification Number (UDIN):</strong> Mandatory verification code generated on the Institute of Chartered Accountants of India (ICAI) portal ensuring authenticity.
                                                </div>
                                                <div className="p-3 bg-white rounded-xl border border-purple-100">
                                                    <strong>2. Annual Financial Year-wise Breakup:</strong> Clear tabular breakdown of annual gross revenue strictly derived from goods/services sold under the specific brand name.
                                                </div>
                                                <div className="p-3 bg-white rounded-xl border border-purple-100">
                                                    <strong>3. Marketing &amp; Advertisement Spend:</strong> Itemized annual advertising expenditures incurred to popularize the brand across print, digital, and outdoor media.
                                                </div>
                                                <div className="p-3 bg-white rounded-xl border border-purple-100">
                                                    <strong>4. Cross-Verification with Audited Books:</strong> Explicit statement that figures have been verified against audited Balance Sheets, Profit &amp; Loss accounts, and GST returns.
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: MARKETING & ADVERTISING PROOF */}
                                    <section id="marketing-proof" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faReceipt} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Advertising, Promotional &amp; PR Documentation
                                        </h3>
                                        <p className="mb-6">
                                            To demonstrate public recognition, brand equity, and secondary meaning under the Section 9(1) proviso, promotional evidence is vital:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start space-x-3">
                                                <span className="w-7 h-7 rounded-lg bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs flex-shrink-0">A</span>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 m-0">Print Media Clippings &amp; Advertisements</h4>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Newspaper advertisements, trade magazine features, and industry journal articles showing the published date and circulation figures.</p>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start space-x-3">
                                                <span className="w-7 h-7 rounded-lg bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs flex-shrink-0">B</span>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 m-0">Digital Ad Spend Tax Invoices</h4>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Official GST tax invoices issued by Google Ads (Google India), Meta Platforms (Facebook/Instagram), LinkedIn, and Amazon Sponsored Products showing campaigns for the brand.</p>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start space-x-3">
                                                <span className="w-7 h-7 rounded-lg bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs flex-shrink-0">C</span>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 m-0">Trade Fair &amp; Exhibition Participation</h4>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Stall booking invoices, event directory listings, and participant badges from national or international trade expos, industry summits, and buyer-seller meets.</p>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start space-x-3">
                                                <span className="w-7 h-7 rounded-lg bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs flex-shrink-0">D</span>
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 m-0">Physical Packaging, Labels &amp; Batch Records</h4>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Original product packaging containers, labels, batch manufacturing records, barcode registrations (GS1 India), and tamper-evident seals displaying the mark.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: REGULATORY & GOVERNMENT LICENSES */}
                                    <section id="regulatory-licenses" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Government Registrations &amp; Statutory Licenses
                                        </h3>
                                        <p className="mb-6">
                                            Government-issued licenses provide incontrovertible, third-party state authentication of when a business formally commercialized a specific brand name:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose text-xs md:text-sm">
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-1">GST Registration Certificate</h4>
                                                <p className="text-gray-600 m-0">Shows the trade name and principal place of business date of registration with the Department of Revenue.</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-1">FSSAI License / Registration</h4>
                                                <p className="text-gray-600 m-0">Crucial for food, beverage, and dietary supplement brands in Class 29, 30, 31, and 32 displaying product formulations.</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-1">AYUSH &amp; Drug Licenses</h4>
                                                <p className="text-gray-600 m-0">Manufacturing licenses under Form 25/25D for pharmaceutical and herbal brands in Class 5 establishing lawful commercial inception.</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-1">Udyam MSME &amp; IEC Certificates</h4>
                                                <p className="text-gray-600 m-0">Ministry of MSME and Directorate General of Foreign Trade (DGFT) Import Export Code certificates substantiating enterprise activities.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: DIGITAL EVIDENCE */}
                                    <section id="digital-evidence" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFolderOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Digital Footprints, E-Commerce &amp; Domain Evidence
                                        </h3>
                                        <p className="mb-6">
                                            Modern trademark prosecution heavily relies on electronic records. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, the following digital evidence is routinely admitted:
                                        </p>

                                        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 my-8">
                                            <ul className="space-y-3 text-xs md:text-sm text-gray-800 m-0 pl-4 list-disc">
                                                <li><strong>WHOIS Domain Registration History:</strong> Original invoice and domain registrar record proving the exact creation date of the brand&apos;s website.</li>
                                                <li><strong>Internet Archive (Wayback Machine) Snapshots:</strong> Timestamped historical snapshots showing that the trademark, logos, and product offerings were publicly accessible online on specific historical dates.</li>
                                                <li><strong>Marketplace Onboarding Reports:</strong> Amazon Brand Registry approval dates, Flipkart seller onboarding letters, Myntra vendor master agreements, and earliest buyer review timestamps.</li>
                                                <li><strong>Social Media Handle Creation Dates:</strong> Account inception logs and dated posts on Instagram, YouTube, LinkedIn, and Facebook with engagement metrics.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 8: DRAFTING USER AFFIDAVIT */}
                                    <section id="user-affidavit-drafting" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Drafting the Form TM-A User Affidavit
                                        </h3>
                                        <p className="mb-6">
                                            The User Affidavit is the formal legal backbone that ties all documentary exhibits together into an admissible sworn statement:
                                        </p>

                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 my-8 not-prose">
                                            <h4 className="text-base font-bold text-gray-900 mb-4">Structural Architecture of a Flawless User Affidavit:</h4>
                                            <div className="space-y-3 text-xs md:text-sm text-gray-700">
                                                <div className="p-3 bg-white rounded-xl border border-gray-200">
                                                    <strong>1. Deponent Competence:</strong> Affirmed by the Proprietor, Managing Director, Authorized Partner, or registered Power of Attorney holder.
                                                </div>
                                                <div className="p-3 bg-white rounded-xl border border-gray-200">
                                                    <strong>2. Inception &amp; Adoption History:</strong> Explains the bona fide origin, conceptual genesis, and exact commercial adoption date of the trademark.
                                                </div>
                                                <div className="p-3 bg-white rounded-xl border border-gray-200">
                                                    <strong>3. Affirmation of Continuous &amp; Uninterrupted Use:</strong> Explicit sworn statement that the mark has been used continuously without abandonment or disruption.
                                                </div>
                                                <div className="p-3 bg-white rounded-xl border border-gray-200">
                                                    <strong>4. Chronological Exhibit Indexing:</strong> Annexures from A to Z systematically indexing invoices, CA certificates, licenses, and ad spend records.
                                                </div>
                                                <div className="p-3 bg-white rounded-xl border border-gray-200">
                                                    <strong>5. Verification &amp; Notarization:</strong> Formal verification clause, executed on state-appropriate non-judicial stamp paper and attested before a Notary Public.
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: LANDMARK PRECEDENTS */}
                                    <section id="landmark-precedents" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Precedents on Prior Continuous Use
                                        </h3>
                                        <p className="mb-6">
                                            The Indian judiciary has repeatedly upheld the supremacy of prior continuous commercial use over mere paper registrations:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Century Traders v. Roshan Lal Duggar &amp; Co. (AIR 1978 Del 250)</h4>
                                                    <span className="text-xs font-bold bg-purple-100 text-[#6E5E93] px-2.5 py-1 rounded-full">Delhi High Court Full Bench</span>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    <strong>The Ruling:</strong> The Court established the foundational principle that to acquire trademark rights through prior use, long or prolonged usage is not essential. Even a single bona fide transaction or initial commercial adoption accompanied by genuine sales suffices to confer common law rights against a subsequent adopter.
                                                </p>
                                                <p className="text-xs font-semibold text-gray-500 m-0">Key Principle: Priority in adoption and market use precedes registration.</p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Neon Laboratories Ltd. v. Medical Technologies Ltd. (2016) 2 SCC 672</h4>
                                                    <span className="text-xs font-bold bg-purple-100 text-[#6E5E93] px-2.5 py-1 rounded-full">Supreme Court of India</span>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    <strong>The Ruling:</strong> The Supreme Court held that prior continuous commercial user under Section 34 overrides a prior registered proprietor if the registered owner remained dormant and failed to actually commercialize the mark in the market before the prior user commenced sales.
                                                </p>
                                                <p className="text-xs font-semibold text-gray-500 m-0">Key Principle: Prior registration is ineffective against a senior active commercial user.</p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Uniply Industries Ltd. v. Unicorn Plywood Pvt. Ltd. (2001) 5 SCC 95</h4>
                                                    <span className="text-xs font-bold bg-purple-100 text-[#6E5E93] px-2.5 py-1 rounded-full">Supreme Court of India</span>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    <strong>The Ruling:</strong> The Supreme Court emphasized that bald claims of prior use in affidavits carry no evidentiary weight unless corroborated by contemporaneous, verifiable commercial invoices, sales ledgers, and advertising accounts.
                                                </p>
                                                <p className="text-xs font-semibold text-gray-500 m-0">Key Principle: Affidavits without primary invoice corroboration are legally worthless.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: EVIDENTIARY PITFALLS */}
                                    <section id="evidentiary-pitfalls" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Common Evidentiary Pitfalls &amp; How to Avoid Them
                                        </h3>
                                        <p className="mb-6">
                                            Examiners and opposition opponents aggressively scrutinize Rule 25(2) submissions for weaknesses:
                                        </p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full border-collapse bg-white rounded-2xl shadow-sm border border-gray-200 text-left text-xs md:text-sm">
                                                <thead className="bg-[#0C002B] text-white">
                                                    <tr>
                                                        <th className="p-4 rounded-tl-2xl font-bold">Evidentiary Mistake</th>
                                                        <th className="p-4 font-bold">Legal Impact on Application</th>
                                                        <th className="p-4 rounded-tr-2xl font-bold">Correct Legal Remedy</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Multi-Year Evidentiary Gap</td>
                                                        <td className="p-4 text-red-600 font-semibold">Destroys claim of &quot;continuous use&quot;; treated as temporary abandonment</td>
                                                        <td className="p-4">Supplement with secondary promotional bills, tax returns, or bank statements for gap years</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Trademark Representation Mismatch</td>
                                                        <td className="p-4 text-red-600 font-semibold">Evidence rejected if invoice shows a substantially different logo/name</td>
                                                        <td className="p-4">Establish series mark connection or file separate application for modified variants</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Third-Party Invoicing Entity</td>
                                                        <td className="p-4 text-red-600 font-semibold">Invoices dismissed if issued by sister firm or director without legal nexus</td>
                                                        <td className="p-4">Submit Registered User License Agreement or Deed of Assignment transferring goodwill</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Unnotarized User Affidavit</td>
                                                        <td className="p-4 text-red-600 font-semibold">Registry issues Section 25 formal defect notice; application delayed</td>
                                                        <td className="p-4">Ensure proper notary seal, stamp duty denomination, and deponent verification</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
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

                                    {/* SECTION 12: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Prior Use Evidentiary Advice
                                        </h3>
                                        <p className="mb-6">
                                            Proving prior continuous use under Rule 25(2) is the ultimate legal trump card in Indian trademark practice. When executed with precision, an airtight evidentiary portfolio overrides conflicting citations under Section 11, overcomes descriptiveness hurdles under Section 9, and defeats aggressive oppositions under Section 34.
                                        </p>
                                        <p className="mb-6">
                                            Work with seasoned trademark prosecution attorneys to audit historical tax records, secure CA turnover certificates with valid UDIN, and draft watertight Rule 25(2) User Affidavits. For related prosecution insights, review our guides on <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">overcoming trademark objections</Link>, <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 9 and 11 refusal grounds</Link>, and <Link href="/famous-trademark-infringement-cases-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">famous trademark cases in India</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Rule 25(2) Evidence Audit &amp; Prosecution
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Prove Unshakeable Prior Use Rights
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Deploy registered trademark attorneys to audit your invoices, draft airtight Rule 25(2) User Affidavits, and establish prior user seniority across IP India registries.
                                                </p>

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

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered Trademark Attorneys • Rule 25(2) User Affidavits • Section 34 Prior User Defense • Pan-India
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
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Senior Trademark Prosecution Counsel</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in trademark user date evidence compilation, Rule 25(2) affidavits, Section 34 prior use defense, and registry opposition proceedings.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Need Prior Use User Affidavit?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Got a user date objection or need to prove commercial adoption? Get your Rule 25(2) affidavit drafted by senior counsel.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Draft User Affidavit
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 34 Prior Use</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit Format</span></Link></li>
                                    <li><Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Overcome Objections</span></Link></li>
                                    <li><Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 9 vs 11 Grounds</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/deceptive-similarity-trademark-test-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Deceptive Similarity</span></Link></li>
                                    <li><Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Famous TM Cases</span></Link></li>
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
