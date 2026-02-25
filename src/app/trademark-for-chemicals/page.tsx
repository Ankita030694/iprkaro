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
    faFlask,
    faVial,
    faIndustry,
    faSeedling,
    faMicroscope,
    faStar
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Chemicals | Class 1, 2, 3, & 5 Registration India',
    description: 'Complete guide to trademark registration for chemicals in India. Secure your brand for industrial chemicals, agricultural products, and laboratory reagents under Class 1 and more. 5000+ words of expert legal insights.',
    keywords: [
        'trademark for chemicals',
        'chemical brand registration india',
        'class 1 trademark india',
        'industrial chemical trademark',
        'agricultural chemical registration',
        'trademark for laboratory reagents',
        'chemical business brand protection',
        'register chemical logo india',
        'trademark for fertilizers',
        'chemical industry intellectual property'
    ],
    openGraph: {
        title: 'Expert Trademark Registration for Chemical Industry in India',
        description: 'Protect your chemical inventions and brand identity with India\'s elite IP legal team. 100% online, same-day filing for Class 1 chemicals.',
        url: 'https://www.iprkaro.com/trademark-for-chemicals',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-chemicals',
    },
};

const tocSections = [
    { id: 'importance-of-chemical-trademark', title: 'Why It Matters' },
    { id: 'class-breakdown', title: 'Chemical Classes' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'required-documents', title: 'Legal Checklist' },
    { id: 'objections-and-rejections', title: 'Legal Hurdles' },
    { id: 'industrial-growth', title: 'Scaling and Growth' },
    { id: 'global-protection', title: 'Madrid Protocol' },
    { id: 'valuation-and-funding', title: 'Asset Valuation' },
    { id: 'costs-and-fees', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What items fall under Class 1 for trademark registration in India?",
        answer: "Class 1 primarily covers chemicals used in industry, science, photography, as well as in agriculture, horticulture, and forestry. It includes unprocessed artificial resins, unprocessed plastics, manures, fire extinguishing compositions, and adhesives used in industry."
    },
    {
        question: "Do I need to register my chemical brand in multiple classes?",
        answer: "Yes, if your business also produces paints (Class 2), cosmetics (Class 3), or pharmaceuticals (Class 5), you must file applications in each relevant class to ensure comprehensive legal protection."
    },
    {
        question: "Is the registration process different for industrial chemicals?",
        answer: "While the administrative process remains the same, the description of goods must be highly technical and precise to avoid conflict with existing specialized chemical trademarks."
    },
    {
        question: "How long is a chemical trademark valid in India?",
        answer: "Like all registered trademarks in India, a chemical trademark is valid for 10 years from the date of application and can be renewed indefinitely every 10 years."
    },
    {
        question: "Can I trademark a chemical formula?",
        answer: "No, you cannot trademark a formula. Trademarks protect brand names, logos, and slogans. Chemical formulas are typically protected through patents if they satisfy the criteria of novelty and utility."
    },
    {
        question: "What is a 'Well-Known' trademark in the chemical industry?",
        answer: "A well-known trademark is one that has gained such standing that it is protected even across unrelated classes. For large chemical conglomerates, achieving this status is a vital part of long-term IP strategy."
    },
    {
        question: "Can I use the TM symbol while my chemical trademark is pending?",
        answer: "Absolutely. You can use the TM symbol immediately after filing the application to put the public on notice that you are claiming ownership of the brand."
    },
    {
        question: "Why do chemical trademarks face Section 9 objections so often?",
        answer: "Section 9 objections usually occur if the brand name is too descriptive of the chemical's function or ingredients. We help draft responses to prove the brand has acquired distinctiveness."
    },
    {
        question: "Is MSME registration helpful for chemical startups filing trademarks?",
        answer: "Yes, MSME/Udyam registered entities receive a 50% discount on government filing fees, making the process much more affordable for small chemical manufacturing units."
    },
    {
        question: "How does the Madrid Protocol help Indian chemical exporters?",
        answer: "The Madrid Protocol allows Indian companies to protect their chemical brand in over 130 countries through a single application filed in India, saving significant international legal costs."
    }
];

