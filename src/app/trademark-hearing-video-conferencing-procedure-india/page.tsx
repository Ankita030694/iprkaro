import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
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
    faClock,
    faRotate,
    faStamp,
    faGavel,
    faLink,
    faDiagramProject,
    faFileLines,
    faCircleCheck,
    faBan,
    faHourglassHalf,
    faLandmark,
    faFileSignature,
    faCalculator,
    faEye,
    faBriefcase,
    faLaptop,
    faHeadset,
    faFolderOpen,
    faDesktop,
    faCircleInfo,
    faUserCheck,
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Attend Trademark Video Hearing: IP India Webex Guide",
    description: validateAndNormalizeDescription(
        "Attend IP India trademark hearing via video conferencing on Webex. Learn cause list check, document checklist, oral arguments, and adjournment rules.",
        "app/trademark-hearing-video-conferencing-procedure-india/page.tsx"
    ),
    keywords: [
        "how to attend trademark hearing via video conferencing in india",
        "trademark hearing video conferencing procedure india",
        "ip india cisco webex hearing guidelines",
        "how to check trademark hearing cause list",
        "documents needed for trademark show cause hearing",
        "form tm m adjournment trademark hearing india",
        "cisco webex trademark hearing login display name format",
        "written arguments trademark hearing rule 115",
        "ready for show cause hearing trademark status",
        "trademark hearing officer questions and representation"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-hearing-video-conferencing-procedure-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Attend Trademark Video Hearing: IP India Webex Guide",
        description: "Attend IP India trademark hearing via video conferencing on Webex. Learn cause list check, document checklist, oral arguments, and adjournment rules.",
        url: "https://www.iprkaro.com/trademark-hearing-video-conferencing-procedure-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-hearing-video-conferencing-procedure-india.png",
                width: 1200,
                height: 630,
                alt: "How to Attend Trademark Hearing via Video Conferencing in India Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Attend Trademark Video Hearing: IP India Webex Guide",
        description: "Attend IP India trademark hearing via video conferencing on Webex. Learn cause list check, document checklist, oral arguments, and adjournment rules.",
        images: ["https://www.iprkaro.com/images/og/trademark-hearing-video-conferencing-procedure-india.jpg"],
    }
};

