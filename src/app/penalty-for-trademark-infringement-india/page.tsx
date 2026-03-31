import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faGavel,
    faShieldAlt,
    faBalanceScale,
    faExclamationTriangle,
    faLock,
    faHammer,
    faUserSecret,
    faScaleBalanced,
    faBuilding,
    faStar,
    faPhone,
    faBolt,
    faSearch,
    faMicroscope
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Penalty for Trademark Infringement India | Civil & Criminal Remedies',
    description: 'Learn about the severe penalties for trademark infringement in India. Understand civil remedies (injunctions, damages) and criminal punishments under Sections 103, 104, & 105 of the Trademarks Act.',
    keywords: [
        'penalty for trademark infringement india',
        'trademark infringement punishment india',
        'section 103 trademarks act',
        'civil remedies for trademark infringement',
        'criminal penalties trademark india',
        'trademark passing off remedies',
        'trademark legal action india',
        'trademark search and seizure',
        'fines for trademark misuse india',
        'trademark litigation india'
    ],
    openGraph: {
        title: 'Trademark Infringement Penalties in India: Complete Legal Guide',
        description: 'Comprehensive guide on the legal consequences of trademark misuse in India. Protect your brand with elite IP enforcement strategies.',
        url: 'https://www.iprkaro.com/penalty-for-trademark-infringement-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/penalty-for-trademark-infringement-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'definition', title: 'What is Infringement?' },
    { id: 'civil-remedies', title: 'Civil Remedies' },
    { id: 'injunctions', title: 'Types of Injunctions' },
    { id: 'damages', title: 'Damages & Profits' },
    { id: 'criminal-penalties', title: 'Criminal Sanctions' },
    { id: 'section-analysis', title: 'Section 103, 104, 105' },
    { id: 'passing-off', title: 'Infringement vs Passing Off' },
    { id: 'administrative', title: 'Administrative Actions' },
    { id: 'recent-cases', title: 'Landmark Case Laws' },
    { id: 'digital-enforcement', title: 'Digital Era Enforcement' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What is the maximum imprisonment for trademark infringement in India?",
        answer: "Under Sections 103 and 104 of the Trade Marks Act 1999, the maximum imprisonment is 3 years. For second or subsequent convictions, the minimum term is 1 year, and the maximum remains 3 years."
    },
    {
        question: "What are the common fines for trademark misuse?",
        answer: "Fines generally range from ₹50,000 to ₹2,00,000. In cases of repeat offenses, the minimum fine increases to ₹1,00,000."
    },
    {
        question: "Can I get an immediate stay order against an infringer?",
        answer: "Yes, you can apply for an ex-parte ad-interim injunction. If the court is convinced of a prima facie case, irreparable injury, and the balance of convenience, it can grant an order to stop the infringement immediately."
    },
    {
        question: "What is a John Doe order in trademark law?",
        answer: "A John Doe order (also known as an Ashok Kumar order in India) is issued against unknown infringers. It allows the brand owner to search and seize counterfeit goods even if the specific identity of the infringer is not known at the time of filing."
    },
    {
        question: "Is trademark infringement a cognizable offense?",
        answer: "Yes, offenses under Sections 103, 104, and 105 are cognizable, meaning the police have the power to arrest without a warrant and initiate searches and seizures based on the Registrar's opinion."
    },
    {
        question: "What is the difference between infringement and passing off?",
        answer: "Infringement is a statutory remedy for registered trademarks under the Trade Marks Act. Passing off is a common law remedy for unregistered marks, focusing on preventing the misrepresentation of goods as those of another."
    },
    {
        question: "Does the size of the company matter in infringement cases?",
        answer: "No, trademark law protects the rights of the owner regardless of the company's size. Small businesses and startups can successfully sue large corporations if their trademark rights are violated."
    },
    {
        question: "Can I claim the legal costs of the lawsuit from the infringer?",
        answer: "Yes, Indian courts frequently award 'actual costs' of litigation to the successful plaintiff, including attorney fees and court expenses, to discourage frivolous litigation and compensate the victim."
    },
    {
        question: "What is a Dynamic Injunction?",
        answer: "A dynamic injunction allows rights holders to block not just the original infringing website but also any 'mirror' or 'redirect' sites that pop up subsequently to bypass the initial court order."
    },
    {
        question: "How long does a trademark infringement case usually take in India?",
        answer: "While final trials can take years, interim relief (injunctions) can often be obtained within days or weeks of filing the suit, which effectively stops the infringing activity during the pendency of the case."
    }
];

