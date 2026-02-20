import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faSearch,
    faFileContract,
    faGavel,
    faGlobe,
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faMoneyBillWave,
    faCertificate,
    faFileSignature,
    faPhone,
    faChevronRight,
    faCalendarAlt,
    faHandshake,
    faExclamationTriangle,
    faSync,
    faLightbulb,
    faUserTie,
    faBuilding,
    faFileAlt,
    faHandHoldingUsd,
    faScaleBalanced,
    faEye,
    faFilter,
    faListOl,
    faClock,
    faHourglassHalf,
    faBan,
    faIdCard,
    faCertificate as faCert,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Check Trademark Status Online | IP India Guide 2026',
    description: 'Master the art of tracking your trademark application. Understand every status code from Objected to Registered on the official IP India portal.',
    keywords: [
        'check trademark status online india',
        'ip india trademark status guide',
        'trademark application status meaning',
        'formalities chk pass meaning',
        'trademark objected reply process',
        'trademark accepted and advertised',
        'trademark status abandoned reasons',
        'how to use ip india portal',
        'trademark registration timeline india',
        'tracking trademark application number'
    ],
    openGraph: {
        title: 'Decoding Your Brand Protection: The Trademark Status Manual',
        description: 'Dont let your application get abandoned. Learn how to monitor your trademark status and take forensic action on objections and oppositions.',
        url: 'https://www.iprkaro.com/trademark-status',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-status',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Vigilant Brand: Why Real-Time Tracking Matters' },
    { id: 'portal-navigation', title: 'Portal Navigation: Accessing the IP India Status Section' },
    { id: 'formalities-check', title: 'Stage 1: Formalities Check Pass vs Fail' },
    { id: 'examination-stage', title: 'Stage 2: Marked for Exam & The Objections Phase' },
    { id: 'objected-status', title: 'Understanding \"Objected\": Overcoming Sections 9 & 11' },
    { id: 'advertisement-stage', title: 'Stage 3: Accepted & Advertised in the TM Journal' },
    { id: 'opposition-risk', title: 'Stage 4: The Opposition Window (4 Months of Risk)' },
    { id: 'registered-status', title: 'Final Stage: Registered & Certificate Issuance' },
    { id: 'abandoned-refused', title: 'Failure Analysis: Why Applications Get Abandoned or Refused' },
    { id: 'tracking-strategy', title: 'Strategic Monitoring: A Monthly Calendar for Founders' },
    { id: 'clerical-errors', title: 'Correcting the Record: TM-M for Status Rectification' },
    { id: 'why-iprkaro', title: 'IPR Karo: Forensic Trademark Landscaping & Monitoring' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Guarding Your Intellectual Identity' },
];

const faqs = [
    {
        question: "How can I check my trademark status online?",
        answer: "Visit the official IP India portal, click on 'Trade Mark Status', enter your application number and the captcha. The portal will display the current legal stage of your mark."
    },
    {
        question: "What does 'Formalities Chk Pass' mean?",
        answer: "It means the registry has verified your basic documents like the Power of Attorney and User Affidavit, and your application is now ready for substantive examination."
    },
    {
        question: "What should I do if my trademark status is 'Objected'?",
        answer: "You must file a written response to the Examination Report within 30 days. Failure to reply will lead to the application being marked as 'Abandoned'."
    },
    {
        question: "How long does it take for a status to change from 'New Application'?",
        answer: "Typically, the formalities check occurs within 2-4 weeks, and the examination report is issued within 3-6 months from the date of filing."
    },
    {
        question: "What does 'Accepted & Advertised' mean?",
        answer: "It means the examiner has approved your mark for registration, and it is now published in the Trademark Journal to allow the public to file oppositions for 4 months."
    },
    {
        question: "Why is my trademark status showing 'Abandoned'?",
        answer: "This usually happens when the applicant fails to respond to an office action (like an Examination Report or Hearing notice) within the statutory time limit."
    },
    {
        question: "Can I use the TM symbol when the status is 'Marked for Exam'?",
        answer: "Yes, you can use the TM symbol as soon as you receive your application number. However, the ® symbol can only be used once the status is 'Registered'."
    },
    {
        question: "What if someone opposes my trademark?",
        answer: "If your status changes to 'Opposed', you must file a counter-statement within 2 months, followed by evidence, to defend your right to the mark."
    },
    {
        question: "How do I check the Trademark Journal?",
        answer: "The journal is published every Monday on the IP India website. You can search it using your application number to see how your mark has been advertised."
    },
    {
        question: "Does 'Formalities Chk Fail' mean my trademark is rejected?",
        answer: "No. It just means there is a clerical error or missing document. You can usually fix this by filing a correction (TM-M) or providing the missing information."
    }
];

