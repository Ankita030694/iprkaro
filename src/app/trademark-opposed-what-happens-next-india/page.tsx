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
    faStar,
    faHourglassHalf,
    faHandshake,
    faHistory,
    faBuilding
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Opposed: What Happens Next? | Procedure in India 2024',
    description: 'Received a trademark opposition in India? Learn the step-by-step procedure to handle TM-O, file a counter-statement, submit evidence under Rules 45-47, and win your hearing. Comprehensive 5000+ word expert guide.',
    keywords: [
        'trademark opposed what happens next india',
        'trademark opposition procedure india',
        'form tm-o india',
        'trademark counter statement deadline',
        'trademark rule 45 evidence',
        'trademark hearing procedure india',
        'trademark opposition grounds section 11',
        'how to win trademark opposition india',
        'trademark abandonment india',
        'respond to trademark opposition notice'
    ],
    openGraph: {
        title: 'Trademark Opposed: The Ultimate Guide to Winning Your Case in India',
        description: 'Navigate the complex world of trademark opposition with India\'s top IP legal team. 5000+ words of technical strategy on counter-statements and evidence.',
        url: 'https://www.iprkaro.com/trademark-opposed-what-happens-next-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-opposed-what-happens-next-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Reality of Opposition' },
    { id: 'why-opposed', title: 'Why Your Mark was Opposed' },
    { id: 'legal-framework', title: 'Legal Framework (Act of 1999)' },
    { id: 'who-can-oppose', title: 'Who has Locus Standi?' },
    { id: 'procedural-timeline', title: 'Step-by-Step Timeline' },
    { id: 'counter-statement', title: 'The Critical Counter-Statement' },
    { id: 'evidence-rule-45', title: 'Rule 45: Opponent\'s Evidence' },
    { id: 'evidence-rule-46', title: 'Rule 46: Applicant\'s Defense' },
    { id: 'evidence-rule-47', title: 'Rule 47: Rebuttal Phase' },
    { id: 'hearing-process', title: 'The Trademark Hearing' },
    { id: 'strategic-settlements', title: 'Settlement Strategies' },
    { id: 'appeals-process', title: 'High Court Appeals' },
    { id: 'costs-and-fees', title: 'Costs and Professional Fees' },
    { id: 'faqs', title: 'Detailed FAQs' },
];

const faqs = [
    {
        question: "When exactly does a trademark opposition occur in India?",
        answer: "A trademark opposition occurs after the application is accepted by the Registrar and published in the Trade Marks Journal. During the four months following this publication, any person can file a notice of opposition if they believe the mark should not be registered."
    },
    {
        question: "What is the non-extendable deadline for filing a counter-statement?",
        answer: "The deadline for filing a counter-statement is exactly two months from the date the applicant receives the notice of opposition. This timeline is strict and cannot be extended under any circumstances according to the Trade Marks Act 1999."
    },
    {
        question: "Can I still win if I miss the Rule 45 evidence deadline?",
        answer: "If the opponent misses the Rule 45 evidence deadline, the opposition is usually deemed abandoned. However, if you are the applicant and you miss your Rule 46 deadline, you might lose the chance to present your side, though the application is not automatically abandoned unless you fail to file the initial counter-statement."
    },
    {
        question: "What are the common grounds for opposing a trademark under Section 11?",
        answer: "Section 11 grounds relate to relative grounds of refusal. This includes similarity to an earlier registered trademark, likelihood of confusion among the public, or potential dilution of a well-known trademark's reputation."
    },
    {
        question: "Is it possible to settle a trademark opposition case out of court?",
        answer: "Yes, many trademark opposition cases are settled through mutual agreements. This often involves a coexistence agreement where both parties agree to use their marks in a way that minimizes confusion, or the applicant might agree to use the mark only for specific goods or services."
    },
    {
        question: "What happens during a trademark hearing in India?",
        answer: "During a hearing, the Registrar of Trade Marks listens to oral arguments from both the opponent and the applicant. Both parties present their case based on the evidence affidavits already on record. The Registrar then issues a final decision to either allow or refuse the registration."
    },
    {
        question: "Does an opponent need to own a registered trademark to file an opposition?",
        answer: "No, the law states that 'any person' can file an opposition. The person does not necessarily need to have a registered trademark; they could be a prior user of a similar mark or even representing a public interest if the mark is offensive or generic."
    },
    {
        question: "How long does the entire trademark opposition process usually take?",
        answer: "Due to the multiple stages of evidence and the backlog at the Trademark Registry, the entire process can take anywhere from 18 months to 4 years to reach a final decision after a hearing."
    },
    {
        question: "What is Form TM-O and how much is the government fee?",
        answer: "Form TM-O is the official form used both for filing a notice of opposition and for filing a counter-statement. The government fee for an individual or startup is usually ₹2,700 for e-filing, while for others, it is ₹3,000 per mark per class."
    },
    {
        question: "Can I appeal the Registrar's decision if I lose the opposition?",
        answer: "Yes, any party aggrieved by the decision of the Registrar can file an appeal. Following the abolition of the IPAB, these appeals are now filed before the Intellectual Property Division of the relevant High Court."
    },
    {
        question: "Why is my trademark application showing 'Opposed' status?",
        answer: "This status means that a third party has filed a formal objection against your registration during the advertisement period. You must now respond with a counter-statement within two months or your application will be marked as 'Abandoned'."
    },
    {
        question: "What is a 'User Affidavit' in opposition proceedings?",
        answer: "A user affidavit is a formal document where you state the date since you have been using the trademark. You must attach supporting evidence like invoices, website screenshots, and marketing materials to prove your continuous use of the mark in India."
    }
];

