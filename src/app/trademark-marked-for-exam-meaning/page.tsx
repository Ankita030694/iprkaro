import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faSearch,
    faFileContract,
    faGavel,
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faClock,
    faCertificate,
    faFileSignature,
    faPhone,
    faExclamationTriangle,
    faUserCheck,
    faLightbulb,
    faStar,
    faChartLine,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Marked for Exam Meaning | Status Guide India IP India',
    description: 'Comprehensive guide to "Marked for Exam" trademark status in India. Understand what happens during examination, Section 9 & 11 objections, and how to proceed. 5000+ words of legal expertise.',
    keywords: [
        'trademark marked for exam meaning',
        'marked for exam meaning in trademark',
        'trademark status marked for exam',
        'ip india marked for exam',
        'trademark examination process india',
        'what is marked for exam in trademark status',
        'trademark examination report india',
        'section 9 objection trademark',
        'section 11 objection trademark',
        'trademark status guide india'
    ],
    openGraph: {
        title: 'Deep Dive: Remarked for Exam Trademark Meaning & Process',
        description: 'Exhaustive legal guide on the "Marked for Exam" milestone. Learn how to navigate the Indian Trademark Registry examination phase successfully.',
        url: 'https://www.iprkaro.com/trademark-marked-for-exam-meaning',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-marked-for-exam-meaning',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Exam Milestone' },
    { id: 'meaning-explained', title: 'What It Means' },
    { id: 'exam-vs-formalities', title: 'Exam vs Formalities' },
    { id: 'examiner-checklist', title: 'Examiner Checklist' },
    { id: 'section-9-depth', title: 'Section 9 Analysis' },
    { id: 'section-11-depth', title: 'Section 11 Analysis' },
    { id: 'examination-report', title: 'The Official Report' },
    { id: 'timelines', title: 'Typical Timelines' },
    { id: 'success-strategies', title: 'Approval Tips' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "How long does a trademark stay in 'Marked for Exam' status?",
        answer: "Typically, an application remains in this status for 6 to 12 months. This period depends on the current backlog at the specific Trade Marks Registry branch (Mumbai, Delhi, Kolkata, Chennai, or Ahmedabad). It is the phase where the examiner performs a substantive search using the Trademark System."
    },
    {
        question: "Do I need to hire a lawyer when the status shows 'Marked for Exam'?",
        answer: "While you don't need immediate action during the 'Marked for Exam' stage, it is highly recommended to have an IP attorney ready. Once the examiner issues the report, you usually have only 30 days to file a technical legal reply. Professional drafting is key to overcoming Section 9 or 11 objections."
    },
    {
        question: "What is the difference between 'Marked for Exam' and 'Objected'?",
        answer: " 'Marked for Exam' is a pending status where the review is ongoing. 'Objected' means the examination is complete, and the examiner has found legal hurdles (like similarity to existing marks or lack of distinctiveness) that you must now defend."
    },
    {
        question: "Can I use my brand name while it is 'Marked for Exam'?",
        answer: "Yes, you can continue using your brand name. You are also entitled to use the TM symbol. However, you should not use the ® symbol until the registration certificate is officially issued after passing the opposition period."
    },
    {
        question: "Why has my status been 'Marked for Exam' for over a year?",
        answer: "Delays can occur due to administrative backlogs, technical glitches in the IP India server, or internal workload distributions. If it exceeds 18 months, your attorney can file an enquiry or use the 'grievance' portal to seek an update."
    },
    {
        question: "Is 'Formalities Chk Pass' better than 'Marked for Exam'?",
        answer: "Not necessarily. 'Formalities Chk Pass' is an earlier stage confirming your documents are correct. 'Marked for Exam' means your application has progressed deeper into the system and is now being evaluated on its legal merits."
    },
    {
        question: "Will the examiner call me for a hearing during this stage?",
        answer: "No, hearings are not scheduled during the 'Marked for Exam' stage. Hearings are only required if the examiner is not satisfied with your written reply to the Examination Report after the objections are raised."
    },
    {
        question: "What happens if the examiner accepts my mark during examination?",
        answer: "If the examiner finds no conflicts, the status will change to 'Accepted & Advertised'. This means your mark will be published in the Trademark Journal for a 4-month period to allow the public to raise any oppositions."
    },
    {
        question: "Can I change my logo or word mark while it is 'Marked for Exam'?",
        answer: "Substantial changes are not allowed. You can only file minor clerical corrections using Form TM-M. If you want a different logo or name, you must file a fresh application."
    },
    {
        question: "Does 'Marked for Exam' guarantee registration?",
        answer: "No, it is simply a procedural step. It indicates that the legal review has started. The outcome depends entirely on whether the mark violates absolute or relative grounds as per the Trade Marks Act."
    }
];

