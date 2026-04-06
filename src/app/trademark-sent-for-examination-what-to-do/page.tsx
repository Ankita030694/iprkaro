import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faExclamationTriangle,
    faGavel,
    faFileContract,
    faHourglassHalf,
    faShieldAlt,
    faSearch,
    faBalanceScale,
    faCheckCircle,
    faInfoCircle,
    faPhone,
    faStar,
    faArrowRight,
    faFileSignature,
    faUserTie,
    faLightbulb,
    faClock
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Sent for Examination: What to Do Next? | Expert Guide',
    description: 'Your trademark status shows "Sent for Examination"? Learn exactly what this means, the Registry timeline, and how to prepare for the next steps. 5000+ words of IP expertise.',
    keywords: [
        'trademark sent for examination what to do',
        'trademark examination process india',
        'trademark status marked for exam',
        'trademark examination report response',
        'ip india application status examination',
        'how to track trademark examination',
        'trademark objection vs examination',
        'trademark examiner review factors',
        'section 9 and 11 trademark examination',
        'trademark journal publication after examination'
    ],
    openGraph: {
        title: 'Trademark Status: Sent for Examination - Complete Roadmap',
        description: 'Understand the legal review process of your brand. Our experts break down the trademark examination phase and what you must do to ensure successful registration.',
        url: 'https://www.iprkaro.com/trademark-sent-for-examination-what-to-do',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-sent-for-examination-what-to-do',
    },
};

const tocSections = [
    { id: 'introduction', title: 'What is "Sent for Examination"?' },
    { id: 'registry-workflow', title: 'The Registry Backend Workflow' },
    { id: 'timeline', title: 'Examination Timeline & Delays' },
    { id: 'substantive-review', title: 'The Substantive Review Criteria' },
    { id: 'possible-outcomes', title: 'Three Possible Outcomes' },
    { id: 'monitoring-guide', title: 'Step-by-Step Monitoring Guide' },
    { id: 'objection-preparation', title: 'Preparing for Objections' },
    { id: 'case-laws', title: 'Landmark Examination Case Laws' },
    { id: 'common-mistakes', title: 'Mistakes to Avoid' },
    { id: 'expert-faqs', title: 'Expert FAQs (10+)' },
];

const faqs = [
    {
        question: "What does 'Sent for Examination' status actually mean?",
        answer: "This status indicates that the Trademark Registry has completed the initial formality check of your application and has now assigned it to an examiner. The examiner will conduct a substantive search of existing trademarks and evaluate the mark based on the absolute and relative grounds for refusal as per the Trade Marks Act, 1999."
    },
    {
        question: "How long does the examination phase usually take?",
        answer: "Typically, the 'Sent for Examination' phase can last anywhere from 3 to 12 months. This timeframe fluctuates based on the current backlog at the specific Registry branch (Mumbai, Delhi, Chennai, Kolkata, or Ahmedabad) and the complexity of the classification of your goods or services."
    },
    {
        question: "Can I use my brand while it is 'Sent for Examination'?",
        answer: "Yes, you can continue to use your brand name or logo with the TM symbol. However, since the mark is not yet registered, you do not have the exclusive statutory rights provided by a registration certificate. It is essentially a 'use at your own risk' period while the government reviews your claim."
    },
    {
        question: "Is there any way to speed up the trademark examination process?",
        answer: "Yes. The Trademark Rules, 2017, provide for 'Expedited Examination' under Form TM-M. If you qualify (usually by being a startup or an MSME and paying an additional fee), the Registry will prioritize your application, potentially reducing the examination time to just a few weeks."
    },
    {
        question: "What is the difference between 'Marked for Exam' and 'Sent for Examination'?",
        answer: "Essentially, both mean the same thing in practical terms: the application is in the queue for a substantive review. 'Marked for Exam' is often the earlier system trigger showing an examiner has been assigned, while 'Sent for Examination' confirms the file is actively under review."
    },
    {
        question: "Will I be notified when the examination is complete?",
        answer: "The Registry does not usually send an email or SMS notification for every status change. You or your attorney must manually check the IP India portal. If there is an objection, a formal report will be uploaded to the 'Documents' section of your application."
    },
    {
        question: "What happens if the examiner accepts my mark during this phase?",
        answer: "If the examiner finds no grounds for refusal, the status will change to 'Accepted & Advertised'. Your mark will then be published in the weekly Trademark Journal for a four-month period to allow for public oppositions."
    },
    {
        question: "Do I need to submit any new documents during the examination stage?",
        answer: "Not unless the examiner specifically requests them through an Examination Report. At this specific stage, the examiner is working with the data you provided in the initial TM-A application form."
    },
    {
        question: "What is a 'Well-Known Mark' search during examination?",
        answer: "The examiner checks if your proposed mark is identical or similar to a list of 'Well-Known Trademarks' maintained by the Registry (like TATA, Reliance, or Google). Even if you are in a different industry, you cannot register a mark that conflicts with a well-known brand."
    },
    {
        question: "What should I do if my status hasn't changed for over 12 months?",
        answer: "If the status remains 'Sent for Examination' for an abnormally long time, your attorney can file a 'Grievance' or an 'Inquiry' with the Registry. Sometimes, files can get stuck in a technical loop, and a formal follow up can move it forward."
    }
];

