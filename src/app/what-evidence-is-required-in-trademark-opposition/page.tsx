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
    faFileAlt,
    faHistory,
    faChartBar,
    faGlobe,
    faUserTie,
    faStar,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Evidence for Trademark Opposition | Rule 45, 46, 47',
    description: 'Master the trademark opposition process in India. Learn about evidence requirements under Rules 45, 46, and 47. Comprehensive legal guide on proof of use, affidavits, and winning strategies.',
    keywords: [
        'what evidence is required in trademark opposition',
        'trademark opposition evidence india',
        'rule 45 evidence support of opposition',
        'rule 46 evidence support of application',
        'rule 47 evidence in reply',
        'trademark proof of use documents',
        'trademark opposition affidavit india',
        'trademark reputation evidence',
        'win trademark opposition case india',
        'trademark litigation evidence requirements'
    ],
    openGraph: {
        title: 'Evidence in Trademark Opposition: The Definitive Indian Guide',
        description: 'Detailed insights into the evidentiary burden for trademark opposition. Expert tips on affidavits, invoices, and market reputation proof.',
        url: 'https://www.iprkaro.com/what-evidence-is-required-in-trademark-opposition',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-evidence-is-required-in-trademark-opposition',
    },
};

const tocSections = [
    { id: 'strategic-importance', title: 'Strategic Importance' },
    { id: 'legal-framework-india', title: 'Legal Framework' },
    { id: 'rule-45-evidence', title: 'Rule 45: Evidence in Support' },
    { id: 'rule-46-evidence', title: 'Rule 46: Evidence in Defense' },
    { id: 'rule-47-evidence', title: 'Rule 47: Rebuttal Evidence' },
    { id: 'types-of-documentary-proof', title: 'Documentary Checklist' },
    { id: 'digital-evidence-segment', title: 'Digital Proofs' },
    { id: 'affidavit-drafting-guide', title: 'Affidavit Drafting' },
    { id: 'comparative-charts-impact', title: 'Comparative Charts' },
    { id: 'technical-filing-requirements', title: 'Filing Best Practices' },
    { id: 'consequences-of-failure', title: 'Risks of Negligence' },
    { id: 'well-known-trademark-proof', title: 'Proving High Reputation' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "What is Rule 45 evidence in trademark opposition?",
        answer: "Rule 45 evidence is the primary set of documents and affidavits filed by the opponent to substantiate their claims against the trademark application. It must be filed within two months of receiving the counter-statement."
    },
    {
        question: "How do I prove the 'Prior Use' of my trademark?",
        answer: "Prior use is typically proven through invoices, sales ledgers, purchase orders, and advertising materials dated before the applicant's filing date. The oldest possible documents are the most valuable for establishing priority."
    },
    {
        question: "Is an affidavit mandatory for filing evidence in India?",
        answer: "Yes, under the Trade Marks Rules 2017, all evidence in opposition proceedings must be submitted in the form of a notarized affidavit sworn by an authorized representative of the party."
    },
    {
        question: "What happens if I miss the two-month deadline for Rule 45 evidence?",
        answer: "If the opponent fails to file evidence or a waiver letter within two months, the opposition is deemed abandoned. This results in the trademark application moving forward for registration automatically."
    },
    {
        question: "Can I file additional evidence after the Rule 47 stage?",
        answer: "Generally, no further evidence is allowed after Rule 47 except with the express leave of the Registrar. A formal interlocutory petition must be filed to request permission for additional evidence."
    },
    {
        question: "What is a 'Letter of Reliance' or 'Waiver Letter'?",
        answer: "A waiver letter is a formal intimation to the Registrar stating that a party does not wish to file further evidence and instead relies on the facts already stated in their pleadings (Notice of Opposition or Counter-Statement)."
    },
    {
        question: "Do I need to serve the evidence to the opposing party?",
        answer: "Absolutely. It is a mandatory legal requirement to serve a complete copy of the evidence, including all exhibits, to the other party or their attorney at the same time it is filed with the Registry."
    },
    {
        question: "What role does 'Advertising Spend' play in trademark evidence?",
        answer: "Advertising spend documents show the extent of brand promotion. Audited financial certificates for marketing expenditure help in proving that the brand has acquired a distinct identity in the minds of consumers."
    },
    {
        question: "Can I use expert testimony in a trademark opposition?",
        answer: "Yes, expert reports or market surveys conducted by professional agencies can be filed as evidence to support claims of consumer confusion or brand reputation, especially in complex industries."
    },
    {
        question: "What is trans-border reputation evidence?",
        answer: "This refers to proof that a brand is known in India even if it is not physically present there. Evidence includes international registrations, global media coverage, and website traffic from Indian users."
    },
    {
        question: "How should I organize large volumes of invoices as evidence?",
        answer: "It is best to select a representative sample of invoices across different years rather than thousands of identical documents. Organize them chronologically and index them clearly for the Registrar's convenience."
    }
];