const reviews = [
    {
        name: "Dr. Arvind M.",
        role: "CEO, ChemTech Solutions",
        text: "The precision in their class analysis saved us from a major legal conflict. They understood the technical nuances of our agricultural products perfectly.",
        rating: 5
    },
    {
        name: "Meera R.",
        role: "Proprietor, Organic Life Chemicals",
        text: "Fast, efficient, and 100% online. We got our registration certificate without any hassle. The team is highly professional.",
        rating: 5
    },
    {
        name: "Vikram S.",
        role: "Director, Global Reagents Ltd.",
        text: "Managing international trademarks was a breeze with their help. The Madrid Protocol guidance was invaluable for our export business.",
        rating: 5
    }
];

export default function TrademarkForChemicalsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Chemicals", href: "/trademark-for-chemicals" },
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
        "headline": "The Ultimate Guide to Trademark Registration for the Chemical Industry in India",
        "description": "Exhaustive legal and strategic guide on protecting your chemical brand. Covers Class 1, 2, 3, 5, registration steps, costs, and international expansion.",
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
                "name": "Trademark for Chemicals",
                "item": "https://www.iprkaro.com/trademark-for-chemicals"
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
                    "name": "Trademark Registration for Chemicals",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2100"
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
                            Protect Your Scientific Innovations: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark Registration for Chemicals
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the global chemical and industrial sector, your brand name represents trust, safety, and scientific excellence. Secure your identity for industrial chemicals, agricultural products, and reagents with India's leading IP experts. 100% online, same-day filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Register Your Chemical Brand
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

                                    <section id="importance-of-chemical-trademark" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Imperative of Trademark Protection in the Chemical Sector
                                        </h2>
                                        <p className="mb-6">
                                            The chemical industry is the backbone of modern industrial civilization. From the fertilizers that feed nations to the polymers that build our infrastructure, chemical products are essential to every facet of life. In this high-stakes environment, where products are often commodities, the brand name serves as the ultimate differentiator. When a manufacturer purchases industrial chemicals or a researcher orders laboratory reagents, they are not just buying a molecule; they are buying the assurance of purity, consistency, and safety. This assurance is anchored in your trademark.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Chemicals</strong> is the most critical legal step a business can take to safeguard its market position. In India, the chemical sector is highly regulated and intensely competitive. Without a registered mark, your brand is vulnerable to "look-alike" products that may not meet the same rigorous quality standards. If a competitor uses an identical or deceptively similar name for an inferior chemical product, the resulting accidents or failures could devastate your company's reputation and lead to massive legal liabilities.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A chemical trademark is more than just a name; it is a seal of scientific integrity. In a world of invisible molecules, your brand name is the only thing the customer can see and trust."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The risks of ignoring trademark protection are particularly acute for exporters. India is a global hub for the manufacture of specialty chemicals and bulk drugs. As you move into international markets, your brand becomes your primary asset. Imagine spending years establishing a reputation in Europe or North America only to find that a local distributor has registered your brand name in their own name. Such disputes are costly, time-consuming, and can effectively lock you out of a lucrative market.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the rise of digital procurement platforms has changed how chemicals are bought and sold. Today, procurement managers use search engines and B2B portals to find suppliers. In this digital landscape, brand confusion happens instantly. A registered trademark gives you the legal authority to take down unauthorized listings and prevents competitors from using your brand name as a search keyword to divert your potential clients.
                                        </p>
                                    </section>

                                    <section id="class-breakdown" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Decoding the Nice Classification for Chemical Products
                                        </h2>
                                        <p className="mb-8">
                                            Trademarks are categorized into 45 classes, and for the chemical industry, understanding the nuances of several key classes is vital for complete protection. Misclassification can leave significant gaps in your legal shield.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faFlask} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 1: Industrial & Scientific</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is the 'mother class' for chemicals. It covers substances used in industry, science, photography, agriculture, and forestry. It includes unprocessed resins, manures, and industrial adhesives. If you manufacture raw materials or laboratory chemicals, this is your primary class.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faVial} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 5: Pharmaceuticals & Biocides</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">If your chemicals are intended for medical, veterinary, or sanitary purposes, they fall under Class 5. This includes disinfectants, fungicides, herbicides, and pharmaceutical preparations. Many chemical companies find they need protection in both Class 1 and Class 5.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faIndustry} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 2: Paints & Colorants</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Specialized for chemical coatings, pigments, and dyes used in industrial finishing. It also includes rust preventatives and wood preservatives. This is critical for companies manufacturing specialty coatings and industrial pigments.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faMicroscope} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 42: Research & Analysis</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">For chemical companies that provide services such as laboratory testing, chemical analysis, or customized synthesis. Protecting your brand in a service class ensures that your scientific expertise is also legally secured.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we perform a comprehensive 'Cross-Class Analysis'. Many chemical brands are hybrid. They produce the raw material (Class 1), the final disinfectant (Class 5), and provide the scientific data for its application (Class 42). We ensure that every point of interaction between your brand and the consumer is protected, leaving no room for competitors to exploit legal loopholes.
                                        </p>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Path to Exclusive Ownership
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: AI-Powered Search Analysis</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        In the chemical industry, names often sound similar due to the common use of scientific prefixes and suffixes. We use advanced proprietary algorithms to detect phonetic similarities and visual look-alikes that a manual search might miss. We analyze existing marks in Class 1, 2, 3, 5, and 42 to identify even the most subtle conflict risks.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Technical Drafting and Filing</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the search is cleared, our legal team drafts the Form TM-A with extreme precision. In the chemical sector, the 'description of goods' must be technically accurate yet broad enough to encompass your entire product line. As soon as we file the application, you can start using the ™ symbol, signaling your professional commitment to IP protection.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Examination and Prosecution</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Registrar of Trademarks will examine your mark for distinctiveness. Since chemical names often lean towards being descriptive, objections are common. Our senior IP attorneys draft robust responses, citing scientific and legal precedents to prove your brand's unique identity. We handle the entire legal dialogue to ensure a smooth path to registration.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="required-documents" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation: Building a Solid Legal Foundation
                                        </h2>
                                        <p className="mb-8">
                                            The documentation required for filing depends on your business structure. For a chemical manufacturing unit, having the right proofs ensures that the Trademark Registry can verify your status as a 'User' or a 'Proposed User' of the mark accurately.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Startups and Proprietors
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>PAN and Aadhaar Card of the Applicant.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>MSME/Udyam Certificate (Crucial for 50% fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Digital Copy of the Brand Logo or Word Mark.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Signed Authorization (Form 48).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Corporations and Partnerships
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Company PAN and GST Registration details.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Board Resolution or Partnership Authorization.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>User Affidavit with proof of invoices/brochures (if claiming prior use).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="objections-and-rejections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Legal Hurdles: Section 9 and 11 Strategizing
                                        </h2>
                                        <p className="mb-6">
                                            The trademark process in India is designed to prevent any single entity from monopolizing words that are essential to the trade. In the chemical industry, this leads to frequent legal challenges that require expert navigation.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 9 (Absolute Grounds)</strong> objections are the most common for chemical brands. These occur when a name is 'descriptive' or 'generic'. For instance, if you try to trademark 'Pure Nitric Acid', the Registrar will likely object because the words merely describe the product's quality and nature. Our strategy involves proving 'Acquired Distinctiveness'. We gather evidence of long-term use, extensive market presence, and consumer recognition to show that these words have transcended their literal meaning and now uniquely identify your company.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 (Relative Grounds)</strong> objections arise when your mark is too similar to an existing one. This is highly probable in the chemical sector where prefixes like 'Chemi', 'Agro', or 'Cure' are ubiquitous. Here, we conduct a 'Technical Difference Analysis'. We argue that the target audience (e.g., industrial engineers vs. retail farmers), the visual trade dress, the price points, and the specific chemical functions are distinct enough that a person of average intelligence will not be confused. We leverage legal precedents to secure your registration even in a crowded field.
                                        </p>
                                    </section>

                                    <section id="industrial-growth" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Role of Trademarks in Chemical Industry Scaling
                                        </h2>
                                        <p className="mb-6">
                                            Every ambition chemical company eventually looks towards scaling, through new product lines or geographical expansion. Your trademark is the foundation of this growth. Whether you are moving into contract manufacturing or licensing your technological processes, your brand name is your primary asset. In a contract manufacturing agreement, the partner is paying to use your quality standards and your market reputation.
                                        </p>
                                        <p className="mb-6">
                                            Without a registered trademark, you cannot legally license your brand to others. A registered mark allows you to maintain control over the quality of products sold under your name across multiple manufacturing sites. If a partner fails to meet your purity standards, your registered trademark gives you the legal power to terminate their right to use your name immediately. This level of brand integrity is what separates market leaders from fly-by-night operators.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Valuation Factor</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                In major chemical industry acquisitions, the 'Goodwill' of the brand often far outweighs the value of the physical manufacturing plants. A registered trademark is the legal embodiment of this goodwill. It is an intangible asset that enhances the company's valuation on the balance sheet, making it more attractive to institutional investors, venture capitalists, and banks for securing credit lines.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Madrid Protocol: Globalizing Your Chemical Brand
                                        </h2>
                                        <p className="mb-6">
                                            As Indian chemical exports reach record highs, moving into global markets is a natural progression. However, protecting your brand in over 100 countries is a logistical nightmare if handled individually. This is where the <strong>Madrid Protocol</strong> becomes your most valuable strategic tool. It is an international treaty that allows an Indian company to file a single international application and extend its trademark protection to over 130 member countries.
                                        </p>
                                        <p className="mb-6">
                                            For an Indian chemical manufacturer, this means you can protect your brand in the USA, EU, China, and the Middle East through one application filed in English, paying a single set of fees in Swiss Francs. This eliminates the need to hire local attorneys in every country for the initial filing. At IPR Karo, we specialize in helping chemical exporters manage their international IP portfolios efficiently. We ensure that your base registration in India is rock-solid, as any international filing depends on its stability for the first five years.
                                        </p>
                                        <p className="mb-6">
                                            International expansion also requires a global trademark search to ensure your name doesn't have an unintended meaning in another language or conflict with a well-known local brand in a foreign jurisdiction. We provide these cross-border insights to prevent you from making costly branding mistakes as you move into the global arena.
                                        </p>
                                    </section>

                                    <section id="valuation-and-funding" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Value of IP in Chemical Industry Funding
                                        </h2>
                                        <p className="mb-6">
                                            In the modern industrial landscape, chemical startups focused on "Green Chemistry" and sustainable manufacturing are attracting significant venture capital. When an investor evaluates your chemical startup, they look at your "Defensibility Index". This refers to how well your intellectual property can prevent competitors from copying your innovations and eroding your market share.
                                        </p>
                                        <p className="mb-6">
                                            While patents protect your inventions, nicknames and brand names protect your market territory. An investor will not put capital into a company that could be forced to rename its entire product line due to a trademark dispute. A registered trademark is a signal to investors that the management is professional, risk-aware, and building for the long term. It provides the legal certainty required for scaling from a small laboratory to a global manufacturing leader.
                                        </p>
                                        <p className="mb-6">
                                            Moreover, trademarks are versatile financial instruments. They can be franchised, licensed, or even used as collateral for loans. In some instances, companies engage in "Trademark Licensing" to generate stable royalty income, a high-margin revenue stream that is independent of manufacturing overheads. This level of financial sophistication is only attainable through meticulous IP registration and management.
                                        </p>
                                    </section>

                                    <section id="costs-and-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Transparent Financial Planning for Brand Security
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            We believe in complete transparency. Understanding the costs involved in trademark registration allows you to budget correctly for your business's legal foundation.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Statutory Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">Determined by the Trade Marks Rules, 2017, based on the applicant type.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals / MSMEs</span>
                                                        <span className="text-lg font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Large Corporations</span>
                                                        <span className="text-lg font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">IPR Karo Service Fee</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">Expert guidance from technical search to final certificate.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Starting From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4 text-white">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Includes deep AI search, drafting, status monitoring, and regular updates until registration.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Proven Success in Chemical IP
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
                                            Expert Insights: FAQ on Chemical Trademarks
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Scientific Brand Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                In the competitive chemical industry, your brand name is your most valuable intellectual asset. Start your official application now.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
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
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Name Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Don't launch your chemical brand until you know the name is yours. Get a **Free AI Search Report** within 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Start AI Search Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Other Industries</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-pharmaceuticals" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Pharmaceuticals</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-restaurant" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Restaurants</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-clothing-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Clothing Brands</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">View All Industries</span>
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
