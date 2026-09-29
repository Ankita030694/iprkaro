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
    faUserTie,
    faFileSignature,
    faClock,
    faBan,
    faArrowsRotate,
    faBuildingShield,
    faFolderOpen
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Change Trademark Attorney in India: TM-48 Guide",
    description: validateAndNormalizeDescription(
        "Learn how to change or revoke a trademark attorney in India. File Form TM-M, cancel Form TM-48, update address for service, and prevent abandoned marks.",
        "app/how-to-change-trademark-attorney-in-india/page.tsx"
    ),
    keywords: [
        "how to change trademark attorney in india",
        "revoke form tm 48 trademark attorney",
        "cancel power of attorney trademark agent india",
        "change attorney of record ip india portal form tm m",
        "transfer pending trademark application new lawyer",
        "noc from previous trademark attorney rule 19",
        "form tm m address for service alteration",
        "trademark agent ghosting reply to examination report",
        "revocation of power of attorney trademark india",
        "trademark lawyer substitution ip india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-change-trademark-attorney-in-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How to Change Trademark Attorney in India: TM-48 Guide",
        description: "Learn how to change or revoke a trademark attorney in India. File Form TM-M, cancel Form TM-48, update address for service, and prevent abandoned marks.",
        url: "https://www.iprkaro.com/how-to-change-trademark-attorney-in-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-change-trademark-attorney-in-india.png",
                width: 1200,
                height: 630,
                alt: "How to Change or Revoke a Trademark Attorney in India: Cancelling Form TM-48 Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Change Trademark Attorney in India: TM-48 Guide",
        description: "Learn how to change or revoke a trademark attorney in India. File Form TM-M, cancel Form TM-48, update address for service, and prevent abandoned marks.",
        images: ["https://www.iprkaro.com/images/og/how-to-change-trademark-attorney-in-india.png"],
    }
};

const faqs = [
    {
        question: "Can I change my trademark attorney while my application is pending in India?",
        answer: "Yes. An applicant has the absolute statutory right to revoke the authority of their existing trademark agent or advocate at any stage of the application lifecycle—whether under Examination, Objected, Marked for Hearing, Opposed, or Registered—under Section 145 of the Trade Marks Act, 1999 and Rule 19 of the Trade Marks Rules, 2017."
    },
    {
        question: "Is a No Objection Certificate (NOC) mandatory from the previous trademark attorney?",
        answer: "No. Under the Trade Marks Act, 1999 and Trade Marks Rules, 2017, obtaining a formal NOC from your previous attorney is not a mandatory statutory prerequisite for substituting legal counsel. While sending a courtesy revocation notice is professional practice, the Registrar cannot refuse to record a fresh Form TM-48 and Form TM-M if the applicant executes a valid revocation of authority."
    },
    {
        question: "Which form is filed on the IP India portal to change the authorized attorney?",
        answer: "To change an attorney of record, the newly appointed trademark agent or advocate must file Form TM-M (Miscellaneous Application) under the category 'Request for Alteration of Agent of Record / Address for Service' along with a fresh Power of Attorney (Form TM-48) and the formal Letter of Revocation."
    },
    {
        question: "What are the official government fees for filing Form TM-M to change an attorney?",
        answer: "As per the First Schedule of the Trade Marks Rules, 2017, the official government filing fee for Form TM-M via e-filing is ₹900 for Individuals, Startups, and Small Enterprises (holding valid Udyam Registration). For other entities (such as LLPs, Private Limited Companies, or Trusts without MSME status), the e-filing fee is ₹1,800."
    },
    {
        question: "What happens to the Address for Service when a new attorney is appointed?",
        answer: "When Form TM-M is processed and accepted by the Trade Marks Registry, the official 'Address for Service' on the electronic trademark register is automatically updated to the new attorney's address and email. All future Examination Reports, Hearing Notices, Opposition Notices, and Registration Certificates will be served exclusively to the newly authorized counsel."
    },
    {
        question: "What should I do if my previous trademark agent is unresponsive and a deadline is near?",
        answer: "If your previous attorney is ghosting you and an urgent deadline approaches (such as the 30-day Examination Report reply deadline or an upcoming Show Cause Hearing), you should immediately engage a new trademark advocate. The new advocate can file Form TM-M with a fresh Form TM-48 and simultaneously submit the substantive legal reply or attend the hearing to prevent the application from being marked as 'Abandoned'."
    },
    {
        question: "Can I revoke Form TM-48 and represent myself as an applicant before IP India?",
        answer: "Yes. An applicant can revoke the Power of Attorney and request the Trade Marks Registry to change the Address for Service to their own direct address and personal email via Form TM-M. Once updated, the applicant can track the application and respond directly through their own personal IP India e-filing account."
    },
    {
        question: "How long does the Trade Marks Registry take to update the attorney of record?",
        answer: "Upon online submission of Form TM-M with requisite stamp duty and revocation documentation, the Trade Marks Registry typically verifies and updates the electronic docket within 2 to 4 weeks. However, the acknowledgment receipt of Form TM-M empowers your new attorney to act immediately in pending proceedings."
    }
];