export default function TrademarkStatusPage() {
    const breadcrumbItems = [
        { label: "Check Trademark Status", href: "/trademark-status" },
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.iprkaro.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Check Trademark Status",
                "item": "https://www.iprkaro.com/trademark-status"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Check Trademark Status Online (IP India): The Comprehensive Status Code Guide",
        "description": "Unlock the secrets of the Trademark Registry. A complete walkthrough of checking status, overcoming objections, and securing your registration.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.iprkaro.com/logo.png"
            }
        },
        "datePublished": "2026-02-21",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-status"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Real-Time Trademark Monitoring Service",
        "image": "https://www.iprkaro.com/assets/trademark-status-og.jpg",
        "description": "Forensic monitoring of trademark applications to prevent abandonment and fight objections effectively.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1840"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            Brand Intelligence: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Status</span> Tracking Guide
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Don't leave your intellectual property to chance. Learn how to decode every status update on the IP India portal and take forensic action to secure your brand's future.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Monitor My Application
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: Table of Contents */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>

                        {/* Middle Column: Main Content */}
                        <div className="min-w-0">
                            {/* Mobile TOC */}
                            <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Vigilant Brand: Why Real-Time Tracking Matters</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Filing a trademark application is only the first step in a long legal marathon. In the high-stakes marketplace of India, where brand identities are born and challenged every minute, silence from the <strong>Trademark Registry</strong> is rarely good news. A trademark application is a living legal document, navigating through a series of checkpoints—from administrative screening to substantive examination and public scrutiny. For a founder, losing track of this journey is the most common cause of intellectual property loss.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The <strong>IP India portal</strong> is the digital heart of the Registry, providing a window into the mind of the Examiner. However, that window is often clouded by cryptic status codes like "Formalities Chk Pass" or the dreaded "Objected." Misinterpreting these statuses or missing a 30-day deadline for a reply can result in your application being marked as "Abandoned," effectively wasting your filing fees and, more importantly, leaving your brand name unprotected for competitors to seize.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we champion the philosophy of "Forensic Monitoring." We believe that trademark status is not just information; it is actionable intelligence. This 4000-word definitive guide is designed to empower you with the knowledge to navigate the Registry's workflow. We will decode every status code, explain the critical timelines, and provide the legal strategies needed to overcome objections and reach the final goal: the Registration Certificate.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "In the world of IP, sleep is the enemy of protection. A monitored trademark is a secure trademark."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the following sections, we will walk you through the portal navigation, explore the nuances of the examination stage, and provide a survival guide for the four-month opposition window. Let us start by mastering the entry point: the official IP India Status section.
                                    </p>
                                </section>

                                <section id="portal-navigation" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Portal Navigation: Accessing the IP India Status Section</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The official website for tracking is `ipindiaonline.gov.in`. Navigating it correctly ensures you get the full history of your mark.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="bg-white border-2 border-[#6E5E93] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faIdCard} className="mr-3 text-[#6E5E93]" /> What You Need
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Only your 7 or 8-digit <strong>Application Number</strong>. No login or password is required for basic status public tracking.
                                            </p>
                                        </div>
                                        <div className="bg-white border-2 border-[#160049] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faEye} className="mr-3 text-[#160049]" /> The "History" Tab
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Don't just look at the 'Current Status'. Click on the application number to see the full <strong>history of office actions</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="formalities-check" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stage 1: Formalities Check Pass vs Fail</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        This is the Registry’s "pre-flight" check. They aren't looking at your brand name yet; they are checking your paperwork.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0 text-lg">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Formalities Chk Pass</h4>
                                                <p className="text-gray-600">This means your Form TM-A, Power of Attorney, and Class classification are correct. The mark now moves to an examiner's desk.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#160049]">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faExclamationTriangle} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Formalities Chk Fail</h4>
                                                <p className="text-gray-600 italics">A red flag indicating clerical errors. Common causes include filing as a startup without a certificate or using the wrong category of applicant.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="objected-status" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Understanding "Objected": Overcoming Sections 9 & 11</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-red-700 font-bold">
                                        WARING: 70% of all Indian trademark applications face an objection. It is not a rejection; it is a request for clarification.
                                    </p>
                                    <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] shadow-2xl my-10">
                                        <h4 className="text-cyan-400 font-bold text-2xl mb-4">The Objection Survival Guide</h4>
                                        <p className="opacity-90 leading-relaxed text-lg mb-6">
                                            If your status is 'Objected', the examiner has issued an <strong>Examination Report</strong>. This report usually cites Section 9 (The mark is common/descriptive) or Section 11 (The mark is similar to another). You have exactly <strong>one month</strong> to file a legal reply (TM-MISC) justifying why your mark should be registered.
                                        </p>
                                        <Link href="/contact-us">
                                            <button className="text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-all font-bold">Draft Objection Reply</button>
                                        </Link>
                                    </div>
                                </section>

                                <section id="tracking-strategy" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-8 text-center">Status Comparison: Understanding the Legal Weights</h2>
                                    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white text-lg">
                                                <tr>
                                                    <th className="p-6 border">Status Code</th>
                                                    <th className="p-6 border">What it Means</th>
                                                    <th className="p-6 border">Action Required</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-lg text-gray-700">
                                                <tr className="bg-white">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Accepted & Advertised</td>
                                                    <td className="p-6 border">Mark published in the Journal.</td>
                                                    <td className="p-6 border">Wait for 4 months (No action).</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Opposed</td>
                                                    <td className="p-6 border">A third party challenged the mark.</td>
                                                    <td className="p-6 border">File Counter-Statement in 2 months.</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Abandoned</td>
                                                    <td className="p-6 border">Application cancelled due to silence.</td>
                                                    <td className="p-6 border">Re-file or request restoration.</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Registered</td>
                                                    <td className="p-6 border">Legal protection granted.</td>
                                                    <td className="p-6 border">Download Certificate (®).</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Why Founders Choose IPR Karo for Forensic TM Monitoring</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-center">
                                        We don't just check your status; we predict it. Our proprietary monitoring systems alert you to registry actions before the official notices even land in your inbox.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faClock} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Deadline Watch</h4>
                                            <p className="text-sm opacity-70">We track every 30-day and 60-day window with forensic precision, ensuring your mark never slips into 'Abandoned' status.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Hearing Strategy</h4>
                                            <p className="text-sm opacity-70">If your status shows 'Ready for Show Cause Hearing', our attorneys prepare the oral arguments to win over the Registrar.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faFilter} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Status Forensic</h4>
                                            <p className="text-sm opacity-70">We analyze why a competitor’s mark was 'Accepted' while yours was 'Objected' to craft better legal replies.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Guarding Your Intellectual Identity</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Checking your <strong>Trademark Status</strong> is not just a clerical task; it is the ultimate act of brand stewardship. In an era where a name is a company's most valuable asset, leaving that name vulnerable due to an ignored status update is a risk no founder should take. The IP India portal is your primary tool for defense, but it requires a human touch to interpret the legal nuances of every office action.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Whether your mark is sailing through a formalities check or navigating the choppy waters of a third-party opposition, knowledge is your best legal counsel. By understanding the status codes, respecting the statutory timelines, and performing monthly forensic checks, you ensure that your brand travels safely from a mere concept to a registered legal identity. Let IPR Karo be your diagnostic partner, monitoring every pulse of the Registry to keep your intellectual property alive and thriving. Guard your mark. Secure your legacy.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Application Stuck in Objections?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Don't let your trademark die on the Registry's desk. Join 10,000+ brands that use IPR Karo to overcome objections and monitor their status to success.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Unlock My Trademark
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Talk to an IP Attorney
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Status Audit</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Not sure what your status means? Let our forensic team **audit your application history** for free.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Audit My Status
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">IP Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-search-public" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Public TM Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-and-copyright-difference" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">TM vs Copyright</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/indian-patent-office-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Patent Search Portal</span>
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
