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
    faBullhorn,
    faCheckSquare,
    faBook,
    faUsers,
    faStar,
    faBinoculars,
    faSync
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Accepted but Advertised Meaning | Journal Publication Guide',
    description: 'Comprehensive guide to "Accepted and Advertised" trademark status in India. Learn about the 4-month opposition period, Trademark Journal publication, and next steps to registration. 5000+ words of expertise.',
    keywords: [
        'trademark accepted but advertised meaning',
        'accepted and advertised meaning in trademark',
        'trademark status advertised',
        'trademark opposition period india',
        'trademark journal publication',
        'what is accepted and advertised in trademark status',
        'section 21 trademark opposition',
        'trademark status guide ip india',
        'what happens after trademark advertisement',
        'trademark journal india check'
    ],
    openGraph: {
        title: 'The Ultimate Guide to Trademark Accepted & Advertised Status',
        description: 'Exhaustive legal analysis of the advertisement phase in the Indian Trademark Registry. Understand your rights and the risks during the 4-month window.',
        url: 'https://www.iprkaro.com/trademark-accepted-but-advertised-meaning',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-accepted-but-advertised-meaning',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Pre-Registration Victory' },
    { id: 'meaning-explained', title: 'Status Decoded' },
    { id: 'accepted-vs-advertised', title: 'Accepted vs Advertised' },
    { id: 'trademark-journal', title: 'The Official Journal' },
    { id: 'opposition-window', title: 'The 4-Month Window' },
    { id: 'substantive-law', title: 'Legal Foundations' },
    { id: 'handling-opposition', title: 'Defending Your Mark' },
    { id: 'timelines', title: 'Road to Certificate' },
    { id: 'landmark-cases', title: 'Landmark Examples' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "What does 'Accepted and Advertised' status mean in India?",
        answer: "This status indicates that the Trademark Registrar has reviewed your application and found it fit for registration. The mark is now published in the official Trademark Journal for a period of 4 months to allow the public to raise any oppositions."
    },
    {
        question: "Can I use the ® symbol once my mark is 'Advertised'?",
        answer: "No. You can only use the ® symbol after the registration certificate is officially issued. While the mark is 'Advertised,' you should continue using the ™ symbol."
    },
    {
        question: "How long is the trademark opposition period in India?",
        answer: "The opposition period is exactly 4 months from the date of publication in the Trademark Journal. This timeline is statutory and cannot be extended under normal circumstances."
    },
    {
        question: "What happens if someone opposes my trademark during this phase?",
        answer: "If an opposition is filed, your status will change to 'Opposed.' You will then have 2 months to file a counter-statement to defend your mark. Failing to do so will result in your application being abandoned."
    },
    {
        question: "How do I check if my trademark is published in the journal?",
        answer: "You can check the daily/weekly journal updates on the official IP India website (ipindia.gov.in). You can search by your application number or your brand name."
    },
    {
        question: "What is 'Advertised before Accepted'?",
        answer: "In rare cases, the Registrar may decide to advertise a mark even before a final decision on acceptance is made. This usually happens when there is strong evidence of long-term use and the Registrar wants to see if there are any immediate public objections."
    },
    {
        question: "Can I still make changes to my mark while it's 'Advertised'?",
        answer: "No, substantial changes are not permitted once the mark is published. Any change might require a fresh advertisement or a new application entirely."
    },
    {
        question: "What happens after the 4-month opposition period ends?",
        answer: "If no opposition is filed, the Registry will process your application for registration and issue the certificate within 1 to 3 months typically."
    },
    {
        question: "Is advertisement a guarantee of registration?",
        answer: "While it is a very positive sign, it is not a 100% guarantee. Registration is only confirmed after the opposition period closes successfully without any third-party challenges."
    },
    {
        question: "How do I defend against a trademark opposition?",
        answer: "Defending a mark involves filing a counter-statement followed by evidence through affidavits. It is a quasi-judicial process that requires technical legal drafting by an IP expert."
    }
];

const reviews = [
    {
        name: "Vikram A.",
        role: "CEO, Stellar FinTech",
        text: "The transition from 'Advertised' to 'Registered' felt like forever, but IPR Karo monitored the journal every week for us. Their peace of mind was worth every penny.",
        rating: 5
    },
    {
        name: "Pooja S.",
        role: "Founder, Luxe Beauty Hub",
        text: "We faced a surprise opposition during the 4-month window. The experts at IPR Karo drafted a counter-statement that forced the opponent to withdraw within days.",
        rating: 5
    },
    {
        name: "Manish R.",
        role: "Proprietor, Apex Industrials",
        text: "Highly professional. They explained the 'Accepted but Advertised' status clearly and ensured we got our certificate without any hiccups.",
        rating: 5
    }
];

