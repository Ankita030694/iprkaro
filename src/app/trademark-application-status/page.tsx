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
    faMagnifyingGlass,
    faLightbulb,
    faCheck,
    faPhone,
    faRotate,
    faGavel,
    faFileLines
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Application Status in India | Track TM Online",
    description: validateAndNormalizeDescription(
        "Check trademark application status online in India. Track IP India stages from Examination and Objection to Journal Publication and Registration.",
        "app/trademark-application-status/page.tsx"
    ),
    keywords: [
        "trademark application status",
        "check trademark status online",
        "trademark status india",
        "ip india trademark status",
        "trademark search application status",
        "trademark status objected",
        "marked for exam trademark status",
        "trademark formalities check pass",
        "advertised in journal trademark",
        "track tm status online india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-application-status",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Application Status in India | Track TM Online",
        description: "Check trademark application status online in India. Track IP India stages from Examination and Objection to Journal Publication and Registration.",
        url: "https://www.iprkaro.com/trademark-application-status",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-application-status.png",
                width: 1200,
                height: 630,
                alt: "Trademark Application Status Online Tracking and Stages in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Application Status in India | Track TM Online",
        description: "Check trademark application status online in India. Track IP India stages from Examination and Objection to Journal Publication and Registration.",
        images: ["https://www.iprkaro.com/images/og/trademark-application-status.jpg"],
    }
};

const faqs = [
    {
        question: "Where and how can I check my trademark application status online in India?",
        answer: "You can track your trademark application status in real time through the official IP India Trade Marks Registry portal (ipindiaonline.gov.in/eregister/eregister.aspx). Select 'Trade Mark Application/Registered Mark' under National/IRDI Number, choose 'National IRDI Number', enter your 5 to 7-digit trademark application number, complete the security CAPTCHA, and click 'View'. The portal displays your live status, examination reports, hearing notices, and certificates."
    },
    {
        question: "What is the difference between 'Formalities Check Pass' and 'Formalities Check Fail'?",
        answer: "'Formalities Check Pass' signifies that your initial application satisfied procedural verification under Rule 37, including correct applicant details, class classification, power of attorney (Form TM-48), and user affidavit. Conversely, 'Formalities Check Fail' indicates clerical defects such as incorrect stamp duty, missing documents, or classification ambiguities. This requires a formal rectification response within 30 days."
    },
    {
        question: "What does 'Marked for Exam' mean and how long does examination take?",
        answer: "'Marked for Exam' confirms that your trademark application has passed initial administrative screening and has been assigned to a designated Trademark Examiner for substantive statutory review under Sections 9 and 11 of the Trade Marks Act, 1999. In India, substantive examination typically takes between 1 to 3 months from filing under current streamlined digital processing."
    },
    {
        question: "What should I do if my trademark status shows 'Objected'?",
        answer: "An 'Objected' status means the Examiner has issued an Examination Report citing legal objections under Section 9 (lack of distinctiveness, descriptive terms) or Section 11 (similarity with existing prior marks). You must file a comprehensive, point-by-point legal reply along with documentary proof of commercial prior use within exactly 30 calendar days from the report receipt date to prevent statutory abandonment."
    },
    {
        question: "What does 'Accepted & Advertised' mean and what is the opposition window?",
        answer: "'Accepted & Advertised' means the Registrar has approved your mark for registration. It has been published in the weekly Trade Marks Journal under Section 20. This triggers a mandatory 4-month statutory opposition period. If no third party files an opposition on Form TM-O within this 4-month window, the application automatically progresses to Certificate Issuance."
    },
    {
        question: "What causes a trademark status to become 'Abandoned' and can it be revived?",
        answer: "A mark becomes 'Abandoned' when an applicant fails to meet a statutory deadline, such as responding to an examination report within 30 days, filing evidence, or attending a scheduled show-cause hearing. In genuine cases involving procedural irregularities, system errors, or non-receipt of registry notices, you can file a petition for revival supported by an affidavit explaining reasonable cause."
    },
    {
        question: "When can I legally start using the registered (R) symbol instead of TM?",
        answer: "You can only use the ® (registered) symbol after your status officially reflects 'Registered' and the digital Trademark Registration Certificate has been formally issued by the Registrar. Using the ® symbol while your status is 'Pending', 'Objected', or 'Advertised' is a criminal offence under Section 107 of the Trade Marks Act, 1999, punishable by fine or imprisonment."
    },
    {
        question: "What is a 'Show Cause Hearing' and how should an applicant prepare?",
        answer: "A 'Show Cause Hearing' is scheduled under Rule 33 when the Examiner is not fully convinced by the written examination reply. Hearings are conducted virtually via video conference before the Hearing Officer. The applicant or their authorized trademark attorney must present oral legal arguments, judicial case law precedents, and commercial turnover evidence to secure an order of acceptance."
    }
];

