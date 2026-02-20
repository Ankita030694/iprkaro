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
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'IPIndia Trademark Status Check | Guide to Status Meanings 2026',
    description: 'Master the IPIndia trademark status check process. Understand the meanings of statuses like Objected, Abandoned, and Opposed. Complete guide by IPR Karo experts.',
    keywords: [
        'ipindia trademark status',
        'check trademark status online',
        'trademark status meanings',
        'formalites chk pass meaning',
        'send to vienna codification',
        'trademark objected meaning',
        'exam report issued trademark',
        'trademark opposed status',
        'how to track trademark india',
        'ip india portal guide'
    ],
    openGraph: {
        title: 'Comprehensive Guide: IPIndia Trademark Status Meanings',
        description: 'Track your application with ease. Learn what every IP India trademark status means and what actions you need to take next.',
        url: 'https://www.iprkaro.com/ipindia-trademark-status',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/ipindia-trademark-status',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Why Tracking Your Trademark Status is Non-Negotiable' },
    { id: 'how-to-check', title: 'Step-by-Step Guide: How to Check Status on IP India' },
    { id: 'common-statuses', title: 'The Dictionary of Statuses: Meanings & Implications' },
    { id: 'ai-examination', title: 'Modern Context: AI & Automation in Trademark Examination' },
    { id: 'historical-context', title: 'Evolution: A Brief History of Trademark Statuses in Bharat' },
    { id: 'vienna-codification', title: 'Vienna Codification: The Mystery of the Logo' },
    { id: 'formalities-check', title: 'Formalities Check: Pass vs. Fail' },
    { id: 'examination-phase', title: 'The Examination Phase: Marked for Exam & Objected' },
    { id: 'journal-publication', title: 'Publication: Accepted & Advertised vs. ABA' },
    { id: 'opposition-proceedings', title: 'Facing the Heat: What if Your Mark is Opposed?' },
    { id: 'the-golden-status', title: 'Registered: The Final Victory' },
    { id: 'negative-statuses', title: 'Abandoned, Refused, and Withdrawn' },
    { id: 'litigation-strategy', title: 'Litigation Strategy: When to Appeal a Refusal' },
    { id: 'post-registration-status', title: 'Removed and Renewed Statuses' },
    { id: 'next-steps', title: 'Strategic Next Steps Based on Your Status' },
    { id: 'why-iprkaro', title: 'Why IPR Karo is Your Status Monitoring Partner' },
    { id: 'faqs', title: 'Deep-Dive: Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Vigilance: The Key to Brand Protection' },
];

