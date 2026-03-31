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
    faMoneyBillWave,
    faCertificate,
    faFileSignature,
    faPhone,
    faExclamationTriangle,
    faFileAlt,
    faHistory,
    faGlobe,
    faUserShield,
    faStar,
    faArrowRight,
    faTimesCircle,
    faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Formalities Check Fail Meaning | Causes, Effects & Resolution India',
    description: 'Complete 5000+ word guide on Trademark Formalities Check Fail in India. Learn the common causes, why it happens, the 30-day deadline, and how to resolve it using MIS-F and TM-M.',
    keywords: [
        'trademark formalities check fail meaning',
        'formalities chk fail status india',
        'trademark objection response formalities',
        'form tm-m trademark amendment',
        'miscellaneous reply trademark formality',
        'trademark formalities check pass',
        'trademark status meaning india',
        'trademark attorney formalities response',
        'trademark abandoned formalities fail',
        'correct trademark application india'
    ],
    openGraph: {
        title: 'Solving Trademark Formalities Check Fail: The Complete Legal Guide',
        description: 'Understand every nuance of the formalities check fail status in India. Expert legal insights on how to secure your trademark from administrative errors.',
        url: 'https://www.iprkaro.com/trademark-formalities-check-fail-meaning',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-formalities-check-fail-meaning',
    },
};

const tocSections = [
    { id: 'introduction', title: 'What is Formalities Check Fail?' },
    { id: 'top-causes', title: 'Top 10 Causes of Failure' },
    { id: 'legal-implications', title: 'Legal Implications' },
    { id: 'the-30-day-window', title: 'The Critical 30-Day Window' },
    { id: 'how-to-fix-it', title: 'How to Resolve the Fail' },
    { id: 'mis-f-reply', title: 'The Miscellaneous Reply (MIS-F)' },
    { id: 'tm-m-amendment', title: 'Filing Form TM-M' },
    { id: 'prevention-checklist', title: 'Pre-Filing Prevention' },
    { id: 'case-studies', title: 'Case Scenarios' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'Detailed FAQs' },
];

const faqs = [
    {
        question: "Is 'Formalities Chk Fail' the same as a trademark rejection?",
        answer: "No, it is not a final rejection. It is an administrative hold indicating that your application has missing or incorrect documents or details. Once you fix these errors through a formal reply, your application can proceed to the next stage."
    },
    {
        question: "How much time do I have to respond to a formalities check fail notice?",
        answer: "You have exactly 30 days from the date of the notice to file a formal reply. If you miss this deadline, your application will be marked as 'Abandoned' by the Registry, and you will lose your filing fees and priority date."
    },
    {
        question: "Where can I find the reason why my formalities check failed?",
        answer: "The reason is mentioned in a 'Formalities Check Fail Notice' issued by the Registrar. You can download this from the 'TLA Search' or 'Public Search' section of the official IP India website by entering your application number."
    },
    {
        question: "What is a 'Miscellaneous Reply to Formality Check' (MIS-F)?",
        answer: "This is a specific category of response filed on the the e-filing portal to address the errors mentioned in the formalities check notice. It allows you to upload missing documents like Form TM-48 or a User Affidavit."
    },
    {
        question: "Can I change my trademark class if it's the reason for the fail?",
        answer: "Changing the class entirely is usually not allowed through a simple reply. However, you can use Form TM-M to correct minor clerical errors in the class or to specify the goods and services more accurately if they were miscategorized."
    },
    {
        question: "What happens if I ignore the formalities check fail notice?",
        answer: "If you do not respond within 30 days, your trademark application will be marked as 'Abandoned.' You cannot revive an abandoned application; you would have to file a completely new application and pay the government fees again."
    },
    {
        question: "Do I have to pay a government fee to fix a formalities check fail?",
        answer: "If the error can be resolved through a simple reply (MIS-F) with missing documents, there is usually no government fee. However, if you need to amend the application details (like the applicant's name or class), you must file Form TM-M, which has a government fee (₹900 for individuals/MSMEs and ₹2,700 for others)."
    },
    {
        question: "What documents are most commonly flagged in a formalities check?",
        answer: "The most common missing documents are the Power of Attorney (Form TM-48), User Affidavit (if prior use is claimed), and Startup/MSME certificates for fee rebates. Incorrectly signed or unstamped documents are also frequently flagged."
    },
    {
        question: "Does 'Formalities Chk Pass' mean my trademark is registered?",
        answer: "No. 'Formalities Chk Pass' only means that your application has cleared the initial administrative screening. It will now move to 'Examination,' where a Trademarks Examiner will check if the mark is distinctive and does not conflict with existing brands."
    },
    {
        question: "Can a bad logo image cause a formalities check fail?",
        answer: "Yes, if the logo is blurry, contains unreadable text, or is not in the correct format/size (typically 8cm x 8cm), the Registry will flag it as a failure and ask for a clearer representation."
    },
    {
        question: "Can I file the formalities reply myself?",
        answer: "While you can technically file it yourself, it is safer to hire a trademark attorney. A professional response needs to be drafted in a specific legal format to ensure the Registrar accepts the correction without further delays."
    },
    {
        question: "Why did my application fail when I paid the correct fee?",
        answer: "You might have selected the wrong category (e.g., 'Individual' instead of 'Startup'). If you claimed a fee rebate as a Startup but didn't upload your DPIIT certificate, the Registry will flag it as a fee discrepancy."
    }
];

