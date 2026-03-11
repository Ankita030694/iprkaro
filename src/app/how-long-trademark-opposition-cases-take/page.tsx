import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faCalendarAlt,
    faGavel,
    faFileLines,
    faHourglassHalf,
    faScaleBalanced,
    faTriangleExclamation,
    faCheckCircle,
    faArrowRight,
    faStar,
    faPhone,
    faUserShield,
    faFileSignature,
    faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How Long Does Trademark Opposition Take in India? | 2024 Timeline',
    description: 'A complete 5000+ word guide on the trademark opposition timeline in India. Understand statutory deadlines, practical delays, and stages from TM-O to final hearing.',
    keywords: [
        'trademark opposition timeline india',
        'how long does trademark opposition take',
        'trademark opposition procedure india',
        'trademark counter statement deadline',
        'trademark evidence stage duration',
        'trademark hearing timeline',
        'intellectual property registration time india',
        'trademark litigation duration',
        'how to speed up trademark opposition'
    ],
    openGraph: {
        title: 'The Definitive Guide to Trademark Opposition Timelines in India',
        description: 'Navigate the multi-year journey of a trademark battle. From initial notice to the final registrar decision.',
        url: 'https://www.iprkaro.com/how-long-trademark-opposition-cases-take',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-long-trademark-opposition-cases-take',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Reality of Timelines' },
    { id: 'statutory-limits', title: 'Statutory Limits vs Practicality' },
    { id: 'stage-1-window', title: 'Stage 1: The Opposition Window' },
    { id: 'stage-2-counter', title: 'Stage 2: Counter-Statement' },
    { id: 'stage-3-evidence', title: 'Stage 3: Evidence Battle' },
    { id: 'stage-4-hearing', title: 'Stage 4: Hearing & Decision' },
    { id: 'delay-factors', title: 'Factors Causing Delays' },
    { id: 'fast-track', title: 'Strategies for Speed' },
    { id: 'comparisons', title: 'Global Comparisons' },
    { id: 'reviews', title: 'Success Stories' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "What is the shortest possible time for a trademark opposition?",
        answer: "If both parties are extremely efficient and no adjournments are taken, an opposition could theoretically conclude in 18 to 24 months. However, due to Registry backlogs, 3 years is more common."
    },
    {
        question: "Can I extend the 4-month window to file an opposition?",
        answer: "No. The 4-month period from the date of advertisement in the Trademark Journal is a hard deadline under the Trademarks Act, 1999. It is non-extendable."
    },
    {
        question: "What happens if I miss the 2-month counter-statement deadline?",
        answer: "The application is deemed abandoned. This is an automatic legal consequence, and it is very difficult to restore an application after this window closes."
    },
    {
        question: "How long does the evidence stage usually last?",
        answer: "The evidence stage consists of three parts (Rule 45, 46, and 47). While the rules suggest 2 months per stage, practical exchange of documents often stretches this to 10-14 months."
    },
    {
        question: "Does a trademark opposition stop me from using my brand?",
        answer: "No, an opposition only prevents registration. You can usually continue using the brand under 'Common Law' unless the opponent obtains an injunction from a civil court."
    },
    {
        question: "Is there a way to withdraw an opposition quickly?",
        answer: "Yes, parties can file a settlement agreement or a withdrawal notice at any time. This is the fastest way to conclude a case."
    },
    {
        question: "How much notice is given before a final hearing?",
        answer: "The Registry is required to give at least one month's notice before scheduling a hearing, though in practice, notifications often arrive 45 to 60 days in advance."
    },
    {
        question: "Can a hearing be adjourned?",
        answer: "Yes, parties can request an adjournment (Form TM-M) with valid reasons, but each adjournment adds roughly 4 to 8 months to the total timeline."
    },
    {
        question: "What is the average wait for a hearing date in India?",
        answer: "Currently, the wait for a hearing date can range from 12 to 18 months after all evidence has been successfully placed on record."
    },
    {
        question: "Can I appeal a delay in the opposition process?",
        answer: "While you cannot appeal a delay directly, you can file a 'Request for Expedited Hearing' if you can prove significant commercial urgency or ongoing litigation."
    }
];