const tocSections = [
    { id: "overview", title: "Overview: Changing Attorney" },
    { id: "why-change-attorney", title: "Why Revoke an Attorney?" },
    { id: "legal-framework", title: "Statutory Legal Framework" },
    { id: "noc-legal-position", title: "Is an NOC Mandatory?" },
    { id: "step-by-step-procedure", title: "7-Step Replacement Process" },
    { id: "form-tm-m-rules", title: "Form TM-M & Fee Structure" },
    { id: "dangers-of-delay", title: "Risks of Delay & Abandonment" },
    { id: "comparison-matrix", title: "Representation Comparison" },
    { id: "attorney-checklist", title: "Attorney Migration Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Legal Advice" },
];

export default function ChangeTrademarkAttorneyPage() {
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
        "headline": "How to Change or Revoke a Trademark Attorney in India: Cancelling Form TM-48 Guide",
        "description": "Learn how to change or revoke a trademark attorney in India. File Form TM-M, cancel Form TM-48, update address for service, and prevent abandoned marks.",
        "image": "https://www.iprkaro.com/images/og/how-to-change-trademark-attorney-in-india.png",
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
            "@id": "https://www.iprkaro.com/how-to-change-trademark-attorney-in-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Change Trademark Attorney in India: TM-48 Guide",
        "url": "https://www.iprkaro.com/how-to-change-trademark-attorney-in-india",
        "description": "Learn how to change or revoke a trademark attorney in India. File Form TM-M, cancel Form TM-48, update address for service, and prevent abandoned marks.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-change-trademark-attorney-in-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-change-trademark-attorney-in-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Change Trademark Attorney Guide", "item": "https://www.iprkaro.com/how-to-change-trademark-attorney-in-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure to Change or Revoke a Trademark Attorney in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Review Pending Application Status and Critical Statutory Deadlines on IP India Portal" },
            { "@type": "ListItem", "position": 2, "name": "Issue Formal Written Notice of Revocation / Termination of Mandate to Existing Attorney" },
            { "@type": "ListItem", "position": 3, "name": "Execute Fresh Power of Attorney (Form TM-48) in Favor of New Trademark Agent or Advocate" },
            { "@type": "ListItem", "position": 4, "name": "Draft Formal Letter of Authority Cancellation and Address for Service Alteration Request" },
            { "@type": "ListItem", "position": 5, "name": "File Form TM-M Online via IP India Comprehensive e-Filing Gateway" },
            { "@type": "ListItem", "position": 6, "name": "Pay Prescribed Government Fees (₹900 for Individuals/Startups/MSMEs, ₹1,800 for Others)" },
            { "@type": "ListItem", "position": 7, "name": "Monitor Trade Marks Registry Docket Update and Confirm Substitution on Electronic Register" }
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
                                <FontAwesomeIcon icon={faArrowsRotate} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trademark Representation &amp; Migration</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to Change or Revoke a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Attorney in India</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Trapped with an unresponsive trademark agent, a ghosting consultant, or missed Registry deadlines? Under<strong>Section 145 of the Trade Marks Act, 1999</strong>and<strong>Rule 19 of the Trade Marks Rules, 2017</strong>, you hold the sovereign right to revoke your Power of Attorney, cancel Form TM-48, file Form TM-M, and appoint veteran trademark advocates to rescue your pending brand application.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified Procedural Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Change Trademark Attorney Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call IP Counsel: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/how-to-change-trademark-attorney-in-india.png"
                                    alt="How to Change or Revoke a Trademark Attorney in India: Cancelling Form TM-48 Guide"
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
                        { label: "Change Trademark Attorney Guide", href: "/how-to-change-trademark-attorney-in-india" }
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
                                            Overview: Changing Trademark Attorney in India
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">To change or revoke a trademark attorney in India, the applicant must revoke the existing Power of Attorney (Form TM-48) and appoint a new trademark agent or advocate by filing Form TM-M (Request for Alteration of Agent of Record and Address for Service) on the IP India e-filing portal. The official government fee for Form TM-M is ₹900 for Individuals/Startups/MSMEs and ₹1,800 for other entities. A formal No Objection Certificate (NOC) from the former attorney is NOT mandatory under the Trade Marks Act, 1999 or Trade Marks Rules, 2017.</p>
                                        </div>

                                        <p className="mb-6">Securing trademark registration in India is a multi-stage legal journey that spans months or years. This requires timely responses to<Link href="/how-to-respond-to-trademark-examination-report" className="text-[rgb(110,94,147)] hover:underline font-medium">Examination Reports</Link>, representation at<Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-[rgb(110,94,147)] hover:underline font-medium">video conferencing hearings</Link>, and robust defenses against third-party<Link href="/trademark-opposed-what-happens-next-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark oppositions</Link>.</p>
                                        <p className="mb-6">Unfortunately, hundreds of startup founders, business owners, and corporate enterprises discover that their initial filing agent, chartered accountant, or budget registration portal has gone completely non-responsive, failed to inform them of objection deadlines, or lacked the IP litigation expertise necessary to argue contentious hearings. Left unaddressed, procedural inaction leads directly to the permanent abandonment and loss of your brand monopoly under<strong>Section 132 of the Trade Marks Act, 1999</strong>.</p>
                                        <p className="mb-6">The law empowers brand owners with complete autonomy over their legal representation. Discover how to properly revoke<Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48 Power of Attorney</Link>, execute new attorney mandates, alter your official Address for Service, and protect your commercial identity.</p>
                                    </section>

                                    {/* SECTION 2: WHY REVOKE AN ATTORNEY */}
                                    <section id="why-change-attorney" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Why Applicants Revoke Trademark Agents
                                        </h2>
                                        <p className="mb-6">A Power of Attorney is a fiduciary relationship founded entirely on trust, diligence, and competence. When your representative fails to uphold their professional obligations, continuing with them endangers your entire business valuation. Common triggers for attorney substitution include:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></span>
                                                    Unresponsiveness &amp; Ghosting
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-0">Many low-cost mass-filing agencies file the initial application and then disappear. When the Registry issues formal Examination Reports or Hearing Notices, the applicant receives zero communication, risking automatic dismissal.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-full mr-2"></span>
                                                    Missed Statutory Deadlines
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-0">Under Rule 33, applicants have strictly 30 days to reply to Section 9 (absolute grounds) and Section 11 (relative grounds) objections. Incompetent representatives frequently miss this cutoff, pushing files into &ldquo;Abandoned&rdquo; status.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-2"></span>
                                                    Incompetent Hearing Advocacy
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-0">Non-lawyer filing agents often lack the courtroom advocacy skills and case law citations necessary to overcome Senior Hearing Officers during virtual show-cause hearings. This leads to premature trademark refusals.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Exorbitant Hidden Demands
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-0">Rogue agents quote unrealistic ₹499 filing fees upfront, only to hold the applicant hostage later with inflated ₹15,000 to ₹30,000 demands for standard examination replies or hearing attendance.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: STATUTORY LEGAL FRAMEWORK */}
                                    <section id="legal-framework" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Framework: Act &amp; Rules
                                        </h2>
                                        <p className="mb-6">The substitution and revocation of trademark counsel is governed by specific statutory provisions within the<strong>Trade Marks Act, 1999</strong>, the<strong>Trade Marks Rules, 2017</strong>, and the<strong>Powers of Attorney Act, 1882</strong>:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Section 145 — Authorization of Agents</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 145 of the Trade Marks Act, 1999 establishes that any act required to be done by an applicant may be executed by a registered trademark agent, legal practitioner, or duly authorized person. Because the authority emanates solely from the principal (the applicant), the principal possesses the inherent legal power to end the mandate at will.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Rule 19 &amp; Rule 21 — Form TM-48 &amp; Agency Agency Record</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Rule 19 of the Trade Marks Rules, 2017 specifies that authorization of an agent must be executed on<strong>Form TM-48</strong>. Rule 21 governs the Address for Service. Whenever an applicant revokes an agency or substitutes legal counsel, Form TM-M must be filed to formally amend the agency record and Address for Service on the Registry&apos;s electronic portal.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Section 201 of the Indian Contract Act, 1872</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Under general agency law in India, an agency is ended by the principal revoking his authority. An agent cannot compel a client to remain represented against their express consent, nor can an agent claim a proprietary lien over the trademark title itself.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: IS AN NOC MANDATORY? */}
                                    <section id="noc-legal-position" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Is an NOC from Previous Attorney Mandatory?
                                        </h2>
                                        <p className="mb-6">A pervasive myth in the Indian IP ecosystem is that an applicant cannot hire a new trademark lawyer unless their previous attorney signs a formal &ldquo;No Objection Certificate&rdquo. (NOC). This belief is legally unfounded and contrary to statutory law.</p>

                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                                            <h3 className="text-base font-bold text-gray-900 mb-2">The Definitive Legal Position:</h3>
                                            <p className="text-sm text-gray-700 leading-relaxed m-0"><strong>Neither the Trade Marks Act, 1999 nor the Trade Marks Rules, 2017 contains any statutory requirement mandating an NOC from the former attorney as a condition precedent for filing Form TM-M.</strong>The Registrar of Trade Marks is legally bound to record the applicant&apos;s fresh Form TM-48 upon submission of a formal Letter of Revocation.</p>
                                        </div>

                                        <p className="mb-6">Under the Bar Council of India Rules, while advocates observe professional courtesy by informing previous counsel, an uncooperative or ghosting agent cannot hold an applicant hostage by withholding an NOC. If the previous agent refuses to respond, your newly engaged advocate simply files:</p>

                                        <ul className="list-disc pl-6 space-y-2 mb-6">
                                            <li><strong>A Formal Revocation Notice:</strong>Sent via email/registered post ending the prior agent&apos;s mandate.</li>
                                            <li><strong>A Self-Declaration / Revocation Letter:</strong>Signed by the applicant stating that the prior agent&apos;s authority stands cancelled.</li>
                                            <li><strong>Fresh Form TM-48:</strong>Authorizing the new trademark attorney on non-judicial stamp paper.</li>
                                            <li><strong>Form TM-M:</strong>Uploaded on the IP India e-filing gateway requesting alteration of agent of record.</li>
                                        </ul>
                                    </section>

                                    {/* SECTION 5: 7-STEP REPLACEMENT PROCESS */}
                                    <section id="step-by-step-procedure" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faUserTie} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Procedure to Change Trademark Attorney
                                        </h2>
                                        <p className="mb-6">Follow this standardized legal procedure to execute a seamless attorney transition on the IP India portal without administrative delays:</p>

                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm">1</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Audit Trademark Application Status</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Check your application number on the public IP India Trade Mark Status portal. Review the current stage (e.g., &ldquo;Marked for Exam&rdquo;, &ldquo;Objected&rdquo;, &ldquo;Ready for Show Cause Hearing&rdquo;, &ldquo;Opposed&rdquo;) and note pending deadlines.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm">2</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Issue Written Revocation Notice to Former Agent</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Send a formal email or registered letter to the previous attorney or agency stating that their services and Power of Attorney stand ended with immediate effect. Request them to hand over all case papers.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm">3</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Execute Fresh Form TM-48 with New Counsel</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Draft a comprehensive Form TM-48 (Power of Attorney) in favor of the newly appointed registered trademark agent or advocate. Print on appropriate State non-judicial stamp paper (typically ₹100), sign, and execute.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm">4</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Prepare Revocation Affidavit / Formal Cancellation Letter</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Draft a formal Letter of Revocation addressed to the Registrar of Trade Marks, clearly stating that the previous Form TM-48 executed in favor of the former agent is null, void, and revoked.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm">5</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">File Form TM-M on IP India Gateway</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The new attorney logs into the IP India e-filing portal, selects<strong>Form TM-M</strong>, chooses &ldquo;Request for Alteration of Agent of Record / Address for Service&rdquo;, and uploads the new TM-48, Revocation Letter, and proof of applicant identity.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm">6</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Remit Official Registry Fees</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Pay the mandatory statutory fee online (₹900 for MSME/Startup/Individual; ₹1,800 for non-MSME corporate bodies). Retain the generated electronic CBR receipt.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm">7</span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Verify Docket Entry &amp; Take Substantive Action</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The Registry updates the electronic register to reflect the new agent&apos;s code and digital signature. The new counsel can now immediately file examination responses or attend scheduled hearings.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: FORM TM-M & FEE STRUCTURE */}
                                    <section id="form-tm-m-rules" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFolderOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-M Specifications &amp; Fees
                                        </h2>
                                        <p className="mb-6">Under the Trade Marks Rules, 2017, miscellaneous requests—including changing the agent of record and altering the Address for Service—are consolidated under<strong>Form TM-M</strong>. The official statutory fee schedule is structured as follows:</p>

                                        <div className="overflow-x-auto my-8">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm min-w-[600px]">
                                                <thead>
                                                    <tr className="bg-[#6E5E93] text-white">
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Applicant Category</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Eligibility Criteria</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Online e-Filing Fee</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Physical Filing Fee</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-sm text-gray-700 bg-white">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Individual / Sole Proprietor</td>
                                                        <td className="p-4">Natural Person applying in personal name</td>
                                                        <td className="p-4 font-bold text-[#6E5E93]">₹900</td>
                                                        <td className="p-4 text-gray-500">₹1,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Startup Entity</td>
                                                        <td className="p-4">DPIIT Recognized Certificate holder</td>
                                                        <td className="p-4 font-bold text-[#6E5E93]">₹900</td>
                                                        <td className="p-4 text-gray-500">₹1,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Small Enterprise (MSME)</td>
                                                        <td className="p-4">Valid Udyam Registration Certificate</td>
                                                        <td className="p-4 font-bold text-[#6E5E93]">₹900</td>
                                                        <td className="p-4 text-gray-500">₹1,000</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Others (Pvt Ltd, LLP, Public Co, Trust)</td>
                                                        <td className="p-4">Companies without MSME/Startup certificate</td>
                                                        <td className="p-4 font-bold text-indigo-700">₹1,800</td>
                                                        <td className="p-4 text-gray-500">₹2,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="text-sm text-gray-600 italic">Note: If your business possesses a valid MSME Udyam Certificate, ensure your attorney attaches it to claim the 50% government fee concession. Learn more in our guide on<Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark fee concession for MSME and startups</Link>.</p>
                                    </section>

                                    {/* SECTION 7: RISKS OF DELAY & ABANDONMENT */}
                                    <section id="dangers-of-delay" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-8 mr-3 text-red-500" />
                                            Dangers of Inaction &amp; Abandonment
                                        </h2>
                                        <p className="mb-6">Remaining passive while an attorney fails to act triggers catastrophic legal consequences. Under the Trade Marks Act, statutory timers operate automatically:</p>

                                        <div className="space-y-4 mb-8">
                                            <div className="p-5 bg-red-50/60 rounded-xl border border-red-200">
                                                <h3 className="text-base font-bold text-red-900 mb-1 flex items-center">
                                                    <FontAwesomeIcon icon={faBan} className="w-4 h-4 mr-2 text-red-600" />
                                                    1. 30-Day Examination Reply Default — Rule 33
                                                </h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">When an Examination Report is issued under Section 9 or 11, the formal reply must be submitted within 30 days. If your ghosting agent fails to reply, the Registry marks the application as<strong>&ldquo;Abandoned&rdquo;</strong>. Restoring an abandoned mark requires costly condonation of delay petitions under Section 131. Learn how in our guide on<Link href="/trademark-abandoned-how-to-restore" className="text-[rgb(110,94,147)] hover:underline font-medium">how to restore abandoned trademarks</Link>.</p>
                                            </div>

                                            <div className="p-5 bg-red-50/60 rounded-xl border border-red-200">
                                                <h3 className="text-base font-bold text-red-900 mb-1 flex items-center">
                                                    <FontAwesomeIcon icon={faBan} className="w-4 h-4 mr-2 text-red-600" />
                                                    2. Non-Appearance at Virtual Show Cause Hearings
                                                </h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">If your agent fails to join the virtual hearing via Cisco Webex or fails to file an adjournment request via Form TM-M, the Hearing Officer passes a summary order<strong>Refusing</strong>the trademark under Section 18(4).</p>
                                            </div>

                                            <div className="p-5 bg-red-50/60 rounded-xl border border-red-200">
                                                <h3 className="text-base font-bold text-red-900 mb-1 flex items-center">
                                                    <FontAwesomeIcon icon={faBan} className="w-4 h-4 mr-2 text-red-600" />
                                                    3. Missing Opposition Counter-Statement — Section 21(2)
                                                </h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">When a competitor opposes your mark on Form TM-O, the applicant has strictly<strong>2 months</strong>to file a Counter-Statement on Form TM-O. This 2-month deadline is<em>non-extendable by law</em>. An unnotified applicant permanently loses their trademark right.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: COMPARISON MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Representation Comparison Matrix
                                        </h2>
                                        <p className="mb-6">Compare the operational advantages of migrating to specialized IP litigators versus retaining an uncommunicative agent or self-filing:</p>

                                        <div className="overflow-x-auto my-8">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm min-w-[650px]">
                                                <thead>
                                                    <tr className="bg-gray-900 text-white">
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Evaluation Parameter</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-purple-300">New Specialized IP Counsel</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Unresponsive / Budget Agent</th>
                                                        <th className="p-4 text-xs font-bold uppercase tracking-wider">Self-Representation (Applicant)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-sm text-gray-700 bg-white">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Registry Deadline Tracking</td>
                                                        <td className="p-4 text-green-700 font-semibold">Automated Docketing &amp; Real-Time Alerts</td>
                                                        <td className="p-4 text-red-600">Manual / Frequent Missed Deadlines</td>
                                                        <td className="p-4 text-amber-600">High Risk of Unnoticed Notices</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Legal Reply Quality</td>
                                                        <td className="p-4 text-green-700 font-semibold">Customized Case Law &amp; Judicial Precedents</td>
                                                        <td className="p-4 text-red-600">Generic Template / Copy-Paste Text</td>
                                                        <td className="p-4 text-amber-600">Lacks Statutory Groundwork</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Show Cause Hearing Defense</td>
                                                        <td className="p-4 text-green-700 font-semibold">Senior IP Advocates Argue Virtual Hearings</td>
                                                        <td className="p-4 text-red-600">Frequent No-Shows / Untrained Agents</td>
                                                        <td className="p-4 text-red-600">Intimidating for Laypersons</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Transparent Billing</td>
                                                        <td className="p-4 text-green-700 font-semibold">Fixed Upfront Fee Structure</td>
                                                        <td className="p-4 text-red-600">Hidden Fees at Every Procedural Stage</td>
                                                        <td className="p-4 text-green-700 font-semibold">Zero Professional Fee</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Overall Success Probability</td>
                                                        <td className="p-4 text-green-700 font-bold">92% - 98% Registration Approval</td>
                                                        <td className="p-4 text-red-600 font-bold">High Refusal / Abandonment Rate</td>
                                                        <td className="p-4 text-amber-600">Moderate for Distinctive Marks</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 9: ATTORNEY MIGRATION CHECKLIST */}
                                    <section id="attorney-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Attorney Migration Document Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Trademark Application Number &amp; Class:</strong>Provide the exact 7-digit trademark filing number and associated class.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Applicant KYC Documents:</strong>PAN card and Aadhaar card of the proprietor/director, or Certificate of Incorporation/LLP Agreement.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>MSME / Startup Certificate (If Applicable):</strong>Udyam Registration or DPIIT certificate to claim the 50% government fee concession.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Signed Form TM-48 (Power of Attorney):</strong>Executed on ₹100 non-judicial stamp paper in favor of your new trademark advocate.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Revocation Declaration Letter:</strong>Formal statement signed by the applicant revoking the previous attorney&apos;s authority.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Copy of Past Examination Reports / Hearing Notices:</strong>Any correspondence received from the Trade Marks Registry.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 10: FAQS */}
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

                                    {/* SECTION 11: STRATEGIC LEGAL ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Attorney Transition Advice
                                        </h2>
                                        <p className="mb-6">Your brand name, logo, and commercial identity represent the goodwill and enterprise value of your company. Never allow bureaucratic negligence, uncommunicative agents, or missed statutory deadlines to compromise your intellectual property rights.</p>
                                        <p className="mb-6">Migrating your trademark portfolio to dedicated IP litigators ensures institutional deadline management, rigorous legal drafting, and aggressive representation before Hearing Officers. For comprehensive guidance on related trademark procedures, review our resources on<Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>,<Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit rules</Link>, and<Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send trademark legal notices</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Attorney Migration &amp; Rescue
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Rescue Your Pending Trademark Application Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Substitute unresponsive agents in 24 hours. Our senior trademark advocates file Form TM-M, update your Address for Service, and draft winning Examination Replies.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Transfer Trademark File</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered IP Advocates • Form TM-M e-Filing • Examination Responses • Show Cause Hearing Representation</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in trademark prosecution, attorney substitution under Rule 19, opposition defense, and registry portfolio rescue across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Agent Not Responding?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Facing missed deadlines or ghosting consultants? Switch to our veteran IP advocates seamlessly.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Substitute Attorney Now
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Form TM-48 Guide</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Examination Reply</span></Link></li>
                                    <li><Link href="/trademark-hearing-video-conferencing-procedure-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Virtual Hearing</span></Link></li>
                                    <li><Link href="/trademark-abandoned-how-to-restore" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faArrowsRotate} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Restore Abandoned TM</span></Link></li>
                                    <li><Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Overcome Objections</span></Link></li>
                                    <li><Link href="/trademark-opposed-what-happens-next-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Opposition Guide</span></Link></li>
                                    <li><Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">MSME TM Fee Concession</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileSignature} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit Rules</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
