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
    faGavel as faLegal,
    faFileInvoice,
    faHistory,
    faUserShield,
    faStar,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How to File Trademark Rectification India | Complete Legal Guide',
    description: 'Master the process of trademark rectification in India. Learn about Section 57, grounds for removal, Form TM-O filing, and legal procedures to correct the trademark register. 5000+ words of expert legal guidance.',
    keywords: [
        'how to file trademark rectification india',
        'trademark rectification procedure',
        'section 57 trademarks act 1999',
        'trademark removal grounds india',
        'form tm-o filing india',
        'trademark register correction',
        'person aggrieved trademark rectification',
        'trademark cancellation process india',
        'trademark non-use removal',
        'intellectual property rectification legal guide'
    ],
    openGraph: {
        title: 'Ultimate Guide to Trademark Rectification in India',
        description: 'Navigate the complexities of correcting the Trademark Register. Detailed guide on grounds, procedures, and legal strategies for successful rectification.',
        url: 'https://www.iprkaro.com/how-to-file-trademark-rectification-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-to-file-trademark-rectification-india',
    },
};

const tocSections = [
    { id: 'introduction-to-rectification', title: 'Introduction' },
    { id: 'legal-framework-section-57', title: 'Legal Framework' },
    { id: 'who-is-aggrieved-person', title: 'Who Can File?' },
    { id: 'grounds-for-rectification', title: 'Grounds for Removal' },
    { id: 'filing-procedure-steps', title: 'Filing Procedure' },
    { id: 'required-documentation', title: 'Document Checklist' },
    { id: 'evidence-and-hearings', title: 'Hearings & Trial' },
    { id: 'rectification-vs-cancellation', title: 'Comparison Guide' },
    { id: 'fees-and-timelines', title: 'Costs & Duration' },
    { id: 'expert-strategies-success', title: 'Success Strategies' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What exactly is trademark rectification in India?",
        answer: "Trademark rectification is a legal process initiated to correct an error or omit an entry that has been wrongly made in the Trademark Register. Under Section 57 of the Trade Marks Act 1999, any person aggrieved can apply to have a mark removed, varied, or cancelled if it was registered without sufficient cause or is wrongly remaining on the register."
    },
    {
        question: "Who is considered a 'person aggrieved' for filing rectification?",
        answer: "A person aggrieved is someone whose interests are substantially affected by the presence of a trademark on the register. This includes competitors who are being blocked by the mark, persons facing infringement suits from the registrant, or any entity that can prove that the mark interferes with their legitimate business operations."
    },
    {
        question: "What are the common grounds for seeking trademark removal?",
        answer: "The most common grounds include non-use of the trademark for five years and three months, registration obtained through fraud or misrepresentation, the mark being deceptive or similar to an existing brand, and the mark losing its distinctiveness over time. Omissions of essential conditions or limitations are also valid grounds."
    },
    {
        question: "Which form is used for filing a rectification application?",
        answer: "The application for rectification or removal of a trademark is filed using Form TM-O. This form must be accompanied by a comprehensive Statement of Case and the prescribed government fee. Depending on the jurisdiction, it is filed at the appropriate Trademark Registry where the original registration was granted."
    },
    {
        question: "How long does the trademark rectification process usually take?",
        answer: "The timeline for rectification varies significantly based on the complexity of the case and the opposition from the registrant. Generally, it takes between 18 to 36 months to reach a final decision after accounting for counter-statements, evidence filing by both parties, and final hearings before the Registrar."
    },
    {
        question: "Is there a specific time limit for non-use removal?",
        answer: "Yes, under Section 47, a trademark can be removed if it has not been used for a continuous period of five years plus three months from the date of the trademark being actually entered on the register. If no 'bona fide' use is proven during this window, the mark is liable for removal for non-use."
    },
    {
        question: "Can I file for rectification if a mark was registered in bad faith?",
        answer: "Absolutely. Bad faith registration is one of the strongest grounds for rectification. If you can prove that the registrant applied for the mark with the intent to block your business or to profit from your reputation without legitimate intent to use the mark, the Registry can cancel the registration."
    },
    {
        question: "What is the difference between trademark opposition and rectification?",
        answer: "Opposition occurs before the trademark is registered, specifically during the four month window after it is advertised in the Trademark Journal. Rectification, on the other hand, is filed after the trademark has already been registered and is officially entered in the register."
    },
    {
        question: "Are the Trademark Registry's decisions on rectification final?",
        answer: "Decisions made by the Registrar can be appealed. Previously, appeals were handled by the Intellectual Property Appellate Board (IPAB), but following its abolition, these matters are now handled by the respective High Courts of India under their Commercial Divisions."
    },
    {
        question: "Does one need a lawyer or trademark agent for rectification?",
        answer: "While the law allows individuals to file, trademark rectification is a highly technical legal proceeding involving complex evidence and arguments. It is strongly advised to engage an experienced IP attorney or trademark agent to draft the Statement of Case and handle the hearings."
    }
];

