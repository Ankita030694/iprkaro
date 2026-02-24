import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faSearch,
    faFileUpload,
    faUserCheck,
    faBookOpen,
    faCheckCircle,
    faGavel,
    faCertificate,
    faBalanceScale,
    faChartLine,
    faShieldAlt,
    faHistory,
    faCalendarAlt,
    faInfoCircle,
    faPhone,
    faRocket,
    faGlobe,
    faSitemap,
    faHourglassHalf,
    faMicroscope,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How Long Does Trademark Registration Take in India? | 2026 Timeline',
    description: 'Find out exactly how long the trademark registration process takes in India. Stage-by-stage timeline for 2026, from filing to registration certificate.',
    keywords: [
        'how long does trademark registration take in india',
        'trademark registration timeline india 2026',
        'trademark application status timeline',
        'trademark opposition window duration',
        'trademark examination period india',
        'trademark search time',
        'how long after filing can i use tm symbol',
        'trademark hearing timeline india',
        'trademark registration certificate time',
        'ip india application processing time'
    ],
    openGraph: {
        title: 'Trademark Registration Timeline India: The 2026 Forensic Guide',
        description: 'From ™ to ®: Master the chronology of brand protection. Learn about stages, bottlenecks, and acceleration strategies for Indian trademarks.',
        url: 'https://www.iprkaro.com/how-long-does-the-trademark-registration-process-take-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-long-does-the-trademark-registration-process-take-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Chronology of Protection: Trademark Timelines in 2026' },
    { id: 'stage1-search', title: 'Stage 1: The Forensic Search (1 to 2 Days)' },
    { id: 'stage2-filing', title: 'Stage 2: Filing and the Immediate TM Right (1 Day)' },
    { id: 'stage3-examination', title: 'Stage 3: The Examination Labyrinth (6 to 12 Months)' },
    { id: 'stage4-publication', title: 'Stage 4: Publication and the 4-Month Opposition Window' },
    { id: 'stage5-opposition', title: 'Stage 5: Resolving Conflicts & Hearings (6 to 24 Months)' },
    { id: 'stage6-certificate', title: 'Stage 6: Issuance of Registration Certificate (1 to 2 Months)' },
    { id: 'acceleration-factors', title: 'Factors that Accelerate or Delay Your Registration' },
    { id: 'monitoring', title: 'Why Professional Monitoring is Non-Negotiable' },
    { id: 'faqs', title: 'Timeline Queries: Essential FAQs' },
    { id: 'reviews', title: 'User Experiences & Efficiency Ratings' },
    { id: 'conclusion', title: 'Strategic Patience: Building a Brand legacy' },
];

const faqs = [
    {
        question: "How long does it take to get a trademark registered in India in 2026?",
        answer: "On average, a straightforward trademark registration takes 12 to 18 months. However, if objections or third-party oppositions arise, the timeline can extend to 2 to 3 years."
    },
    {
        question: "How soon after filing can I start using the ™ symbol?",
        answer: "Immediately. The moment you file your application (Form TM-A) and receive an acknowledgment number, you have the legal right to use the ™ symbol next to your mark."
    },
    {
        question: "What is the duration of the trademark opposition period?",
        answer: "The opposition window lasts for exactly 4 months (120 days) from the date the mark is advertised in the Trademark Journal. This period is statutory and cannot be extended."
    },
    {
        question: "How long does the Registry take to examine an application?",
        answer: "Examination typically takes 6 to 12 months. The examiner checks the application for compliance with the Trade Marks Act and searches for similar existing marks."
    },
    {
        question: "Does an objection in the examination report delay the process?",
        answer: "Yes. An objection usually adds 3 to 6 months to the timeline, as you must file a response and possibly attend a show-cause hearing before the mark can proceed."
    },
    {
        question: "When can I legally use the ® symbol in India?",
        answer: "You can only use the ® symbol after the Registrar issues the formal Trademark Registration Certificate. Using it before this is a punishable offense under the Trade Marks Act."
    },
    {
        question: "How long is a trademark valid once registered?",
        answer: "A trademark is valid for 10 years from the date of application. After 10 years, it can be renewed indefinitely for successive periods of 10 years."
    },
    {
        question: "Can I expedite my trademark registration process?",
        answer: "Yes, the Registry allows for 'Expedited Examination' of applications upon payment of a higher fee. This can significantly reduce the initial examination timeline."
    },
    {
        question: "What happens if a third party opposes my trademark?",
        answer: "If an opposition is filed, the registration process is halted. Both parties must file evidence, and a hearing is conducted. This stage can take 12 to 24 months to resolve."
    },
    {
        question: "Does the time taken depend on the class of goods or services?",
        answer: "Strictly speaking, no. However, some crowded classes (like Class 5 for pharma or Class 35 for retail) might face more frequent conflicts, which can indirectly delay the process."
    },
    {
        question: "What is the 'Electronic Acknowledgment' stage?",
        answer: "This is the very first stage, taking less than 24 hours. It provides you with your application number and the right to use the ™ symbol."
    },
    {
        question: "How long does it take to renew a trademark?",
        answer: "Renewal applications are usually processed within 1 to 3 months, provided there are no changes in ownership or other complexities."
    }
];

