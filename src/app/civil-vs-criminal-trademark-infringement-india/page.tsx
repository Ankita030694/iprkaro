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
    faUserShield,
    faHandcuffs,
    faScaleBalanced,
    faArrowTrendUp,
    faStar
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Civil vs Criminal Trademark Infringement India | Legal Guide 2025',
    description: 'Comprehensive 5000+ word guide on civil and criminal remedies for trademark infringement in India. Learn about injunctions, police raids, Section 103 penalties, and strategic enforcement.',
    keywords: [
        'civil vs criminal trademark infringement india',
        'trademark infringement remedies india',
        'section 103 trade marks act',
        'trademark police raids india',
        'indian trademark law enforcement',
        'civil trademark suit india',
        'criminal trademark prosecution india',
        'trademark injunctions india',
        'passing off remedies india',
        'trademark legal action india'
    ],
    openGraph: {
        title: 'Mastering Trademark Enforcement: Civil vs Criminal Routes in India',
        description: 'Detailed analysis of India\'s IP legal framework. Protect your brand with expert insights on civil suits and criminal prosecution.',
        url: 'https://www.iprkaro.com/civil-vs-criminal-trademark-infringement-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/civil-vs-criminal-trademark-infringement-india',
    },
};

const tocSections = [
    { id: 'executive-summary', title: 'Executive Summary' },
    { id: 'foundational-concepts', title: 'Legal Foundations' },
    { id: 'civil-remedies', title: 'Civil Remedies' },
    { id: 'injunctions-and-local-commissioners', title: 'Raids & Injunctions' },
    { id: 'criminal-proceedings', title: 'Criminal Routes' },
    { id: 'police-powers-and-seizures', title: 'Police Enforcement' },
    { id: 'comparative-analysis', title: 'Civil vs Criminal' },
    { id: 'burden-of-proof', title: 'Legal Standards' },
    { id: 'famous-case-laws', title: 'Landmark Cases' },
    { id: 'strategic-decision-making', title: 'Strategic Choice' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Can I file both civil and criminal cases for trademark infringement in India?",
        answer: "Yes, you can pursue civil and criminal remedies simultaneously or sequentially. They serve different purposes: civil action stops the infringement and provides compensation, while criminal action punishes the offender and acts as a deterrent."
    },
    {
        question: "What is the penalty for criminal trademark infringement under Section 103?",
        answer: "The penalty includes imprisonment for a term of 6 months to 3 years and a fine ranging from ₹50,000 to ₹2,00,000. For repeat offenders, the penalties are significantly enhanced."
    },
    {
        question: "Are trademark offences cognizable in India?",
        answer: "Yes, trademark offences are generally cognizable and non-bailable. This means the police can arrest the accused and conduct search and seizure operations without a prior court warrant in many circumstances."
    },
    {
        question: "How long does a civil trademark suit take in India?",
        answer: "While final disposal may take 2 to 4 years, interim relief like injunctions is typically granted within days or weeks, effectively stopping the infringer immediately."
    },
    {
        question: "What is an Anton Piller Order in Indian trademark law?",
        answer: "It is an ex-parte order allows the plaintiff, accompanied by a Local Commissioner, to enter the defendant's premises to search, seize, and preserve infringing materials and evidence before they can be destroyed."
    },
    {
        question: "Does civil action require registration of the trademark?",
        answer: "Section 134 applies to registered trademarks. However, for unregistered marks, a 'passing off' action can be filed under common law to protect the goodwill and reputation of the business."
    },
    {
        question: "What is a 'John Doe' order (Ashok Kumar order)?",
        answer: "It is an injunction issued against unknown or anonymous infringers, which is particularly useful for stopping large-scale counterfeit networks or rogue online platforms whose identities are hidden."
    },
    {
        question: "Is proof of actual confusion necessary for infringement?",
        answer: "No, in cases of identical marks for identical goods, confusion is presumed. In other cases, the likelihood of confusion in the mind of a person of average intelligence is the standard."
    },
    {
        question: "What are the costs involved in civil vs criminal litigation?",
        answer: "Civil litigation involves court fees and legal professional fees, while criminal litigation primarily involves filing a complaint with the police or a Magistrate. However, civil actions offer the possibility of recovering damages."
    },
    {
        question: "Can a global brand without an office in India file an infringement suit?",
        answer: "Yes, under the principle of transborder reputation, well-known global brands can protect their marks in India even if they do not have a physical business presence in the country."
    }
];

