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
    faGavel,
    faLink,
    faLinkSlash,
    faDiagramProject,
    faBuildingShield,
    faFileLines,
    faCircleCheck,
    faBan,
    faHourglassHalf,
    faTrashCan,
    faLandmark,
    faUserSlash,
    faFileSignature,
    faCalculator,
    faEye,
    faCircleExclamation,
    faBriefcase
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Cancellation for Non-Use: Section 47 India Guide",
    description: validateAndNormalizeDescription(
        "Cancel abandoned trademarks under Section 47 India for 5 years non-use. Learn legal grounds, proof rules, fees, and High Court IPD procedure.",
        "app/trademark-cancellation-non-use-5-years-section-47-india/page.tsx"
    ),
    keywords: [
        "trademark cancellation non use 5 years section 47 india",
        "section 47 trade marks act grounds",
        "rectification for non use trademark india",
        "how to remove abandoned trademark blocking my application",
        "trademark cancellation 5 years india",
        "person aggrieved trademark cancellation",
        "special circumstances in the trade section 47",
        "trademark non use removal high court ipd",
        "form tm o cancellation trademark india",
        "bona fide use of trademark india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-cancellation-non-use-5-years-section-47-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Cancellation for Non-Use: Section 47 India Guide",
        description: "Cancel abandoned trademarks under Section 47 India for 5 years non-use. Learn legal grounds, proof rules, fees, and High Court IPD procedure.",
        url: "https://www.iprkaro.com/trademark-cancellation-non-use-5-years-section-47-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-cancellation-non-use-5-years-section-47-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Cancellation on Grounds of Non-Use for 5 Years Section 47 India Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Cancellation for Non-Use: Section 47 India Guide",
        description: "Cancel abandoned trademarks under Section 47 India for 5 years non-use. Learn legal grounds, proof rules, fees, and High Court IPD procedure.",
        images: ["https://www.iprkaro.com/images/og/trademark-cancellation-non-use-5-years-section-47-india.jpg"],
    }
};

