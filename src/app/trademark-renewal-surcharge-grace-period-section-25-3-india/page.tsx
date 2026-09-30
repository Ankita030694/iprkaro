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
    faClock,
    faRotateRight,
    faReceipt,
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Renewal with Surcharge: Section 25(3) India",
    description: validateAndNormalizeDescription(
        "Renew your expired trademark in India under Section 25(3). Learn 6-month grace period rules, Form TM-R late surcharge fees, and restoration procedures.",
        "app/trademark-renewal-surcharge-grace-period-section-25-3-india/page.tsx"
    ),
    keywords: [
        "trademark renewal with surcharge after expiration date section 25 3 india",
        "renew trademark after expiry date india",
        "form tm r surcharge fee late renewal",
        "6 months grace period trademark renewal",
        "how to save expired trademark before removal",
        "section 25 3 trade marks act 1999",
        "rule 58 trade marks rules 2017",
        "trademark renewal grace period fee msme india",
        "difference between renewal with surcharge and restoration section 25 4",
        "form o3 notice trademark removal"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-renewal-surcharge-grace-period-section-25-3-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Renewal with Surcharge: Section 25(3) India",
        description: "Renew your expired trademark in India under Section 25(3). Learn 6-month grace period rules, Form TM-R late surcharge fees, and restoration procedures.",
        url: "https://www.iprkaro.com/trademark-renewal-surcharge-grace-period-section-25-3-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-renewal-surcharge-grace-period-section-25-3-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Renewal with Surcharge 6-Month Grace Period under Section 25(3) in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Renewal with Surcharge: Section 25(3) India",
        description: "Renew your expired trademark in India under Section 25(3). Learn 6-month grace period rules, Form TM-R late surcharge fees, and restoration procedures.",
        images: ["https://www.iprkaro.com/images/og/trademark-renewal-surcharge-grace-period-section-25-3-india.png"],
    }
};

