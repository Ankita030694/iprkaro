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
    faBuildingShield,
    faGavel,
    faStamp,
    faBan,
    faBookOpen,
    faClock,
    faHourglassHalf,
    faFileLines,
    faCalendarAlt,
    faPaperPlane,
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Counter-Statement in Trademark Opposition: Form TM-O",
    description: validateAndNormalizeDescription(
        "Guide to filing Form TM-O counter-statement in trademark opposition in India. Learn the strict 60-day Section 21(2) deadline, drafting, and Rule 44.",
        "app/how-to-file-trademark-opposition-counter-statement-form-tm-o/page.tsx"
    ),
    keywords: [
        "how to file counter statement form tm o within 2 months deadline in india",
        "form tm o counter statement format india",
        "deadline to reply to trademark notice of opposition",
        "section 21 2 trademark counter statement",
        "rule 44 trade marks rules 2017",
        "statutory abandonment section 21 2 failure to file counter statement",
        "trademark opposition stages rule 45 rule 46 rule 47",
        "counter statement paragraph wise denial format",
        "trademark opposition form tm o government fee",
        "how to defend trademark opposition india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-file-trademark-opposition-counter-statement-form-tm-o",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Counter-Statement in Trademark Opposition: Form TM-O",
        description: "Guide to filing Form TM-O counter-statement in trademark opposition in India. Learn the strict 60-day Section 21(2) deadline, drafting, and Rule 44.",
        url: "https://www.iprkaro.com/how-to-file-trademark-opposition-counter-statement-form-tm-o",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-file-trademark-opposition-counter-statement-form-tm-o.png",
                width: 1200,
                height: 630,
                alt: "How to File Counter-Statement (Form TM-O) in Trademark Opposition: 60-Day Deadline Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Counter-Statement in Trademark Opposition: Form TM-O",
        description: "Guide to filing Form TM-O counter-statement in trademark opposition in India. Learn the strict 60-day Section 21(2) deadline, drafting, and Rule 44.",
        images: ["https://www.iprkaro.com/images/og/how-to-file-trademark-opposition-counter-statement-form-tm-o.png"],
    }
};