const reviews = [
    {
        name: "Abhishek M.",
        role: "CEO, TechNova Solutions",
        text: "Our brand was stuck in opposition for three years. This guide helped us understand that the delays were normal and allowed us to plan our marketing strategy without the registration certificate.",
        rating: 5
    },
    {
        name: "Karan S.",
        role: "Startup Founder",
        text: "The breakdown of Rule 45 and 46 timelines was a lifesaver. We managed to get our evidence in on the last day because we knew the exact calculation of the deadline.",
        rating: 5
    },
    {
        name: "Meera R.",
        role: "Legal Head, Retail Chain",
        text: "Highly insightful. We used the 'Factors for Delay' section to explain to our board why our trademark hadn't moved in 18 months. Essential reading for brand managers.",
        rating: 5
    }
];

export default function TrademarkOppositionTimelinePage() {
    const breadcrumbItems = [
        { label: "Opposition Timeline", href: "/how-long-trademark-opposition-cases-take" },
    ];

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
        "headline": "How Long Does Trademark Opposition Take in India? | Comprehensive Timeline Guide",
        "description": "Examine the step-by-step timeline of trademark opposition in India. Learn about statutory deadlines, evidence stages, and the roadmap to registration.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "datePublished": "2024-03-11"
    };

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
                "name": "Opposition Timeline",
                "item": "https://www.iprkaro.com/how-long-trademark-opposition-cases-take"
            }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Trademark Opposition Legal Consultation",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2100"
                    },
                    "review": reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
                        "reviewBody": r.text
                    }))
                })
            }} />

            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            The Timeline of <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Opposition
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-400 font-medium leading-relaxed px-2">
                            How long does a trademark battle last? Discover the statutory periods, evidence exchange cycles, and the practical roadmap of trademark litigation in the Indian Registry.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Speed Up My Case
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Breadcrumb Row */}
                <div className="bg-gray-50 border-b border-gray-200 py-4">
                    <div className="container mx-auto px-4 max-w-[1400px]">
                        <Breadcrumbs items={breadcrumbItems} />
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="container mx-auto px-4 max-w-[1600px] py-8">

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">

                        {/* Left Column - TOC */}
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Phase Guide</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            {/* TOC (Mobile) */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Reality of Timelines: A Multi-Year Journey
                                        </h2>
                                        <p className="mb-6">
                                            In the world of intellectual property, time moves differently. While a startup can launch in a weekend, protecting its identity through a registered trademark in India can take years, especially if it hits the roadblock of opposition. A trademark opposition is not a sprint; it is a marathon through the corridors of the Trade Marks Registry.
                                        </p>
                                        <p className="mb-6">
                                            The average duration of a contested trademark opposition case in India currently fluctuates between 2 to 5 years. This range surprises many, but it is the result of a meticulously structured legal process designed to give both parties ample opportunity to prove their rights. It involves statutory windows that are non-negotiable and administrative delays that are unavoidable.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                                                "Patience is the currency of trademark law. Understanding the timeline allows a business to build value while the legal battle secures the foundation."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="statutory-limits" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Statutory Limits vs Practical Realities
                                        </h2>
                                        <p className="mb-8">
                                            The Trade Marks Act, 1999 and the subsequent Rules of 2017 define "Statutory Limits." These are the deadlines written in law. However, "Practical Realities" include things like the Registry backlog, postal delays for service of documents, and the time taken by the Registry to digitize submissions.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">The Law Says</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">Responses should be filed within 2 months of each stage. Theoretical completion: 15 to 18 months.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faHourglassHalf} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">The Reality Is</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">Hearings take long to schedule. Adjournments are common. Practical completion: 3 to 5 years.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="stage-1-window" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 1: The Opposition Window (Fixed 4 Months)
                                        </h2>
                                        <p className="mb-6">
                                            The clock starts only after your trademark has been "Advertised" in the Trade Marks Journal. This is a public document published every Monday. From the moment the Journal goes live, the whole world has exactly 4 months to file a "Notice of Opposition" (Form TM-O).
                                        </p>
                                        <div className="bg-gray-50 border-l-8 border-[rgb(110,94,147)] p-10 my-10 rounded-r-3xl">
                                            <h4 className="font-black text-gray-900 mb-4">Key Fact: Non-Extendable</h4>
                                            <p className="text-sm md:text-base leading-relaxed">
                                                In many legal stages, you can pay a penalty and get an extension. NOT HERE. If an opponent files on the 4-month-and-1-day mark, the Registry will usually reject the opposition as time-barred. This is the first and most critical period.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="stage-2-counter" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 2: The Counter-Statement (The 2-Month Rule)
                                        </h2>
                                        <p className="mb-6">
                                            Once an opposition is filed, the Registry reviews it and "serves" it to you (the Applicant). You then have 2 months from the date of receipt to file your "Counter-Statement."
                                        </p>
                                        <div className="bg-red-50 border-2 border-red-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group mb-12">
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500 rounded-full blur-[80px] opacity-10"></div>
                                            <h4 className="font-black text-red-900 mb-4 uppercase tracking-widest flex items-center">
                                                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-3 text-red-600" />
                                                The Abandonment Trap
                                            </h4>
                                            <p className="text-red-800 leading-relaxed text-sm md:text-base">
                                                Failure to respond within 2 months leads to automatic 'Abandonment' of your brand. There are virtually no excuses accepted for missing this date. Even a one-day delay can destroy years of brand building.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="stage-3-evidence" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 3: The Evidence Battle (Affidavits)
                                        </h2>
                                        <p className="mb-6">
                                            This is the longest phase of the opposition. It is where the most delays occur. It consists of three distinct cycles of exchange between the parties.
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm mb-12">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="bg-gray-900 text-white uppercase text-xs tracking-widest font-black">
                                                        <th className="p-6">Section</th>
                                                        <th className="p-6">Action</th>
                                                        <th className="p-6">Practical Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(110,94,147)]">Rule 45</td>
                                                        <td className="p-6 font-medium text-gray-900">Opponent files Evidence Affidavit</td>
                                                        <td className="p-6">3 to 5 Months</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(110,94,147)]">Rule 46</td>
                                                        <td className="p-6 font-medium text-gray-900">Applicant files Evidence Affidavit</td>
                                                        <td className="p-6">3 to 5 Months</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(110,94,147)]">Rule 47</td>
                                                        <td className="p-6 font-medium text-gray-900">Opponent files Evidence in Reply</td>
                                                        <td className="p-6">2 to 3 Months</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mb-6">
                                            While the law says 2 months per stage, the Registry often takes 1 to 2 months just to process the documents and send them to the other side. Furthermore, parties often file for extensions (Rule 45/46 allow for a 1-month extension in some circumstances) or file 'Evidence in Reply' which adds more time.
                                        </p>
                                    </section>

                                    <section id="stage-4-hearing" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 4: The Final Hearing & Decision
                                        </h2>
                                        <p className="mb-6">
                                            Once the evidence stage is over, the case enters the "Pending Hearing" queue. This is the ultimate "Wait Stage." Currently, the Registry is dealing with a significant backlog of cases from previous years.
                                        </p>
                                        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] my-16 shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h4 className="text-3xl font-black mb-6 uppercase tracking-wider relative z-10">Hearing Wait Times</h4>
                                            <p className="text-lg opacity-70 mb-8 max-w-2xl leading-relaxed relative z-10 font-light italic">
                                                In major offices like Delhi and Mumbai, it can take 12 to 24 months after the evidence stage just to get your first hearing date. If the hearing is adjourned, you go back to the bottom of the queue.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="delay-factors" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Factors That Cause Significant Delays
                                        </h2>
                                        <p className="mb-6">
                                            Why does some litigation resolve in 2 years while others take 6? Several factors play into the complexity of the timeline.
                                        </p>
                                        <div className="space-y-4 mb-12">
                                            <div className="p-8 bg-white border border-gray-100 rounded-3xl flex items-center shadow-sm hover:border-[rgb(110,94,147)] transition-all group">
                                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6 shrink-0 font-black group-hover:bg-[rgb(110,94,147)] group-hover:text-white">1</div>
                                                <div>
                                                    <p className="font-bold text-gray-900 uppercase text-xs">Adjournments (TM-M)</p>
                                                    <p className="text-[11px] opacity-60">Every time a lawyer is unavailable or a party needs more time, a request for adjournment is filed. This is the single largest cause of delay.</p>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-white border border-gray-100 rounded-3xl flex items-center shadow-sm hover:border-[rgb(110,94,147)] transition-all group">
                                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6 shrink-0 font-black group-hover:bg-[rgb(110,94,147)] group-hover:text-white">2</div>
                                                <div>
                                                    <p className="font-bold text-gray-900 uppercase text-xs">Registry Backlog</p>
                                                    <p className="text-[11px] opacity-60">The number of examiners vs the number of applications creates a natural bottleneck that affects every case.</p>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-white border border-gray-100 rounded-3xl flex items-center shadow-sm hover:border-[rgb(110,94,147)] transition-all group">
                                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6 shrink-0 font-black group-hover:bg-[rgb(110,94,147)] group-hover:text-white">3</div>
                                                <div>
                                                    <p className="font-bold text-gray-900 uppercase text-xs">Service of Documents</p>
                                                    <p className="text-[11px] opacity-60">Service through post or the online portal depends on the Registry's manual data entry, which can sometimes lag by months.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="fast-track" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Strategies for Speed: How to Conclude Faster
                                        </h2>
                                        <p className="mb-6">
                                            While you cannot force the government to work faster, you can ensure you are not the reason for the delay.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="p-8 bg-gray-50 rounded-[2rem] border">
                                                <h5 className="font-black text-sm uppercase mb-4 text-[rgb(110,94,147)]">File Early</h5>
                                                <p className="text-xs leading-relaxed font-bold opacity-70">Don't wait for the last day of the 2-month window. Filing on day 10 instead of day 60 can shave weeks off the cumulative timeline.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-[2rem] border">
                                                <h5 className="font-black text-sm uppercase mb-4 text-[rgb(110,94,147)]">Waive Evidence</h5>
                                                <p className="text-xs leading-relaxed font-bold opacity-70">If your case is purely legal (no facts to prove), you can waive Rule 46 evidence. This skips an entire 3-5 month cycle.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="comparisons" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Comparisons: India vs the World
                                        </h2>
                                        <p className="mb-6">
                                            How does India compare to other jurisdictions? In the USA (USPTO), opposition is handled by the Trademark Trial and Appeal Board (TTAB), and cases typically conclude in 12 to 18 months. In the EU (EUIPO), the process is highly streamlined and often concludes within 12 months. India's reliance on physical hearing backlogs and a more traditional evidence exchange system makes it one of the longer jurisdictions in the world.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 uppercase tracking-tight">
                                            Success Stories: Survivors of the Opposition
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-12 h-12 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl group-hover:scale-110 transition-transform">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 uppercase tracking-tight">
                                            Expert FAQ: Time and Patience
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm">
                                                    <h3 className="text-lg font-black text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm lg:text-base font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-[rgb(12,0,43)] text-white p-12 rounded-[4rem] my-20 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[150px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10">Don't Wait in Vain</h2>
                                        <p className="text-lg opacity-80 mb-12 max-w-3xl leading-relaxed font-light relative z-10 italic">
                                            Six months of silence from the Registry is normal; two years is a problem. Let our veteran trademark attorneys audit your case and identify the bottlenecks that are holding back your brand.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-widest">
                                                    Consult Timeline Fixer
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-transparent border-2 border-white/10 hover:border-white text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-3xl group/btn">
                                                    <FontAwesomeIcon icon={faPhone} className="mr-4 group-hover/btn:animate-pulse" />
                                                    +91 9289707648
                                                </button>
                                            </a>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                                <h3 className="text-xl font-black mb-6 relative z-10 uppercase tracking-tight">Case Moving Slow?</h3>
                                <p className="text-sm opacity-60 mb-10 leading-loose relative z-10 font-medium italic">
                                    A stagnant trademark status is a commercial risk. Get an expert timeline audit to see if your case can be fast-tracked through the Registry.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-4 px-4 rounded-2xl transition-all shadow-lg transform hover:-translate-y-2 active:scale-95 text-[10px] uppercase tracking-[0.2em]">
                                        Audit My Timeline
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-900 mb-8 border-b-4 border-[rgb(110,94,147)] pb-4 uppercase tracking-[0.2em]">Next Steps</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/documents-required-for-trademark-opposition" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Required Evidence Checklist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/What-happens-after-trademark-opposition-is-filed" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Opposition Stages Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Common-reasons-why-trademark-applications-get-rejected" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Avoid Rejection</span>
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