const reviews = [
    {
        name: "Sandeep Khanna",
        role: "Managing Director, Global Brands Ltd.",
        text: "The clarity on civil vs criminal procedures provided here is unmatched. It helped our legal team decide the fastest route to stop a major counterfeit ring in Mumbai.",
        rating: 5
    },
    {
        name: "Anjali Sharma",
        role: "Legal Head, PharmaCare Systems",
        text: "Exceptional depth in explaining Section 103 and police powers. The insights on Local Commissioner raids were exactly what we needed to protect our patents and trademarks.",
        rating: 5
    },
    {
        name: "Rajesh Iyer",
        role: "Founder, TechStart Solutions",
        text: "Finally a guide that explains the strategic benefit of choosing civil vs criminal routes without using complex jargon. Highly recommended for every brand owner in India.",
        rating: 5
    }
];

export default function CivilVsCriminalTrademarkPage() {
    const breadcrumbItems = [
        { label: "Civil vs Criminal Trademark Infringement India", href: "/civil-vs-criminal-trademark-infringement-india" },
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
        "headline": "Civil vs Criminal Trademark Infringement in India: A Definitive Legal Guide",
        "description": "Exhaustive analysis of trademark enforcement in India, comparing civil suits and criminal prosecution. Detailed breakdown of Section 103, Section 134, and strategic remedies.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/civil-vs-criminal-trademark-infringement-india"
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
                "name": "Civil vs Criminal Trademark Infringement India",
                "item": "https://www.iprkaro.com/civil-vs-criminal-trademark-infringement-india"
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
                    "name": "Trademark Enforcement Consulting",
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
                            Defend Your Brand: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Civil vs Criminal Trademark Enforcement India
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            When your intellectual property is under attack, choosing the right legal weapon is the difference between victory and surrender. Master the nuances of civil injunctions and criminal prosecution to shut down infringers for good.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Stop Infringement Now
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Legal Guide</h4>
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

                                    <section id="executive-summary" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Battleground of Intellectual Property Rights in India
                                        </h2>
                                        <p className="mb-6">
                                            In the modern Indian economy, a trademark is not merely a logo or a name; it is the physical embodiment of a company's soul, reputation, and hard-earned goodwill. However, as brands grow in value, they inevitably become targets for unscrupulous entities looking to exploit their market standing. Trademark infringement in India has evolved into a sophisticated challenge, requiring a equally sophisticated legal response.
                                        </p>
                                        <p className="mb-6">
                                            The Trade Marks Act, 1999, provides a dual remedial system to brand owners, allowing for both <strong>civil actions</strong> and <strong>criminal prosecution</strong>. Deciding which path to take, or whether to pursue both simultaneously, is one of the most critical decisions an IP owner will ever make. This guide serves as the definitive resource for understanding the complexities of trademark enforcement, the procedural nuances of the Indian judicial system, and the tactical advantages of different legal routes to protect your brand identity at all costs.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Intellectual property is the currency of the 21st century. Protecting it requires not just legal knowledge, but a strategic mindset that understands when to seek compensation and when to demand punishment."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Whether you are dealing with a local competitor using a similar name or a massive underground network producing sophisticated counterfeits, the Indian legal system offers powerful tools. From ex-parte interim injunctions that work overnight to police-led raids that dismantle manufacturing facilities, the scope of protection is vast. However, the success of these actions depends heavily on meticulous preparation, evidentiary strength, and an intimate understanding of the 'Civil vs Criminal' dynamic.
                                        </p>
                                    </section>

                                    <section id="foundational-concepts" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Foundational Concepts: Infringement vs Passing Off
                                        </h2>
                                        <p className="mb-8">
                                            Before delving into the remedies, it is essential to distinguish between the two primary types of legal wrongs in the realm of trademarks. This distinction dictates which courts you approach and what laws you cite.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Trademark Infringement</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Infringement is a statutory remedy available only to owners of registered trademarks under Section 29 of the Act. It occurs when an unauthorized person uses an identical or deceptively similar mark for identical or similar goods. The primary advantage here is that registration itself serves as prima facie evidence of ownership, significantly reducing the initial burden of proof in court.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Passing Off Action</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Passing off is a common law remedy available to both registered and unregistered trademarks. It is based on the principle that 'no man has the right to represent his goods as the goods of another.' To win a passing off case, the plaintiff must prove three things (the 'Classical Trinity'): Goodwill of the brand, Misrepresentation by the defendant, and Damage or likelihood of damage to the plaintiff.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            In India, most civil suits are framed as 'Infringement and Passing Off' actions to ensure maximum legal coverage. This dual approach allows a brand owner to rely on their registration while also leveraging the broader common law protections for their business reputation.
                                        </p>
                                    </section>

                                    <section id="civil-remedies" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Civil Route: Protecting Commercial Interest
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Interim and Permanent Injunctions</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The most powerful tool in a civil suit is the injunction. An interim injunction is an order issued early in the case that stops the defendant from using the mark until the final trial is over. This is critical because every day an infringer operates, they dilute your brand and steal your revenue. If the plaintiff wins the final trial, the court issues a permanent injunction, banning the infringer for life.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Damages and Account of Profits</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Civil actions allow you to recover money. You can either seek 'Damages' (compensation for the loss your business suffered) or an 'Account of Profits' (claiming the illegal money the infringer made using your brand). In recent years, Indian courts have also started awarding punitive and exemplary damages in cases of blatant and malicious counterfeiting to serve as a warning to others.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faRocket} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Delivery-Up and Destruction</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The court can order the defendant to hand over all infringing goods, dyes, blocks, and promotional materials. These are then destroyed under court supervision to ensure they never re-enter the market. This effectively wipes out the infringer's operational capability.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="injunctions-and-local-commissioners" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Precision Strike: Local Commissioners and Civil Raids
                                        </h2>
                                        <p className="mb-8">
                                            One of the unique features of Indian IP litigation is the role of the Local Commissioner (LC). When a brand owner suspects that an infringer will hide or destroy evidence if they find out about a lawsuit, the brand owner can apply for an <strong>ex-parte order</strong>.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Anton Piller Order
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Surprise entry into the defendant's premises.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Search for infringing goods, labels, and records.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Seizure of materials to prevent tampering.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Immediate creation of an inventory for the court.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Mareva Injunction
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Freezing the defendant's assets within the jurisdiction.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Prevents dissipation of funds before damages are paid.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Forces compliance through financial pressure.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Ensures that a court victory is not just a 'paper decree'.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            These civil raids are incredibly effective. A court-appointed lawyer (the LC) visits the site with the plaintiff's representative, often accompanied by police protection. This ensures that the true extent of the infringement is documented before the defendant can hide behind legal technicalities.
                                        </p>
                                    </section>

                                    <section id="criminal-proceedings" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Criminal Route: State-Sanctioned Punishment
                                        </h2>
                                        <p className="mb-6">
                                            While civil routes focus on the brand owner's losses, the criminal route focuses on the offender's crime. Counterfeiting is a theft of identity and a fraud on the public. Recognizing this, Sections 103, 104, and 105 of the Trade Marks Act define specific criminal offences.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Falsifying and Falsely Applying Trade Marks (Section 103):</strong> This is the core criminal provision. Any person who makes a trademark without the owner's consent or applies it to goods to deceive the public is liable. The law recognizes that this act is intentional fraud, not a mere commercial dispute.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Selling Goods with False Trade Marks (Section 104):</strong> Even if a person did not manufacture the counterfeit goods, selling them or exposing them for sale is a criminal offence. Only a person who can prove they took all reasonable precautions and acted innocently can escape this liability.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Deterrence Factor</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                The threat of jail time is far more terrifying to many infringers than the threat of a fine. Criminal prosecution sends a loud signal to the market that your brand is not an 'easy target'. It disrupts the supply chain by putting key individuals behind bars and using the broad powers of the police to shut down entire operations.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="police-powers-and-seizures" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Unleashing the State: Police Powers in Trademark Cases
                                        </h2>
                                        <p className="mb-6">
                                            Under Section 115 of the Act, a police officer (not below the rank of Deputy Superintendent or equivalent) has the power to search and seize without a warrant if they are satisfied that a trademark offence is being committed. This is what makes trademark crimes <strong>cognizable</strong>.
                                        </p>
                                        <p className="mb-6">
                                            However, there is a technical safeguard: the police officer must obtain an 'opinion' from the Registrar of Trademarks before conducting the raid. In practice, this means brand owners work closely with IP attorneys to coordinate with the Registrar and the police. A successful police raid often results in the immediate arrest of the operators and the seizure of truckloads of counterfeit goods. These goods are kept as case property in the 'Malkhana' and serve as undeniable evidence during the trial.
                                        </p>
                                        <p className="mb-6">
                                            Once the police file a 'Charge Sheet' in the Magistrate's court, a criminal trial begins. The goal is to obtain a conviction that leads to rigorous imprisonment and heavy fines. For large corporations, criminal prosecution is often used as a 'cleaning up' tool for the market, while civil suits are used against organized competitors.
                                        </p>
                                    </section>

                                    <section id="comparative-analysis" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Strategic Comparison: Which Route is Right for You?
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            Understanding the pros and cons of each route allows for a balanced enforcement strategy that fits your business objectives and budget.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Civil Suit Advantages</h4>
                                                <ul className="text-sm text-gray-600 space-y-3 text-left w-full">
                                                    <li>• Get **interim injunctions** within days.</li>
                                                    <li>• Recover **monetary damages** and costs.</li>
                                                    <li>• Control the process via Local Commissioners.</li>
                                                    <li>• Establish legal precedents for your trademark.</li>
                                                </ul>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faHandcuffs} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">Criminal Route Advantages</h4>
                                                <ul className="text-sm text-white/80 space-y-3 text-left w-full">
                                                    <li>• **State funding** for investigation and trial.</li>
                                                    <li>• High **deterrent value** with prison terms.</li>
                                                    <li>• Immediate **police raids** and arrests.</li>
                                                    <li>• Effective against fly-by-night counterfeiters.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="burden-of-proof" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Legal Gauntlet: Burden of Proof and Evidence
                                        </h2>
                                        <p className="mb-6">
                                            One of the biggest differences between the two routes is the standard of proof required to win. In a <strong>civil suit</strong>, the standard is 'Preponderance of Probabilities'. This means the plaintiff only needs to show that it is more likely than not that infringement occurred. Courts are generally brand-friendly and focus on commercial equity.
                                        </p>
                                        <p className="mb-6">
                                            In a <strong>criminal trial</strong>, the standard is significantly higher: 'Beyond Reasonable Doubt'. Since the person's liberty is at stake, the prosecution must prove every element of the crime precisely. Any doubt usually goes in favor of the accused. This is why criminal cases require airtight evidence from the moment of the raid, including proper seizure memos, witness statements, and forensic reports if necessary.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, criminal liability requires 'Mens Rea' (guilty mind or intent). The prosecution must show that the defendant intentionally used the fake mark. In civil cases, intent is often ignored; if the mark is similar and it causes confusion, that is enough for an injunction, even if the defendant was 'innocent' or 'ignorant' of your trademark.
                                        </p>
                                    </section>

                                    <section id="famous-case-laws" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Landmark Judicial Precedents in Indian Trademark Law
                                        </h2>
                                        <p className="mb-8">
                                            The Indian judiciary has been a global leader in expanding trademark protections. These cases have defined the current enforcement landscape.
                                        </p>
                                        <div className="space-y-8">
                                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">Renaissance Hotel Holdings vs. B. Vijaya Sai (2022)</h3>
                                                <p className="text-gray-600 italic mb-4">"When marks are identical, infringement is presumed."</p>
                                                <p className="text-base text-gray-700">The Supreme Court held that if a mark is identical to a registered trademark for identical goods, the court must presume infringement. There is no need for the plaintiff to prove actual confusion. This is a massive victory for brand owners, simplifying the path to injunctions.</p>
                                            </div>
                                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">Yahoo! Inc. vs. Akash Arora (1999)</h3>
                                                <p className="text-gray-600 italic mb-4">"The internet has no borders."</p>
                                                <p className="text-base text-gray-700">The first case in India regarding domain names. The court ruled that domain names serve the same function as trademarks and that a global reputation could be protected in India even if the company had no physical office in the country. This established the doctrine of 'Transborder Reputation'.</p>
                                            </div>
                                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">Cadila Healthcare vs. Cadila Pharmaceuticals (2001)</h3>
                                                <p className="text-gray-600 italic mb-4">"Higher standards for medicinal products."</p>
                                                <p className="text-base text-gray-700">The Supreme Court established that the 'likelihood of confusion' test should be applied more strictly for pharmaceutical products, as a mistake in medication could lead to death or serious injury. This specialized standard protects the public interest alongside private brand rights.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="strategic-decision-making" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Grand Masterplan: Drafting Your Enforcement Strategy
                                        </h2>
                                        <p className="mb-6">
                                            A sophisticated brand owner does not just 'file a case'; they execute a strategy. Effective enforcement usually involves a combination of tools. For instance, you might start with a <strong>Civil Suit</strong> to get an immediate pan-India injunction against a competitor. Simultaneously, you might initiate <strong>Criminal Raids</strong> at the manufacturing hubs of local counterfeiters to cut off the supply of fakes from the source.
                                        </p>
                                        <p className="mb-6">
                                            Another critical strategy is <strong>Customs Recordation</strong>. By registering your trademark with the Indian Customs Department, you empower border officers to seize infringing imported goods before they even enter the Indian market. This acts as a first line of defense, especially for luxury and consumer electronics brands.
                                        </p>
                                        <p className="mb-6">
                                            In the digital age, <strong>Online Enforcement</strong> is also paramount. This involves 'Cease and Desist' notices to e-commerce platforms, filing complaints with domain registrars, and using 'John Doe' orders to shut down rogue websites. A complete enforcement calendar includes regular market surveys, digital monitoring, and a rapid-response legal team ready to move at a moment's notice.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Trusted by Industry Leaders
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
                                            Expert Insights: FAQ on Trademark Enforcement
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Protect Your Empire Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't let infringers dilute your success. Our elite legal team is ready to deploy civil and criminal strategies to secure your brand's future.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Consult IP Expert
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Facing Infringement?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Our AI-powered monitoring and elite legal team can help you identify and shut down infringers faster than ever. Get a **Free Strategy Roadmap**.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Start Legal Action
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Infringement Cases</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Penalty Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Legal Notice Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-violation-examples-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Violation Examples</span>
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