const reviews = [
    {
        name: "Sanjay K.",
        role: "Brand Owner, Luxe Apparel",
        text: "Their guidance on Rule 45 evidence was crystal clear. We won our opposition because our documents were organized perfectly as per their advice.",
        rating: 5
    },
    {
        name: "Priya V.",
        role: "Legal Head, TechGen Solutions",
        text: "Managing affidavits and serving the other party was handled seamlessly. Expert knowledge of the Trade Marks Act 1999 is evident.",
        rating: 5
    },
    {
        name: "Rahul M.",
        role: "Managing Director, FreshFoods India",
        text: "Excellent service for trademark defense. We filed our evidence under Rule 46 on time and successfully defended our registration.",
        rating: 5
    }
];

export default function TrademarkOppositionEvidencePage() {
    const breadcrumbItems = [
        { label: "What Evidence is Required in Trademark Opposition", href: "/what-evidence-is-required-in-trademark-opposition" },
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
        "headline": "Full Guide: What Evidence is Required in Trademark Opposition in India",
        "description": "Exhaustive legal analysis of the evidence phase in Indian trademark opposition. Covers Rule 45, 46, and 47 requirements, proof of use, and affidavit drafting.",
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
                "name": "What Evidence is Required in Trademark Opposition",
                "item": "https://www.iprkaro.com/what-evidence-is-required-in-trademark-opposition"
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
                    "name": "Trademark Opposition Legal Support",
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
                            Winning Through Proof: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Evidence Required in Trademark Opposition
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            The outcome of a trademark battle in India depends entirely on the weight of your evidence. From Rule 45 affidavits to proof of commercial use, navigate the legal minefield with elite IP expertise. Secure your brand identity with precision and authority.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
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

                                    <section id="strategic-importance" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Decisiveness of Evidence in Trademark Battles
                                        </h2>
                                        <p className="mb-6">
                                            In the quasi-judicial realm of the Indian Trade Marks Registry, allegations are meaningless unless backed by cold, hard facts. When a trademark is opposed, the case moves from mere pleadings into the high-stakes phase of evidentiary proof. This is where the true owner of a brand is determined. Whether you are an opponent trying to stop a deceptive mark or an applicant defending your creation, the evidence you present will be the single most important factor in the Registrar's final decision.
                                        </p>
                                        <p className="mb-6">
                                            Evidence in trademark opposition is not just about showing documents; it is about constructing a narrative of market presence, consumer trust, and commercial integrity. A well-organized set of evidence can force a settlement before the hearing even begins, whereas poor evidence can lead to the "abandonment" of your legal rights. Understanding the nuances of <strong>what evidence is required in trademark opposition</strong> is essential for any business leader or legal professional active in the Indian market.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "In trademark litigation, the brand with the better records often beats the brand with the better story. Purity of evidence is the ultimate shield against brand theft."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The complexity of the evidence phase is amplified by the strict timelines imposed by the Trade Marks Rules, 2017. These deadlines are designed to ensure that trademark disputes do not linger indefinitely, but they also create a "pressure cooker" environment for legal teams. Missing a filing window by even a single day can result in the irrevocable loss of your trademark rights. This guide provides a comprehensive roadmap to mastering this critical phase of intellectual property protection.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the shift towards digital commerce has revolutionized the types of evidence that are now accepted. Traditional invoices and brochures are now supplemented by digital footprints, search engine metrics, and social media engagement data. We will explore how to blend these modern proofs with traditional legal requirements to create an unbeatable evidentiary portfolio.
                                        </p>
                                    </section>

                                    <section id="legal-framework-india" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Foundations: Trade Marks Act 1999 and Rules 2017
                                        </h2>
                                        <p className="mb-8">
                                            The legal machinery for trademark opposition is governed by **Section 21** of the Trade Marks Act, 1999. However, the procedural "how-to" is found within the **Trade Marks Rules, 2017**. These rules outline a three-stage evidentiary battle that every party must navigate.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faBalanceScale} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">The Power of the Registrar</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The Registrar of Trademarks functions as a judge in these proceedings. They have the power to accept, reject, or conditionally allow a trademark based on the strength of the evidence filed under the statutory rules.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">The Role of Affidavits</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Statements of fact are not evidence. Every claim must be sworn under oath in an affidavit. This gives the evidence a quasi-judicial standing and makes the deponent liable for any false statements.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHistory} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Priority of Use</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">India follows the 'First to Use' principle. Evidence that establishes an earlier date of commercial use often carries more weight than a registration certificate with a later date.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Deemed Abandonment</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Unlike civil courts where delays might be condoned with fines, the Trademark Registry operates on a strict 'Abandonment' model. If you don't file, you lose the case automatically.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            The burden of proof initially rests with the opponent to show why the trademark should not be registered. However, once the opponent files substantial evidence, the burden shifts to the applicant to prove that their mark is either distinctive or has acquired a secondary meaning. This shifting of the burden is the core of the trademark evidentiary process.
                                        </p>
                                    </section>

                                    <section id="rule-45-evidence" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Rule 45: The Opponent's Opening Salvo
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    1
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">The Two-Month Hard Deadline</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the applicant files their counter-statement, the Registrar serves a copy to the opponent. From this date of receipt, the opponent has exactly **two months** to file their evidence. This timeline is non-negotiable. If you fail to file your Rule 45 evidence or a waiver letter within this window, your opposition will be treated as abandoned by operation of law.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    2
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">The Core Narrative: Proof of Damage</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        In Rule 45, the opponent must demonstrate how the registration of the applicant's mark would harm their business. This typically involves proving that the opponent used the mark first, that the opponent's mark is already famous, or that the applicant is acting in bad faith. Every exhibit attached to the affidavit must support one of these core legal grounds.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    3
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">The Mandatory Service of Documents</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Filing with the Registry is only half the battle. You must also "serve" a complete copy of the evidence to the applicant or their registered attorney. Proof of service, such as a courier receipt or an email confirmation, must be maintained. If the Registry finds that the evidence was not served to the other side, it can lead to the evidence being struck from the record.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="rule-46-evidence" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Rule 46: The Applicant's Strategic Defense
                                        </h2>
                                        <p className="mb-6">
                                            Once the opponent has filed their Rule 45 evidence, the ball is in the applicant's court. Under **Rule 46**, the applicant has **two months** from the date of receipt of the opponent's evidence to file their defense. This is the moment to dismantle the opponent's claims and establish that your mark is fully entitled to registration.
                                        </p>
                                        <p className="mb-6">
                                            For an applicant, Rule 46 evidence should focus on "Honest Concurrent Use" or "Acquired Distinctiveness". If you can prove that you have been using the mark alongside the opponent without any actual confusion in the market for several years, your case for registration becomes significantly stronger. Alternatively, if the opponent's mark is descriptive or weak, Rule 46 is the time to file evidence showing that many other businesses are using similar marks, thereby diluting the opponent's claim of exclusivity.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Defensive Pivot</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                "A successful Rule 46 defense doesn't just answer the opponent; it redefines the market. By showing a history of honest development and independent branding, the applicant can turn a threat into a validation of their own brand's strength."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Just like Rule 45, if the applicant fails to file evidence or a waiver letter within the two-month deadline, the **trademark application is deemed abandoned**. This is a catastrophic failure for any business as it leads to the loss of the application and all associated priority dates. The applicant must be incredibly diligent about tracking the date when the opponent's evidence was served.
                                        </p>
                                    </section>

                                    <section id="rule-47-evidence" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Rule 47: The Rebuttal and Final Word
                                        </h2>
                                        <p className="mb-6">
                                            **Rule 47** allows the opponent one last opportunity to respond to the evidence filed by the applicant. This is strictly "evidence in reply". The opponent has **one month** from receiving the applicant's Rule 46 evidence to file their rebuttal.
                                        </p>
                                        <p className="mb-6">
                                            It is important to note that Rule 47 is not an opportunity to file entirely new claims or massive amounts of evidence that should have been filed under Rule 45. The scope of Rule 47 evidence must be confined to rebutting or clarifying facts introducted by the applicant in their defense. For example, if the applicant claims in Rule 46 that they have 100 distributors across India, the opponent can use Rule 47 to provide evidence that many of those distributors do not actually stock the applicant's products.
                                        </p>
                                        <p className="mb-6">
                                            Filing Rule 47 evidence is optional. If the opponent chooses not to file a reply, the matter simply proceeds to the hearing stage. However, in high-stakes litigation, ignoring the applicant's defensive evidence can be a tactical mistake, as it leaves the applicant's version of the facts unchallenged on the record.
                                        </p>
                                    </section>

                                    <section id="types-of-documentary-proof" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Multi-Layered Approach to Documentary Evidence
                                        </h2>
                                        <p className="mb-6">
                                            In the modern Indian legal landscape, documentary evidence must be diverse and multi-dimensional. Relying on a single type of document, such as just invoices, is a risky strategy. The Registrar looks for "Continuity of Use" and "Public Recognition". This requires a blend of primary, secondary, and tertiary proofs.
                                        </p>
                                        <div className="space-y-10">
                                            <div>
                                                <h3 className="text-xl font-bold text-[#6E5E93] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faChartBar} className="mr-3" />
                                                    1. Quantitative Evidence: Sales and Turnover
                                                </h3>
                                                <p className="mb-4">
                                                    Quantitative evidence proves the scale of your business. While individual invoices are great, a Chartered Accountant (CA) Certificate for Sales Turnover is far more powerful. This certificate provides an audited summary of your annual earnings under the specific brand name. It demonstrates to the Registrar that the mark is not just a 'token' filing but a living, breathing commercial asset with significant market share.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#6E5E93] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faGlobe} className="mr-3" />
                                                    2. Qualitative Evidence: Media and Public Presence
                                                </h3>
                                                <p className="mb-4">
                                                    Qualitative evidence proves the 'reputation' of your brand. This includes news clips, awards from industry bodies, and mentions in trade journals. If your brand has been featured in a national newspaper or on a major tech blog, those clips should be included as exhibits. They prove that the public is aware of your brand, making it much harder for a competitor to claim that they "didn't know" about your existence.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#6E5E93] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faUserTie} className="mr-3" />
                                                    3. Expert and Third-Party Testimony
                                                </h3>
                                                <p className="mb-4">
                                                    Sometimes, the best evidence comes from people outside your company. Affidavits from major distributors, long-time customers, or industry experts can provide an unbiased validation of your brand's standing. An industry veteran stating that your brand has been the "market leader in Class 5 for two decades" carries massive weight in a contested hearing.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="digital-evidence-segment" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Digital Footprints: The New Frontier of Evidence
                                        </h2>
                                        <p className="mb-6">
                                            We are no longer in an era where paper is the only proof. The Trade Marks Registry now routinely accepts digital evidence, provided it is presented correctly. Social media engagement, website traffic logs, and e-commerce dashboard screenshots are vital components of <strong>what evidence is required in trademark opposition</strong> today.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-8">
                                            <h3 className="font-bold text-lg mb-4 text-gray-900">Digital Evidence Best Practices:</h3>
                                            <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                                                <li className="flex items-center"><FontAwesomeIcon icon={faArrowRight} className="text-[#6E5E93] mr-2" /> Domain registration WHOIS records</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faArrowRight} className="text-[#6E5E93] mr-2" /> Wayback Machine (Archive.org) history</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faArrowRight} className="text-[#6E5E93] mr-2" /> Social media verification badges</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faArrowRight} className="text-[#6E5E93] mr-2" /> App Store / Play Store download stats</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faArrowRight} className="text-[#6E5E93] mr-2" /> Search engine keyword ranking data</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faArrowRight} className="text-[#6E5E93] mr-2" /> E-commerce buyer reviews and ratings</li>
                                            </ul>
                                        </div>
                                        <p className="mb-6">
                                            The challenge with digital evidence is its 'perishability'. Websites change, and social media posts can be deleted. This is why we recommend using "Notarized Screenshots" or "Third-Party Digital Certificates". These methods preserve the state of the digital evidence at a specific point in time, ensuring that the Registrar can trust the authenticity of the proof even if the original URL is no longer active.
                                        </p>
                                    </section>

                                    <section id="affidavit-drafting-guide" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Drafting the Perfect Evidence Affidavit: A Step-by-Step Walkthrough
                                        </h2>
                                        <p className="mb-6">
                                            The affidavit is the "glue" that holds your evidence together. A poorly drafted affidavit can make even the best documents look suspicious. We follow a rigorous "Five-Point Structure" for every affidavit we file.
                                        </p>
                                        <ol className="space-y-6 text-gray-700 list-decimal pl-6">
                                            <li>
                                                <strong>Competency and Authorization:</strong> The first paragraph must establish who is giving the statement and why they are authorized to do so. A Director must attach a Board Resolution (BR) explicitly authorizing them to sign on behalf of the company.
                                            </li>
                                            <li>
                                                <strong>History of the Mark:</strong> The affidavit should detail the creation of the mark, the identity of the designer, and the exact date when the mark was first used in commerce.
                                            </li>
                                            <li>
                                                <strong>Introduction of Exhibits:</strong> Each document must be introduced formally in the text. For example: "The original invoices for the year 1998 are attached herewith and marked as EXHIBIT-A."
                                            </li>
                                            <li>
                                                <strong>Declarations on Similarity:</strong> The affidavit must state clearly how the opposing mark is deceptively similar and how this similarity will lead to "Likelihood of Confusion" among the general public.
                                            </li>
                                            <li>
                                                <strong>The Verification Clause:</strong> The affidavit must end with a formal verification statement, asserting that the facts are true to the best of the deponent's knowledge. This is a mandatory legal requirement under Indian law.
                                            </li>
                                        </ol>
                                        <p className="mt-6 font-semibold text-[#6E5E93]">
                                            Pro Tip: Avoid generic 'cut-and-paste' affidavits. The Registry values specificity. Tailoring the language to the unique facts of your brand's journey is the key to winning.
                                        </p>
                                    </section>

                                    <section id="comparative-charts-impact" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Visual Persuasion: The Power of Comparative Similarity Charts
                                        </h2>
                                        <p className="mb-6">
                                            Textual descriptions of similarity are often insufficient. We always include "Comparative Similarity Charts" in our evidence filings. These are visual side-by-side tables that compare the font, color scheme, placement of logos, and overall "Trade Dress" of both marks.
                                        </p>
                                        <p className="mb-6">
                                            If the applicant has copied the exact shade of blue or the specific curve of a logo, the chart makes this obvious to the Registrar. This visual evidence addresses the "Rule of Imperfect Recollection". The Registrar analyzes the two marks as a consumer would, looking at the "Overall Impression" rather than microscopic differences. A well-constructed chart can prove "Bad Faith Adoption" even when the words themselves are slightly different.
                                        </p>
                                        <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-200 my-10">
                                            <h4 className="font-bold text-yellow-800 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3" />
                                                The Doctrine of Deceptive Similarity
                                            </h4>
                                            <p className="text-sm text-yellow-700 leading-relaxed">
                                                In India, the test is not whether the marks are identical, but whether they are "so nearly resembling each other as to be likely to deceive or cause confusion." Our evidence focuses on the 'idea' behind the trademark. If the 'idea' is stolen, the registration must be blocked.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="technical-filing-requirements" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Precision in Practice: Technical Filing Requirements
                                        </h2>
                                        <p className="mb-6">
                                            Even the best evidence is useless if it is rejected on technical grounds. The Trademark Registry has strict standards for how documents must be presented. Every piece of evidence must be attached as an "Exhibit" to a master **Affidavit**. This affidavit must be printed on non-judicial stamp paper, signed by a competent person (like a Director or Partner), and duly notarized.
                                        </p>
                                        <p className="mb-6">
                                            In the digital era, "Indexing" is the most overlooked part of the process. If you are filing a 500-page PDF of evidence, you must provide a clickable table of contents and clear headings for each exhibit. The Registrar reviews hundreds of files every week; if they cannot find your 1995 invoice in a sea of unorganized scans, they might miss the very proof that would have won your case.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-6 my-10">
                                            <div className="p-6 bg-gray-50 rounded-2xl text-center">
                                                <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8 text-[rgb(110,94,147)] mb-4 mx-auto" />
                                                <h4 className="font-bold mb-2">Notarization</h4>
                                                <p className="text-xs text-gray-500">Every affidavit must be notarized before a public notary to be legally valid.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl text-center">
                                                <FontAwesomeIcon icon={faHistory} className="w-8 h-8 text-[rgb(110,94,147)] mb-4 mx-auto" />
                                                <h4 className="font-bold mb-2">Chronological Index</h4>
                                                <p className="text-xs text-gray-500">Always arrange your evidence from oldest to newest to build a timeline of use.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl text-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8 text-[rgb(110,94,147)] mb-4 mx-auto" />
                                                <h4 className="font-bold mb-2">Service Proof</h4>
                                                <p className="text-xs text-gray-500">Maintain an 'Affidavit of Service' to prove the other side received your documents.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="consequences-of-failure" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The High Stakes of Negligence: Risks and Consequences
                                        </h2>
                                        <p className="mb-6">
                                            The consequences of failing to file evidence correctly in India are absolute. Unlike civil litigation where "interest of justice" often allows for late filings with a penalty fee, the Trade Marks Rules are designed for administrative efficiency. If the opponent misses the Rule 45 deadline, the **opposition is dismissed**. There is no "second chance" at the hearing stage to present evidence that was not filed during the statutory phase.
                                        </p>
                                        <p className="mb-6">
                                            For an applicant, the failure to file Rule 46 evidence leads to the **abandonment of the trademark application**. This means all the time and money spent on branding, searching, and filing is completely wasted. A competitor could potentially file a new application for the same name the very next day, and they would have a cleaner path to registration because your prior rights were "abandoned" due to a procedural oversight.
                                        </p>
                                        <p className="mb-6">
                                            This is why we emphasize the "Rule of Zero Tolerance" for deadlines. Every business must have a dedicated IP calendar that tracks these two-month windows with multiple alerts. Working with an experienced trademark firm like IPR Karo ensures that these dates are never missed and that your brand remains under constant legal protection.
                                        </p>
                                    </section>

                                    <section id="well-known-trademark-proof" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Proving Well-Known Status: The Gold Standard of Evidence
                                        </h2>
                                        <p className="mb-6">
                                            For some brands, the goal is not just to win an opposition, but to achieve the status of a "Well-Known Trademark". This special status provides protection across all 45 classes, even if the brand is only used in one. The evidentiary burden here is significantly higher. You must prove that the brand is recognized by a substantial segment of the relevant public across India.
                                        </p>
                                        <p className="mb-6">
                                            Evidence for well-known status includes large-scale market survey reports, massive audited advertising spends (often in the crores), and proof of several successful legal battles where the Registry has already acknowledged the brand's reputation. At IPR Karo, we help elite brands curate these complex portfolios to secure the ultimate level of IP protection available under Indian law.
                                        </p>
                                        <p className="mb-6">
                                            Strategic use of **trans-border reputation** is also crucial here. If a brand is famous globally and that fame has spilled over into India through the internet or travel, it can be protected in India even before the brand has made its first formal sale in the country. This requires evidence of global market share, awards from international bodies, and web traffic data showing significant interest from Indian IP addresses.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Proven Success in Evidence Strategy
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
                                            Expert Insights: FAQ on Trademark Opposition Evidence
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Don't Leave Your Brand to Chance</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                In a trademark opposition, your evidence is your only weapon. Let India's elite IP legal team handle your affidavits and filings with 100% precision.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Discuss Your Case Now
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Strategic Evidence Review</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Already in an opposition? Get a **Professional Evidence Audit** to identify gaps in your documents before the deadline.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Analyze My Evidence
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
                                        <Link href="/trademark-opposed-what-happens-next-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">What Happens After Opposition?</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents-required-for-trademark-opposition" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Legal Documents Checklist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-long-trademark-opposition-cases-take" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Opposition Case Timelines</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Handling Trademark Opposition</span>
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