const faqs = [
    {
        question: "How do I check my trademark status on IPIndia?",
        answer: "Visit the official IP India Online Services portal, click on 'Trade Mark Status' in the sidebar, enter your application number and captcha, and view the results. You can click on the application number for a detailed history."
    },
    {
        question: "What does 'Formalities Chk Pass' mean?",
        answer: "This status means that the Registry has verified that all basic documents like the Power of Attorney and User Affidavit are correctly filed and in order. Your application will now move to the examination stage."
    },
    {
        question: "What should I do if my trademark status is 'Objected'?",
        answer: "You must file a legal response (Reply to Examination Report) within 30 days of the report being issued. This reply should address the legal concerns raised by the examiner using research and case laws."
    },
    {
        question: "What is the difference between 'Accepted & Advertised' and 'Advertised Before Acc'?",
        answer: "Accepted & Advertised means the examiner has fully accepted the mark. Advertised Before Acc (ABA) means the mark is published, but the Registrar might still have technical queries after the opposition period."
    },
    {
        question: "How long is the opposition period after a trademark is advertised?",
        answer: "The opposition period lasts for exactly 4 months from the date the trademark is published in the Trademark Journal. During this time, any third party can file a challenge against your mark."
    },
    {
        question: "What does 'Send to Vienna Codification' mean?",
        answer: "This is a routine administrative process for logos and device marks. The registry assigns international codes to the visual elements of your logo to help in searching for similar designs."
    },
    {
        question: "Can I use the ® symbol when my status is 'Accepted'?",
        answer: "No, you can only use the ® symbol once the status officially changes to 'Registered' and you have received the registration certificate."
    },
    {
        question: "Why has my trademark status changed to 'Abandoned'?",
        answer: "This usually happens when you fail to respond to an examination report or a hearing notice within the mandatory 30-day or 1-month deadline."
    },
    {
        question: "What is a 'Show Cause Hearing' in trademark status?",
        answer: "A hearing is scheduled if your written reply to an objection is not sufficient to satisfy the examiner. You or your attorney must present oral arguments to prove the mark's distinctiveness."
    },
    {
        question: "How often should I check my trademark status?",
        answer: "It is highly recommended to check your status at least once every month to ensure you don't miss any critical deadlines or notices from the Registry."
    },
    {
        question: "What does 'Rectification' status mean?",
        answer: "Rectification is a legal proceeding where a third party seeks to remove or cancel your registered trademark from the register, usually on grounds of non-use or that it was registered incorrectly."
    },
    {
        question: "Can I restart an 'Abandoned' application?",
        answer: "Generally, once an application is abandoned, it cannot be restarted. However, if the abandonment happened due to a Registry error, you can file a request for 'Restoration' along with proof that you complied with the deadlines."
    },
    {
        question: "What is the 'O-3 Notice' in the context of status?",
        answer: "The O-3 Notice is a mandatory alert sent by the Registrar before removing a trademark for non-renewal. If your status shows 'Removed' but you never received this notice, you have grounds for restoration."
    },
    {
        question: "What does 'Review' status mean after a Refusal?",
        answer: "If your mark is 'Refused', you can file a 'Review Petition' (Form TM-M) within 30 days. The status will then show as 'Review' while the same examiner reconsidered their decision based on new arguments."
    },
    {
        question: "How long does a 'Show Cause Hearing' take to be scheduled?",
        answer: "After you file a reply to an objection, if the examiner is not satisfied, a hearing is usually scheduled within 6 to 12 months, depending on the backlog at the specific TMR branch (Mumbai, Delhi, Chennai, etc.)."
    },
    {
        question: "What is the difference between 'Registered' and 'Renewed' status?",
        answer: "'Registered' is the initial grant of protection for 10 years. 'Renewed' indicates that the 10-year period has ended and the owner has successfully paid the fees to extend protection for another decade."
    }
];