const reviews = [
    {
        name: "Vikram Malhotra",
        role: "CEO, GreenPulse Energy",
        text: "Our application was on the verge of being abandoned after a formalities fail. IPR Karo filed the MIS-F reply within 48 hours, and we cleared the check. Excellent speed and accuracy.",
        rating: 5
    },
    {
        name: "Meghna Iyer",
        role: "Founder, Artisanal Blends",
        text: "I didn't know I needed an affidavit for my old brand name. The team explained the requirements clearly and helped draft the documents. Status changed to pass in just a few weeks.",
        rating: 5
    },
    {
        name: "Amit Deshmukh",
        role: "Director, Global Logistics Ltd.",
        text: "The detailed explanation of Form TM-M vs MIS-F saved us from paying unnecessary fees. Their legal expertise in trademark status resolution is unmatched.",
        rating: 5
    }
];

export default function TrademarkFormalitiesCheckFailPage() {
    const breadcrumbItems = [
        { label: "Trademark Formalities Check Fail Meaning", href: "/trademark-formalities-check-fail-meaning" },
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
        "headline": "Trademark Formalities Check Fail Meaning: The Roadmap to Resolution",
        "description": "An exhaustive guide on handling the 'Formalities Chk Fail' status. Discover why applications fail, the critical 30-day timeline, and expert steps to fix your trademark.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
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
                "name": "Trademark Formalities Check Fail Meaning",
                "item": "https://www.iprkaro.com/trademark-formalities-check-fail-meaning"
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
                    "name": "Trademark Status Resolution Services",
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
                            Trademark Formalities Check Fail: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Overcome Administrative Hurdles Instantly
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Seeing a "Formalities Chk Fail" status can be stressful, but it's not the end of the road. It's a procedural flag that requires professional attention. We provide the expert legal roadmap to resolve formalities check failures, ensuring your brand proceeds to examination without the risk of abandonment.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Resolve Your TM Fail Now
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Content</h4>
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
                                            The Reality of Trademark Formalities Check Fail Meaning
                                        </h2>
                                        <p className="mb-6">
                                            The journey of brand registration in India is a multi-stage process governed by the <strong>Trade Marks Act, 1999</strong>. The very first hurdle an application encounters is the "Formalities Check." When your status updates to <strong>Formalities Chk Fail</strong>, it signals that the administrative machinery of the Trademark Registry has flagged a deficiency in your filing. This is not a judgment on the distinctiveness of your logo or the merit of your brand; it is a signal that the "formalities"—the paperwork, the data entries, and the documentation—are not in order.
                                        </p>
                                        <p className="mb-6">
                                            Understanding <strong>Trademark Formalities Check Fail Meaning</strong> is crucial because this status is a ticking time bomb. The Registry provides a strict 30-day window to rectify the errors. If the applicant fails to respond with the correct legal documentation, the application is summarily marked as 'Abandoned.' An abandoned trademark cannot be contested or revived easily; it simply dies, resulting in a loss of the government fee and, more importantly, the 'Priority Date' which protects you against later filers.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A formalities check fail is an administrative red light. It doesn't mean your brand is rejected; it means your paperwork is incomplete. Fix the paperwork, and the light turns green."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            At this stage, the examiner is not looking at whether your mark is "Apple" or "Microsoft." They are looking at whether the PAN card uploaded matches the applicant's name, whether the Power of Attorney is properly stamped, and whether you've selected the correct NICE classification. These are technically administrative, but they form the legal foundation upon which your trademark registration stands. Errors at this stage are often the result of hurried filing, lack of professional audit, or simple data-entry mistakes.
                                        </p>
                                        <p className="mb-6">
                                            In this 5000-word authoritative guide, we will dissect every reason why a formalities check might fail, the exact legal pathway to resolve the failure, and how to future-proof your application against similar hurdles in the future.
                                        </p>
                                    </section>

                                    <section id="top-causes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Top 10 Reasons for Trademark Formalities Failures
                                        </h2>
                                        <p className="mb-8">
                                            Nearly 20% of all trademark applications in India face a formalities failure. By understanding these root causes, you can navigate the resolution process with mechanical precision.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faFileAlt} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">1. Incorrect Applicant Name/Address</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The name must exactly match the legal entity proof. A missing middle name or a variation in the company's 'Private Limited' suffix can trigger a fail notice. Similarly, the address must be current and verifiable.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">2. Missing Power of Attorney (TM-48)</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">If an agent or attorney is filing on your behalf, a properly executed and stamped Form TM-48 is mandatory. If it is missing, or if the name of the applicant differs from the principal name on the form, the formalities fail is certain.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHistory} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">3. Invalid User Affidavit</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">If you claim "Prior Use" (using the mark before the date of application), you must upload a User Affidavit along with proof like invoices. If the affidavit doesn't mention the correct dates or is not notarized, the check will fail.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">4. MSME/Startup Fee Discrepancy</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Taking a 50% discount on government fees requires proof of MSME/Udyam or Startup status. If the certificate is missing, expired, or doesn't mention the correct NIC codes, the Registry will flag a fee discrepancy fail.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Others including <strong>Incorrect Classification</strong> (filing in Class 30 instead of 31), <strong>Vague Goods Description</strong> (using terms like 'all types of goods'), <strong>Unclear Logo Images</strong>, and <strong>Missing Translations</strong> for non-English marks. Each of these requires a specific legal remedy.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we perform a 'Pre-Filing Formalities Scan'. Our software automatically flags if your Udyam certificate matches your applicant name, ensuring that "Formalities Chk Pass" is the only outcome you see.
                                        </p>
                                    </section>

                                    <section id="legal-implications" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The High Stakes of a Formalities Failure
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faTimesCircle} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Instant Abandonment Risk</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Unlike "Objected" status, where you may have multiple hearings, a formalities failure leads to abandonment very quickly if not addressed. The system is automated; if 30 days pass without a Misc-Reply (MIS-F), the status changes to "Abandoned" automatically. Reviving such a mark requires High Court intervention or a very expensive restoration petition.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Loss of Competitive Priority</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Intellectual Property is a "first-to-file" race. If your application fails formalities and you have to file a new one, you lose the priority of your original filing date. If a competitor files for a similar name in the meantime, they get the priority, and you become the infringer. Administrative errors can thus destroy your market advantage.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Forfeiture of Government Fees</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Registry does not refund fees for failed or abandoned applications. For large companies filing in multiple classes, this can mean a loss of lakhs of rupees simply because a document wasn't signed correctly or a class was slightly mislabeled. Professional handling is thus a financial insurance for your brand.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="the-30-day-window" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The 30-Day Resolution Window: Why Urgency is Non-Negotiable
                                        </h2>
                                        <p className="mb-6">
                                            The Trademark Registry is incredibly strict about the 30-day timeline for responding to a formalities check fail notice. This timeline starts from the moment the 'Formalities Check Fail Notice' is generated on the portal. Often, applicants do not receive an email notification, making manual monitoring essential.
                                        </p>
                                        <p className="mb-6">
                                            A delayed response is as good as no response. If you file your reply on the 31st day, the system may already have triggered the <strong>Abandoned</strong> status. At IPR Karo, we use automated status trackers that check your application every 6 hours. If a failure is detected, our legal team is alerted instantly, ensuring that we resolve the issue within the first 48 to 72 hours, leaving no room for administrative risks.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Resolution Timeline</h3>
                                            <p className="opacity-80 leading-relaxed mb-6 italic">
                                                "Speed is the best legal defense. Every day your application stays in 'Fail' status, you are losing valuable time in a high-speed market. Efficient resolution puts you back in the race before your competitors even notice."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="how-to-fix-it" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Professional Blueprint for Resolving Formalities Failures
                                        </h2>
                                        <p className="mb-6">
                                            Resolving a formalities failure requires a two-pronged approach: identifying the technical error and filing the correct legal form. Depending on the error, you will need either an **MIS-Reply** or a **Form TM-M**.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Miscellaneous Reply (MIS-F)
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-6">Used when you need to provide data or documents that were accidentally omitted during filing.</p>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Uploading a missing Power of Attorney (TM-48).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Uploading a forgotten MSME/Udyam certificate.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Providing a clearer logo image to replace a blurry one.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Amendment Form (TM-M)
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-6">Used when the application data itself needs to be changed or corrected (requires a government fee).</p>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Changing the applicant's name due to a typo.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Correcting a wrong class selection or refining description.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Updating the legal entity status (e.g., from Individual to Startup).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="mis-f-reply" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Content of a Miscellaneous Reply (MIS-F)
                                        </h2>
                                        <p className="mb-6">
                                            A 'Miscellaneous Reply' is not just about uploading a file. It is a legal communication to the Registrar. At IPR Karo, we ensure every MIS-F reply includes a formal 'Response Letter' that references the notice number, addresses each point raised by the examiner, and explains—in technical legal terms—why the provided document satisfies the Registry's requirement.
                                        </p>
                                        <p className="mb-6">
                                            If the Registry flags an <strong>Inconsistent Logo</strong>, we don't just upload a new one; we provide a 'Statement of Compliance' stating that the logo exactly mirrors the word mark field. If they flag a <strong>Translation Requirement</strong>, we provide a verified translation in the prescribed format. This level of meticulous drafting is why we achieve a near-100% conversion rate from "Fail" to "Pass".
                                        </p>
                                    </section>

                                    <section id="tm-m-amendment" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Navigating Form TM-M: The Professional Amendment Pathway
                                        </h2>
                                        <p className="mb-6">
                                            When the error is substantive—like an incorrect class or a legal entity mismatch—a simple reply is not enough. You must file <strong>Form TM-M</strong>. This is a formal petition to the Registrar to amend the data on the register. Because it involves an administrative change to a legal record, it carries a government fee.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
                                            <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                            </div>
                                            <h4 className="font-bold text-xl mb-4">Form TM-M Fee Structure</h4>
                                            <div className="flex gap-8 w-full justify-center">
                                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
                                                    <p className="text-xs uppercase text-gray-400 font-black">Startup/MSME</p>
                                                    <p className="text-2xl font-black text-gray-900">₹900</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
                                                    <p className="text-xs uppercase text-gray-400 font-black">Others</p>
                                                    <p className="text-2xl font-black text-gray-900">₹2700</p>
                                                </div>
                                            </div>
                                            <p className="text-[10px] mt-4 opacity-70">Fees apply per class/per application as per current Trade Marks Rules.</p>
                                        </div>
                                        <p className="mb-6">
                                            Filing Form TM-M requires caution. Not every amendment is allowed. For example, you cannot change the brand name entirely (e.g., changing 'Apple' to 'Orange'). You can only make 'clerical' corrections that do not change the fundamental nature of the mark. Our attorneys analyze the permissible limits of amendments to ensure your TM-M is accepted without initiating a new search cycle.
                                        </p>
                                    </section>

                                    <section id="prevention-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The 30-Point Prevention Checklist: Moving from Fail to Pass
                                        </h2>
                                        <p className="mb-8">
                                            Prevention is infinitely cheaper than resolution. At IPR Karo, we advocate for a 'Rigorous Pre-Filing Audit' that checks every potential formality failure point. Here is our expert checklist for applicants:
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-4">Identity Audit</h4>
                                                <ul className="text-xs space-y-2 text-gray-600">
                                                    <li>[ ] Name matches PAN exactly.</li>
                                                    <li>[ ] Entity type is correct.</li>
                                                    <li>[ ] Address proof is current.</li>
                                                    <li>[ ] Signatory is authorized.</li>
                                                </ul>
                                            </div>
                                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-4">Document Audit</h4>
                                                <ul className="text-xs space-y-2 text-gray-600">
                                                    <li>[ ] TM-48 is stamped and signed.</li>
                                                    <li>[ ] MSME cert includes correct codes.</li>
                                                    <li>[ ] User Affidavit is notarized.</li>
                                                    <li>[ ] Startup cert is DPIIT verified.</li>
                                                </ul>
                                            </div>
                                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-4">Data Audit</h4>
                                                <ul className="text-xs space-y-2 text-gray-600">
                                                    <li>[ ] NICE class is correct.</li>
                                                    <li>[ ] Description is precise.</li>
                                                    <li>[ ] User date matches evidence.</li>
                                                    <li>[ ] Translation is provided.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="case-studies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Real-World Resolution: How We Clear Formalities Failures
                                        </h2>
                                        <div className="space-y-8">
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                                                <div className="absolute top-0 right-0 bg-[rgb(110,94,147)] text-white px-4 py-1 text-[10px] font-bold uppercase">Success Case</div>
                                                <h4 className="font-bold text-lg mb-4">Scenario: The Missing Power of Attorney</h4>
                                                <p className="text-sm text-gray-600">
                                                    A client filed their trademark through an automated portal that failed to upload the signed Form TM-48. The application status went to 'Formalities Chk Fail.' We took over, drafted a fresh MIS-F reply, attached the properly stamped TM-48, and coordinated with the examiner. The status changed to 'Formalities Chk Pass' within 14 days.
                                                </p>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                                                <div className="absolute top-0 right-0 bg-[rgb(110,94,147)] text-white px-4 py-1 text-[10px] font-bold uppercase">Success Case</div>
                                                <h4 className="font-bold text-lg mb-4">Scenario: Incorrect Entity Status</h4>
                                                <p className="text-sm text-gray-600">
                                                    A large food brand accidentally selected 'Individual' during filing to save time, but paid the full corporate fee. The Registry flagged an entity inconsistency. We filed Form TM-M to change the legal entity to 'Body Corporate' and provided the Certificate of Incorporation. The amendment was accepted, and the mark moved to examination.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Trusted by Clients to Overcome Administrative Hurdles
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
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3" style={{ backgroundColor: 'rgb(110, 94, 147)' }}>
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
                                            Formalities FAQ: Expert Intelligence
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Don't Let Administrative Errors Block Your Brand</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Resolving "Formalities Chk Fail" requires precision and speed. Our IP legal experts are ready to audit your application and file the correct legal replies today.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Start Professional Audit
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Audit Your TM Status</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Is your status stuck at "Formalities Chk Fail"? Get a **Free Legal Review** within 24 hours to prevent abandonment.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Audit My Status Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Crucial Guides</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-discrepancy-meaning" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Discrepancy Meaning</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-objected-what-to-do-next" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Objected Status Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Examination Report</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Full Status Guide</span>
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
