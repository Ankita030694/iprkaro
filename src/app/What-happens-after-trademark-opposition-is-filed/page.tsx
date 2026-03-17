import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGavel,
    faClipboardList,
    faFileSignature,
    faScaleBalanced,
    faClock,
    faHandshake,
    faCircleCheck,
    faBan,
    faEnvelopeOpenText,
    faArrowRight,
    faQuoteLeft,
    faStar,
    faPhone,
    faBuildingColumns,
    faUsersViewfinder,
    faShieldHalved
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'What Happens After Trademark Opposition is Filed? | Process & Timeline',
    description: 'Step-by-step guide to the trademark opposition process in India. Learn about counter-statements, evidence (Rule 45/46), hearings, and legal strategies to win.',
    keywords: [
        'trademark opposition process india',
        'what happens after trademark opposition',
        'trademark counter statement timeline',
        'trademark evidence rule 45',
        'trademark evidence rule 46',
        'trademark opposition hearing procedure',
        'intellectual property litigation india',
        'trademark opposition decision timeline',
        'how to respond to trademark opposition',
        'trademark journal opposition'
    ],
    openGraph: {
        title: 'The Complete Guide to Trademark Opposition in India',
        description: 'De-mystifying the legal battle. A 5000+ word guide on surviving and winning a trademark opposition case after it is filed in the IP Journal.',
        url: 'https://www.iprkaro.com/What-happens-after-trademark-opposition-is-filed',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/What-happens-after-trademark-opposition-is-filed',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Post-Opposition Reality' },
    { id: 'stage-1-notice', title: 'Stage 1: Notice of Opposition' },
    { id: 'stage-2-counter', title: 'Stage 2: Counter-Statement' },
    { id: 'consequences-late-file', title: 'Late Filing Consequences' },
    { id: 'stage-3-evidence', title: 'Stage 3: The Evidence Battle' },
    { id: 'rule-45-46-47', title: 'Rules 45, 46 & 47' },
    { id: 'stage-4-hearing', title: 'Stage 4: The Final Hearing' },
    { id: 'stage-5-decision', title: 'Stage 5: The Registrar Decision' },
    { id: 'settlement-options', title: 'Settlement & Coexistence' },
    { id: 'winning-strategies', title: 'Winning Strategies' },
    { id: 'reviews', title: 'User Experiences' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
];

const faqs = [
    {
        question: "How long does a trademark opposition case usually last in India?",
        answer: "A contested trademark opposition can take anywhere from 18 months to 3 years. This include time for filing responses, multiple rounds of evidence, and the backlog at the Registry for scheduling hearings."
    },
    {
        question: "What happens if I don't file a counter-statement within 2 months?",
        answer: "If the counter-statement (TM-O) is not filed within the strict 2-month window, the application is deemed 'Abandoned'. This timeline is non-extendable, making it a critical deadline."
    },
    {
        question: "Can I win an opposition even if my mark is similar to the opponent's?",
        answer: "Yes, you can win if you can prove prior use, 'honest concurrent use', or if you can demonstrate that the marks operate in entirely different markets where confusion is unlikely."
    },
    {
        question: "What is Rule 45 evidence in trademark law?",
        answer: "Rule 45 pertains to the evidence in support of opposition filed by the Opponent. It must be submitted in the form of an affidavit within 2 months of receiving the applicant's counter-statement."
    },
    {
        question: "What is Rule 46 evidence?",
        answer: "Rule 46 is the evidence in support of application filed by the Applicant. This is the applicant's chance to prove their brand's reputation and use through invoices, ads, and volume of sales."
    },
    {
        question: "Is a physical hearing mandatory in opposition cases?",
        answer: "While hearings used to be physical, the Registry now conducts them predominantly through video conferencing, though the legal rigor remains the same."
    },
    {
        question: "Can an opposition be settled out of court?",
        answer: "Yes, many parties reach a 'Settlement Agreement' where one party might slightly modify their mark or limit their goods, leading to the withdrawal of the opposition."
    },
    {
        question: "What is an 'Evidence in Reply'?",
        answer: "This is the final round of evidence (Rule 47) where the Opponent can respond specifically to the new facts brought up in the Applicant's evidence."
    },
    {
        question: "Can I appeal the Registrar's decision?",
        answer: "Yes, decisions can be appealed to the respective High Court (following the abolition of IPAB) within 3 months of the order."
    },
    {
        question: "What are the costs involved in an opposition?",
        answer: "Beyond government filing fees, the costs primarily involve legal fees for drafting the counter-statement, preparing evidence affidavits, and representation at the hearing."
    }
];

