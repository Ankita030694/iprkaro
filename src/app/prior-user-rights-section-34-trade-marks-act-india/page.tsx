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
    faGavel,
    faStamp,
    faBookOpen,
    faClock,
    faBan,
    faBuildingShield,
    faLandmark,
    faFileInvoice,
    faFileSignature,
    faHistory
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Prior User Rights vs Registered Trademark: Section 34 Guide",
    description: validateAndNormalizeDescription(
        "Protect prior user rights under Section 34 of Trade Marks Act. Learn first-to-use rules, Neon Labs precedent, and defense against registered marks.",
        "app/prior-user-rights-section-34-trade-marks-act-india/page.tsx"
    ),
    keywords: [
        "prior user rights section 34 trade marks act india",
        "first to use vs first to file trademark india",
        "can prior unregistered user sue registered trademark owner",
        "section 34 trade marks act supreme court judgments",
        "neon laboratories v medical technologies precedent",
        "s syed mohideen v sulochana bai section 34",
        "prior user defense trademark infringement india",
        "century traders v roshan lal duggar prior use",
        "trademark rectification section 57 prior continuous use",
        "passing off unregistered prior trademark rights india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/prior-user-rights-section-34-trade-marks-act-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Prior User Rights vs Registered Trademark: Section 34 Guide",
        description: "Protect prior user rights under Section 34 of Trade Marks Act. Learn first-to-use rules, Neon Labs precedent, and defense against registered marks.",
        url: "https://www.iprkaro.com/prior-user-rights-section-34-trade-marks-act-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/prior-user-rights-section-34-trade-marks-act-india.png",
                width: 1200,
                height: 630,
                alt: "Prior User Rights vs Registered Trademark in India: Section 34 Complete Legal Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Prior User Rights vs Registered Trademark: Section 34 Guide",
        description: "Protect prior user rights under Section 34 of Trade Marks Act. Learn first-to-use rules, Neon Labs precedent, and defense against registered marks.",
        images: ["https://www.iprkaro.com/images/og/prior-user-rights-section-34-trade-marks-act-india.png"],
    }
};

const faqs = [
    {
        question: "Can an unregistered prior user stop a registered trademark owner in India?",
        answer: "Yes. Under Section 34 of the Trade Marks Act, 1999 and the common law doctrine of passing off protected under Section 27(2), a prior continuous commercial user holds superior proprietary rights over a subsequent applicant who obtained formal registration. The Supreme Court of India in Neon Laboratories (2016) and S. Syed Mohideen (2016) firmly held that registration cannot defeat prior vested common law user rights."
    },
    {
        question: "Is India a 'First to File' or 'First to Use' trademark jurisdiction?",
        answer: "India is primarily a 'First to Use' trademark jurisdiction. While registration confers prima facie statutory exclusivity under Section 28, Section 34 contains an express non-derogation clause ('Saving for vested rights') stating that a registered proprietor cannot interfere with or restrain the continuous commercial use of an identical or similar mark by a prior user."
    },
    {
        question: "What must a prior user prove under Section 34 of the Trade Marks Act, 1999?",
        answer: "To claim the protection of Section 34, the prior user must establish: (1) Continuous commercial use of the identical or similar mark in India, (2) Use in relation to identical or similar goods/services, and (3) Use starting before the date of registration or the priority use date claimed by the registered proprietor, whichever is earlier."
    },
    {
        question: "What did the Supreme Court hold in Neon Laboratories v. Medical Technologies Ltd.?",
        answer: "In Neon Laboratories Ltd. V. Medical Technologies Ltd. (2016) 2 SCC 672, the Supreme Court held that an unregistered prior user who actively introduced products in the market is entitled to an interim injunction against a registered owner whose mark remained dormant or was commercially launched after the prior user's market entry. Prior commercial use triumphs over a dormant prior registration."
    },
    {
        question: "What documents serve as admissible evidence of prior continuous use in court?",
        answer: "Admissible evidence includes: (1) Commercial sales invoices with unbroken chronological dates, (2) Audited financial statements and CA turnover certificates, (3) GST returns, VAT records, and excise clearances, (4) Manufacturing batch sheets and lorry receipts (LR bilties), (5) Dated newspaper advertisements, brochures, and price lists, and (6) Domain registration records and historical website archives."
    },
    {
        question: "Can a registered trademark owner sue a prior user for trademark infringement?",
        answer: "No. Section 34 explicitly bars a registered trademark proprietor from instituting an infringement suit or obtaining an injunction against a bona fide prior user. If sued, the prior user can plead Section 34 as a complete statutory defense and file a counter-claim for passing off and trademark rectification under Section 57."
    },
    {
        question: "Can a prior user apply for cancellation or rectification of the registered trademark?",
        answer: "Yes. Under Section 57 of the Trade Marks Act, 1999, any 'person aggrieved' (including a prior continuous user) can file a Rectification Petition before the High Court or the Registrar of Trade Marks to cancel or expunge the subsequent registration on grounds of bad-faith filing, lack of distinctiveness, or deceptive similarity under Section 11."
    },
    {
        question: "What is the difference between honest concurrent use (Section 12) and prior use (Section 34)?",
        answer: "Prior use under Section 34 grants complete immunity and superior proprietary rights to the party who used the mark before the registered owner's priority date. Honest concurrent use under Section 12 is an equitable registry discretion allowing two separate businesses to co-exist and hold simultaneous registrations when both adopted the mark honestly in parallel markets without intent to deceive."
    }
];