const reviews = [
    {
        name: "Adv. Rajesh K.",
        role: "Corporate Counsel",
        text: "The depth of understanding of the Section 57 proceedings demonstrated by the team was exceptional. We successfully removed a blocking mark that was hindering our client\'s expansion.",
        rating: 5
    },
    {
        name: "Sonia Mehta",
        role: "Director, Vibe Brands",
        text: "Professional, transparent, and incredibly knowledgeable. They handled our non-use rectification case with precision. Highly recommend for complex IP disputes.",
        rating: 5
    },
    {
        name: "Kartik S.",
        role: "Founder, TechLaunch",
        text: "Getting a deceptive mark cancelled seemed impossible until we consulted IPR Karo. Their strategic approach to the evidence phase was the game changer.",
        rating: 5
    }
];

export default function TrademarkRectificationIndiaPage() {
    const breadcrumbItems = [
        { label: "Trademark Rectification India", href: "/how-to-file-trademark-rectification-india" },
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
        "headline": "How to File Trademark Rectification in India: The Definitive Legal Guide",
        "description": "An exhaustive analysis of trademark rectification under the Trade Marks Act 1999. Covers grounds, procedure, Form TM-O, and legal strategies for correcting the Trademark Register.",
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
                "name": "Trademark Rectification India",
                "item": "https://www.iprkaro.com/how-to-file-trademark-rectification-india"
            }
        ]
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Rectification Services India",
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
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            Purge the Register: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Expert Trademark Rectification in India
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Is a wrongful or deceptive trademark blocking your path? Execute the legal procedure of Trademark Rectification with India\'s elite IP attorneys. From non-use removal to complex cancellation suits under Section 57, we ensure your brand\'s path is cleared with professional precision.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Start Your Rectification Fix
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

                                    <section id="introduction-to-rectification" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Understanding Trademark Rectification: Keeping the Register Pure
                                        </h2>
                                        <p className="mb-6">
                                            The Trademark Register is intended to be a source of truth for the public and the business community regarding brand ownership. However, mistakes occur. Sometimes trademarks are registered that should never have been allowed. In other cases, a once valid trademark becomes a "deadwood" entry because the owner has stopped using it or has allowed it to become generic. This is where the concept of <strong>Trademark Rectification</strong> becomes essential.
                                        </p>
                                        <p className="mb-6">
                                            In India, rectification is a statutory power granted to the Registrar of Trademarks and the High Courts to ensure that the register is "pure." It allows for the removal, cancellation, or variation of an existing trademark registration. Whether you are a business owner whose expansion is being blocked by an abandoned brand, or you have discovered a mark that was registered through fraudulent means, filing for rectification is your primary legal remedy.
                                        </p>
                                        <div className="bg-purple-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-purple-900 italic font-medium">
                                                "The purity of the register is of paramount importance to the public interest. Rectification is not just a battle between two parties; it is a mechanism to ensure that the public is not deceived by wrongful or obsolete entries."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The legal complexity of these proceedings cannot be overstated. Unlike a simple opposition, rectification deals with a "vested right," which is the status of a registered trademark. Overturning such a right requires a high threshold of evidence and a detailed understanding of the Trade Marks Act 1999. In this guide, we will break down every technical aspect of how to file trademark rectification in India, focusing on the latest legal interpretations and practical procedural steps.
                                        </p>
                                        <p className="mb-6">
                                            Why does this matter for your business? Imagine you have spent millions on a new brand identity, only to find that a small, inactive firm registered a similar name ten years ago and never used it. That "ghost" registration can stop you from securing your own trademark. Rectification allows you to challenge such defunct registrations and claim the space your brand deserves in the market.
                                        </p>
                                    </section>

                                    <section id="legal-framework-section-57" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Legal Foundation: Section 47 and Section 57 of the Act
                                        </h2>
                                        <p className="mb-8">
                                            To understand <strong>how to file trademark rectification India</strong>, one must first master the two pillars of the Trade Marks Act 1999 that govern these actions. These sections provide the jurisdiction and the specific triggers for removing a mark from the register.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHistory} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Section 47: Non-Use Removal</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This section protects the market from "trademark squatting." It allows for the removal of a mark if it was registered without a bona fide intent to use it, or if it has not been used for a continuous period of five years and three months. This is the most common path for removing inactive marks that block new registrations.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Section 57: Wrongful Entries</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is a broader power that covers marks registered "without sufficient cause." It applies when a mark was registered despite violating public policy, being deceptive, or if there were procedural errors during the registration phase. It also covers the "variation" of entries to fix mistakes in the registered details.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            It is important to note that the Registrar has "suo motu" powers under Section 57(4). This means that if the Registrar discovers an error on their own motion, they can initiate a hearing to correct or cancel the mark after giving notice to the concerned parties. However, in 99% of cases, rectification is a "contested" proceeding initiated by an external applicant.
                                        </p>
                                        <p className="mb-6">
                                            The jurisdiction for these applications usually lies with the Registrar of Trademarks at the respective zonal office (Mumbai, Delhi, Kolkata, Chennai, or Ahmedabad). However, if an infringement suit is already pending in a High Court, the defendant can seek "stay of proceedings" and move the rectification to the High Court itself, demonstrating how closely rectification and litigation are intertwined.
                                        </p>
                                    </section>

                                    <section id="who-is-aggrieved-person" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Locus Standi: Who is a \'Person Aggrieved\'?
                                        </h2>
                                        <p className="mb-6">
                                            You cannot simply file to cancel a random trademark. To have the legal standing (Locus Standi) to file for rectification, you must qualify as a <strong>"Person Aggrieved."</strong> Indian courts have interpreted this term very liberally, but it still requires a clear demonstration of interest.
                                        </p>
                                        <p className="mb-6">
                                            Generally, you are a person aggrieved if:
                                        </p>
                                        <ul className="list-none space-y-4 mb-10 pl-0">
                                            <li className="flex items-start bg-gray-50 p-4 rounded-xl border-l-4 border-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                                <span><strong>Direct Competitors:</strong> You operate in the same industry and the existing mark prevents you from registering your own brand name.</span>
                                            </li>
                                            <li className="flex items-start bg-gray-50 p-4 rounded-xl border-l-4 border-[rgb(110,94,147)]">
                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                                <span><strong>Target of Litigation:</strong> The owner of the trademark has sent you a cease-and-desist notice or filed an infringement suit against you.</span>
                                            </li>
                                            <li className="flex items-start bg-gray-50 p-4 rounded-xl border-l-4 border-l-gray-400">
                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                                <span><strong>Prior Users:</strong> You have been using the brand name longer than the registered owner, and their registration is hurting your established business.</span>
                                            </li>
                                            <li className="flex items-start bg-gray-50 p-4 rounded-xl border-l-4 border-l-gray-400">
                                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                                <span><strong>Market Blockers:</strong> You can prove that the mark has become "generic" (like "Xerox" for photocopying or "Escalator") and its exclusive registration is hindering all players in the market.</span>
                                            </li>
                                        </ul>
                                        <p className="mb-6">
                                            The Supreme Court of India, in various rulings, has clarified that the "aggrieved person" standard is meant to prevent the register from being clogged with invalid entries. If the presence of a mark on the register limits your commercial opportunities or exposes you to legal risks, you have the right to challenge it.
                                        </p>
                                        <p className="mb-6">
                                            When we file a rectification at IPR Karo, the first part of our **Statement of Case** is dedicated to proving your status as an aggrieved person. We provide evidence of your business activity, your filings, or the legal conflicts you are facing to ensure your application is never dismissed on technical grounds of standing.
                                        </p>
                                    </section>

                                    <section id="grounds-for-rectification" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                           Universal Grounds for Removal and Cancellation
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faHistory} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Ground 1: Continuous Non-Use (Section 47)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        This is the most potent weapon in trademark rectification. In India, a trademark must be used. If a mark resides on the register for more than 5 years and 3 months without any "bona fide" commercial use, it becomes vulnerable. Use must be real and substantial, not just a token advertisement or a single invoice. We conduct deep investigative searches into the registrant\'s market presence to prove lack of use.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Ground 2: Fraud and Bad Faith Registration</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        If a trademark was obtained by misrepresenting facts to the Registrar, it can be cancelled at any time. For example, if an applicant claimed they had been using the mark since 1990 but the company was only incorporated in 2005, this is a fraudulent claim. Bad faith also includes "pirated" trademarks where an entity registers a famous international brand in India before its original owner can arrive.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faUserShield} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Ground 3: Loss of Distinctiveness (Generification)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        A trademark\'s job is to identify a single source of goods. If a brand name becomes the common name for the product itself (due to the owner\'s failure to police the mark), it loses its legal protection. For example, brands like "Thermos" or "Aspirin" have faced these challenges globally. If your industry is being monopolized by a term that everyone now uses genericately, rectification is the answer.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faBalanceScale} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Ground 4: Contravention of Section 9 and 11</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Sometimes a mark is registered that should have been rejected under the absolute or relative grounds. This happens due to errors in the examination process. If a mark is too descriptive (Section 9) or too similar to a prior existing mark (Section 11), a rectification application can argue that the original registration was granted "without sufficient cause."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="filing-procedure-steps" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                           A Step-by-Step Blueprint for Filing
                                        </h2>
                                        <p className="mb-6">
                                            The procedure for <strong>how to file trademark rectification India</strong> is a rigorous administrative process that requires adherence to the Trademark Rules 2017. Here is the chronological sequence of actions:
                                        </p>
                                        <div className="space-y-6">
                                            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mr-3 text-sm">01</span>
                                                    Pre-Filing Investigation
                                                </h4>
                                                <p className="text-sm text-gray-600">Before filing, you must conduct a thorough investigation to confirm the mark\'s status and evidence of non-use. This includes market surveys, checking online directories, and physical store visits. This data forms the bedrock of your Statement of Case.</p>
                                            </div>
                                            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mr-3 text-sm">02</span>
                                                    Drafting the Form TM-O
                                                </h4>
                                                <p className="text-sm text-gray-600">Form TM-O is the standard multi-purpose form for oppositions and rectifications. You must specify the sections under which you are moving (e.g., Section 47 or 57) and precisely define the relief sought (cancellation, removal, or variation).</p>
                                            </div>
                                            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mr-3 text-sm">03</span>
                                                    Submitting the Statement of Case
                                                    </h4>
                                                <p className="text-sm text-gray-600">This is a detailed legal pleading that outlines the facts, the law, and the arguments. It must clearly articulate your status as an aggrieved person and the specific grounds for rectification. It is effectively your "legal brief" for the case.</p>
                                            </div>
                                            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-8 h-8 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mr-3 text-sm">04</span>
                                                    Official Service and Counter-Statement
                                                </h4>
                                                <p className="text-sm text-gray-600">Once filed, the Registrar serves the application on the registered proprietor. The proprietor then has three months to file a "Counter-Statement" defending their mark. If they fail to file this, the mark can be cancelled for lack of defense.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="required-documentation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                           Document Checklist: Winning with Hard Proof
                                        </h2>
                                        <p className="mb-8">
                                            In rectification proceedings, assertions are meaningless without documentation. The burden of proof initially lies on the applicant to show why the mark should be removed.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Essential Filings
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span><strong>Form TM-O:</strong> The main application form for rectification.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span><strong>Statement of Case:</strong> Detailed legal grounds and factual narrative.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span><strong>Power of Attorney:</strong> To authorize your IP lawyer or agent.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span><strong>User Affidavit:</strong> Sworn statement of facts supported by exhibits.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Supporting Evidence
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span><strong>Investigative Reports:</strong> Proving lack of market presence or non-use.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span><strong>Prior Use Proof:</strong> Your invoices, ads, and catalogs predating the target mark.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span><strong>Corporate Data:</strong> Registration certificates showing chronological conflicts.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span><span>Legal Notices: Any correspondence between parties that proves conflict.</span></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="evidence-and-hearings" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Evidence Stage and Final Hearings
                                        </h2>
                                        <p className="mb-6">
                                            Once the initial pleadings (Form TM-O and Counter-Statement) are completed, the case enters the "Evidence Stage." This is where the actual trial takes place through written affidavits under Rules 45, 46, and 47 of the Trademark Rules.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Rule 45 Evidence:</strong> The applicant files evidence in support of their application. This is your chance to provide all the market data, investigative reports, and prior use documents you have gathered. If the applicant fails to file this evidence or a letter of reliance, the application is deemed abandoned.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Rule 46 Evidence:</strong> The registered proprietor (the registrant) then files their evidence to prove that the registration is valid and that they have been using the mark bona fide. This usually involves submitting massive bundles of invoices, sales figures, and marketing spends.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Rule 47 Evidence:</strong> The applicant gets a final chance to file "rebuttal evidence" strictly answering the points raised in the proprietor\'s evidence.
                                        </p>
                                        <p className="mb-6">
                                            After the evidence stage, the matter is listed for a <strong>Hearing</strong>. During the hearing, senior IP attorneys from both sides present oral arguments before the Registrar of Trademarks. The Registrar then issues a detailed written order. If the Registrar decides in your favor, the trademark is either removed from the register or its details are varied as requested.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The High Court Transition</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                Post-2021, with the abolition of the IPAB, the High Courts of India have direct jurisdiction over rectification matters in many cases. This has added a layer of procedural formality, as High Court rules now apply. Dealing with the Trademark Registry vs. dealing with a High Court Judge requires very different strategic mindsets and drafting styles.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="rectification-vs-cancellation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Rectification vs. Cancellation vs. Opposition
                                        </h2>
                                        <p className="mb-6">
                                            Many business owners use these terms interchangeably, but they represent different stages of the trademark lifecycle. Knowing which one to use is critical for your legal budget and strategy.
                                        </p>
                                        <div className="overflow-x-auto mb-10">
                                            <table className="min-w-full border-collapse border border-gray-200 text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="border border-gray-200 p-4 font-bold text-left">Feature</th>
                                                        <th className="border border-gray-200 p-4 font-bold text-left">Opposition</th>
                                                        <th className="border border-gray-200 p-4 font-bold text-left">Rectification</th>
                                                        <th className="border border-gray-200 p-4 font-bold text-left">Cancellation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-gray-200 p-4 bg-gray-50 font-bold">Timing</td>
                                                        <td className="border border-gray-200 p-4">Before Registration (4 months window)</td>
                                                        <td className="border border-gray-200 p-4">Post Registration (Any time)</td>
                                                        <td className="border border-gray-200 p-4">Post Registration (Often via Court)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-200 p-4 bg-gray-50 font-bold">Nature</td>
                                                        <td className="border border-gray-200 p-4">Preventing a new entry</td>
                                                        <td className="border border-gray-200 p-4">Removing an existing entry</td>
                                                        <td className="border border-gray-200 p-4">Nullifying a registration</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-200 p-4 bg-gray-50 font-bold">Threshold</td>
                                                        <td className="border border-gray-200 p-4">Relatively Low</td>
                                                        <td className="border border-gray-200 p-4">High (Overturning a vested right)</td>
                                                        <td className="border border-gray-200 p-4">Very High (Often involves fraud)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-200 p-4 bg-gray-50 font-bold">Forum</td>
                                                        <td className="border border-gray-200 p-4">Trademark Registry</td>
                                                        <td className="border border-gray-200 p-4">Registry or High Court</td>
                                                        <td className="border border-gray-200 p-4">High Court or Commercial Court</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section id="fees-and-timelines" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Cost Analysis and Procedural Timelines
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            Budgeting for rectification is different from registration. It is an "adversarial" proceeding, meaning costs depend on how hard the other party fights back.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Official Govt. Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">Government fees for filing Form TM-O for rectification before the Registrar.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">E-Filing (Per Class)</span>
                                                        <span className="text-lg font-black text-gray-900">₹2,700</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Physical Filing (Per Class)</span>
                                                        <span className="text-lg font-black text-gray-900">₹3,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faRocket} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">Expected Timeline</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">From initial filing to final decision by the Registrar.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Typical Duration</span>
                                                        <span className="text-lg font-black text-white">18-36 Months</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Includes all evidence stages and mandatory waiting periods. Complex cases with High Court appeals can take longer.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="expert-strategies-success" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                           Strategies for a Successful Rectification
                                        </h2>
                                        <p className="mb-6">
                                            Filing the application is just the start. Winning a rectification case requires tactical brilliance. Here are the strategies we use at IPR Karo to secure favorable outcomes for our clients:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                                <h5 className="font-black text-blue-900 mb-3 uppercase tracking-tighter">1. The "Commercial Death" Strategy</h5>
                                                <p className="text-sm text-blue-800 leading-relaxed">In non-use cases, we don\'t just say the registrant hasn\'t used the mark. We provide data from GST filings, import/export records, and physical market verification to prove that the product is commercially invisible. This forces the registrant into a defensive corner where they must produce invoices they may not have.</p>
                                            </div>
                                            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                                <h5 className="font-black text-green-900 mb-3 uppercase tracking-tighter">2. Chronological Domination</h5>
                                                <p className="text-sm text-green-800 leading-relaxed">If you are the prior user, we build a seamless timeline of your brand\'s evolution. From the first sketch of the logo to the first domain purchase and the first inter-state sale. Showing that your "identity" existed before their "registration" is the key to proving bad faith or misrepresentation by the registrant.</p>
                                            </div>
                                            <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                                                <h5 className="font-black text-red-900 mb-3 uppercase tracking-tighter">3. Deceptive Similarity Matrix</h5>
                                                <p className="text-sm text-red-800 leading-relaxed">We use the "Triple Identity Test" - identical marks, identical goods, and identical trade channels. By demonstrating that the average consumer will likely be confused, we argue that the mark fails the basic test of distinctiveness and violates Section 11, making its registration a wrongful entry that must be corrected.</p>
                                            </div>
                                            <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                                                <h5 className="font-black text-yellow-900 mb-3 uppercase tracking-tighter">4. Settlement Leverage</h5>
                                                <p className="text-sm text-yellow-800 leading-relaxed">Sometimes a rectification application is the best tool to force a negotiation. If a party is blocking your path, an aggressive Section 47 filing can bring them to the table for a "Co-existence Agreement" or a legitimate "Trademark Assignment," saving you years of litigation costs.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Proven Success in Rectification Cases
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
                                           Your Questions Answered: FAQ on Trademark Rectification
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Clear Your Path to Brand Freedom</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don\'t let a "ghost" trademark or a deceptive entry block your business growth. Initiate professional rectification proceedings today with India\'s most aggressive IP firm.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Consult IP Attorney Now
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
                                <div className="absolute top-0 right-0 p-20 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Evaluate Your Case</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Not sure if you can remove a particular mark? Get a **Confidential Locus Standi Audit** from our legal team.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Free Case Review
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Legal Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-opposed-what-happens-next-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Trademark Opposition</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-cancel-or-dispute-someone-else-s-trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Dispute Trademark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Stop Infringement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Case Studies</span>
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