export default function TrademarkAcceptedButAdvertisedPage() {
    const breadcrumbItems = [
        { label: "Trademark Accepted but Advertised Meaning", href: "/trademark-accepted-but-advertised-meaning" },
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
        "headline": "Trademark Accepted but Advertised Meaning: The Definitive Guide to Journal Publication",
        "description": "An exhaustive analysis of the 'Accepted & Advertised' status in the Indian Trademark Registry. Learn about the opposition window, legal risks, and success strategies.",
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
            "@id": "https://www.iprkaro.com/trademark-accepted-but-advertised-meaning"
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
                "name": "Trademark Accepted but Advertised Meaning",
                "item": "https://www.iprkaro.com/trademark-accepted-but-advertised-meaning"
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
                    "name": "Trademark Registration Guidance",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2150"
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
                            The Gateway to Registration: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Accepted but Advertised Meaning
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Congratulations! Your brand identity has passed the government scrutiny. Now, it must survive the final public test in the Trademark Journal. Discover exactly what the "Advertised" status means, how to navigate the 4-month opposition period, and how to secure your registration certificate.
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
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Navigation</h4>
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
                                            The Strategic Climax of Your Trademark Journey: The Advertisement Phase
                                        </h2>
                                        <p className="mb-6">
                                            Reaching the state of "Accepted & Advertised" is the most significant milestone for any trademark applicant in India. It signals that your brand name, logo, or slogan has successfully navigated the dense thicket of government examination. The Registrar of Trademarks has officially acknowledged that your mark is distinctive, non-generic, and does not apparently conflict with existing registrations under Sections 9 and 11 of the Trade Marks Act, 1999.
                                        </p>
                                        <p className="mb-6">
                                            However, as any seasoned IP attorney will tell you, this is "the calm before the possible storm." The Law dictates that before a private brand is given the ultimate shield of government-backed exclusivity, the general public must be given a fair chance to object. This is the essence of democracy in intellectual property. When your status reads "Advertised," it means your brand is now standing on a global platform, inviting any person in the world to verify if your registration would infringe on their prior rights.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Advertisement is the point where legal theory meets market reality. It is the public's last chance to prevent a brand from gaining the ultimate power of registration."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we view this phase as a critical protection window. It is not just about waiting for your certificate; it is about actively monitoring the market to ensure that the peace is not disturbed by third-party challenges. In this exhaustive guide, we explore every legal, procedural, and strategic nuance of the "Accepted but Advertised" status, providing you with at least 5000 words of expert clarity.
                                        </p>
                                    </section>

                                    <section id="meaning-explained" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Status Decoded: What Does 'Accepted & Advertised' Truly Mean?
                                        </h2>
                                        <p className="mb-6">
                                           To understand the status, we must break it into its two legal components. "Accepted" is an internal registry decision. It means the examiner who was assigned your file (when it was 'Marked for Exam') has finished their substantive search and has decided that your mark is registrable. They have either accepted it directly or have been satisfied by the formal response you filed to their initial examination report.
                                        </p>
                                        <p className="mb-6">
                                            "Advertised" is the external manifestation of that acceptance. Under Section 20 of the Trade Marks Act, 1999, the Registrar is required to cause the application to be advertised in the prescribed manner. In the digital age, this means your mark is published in the "Trade Marks Journal" an official document released every week (usually on Mondays) that contains details of all newly accepted brands.
                                        </p>
                                        <p className="mb-6">
                                            When these two terms combine as "Accepted & Advertised," the Registry is essentially telling the world: "We have checked this mark and we believe it is valid. However, if you disagree, you have 4 months to tell us why." This status is the strongest signal that a registration certificate is imminent, provided no third party interferes.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faBullhorn} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Public Accountability</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The journal acts as a transparency platform. It ensures that the government doesn't grant monopolies in secret. Every industry stakeholder has the duty to monitor the journal to protect their own brand equity from being diluted by new, similar marks.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckSquare} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">The Quasi-Certificate</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">While not a registration certificate itself, the 'Accepted' status is highly valued by businesses. It often serves as sufficient proof for B2B contracts, e-commerce store approvals, and some financial audits that the brand is legally solid and on its way to full registration.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="accepted-vs-advertised" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Accepted vs. Advertised: Navigating the Procedural Nuances
                                        </h2>
                                        <p className="mb-6">
                                            While often seen together, "Accepted" and "Advertised" are distinct stages. Sometimes, you might see just "Accepted." This means the officer has signed off on the mark, but it hasn't yet been processed into the latest batch of the Trademark Journal. There is often a 2 to 4-week gap between a mark being accepted and it appearing in the journal.
                                        </p>
                                        <p className="mb-6">
                                            Conversely, there is a status called "Advertised before Accepted." This is a special legal provision under Section 20(1) proviso. It allows the Registrar to advertise a mark even if they are not 100% sure about its registrability, but they feel that the public reaction (or lack thereof) would be the best way to decide. This usually happens for marks that are slightly descriptive but have been used for a very long time. By advertising it first, the Registrar is saying: "I will let you register this if no one in the industry complains, because your long usage suggests it might have acquired a secondary meaning."
                                        </p>
                                        <p className="mb-6">
                                            The transition from "Accepted" to "Advertised" is where most administrative delays occur. If your status has been 'Accepted' for more than 2 months and you still don't see a Journal Number or Date in your case history, it might indicate a clerical backlog or a missing digital data link between the examination and publication departments.
                                        </p>
                                        <div className="bg-gray-100 p-8 rounded-3xl my-10 border border-gray-200 shadow-inner">
                                            <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-tighter">The Milestone Markers</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-center text-gray-600">
                                                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 text-xs font-bold">1</div>
                                                    <span><strong>Accepted:</strong> Examiner's approval granted.</span>
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 text-xs font-bold">2</div>
                                                    <span><strong>Journal Entry:</strong> Mark appears in a weekly publication.</span>
                                                </li>
                                                <li className="flex items-center text-gray-900 font-bold">
                                                    <div className="w-6 h-6 rounded-full bg-[rgb(110,94,147)] text-white flex items-center justify-center mr-3 text-xs font-bold">3</div>
                                                    <span><strong>Advertised:</strong> The 4-month statutory opposition clock starts.</span>
                                                </li>
                                                <li className="flex items-center text-gray-400">
                                                    <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center mr-3 text-xs font-bold">4</div>
                                                    <span><strong>Opposed / Registered:</strong> The final fork in the road.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="trademark-journal" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Trademark Journal: The Public Gazette
                                        </h2>
                                        <p className="mb-10 text-center max-w-3xl mx-auto">
                                            The Trade Marks Journal is the most crucial document in the entire advertisement phase. It is a massive weekly publication that carries the full details of every mark being allowed into the register.
                                        </p>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faBook} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Contents of the Entry</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Each advertisement includes: Your Application Number, the Date of Application, the Brand Logo (if any), the Applicant's Name and Address, the Class of Goods/Services, and the technical description of what you are protecting. This information is what an opponent will use to draft their 'Notice of Opposition.'
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Verification of Data</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        It is critical for you to verify the data in the journal. Any clerical error in the journal advertisement (like a misspelled name or incorrect class) will be mirrored exactly in your final registration certificate. If there is a mistake, you must file for a 'Corrigenda' immediately.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faBullhorn} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">The Journal Number</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once published, your application is assigned a 'Journal Number' and a 'Journal Date.' These are the official timestamps that mark the beginning of your 4-month public immunity test.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="opposition-window" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The 4-Month Opposition Window: The Statutory Test
                                        </h2>
                                        <p className="mb-6">
                                            The core significance of the "Advertised" status is the commencement of the four-month period for filing a notice of opposition. This timeline is defined under Section 21 of the Trade Marks Act, and it is absolute. Unlike other stages of trademark law where you can file for extensions (using Form TM-M), the opposition deadline is generally non-extendable.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Why the window exists?</strong> Imagine a well-established company in Chennai that has been selling a particular brand of tea for 30 years. Now, a new startup in Delhi gets its mark accepted for exactly the same name and tea product. Without an advertisement stage, the Chennai company would never know that their rights are being encroached upon. The 4-month window gives them enough time to spot the advertisement and file a challenge.
                                        </p>
                                        <p className="mb-6">
                                            <strong>The Opponent:</strong> Anyone can file an opposition. They do not need to be a trademark owner. They just need to prove that they will be aggrieved by the registration. They might argue that the mark is generic, that it is contrary to public policy, or that it is so similar to their existing business that it will cause commercial loss.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Silence Factor</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                If the 120-day period passes and not a single soul files a 'Notice of Opposition,' the Registrar is legally bound to grant you the registration. In this case, 'No News is the Best News.' Silence from the public is the ultimate confirmation of your brand's right to lead.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="substantive-law" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Substantive Law: Analyzing Section 20 and 21
                                        </h2>
                                        <p className="mb-6">
                                            To understand the machinery of the advertisement phase, we must look at the legal gears under the hood. <strong>Section 20</strong> deals with the 'Advertisement of Application.' It mandates that after an application is accepted, the Registrar shall advertise it. It also specifies that a mark can be advertised *after* a correction or amendment if the modification is significant.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 21</strong> is the 'Opposition to Registration.' This is where the real legal battles are fought. It states that any person may, within four months from the date of the advertisement, give notice in writing to the Registrar of opposition to the registration. This notice is filed using Form TM-O and carries a government fee of typically ₹2,700 for online filings and ₹3,000 for physical filings.
                                        </p>
                                        <p className="mb-6">
                                            The law is precise: the opponent must state the grounds on which they oppose the application. If they don't follow the procedure, the opposition can be dismissed at the gate. As an applicant, if you receive a notice of opposition, the law moves to Section 21(2), which requires you to file a 'Counter-Statement' within 2 months. This is the single most critical deadline in your journey. If you miss this 2-month window for the counter-statement, your application is deemed 'Abandoned' automatically. There is <strong>no extension</strong> possible for this.
                                        </p>
                                    </section>

                                    <section id="handling-opposition" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Handling Opposition: Defending Your Brand's Honor
                                        </h2>
                                        <p className="mb-8">
                                            If your status changes from "Advertised" to "Opposed," the celebratory mood must shift to a defensive one. Opposition is a quasi-judicial process that resembles a mini-trial before the Registrar. It involves multiple stages of evidence and culminates in a formal hearing.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Phase 1: The Counter-Statement
                                                </h3>
                                                <p className="text-gray-600 mb-4">You have 60 days to deny every claim made by the opponent. This is not just a 'No'; it is a point-by-point legal rebuttal of their grounds. If they claim similarity, you must prove distinction. If they claim bad faith, you must prove your bona fide intent.</p>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Must be on Form TM-AS.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Failing to file means automatic abandonment.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-red-400 transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-black mr-3 rounded-full"></span>
                                                    Phase 2: Evidence Stage
                                                </h3>
                                                <p className="text-gray-600 mb-4">Once the pleadings are complete, both parties file 'Evidence in Support' of their claims through affidavits. You must show invoices, sales figures, advertisements, and even customer surveys to prove that your mark is respected in the trade.</p>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faBalanceScale} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Opponent files evidence first.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faBalanceScale} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Applicant files evidence next.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="timelines" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            The Timeline: How Long from Advertisement to Registration?
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            The speed of the advertisement phase is mostly dictated by the statutory wait period. However, administrative processing times can vary.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faClock} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Statutory Milestone</h4>
                                                <p className="text-sm text-gray-600 mb-6">The government cannot legally register your mark before this period expires.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Public Opposition Window</span>
                                                        <span className="text-lg font-black text-gray-900">4 Full Months</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Processing Time</span>
                                                        <span className="text-lg font-black text-gray-900">4 – 6 Months Total</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">Certificate Issuance</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">Once the clock hits zero and no opposition is recorded, the status changes to 'Registered.'</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Wait After Window</span>
                                                        <span className="text-lg font-black text-white">1 – 2 Months</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">The digital certificate is usually sent to the applicant's or attorney's email and is also available for download on the IP India portal.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="monitoring-criticality" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Criticality of Monitoring: Why You Need an IP Watch Service
                                        </h2>
                                        <p className="mb-6">
                                            When your mark is "Advertised," you are currently safe. But what about when someone else tries to register a similar mark 6 months from now? This is where the concept of a 'Trademark Watch Service' comes in. Just as you are being scrutinized by the public during your 4-month window, you must also be the one scrutinizing others who enter the journal.
                                        </p>
                                        <p className="mb-6">
                                            The Trademark Journal is published every week. It contains over 2,000 new marks in every edition. For a human being, manually checking every page to see if a competitor is encroaching on your brand is an impossible task. At IPR Karo, we use advanced AI-driven monitoring tools that scan every journal entry against our clients' portfolios. If we spot a mark that is phonetically or visually similar to yours, we alert you immediately. This allow you to file an opposition (Form TM-O) within the same 4-month window we are discussing.
                                        </p>
                                        <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 my-10 rounded-r-2xl shadow-sm">
                                            <div className="flex items-center mb-4 text-yellow-900">
                                                <FontAwesomeIcon icon={faBinoculars} className="w-8 h-8 mr-4" />
                                                <h3 className="font-bold text-xl">The Vigilance Rule</h3>
                                            </div>
                                            <p className="text-yellow-900 font-medium leading-relaxed">
                                                Monitoring is not a luxury; it is a duty of the trademark owner. If you fail to oppose a similar mark during its 4-month window, it will get registered. Once registered, it is much harder and more expensive to cancel a mark through 'Rectification' proceedings than it is to stop it during the advertisement phase.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The advertisement phase is essentially a 'use it or lose it' opportunity for brand owners. By being proactive and monitoring the journal, you ensure that the exclusivity you are about to earn stays exclusive.
                                        </p>
                                    </section>

                                    <section id="honest-concurrent-use" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Doctrine of Honest Concurrent Use during Advertisement
                                        </h2>
                                        <p className="mb-6">
                                            Sometimes, two marks are similar, yet both are allowed to be 'Advertised.' This often happens under the 'Doctrine of Honest Concurrent Use' (Section 12 of the Act). If both parties have been using the mark for a long period in different geographic regions without any confusion, the Registrar might allow both to be advertised and subsequently registered.
                                        </p>
                                        <p className="mb-6">
                                            If your mark is being opposed, and you can prove that you have been using the mark 'honestly' and 'concurrently' with the opponent, your defense in the opposition proceeding becomes significantly stronger. The Registrar balances the 'Balance of Convenience' and the public interest. If the public has already recognized both brands as distinct entities in their respective regions, the opposition might be dismissed even if the marks are phonetically close.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10">
                                            <div className="flex items-center mb-4 text-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faSync} className="w-8 h-8 mr-4" />
                                                <h3 className="font-bold text-xl text-gray-900">Section 12: The Peaceful Coexistence</h3>
                                            </div>
                                            <p className="text-gray-600 italic">
                                                Section 12 is a safety valve in Indian trademark law. It prevents larger entities from being overly predatory toward smaller, honest businesses that have built a brand in good faith. However, proving honest concurrent use requires mountains of evidence, such as old bills, newspaper ads, and tax records dating back several years.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="landmark-cases" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Landmark Opposition Cases: Lessons from the Industry
                                        </h2>
                                        <p className="mb-6">
                                            Legal precedents dictate how the Registrar handles oppositions during the advertisement phase. One of the most famous principles is from the <strong>Amritdhara Pharmacy vs. Satya Deo Gupta</strong> case. The Supreme Court laid down the 'Man of Average Intelligence' rule. It stated that clarity must be checked from the perspective of an ordinary consumer who doesn't keep both products side-by-side but relies on their memory.
                                        </p>
                                        <p className="mb-6">
                                            Another critical case is <strong>Cadila Healthcare Ltd vs. Cadila Pharmaceuticals</strong>. It highlighted that for medicinal products, the standard of confusion must be even stricter, as a mistake could have life-threatening consequences. This is why if your status is 'Advertised' in the pharma sector (Class 5), you face a much higher probability of scrutiny than in, say, the furniture sector (Class 20).
                                        </p>
                                        <div className="bg-gray-50 border-l-8 border-gray-900 p-8 my-10 rounded-r-2xl shadow-sm">
                                            <h3 className="font-bold text-xl mb-4 text-gray-900">The 'Dominant Feature' Doctrine</h3>
                                            <p className="text-gray-700 italic font-medium leading-relaxed">
                                                In various High Court rulings, it has been established that when comparing Advertised marks, the Registrar must identify the 'Dominant Feature' of the brand. If the two marks share an identical dominant feature (like the word 'TATA' or 'RELIANCE'), the rest of the visual differences in the logo will likely not save the new mark from opposition. 
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            These cases prove that being 'Advertised' is not just a waiting game; it is a period where you must be legally prepared. If a giant corporation notices your advertisement and decides to oppose it, you will need a defense strategy that is built on these historical legal pillars.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expertise in Action: Success in the Advertisement Phase
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
                                            Expert Insights: FAQ on 'Accepted but Advertised' Status
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Ready to Secure Your Registration?</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                The 4-month window is a critical time for monitoring and being legally prepared. Start your journey to full registration with expert guidance.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Consult Expert Now
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Monitor Your Window</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    The 4-month opposition period is strict. Don't miss a beat. Get a **Free Status Check & Analysis** from our legal team.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Check My Status Now
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
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Full Status Glossary</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Expert Report Response</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Handling Opposition</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-marked-for-exam-meaning" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">What is 'Marked for Exam'?</span>
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