const reviews = [
    {
        name: "Sanjay K.",
        role: "Director, Global Retail Group",
        text: "We successfully stopped a major counterfeit ring using the legal strategies provided. The speed of the search and seizure was incredible.",
        rating: 5
    },
    {
        name: "Priya V.",
        role: "Tech Startup Founder",
        text: "IPR Karo helped us secure a permanent injunction against a competitor using our brand name. Their knowledge of the Act is unmatched.",
        rating: 5
    },
    {
        name: "Rajesh M.",
        role: "Managing Partner, FMCG Brand",
        text: "The guidance on damages and account of profits helped us recover significant losses. Highly professional team.",
        rating: 5
    }
];

export default function PenaltyForTrademarkInfringementPage() {
    const breadcrumbItems = [
        { label: "Penalty for Trademark Infringement India", href: "/penalty-for-trademark-infringement-india" },
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
        "headline": "Penalty for Trademark Infringement in India: A Comprehensive Legal Guide",
        "description": "Explore the civil and criminal consequences of trademark infringement in India. Detailed analysis of fines, imprisonment, and injunctions.",
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
                "name": "Penalty for Trademark Infringement India",
                "item": "https://www.iprkaro.com/penalty-for-trademark-infringement-india"
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
                    "name": "Trademark Enforcement Services",
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
                            The Cost of Misuse: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Penalty for Trademark Infringement India
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Understanding the severe legal consequences of trademark misappropriation is vital for both brand owners and businesses. From multi-million rupee damages to mandatory imprisonment, India's IP laws provide a powerful deterrent against counterfeiters. 
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Consult Enforcement Expert
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
                                            The Gravity of Trademark Infringement in India's Growing Economy
                                        </h2>
                                        <p className="mb-6">
                                            In the contemporary commercial landscape, a trademark is not merely a logo or a name; it is the physical manifestation of a company's hard-earned goodwill, reputational capital, and innovative spirit. As India hurtles towards becoming a global economic powerhouse, the protection of this intellectual capital has transitioned from a boardroom concern to a matter of survival. When a competitor misappropriates your brand identity, they are not just "borrowing" a name; they are siphoning off your customers, diluting your brand's uniqueness, and potentially exposing your clientele to substandard products or services.
                                        </p>
                                        <p className="mb-6">
                                            The <strong>Penalty for Trademark Infringement in India</strong> is structured to be both compensatory for the victim and punitive for the offender. The Trade Marks Act, 1999, stands as a robust legal fortress, offering a multi-layered defense mechanism that includes immediate civil reliefs and stringent criminal sanctions. Whether it is an FMCG giant protecting its packaging or a tech startup guarding its unique app name, the law provides the tools necessary to dismantle infringing operations and recover the financial losses incurred.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A trademark is a certificate of authenticity. When it is forged, the law must act with precision and force to restore the sanctity of the marketplace."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The Indian judiciary has repeatedly emphasized that intellectual property rights are as sacred as tangible property rights. Recent judgments from high courts across the country have reflected a zero-tolerance policy towards willful counterfeiters. Today, brand owners can secure ex-parte injunctions, seek massive punitive damages, and even initiate criminal proceedings that lead to the immediate arrest of those involved in manufacturing "fake" goods. This guide provides a deep dive into these legal avenues, ensuring you are equipped to defend your most valuable business asset.
                                        </p>
                                    </section>

                                    <section id="definition" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            What Constitutes Infringement? Identifying the Breach
                                        </h2>
                                        <p className="mb-6">
                                            Before navigating the penalties, it is crucial to understand what exactly the law classifies as infringement. Under Section 29 of the Trade Marks Act, infringement occurs when a person, who is not the registered proprietor or an authorized user, uses a mark in the course of trade that is:
                                        </p>
                                        <ul className="list-disc pl-8 mb-8 space-y-4">
                                            <li><strong>Identical with the registered trademark:</strong> Used in relation to identical goods or services. This is a clear case of counterfeiting.</li>
                                            <li><strong>Deceptively Similar:</strong> Where the mark is so similar to the registered one that it is likely to cause confusion in the minds of the general public.</li>
                                            <li><strong>Misleading Association:</strong> When the use of the mark suggests a connection or affiliation with the registered brand owner that does not exist.</li>
                                            <li><strong>Dilution of Well-Known Marks:</strong> Using a famous mark for completely unrelated goods (e.g., using a famous shoe brand name for a chemical fertilizer) in a way that tarnishes the reputation of the original mark.</li>
                                        </ul>
                                        <p className="mb-6">
                                            The "person of average intelligence and imperfect recollection" test is the gold standard used by Indian courts. If such a person is likely to be confused between the original brand and the infringing one, the law holds the infringer liable. This broad definition ensures that even "clever" copycats who make minor changes to a logo or font do not escape the reach of the law.
                                        </p>
                                    </section>

                                    <section id="civil-remedies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Civil Remedies: Restoring Balance and Compensating Losses
                                        </h2>
                                        <p className="mb-6">
                                            Civil actions are often the first line of defense for brand owners. They are governed by Section 135 of the Act and are designed to provide immediate relief and long-term compensation. The primary goal of a civil suit is to stop the bleeding—to prevent the infringer from continuing their illegal activities while the court determines the final liability.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHammer} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Injunctions</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The most powerful civil tool. It is a court order that restrains the infringer from using the mark. These can be temporary (stay orders) or permanent.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Damages</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Monetary compensation paid to the brand owner for the loss of sales, reputation, and the cost of the legal battle.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Account of Profits</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The court can order the infringer to hand over all the profits they made by selling the infringing goods.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faLock} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Delivery Up</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Ordering the infringer to surrender all infringing goods, dyes, blocks, and labels for destruction or removal of the mark.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="injunctions" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             Types of Injunctions: From Stay Orders to Dynamic Blocks
                                        </h2>
                                        <p className="mb-6">
                                            In trademark litigation, time is often the enemy. The longer an infringer operates, the more damage is done. Indian courts have developed several specialized injunctions to address different scenarios:
                                        </p>
                                        <ul className="space-y-6">
                                            <li>
                                                <h4 className="font-bold text-gray-900 text-xl">1. Anton Piller Order (Search & Seizure)</h4>
                                                <p>Named after a famous British case, this is an 'ex-parte' (heard without the defendant) order that allows the plaintiff's lawyers and a court-appointed commissioner to enter the infringer's premises without notice to search, inspect, and take into custody all infringing goods and documents. This prevents the infringer from destroying evidence as soon as they receive a summons.</p>
                                            </li>
                                            <li>
                                                <h4 className="font-bold text-gray-900 text-xl">2. Mareva Injunction (Asset Freeze)</h4>
                                                <p>If there is a concern that the infringer will transfer or hide their assets to avoid paying damages, the court can issue a Mareva injunction to freeze their bank accounts and property within the jurisdiction.</p>
                                            </li>
                                            <li>
                                                <h4 className="font-bold text-gray-900 text-xl">3. John Doe / Ashok Kumar Order (Unknown Defendant)</h4>
                                                <p>This is vital for large-scale operations where the identities of all sellers or websites are not known. A John Doe order applies to anyone found engaging in the infringing activity, allowing the brand owner to stop them even if they weren't named in the original suit.</p>
                                            </li>
                                            <li>
                                                <h4 className="font-bold text-gray-900 text-xl">4. Dynamic Injunction (Digital Safeguard)</h4>
                                                <p>In the digital age, a rouge website blocked today can reappear tomorrow under a slightly different domain (e.g., brand-fake1.com becoming brand-fake2.com). A dynamic injunction automatically extends to these new domains, ensuring the court's order remains effective without constant new filings.</p>
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="damages" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             The Financial Hammer: Damages and Profits
                                        </h2>
                                        <p className="mb-6">
                                            While injunctions stop the act, damages are the penalty that hurts the infringer's pocket. Indian courts have moved away from granting "symbolic damages" to granting "actual" and even "punitive" damages. 
                                        </p>
                                        <p className="mb-6">
                                            <strong>Compensatory Damages</strong> are calculated based on the lost profits of the trademark owner or the royalty they would have earned if the infringer had taken a license. However, if the infringement is "flagrant" and "dishonest," the court may award <strong>Punitive (Exemplary) Damages</strong>. These are intended to set an example and deter others from similar conduct. For instance, in several cases involving luxury brands and pharmaceuticals, Indian courts have awarded damages running into crores of rupees, often exceeding the actual profit made by the infringer.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Recovery Logic</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                In many cases, the court gives the plaintiff a choice: take the Damages (compensation for your loss) or an Account of Profits (the infringer's illegal gain). Our legal team performs a deep financial audit of the infringer to advise you on which path will yield the highest recovery. We ensure that every penny of the infringer's ill-gotten wealth is accounted for.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="criminal-penalties" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Hand of the Law: Criminal Sanctions
                                        </h2>
                                        <p className="mb-8 text-center text-gray-600 max-w-3xl mx-auto">
                                            Trademark infringement is not just a commercial dispute; it is a criminal offense. The Trade Marks Act provides for mandatory imprisonment and heavy fines to protect the public from misinformation and safety risks.
                                        </p>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faUserSecret} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Section 103: Falsifying Trade Marks</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        This section targets those who forge a mark or falsely apply it to goods. The penalty is imprisonment for a period of **6 months to 3 years**, along with a fine between **₹50,000 and ₹2,00,000**. The court must record specific reasons if it chooses to award a lower sentence.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Section 104: Selling Counterfeit Goods</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        It's not just the makers who are liable; the sellers are too. Anyone who sells, hires out, or even exposes for sale goods with a false trademark faces the same penalty as Section 103. Ignorance is rarely a defense unless the seller can prove they acted in good faith and had no reason to suspect the mark's authenticity.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faBolt} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Section 105: Enhanced Punishment for Repeat Offenses</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The law has no mercy for recidivists (repeat offenders). For a second or subsequent conviction, the minimum imprisonment increases to **1 year** (extending to 3), and the minimum fine jumps to **₹1,00,000**. This ensures that big-time counterfeiters cannot treat small fines as "business expenses."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="section-analysis" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 115: The Police Power in Action
                                        </h2>
                                        <p className="mb-6">
                                            A unique feature of the Indian Trade Marks Act is the power it grants to the police. Under Section 115, any police officer, not below the rank of Deputy Superintendent of Police (DSP) or its equivalent, can search and seize infringing goods without a warrant. However, there is a vital safeguard: the police officer must obtain a written opinion from the Registrar of Trademarks confirming that the mark is indeed a copy or a deception.
                                        </p>
                                        <p className="mb-6">
                                            This provision makes trademark infringement a <strong>cognizable and non-bailable offense</strong> in many contexts. It allows for swift action on the ground. At IPR Karo, we maintain close coordination with enforcement agencies and the Registrar's office to ensure that these "opinion letters" are obtained quickly, allowing for raids to be carried out before the counterfeiters can vanish.
                                        </p>
                                    </section>

                                    <section id="passing-off" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Infringement vs. Passing Off: Protecting the Unregistered
                                        </h2>
                                        <p className="mb-8">
                                            It is a common misconception that if a trademark is not registered, it has no protection. While registration is the ideal "gold standard," common law provides the remedy of <strong>Passing Off</strong>.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Trademark Infringement
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Statutory remedy for registered marks.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Plaintiff only needs to prove deceptive similarity.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Lower burden of proof in court cases.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Criminal remedies are readily available.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Action for Passing Off
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Common law remedy for unregistered marks.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Must prove Goodwill, Misrepresentation, and Damage.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>The "Classical Trinity" test must be satisfied.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Remedy is primarily civil (injunctions and damages).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="administrative" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             Administrative Remedies: The Registrar's Watchful Eye
                                        </h2>
                                        <p className="mb-6">
                                            Beyond the courts and the police, the Trade Marks Registry itself provides powerful administrative remedies. These are often more cost-effective and faster for addressing budding infringement.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Opposition:</strong> If you spot a deceptively similar mark published in the Trade Mark Journal, you can file an opposition. This prevents the mark from being registered in the first place, stopping infringement before it officially starts.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Rectification and Cancellation:</strong> If an infringing mark has already been registered (perhaps due to an oversight), you can file for its removal from the Register. Under Section 57, if a mark remains on the register without "sufficient cause" or by "error," the Registrar or the High Court can order its cancellation.
                                        </p>
                                    </section>

                                    <section id="recent-cases" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             Landmark Case Laws: Turning Points in Indian IP
                                        </h2>
                                        <p className="mb-6">
                                            Judicial precedents are the engine that drives legal enforcement. Understanding how the courts have applied these penalties in real-world scenarios is essential for building a strong case.
                                        </p>
                                        <div className="space-y-8">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 text-xl mb-4">Under Armour Inc. v. Aero Armour (2025)</h4>
                                                <p className="text-gray-600">The Delhi High Court applied the **Initial Interest Confusion** doctrine. Even if a consumer eventually realizes that "Aero Armour" is different from "Under Armour," the fact that they were attracted to the product initially due to the similar name constitutes infringement. This case reinforces that overall brand 'essence' is protected.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 text-xl mb-4">The Ratan Tata Personality Rights Recognition (2025)</h4>
                                                <p className="text-gray-600">While not a traditional product trademark case, this recognized the name and likeness of a business leader as a **Well-known Mark**. It prevented third parties from using his image or associations to sell products or hold unauthorized events, expanding the scope of what the court considers 'brand equity'.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 text-xl mb-4">Jackie Shroff v. The Peppy Store (2024)</h4>
                                                <p className="text-gray-600">A landmark case against AI-generated content. The court restrained the use of the actor's voice and likeness in AI chatbots and merch, proving that trademark-style protection extends into the digital and intangible realm of **Personality Rights**.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="digital-enforcement" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             Digital Era Enforcement: Fighting E-Infringement
                                        </h2>
                                        <p className="mb-6">
                                            Today, infringement has moved from the physical market to the digital cloud. Counterfeit goods are often sold across multiple e-commerce platforms, and rogue websites use SEO tactics to hijack branded search terms. This requires a new paradigm of enforcement.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Intermediary Liability:</strong> E-commerce giants can no longer hide behind "safe harbor" provisions if they are facilitating the sale of counterfeit goods. Indian courts have held that platforms have a "due diligence" obligation. If a brand owner serves a notice with evidence of infringement, the platform must take down the listing within 36 hours. Failure to do so makes the platform liable for damages alongside the seller.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we use advanced AI-monitoring tools to scan the web for unauthorized use of your trademark. We handle the complex process of "Take-Down Notices" across platforms like Amazon, Flipkart, and social media sites, ensuring your digital footprint remains clean and your brand value intact.
                                        </p>
                                    </section>

                                    <section id="international-infringement" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             Global Consequences: Infringement in the Age of Export
                                        </h2>
                                        <p className="mb-6">
                                            As Indian businesses expand their footprint across borders, the threat of international trademark infringement has become a pressing reality. If your brand is registered in India but a competitor in the Middle East or Europe starts using a similar name, the legal battle becomes significantly more complex. This is where the **Madrid Protocol** and international private law come into play.
                                        </p>
                                        <p className="mb-6">
                                            In international infringement, the principle of 'Territoriality' usually governs. However, if an infringer is targeting Indian consumers or if the 'center of gravity' of the infringement is in India, Indian courts can exercise 'Long-Arm Jurisdiction'. This allows you to sue foreign entities in Indian courts if they are causing harm to your brand within the Indian territory. The penalties in such cases often include 'Blocking Orders' where the Department of Telecommunications is ordered to block the infringer's website across all Indian ISPs.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, if you have registered your mark internationally through the Madrid Protocol, you can initiate enforcement actions in the local courts of the infringing country using your Indian base registration. This global reach ensures that your brand value is protected not just in Mumbai or Delhi, but in London, New York, and Dubai. Proactive international registration is the only way to avoid the 'Penalty of Global Dilution'.
                                        </p>
                                    </section>

                                    <section id="social-media" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             Social Media and Influencer Infringement
                                        </h2>
                                        <p className="mb-6">
                                            The rise of influencer marketing has created a new frontier for trademark misuse. When an influencer promotes a 'dupe' (counterfeit) product using your brand name as a hashtag or in their video description, they are technically engaging in trademark infringement and unfair competition. In recent years, Indian courts have started holding both the 'dupe' manufacturer and the promoting influencer liable for brand dilution.
                                        </p>
                                        <p className="mb-6">
                                            Penalties in the social media space include 'Public Apologies' and the permanent deletion of infringing content. Platforms like Instagram and YouTube have robust IP protection policies, and IPR Karo specializes in navigating these platforms to issue 'Cease and Desist' orders that result in the immediate suspension of infringing accounts. Protecting your brand on social media is no longer optional; it is a core part of modern IP defense.
                                        </p>
                                    </section>

                                    <section id="defenses" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             Common Defenses: When is Use Not Infringement?
                                        </h2>
                                        <p className="mb-6">
                                            To truly understand the penalty, one must also understand the exceptions. The law provides certain defenses to those accused of infringement, which include:
                                        </p>
                                        <ul className="list-disc pl-8 mb-8 space-y-4">
                                            <li><strong>Honest Concurrent Use:</strong> If two parties have been using a similar mark for a long time without any confusion or ill-intent, the court may allow both to continue.</li>
                                            <li><strong>Descriptive Use:</strong> Using a word to describe the quality or nature of the product (e.g., 'Cold' for a refrigerator) rather than as a brand name.</li>
                                            <li><strong>Prior Use:</strong> If a person started using the mark before the registered owner even applied for it, they might have a superior right under the 'Prior User' doctrine.</li>
                                            <li><strong>Functional Use:</strong> If a mark is actually a functional part of the product (like the shape of a specialized industrial tool), it may not be protectable as a trademark.</li>
                                        </ul>
                                        <p className="mb-6">
                                            Understanding these defenses is critical for brand owners to anticipate the counter-arguments they will face in court. A well-prepared lawsuit accounts for these possibilities and provides evidence to debunk them from day one.
                                        </p>
                                    </section>

                                    <section id="proactive-monitoring" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                             The AI Edge: Proactive Brand Monitoring
                                        </h2>
                                        <p className="mb-6">
                                            The best way to avoid the 'Penalty of Ignorance' is proactive monitoring. Waiting until you find a counterfeit product in a shop is often too late. Thousands of infringing marks could be filed at the Registry every month. At IPR Karo, we use proprietary AI-driven 'Watchdog' services that scan the Trademark Journal and online marketplaces 24/7.
                                        </p>
                                        <p className="mb-6">
                                            This proactive stance allows us to file 'Oppositions' during the registration phase, saving you the massive costs of a full-blown High Court lawsuit later. A single opposition filed on time can prevent a lifetime of brand confusion and litigation.
                                        </p>
                                    </section>

                                    <section id="business-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Enforcement Checklist for Businesses
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            If you suspect your trademark is being infringed, follow this sequence to ensure your legal position is airtight.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Immediate Actions</h4>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Step 1</span>
                                                        <span className="text-lg font-black text-gray-900">Gather Evidence (Invoices/Photos)</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Step 2</span>
                                                        <span className="text-lg font-black text-gray-900">Issue Cease & Desist Notice</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">Legal Escalation</h4>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Step 3</span>
                                                        <span className="text-lg font-black text-white">File Infringement Suit</span>
                                                    </div>
                                                     <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Step 4</span>
                                                        <span className="text-lg font-black text-white">Seek Interim Injunction</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Trusted by Brands for Complex Enforcement
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
                                            Expert Insights: FAQ on Infringement Penalties
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Stop Infringers Now</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't let copycats destroy what you've built. Secure immediate legal protection and recover your losses with India's leading IP enforcement team.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Talk to Legal Expert
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Stop Counterfeiters</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Is someone using your brand name? Launch a **Free Preliminary Case Review** today and find out your legal options.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Start My Claim Now
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
                                        <Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Famous Case Laws</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-enforcement-strategies" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Enforcement Tips</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-to-do-if-someone-copies-your-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Copy Action Plan</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">View All Resources</span>
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