const tocSections = [
    { id: "overview", title: "Overview of TM Status" },
    { id: "how-to-check", title: "How to Track Online" },
    { id: "status-stages", title: "Status Stages Explained" },
    { id: "status-matrix-table", title: "Status & Action Matrix" },
    { id: "critical-deadlines", title: "Critical Deadlines" },
    { id: "legal-consequences", title: "Legal Rights & Risks" },
    { id: "monitoring-checklist", title: "Tracking Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "strategic-advice", title: "Strategic Advice" },
];

export default function TrademarkApplicationStatusPage() {
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
        "headline": "Trademark Application Status in India: Complete Tracking & Action Guide",
        "description": "Check trademark application status online in India. Track IP India stages from Examination and Objection to Journal Publication and Registration.",
        "image": "https://www.iprkaro.com/images/og/trademark-application-status.png",
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
            "@id": "https://www.iprkaro.com/trademark-application-status"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Application Status in India | Track TM Online",
        "url": "https://www.iprkaro.com/trademark-application-status",
        "description": "Check trademark application status online in India. Track IP India stages from Examination and Objection to Journal Publication and Registration.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-application-status#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-application-status#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Application Status", "item": "https://www.iprkaro.com/trademark-application-status" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Stages in Trademark Application Status Tracking",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Portal Navigation & Electronic Register Access" },
            { "@type": "ListItem", "position": 2, "name": "Formalities Verification & Vienna Codification" },
            { "@type": "ListItem", "position": 3, "name": "Substantive Examination by Trademark Examiner" },
            { "@type": "ListItem", "position": 4, "name": "Examination Reply & Show Cause Hearing Resolution" },
            { "@type": "ListItem", "position": 5, "name": "Journal Publication & 4-Month Public Opposition" },
            { "@type": "ListItem", "position": 6, "name": "Registration Certificate Issuance & 10-Year Docketing" }
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
                                <FontAwesomeIcon icon={faSearch} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Real-Time IP India Docket Tracking</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Check <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Application Status</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Submitting your trademark application on Form TM-A marks only the beginning of your legal journey. From Formalities Check Pass and Marked for Exam to Objected, Advertised in Journal, and Registered, each statutory transition demands vigilant tracking. Under the Trade Marks Act, 1999, missing a single 30-day response window or show-cause hearing notice results in deemed abandonment and forfeiture of priority rights. Master the official IP India tracking gateway, decode status updates, and take prompt legal action.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 10 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Check Your TM Status Now <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/trademark-application-status.png"
                                    alt="Trademark Application Status Online Tracking and Stages in India"
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
                        { label: "Trademark Application Status", href: "/trademark-application-status" }
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
                                            <FontAwesomeIcon icon={faSearch} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Status
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Trademark application status reflects the exact procedural standing of your mark on the IP India Trade Marks Registry e-portal. Key statutory stages include Formalities Check Pass, Marked for Exam, Objected (under Section 9 or 11), Under Show Cause Hearing, Accepted &amp; Advertised in Journal, and Registered. Tracking your status is mandatory because legal notices, such as examination reports, carry an unforgiving 30-day statutory response deadline to prevent deemed abandonment.</p>
                                        </div>

                                        <p className="mb-6">When an entrepreneur or enterprise files an application for trademark registration on Form TM-A, the Trade Marks Registry issues an official electronic acknowledgment receipt bearing a unique 5 to 7-digit trademark application number. While filing grants an immediate legal priority date, it does not confer instant registration or exclusive statutory monopoly rights.</p>
                                        <p className="mb-6">Between application submission and final certificate issuance, every file undergoes systematic scrutiny by the Registrar of Trade Marks under the statutory roadmap outlined in our<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration process guide</Link>. Applications pass through administrative verification, substantive legal examination, public opposition scrutiny, and digital certificate generation.</p>
                                        <p className="mb-6">Understanding each status entry on the electronic register enables brand owners to react swiftly. Whether addressing an examination query, uploading a Power of Attorney on Form TM-48, or defending against a third-party competitor notice, timely tracking prevents permanent forfeiture of valuable commercial goodwill.</p>
                                    </section>

                                    {/* SECTION 2: HOW TO CHECK STATUS ONLINE */}
                                    <section id="how-to-check" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            How to Check Status Online
                                        </h2>
                                        <p className="mb-6">The Trade Marks Registry provides a public e-register portal where any applicant, attorney, or business owner can check real-time dossier records free of cost. Follow this verified step-by-step navigation protocol:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    1. Access the IP India E-Register
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Visit the official electronic register portal at<a href="https://ipindiaonline.gov.in/eregister/eregister.aspx" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-semibold">IP India E-Register Gateway</a>. Choose the &ldquo;Trade Mark Application/Registered Mark&rdquo; option.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    2. Select National / IRDI Number
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Choose the &ldquo;National IRDI Number&rdquo; radio button. Enter your designated application number exactly as printed on your filing CBR receipt without adding spaces or slashes.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    3. Solve Security Captcha &amp; Submit
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Enter the visual security verification code shown on the screen and click &ldquo;View&rdquo;. The system will fetch the matching record from the centralized Trade Marks Registry database.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    4. Review Dossier &amp; Download Documents
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Click on the hyperlinked application number to open the full dossier. Click &ldquo;View Examination Report&rdquo;, &ldquo;Notices&rdquo;, or &ldquo;Uploaded Documents&rdquo; to download official registry correspondence.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: ALL STATUS STAGES EXPLAINED */}
                                    <section id="status-stages" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            All Trademark Status Stages
                                        </h2>
                                        <p className="mb-6">Each status entry on the IP India portal communicates a distinct legal milestone under the Trade Marks Rules, 2017. Here is what every procedural status indicates:</p>

                                        {/* STAGE 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Phase 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Pre-Examination Intake</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">New Application &amp; Send to Vienna Codification</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Upon filing, the initial status displays as<strong>New Application</strong>. The application details are digitized and indexed into the Trade Marks Registry intranet.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">If your filing includes a figurative device, logo, or label mark, the status updates to<strong>Send to Vienna Codification</strong>. Under the Vienna Agreement, registry officers assign standardized international numerical codes to visual elements (such as shapes, animals, geometric patterns, or human figures) to facilitate relative similarity searches. For word marks without graphic logos, this stage is bypassed automatically.</p>
                                        </div>

                                        {/* STAGE 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Phase 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Administrative Scrutiny</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Formalities Check Pass vs. Formalities Check Fail</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">The registry conducts an initial clerical audit of filing documents under Rule 37. If all mandatory forms, applicant identification proof, stamped Power of Attorney (Form TM-48), and user affidavits are compliant, your mark receives<strong>Formalities Check Pass</strong>.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">Conversely, if there are discrepancies—such as submitting an unstamped Form TM-48, unclear goods descriptions, or choosing an ineligible startup fee concession without an MSME certificate—the status reflects<Link href="/trademark-formalities-check-fail-meaning" className="text-[rgb(110,94,147)] hover:underline font-semibold">Formalities Check Fail</Link>.</p>
                                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                                <p className="text-xs sm:text-sm text-amber-950 font-medium m-0"><strong>Statutory Rectification Window:</strong>When a formalities check fails, the applicant must file a formal clarification or Form TM-M within 30 days. Failure to cure clerical defects leads to immediate file abandonment.</p>
                                            </div>
                                        </div>

                                        {/* STAGE 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Phase 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Legal Examination</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Marked for Exam &amp; Examination Report Issued</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Once clerical formalities pass, the application updates to<Link href="/trademark-marked-for-exam-meaning" className="text-[rgb(110,94,147)] hover:underline font-semibold">Marked for Exam</Link>. It is allocated to an Examiner who evaluates whether the brand qualifies for statutory registration under the Trade Marks Act, 1999.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">The Examiner scrutinizes the mark for:</p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Absolute Grounds for Refusal (Section 9):</strong>Lack of distinctiveness, purely descriptive terms, laudatory adjectives, or generic trade expressions.</li>
                                                <li><strong>Relative Grounds for Refusal (Section 11):</strong>Confusing similarity or phonetic identity with earlier registered trademarks or pending applications in the same or complementary Nice classes. Discover how to inspect competing names using our<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search tool</Link>.</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed m-0">If objections are raised, the status updates to<strong>Objected</strong>or<strong>Exam Report Issued</strong>. The applicant must file a formal legal reply via our guide on<Link href="/how-to-respond-to-trademark-examination-report" className="text-[rgb(110,94,147)] hover:underline font-semibold">how to respond to trademark examination report</Link>within 30 days.</p>
                                        </div>

                                        {/* STAGE 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Phase 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Hearing &amp; Rebuttal</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Under Show Cause Hearing &amp; Ready for Hearing</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">If your written examination response does not completely satisfy the Examiner, the Registrar will not immediately refuse the mark. Under the principles of natural justice, the file moves to<Link href="/trademark-hearing-notice-what-to-do" className="text-[rgb(110,94,147)] hover:underline font-semibold">Show Cause Hearing</Link>.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">A digital hearing notice is dispatched outlining the date and virtual conference link. During the hearing, your trademark attorney presents oral legal arguments, commercial turnover invoices, and judicial precedents to justify registration.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Following the hearing, the Hearing Officer either accepts the mark, orders an amendment on Form TM-M (such as adding a disclaimer or pruning goods descriptions), or marks the application as<strong>Refused</strong>.</p>
                                        </div>

                                        {/* STAGE 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Phase 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Public Gazette Scrutiny</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Accepted &amp; Advertised vs. Advertised Before Acceptance</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">When the mark clears examination or hearing, it is published in the bilingual weekly Trade Marks Journal. The status reflects<Link href="/trademark-accepted-but-advertised-meaning" className="text-[rgb(110,94,147)] hover:underline font-semibold">Accepted &amp; Advertised</Link>or<strong>Advertised Before Acceptance</strong>under Section 20.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">This publication invites the general public and competing brand owners to inspect the mark. Section 21 of the Trade Marks Act provides a strict<strong>4-month opposition window</strong>from the date of journal publication.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">If a competitor files a notice of opposition on Form TM-O, the status transitions to<Link href="/trademark-opposed-what-happens-next-india" className="text-[rgb(110,94,147)] hover:underline font-semibold">Opposed</Link>, initiating inter-partes quasi-judicial litigation. The applicant must file a counter-statement within two months or forfeit the application.</p>
                                        </div>

                                        {/* STAGE 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Phase 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Final Registration</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Registered &amp; Certificate Issuance</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">If no opposition is filed during the 4-month advertisement period (or if third-party opposition proceedings are decided in the applicant&apos;s favor), the status transitions to<strong>Registered</strong>under Section 23.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">The Registrar issues a digitally signed, authentic<strong>Certificate of Registration</strong>bearing the official seal of the Trade Marks Registry. The registration is valid for exactly 10 years from the original application date and can be renewed indefinitely via<Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] hover:underline font-semibold">trademark renewal on Form TM-R</Link>.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">If a mark lapses due to unheeded notices, explore our guide on<Link href="/trademark-abandoned-how-to-restore" className="text-[rgb(110,94,147)] hover:underline font-semibold">how to restore abandoned trademark</Link>to evaluate emergency procedural relief.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: TABLE OF STAGES, ACTIONS, AND TIMELINES */}
                                    <section id="status-matrix-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Status &amp; Action Matrix
                                        </h2>
                                        <p className="mb-6">Use this comprehensive statutory matrix to understand the exact procedural implications, mandatory deadlines, and necessary actions for each IP India portal status update:</p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Portal Status</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Lifecycle Stage</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Mandatory Action Required</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Statutory Deadline</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Risk Level</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Governing Rule</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">New Application</td>
                                                        <td className="px-6 py-4">Filing Intake</td>
                                                        <td className="px-6 py-4">Verify CBR details and preserve e-receipt</td>
                                                        <td className="px-6 py-4">None (Routine)</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Low</td>
                                                        <td className="px-6 py-4">Rule 23</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Formalities Check Pass</td>
                                                        <td className="px-6 py-4">Administrative Clearance</td>
                                                        <td className="px-6 py-4">No action required; mark moves to examination queue</td>
                                                        <td className="px-6 py-4">None</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Low</td>
                                                        <td className="px-6 py-4">Rule 37</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Formalities Check Fail</td>
                                                        <td className="px-6 py-4">Clerical Defect</td>
                                                        <td className="px-6 py-4">File rectification reply or missing Form TM-48</td>
                                                        <td className="px-6 py-4 text-red-600 font-bold">30 Days from Notice</td>
                                                        <td className="px-6 py-4 text-amber-600 font-bold">Moderate</td>
                                                        <td className="px-6 py-4">Rule 37 Proviso</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Marked for Exam</td>
                                                        <td className="px-6 py-4">Substantive Review</td>
                                                        <td className="px-6 py-4">Monitor docket weekly for Examination Report issuance</td>
                                                        <td className="px-6 py-4">None</td>
                                                        <td className="px-6 py-4 text-blue-700 font-bold">In-Progress</td>
                                                        <td className="px-6 py-4">Rule 33 &amp; Sec 18</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Objected</td>
                                                        <td className="px-6 py-4">Registry Examination</td>
                                                        <td className="px-6 py-4">Draft and file comprehensive legal rebuttal with use proof</td>
                                                        <td className="px-6 py-4 text-red-600 font-bold">30 Calendar Days</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">High</td>
                                                        <td className="px-6 py-4">Sec 9 &amp; 11 / Rule 33</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Show Cause Hearing</td>
                                                        <td className="px-6 py-4">Quasi-Judicial Hearing</td>
                                                        <td className="px-6 py-4">Appear virtually before Hearing Officer with attorney</td>
                                                        <td className="px-6 py-4 text-red-600 font-bold">Date of Hearing</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">Critical</td>
                                                        <td className="px-6 py-4">Rule 33(4)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Accepted &amp; Advertised</td>
                                                        <td className="px-6 py-4">Journal Publication</td>
                                                        <td className="px-6 py-4">Monitor weekly Trade Marks Journal for oppositions</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">4 Months Window</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Low (Watch Stage)</td>
                                                        <td className="px-6 py-4">Sec 20 &amp; 21</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Opposed</td>
                                                        <td className="px-6 py-4">Third-Party Dispute</td>
                                                        <td className="px-6 py-4">File Counter-Statement on Form TM-O to contest opposition</td>
                                                        <td className="px-6 py-4 text-red-600 font-bold">2 Months from Notice</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">Critical</td>
                                                        <td className="px-6 py-4">Sec 21(2) &amp; Rule 44</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Registered</td>
                                                        <td className="px-6 py-4">Registration Completed</td>
                                                        <td className="px-6 py-4">Download digital certificate; affix (R) symbol; calendar 10-year renewal</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">10 Years Validity</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">None (Protected)</td>
                                                        <td className="px-6 py-4">Sec 23 &amp; 25</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: CRITICAL DEADLINES & MONITORING PITFALLS */}
                                    <section id="critical-deadlines" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Critical Deadlines &amp; Monitoring Pitfalls
                                        </h2>
                                        <p className="mb-6">The Trade Marks Registry enforces rigid statutory timelines. Unlike civil litigation where procedural condonation of delay is routinely granted, registry clocks under the Trade Marks Act, 1999 are unforgiving:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Missing the 30-Day Examination Response Window</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Under Rule 33(1), when an Examination Report is generated, the applicant has strictly 30 days to submit a formal written rebuttal. Missing this 30-day window triggers an automated order of abandonment under Section 132. Never wait for a physical letter—registry notices are issued electronically.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Relying on Unmonitored Email Inboxes</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Registry hearing notices and examination reports are dispatched to the correspondence email recorded on Form TM-A. If the filing was handled by a third-party agency or the applicant&apos;s email filters route government emails to spam, notices can go unread for months until the file is abandoned.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Non-Appearance at Scheduled Virtual Show Cause Hearings</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If a hearing is scheduled before the Hearing Officer and neither the applicant nor their authorized trademark counsel logs in via video conference, the application is marked &ldquo;Refused for Non-Appearance&rdquo;. Restoring a refused application requires an expensive review petition on Form TM-M or a High Court appeal.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Failing to File Counter-Statement Within 2 Months of Opposition</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Under Section 21(2), when a notice of opposition is served, the applicant must file a formal counter-statement on Form TM-O within exactly two months. The Trade Marks Act specifies that if no counter-statement is filed within this 2-month period, the applicant &ldquo;shall be deemed to have abandoned his application&rdquo;. The Registrar has zero statutory discretion to extend this deadline.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: LEGAL RIGHTS & RISKS */}
                                    <section id="legal-consequences" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Legal Rights &amp; Commercial Risks
                                        </h2>
                                        <p className="mb-6">Your trademark status directly impacts your legal standing and your ability to enforce commercial exclusivity in commerce:</p>
                                        <p className="mb-6"><strong>Transition from ™ to ® Symbol:</strong>While your application status is &ldquo;New Application&rdquo;, &ldquo;Marked for Exam&rdquo;, &ldquo;Objected&rdquo;, or &ldquo;Advertised&rdquo;, you are legally permitted to affix the<strong>™ (trademark)</strong>symbol to your brand. This puts competitors on notice of your common-law claim. However, using the<strong>® (registered)</strong>symbol before actual certificate issuance is a punishable criminal offence under Section 107 of the Trade Marks Act, 1999.</p>
                                        <p className="mb-6"><strong>Evidentiary Injunctions in Court:</strong>A status of &ldquo;Registered&rdquo. Grants statutory rights under Section 28 and Section 29. This enables you to file infringement suits, obtain ex-parte interim injunctions, and secure damages in civil court without having to prove continuous commercial goodwill under common-law passing off.</p>
                                        <p className="mb-6"><strong>Madrid Protocol Protection Abroad:</strong>For companies expanding internationally under our<Link href="/international-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-semibold">international trademark registration guide</Link>, the home country Indian application serves as the foundation. If your Indian base status collapses due to unaddressed objections, all linked foreign registrations across the United States, Europe, and Asia will automatically fall under the Madrid Protocol dependency principle.</p>
                                    </section>

                                    {/* SECTION 7: MONITORING CHECKLIST */}
                                    <section id="monitoring-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Status Tracking Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Record Application &amp; CBR Numbers:</strong>Secure your official filing receipt and note the exact 5 to 7-digit trademark number and priority date.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Establish Monthly Docket Audits:</strong>Log in to the IP India e-register at least once every 15 to 30 days to check for real-time status transitions.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Download Examination Reports Promptly:</strong>When &ldquo;Objected&rdquo; appears, download the full examination report PDF immediately and note the 30-day deadline.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Verify Attorney Representation:</strong>Ensure your Power of Attorney (Form TM-48) is properly docketed on the portal so notices reach authorized counsel.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Track Journal Publication:</strong>When &ldquo;Accepted &amp; Advertised&rdquo; appears, record the Journal Number and calculate the 4-month opposition window.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Secure Registration Certificate:</strong>Upon reaching &ldquo;Registered&rdquo;, immediately download the digitally signed certificate and backup the PDF.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Set 10-Year Decennial Renewal Alerts:</strong>Calendar automated reminders for 9 years from the filing date to prepare for timely decennial renewal.</span></li>
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

                                    {/* SECTION 9: STRATEGIC PORTFOLIO ADVICE */}
                                    <section id="strategic-advice" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Application Tracking Advice
                                        </h2>
                                        <p className="mb-6">A trademark application is not a passive filing—it is an active legal asset undergoing rigorous state examination. In high-growth startups and established commercial enterprises, managing multiple filings across distinct Nice classes requires institutional docketing hygiene.</p>
                                        <p className="mb-6">Never leave status tracking to chance or rely solely on physical postal communications. By engaging registered trademark attorneys and setting up systematic tracking protocols, you safeguard your brand from unmerited objections, competitor poaching, and administrative abandonment. Take proactive control of your trademark portfolio today.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Expert Trademark Status Management
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Is Your Trademark Status Stuck or Objected?
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Overcome examination objections, draft authoritative legal replies, and represent your brand before the Trade Marks Registry. Partner with expert IP advocates to secure your registration certificate.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Resolve Trademark Status</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Certified IP Advocates • Same-Day Objection Replies • Virtual Show Cause Hearing Representation</p>
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, trademark application prosecution, and docket tracking under the Trade Marks Act, 1999. He helps startups and enterprises resolve registry objections swiftly.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Fix Your TM Status</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Received an Examination Report or Show Cause Hearing? Partner with registered IP advocates to respond within statutory deadlines.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Respond to Objection
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Filing Steps</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileLines} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Exam Reply</span></Link></li>
                                    <li><Link href="/trademark-objected-what-to-do-next" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Objected</span></Link></li>
                                    <li><Link href="/trademark-hearing-notice-what-to-do" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Hearing Guide</span></Link></li>
                                    <li><Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Search</span></Link></li>
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Guide</span></Link></li>
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
