import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faScaleBalanced,
    faClock,
    faFileLines,
    faCheckCircle,
    faTriangleExclamation,
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faGavel,
    faBuildingColumns,
    faVideo,
    faUserTie,
    faReceipt,
    faHourglassHalf,
    faBan,
    faRotateRight,
    faPhone,
    faStamp
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Request Trademark Hearing Adjournment: Form TM-M",
    description: validateAndNormalizeDescription(
        "Request trademark hearing adjournment in India via Form TM-M. Learn Rule 50(2) fees, genuine grounds, portal steps, and avoid abandonment.",
        "app/how-to-request-adjournment-trademark-hearing-india/page.tsx"
    ),
    keywords: [
        "how to request adjournment for trademark show cause hearing in india",
        "form tm m adjournment trademark hearing india",
        "trademark hearing adjournment rule 50 2 trade marks rules 2017",
        "reschedule trademark video conferencing hearing ip india",
        "trademark show cause hearing adjournment fee",
        "what happens if i miss trademark hearing india",
        "form tm m statutory fee msme individual company",
        "trademark hearing date extension application format",
        "restore abandoned trademark after missing hearing rule 33",
        "emergency trademark hearing adjournment email procedure"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-request-adjournment-trademark-hearing-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How to Request Trademark Hearing Adjournment: Form TM-M",
        description: "Request trademark hearing adjournment in India via Form TM-M. Learn Rule 50(2) fees, genuine grounds, portal steps, and avoid abandonment.",
        url: "https://www.iprkaro.com/how-to-request-adjournment-trademark-hearing-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-request-adjournment-trademark-hearing-india.png",
                width: 1200,
                height: 630,
                alt: "How to Request Adjournment for Trademark Show Cause Hearing in India Form TM-M Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Request Trademark Hearing Adjournment: Form TM-M",
        description: "Request trademark hearing adjournment in India via Form TM-M. Learn Rule 50(2) fees, genuine grounds, portal steps, and avoid abandonment.",
        images: ["https://www.iprkaro.com/images/og/how-to-request-adjournment-trademark-hearing-india.jpg"],
    }
};

