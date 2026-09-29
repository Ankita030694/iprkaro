import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCrown,
    faShieldHalved,
    faScaleBalanced,
    faListUl,
    faCheckCircle,
    faExclamationTriangle,
    faTable,
    faLightbulb,
    faPhone,
    faRocket,
    faClock,
    faRotate,
    faStamp,
    faFileLines,
    faCircleCheck,
    faBan,
    faLandmark,
    faFileSignature,
    faLock,
    faUserShield,
    faTriangleExclamation,
    faCircleInfo,
    faBuildingColumns,
    faAward,
    faGlobe,
    faGavel,
    faCoins,
    faBookOpen,
    faChartLine
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Well-Known Trademark Status in India | Rule 124 Guide",
    description: validateAndNormalizeDescription(
        "Learn how to get well-known trademark status in India under Rule 124. Complete guide to Section 11 criteria, Form TM-M filing, fees, evidence, and cross-class protection.",
        "app/how-to-get-well-known-trademark-status-india/page.tsx"
    ),
    keywords: [
        "how to get well known trademark status in india",
        "rule 124 trade marks rules 2017 guide",
        "well known trademark list ip india",
        "form tm-m well known mark application",
        "cost to register well known trademark in india",
        "section 11 6 trade marks act 1999",
        "cross class trademark protection 45 classes",
        "famous trademark recognition india",
        "trans border reputation trademark india",
        "well known trademark evidence dossier"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-get-well-known-trademark-status-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Well-Known Trademark Status in India | Rule 124 Guide",
        description: "Learn how to get well-known trademark status in India under Rule 124. Complete guide to Section 11 criteria, Form TM-M filing, fees, evidence, and cross-class protection.",
        url: "https://www.iprkaro.com/how-to-get-well-known-trademark-status-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-get-well-known-trademark-status-india.png",
                width: 1200,
                height: 630,
                alt: "How to Get Well-Known Trademark Status in India Rule 124 Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Well-Known Trademark Status in India | Rule 124 Guide",
        description: "Learn how to get well-known trademark status in India under Rule 124. Complete guide to Section 11 criteria, Form TM-M filing, fees, evidence, and cross-class protection.",
        images: ["https://www.iprkaro.com/images/og/how-to-get-well-known-trademark-status-india.jpg"],
    }
};

const faqs = [
    {
        question: "What is a Well-Known Trademark in India?",
        answer: "Under Section 2(1)(zg) of the Trade Marks Act, 1999, a well-known trademark is a mark that has become so widely recognized by the substantial segment of the public that uses such goods or services that the use of such a mark on any other goods or services by a third party would immediately be perceived as indicating a connection in trade with the original brand proprietor."
    },
    {
        question: "What is the primary benefit of getting Well-Known Trademark status under Rule 124?",
        answer: "The greatest advantage is universal cross-class protection across all 45 trademark classes. An ordinary trademark is restricted only to the specific goods or services registered. In contrast, a well-known trademark prevents any third party from registering or using an identical or deceptively similar mark for completely unrelated industries (for example. This prevents a third party from using 'Tata' for footwear or 'Rolex' for clothing)."
    },
    {
        question: "What is the official government fee for filing a Well-Known Trademark application under Rule 124?",
        answer: "The statutory government fee for filing a request for determination of a well-known trademark on Form TM-M under Rule 124 of the Trade Marks Rules, 2017 is ₹1,00,000 (Rupees One Lakh). This fee must be paid strictly via online e-filing through the IP India Trade Marks portal."
    },
    {
        question: "Can a foreign brand with no physical sales in India apply for Well-Known status?",
        answer: "Yes. Under Section 11(9) of the Trade Marks Act, 1999, it is not mandatory that the trademark has been used in India, registered in India, or that an application for registration has been filed in India. Foreign marks can establish 'trans-border reputation' and 'spillover goodwill' in India through international exposure, cross-border advertising, internet presence, and global traveler awareness, as established in landmark rulings like Whirlpool and Cartier."
    },
    {
        question: "What documents and evidence are required in the Rule 124 evidentiary dossier?",
        answer: "Applicants must submit a comprehensive statement of case accompanied by: (1) CA-certified annual turnover and balance sheets demonstrating commercial scale. (2) Invoices and promotional expenditure bills across multiple Indian states or countries. (3) Copies of domestic and international trademark registration certificates. (4) Court judgments, decree sheets, or Registry opposition orders acknowledging the brand's reputation. (5) Media clippings, awards, consumer recognition surveys. And (6) Form TM-48 Power of Attorney."
    },
    {
        question: "How long does it take for IP India to determine and publish a Well-Known Trademark?",
        answer: "The complete determination process under Rule 124 generally takes between 6 to 18 months. This timeline includes administrative scrutiny by the Registrar's committee, publication of the proposed mark in the official Trade Marks Journal for public objections (30-day window), hearing on objections (if any), and official inclusion in the published List of Well-Known Trade Marks."
    },
    {
        question: "What happens if a third party files an objection to our Rule 124 application?",
        answer: "When a proposed well-known mark is advertised in the Trade Marks Journal, any member of the public can submit representations or objections within 30 days under Rule 124(4). If objections are filed, the Registrar serves a copy on the applicant, provides an opportunity to file a written rebuttal, and schedules a formal hearing before passing a final reasoned order."
    },
    {
        question: "Can a Well-Known Trademark status ever be removed or cancelled from the official list?",
        answer: "Yes. Under Rule 124(6), if the Registrar subsequently finds that a trademark was erroneously included in the well-known list, was obtained through fraudulent misrepresentation of facts, or if a competent court rules that the mark has lost its distinctiveness or well-known character, the Registrar can remove the mark after giving the proprietor a fair opportunity of being heard."
    }
];

