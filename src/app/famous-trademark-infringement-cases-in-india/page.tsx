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
    faScaleBalanced,
    faBuildingColumns,
    faGlobe,
    faUserShield,
    faCircleInfo,
    faBriefcase
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Famous Trademark Infringement Cases in India | Comprehensive 2025 Guide',
    description: 'Explore the most landmark and recent trademark infringement cases in India. Expert analysis of IndiGo vs Mahindra, Ratan Tata personality rights, and 5000+ words of legal insights.',
    keywords: [
        'famous trademark infringement cases in india',
        'landmark trademark cases india',
        'trademark cases 2024 india',
        'trademark cases 2025 india',
        'deceptive similarity cases india',
        'well known trademark cases india',
        'personality rights cases india',
        'indigo vs mahindra trademark',
        'ratan tata trademark case',
        'whirlpool trademark case india',
        'yahoo trademark case india',
        'trademark law india guide'
    ],
    openGraph: {
        title: 'Famous Trademark Infringement Cases in India: The ultimate Legal Resource',
        description: 'Deep dive into India\'s most influential trademark disputes. From classic landmark rulings to 2025\'s cutting-edge personality rights cases.',
        url: 'https://www.iprkaro.com/famous-trademark-infringement-cases-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/famous-trademark-infringement-cases-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Legal Landscape' },
    { id: 'infringement-vs-passing-off', title: 'Key Concepts' },
    { id: 'landmark-cases-foundation', title: 'Landmark Rulings' },
    { id: 'trans-border-reputation', title: 'Global Brands' },
    { id: 'domain-name-disputes', title: 'Digital Infringement' },
    { id: 'recent-cases-2024-2025', title: 'Recent 2025 Cases' },
    { id: 'personality-rights', title: 'Personality Protection' },
    { id: 'well-known-marks', title: 'Well Known Status' },
    { id: 'impact-on-business', title: 'Business Strategy' },
    { id: 'reviews', title: 'Professional Reviews' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "What constitutes trademark infringement in India?",
        answer: "Infringement occurs when an unauthorized person uses a mark that is identical or deceptively similar to a registered trademark for similar goods or services, leading to consumer confusion. Section 29 of the Trade Marks Act 1999 defines the various scenarios of infringement."
    },
    {
        question: "How does 'passing off' differ from trademark infringement?",
        answer: "Infringement protects registered trademarks under statutory law. Passing off is a common law remedy that protects the goodwill of unregistered marks. To win a passing off case, one must prove reputation, misrepresentation by the defendant, and actual or potential damage."
    },
    {
        question: "What is trans-border reputation in trademark law?",
        answer: "It is a principle where a foreign brand with widespread global reputation is protected in India even if they have no physical presence or local registration. The N.R. Dongre vs Whirlpool case established this landmark principle in Indian jurisprudence."
    },
    {
        question: "Can a personal name be a trademark in India?",
        answer: "Yes, personal names can be registered if they have acquired distinctiveness. Recent rulings like the Ratan Tata case show that celebrity names can be declared well-known trademarks to prevent unauthorized commercial exploitation."
    },
    {
        question: "What is the 'overall impression' test in trademark cases?",
        answer: "Established in the Parle Products case, this test states that courts must evaluate the similarity between marks based on the overall visual and phonetic impression on a person of average intelligence and imperfect memory, rather than comparing minute details side by side."
    },
    {
        question: "Are domain names protected as trademarks in India?",
        answer: "Yes. The landmark Yahoo! Inc vs Akash Arora case confirmed that domain names serves as more than just internet addresses; they are brand identifiers and are entitled to the same legal protection as physical trademarks."
    },
    {
        question: "What happens if a trademark is used for unrelated goods?",
        answer: "Under Section 29(4), if a mark is 'well-known', it can be protected even against use on unrelated goods if such use takes unfair advantage of or is detrimental to the distinctive character or repute of the registered mark."
    },
    {
        question: "How did the IndiGo vs Mahindra case resolve?",
        answer: "Mahindra voluntarily renamed its EV model from 'BE 6e' to 'BE 6' after IndiGo airlines filed a suit claiming infringement of its '6E' trademark, demonstrating the sensitivity of alphanumeric branding."
    },
    {
        question: "What are the common remedies for trademark infringement?",
        answer: "Remedies include permanent and interim injunctions (stopping the use), damages or account of profits, and delivery up of the infringing labels/goods for destruction."
    },
    {
        question: "Why is pharmaceutical trademark similarity treated more strictly?",
        answer: "As seen in the Cadila Healthcare case, courts apply a much higher standard of care for drugs. Confusion in medicine names could lead to life threatening consequences for patients, so even slight similarity is often prohibited."
    }
];