const faqs = [
    {
        question: "What is trademark cancellation on grounds of non-use under Section 47?",
        answer: "Under Section 47 of the Trade Marks Act, 1999, any registered trademark that has not been put to genuine commercial use for a continuous period of 5 years (calculated from the date of entry on the Register up to 3 months before the cancellation application) can be removed or expunged from the Trade Marks Register upon an application filed by a 'person aggrieved'."
    },
    {
        question: "When does the 5-year non-use countdown start in India?",
        answer: "The 5-year clock does NOT begin on the application filing date. As established by the Supreme Court of India in Cycle Corporation of India and Vishnudas Trading, the 5-year non-use period strictly commences from the date when the trademark is actually registered and entered into the Trade Marks Register (the date shown on the Registration Certificate)."
    },
    {
        question: "Why does Section 47 include a 3-month buffer before filing?",
        answer: "Section 47(1)(b) requires proof of continuous non-use up to a date 3 months prior to the date of filing the cancellation petition. This statutory buffer prevents a dormant trademark owner who learns of an impending cancellation petition from making hasty, token, or sham sales right before filing to defeat the non-use claim."
    },
    {
        question: "Who qualifies as a 'person aggrieved' entitled to file for cancellation?",
        answer: "A 'person aggrieved' is anyone whose commercial interests are prejudiced or blocked by the presence of the dormant mark on the Register. This includes applicants whose new trademark applications are cited with Section 11 objections, direct competitors unable to expand their product line, or defendants facing trademark infringement notices from a non-trading owner."
    },
    {
        question: "Where should a Section 47 non-use cancellation petition be filed?",
        answer: "A cancellation petition can be filed before the Registrar of Trade Marks (via Form TM-O) or directly before the High Court having territorial jurisdiction (specifically the Intellectual Property Division / IPD, such as Delhi, Madras, or Bombay High Court). If an infringement suit involving the mark is already pending in court, the rectification must be filed before the High Court."
    },
    {
        question: "What qualifies as 'bona fide use' vs 'sham or token use'?",
        answer: "Bona fide use means genuine, commercial exploitation of the mark in the ordinary course of trade, backed by commercial invoices, distributor agreements, tax filings, customs documents, and retail presence. Token sales (e.g., selling a few units to acquaintances solely to preserve registration) or website mockups without real commercial transactions are rejected by Indian courts."
    },
    {
        question: "What are 'special circumstances in the trade' under Section 47(3)?",
        answer: "Under Section 47(3), a proprietor can defend non-use if the failure to use was caused by external statutory obstacles beyond their control, such as statutory import bans, regulatory pharmaceutical embargoes, or government sanctions. Ordinary financial hardship, corporate bankruptcy, internal shareholder disputes, or lack of marketing interest do NOT qualify as special circumstances."
    },
    {
        question: "Can a trademark be partially cancelled for unused goods or services?",
        answer: "Yes. Under Section 47(1) proviso and Section 47(2), if a mark is registered across an entire class (e.g., all electronic appliances or all garments) but the owner has only commercially used it for a specific narrow product (e.g., only ceiling fans), the court or Registrar can order partial cancellation, limiting the registration exclusively to the used goods."
    },
    {
        question: "What is the official government fee to file for non-use cancellation?",
        answer: "When filing an application for rectification/cancellation before the Registrar of Trade Marks on Form TM-O, the official government e-filing fee is ₹2,700 for individuals, startups, and MSMEs (₹3,000 for physical filing) and ₹9,000 for other legal entities (₹10,000 for physical filing). For High Court IPD petitions, standard judicial court fees apply."
    },
    {
        question: "How does Section 55 protect associated trademarks against non-use claims?",
        answer: "Under Section 55 of the Trade Marks Act, 1999, if a proprietor owns registered associated trademarks, the Registrar or court has statutory discretion to accept evidence of active commercial use of one associated mark (or the mark with non-substantial modifications) as valid legal use of the challenged mark, defeating the non-use cancellation petition."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Doctrine" },
    { id: "statutory-grounds", title: "Section 47 Grounds" },
    { id: "calculating-5-years", title: "5-Year Clock Rules" },
    { id: "person-aggrieved", title: "Person Aggrieved Status" },
    { id: "forum-jurisdiction", title: "Where to File (Registry vs IPD)" },
    { id: "step-by-step", title: "7-Step Cancellation Process" },
    { id: "genuine-use-vs-sham", title: "Genuine vs Token Use" },
    { id: "special-circumstances", title: "Statutory Defenses (47(3))" },
    { id: "partial-cancellation", title: "Partial Cancellation Rules" },
    { id: "evidence-standards", title: "Evidence & Investigation" },
    { id: "comparison-table", title: "Rectification Comparisons" },
    { id: "statutory-fees", title: "Government Fee Schedule" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Legal Advice" },
];

export default function TrademarkCancellationNonUsePage() {
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
        "headline": "Trademark Cancellation on Grounds of Non-Use for 5 Years (Section 47 India)",
        "description": "Cancel abandoned trademarks under Section 47 India for 5 years non-use. Learn legal grounds, proof rules, fees, and High Court IPD procedure.",
        "image": "https://www.iprkaro.com/images/og/trademark-cancellation-non-use-5-years-section-47-india.png",
        "datePublished": "2026-09-25T11:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-cancellation-non-use-5-years-section-47-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Cancellation for Non-Use: Section 47 India Guide",
        "url": "https://www.iprkaro.com/trademark-cancellation-non-use-5-years-section-47-india",
        "description": "Cancel abandoned trademarks under Section 47 India for 5 years non-use. Learn legal grounds, proof rules, fees, and High Court IPD procedure.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-cancellation-non-use-5-years-section-47-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-cancellation-non-use-5-years-section-47-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Section 47 Non-Use Cancellation", "item": "https://www.iprkaro.com/trademark-cancellation-non-use-5-years-section-47-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Procedure to Cancel Trademark for Non-Use under Section 47",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Market & Registry Investigation to Confirm Non-Use" },
            { "@type": "ListItem", "position": 2, "name": "Establish 'Person Aggrieved' Locus Standi" },
            { "@type": "ListItem", "position": 3, "name": "Select Legal Forum (Registry vs High Court IPD)" },
            { "@type": "ListItem", "position": 4, "name": "Draft Statement of Case & Evidence Affidavit" },
            { "@type": "ListItem", "position": 5, "name": "File Form TM-O / High Court Rectification Petition" },
            { "@type": "ListItem", "position": 6, "name": "Counter-Statement & Evidentiary Proceedings" },
            { "@type": "ListItem", "position": 7, "name": "Final Hearing, Argument & Register Rectification" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            {/* HERO SECTION */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trade Marks Act, 1999 • Section 47 Rectification</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Cancellation for <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Non-Use Under Section 47</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Is an abandoned, dormant, or unused trademark blocking your brand registration in India? Under <strong>Section 47 of the Trade Marks Act, 1999</strong>, Indian law enforces the foundational doctrine of <em>&ldquo;Use it or Lose it&rdquo;</em>. Any registered trademark that has remained unused for a continuous period of <strong>5 years and 3 months</strong> can be removed or expunged from the Trade Marks Register upon application by a person aggrieved. Explore the statutory grounds, 5-year calculation rules, market evidence standards, High Court IPD procedure, and strategic defense mechanisms.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior Trademark Litigator & IP Strategist</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 13 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Statutory Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Remove Blocking Trademark <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>

                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-cancellation-non-use-5-years-section-47-india.png"
                                    alt="Trademark Cancellation on Grounds of Non-Use for 5 Years Section 47 India Complete Guide"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMBS */}
            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Section 47 Non-Use Cancellation", href: "/trademark-cancellation-non-use-5-years-section-47-india" }
                    ]} />
                </div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">

                        {/* DESKTOP TABLE OF CONTENTS */}
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* ARTICLE BODY */}
                        <main className="min-w-0">
                            {/* MOBILE TABLE OF CONTENTS - ACCORDION */}
                            <div className="lg:hidden mb-6 not-prose">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <div>
                                                <span className="text-sm font-bold text-gray-900 block">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Sections)</span>
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
                                            <p className="text-xs text-gray-500 m-0">Senior Trademark Litigator & IP Strategist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTrashCan} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            What is Trademark Cancellation for Non-Use?
                                        </h2>
                                        <p>
                                            In trademark jurisprudence, rights are not created simply to be hoarded or kept locked inside corporate balance sheets. Under the <strong>Trade Marks Act, 1999</strong>, trademark registration grants a monopoly over a brand name or logo on the fundamental premise that the proprietor will actively use the mark in the course of trade to distinguish their goods or services from competitors.
                                        </p>
                                        <p>
                                            When a company registers a trademark but fails to introduce products to the market, abandons commercial operations, or squats on valuable industry terminology, it creates what courts term <strong>&ldquo;deadwood&rdquo; or &ldquo;zombie trademarks&rdquo;</strong> on the public register. These unused registrations unfairly choke genuine entrepreneurs, resulting in unnecessary <Link href="/what-are-the-comman-reasons-for-trademark-application-rejection-in-india" className="text-[#6E5E93] font-semibold hover:underline">Section 11 relative grounds objections</Link>.
                                        </p>

                                        <div className="bg-gradient-to-r from-purple-50 via-indigo-50/50 to-white p-6 rounded-2xl border border-purple-100 my-6 not-prose">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-10 h-10 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">The &ldquo;Use It or Lose It&rdquo; Doctrine in Indian IP Law</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                        Indian trademark law is strictly rooted in commercial use. Under <strong>Section 47</strong>, if a registered mark remains dormant without continuous bona fide commercial use for <strong>5 years</strong>, any aggrieved business owner possesses the statutory right to petition the Registrar of Trade Marks or the High Court to cancel, expunge, or restrict the registration.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p>
                                            Whether you are an ambitious startup whose new brand filing is blocked by a defunct company, or an established enterprise defending against an infringement lawsuit from an entity that has never sold a single item, Section 47 provides the ultimate legal weapon to clear market pathways.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY GROUNDS */}
                                    <section id="statutory-grounds" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Statutory Grounds Under Section 47 Explained
                                        </h2>
                                        <p>
                                            Section 47(1) of the Trade Marks Act, 1999 lays down two separate, independent, and distinct statutory grounds under which a registered trademark can be taken off the Register:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="px-3 py-1 bg-purple-100 text-[#6E5E93] text-xs font-bold rounded-full uppercase">Ground A</span>
                                                    <span className="text-xs text-gray-500 font-semibold">Section 47(1)(a)</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">No Bona Fide Intention to Use</h3>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                                                    The trademark was registered <strong>without any bona fide intention</strong> on the part of the applicant to use it in relation to those goods or services, <strong>AND</strong> there has been no bona fide use of the trademark up to a date <strong>3 months before</strong> the date of the cancellation application.
                                                </p>
                                                <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 text-xs text-purple-900">
                                                    <strong>Key Requirement:</strong> Must prove both absence of initial commercial intent at the time of filing AND continuous non-use up to 3 months before filing.
                                                </div>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase">Ground B</span>
                                                    <span className="text-xs text-gray-500 font-semibold">Section 47(1)(b)</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous 5-Year Non-Use</h3>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                                                    Up to a date <strong>3 months before</strong> the date of the application, a continuous period of <strong>5 years or longer</strong> has elapsed during which the trademark was registered and during which there was no bona fide commercial use thereof in relation to the registered goods or services.
                                                </p>
                                                <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-100 text-xs text-indigo-900">
                                                    <strong>Key Requirement:</strong> The most common ground. Requires proving that 5 continuous years have passed from the registration date without genuine commercial activity.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 not-prose my-6">
                                            <div className="flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faHourglassHalf} className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                                                <div className="text-xs sm:text-sm text-amber-900">
                                                    <p className="font-bold text-sm mb-1">Why Does Section 47 Impose the &ldquo;3 Months Buffer&rdquo; Rule?</p>
                                                    <p className="leading-relaxed m-0">
                                                        Under both Clause (a) and Clause (b), the applicant must calculate the period up to <em>&ldquo;a date three months before the date of the application&rdquo;</em>. This statutory protection prevents a brand squatter, who receives word or a warning letter regarding an impending cancellation petition, from quickly executing a small token transaction or artificial sale immediately prior to the filing date to defeat the petition.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: CALCULATING THE 5-YEAR CLOCK */}
                                    <section id="calculating-5-years" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCalculator} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Calculating the 5 Years & 3 Months Non-Use Clock
                                        </h2>
                                        <p>
                                            One of the most critical legal technicalities in Section 47 litigation revolves around <strong>when the 5-year clock starts ticking</strong>. Miscalculating this timeline can lead to immediate dismissal of your cancellation petition as premature.
                                        </p>

                                        <div className="my-6 p-6 bg-gray-50 rounded-2xl border border-gray-200 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                Statutory Rule Established by the Supreme Court of India
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                                                In landmark decisions including <em>Cycle Corporation of India Ltd. v. Richter & Co. (1991)</em> and <em>Vishnudas Trading v. Vazir Sultan Tobacco Co. Ltd. (1997)</em>, the Supreme Court ruled that the words <strong>&ldquo;during which the trade mark was registered&rdquo;</strong> in Section 47(1)(b) refer strictly to the period <strong>after the mark is actually entered into the Register</strong>, and NOT the date of application.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium text-gray-700">
                                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                    <span className="block font-bold text-gray-900 text-sm mb-1">1. Application Date</span>
                                                    <p className="text-gray-500 m-0">While registration dates back to filing under Section 23, non-use clock cannot run before actual registration grant.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm">
                                                    <span className="block font-bold text-[#6E5E93] text-sm mb-1">2. Registration Entry Date</span>
                                                    <p className="text-gray-500 m-0">The 5-year clock strictly begins on the date the Registration Certificate is issued and entered in the registry ledger.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm">
                                                    <span className="block font-bold text-emerald-800 text-sm mb-1">3. The 3-Month Buffer</span>
                                                    <p className="text-gray-500 m-0">The cancellation petition can only be filed after 5 full years plus 3 months have elapsed without bona fide commercial use.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 my-4 text-sm text-purple-950">
                                            <strong>Formula for Section 47(1)(b) Eligibility:</strong><br />
                                            <code className="text-xs bg-white px-2 py-1 rounded border border-purple-300 font-mono mt-1 inline-block">
                                                Earliest Filing Date = [Date of Registration Certificate Entry] + 5 Years + 3 Months
                                            </code>
                                        </div>
                                    </section>

                                    {/* SECTION 4: PERSON AGGRIEVED */}
                                    <section id="person-aggrieved" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faUserSlash} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Who Qualifies as a &lsquo;Person Aggrieved&rsquo;?
                                        </h2>
                                        <p>
                                            An application under Section 47 cannot be filed by a random member of the public. The applicant must establish <em>locus standi</em> as a <strong>&ldquo;Person Aggrieved&rdquo;</strong>.
                                        </p>
                                        <p>
                                            The Supreme Court in <em>Kabushiki Kaisha Toshiba v. TOSIBA Appliances Co. (2008)</em> reaffirmed that the concept of &ldquo;person aggrieved&rdquo; must be interpreted liberally in commercial terms. You qualify as an aggrieved person if the existence of the dormant registered mark causes real commercial injury, restriction, or reasonable apprehension of injury to your business.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Blocked Trademark Applicants</h3>
                                                    <p className="text-xs text-gray-600 m-0">You filed for trademark registration, but the Examiner cited the dormant mark under Section 11 as a conflicting prior registration.</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Defendants in Infringement Suits</h3>
                                                    <p className="text-xs text-gray-600 m-0">You have been served with a cease-and-desist notice or a lawsuit for <Link href="/passing-off-vs-trademark-infringement-india" className="text-[#6E5E93] hover:underline">trademark infringement</Link> by an owner who has not used the mark.</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Direct Commercial Competitors</h3>
                                                    <p className="text-xs text-gray-600 m-0">Trading in the exact same industry whose legitimate brand expansion or marketing is hindered by the broad, unused registered specification.</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Target of Coercive Demands</h3>
                                                    <p className="text-xs text-gray-600 m-0">Entrepreneurs targeted by trademark squatters demanding exorbitant buy-out or licensing fees for a dead mark.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: WHERE TO FILE */}
                                    <section id="forum-jurisdiction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Where to File: Registry vs High Court IPD
                                        </h2>
                                        <p>
                                            Historically, rectification applications were filed before the Intellectual Property Appellate Board (IPAB). However, following the enactment of the <strong>Tribunals Reforms Act, 2021</strong>, the IPAB was abolished, and statutory rectification jurisdiction was transferred directly to the <strong>High Courts</strong>.
                                        </p>
                                        <p>
                                            Today, an applicant seeking cancellation under Section 47 has two distinct jurisdictional pathways:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center space-x-2 text-[#6E5E93] font-bold text-sm mb-3">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-4 h-4" />
                                                    <span>Option 1: Trade Marks Registry</span>
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Filing Before the Registrar</h3>
                                                <ul className="text-xs sm:text-sm text-gray-600 space-y-2 mb-4">
                                                    <li>• Filed online via the IP India portal using <strong>Form TM-O</strong>.</li>
                                                    <li>• Handled by the Hearing Officer / Registrar of Trade Marks at the appropriate branch (Delhi, Mumbai, Chennai, Kolkata, or Ahmedabad).</li>
                                                    <li>• Lower statutory filing fees (₹2,700 for MSME/startups, ₹9,000 for corporates).</li>
                                                    <li>• Best suited when there is no active court litigation between the parties.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-sm bg-gradient-to-b from-purple-50/30 to-white">
                                                <div className="flex items-center space-x-2 text-purple-900 font-bold text-sm mb-3">
                                                    <FontAwesomeIcon icon={faGavel} className="w-4 h-4 text-[#6E5E93]" />
                                                    <span>Option 2: High Court IPD</span>
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Filing Before the High Court</h3>
                                                <ul className="text-xs sm:text-sm text-gray-600 space-y-2 mb-4">
                                                    <li>• Filed before the High Court having jurisdiction (e.g., Delhi High Court Intellectual Property Division - IPD).</li>
                                                    <li>• Mandatory under <strong>Section 124</strong> if a trademark infringement suit is already pending before a civil court.</li>
                                                    <li>• Expedited judicial hearings with power to issue immediate interim injunctions and cross-examination.</li>
                                                    <li>• Higher professional legal costs, but delivers conclusive judicial resolution.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: 7-STEP PROCEDURE */}
                                    <section id="step-by-step" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faDiagramProject} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Step-by-Step Procedure for Trademark Cancellation
                                        </h2>
                                        <p>
                                            Filing a successful Section 47 cancellation requires strict adherence to statutory evidentiary timelines under the <strong>Trade Marks Rules, 2017</strong>. Below is the systematic 7-step process:
                                        </p>

                                        <div className="space-y-4 my-6 not-prose">
                                            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Pre-Filing Market Due Diligence</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        Conduct thorough online searches, physical retail audits, e-commerce reviews (Amazon, Flipkart, Blinkit, Zepto), domain checks, ROC/MCA filings, and GST status checks to verify total absence of commercial use.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Investigator Affidavit & Evidence Dossier</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        Engage an independent market investigator to compile an exhaustive Investigation Report and execute a sworn <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[#6E5E93] font-semibold hover:underline">Affidavit of Non-Use</Link> affirming that no goods/services bearing the mark exist in commercial circulation.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Drafting Statement of Grounds & Form TM-O</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        Draft a comprehensive Statement of Case setting out the applicant&rsquo;s locus standi as an aggrieved person, the exact registration timeline (5 years + 3 months calculation), and precise grounds under Section 47(1)(a) or 47(1)(b).
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Online E-Filing & Power of Attorney</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        File the application electronically on Form TM-O (or High Court rectification petition) accompanied by <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[#6E5E93] font-semibold hover:underline">Form TM-48 Power of Attorney</Link> and remittance of statutory government fees.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Service of Notice & Counter-Statement</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        The Registry serves official notice along with the statement of grounds upon the registered proprietor. The proprietor must file a Counter-Statement on Form TM-O within <strong>2 months</strong> (Rule 97/98), failing which the non-use claim may be admitted ex-parte.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">6</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Evidentiary Pleadings & Rebuttal</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        Both parties submit evidence by way of affidavits under Rule 99 and Rule 100. The registered proprietor bears the burden of demonstrating genuine commercial use or establishing statutory defenses.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">7</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Final Hearing & Rectification Order</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        The Registrar or High Court Judge hears oral arguments. Upon finding continuous non-use without valid defense, an order is issued directing the Registry to <strong>cancel the mark, expunge it from the Register</strong>, and publish the removal in the Trade Marks Journal.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: GENUINE VS SHAM USE */}
                                    <section id="genuine-use-vs-sham" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Genuine Commercial Use vs Sham Token Use
                                        </h2>
                                        <p>
                                            In Section 47 proceedings, the core legal battlefield centers on what constitutes <strong>&ldquo;bona fide use&rdquo;</strong> in the course of trade. The registered proprietor cannot defeat a cancellation petition by producing manufactured, sporadic, or artificial evidence.
                                        </p>

                                        <div className="overflow-x-auto my-6 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 text-xs uppercase tracking-wider">
                                                        <th className="p-4 border-b border-gray-200">Evidence Category</th>
                                                        <th className="p-4 border-b border-gray-200 text-emerald-800">Bona Fide Commercial Use (Accepted)</th>
                                                        <th className="p-4 border-b border-gray-200 text-rose-800">Token / Sham Use (Rejected by Courts)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs sm:text-sm divide-y divide-gray-200 bg-white">
                                                    <tr>
                                                        <td className="p-4 font-bold text-gray-900">Sales & Invoicing</td>
                                                        <td className="p-4 text-gray-700">Regular commercial tax invoices (GST) to arms-length third-party buyers over sustained periods.</td>
                                                        <td className="p-4 text-gray-700">Isolated, single-invoice sales to friends, family, or internal subsidiary companies.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-bold text-gray-900">Market Distribution</td>
                                                        <td className="p-4 text-gray-700">Active distribution networks, wholesale dealer billings, retail shelf placements, e-commerce dispatches.</td>
                                                        <td className="p-4 text-gray-700">Display of a mock product on a social media handle without any facility for customer purchasing.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-bold text-gray-900">Digital Presence</td>
                                                        <td className="p-4 text-gray-700">Active website with integrated checkout, processed customer orders, and customer reviews.</td>
                                                        <td className="p-4 text-gray-700">&ldquo;Under Construction&rdquo; landing pages or holding domain names without actual commercial operations.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-bold text-gray-900">Volume of Trade</td>
                                                        <td className="p-4 text-gray-700">Commercial quantities commensurate with the size and nature of the specific industry.</td>
                                                        <td className="p-4 text-gray-700">Micro-quantities (e.g., selling 5 bottles of shampoo in 5 years) strictly to preserve legal rights.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p>
                                            In <em>Hardie Trading Ltd. v. Addison Paints & Chemicals Ltd. (2003)</em>, the Supreme Court clarified that while physical sale of goods on the market is the clearest proof of use, actions exhibiting a concrete, unmistakable commercial readiness to launch goods (such as extensive commercial manufacturing contracts and regulatory export shipments) can also qualify under exceptional conditions.
                                        </p>
                                    </section>

                                    {/* SECTION 8: SPECIAL CIRCUMSTANCES DEFENSE */}
                                    <section id="special-circumstances" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Statutory Defenses: Special Circumstances in Trade
                                        </h2>
                                        <p>
                                            Section 47(3) of the Trade Marks Act provides the registered proprietor with an affirmative statutory defense. If the proprietor can prove that non-use was caused by <strong>&ldquo;special circumstances in the trade&rdquo;</strong> and not by an intention to abandon the mark, the cancellation petition will be dismissed.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                                            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
                                                <h3 className="text-sm font-bold text-emerald-950 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    Valid Special Circumstances (Accepted)
                                                </h3>
                                                <ul className="text-xs sm:text-sm text-emerald-900 space-y-2">
                                                    <li>• <strong>Statutory Import/Export Bans:</strong> Total government ban on raw material or product imports.</li>
                                                    <li>• <strong>Mandatory Regulatory Delays:</strong> Awaiting statutory drug approval from the DCGI / CDSCO despite continuous, documented efforts.</li>
                                                    <li>• <strong>War & Civil Emergency:</strong> Disruption of national or international trade due to armed conflict or government sanctions.</li>
                                                    <li>• <strong>Judicial Injunctions:</strong> Active court orders restraining manufacturing or marketing during the 5-year window.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-rose-50/60 p-6 rounded-2xl border border-rose-200">
                                                <h3 className="text-sm font-bold text-rose-950 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faBan} className="w-4 h-4 text-rose-600 mr-2" />
                                                    Invalid Defenses (Rejected by Courts)
                                                </h3>
                                                <ul className="text-xs sm:text-sm text-rose-900 space-y-2">
                                                    <li>• <strong>Financial Difficulties:</strong> Lack of operational funds, capital constraints, or economic downturn.</li>
                                                    <li>• <strong>Internal Corporate Disputes:</strong> Boardroom battles, shareholder litigation, or partnership breakups.</li>
                                                    <li>• <strong>Lack of Market Demand:</strong> Commercial decision to delay launch due to poor profitability forecasts.</li>
                                                    <li>• <strong>Management Neglect:</strong> Forgetting to market or license the brand name.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p>
                                            In <em>American Home Products v. Mac Laboratories (1986)</em>, the Supreme Court stressed that the circumstances must affect the <em>entire trade or industry</em> generally, or arise from external legal impossibility, rather than being an individual handicap unique to the proprietor&rsquo;s internal balance sheet.
                                        </p>
                                    </section>

                                    {/* SECTION 9: PARTIAL CANCELLATION */}
                                    <section id="partial-cancellation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Partial Cancellation & Goods Limitation Rules
                                        </h2>
                                        <p>
                                            In many trademark disputes, the registered owner has indeed used the brand, but only on a single specific product, while their registration covers an entire class containing dozens of unrelated items.
                                        </p>
                                        <p>
                                            For example, a company registers a trademark for <em>&ldquo;All pharmaceutical and medicinal preparations&rdquo;</em> in Class 5, but commercially manufactures only <em>&ldquo;cough syrup&rdquo;</em>. When another company attempts to register the same name for <em>&ldquo;eye drops&rdquo;</em>, can the entire mark be cancelled?
                                        </p>

                                        <div className="bg-gradient-to-r from-purple-50 via-white to-indigo-50 p-6 rounded-2xl border border-purple-200 my-6 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-2">The Landmark &lsquo;Charminar&rsquo; Precedent (Vishnudas Trading Case)</h3>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                                                In the historic <em>Vishnudas Trading v. Vazir Sultan Tobacco Co. Ltd. (1997)</em> ruling, the Supreme Court held that where a trademark is registered for a broad genus of goods under a single class, but the proprietor has only commercially used it for a specific species (e.g., cigarettes), a rival trader who uses the mark for a different species (e.g., zarda/quiwam) is entitled to seek <strong>partial rectification / limitation</strong> under Section 47.
                                            </p>
                                            <div className="p-3 bg-white rounded-xl border border-purple-100 text-xs text-purple-900 font-semibold">
                                                <strong>Outcome:</strong> The registration is not completely expunged; instead, the Trade Marks Register is rectified to exclude the unused goods, allowing both businesses to coexist peacefully.
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: EVIDENCE & INVESTIGATION */}
                                    <section id="evidence-standards" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faEye} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Evidence Required & Market Investigation Standards
                                        </h2>
                                        <p>
                                            Under Indian evidence law, the initial burden of establishing a <em>prima facie</em> case of continuous non-use rests upon the applicant seeking cancellation. Once the applicant produces credible market investigation evidence, the evidentiary burden shifts entirely to the registered proprietor to prove active commercial use.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 not-prose">
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <span className="block font-bold text-gray-900 text-sm mb-1">1. Market Survey Report</span>
                                                <p className="text-xs text-gray-600 m-0">Detailed market investigation conducted across major wholesale distribution hubs, retail stores, and online marketplaces.</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <span className="block font-bold text-gray-900 text-sm mb-1">2. Statutory Records Audit</span>
                                                <p className="text-xs text-gray-600 m-0">MCA / ROC balance sheet inspections, GST active registration checks, and trademark journal records showing dormancy.</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                                <span className="block font-bold text-gray-900 text-sm mb-1">3. Investigator Affidavit</span>
                                                <p className="text-xs text-gray-600 m-0">A formal sworn affidavit executed by the private investigator affirming the scope, methodology, and negative findings.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: COMPARISON TABLE */}
                                    <section id="comparison-table" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Key Legal Comparisons: Cancellation vs Rectification
                                        </h2>
                                        <p>
                                            Understanding the distinction between Section 47 (Non-Use Removal), Section 57 (General Rectification / Invalidity), and Section 21 (Opposition) is essential for developing an effective IP litigation strategy:
                                        </p>

                                        <div className="overflow-x-auto my-6 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 text-xs uppercase tracking-wider">
                                                        <th className="p-4 border-b border-gray-200">Legal Parameter</th>
                                                        <th className="p-4 border-b border-gray-200 text-[#6E5E93]">Section 47 (Non-Use Removal)</th>
                                                        <th className="p-4 border-b border-gray-200 text-indigo-900">Section 57 (Rectification / Invalidity)</th>
                                                        <th className="p-4 border-b border-gray-200 text-amber-900">Section 21 (Opposition)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs sm:text-sm divide-y divide-gray-200 bg-white">
                                                    <tr>
                                                        <td className="p-4 font-bold text-gray-900">Timing of Filing</td>
                                                        <td className="p-4 text-gray-700">Post-Registration (After 5 years & 3 months of registration).</td>
                                                        <td className="p-4 text-gray-700">Post-Registration (Anytime after registration certificate is issued).</td>
                                                        <td className="p-4 text-gray-700">Pre-Registration (Within 4 months of Journal publication).</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-bold text-gray-900">Primary Legal Grounds</td>
                                                        <td className="p-4 text-gray-700">Continuous non-use or lack of bona fide intention to use.</td>
                                                        <td className="p-4 text-gray-700">Improper registration, fraud, genericness, bad faith, or invalidity.</td>
                                                        <td className="p-4 text-gray-700">Section 9 absolute grounds or Section 11 relative grounds.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-bold text-gray-900">Who Can File</td>
                                                        <td className="p-4 text-gray-700">&ldquo;Person Aggrieved&rdquo; having commercial injury or conflict.</td>
                                                        <td className="p-4 text-gray-700">&ldquo;Person Aggrieved&rdquo; (or Registrar suomotu).</td>
                                                        <td className="p-4 text-gray-700">Any person (no commercial grievance required).</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 font-bold text-gray-900">Applicable Form</td>
                                                        <td className="p-4 text-gray-700">Form TM-O (or High Court IPD Petition).</td>
                                                        <td className="p-4 text-gray-700">Form TM-O (or High Court IPD Petition).</td>
                                                        <td className="p-4 text-gray-700">Form TM-O Notice of Opposition.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 12: STATUTORY FEES */}
                                    <section id="statutory-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileSignature} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Government Fee Schedule & Forms
                                        </h2>
                                        <p>
                                            The statutory government fees for filing an application for cancellation/rectification before the Registrar under the First Schedule of the Trade Marks Rules, 2017 are structured as follows:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-3 py-1 bg-purple-100 text-[#6E5E93] text-xs font-bold rounded-full uppercase">Concession Category</span>
                                                    <span className="text-xs text-gray-500 font-semibold">Form TM-O</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Individuals, Startups & MSMEs</h3>
                                                <div className="text-2xl font-extrabold text-[#6E5E93] mb-3">₹2,700 <span className="text-xs text-gray-500 font-normal">/ class (E-filing)</span></div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                                                    For applicants holding a valid <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[#6E5E93] font-semibold hover:underline">Udyam MSME or DPIIT Startup certificate</Link>. Physical paper filing fee is ₹3,000 per class.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full uppercase">Standard Corporate</span>
                                                    <span className="text-xs text-gray-500 font-semibold">Form TM-O</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Companies, LLPs & Partnerships</h3>
                                                <div className="text-2xl font-extrabold text-gray-900 mb-3">₹9,000 <span className="text-xs text-gray-500 font-normal">/ class (E-filing)</span></div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                                                    For private limited companies, foreign corporations, and partnerships without MSME recognition. Physical paper filing fee is ₹10,000 per class.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 13: FAQS */}
                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4 not-prose">
                                            {faqs.map((faq, index) => (
                                                <details key={index} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-200 open:shadow-md">
                                                    <summary className="flex items-center justify-between p-5 cursor-pointer select-none bg-white hover:bg-gray-50/50 transition-colors">
                                                        <span className="text-sm sm:text-base font-bold text-gray-900 pr-4">{faq.question}</span>
                                                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </summary>
                                                    <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/30">
                                                        {faq.answer}
                                                    </div>
                                                </details>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 14: STRATEGIC TAKEAWAYS */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-8 md:pt-12 border-t border-gray-100 mt-8 md:mt-12">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-[#6E5E93] mr-3" />
                                            Strategic Legal Takeaways for Brand Custodians
                                        </h2>

                                        <p>
                                            Section 47 of the Trade Marks Act, 1999 serves as a vital equilibrating mechanism in Indian intellectual property law. It reinforces the core principle that statutory brand monopolies are granted for active commercial presence and genuine consumer recognition, not for speculative warehousing, defensive hoarding, or anticompetitive blocking of new market entrants.
                                        </p>

                                        <p>
                                            For startups and growing enterprises facing citation objections under Section 11, Section 47 offers a definitive legal pathway to expunge deadwood registrations and unlock brand exclusivity. Conversely, for established brand owners, it serves as a strict reminder that trademark protection requires continuous commercial vigilance, disciplined archiving of GST sales records, and strategic maintenance of <Link href="/what-is-associated-trademark-in-india-section-16" className="text-[#6E5E93] font-semibold hover:underline">associated trademarks under Section 16</Link> to repel non-use challenges.
                                        </p>

                                        <p>
                                            Before initiating cancellation proceedings on Form TM-O or defending against a non-use petition, ensure you collaborate with experienced trademark litigation attorneys who can conduct rigorous market surveys, establish incontrovertible investigator evidence, and formulate robust arguments before the Trade Marks Registry or the High Court Intellectual Property Division (IPD).
                                        </p>

                                        <div className="bg-gradient-to-br from-purple-900 via-[#2A2A38] to-[#1A1A24] text-white p-8 rounded-3xl shadow-xl not-prose mt-8">
                                            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Need Expert Help Clearing an Abandoned Trademark?</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-2xl">
                                                Our senior intellectual property litigators provide comprehensive market investigation, evidence affidavit preparation, Form TM-O drafting, and High Court IPD advocacy to unblock your brand.
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs text-purple-200">
                                                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                                    <span className="font-bold text-white block mb-1">For Challengers & Startups:</span>
                                                    Conduct rigorous market surveys to ensure the 5-year and 3-month statutory non-use timeline has fully matured before filing Form TM-O.
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                                    <span className="font-bold text-white block mb-1">For Registered Brand Owners:</span>
                                                    Maintain structured archives of GST sales invoices, distributor contracts, and associated registrations to defeat non-use claims.
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                                    <button className="w-full bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider">
                                                        Schedule Legal Consultation &rarr;
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="w-full sm:w-auto flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl border border-white/10 transition-all text-xs">
                                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                                    Call Litigator: +91-9289707648
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>
                            </div>
                        </main>

                        {/* RIGHT SIDEBAR */}
                        <aside className="hidden lg:block space-y-8 lg:sticky lg:top-32">
                            {/* Consultation Box */}
                            <div className="bg-gradient-to-br from-purple-900 via-[#2A2A38] to-[#1A1A24] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-800/30">
                                <div className="inline-flex items-center bg-white/10 rounded-full px-3 py-1 mb-4 text-[11px] font-bold tracking-wider text-purple-200 uppercase">
                                    <FontAwesomeIcon icon={faShieldHalved} className="w-3 h-3 mr-1.5 text-pink-400" />
                                    IP Rectification Litigators
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">Remove Dormant Trademark Blockers</h3>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                                    Is an inactive trademark registration preventing your brand approval? Our senior trademark litigators handle market investigation, Form TM-O drafting, and High Court IPD rectification.
                                </p>
                                <div className="space-y-3">
                                    <Link href="/e-filing-trademark" className="block w-full">
                                        <button className="w-full bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-4 rounded-xl transition-all text-xs uppercase tracking-wider shadow-lg">
                                            Consult Litigator Now &rarr;
                                        </button>
                                    </Link>
                                    <a href="tel:+919289707648" className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl border border-white/10 transition-all text-xs">
                                        <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                        Call: +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Quick Takeaways Box */}
                            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 shadow-sm">
                                <h3 className="text-xs font-black text-amber-900 mb-3 uppercase tracking-widest flex items-center">
                                    <FontAwesomeIcon icon={faLightbulb} className="w-3.5 h-3.5 text-amber-600 mr-2" />
                                    Key Section 47 Takeaways
                                </h3>
                                <ul className="space-y-3 text-xs text-amber-950 font-medium">
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Governed by Section 47 of Trade Marks Act 1999.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Requires continuous 5 years non-use + 3 months buffer.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>5-year clock starts from registration certificate date.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Applicant must qualify as a &ldquo;Person Aggrieved&rdquo;.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Filed on Form TM-O or High Court IPD petition.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Section 47(3) allows defense of special trade circumstances.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-xs font-black text-gray-500 mb-4 uppercase tracking-widest">Related Legal Guides</h3>
                                <ul className="space-y-4 text-xs font-semibold text-gray-800">
                                    <li>
                                        <Link href="/what-is-associated-trademark-in-india-section-16" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faLink} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Associated Trademarks (Sec 16)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Passing Off vs Infringement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faFileLines} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Trademark User Affidavit Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faFileContract} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Form TM-48 Power of Attorney</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-trademark" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faRotate} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>How to Renew a Trademark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faStamp} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>MSME / Startup TM Concessions</span>
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
