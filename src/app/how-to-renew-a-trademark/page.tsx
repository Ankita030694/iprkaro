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
    faMagnifyingGlass,
    faLightbulb,
    faShieldHalved,
    faCheck,
    faPhone,
    faRocket,
    faGlobe,
    faClock,
    faRotate,
    faStamp
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Renew a Trademark in India | Form TM-R Guide",
    description: validateAndNormalizeDescription(
        "Master how to renew a trademark in India under Form TM-R. Learn the 10-year renewal process, government fees, grace periods, surcharge costs, and restoration rules.",
        "app/how-to-renew-a-trademark/page.tsx"
    ),
    keywords: [
        "how to renew a trademark",
        "how to renew a trademark in india",
        "trademark renewal process",
        "form TM-R filing",
        "trademark renewal fees india",
        "trademark restoration india",
        "trademark grace period",
        "section 25 trade marks act",
        "trademark validity 10 years",
        "renew expired trademark"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-renew-a-trademark",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How to Renew a Trademark in India | Form TM-R Guide",
        description: "Master how to renew a trademark in India under Form TM-R. Learn the 10-year renewal process, government fees, grace periods, surcharge costs, and restoration rules.",
        url: "https://www.iprkaro.com/how-to-renew-a-trademark",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-renew-a-trademark.png",
                width: 1200,
                height: 630,
                alt: "How to Renew a Trademark in India Form TM-R Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Renew a Trademark in India | Form TM-R Guide",
        description: "Master how to renew a trademark in India under Form TM-R. Learn the 10-year renewal process, government fees, grace periods, surcharge costs, and restoration rules.",
        images: ["https://www.iprkaro.com/images/og/how-to-renew-a-trademark.jpg"],
    }
};