const faqs = [
    {
        question: "What is the official procedure to request an adjournment for a trademark hearing in India?",
        answer: "To request an adjournment for a Trademark Show Cause Hearing in India, the applicant or authorized trademark attorney must file Form TM-M under Rule 50(2) or Rule 115 of the Trade Marks Rules, 2017 on the official IP India portal (ipindiaonline.gov.in). The filing must include a detailed application letter stating genuine, bona fide grounds (such as medical emergency, pre-fixed court matters, or ongoing settlement), pay the statutory government fee, and be submitted at least 3 days prior to the scheduled hearing date."
    },
    {
        question: "What is the official government statutory fee for filing Form TM-M for hearing adjournment?",
        answer: "As per the First Schedule of the Trade Marks Rules, 2017, the official government e-filing fee for Form TM-M seeking hearing adjournment is ₹900 for Individuals, Startups, and MSME/Udyam registered enterprises. For other entities (Partnership firms, LLPs, Private Limited companies, and large corporations), the official e-filing fee is ₹1,800 to ₹2,000. Physical paper filings at the branch registry counter attract an additional surcharge."
    },
    {
        question: "How many adjournments are legally permitted for a trademark show cause hearing?",
        answer: "Under Rule 50(2) of the Trade Marks Rules, 2017, a party is ordinarily permitted a maximum of two to three adjournments during the prosecution of a trademark application. Furthermore, each adjournment granted by the Hearing Officer shall not exceed thirty (30) days. Habitual or unjustified adjournment requests beyond the statutory limit are liable to be summarily rejected."
    },
    {
        question: "How many days before the scheduled hearing date must Form TM-M be submitted?",
        answer: "Under statutory guidelines and standard operating procedures (SOPs) issued by the Controller General of Patents, Designs and Trade Marks (CGPDTM), the adjournment application via Form TM-M must be filed at least three (3) working days prior to the date fixed for the hearing. This mandatory window ensures that the Registry staff can process the request, upload the entry onto the electronic file, and notify the presiding Hearing Officer before the daily cause list is locked."
    },
    {
        question: "What happens if an applicant or attorney fails to attend the trademark show cause hearing?",
        answer: "If neither the applicant nor their authorized trademark attorney appears during the scheduled video conference (VC) roll call and no formal Form TM-M adjournment has been taken on record, the Hearing Officer will mark the application as 'Abandoned' under Rule 33(4) or Rule 50(3) of the Trade Marks Rules, 2017 for lack of prosecution, or proceed to refuse the application ex-parte on merits."
    },
    {
        question: "Can I request an emergency same-day adjournment if a sudden medical crisis occurs?",
        answer: "Yes. If an unexpected emergency occurs on the hearing date (e.g., sudden severe illness or critical technical blackout), the attorney or authorized representative should immediately file Form TM-M on the IP India portal, send an urgent email marked 'URGENT: Hearing Adjournment Request' with the CBR receipt and medical proof to the jurisdictional Hearing Officer's official email, and log into the VC meeting briefly to make an oral mention on record."
    },
    {
        question: "Can a trademark application be restored if it was marked 'Abandoned' due to a missed hearing?",
        answer: "Yes. If an application has been erroneously or unavoidably marked as abandoned due to non-appearance, the applicant can file a Petition for Restoration / Review under Section 128 of the Trade Marks Act, 1999 along with Form TM-M and a detailed User Affidavit within thirty (30) days from the abandonment order, establishing genuine sufficient cause for non-appearance."
    },
    {
        question: "Is physical presence required at the Trade Marks Registry for show cause hearings in India?",
        answer: "No. Since 2020, the Trade Marks Registry conducts virtually all show cause hearings online via Video Conferencing (VC) platforms such as Cisco Webex. However, if an applicant specifically desires a physical in-person hearing or if the matter involves voluminous physical evidence, they can file a specific request via Form TM-M seeking a physical hearing bench."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "statutory-rules", title: "Statutory Basis & Rule 50(2)" },
    { id: "valid-grounds", title: "Valid Grounds for Adjournment" },
    { id: "invalid-grounds", title: "Grounds Liable for Rejection" },
    { id: "statutory-fees", title: "Form TM-M Fee Structure" },
    { id: "step-by-step-portal-guide", title: "IP India E-Filing Process" },
    { id: "adjournment-petition-format", title: "Drafting the Request Letter" },
    { id: "emergency-adjournment", title: "Same-Day VC Mention" },
    { id: "abandonment-risks", title: "Non-Appearance & Rule 33(4)" },
    { id: "remedies-rehearing", title: "Restoration & Review Options" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "expert-assistance", title: "Strategic Legal Representation" },
];

