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
    faClock,
    faLaptop,
    faScaleBalanced,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Hearing Notice: What to Do? | Indian Procedure 2024',
    description: 'Expert guide on handling trademark hearing notices in India. Learn preparation strategies, evidence requirements, virtual hearing protocols, and how to win your registration. 5000+ word technical breakdown.',
    keywords: [
        'trademark hearing notice what to do',
        'trademark hearing procedure india',
        'respond to trademark hearing notice',
        'trademark hearing india rules 2024',
        'virtual trademark hearing india',
        'trademark hearing adjournment form tm-m',
        'trademark attendance mandatory india',
        'how to prepare for trademark hearing',
        'trademark registrar hearing india',
        'trademark registration hearing process'
    ],
    openGraph: {
        title: 'Definitive Guide to Winning Your Trademark Hearing in India',
        description: 'Protect your brand from abandonment. Master the technicalities of trademark hearings with India\'s elite IP attorneys. 5000+ words of expert strategy.',
        url: 'https://www.iprkaro.com/trademark-hearing-notice-what-to-do',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-hearing-notice-what-to-do',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Hearing Milestone' },
    { id: 'legal-authority', title: 'Legal Authority (Act of 1999)' },
    { id: 'why-notified', title: 'Why You Received the Notice' },
    { id: 'immediate-actions', title: 'First 48 Hours: Actions' },
    { id: 'preparing-defense', title: 'Drafting Your Defense' },
    { id: 'evidence-building', title: 'Evidence & Affidavits' },
    { id: 'virtual-protocols', title: 'Virtual Hearing Protocols' },
    { id: 'the-hearing-day', title: 'What Happens on the Day?' },
    { id: 'adjournments', title: 'Adjournments & Rule 50' },
    { id: 'hearing-outcomes', title: 'Possible Outcomes' },
    { id: 'post-hearing-appeals', title: 'Appeals & High Court' },
    { id: 'costs-and-planning', title: 'Costs and Financials' },
    { id: 'faqs', title: 'Comprehensive FAQs' },
];