const reviews = [
    {
        name: "Sanjay Gupta",
        role: "Founder, TechNova Solutions",
        text: "When our brand was opposed by a giant corporation, we were terrified. The team at IPR Karo drafted a counter-statement that was so legally sound the opponent eventually withdrew the opposition for a settlement.",
        rating: 5
    },
    {
        name: "Ananya Sharma",
        role: "Director, GreenRoots Organics",
        text: "The evidence stage under Rule 46 is incredibly technical. They helped us compile 10 years of invoices into a cohesive affidavit. We won the hearing and our logo is finally registered!",
        rating: 5
    },
    {
        name: "Rajesh Malhotra",
        role: "Proprietor, Malhotra Textiles",
        text: "Professional, transparent, and always ahead of deadlines. Trademark opposition is a long game, and I'm glad I had these experts on my side throughout the two-year battle.",
        rating: 5
    }
];

export default function TrademarkOpposedPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Trademark Opposed Next Steps", href: "/trademark-opposed-what-happens-next-india" },
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
        "headline": "Trademark Opposed in India: What Happens Next? (Procedural Guide 2024)",
        "description": "Comprehensive legal guide covering the entire trademark opposition process in India, including Form TM-O, counter-statements, evidence stages, and hearing procedures.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.iprkaro.com/Group%202%20(2).svg"
            }
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
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
                "name": "Trademark Opposed Guide",
                "item": "https://www.iprkaro.com/trademark-opposed-what-happens-next-india"
            }
        ]
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Opposition Legal Service",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1250"
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
                            Trademark Opposed in India? <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Definitive Guide to Winning Your Case
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Receiving an opposition notice can be daunting, but it is a standard procedural milestone in the life of a strong brand. Our elite intellectual property attorneys provide a detailed breakdown of the legal hurdles and strategic maneuvers required to protect your brand identity under the Trade Marks Act 1999.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Consult a Trademark Expert
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
                        <aside className="hidden lg:block sticky top-32 h-screen overflow-y-auto no-scrollbar pb-20">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</h4>
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
                                            The Strategic Reality of Trademark Opposition in the Indian Marketplace
                                        </h2>
                                        <p className="mb-6">
                                            The journey to securing an exclusive brand identity is rarely a simple path. For many startups and established enterprises, the moment the status of their application changes to "Opposed" marks the beginning of a complex, quasi-judicial battle. While the term sounds alarming, it is essential to recognize that trademark opposition is a democratic feature of the Indian legal system. It ensures that the public has a voice and that no single entity can monopolize a name that might belong to the common trade or conflict with pre-existing rights.
                                        </p>
                                        <p className="mb-6">
                                            In the current era of hyper-competition, opposition has become a strategic tool for many businesses. Competitors often file oppositions not just to protect their own marks, but to delay the registration of a new rival. This is why having a deep understanding of the procedural technicalities is not just a legal requirement but a business necessity. If your trademark is opposed, you are now entering a trial-like phase where evidence, legal drafting, and procedural adherence will determine whether you own your brand or lose it forever.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "An opposition is not a verdict of failure; it is a challenge of strength. It is the final Crucible that validates the uniqueness and legal standing of your brand in a crowded market."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            This guide is designed to be the ultimate resource for anyone facing this situation. We will explore the statutory requirements of the Trade Marks Act 1999, break down the strict deadlines that can make or break your case, and provide expert strategies for drafting counter-statements and compiling evidence. Our goal is to ensure that you are never caught off guard and that you have every tool at your disposal to defend your intellectual property successfully.
                                        </p>
                                    </section>

                                    <section id="why-opposed" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Decoding the Reasons: Why was Your Trademark Opposed?
                                        </h2>
                                        <p className="mb-8">
                                            Before you can formulate a defense, you must accurately diagnose the opponent's arguments. Nearly all oppositions in India fall into one of two major categories according to the legal framework, which are relative grounds and absolute grounds.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Relative Grounds (Section 11)</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is the most common ground. The opponent argues that your mark is identical or deceptively similar to their earlier registered trademark or a pending application with an earlier priority date. They claim that allowing your registration will cause confusion in the minds of the public, especially if the goods or services are similar.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faBalanceScale} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Absolute Grounds (Section 9)</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">While usually raised by the Registrar during examination, an opponent can also argue that your mark lacks distinctiveness. They may claim the mark is purely descriptive of the products (e.g., calling a juice brand 'Sweet Juice') or that the mark has become common to the trade and should remain free for everyone to use.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Other less frequent but equally lethal grounds include bad faith (where the opponent claims you stole the name knowing they used it elsewhere), the mark being scandalous or offensive, or the mark being likely to hurt religious sentiments. Understanding which of these buttons the opponent is pushing is critical for drafting a focused counter-response. At IPR Karo, we perform a forensic analysis of the Notice of Opposition to identify weak spots in their arguments before we even pick up the pen to draft your defense.
                                        </p>
                                    </section>

                                    <section id="legal-framework" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Legal Bedrock: Provisions of the Trade Marks Act 1999
                                        </h2>
                                        <p className="mb-6">
                                            To navigate an opposition, you must understand the rules of the game. Section 21 of the Trade Marks Act 1999 is the primary statute governing this process. It explicitly states that after an application for registration has been advertised, any person may, within four months from the date of advertisement, give notice in writing to the Registrar of opposition to the registration. This section also establishes the mandatory two-month window for filing a counter-statement, which is one of the most unforgiving deadlines in Indian law.
                                        </p>
                                        <p className="mb-6">
                                            Complementing the Act are the Trade Marks Rules 2017. These rules define the practical steps, such as Rule 42 for filing the notice, Rule 44 for the counter-statement, and most importantly, Rules 45, 46, and 47 which govern the evidence stages. These rules were recently updated to expedite the process, introducing stricter penalties for delays and encouraging digital filing. Knowing these rules allows us to leverage procedural advantages, such as spotting when a competitor has missed a technical filing requirement, which could lead to the immediate dismissal of their opposition.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Non-Extendable Provision</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                It is a common misconception that legal deadlines are flexible. Under Section 21(2), the time for filing a counter-statement is strictly two months. The Registrar has no power to condone a delay in this specific instance. If you miss this window by even a single day, your application is deemed abandoned by operation of law, and all the time and money invested in your brand could be gone instantly.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="who-can-oppose" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Concept of 'Any Person': Who has the Right to Oppose?
                                        </h2>
                                        <p className="mb-6">
                                            In many legal disputes, you must prove that you have a personal stake in the matter to bring a case. However, in trademark law, the doors are much wider. The law allows 'any person' to file an opposition. This includes individuals, partnerships, companies, and even trusts. You do not need to be the owner of a registered trademark to oppose someone else. For example, a local trader who has been using a name for 20 years without registration can oppose a giant corporation trying to register that same name.
                                        </p>
                                        <p className="mb-6">
                                            This broad provision is intended to protect the purity of the Trademark Register. It allows consumer protection groups to oppose generic terms or deceptive marks, and it allows competitors to keep the market fair. However, this also means your brand is exposed to a wide range of potential challengers. At IPR Karo, we monitor the Trade Marks Journal for our clients, but we also prepare for the possibility that an unexpected third party might emerge with a claim. Understanding the identity and history of the opponent is the first step in determining if their opposition is a valid concern or a frivolous attempt to obstruct your business.
                                        </p>
                                    </section>

                                    <section id="procedural-timeline" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Battlefield Timeline: From Opposition to Registration
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faHourglassHalf} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">Stage 1: The Notice (Month 0-4)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        After your mark is journaled, the opponent files Form TM-O. This contains the reasons for their objection. The Registry then reviews this and serves it to you. This service marks the 'start' of your legal clocks.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">Stage 2: The Counter-Statement (Month 4-6)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        You have exactly two months to file your response (also via Form TM-O). It must point-by-point refute the opponent's claims. Failure to file this leads to automatic abandonment of your trademark application.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">Stage 3: The Evidence War (Month 6-18)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        This is where affidavits are filed under Rules 45, 46, and 47. Both sides present invoices, advertisements, and legal arguments to prove their right over the mark. This is the most time-consuming phase of the opposition.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="counter-statement" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Critical Counter-Statement: Your First Line of Defense
                                        </h2>
                                        <p className="mb-6">
                                            When you receive a notice of opposition, the clock starts ticking immediately. The counter-statement is the most important document in the initial stage. It is not just a simple denial; it is a meticulously crafted legal document where you must address every single allegation made by the opponent. If you remain silent on a specific point raised by the opponent, the law may assume that you have admitted to that point. This is why a generic 'we deny everything' approach is destined for failure.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we focus on several key pillars in a counter-statement. First, we emphasize the 'Prior Use' if applicable, showing that our client has been using the mark before the opponent even filed their application. Second, we highlight the 'Acquired Distinctiveness' of the mark through massive sales figures and advertising expenditure. Third, we perform a 'Comparison Analysis', pointing out the visual, structural, and phonetic differences between the two marks. By the time we file the counter-statement, we aim to have placed the opponent on the defensive, forcing them to prove their claims in the evidence stage.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10 my-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Essential Content for Counter
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Specific denials of every paragraph in the opposition.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Detailed history of the brand's creation and usage.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Justification for the choice of specific words or logos.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Legal precedents supporting your right to register.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Documentation Needed
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Original invoices showing the first date of use.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>CA certificates for advertising and sales figures.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Social media and domain name registration proofs.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificates of international registrations (if any).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="evidence-rule-45" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Rule 45: The Opponent's Burden of Proof
                                        </h2>
                                        <p className="mb-6">
                                            Once the counter-statement is served on the opponent, the burden shifts to them. Under Rule 45 of the Trade Marks Rules 2017, the opponent has two months to file evidence in support of their opposition. This evidence is presented in the form of an affidavit, where they must attach documents that prove their claims of prior use, reputation, or likelihood of confusion. This is a critical stage because if the opponent fails to file this evidence or a letter stating they wish to rely on the facts in their notice within the two-month period, the law assumes they have abandoned their opposition.
                                        </p>
                                        <p className="mb-6">
                                            For applicants, this is often a time of strategic silence. We monitor the Registry closely to see if the opponent makes a mistake. If the opponent misses the deadline, we immediately file a request with the Registrar to declare the opposition abandoned. This 'procedural technicality' is a powerful weapon in trademark law. However, if the opponent does file substantial evidence, we must meticulously review every page of their affidavit to identify inconsistencies, lack of proof, or irrelevant documents that we can later challenge during the hearing.
                                        </p>
                                    </section>

                                    <section id="evidence-rule-46" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Rule 46: Building Your Legal Shield with Evidence
                                        </h2>
                                        <p className="mb-6">
                                            If the opponent has filed their evidence, the ball is back in your court. Rule 46 provides you with two months to file evidence in support of your application. This is arguably the most intensive stage of the entire process. As the applicant, you must prove that your mark is distinctive and that you have a superior right to it. We help our clients compile a technical evidence bundle that includes thousands of data points formatted into a cohesive narrative for the Registrar.
                                        </p>
                                        <p className="mb-6">
                                            Evidence under Rule 46 often focuses on 'continuous and extensive use'. We attach digital invoices, newspaper advertisements, participation certificates from trade fairs, and even awards won by the brand. We also look for evidence that shows the opponent's mark is different or that they have no presence in the market where our client operates. This evidence is submitted via a formal affidavit signed by a high-ranking official of the company. A strong evidence bundle often forces the opponent to consider a settlement, as they realize that winning the case at a hearing will be an uphill battle.
                                        </p>
                                        <div className="bg-gray-100 p-8 rounded-[2rem] my-10 border border-gray-200">
                                            <h4 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faCertificate} className="text-[rgb(110,94,147)] mr-3" />
                                                Expert Tip: The Power of Search Evidence
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed italic">
                                                In many opposition cases, we include a 'Search Report' of other similar marks existing peacefully in the market. This proves to the Registrar that the market can handle multiple similar marks without confusion, which is a very strong argument for allowing your registration to proceed.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="evidence-rule-47" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Rule 47: The Rebuttal Phase and Closing the Evidence Loop
                                        </h2>
                                        <p className="mb-6">
                                            The final stage of the evidence exchange is Rule 47, which allows the opponent a chance to file 'evidence in reply'. They have one month to address the points you raised in your Rule 46 evidence. It is important to note that Rule 47 is strictly for rebuttal. The opponent cannot use this stage to introduce entirely new evidence that they should have included in Rule 45. If they try to smuggle in new documents, we proactively object to them being taken on record.
                                        </p>
                                        <p className="mb-6">
                                            Once the Rule 47 stage is over, the evidence phase is officially closed. No further documents can be filed by either party without the special permission of the Registrar. The case is then 'Ripe for Hearing'. Both parties now wait for the Registry to schedule a date where they can present their oral arguments. This is often the point where settlement discussions reach a peak, as both parties now have a clear view of each other's legal ammunition.
                                        </p>
                                    </section>

                                    <section id="hearing-process" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Trademark Hearing: The Final Oral Battle
                                        </h2>
                                        <p className="mb-6">
                                            The hearing is the climax of the trademark opposition journey. It is held before a hearing officer, who acts as a judge in this quasi-judicial proceeding. Since the evidence is already on record, the hearing is primarily about oral advocacy. Each side gets an opportunity to highlight their strongest points and point out the weaknesses in the other side's case.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, our senior advocates prepare for hearings by creating a 'Case Law Index'. We cite historical decisions of the Indian High Courts and the Supreme Court that support our client's position. For example, if the mark is descriptive but has acquired fame, we use the famous 'Acquired Distinctiveness' cases to argue for its registration. The Registrar then issues a reasoned order, which can be delivered on the spot or communicated in writing later. This order will either grant the registration, refuse it entirely, or allow it with certain conditions, such as limiting the mark's use to specific states or a specific list of items.
                                        </p>
                                    </section>

                                    <section id="strategic-settlements" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Art of the Settlement: Coexistence and Withdrawal
                                        </h2>
                                        <p className="mb-6">
                                            Not every opposition ends in a victory or a defeat. In fact, a large percentage of cases are resolved through 'Amicable Settlements'. Trademark litigation can be expensive and time-consuming, and for many businesses, a compromise is better than a multi-year battle. A common settlement tool is the 'Coexistence Agreement'. This is a legal contract where both parties agree that they can both live in the marketplace if they follow certain conditions.
                                        </p>
                                        <p className="mb-8">
                                            For instance, a company using 'AquaPure' for water might agree to allow another company to use 'AquaPure' for air purifiers. At IPR Karo, we are skilled negotiators. We look for creative solutions that protect our client's business interests while avoiding the risks of a long-drawn legal fight. If a settlement is reached, the opponent formally withdraws their opposition, and the Registrar proceeds to issue the registration certificate to our client.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-purple-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHandshake} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Coexistence Agreements</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Both parties agree to limit their use of the mark to specific geographical areas or specific product niches to avoid public confusion.</p>
                                            </div>
                                            <div className="bg-purple-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHistory} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Withdrawal of Oppostion</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The opponent agrees to drop the case, often in exchange for the applicant slightly modifying their logo or disclaiming certain common words.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="appeals-process" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            What Beyond the Registrar? High Court Appeals
                                        </h2>
                                        <p className="mb-6">
                                            If you are dissatisfied with the Registrar's decision, the road does not end there. You have the right to appeal. In 2021, the Indian government abolished the Intellectual Property Appellate Board (IPAB) through the Tribunals Reforms Act. Since then, the authority to hear appeals from the Trademark Registry has shifted to the High Courts. Most major High Courts, such as Delhi and Madras, have created specialized 'Intellectual Property Divisions' to handle these cases.
                                        </p>
                                        <p className="mb-6">
                                            An appeal must be filed within three months of the date of the Registrar's order. This is a purely judicial process held in a regular courtroom. The High Court judges will review the record of the opposition and determine if the Registrar made any errors in law or facts. While High Court litigation is more expensive, it provides a much higher level of legal scrutiny and can result in landmark judgments that set a precedent for the entire country. We guide our clients through this transition, providing veteran counsel for both Registry hearings and High Court appeals.
                                        </p>
                                    </section>

                                    <section id="costs-and-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Financial Planning for Trademark Defense
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            Opposition proceedings are long-term engagements. Understanding the step-by-step costs involved helps businesses manage their legal budgets effectively.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Statutory Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">Standard fees for filing Form TM-O (Counter-Statement or Opposition Notice).</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals / Startups</span>
                                                        <span className="text-lg font-black text-gray-900">₹2,700</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Standard Entities</span>
                                                        <span className="text-lg font-black text-gray-900">₹3,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">Professional Support Fee</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">Expert drafting, evidence compilation, and hearing representation.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Initial Drafting</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4 text-white">₹4,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Our fees are transparent and stage-based. We do not charge hidden retainers for monitoring your opposition status.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Proven Success in Complex Trademark Battles
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
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight font-serif">
                                            Mastering the Maneuvers: Detailed FAQs
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Don't Leave Your Brand's Future to Chance</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Trademark opposition is a technical war that requires tactical legal execution. Start your official defense with India's most trusted IP legal team today.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Start Your Defense Now
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
                        <aside className="hidden lg:block space-y-8 sticky top-32 h-screen overflow-y-auto no-scrollbar pb-20">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Counter-Statement Deadline approaching?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Don't let your application be marked as **Abandoned**. Get your counter-statement drafted by expert attorneys within 48 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Rush My Response
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Resource</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-objected-what-to-do-next" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Trademark Objection</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-abandoned-how-to-restore" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Trademark Restoration</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-refused-what-are-options" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Trademark Refusal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Check Status Meaning</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <FontAwesomeIcon icon={faBuilding} className="text-4xl text-[rgb(110,94,147)] mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate IP Audit</h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                                    Managing multiple trademarks? We provide comprehensive IP audits to identify risks across your entire portfolio.
                                </p>
                                <Link href="/contact-us">
                                    <button className="text-[rgb(110,94,147)] font-bold hover:underline">Learn More →</button>
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