const reviews = [
    {
        name: "Vikram Singhania",
        role: "CEO, Nexa Brands",
        text: "IPR Karo guided us patiently through the 8 month examination wait. Their tracking system alerted us the day the status changed, helping us file our reply within 48 hours. Brilliant service.",
        rating: 5
    },
    {
        name: "Meera Reddy",
        role: "Founder, Bloom Organics",
        text: "The 'Sent for Examination' status was confusing for me. This website provided the clearest roadmap I've seen. We just received our 'Accepted' status today!",
        rating: 5
    },
    {
        name: "Sanjay Dixit",
        role: "Legal Head, TechMatrix",
        text: "Detailed and legally accurate. The deep dive into Section 9 was extremely helpful for our internal strategy meeting while we waited for the examiner's report.",
        rating: 5
    }
];

export default function TrademarkSentForExaminationPage() {
    const breadcrumbItems = [
        { label: "Resources", href: "/resources" },
        { label: "Trademark Sent for Examination: What to Do Next", href: "/trademark-sent-for-examination-what-to-do" },
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
        "headline": "Trademark Sent for Examination: The Ultimate Guide on What to Do Next",
        "description": "Comprehensive guide on navigating the trademark examination phase in India. Covers timelines, Registry criteria, and outcome strategies.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.iprkaro.com/logo/iprlogo.svg"
            }
        },
        "datePublished": "2024-03-31"
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
                "name": "Resources",
                "item": "https://www.iprkaro.com/resources"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Trademark Sent for Examination: What to Do Next",
                "item": "https://www.iprkaro.com/trademark-sent-for-examination-what-to-do"
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
                    "name": "Trademark Status Tracking Service",
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
                            Trademark Status: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Sent For Examination
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Your application is now on the desk of a government examiner. This is one of the most critical stages where your brand's legal validity is challenged. Understand the workflow, timelines, and how to prepare for the inevitable examination report.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Talk to an IP Consultant
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
                        <aside className="hidden lg:block sticky top-32 self-start">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm overflow-y-auto max-h-[80vh]">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Outline</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2 overflow-x-auto whitespace-nowrap">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Introduction: The Threshold of Legal Scrutiny
                                        </h2>
                                        <p className="mb-6">
                                            The moment your application status moves to "Sent for Examination," your brand enters a period of judicial review. It means that the Trademark Registry has finished checking your paperwork: your GST certificates, your power of attorney, and your application forms: and has decided that you are officially in the queue for a legal audit. This is the stage where the government decides if you are worthy of owning a monopoly over a certain word or logo. 
                                        </p>
                                        <p className="mb-6">
                                            In the lifecycle of a brand, this is often the longest and most anxious waiting period. You have filed the application, paid the government fees, and now you must wait for a human being on the other side of the screen to judge your brand. At IPR Karo, we handle thousands of such applications, and we know exactly what is happening in the corridors of the Trademark Registry during this phase. 
                                        </p>
                                        <p className="mb-6">
                                            It is important to realize that this is not a mechanical process. It is a substantive legal evaluation. The examiner will not just look at your brand; they will look at every other brand in the world that might conflict with yours. They will look at the dictionary, they will look at historical trade usage, and they will look at religious sentiments. Everything is on the table during the "Sent for Examination" phase. 
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Think of the examination stage as the entrance exam for your brand. Thousands apply, but only those who meet the strict criteria of distinctiveness and non similarity pass through to the registration certificate."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="registry-workflow" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Registry Backend Workflow: A Deep Dive
                                        </h2>
                                        <p className="mb-6">
                                            When a status says "Sent for Examination," a very specific series of events is triggered in the Registry's automated system. First, the application is shuffled into the correct "Class" bin. India follows the Nice Classification, which divides goods and services into 45 distinct classes. If you are a clothing brand, you are in Class 25. If you are a software company, you are in Class 9 or 42. 
                                        </p>
                                        <p className="mb-6">
                                            Next, the system assigns your file to an Examiner of Trademarks. These are specialized legal officers trained in the nuances of intellectual property law. The examiner uses a sophisticated search engine: the Trademark Search System: to find any identical or phonetically similar marks that already exist on the register. This search is not limited to active marks; it includes 'Abandoned', 'Withdrawn', and 'Opposed' marks as well. 
                                        </p>
                                        <p className="mb-6">
                                            The examiner's workstation displays your application alongside these search results. They will evaluate your mark against the benchmark of "Section 9" (the mark's inherent quality) and "Section 11" (conflicts with others). They will also check if your description of goods is aligned with the class you have chosen. If you have listed 'Pharmaceuticals' in a 'Furniture' class, the examiner will flag this as a discrepancy. 
                                        </p>
                                        <p className="mb-6">
                                            This workflow is highly regulated under the Trademark Rules, 2017. Every step is logged, and every decision must be backed by a written reasoning. This transparency is what ensures that the Indian trademark system remains globally respected. However, this level of detail takes time: which leads us to the most common question: "How long is the wait?"
                                        </p>
                                    </section>

                                    <section id="timeline" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Examination Timeline: Planning Your Wait
                                        </h2>
                                        <p className="mb-6">
                                            The standard timeline for a trademark to move from "Sent for Examination" to a result is roughly 3 to 12 months. However, this is not a fixed window. Several factors can cause this timeline to contract or expand dramatically. 
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 my-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                                <h4 className="font-bold text-lg mb-4 text-[rgb(110,94,147)] flex items-center">
                                                    <FontAwesomeIcon icon={faClock} className="mr-3" /> Branch Backlog
                                                </h4>
                                                <p className="text-sm">The Delhi and Mumbai registries are often the busiest. If your application is filed in these branches, the wait might be on the higher end of the spectrum compared to Ahmedabad or Chennai.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                                <h4 className="font-bold text-lg mb-4 text-[rgb(110,94,147)] flex items-center">
                                                    <FontAwesomeIcon icon={faFileContract} className="mr-3" /> Class Complexity
                                                </h4>
                                                <p className="text-sm">Classes like 35 (Retail and Advertising) or 5 (Medicine) have millions of entries. Searching through these takes the examiner longer than in niche classes like 23 (Yarns and threads).</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            It is a common mistake for business owners to think that no news is good news. In the trademark world, silence only means you are still in the queue. You must not get complacent. At IPR Karo, we recommend a "Bi Weekly Status Audit." Sometimes, a status can change, and if you miss the subsequent deadline: especially for a response to an objection: your entire investment can go to waste. 
                                        </p>
                                        <p className="mb-6">
                                            For those who are in a hurry: perhaps due to an upcoming funding round or a product launch: there is the "Expedited Route." Under Rule 34, you can request the Registry to fast track your examination. This involves paying a much higher government fee, but it can bring the timeline down from 12 months to just 2 or 3 weeks. However, this route is only recommended if your mark is exceptionally unique and unlikely to face objections. 
                                        </p>
                                    </section>

                                    <section id="substantive-review" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Substantive Review Criteria: Section 9 vs Section 11
                                        </h2>
                                        <p className="mb-8">
                                            This is the heart of the examination process. The examiner is looking for two main types of legal roadblocks: Absolute Grounds and Relative Grounds.
                                        </p>
                                        <div className="space-y-10">
                                            <div className="flex gap-8 items-start">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold shadow-lg">9</div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Absolute Grounds (Section 9)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        These are objections related to the mark itself, regardless of what other people are doing. Is the mark 'descriptive'? (Calling a salt brand 'Salty'). Is it 'generic'? (Calling a car company 'Car'). Does it hurt religious sentiments? Is it deceptive? 
                                                    </p>
                                                    <p className="text-base text-gray-600">
                                                        The examiner wants to ensure that you are not monopolizing words that should be free for everyone in the industry to use. To beat a Section 9 objection, we must prove "Acquired Distinctiveness": showing that after years of use, the public now associates that common word specifically with your brand. 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-8 items-start">
                                                <div className="w-16 h-16 bg-gray-400 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold shadow-lg">11</div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Relative Grounds (Section 11)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        These are objections based on conflict. The examiner will list existing marks that are "Identical" or "Similarity" (Phonetically, Visually, or Structurally) to yours. The question here is: will the average consumer be confused? 
                                                    </p>
                                                    <p className="text-base text-gray-600">
                                                        Winning a Section 11 battle requires deep legal research. We look for the "Dominant Element" of the mark. We argue that the marks are used in different geographical locations, or that the packaging is so different that no confusion is possible. We also look for "Honest Concurrent Use" under Section 12. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="possible-outcomes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Three Possible Outcomes After Examination
                                        </h2>
                                        <p className="mb-8">
                                            The examination phase always concludes in one of three ways. Knowing these scenarios helps you prepare your business for the next move.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="p-8 bg-green-50 rounded-3xl border border-green-100 shadow-sm text-center">
                                                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <FontAwesomeIcon icon={faCheckCircle} />
                                                </div>
                                                <h4 className="font-bold mb-4 text-green-900">Accepted & Advertised</h4>
                                                <p className="text-xs text-green-700">The best result. The examiner is satisfied. Your mark goes to the Trademark Journal for public review.</p>
                                            </div>
                                            <div className="p-8 bg-yellow-50 rounded-3xl border border-yellow-100 shadow-sm text-center">
                                                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                                </div>
                                                <h4 className="font-bold mb-4 text-yellow-900">Objected</h4>
                                                <p className="text-xs text-yellow-700">The most common result. An 'Examination Report' is issued. You have 30 days to file a legal reply.</p>
                                            </div>
                                            <div className="p-8 bg-red-50 rounded-3xl border border-red-100 shadow-sm text-center">
                                                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <FontAwesomeIcon icon={faGavel} />
                                                </div>
                                                <h4 className="font-bold mb-4 text-red-900">Show Cause Hearing</h4>
                                                <p className="text-xs text-red-700">Usually happens *after* an objection reply if the examiner is still not convinced. A verbal hearing is scheduled.</p>
                                            </div>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            Many people ask: "Can I be directly refused?" In India, the law is very fair to the applicant. The Registry cannot refuse a mark without giving you a "Right to be Heard." This means even if the examiner hates the mark, they must issue an objection first, let you reply, and if still not satisfied, give you a hearing. 
                                        </p>
                                    </section>

                                    <section id="monitoring-guide" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Step by Step Guide: How to Manually Track Your Examination
                                        </h2>
                                        <p className="mb-6">
                                            While waiting for the status to change, you must be your brand's biggest advocate. Do not rely solely on your lawyers; technical glitches happen, and mail can get lost. Here is the exact process to check your status on the government portal:
                                        </p>
                                        <ol className="list-decimal pl-6 space-y-4 mb-10">
                                            <li className="font-semibold text-gray-900">Visit the IP India Portal: <span className="font-normal text-gray-600 italic">Navigate to the 'Electronic Register' section of the official website.</span></li>
                                            <li className="font-semibold text-gray-900">Enter Your Application Number: <span className="font-normal text-gray-600 italic">This is the 7 digit number you received at the time of filing (Form TM A).</span></li>
                                            <li className="font-semibold text-gray-900">Check the 'Status' Field: <span className="font-normal text-gray-600 italic">Look specifically for changes like 'Objected', 'Accepted', or 'Advertised'.</span></li>
                                            <li className="font-semibold text-gray-900">Download the Reports: <span className="font-normal text-gray-600 italic">Always scroll down to the 'Documents' tab. If there is a PDF titled 'Examination Report', download it immediately.</span></li>
                                        </ol>
                                        <p className="mb-6">
                                            We recommend setting a calendar reminder for every 15 days. In the world of intellectual property, missing a deadline by even one day can lead to the 'Abandonment' of your mark. This means you lose your priority date, and your government fees are forfeited. 
                                        </p>
                                    </section>

                                    <section id="objection-preparation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Preparing for the Inevitable: The Objection Reply Strategy
                                        </h2>
                                        <p className="mb-6">
                                            Over 40 percent of all trademark applications in India face an objection. It is not something to be feared; it is something to be managed. If your status changes from "Sent for Examination" to "Objected," the 30 day clock starts ticking immediately. 
                                        </p>
                                        <p className="mb-6">
                                            The reply to an examination report is not a simple letter. It is a formal legal submission. It must include:
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-4 mb-10">
                                            <li className="flex items-center text-sm font-medium border border-gray-100 p-4 rounded-xl bg-gray-50"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> Factual background of the brand</li>
                                            <li className="flex items-center text-sm font-medium border border-gray-100 p-4 rounded-xl bg-gray-50"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> Comparative analysis of cited marks</li>
                                            <li className="flex items-center text-sm font-medium border border-gray-100 p-4 rounded-xl bg-gray-50"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> Citations of High Court and Supreme Court rulings</li>
                                            <li className="flex items-center text-sm font-medium border border-gray-100 p-4 rounded-xl bg-gray-50"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> Proof of brand usage (Invoices, Social Media, etc.)</li>
                                        </ul>
                                        <p className="mb-6">
                                            At IPR Karo, we maintain a vast library of judicial precedents. If an examiner objects to your mark because it is "too common," we find cases where even more common words were granted protection. This level of legal research is what separates a successful registration from a refused application. 
                                        </p>
                                    </section>

                                    <section id="case-laws" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Landmark Case Laws: Learning from the Giants
                                        </h2>
                                        <p className="mb-6">
                                            Trademark law in India is built on the foundation of judicial decisions. During the examination phase, these cases serve as the "rulebook" that the examiner must follow. 
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3x-l my-12 shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                                <FontAwesomeIcon icon={faGavel} className="text-9xl" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-6 text-[rgb(110,94,147)] uppercase tracking-widest">The Amritdhara Pharmacy Case</h3>
                                            <p className="opacity-80 leading-relaxed italic mb-6">
                                                This landmark case established the "Pianotist Test." It states that when comparing two marks, the examiner must not look for minute differences. Instead, they must ask: would a person of "average intelligence and imperfect recollection" be confused? This case is cited in almost every Section 11 objection reply in India. 
                                            </p>
                                            <h3 className="text-2xl font-bold mb-6 text-[rgb(110,94,147)] uppercase tracking-widest">The Cadbury vs Lotus Case</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                This case highlighted that even if two brands are visually different, if their names sound the same (Phonetic Similarity), registration should be refused. It is the reason why brands like "Addidas" and "Abbibas" can never coexist on the official register. 
                                            </p>
                                        </div>
                                    </section>

                                    <section id="common-mistakes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Common Mistakes During the Examination Phase
                                        </h2>
                                        <p className="mb-6">
                                            After filing, many entrepreneurs fall into traps that can derail their brand protection strategy. Avoid these at all costs:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-red-500">
                                                <h4 className="font-bold text-lg mb-2">Changing the Mark</h4>
                                                <p className="text-sm opacity-70">You cannot change the logo or the spelling of your brand once it is 'Sent for Examination'. Any such attempt requires a new filing and a new fee.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-red-500">
                                                <h4 className="font-bold text-lg mb-2">Missing the Journal</h4>
                                                <p className="text-sm opacity-70">If your mark is accepted, it stays in the Journal for 4 months. If you don't track it and someone opposes you, and you fail to counter, you lose the mark.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-red-500">
                                                <h4 className="font-bold text-lg mb-2">Ignoring Similar Filings</h4>
                                                <p className="text-sm opacity-70">While you wait, other people might file similar marks. You must actively monitor the weekly journals to oppose any infringers before they get their certificate.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-red-500">
                                                <h4 className="font-bold text-lg mb-2">Wrong Class Decisions</h4>
                                                <p className="text-sm opacity-70">Filing in the wrong class is a fatal error. The examiner will not fix it for you; they will simply refuse the application for being procedurally flawed.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="expert-faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Deep Dive: Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-8 mb-8">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">?</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Expert Guidance for Your Examination</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Do not leave your brand's fate to chance. Our IP attorneys specialize in navigating the complex examination reports and securing approvals.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Get a Free Report Analysis
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" />
                                                        +91-9289707648
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32 self-start">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight border-b border-white/10 pb-4">Need Help with Status?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Our AI powered tracking system monitors your application 24/7. Get instant alerts when your examiner issues a report.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Track My Trademark
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Guides</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-objected-what-to-do-next" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Trademark Objected Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Overcome Objections</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-happens-if-someone-opposes-my-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Opposition Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Respond to Report</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-business" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Business Trademarks</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                {/* Aggregate Reviews Section */}
                <div className="bg-gray-50 border-t border-gray-200 mt-20 pt-20 pb-20">
                    <div className="container mx-auto px-4 max-w-[1200px] text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">What Our Clients Say</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {reviews.map((review, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                    <div className="flex text-yellow-500 mb-4">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                            {review.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                            <p className="text-xs text-gray-500">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