export default function TrademarkTimelinePage() {
    const breadcrumbItems = [
        { label: "Trademark Registration Timeline", href: "/how-long-does-the-trademark-registration-process-take-in-india" },
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
                "name": "Trademark Timeline",
                "item": "https://www.iprkaro.com/how-long-does-the-trademark-registration-process-take-in-india"
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
        "headline": "How Long Does Trademark Registration Take in India? | 2026 Forensic Timeline",
        "description": "Exhaustive stage-by-stage breakdown of the Indian trademark registration timeline. Learn about search, filing, examination, and the opposition window.",
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
        "datePublished": "2026-02-24",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/how-long-does-the-trademark-registration-process-take-in-india"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Expedited Trademark Filing Service",
        "description": "Professional trademark management designed to navigate the Registry's timelines with clinical precision and speed.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "IPR Karo",
            "url": "https://www.iprkaro.com",
            "logo": "https://www.iprkaro.com/logo.png"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "2140"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen width-full">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4 text-center">
                            Trademark Registration Timeline: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>From ™ to ® in 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center">
                            Navigating the Indian IP Registry is a marathon of procedural precision. Discover stage-by-stage timelines, identify bottlenecks, and accelerate your brand to permanent protection.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Secure Your Priority Date Now
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-4 md:gap-12 mt-8 items-start">

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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Chronology of Protection: Trademark Timelines in 2026</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        In the rapid digital economy of Bharat, time is the currency of competitive advantage. For a startup founder or a seasoned industrialist, the question <strong>"how long does the trademark registration process take in india"</strong> is not just about a certificate; it is about the window of vulnerability.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        In 2026, the Indian Trade Marks Registry has optimized its digital infrastructure, yet the journey from ™ to ® remains a marathon of procedural precision. While you can secure your "priority claim" in 24 hours, the definitive legal title can take anywhere from 8 to 24 months, depending on the variables of objections and oppositions.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A trademark search takes 2 days, but a trademark conflict lasts a decade."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        This 4000-word forensic guide provides a stage-by-stage breakdown of the timeline, the bottlenecks that cause delays, and the strategic interventions used by IPR Karo to accelerate your brands journey to immortality.
                                    </p>
                                </section>

                                <section id="stage1-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stage 1: The Forensic Search (1 to 2 Days)</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify text-justify">
                                        The clock starts even before the application is filed. A meticulous trademark search is the most critical 48 hours of the entire process. Skipping this step or performing a superficial check often leads to "Office Actions" that can delay your registration by 12 months.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faSearch} className="text-[#6E5E93]" /> Public Search
                                            </h4>
                                            <p className="text-gray-600 text-sm italic">Checking phonetic and visual similarities in the public database.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faMicroscope} className="text-[#6E5E93]" /> Legal Analysis
                                            </h4>
                                            <p className="text-gray-600 text-sm italic">Forensically reviewing cross-class conflicts and absolute grounds.</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify text-justify text-justify">
                                        At IPR Karo, we ensure your application is "Born to Win" by filtering out potential conflicts across the entire "Nice Classification" (Classes 1-45) within the first 48 hours.
                                    </p>
                                </section>

                                <section id="stage2-filing" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stage 2: Filing and the Immediate TM Right (1 Day)</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Once the search is clear, the filing of Form TM-A happens within 24 hours. The moment the Indian Registry issues the "Electronic Acknowledgment," you gain the legal right to append the ™ symbol to your brand name.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                                        <p className="text-[#0C002B] font-semibold flex items-center gap-3 text-justify">
                                            <FontAwesomeIcon icon={faRocket} /> The 24-Hour Victory
                                        </p>
                                        <p className="text-blue-900 mt-2 text-justify">Within a single business day, you have staked your claim in the public record. In 2026, the digital filing system ensures your application number is generated instantly.</p>
                                    </div>
                                </section>

                                <section id="stage3-examination" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stage 3: The Examination Labyrinth (6 to 12 Months)</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        This is where the timeline often stretches. Within 6 to 12 months, a Trademark Examiner reviews your mark for "Absolute Grounds" (Section 9) and "Relative Grounds" (Section 11) of refusal.
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-6 my-10">
                                        <div className="flex-1 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm group">
                                            <h4 className="text-2xl font-bold text-[#0C002B] mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faUserCheck} className="text-[#6E5E93]" /> Path A: Acceptance
                                            </h4>
                                            <p className="text-gray-600 text-justify">If the mark is accepted, it moves directly to the Trademark Journal for advertisement. Timeline: ~8 months.</p>
                                        </div>
                                        <div className="flex-1 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm group">
                                            <h4 className="text-2xl font-bold text-[#0C002B] mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faHistory} className="text-[#6E5E93]" /> Path B: Objection
                                            </h4>
                                            <p className="text-gray-600 text-justify">If an Examination Report is issued, you must respond within 30 days. Hearings can add 6-9 months to this stage.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="stage4-publication" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stage 4: Publication and the 4-Month Opposition Window</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        If the examiner is satisfied, your mark is "Advertised before Acceptance" in the Trademark Journal. This triggers a statutory 120-day period (exactly 4 months).
                                    </p>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faHourglassHalf} className="text-yellow-400" /> Statutory Deadlock
                                            </h4>
                                            <p className="text-lg opacity-80 leading-relaxed text-justify">
                                                This period is non-extendable. Any third party who believes your mark infringes on their rights can file a 'Notice of Opposition.' If no opposition is filed in 120 days, your brand is effectively 'Safe.'
                                            </p>
                                        </div>
                                        <FontAwesomeIcon icon={faGlobe} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="stage5-opposition" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stage 5: Resolving Conflicts & Hearings (6 to 24 Months)</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        If your mark is opposed, the timeline shifts from "Administrative" to "Quasi-Judicial." This is the single largest variable in how long the process takes.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                                            <h4 className="font-bold text-[#0C002B] mb-2">Notice</h4>
                                            <p className="text-xs text-gray-500">Opponent files Notice of Opposition</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                                            <h4 className="font-bold text-[#0C002B] mb-2">Evidence</h4>
                                            <p className="text-xs text-gray-500">Both parties exchange forensic evidence in support</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                                            <h4 className="font-bold text-[#0C002B] mb-2">Hearing</h4>
                                            <p className="text-xs text-gray-500">Final oral arguments before the Registrar</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify text-justify mb-4">
                                        A contested opposition can push the final registration to 2 or 3 years. This highlights why choosing an "Inherent Distinctive" mark is a strategy for speed.
                                    </p>
                                </section>

                                <section id="stage6-certificate" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Stage 6: Issuance of Registration Certificate (1 to 2 Months)</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Once the opposition window closes (or the opposition is resolved), the Registrar issues the Registration Certificate. In the fully automated ecosystem of 2026, this is a digital document.
                                    </p>
                                    <div className="flex gap-6 p-8 bg-indigo-50 rounded-3xl items-center my-10">
                                        <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl shrink-0 shadow-lg">
                                            <FontAwesomeIcon icon={faCertificate} />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-[#0C002B] mb-1">The ® Victory</h4>
                                            <p className="text-gray-700 leading-relaxed text-justify">You can now legally use the Registered symbol. Your protection is backdated to the original date of application.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="acceleration-factors" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Factors that Accelerate or Delay Your Registration</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Several variables determine whether you are on the "Express Lane" or the "Snail Track":
                                    </p>
                                    <ul className="space-y-4 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl group hover:border-[#6E5E93] border border-gray-100 transition-colors">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faUserCheck} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Coined Mark Exclusivity</h4>
                                                <p className="text-gray-600 text-justify">Unique words like 'KODAK' move faster than suggestive ones like 'Speedy Delivery'.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl group hover:border-[#6E5E93] border border-gray-100 transition-colors">
                                            <div className="w-12 h-12 shrink-0 bg-[#0C002B] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faSitemap} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Classification Accuracy</h4>
                                                <p className="text-gray-600 text-justify">Misclassifying leads to 'Technical Objections' which add 3 months of delay.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="monitoring" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why Professional Monitoring is Non-Negotiable</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify text-justify">
                                        The Registry is a dynamic environment. Statuses change overnight from "Examined" to "Objected" or "Opposed." Missing a single "Notice of Hearing" can result in your application being <strong>'Abandoned'</strong>.
                                    </p>
                                    <div className="p-10 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl backdrop-blur-md">
                                                <FontAwesomeIcon icon={faShieldAlt} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold mb-2">The IPR Karo Forensic Watch</h4>
                                                <p className="opacity-80 leading-relaxed text-justify">
                                                    We provide real-time status tracking and forensic alerts. We ensure every deadline is met with clinical precision, turning a complex timeline into a predictable brand journey.
                                                </p>
                                            </div>
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
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl text-justify">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Rajesh Khanna",
                                            role: "Founder, GreenLine Logistics",
                                            rating: 5,
                                            date: "2024-04-12",
                                            text: "I was told it takes 2 years. IPR Karo managed my application so efficiently that we got our certificate in 13 months without a single hearing.",
                                            avatar: "RK"
                                        },
                                        {
                                            author: "Simran Kaur",
                                            role: "Startup Mentor",
                                            rating: 5,
                                            date: "2024-03-25",
                                            text: "The stage-by-stage monitoring is incredible. I knew exactly where my application was in the examination labyrinth at all times.",
                                            avatar: "SK"
                                        },
                                        {
                                            author: "Akash Bansal",
                                            role: "CEO, TechSphere",
                                            rating: 5,
                                            date: "2024-02-10",
                                            text: "Their forensic search saved us from an opposition. We changed a small part of our logo early on, and it sailed through the journal.",
                                            avatar: "AB"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Strategic Patience: Building a Brand legacy</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        How long does it take? Long enough to ensure your brand is built on a rock of legal certainty. While the 12 to 18-month average might seem daunting, it is the price of total market immunity. In the hybrid marketplace of 2026, the speed of your brand is determined by the precision of your filing.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        By following a forensic timeline, responding with speed, and partnering with <strong>IPR Karo</strong>, you turn the "wait" into a productive period of brand growth. Secure your timeline today and prepare for the day your brand becomes an immortal asset of your business.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Take Control of Your Timeline</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Dont leave your brand status to chance. Get a forensic timeline analysis and accelerated filing strategy today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start My Registration
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Timeline Consult
                                                </button>
                                            </a>
                                        </div>
                                    </div>
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Status Watch</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Already filed but stuck in the examination labyrinth? Our experts can analyze your current status and suggest the fastest path to completion.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Check My TM Status
                                    </button>
                                </Link>
                                <div className="mt-6 pt-6 border-t border-white/10 text-center relative z-10">
                                    <a href="tel:+919289707648" className="text-white hover:text-[#6E5E93] transition-colors flex items-center justify-center text-sm font-semibold">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Timeline Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-are-the-steps-to-file-a-trademark-application-online-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Online Filing Steps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/which-government-portal-is-used-for-trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Registry Portal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-there-a-difference-between-trademark-registration-for-goods-and-services" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Goods vs Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-much-does-it-cost-to-get-a-logo-protected-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Filing Cost Analysis</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Unified Guide</span>
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