const faqs = [
    {
        question: "What is the exact deadline to file a Counter-Statement in trademark opposition?",
        answer: "Under Section 21(2) of the Trade Marks Act, 1999 read with Rule 44 of the Trade Marks Rules, 2017, the applicant must file the Counter-Statement on Form TM-O within exactly two months (approximately 60 days) from the date of receipt of the official Notice of Opposition from the Trade Marks Registry."
    },
    {
        question: "Can the 2-month deadline for filing a Counter-Statement be extended under Section 131?",
        answer: "No. Unlike examination reply deadlines, the two-month deadline under Section 21(2) is a strict statutory limitation period. The Supreme Court and High Courts have consistently held that the Registrar of Trade Marks has no statutory power under Section 131 or Rule 109 to condone delays or extend time for filing a Counter-Statement. Missing the deadline results in irreversible statutory abandonment."
    },
    {
        question: "What happens if an applicant fails to file Form TM-O within the 2-month period?",
        answer: "If the applicant fails to file the Counter-Statement within the statutory two-month timeline, Section 21(2) mandates that the trademark application shall be deemed to have been abandoned by operation of law. The Trade Marks Registry will update the application status to 'Abandoned', and the mark cannot be revived."
    },
    {
        question: "What is the official government fee for filing Form TM-O for a Counter-Statement?",
        answer: "The statutory government fee for filing Form TM-O (Counter-Statement to Notice of Opposition) via the official IP India e-filing portal is ₹2,700 for Individuals, Startups, and MSMEs (UDYAM certificate holders). For other commercial entities and corporate bodies without MSME certification, the e-filing fee is ₹5,400 per class."
    },
    {
        question: "How should the Counter-Statement be structured under Rule 44?",
        answer: "Under Rule 44, the Counter-Statement must contain: (1) An explicit statement of the grounds on which the applicant relies for their application, (2) Admission or specific denial of each material allegation contained in the Notice of Opposition, (3) Affirmative defenses (such as prior continuous use under Section 34, honest concurrent adoption under Section 12, or lack of similarity), and (4) A formal legal Verification signed and affirmed by the applicant or authorized attorney."
    },
    {
        question: "What happens after the Counter-Statement is filed?",
        answer: "Once Form TM-O is filed, the Registry serves a copy on the Opponent. Under Rule 45, the Opponent has 2 months to either file an Affidavit in Support of Opposition (Evidence in Support) or intimate that they rely solely on the facts stated in their Notice of Opposition. If the Opponent fails to file evidence or intimation within 2 months, the opposition itself is deemed abandoned."
    },
    {
        question: "What is the difference between an Examination Objection Reply and a Counter-Statement?",
        answer: "An Examination Objection Reply (under Section 9 or 11) is submitted to the Trademark Examiner during the internal ex-parte examination stage before journal publication. A Counter-Statement (Form TM-O) is a formal adversarial legal defense filed during inter-partes opposition proceedings before the Hearing Officer after a third party formally challenges your published mark."
    },
    {
        question: "Do I need to attach evidence when filing Form TM-O Counter-Statement?",
        answer: "No. At the initial Form TM-O stage, you are only required to file the verified legal pleading (Counter-Statement) setting forth your grounds of defense and specific denials. Substantive documentary evidence (sales invoices, CA certificates, media coverage, advertising proof) is filed at the subsequent Rule 46 stage via a detailed Evidence Affidavit."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & 60-Day Mandate" },
    { id: "statutory-framework", title: "Section 21(2) & Rule 44" },
    { id: "non-extendable-deadline", title: "Fatal Non-Extendable Timeline" },
    { id: "anatomy-tm-o", title: "Drafting & Anatomy of Form TM-O" },
    { id: "step-by-step-filing", title: "Step-by-Step E-Filing Guide" },
    { id: "opposition-roadmap", title: "Opposition Roadmap (Rules 45-50)" },
    { id: "preliminary-defenses", title: "Top Defenses & Objections" },
    { id: "fee-schedule", title: "Fees & Timelines Table" },
    { id: "common-mistakes", title: "5 Mistakes Causing Abandonment" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "strategic-takeaway", title: "Strategic Defense Advisory" },
];

export default function HowToFileCounterStatementOppositionPage() {
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
        "headline": "How to File Counter-Statement (Form TM-O) in Trademark Opposition: 60-Day Deadline Guide",
        "description": "Guide to filing Form TM-O counter-statement in trademark opposition in India. Learn the strict 60-day Section 21(2) deadline, drafting, and Rule 44.",
        "image": "https://www.iprkaro.com/images/og/how-to-file-trademark-opposition-counter-statement-form-tm-o.png",
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
            "@id": "https://www.iprkaro.com/how-to-file-trademark-opposition-counter-statement-form-tm-o"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Counter-Statement in Trademark Opposition: Form TM-O",
        "url": "https://www.iprkaro.com/how-to-file-trademark-opposition-counter-statement-form-tm-o",
        "description": "Guide to filing Form TM-O counter-statement in trademark opposition in India. Learn the strict 60-day Section 21(2) deadline, drafting, and Rule 44.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-file-trademark-opposition-counter-statement-form-tm-o#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-file-trademark-opposition-counter-statement-form-tm-o#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Counter-Statement Form TM-O", "item": "https://www.iprkaro.com/how-to-file-trademark-opposition-counter-statement-form-tm-o" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Comprehensive Procedure for Defending Trademark Opposition via Form TM-O Counter-Statement",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Calculate Non-Extendable 2-Month Statutory Deadline from Date of Notice Receipt" },
            { "@type": "ListItem", "position": 2, "name": "Analyze Opponent's Grounds under Sections 9, 11, 12, 18, and 34" },
            { "@type": "ListItem", "position": 3, "name": "Draft Preliminary Objections on Locus Standi, Suppression, and Bad Faith" },
            { "@type": "ListItem", "position": 4, "name": "Execute Paragraph-Wise Specific Denials and Plead Affirmative Commercial Rights" },
            { "@type": "ListItem", "position": 5, "name": "Execute Statutory Verification under Rule 44 of Trade Marks Rules 2017" },
            { "@type": "ListItem", "position": 6, "name": "E-File Form TM-O on IP India Portal with Prescribed Statutory Fees" },
            { "@type": "ListItem", "position": 7, "name": "Serve Advance Copy on Opponent and Monitor Rule 45 Opponent Evidence Window" }
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
                            <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faTriangleExclamation} className="w-3.5 h-3.5 text-red-600 mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-red-700 uppercase">Urgent Trademark Opposition Defense</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to File Counter-Statement (Form TM-O) in Trademark Opposition: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>60-Day Deadline Guide</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Receiving an official Notice of Opposition from the Trade Marks Registry triggers the most high-stakes, non-extendable countdown in Indian intellectual property practice. Under <strong>Section 21(2) of the Trade Marks Act, 1999</strong> and <strong>Rule 44 of the Trade Marks Rules, 2017</strong>, you have exactly <strong>two months (60 days)</strong> to file your Counter-Statement on <strong>Form TM-O</strong>. Failure to file within this fatal window results in automatic, irrevocable statutory abandonment.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 15 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-red-50 rounded-full px-3 py-1 border border-red-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-red-700 font-bold">⚠️ Non-Extendable 60 Days</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Draft Counter-Statement Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Emergency Opposition Hotline: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/how-to-file-trademark-opposition-counter-statement-form-tm-o.png"
                                    alt="How to File Counter-Statement (Form TM-O) in Trademark Opposition: 60-Day Deadline Guide"
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
                        { label: "Counter-Statement Form TM-O", href: "/how-to-file-trademark-opposition-counter-statement-form-tm-o" }
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
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHourglassHalf} className="w-8 h-5 mr-3 text-red-600" />
                                            Overview &amp; The 60-Day Statutory Mandate
                                        </h2>

                                        <div id="quick-answer" className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Under Section 21(2) of the Trade Marks Act, 1999, an applicant whose published mark is opposed has an unextendable statutory deadline of exactly two months from the receipt of the Notice of Opposition to file a Counter-Statement on Form TM-O. If the Counter-Statement is not filed within these two months, the application is deemed abandoned by operation of law. Neither the Registrar nor the courts have the discretionary power to condone delay under Section 131.</p>
                                        </div>

                                        <p className="mb-6">After clearing initial examination and being advertised in the <strong>Trade Marks Journal</strong>, an application enters a mandatory 4-month public opposition window under Section 21(1). If a competitor, prior registrant, or third party files a formal Notice of Opposition on Form TM-O, the Trade Marks Registry serves a copy on the applicant.</p>
                                        <p className="mb-6">This service triggers the statutory defense mechanism. The applicant must file a paragraph-wise <strong>Counter-Statement</strong> traversing each ground raised by the opponent. Filing Form TM-O transitions the matter into an adversarial, inter-partes judicial proceeding where the applicant can assert superior rights, honest concurrent adoption, or distinct commercial markets.</p>
                                        <p className="mb-6">Learn how opposition dynamics compare with other prosecution stages in our guides on <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 9 vs Section 11 grounds</Link> and <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 34 prior user rights</Link>.</p>
                                    </section>

                                    {/* SECTION 2: STATUTORY FRAMEWORK */}
                                    <section id="statutory-framework" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Provisions: Section 21(2) &amp; Rule 44
                                        </h3>
                                        <p className="mb-6">The legal foundation governing Counter-Statements in Indian trademark opposition consists of parliamentary statute and statutory procedural rules:</p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <p className="text-xs font-bold text-indigo-700 uppercase tracking-widest mb-2">Section 21(2) of Trade Marks Act, 1999</p>
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;The Registrar shall serve a copy of the notice on the applicant for registration and, within two months from the receipt by the applicant of such copy of the notice of opposition, the applicant shall send to the Registrar in the prescribed manner a counter-statement of the grounds on which he relies for his application, and if he does not do so he shall be deemed to have abandoned his application.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Rule 44(1) — Prescribed Form &amp; Verifications</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Rule 44(1) mandates that the Counter-Statement must be filed on <strong>Form TM-O</strong> within two months from the date of receipt of the copy of notice of opposition. It must set out the grounds upon which the applicant relies for their application and indicate what facts, if any, alleged in the notice of opposition are admitted by the applicant.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Rule 44(2) — Service on the Opponent</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Under Rule 44(2), the applicant shall serve a copy of the Counter-Statement on the opponent within two months from the date of receipt of the notice of opposition and intimate the same to the Registrar.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Deemed Statutory Abandonment</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The words <em>&ldquo;he shall be deemed to have abandoned his application&rdquo;</em> create an automatic statutory consequence. Unlike discretionary procedural delays, failure to file Form TM-O automatically extinguishes the pending application without requiring a separate show-cause hearing.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: FATAL NON-EXTENDABLE TIMELINE */}
                                    <section id="non-extendable-deadline" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-8 mr-3 text-red-600" />
                                            Why the 2-Month Deadline Cannot Be Extended
                                        </h3>
                                        <p className="mb-6">A frequent and catastrophic mistake made by applicants is assuming that the 2-month deadline to file a Counter-Statement can be extended by filing <Link href="/how-to-request-adjournment-trademark-hearing-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-M for extension of time under Section 131</Link>. This assumption is legally incorrect:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                                                <h4 className="text-base font-bold text-red-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faBan} className="w-4 h-4 mr-2 text-red-600" />
                                                    Section 131 Inapplicability
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Section 131 permits the Registrar to extend time for procedural acts <em>except where a time is expressly provided in the Act</em>. Because Section 21(2) expressly fixes a two-month timeline with an explicit abandonment clause, Section 131 extension powers are legally barred.</p>
                                            </div>

                                            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
                                                <h4 className="text-base font-bold text-indigo-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-4 h-4 mr-2 text-indigo-600" />
                                                    Settled High Court Jurisprudence
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">The Delhi High Court in <em>Sunrider Corporation v. Hindustan Lever Ltd. (2007)</em> and subsequent rulings affirmed that the statutory period of two months for filing a counter-statement is mandatory, and the Registrar has zero discretion to condone delay.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: ANATOMY OF FORM TM-O */}
                                    <section id="anatomy-tm-o" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Anatomy &amp; Drafting of Form TM-O Counter-Statement
                                        </h3>
                                        <p className="mb-6">A professionally drafted Counter-Statement serves as the foundational legal pleading that protects your brand throughout subsequent evidence stages and final hearing arguments. It must contain four distinct structural sections:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Cause Title &amp; Particulars of the Competing Marks</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Specify the Application Number, Class, Opponent&apos;s Name, Opposition Number, Journal Number, and the details of both the Applicant and Opponent with complete addresses for service.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Preliminary Objections</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Challenge the maintainability of the opposition on threshold legal grounds, including: lack of locus standi, suppression of material facts, frivolous delay tactics, estoppel, and acquiescence under Section 33.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Paragraph-Wise Traverse &amp; Specific Denials</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Address every single numbered paragraph of the opponent&apos;s Notice of Opposition. Avoid vague or evasive denials; specifically deny allegations of <Link href="/deceptive-similarity-trademark-test-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">deceptive similarity under Section 11</Link>, bad faith under Section 18, and lack of distinctiveness under Section 9.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Affirmative Case &amp; Rule 44 Verification</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">State the true adoption story of the mark, prior continuous commercial use under Section 34, bona fide honest concurrent use under Section 12, and conclude with a formal verification affirming that the statements are true to the applicant&apos;s knowledge and belief.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: STEP-BY-STEP FILING GUIDE */}
                                    <section id="step-by-step-filing" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faPaperPlane} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step E-Filing Guide on IP India Portal
                                        </h3>
                                        <p className="mb-6">Filing Form TM-O online requires seamless execution on the comprehensive IP India e-filing module:</p>

                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">1</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Log in to IP India Comprehensive e-Filing Portal</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Access the portal using a valid Class 3 Digital Signature Certificate (DSC) registered in the name of the Applicant or their authorized Trademark Agent / Attorney via <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48 Power of Attorney</Link>.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">2</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Select Form TM-O &gt; Counter-Statement</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Navigate to New Application &gt; Form TM-O &gt; select <em>&lsquo;Counter-Statement to Notice of Opposition&rsquo;</em>. Enter the Trademark Application Number and Opposition Number to automatically populate case details.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">3</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Upload Digitally Signed Counter-Statement PDF</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Upload the complete Counter-Statement document in searchable PDF format, ensuring it contains the signed legal verification and registered address for service in India.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">4</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Pay Statutory Fee &amp; Serve Advance Copy on Opponent</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Pay the government fee (₹2,700 for MSME/Individuals, ₹5,400 for Corporates) via payment gateway, download the official CBR acknowledgment receipt, and immediately serve a copy via registered post/email on the opponent&apos;s attorney under Rule 44(2).</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: OPPOSITION ROADMAP */}
                                    <section id="opposition-roadmap" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Post-Filing Opposition Roadmap (Rules 45 to 50)
                                        </h3>
                                        <p className="mb-6">Filing Form TM-O is the initial defensive salvo. It activates the full procedural timeline of trademark opposition under the Trade Marks Rules, 2017:</p>

                                        <div className="space-y-4 my-6">
                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Stage 1: Rule 45 — Opponent&apos;s Evidence in Support (2 Months)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Within 2 months of receiving your Counter-Statement, the opponent must file an Evidence Affidavit with supporting documents, or intimate that they waive evidence and rely on the notice. <em>If the opponent fails to do either, the opposition is deemed abandoned!</em></p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Stage 2: Rule 46 — Applicant&apos;s Evidence in Support of Application (2 Months)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Within 2 months of receiving the opponent&apos;s Rule 45 evidence, the applicant must file an exhaustive User Affidavit with sales invoices, CA certificates, and marketing proofs proving prior use, reputation, and distinctiveness.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Stage 3: Rule 47 — Opponent&apos;s Evidence in Reply (1 Month)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The opponent is given 1 month to file evidence strictly confined to rebutting new matters raised in the applicant&apos;s Rule 46 evidence.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Stage 4: Rule 50 — Final Hearing &amp; Registration Order</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Hearing Officer schedules an online <Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-[rgb(110,94,147)] hover:underline font-medium">video conference show-cause hearing</Link>. Both counsels present arguments, following which the Registrar either dismisses the opposition and issues the <Link href="/how-to-download-trademark-registration-certificate-ip-india-portal" className="text-[rgb(110,94,147)] hover:underline font-medium">registration certificate</Link>, or upholds the opposition and refuses registration.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: PRELIMINARY DEFENSES */}
                                    <section id="preliminary-defenses" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Top Preliminary Objections &amp; Affirmative Defenses
                                        </h3>
                                        <p className="mb-6">When drafting your Counter-Statement, incorporate strategic statutory defenses to dismantle the opponent&apos;s case:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Prior Continuous User (Section 34)
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">If the applicant adopted and used the mark prior to the opponent&apos;s application or claimed use date, Section 34 protects the prior user from being restrained by a later registered proprietor.</p>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2"></span>
                                                    Honest Concurrent Use (Section 12)
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Even if similarity exists, Section 12 empowers the Registrar to permit concurrent registration of identical or similar marks where the applicant adopted the mark honestly and used it extensively without confusion.</p>
                                            </div>

                                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full mr-2"></span>
                                                    Anti-Dissection Rule (Section 17)
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">If the opponent bases their opposition on a generic prefix, suffix, or descriptive term, invoke Section 17 to prove that marks must be compared in their entirety as composite wholes.</p>
                                            </div>

                                            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-amber-600 rounded-full mr-2"></span>
                                                    Disparity in Trade Channels &amp; Goods
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Demonstrate that although the marks exist in related classifications, the targeted consumers, pricing tiers, and commercial channels do not overlap, eliminating likelihood of confusion.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: FEES & TIMELINES TABLE */}
                                    <section id="fee-schedule" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Opposition Fee Schedule &amp; Statutory Timelines Table
                                        </h3>
                                        <p className="mb-6">The table below provides a quick reference guide to statutory forms, official fees, and non-extendable deadlines across the entire trademark opposition process:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Opposition Stage</th>
                                                        <th className="p-3.5 sm:p-4">Statutory Form</th>
                                                        <th className="p-3.5 sm:p-4">Govt Fee (MSME/Individual)</th>
                                                        <th className="p-3.5 sm:p-4">Govt Fee (Others)</th>
                                                        <th className="p-3.5 sm:p-4">Statutory Deadline</th>
                                                        <th className="p-3.5 sm:p-4">Consequence of Default</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Notice of Opposition</td>
                                                        <td className="p-3.5 sm:p-4">Form TM-O</td>
                                                        <td className="p-3.5 sm:p-4">₹2,700</td>
                                                        <td className="p-3.5 sm:p-4">₹5,400</td>
                                                        <td className="p-3.5 sm:p-4">4 Months from Journal date</td>
                                                        <td className="p-3.5 sm:p-4 text-gray-600">Mark proceeds to registration</td>
                                                    </tr>
                                                    <tr className="hover:bg-red-50/30 transition-colors bg-red-50/20">
                                                        <td className="p-3.5 sm:p-4 font-bold text-red-900">Counter-Statement (Defense)</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-red-900">Form TM-O</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">₹2,700</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">₹5,400</td>
                                                        <td className="p-3.5 sm:p-4 font-bold text-red-700">Strict 2 Months (60 Days)</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-bold">Deemed Abandonment of Application</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Opponent Evidence (Rule 45)</td>
                                                        <td className="p-3.5 sm:p-4">Affidavit</td>
                                                        <td className="p-3.5 sm:p-4">Nil</td>
                                                        <td className="p-3.5 sm:p-4">Nil</td>
                                                        <td className="p-3.5 sm:p-4">2 Months from Counter-Statement</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Deemed Abandonment of Opposition</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Applicant Evidence (Rule 46)</td>
                                                        <td className="p-3.5 sm:p-4">Affidavit</td>
                                                        <td className="p-3.5 sm:p-4">Nil</td>
                                                        <td className="p-3.5 sm:p-4">Nil</td>
                                                        <td className="p-3.5 sm:p-4">2 Months from Rule 45 Evidence</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Matter proceeds to hearing on record</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Final Hearing (Rule 50)</td>
                                                        <td className="p-3.5 sm:p-4">Form TM-M (if adjourned)</td>
                                                        <td className="p-3.5 sm:p-4">₹900</td>
                                                        <td className="p-3.5 sm:p-4">₹1,800</td>
                                                        <td className="p-3.5 sm:p-4">As notified by Registry</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Ex-parte dismissal or refusal</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 9: COMMON MISTAKES */}
                                    <section id="common-mistakes" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-red-600" />
                                            5 Fatal Mistakes Leading to Trademark Abandonment
                                        </h3>
                                        <p className="mb-6">Thousands of valid trademarks are abandoned every year due to avoidable procedural oversights during opposition proceedings:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Confusing Calendar Months with 60 Days</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 21(2) specifies <strong>two months</strong> from the date of receipt, which is calculated based on calendar months (e.g., received on March 15 &rarr; deadline is May 15). Miscalculating the date by even 24 hours causes irreversible abandonment.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Relying on General or Blanket Denials</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Drafting a single generic line stating <em>&ldquo;all allegations are denied&rdquo;</em> is treated as evasive under Order VIII of the CPC and Rule 44. Specific, paragraph-wise traverse is mandatory to prevent admissions by implication.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Failure to Serve Advance Copy on Opponent</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Filing Form TM-O on the portal without simultaneously serving a copy on the opponent&apos;s attorney creates procedural defect notices and delays the commencement of the opponent&apos;s Rule 45 evidence clock.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Filing Form TM-M Extension of Time</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Attempting to buy time by filing Form TM-M under Section 131. The Registry routinely rejects such applications without hearing, leaving your mark deemed abandoned.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">5. Outdated Address for Service on e-Portal</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If your attorney changed or email address was inactive, notice of opposition served via official email is deemed legally served. Regularly monitor your trademark status online to avoid missing notices.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: FAQS */}
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

                                    {/* SECTION 11: STRATEGIC TAKEAWAY */}
                                    <section id="strategic-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Trademark Opposition Defense Advisory
                                        </h3>
                                        <p className="mb-6">Trademark opposition is a formal trial before the Registrar of Trade Marks governed by statutory deadlines and evidentiary rules. The Counter-Statement sets the boundaries of your defense; any ground, prior use claim, or commercial distinction omitted in Form TM-O cannot be introduced later during evidence or final hearing.</p>
                                        <p className="mb-6">Work with seasoned trademark litigators to review the notice of opposition, calculate statutory limitation periods, and draft an authoritative Form TM-O Counter-Statement that shifts the burden back to the opponent. For deeper insights into trademark enforcement and defense, review our guides on <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement</Link>, <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">responding to legal notices</Link>, and <Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark VC hearing procedure</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Urgent Opposition Counter-Statement Drafting
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Defend Your Trademark Within 60 Days
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy senior IP litigators to draft and e-file your Form TM-O Counter-Statement, traverse opposition grounds, and prevent deemed statutory abandonment.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Draft Form TM-O Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • 60-Day Section 21(2) Compliance • Paragraph-Wise Denial • Pan-India</p>
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
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in adversarial opposition proceedings, Form TM-O counter-statements, Rule 45-47 evidence affidavits, and High Court trademark appeals.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Received Notice of Opposition?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Don&apos;t let the strict 2-month Section 21(2) deadline expire. Get an emergency legal counter-statement drafted today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Draft Counter-Statement
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/how-to-request-adjournment-trademark-hearing-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faClock} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Hearing Adjournment</span></Link></li>
                                    <li><Link href="/trademark-deadlines-extension-of-time-section-131-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHourglassHalf} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 131 Deadlines</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileLines} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Respond to Notice</span></Link></li>
                                    <li><Link href="/deceptive-similarity-trademark-test-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Deceptive Similarity</span></Link></li>
                                    <li><Link href="/trademark-hearing-video-conferencing-procedure-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">VC Hearing Procedure</span></Link></li>
                                    <li><Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Prior User Rights</span></Link></li>
                                    <li><Link href="/how-to-download-trademark-registration-certificate-ip-india-portal" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Download Certificate</span></Link></li>
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