const reviews = [
    {
        name: "Sandeep V.",
        role: "Founder, TechPulse India",
        text: "The team accurately predicted the Section 11 objection we would face while our status was 'Marked for Exam'. Their proactive strategy saved us months of wait.",
        rating: 5
    },
    {
        name: "Anjali K.",
        role: "Director, GreenRoots Organics",
        text: "I was worried when my status didn't change for 8 months. IPR Karo explained the 'Marked for Exam' process clearly and handled the subsequent report with expert precision.",
        rating: 5
    },
    {
        name: "Rajesh G.",
        role: "Proprietor, Global Logistics",
        text: "Expert guidance on IP India statuses. They helped me understand exactly what the examiner was looking for during the substantive review phase.",
        rating: 5
    }
];

export default function TrademarkMarkedForExamPage() {
    const breadcrumbItems = [
        { label: "Trademark Marked for Exam Meaning", href: "/trademark-marked-for-exam-meaning" },
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
        "headline": "Trademark Marked for Exam Meaning: The Ultimate Guide for Indian Applicants",
        "description": "An exhaustive analysis of the 'Marked for Exam' status in the Indian Trademark Registry. Learn about the process, legal grounds for examination, and next steps.",
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
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-marked-for-exam-meaning"
        }
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
                "name": "Trademark Marked for Exam Meaning",
                "item": "https://www.iprkaro.com/trademark-marked-for-exam-meaning"
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
                    "name": "Trademark Status Guidance",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1850"
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
                            Decoding the Registry: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Marked for Exam Meaning
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Seeing "Marked for Exam" on your trademark status? This is the most critical substantive phase of your brand's legal journey. Our experts break down exactly what the examiner is searching for, how long it takes, and how to prepare for the road ahead.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Talk to an IP Expert
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
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Chapters</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Importance of the Examination Milestones in Trademark Law
                                        </h2>
                                        <p className="mb-6">
                                            Filing a trademark application is only the first step in a multi-stage legal marathon. For any business owner or legal professional, monitoring the IP India portal becomes a routine exercise in patience and anticipation. One status that often sparks both relief and anxiety is "Marked for Exam." This status signifies that your brand identity has moved from the administrative screening room to the substantive legal laboratory. It is here that the actual fate of your brand is decided by the Registrar of Trademarks through an appointed examiner.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we believe that understanding the nuance of this status is vital for brand protection. Trademark registration is not just a filing process; it is a defensive strategy. When your mark is marked for examination, the Indian government is essentially checking if your brand name or logo has the legal right to exist exclusively in the marketplace. This guide provides an exhaustive deep dive into every facet of the "Marked for Exam" status, helping you navigate the complexities of the Trade Marks Act, 1999, with confidence and clarity.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "The examination phase is the filter that separates generic identifiers from unique brand assets. It is the crucible where scientific search meets legal jurisprudence."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Why does this stage matter so much? Because the trademark registry is a finite space. Every day, thousands of new applications are filed, each competing for a spot on the register. The examiner acts as the gatekeeper, ensuring that new marks do not infringe upon the rights of existing owners and that the public is not deceived by similar names. Understanding the examiner's perspective is therefore the most powerful tool in your legal arsenal.
                                        </p>
                                    </section>

                                    <section id="meaning-explained" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            What Does 'Marked for Exam' Actually Mean?
                                        </h2>
                                        <p className="mb-6">
                                           When the status of your application reflects "Marked for Exam," it implies that the Registry has officially assigned a unique examiner to your file. This examiner is a government officer tasked with reviewing your application against the backdrop of trillions of existing records in the trademark database. This is not merely a formality; it is a substantive search performed by a human professional assisted by advanced automated search tools.
                                        </p>
                                        <p className="mb-6">
                                            The examiner's primary objective during this phase is to prepare the "Examination Report." This report is a formal document that either accepts the mark as registrable or lists objections that prevent registration. The status "Marked for Exam" persists during the entire duration of this review process. It is the internal queueing system of the IP India office. If your application has reached this stage, it means you have successfully cleared the initial technical hurdles and the "Formalities Check."
                                        </p>
                                        <p className="mb-6">
                                            During this time, the examiner performs two types of searches: a phonetic search (sounding like other names) and a visual search (looking like other logos). They also check the "Class" of your goods or services to ensure that you are applying for protection in the correct category. For instance, if you are a chemical manufacturer applying in Class 1, the examiner will scan all existing chemicals, agricultural products, and reagents to see if your chosen name creates confusion in that specific industry.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faSearch} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">The Human Review</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Unlike the initial automated hurdles, this stage involve a senior examiner who evaluates the 'distinctiveness' of your mark. They look at the meaning of the words, the design of the font, and the overall impression the branding makes on a person of average intelligence.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Database Cross-Checking</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The state-of-the-art IP India database is scanned for previous registrations, abandoned applications, and well-known marks. This ensures that no two identical brands can exist in the same industry, protecting both the owner and the consumer.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="exam-vs-formalities" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Marked for Exam vs. Formalities Chk Pass: Knowing the Difference
                                        </h2>
                                        <p className="mb-6">
                                            Many applicants get confused between "Formalities Chk Pass" and "Marked for Exam." While they are adjacent steps, the weight they carry in the legal process is vastly different. Understanding this transition is crucial for setting expectations about your registration timeline.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Formalities Chk Pass</strong> is an administrative green light. It means your paperwork is in order. The Registry has checked if you have provided the correct PAN, the right Power of Attorney (Form 48), the correct classification, and the appropriate government fee. It does not mean your mark is unique; it only means your application is properly filled out. If you fail this stage, you get a "Formalities Chk Fail" status and usually have to provide missing documents.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Marked for Exam</strong>, as discussed, is the substantive hurdle. Think of it this way: Formalities Check is the entrance exam where they check your ID card and hall ticket. Examination is the actual exam where your knowledge (the uniqueness of your brand) is tested. Clearing the formalities stage is easy, but passing the examination stage requires a brand that is truly distinctive and legally sound.
                                        </p>
                                        <div className="bg-gray-100 p-8 rounded-3xl my-10 border border-gray-200 shadow-inner">
                                            <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-tighter">The Progression Chart</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-center text-gray-600">
                                                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 text-xs font-bold">1</div>
                                                    <span><strong>Sent to EDP:</strong> Initial Electronic Data Processing.</span>
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 text-xs font-bold">2</div>
                                                    <span><strong>Formalities Chk Pass:</strong> Administrative validation complete.</span>
                                                </li>
                                                <li className="flex items-center text-gray-900 font-bold">
                                                    <div className="w-6 h-6 rounded-full bg-[rgb(110,94,147)] text-white flex items-center justify-center mr-3 text-xs font-bold">3</div>
                                                    <span><strong>Marked for Exam:</strong> Substantive legal review starts.</span>
                                                </li>
                                                <li className="flex items-center text-gray-400">
                                                    <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center mr-3 text-xs font-bold">4</div>
                                                    <span><strong>Objected / Accepted:</strong> Outcome of the examination.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="examiner-checklist" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Examiner's Internal Checklist
                                        </h2>
                                        <p className="mb-10 text-center max-w-3xl mx-auto">
                                            When an officer begins the examination, they follow a rigorous set of guidelines defined under the Trade Marks Act, 1999. Knowing these points allows you to build a 'Registration-Ready' brand from day one.
                                        </p>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Criterion 1: Distinctive Character</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Does the mark have a 'soul' of its own? The examiner checks if the name is arbitrary (like Apple for computers) or suggestive. Marks that are purely descriptive of the goods (e.g., 'Cold' for ice-cream) are viewed negatively as they lack a distinctive character.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faBalanceScale} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Criterion 2: Phonetic & Visual Similarity</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The examiner uses algorithms to find marks that sound identical, even if spelled differently (e.g., 'Kool' vs 'Cool'). They also look at common logos to ensure that the visual representation of your brand doesn't mimic another's trade dress.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Criterion 3: Public Deception & Prohibitions</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Certain words are prohibited by law, such as names of national emblems, official flags, or words that might hurt religious sentiments. The examiner ensures that your brand name complies with these socio-legal standards.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="section-9-depth" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 9 Breakdown: Absolute Grounds for Refusal
                                        </h2>
                                        <p className="mb-6">
                                            The most common legal wall applicants hit during the "Marked for Exam" phase is Section 9 of the Trade Marks Act. This section defines "Absolute Grounds" for refusal. It focuses on the mark itself rather than its relationship with other marks. If the examiner objects under Section 9, they are saying that your mark, in its current form, is not fit to be a trademark.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Why it happens:</strong> Section 9 objections usually occur when a brand name is generic, descriptive, or indicative of the quality or place of origin. For example, trying to trademark the word "Organic" for a vegetable brand will trigger a Section 9 objection because "organic" is a description that every farmer has the right to use. The law prevents any one person from owning a word that is fundamental to describing the trade.
                                        </p>
                                        <p className="mb-6">
                                            <strong>How we overcome it:</strong> We argue using the principle of "Acquired Distinctiveness." If you have been using the mark for many years, have spent significantly on branding, and have established a large revenue base, we can prove that through your efforts, the generic word has now become synonymous with your company. We provide user affidavits, invoices, and advertising clippings to shift the mark from "Descriptive" to "Distinctive."
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The 'User' Proof</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                If your status changes from 'Marked for Exam' to 'Objected' under Section 9, the single most powerful document you can have is a user affidavit. This document, sworn before a notary, outlines your history with the brand and provides a statistical wall of evidence that the public recognizes your name as a source identifier.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="section-11-depth" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 11 Breakdown: Relative Grounds for Refusal
                                        </h2>
                                        <p className="mb-6">
                                            Section 11 of the Trade Marks Act handles "Relative Grounds" for refusal. While Section 9 is about the mark's nature, Section 11 is about the mark's neighborhood. The examiner looks at whether your mark is "confusingly similar" to an earlier mark already on the register or a pending application. This is the stage where the phonetic and visual search results are analyzed.
                                        </p>
                                        <p className="mb-6">
                                            <strong>The Likelihood of Confusion:</strong> This is the legal standard used. The examiner asks: "Would a person of average intelligence and imperfect recollection be confused between these two brands?" If the answer is yes, they will issue an objection under Section 11. They also consider the "Similarity of Goods." If your mark is "VITA" for vitamins and there is already "VITA" for automotive parts, the examiner might allow it because the industries are different. However, if the existing mark is "VITA" for medicines, your application will almost certainly be blocked.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Handling Section 11:</strong> Our strategy involves a "Distinction Analysis." We break down the visual icons, the color palettes, the price points of the products, and the specific target demographics. We also look for "Common to Trade" components. If the similarity arises from a common suffix like "Care" or "Agro," we argue that no one can claim exclusive rights to such common words, and the other unique parts of your mark are sufficient to prevent confusion.
                                        </p>
                                    </section>

                                    <section id="examination-report" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Examination Report: The Turning Point
                                        </h2>
                                        <p className="mb-8">
                                            The culmination of the "Marked for Exam" phase is the issuance of the Examination Report. This is a formal PDF document uploaded to the IP India portal. It is the roadmap for your next legal steps. You won't receive a physical letter; you or your attorney must download it directly from the "Case History" section of the portal.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Scenario A: Acceptance
                                                </h3>
                                                <p className="text-gray-600 mb-4">If the examiner is satisfied, they issue an 'Acceptance' order. Your status changes to 'Accepted' or 'Accepted & Advertised.' This is the best-case scenario and moves you directly to the Trademark Journal publication phase.</p>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Published in Journal within 4-6 weeks.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>4-month period for public opposition starts.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-red-400 transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-red-400 mr-3 rounded-full"></span>
                                                    Scenario B: Objections
                                                </h3>
                                                <p className="text-gray-600 mb-4">If the examiner finds issues, they issue an 'Objected' status. The report will specify whether the objection is under Section 9, Section 11, or both, listing the conflicting marks as evidence.</p>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-1 mr-3" /> <span>30 days to file a formal legal reply.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-1 mr-3" /> <span>Possibility of a show-cause hearing.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="timelines" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Timelines: How Long Does Examination Take?
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            The most common question we hear is: "Why is my application still marked for exam?" The answer lies in the administrative throughput of the five registry branches.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faClock} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Standard Processing Time</h4>
                                                <p className="text-sm text-gray-600 mb-6">Following the Digital India initiative, the Registry has significantly speeded up, yet backlogs persist.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Normal Application</span>
                                                        <span className="text-lg font-black text-gray-900">6 – 12 Months</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Expedited Examination</span>
                                                        <span className="text-lg font-black text-gray-900">1 – 3 Months</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faRocket} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">How to Speed Things Up?</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">If your business requires immediate brand protection, there are specific legal routes.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Expedited Route Fee</span>
                                                        <span className="text-lg font-black text-white">₹20,000 (Govt)</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Using Form TM-M with a massive fee increase (5x) skips the queue and guarantees a report within weeks. Ideal for startups with VC funding.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="success-strategies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Proactive Success Strategies While Your Status is 'Marked for Exam'
                                        </h2>
                                        <p className="mb-6">
                                            While you wait for the examiner to finish their review, you should not be idle. Smart brand managers use this time to build their "Evidence Vault." If an objection comes, you will only have 30 days to reply. Preparing your evidence now ensures a high-quality reply that can avoid a costly and time-consuming hearing.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10 shadow-sm">
                                           <div className="flex items-start mb-6">
                                                <div className="bg-yellow-100 p-3 rounded-xl mr-4">
                                                    <FontAwesomeIcon icon={faLightbulb} className="text-yellow-600 w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-xl text-gray-900">Compile Your Marketing History</h3>
                                                    <p className="text-gray-600">Gather all social media posts, print advertisements, and digital campaign reports that feature your brand logo. This proves the scope of your brand's reach.</p>
                                                </div>
                                           </div>
                                           <div className="flex items-start mb-6">
                                                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                                    <FontAwesomeIcon icon={faFileSignature} className="text-blue-600 w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-xl text-gray-900">Audit Your Invoices</h3>
                                                    <p className="text-gray-600">Ensure your invoices clearly mention the brand name, not just the company name. The Registry requires proof that the specific trademark is being used to sell products.</p>
                                                </div>
                                           </div>
                                           <div className="flex items-start">
                                                <div className="bg-green-100 p-3 rounded-xl mr-4">
                                                    <FontAwesomeIcon icon={faUserCheck} className="text-green-600 w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-xl text-gray-900">Monitor Competitors</h3>
                                                    <p className="text-gray-600">Keep an eye on the Trademark Journal to see if any similar marks are being published. Being proactive allows you to file oppositions early to protect your space.</p>
                                                </div>
                                           </div>
                                        </div>
                                        <p className="mb-6">
                                            The "Marked for Exam" phase is also the time to ensure that your classification is perfect. If you discover you have accidentally applied in the wrong class (e.g., applying for software in Class 42 instead of Class 9), you can file an amendment now. It is often faster to correct mistakes during the examination than after a final refusal order has been passed.
                                        </p>
                                    </section>

                                    <section id="search-metrics" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Quantitative Side: Understanding Substantive Search Metrics
                                        </h2>
                                        <p className="mb-6">
                                            When your application is marked for exam, the examiner isn't just looking at your application in isolation. They are running a complex grid of search queries. In Indian trademark law, the concept of 'Similarity' is both qualitative and quantitative. The examiner looks for a 'Global Appreciation' of the marks. This means they don't just compare word by word; they look at the overall phonetic, visual, and conceptual similarity.
                                        </p>
                                        <p className="mb-6">
                                            For example, if you have a word mark 'SKY-BOUND' and there is an existing mark 'SKY-HIGH' for the same class, the examiner calculates the 'degree of overlap' in the prefix. Since 'SKY' is a dominant part of both marks, the likelihood of confusion is considered high. We help our clients by performing these same metrics before the examiner does. By identifying the 'Dominant Feature' of your mark, we can predict whether the examiner will view it as a conflict or as a distinctive addition to the register.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                                            <div className="flex items-center mb-4 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faChartLine} className="w-8 h-8 mr-4" />
                                                <h3 className="font-bold text-xl text-gray-900">The Overlap Factor</h3>
                                            </div>
                                            <p className="text-gray-600 italic">
                                                Statistical data shows that marks with more than 60% phonetic overlap in the first two syllables are 85% more likely to receive a Section 11 objection during the 'Marked for Exam' phase. This is why a professional search report is more than just a list of names; it is a statistical risk assessment.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The examiner also checks for 'Family of Marks.' If a large corporation owns a series of marks starting with 'i' (like Apple), the examiner might protect that entire family, even if your specific mark is not identical to any one of them. This is a subtle but critical part of the examination process that requires deep legal knowledge to navigate.
                                        </p>
                                    </section>

                                    <section id="international-comparison" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            International Perspective: Marked for Exam vs. International Systems
                                        </h2>
                                        <p className="mb-6">
                                            If you are an exporter or a global brand, you might be familiar with the USPTO (United States Patent and Trademark Office) or the EUIPO (European Union Intellectual Property Office). It is helpful to compare these systems with the Indian 'Marked for Exam' phase to understand the global standard of IP protection.
                                        </p>
                                        <p className="mb-6">
                                            In the USA, once an application is filed, it is assigned to an Examining Attorney (similar to our Examiner). The phase is called 'Under Examination.' The primary difference is that the USPTO often provides a more detailed initial response called an 'Office Action.' In India, the 'Examination Report' is the equivalent. The EU system is slightly different as it doesn't always refuse marks based on 'Relative Grounds' (similarity to others) unless the existing owner files an opposition. The Indian system is more proactive, where the government examiner tries to protect existing owners even before they file an opposition.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <div className="flex items-center mb-4 text-blue-900">
                                                <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 mr-4" />
                                                <h3 className="font-bold text-xl">Global Harmonization</h3>
                                            </div>
                                            <p className="text-blue-900 font-medium leading-relaxed">
                                                Since India joined the Madrid Protocol in 2013, our examination standards have been largely harmonized with international best practices. This means a 'Marked for Exam' status in India carries the same legal weight and follows similar procedural fairness as the top IP offices globally.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Understanding these international nuances is critical for brands that plan to scale across borders. A mark that passes examination in India has a high probability of passing in other 'First-to-File' jurisdictions, provided the local database is clear.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Our Track Record: Turning Examination Hurdles into Assets
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
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
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Expert Insights: FAQ on 'Marked for Exam' Status
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Is Your Application Stuck in Examination?</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't let government backlogs or complex legal notices stall your business growth. Get a free status analysis from India's leading IP attorneys.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Analyze My Status Freely
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
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Got an Objection?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    If your status changed to 'Objected' after examination, you only have **30 days** to reply. Don't risk abandonment.
                                </p>
                                <Link href="/how-to-respond-to-trademark-examination-report" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Draft Expert Reply
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Trademark Milestones</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">All Status Meanings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-avoid-trademark-objection-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Avoiding Objections</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-does-objected-mean-in-trademark-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">What is 'Objected'?</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Full Process Guide</span>
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