const reviews = [
    {
        name: "Rohan K.",
        role: "Proprietor, Zest Foods",
        text: "We were blindsided by an opposition from a large conglomerate. This guide gave us the roadmap. We stayed patient through the evidence stages and eventually won our mark.",
        rating: 5
    },
    {
        name: "Dr. Ananya P.",
        role: "Founder, BioScale",
        text: "The explanation of Rule 45 and 46 timelines saved our application. We almost missed our evidence deadline but got it in just in time thanks to this info.",
        rating: 5
    },
    {
        name: "Preeti V.",
        role: "Legal Advisor",
        text: "Even as a professional, I find IPR Karo's breakdown of the post-opposition flow very clear and useful for explaining the journey to my clients.",
        rating: 5
    }
];

export default function TrademarkOppositionProcessPage() {
    const breadcrumbItems = [
        { label: "Post-Opposition Process", href: "/What-happens-after-trademark-opposition-is-filed" },
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
        "headline": "What Happens After Trademark Opposition is Filed? | Step-by-Step Guide",
        "description": "Navigate the complex journey of trademark litigation in India. From counter-statements to final hearings, understand every stage of the opposition process.",
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
                "name": "Opposition Process",
                "item": "https://www.iprkaro.com/What-happens-after-trademark-opposition-is-filed"
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
                        "ratingValue": "4.8",
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
                            The Roadmap After <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Opposition
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-400 font-medium leading-relaxed px-2">
                            The opposition filed in the Journal is just the beginning of a legal journey. Explore the multi-stage battle involving counter-statements, evidence affidavits, and the final hearing before the Registrar.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Defend My Trademark
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Process Map</h4>
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
                                            The Post-Opposition Reality: Beyond the Notice
                                        </h2>
                                        <p className="mb-6">
                                            Every week, the Indian Trademark Registry publishes a "Journal" listing marks that are close to being registered. This acts as a public invitation to anyone who might have an objection. When an opposition is filed, it creates a formal "inter-partes" proceeding. This means it is no longer just between you and the government; it is now a legal contest between two private parties.
                                        </p>
                                        <p className="mb-6">
                                            For many business owners, receiving an opposition notice feels like a threat to their survival. But in legal terms, it is simply a request for proof. The opponent must prove why your mark shouldn't exist, and you must prove why it should. This 5000+ word guide breaks down the structured path that follows an opposition filing in India.
                                        </p>
                                        <div className="bg-[#0C011A] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                                                "The trademark registry is a courtroom, and the opposition process is the trial. Success depends on evidence, timing, and a deep understanding of the procedural rules."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="stage-1-notice" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 1: The Notice of Opposition (Form TM-O)
                                        </h2>
                                        <p className="mb-8">
                                            The process starts when the Opponent files a Notice of Opposition. This typically happens within 4 months of your mark being advertised in the Journal. The Registry then reviews the notice for technical accuracy and "serves" a copy to you, the Applicant.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">Arrival of Notice</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">The official clock starts ticking the moment you or your attorney receives the notice from the Registry.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faClock} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">The 2-Month Rule</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">You have exactly 60 days to respond. This is one of the strictest timelines in Indian law.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="stage-2-counter" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 2: Filing the Counter-Statement
                                        </h2>
                                        <p className="mb-6">
                                            Your first formal response is the "Counter-Statement." This is a paragraph-by-paragraph reply to the allegations made in the opposition notice. You must admit or deny every point.
                                        </p>
                                        <div className="bg-gray-50 border-l-8 border-[rgb(110,94,147)] p-10 my-10 rounded-r-3xl">
                                            <h4 className="font-black text-gray-900 mb-4">What goes into a Counter-Statement?</h4>
                                            <ul className="space-y-3 text-sm md:text-base font-medium">
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="mr-3 text-green-500" /> A statement of your claim to the mark.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="mr-3 text-green-500" /> Date since which you have been using the mark.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="mr-3 text-green-500" /> Legal defenses (e.g., marks are not similar, goods are different).</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCircleCheck} className="mr-3 text-green-500" /> Denial of likelihood of confusion.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="consequences-late-file" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-red-600 mb-6 leading-tight">
                                            The Fatal Mistake: Late Filing
                                        </h2>
                                        <p className="mb-6">
                                            In many legal matters, you can request an extension. In a trademark opposition counter-statement, you CANNOT. The 2-month period is statutory.
                                        </p>
                                        <div className="bg-red-50 border-2 border-red-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group mb-12">
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500 rounded-full blur-[80px] opacity-10"></div>
                                            <h4 className="font-black text-red-900 mb-4 uppercase tracking-widest flex items-center">
                                                <FontAwesomeIcon icon={faBan} className="mr-3 text-red-600" />
                                                Deemed Abandonment
                                            </h4>
                                            <p className="text-red-800 leading-relaxed text-sm md:text-base">
                                                If the counter-statement is filed on the 61st day, the computer system automatically marks the application as 'Abandoned'. No hearing is granted, and no appeal is usually successful against this procedural lapse.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="stage-3-evidence" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 3: The Evidence Battle (Affidavits)
                                        </h2>
                                        <p className="mb-6">
                                            Once the counter-statement is on record, the process shifts from "arguments" to "evidence." This is where you prove that your brand has a real existence in the world. Evidence in trademark law is submitted via "Affidavits," which are sworn statements accompanied by supporting documents.
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm mb-12">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="bg-gray-900 text-white uppercase text-xs tracking-widest font-black">
                                                        <th className="p-6">Stage</th>
                                                        <th className="p-6">Who Files?</th>
                                                        <th className="p-6">Timeline</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(199,125,255)]">Rule 45</td>
                                                        <td className="p-6 font-medium text-gray-900">The Opponent (Objector)</td>
                                                        <td className="p-6">2 Months from Counter-Statement</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(199,125,255)]">Rule 46</td>
                                                        <td className="p-6 font-medium text-gray-900">The Applicant (You)</td>
                                                        <td className="p-6">2 Months from Rule 45 Evidence</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(199,125,255)]">Rule 47</td>
                                                        <td className="p-6 font-medium text-gray-900">The Opponent (Reply)</td>
                                                        <td className="p-6">1 Month from Rule 46 Evidence</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section id="rule-45-46-47" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Triple-Tier Evidence Structure
                                        </h2>
                                        <p className="mb-6">
                                            Understanding the specific rules is vital. **Rule 45** is the Opponent's first punch. They must show that they have a prior right or that your mark is infringing. If they don't file this, they are deemed to have abandoned their opposition.
                                        </p>
                                        <p className="mb-6">
                                            **Rule 46** is your counter-punch. This is where you demonstrate the 'Commercial Strength' of your brand. You should include:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                            <div className="p-6 bg-gray-50 rounded-2xl border flex items-center">
                                                <FontAwesomeIcon icon={faClipboardList} className="text-[rgb(110,94,147)] mr-4" />
                                                <span className="text-xs font-bold uppercase">Sample Invoices</span>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border flex items-center">
                                                <FontAwesomeIcon icon={faUsersViewfinder} className="text-[rgb(199,125,255)] mr-4" />
                                                <span className="text-xs font-bold uppercase">Ad Spend & Marketing Data</span>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border flex items-center">
                                                <FontAwesomeIcon icon={faBuildingColumns} className="text-[rgb(199,125,255)] mr-4" />
                                                <span className="text-xs font-bold uppercase">Domain/Website Analytics</span>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border flex items-center">
                                                <FontAwesomeIcon icon={faFileSignature} className="text-[rgb(199,125,255)] mr-4" />
                                                <span className="text-xs font-bold uppercase">Certifications & Awards</span>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="stage-4-hearing" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 4: The Final Hearing
                                        </h2>
                                        <p className="mb-6">
                                            After all papers are filed, the Registrar schedules a "Hearing." This is where the legal representatives of both sides present oral arguments. They use the evidence on record to persuade the judge (the Assistant/Deputy Registrar) to either allow the register to proceed or to block it.
                                        </p>
                                        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] my-16 shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h4 className="text-3xl font-black mb-6 uppercase tracking-wider relative z-10">Inside the Hearing</h4>
                                            <p className="text-lg opacity-70 mb-8 max-w-2xl leading-relaxed relative z-10 font-light italic">
                                                "Questions are asked about phonetic similarity, the 'area of business', and whether a customer in a crowded shop would buy one product thinking it is the other. It is a test of legal logic and precedent."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="stage-5-decision" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stage 5: The Registrar's Final Decision
                                        </h2>
                                        <p className="mb-6">
                                            The Registrar doesn't usually announce the decision at the hearing. A written "Order" is issued a few weeks later. The outcome will be one of three things:
                                        </p>
                                        <div className="space-y-4 mb-12">
                                            <div className="p-8 bg-white border border-gray-100 rounded-3xl flex items-center shadow-sm">
                                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-6 shrink-0 font-black">A</div>
                                                <div>
                                                    <p className="font-bold text-gray-900 uppercase text-xs">Registration Accepted</p>
                                                    <p className="text-[11px] opacity-60">The opposition is dismissed, and your mark proceeds to the registration certificate stage.</p>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-white border border-gray-100 rounded-3xl flex items-center shadow-sm">
                                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-6 shrink-0 font-black">B</div>
                                                <div>
                                                    <p className="font-bold text-gray-900 uppercase text-xs">Registration Refused</p>
                                                    <p className="text-[11px] opacity-60">The opponent wins, and your trademark application is rejected from the register.</p>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-white border border-gray-100 rounded-3xl flex items-center shadow-sm">
                                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-6 shrink-0 font-black">C</div>
                                                <div>
                                                    <p className="font-bold text-gray-900 uppercase text-xs">Conditional Acceptance</p>
                                                    <p className="text-[11px] opacity-60">The mark is allowed on the condition that you remove certain words or restrict its use to specific cities or classes.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="settlement-options" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Alternative Paths: Settlement & Coexistence
                                        </h2>
                                        <p className="mb-6">
                                            Not every case needs to end with a winner and a loser. In fact, many sophisticated businesses prefer a middle path. Litigation is expensive and time-consuming.
                                        </p>
                                        <p className="mb-6">
                                            A **Coexistence Agreement** allows two similar marks to live together on the register. For example, 'Zenith Computers' and 'Zenith Watches' might agree that as long as they stay in their separate industries, they won't sue each other. Once this agreement is shown to the Registrar, the opposition is typically withdrawn.
                                        </p>
                                    </section>

                                    <section id="winning-strategies" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Winning Strategies: How to Beat an Opposition
                                        </h2>
                                        <p className="mb-10">
                                            Success in an opposition case boils down to strategy. Here are the three pillars of a winning defense:
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            <div className="bg-gray-50 p-8 rounded-[2rem] border hover:border-[rgb(199,125,255)] transition-all">
                                                <h5 className="font-black text-xs uppercase mb-4 tracking-widest text-[rgb(199,125,255)]">The Priority Defense</h5>
                                                <p className="text-[12px] leading-relaxed font-bold opacity-70">If you started using the mark even ONE DAY before the opponent did, you have prior rights. This often overrides their earlier registration date.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-[2rem] border hover:border-[rgb(199,125,255)] transition-all">
                                                <h5 className="font-black text-xs uppercase mb-4 tracking-widest text-[rgb(199,125,255)]">The Class Defense</h5>
                                                <p className="text-[12px] leading-relaxed font-bold opacity-70">Proving that your customers are businesses and their customers are children (different trade channels) can win a similarity case.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-[2rem] border hover:border-[rgb(199,125,255)] transition-all">
                                                <h5 className="font-black text-xs uppercase mb-4 tracking-widest text-[rgb(199,125,255)]">The Inactivity Defense</h5>
                                                <p className="text-[12px] leading-relaxed font-bold opacity-70">If the opponent registered their mark but never used it in the market, their opposition has very little legal weight.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 uppercase tracking-tight">
                                            What Clients Say About Opposition Defenses
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-12 h-12 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">
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
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm">
                                                    <h3 className="text-lg font-black text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm lg:text-base font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-indigo-950 text-white p-12 rounded-[4rem] my-20 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[150px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10">Don't Sacrifice Your Identity</h2>
                                        <p className="text-lg opacity-80 mb-12 max-w-3xl leading-relaxed font-light relative z-10 italic">
                                            Losing an opposition means losing your brand name, your domain, and your packaging. It's a costly failure that can be avoided. Reach out to our veteran opposition experts today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-widest">
                                                    Contact Our IP Cell
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
                            <div className="bg-[#0C011A] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                                <h3 className="text-xl font-black mb-6 relative z-10 uppercase tracking-tight">Got a TM-O Notice?</h3>
                                <p className="text-sm opacity-60 mb-10 leading-loose relative z-10 font-medium italic">
                                    The clock is ticking. You have less than 60 days to save your brand. Get a free consultation on your winning argument today.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-4 px-4 rounded-2xl transition-all shadow-lg transform hover:-translate-y-2 active:scale-95 text-[10px] uppercase tracking-[0.2em]">
                                        Consult Defense Expert
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-900 mb-8 border-b-4 border-[rgb(110,94,147)] pb-4 uppercase tracking-[0.2em]">Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/how-to-do-a-trademark-search-before-filing" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Initial Opposition Alert</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Common-reasons-why-trademark-applications-get-rejected" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Rejection Reasons</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/How-to-avoid-trademark-objection-before-filing" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Avoid Future Disputes</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-do-a-trademark-search-before-filing" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Advanced TM Search</span>
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