const faqs = [
    {
        question: "When should I file for trademark renewal in India?",
        answer: "Under Rule 57 of the Trade Marks Rules 2017, you can file Form TM-R for trademark renewal anytime within one full year (12 months) before the expiration of the current 10-year registration cycle. Filing early prevents last-minute administrative rushes, ensures uninterrupted legal exclusivity, and avoids statutory late fee surcharges."
    },
    {
        question: "What is the official government fee for trademark renewal in India?",
        answer: "The official government e-filing fee for trademark renewal under Form TM-R is ₹9,000 per class. If filed physically in paper format at the registry counter, the statutory fee is ₹10,000 per class. Unlike initial registration under Form TM-A, there is no government fee discount for individuals, startups, or MSMEs on renewal filings."
    },
    {
        question: "Is there a concession for startups or MSMEs in trademark renewal fees?",
        answer: "No. The First Schedule of the Trade Marks Rules, 2017 provides a 50% statutory fee concession for individuals, startups, and MSMEs solely for initial trademark filings (Form TM-A). For trademark renewal (Form TM-R), a uniform statutory fee of ₹9,000 per class applies across all applicant categories, regardless of business size or legal entity type."
    },
    {
        question: "What is the grace period if I miss the trademark renewal deadline?",
        answer: "If you fail to renew before the 10-year expiration date, the Trade Marks Act provides a statutory 6-month grace period under Section 25(3). During these 6 months post-expiry, you can still file Form TM-R along with the standard renewal fee of ₹9,000 plus a statutory late-filing surcharge fee of ₹4,500 per class (totaling ₹13,500 per class for online e-filing)."
    },
    {
        question: "How can I restore an expired or removed trademark in India?",
        answer: "If a trademark is not renewed within the 6-month post-expiry grace period, it is advertised in the Trade Marks Journal for removal. Under Section 25(4) and Rule 60, the proprietor has a restoration window between 6 months and 1 year after the expiration date to apply for Restoration and Renewal on Form TM-R by paying the restoration fee of ₹9,000 plus the renewal fee of ₹9,000 (totaling ₹18,000 per class)."
    },
    {
        question: "What documents are required to renew a trademark online?",
        answer: "To renew online, you need your trademark registration number and class details, a copy of the original Trademark Registration Certificate (or previous renewal certificate), applicant identification proof, Power of Attorney on Form TM-48 if filing through a trademark attorney or registered agent, and a Class 3 Digital Signature Certificate (DSC) for portal authentication."
    },
    {
        question: "Can I make changes to my logo or add new classes during renewal?",
        answer: "No. Form TM-R is strictly dedicated to extending the validity of an existing registration as recorded on the Trade Marks Register. You cannot alter the logo design, change the wordmark spelling, or add new classes of goods or services on Form TM-R. Any substantial alteration requires a separate Form TM-M (if minor) or an entirely new trademark application on Form TM-A."
    },
    {
        question: "What happens to my international trademark under Madrid Protocol if my Indian trademark expires?",
        answer: "Under Article 6 of the Madrid Protocol, an international registration remains dependent on the home country base mark for a period of 5 years from its international registration date (the 'dependency principle'). If your Indian base trademark is cancelled or removed due to non-renewal during this 5-year window, your international trademark protection in all designated foreign countries will automatically collapse."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "prerequisites", title: "Prerequisites" },
    { id: "step-by-step", title: "7-Step Process" },
    { id: "renewal-stages-table", title: "Stages & Fees" },
    { id: "common-pitfalls", title: "Common Pitfalls" },
    { id: "rights-maintained", title: "Rights Preserved" },
    { id: "checklist", title: "Renewal Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function TrademarkRenewalPage() {
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
        "headline": "How to Renew a Trademark in India: Step-by-Step Form TM-R Guide",
        "description": "Master how to renew a trademark in India under Form TM-R. Learn the 10-year renewal process, government fees, grace periods, surcharge costs, and restoration rules.",
        "image": "https://www.iprkaro.com/images/og/how-to-renew-a-trademark.png",
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
            "@id": "https://www.iprkaro.com/how-to-renew-a-trademark"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Renew a Trademark in India | Form TM-R Guide",
        "url": "https://www.iprkaro.com/how-to-renew-a-trademark",
        "description": "Master how to renew a trademark in India under Form TM-R. Learn the 10-year renewal process, government fees, grace periods, surcharge costs, and restoration rules.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-renew-a-trademark#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-renew-a-trademark#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "How to Renew a Trademark", "item": "https://www.iprkaro.com/how-to-renew-a-trademark" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Renew a Trademark in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Registry Status & Expiry Date Audit on IP India Portal" },
            { "@type": "ListItem", "position": 2, "name": "Chain of Title & Corporate Details Verification" },
            { "@type": "ListItem", "position": 3, "name": "Documentation Compilation and Form TM-48 Execution" },
            { "@type": "ListItem", "position": 4, "name": "Online Drafting and E-Filing of Form TM-R" },
            { "@type": "ListItem", "position": 5, "name": "Statutory Fee Remittance and Receipt Generation" },
            { "@type": "ListItem", "position": 6, "name": "Registry Scrutiny & Trade Marks Journal Advertisement" },
            { "@type": "ListItem", "position": 7, "name": "Issuance of Renewal Certificate & 10-Year Docketing" }
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
                                <FontAwesomeIcon icon={faRotate} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Decennial IP Maintenance</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Renew a Trademark</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">A registered trademark in India remains valid for exactly 10 years from its application filing date. Under Section 25 of the Trade Marks Act, 1999, proprietors can renew their brand protection indefinitely in 10-year intervals by filing Form TM-R. Failing to complete timely renewal triggers statutory penalties, risk of journal abandonment, and forfeiture of nationwide exclusive rights. Discover the complete step-by-step renewal process, official government fee schedules, statutory grace periods, restoration protocols, and strategic compliance rules.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 11 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Renew Your Trademark Now <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/how-to-renew-a-trademark.png"
                                    alt="India Trademark Renewal Process Form TM-R 10-Year Extension Guide"
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
                        { label: "How to Renew a Trademark", href: "/how-to-renew-a-trademark" }
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
                            {/* MOBILE TABLE OF CONTENTS - COLLAPSIBLE ACCORDION (NO OVERLAPPING) */}
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
                                            <FontAwesomeIcon icon={faRotate} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Renewal
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Trademark renewal in India is a statutory procedure governed by Section 25 of the Trade Marks Act, 1999 and Rule 57 of the Trade Marks Rules, 2017. A registered mark is valid for 10 years from the application filing date and can be renewed indefinitely in successive 10-year blocks by filing Form TM-R with the government fee of ₹9,000 per class. Renewal can be submitted up to one year before expiry, within a 6-month post-expiry grace period with a ₹4,500 surcharge, or restored up to one year post-expiry before permanent removal.</p>
                                        </div>

                                        <p className="mb-6">Unlike patents and copyright, which eventually enter the public domain upon the expiry of a non-renewable statutory term, trademarks represent a perpetual commercial asset. Under Indian intellectual property jurisprudence, brand ownership can endure indefinitely—provided the proprietor maintains active commercial use and timely compliance with the decennial renewal schedule established under the Trade Marks Act, 1999.</p>
                                        <p className="mb-6">The 10-year validity term is calculated strictly from the original application filing date, not from the date the certificate is finally sealed. Because standard<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration processes</Link>can take several months or years to resolve examination objections and oppositions, many business owners are surprised to learn that their 10-year clock has already elapsed significantly by the time they establish operations.</p>
                                        <p className="mb-6">Allowing a trademark to lapse leaves your commercial enterprise vulnerable to catastrophic legal and financial damage. Third-party competitors can initiate non-use cancellations, poach your established brand goodwill, or register conflicting names. Furthermore, for companies operating overseas, failing to renew your domestic Indian registration compromises any foreign filings secured through<Link href="/international-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">international trademark registration</Link>under the Madrid Protocol.</p>
                                    </section>

                                    {/* SECTION 2: PREREQUISITES */}
                                    <section id="prerequisites" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Prerequisites for Filing Form TM-R
                                        </h2>
                                        <p className="mb-6">Before submitting a renewal application on the official IP India portal, brand proprietors and trademark attorneys must verify crucial registry records and assemble statutory prerequisites. Overlooking these preliminary checks can cause administrative rejections or procedural defects.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Registry Status Verification
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Confirm that the mark on the Trade Marks Registry e-portal currently reflects a status of &ldquo;Registered&rdquo;. Marks under rectification, stay orders, or pending division proceedings require specialized compliance steps before submitting renewal fees.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Chain of Title &amp; Address Alignment
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Check whether the applicant entity has changed its name, registered address, or corporate structure (such as conversion from a partnership into a Private Limited company). Any changes must be officially recorded on Form TM-P to avoid ownership disputes during renewal.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Original Certificate &amp; Classes
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Collate the original Trademark Registration Certificate (Form TM-RG) or the most recent decennial renewal receipt. Identify all registered Nice classes so renewal fees are accurately calculated for each specific commercial class.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Power of Attorney (Form TM-48)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If retaining a registered trademark agent or legal counsel to execute the renewal, an executed and stamped<Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48 Power of Attorney</Link>authorization is statutory. It must be signed by the current authorized signatory of the proprietor entity.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: 7-STEP RENEWAL PROCESS */}
                                    <section id="step-by-step" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Trademark Renewal Process
                                        </h2>
                                        <p className="mb-6">Renewing a trademark under the Trade Marks Rules, 2017 is an online procedure conducted through the comprehensive e-filing gateway of the Controller General of Patents, Designs and Trade Marks (CGPDTM). Follow these 7 statutory stages:</p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Pre-Renewal Docket Audit</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Registry Audit &amp; Expiration Date Confirmation</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Begin by accessing the public Trade Marks Registry database or conducting a thorough review using the official<a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India Portal</a>. Enter your registered application number to inspect the electronic register entries.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Confirm the exact date of application and current validity deadline. Check if the Registrar has dispatched an O-3 notice (Notice of Expiration). Verify that your brand has not been cited in third-party rectification filings or subjected to conflicting trademark registrations across complementary classes. You can verify whether similar marks have appeared by performing a<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>.</p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Title &amp; Class Check</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Chain of Title &amp; Multi-Class Reassessment</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Over a 10-year span, corporate dynamics change dramatically. Founders incorporate, companies rebrand subsidiary entities, or rights are assigned through commercial licensing. Under Indian trademark law, the renewal applicant must strictly match the current registered proprietor.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">If an assignment, transmission, or change in company name has taken place without being registered on Form TM-P, file the record of title concurrently. Furthermore, review your goods and services descriptions across all classes using our<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>to decide whether all classes must be renewed or if non-operative classes can be pruned.</p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Legal Drafting</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Drafting Form TM-R &amp; Legal Authorization</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">The Trade Marks Rules, 2017 consolidated multiple legacy renewal forms (such as TM-12, TM-13, and TM-10) into a single comprehensive statutory format:<strong>Form TM-R</strong>. The form covers four specific legal renewal scenarios:</p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Standard Renewal:</strong>Filed within 12 months before the expiration date.</li>
                                                <li><strong>Renewal with Surcharge:</strong>Filed within 6 months after the expiration date under Section 25(3).</li>
                                                <li><strong>Restoration &amp; Renewal:</strong>Filed between 6 months and 1 year after the expiration date under Section 25(4) and Rule 60.</li>
                                                <li><strong>Renewal of International Registration:</strong>Designating India under the Madrid Protocol.</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed m-0">Ensure that an updated Form TM-48 (Power of Attorney) is executed with applicable state stamp duty if an attorney or agent represents your renewal filing.</p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: E-Filing Submission</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Online Submission on the IP India Gateway</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Using a valid Class 3 Digital Signature Certificate (DSC), log in to the IP India comprehensive e-filing system. Select Form TM-R and enter the trademark registration number. The system will automatically populate historical registration data, including the trade mark representation, proprietor name, and class numbers.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">Select the appropriate category of renewal (Standard, With Surcharge, or Restoration). Upload supporting documents, including the copy of the registration certificate and stamped Form TM-48, and digitally sign the application.</p>
                                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                                                <p className="text-xs sm:text-sm text-indigo-950 font-medium m-0"><strong>Paperless Efficiency:</strong>E-filing Form TM-R offers immediate timestamping and eliminates the processing lag associated with physical filings across regional branches in Mumbai, Delhi, Kolkata, Chennai, and Ahmedabad.</p>
                                            </div>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Statutory Fee Remittance</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Statutory Fee Remittance &amp; E-Receipt Generation</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Remit the official government fee through the integrated Bharatkosh payment gateway. The standard online renewal fee is<strong>₹9,000 per class</strong>. If filing within the post-expiry 6-month grace period, an additional statutory surcharge of<strong>₹4,500 per class</strong>is added automatically by the gateway.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Upon successful electronic transaction, the portal generates an official e-acknowledgment receipt containing a distinct CBR (Cash Book Receipt) number and timestamp. This receipt serves as statutory proof that renewal was initiated within the permissible legal window.</p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Registry Scrutiny</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Registry Scrutiny &amp; Journal Advertisement</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Once Form TM-R is lodged, the renewal division of the Trade Marks Registry scrutinizes the submission for formal accuracy. The examiner confirms whether the fee matches the registered classes, verifies attorney authorization, and reviews if the mark was subject to any unrecorded judicial assignments or cancellations.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Under Rule 59 and Rule 61, the renewal is officially recorded and published in the weekly Trade Marks Journal under the section &ldquo;Registered Marks Renewed&rdquo;. This public notification puts competitors and industry stakeholders on notice that your statutory monopoly has been renewed for another ten years.</p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Certificate Issuance</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Issuance of Renewal Certificate &amp; Portfolio Docketing</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Following scrutiny and journal notification, the Registrar issues an electronically authenticated<strong>Certificate of Renewal</strong>under Rule 61. The electronic status on the IP India database updates to &ldquo;Registered - Valid until [New Expiry Date]&rdquo;.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">This certificate serves as conclusive evidence of unbroken brand ownership dating back to your original filing year. Download the authenticated PDF certificate and docket your next renewal deadline exactly 10 years into the future.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">If your mark was lapsed beyond the 6-month grace period, you will need to complete specialized restoration steps. Learn more about emergency procedures in our in-depth guide on<Link href="/how-to-restore-expired-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">how to restore expired trademark</Link>and read our analysis on<Link href="/what-happens-if-trademark-expires" className="text-[rgb(110,94,147)] hover:underline font-medium">what happens if trademark expires</Link>.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: TABLE OF STAGES, TIMELINES, & FEES */}
                                    <section id="renewal-stages-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Renewal Timelines, Fees, and Surcharges
                                        </h2>
                                        <p className="mb-6">The Trade Marks Rules, 2017 structure the renewal process into three progressive statutory windows based on the date of application. Government fees escalate significantly if deadlines are missed:</p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Filing Stage</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Statutory Window</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Statutory Form</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Govt E-Filing Fee</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Physical Fee</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Legal Governing Provision</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Standard Renewal</td>
                                                        <td className="px-6 py-4">Within 1 year before expiry</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-R</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;10,000 / class</td>
                                                        <td className="px-6 py-4">Section 25(1) &amp; Rule 57</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Late Renewal (Grace Period)</td>
                                                        <td className="px-6 py-4">Within 6 months after expiry</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-R + Surcharge</td>
                                                        <td className="px-6 py-4 text-amber-700 font-bold">&#8377;13,500 / class</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;15,000 / class</td>
                                                        <td className="px-6 py-4">Section 25(3) &amp; Rule 58</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Restoration and Renewal</td>
                                                        <td className="px-6 py-4">Between 6 and 12 months after expiry</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-R (Restoration)</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">&#8377;18,000 / class</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;20,000 / class</td>
                                                        <td className="px-6 py-4">Section 25(4) &amp; Rule 60</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Permanent Removal</td>
                                                        <td className="px-6 py-4">After 12 months from expiry</td>
                                                        <td className="px-6 py-4 font-medium text-red-600">Fresh Application (TM-A)</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;4,500 or &#8377;9,000</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;5,000 or &#8377;10,000</td>
                                                        <td className="px-6 py-4">Section 25(4) proviso &amp; loss of priority</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: COMMON PITFALLS */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common Renewal Pitfalls to Avoid
                                        </h2>
                                        <p className="mb-6">Managing decennial brand renewals requires strict compliance. Over a decade, organizational oversight can lead to avoidable mistakes that jeopardize your trademark exclusivity:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Relying Solely on Physical Registry Notices (Form O-3)</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">While the Registrar is required under Section 25(3) to dispatch a notice of impending expiration (Form O-3), postal delays or outdated correspondence addresses on the register mean proprietors frequently never receive it. The statutory burden to renew rests entirely on the trademark proprietor.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Unrecorded Mergers, Name Changes, or Assignments</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Submitting Form TM-R under a new corporate entity name without having filed Form TM-P to record the assignment or transmission will trigger an immediate discrepancy notice. Always record corporate changes before or concurrently with renewal.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Conflating Trademark Renewal with Trademark Alteration</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Form TM-R extends the legal life of a mark exactly as registered. It cannot be used to update your logo graphics, alter font styles, or expand goods specifications. Brand modernizations require filing Form TM-M (for minor variations) or submitting a fresh application on Form TM-A.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Missing the 12-Month Restoration Cutoff</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Once 12 months have passed from the expiry date, the Registrar lacks statutory authority under Section 25(4) to entertain restoration. The trademark is permanently expunged from the register, sacrificing your decade-old priority date and leaving your mark open to competitor filings.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: RIGHTS MAINTAINED */}
                                    <section id="rights-maintained" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Rights Maintained After Renewal
                                        </h2>
                                        <p className="mb-6">Timely execution of Form TM-R preserves the substantial legal remedies granted to registered proprietors under the Trade Marks Act, 1999:</p>
                                        <p className="mb-6"><strong>Unbroken Priority Date:</strong>Your original filing date remains the benchmark for all priority conflicts under Section 11. Even if competitors enter the market during your second decade of operations, your seniority remains unassailable in court.</p>
                                        <p className="mb-6"><strong>Statutory Infringement Remedies:</strong>Under Section 28 and Section 29, active registration provides prima facie legal proof of ownership in civil courts. You retain the right to obtain ex-parte interim injunctions, order delivery-up of counterfeit goods, and claim punitive damages or accounts of profit against infringers without the heavy evidentiary burden of proving common-law passing off.</p>
                                        <p className="mb-6"><strong>Commercial Asset Valuation:</strong>Active trademarks are balance-sheet assets. Continued renewal preserves brand valuation during venture funding rounds, initial public offerings (IPOs), franchising agreements, and intellectual property collateralization.</p>
                                    </section>

                                    {/* SECTION 7: CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Renewal Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Audit Registry Status:</strong>Confirm that the mark status reads &ldquo;Registered&rdquo; and note the exact 10-year expiration date.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Verify All Registered Classes:</strong>Identify whether the mark is registered in single or multiple classes and calculate fees at ₹9,000 per class.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Reconcile Corporate Ownership:</strong>Ensure any corporate name changes, mergers, or assignments have been recorded on Form TM-P.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Execute Form TM-48:</strong>Have the authorized signatory execute a stamped Power of Attorney authorizing your trademark counsel.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>File Online Form TM-R:</strong>Submit the application via the official IP India gateway using a Class 3 Digital Signature.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Track Journal Notification:</strong>Monitor the Trade Marks Journal until the registration is listed under &ldquo;Registered Marks Renewed&rdquo;.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Download Renewal Certificate:</strong>Secure the digitally authenticated Certificate of Renewal and set calendar docket alerts for 10 years later.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 8: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 9: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Trademark Renewal Advice
                                        </h2>
                                        <p className="mb-6">A registered trademark is one of the very few commercial assets that appreciates in value the longer it is used in commerce. By maintaining strict renewal hygiene, brand owners safeguard decades of marketing capital, customer trust, and corporate enterprise value.</p>
                                        <p className="mb-6">Do not wait for statutory grace periods or journal removal warnings to initiate action. Establishing automated docketing cycles and engaging certified IP attorneys ensures that your Form TM-R is lodged cleanly, fees are reconciled without error, and your exclusive rights remain perpetual. Start your renewal assessment today to secure your brand legacy for the decade ahead.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Trademark Renewal
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Renew Your Brand Exclusivity Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Partner with expert IP attorneys to manage your decennial trademark renewal. From portfolio docket audits and Form TM-R filing to journal notifications and final renewal certificate issuance.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Renew Trademark Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Certified IP Advocates • Same-Day Form TM-R Filing • Transparent Government Fee Invoicing</p>
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, trademark renewal compliance, and portfolio maintenance under the Trade Marks Act, 1999. He helps enterprises protect their brand legacy with precision.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Start Renewal Now</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Protect your brand for another 10 years. File Form TM-R seamlessly with registered trademark attorneys.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        E-File Form TM-R
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Filing Steps</span></Link></li>
                                    <li><Link href="/how-to-restore-expired-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faClock} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Restore TM</span></Link></li>
                                    <li><Link href="/what-happens-if-trademark-expires" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Expiry Risks</span></Link></li>
                                    <li><Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Search</span></Link></li>
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Guide</span></Link></li>
                                    <li><Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Guide</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit</span></Link></li>
                                    <li><Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Form TM-48</span></Link></li>
                                    <li><Link href="/international-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Global TM</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
