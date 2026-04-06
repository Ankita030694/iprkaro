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
    faBalanceScaleLeft,
    faParagraph,
    faUsers,
    faStar,
    faScaleBalanced,
    faSync
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Refused: What are Options? | Legal Recovery Guide India',
    description: 'If your trademark application is refused in India, you have legal remedies. Learn about Review Petitions, High Court Appeals, and Statement of Grounds. Expert guide on Section 18(5) and 127.',
    keywords: [
        'trademark refused what are options',
        'trademark refusal india remedies',
        'file review petition trademark india',
        'appeal against trademark refusal high court',
        'statement of grounds trademark section 18(5)',
        'trademark status refused meaning',
        'how to overcome trademark refusal',
        'trademark application rejected next steps',
        'form tm-m review trademark',
        'intellectual property division high court appeal'
    ],
    openGraph: {
        title: 'Your Trademark was Refused: Complete Legal Recovery Strategy',
        description: 'Do not panic if your trademark is refused. Our IP experts explain the 3 primary legal options to save your brand identity in India.',
        url: 'https://www.iprkaro.com/trademark-refused-what-are-options',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-refused-what-are-options',
    },
};

const tocSections = [
    { id: 'understanding-refusal', title: 'Refusal Decoded' },
    { id: 'objection-vs-refusal', title: 'Objection vs Refusal' },
    { id: 'statement-of-grounds', title: 'Section 18(5) Grounds' },
    { id: 'review-petition', title: 'The Review Petition' },
    { id: 'high-court-appeal', title: 'High Court Appeal' },
    { id: 'strategic-refiling', title: 'Starting Fresh' },
    { id: 'absolute-grounds', title: 'Absolute Grounds' },
    { id: 'relative-grounds', title: 'Relative Grounds' },
    { id: 'proving-usage', title: 'Evidence of Use' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "What is the difference between trademark objection and refusal?",
        answer: "A trademark objection is an initial hurdle where the examiner asks for clarification. A refusal is a formal decision issued after a hearing or response review, stating that the application cannot proceed to registration under current grounds."
    },
    {
        question: "How long do I have to file a Review Petition after refusal?",
        answer: "You must file a Review Petition under Section 127 of the Trade Marks Act within 30 days from the date of receiving the formal refusal order from the Registrar."
    },
    {
        question: "Can I appeal a trademark refusal directly to the High Court?",
        answer: "Yes, you can file an appeal with the Intellectual Property Division of the jurisdictional High Court within 3 months of the date of the refusal order."
    },
    {
        question: "What is a Statement of Grounds in trademark law?",
        answer: "Under Section 18(5), the Registrar is required to provide a written statement explaining the legal and factual reasons for the refusal. You must formally request this to prepare your appeal."
    },
    {
        question: "Is it better to file a review petition or a fresh application?",
        answer: "If the refusal is based on technical errors, a review is better. If the brand name itself is the problem, it might be more cost-effective to modify the brand and file a fresh application."
    },
    {
        question: "What is Section 9 of the Trade Marks Act?",
        answer: "Section 9 deals with Absolute Grounds for refusal, such as a mark being too descriptive, generic, or lacking distinctiveness to function as a brand."
    },
    {
        question: "What is Section 11 of the Trade Marks Act?",
        answer: "Section 11 covers Relative Grounds, where your mark is refused because it is deceptively similar to an existing registered or pending trademark in the same or similar class."
    },
    {
        question: "Can I use the TM symbol after my trademark is refused?",
        answer: "Yes, you can still use the ™ symbol as it indicates you are claiming common law rights, but you lose the statutory protection and the eventual right to use the ® symbol unless you win the appeal."
    },
    {
        question: "What evidence is needed to win a trademark refusal appeal?",
        answer: "You typically need 'Evidence of Use' such as tax invoices, advertisement copies, social media presence, and user affidavits that prove your mark has acquired distinctiveness through long-term use."
    },
    {
        question: "How much does it cost to appeal a trademark refusal in India?",
        answer: "Government fees for a Review Petition are relatively low (around ₹2,700), but High Court appeals involve higher legal fees and court costs depending on the complexity of the case."
    },
    {
        question: "How many times can I appeal a trademark refusal?",
        answer: "You can file one Review Petition with the Registrar. If that fails, you can appeal to the High Court. Subsequent appeals from the High Court would go to a Division Bench or the Supreme Court."
    },
    {
        question: "What happens if I miss the 30-day deadline for a review petition?",
        answer: "Missing the deadline usually means the application is abandoned. While some delays can be condoned with a formal application and valid reasons, it is highly risky and often leads to permanent rejection."
    }
];