const tocSections = [
    { id: "overview", title: "What is a Well-Known Mark?" },
    { id: "rule-124-mechanism", title: "The Rule 124 Mechanism" },
    { id: "section-11-criteria", title: "Section 11 Statutory Criteria" },
    { id: "cross-class-protection", title: "Cross-Class Protection Power" },
    { id: "evidentiary-dossier", title: "Evidentiary Dossier Checklist" },
    { id: "step-by-step", title: "7-Step Application Procedure" },
    { id: "fee-and-timeline", title: "Government Fees & Timeline" },
    { id: "comparison-table", title: "Standard vs Well-Known Mark" },
    { id: "landmark-judgments", title: "Landmark Court Precedents" },
    { id: "rejection-pitfalls", title: "Common Rejection Pitfalls" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Legal Action" },
];

export default function WellKnownTrademarkGuidePage() {
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
        "headline": "How to Get Well-Known Trademark Status in India (Rule 124 Guide)",
        "description": "Comprehensive legal masterclass on acquiring well-known trademark status in India under Rule 124 of Trade Marks Rules 2017, Section 11 criteria, dossier drafting, and cross-class enforcement.",
        "image": "https://www.iprkaro.com/images/og/how-to-get-well-known-trademark-status-india.png",
        "datePublished": "2026-09-25T11:45:00+05:30",
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
            "@id": "https://www.iprkaro.com/how-to-get-well-known-trademark-status-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Well-Known Trademark Status in India | Rule 124 Guide",
        "url": "https://www.iprkaro.com/how-to-get-well-known-trademark-status-india",
        "description": "Learn how to get well-known trademark status in India under Rule 124. Complete guide to Section 11 criteria, Form TM-M filing, fees, evidence, and cross-class protection.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-get-well-known-trademark-status-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-get-well-known-trademark-status-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Well-Known Trademark Status (Rule 124)", "item": "https://www.iprkaro.com/how-to-get-well-known-trademark-status-india" }
        ]
    };

    const procedureListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7-Step Procedure to Obtain Well-Known Trademark Status Under Rule 124",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Comprehensive Legal & Brand Audit Across Jurisdictions" },
            { "@type": "ListItem", "position": 2, "name": "Compilation of the 5-Pillar Evidentiary Dossier & CA Certificates" },
            { "@type": "ListItem", "position": 3, "name": "Drafting the Sworn Statement of Case under Rule 124(1)" },
            { "@type": "ListItem", "position": 4, "name": "Online E-Filing of Form TM-M with Statutory Fee of ₹1,00,000" },
            { "@type": "ListItem", "position": 5, "name": "Scrutiny & Examination by the Well-Known Trademark Committee" },
            { "@type": "ListItem", "position": 6, "name": "Official Journal Publication & 30-Day Public Objections Period" },
            { "@type": "ListItem", "position": 7, "name": "Formal Hearing, Inclusion in Official List & Notification" }
        ]
    };

    return (
        <div className="w-full max-w-full bg-white text-gray-900">
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureListSchema) }} />

            {/* HERO SECTION */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6] border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 pt-24 pb-8 sm:pb-12 lg:pt-32 lg:pb-16 relative z-10 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="text-left w-full min-w-0 lg:col-span-7">
                            <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5 mb-4 shadow-sm max-w-full">
                                <FontAwesomeIcon icon={faCrown} className="w-3.5 h-3.5 text-amber-600 mr-2 flex-shrink-0" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-amber-800 uppercase truncate">Trade Marks Rules 2017 • Elite Brand Protection</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-gray-900 tracking-tight break-words">
                                How to Get Well-Known Trademark <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Status in India (Rule 124 Guide)</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-700 font-medium leading-relaxed break-words">Does your brand enjoy commanding market recognition, substantial revenue, and exceptional consumer trust? In India, securing<strong>Well-Known Trademark Status</strong>under<strong>Rule 124</strong>elevates your brand from standard, single-class registration to an absolute<strong>cross-class monopoly across all 45 classes</strong>. Learn how to draft a winning evidentiary dossier, navigate Section 11 statutory criteria, file Form TM-M, and permanently shield your brand from imitation.</p>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm flex-shrink-0" />
                                    <div>
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior IP Strategist & Trademark Litigator</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 16 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-900">👑 45-Class Protection</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Apply for Well-Known Status <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-xs sm:text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                    IP Advisory: +91-9289707648
                                </a>
                            </div>
                        </div>

                        <div className="w-full min-w-0 lg:col-span-5 mt-4 lg:mt-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group max-w-lg mx-auto lg:max-w-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/how-to-get-well-known-trademark-status-india.png"
                                    alt="How to Get Well-Known Trademark Status in India Rule 124 Guide"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMBS */}
            <div className="bg-gray-50 border-b border-gray-200 py-3 sm:py-4">
                <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] overflow-x-auto">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Well-Known Trademark Guide", href: "/how-to-get-well-known-trademark-status-india" }
                    ]} />
                </div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="w-full max-w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-10 bg-white">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_320px] gap-6 lg:gap-8 items-start relative">

                        {/* DESKTOP TABLE OF CONTENTS */}
                        <aside className="hidden lg:block sticky top-28 xl:top-32 self-start max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar scrollbar-hide pb-8">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* ARTICLE BODY */}
                        <main className="w-full min-w-0 max-w-full overflow-hidden">
                            {/* MOBILE TABLE OF CONTENTS - ACCORDION */}
                            <div className="lg:hidden mb-6 not-prose w-full">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3 min-w-0">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <div className="min-w-0">
                                                <span className="text-sm font-bold text-gray-900 block truncate">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Sections)</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 flex-shrink-0">
                                            <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:hidden">
                                                Expand
                                            </span>
                                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full hidden group-open:inline-block">
                                                Close
                                            </span>
                                            <svg className="w-4 h-4 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div></summary><div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70"><nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{tocSections.map((sec, idx) => (<a
                                                    key={sec.id}
                                                    href={`#${sec.id}`}
                                                    className="flex items-center space-x-2.5 p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/60 transition-all border border-transparent hover:border-purple-100"
                                                ><span className="w-5 h-5 rounded-md bg-purple-100/80 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold flex-shrink-0">{idx + 1}</span><span className="truncate">{sec.title}</span></a>))}</nav></div></details></div>{/* QUICK ANSWER BLOCK */}<div id="quick-answer" className="bg-gradient-to-br from-amber-50/80 via-white to-purple-50/50 border-2 border-amber-400/40 rounded-2xl p-5 sm:p-6 mb-8 shadow-sm"><div className="flex items-start space-x-3 mb-3"><div className="p-2 bg-amber-500 text-white rounded-lg flex-shrink-0 mt-0.5"><FontAwesomeIcon icon={faLightbulb} className="w-4 h-4" /></div><div><p className="text-xs font-bold uppercase tracking-wider text-amber-800 m-0">Quick Answer</p>
                                        <p className="text-base sm:text-lg font-bold text-gray-900 m-0">How to Obtain Well-Known Trademark Status in India?</p>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Under<strong>Rule 124 of the Trade Marks Rules, 2017</strong>, any trademark owner can apply directly to the Registrar of Trade Marks on<strong>Form TM-M</strong>along with a statutory government fee of<strong>₹1,00,000</strong>to get their brand officially recognized as a<strong>Well-Known Trademark</strong>. The applicant must submit a comprehensive evidentiary dossier proving widespread consumer recognition, extensive sales turnover, advertising expenditure, court judgments, and multi-jurisdictional use under<strong>Section 11(6)</strong>. Once granted, the mark receives automatic<strong>cross-class protection across all 45 trademark classes</strong>, blocking copycats in completely unrelated industries.</p>
                            </div>

                            {/* SECTION 1 */}
                            <section id="overview" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    What is a Well-Known Trademark in India?
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">In conventional intellectual property law, trademark rights are strictly limited by the<strong>&ldquo;Principle of Specificity&rdquo;</strong>(also known as the specialty rule). This means that if you register a trademark in<Link href="/single-class-vs-multi-class-trademark-application-india" className="text-[#6E5E93] font-semibold underline hover:text-[#5a4c7a]">Class 25 for clothing</Link>, your legal protection prevents others from selling identical or similar apparel. However, it may not automatically stop someone from using the same brand name for steel manufacturing, cement, or hospitality.</p>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">A<strong>Well-Known Trademark</strong>represents the pinnacle of trademark defense. It completely shatters the barrier of classes. Under<strong>Section 2(1)(zg) of the Trade Marks Act, 1999</strong>:</p>

                                <blockquote className="border-l-4 border-[#6E5E93] bg-purple-50/50 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-gray-800 italic">
                                    &ldquo;A well-known trade mark in relation to any goods or services, means a mark which has become so to the substantial segment of the public which uses such goods or receives such services that the use of such mark in relation to other goods or services would be likely to be taken as indicating a connection in the course of trade between those goods or services and a person using the mark in relation to the first-mentioned goods or services.&rdquo;
                                </blockquote >

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                                    <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faCrown} className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Universal Exclusivity</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">Complete protection across all 45 classes of goods and services, regardless of your primary line of trade.</p>
                                    </div>
                                    <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Anti-Dilution Shield</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">Prevents dilution by blurring (loss of distinctiveness) and tarnishment (use on low-quality, offensive goods).</p>
                                    </div>
                                    <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faAward} className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Official Registry Listing</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">Published in the prestigious &ldquo;List of Well-Known Trade Marks&rdquo; maintained on the official IP India registry portal.</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 2 */}
                            <section id="rule-124-mechanism" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Rule 124 Framework: Direct Registrar Filing
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Before 2017, there was no direct administrative mechanism in India to request well-known recognition. A trademark owner had to wait until an infringer copied their mark, institute an expensive lawsuit in the High Court, or fight a contested opposition before the Intellectual Property Appellate Board (IPAB). Only when a judge explicitly declared the mark as &ldquo;well-known&rdquo; in a final decree could the Registrar record it.</p>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">The<strong>Trade Marks Rules, 2017</strong>revolutionized this landscape by enacting<strong>Rule 124</strong>. Under this provision, brand owners can bypass protracted litigation and proactively apply directly to the Registrar of Trade Marks for formal determination.</p>

                                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                        <FontAwesomeIcon icon={faBuildingColumns} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                        Core Provisions of Rule 124 (Trade Marks Rules, 2017)
                                    </h3>
                                    <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                                        <li className="flex items-start"><span className="font-bold text-[#6E5E93] mr-2">124(1):</span><span>Any person may make an application in<strong>Form TM-M</strong>to the Registrar for determination of a trademark as well-known, accompanied by a detailed statement of case and documentary evidence.</span></li>
                                        <li className="flex items-start"><span className="font-bold text-[#6E5E93] mr-2">124(2):</span><span>The application must be filed strictly through<strong>online e-filing</strong>, accompanied by the prescribed statutory fee of<strong>₹1,00,000</strong>.</span></li>
                                        <li className="flex items-start"><span className="font-bold text-[#6E5E93] mr-2">124(3):</span><span>The Registrar shall determine the application considering the mandatory criteria laid down under<strong>Section 11(6) to 11(9)</strong>of the Act.</span></li>
                                        <li className="flex items-start"><span className="font-bold text-[#6E5E93] mr-2">124(4):</span><span>Before finalizing determination, the Registrar publishes the mark in the<strong>Trade Marks Journal</strong>to invite objections from the public within 30 days.</span></li>
                                        <li className="flex items-start"><span className="font-bold text-[#6E5E93] mr-2">124(5):</span><span>Upon favorable determination, the trademark is formally notified in the Trade Marks Journal and added to the official<strong>Well-Known Trade Marks List</strong>.</span></li>
                                    </ul>
                                </div>
                            </section>

                            {/* SECTION 3 */}
                            <section id="section-11-criteria" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Section 11 Criteria for Determination
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">The Registrar does not grant well-known status casually. The application must satisfy the stringent statutory standards codified under<strong>Section 11(6), 11(7), 11(8), and 11(9)</strong>of the<Link href="/passing-off-vs-trademark-infringement-india" className="text-[#6E5E93] font-semibold underline hover:text-[#5a4c7a]">Trade Marks Act, 1999</Link>.</p>

                                <div className="space-y-4 my-6">
                                    <div className="bg-white border-2 border-purple-100 rounded-xl p-4 shadow-sm">
                                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 flex items-center">
                                            <span className="w-6 h-6 rounded-full bg-[#6E5E93] text-white text-xs flex items-center justify-center mr-2 font-bold">1</span>
                                            Section 11(6): Mandatory Determination Factors
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-3">The Registrar must evaluate the following five evidentiary pillars:</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                                            <li className="bg-gray-50 p-2 rounded-lg border border-gray-200"><strong>Public Knowledge:</strong>Knowledge or recognition of the mark in the relevant section of the public in India.</li>
                                            <li className="bg-gray-50 p-2 rounded-lg border border-gray-200"><strong>Duration & Extent of Use:</strong>Years of continuous commercial use, sales volume, and geographical spread across India.</li>
                                            <li className="bg-gray-50 p-2 rounded-lg border border-gray-200"><strong>Promotional Scope:</strong>Duration, extent, and geographical area of advertising, sponsorships, and marketing spend.</li>
                                            <li className="bg-gray-50 p-2 rounded-lg border border-gray-200"><strong>Registration Footprint:</strong>Number of registrations and applications in India and overseas jurisdictions.</li>
                                            <li className="bg-gray-50 p-2 rounded-lg border border-gray-200 sm:col-span-2"><strong>Record of Successful Enforcement:</strong>Prior court judgments, IPAB orders, and opposition rulings defending the mark.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white border-2 border-purple-100 rounded-xl p-4 shadow-sm">
                                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 flex items-center">
                                            <span className="w-6 h-6 rounded-full bg-[#6E5E93] text-white text-xs flex items-center justify-center mr-2 font-bold">2</span>
                                            Section 11(7): Who Constitutes the &ldquo;Relevant Public&rdquo;?
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-2">The mark does not need to be known to every citizen in India. Recognition is tested among:</p>
                                        <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1">
                                            <li>Actual and potential consumers of the specific goods or services.</li>
                                            <li>Persons involved in channels of distribution (distributors, wholesalers, retailers).</li>
                                            <li>Business circles dealing with the goods or services to which that mark applies.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white border-2 border-amber-200 rounded-xl p-4 shadow-sm bg-amber-50/20">
                                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 flex items-center">
                                            <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center mr-2 font-bold">3</span>
                                            Section 11(9): What is NOT Required (Global Brand Rule)
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-2">To facilitate protection for multinational enterprises and famous foreign marks, Section 11(9) explicitly provides that the Registrar shall<strong>NOT</strong>require:</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 mt-2">
                                            <div className="p-2 bg-white rounded border border-amber-200">❌ That the mark has been used in India.</div>
                                            <div className="p-2 bg-white rounded border border-amber-200">❌ That the mark has been registered in India.</div>
                                            <div className="p-2 bg-white rounded border border-amber-200">❌ That an application for registration has been filed in India.</div>
                                            <div className="p-2 bg-white rounded border border-amber-200">❌ That the mark is well-known to the public at large.</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 4 */}
                            <section id="cross-class-protection" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Cross-Class Protection Across All 45 Classes
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">The hallmark legal superpower of a Well-Known Trademark is<strong>Section 11(2)</strong>of the Trade Marks Act. This section mandates that a trademark application submitted by any third party<strong>shall be refused registration</strong>if it is identical or similar to an earlier well-known trademark, even if the goods or services are completely dissimilar!</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                        <div className="flex items-center space-x-2 text-red-600 font-bold text-xs uppercase mb-2">
                                            <FontAwesomeIcon icon={faBan} className="w-3.5 h-3.5" />
                                            <span>Standard Registered Trademark</span>
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-2">Restricted Class Monopoly</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-2">A standard trademark registered in Class 9 (Software) cannot prevent a competitor from registering the exact same name in Class 33 (Alcohol) or Class 43 (Restaurants) unless the owner proves confusing similarity or passing off in court.</p>
                                        <span className="text-[11px] font-semibold text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 inline-block">
                                            Scope: Only Registered Class(es)
                                        </span>
                                    </div>

                                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                                        <div className="flex items-center space-x-2 text-[#6E5E93] font-bold text-xs uppercase mb-2">
                                            <FontAwesomeIcon icon={faCrown} className="w-3.5 h-3.5" />
                                            <span>Rule 124 Well-Known Trademark</span>
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-2">Omnipresent 45-Class Monopoly</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-2">Once listed as well-known, the Trade Marks Registry&apos;s automated examination software directly flags and refuses any third-party application across all 45 classes during initial examination, saving millions in litigation costs.</p>
                                        <span className="text-[11px] font-semibold text-[#6E5E93] bg-white px-2 py-1 rounded border border-purple-200 inline-block">
                                            Scope: All 45 Nice Classification Classes
                                        </span>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 5 */}
                            <section id="evidentiary-dossier" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Evidentiary Dossier & Document Checklist
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">A Rule 124 application succeeds or fails entirely on the quality, structure, and depth of the<strong>Evidentiary Dossier</strong>. Indian trademark examiners thoroughly review every page. A typical dossier spans 500 to 2,000 pages, organized into a searchable, bookmarked PDF.</p>

                                <div className="space-y-3 my-6">
                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">1. Formal Statement of Case & Sworn User Affidavit</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">A comprehensive petition drafted by your IP attorney, accompanied by a sworn affidavit executed by the Managing Director or authorized signatory under<Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[#6E5E93] underline">Trademark User Affidavit rules</Link>, narrating the brand&apos;s history, origin, global footprint, and reputation milestones.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">2. CA-Certified Turnover & Financial Balance Sheets</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Audited balance sheets, profit-and-loss statements, and an independent Chartered Accountant (CA) certificate detailing year-wise sales revenue and turnover generated under the trademark for at least the past 5 to 15 years across different Indian states.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">3. Advertising & Marketing Expenditure Invoices</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">CA-certified advertising expenditure summaries supported by representative sample invoices of television commercials, digital campaigns (Google Ads, Meta), print media ads, billboards, sponsorships, and celebrity endorsement contracts.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">4. Domestic & International Registration Certificates</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Copies of Trademark Registration Certificates in India across all registered classes, along with international registration certificates under the<Link href="/international-trademark-registration" className="text-[#6E5E93] underline">Madrid Protocol</Link>or national IP registries (USPTO, EUIPO, UKIPO, JPO, etc.).</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">5. Judicial Orders, Decrees & Enforcement Records</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Certified copies of High Court injunction orders, settlement decrees, Trade Marks Registry opposition decisions, or domain dispute awards under<Link href="/domain-name-trademark-dispute-cybersquatting-indrp-india" className="text-[#6E5E93] underline">NIXI INDRP</Link>demonstrating active defense and judicial recognition of your mark.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">6. Power of Attorney on Form TM-48</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Duly executed<Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[#6E5E93] underline">Form TM-48 (Power of Attorney)</Link>on appropriate non-judicial stamp paper authorizing your registered trademark attorney or agent to represent the enterprise before the CGPDTM.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 6 */}
                            <section id="step-by-step" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    7-Step Procedure to Obtain Rule 124 Status
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-6">Navigating a Rule 124 determination requires meticulous legal precision. Follow this proven 7-step roadmap:</p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                        <div className="w-9 h-9 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">1</div>
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Brand Audit & Pre-Filing Clearance</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Conduct a thorough evaluation of your brand&apos;s geographical reach, market share, consumer perception, and historical trademark records. Ensure the mark has clean title without pending revocations or title disputes.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                        <div className="w-9 h-9 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">2</div>
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Dossier Compilation & CA Certification</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Gather certified turnover figures, tax records, sample invoices, marketing budgets, and media features. Index and digitally bookmark every exhibit into a structured, high-resolution PDF document under 10MB (or split into sequential volumes).</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                        <div className="w-9 h-9 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">3</div>
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Drafting Statement of Case & Legal Grounds</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Your IP attorney drafts the formal petition under Rule 124(1), meticulously mapping your evidence against every single statutory requirement of Section 11(6) to 11(9) and citing supporting judicial precedents.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                        <div className="w-9 h-9 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">4</div>
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Online E-Filing of Form TM-M</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Submit Form TM-M on the official IP India Trade Marks portal under the &ldquo;Determination of Well-Known Mark&rdquo. Category using a Class 3 Digital Signature Certificate (DSC) and pay the official statutory fee of ₹1,00,000.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                        <div className="w-9 h-9 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">5</div>
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Registry Scrutiny & Committee Evaluation</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">The application is assigned to a high-level Well-Known Trademark Committee or Joint Registrar at the Trade Marks Registry. The committee evaluates the veracity of evidence, reputation claims, and distinctiveness.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                        <div className="w-9 h-9 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">6</div>
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Trade Marks Journal Publication (30 Days)</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">If prima facie satisfied, the Registrar publishes the proposed well-known trademark in the Trade Marks Journal inviting objections or representations from the public within a statutory 30-day window under Rule 124(4).</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                        <div className="w-9 h-9 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">7</div>
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Hearing, Final Order & Gazette Notification</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">If objections are raised, the Registrar conducts a formal hearing (in person or via<Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-[#6E5E93] underline">video conference</Link>). Upon satisfaction, the Registrar passes a reasoned order and adds the brand to the official List of Well-Known Trade Marks.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 7 */}
                            <section id="fee-and-timeline" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Official Government Fees and Timeline
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Applying for well-known status is an enterprise-level legal investment. Unlike standard Form TM-A filings, there are no fee concessions for startups or MSMEs under Rule 124.</p>

                                <div className="overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm text-xs sm:text-sm">
                                        <thead className="bg-[#FAF9F6] text-gray-900">
                                            <tr>
                                                <th className="p-3.5 border-b border-gray-200 font-bold">Item / Milestone</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-[#6E5E93]">Statutory Cost / Timeline</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-gray-700">Legal Remarks</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-700">
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Form TM-M Government Fee</td>
                                                <td className="p-3.5 font-bold text-emerald-700">₹1,00,000</td>
                                                <td className="p-3.5">Uniform fee for all applicants (No MSME/Startup discount).</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Mode of Filing</td>
                                                <td className="p-3.5 font-semibold text-[#6E5E93]">Online E-Filing Only</td>
                                                <td className="p-3.5">Mandatory Class 3 Digital Signature Certificate (DSC).</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Dossier Preparation</td>
                                                <td className="p-3.5">3 to 6 Weeks</td>
                                                <td className="p-3.5">Collating nationwide invoices, balance sheets, and CA certificates.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Registry Scrutiny Period</td>
                                                <td className="p-3.5">3 to 6 Months</td>
                                                <td className="p-3.5">Detailed evaluation by Well-Known Examination Committee.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Public Objections Window</td>
                                                <td className="p-3.5">30 Days</td>
                                                <td className="p-3.5">Statutory opposition window in Trade Marks Journal.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Total Completion Timeline</td>
                                                <td className="p-3.5 font-bold text-indigo-900">6 to 18 Months</td>
                                                <td className="p-3.5">From initial e-filing to official Gazette inclusion.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* SECTION 8 */}
                            <section id="comparison-table" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Standard Trademark vs Well-Known Trademark
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Understanding the strategic difference between an ordinary registered trademark and a Rule 124 Well-Known Trademark is vital for corporate legal planning:</p>

                                <div className="overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm text-xs sm:text-sm">
                                        <thead className="bg-[#FAF9F6] text-gray-900">
                                            <tr>
                                                <th className="p-3.5 border-b border-gray-200 font-bold">Feature</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-gray-600">Standard Registered Trademark</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-[#6E5E93]">Well-Known Trademark (Rule 124)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-700">
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Statutory Basis</td>
                                                <td className="p-3.5">Section 18 / Section 28 (TM-A)</td>
                                                <td className="p-3.5 font-semibold text-[#6E5E93]">Section 2(1)(zg) & Rule 124 (TM-M)</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Scope of Protection</td>
                                                <td className="p-3.5">Limited to registered class(es)</td>
                                                <td className="p-3.5 font-semibold text-emerald-700">Universal across all 45 classes</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Filing Government Fee</td>
                                                <td className="p-3.5">₹4,500 (Ind/MSME) / ₹9,000 (Co.)</td>
                                                <td className="p-3.5 font-bold text-gray-900">₹1,00,000 flat fee</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Registry Refusal Power</td>
                                                <td className="p-3.5">Refuses marks only in same/similar class</td>
                                                <td className="p-3.5">Automatically blocks copycats across any class</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Proof of Reputation</td>
                                                <td className="p-3.5">Basic use affidavit or proposed to be used</td>
                                                <td className="p-3.5 font-semibold text-purple-900">Exhaustive multi-year evidentiary dossier</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Anti-Dilution Remedy</td>
                                                <td className="p-3.5">Requires proving direct consumer confusion</td>
                                                <td className="p-3.5">Protects against blurring & tarnishment per se</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* SECTION 9 */}
                            <section id="landmark-judgments" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Landmark Judicial Precedents & Case Laws
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Indian courts have developed rich jurisprudence granting extensive cross-border and cross-class protections to iconic brand names:</p>

                                <div className="space-y-4 my-6">
                                    <div className="bg-purple-50/40 border border-purple-100 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-sm font-bold text-gray-900 m-0">1. Daimler Benz v. Hybo Hindustan (Delhi HC)</h3>
                                            <span className="text-[10px] font-bold bg-[#6E5E93] text-white px-2 py-0.5 rounded">Mercedes-Benz</span>
                                        </div>
                                        <p className="text-xs text-gray-700 leading-relaxed">The defendant used the mark &ldquo;BENZ&rdquo; along with the three-pointed star logo for men&apos;s undergarments. The Delhi High Court held that the name &ldquo;BENZ&rdquo. Possesses world-class reputation and cannot be appropriated by a third party for completely unrelated consumer goods. This establishes the foundation of<strong>trademark tarnishment and dilution</strong>in India.</p>
                                    </div>

                                    <div className="bg-purple-50/40 border border-purple-100 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-sm font-bold text-gray-900 m-0">2. Tata Sons Ltd. v. Manoj Dodia (Delhi HC)</h3>
                                            <span className="text-[10px] font-bold bg-[#6E5E93] text-white px-2 py-0.5 rounded">TATA Mark</span>
                                        </div>
                                        <p className="text-xs text-gray-700 leading-relaxed">The High Court laid down comprehensive guidelines on the factors that constitute a well-known trademark under Section 11(6), affirming that the &ldquo;TATA&rdquo. Brand enjoys omni-present cross-class protection against any entity attempting to ride upon its goodwill.</p>
                                    </div>

                                    <div className="bg-purple-50/40 border border-purple-100 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-sm font-bold text-gray-900 m-0">3. Rolex SA v. Alex Jewellery Pvt. Ltd. (Delhi HC)</h3>
                                            <span className="text-[10px] font-bold bg-[#6E5E93] text-white px-2 py-0.5 rounded">ROLEX</span>
                                        </div>
                                        <p className="text-xs text-gray-700 leading-relaxed">The defendant used the trademark &ldquo;ROLEX&rdquo; for artificial fashion jewellery. The court held that Rolex had acquired widespread fame in luxury watches, and consumers seeing &ldquo;Rolex&rdquo. Jewellery would assume a trade connection. This grants an injunction despite watches and artificial jewellery being different trade channels.</p>
                                    </div>

                                    <div className="bg-purple-50/40 border border-purple-100 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-sm font-bold text-gray-900 m-0">4. N.R. Dongre v. Whirlpool Corporation (Supreme Court)</h3>
                                            <span className="text-[10px] font-bold bg-[#6E5E93] text-white px-2 py-0.5 rounded">Whirlpool</span>
                                        </div>
                                        <p className="text-xs text-gray-700 leading-relaxed">The Supreme Court recognized the<strong>&ldquo;Doctrine of Trans-Border Reputation&rdquo;</strong>, ruling that a foreign trademark owner can enforce well-known rights in India even without physical product sales in the country, provided the brand&apos;s reputation has spilled over into India through international publications and media.</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 10 */}
                            <section id="rejection-pitfalls" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Common Rejection Pitfalls and Prevention
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Due to the ₹1,00,000 non-refundable statutory fee, a Rule 124 application must be prepared with extreme diligence. Avoid these 5 common mistakes that lead to rejection:</p>

                                <div className="space-y-3 my-6">
                                    <div className="flex items-start space-x-3 p-3.5 bg-rose-50 border border-rose-200 rounded-xl">
                                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">1. Purely Localized or Regional Recognition</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Being famous in a single city or state is insufficient for national well-known status. You must present multi-state distribution records, pan-India invoices, and national media coverage.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-rose-50 border border-rose-200 rounded-xl">
                                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">2. Missing CA Certification for Financial Figures</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Submitting unaudited internal spreadsheets without independent Chartered Accountant certification on official letterhead will lead to immediate evidentiary rejection during examination.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-rose-50 border border-rose-200 rounded-xl">
                                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">3. Failure to Show Active Trademark Enforcement</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">A well-known brand must demonstrate vigilance. If numerous third-party infringers operate freely without opposition or legal action from your end, the Registrar may infer lack of secondary meaning.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-rose-50 border border-rose-200 rounded-xl">
                                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">4. Applying for Inherently Generic or Descriptive Terms</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Terms that are purely descriptive of product characteristics face severe scrutiny unless overwhelming evidence of acquired distinctiveness is documented over decades.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-rose-50 border border-rose-200 rounded-xl">
                                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">5. Neglecting the 30-Day Journal Objections Window</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Failing to monitor the Trade Marks Journal after publication or missing deadlines to respond to third-party representations can result in the application being abandoned.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 11 */}
                            <section id="faqs" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                    Frequently Asked Questions (Rule 124)
                                </h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:border-[#6E5E93]/40 transition-colors">
                                            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-2 flex items-start">
                                                <span className="text-[#6E5E93] mr-2 font-extrabold flex-shrink-0">Q{index + 1}.</span>
                                                <span>{faq.question}</span>
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0 pl-6 border-l-2 border-purple-100">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* SECTION 12 */}
                            <section id="final-takeaway" className="mb-8 scroll-mt-24">
                                <div className="bg-gradient-to-br from-[#1A1A24] via-[#2A2A38] to-[#1A1A24] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#6E5E93]/20 rounded-full blur-3xl pointer-events-none"></div>
                                    <h2 className="text-lg sm:text-2xl font-extrabold mb-3 text-white">
                                        Strategic Legal Action for Enterprise Brands
                                    </h2>
                                    <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">Acquiring Well-Known Trademark Status under Rule 124 is the ultimate milestone in corporate brand protection. It multiplies your enterprise valuation, eliminates the continuous expense of filing oppositions across 45 classes, and gives your brand unassailable legal monopoly in Indian courts. Partner with the senior trademark attorneys at IPR Karo to build a watertight evidentiary dossier and secure your rightful place on India&apos;s official Well-Known Trademark registry.</p>

                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                        <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                            <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                                Schedule Well-Known Brand Audit <span className="ml-2 font-black">&rarr;</span>
                                            </button>
                                        </Link>
                                        <a href="tel:+919289707648" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl border border-white/20 transition-all text-xs sm:text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                            Senior Partner: +91-9289707648
                                        </a>
                                    </div>
                                </div>
                            </section>

                        </main>

                        {/* DESKTOP SIDEBAR */}
                        <aside className="hidden lg:block sticky top-28 xl:top-32 self-start space-y-6 max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar scrollbar-hide pb-8">
                            {/* CASE REVIEW CARD */}
                            <div className="bg-gradient-to-br from-amber-50/60 via-white to-purple-50/40 rounded-2xl p-5 border border-amber-200 shadow-sm">
                                <div className="flex items-center space-x-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-2">
                                    <FontAwesomeIcon icon={faCrown} className="w-3.5 h-3.5" />
                                    <span>Rule 124 Eligibility Check</span>
                                </div>
                                <p className="text-base font-bold text-gray-900 mb-2">Is Your Mark Eligible?</p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-4">Get an instant, confidential evaluation of your brand turnover, promotional evidence, and Section 11 criteria by senior IP litigators.</p>
                                <Link href="/e-filing-trademark" className="block w-full">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm uppercase tracking-wider">
                                        Request Feasibility Audit
                                    </button>
                                </Link>
                            </div>

                            {/* STATUTORY FEE SUMMARY */}
                            <div className="bg-[#1A1A24] rounded-2xl p-5 text-white shadow-md">
                                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                                    <FontAwesomeIcon icon={faCoins} className="w-3.5 h-3.5" />
                                    <span>Rule 124 Statutory Fee</span>
                                </div>
                                <p className="text-base font-bold text-white mb-2">₹1,00,000 Govt. Fee</p>
                                <p className="text-xs text-gray-300 leading-relaxed mb-4">Form TM-M online e-filing fee for determination of well-known trademark across all 45 classes.</p>
                                <a href="tel:+919289707648" className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                    +91-9289707648
                                </a>
                            </div>

                            {/* QUICK LINKS */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Related IP Guides</p>
                                <ul className="space-y-2.5 text-xs">
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>Passing Off vs Infringement</Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>User Affidavit Rules & Format</Link></li>
                                    <li><Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>Form TM-48 Power of Attorney</Link></li>
                                    <li><Link href="/international-trademark-registration" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>Madrid Protocol Guide</Link></li>
                                    <li><Link href="/amazon-brand-registry-trademark-requirements-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>Amazon Brand Registry</Link></li>
                                </ul>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </div>
    );
}