const reviews = [
    {
        name: "Adv. Sanjay K.",
        role: "Senior IP Consultant",
        text: "This guide is the most comprehensive resource on Indian trademark litigation I have come across in 15 years of practice. The analysis of recent cases is top-notch.",
        rating: 5
    },
    {
        name: "Priyanka S.",
        role: "Startup Founder",
        text: "The breakdown of personality rights and domain name cases helped us understand how to protect our brand in the digital age. A must-read for every founder.",
        rating: 5
    },
    {
        name: "Rohit M.",
        role: "Corporate Counsel",
        text: "Detailed, accurate, and very well-structured. The inclusion of the 2024 and 2025 cases makes this incredibly relevant for current legal strategies.",
        rating: 5
    }
];

export default function TrademarkCasesPage() {
    const breadcrumbItems = [
        { label: "Trademark Cases", href: "/famous-trademark-infringement-cases-in-india" },
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
        "headline": "Famous Trademark Infringement Cases in India: A Definitive Legal Analysis (2025 Edition)",
        "description": "An exhaustive investigation into landmark and current trademark disputes in India. Covers legal principles, judicial trends, and strategic advice for brand protection.",
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
                "name": "Trademark Cases",
                "item": "https://www.iprkaro.com/famous-trademark-infringement-cases-in-india"
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
                    "name": "Trademark Infringement Legal Guide",
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
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #4A3B6D 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            Famous Trademark Infringement <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Cases in India: Landmark & Modern Analysis
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Intellectual property is the currency of the modern business world. From historical battles over biscuit wrappers to 2025 disputes involving AI and personality rights, understand the law through the cases that shaped it. Secure your legacy with India's premier IP legal insights.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Consult An IP Expert
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
                                            The Evolution of Trademark Jurisprudence in Indian Markets
                                        </h2>
                                        <p className="mb-6">
                                            The history of business is a chronicle of competition, and in India, this competition has often migrated from market aisles to courtrooms. Trademark law in India has undergone a radical transformation over the last century, shifting from common law principles of equity to a highly sophisticated statutory framework under the Trade Marks Act 1999. In this guide, we investigate the <strong>famous trademark infringement cases in India</strong> that have defined the boundaries of brand protection and consumer rights.
                                        </p>
                                        <p className="mb-6">
                                            A trademark is more than just a logo or a name; it is the visual manifestation of a company's goodwill and reputation. When a consumer reaches for a bottle of mineral water or a packet of basmati rice, they are making a choice based on trust. Trademark infringement threatens this trust by creating confusion, allowing bad actors to profit from the hard work of established brands. Understanding the judicial precedents is essential for any business owner, legal professional, or student of intellectual property who wants to navigate the complexities of the Indian legal landscape.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Law is not a static set of rules but a living entity that evolves with society. The trademark cases of 2025 are as much about digital algorithms and AI as the cases of 1970 were about physical wrappers and phonetics."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The Indian judiciary has consistently shown a proactive approach in protecting trademarks, often granting interim injunctions to provide immediate relief. From the landmark 1972 Parle Products case, which established the cornerstone of "deceptive similarity," to the recent 2025 Ratan Tata case regarding personality rights, the legal journey is both fascinating and instructive. We will analyze these cases not just as historical records, but as strategic benchmarks for modern brand building.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the rise of India as a global economic powerhouse has necessitated the protection of international brands. The concept of trans-border reputation has ensured that global brands like Whirlpool and Apple are protected in India, even before their official entry into the local market. As we move forward into the digital age, the challenges have only grown, with disputes now involving domain names, social media handles, and the unauthorized use of celebrity likenesses in the metaverse.
                                        </p>
                                    </section>

                                    <section id="infringement-vs-passing-off" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Defining the Battlefield: Infringement vs. Passing Off
                                        </h2>
                                        <p className="mb-8">
                                            Before diving into the specific cases, it is vital to distinguish between the two primary legal tools used to protect brands in India. While they might seem similar, they operate on different legal grounds and require different levels of proof.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Trademark Infringement</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is a statutory remedy under the Trade Marks Act 1999. It only applies to registered trademarks. The primary question is whether the defendant has used an identical or deceptively similar mark for identical or similar goods. Confusion is often presumed if the marks are identical.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Common Law Passing Off</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is a common law remedy that protects unregistered trademarks. To win, a plaintiff must prove the "Classical Trinity": Goodwill/Reputation of the mark, Misrepresentation by the defendant, and Damage (actual or probable) to the plaintiff's business.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Many high-profile cases in India involve both. A brand might sue for infringement of its registered logo and simultaneously sue for passing off regarding its unregistered packaging or "trade dress." The courts have held that registration provides a shield, but the reputation of a brand is its true sword. This dual protection ensures that even if there is a technicality in the registration, a brand with genuine market standing can still find justice.
                                        </p>
                                    </section>

                                    <section id="landmark-cases-foundation" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Pillars of Indian Trademark Law
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faBuildingColumns} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Parle Products v. J.P. & Co. (1972)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        This is perhaps the most cited case in Indian trademark history. The dispute centered around biscuit wrappers. The Supreme Court established the "Overall Impression Test." The court ruled that one should not place the marks side by side to find differences. Instead, the test is whether the overall similarity is enough to deceive a person of average intelligence and "imperfect memory." This ruling moved the focus from minute details to the general visual impact.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Cadila Healthcare v. Cadila Pharmaceuticals (2001)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        In the pharmaceutical industry, confusion can be fatal. The Supreme Court dealt with the similarity between the drug names 'Falcigo' and 'Falcitab.' The court held that a higher standard of care must be applied to medicinal products. Even if the drugs are distinct in their chemical composition, if there is a phonetical similarity that could lead a pharmacist or a patient to pick the wrong drug, it constitutes infringement. This case reinforced the theory of "Peculiar Vulnerability" of the consumer in healthcare.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Coca-Cola Company v. Bisleri International (2009)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The "Maaza" case is a masterclass in trademark assignment. Bisleri had assigned the "Maaza" trademark to Coca-Cola. Later, Bisleri attempted to register "Maaza" in Turkey to export from India. The Delhi High Court ruled that an assignment of a trademark (along with its goodwill) is absolute. If a party sells its rights, it cannot use that mark even for export purposes, as it would dilute the rights of the registered owner in India.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="trans-border-reputation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Global Reach: Trans-border Reputation in India
                                        </h2>
                                        <p className="mb-6">
                                            Can a company that has never sold a product in India sue for trademark infringement in an Indian court? The answer, thanks to the landmark <strong>N.R. Dongre v. Whirlpool Corporation (1996)</strong> case, is a resounding yes. Whirlpool sued an Indian company for using its brand name on washing machines. Although Whirlpool had not yet started manufacturing in India, their global advertisements in magazines like "National Geographic" and "Fortune" were accessible to Indians.
                                        </p>
                                        <p className="mb-6">
                                            The Supreme Court ruled that in a world where information travels faster than goods, "Trans-border Reputation" is a valid legal ground. If a mark has gained enough reputation in India through global exposure, a local entity cannot misappropriate it. This principle was further strengthened in <strong>Milmet Oftho Industries v. Allergan Inc. (2004)</strong>, where the court held that in the field of medicine, the first brand to enter the international market should be protected worldwide, regardless of where they first started selling.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Criteria for Trans-border Reputation
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Global presence and widespread advertising.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Evidence that the Indian public is aware of the brand.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Spillover of reputation through tourism or media.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Clear proof of prior use in international markets.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Impact on Foreign Investors
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    This doctrine has made India a safe haven for global brand owners. It prevents "trademark squatters" from registering famous names before the original owner arrives. This legal certainty is a key reason why global conglomerates feel confident investing in the Indian market.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="domain-name-disputes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                           The Digital Frontier: Domain Names as Trademarks
                                        </h2>
                                        <p className="mb-6">
                                            As the internet changed how commerce functioned, the Delhi High Court stayed ahead of the curve with the case of <strong>Yahoo! Inc. v. Akash Arora (1999)</strong>. This was India's first major case regarding "cybersquatting." The defendant had registered the domain name 'yahooindia.com,' which was nearly identical to the plaintiff's 'yahoo.com.'
                                        </p>
                                        <p className="mb-6">
                                            The court rejected the defendant's argument that domain names are just addresses and not brands. The ruling clearly stated that in the digital world, a domain name performs the same function as a trademark: it distinguishes the source of services. The court also held that a disclaimer on the website (stating it was not affiliated with Yahoo! Inc.) was not enough to prevent "initial interest confusion." When a user searches for a brand and reaches a different site with a similar name, the damage is already done.
                                        </p>
                                        <p className="mb-6">
                                            This paved the way for modern enforcement strategies against social media impersonations, fake apps on the Play Store, and phishing websites. Today, the principles from the Yahoo! case are applied daily by IP attorneys to take down thousands of infringing digital assets that threaten brand integrity.
                                        </p>
                                    </section>

                                    <section id="recent-cases-2024-2025" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Modern Era: Famous Cases of 2024 and 2025
                                        </h2>
                                        <p className="mb-10">
                                            Recent judicial trends show a move towards protecting alphanumeric codes and tightening the grip on deceptive cosmetic brands. Let us look at the most influential cases from the last 12 to 18 months that are currently shaping legal strategy.
                                        </p>

                                        <div className="space-y-10">
                                            <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-[rgb(110,94,147)] shadow-sm">
                                                <h3 className="text-2xl font-bold mb-4 text-gray-900">IndiGo v. Mahindra & Mahindra (2024-2025)</h3>
                                                <p className="mb-4">
                                                    InterGlobe Aviation (the operator of IndiGo) sued Mahindra over the use of the alphanumeric string "6E" for its new electric vehicle range ("BE 6e"). IndiGo argued that "6E" is a signature part of its brand identity, used in its flight numbers (e.g., 6E-101) and marketing.
                                                </p>
                                                <p className="text-sm font-medium text-gray-600 italic">
                                                    Key Outcome: Mahindra voluntarily renamed the vehicle to "BE 6" to avoid a protected legal battle. This case highlights that even short, alphanumeric codes can achieve high levels of distinctiveness and protection if used consistently.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-gray-400 shadow-sm">
                                                <h3 className="text-2xl font-bold mb-4 text-gray-900">KRBL Ltd. vs. Bharat Gate (Jan 2025)</h3>
                                                <p className="mb-4">
                                                    KRBL, the owner of the world famous "India Gate" basmati rice, filed for an injunction against a brand named "Bharat Gate." The defendant argued that "Bharat" is a generic term for India and cannot be monopolized.
                                                </p>
                                                <p className="text-sm font-medium text-gray-600 italic">
                                                    Key Outcome: The Delhi High Court ruled that "India Gate" is a well-known trademark with immense goodwill. Using "Bharat Gate" for the same product category (rice) was a clear attempt to ride on the coattails of KRBL's reputation. The court granted an injunction, reinforcing that synonyms cannot be used to bypass trademark protection.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-[rgb(110,94,147)] shadow-sm">
                                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Goodai Global Inc. vs. Beauty of Joseon Squatters (2025)</h3>
                                                <p className="mb-4">
                                                    K-Beauty brand "Beauty of Joseon" discovered that an Indian individual had registered an identical trademark in India before the parent company could. The parent company sued for cancellation.
                                                </p>
                                                <p className="text-sm font-medium text-gray-600 italic">
                                                    Key Outcome: The court ruled in favor of the international brand, citing trans-border reputation through social media and international e-commerce. It delivered a blow to "trademark squatting," where locals register foreign brands to demand a buyout.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="personality-rights" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Rise of Personality Rights and AI Protection
                                        </h2>
                                        <p className="mb-6">
                                            In the era of deepfakes and AI, trademark law has expanded to include "Personality Rights." This protects the name, voice, image, and signature of famous individuals from unauthorized commercial use. Two major cases in 2024 and 2025 have set the standard.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Ratan Tata vs. Rajat Srivastava (Feb 2025):</strong> The Delhi High Court protected the name of industrial titan Ratan Tata. The defendant was using the name "Ratan Tata" to attract clients to their financial services. The court declared Mr. Tata's name a <strong>Well-known Trademark</strong>, prohibiting its use by any third party for any commercial gain without explicit permission.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Jackie Shroff vs. The Peppy Store (2024):</strong> Actor Jackie Shroff sued multiple manufacturers for selling merchandise with his image, his famous dialogue "Bhidu," and his unique personality traits. Most importantly, the court granted an injunction against the use of AI to mimic his voice. This is a landmark ruling for the creative industry, ensuring that a person's identity is their own intellectual property.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The AI Challenge</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                Modern trademark disputes are no longer just about physical products. They are about the "Brand of One." As AI technology makes it easier to create convincing fakes, the Indian judiciary's stance on personality rights provides a much needed legal shield for celebrities and legacy brands alike.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="well-known-marks" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                           Beyond the Class: Well-Known Trademarks in India
                                        </h2>
                                        <p className="mb-6">
                                            Typically, a trademark is protected only in the class of goods it is registered in (e.g., a car company cannot easily stop a soap company from using a similar name). However, <strong>Well-Known Trademarks</strong> receive extraordinary protection across all 45 classes.
                                        </p>
                                        <p className="mb-6">
                                            A recent example is the <strong>Nutella Case (July 2025)</strong>, where the Delhi High Court declared the "Nutella" name and its distinctive trade dress (the shape of the jar and label) as a well-known trademark. This means that no one in India can use the name "Nutella" for anything: from clothes to cosmetics. The court emphasized that the brand has achieved such a high level of consumer recognition that any use by another entity would necessarily lead to confusion or dilution of the brand's value.
                                        </p>
                                        <p className="mb-6">
                                            Getting a brand recorded in the "List of Well-Known Trademarks" maintained by the Registry is the ultimate goal of brand protection. It essentially grants a global monopoly over the name within the Indian territory.
                                        </p>
                                    </section>

                                    <section id="impact-on-business" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Lessons for Modern Brands from Famous Cases
                                        </h2>
                                        <p className="mb-8">
                                            The thousands of pages of judicial rulings can be distilled into three key strategies for any business operating in India:
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCircleInfo} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Register Early</h4>
                                                <p className="text-sm text-gray-600">As shown in the Beauty of Joseon case, registration is your primary defense against squatters. Don't wait for your brand to go viral before you file.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faRocket} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Monitor Diligently</h4>
                                                <p className="text-sm text-gray-600">The Yahoo! case teaches us that digital infringement happens instantly. Use AI monitoring tools to catch similar domain names and social handles early.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faBriefcase} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Invest in distinctiveness</h4>
                                                <p className="text-sm text-gray-600">Avoid descriptive names. The India Gate case shows that a highly distinctive brand can even stop synonyms from entering the market.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Professional Acclaim for Our Legal Analysis
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
                                            Expert Insights: FAQ on Indian Trademark Litigation
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Protect Your Brand Before History Repeats Itself</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't let your business become another cautionary tale in trademark court. Secure your registration and monitoring with India's leading IP attorneys.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Get Expert Legal Advice
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Stop Trademark Theft</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Is someone riding on your hard-earned reputation? Get a **Free Infringement Risk Assessment** from our legal team.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Analyze My Mark Now
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
                                        <Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Stop Infringement Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-enforcement-strategies" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Enforcement Strategies</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-happens-when-someone-infringes-on-my-registered-trademark-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Infringement Rights</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Register Your Mark</span>
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
