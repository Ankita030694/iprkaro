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
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Objected: What to Do Next? | Step-by-Step Recovery Guide',
    description: 'Received a trademark objection in India? Learn exactly what to do next. Complete guide on Section 9 and 11 objections, reply drafting, and hearing process. 5000+ words of legal expertise.',
    keywords: [
        'trademark objected what to do next',
        'trademark objection reply process india',
        'section 9 trademark objection',
        'section 11 trademark objection',
        'trademark examination report response',
        'how to overcome trademark objection',
        'trademark objection hearing process',
        'trademark status objected meaning',
        'trademark objection reply fees',
        'abandoned trademark restoration'
    ],
    openGraph: {
        title: 'Trademark Objected? Here is Your Complete Recovery Blueprint',
        description: 'Do not let your brand application fail. Our legal experts break down the trademark objection process from reply drafting to successfully winning hearings.',
        url: 'https://www.iprkaro.com/trademark-objected-what-to-do-next',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-objected-what-to-do-next',
    },
};

const tocSections = [
    { id: 'immediate-actions', title: 'Immediate First Steps' },
    { id: 'meaning-of-objected', title: 'What "Objected" Means' },
    { id: 'objection-vs-opposition', title: 'Objection vs Opposition' },
    { id: 'section-9-grounds', title: 'Section 9: Absolute Grounds' },
    { id: 'section-11-grounds', title: 'Section 11: Relative Grounds' },
    { id: 'drafting-the-reply', title: 'How to Draft a Reply' },
    { id: 'evidence-collection', title: 'Evidence Matrix' },
    { id: 'show-cause-hearing', title: 'The Hearing Process' },
    { id: 'post-objection-scenarios', title: 'Acceptance & Beyond' },
    { id: 'costs-and-timelines', title: 'Costs and Timelines' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "What is the very first thing I should do if my trademark status shows 'Objected'?",
        answer: "The absolute first step is to download the 'Examination Report' from the IP India portal. This report contains the specific legal grounds (Section 9 or Section 11) used by the examiner to halt your application. Once you have the report, you have exactly 30 days to file a formal written response. Missing this deadline will result in your application being marked as 'Abandoned'."
    },
    {
        question: "Is a trademark objection the same as a final rejection?",
        answer: "No, it is not a final rejection. An objection is merely a preliminary hurdle where the Registrar asks for clarification or justification. It is an invitation to prove why your mark deserves registration. With a strong legal reply and supporting evidence, the majority of objections can be successfully overcome."
    },
    {
        question: "Can I file the trademark objection reply myself or do I need a lawyer?",
        answer: "While you can technically file a reply yourself, it is highly discouraged. Trademark law is nuanced, and the reply must cite specific judicial precedents and legal arguments that a layperson might miss. A poorly drafted reply can lead to a quick refusal, whereas a professional IP attorney can navigate the complexities of Section 9 and 11 effectively."
    },
    {
        question: "How long does it take for the Registrar to review my objection reply?",
        answer: "The timeline varies, but typically the Registrar takes between 3 to 8 months to review the written response. If they are satisfied, the mark will be 'Accepted and Advertised'. If they require more clarity, they will schedule a 'Show Cause Hearing'."
    },
    {
        question: "What happens if I miss the 30-day deadline for the objection reply?",
        answer: "If the reply is not filed within the 30-day window, the application is normally marked as 'Abandoned' by the system. While there are provisions for 'Restoration' under specific circumstances, it involves additional costs and complexity. It is always better to adhere to the initial deadline."
    },
    {
        question: "Does every trademark objection lead to a hearing?",
        answer: "No. If the written reply is exceptionally strong and addresses all the examiner's concerns with sufficient evidence, the examiner may accept the mark directly. A hearing is only scheduled if the examiner is not fully convinced by the initial written arguments."
    },
    {
        question: "What are 'Absolute Grounds' under Section 9?",
        answer: "Section 9 deals with the inherent nature of the mark. It objects to marks that are descriptive (e.g., 'Cold' for ice cream), generic, or lack distinctiveness. Overcoming this requires proof of 'Acquired Distinctiveness' through long-term use."
    },
    {
        question: "What are 'Relative Grounds' under Section 11?",
        answer: "Section 11 concerns conflicts with existing trademarks. The objection is raised if your mark is identical or confusingly similar to a previously registered or applied-for mark. To win here, you must prove phonetic, visual, or structural differences."
    },
    {
        question: "What kind of documents count as evidence for a trademark reply?",
        answer: "Crucial evidence includes GST registrations, invoices showing the brand name, social media profile creation dates, advertisement expenses, website domain registration, and even customer reviews. These documents prove that the brand has a real world presence and is recognized by the public."
    },
    {
        question: "Are there any government fees for filing an objection reply?",
        answer: "There are no statutory government fees for filing the initial written response to an Examination Report. However, if you are represented by a legal firm, professional service fees will apply for drafting and filing the response."
    }
];