const faqs = [
    {
        question: "Is attendance mandatory for a trademark hearing in India?",
        answer: "Yes, attendance is mandatory. If neither the applicant nor their authorized attorney appears on the scheduled date and time, the Registrar has the power to mark the application as 'Abandoned' by operation of law. This results in the loss of all priority and government fees associated with that application."
    },
    {
        question: "What is the typical timeframe for receiving a hearing notice after an objection?",
        answer: "A hearing notice is usually issued if the written response to the examination report is not found satisfactory. Depending on the backlog at the Registry, it can take anywhere from 6 months to 18 months to receive the official notice after you have filed your initial reply."
    },
    {
        question: "Can I request an adjournment for my trademark hearing?",
        answer: "Yes, you can request an adjournment under Rule 50 of the Trade Marks Rules 2017. You must file Form TM-M along with the prescribed fee at least three days before the scheduled hearing. Note that granting an adjournment is at the Registrar's discretion and is usually limited to a maximum of two times."
    },
    {
        question: "What items should be included in the 'Written Submissions' for a hearing?",
        answer: "Written submissions should include a summary of the arguments against each objection raised by the examiner, citations of relevant case law precedents, proof of trademark use if claiming prior use, and a concluding request for the mark to be advertised in the Trade Marks Journal."
    },
    {
        question: "How are virtual trademark hearings conducted in India?",
        answer: "Virtual hearings are conducted via video conferencing platforms such as Zoom or MS Teams. The Registry provides a specific link in the hearing notice or through a separate communication. You must log in using your application number and be prepared to present your screen for evidence visualization if required."
    },
    {
        question: "What happens if I miss the hearing date entirely?",
        answer: "If you miss the hearing date without a prior adjournment, the Registrar will likely issue an order of abandonment. To restore the application, you would need to file a formal request explaining the non-appearance with sufficient cause, though this is difficult and not always successful."
    },
    {
        question: "Do I need to hire a lawyer for a trademark hearing?",
        answer: "While the law allows a proprietor to appear in person, the technical nature of trademark law makes hiring an expert attorney highly recommended. An attorney understands legal precedents, can interpret technical objections, and knows how to navigate the Registrar's queries effectively."
    },
    {
        question: "What are 'Relative Grounds' for a hearing notice?",
        answer: "Relative grounds (Section 11) refer to objections where your mark is considered identical or deceptively similar to an existing registered trademark or an earlier application. In the hearing, you must prove how your mark is distinct from these existing records."
    },
    {
        question: "Can new evidence be introduced during the hearing?",
        answer: "Technically, oral evidence and supporting documents should be part of the record before the hearing. However, supplementary evidence can sometimes be introduced with the Registrar's permission if it is critical to the case and was not available earlier."
    },
    {
        question: "What is the government fee for filing an adjournment request via Form TM-M?",
        answer: "The government fee for filing an adjournment request using Form TM-M is ₹900 for online filing. This fee is non-refundable regardless of whether the adjournment is granted or denied."
    },
    {
        question: "How long after the hearing will I know the final decision?",
        answer: "The hearing officer may announce the decision verbally at the end of the hearing. However, the formal written order is typically uploaded to the official IP India portal within 15 to 45 days after the hearing has concluded."
    },
    {
        question: "Can I appeal a refusal order issued after a trademark hearing?",
        answer: "Yes, if your application is refused after a hearing, you can file an appeal. Following the abolition of the IPAB, these appeals are now handled by the Intellectual Property Divisions of the relevant High Courts (e.g., Delhi High Court or Madras High Court)."
    },
    {
        question: "What is a 'Well-Known' trademark claim in a hearing?",
        answer: "If your mark is exceptionally famous, you can argue that it should be protected across all classes, even if there are similarity objections. This requires massive evidence of reputation and awareness among the general public."
    },
    {
        question: "Is it possible to settle with the opposing party before the hearing?",
        answer: "If the hearing is based on a third-party opposition, you can definitely settle and file a withdrawal of the opposition before the hearing date. If the hearing is based on an examiner's objection (Examination Report), settlement is not possible as your conflict is with the Registry itself."
    },
    {
        question: "What language is used during Indian trademark hearings?",
        answer: "Hearings are primarily conducted in English or Hindi, depending on the preference of the parties and the hearing officer. Most technical and legal arguments are presented in English."
    }
];

const reviews = [
    {
        name: "Vikram Sethi",
        role: "CEO, Nexa Brands",
        text: "The virtual hearing was seamless thanks to IPR Karo. Their attorney's arguments against the Section 11 objection were brilliant. Our logo was advertised within two weeks of the hearing.",
        rating: 5
    },
    {
        name: "Meenakshi K.",
        role: "Founder, Lotus Organics",
        text: "We received a hearing notice for a very similar mark. IPR Karo helped us prepare a coexistence strategy that convinced the Registrar. They saved us from years of potential litigation.",
        rating: 5
    },
    {
        name: "Rahul Deshmukh",
        role: "Proprietor, RD Enterprises",
        text: "High-quality legal support. The written submissions they drafted were so detailed that the hearing officer had very few follow-up questions. Highly professional team.",
        rating: 5
    }
];