const faqs = [
    {
        question: "Why was my trademark application marked 'Ready for Show Cause Hearing'?",
        answer: "When your written reply to the official Examination Report (Form MIS-R) does not completely satisfy the Trademark Examiner regarding Section 9 (distinctiveness / descriptive nature) or Section 11 (conflict with prior marks), Indian law gives you a statutory right to be heard under Section 18(4) and Rule 33(4). The Registry schedules a show-cause hearing before a Hearing Officer via video conferencing before passing a final acceptance or refusal order."
    },
    {
        question: "Which video conferencing platform is used by the Trade Marks Registry of India?",
        answer: "The Controller General of Patents, Designs and Trade Marks (CGPDTM) officially conducts all virtual hearings through Cisco Webex Meetings across all five Trade Marks Registry branches: Delhi (Dwarka), Mumbai (Antop Hill), Chennai (GST Road), Kolkata (Salt Lake), and Ahmedabad (Chanakyapuri)."
    },
    {
        question: "How do I find my trademark hearing date, time slot, and Webex meeting link?",
        answer: "You can find your hearing details by checking the official 'Dynamic Hearing Cause List' on the IP India portal (ipindiaonline.gov.in) under the Trade Marks section. Enter your Trademark Application Number or select your jurisdiction and date. Additionally, the official Hearing Notice containing the Webex link, meeting ID, password, and session timing (Morning 10:30 AM or Afternoon 2:30 PM) is uploaded under 'View Documents' in your trademark status dossier."
    },
    {
        question: "What is the mandatory display name format required when joining the Cisco Webex hearing?",
        answer: "As per official CGPDTM guidelines, every attendee must format their Webex screen name as: '[Cause List Item No.] - [Application No.] - [Name of Advocate / Agent / Applicant]'. For example: 'Item 14 - App No 5678912 - Rahul Roy, Advocate'. If your display name does not follow this format, the registry meeting moderator may not admit you from the waiting lobby into the hearing room."
    },
    {
        question: "Can an applicant attend the trademark video hearing personally without an attorney?",
        answer: "Yes. An applicant (proprietor, authorized director, or partner) can personally attend and present their case before the Hearing Officer. However, because hearings involve nuanced legal principles under Section 9, Section 11, Section 12 (honest concurrent use), and judicial precedents, engaging an experienced Trademark Attorney or Registered Patent & Trademark Agent armed with a Form TM-48 Power of Attorney significantly improves the probability of registration."
    },
    {
        question: "What critical documents must be kept ready in digital format during the hearing?",
        answer: "You should keep a organized PDF dossier containing: (1) Form TM-A and Application receipt, (2) The official Examination Report, (3) Your filed Written Reply, (4) Form TM-48 Power of Attorney, (5) Sworn Trademark User Affidavit under Rule 25 with GST invoices and turnover figures, (6) Side-by-side trademark comparison charts, and (7) Relevant High Court / Supreme Court precedent judgments ready for instant screen sharing."
    },
    {
        question: "What should I do if I face technical glitches, audio failure, or internet disconnection during the hearing?",
        answer: "If you experience a disconnect or audio failure, immediately re-join the Webex meeting. If the session has moved to another item, message the meeting moderator in the Webex public/host chat citing your Item Number and technical difficulty. Simultaneously, send an urgent email to the designated registry hearing support email with a screenshot of the glitch. Under Rule 115, you can also file written arguments along with an affidavit of technical failure via Form TM-M within 24–48 hours."
    },
    {
        question: "How do I apply for an adjournment if I or my attorney cannot attend the scheduled hearing date?",
        answer: "You must file Form TM-M (Request for Adjournment of Hearing under Rule 115) electronically on the IP India portal at least 3 to 7 working days prior to the hearing date along with the statutory government fee (₹900 for online e-filing). State valid, documented grounds such as medical emergency, High Court appearance, or bereavement. The Registry generally allows up to two adjournments upon reasonable cause."
    },
    {
        question: "What happens if neither the applicant nor the attorney joins the Webex hearing?",
        answer: "If no appearance is made and no Form TM-M adjournment request was filed on record, the Hearing Officer will mark the matter as 'Non-Appearance' and either issue an ex-parte order of 'Abandoned' under Section 132 or 'Refused' under Section 18(4). Reviving an abandoned or refused mark requires filing costly review petitions (Form TM-P) or appeals before the High Court Intellectual Property Division (IPD)."
    },
    {
        question: "What post-hearing steps are required after concluding the oral video hearing?",
        answer: "Immediately post-hearing, monitor your application status on the IP India portal. If the Hearing Officer directed you to file written submissions, submit a comprehensive 'Written Arguments / Notes of Submissions' via Form TM-M within 15 days summarizing your oral defense and case laws. If accepted, the status changes to 'Accepted & Advertised' or 'Advertised bef acc' in the Trade Marks Journal."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Virtual Mandate" },
    { id: "hearing-triggers", title: "Why Video Hearing is Scheduled" },
    { id: "cause-list-tracking", title: "Checking Cause List & Notice" },
    { id: "technical-setup", title: "Cisco Webex Protocol & Setup" },
    { id: "document-checklist", title: "Essential Document Checklist" },
    { id: "step-by-step", title: "7-Step Hearing Day Walkthrough" },
    { id: "oral-advocacy", title: "Oral Advocacy & Overcoming Objections" },
    { id: "adjournment-rules", title: "Adjournment Rules (Form TM-M)" },
    { id: "tech-contingency", title: "Handling Technical Glitches" },
    { id: "post-hearing", title: "Post-Hearing Orders & Next Steps" },
    { id: "comparison-table", title: "Virtual vs In-Person Matrix" },
    { id: "statutory-fees", title: "Official Statutory Fee Schedule" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Counsel & Legal Action" },
];

export default function TrademarkVideoHearingPage() {
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
        "headline": "How to Attend Trademark Hearing via Video Conferencing in India",
        "description": "Complete guide on attending trademark hearings via video conferencing on Cisco Webex in India. Learn cause list check, documents, and hearing rules.",
        "image": "https://www.iprkaro.com/images/og/trademark-hearing-video-conferencing-procedure-india.png",
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
            "@id": "https://www.iprkaro.com/trademark-hearing-video-conferencing-procedure-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Attend Trademark Video Hearing: IP India Webex Guide",
        "url": "https://www.iprkaro.com/trademark-hearing-video-conferencing-procedure-india",
        "description": "Complete guide on attending trademark hearings via video conferencing on Cisco Webex in India. Learn cause list check, documents, and hearing rules.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-hearing-video-conferencing-procedure-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-hearing-video-conferencing-procedure-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Video Hearing Procedure", "item": "https://www.iprkaro.com/trademark-hearing-video-conferencing-procedure-india" }
        ]
    };

    const procedureListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure to Attend Trademark Video Hearing in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Download Hearing Notice & Verify Cause List Serial Number" },
            { "@type": "ListItem", "position": 2, "name": "Prepare Digital Evidence Dossier, Invoices & User Affidavit" },
            { "@type": "ListItem", "position": 3, "name": "Configure Cisco Webex Hardware, High-Speed Internet & Quiet Space" },
            { "@type": "ListItem", "position": 4, "name": "Join Webex Lobby 20 Minutes Early with Exact Display Name Format" },
            { "@type": "ListItem", "position": 5, "name": "Enter Virtual Hearing Room When Item Number is Called by Officer" },
            { "@type": "ListItem", "position": 6, "name": "Deliver Structured Oral Defense & Screen-Share Supporting Invoices" },
            { "@type": "ListItem", "position": 7, "name": "Record Hearing Officer Directions & File Post-Hearing Written Arguments" }
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
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm max-w-full">
                                <FontAwesomeIcon icon={faVideo} className="w-3.5 h-3.5 text-[#6E5E93] mr-2 flex-shrink-0" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase truncate">Trade Marks Rules, 2017 • Virtual Hearing Protocol</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-gray-900 tracking-tight break-words">
                                How to Attend Trademark Hearing via <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Video Conferencing in India</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-700 font-medium leading-relaxed break-words">
                                Has your brand application status changed to <strong>&ldquo;Ready for Show Cause Hearing&rdquo;</strong>? Under the digital mandate of the Controller General of Patents, Designs and Trade Marks (CGPDTM), all personal hearings under <strong>Section 18(4) and Rule 115</strong> are now conducted nationwide via <strong>Cisco Webex Video Conferencing</strong>. Learn how to track dynamic cause lists on IP India, format your mandatory Webex login ID, structure oral arguments against Section 9 and Section 11 objections, file Form TM-M adjournments, and win your official brand registration.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm flex-shrink-0" />
                                    <div>
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior Trademark Litigator & IP Strategist</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🛡️ Official CGPDTM Guidelines</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Book Hearing Representation <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-xs sm:text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                    Call Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>

                        <div className="w-full min-w-0 lg:col-span-5 mt-4 lg:mt-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group max-w-lg mx-auto lg:max-w-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-hearing-video-conferencing-procedure-india.png"
                                    alt="How to Attend Trademark Hearing via Video Conferencing in India Complete Guide"
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
                        { label: "Trademark Video Hearing Guide", href: "/trademark-hearing-video-conferencing-procedure-india" }
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
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100 min-w-0"
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

                            <div className="w-full min-w-0 bg-white p-4 sm:p-6 md:p-10 lg:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 md:space-y-16 article-content overflow-hidden">
                                <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 leading-relaxed font-normal break-words overflow-hidden">

                                    <div className="flex items-center space-x-3 sm:space-x-4 mb-8 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose">
                                        <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover m-0 flex-shrink-0" />
                                        <div className="min-w-0">
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0 truncate">Written by <Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-[10px] sm:text-xs text-gray-500 m-0 truncate">Senior Trademark Litigator & IP Strategist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faVideo} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            The Digital Transformation of Trademark Hearings in India
                                        </h2>
                                        <p>
                                            For decades, attending a trademark hearing in India required applicants and legal attorneys to physically travel to one of the five zonal Trade Marks Registry offices: <strong>Delhi, Mumbai, Chennai, Kolkata, or Ahmedabad</strong>. An advocate in Bengaluru or Guwahati had to spend days traveling and sitting in crowded registry corridors to present a 10-minute legal argument before a Hearing Officer.
                                        </p>
                                        <p>
                                            In a transformative leap toward paperless, transparent, and expedited justice, the <strong>Controller General of Patents, Designs and Trade Marks (CGPDTM)</strong> officially transitioned all show-cause and post-examination hearings to <strong>Video Conferencing (VC) via Cisco Webex</strong>. Governed by <strong>Section 18(4), Section 128, and Rule 115 of the Trade Marks Rules, 2017</strong>, virtual hearings ensure that every applicant, whether an early-stage startup or a global corporation, receives equal, transparent, and prompt opportunity to defend their brand rights without geographic barriers.
                                        </p>

                                        <div className="bg-gradient-to-r from-purple-50 via-indigo-50/50 to-white p-4 sm:p-6 rounded-2xl border border-purple-100 my-6 not-prose">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Statutory Right to be Heard under Section 18(4)</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                        Under the Trade Marks Act, 1999, the Registrar cannot unilaterally refuse a trademark application without offering the applicant a formal opportunity to be heard. The video hearing is your statutory oral trial where you or your appointed advocate present live evidence, explain distinctiveness, distinguish conflicting citations, and convince the Hearing Officer to grant publication in the Trade Marks Journal.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p>
                                            While video hearings have made participation immensely accessible, they demand strict digital etiquette, disciplined file management, precise time management, and flawless compliance with official cause list protocols. Arriving unprepared or misformatting your screen name can result in technical abandonment or outright refusal of your valuable trademark.
                                        </p>
                                    </section>

                                    {/* SECTION 2: TRIGGERS */}
                                    <section id="hearing-triggers" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faGavel} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Why is a Trademark Video Hearing Scheduled?
                                        </h3>
                                        <p>
                                            A virtual hearing is not triggered automatically for every trademark filing. It occurs when procedural or substantive legal hurdles cannot be resolved through written correspondence alone. The three primary legal triggers include:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 not-prose">
                                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="px-2.5 py-1 bg-purple-100 text-[#6E5E93] text-[11px] font-bold rounded-full uppercase">Trigger 1</span>
                                                    <span className="text-[11px] text-gray-500 font-semibold">Ex-Parte Hearing</span>
                                                </div>
                                                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Show-Cause Examination Hearing</h4>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                                                    You filed a written reply to the Examination Report contesting <Link href="/what-does-objected-mean-in-trademark-status" className="text-[#6E5E93] font-semibold hover:underline">Section 9 or Section 11 objections</Link>, but the Examiner remained unconvinced. Status updates to <em>&ldquo;Ready for Show Cause Hearing&rdquo;</em>.
                                                </p>
                                                <div className="p-2.5 bg-purple-50/70 rounded-xl border border-purple-100 text-xs text-purple-900 font-medium">
                                                    <strong>Parties:</strong> Applicant / Attorney vs Registry Hearing Officer.
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-[11px] font-bold rounded-full uppercase">Trigger 2</span>
                                                    <span className="text-[11px] text-gray-500 font-semibold">Inter-Partes Hearing</span>
                                                </div>
                                                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Opposition Final Hearing (Sec 21)</h4>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                                                    A third party filed a Form TM-O Notice of Opposition against your published brand. Both parties completed Rule 45, 46, and 47 evidentiary affidavits, and the matter is listed for final oral trial.
                                                </p>
                                                <div className="p-2.5 bg-indigo-50/70 rounded-xl border border-indigo-100 text-xs text-indigo-900 font-medium">
                                                    <strong>Parties:</strong> Applicant vs Opponent before Hearing Officer.
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full uppercase">Trigger 3</span>
                                                    <span className="text-[11px] text-gray-500 font-semibold">Rectification</span>
                                                </div>
                                                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Non-Use Cancellation Hearing</h4>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                                                    A competitor filed a petition under <Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="text-[#6E5E93] font-semibold hover:underline">Section 47 for 5 years non-use</Link> or Section 57 for invalidity before the Registrar seeking removal of a registered mark.
                                                </p>
                                                <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100 text-xs text-emerald-950 font-medium">
                                                    <strong>Parties:</strong> Aggrieved Petitioner vs Registered Owner.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50 p-4 sm:p-5 rounded-2xl border border-amber-200 not-prose my-6">
                                            <div className="flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                                                <div className="text-xs sm:text-sm text-amber-900 min-w-0">
                                                    <p className="font-bold text-sm mb-1">Crucial Distinction: Objection vs Hearing</p>
                                                    <p className="leading-relaxed m-0">
                                                        Receiving an Examination Report is an &ldquo;Objection&rdquo; handled via a written response (MIS-R). A &ldquo;Hearing&rdquo; is the secondary, oral trial stage when the written response fails to satisfy the examiner. Failing to appear at the hearing results in immediate statutory abandonment under Section 132.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: CAUSE LIST TRACKING */}
                                    <section id="cause-list-tracking" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faDesktop} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            How to Check Hearing Cause List & Download Hearing Notice
                                        </h3>
                                        <p>
                                            The Trade Marks Registry publishes scheduled hearings weeks in advance through the <strong>Dynamic Cause List</strong> on the official portal (<code>ipindiaonline.gov.in</code>). Tracking this cause list ensures you do not miss your allotted date, session slot, or serial number.
                                        </p>

                                        <div className="my-6 p-4 sm:p-6 bg-gray-50 rounded-2xl border border-gray-200 not-prose">
                                            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-[#6E5E93] mr-2 flex-shrink-0" />
                                                Step-by-Step Method to Retrieve Your Hearing Details
                                            </h4>

                                            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                                                <div className="flex items-start bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0">1</span>
                                                    <div className="min-w-0">
                                                        <strong>Visit the Official Portal:</strong> Navigate to <span className="break-all font-mono text-[11px] text-[#6E5E93]">https://ipindiaonline.gov.in/trademarkefiling/user/frmDynamicCauseList.aspx</span>.
                                                    </div>
                                                </div>

                                                <div className="flex items-start bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0">2</span>
                                                    <div className="min-w-0">
                                                        <strong>Select Search Parameters:</strong> Choose your appropriate Trade Marks Office jurisdiction (Delhi, Mumbai, Chennai, Kolkata, or Ahmedabad), hearing date range, or directly enter your <strong>Trademark Application Number</strong>.
                                                    </div>
                                                </div>

                                                <div className="flex items-start bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0">3</span>
                                                    <div className="min-w-0">
                                                        <strong>Identify Your Hearing Officer & Board:</strong> Note down the name of the designated Hearing Officer (e.g., Senior Examiner / Assistant Registrar) and the specific Virtual Court Room / Board Number.
                                                    </div>
                                                </div>

                                                <div className="flex items-start bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0">4</span>
                                                    <div className="min-w-0">
                                                        <strong>Note Item Serial Number & Session Slot:</strong> Cause lists are structured into two daily sessions:
                                                        <ul className="mt-1.5 space-y-1 text-gray-600">
                                                            <li>• <strong>Morning Session:</strong> 10:30 AM to 01:30 PM (Items 1 to 40 approx)</li>
                                                            <li>• <strong>Afternoon Session:</strong> 02:30 PM to 05:30 PM (Items 41 to 80 approx)</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="flex items-start bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0">5</span>
                                                    <div className="min-w-0">
                                                        <strong>Download the Official Hearing Notice:</strong> Go to the Trade Mark Application Status dossier, click on <em>&ldquo;View Documents&rdquo;</em>, and download the PDF titled <em>&ldquo;Hearing Notice&rdquo;</em>. This document contains the official Cisco Webex Meeting URL, Meeting ID, and Access Passcode.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: TECHNICAL SETUP */}
                                    <section id="technical-setup" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faLaptop} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Cisco Webex Setup, Hardware & Display Name Protocol
                                        </h3>
                                        <p>
                                            The Trade Marks Registry enforces strict technical and decorum rules for virtual proceedings. Failing to adhere to the naming convention is the single most common reason applicants remain stranded in the Webex waiting lobby without being admitted by the court master.
                                        </p>

                                        <div className="my-6 p-4 sm:p-6 bg-purple-900 text-white rounded-2xl shadow-lg not-prose overflow-hidden">
                                            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-purple-200 font-bold block mb-2">Mandatory Screen Name Convention</span>
                                            <div className="text-xs sm:text-base font-mono font-bold text-amber-300 mb-3 bg-black/40 p-3 sm:p-4 rounded-xl border border-white/10 break-all">
                                                [Cause List Item No.] - [Application No.] - [Name & Role]
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-purple-100">
                                                <div className="bg-white/10 p-3 rounded-xl min-w-0">
                                                    <span className="font-bold text-white block mb-1">Example for Legal Counsel:</span>
                                                    <code className="break-all font-mono text-[11px] text-amber-200">Item 14 - App No 5678912 - Rahul Roy, Advocate</code>
                                                </div>
                                                <div className="bg-white/10 p-3 rounded-xl min-w-0">
                                                    <span className="font-bold text-white block mb-1">Example for Direct Applicant:</span>
                                                    <code className="break-all font-mono text-[11px] text-amber-200">Item 29 - App No 4981234 - Priya Sharma, Director</code>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div className="min-w-0">
                                                    <h4 className="text-sm font-bold text-gray-900 mb-1">Hardware & Device Requirements</h4>
                                                    <p className="text-xs text-gray-600 m-0 leading-relaxed">Always use a desktop or laptop equipped with an HD webcam and noise-canceling headset. Representation via smartphones is strongly discouraged by the Registry.</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div className="min-w-0">
                                                    <h4 className="text-sm font-bold text-gray-900 mb-1">Dual Internet Connectivity</h4>
                                                    <p className="text-xs text-gray-600 m-0 leading-relaxed">Ensure a stable high-speed broadband connection (minimum 20 Mbps) paired with a standby 4G/5G mobile hotspot to prevent abrupt mid-argument disconnections.</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div className="min-w-0">
                                                    <h4 className="text-sm font-bold text-gray-900 mb-1">Audio/Video Decorum & Dress Code</h4>
                                                    <p className="text-xs text-gray-600 m-0 leading-relaxed">Advocates must wear formal court attire (white shirt, black coat, neckband/tie). Direct applicants must dress in neat business formals with a neutral background.</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                                <div className="min-w-0">
                                                    <h4 className="text-sm font-bold text-gray-900 mb-1">Microphone Mute Protocol</h4>
                                                    <p className="text-xs text-gray-600 m-0 leading-relaxed">Keep your microphone muted at all times in the virtual hearing room until the Hearing Officer calls your item serial number to prevent audio feedback.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: DOCUMENT CHECKLIST */}
                                    <section id="document-checklist" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faFolderOpen} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Essential Document Checklist & Digital Evidence Dossier
                                        </h3>
                                        <p>
                                            During a video hearing, the Hearing Officer typically reviews dozens of applications within a single 3-hour session. You have approximately <strong>5 to 10 minutes</strong> to articulate your position. Having a pre-indexed, consolidated PDF folder ready on your screen is mandatory for persuasive advocacy.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 not-prose">
                                            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center space-x-2 text-[#6E5E93] font-bold text-sm mb-3">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-4 h-4 flex-shrink-0" />
                                                    <span>Core Legal Pleadings</span>
                                                </div>
                                                <ul className="text-xs sm:text-sm text-gray-600 space-y-2.5">
                                                    <li className="flex items-start">
                                                        <span className="text-purple-600 font-bold mr-2">1.</span>
                                                        <span><strong>Form TM-A & Acknowledgement:</strong> Showing exact date of filing and user date claimed.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-purple-600 font-bold mr-2">2.</span>
                                                        <span><strong>Official Examination Report:</strong> Pinpointing the exact sections cited (Sec 9(1)(a), 9(1)(b), 11(1)).</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-purple-600 font-bold mr-2">3.</span>
                                                        <span><strong>Written Reply Filed (MIS-R):</strong> Your initial written defense submitted on record.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-purple-600 font-bold mr-2">4.</span>
                                                        <span><strong><Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[#6E5E93] font-semibold hover:underline">Form TM-48 Power of Attorney</Link>:</strong> Duly stamped and signed authorizing your advocate.</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-purple-200 shadow-sm bg-gradient-to-b from-purple-50/20 to-white">
                                                <div className="flex items-center space-x-2 text-purple-900 font-bold text-sm mb-3">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-4 h-4 text-[#6E5E93] flex-shrink-0" />
                                                    <span>Evidentiary & Technical Exhibits</span>
                                                </div>
                                                <ul className="text-xs sm:text-sm text-gray-600 space-y-2.5">
                                                    <li className="flex items-start">
                                                        <span className="text-purple-600 font-bold mr-2">5.</span>
                                                        <span><strong><Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[#6E5E93] font-semibold hover:underline">Trademark User Affidavit (Rule 25)</Link>:</strong> Sworn by proprietor with first commercial invoice date.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-purple-600 font-bold mr-2">6.</span>
                                                        <span><strong>Commercial Tax Invoices (GST):</strong> Invoices establishing continuous commercial turnover across India.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-purple-600 font-bold mr-2">7.</span>
                                                        <span><strong>Side-by-Side Comparison Chart:</strong> Visual matrix proving phonetic, visual, and conceptual dissimilarity with cited marks.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-purple-600 font-bold mr-2">8.</span>
                                                        <span><strong>Consent Letter / Coexistence Deed:</strong> If relying on <Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[#6E5E93] font-semibold hover:underline">coexistence with prior mark owner</Link>.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: 7-STEP PROCESS */}
                                    <section id="step-by-step" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faDiagramProject} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Step-by-Step Walkthrough on the Day of the Hearing
                                        </h3>
                                        <p>
                                            Executing a flawless virtual appearance requires following a systematic chronological workflow on the hearing date:
                                        </p>

                                        <div className="space-y-3 sm:space-y-4 my-6 not-prose">
                                            <div className="flex items-start p-3.5 sm:p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">1</div>
                                                <div className="min-w-0">
                                                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Pre-Hearing System Check (30 Mins Prior)</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Re-test your camera, microphone, and internet bandwidth. Launch Cisco Webex Meetings application and verify that your screen name matches the required format: <code>Item [No] - App [No] - [Name]</code>.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-3.5 sm:p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">2</div>
                                                <div className="min-w-0">
                                                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Join the Virtual Lobby (15 Mins Prior)</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Click the official Webex link from your Hearing Notice. You will be placed in the &ldquo;Virtual Waiting Lobby&rdquo;. Do not disconnect; the registry moderator monitors the lobby and admits parties based on the dynamic cause list order.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-3.5 sm:p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">3</div>
                                                <div className="min-w-0">
                                                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Admission into the Hearing Courtroom</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        When your cause list item number is called, the moderator admits you into the main virtual room. Ensure your camera is immediately switched ON and your microphone remains muted until addressed.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-3.5 sm:p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">4</div>
                                                <div className="min-w-0">
                                                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Formal Appearance & Identity Recording</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Unmute and announce your formal appearance: <em>&ldquo;Good morning / afternoon Officer, I am appearing on behalf of the Applicant in Item Number 14, Application Number 5678912 for the mark [Brand Name].&rdquo;</em>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-3.5 sm:p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">5</div>
                                                <div className="min-w-0">
                                                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Crisp Oral Submissions & Screen Sharing</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Address the specific objection cited. Ask the officer: <em>&ldquo;May I share my screen to display our user invoices and comparison chart?&rdquo;</em> Present your strongest points within 3 to 5 minutes without reading lengthy paragraphs.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-3.5 sm:p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">6</div>
                                                <div className="min-w-0">
                                                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Responding to Officer Queries & Conditions</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        The Hearing Officer may propose standard conditions, such as: (a) Disclaimer of generic terms, (b) Restriction of goods specification, or (c) Association with an earlier mark under Section 16. Carefully accept reasonable conditions to secure acceptance.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-3.5 sm:p-4 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 flex-shrink-0">7</div>
                                                <div className="min-w-0">
                                                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Order Pronouncement & Post-Hearing Directions</h4>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        The officer will verbally pronounce whether the application is <strong>Accepted</strong>, <strong>Directed for Written Arguments</strong>, or <strong>Refused</strong>. Note the directions, thank the Officer, and disconnect from the call.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: ORAL ADVOCACY */}
                                    <section id="oral-advocacy" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Effective Oral Advocacy: Tackling Section 9 & Section 11 Objections
                                        </h3>
                                        <p>
                                            To win a show-cause hearing, your oral submissions must be structured around settled principles of Indian trademark jurisprudence:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 not-prose">
                                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-purple-200 shadow-sm">
                                                <span className="px-2.5 py-1 bg-purple-100 text-[#6E5E93] text-[11px] font-bold rounded-full uppercase mb-3 inline-block">Defending Section 9</span>
                                                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Absolute Grounds (Non-Distinctive / Descriptive)</h4>
                                                <ul className="text-xs sm:text-sm text-gray-600 space-y-2 mb-3">
                                                    <li>• <strong>Arbitrary or Coined Mark:</strong> Demonstrate that the mark is an invented word having no direct dictionary meaning to the goods (e.g., <em>KODAK</em> or <em>EXXON</em>).</li>
                                                    <li>• <strong>Acquired Distinctiveness (Sec 9 Proviso):</strong> Present audited turnover and continuous commercial use establishing that consumers exclusively associate the mark with your company.</li>
                                                    <li>• <strong>Anti-Dissection Rule:</strong> Cite Supreme Court ruling in <em>Cadila Healthcare</em> that composite logos must be judged as a whole, not broken down into isolated components.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-indigo-200 shadow-sm">
                                                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-[11px] font-bold rounded-full uppercase mb-3 inline-block">Defending Section 11</span>
                                                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Relative Grounds (Conflict with Prior Marks)</h4>
                                                <ul className="text-xs sm:text-sm text-gray-600 space-y-2 mb-3">
                                                    <li>• <strong>Phonetic & Visual Dissimilarity:</strong> Walk the Officer through syllable counts, prefix/suffix distinctions, visual font logos, and color differences.</li>
                                                    <li>• <strong>Different Trade Channels & Class Specialization:</strong> Prove that although goods share a class, customer profiles, price points, and retail channels are entirely distinct.</li>
                                                    <li>• <strong>Honest Concurrent Use (Section 12):</strong> If you have used the mark in good faith alongside the cited mark for years, invoke statutory honest concurrent use protection.</li>
                                                    <li>• <strong>Prior Adoption (Section 34):</strong> If your use date predates the cited mark&rsquo;s registration or user claim, your common law rights take precedence.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: ADJOURNMENT RULES */}
                                    <section id="adjournment-rules" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faHourglassHalf} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Postponing a Hearing: Form TM-M Adjournment Rules
                                        </h3>
                                        <p>
                                            If the applicant or their authorized advocate cannot attend the scheduled hearing due to unavoidable emergencies, an official adjournment must be sought under <strong>Rule 115 of the Trade Marks Rules, 2017</strong>.
                                        </p>

                                        <div className="bg-gradient-to-r from-purple-50 via-white to-indigo-50 p-4 sm:p-6 rounded-2xl border border-purple-200 my-6 not-prose">
                                            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">Statutory Protocol for Adjournment on Form TM-M</h4>
                                            <ul className="text-xs sm:text-sm text-gray-700 space-y-2 mb-4">
                                                <li>• <strong>Mandatory Form:</strong> File Form TM-M electronically under the sub-category <em>&ldquo;Request for Adjournment of Hearing&rdquo;</em>.</li>
                                                <li>• <strong>Statutory Government Fee:</strong> ₹900 per application for e-filing (₹1,000 for physical filing).</li>
                                                <li>• <strong>Filing Window:</strong> Must be filed at least <strong>3 to 7 working days prior</strong> to the scheduled hearing date to allow the Registry clerk to update the cause list.</li>
                                                <li>• <strong>Valid Legal Grounds:</strong> Medical hospitalization, bereavement, listing before the Supreme Court / High Court on the same day, or non-receipt of the hearing notice link.</li>
                                                <li>• <strong>Adjournment Limits:</strong> The Registrar exercises discretionary powers and will generally not grant more than <strong>two adjournments</strong> per matter.</li>
                                            </ul>
                                            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-semibold">
                                                <strong>Warning:</strong> Informal emails or phone calls to registry staff are NOT legally valid requests for adjournment. Only a paid Form TM-M on record prevents ex-parte abandonment.
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: TECHNICAL GLITCHES */}
                                    <section id="tech-contingency" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faHeadset} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Handling Technical Glitches, Disconnections & Dropped Calls
                                        </h3>
                                        <p>
                                            In virtual courtrooms, sudden bandwidth drops, audio feedback, or Webex server errors can occasionally occur. The Trade Marks Registry provides defined contingency mechanisms to safeguard applicant rights:
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-6 not-prose">
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 min-w-0">
                                                <span className="block font-bold text-gray-900 text-sm mb-1">1. Immediate Re-Login</span>
                                                <p className="text-xs text-gray-600 m-0 leading-relaxed">Immediately re-join the meeting. Post a polite message in the Webex public chat mentioning your item number and that you experienced a temporary disconnection.</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 min-w-0">
                                                <span className="block font-bold text-gray-900 text-sm mb-1">2. Email Registry Support</span>
                                                <p className="text-xs text-gray-600 m-0 leading-relaxed">Send an immediate email to the designated zonal registry hearing email attaching a timestamped screenshot of the login failure.</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 min-w-0">
                                                <span className="block font-bold text-gray-900 text-sm mb-1">3. File Written Notes (TM-M)</span>
                                                <p className="text-xs text-gray-600 m-0 leading-relaxed">Within 24 to 48 hours, file a comprehensive Written Arguments dossier on Form TM-M stating the technical disconnection to ensure the matter is not marked abandoned.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: POST-HEARING ORDERS */}
                                    <section id="post-hearing" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faRotate} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Post-Hearing Orders, Status Tracking & High Court Appeals
                                        </h3>
                                        <p>
                                            Following the conclusion of oral arguments, the Hearing Officer updates the application status on the IP India database within 3 to 15 working days. The possible statutory outcomes include:
                                        </p>

                                        <div className="overflow-x-auto w-full my-6 not-prose rounded-xl border border-gray-200 shadow-sm">
                                            <table className="w-full min-w-[540px] text-left border-collapse bg-white">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 text-xs uppercase tracking-wider">
                                                        <th className="p-3 sm:p-4 border-b border-gray-200">Post-Hearing Status</th>
                                                        <th className="p-3 sm:p-4 border-b border-gray-200">Legal Meaning</th>
                                                        <th className="p-3 sm:p-4 border-b border-gray-200">Action Required</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs sm:text-sm divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-emerald-700 whitespace-nowrap">Accepted & Advertised</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">The Hearing Officer accepted your oral submissions without condition. The mark moves for 4-month Journal publication.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Monitor Trade Marks Journal for third-party opposition window.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-purple-700 whitespace-nowrap">Advertised Before Acc</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">The mark is advertised subject to specific conditions or user proof verification.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Ensure compliance with any specific disclaimer or class restrictions.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-blue-700 whitespace-nowrap">Submissions Awaited</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">The officer requested written notes of arguments or additional invoices before pronouncing order.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">File comprehensive Written Arguments on Form TM-M within <strong>15 days</strong>.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-rose-700 whitespace-nowrap">Refused (Section 18(4))</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">The application is formally rejected by the Hearing Officer on statutory grounds.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Apply for Grounds of Decision under Section 18(5) on Form TM-M and file Appeal before the High Court IPD within 3 months under Section 91.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: COMPARISON TABLE */}
                                    <section id="comparison-table" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faTable} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Comparison Matrix: Virtual Video Hearing vs Physical Appearance
                                        </h3>
                                        <p>
                                            Evaluating the procedural and strategic parameters of the current virtual hearing mechanism against historical physical courtroom hearings:
                                        </p>

                                        <div className="overflow-x-auto w-full my-6 not-prose rounded-xl border border-gray-200 shadow-sm">
                                            <table className="w-full min-w-[540px] text-left border-collapse bg-white">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 text-xs uppercase tracking-wider">
                                                        <th className="p-3 sm:p-4 border-b border-gray-200">Operational Parameter</th>
                                                        <th className="p-3 sm:p-4 border-b border-gray-200 text-[#6E5E93]">Video Hearing (Cisco Webex)</th>
                                                        <th className="p-3 sm:p-4 border-b border-gray-200 text-gray-700">Physical In-Person Hearing (Legacy)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs sm:text-sm divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900 whitespace-nowrap">Geographic Accessibility</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">100% remote across India and overseas. Zero travel required.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Mandatory travel to Delhi, Mumbai, Chennai, Kolkata, or Ahmedabad.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900 whitespace-nowrap">Document Demonstration</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Instant digital screen-sharing of PDFs, comparison charts, and GST invoices.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Carrying heavy physical paper bundles and physical invoice files.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900 whitespace-nowrap">Waiting Time & Efficiency</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Attend from desk while tracking real-time dynamic cause list queue.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Entire working day spent waiting in crowded registry corridors.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900 whitespace-nowrap">Adjournment Filing</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Electronic submission via Form TM-M on IP India portal.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Physical counter filing at registry cash counter before 1 PM.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900 whitespace-nowrap">Cost to Applicant</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Significantly lower; eliminates outstation advocate travel and hotel expenses.</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Substantially higher due to flight, transit, and outstation litigation fees.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 12: STATUTORY FEES */}
                                    <section id="statutory-fees" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faCalculator} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Official Statutory Fee Schedule & Forms
                                        </h3>
                                        <p>
                                            Statutory government fees related to trademark hearing proceedings under the First Schedule of the Trade Marks Rules, 2017:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 not-prose">
                                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-purple-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-2.5 py-1 bg-purple-100 text-[#6E5E93] text-[11px] font-bold rounded-full uppercase">Form TM-M</span>
                                                    <span className="text-[11px] text-gray-500 font-semibold">Rule 115</span>
                                                </div>
                                                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Hearing Adjournment Request</h4>
                                                <div className="text-xl sm:text-2xl font-extrabold text-[#6E5E93] mb-3">₹900 <span className="text-xs text-gray-500 font-normal">/ class (E-filing)</span></div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                                                    Official fee for seeking formal postponement of a scheduled virtual hearing date. Physical filing fee is ₹1,000 per application.
                                                </p>
                                            </div>

                                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-[11px] font-bold rounded-full uppercase">Form TM-M</span>
                                                    <span className="text-[11px] text-gray-500 font-semibold">Section 18(5)</span>
                                                </div>
                                                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Grounds of Refusal Decision</h4>
                                                <div className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">₹1,800 <span className="text-xs text-gray-500 font-normal">/ class (E-filing)</span></div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                                                    Required to obtain the official written speaking order from the Hearing Officer before filing a High Court IPD appeal. Physical filing fee is ₹2,000.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 13: FAQS */}
                                    <section id="faqs" className="scroll-mt-32">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Frequently Asked Questions
                                        </h3>
                                        <div className="space-y-3 sm:space-y-4 not-prose">
                                            {faqs.map((faq, index) => (
                                                <details key={index} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-200 open:shadow-md">
                                                    <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer select-none bg-white hover:bg-gray-50/50 transition-colors">
                                                        <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900 pr-3 sm:pr-4">{faq.question}</span>
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </summary>
                                                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/30">
                                                        {faq.answer}
                                                    </div>
                                                </details>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 14: STRATEGIC TAKEAWAYS */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-6 sm:pt-8 md:pt-12 border-t border-gray-100 mt-6 sm:mt-8 md:mt-12">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center break-words">
                                            <FontAwesomeIcon icon={faRocket} className="w-5 h-5 sm:w-6 sm:h-6 text-[#6E5E93] mr-2.5 sm:mr-3 flex-shrink-0" />
                                            Strategic Legal Counsel for Founders & Brand Custodians
                                        </h3>

                                        <p>
                                            A trademark hearing before the Trade Marks Registry is not a casual meeting; it is a formal statutory quasi-judicial proceeding that permanently determines whether your brand secures exclusive proprietary rights or suffers statutory abandonment.
                                        </p>

                                        <p>
                                            Winning a show-cause hearing requires combining sharp knowledge of Indian trademark jurisprudence with disciplined virtual presentation skills. From setting up the mandatory Webex display name to presenting side-by-side logo comparison charts and citing binding High Court precedents on acquired distinctiveness, thorough preparation separates successful brand registrations from costly refusals.
                                        </p>

                                        <p>
                                            If your trademark application has been posted for a show-cause hearing, avoid taking chances with inexperienced representation. Collaborate with seasoned intellectual property litigators who understand the nuances of the Delhi, Mumbai, Chennai, Kolkata, and Ahmedabad hearing boards.
                                        </p>

                                        <div className="bg-gradient-to-br from-purple-900 via-[#2A2A38] to-[#1A1A24] text-white p-5 sm:p-8 rounded-3xl shadow-xl not-prose mt-6 sm:mt-8 overflow-hidden">
                                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-white">Need Senior Counsel for Your Upcoming Trademark Video Hearing?</h4>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl">
                                                Our team of senior trademark litigators and registered attorneys represent applicants across all zonal Trade Marks Registry boards via Cisco Webex, handling dossier preparation, oral advocacy, and written arguments.
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 text-xs text-purple-200">
                                                <div className="bg-white/10 p-3 sm:p-4 rounded-xl border border-white/10 min-w-0">
                                                    <span className="font-bold text-white block mb-1">Dossier Preparation:</span>
                                                    Comprehensive evidence curation, Rule 25 user affidavits, GST invoice compilation, and case law briefing.
                                                </div>
                                                <div className="bg-white/10 p-3 sm:p-4 rounded-xl border border-white/10 min-w-0">
                                                    <span className="font-bold text-white block mb-1">Direct Representation:</span>
                                                    Experienced IP advocates appearing live before the Hearing Officer to overcome Section 9 and Section 11 objections.
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                                    <button className="w-full bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider">
                                                        Book Virtual Hearing Counsel &rarr;
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
                        <aside className="hidden lg:block space-y-8 sticky top-28 xl:top-32 self-start max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar scrollbar-hide pb-8">
                            {/* Consultation Box */}
                            <div className="bg-gradient-to-br from-purple-900 via-[#2A2A38] to-[#1A1A24] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-800/30">
                                <div className="inline-flex items-center bg-white/10 rounded-full px-3 py-1 mb-4 text-[11px] font-bold tracking-wider text-purple-200 uppercase">
                                    <FontAwesomeIcon icon={faShieldHalved} className="w-3 h-3 mr-1.5 text-pink-400" />
                                    Virtual Hearing Litigators
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-white">Protect Your Brand from Refusal</h4>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                                    Received a show-cause hearing notice? Our registered trademark advocates represent you before the Hearing Officer via Cisco Webex.
                                </p>
                                <div className="space-y-3">
                                    <Link href="/e-filing-trademark" className="block w-full">
                                        <button className="w-full bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-4 rounded-xl transition-all text-xs uppercase tracking-wider shadow-lg">
                                            Appoint Hearing Advocate &rarr;
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
                                <h4 className="text-xs font-black text-amber-900 mb-3 uppercase tracking-widest flex items-center">
                                    <FontAwesomeIcon icon={faLightbulb} className="w-3.5 h-3.5 text-amber-600 mr-2" />
                                    Hearing Quick Checklist
                                </h4>
                                <ul className="space-y-3 text-xs text-amber-950 font-medium">
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Conducted on Cisco Webex across all 5 zonal registries.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Check Dynamic Cause List on <code>ipindiaonline.gov.in</code>.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Mandatory name: <code>[Item No] - [App No] - [Name]</code>.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>Keep User Affidavit & GST Invoices ready in PDF.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>File Form TM-M 3–7 days prior if seeking adjournment.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-amber-600 font-bold mr-2">•</span>
                                        <span>File post-hearing written arguments within 15 days.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="text-xs font-black text-gray-500 mb-4 uppercase tracking-widest">Related Legal Guides</h4>
                                <ul className="space-y-4 text-xs font-semibold text-gray-800">
                                    <li>
                                        <Link href="/trademark-hearing-notice-what-to-do" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)] flex-shrink-0">
                                                <FontAwesomeIcon icon={faVideo} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Trademark Hearing Notice Steps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-does-objected-mean-in-trademark-status" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)] flex-shrink-0">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Trademark Objected Status Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)] flex-shrink-0">
                                                <FontAwesomeIcon icon={faFileLines} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Trademark User Affidavit Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)] flex-shrink-0">
                                                <FontAwesomeIcon icon={faFileContract} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Form TM-48 Power of Attorney</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-consent-letter-coexistence-agreement-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)] flex-shrink-0">
                                                <FontAwesomeIcon icon={faStamp} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>TM Coexistence Agreement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="flex items-center hover:text-[rgb(110,94,147)] transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 text-[rgb(110,94,147)] flex-shrink-0">
                                                <FontAwesomeIcon icon={faGavel} className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Section 47 Non-Use Removal</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </div>
    );
}