const reviews = [
    {
        name: "Anand Verma",
        role: "Founder, TechSpark Systems",
        text: "My trademark was stalled for 6 months due to a Section 11 objection. IPR Karo drafted a brilliant reply that highlighted the phonetic differences. My mark is now registered!",
        rating: 5
    },
    {
        name: "Sonal Gupta",
        role: "Director, GreenLeaf Organics",
        text: "The 30-day deadline was almost over when I contacted them. They handled the filing within 48 hours and we won the subsequent hearing. Highly recommended.",
        rating: 5
    },
    {
        name: "Rajesh Malhotra",
        role: "Proprietor, Royal Crest",
        text: "Professional, transparent, and legally sound. They explained the 'Acquired Distinctiveness' concept clearly and helped us gather the right evidence.",
        rating: 5
    }
];

export default function TrademarkObjectedGuidePage() {
    const breadcrumbItems = [
        { label: "Resources", href: "/resources" },
        { label: "Trademark Objected: What to Do Next", href: "/trademark-objected-what-to-do-next" },
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
        "headline": "Trademark Objected: The Definitive Guide on What to Do Next",
        "description": "Exhaustive legal guide on navigating trademark objections in India. Covers Section 9, Section 11, reply drafting, and hearing procedures.",
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
                "name": "Trademark Objected: What to Do Next",
                "item": "https://www.iprkaro.com/trademark-objected-what-to-do-next"
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
                    "name": "Trademark Objection Reply Service",
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
                            Trademark Status Objected? <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Here Is Exactly What You Need To Do Next
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            An objection is not a rejection: it is an opportunity to prove your brand's worth. Every day, business owners face hurdles under Section 9 and 11. Learn the expert strategies to draft successful replies, win show cause hearings, and secure your registration certificate today.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Get Your Free Objection Analysis
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

                                    <section id="immediate-actions" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Emergency Protocol: Three Steps You Must Take Immediately
                                        </h2>
                                        <p className="mb-6">
                                            Seeing the status "Objected" on the IP India portal can trigger immediate anxiety for any business owner. After months of waiting for your trademark to move forward, this appears to be a setback. However, in the legal landscape of brand protection, this is a standard phase of the trademark lifecycle. Statistically, more than 30 percent of all trademark applications face some form of objection during the initial examination by the Registrar. The difference between a brand that secures registration and one that trails off into abandonment lies in the first 72 hours following the notification.
                                        </p>
                                        <p className="mb-6">
                                            The very first action item is to <strong>ascertain the exact reason</strong> for the objection. You do this by navigating to the trademark status portal and downloading the document titled 'Examination Report'. This report is the prosecution's case against your brand. It contains the specific legal sections: typically Section 9, Section 11, or procedural discrepancies: that the examiner has cited to pause your application. Without this report, any attempt at a reply is like shooting in the dark. It is not enough to know *that* you were objected to; you must know exactly *why*. Is it because your name is too descriptive? Or is it because a competitor in Bangalore has a similar sounding name? The strategy for each is vastly different.
                                        </p>
                                        <p className="mb-6">
                                            The second critical step is to <strong>benchmark the 30 day deadline</strong>. This is not a suggestion; it is a rigid legal requirement under the Trade Marks Act, 1999. The clock starts ticking from the moment the report is 'uploaded' and made available to you on the official portal. If you miss this window, the system is programmed to automatically move your status to 'Abandoned'. While there are legal mechanisms to restore an abandoned mark, they are expensive, time consuming, and carry no guarantee of success. In the world of intellectual property, time is your greatest asset and your most dangerous enemy.
                                        </p>
                                        <p className="mb-6">
                                            The third step is <strong>professional legal consultation</strong>. A trademark objection reply is a formal legal submission. It is not an informal email or a casual explanation. It requires citations of case law, judicial precedents from the High Courts and the Supreme Court, and tactical positioning of your brand's unique identity. An experienced IP attorney will look at the objection from a strategic perspective, identifying if the examiner made an error in judgment or if your brand needs a more aggressive defense of its acquired distinctiveness. At IPR Karo, we perform a multi point analysis on every examination report to find the path of least resistance to acceptance.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-[rgb(110,94,147)] my-8">
                                            <h3 className="text-xl font-bold mb-4 text-gray-900">Why the 'Objection' Phase Exists</h3>
                                            <p className="text-sm opacity-80 leading-relaxed">
                                                The Trademark Registry acts as a gatekeeper. Their primary goal is to ensure that the public is not confused by similar looking brands and that common words in the English language (or any Indian language) are not monopolized by a single corporate entity. The objection phase is the filter that keeps the trademark register clean and legally enforceable. By responding correctly, you are not just fighting the government; you are proving that your brand deserves its place among the elite, constitutionally protected intellectual assets of the country.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="meaning-of-objected" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Demystifying the Status: What "Objected" Truly Means for Your Business
                                        </h2>
                                        <p className="mb-6">
                                            In the complex ecosystem of intellectual property, terminology often causes confusion. When the status says "Objected," it means that the Examiner of Trademarks, during the formality check and substantive examination, has found certain issues that prevent the mark from being directly "Accepted and Advertised." It is effectively a "Show Cause" notice where the government is asking you: "Why should we give you exclusive rights over this name?" This is common in a country as diverse as India, where thousands of new brands are born every week.
                                        </p>
                                        <p className="mb-6">
                                            Many entrepreneurs mistake this for a total rejection. This is a myth that needs to be debunked. Rejection normally happens only *after* you have filed a reply and attended a hearing, and the Registrar is still not convinced of your legal arguments. "Objected" is an invitation to a dialogue. It is a critical bridge where the applicant provides additional evidence, legal arguments, and clarifications to satisfy the Registrar's concerns. In fact, many industry leaders, including multi billion dollar conglomerates, face objections on almost every new sub brand they launch. It is simply a part of the "doing business" overhead in IP.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "An objection is a legal pause button, not a stop sign. It is the phase where a brand's history and legal standing are put to the test before the public gazette. Succeeding here makes your mark significantly more defensible in future litigation."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The objection can be procedural or substantive. Procedural objections might relate to the classification of goods: for instance, if you listed 'Software' under Class 5 which is for pharmaceuticals instead of Class 9. Other procedural issues include an incorrectly filed power of attorney or issues with the digital signature and resolution of the logo uploaded. Substantive objections: which are the more serious ones: relate to the inherent qualities of the mark itself or its similarity to others. Regardless of the type, every objection requires a formal, structured response to move the application back onto the track toward registration.
                                        </p>
                                        <p className="mb-6">
                                            For a startup, an objection can feel like a roadblock to funding or a product launch. However, a 'Pending' mark with a filed objection reply still carries legal weight. It allows you to use the ™ symbol and gives you a priority date that can be used to block others from registering similar marks in the future. The key is to maintain the momentum and not let the application stagnate.
                                        </p>
                                    </section>

                                    <section id="objection-vs-opposition" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Objection vs. Opposition: Knowing the Difference and the Stakes
                                        </h2>
                                        <p className="mb-8 font-semibold text-xl">
                                            It is vital to distinguish these two terms as they occur at different stages of the trademark process and involve different adversarial parties. Confusing the two can lead to wrong legal budgeting and strategy.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Trademark Objection</h3>
                                                </div>
                                                <ul className="text-sm space-y-3">
                                                    <li><strong>Raised By:</strong> The Trademark Registry/Examiner. This is an internal government audit of your mark.</li>
                                                    <li><strong>Stage:</strong> Pre publication. The public hasn't even seen your mark in the official journal yet.</li>
                                                    <li><strong>Nature:</strong> Examiner checking statutory compliance under Section 9 and 11.</li>
                                                    <li><strong>Timeline:</strong> Usually within 1 to 4 months of the initial filing date.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faBalanceScale} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Trademark Opposition</h3>
                                                </div>
                                                <ul className="text-sm space-y-3">
                                                    <li><strong>Raised By:</strong> Any Third Party. Usually a competitor who feels your mark is too close to theirs.</li>
                                                    <li><strong>Stage:</strong> Post publication. The mark has been 'Accepted' by the government but is being challenged by the public.</li>
                                                    <li><strong>Nature:</strong> Public challenge to your ownership. It's an inter party legal dispute.</li>
                                                    <li><strong>Timeline:</strong> During the mandatory 4 month window after the mark is advertised in the Trademark Journal.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we often see clients getting confused between the two. Understanding that an objection is an internal government process while an opposition is an external public contest helps in allocating the right resources for each. While an objection can often be cleared with a strong written reply and a hearing, an opposition is a full blown legal proceeding that involves evidence filing (Rule 45, 46, and 47) and multiple hearings. The objection phase is your "entrance exam," while the opposition phase is "surviving the market competition."
                                        </p>
                                        <p className="mb-6">
                                            The costs also vary significantly. Objection replies are generally more affordable as they involve dealing with a single examiner. Oppositions require a sustained legal defense over 12 to 24 months, involving counter statements and evidence in support. By successfully clearing the objection phase with a "bulletproof" reply, you often discourage competitors from filing an opposition because they see that your legal standing is already validated by the Registrar's scrutiny.
                                        </p>
                                    </section>

                                    <section id="section-9-grounds" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Deep Dive: Section 9 Absolute Grounds for Refusal and How to Beat Them
                                        </h2>
                                        <p className="mb-8 text-lg">
                                            Section 9 of the Trade Marks Act, 1999, outlines the inherent disqualifiers for a mark. This is where the examiner argues that your mark is simply not capable of functioning as a distinctive brand. It is not about *who* else has the mark, but about *what* the mark is.
                                        </p>
                                        <div className="space-y-8">
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Lack of Distinctiveness [Section 9(1)(a)]</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        This is the most common objection. It suggests that your brand name is too common or generic to distinguish your goods from others. For example, trying to trademark the word 'Soft' for a pillow brand would face this hurdle. The logic is that everyone should be allowed to call their pillows soft. 
                                                    </p>
                                                    <p className="text-base text-gray-600">
                                                        <strong>The Solution:</strong> We use the 'Acquired Distinctiveness' argument. We gather evidence to show that since your brand has been in the market for X years, has spent Y amount on marketing, and has Z millions in turnover, the public no longer thinks of 'softness' but specifically thinks of *your company* when they see that mark. This is also called 'Secondary Meaning'.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faInfoCircle} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Descriptive Nature [Section 9(1)(b)]</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Section 9(1)(b) prohibits marks that consist exclusively of signs which serve in trade to designate the kind, quality, quantity, or intended purpose of the goods. If your brand for a coffee shop is 'Strong Black Coffee', it is descriptive. The law prevents you from having a monopoly over words that describe the product itself.
                                                    </p>
                                                    <p className="text-base text-gray-600">
                                                        <strong>The Solution:</strong> We argue that the mark is 'Suggestive' rather than 'Descriptive'. A suggestive mark requires a leap of imagination from the consumer (e.g., 'Netflix' suggests movies but doesn't describe the technology). We also utilize 'De minimis' arguments if only a small part of the mark is descriptive while the overall branding is unique.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Scandalous, Religious or Prohibited [Section 9(2)]</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Your mark cannot contain anything that hurts religious sentiments, is scandalous or obscene, or is prohibited under the Emblems and Names Act. For example, using the Ashoka Chakra or the face of a deity for a liquor brand would face severe objections. 
                                                    </p>
                                                    <p className="text-base text-gray-600">
                                                        <strong>The Solution:</strong> This is a hard objection to overcome if the violation is blatant. However, we often find that examiners overreach. If the religious reference is subtle or has a secular double meaning, we can argue for the mark's validity based on constitutional freedoms and existing registrations of similar marks.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-8">
                                            The fight against Section 9 is a fight of evidence. It is where you prove that your brand is not just a word but a 'Source Identifier'. We look into your historical records, including domain registrations, early social media posts, and even local trade license applications to build a solid wall of proof that your mark is capable of being registered.
                                        </p>
                                    </section>

                                    <section id="section-11-grounds" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Collision Course: Section 11 Relative Grounds and Similarity Analysis
                                        </h2>
                                        <p className="mb-6">
                                            Section 11 is the most fiercely contested area of trademark law. This occurs when the examiner finds one or more existing marks on the register that are identical or "confusingly similar" to yours. The core philosophy here is to protect the consumer from confusion and to prevent one brand from riding on the coattails of an established entity's reputation. This is where your brand's uniqueness is compared against the millions of marks already on the Indian register.
                                        </p>
                                        <p className="mb-6">
                                            Similarity is analyzed on three levels: <strong>Phonetic</strong> (how they sound when spoken), <strong>Visual</strong> (how they look in the logo), and <strong>Structural</strong> (how the words are composed and the fonts used). For instance, 'AquaPure' and 'AkwaPure' are phonetically identical despite different spellings. The law ignores clever spelling if the sound remains the same. However, the legal battle often happens in the grey areas. If your mark is 'Z-Pure' and there is an existing mark 'Zee Pure', are they too similar? The examiner might say yes, but our job is to prove no based on the specific market of use.
                                        </p>
                                        <p className="mb-6">
                                            In a Section 11 defense, we use the 'Pianotist Test' and other judicial standards. We argue that the 'person of average intelligence and imperfect recollection' will not be confused because the price points are different (e.g., a luxury car vs. a cheap toy), the target audience is different (e.g., a technical industrial engineer versus a retail housewife), or the trade dress is vastly distinct. We also conduct 'Status Scrutiny' on the cited mark. If the competitor's mark is also 'Objected' or has 'Expired' but is still showing on the system, we can move for it to be removed as a citation.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Concept of Honest Concurrent Use</h3>
                                            <p className="opacity-80 leading-relaxed italic mb-4">
                                                Under Section 12, if we can prove that you have been using your mark honestly and concurrently with the other mark for many years without any reported instances of actual marketplace confusion, the Registrar can exercise discretion to accept your mark even if it bears some similarity to an existing one. 
                                            </p>
                                            <p className="opacity-80 leading-relaxed italic">
                                                This is a powerful legal shield for established small businesses. If you have been selling 'Star Shoes' in Delhi and someone else has been selling 'Star Footwear' in Mumbai for 10 years, and neither has complained about the other, the Registry recognizes that both brands can coexist. We help gather the 'Innocence of Adoption' proof to win this argument.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, we look for 'Prior User Rights'. In India, a 'prior user' often has more rights than a 'prior registrant'. If you have been using the mark since 2010 but the cited mark was registered in 2015, you have the superior legal right. We file a 'User Affidavit' to bring this to the examiner's notice, which often leads to the immediate lifting of the Section 11 objection.
                                        </p>
                                    </section>

                                    <section id="drafting-the-reply" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Mastering the Art of the Objection Reply: A Strategic Blueprint
                                        </h2>
                                        <p className="mb-8">
                                            The reply is your primary legal manifest. It is the only document the examiner will read before deciding the fate of your brand. It is not enough to simply state that your mark is different. You must build a narrative backed by legal logic, facts, and judicial weight. A high quality trademark objection reply usually includes the following components, and missing any of them can weaken your case:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10 mb-12">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Factual Background & Origin
                                                </h3>
                                                <p className="text-sm text-gray-600">This section establishes your brand's history and why you chose this specific name. It shows the 'Intent of Adoption'. Was the name inspired by your family history or a unique scientific concept? Establishing a clean, honest origin helps in convincing the Registrar that you are not trying to copy anyone. We also detail the geographical reach of your sales and your market presence.</p>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Judicial Precedents & Case Laws
                                                </h3>
                                                <p className="text-sm text-gray-600">The Trademark Registry is bound by the decisions of higher courts. We cite specific rulings where similar sounding names were allowed or where 'descriptive' words were granted protection because of their unique layout. Citing landmark cases like the 'Cadbury vs Lotus' or 'Parle G' cases forces the examiner to consider existing judicial standards rather than relying on personal subjective opinion.</p>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Direct Comparative Defense
                                                </h3>
                                                <p className="text-sm text-gray-600">For Section 11 objections, we provide a rigorous side by side comparison. We don't just look at the word; we look at the 'Trade Dress' : the colors, the fonts, the slogans. We break down the 'Dominant Part' of the mark. If your brand is 'Star Sun' and the cited mark is 'Star Moon', we argue that the word 'Star' is common and the suffix 'Sun' provides the necessary distinctiveness.</p>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Formal User Affidavits
                                                </h3>
                                                <p className="text-sm text-gray-600">In substantive disputes, we include a formal affidavit from the proprietor, sworn before a notary. This is a legal declaration of the facts. It carries the weight of a court testimony. By stating your turnover figures and marketing spends under oath, you provide the Registrar with the 'legal comfort' needed to accept the mark despite initial doubts.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            The drafting process at IPR Karo is iterative. We first perform a 'Risk Audit' of the examination report, then our legal researchers find the most relevant case laws for your specific industry (e.g., Pharma, E commerce, or Manufacturing). Finally, a senior IP attorney reviews the submission to ensure it meets the highest standards of the Trademark Registry. We don't use templates; we write every reply from scratch because every brand story is unique.
                                        </p>
                                    </section>

                                    <section id="evidence-collection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Evidence Matrix: Building an Unshakeable Wall of Proof
                                        </h2>
                                        <p className="mb-6">
                                            In trademark law, "User Proof" is the ultimate weapon. If you claim to have been using a mark since a certain date, the Registry will not take your word for it: you must provide the paper trails. The strength of your evidence is often the deciding factor in whether an objection is cleared during the initial review or dragged into a long drawn out hearing process. 
                                        </p>
                                        <p className="mb-6">
                                            Evidence serves two purposes: it proves 'Honest Adoption' (that you didn't copy someone) and it proves 'Secondary Meaning' (that people know you by this name). Even if your name is slightly descriptive, a mountain of evidence showing that you have served 10,000 customers can force the examiner to grant you the registration.
                                        </p>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 mb-10">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="py-4 px-6 border-b text-left font-bold text-gray-900">Type of Evidence</th>
                                                        <th className="py-4 px-6 border-b text-left font-bold text-gray-900">Value to Your Case</th>
                                                        <th className="py-4 px-6 border-b text-left font-bold text-gray-900">Ideal Form & Presentation</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm text-gray-600">
                                                    <tr>
                                                        <td className="py-4 px-6 border-b font-bold">Sales Invoices & Receipts</td>
                                                        <td className="py-4 px-6 border-b">The most 'Gold Standard' proof. Shows the mark was actually in trade.</td>
                                                        <td className="py-4 px-6 border-b">Invoices from different years, showing the brand name clearly in the header.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-4 px-6 border-b font-bold">Marketing & Ads Spend</td>
                                                        <td className="py-4 px-6 border-b">Shows your active attempt to educate the public about the brand.</td>
                                                        <td className="py-4 px-6 border-b">Facebook Ads reports, TV ad contracts, Newspaper clipping dates.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-4 px-6 border-b font-bold">Digital Presence Records</td>
                                                        <td className="py-4 px-6 border-b">Provides a neutral, third party timestamp for your brand adoption.</td>
                                                        <td className="py-4 px-6 border-b">Whois records, Google Search Console data snapshots.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-4 px-6 border-b font-bold">Public or Stakeholder Reviews</td>
                                                        <td className="py-4 px-6 border-b">Proves that consumers actually recognize the name in the market.</td>
                                                        <td className="py-4 px-6 border-b">Trustpilot links, Amazon seller ratings, Google My Business reviews.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-4 px-6 border-b font-bold">Awards & Certifications</td>
                                                        <td className="py-4 px-6 border-b">Adds high credibility to the 'distinctiveness' argument.</td>
                                                        <td className="py-4 px-6 border-b">ISO certificates in the brand name, Industry awards, News mentions.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mb-6">
                                            One of the biggest mistakes business owners make is providing "bulk evidence" that is irrelevant. If you have 1000 invoices but only 5 show the brand name, the other 995 are useless. We help you curate a 'representative sample' of evidence. We select 2-3 key invoices from every year of use, combined with social media snapshots and trade license copies, to create a chronological story that is easy for the examiner to digest. We also ensure that the evidence is 'indexed' and 'cross referenced' in the reply, making the examiner's job easier: which significantly increases your chances of a quick approval.
                                        </p>
                                    </section>

                                    <section id="show-cause-hearing" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Show Cause Hearing: Your Day in (Legal) Court and How to Win It
                                        </h2>
                                        <p className="mb-6">
                                            If the examiner is not entirely satisfied with the written response, they will issue a status "Ready for Show Cause Hearing." This is perfectly normal and should not be viewed as a failure of the written reply. It simply means the examiner wants a direct interaction to resolve certain technical doubts or to see physical samples of the product. In the Indian IP system, the hearing is the final frontier before a decision of acceptance or refusal is made.
                                        </p>
                                        <p className="mb-6">
                                            The hearing is conducted by a Senior Examiner or a Registrar, acting in a quasi judicial capacity. In the post pandemic era, these hearings are primarily held virtually through video conferencing platforms like Webex or Zoom. Your attorney will represent you, presenting a 'Case Summary' and addressing the specific doubts raised by the official. The hearing is usually brief: typically 5 to 10 minutes: but don't let the short duration fool you. Those 10 minutes are the result of hours of legal research. 
                                        </p>
                                        <p className="mb-6">
                                            Preparation is key. During the hearing, the Registrar might ask for 'Disclaimers' (e.g., agreeing that you don't have exclusive rights over a specific word like 'India' or 'Tech' within your brand) or suggest slight modifications to the description of goods to avoid conflict with a cited competitor. A skilled attorney knows when to stand firm and when to negotiate a strategic compromise that secures the registration while maintaining the brand's core protection. 
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex gap-6 items-center my-8 shadow-sm">
                                            <div className="w-20 h-20 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-3xl">
                                                <FontAwesomeIcon icon={faUserTie} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2 text-gray-900 uppercase">IPR Karo's Hearing Success Protocol</h4>
                                                <p className="text-sm opacity-70 leading-relaxed">
                                                    We don't just 'show up' for hearings. We perform 'Mock Hearings' internally for every case. We analyze the specific Registrar's recent rulings and trends (some Registrars are more strict on phonetic similarity, others on descriptiveness). We ensure our attorney has every relevant precedent, physical product sample, and evidence index on their screen. This data driven preparation is why we maintain an industry leading success rate in overcoming complex objections at the hearing stage.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            After the hearing, the Registrar usually gives an oral decision. They can 'Accept' the mark, 'Refuse' it, or mark it as 'Deferred' if they want you to file additional documents. If accepted, the mark finally moves into the Trademark Journal for a 4 month public review. If refused, don't worry: the legal journey doesn't end there.
                                        </p>
                                    </section>

                                    <section id="post-objection-scenarios" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Acceptance and Beyond: The Road to the ® Symbol
                                        </h2>
                                        <p className="mb-6">
                                            Once you have successfully navigated the objection phase, the status will change to <strong>"Accepted and Advertised."</strong> This is a major milestone in your business's history! It means the government is satisfied with your ownership claim. Your mark will then be published in the weekly Trademark Journal (published every Monday). This publication invites the general public to raise any 'Oppositions' within a strict four month window. It is the final 'safety check' to ensure no private citizen's rights are being stepped on.
                                        </p>
                                        <p className="mb-6">
                                            If no one opposes your mark during these four months, the status will move to "Registered," and your official Certificate of Registration will be issued. This is a digital document that provides you with prima facie evidence of ownership across all 28 states and 8 union territories of India. You can then replace the ™ symbol with the ® symbol on your website, products, and marketing material. This is more than just a symbol; it's a signal of trust, a barrier to entry for competitors, and a valuable asset for any future exit or acquisition.
                                        </p>
                                        <p className="mb-6">
                                            However, if your reply is refused even after the hearing, you still have powerful legal recourse. You can file a 'Review Petition' within 30 days of the refusal order if there's an error in the judgment. Or, you can file an appeal before the High Court. Recent changes in Indian law (the abolition of the IPAB) mean that these appeals now go directly to the Commercial Divisions of the High Courts, which are much faster and more specialized in handling IP matters. While these steps are more intensive, they ensure that every possible constitutional and legal avenue is explored to protect your brand identity.
                                        </p>
                                        <p className="mb-6">
                                            In the long term, brand protection is a continuous process. Once registered, your trademark is valid for 10 years, and you must renew it periodically. You also need to actively monitor the Trademark Journal to ensure nobody else tries to register a similar mark. Our 'Brand Sentinel' service helps registered owners protect their turf by auto flagging and opposing infringing applications.
                                        </p>
                                    </section>

                                    <section id="costs-and-timelines" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            The Roadmap: Timelines and Financial Planning for Peace of Mind
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            Clarity is the foundation of trust. We break down the time and money required to reclaim your brand from an objection status.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faHourglassHalf} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-gray-900">The Realistic Timeline</h4>
                                                <ul className="space-y-4 w-full text-sm text-gray-600">
                                                    <li className="flex justify-between border-b pb-2"><span>Receiving Report to Filing Reply</span> <span className="font-bold text-red-600">Strictly 30 Days</span></li>
                                                    <li className="flex justify-between border-b pb-2"><span>Registrar's Internal Review</span> <span>3 to 8 Months</span></li>
                                                    <li className="flex justify-between border-b pb-2"><span>Hearing Scheduling (If necessary)</span> <span>6 to 12 Months</span></li>
                                                    <li className="flex justify-between border-b pb-2"><span>Final Registration Certificate</span> <span>12 to 18 Months Total</span></li>
                                                </ul>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faFileSignature} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">Legal Service Investment</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">Affordable, transparent pricing with no hidden costs for Indian startups.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Routine Objection Reply</span>
                                                        <span className="text-lg font-black text-white">₹2,499</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Substantive deep defense drafting</span>
                                                        <span className="text-lg font-black text-white">₹4,999</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Attorney hearing representation</span>
                                                        <span className="text-lg font-black text-white">₹3,499</span>
                                                    </div>
                                                </div>
                                                <p className="mt-4 text-[11px] opacity-60">*Note: There are no government fees for filing the initial objection reply.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Proven Success: Brands That Thrived After Objection
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-[rgb(110,94,147)] hover:shadow-md transition-all">
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
                                            Expert Insights: Frequently Asked Questions on Objections
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Brand's Future Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Every minute counts when dealing with a 30 day legal deadline. Let India's premier IP team analyze your case and draft a bulletproof reply.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Get Free Legal Consultation
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Urgent: 30 Day Deadline</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Your trademark application is at risk of being marked as **Abandoned**. Get a professional reply drafted by senior IP attorneys.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Draft My Reply Now
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
                                        <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base text-[rgb(110,94,147)]">Overcome Objection</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-happens-if-someone-opposes-my-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Opposition Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Section 9 & 11 Deep Dive</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Examination Reports</span>
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