export default function TrademarkStatusPage() {
    const breadcrumbItems = [
        { label: "IPIndia Trademark Status", href: "/ipindia-trademark-status" },
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
                "name": "Trademark Status",
                "item": "https://www.iprkaro.com/ipindia-trademark-status"
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
        "headline": "IPIndia Trademark Status Meanings: The Definitive 2026 Dictionary",
        "description": "Comprehensive guide to understanding every trademark status on the IP India portal. Learn what steps to take for Objected, Opposed, and Abandoned statuses.",
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
        "datePublished": "2026-02-20",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/ipindia-trademark-status"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Status Monitoring Service",
        "image": "https://www.iprkaro.com/assets/trademark-status-og.jpg",
        "description": "Professional monitoring and response services for IP India trademark applications.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
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
                            The Definitive Navigator: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>IPIndia Trademark Status</span> Meanings
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Decoding the language of the Intellectual Property Registry. From Vienna Codification to Final Registration, learn what every status means for your brand and what urgent actions you need to take today.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Track Your Application Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: Why Tracking Your Trademark Status is Non Negotiable</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the intricate journey of brand protection, filing your application is only the first mile of a long marathon. The real battle for exclusivity is fought within the corridors of the Intellectual Property India portal. For any business owner, understanding the current <strong>ipindia trademark status</strong> of their application is not just a matter of curiosity; it is an operational necessity. The trademark ecosystem in India is governed by strict, non negotiable deadlines. A status change from "Marked for Exam" to "Objected" can happen overnight, and from that moment, the clock starts ticking. If you are not vigilant, you may lose your rights simply because you failed to notice a single word change on a digital screen.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The Trade Marks Act of 1999 empowers the Registrar to move applications through a series of checkpoints. Each status represents a specific stage in the legal lifecycle of your intellectual property. Some statuses, like "Formalities Chk Pass," are cause for celebration, signaling that your administrative paperwork is sound. Others, like "Opposed" or "Refused," indicate severe legal hurdles that could jeopardize your brand's future. At IPR Karo, we have witnessed hundreds of promising startups lose their brand names because they treated the "Objected" status as a minor suggestion rather than a legal summons. This guide is designed to be your definitive dictionary, decoding the cryptic jargon of the Registry and providing you with a roadmap for action.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Consider the sheer volume of data handled by the Controller General of Patents, Designs and Trade Marks. With millions of applications in the pipeline, the system relies on these statuses to communicate with the public. Transparency is the hallmark of the modern IP regime in Bharat, but transparency without understanding leads to confusion. Whether you are navigating the "Vienna Codification" for your innovative logo or preparing for a "Show Cause Hearing," you need a deep, forensic understanding of what the Registry is asking of you. In this extensive 4000-word manual, we will strip away the legal complexity and provide you with actionable insights that will help you move your mark from "New Application" to the coveted "Registered" status.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A trademark application is like a growing plant. It needs constant monitoring and timely intervention. Checking your status today is the only way to ensure your brand flowers tomorrow."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The digital transformation of the Indian IP office has made tracking status easier than ever before. Gone are the days of manual letters and physical visits to the TMR offices in Mumbai, Delhi, or Chennai. Today, your brand's destiny is visible in real-time on your smartphone. However, this accessibility brings a higher level of expectation from the Registry. Ignorance of a status change is no longer a valid legal excuse for missing a deadline. As we dive into the specific meanings of each status, we will also discuss the strategic responses required at each turn. Your journey to the ® symbol starts here, with the mastery of the IP India status ecosystem.
                                    </p>
                                </section>

                                <section id="how-to-check" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Step by Step Guide: How to Check Status on IP India</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Checking your <strong>ipindia trademark status</strong> is a straightforward process, but it requires access to the correct portal to avoid phishing sites or outdated information. Follow this official workflow to get real-time data:
                                    </p>
                                    <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                                        <ol className="space-y-4 list-decimal pl-6 text-gray-700 leading-relaxed text-lg">
                                            <li><strong>Access the Portal</strong>: Visit the official IP India Online Services gateway. In Google, search specifically for "IP India Trade Mark Status" to ensure you land on the gov.in domain.</li>
                                            <li><strong>Select Inquiry Type</strong>: On the landing page, look for the left-hand navigation bar. Click on the "Trade Mark Status" link. Note that this often opens in a new tab or pop-up.</li>
                                            <li><strong>Input Application Number</strong>: You will be prompted to select "National/IRDI Number." Enter your unique 7-digit or 8-digit trademark application number.</li>
                                            <li><strong>Captcha Verification</strong>: Enter the alphanumeric captcha code as displayed. It is case-sensitive, so pay close attention to the characters.</li>
                                            <li><strong>The Summary View</strong>: Click on "View." A row will appear showing your number, filing date, applicant name, and the "Current Status."</li>
                                            <li><strong>The Detailed Report</strong>: Click on the hyperlinked application number to open the "Trade Mark Details" page. This page contains the critical "Alert" section which summarizes pending actions.</li>
                                        </ol>
                                    </div>
                                </section>

                                <section id="common-statuses" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Dictionary of Statuses: Meanings & Legal Implications</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Once you reach the details page, you will encounter various terms that define the Registry's current stance on your mark. Understanding these is vital for your IP strategy. Let's break down the most common statuses:
                                    </p>
                                    <div className="space-y-8 my-10">
                                        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                                            <h4 className="font-bold text-blue-900 text-2xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faInfoCircle} className="mr-3" />
                                                New Application
                                            </h4>
                                            <p className="text-blue-800 text-lg">This is the entry-level status. It means your application has successfully hit the Registry's servers and been assigned a unique number. Your legal priority date starts from this moment. You can now use the ™ symbol next to your brand name, signaling to the world that you have claimed ownership, even if the final certificate is months away.</p>
                                        </div>
                                    </div>
                                </section>
                                <section id="ai-examination" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Modern Context: AI & Automation in Trademark Examination</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In 2026, the IP India portal has significantly upgraded its backend infrastructure with Artificial Intelligence and Machine Learning algorithms. This technological leap has direct implications for your <strong>ipindia trademark status</strong>. Previously, "Vienna Codification" was a purely manual process. Today, computer vision algorithms perform a preliminary sweep, assigning codes almost instantly. This automation has accelerated the time it takes for a mark to move from "New Application" to "Marked for Exam," shortening the lifecycle by several weeks.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        However, AI-driven examination also means that "Relative Grounds" (Section 11) objections are more precise and frequent. The system can now detect phonetically similar marks across different scripts (e.g., Hindi, English, and Tamil) with uncanny accuracy. This makes a pre-filing comprehensive search even more vital. If you see your status jump to "Objected" within days of filing, it is likely that the automated system has flagged a direct conflict. At IPR Karo, we use similar AI tools to audit our clients' marks before filing, ensuring that we stay one step ahead of the Registry's automated gatekeepers.
                                    </p>
                                </section>

                                <section id="historical-context" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Evolution: A Brief History of Trademark Statuses in Bharat</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        To truly appreciate the transparency of the current system, one must look at where it began. Before the 1999 Act, the trademark regime in Bharat was a black box. Statuses like "Vienna Codification" or "ABA" were purely internal notations that the public rarely saw. Business owners had to rely on physical letters (sent via post) to know the progress of their applications. A lost letter often meant an "Abandoned" status that the owner wouldn't discover for years.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The digitalization drive of 2013 changed everything. The Registry moved to an e-filing-first model, and the public status tracker became a legally recognized communication channel. The introduction of the "Alert" section on the portal was a revolutionary step, providing a snapshot of pending actions (like filing a TM-48 or a Reply). Understanding this history helps us realize that the <strong>ipindia trademark status</strong> screen is not just a technical tool—it is the result of decades of reform aimed at protecting the Indian entrepreneur's right to their identity.
                                    </p>
                                </section>

                                <section id="vienna-codification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Vienna Codification: The Mystery of the Logo</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        A status unique to logo and device marks. It indicates that the Registry is categorizing the visual elements of your logo according to the international Vienna Agreement. This categorizing system uses an "Index of Figurative Elements" to classify every possible shape, animal, or symbol used in branding.
                                    </p>
                                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-10">
                                        <p className="text-[#0C002B] leading-relaxed text-lg">
                                            For example, if your logo features a mountain with a sun behind it, the Vienna code would be <strong>06.01.02</strong> (Mountains) and <strong>01.03.01</strong> (Sun). This categorization allows examiners to search specifically for other logos with mountains, ensuring that you don't unintentionally copy a competitor's visual identity. While "Vienna Codification" is an administrative status and doesn't require any action from you, a long delay in this stage can indicate that your logo is visually complex and the Registry is taking extra time to index its various elements.
                                        </p>
                                    </div>
                                </section>

                                <section id="formalities-check" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Formalities Check: Pass vs. Fail</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Before the Registry even looks at the "distinctiveness" of your brand name, they perform a bureaucratic audit. This is known as the Formalities Check.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-green-50 rounded-3xl border border-green-200">
                                            <h4 className="font-bold text-green-900 text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faCheck} className="mr-3" /> Formalities Chk Pass
                                            </h4>
                                            <p className="text-green-800">Everything is in order. Your Power of Attorney is signed, your User Affidavit is notarized, and your Government Fees were paid correctly. Your application is now robust enough to be handed over to a legal examiner.</p>
                                        </div>
                                        <div className="p-8 bg-red-50 rounded-3xl border border-red-200">
                                            <h4 className="font-bold text-red-900 text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3" /> Formalities Chk Fail
                                            </h4>
                                            <p className="text-red-800">A technical error has occurred. Perhaps the applicant's name on the Aadhaar card doesn't match the application, or the logo file is corrupt. You will receive a notice and must rectify the error immediately to prevent the application from being abandoned.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="examination-phase" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Examination Phase: Marked for Exam & Objected</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        This is the most critical juncture of the trademark lifecycle. A legal officer is now scrutinizing your mark against the Trade Marks Act 1999.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faGavel} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Marked for Exam</h4>
                                                <p className="text-gray-600">The application has been assigned to a specific examiner. They are checking Section 9 (Absolute Grounds: Is the name too descriptive?) and Section 11 (Relative Grounds: Is it too similar to someone else's?). This status can stay active for several weeks.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-yellow-50 rounded-2xl border border-yellow-200 shadow-sm border-l-[10px] border-l-yellow-500">
                                            <div className="w-12 h-12 shrink-0 bg-yellow-500 rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faScaleBalanced} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-yellow-900 text-xl mb-1">Objected</h4>
                                                <p className="text-yellow-800">The examiner has raised one or more legal concerns. An "Examination Report Issued" status will follow. You now have a strict 30-day window from the issuance of the report to file a robust legal reply. Fails to respond will lead to automatic abandonment.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, the "Objected" status is where we excel. We draft forensic, research-backed replies that address every technical concern of the examiner. We cite historic case laws and provide "Usage Evidence" to prove that your mark has acquired secondary meaning in the minds of the public. If the written reply is not sufficient, the status might change to "Ready for Hearing," where we represent your interests personally before the Trademark Registrar.
                                    </p>
                                </section>

                                <section id="journal-publication" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Publication: Accepted & Advertised vs. Advertised Before Acc</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Passing the examination is a major hurdle. It means the Registry has no objections to your mark. But now, you must face the court of public opinion.
                                    </p>
                                    <div className="bg-[#6E5E93]/10 p-8 rounded-3xl border border-[#6E5E93]/20 my-10">
                                        <h4 className="text-[#0C002B] font-bold text-2xl mb-4">Accepted & Advertised</h4>
                                        <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                            The examiner is fully satisfied. Your mark is published in the "Trademark Journal," a weekly digital gazette. This publication triggers a 4 month window during which any member of the public can oppose your registration if they believe it violates their own IP rights.
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-6">
                                            <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium">4-Month Opposition Window</span>
                                            <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium">Public Scrutiny</span>
                                            <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium">Final Hurdle</span>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Sometimes, you will see <strong>Advertised before Acc</strong> (ABA). This essentially means the Registrar is allowing the mark to be published, but there is a pending administrative or technical query that must be cleared after the 4-month window ends. While similar, "Accepted & Advertised" is the stronger, preferred status for a smooth journey to registration.
                                    </p>
                                </section>

                                <section id="opposition-proceedings" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Facing the Heat: What if Your Mark is Opposed?</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        If a status changes to <strong>Opposed</strong>, it means a third party has filed a "Notice of Opposition" (Form TM-O). This usually occurs when a larger competitor feels your brand name is too close to theirs.
                                    </p>
                                    <div className="p-8 bg-red-50 rounded-3xl border border-red-100 italic my-10">
                                        <p className="text-red-900 leading-relaxed text-lg font-bold">
                                            URGENT: Once a mark is Opposed, you have exactly 2 months to file a "Counter Statement." There are no extensions allowed for this deadline. If you fail to file, the Registry will deem your application as abandoned immediately.
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        An opposition initiates a mini trial within the Registry. Both parties will have to submit evidence, cross-examine claims, and finally attend a hearing before the Registrar. This process can add 1 to 3 years to your registration timeline. IPR Karo's litigation team has a storied history of defending small businesses against aggressive corporate giants in opposition cases, ensuring that your right to innovate is protected at all costs.
                                    </p>
                                </section>

                                <section id="the-golden-status" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Registered: The Final Victory</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        This is the "Golden Status" every entrepreneur dreams of. <strong>Registered</strong> means your journey through the Registry's hurdles is complete. The status details will now show a certificate number and a date of issuance.
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-8 my-10">
                                        <div className="flex-1 p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-200 text-center shadow-lg">
                                            <h4 className="font-bold text-green-700 text-4xl mb-2">®</h4>
                                            <p className="font-bold text-green-900 text-xl mb-4">Official Protection</p>
                                            <p className="text-sm text-gray-600">You can now legally use the Registered symbol. You have the right to sue for infringement and gain a powerful asset for your business valuation.</p>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Once registered, your mark is valid for 10 years from the date of application. It is vital to download the digital certificate immediately, as physical copies are no longer mailed by the Registry. This certificate is your primary defense on e-commerce platforms like Amazon and social media networks like Facebook and Instagram for brand verification.
                                    </p>
                                </section>

                                <section id="negative-statuses" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Negative Statuses: Abandoned, Refused, and Withdrawn</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Not every status change is positive. Understanding the reasons behind negative statuses can help you salvage your IP or plan your next move.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="p-6 bg-gray-100 rounded-2xl border border-gray-200">
                                            <h5 className="font-bold text-gray-900 mb-2">Abandoned</h5>
                                            <p className="text-sm text-gray-700">The result of inaction. You missed a deadline for an objection reply or a hearing. The application is now dead. You must file a new application to regain protection.</p>
                                        </div>
                                        <div className="p-6 bg-gray-100 rounded-2xl border border-gray-200">
                                            <h5 className="font-bold text-gray-900 mb-2">Refused</h5>
                                            <p className="text-sm text-gray-700">The examiner was not satisfied with your reply or arguments. The Registry has officially rejected the mark. You can file a review or appeal this in the High Court.</p>
                                        </div>
                                        <div className="p-6 bg-gray-100 rounded-2xl border border-gray-200">
                                            <h5 className="font-bold text-gray-900 mb-2">Withdrawn</h5>
                                            <p className="text-sm text-gray-700">You voluntarily stopped the application. This often happens after a global settlement where two brands agree to use different names.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="litigation-strategy" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Litigation Strategy: When to Appeal a Refusal</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        A "Refused" status on the <strong>ipindia trademark status</strong> portal is often seen as a dead end, but in reality, it is just a fork in the road. You have two primary legal remedies: a "Review Petition" (filed before the same examiner) or an "Appeal" (filed before the High Court, following the abolition of the IPAB). A Review is best suited for scenarios where there is a clear "error apparent on the face of the record"—for instance, if the examiner ignored a vital piece of usage evidence you provided.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        An Appeal is a more robust strategy. Since the jurisdiction has moved to the High Courts in 2021, the quality of jurisprudence has increased. Judges are often more receptive to nuanced arguments about "Acquired Distinctiveness" than busy Registry examiners. At IPR Karo, we provide a forensic analysis of every refusal to determine if the Registry's decision stands the test of law. If the refusal is arbitrary or inconsistent with previous precedents, we don't hesitate to recommend an appeal. Protecting your brand status often requires this extra step of legal persistence.
                                    </p>
                                </section>

                                <section id="post-registration-status" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Post Registration: Removed and Renewed Statuses</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Even after registration, you must stay vigilant. The <strong>ipindia trademark status</strong> will continue to evolve over the decades.
                                    </p>
                                    <ul className="space-y-4 my-8">
                                        <li className="flex items-center gap-3 text-lg"><FontAwesomeIcon icon={faSync} className="text-[#6E5E93]" /> **Renewed**: You have successfully paid the 10-year renewal fee. Your protection is extended for another decade.</li>
                                        <li className="flex items-center gap-3 text-lg"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500" /> **Removed**: The unfortunate status that appears if you fail to renew. Your mark is struck off the register.</li>
                                        <li className="flex items-center gap-3 text-lg"><FontAwesomeIcon icon={faHandshake} className="text-blue-500" /> **Assigned**: The ownership of the mark has been legally transferred to another entity (e.g., in a business sale).</li>
                                    </ul>
                                </section>

                                <section id="next-steps" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Strategic Next Steps Based on Your Current Status</h2>
                                    <p className="mb-10 leading-relaxed text-lg">
                                        Knowing your status is only half the battle. Acting on it is what determines your success. Here is our expert strategy matrix:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 text-white">
                                        <div className="bg-[#0C002B] p-8 rounded-[2rem] border border-gray-700">
                                            <h4 className="text-xl font-bold mb-4">If status is "Objected"</h4>
                                            <p className="opacity-80 text-sm mb-6">Download the Examination Report immediately. Identify if it is Section 9 (distinctiveness) or Section 11 (similarity). Gather every invoice, advertisement, and news mention of your brand to prove its value. File your reply within 20 days to ensure it hits the examiner's desk early.</p>
                                            <Link href="/contact-us" className="text-[#6E5E93] font-bold hover:underline">Draft My Reply →</Link>
                                        </div>
                                        <div className="bg-[#160049] p-8 rounded-[2rem] border border-gray-700">
                                            <h4 className="text-xl font-bold mb-4">If status is "Opposed"</h4>
                                            <p className="opacity-80 text-sm mb-6">Consult a senior IP attorney immediately. This is now a legal contest. You need to prepare a detailed Counter Statement that highlights why your brand is different and why the opposition is frivolous or filed in bad faith. Do not attempt to handle an opposition without professional help.</p>
                                            <Link href="/contact-us" className="text-[#6E5E93] font-bold hover:underline">Consult an Attorney →</Link>
                                        </div>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why IPR Karo is Your Status Monitoring Partner</h2>
                                    <p className="mb-10 leading-relaxed text-lg">
                                        We understand that you have a business to run. Checking a government portal every Monday shouldn't be on your to-do list. We have automated this entire process for you.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                                                <FontAwesomeIcon icon={faSync} />
                                            </div>
                                            <h4 className="font-bold text-xl mb-4">24/7 Automation</h4>
                                            <p className="text-sm text-gray-600">Our bots monitor the IP India database every hour. If your status changes at 2 AM, you get an alert at 9 AM.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                                                <FontAwesomeIcon icon={faShieldAlt} />
                                            </div>
                                            <h4 className="font-bold text-xl mb-4">Proactive Defense</h4>
                                            <p className="text-sm text-gray-600">We don't wait for your status to turn "Opposed." We monitor the Trademark Journal to see if others are filing marks similar to yours.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                                                <FontAwesomeIcon icon={faUserTie} />
                                            </div>
                                            <h4 className="font-bold text-xl mb-4">Expert Interpreters</h4>
                                            <p className="text-sm text-gray-600">We don't just tell you the status; we tell you what it means for your business. Clear, concise advice in plain English and Hindi.</p>
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
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Kunal Bansal",
                                            role: "CEO, SportzGo India",
                                            rating: 5,
                                            date: "2024-02-01",
                                            text: "The IP India portal's terminology was confusing, but IPR Karo simplified everything. Their automated status tracking saved us from missing a critical 'Objected' status notification.",
                                            avatar: "KB"
                                        },
                                        {
                                            author: "Meera Iyer",
                                            role: "Founder, Soulful Organic",
                                            rating: 5,
                                            date: "2024-01-22",
                                            text: "I was checking my trademark status daily until I found IPR Karo. Their WhatsApp alerts are amazing—they notify you the moment the registry updates your file.",
                                            avatar: "MI"
                                        },
                                        {
                                            author: "Rohan Malhotra",
                                            role: "Director, Delta Logistics",
                                            rating: 5,
                                            date: "2023-11-30",
                                            text: "Excellent status monitoring service. They caught a third-party opposition against our mark before we even received the official notice. Proactive and reliable!",
                                            avatar: "RM"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Vigilance is the Key to Brand Protection</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        In the landscape of intellectual property in Bharat, your <strong>ipindia trademark status</strong> is the compass that guides your brand's journey. It is a dynamic, living indicator of your legal standing. Whether you are currently basking in the peace of "Formalities Chk Pass" or feeling the pressure of an "Objected" status, remember that every hurdle is manageable with the right expertise. The road to registration is rarely a straight line; it is a series of corrections, clarifications, and legal demonstrations.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        At IPR Karo, we are committed to being your eyes and ears at the Registry. We treat every status change with the urgency and precision it deserves. Don't let your application become a statistic in the "Abandoned" category. Take charge of your brand identity today by partnering with experts who live and breathe trademark law. Your brand is your legacy; protect it with the vigilance it deserves.
                                    </p>
                                </section>

                            </div>

                            {/* Final CTA Strip */}
                            <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Unsure About Your Trademark Status?</h2>
                                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                        Get a Free legal analysis of your current application status. Our experts will tell you exactly what to do next to secure your registration.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Link href="/contact-us">
                                            <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                Get Free Status Audit
                                            </button>
                                        </Link>
                                        <a href="tel:+919289707648">
                                            <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                Consult an Expert
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Urgent Response?</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Is your status **Objected** or **Opposed**? Don't miss the 30-day legal deadline.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Reply Now
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Explore More</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Live Status Portal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Registration Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Public Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/e-filing-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">E-Filing Process</span>
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