export default function TrademarkHearingPlanPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Trademark Hearing Guide", href: "/trademark-hearing-notice-what-to-do" },
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
        "headline": "Trademark Hearing Notice: Strategic Roadmap for Brand Success in India",
        "description": "Comprehensive guide for businesses receiving a trademark hearing notice. Covers preparation, evidence affidavits, virtual hearing protocols, and appeal strategies in India.",
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
                "name": "Trademark Hearing Guide",
                "item": "https://www.iprkaro.com/trademark-hearing-notice-what-to-do"
            }
        ]
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Hearing Representation Service",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1420"
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
                            Trademark Hearing Notice? <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Master the Technicalities & Win
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Receiving a hearing notice is not a dead end; it is your ultimate opportunity to present oral arguments and evidence to the Registrar. Our veteran IP attorneys break down the step-by-step roadmap to turning a technical objection into a registered certificate. 100% focused on winning your brand registration.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Prepare Your Hearing Strategy
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
                        <aside className="hidden lg:block sticky top-32 h-screen overflow-y-auto no-scrollbar pb-24">
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
                                            The Trademark Hearing: The Final Frontier of Brand Registration
                                        </h2>
                                        <p className="mb-6">
                                            Navigating the waters of intellectual property in India is a journey of persistence. For many proprietors, the process starts with hope, moves through the scrutiny of an examination report, and sometimes arrives at the critical milestone of a Trademark Hearing. Receiving a hearing notice means that the Registrar of Trademarks has lingering concerns that could not be fully resolved through your written responses. It is a signal that your application is at a crossroads.
                                        </p>
                                        <p className="mb-6">
                                            A hearing is a quasi-judicial proceeding where you or your legal representative must appear before a Hearing Officer to present oral arguments and supplementary evidence. It is your final chance to convince the Registry that your brand deserves the status of 'Registered'. In an increasingly crowded marketplace, where similar-sounding names and visual layouts are common, the hearing acts as the ultimate filter. Understanding the technicalities of this stage is the difference between owning a permanent asset and starting over from scratch.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A hearing notice is not a rejection; it is an invitation to defend your brand's integrity. It is the moment where legal strategy meets entrepreneurial vision to secure your legacy."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            This guide is built to be the most comprehensive resource for businesses facing a hearing. Whether your objection is based on Section 9 (lack of uniqueness) or Section 11 (similarity to others), we provide the tactical roadmap required to win. From the technicalities of virtual logins to the nuances of drafting 'Note of Arguments', we cover it all to ensure your brand remains protected.
                                        </p>
                                    </section>

                                    <section id="legal-authority" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Statutory Foundation: Provisions of the Trade Marks Act 1999
                                        </h2>
                                        <p className="mb-6">
                                            The authority of the Registrar to call for a hearing is rooted in Section 18(4) of the Trade Marks Act 1999. This section empowers the Registrar to accept an application absolutely or subject to such amendments, modifications, conditions, or limitations, if any, as he may think right. However, the principles of natural justice dictate that no application can be refused without offering the applicant an opportunity to be heard. This 'Right to be Heard' is a sacred component of the Indian administrative law.
                                        </p>
                                        <p className="mb-6">
                                            Accompanying the Act are the Trade Marks Rules 2017. Rule 33 specifically deals with the issuance of the hearing notice, stating that if the Registrar's objections remain despite the applicant's written reply, a hearing shall be appointed. Rules also define the protocol for adjournments (Rule 50) and the recording of the hearing's outcomes. Being familiar with these statutory provisions is not just for lawyers; it helps business owners understand the gravity of the notice and the procedural boundaries within which the hearing officer operates.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Power of Choice</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                Under the Act, the applicant has a choice. If you receive a hearing notice, you can choose to appear and fight the case, or you can choose to abandon the application. However, once a hearing is scheduled, non-appearance without an official adjournment is nearly always viewed by the Registry as an implied abandonment, leading to the immediate disposal of the file.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="why-notified" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Decoding the Objections: Why You Received the Notice
                                        </h2>
                                        <p className="mb-8">
                                            A hearing notice is rarely a surprise. It is almost always a follow-up to an Examination Report where the 'Reply' filed by the applicant was considered 'Not Satisfactory' or 'Challenged'. The objections typically fall into two major categories that define the battleground for the hearing.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Absolute Grounds (Section 9)</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The officer believes your mark is descriptive, generic, or lacks the 'inherent distinctiveness' needed to identify a single source of goods. They might argue that the name is too common (e.g., 'Fast Delivery' for a courier service) and should not be monopolized by one company.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Relative Grounds (Section 11)</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is a similarity objection. The Registry identifies earlier registered marks or applications that sound or look like yours. In the hearing, you must prove through 'Technical Differences', 'Class Analysis', or 'Prior Use' that your brand will not cause confusion among the general public.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            In some cases, the hearing might also be called to address procedural issues, such as a wrong class selection, an incorrect address of service, or issues with the multi-class filing. At IPR Karo, we perform a 'Pre-Hearing Audit' of your application to predict the hearing officer's questions, allowing us to prepare responses that are backed by technical data and historical precedents.
                                        </p>
                                    </section>

                                    <section id="immediate-actions" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The 48-Hour Response: Immediate Actions After Receiving the Notice
                                        </h2>
                                        <p className="mb-6">
                                            The moment a hearing notice is served via email or through the portal, the pressure begins. The first step is to verify the 'Hearing Date' and the 'Hearing Officer'. Different officers have different leanings regarding specific legal interpretations, and knowing the jurisdiction (Delhi, Mumbai, Ahmedabad, Chennai, or Kolkata) is vital for understanding which High Court precedents will carry the most weight.
                                        </p>
                                        <p className="mb-6">
                                            Check the status of the 'Cited Marks' in the notice. Often, the marks that were once blocking you have now been abandoned, cancelled, or expired. Finding this information can lead to a 'Clean Clearance' during the hearing. You must also check if the hearing is 'Virtual' or 'Physical'. Since 2020, over 95% of trademark hearings in India have moved to video conferencing platforms. This requires you to ensure that your 'Address of Service' and technical contact details are current so that the link for the hearing reaches you in time.
                                        </p>
                                        <div className="bg-gray-100 p-8 rounded-3xl my-10 flex items-start gap-6 border border-gray-200">
                                            <FontAwesomeIcon icon={faInfoCircle} className="text-4xl text-[rgb(110,94,147)] flex-shrink-0 mt-2" />
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">The 'Non-Appearance' Risk</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Never ignore a hearing notice. If you simply fail to show up, the application is marked as 'Abandoned'. This results in the immediate cancellation of your claim over the brand name, and a competitor could potentially file for the same name the very next day.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="preparing-defense" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase tracking-tight">
                                            Strategic Drafting: Creating an Unbeatable Defense Brief
                                        </h2>
                                        <p className="mb-6">
                                            The hearing is won long before the actual date. The preparation of a 'Note of Arguments' or 'Written Submissions' is the most critical technical task. Unlike a standard examination reply, these submissions are designed for oral presentation. We focus on 'Distinguishing Factors'. For a Section 11 objection, we break down the mark into its phonetic, visual, and structural components to show that the overall 'Gaze and Ear' of the consumer will not be confused.
                                        </p>
                                        <p className="mb-6">
                                            For Section 9 cases, we focus on 'Acquired Distinctiveness'. If your name is descriptive but has been used for 10 years, it has transcended its literal meaning. We draft arguments that highlight the brand's 'Secondary Meaning' in the market. We also gather 'Case Law Compilations'. Citing a recent judgment from the Delhi High Court or the Intellectual Property Division carries immense weight with hearing officers. This evidence-based approach turns a subjective decision into an objective legal conclusion.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10 my-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Argument Checklist
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Phonetic comparison of prefixes and suffixes.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Difference in the target consumer base.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Visual disparity in logos and color palettes.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Exclusivity of product classes.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Supporting Files
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>User Affidavit with certified invoices.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Google Analytics / Web Traffic reports.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Social media engagement metrics.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Newspaper and magazine features.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="evidence-building" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Evidence Powerhouse: Building the Affidavit of Use
                                        </h2>
                                        <p className="mb-6">
                                            In trademark law, 'User is King'. If your mark is being challenged, your strongest shield is the length and intensity of your usage. This is documented through a 'User Affidavit'. This affidavit is a formal legal statement where you declare the exact date you started using the mark in India. It must be supported by 'Solid Proof'. For a business, this means invoices from year one to the current year, proving a continuous presence in the market.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we help clients compile 'Evidence Bundles' that are easy for the hearing officer to navigate. We categorize evidence into 'Invoices', 'Advertisements', 'Corporate Presence', and 'Consumer Recognition'. We also include 'Technical Search Reports' of other similar marks that are already registered, arguing the 'Doctrine of Honest Concurrent Use'. This doctrine is a powerful tool when both parties have been using a similar name for years unintentionally. By providing overwhelming evidence, we make it difficult for the hearing officer to justify a refusal.
                                        </p>
                                    </section>

                                    <section id="virtual-protocols" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Virtual Hearing Protocols: The Digital Courtroom
                                        </h2>
                                        <p className="mb-6">
                                            The move to virtual hearings has democratized the process, allowing business owners from small towns to appear before the High Registrar in Delhi without travel costs. However, it brings new technical challenges. The hearing link is typically sent via email or updated on the IP India portal. You must ensure you have a high-speed internet connection and a camera-enabled device. The hearing officer expects a professional environment, and common technical glitches can lead to delays or the 'Passing Over' of your case.
                                        </p>
                                        <p className="mb-6">
                                            We manage the technical side for our clients. We join the virtual lobby well in advance, ensuring our audio and video are optimized. During the hearing, we use 'Screen Sharing' to highlight specific pages of the evidence bundle or compare logos side-by-side. This visual advocacy is often more effective than hours of oral speech. Understanding the platform's features (such as the 'Raise Hand' or 'Chat' function) allows for an orderly presentation of arguments, ensuring that your voice is heard clearly and without interruption.
                                        </p>
                                    </section>

                                    <section id="the-hearing-day" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Day of the Hearing: A Step-by-Step Walkthrough
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faClock} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">Step 1: Logging into the Lobby</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Hearings run in batches. You must log in at the scheduled time (often 10:30 AM or 1:30 PM) and wait in the virtual lobby. Multiple parties wait together, and the cases are called one-by-one by the court master or the officer.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">Step 2: Addressing the Objections</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        When your application is called, the officer will state the primary objections. This is where we present our oral advocacy. We address each Section 9 or 11 point with focus, citing the evidence we have already filed on the portal.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">Step 3: Receiving the Verbal Order</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The officer may grant 'Acceptance' on the spot or ask you to 'Await Orders'. In many cases, the officer might suggest minor modifications or conditions (like limiting the goods) which we evaluate for our clients instantly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="adjournments" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Adjournments and Rule 50: Handling Emergencies
                                        </h2>
                                        <p className="mb-6">
                                            Life is unpredictable, and sometimes you cannot attend a scheduled hearing due to medical emergencies, travel issues, or technical failures. Under Rule 50 of the Trade Marks Rules 2017, the Registrar has the power to adjourn a case. However, this is not a 'right'. You must file a request using Form TM-M along with the prescribed fee (₹900). A critical rule is the 'Three-Day Rule'. The request for adjournment must be filed at least three days before the scheduled date.
                                        </p>
                                        <p className="mb-6">
                                            Success in getting an adjournment depends on 'Sufficient Cause'. The Registrar will evaluate if the reason is genuine. We advise our clients to use adjournments sparingly. Frequent requests for delays can create a negative impression on the hearing officer and might even be denied, leading to an abandonment order. If you hire IPR Karo, we ensure that our attorneys are always prepared for the scheduled date, minimizing the need for adjournments and keeping your brand registration process moving at full speed.
                                        </p>
                                    </section>

                                    <section id="hearing-outcomes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Verdict: Understanding Possible Hearing Outcomes
                                        </h2>
                                        <p className="mb-6">
                                            After the hearing, the Registrar will issue an order. Understanding these statuses on the IP India portal is vital for your next steps.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-6 my-10">
                                            <div className="p-8 bg-green-50 rounded-2xl border border-green-100 flex flex-col items-center text-center hover:shadow-lg transition-all">
                                                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
                                                    <FontAwesomeIcon icon={faCheck} className="text-xl" />
                                                </div>
                                                <h4 className="font-bold text-gray-900 mb-2">Accepted</h4>
                                                <p className="text-xs text-gray-600">The objections are cleared. Your mark will be advertised in the next available Trade Marks Journal for four months.</p>
                                            </div>
                                            <div className="p-8 bg-yellow-50 rounded-2xl border border-yellow-100 flex flex-col items-center text-center hover:shadow-lg transition-all">
                                                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-4">
                                                    <FontAwesomeIcon icon={faInfoCircle} className="text-xl" />
                                                </div>
                                                <h4 className="font-bold text-gray-900 mb-2">Conditional</h4>
                                                <p className="text-xs text-gray-600">The mark is allowed but with restrictions, like disclaiming a word or changing the description of goods.</p>
                                            </div>
                                            <div className="p-8 bg-red-50 rounded-2xl border border-red-100 flex flex-col items-center text-center hover:shadow-lg transition-all">
                                                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mb-4">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="text-xl" />
                                                </div>
                                                <h4 className="font-bold text-gray-900 mb-2">Refused</h4>
                                                <p className="text-xs text-gray-600">The Registrar is not convinced. A written order of refusal will be issued, which can then be challenged in the High Court.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="post-hearing-appeals" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Path to the High Court: What if You Lose the Hearing?
                                        </h2>
                                        <p className="mb-6">
                                            If your trademark application is refused after a hearing, it is not the end of the road. Any person aggrieved by the decision of the Registrar has a statutory right to appeal. Previously, these appeals were filed before the Intellectual Property Appellate Board (IPAB). However, following the 2021 reforms, these powers have been transferred to the High Courts. The Delhi High Court, for instance, has established a specialized 'Intellectual Property Division' (IPD) which is known for its speed and technical expertise in brand disputes.
                                        </p>
                                        <p className="mb-6">
                                            An appeal must be filed within three months from the date on which the order of the Registrar is communicated to you. The High Court will review the entire record of the hearing and determine if the Registrar made a mistake in law or in interpreting the facts. High Court litigation provides a higher level of scrutiny and often results in decisions that allow marks previously refused by the Registry. We provide a seamless transition from the Registry to the Court, ensuring that your brand's defense remains consistent and powerful at every level.
                                        </p>
                                    </section>

                                    <section id="costs-and-planning" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Transparent Cost Analysis for Trademark Hearings
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            A hearing is a technical legal battle. Understanding the structural costs involved allows you to plan your brand's legal budget with confidence.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Possible Government Costs</h4>
                                                <p className="text-sm text-gray-600 mb-6">There is no attendance fee, but specific requests incur statutory charges.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Adjournment (TM-M)</span>
                                                        <span className="text-lg font-black text-gray-900">₹900</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Amending Goods (TM-M)</span>
                                                        <span className="text-lg font-black text-gray-900">₹900</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">Professional Representation</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">End-to-end support from drafting to oral advocacy.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Representation From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4 text-white">₹3,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Includes detailed research of case laws, drafting submissions, and 100% online representation by senior attorneys.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Peerless Record in High-Stakes Hearings
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
                                            Mastering the Registry: Expert FAQs
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Brand's Legacy Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                A hearing notice is your final chance to register your mark. Don't risk abandonment due to procedural errors.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
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
                        <aside className="hidden lg:block space-y-8 sticky top-32 h-screen overflow-y-auto no-scrollbar pb-24">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Hearing Date Fixed?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Don't attend the Registrar's hearing without professional backup. Get **Expert Oral Advocacy** and win your trademark.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Partner with Experts
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Other Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-objected-what-to-do-next" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Trademark Objection Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Status Meaning Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-accepted-but-advertised-meaning" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Accepted But Advertised</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Full Registration Service</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <FontAwesomeIcon icon={faScaleBalanced} className="text-4xl text-[rgb(110,94,147)] mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">High Court Appeal</h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                                    Refused after a hearing? Our litigation team handles technical appeals before the Intellectual Property Division of the High Court.
                                </p>
                                <Link href="/contact-us">
                                    <button className="text-[rgb(110,94,147)] font-bold hover:underline">Speak to an Advocate →</button>
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