const tocSections = [
    { id: "overview", title: "Overview: Section 34 Rights" },
    { id: "first-to-use-doctrine", title: "First to Use vs First to File" },
    { id: "section-34-statutory-analysis", title: "Section 34 Statutory Elements" },
    { id: "interplay-with-act", title: "Interplay with Sections 27 & 28" },
    { id: "landmark-judgments", title: "Landmark Supreme Court Rulings" },
    { id: "evidentiary-standard", title: "Evidentiary Proof Standards" },
    { id: "defense-against-injunction", title: "Defense Against Legal Notices" },
    { id: "rectification-procedure", title: "Section 57 Rectification" },
    { id: "comparison-matrix", title: "Prior User vs Registered Owner" },
    { id: "defense-playbook", title: "Prior User Defense Playbook" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Brand Protection Advice" },
];

export default function PriorUserRightsSection34Page() {
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
        "headline": "Prior User Rights vs Registered Trademark in India: Section 34 Complete Legal Guide",
        "description": "Protect prior user rights under Section 34 of Trade Marks Act. Learn first-to-use rules, Neon Labs precedent, and defense against registered marks.",
        "image": "https://www.iprkaro.com/images/og/prior-user-rights-section-34-trade-marks-act-india.png",
        "datePublished": "2026-09-28T09:15:00+05:30",
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
            "@id": "https://www.iprkaro.com/prior-user-rights-section-34-trade-marks-act-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Prior User Rights vs Registered Trademark: Section 34 Guide",
        "url": "https://www.iprkaro.com/prior-user-rights-section-34-trade-marks-act-india",
        "description": "Protect prior user rights under Section 34 of Trade Marks Act. Learn first-to-use rules, Neon Labs precedent, and defense against registered marks.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/prior-user-rights-section-34-trade-marks-act-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/prior-user-rights-section-34-trade-marks-act-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Prior User Rights Legal Guide", "item": "https://www.iprkaro.com/prior-user-rights-section-34-trade-marks-act-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Defensive Strategy Protocol for Prior Trademark Users in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Audit and Compile Historical Commercial Invoices and Tax Records Establishing Earliest Commercial Use" },
            { "@type": "ListItem", "position": 2, "name": "Verify Date of Priority and Registration Claimed by the Adversary on the IP India Register" },
            { "@type": "ListItem", "position": 3, "name": "Draft Comprehensive Statutory Reply to Cease-and-Desist Notice Invoking Section 34 Immunities" },
            { "@type": "ListItem", "position": 4, "name": "File Rectification Petition under Section 57 before High Court / Registry to Cancel Conflicting Registration" },
            { "@type": "ListItem", "position": 5, "name": "Move Application under Order 39 Rule 4 CPC for Immediate Vacation of any Ex-Parte Injunction" },
            { "@type": "ListItem", "position": 6, "name": "File Cross-Suit or Counterclaim for Common Law Passing Off and Permanent Injunction under Section 27(2)" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trademark Priority &amp; Section 34</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Prior User Rights Under <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Section 34 of Trade Marks Act</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Received a menacing Cease-and-Desist legal notice or ex-parte injunction from a newly registered brand owner? Under<strong>Section 34 of the Trade Marks Act, 1999</strong>, India recognizes the golden rule:<em>&ldquo;Priority in adoption and continuous commercial use trumps subsequent registration.&rdquo;</em>Learn how prior unregistered users defeat registered proprietors, leverage Supreme Court precedents like<em>Neon Laboratories</em>, and cancel rival trademarks under Section 57.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified High Court &amp; SC Law</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Defend Prior User Rights <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult IP Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/prior-user-rights-section-34-trade-marks-act-india.png"
                                    alt="Prior User Rights vs Registered Trademark in India: Section 34 Complete Legal Guide"
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
                        { label: "Prior User Rights Legal Guide", href: "/prior-user-rights-section-34-trade-marks-act-india" }
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
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview: Prior User Rights Under Section 34
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Under Section 34 of the Trade Marks Act, 1999 (&ldquo;Saving for vested rights&rdquo;), a registered trademark owner cannot prevent or restrain a prior continuous commercial user from using an identical or similar mark for the same goods or services. In Indian trademark law, the &ldquo;First to Use&rdquo; doctrine prevails over the &ldquo;First to File / Register&rdquo; rule. A prior user with earlier continuous commercial adoption holds superior common law rights and can successfully defend against infringement suits, vacate ex-parte injunctions, and petition for trademark cancellation under Section 57.</p>
                                        </div>

                                        <p className="mb-6">One of the most intense conflicts in intellectual property litigation occurs when an established business—operating continuously in regional or offline markets for decades—suddenly receives a threatening<Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark infringement legal notice</Link>or ex-parte interim injunction from a newcomer who obtained a recent registration certificate from the Trade Marks Registry.</p>
                                        <p className="mb-6">Under Indian jurisprudence, trademark registration does not grant an unassailable monopoly over existing market goodwill. While Section 28 of the<strong>Trade Marks Act, 1999</strong>confers statutory exclusive rights upon registered proprietors, that right is expressly subordinated by the opening words of the statute:<em>&ldquo;Subject to the other provisions of this Act.&rdquo;</em></p>
                                        <p className="mb-6">Foremost among those saving provisions is<strong>Section 34</strong>. This protects vested prior user rights. Understand how the landmark Supreme Court ruling in<em>Neon Laboratories Ltd. V. Medical Technologies Ltd.</em>permanently reshaped Indian trademark defense, how to establish chronological user evidence, and how prior users prevail in court over subsequent registered marks. Explore the essential distinction between statutory remedies and common law torts in our guide on<Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement</Link>.</p>
                                    </section>

                                    {/* SECTION 2: FIRST TO USE VS FIRST TO FILE */}
                                    <section id="first-to-use-doctrine" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHistory} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            First-to-Use vs First-to-File Doctrine
                                        </h2>
                                        <p className="mb-6">Globally, intellectual property regimes divide into two contrasting philosophies:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    First-to-Use Principle (India, UK, USA)
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Proprietary rights arise from actual commercial use and consumer goodwill created in the marketplace. Registration serves merely as formal statutory recognition of pre-existing rights. A prior user who established reputation first cannot be displaced by a subsequent registrant.</p>
                                                <div className="bg-white p-2.5 rounded-lg text-xs font-bold text-[#6E5E93] border border-purple-100">
                                                    Governed by Section 34 &amp; Section 27(2) Common Law
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-gray-500 rounded-full mr-2"></span>
                                                    First-to-File Principle (China, EU Systems)
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Proprietary rights belong strictly to the first entity that submits an application at the Trademark Office, regardless of who invented or used the mark first in the market. Unregistered prior users enjoy minimal protection against trademark squatters.</p>
                                                <div className="bg-white p-2.5 rounded-lg text-xs font-bold text-gray-600 border border-gray-200">
                                                    Strict Formalistic Registration System
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-6">Because India inherits English common law equity, our judicial system rigorously rejects &ldquo;trademark piracy&rdquo; and opportunistic squatting. An applicant who rushes to the Registry with a fabricated &ldquo;proposed to be used&rdquo. Application cannot suppress a bona fide manufacturer who has been retailing goods under that mark for years.</p>
                                    </section>

                                    {/* SECTION 3: SECTION 34 STATUTORY ELEMENTS */}
                                    <section id="section-34-statutory-analysis" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 34 Statutory Analysis &amp; Elements
                                        </h2>
                                        <p className="mb-6">Section 34 of the Trade Marks Act, 1999 is titled<strong>&ldquo;Saving for vested rights&rdquo;</strong>. The statutory text states:</p>

                                        <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl mb-6 font-mono text-xs md:text-sm leading-relaxed border-l-4 border-[#8A7AB5]">
                                            &ldquo;Nothing in this Act shall entitle the proprietor or a registered user of a registered trade mark to interfere with or restrain the use by any person of a trade mark identical with or nearly resembling it in relation to goods or services in relation to which that person or a predecessor in title of his has continuously used that trade mark from a date prior—<br /><br />
                                            (a) to the use of the first-mentioned trade mark in relation to those goods or services by the proprietor or a predecessor in title of his; or<br />
                                            (b) to the date of registration of the first-mentioned trade mark in respect of those goods or services in the name of the proprietor or a predecessor in title of his,<br /><br />
                                            whichever is the earlier, and the Registrar shall not refuse... to register the second-mentioned trade mark by reason only of the registration of the first-mentioned trade mark.&rdquo;
                                        </div>

                                        <p className="mb-6">To successfully establish a Section 34 defense in civil court or before the Trade Marks Registry, the defendant must satisfy three essential statutory ingredients:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Priority in Point of Time (Earlier Date)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The defendant&apos;s commercial use must predate<em>both</em>: (i) the registered proprietor&apos;s actual commercial use, and (ii) the registered proprietor&apos;s filing / registration date, whichever occurred earlier.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Continuous Commercial Use</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The prior use cannot be sporadic, secretive, experimental, or abandoned. The prior user must demonstrate an unbroken chain of commercial trade, invoicing, and marketing down to the present day.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Same or Closely Allied Goods / Services</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The prior user&apos;s protection applies in relation to the specific goods or services on which the mark was continuously used (or closely related commercial categories within the same trade channel).</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: INTERPLAY WITH ACT */}
                                    <section id="interplay-with-act" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Interplay with Sections 27, 28, &amp; 57
                                        </h2>
                                        <p className="mb-6">Understanding how Section 34 integrates into the broader statutory architecture is critical for IP litigation:</p>

                                        <div className="space-y-4 mb-8">
                                            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Section 27(2) — Common Law Passing Off Preserved</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Section 27(2) explicitly provides that nothing in the Act affects the common law rights of action against passing off. A prior user can sue a subsequent registered owner for passing off and obtain an injunction restraining the registered owner from misleading consumers.</p>
                                            </div>

                                            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Section 28(1) — Registration Subordinated</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Section 28(1) gives the registered owner the exclusive right to use the mark, but starts with:<em>&ldquo;Subject to the other provisions of this Act.&rdquo;</em>Thus, Section 28 rights are legally subject to Section 34 prior user rights and Section 27(2) passing off remedies.</p>
                                            </div>

                                            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Section 57 — Rectification &amp; Cancellation</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">A prior user whose rights are threatened by an improper registration is a &ldquo;person aggrieved&rdquo. Entitled to file a Rectification Petition under Section 57 before the High Court or Registry to expunge the conflicting trademark.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: LANDMARK JUDGMENTS */}
                                    <section id="landmark-judgments" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Prior User Rights Precedents
                                        </h2>
                                        <p className="mb-6">Indian trademark jurisprudence contains definitive Supreme Court and High Court authorities confirming the superiority of prior commercial use:</p>

                                        <div className="space-y-6">
                                            <div className="bg-purple-50/40 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Neon Laboratories Ltd. v. Medical Technologies Ltd. (2016) 2 SCC 672
                                                </h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3"><strong>The Landmark Ruling:</strong>Neon applied for &lsquo;ROFOL&rsquo; in 1992 on a &ldquo;proposed to be used&rdquo; basis and obtained registration in 2001, but did not commercially launch the drug until 2004. Meanwhile, Medical Technologies adopted &lsquo;PROFOL&rsquo; in 1998 and built massive market presence. The Supreme Court upheld the interim injunction in favor of Medical Technologies (the prior commercial user), ruling that prior commercial adoption defeats a prior registration that remained dormant in the market.</p>
                                                <div className="text-[11px] font-semibold text-[#6E5E93]">
                                                    Key Principle: A prior registrant cannot remain dormant and later wake up to extinguish an active prior user&apos;s established market goodwill.
                                                </div>
                                            </div>

                                            <div className="bg-indigo-50/40 p-6 rounded-2xl border border-indigo-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2"></span>
                                                    S. Syed Mohideen v. P. Sulochana Bai (2016) 2 SCC 683
                                                </h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3"><strong>The Three-Judge Bench Authority:</strong>The Supreme Court resolved conflicts between registered owners, holding that registration does not grant an absolute right over common law goodwill. An action for passing off under Section 27(2) and prior user protection under Section 34 operates independently and overrides statutory registration rights under Section 28.</p>
                                                <div className="text-[11px] font-semibold text-indigo-700">
                                                    Key Principle: Common law tort of passing off based on prior goodwill trumps statutory registration certificates.
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-gray-700 rounded-full mr-2"></span>
                                                    Century Traders v. Roshan Lal Duggar &amp; Co. (AIR 1978 Del 250)
                                                </h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3"><strong>The Bedrock Common Law Rule:</strong>The Delhi High Court Division Bench held that for claiming trademark rights, registration is not essential. Proof of prior commercial use in the market establishes proprietary ownership, and the first user in point of time is entitled to restrain all subsequent adopters.</p>
                                                <div className="text-[11px] font-semibold text-gray-700">
                                                    Key Principle: Prior continuous use in the market is the foundational origin of trademark title in India.
                                                </div>
                                            </div>

                                            <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full mr-2"></span>
                                                    Milmet Oftho Industries v. Allergan Inc. (2004) 12 SCC 624
                                                </h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3"><strong>Transborder Prior Reputation:</strong>The Supreme Court held that prior global adoption and international reputation by a multinational brand can protect prior rights in India against domestic competitors who registered the mark first in India.</p>
                                                <div className="text-[11px] font-semibold text-emerald-800">
                                                    Key Principle: Multinational prior adoption with spillover reputation protects against opportunistic local filers.
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: EVIDENTIARY PROOF STANDARDS */}
                                    <section id="evidentiary-standard" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileInvoice} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Evidentiary Proof Standards in Court
                                        </h2>
                                        <p className="mb-6">Asserting Section 34 in litigation is entirely an evidence-driven battle. Courts require concrete, contemporaneous documentary proof demonstrating unbroken commercial activity before the adversary&apos;s priority date:</p>

                                        <div className="overflow-x-auto my-8">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm min-w-[600px]">
                                                <thead>
                                                    <tr className="bg-[#6E5E93] text-white">
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Evidence Class</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Primary Documentary Artifacts</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Evidentiary Weight in Court</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-sm text-gray-700 bg-white">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Commercial Tax Invoices</td>
                                                        <td className="p-4">Consecutively numbered sales invoices showing buyer names, dates, product descriptions, and the specific brand name.</td>
                                                        <td className="p-4 font-bold text-green-700">Highest (Primary Admissible Proof)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Government Tax Clearances</td>
                                                        <td className="p-4">Historical Sales Tax, VAT returns, Central Excise records, and GST filings detailing annual turnover.</td>
                                                        <td className="p-4 font-bold text-green-700">Extremely High (Statutory Records)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Audited CA Certificates</td>
                                                        <td className="p-4">Chartered Accountant certified turnover figures and promotional expenditure specifically allocated to the brand.</td>
                                                        <td className="p-4 font-bold text-green-700">High (Corroborative Financials)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Logistics &amp; Transport Receipts</td>
                                                        <td className="p-4">Lorry receipts (LR bilties), toll passes, waybills, and railway freight receipts proving inter-state distribution.</td>
                                                        <td className="p-4 font-semibold text-indigo-700">Substantial Corroboration</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Marketing &amp; Media Specimen</td>
                                                        <td className="p-4">Dated newspaper clippings, magazine features, television ad telecast certificates, and print trade catalogs.</td>
                                                        <td className="p-4 font-semibold text-indigo-700">Proves Public Association</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Digital Footprint &amp; Domains</td>
                                                        <td className="p-4">WHOIS domain registration records, Internet Archive Wayback Machine captures, and dated e-commerce listings.</td>
                                                        <td className="p-4 font-semibold text-purple-700">Critical for Digital Brands</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="text-sm text-gray-600">For detailed compliance on filing evidence before the Trade Marks Registry, review our guide on<Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit format and rules</Link>.</p>
                                    </section>

                                    {/* SECTION 7: DEFENSE AGAINST LEGAL NOTICES */}
                                    <section id="defense-against-injunction" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Defense Against Infringement Notices
                                        </h2>
                                        <p className="mb-6">When served with a cease-and-desist letter or an ex-parte injunction, panicking or halting your factory operations is the worst mistake. Follow this strategic litigation roadmap:</p>

                                        <div className="space-y-4 mb-8">
                                            <div className="p-5 bg-purple-50/50 rounded-xl border border-purple-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Reply to Legal Notice with Ironclad Prior Evidence</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Engage veteran IP litigators to draft a robust statutory reply under Section 34. Cite your earliest invoices, tax records, and landmark Supreme Court rulings (<em>Neon Laboratories</em>,<em>S. Syed Mohideen</em>). Warn the claimant that continuing litigation exposes them to damages for groundless threats under Section 142.</p>
                                            </div>

                                            <div className="p-5 bg-indigo-50/50 rounded-xl border border-indigo-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Vacate Ex-Parte Injunctions — Order 39 Rule 4 CPC</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">If the claimant obtained a stay order behind your back by suppressing your prior existence, immediately file an application under<strong>Order 39 Rule 4 of the Code of Civil Procedure (CPC)</strong>for discharge of the injunction on grounds of material suppression and prima facie prior user immunity.</p>
                                            </div>

                                            <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. File Counterclaim for Passing Off &amp; Permanent Injunction</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Turn the tables in District Court or High Court Commercial Divisions by filing a Counterclaim under Section 27(2), praying for a permanent injunction restraining the registered owner from passing off their spurious goods as yours.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: SECTION 57 RECTIFICATION */}
                                    <section id="rectification-procedure" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-red-500" />
                                            Rectification under Section 47 &amp; 57
                                        </h2>
                                        <p className="mb-6">A defensive posture alone is insufficient. Prior users should proactively purge the fraudulent mark from the electronic Trade Marks Register:</p>

                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Section 57 Rectification (Bad Faith &amp; Non-Distinctiveness):</strong>File a petition before the High Court Intellectual Property Division (IPD) or Registry to cancel the registration on grounds that the mark was registered without sufficient cause and remains an improper entry.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Section 47 Cancellation (5 Years Non-Use):</strong>If the registered proprietor sat on the trademark for 5 years and 3 months without genuine commercial use, apply for complete removal for commercial non-use. Learn the step-by-step procedure in our guide on<Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark cancellation for non-use under Section 47</Link>.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>File Your Own Trademark Application:</strong>Concurrently file your own trademark registration on Form TM-A with an explicit User Affidavit claiming the original historical adoption date to obtain permanent statutory certificates.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 9: PRIOR USER VS REGISTERED OWNER MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Prior User vs Registered Owner Matrix
                                        </h2>
                                        <p className="mb-6">Understand the key legal distinctions, remedies, and burdens between prior unregistered users and subsequent registered proprietors:</p>

                                        <div className="overflow-x-auto my-8">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm min-w-[650px]">
                                                <thead>
                                                    <tr className="bg-gray-900 text-white">
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Legal Dimension</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-purple-300">Prior User (Section 34 / Section 27(2))</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Subsequent Registered Proprietor (Section 28)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-sm text-gray-700 bg-white">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Source of Right</td>
                                                        <td className="p-4 text-green-700 font-semibold">Common Law Goodwill &amp; Market Priority</td>
                                                        <td className="p-4 text-gray-700">Statutory Certificate from Trade Marks Registry</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Primary Cause of Action</td>
                                                        <td className="p-4 text-green-700 font-semibold">Passing Off Action &amp; Section 34 Statutory Shield</td>
                                                        <td className="p-4 text-gray-700">Statutory Infringement under Section 29</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Superiority in Conflict</td>
                                                        <td className="p-4 text-green-700 font-bold">Superior (Vested Rights Override Registration)</td>
                                                        <td className="p-4 text-red-600 font-semibold">Subordinated by Section 28 &amp; Section 34</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Evidentiary Burden</td>
                                                        <td className="p-4 text-indigo-700">Must prove prior continuous commercial use &amp; goodwill</td>
                                                        <td className="p-4 text-gray-700">Registration Certificate acts as prima facie proof</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Right to Cancel Adverse Mark</td>
                                                        <td className="p-4 text-green-700 font-bold">Can file Section 57 Rectification Petition</td>
                                                        <td className="p-4 text-red-600">Cannot cancel genuine prior user mark</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: PRIOR USER DEFENSE PLAYBOOK */}
                                    <section id="defense-playbook" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Prior User Action Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Collate Chronological Invoices:</strong>Extract commercial invoices for every year of operation from adoption date to present.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Obtain CA Turnover Certificate:</strong>Secure chartered accountant certification of annual sales figures and advertising expenditure.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Check Opponent&apos;s Priority Date:</strong>Scrutinize the conflicting trademark certificate on IP India to identify the user date claimed and application filing date.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Issue Section 34 Legal Reply:</strong>Send a comprehensive advocate reply asserting prior user rights and threatening Section 142 damages for groundless threats.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Initiate Section 57 Rectification:</strong>File for expunging and cancelling the conflicting registration before the High Court IPD or Registrar.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>File Defensive Trademark Application:</strong>Apply for formal registration with a User Affidavit to solidify future statutory title.</span></li>
                                        </ul>
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

                                    {/* SECTION 12: STRATEGIC BRAND PROTECTION ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Legal Advice for Prior Users
                                        </h2>
                                        <p className="mb-6">While Section 34 provides an unshakeable statutory shield for prior users, relying exclusively on common law defense without securing formal registration leaves your business vulnerable to repeated legal harassment, marketplace confusion, and expensive civil litigation.</p>
                                        <p className="mb-6">The most effective commercial strategy is dual-pronged: fiercely enforce your Section 34 prior user rights to crush spurious infringement notices, while simultaneously filing your own formal trademark applications backed by comprehensive User Affidavits. For related litigation strategies, review our guides on<Link href="/civil-vs-criminal-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">civil vs criminal trademark infringement</Link>,<Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send trademark legal notices</Link>, and<Link href="/how-to-file-trademark-rectification-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to file trademark rectification in India</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        High-Stakes Trademark Defense &amp; Rectification
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Defend Your Prior User Rights with Supreme Court Precedents
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Facing a frivolous infringement notice or an ex-parte stay order? Deploy specialized IP litigators to assert Section 34, vacate injunctions under Order 39 Rule 4, and cancel conflicting trademarks under Section 57.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult Defense Counsel</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Supreme Court &amp; High Court IP Litigators • Section 34 Defense • Order 39 Rule 4 CPC • Section 57 Rectification</p>
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
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in trademark litigation, Section 34 prior user rights defense, commercial passing off, and High Court IPD rectification petitions.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Threatened with Injunction?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Were you using your brand before the competitor filed? Defend your established market goodwill under Section 34.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Contact Defense Counsel
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Reply to TM Notice</span></Link></li>
                                    <li><Link href="/civil-vs-criminal-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Civil vs Criminal TM</span></Link></li>
                                    <li><Link href="/how-to-file-trademark-rectification-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">File Rectification</span></Link></li>
                                    <li><Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faClock} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Non-Use Cancellation</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit Rules</span></Link></li>
                                    <li><Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileSignature} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span></Link></li>
                                    <li><Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Penalties India</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