export default function TrademarkHearingAdjournmentGuidePage() {
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
        "headline": "How to Request Adjournment for Trademark Show Cause Hearing in India: Form TM-M Guide",
        "description": "Comprehensive legal guide on requesting an adjournment for a Trademark Show Cause Hearing in India using Form TM-M under Rule 50(2) of Trade Marks Rules 2017.",
        "image": "https://www.iprkaro.com/images/og/how-to-request-adjournment-trademark-hearing-india.png",
        "datePublished": "2026-09-29T10:30:00+05:30",
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
            "@id": "https://www.iprkaro.com/how-to-request-adjournment-trademark-hearing-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Request Adjournment for Trademark Show Cause Hearing in India: Form TM-M Guide",
        "url": "https://www.iprkaro.com/how-to-request-adjournment-trademark-hearing-india",
        "description": "Step-by-step procedural manual to seek adjournment of trademark show-cause hearing on IP India portal via Form TM-M under Rule 50(2).",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-request-adjournment-trademark-hearing-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-request-adjournment-trademark-hearing-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Hearing Adjournment Guide", "item": "https://www.iprkaro.com/how-to-request-adjournment-trademark-hearing-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure to File Form TM-M for Trademark Hearing Adjournment in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Identify the Scheduled Hearing Date and Jurisdictional Cause List Notice" },
            { "@type": "ListItem", "position": 2, "name": "Establish Legitimate Grounds and Gather Supporting Evidentiary Exhibits" },
            { "@type": "ListItem", "position": 3, "name": "Draft the Formal Adjournment Petition Addressed to the Registrar of Trade Marks" },
            { "@type": "ListItem", "position": 4, "name": "Log in to IP India E-Filing Portal with Class 3 Digital Signature Certificate" },
            { "@type": "ListItem", "position": 5, "name": "Select Form TM-M under Rule 50(2) and Enter Application Details" },
            { "@type": "ListItem", "position": 6, "name": "Upload Searchable PDF Petition and Affix Cryptographic Digital Signature" },
            { "@type": "ListItem", "position": 7, "name": "Pay Statutory Government Fee (₹900 for MSME/Individual or ₹1800 for Others) and Obtain CBR Receipt" },
            { "@type": "ListItem", "position": 8, "name": "Transmit CBR Receipt and Adjournment Copy to the Hearing Officer via Registered Email" }
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
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trade Marks Rules 2017 &bull; Rule 50(2) Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to Request Adjournment for Trademark <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Show Cause Hearing</span> in India: Form TM-M Guide
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Facing an unexpected scheduling conflict, medical crisis, or missing crucial evidentiary documents before your IP India Video Conference (VC) Show Cause Hearing? Failing to appear can trigger automatic<strong>statutory abandonment under Rule 33(4)</strong>. Discover the complete step-by-step legal protocol to file<strong>Form TM-M under Rule 50(2)</strong>, calculate government fees (₹900 for MSME/Individuals vs ₹1,800 for Corporate Entities), draft airtight adjournment petitions, and secure a 30-day hearing extension without risking your brand registration.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 29-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Statutory Rule 50(2) Manual</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Form TM-M Adjournment <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Urgent Hearing Help: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/how-to-request-adjournment-trademark-hearing-india.png"
                                    alt="How to Request Adjournment for Trademark Show Cause Hearing in India Form TM-M Guide"
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
                        { label: "Hearing Adjournment Guide", href: "/how-to-request-adjournment-trademark-hearing-india" }
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
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist &bull; Verified IP Attorney</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Hearing Adjournment
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                To request an adjournment for a Trademark Show Cause Hearing in India, the applicant or authorized trademark attorney must file <strong>Form TM-M</strong> under <strong>Rule 50(2) of the Trade Marks Rules, 2017</strong> on the IP India e-filing portal (ipindiaonline.gov.in) at least <strong>3 days prior</strong> to the scheduled hearing date. The filing requires payment of the prescribed statutory fee (<strong>₹900</strong> for Individuals/Startups/MSMEs and <strong>₹1,800</strong> for Companies/LLPs) and must be accompanied by a formal petition stating bona fide grounds, such as counsel pre-engagement, medical illness, or ongoing settlement negotiations. Under Rule 50(2), an applicant is allowed a maximum of 2 to 3 adjournments, with each extension capped at 30 days.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            When an applicant files a trademark application in India, the Trade Marks Registry conducts an initial examination. If the examiner raises objections under <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 9 (absolute grounds)</Link> or <Link href="/deceptive-similarity-trademark-test-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 11 (deceptive similarity / relative grounds)</Link>, the applicant submits a written response. If the Hearing Officer deems the written reply unsatisfactory, the application is scheduled for a formal <strong>Show Cause Hearing</strong> before the Registrar of Trade Marks under Rule 33(4).
                                        </p>
                                        <p className="mb-6">
                                            Historically conducted in physical hearing rooms across the five jurisdictional registry branches (Mumbai, Delhi, Chennai, Kolkata, and Ahmedabad), hearings are now predominantly held online via Video Conferencing (VC). However, unavoidable emergencies frequently arise: key advocates face listing clashes before the High Court, business owners fall ill, or parties require additional time to execute a <Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Trademark Coexistence Agreement</Link>.
                                        </p>
                                        <p className="mb-6">
                                            Under Indian trademark law, you cannot simply skip the video conference or send an informal WhatsApp message to the hearing officer. Missing a scheduled hearing without a formally filed <strong>Form TM-M</strong> on record triggers the fatal status of <em>&ldquo;Abandoned&rdquo;</em> under Rule 33(4) of the Trade Marks Rules, 2017. This guide covers every nuance of drafting, filing, and tracking your hearing adjournment petition.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY BASIS & RULE 50(2) */}
                                    <section id="statutory-rules" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingColumns} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Framework: Rule 50(2) &amp; Rule 115
                                        </h2>
                                        <p className="mb-6">
                                            The authority of the Registrar to grant an adjournment and the rights of the applicant to seek postponement of a trademark hearing are governed by statutory provisions in the <strong>Trade Marks Act, 1999</strong> and the <strong>Trade Marks Rules, 2017</strong>:
                                        </p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;Rule 50(2) of Trade Marks Rules, 2017: If the applicant or opponent desires to obtain an adjournment of the hearing, he shall apply on Form TM-M accompanied by the prescribed fee at least three days before the date fixed for hearing... Provided that no party shall be given more than two or three adjournments and each adjournment shall not be for more than thirty days.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Rule 33(4) &bull; Opportunity of Being Heard</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Section 128 of the Act guarantees natural justice: no adverse order refusing an application shall be passed without affording the applicant a reasonable opportunity of being heard. Rule 33(4) empowers the Registrar to issue a Show Cause Notice when written examination replies are inadequate.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Mandatory 3-Day Advance Filing Window</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Rule 50(2) explicitly sets a statutory timeline of <strong>3 working days before the hearing</strong>. This allows registry administrative clerks to tag the Form TM-M onto the electronic dossier, ensuring the presiding Hearing Officer has full visibility when preparing the daily cause list.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Cap on Number &amp; Duration of Adjournments</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    To eliminate chronic administrative delays, the 2017 Rules restrict parties to a maximum of <strong>two to three adjournments</strong> per matter, with each extension strictly capped at a <strong>30-day window</strong>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: VALID GROUNDS FOR ADJOURNMENT */}
                                    <section id="valid-grounds" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-emerald-600" />
                                            Legitimate Grounds for Seeking Adjournment
                                        </h2>
                                        <p className="mb-6">
                                            Hearing Officers possess discretionary quasi-judicial powers under Section 128. They routinely grant adjournments when supported by cogent documentary evidence. The most widely accepted legal grounds include:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faUserTie} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Advocate Pre-Fixed Court Listing</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    When the appointed <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[#6E5E93] hover:underline font-semibold">Trademark Attorney (Form TM-48)</Link> has a conflicting, prior-scheduled physical or virtual appearance before the Supreme Court, High Court, or NCLT on the exact same date and time.
                                                </p>
                                                <div className="bg-purple-50 p-2.5 rounded-lg text-[11px] font-semibold text-[#6E5E93]">
                                                    Required Exhibit: Copy of the official High Court / Tribunal daily cause list with highlighted item number.
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                                                        <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Procuring User Invoices &amp; CA Certificate</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    When overcoming a Section 11 deceptive similarity objection under <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="text-indigo-700 hover:underline font-semibold">Section 34 prior use</Link>, the applicant requires additional days to procure certified sales invoices, advertisement records, or a CA turnover certificate.
                                                </p>
                                                <div className="bg-indigo-50 p-2.5 rounded-lg text-[11px] font-semibold text-indigo-700">
                                                    Required Exhibit: Interlocutory petition indicating the date of user claim under <Link href="/trademark-user-affidavit-format-and-rules-india" className="underline">Rule 25(2)</Link>.
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mr-3">
                                                        <FontAwesomeIcon icon={faFileContract} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Ongoing Coexistence / Settlement Talks</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    The applicant is actively negotiating an amicable resolution, Coexistence Agreement, or formal Consent Letter with the proprietor of the cited conflicting mark under Section 12.
                                                </p>
                                                <div className="bg-emerald-50 p-2.5 rounded-lg text-[11px] font-semibold text-emerald-700">
                                                    Required Exhibit: Joint representation letter or email correspondence confirming active settlement negotiations.
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 mr-3">
                                                        <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Medical Emergency or Hospitalization</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Sudden acute illness, surgical procedure, hospitalization, or bereavement in the family of the applicant proprietor or arguing trademark counsel.
                                                </p>
                                                <div className="bg-rose-50 p-2.5 rounded-lg text-[11px] font-semibold text-rose-700">
                                                    Required Exhibit: Attested medical certificate from a registered medical practitioner (RMP) or hospital admission slip.
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: INVALID GROUNDS & REJECTION RISKS */}
                                    <section id="invalid-grounds" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-red-600" />
                                            Grounds Frequently Rejected by Hearing Officers
                                        </h2>
                                        <p className="mb-6">
                                            Filing Form TM-M does not create an automatic entitlement to postponement. Hearing Officers routinely refuse frivolous or dilatory applications that fail to establish genuine necessity:
                                        </p>

                                        <div className="space-y-4 not-prose mb-8">
                                            <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl flex items-start">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 m-0">Vague Claims of &ldquo;Personal Engagement&rdquo; or &ldquo;Out of Town&rdquo;</p>
                                                    <p className="text-xs text-gray-600 mt-1 m-0">Merely asserting that the attorney is traveling without annexing flight tickets or an official court summons is considered insufficient cause.</p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl flex items-start">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 m-0">Repeated Adjournments Beyond 2 Prior Grants</p>
                                                    <p className="text-xs text-gray-600 mt-1 m-0">If the applicant has already obtained two prior adjournments, a third request without extraordinary circumstances (e.g., stay order from High Court) will be summarily dismissed on the bench.</p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl flex items-start">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 m-0">Failure to Pay the Prescribed Statutory Fee</p>
                                                    <p className="text-xs text-gray-600 mt-1 m-0">Submitting an informal letter via email without filing Form TM-M and generating an official CBR receipt has zero legal standing under Rule 50(2).</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: STATUTORY FEES */}
                                    <section id="statutory-fees" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faReceipt} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-M Statutory Government Fee Structure
                                        </h2>
                                        <p className="mb-6">
                                            The official government fee for filing Form TM-M for hearing adjournment is statutory and non-refundable. The fee structure depends on the applicant&apos;s legal constitution:
                                        </p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Applicant Category</th>
                                                        <th className="p-3.5 sm:p-4">Eligible Entities</th>
                                                        <th className="p-3.5 sm:p-4">E-Filing Fee (₹)</th>
                                                        <th className="p-3.5 sm:p-4">Physical Filing (₹)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Individual / Sole Proprietor</td>
                                                        <td className="p-3.5 sm:p-4">Natural persons, solo founders, freelancers</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">₹900</td>
                                                        <td className="p-3.5 sm:p-4">₹1,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Startup (DPIIT Recognized)</td>
                                                        <td className="p-3.5 sm:p-4">DPIIT recognized entity with certificate</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">₹900</td>
                                                        <td className="p-3.5 sm:p-4">₹1,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Small Enterprise (MSME)</td>
                                                        <td className="p-3.5 sm:p-4">Micro &amp; Small units with valid Udyam Registration</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">₹900</td>
                                                        <td className="p-3.5 sm:p-4">₹1,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Others (Corporate / Large)</td>
                                                        <td className="p-3.5 sm:p-4">Partnership, LLP, Pvt Ltd, Public Ltd, Trusts</td>
                                                        <td className="p-3.5 sm:p-4 text-purple-900 font-bold">₹1,800</td>
                                                        <td className="p-3.5 sm:p-4">₹2,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="text-xs text-gray-500 italic">
                                            Note: To claim the ₹900 concessional fee, MSME / Startup applicants must ensure their valid Udyam Registration or DPIIT Certificate is already attached to the primary application or annexed to Form TM-M.
                                        </p>
                                    </section>

                                    {/* SECTION 6: STEP-BY-STEP PORTAL GUIDE */}
                                    <section id="step-by-step-portal-guide" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faVideo} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Filing on IP India Portal
                                        </h2>
                                        <p className="mb-6">
                                            Follow this procedural workflow to electronically file Form TM-M and ensure it reaches the presiding bench before the hearing cause list locks:
                                        </p>

                                        <div className="space-y-6 not-prose my-8">
                                            <div className="flex items-start bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Log in with Class 3 Digital Signature (DSC)</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Access the official e-filing gateway at <code>ipindiaonline.gov.in</code>. Connect your registered USB token, enter your User ID, password, and DSC PIN to enter the dashboard.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Select Form TM-M from &lsquo;New Form Filing&rsquo;</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Navigate to <strong>New Form Filing &rarr; Form TM-M</strong>. In the dropdown selector for miscellaneous requests, select <em>&ldquo;Request for adjournment of hearing under Rule 50(2)&rdquo;</em>.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Enter Application Number &amp; Fetch Record</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Input your 7-digit trademark application number and select the respective Class. The system auto-populates the mark name, applicant name, and scheduled hearing bench.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Upload Adjournment Petition PDF &amp; Sign</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Attach your drafted, signed petition along with supporting proof (medical certificate or court causelist) as a searchable PDF (under 10MB). Affix your Class 3 DSC token signature.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Execute Payment &amp; Download CBR Receipt</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Complete the payment via Net Banking, Debit Card, or UPI on Bharatkosh. Immediately save the <strong>Central Book Receipt (CBR)</strong> containing your unique transaction reference.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: ADJOURNMENT PETITION FORMAT */}
                                    <section id="adjournment-petition-format" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileLines} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Drafting the Adjournment Petition Format
                                        </h2>
                                        <p className="mb-6">
                                            A well-drafted adjournment letter establishes bona fides and ensures the Hearing Officer grants a favorable 30-day date. Your petition must include these essential clauses:
                                        </p>

                                        <div className="bg-slate-900 text-gray-100 p-6 rounded-2xl shadow-lg my-6 font-mono text-xs sm:text-sm overflow-x-auto not-prose leading-relaxed border border-slate-700">
                                            <p className="text-amber-400 font-bold mb-3">// OFFICIAL DRAFTING TEMPLATE: PETITION FOR HEARING ADJOURNMENT UNDER RULE 50(2)</p>
                                            <p>BEFORE THE REGISTRAR OF TRADE MARKS, TRADE MARKS REGISTRY, [BRANCH NAME]</p>
                                            <p className="text-purple-300">IN THE MATTER OF:</p>
                                            <p>Trademark Application No. : [7-Digit Application Number]</p>
                                            <p>In Class                  : [Class Number]</p>
                                            <p>For the Word/Device Mark   : &ldquo;[TRADEMARK NAME]&rdquo;</p>
                                            <p>In the name of             : [Applicant / Enterprise Name]</p>
                                            <p>Scheduled Hearing Date     : [DD/MM/YYYY at Time Slot]</p>
                                            <br />
                                            <p className="text-yellow-300 font-bold">APPLICATION FOR ADJOURNMENT OF SHOW CAUSE HEARING UNDER RULE 50(2)</p>
                                            <br />
                                            <p>MOST RESPECTFULLY SHEWETH:</p>
                                            <p>1. That the above-captioned matter is scheduled for Show Cause Hearing before this Hon&apos;ble Tribunal on [Date] through Video Conferencing.</p>
                                            <p>2. That the Counsel / Applicant is unavoidably incapacitated from appearing on the scheduled date due to [Specific Genuine Cause: e.g., Conflicting fixed matter before Hon&apos;ble High Court / Acute Medical Illness / Settlement talks under Section 12].</p>
                                            <p>3. That this application is filed bona fide in terms of Rule 50(2) of the Trade Marks Rules, 2017 along with the prescribed statutory fee on Form TM-M.</p>
                                            <p>4. That no previous undue delay has been caused by the Applicant, and this is the [First / Second] adjournment request in the present proceeding.</p>
                                            <br />
                                            <p className="text-emerald-300 font-bold">PRAYER:</p>
                                            <p>It is therefore most respectfully prayed that this Hon&apos;ble Tribunal may be pleased to adjourn the hearing scheduled on [Date] and re-list the matter on a convenient subsequent date.</p>
                                            <br />
                                            <p>Dated: [DD/MM/YYYY] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Filed by: [Advocate / Agent Name (Code)]</p>
                                        </div>
                                    </section>

                                    {/* SECTION 8: EMERGENCY SAME-DAY ADJOURNMENT */}
                                    <section id="emergency-adjournment" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHourglassHalf} className="w-8 h-8 mr-3 text-amber-500" />
                                            Emergency Same-Day Adjournment &amp; VC Mention
                                        </h2>
                                        <p className="mb-6">
                                            If an unforeseen crisis emerges within 24 hours of the scheduled video conference (preventing the 3-day advance filing), follow this critical protocol to prevent an automatic abandonment order:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Urgent Portal Filing of Form TM-M</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    File Form TM-M on the portal immediately, even if it is the morning of the hearing day. Having an official CBR receipt generated before the hearing roll call commences is vital.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Transmit Urgent Email to the Hearing Officer</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Send an email to the official jurisdictional registry email (e.g., <code>mumbai.tmr@nic.in</code>, <code>delhi.tmr@nic.in</code>) and the specific Hearing Officer bench with the subject: <em>&ldquo;URGENT: Form TM-M Adjournment Mention - App No. [Number] - Listed Today at Item No. [X]&rdquo;</em>. Attach the CBR receipt and medical/emergency proof.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Make a Virtual Proxy Mention during Roll Call</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Have a colleague, junior counsel, or proxy advocate log into the Cisco Webex video room when the cause list item is called out. The proxy should state on record: <em>&ldquo;Sir/Madam, Form TM-M seeking adjournment under Rule 50(2) has been filed vide CBR No. [X] today morning due to sudden illness of main counsel. Kindly grant a short date.&rdquo;</em>
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: ABANDONMENT RISKS & RULE 33(4) */}
                                    <section id="abandonment-risks" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="w-8 h-8 mr-3 text-red-600" />
                                            Consequences of Non-Appearance &amp; Abandonment
                                        </h2>
                                        <p className="mb-6">
                                            Ignoring a hearing notice or failing to file Form TM-M triggers severe statutory consequences under the Trade Marks Act:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></span>
                                                    Rule 33(4) Statutory Abandonment
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                                    If neither party attends the VC hearing and no adjournment is on record, the Registrar treats the application as abandoned for want of prosecution. The status updates to <em>&ldquo;Abandoned&rdquo;</em>, forfeiting your priority filing date.
                                                </p>
                                            </div>

                                            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-amber-600 rounded-full mr-2"></span>
                                                    Ex-Parte Statutory Refusal
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                                    Alternatively, the Hearing Officer may review the case file ex-parte and issue a formal order of <em>&ldquo;Refused&rdquo;</em> under Section 18(4) for failing to rebut Section 9 or Section 11 objections in oral argument.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: REMEDIES & RESTORATION */}
                                    <section id="remedies-rehearing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRotateRight} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Remedies: Review &amp; Restoration of Abandoned Marks
                                        </h2>
                                        <p className="mb-6">
                                            If your trademark application has been marked abandoned due to an unavoidable missed hearing or technical glitch, Indian law provides robust statutory recourse:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. File a Petition for Restoration under Section 128</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Submit a formal Petition for Restoration / Re-hearing along with <Link href="/trademark-deadlines-extension-of-time-section-131-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-M (Request for Extension / Miscellaneous Review)</Link> within <strong>30 days</strong> of the abandonment order. Attach a sworn User Affidavit detailing the bona fide reason for non-appearance (such as non-receipt of hearing notice or medical incapacitation).
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. File a Review Petition under Rule 119 &bull; Form TM-M</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    If an ex-parte refusal order was passed without giving proper notice, the applicant can file an application for review of the Registrar&apos;s decision under Section 127(c) within one month from the date of communication of the order.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. High Court Commercial Appellate Jurisdiction</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Under Section 91 of the Trade Marks Act, an appeal lies before the High Court (Intellectual Property Division - IPD) against any final refusal order passed by the Registrar. Learn more about <Link href="/trademark-abandoned-how-to-restore" className="text-emerald-700 hover:underline font-semibold">how to restore an abandoned trademark</Link>.
                                                </p>
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
                                    <section id="expert-assistance" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Show Cause Hearing Representation
                                        </h2>
                                        <p className="mb-6">
                                            A Trademark Show Cause Hearing is the final, decisive stage to save an objected trademark from statutory rejection. While requesting an adjournment via Form TM-M buys critical time, effectively arguing your brand distinctiveness during the rescheduled video conference requires expert legal advocacy.
                                        </p>
                                        <p className="mb-6">
                                            Our veteran IP litigators draft rock-solid adjournment petitions, appear before hearing officers across all five Indian trademark registries, and submit persuasive case law citations to secure trademark registration certificates. For deeper guidance on trademark prosecution, explore our resources on <Link href="/trademark-hearing-notice-what-to-do" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark hearing notice checklist</Link>, <Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-[rgb(110,94,147)] hover:underline font-medium">video conference hearing procedures</Link>, and <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Emergency Hearing Adjournment &bull; Form TM-M Filing
                                                    </span>
                                                </div>

                                                <p className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Reschedule Your Trademark Hearing Today
                                                </p>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Do not risk statutory abandonment under Rule 33(4). Deploy experienced trademark attorneys to file Form TM-M, secure a 30-day adjournment, and represent your brand before the Registrar.
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
                                                    Registered Trademark Agents &bull; Form TM-M E-Filing &bull; Show Cause Video Hearing Representation &bull; All 5 TMR Benches
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
                                <p className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</p>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in Trade Marks Rules compliance, Show Cause Hearing representation, Form TM-M procedures, and high-stakes opposition litigation.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <p className="text-base font-black mb-1.5 relative z-10 leading-tight">Hearing Date Clash?</p>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Need an emergency hearing postponement or experienced advocate to argue your show cause hearing? Get expert legal support.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Request Hearing Help
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <p className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</p>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-hearing-video-conferencing-procedure-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faVideo} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">VC Hearing Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-hearing-notice-what-to-do" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCalendarDays} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Hearing Notice Steps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Overcome Objections</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Examination Reply</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-deadlines-extension-of-time-section-131-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Section 131 Extension</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-abandoned-how-to-restore" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Restore Abandoned TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48 POA Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileLines} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">User Affidavit Format</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/deceptive-similarity-trademark-test-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Deceptive Similarity</span>
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