const faqs = [
    {
        question: "What is the 6-month grace period for trademark renewal under Section 25(3)?",
        answer: "Section 25(3) of the Trade Marks Act, 1999 grants a statutory 6-month grace period immediately following the expiration of a trademark's 10-year validity. During this 6-month window, the proprietor can renew the trademark by filing Form TM-R along with the standard renewal fee plus a prescribed late filing surcharge, without needing to prove special failure reasons or petition for formal restoration."
    },
    {
        question: "What is the government fee for trademark renewal with surcharge under Section 25(3)?",
        answer: "For Individuals, Startups, and MSME/Udyam registered enterprises, the official e-filing fee is ₹9,000 per class (comprising the standard renewal fee of ₹4,500 plus the statutory surcharge of ₹4,500). For non-MSME corporate bodies, partnerships, and large companies, the official e-filing fee is ₹18,000 per class (comprising ₹9,000 standard renewal fee plus ₹9,000 surcharge)."
    },
    {
        question: "What is the difference between Section 25(3) renewal with surcharge and Section 25(4) restoration?",
        answer: "Renewal with surcharge under Section 25(3) applies within the first 6 months post-expiry as a statutory right upon paying the surcharge fee. Restoration under Section 25(4) applies when the mark has expired beyond 6 months (up to 12 months post-expiry) and has been removed from the register. Restoration requires filing Form TM-R with renewal fee, restoration fee, and a comprehensive affidavit proving that the failure to renew was unintentional."
    },
    {
        question: "What form is filed for renewing an expired trademark with surcharge in India?",
        answer: "Form TM-R is filed online on the IP India e-filing portal (ipindiaonline.gov.in). The applicant selects the filing category 'Renewal of Registration with Surcharge (Section 25(3))', specifies the trademark application number and class, and completes the payment of the renewal fee and late surcharge."
    },
    {
        question: "Can the Trademark Registry remove a trademark without sending Form O-3 notice?",
        answer: "No. Under Section 25(3) and Rule 57 of the Trade Marks Rules 2017, the Registrar is statutorily obligated to issue a notice in Form O-3 between 1 to 3 months prior to expiration notifying the proprietor of the approaching expiry. Landmark High Court rulings establish that if the Registry fails to serve the Form O-3 notice, the trademark cannot be lawfully removed from the register."
    },
    {
        question: "Can an expired trademark enforce infringement rights during the 6-month grace period?",
        answer: "While the trademark's legal status is vulnerable during the expired lapse period, once renewed with surcharge under Section 25(3), the renewal takes retroactive effect from the original date of expiration. The proprietor's 10-year monopoly is preserved without any statutory break in continuity, maintaining uninterrupted rights to enforce against infringers."
    },
    {
        question: "What happens if a trademark is not renewed within the 6-month grace period?",
        answer: "If the proprietor fails to file within the 6-month Section 25(3) window, the trademark is listed for removal from the Register of Trade Marks and advertised in the Trade Marks Journal (O-3 list). The proprietor must then resort to the more cumbersome, discretionary restoration process under Section 25(4) within 1 year of expiry."
    },
    {
        question: "Does an MSME certificate provide a 50% discount on the renewal surcharge fee?",
        answer: "Yes. Under the First Schedule of the Trade Marks Rules 2017, valid Udyam MSME registration certificates or DPIIT Startup recognitions entitle the applicant to a 50% statutory fee concession across both the primary renewal fee and the late filing surcharge."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "statutory-framework", title: "Section 25(3) & Rule 58 Rules" },
    { id: "renewal-timelines", title: "Timelines: On-Time vs Late vs Restoration" },
    { id: "statutory-fees", title: "Official Surcharge Fee Structure" },
    { id: "notice-form-o3", title: "Form O-3 Notice & Judicial Protection" },
    { id: "step-by-step-filing", title: "Step-by-Step Filing on IP India" },
    { id: "section25-3-vs-25-4", title: "Section 25(3) Grace vs 25(4) Restoration" },
    { id: "consequences-of-lapse", title: "Risks of Non-Renewal & Squatting" },
    { id: "landmark-precedents", title: "High Court & Supreme Court Judgments" },
    { id: "renewal-checklist", title: "Documents & Filing Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "strategic-advice", title: "Strategic Renewal Monitoring" },
];

export default function TrademarkRenewalSurchargePage() {
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
        "headline": "Trademark Renewal with Surcharge: 6-Month Grace Period under Section 25(3) in India",
        "description": "Renew your expired trademark in India under Section 25(3). Learn 6-month grace period rules, Form TM-R late surcharge fees, and restoration procedures.",
        "image": "https://www.iprkaro.com/images/og/trademark-renewal-surcharge-grace-period-section-25-3-india.png",
        "datePublished": "2026-09-30T09:30:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-renewal-surcharge-grace-period-section-25-3-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Renewal with Surcharge: Section 25(3) India",
        "url": "https://www.iprkaro.com/trademark-renewal-surcharge-grace-period-section-25-3-india",
        "description": "Renew your expired trademark in India under Section 25(3). Learn 6-month grace period rules, Form TM-R late surcharge fees, and restoration procedures.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-renewal-surcharge-grace-period-section-25-3-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-renewal-surcharge-grace-period-section-25-3-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Renewal Surcharge Guide", "item": "https://www.iprkaro.com/trademark-renewal-surcharge-grace-period-section-25-3-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure for Trademark Renewal with Surcharge under Section 25(3)",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Verify Expiry Date and 6-Month Grace Period Window on IP India E-Register" },
            { "@type": "ListItem", "position": 2, "name": "Verify Valid MSME/Startup Status for 50% Government Surcharge Concession" },
            { "@type": "ListItem", "position": 3, "name": "Access IP India E-Filing Portal and Select Form TM-R Category" },
            { "@type": "ListItem", "position": 4, "name": "Select 'Renewal with Surcharge under Section 25(3)' Sub-Type" },
            { "@type": "ListItem", "position": 5, "name": "Attach Form TM-48 Power of Attorney if Filed Through Registered Attorney" },
            { "@type": "ListItem", "position": 6, "name": "Submit Statutory Renewal and Surcharge Fee via Gateway and Generate CBR" },
            { "@type": "ListItem", "position": 7, "name": "Track Renewal Status Until E-Register Reflects Next 10-Year Validity" }
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
                                <FontAwesomeIcon icon={faRotateRight} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Post-Registration Compliance &amp; Grace Period</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Renewal with Surcharge: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>6-Month Grace Period under Section 25(3)</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Missing your 10-year trademark renewal deadline does not mean instant forfeiture of your valuable brand monopoly. Under<strong>Section 25(3) of the Trade Marks Act, 1999</strong>and<strong>Rule 58 of the Trade Marks Rules, 2017</strong>, brand owners enjoy a mandatory<strong>6-month statutory grace period</strong>to renew expired trademarks by paying a prescribed government surcharge on<strong>Form TM-R</strong>. Master the statutory fee structures, Form O-3 mandatory notice rules, retrospective validity reinstatement, and avoidance of permanent removal.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior Trademark Attorney</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 30-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Statutory Grace Period Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Renew Expired Trademark Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Urgent Renewal Helpline: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-renewal-surcharge-grace-period-section-25-3-india.png"
                                    alt="Trademark Renewal with Surcharge 6-Month Grace Period under Section 25(3) in India"
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
                        { label: "Trademark Renewal with Surcharge", href: "/trademark-renewal-surcharge-grace-period-section-25-3-india" }
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
                                            <p className="text-xs text-gray-500 m-0">Senior Trademark Attorney &amp; IP Litigator</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRotateRight} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview &amp; Quick Answer on Section 25(3) Renewal
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Under Section 25(3) of the Trade Marks Act, 1999 and Rule 58 of the Trade Marks Rules, 2017, if a trademark proprietor fails to renew their mark on or before the 10-year expiration date, they are entitled to an unconditional 6-month statutory grace period. Within these 6 months post-expiry, the mark can be renewed by filing Form TM-R with the standard renewal fee plus a prescribed late surcharge (₹4,500 renewal + ₹4,500 surcharge for MSME/Individuals; ₹9,000 renewal + ₹9,000 surcharge for large enterprises). The renewal takes retroactive effect from the expiration date, guaranteeing unbroken legal protection.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            A registered trademark in India is granted for an initial term of 10 years computed from the application filing date. Unlike patents or designs that irrevocably lapse into the public domain upon term expiration, trademarks can be maintained indefinitely through successive 10-year renewals. However, due to administrative oversights, corporate restructuring, or attorney changes, businesses frequently miss their standard renewal deadline.
                                        </p>
                                        <p className="mb-6">
                                            The Indian Trade Marks Act recognizes the commercial disruption caused by unintended expirations. Through<strong>Section 25(3)</strong>, the legislature provides a built-in safety net. It allows late renewal as a matter of statutory right—without requiring formal affidavits of explanation, condonation of delay petitions, or discretionary hearings by the Registrar.
                                        </p>
                                        <p className="mb-6">
                                            Explore how trademark validity interacts with other statutory timelines in our guides on <Link href="/how-to-renew-a-registered-trademark-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to renew a registered trademark in India</Link>, <Link href="/how-to-restore-expired-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">restoring expired trademarks under Section 25(4)</Link>, and <Link href="/what-happens-if-trademark-expires" className="text-[rgb(110,94,147)] hover:underline font-medium">consequences of trademark expiration</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY DEFINITION & RULE 58 */}
                                    <section id="statutory-framework" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 25(3) &amp; Rule 58 Statutory Framework
                                        </h2>
                                        <p className="mb-6">
                                            The Trade Marks Act, 1999 structures trademark life-cycle maintenance under three distinct subsections of Section 25:
                                        </p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;Section 25(3): At the prescribed time before the expiration of the last registration of a trade mark, the Registrar shall send notice in the prescribed manner to the registered proprietor of the date of expiration and the conditions as to payment of fees and otherwise upon which a renewal of registration may be obtained, and, if at the expiration of the time prescribed in that behalf those conditions have not been duly complied with, the Registrar may remove the trade mark from the register: Provided that the Registrar shall not remove the trade mark from the register if an application is made in the prescribed form and the prescribed fee and surcharge are paid within six months from the expiration of the last registration.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. The Mandatory Proviso to Section 25(3)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The statutory proviso strictly prohibits the Registrar from removing the mark from the Register if an application is made in Form TM-R with the surcharge within 6 months of expiration. This creates an absolute legal right for the applicant, overriding administrative removal discretion.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Rule 58 of Trade Marks Rules, 2017</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Rule 58 sets out the procedural mechanics: An application for the renewal of the registration of a trade mark made within six months from the expiration of the last registration shall be in Form TM-R accompanied by the prescribed renewal fee and the late filing surcharge fee specified in the First Schedule.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Retroactive Continuity of Protection</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Once processed, the renewal certificate explicitly confirms that the renewed registration is effective from the date of expiration of the previous 10-year term. There is no lapse in legal title, ensuring ongoing enforcement under Section 28 and Section 29.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: RENEWAL TIMELINES */}
                                    <section id="renewal-timelines" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Renewal Timelines in India
                                        </h2>
                                        <p className="mb-6">
                                            Trademark renewal in India operates across three distinct time windows, each carrying different procedural requirements, legal rights, and financial obligations:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mr-3">
                                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">1. On-Time Renewal</h3>
                                                </div>
                                                <p className="text-xs text-emerald-900 font-bold mb-2">Window: 1 Year Prior to Expiry</p>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Filed under Section 25(2) and Rule 57. Standard official fee applies with zero surcharge. Mark remains completely active without administrative scrutiny.
                                                </p>
                                                <div className="bg-white p-2.5 rounded-lg text-[11px] font-semibold text-emerald-800 border border-emerald-200">
                                                    Fee: ₹4,500 (MSME) / ₹9,000 (Others)
                                                </div>
                                            </div>

                                            <div className="bg-purple-50/70 p-6 rounded-2xl border border-purple-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faRotateRight} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">2. Grace Period with Surcharge</h3>
                                                </div>
                                                <p className="text-xs text-purple-900 font-bold mb-2">Window: 0 to 6 Months Post-Expiry</p>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Filed under Section 25(3) and Rule 58. Mandatory grace period. Standard renewal fee plus statutory surcharge. Automatic right to renewal.
                                                </p>
                                                <div className="bg-white p-2.5 rounded-lg text-[11px] font-semibold text-[#6E5E93] border border-purple-200">
                                                    Fee: ₹9,000 (MSME) / ₹18,000 (Others)
                                                </div>
                                            </div>

                                            <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 mr-3">
                                                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">3. Restoration &amp; Renewal</h3>
                                                </div>
                                                <p className="text-xs text-amber-900 font-bold mb-2">Window: 6 to 12 Months Post-Expiry</p>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Filed under Section 25(4) and Rule 60. Mark removed from register. Requires Form TM-R with renewal + restoration fee and justification affidavit.
                                                </p>
                                                <div className="bg-white p-2.5 rounded-lg text-[11px] font-semibold text-amber-800 border border-amber-200">
                                                    Fee: ₹9,000 (MSME) / ₹18,000 (Others) + Affidavit
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: STATUTORY FEES */}
                                    <section id="statutory-fees" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faReceipt} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Official Government Fee Structure for Section 25(3)
                                        </h2>
                                        <p className="mb-6">
                                            Under the First Schedule of the Trade Marks Rules, 2017, official fees are structured based on applicant entity classification (Individual / Startup / Small Enterprise vs Large Body Corporate) and filing method (Online E-Filing vs Physical Counter Submission):
                                        </p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Applicant Category</th>
                                                        <th className="p-3.5 sm:p-4">Standard Renewal Fee</th>
                                                        <th className="p-3.5 sm:p-4">Section 25(3) Surcharge</th>
                                                        <th className="p-3.5 sm:p-4">Total E-Filing Fee</th>
                                                        <th className="p-3.5 sm:p-4">Physical Filing Fee</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">
                                                            Individual / Sole Proprietor
                                                        </td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-gray-800">₹4,500</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹4,500</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-emerald-700">₹9,000</td>
                                                        <td className="p-3.5 sm:p-4 text-gray-600">₹10,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">
                                                            Startup (DPIIT Recognised)
                                                        </td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-gray-800">₹4,500</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹4,500</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-emerald-700">₹9,000</td>
                                                        <td className="p-3.5 sm:p-4 text-gray-600">₹10,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">
                                                            Small Enterprise (Udyam MSME)
                                                        </td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-gray-800">₹4,500</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹4,500</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-emerald-700">₹9,000</td>
                                                        <td className="p-3.5 sm:p-4 text-gray-600">₹10,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">
                                                            Others (Large Co. / LLP / Pvt Ltd)
                                                        </td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-gray-800">₹9,000</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-purple-700">₹9,000</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-emerald-700">₹18,000</td>
                                                        <td className="p-3.5 sm:p-4 text-gray-600">₹20,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="text-xs text-gray-500 italic mb-6">
                                            * Note: Fees listed above are per class. For multi-class registrations, the renewal and surcharge fees are multiplied by the number of registered classes. Learn more about fee relief in our guide on <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">MSME Udyam trademark fee concessions</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 5: NOTICE IN FORM O-3 */}
                                    <section id="notice-form-o3" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form O-3 Notice &amp; Statutory Protection
                                        </h2>
                                        <p className="mb-6">
                                            A crucial protection under Indian trademark jurisprudence is the statutory obligation placed on the Registrar before any mark can be removed from the Register:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Mandatory Issuance of Form O-3</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Under Rule 57, the Registrar must send an official notice in<strong>Form O-3</strong>to the registered proprietor&apos;s address for service not less than one month and not more than three months before the expiration of the last registration. The notice must explicitly state the expiry date and renewal fee terms.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Consequences of Registry Failure to Issue Form O-3</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    In landmark rulings such as<em>Cipla Ltd. v. Registrar of Trade Marks</em>and<em>Union of India v. Malhotra Book Depot</em>, the Delhi High Court and IPAB established that the issuance of Form O-3 is a condition precedent. If the Trade Marks Registry fails to issue Form O-3 or cannot prove service on the proprietor, the removal of the trademark is deemed illegal and void ab initio.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Maintaining Updated Address for Service</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    To guarantee receipt of Form O-3, proprietors must ensure their Address for Service on the IP India portal is current. If you have changed your attorney or registered office, file<strong>Form TM-P</strong>or<strong>Form TM-M</strong>promptly. Review our guide on <Link href="/how-to-change-trademark-attorney-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to change trademark attorney in India</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: STEP-BY-STEP FILING ON IP INDIA */}
                                    <section id="step-by-step-filing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Filing of Form TM-R with Surcharge
                                        </h2>
                                        <p className="mb-6">
                                            Executing late trademark renewal under Section 25(3) requires navigating the official IP India Comprehensive E-Filing System (ipindiaonline.gov.in). Follow this streamlined 6-step procedure:
                                        </p>

                                        <div className="space-y-4 my-6 not-prose">
                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Audit Application Status on E-Register</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Log in to the IP India portal or search the Public Trademark E-Register. Confirm the exact registered filing date, expiry date, and verify that the current date falls strictly within the 6-month grace window.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Select Form TM-R on E-Filing Dashboard</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Under the &lsquo;New Application Filing&rsquo; tab, select &lsquo;Form TM-R (Application for Renewal of Registration of Trade Mark / Restoration)&rsquo;. Choose the specific radio button: &lsquo;Renewal of Registration with Surcharge (Section 25(3))&rsquo;.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Enter Application Details &amp; Auto-Fetch</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Input your Trademark Application Number and Registered Class. The system automatically populates proprietor details, word mark title, device artwork, and expiration history.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Upload Supporting Documents &amp; Authorisation</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Attach Form TM-48 (Power of Attorney) if filed through an attorney, along with the Udyam MSME Certificate or Startup recognition certificate to claim the 50% fee concession.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Sign with Class 3 DSC &amp; Complete Payment</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Digitally sign the application using a valid Class 3 Digital Signature Certificate (DSC). Pay the statutory renewal fee and surcharge via the payment gateway.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">6</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Download Central Blue Receipt (CBR)</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Generate and save the official CBR containing the TM-R receipt number. Monitor status updates until the portal reflects &lsquo;Renewed&rsquo; with the new 10-year validity milestone.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: SECTION 25(3) VS SECTION 25(4) */}
                                    <section id="section25-3-vs-25-4" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 25(3) Grace vs Section 25(4) Restoration
                                        </h2>
                                        <p className="mb-6">
                                            Understanding the fundamental legal distinction between renewal with surcharge and post-removal restoration is essential for choosing the correct procedural strategy:
                                        </p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Parameter</th>
                                                        <th className="p-3.5 sm:p-4">Renewal with Surcharge (Sec 25(3))</th>
                                                        <th className="p-3.5 sm:p-4">Restoration &amp; Renewal (Sec 25(4))</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Eligibility Window</td>
                                                        <td className="p-3.5 sm:p-4 text-purple-700 font-semibold">0 to 6 months post-expiry</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">6 to 12 months post-expiry</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Trademark Status</td>
                                                        <td className="p-3.5 sm:p-4">Expired (Not yet removed)</td>
                                                        <td className="p-3.5 sm:p-4">Removed from Register / Advertised in O-3</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Affidavit of Reasons</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">Not Required (Statutory Right)</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Mandatory (Affidavit justifying delay)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Registrar&apos;s Discretion</td>
                                                        <td className="p-3.5 sm:p-4">Mandatory acceptance upon fee</td>
                                                        <td className="p-3.5 sm:p-4">Discretionary (May reject if delay unjustified)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Risk of Third-Party Opposition</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">Extremely Low</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">High (Subject to public advertisement)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 8: CONSEQUENCES OF PERMANENT LAPSE */}
                                    <section id="consequences-of-lapse" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-red-600" />
                                            Risks of Missing the 6-Month Grace Window
                                        </h2>
                                        <p className="mb-6">
                                            Failing to utilize the Section 25(3) grace period exposes your company to severe commercial vulnerabilities and legal risks:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></span>
                                                    Loss of Amazon Brand Registry &amp; E-Commerce Badges
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                                    Marketplaces like Amazon Brand Registry and Flipkart verify registered status regularly. When a mark shifts from &lsquo;Registered&rsquo; to &lsquo;Expired/Removed&rsquo;, brand protection gates and Buy Box privileges are immediately revoked. Review our guide on <Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry requirements</Link>.
                                                </p>
                                            </div>

                                            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-amber-600 rounded-full mr-2"></span>
                                                    Third-Party Brand Squatting &amp; Trademark Filings
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                                    Under Section 25(4) proviso, a removed trade mark is cited as an obstacle against third-party filings for only one year. After that, competitors can legally file your brand name, forcing you into expensive litigation under <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off and common law rights</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: LANDMARK JUDICIAL PRECEDENTS */}
                                    <section id="landmark-precedents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Judgments on Trademark Renewal &amp; Removal
                                        </h2>
                                        <p className="mb-6">
                                            Indian courts have consistently guarded trademark owners against premature or unlawful removal by administrative authorities:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Cipla Limited v. Registrar of Trade Marks (2013)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The Intellectual Property Appellate Board (IPAB) held that the removal of a trademark without issuing statutory notice in Form O-3 under Section 25(3) violates natural justice. The removal was quashed and the mark restored.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Malhotra Book Depot v. Union of India (2012) DHC</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The Delhi High Court affirmed that issuance of notice in Form O-3 is a mandatory statutory duty. Removal of a mark from the Register without fulfilling this condition cannot deprive the proprietor of their valuable IP property.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Gufic Ltd. v. Clinique Laboratories LLC (2010)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The court held that late renewal under Section 25(3) with surcharge cures the temporal defect and restores all statutory remedies of infringement with retroactive effect from the original date of lapse.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: RENEWAL CHECKLIST */}
                                    <section id="renewal-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Filing Checklist for Form TM-R with Surcharge
                                        </h2>
                                        <p className="mb-6">
                                            Keep the following documentation and metadata ready before initiating late renewal on the portal:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-xs mb-1">Application Number &amp; Class</p>
                                                    <p className="text-xs text-gray-600 m-0">Exact 7-digit trademark registration number and registered class specification.</p>
                                                </div>
                                            </div>
                                            <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-xs mb-1">MSME / Startup Certificate</p>
                                                    <p className="text-xs text-gray-600 m-0">Valid Udyam Certificate or DPIIT Recognition letter to secure ₹4,500 fee concession.</p>
                                                </div>
                                            </div>
                                            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-xs mb-1">Form TM-48 Power of Attorney</p>
                                                    <p className="text-xs text-gray-600 m-0">Duly executed and stamped POA if filing through a registered trademark agent or attorney.</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-slate-700 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-xs mb-1">Class 3 Digital Signature (DSC)</p>
                                                    <p className="text-xs text-gray-600 m-0">Valid USB token DSC of the applicant or authorized attorney for portal signing.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions on Trademark Surcharge Renewal
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

                                    {/* SECTION 12: STRATEGIC ADVICE */}
                                    <section id="strategic-advice" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Brand Maintenance &amp; Docketing Advice
                                        </h2>
                                        <p className="mb-6">
                                            Allowing a trademark to enter the Section 25(3) grace period doubles your statutory fee outlay and exposes your brand to unnecessary operational risks. Enterprise brand owners and fast-scaling startups should implement centralized IP docketing systems to trigger automated renewal alerts 12 months, 6 months, and 3 months prior to expiration.
                                        </p>
                                        <p className="mb-6">
                                            If your trademark has already expired within the last 6 months, immediate action is paramount. Working with seasoned trademark attorneys ensures that Form TM-R is filed accurately with full surcharge compliance, protecting your continuous 10-year rights. Explore our related resources on <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48 Power of Attorney guidelines</Link>, <Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">stopping trademark infringement</Link>, and <Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">AI-powered trademark clearance search</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Urgent Expired Trademark Reinstatement
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Renew Your Expired Trademark under Section 25(3)
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Don&apos;t risk brand abandonment or third-party squatting. File Form TM-R with surcharge today and secure unbroken 10-year trademark protection across India.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Initiate Surcharge Renewal</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call Attorney: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered Trademark Attorneys • Same-Day Form TM-R Filing • Retrospective Validity • Pan-India
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
                                <h3 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h3>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Senior Trademark Attorney</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                    Rahul specializes in trademark portfolio renewals, Section 25(3) grace period filings, Section 25(4) restoration proceedings, and high-stakes trademark litigation.
                                </p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Trademark Expired Recently?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">
                                    Within the 6-month grace period? Renew your mark immediately with statutory surcharge before permanent removal from the e-register.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Renew Expired Mark
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Standard Renewal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-restore-expired-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Section 25(4) Restoration</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-happens-if-trademark-expires" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Consequences of Expiry</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faReceipt} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">MSME Fee Discounts</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-deadlines-extension-of-time-section-131-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Section 131 Deadlines</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48 Rules</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Passing Off Remedies</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">AI Trademark Search</span>
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