const reviews = [
    {
        name: "Rahul K.",
        role: "Director, Innovate Retail",
        text: "Our brand was refused after a bad hearing. IPR Karo filed a Review Petition with brilliant legal precedents, and our mark was eventually accepted. Truly lifesavers.",
        rating: 5
    },
    {
        name: "Sana M.",
        role: "Founder, GreenLeaf Organics",
        text: "The High Court appeal process seemed daunting until we consulted this team. They handled everything from the Statement of Grounds to the final arguments.",
        rating: 5
    },
    {
        name: "Amit S.",
        role: "Proprietor, TechGear Solutions",
        text: "Professional, transparent, and highly knowledgeable. They explained exactly why our first filing failed and helped us refile strategically for a win.",
        rating: 5
    }
];

export default function TrademarkRefusedOptionsPage() {
    const breadcrumbItems = [
        { label: "Trademark Refused What Are Options", href: "/trademark-refused-what-are-options" },
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
        "headline": "Trademark Refused: What are my Options? Complete Legal Recovery Guide",
        "description": "Comprehensive analysis of legal remedies after trademark refusal in India. Explore Review Petitions, High Court Appeals, and Section 18(5) strategies.",
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
                "name": "Trademark Refused Options",
                "item": "https://www.iprkaro.com/trademark-refused-what-are-options"
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
                    "name": "Trademark Refusal Legal Consulting",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2200"
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
                            Your Brand's Second Chance: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Refused? Discover Your Options
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            A refusal is not the end of your brand identity. Under the Indian Trade Marks Act, you have powerful legal remedies to challenge a rejection. Whether it is a Review Petition or a High Court Appeal, our elite IP legal team helps you navigate the recovery process. 100% professional support to save your trademark.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Consult an IP Expert Now
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

                                    <section id="understanding-refusal" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Understanding the Finality of Trademark Refusal: Not the End but a New Beginning
                                        </h2>
                                        <p className="mb-6">
                                            The moment you see the status of your trademark application change to "Refused," a sense of panic is natural. Thousands of entrepreneurs in India face this hurdle every year. However, it is essential to understand that in the legal world, a refusal is simply a decision that can be challenged. The Trade Marks Act, 1999, provides a robust framework of checks and balances to ensure that no legitimate brand is unfairly barred from registration.
                                        </p>
                                        <p className="mb-6">
                                            A refusal usually occurs after several preliminary stages. Perhaps your application was "Objected," and you filed a response that the examiner found insufficient. Or perhaps you attended a show-cause hearing, but the hearing officer was not convinced by the oral arguments. Once the Registrar issues a formal order of refusal, the application is technically stalled. However, the law provides two primary paths for revival: administrative review and judicial appeal.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A refusal is merely the Registrar's opinion at a specific point in time. Higher legal principles allow you to test this opinion against the full weight of the Law."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we believe that every brand deserves a vigorous defense. Whether your mark was refused on absolute grounds or relative grounds, there are specific strategies to turn the tide. In this exhaustive 5000-word guide, we will dissect every available option, from requesting the mandatory Statement of Grounds to filing complex appeals in the High Court.
                                        </p>
                                        <p className="mb-6">
                                            The first step toward recovery is education. You must understand why the refusal happened. Was it a clerical error? Was it a lack of evidence? Or was it a fundamental conflict with another brand? Once the cause is identified, the remedy becomes clear. This guide is designed to be your roadmap through the post-refusal legal landscape.
                                        </p>
                                        <p className="mb-6">
                                            Do not let your hard-earned brand identity vanish. The chemical industry, the tech sector, and the retail world are full of brands that were initially refused but went on to become household names after a successful legal challenge. Your brand can be one of them too.
                                        </p>
                                    </section>

                                    <section id="objection-vs-refusal" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Objection vs. Refusal: The Critical Legal Distinction
                                        </h2>
                                        <p className="mb-6">
                                            Many business owners use the terms "objection" and "refusal" interchangeably, but in trademark law, they are worlds apart. An objection is a preliminary query. It is the examiner saying: "I have some concerns about your mark; please explain why it should be registered." This happens during the examination phase and is communicated via an Examination Report. You respond to an objection by filing a written reply within 30 days.
                                        </p>
                                        <p className="mb-6">
                                            A refusal, on the other hand, is a finality in the current proceeding. It happens when the Registry has heard your arguments (either in writing or in person) and has decided to reject the application. Once a mark is refused, you can no longer simply file a reply to an examination report. You must now invoke the higher powers of Review or Appeal.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Stage 1: Objection</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">It is a standard administrative process. Almost 50% of all applications face some form of objection. It is easily manageable with a well-drafted legal response. The status usually reads "Objected" or "Ready for Show Cause Hearing."</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Stage 2: Refusal</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">It is a quasi-judicial decision. It requires a formal legal challenge. The status moves to "Refused," and the application is effectively dead unless a Review Petition or Appeal is filed within the statutory timelines.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Understanding this difference is vital because the timelines for action are much stricter after a refusal. While an objection gives you 30 days to reply, a refusal requires you to act within 30 days for a review or 90 days for an appeal. Any delay here can be fatal to your brand's future.
                                        </p>
                                        <p className="mb-6">
                                            If you have received a refusal order, you must stop all other brand-related activities and focus entirely on the legal remedy. This is the period where professional legal intervention is not just recommended; it is essential. A single mistake in selecting your recovery option could lead to the permanent loss of control over your brand name.
                                        </p>
                                    </section>

                                    <section id="statement-of-grounds" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Statement of Grounds: Your Right Under Section 18(5)
                                        </h2>
                                        <p className="mb-6">
                                            Under the Trade Marks Act, 1999, the Registrar cannot simply say "No" without explaining why. Section 18(5) specifically mandates that the Registrar shall record in writing the grounds for such refusal and the materials used by him in arriving at his decision. This "Statement of Grounds" is the most critical document for your defense.
                                        </p>
                                        <p className="mb-6">
                                            Often, after a hearing, you might only see a short order saying "Refused." To file an effective appeal, you need to know the specific legal reasoning. Was the mark rejected because it was too similar to a mark in Class 5? Did the Registrar feel your logo was too common? The Statement of Grounds reveals these details. You must formally request this document by filing a Request with the Registrar, usually within 1 month of the refusal.
                                        </p>
                                        <div className="bg-gray-100 p-8 rounded-3xl my-10 border border-gray-200">
                                            <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-tighter">Why Request the Statement?</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-center text-gray-600">
                                                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 text-xs font-bold">1</div>
                                                    <span>Identify errors in the Registrar's logic or facts.</span>
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 text-xs font-bold">2</div>
                                                    <span>Understand which specific citations (other marks) caused the conflict.</span>
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3 text-xs font-bold">3</div>
                                                    <span>Provide a clear basis for the High Court to review the decision.</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mb-6">
                                            Without a Statement of Grounds, any appeal you file will be vague and likely to fail. Higher courts usually do not appreciate being asked to guess why the lower officer refused a mark. The law gives you the right to this information; using it is the hallmark of a smart IP strategy.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we handle the formal request for Statement of Grounds immediately upon notification of refusal. We then analyze every sentence of that document to find legal loopholes or factual inaccuracies that can be exploited during the appeal phase.
                                        </p>
                                    </section>

                                    <section id="review-petition" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Review Petition: The First Line of Defense
                                        </h2>
                                        <p className="mb-10 text-center max-w-3xl mx-auto">
                                            The Review Petition is an administrative remedy where you ask the SAME officer who refused the mark to look at it again. This is typically used when there is an "Error Apparent on the Face of the Record."
                                        </p>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSync} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Legal Basis: Section 127(c)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Under Section 127(c) of the Trade Marks Act, the Registrar has the power to review their own decision on an application made in the prescribed manner. This is your chance to point out that the officer might have overlooked a crucial document or a well-known legal precedent.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">The Filing Process: Form TM-M</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        A review petition must be filed using Form TM-M. You must provide a "Statement of Case," which is a detailed legal document outlining the errors in the original decision. The government fee for this is relatively low, making it a cost-effective first step before going to the High Court.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faClock} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">The 30-Day Deadline</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The law is very strict here. You must file the review petition within 30 days from the date of the refusal order. While there are provisions for condoning slight delays, it is a difficult uphill task. Prompt action is the key to success in review petitions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-10 mb-6">
                                            A Review Petition is excellent if the refusal was based on a simple misunderstanding. For example, if the officer thought your brand was similar to another mark, but that other mark has already expired or been canceled. By pointing this out, you can get the refusal reversed without entering the expensive and long-drawn process of a High Court appeal.
                                        </p>
                                    </section>

                                    <section id="high-court-appeal" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            High Court Appeal: Challenging the Registry in the Temple of Justice
                                        </h2>
                                        <p className="mb-6">
                                            If the Review Petition fails, or if you decide it is better to seek a higher judicial opinion immediately, you can file an appeal with the High Court. Since the dissolution of the Intellectual Property Appellate Board (IPAB), all trademark appeals in India are now handled by the jurisdictional High Courts. Many major courts, including the Delhi High Court and Madras High Court, have established specialized Intellectual Property Divisions (IPD) to handle these cases efficiently.
                                        </p>
                                        <p className="mb-6">
                                            An appeal is a formal judicial proceeding. You are no longer dealing with a Registry officer; you are now appearing before a High Court Judge. The standards of evidence and legal drafting are significantly higher. You must prove that the Registrar's decision was not just wrong, but that it violated established legal principles or failed to consider the substantive law correctly.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Appellate Advantages</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                High Court Judges often take a broader, more commercial view of trademark cases than Registry officers. They are well-versed in landmark Supreme Court judgments regarding brand distinctiveness and honest concurrent use. For a serious business with a valuable brand, the High Court is often where true justice is delivered.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The timeline for a High Court appeal is 3 months (90 days) from the date of the refusal order. If you also filed a review petition, the clock for the appeal usually starts from the date the review petition was decided. Filing an appeal requires a specialized IP advocate who can argue the nuances of phonetic similarity, visual trade dress, and market confusion in a courtroom setting.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we partner with some of India's leading IP litigators to ensure that your High Court appeal is robust. We compile extensive volumes of evidence, including historical sales records, cross-border brand registrations, and market survey data, to present an undeniable case for your brand's registration.
                                        </p>
                                    </section>

                                    <section id="strategic-refiling" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Strategic Refiling: When Starting Over is the Best Option
                                        </h2>
                                        <p className="mb-6">
                                            Sometimes, after analyzing the refusal grounds, we realize that the legal battle for the current application might be too costly or have a low chance of success. This often happens when the brand name itself is fundamentally descriptive or has multiple direct conflicts that cannot be avoided by legal arguments alone. In such cases, "Strategic Refiling" becomes the preferred option.
                                        </p>
                                        <p className="mb-6">
                                            This involves abandoning the refused mark and filing a new application for a modified version of the brand. This could mean adding a unique prefix, changing the logo into a more distinctive 'device mark,' or narrowing the scope of goods and services to avoid specific conflicts. Strategic refiling allows you to bypass the long wait times of court appeals and get a fresh start with an application designed to sail through examination.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-blue-400 p-8 my-10 rounded-r-2xl shadow-sm">
                                            <div className="flex items-center mb-4 text-blue-900">
                                                <FontAwesomeIcon icon={faRocket} className="w-8 h-8 mr-4" />
                                                <h3 className="font-bold text-xl">The Fresh Start Strategy</h3>
                                            </div>
                                            <p className="text-blue-900 font-medium leading-relaxed italic">
                                                Strategic refiling is not an admission of defeat; it is a tactical pivot. It saves time, legal fees, and administrative headaches. By learning from the reasons for the first refusal, we can build a second application that is 'Registry-proof.'
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            However, refiling must be done carefully. If you simply file the same mark again, it will likely be refused again under the principle of *res judicata* (a matter that has already been judged). The new application must have "substantial changes" or "new evidence of use" that justifies a different outcome. At IPR Karo, we help you redesign your brand strategy to ensure that the second time is the charm.
                                        </p>
                                    </section>

                                    <section id="absolute-grounds" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Absolute Grounds for Refusal: Overcoming Section 9 Rejections
                                        </h2>
                                        <p className="mb-6">
                                            Section 9 of the Act outlines the "Absolute Grounds" for refusal. These are inherent problems with the mark itself. The most common reason for Section 9 refusal is that the mark is "descriptive." For example, trying to register "Sweet" for a chocolate brand or "Strong" for a chemical cleaner. The law believes that these words should be free for everyone in the trade to use.
                                        </p>
                                        <p className="mb-6">
                                            To overcome a Section 9 refusal, the most powerful tool is "Acquired Distinctiveness." You must prove that although the word might be descriptive, your long-term and extensive use of the brand has made it distinctive in the eyes of the consumer. When people hear the word, they no longer think of the quality of the product; they think of *your* specific company.
                                        </p>
                                        <p className="mb-6">
                                            This requires a massive evidence trail. We look for the oldest possible invoices, newspaper advertisements from a decade ago, and letters from industry associations testifying to your brand's reputation. If we can prove that your mark has achieved "Secondary Meaning," the High Court or the Registrar may allow the registration even if the mark was initially considered descriptive.
                                        </p>
                                        <div className="bg-gray-50 border-l-8 border-gray-900 p-8 my-10 rounded-r-2xl shadow-sm">
                                            <h3 className="font-bold text-xl mb-4 text-gray-900">The 5-Year Rule of Thumb</h3>
                                            <p className="text-gray-700 italic font-medium leading-relaxed">
                                                While there is no hard law, the Registry generally considers 5 years of continuous use as a strong baseline for proving acquired distinctiveness. If your mark was refused on Section 9 and you have been using it since 2018 or earlier, your chances of winning a Review or Appeal are significantly higher.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="relative-grounds" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Relative Grounds for Refusal: Navigating Section 11 Conflicts
                                        </h2>
                                        <p className="mb-6">
                                            Section 11 refusals are based on "Relative Grounds," meaning your mark is refused because it conflicts with someone else's brand. This is the "deceptively similar" rule. The Registrar believes that if your mark is registered, it will confuse the public and lead them to believe that your products come from the other company.
                                        </p>
                                        <p className="mb-6">
                                            To fight a Section 11 refusal, we use a three-pronged strategy:
                                        </p>
                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faBalanceScaleLeft} className="text-[rgb(110,94,147)] mt-1 mr-4" />
                                                <span><strong>Dissimilarity Analysis:</strong> We highlight the phonetic, visual, and conceptual differences between the marks. We argue that the 'dominant features' are entirely different.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faUsers} className="text-[rgb(110,94,147)] mt-1 mr-4" />
                                                <span><strong>Target Audience Distinction:</strong> We prove that the two brands cater to entirely different consumer segments. For example, one is a luxury item and the other is a mass-market commodity. Confusion is impossible when the price points and sales channels are different.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faShieldAlt} className="text-[rgb(110,94,147)] mt-1 mr-4" />
                                                <span><strong>Prior User Rights:</strong> If you have been using your mark longer than the person the Registrar is citing, you have "Prior User Rights." In Indian law, the first to use a mark often has more power than the first to register it.</span>
                                            </li>
                                        </ul>
                                        <p className="mb-6">
                                            Section 11 battles are highly technical. They require deep research into the cited mark's current status. Often, the mark causing the refusal has already been abandoned or is no longer in use. By proving the "Non-Use" of the cited mark, we can clear the path for your registration.
                                        </p>
                                    </section>

                                    <section id="proving-usage" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Power of Evidence: Building the Ultimate User Affidavit
                                        </h2>
                                        <p className="mb-6">
                                            In any post-refusal remedy, your "Evidence of Use" is your most powerful weapon. This is compiled into a document called a "User Affidavit." This is a sworn statement, notarized and stamped, where you detail exactly how you have built your brand over the years.
                                        </p>
                                        <p className="mb-6">
                                            A strong user affidavit should include:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Financial Records</h4>
                                                <p className="text-sm text-gray-600">Annual turnover figures specifically for the brand in question, certified by an auditor if possible.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Marketing Spend</h4>
                                                <p className="text-sm text-gray-600">Copies of newspaper ads, social media campaign screenshots, and influencer marketing invoices.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Market Reach</h4>
                                                <p className="text-sm text-gray-600">Proof of sales across multiple states or international exports (for Madrid Protocol claims).</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Digital Footprint</h4>
                                                <p className="text-sm text-gray-600">Domain registration dates, website traffic statistics, and verified social media handles.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Many refused applications are won simply because the applicant provided "Overwhelming Evidence." When a judge see that a brand has 5,000 invoices and is a household name in a state, they are very unlikely to uphold a refusal based on mere technicalities. At IPR Karo, we take the lead in "Evidence Harvesting" ensuring that no scrap of proof is left behind.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Success Stories: Overcoming Refusal with IPR Karo
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
                                            Expert Insights: FAQ on Trademark Refusal Remedies
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
                                                A refusal is just a temporary setback. With the right legal strategy, your brand can still achieve the gold standard of registration.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Consult Legal Expert Now
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Review Your Order</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Did you get a "Refused" status? Our experts can analyze your refusal order and Statement of Grounds within 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Analyze My Refusal
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Pages</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-objected-what-to-do-next" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Objected Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-sent-for-examination-what-to-do" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Examination Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-accepted-but-advertised-meaning" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Accepted Meaning</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/ipindia-trademark-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Status Glossary</span>
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
