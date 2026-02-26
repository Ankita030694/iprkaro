
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
    faFileSignature,
    faPhone,
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faMoneyBillWave,
    faCertificate,
    faUsers,
    faLightbulb,
    faStar,
    faGlobe,
    faHammer,
    faBuilding,
    faRoad,
    faWarehouse,
    faTree
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Non-Metal Building Materials | Class 19 Registration India',
    description: 'Protect your construction brand under Class 19. Complete guide to trademarking cement, bricks, tiles, and non-metal building materials in India.',
    keywords: [
        'trademark for non-metal building materials',
        'class 19 trademark india',
        'cement brand registration',
        'bricks trademark registration',
        'tiles brand registration india',
        'plywood trademark registration',
        'construction material trademark',
        'non-metal door trademark',
        'msme trademark benefits construction',
        'building material intellectual property'
    ],
    openGraph: {
        title: 'Premium Trademark Registration for Class 19 Building Materials',
        description: 'Secure your masonry and structural assets with India\'s elite IP team. Expert filing for cement, wood, and stone brands.',
        url: 'https://www.iprkaro.com/trademark-for-non-metal-building-materials',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-non-metal-building-materials',
    },
};

const tocSections = [
    { id: 'foundational-identity', title: 'The Masonry of Branding' },
    { id: 'class-19-spectrum', title: 'Class 19 Inventory' },
    { id: 'industry-relevance', title: 'Structural Importance' },
    { id: 'material-distinctions', title: 'Class 19 vs Class 6' },
    { id: 'registration-roadmap', title: 'The Building Path' },
    { id: 'document-vault', title: 'Required Dossier' },
    { id: 'counterfeit-defense', title: 'Stopping Ghost Units' },
    { id: 'msme-concessions', title: 'Start-Up Rebates' },
    { id: 'global-infrastructure', title: 'Exporting Stones & Wood' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What items are included in Trademark Class 19 in India?",
        answer: "Class 19 covers non-metallic building materials like cement, concrete, bricks, tiles, architectural glass, plywood, timber, and non-metal pipes. It also includes asphalt, bitumen, and non-metal transportable buildings."
    },
    {
        question: "Do steel rods for construction fall under Class 19?",
        answer: "No, metallic building materials like steel rods, girders, and metal pipes fall under Class 6. Class 19 is reserved exclusively for non-metallic supplies."
    },
    {
        question: "Is gypsum board covered under Class 19?",
        answer: "Yes, gypsum, plasterboard, and other non-metallic wall panels are fundamentally classified under Class 19."
    },
    {
        question: "What is the government fee for a cement manufacturer in the MSME category?",
        answer: "MSMEs with a valid Udyam certificate receive a 50 percent discount, paying a government filing fee of 4500 instead of the standard 9000 for companies."
    },
    {
        question: "Can I trademark a specific shade of brick or stone?",
        answer: "Generally, you trademark the brand name or logo. While color can be part of a trademark, it is difficult to protect a single color on its own without it being part of a distinctive design."
    },
    {
        question: "How long is the trademark for building materials valid?",
        answer: "Once registered, the trademark is valid for 10 years, after which it can be renewed indefinitely every decade."
    },
    {
        question: "Does Class 19 include wooden flooring?",
        answer: "Yes, wooden flooring, laminated beams, and non-metal door frames are protected under Class 19."
    },
    {
        question: "How can I prevent local 'ghost' units from using my cement brand name?",
        answer: "A registered trademark allows you to initiate police raids, seize counterfeit cement bags, and file lawsuits for permanent injunctions and financial damages."
    },
    {
        question: "Does Class 19 cover building construction services?",
        answer: "No, the actual service of construction falls under Class 37. Class 19 is strictly for the physical non-metal materials used in construction."
    },
    {
        question: "Can I use the Madrid Protocol to protect my marble brand internationally?",
        answer: "Yes, through the Madrid Protocol, you can use your Indian Class 19 application to seek trademark protection in over 125 countries, ideal for stone exporters."
    }
];

const reviews = [
    {
        name: "Arjun Mehta",
        role: "MD, Sterling Cement Industries",
        text: "Securing our cement brand mark was crucial for our expansion into North India. IPR Karo provided the legal muscle to clear complex phonetic objections.",
        rating: 5
    },
    {
        name: "Sonia Verma",
        role: "Proprietor, Heritage Ceramics",
        text: "The MSME rebate guidance saved us significant capital during our startup phase. Their online portal is extremely user-friendly for manufacturers.",
        rating: 5
    },
    {
        name: "Karan Johar (Not the Filmmaker)",
        role: "Director, PineWood Plywoods",
        text: "Protecting our proprietary plywood logo was handled with great professional care. They successfully stopped a local copycat within months.",
        rating: 5
    }
];

export default function NonMetalBuildingmaterialsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Non-Metal Building Materials", href: "/trademark-for-non-metal-building-materials" },
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
        "headline": "Trademark Registration for Non-Metal Building Materials (Class 19) in India",
        "description": "Comprehensive guide to protecting construction material brands. Legal strategy for cement, bricks, wood, and stones under Class 19.",
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
                "name": "Trademark for Non-Metal Building Materials",
                "item": "https://www.iprkaro.com/trademark-for-non-metal-building-materials"
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
                    "name": "Trademark Registration for Non-Metal Building Materials",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2150"
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
                            Solid Foundations, <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Legally Reinforced Brands for Class 19
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            From high-grade cement to fine Italian marble, your brand is the trust factor in India's trillion-dollar infrastructure boom. Secure your construction material assets with India's lead IP council. 100% digital, zero hidden costs, end-to-end reliability.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Construction Mark
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Expert Navigation</h4>
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
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal text-justify">

                                    <section id="foundational-identity" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Masonry of Branding: Why Construction Materials Need IP Protection
                                        </h2>
                                        <p className="mb-6">
                                            The construction industry in India is the second-largest employer and a key driver of the nation's GDP. In this high-stakes arena, where structural integrity is a matter of public safety, the brand name on a bag of cement or a pallet of bricks serves as the ultimate warranty of quality. For a manufacturer, a trademark is the signature of their engineering excellence. It is the bridge between the raw quarry and the finished skyscraper.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Non-Metal Building Materials</strong> under Class 19 is the legal reinforcement that protects your brand's market share. In a sector dominated by bulk supplies and commodity trading, a registered mark is what allows you to command a premium price. It moves your product from being "just another brick" to being a "recognized grade." Without this protection, your reputation is at the mercy of every unorganized local unit that decides to mimic your packaging or use a similar name.
                                        </p>
                                        <div className="bg-purple-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-purple-900 italic font-medium">
                                                "A building's strength is in its foundation; a business's strength is in its trademark. If you don't own your brand, you are building on borrowed ground."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Under the Trade Marks Act, 1999, registration provides you with the exclusive right to use your mark across the entire Indian subcontinent. This is particularly vital for building material companies that operate through vast distributor networks. A registered mark ensures that every dealer and sub-dealer is selling genuine products under your banner. It prevents the dilution of your brand in the chaotic physical marketplaces where construction supplies are traditionally traded.
                                        </p>
                                        <p className="mb-6">
                                            Beyond mere defense, a trademark is a significant intangible asset that boosts your company's balance sheet. For MSMEs and startups in the construction supplies sector, a registered brand is a key requirement for participating in government tenders, securing project financing, and attracting institutional investors. It demonstrates a commitment to professional governance and long-term market presence. In an industry where trust is built over decades, a trademark is the first stone laid in that journey.
                                        </p>
                                    </section>

                                    <section id="class-19-spectrum" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 19 Inventory: Exploring the Vast Scope of Non-Metallic Supplies
                                        </h2>
                                        <p className="mb-8 font-semibold">
                                            Class 19 of the Nice Classification is the definitive home for structural materials that do not contain metal. Its breadth covers everything from the underground foundation to the decorative facade.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBuilding} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Masonry & Cement</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Cement, concrete, mortar, lime, and gravel. Includes pre-cast concrete blocks and structural masonry components.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faHammer} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Tiles & Stones</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Ceramic, vitrified, and roofing tiles. All forms of natural stone like marble, granite, and slate for building purposes.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faTree} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Timber & Plywood</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Timber for building, plywood, laminated wood, and non-metal door/window frames. Includes semi-worked woods like beams and planks.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faRoad} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Infrastructure Materials</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Asphalt, pitch, bitumen, and non-metal pipes for plumbing or drainage. Includes railway sleepers (non-metallic).</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            One of the most nuanced aspects of Class 19 is its inclusion of "non-metallic transportable buildings." This means prefabricated cabins, portable toilets made of plastic or fiberglass, and even larger modular non-metal structures are protected here. This is a massive growth area as modular construction gains traction in India's rapid development cycle.
                                        </p>
                                        <p className="mb-6">
                                            The class also extends to decorative structural items like statues and monuments made of stone, concrete, or marble. At IPR Karo, we perform a "Systemic Material Audit" to ensure your trademark application covers both your primary product and any logical material extensions. This prevents a competitor from using your brand name on a different type of building material that shares your market space.
                                        </p>
                                    </section>

                                    <section id="industry-relevance" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Structural Importance: Why Architects and Contractors Care About Your Brand
                                        </h2>
                                        <p className="mb-6">
                                            In the business-to-business (B2B) segment of construction, the brand is the primary risk mitigation tool. When an architect specifies a brand of plywood or a contractor orders a specific grade of cement, they are relying on the brand's established record of stress-testing and chemical compliance. A registered trademark is the legal proof that the product arriving at the site is indeed from the manufacturer they trust.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the rise of "Green Building" certifications (like LEED or IGBC) has made brand traceability even more critical. Sustainable materials like recycled bricks or carbon-neutral concrete rely on brand credibility to verify their eco-claims. A registered trademark allows these high-tech material startups to protect their innovative names and prevent greenwashing by competitors who might use similar labels but lack the actual certification.
                                        </p>
                                        <div className="bg-gray-900 text-white p-10 rounded-3xl my-10 shadow-xl overflow-hidden relative">
                                            <div className="relative z-10">
                                                <h3 className="text-2xl font-bold mb-4 text-[#6E5E93] uppercase tracking-tighter">The Quality Barrier</h3>
                                                <p className="opacity-80 leading-relaxed font-light italic">
                                                    "A building is only as strong as its weakest material. A trademark is the shield that ensures the weakest link never carries your name without your permission."
                                                </p>
                                            </div>
                                            <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                                                <FontAwesomeIcon icon={faWarehouse} className="w-64 h-64" />
                                            </div>
                                        </div>
                                    </section>

                                    <section id="material-distinctions" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 19 vs Class 6: Navigating the Metallic Divide
                                        </h2>
                                        <p className="mb-6">
                                            A major point of confusion for new entrants is the distinction between metallic and non-metallic building materials. While Class 19 covers cement, wood, and stone, anything made of metal, regardless of its use in construction, is in Class 6. If your company manufactures both PVC pipes (Class 19) and Gi/Steel pipes (Class 6), or wooden doors (Class 19) and steel security doors (Class 6), you must register in BOTH classes to be fully protected.
                                        </p>
                                        <p className="mb-6">
                                            Similarly, the service of building a house belongs to Class 37. Many construction companies believe a Class 19 registration protects their service name; this is not the case. Class 19 protects only the materials. If you are a "Total Solution Provider" who manufactures bricks and also constructs buildings, a multi-class strategy (19, 6, and 37) is the only way to build a comprehensive legal vault around your enterprise.
                                        </p>
                                        <p className="mb-6">
                                            We also see crossover with Class 17 (insulation materials) and Class 2 (paints/coatings). If your building material has specialized thermal properties or comes pre-painted, we advise on "Adjacent Class Protection." This prevents a competitor from launching a line of insulation or waterproof coating using your masonry brand name, which would inevitably confuse your existing customer base.
                                        </p>
                                    </section>

                                    <section id="registration-roadmap" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight leading-[1.1]">
                                            Professional Roadmap to Class 19 Authority
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-purple-100">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 1: Deep Search & Feasibility Report</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We conduct a thorough audit of the IP India database, looking for phonetically similar marks and checking Class 6 and 37 for potential conflicts. We also analyze "well-known" marks in the construction sector to ensure your path is legally clear and minimize the risk of expensive oppositions later.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-purple-100">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 2: Filing & TM Application (Form TM-A)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Our attorneys draft your application to maximize the scope of materials covered. Within 24 hours of filing, you receive your official application number and can begin using the ™ symbol on your cement bags, tile crates, or delivery trucks, marking your territory in the market.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-purple-100">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 3: Examination to Certification</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We handle all registry interactions. If they raise an objection, we file a professional response based on industrial case studies. After the mandatory 4-month journal publication period, once cleared of oppositions, your ® certificate is issued, granting you a 10-year legal monopoly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="document-vault" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Document Vault: Preparing for a Smooth Registration
                                        </h2>
                                        <p className="mb-8">
                                            The speed of your filing is often limited by the readiness of your documents. Having these items organized allows our team to move your application to the front of the queue.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-purple-50 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    For Individual Owners & Proprietors
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Aadhaar or Passport for identity proof.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>PAN Card details for official registry records.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Udyam/MSME Registration (For 50% fee discount).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Logo or Brand name graphic in high-resolution JPEG.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-50 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    For Firms, LLCs & Corporations
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>GST Registration Certificate for business proof.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>Power of Attorney (Form TM-48) signed by Director/Partner.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>User Affidavit (If the mark has been in prior use).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="counterfeit-defense" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stopping the 'Ghost' Units: Anti-Counterfeiting in Construction
                                        </h2>
                                        <p className="mb-6">
                                            The construction supplies market is notoriously fragmented, with a high prevalence of local "ghost" units that manufacture sub-standard cement, plywood, or bricks in unregulated workshops. These units often use packaging that is a direct copy of a registered brand, misleading contractors and potentially causing catastrophic structural failures. This is not just a commercial threat; it is an existential threat to your brand's reputation and potentially a major public liability issue.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark is your legal heavy artillery. It allows you to initiate **Criminal Action** against these units. Under the Trademarks Act, with a registration certificate, the police have the power to raid illegal production centers, seize all infringing products and machinery, and arrest the owners without a warrant. This immediate and powerful enforcement is the only way to genuinely protect your distribution territory and ensure your name remains synonymous with safety.
                                        </p>
                                        <p className="mb-6">
                                            We also recommend **Civil Suites for Passing Off**. If a competitor isn't using your exact name but is using similar colors or shapes (Trade Dress) that confuse contractors, a registered trademark makes it significantly easier to get immediate "John Doe" orders. These court orders can be used against unknown defendants, allowing you to stop the distribution of look-alike materials before they are even built into a structure.
                                        </p>
                                    </section>

                                    <section id="msme-concessions" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Financial Incentives: The MSME Advantage for Material Startups
                                        </h2>
                                        <p className="mb-6">
                                            The Indian government sees the construction sector as vital for its "Atmanirbhar Bharat" goals. To encourage formalization, they have implemented a massive **50 percent rebate** on trademark filing fees for any unit with a valid **Udyam/MSME Registration**. This reduces the official government cost from 9000 per class to just 4500. This is a crucial benefit for startups producing innovative sustainable materials or local brick kilns looking to go national.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we handle the entire MSME verification process for you. We don't just file your trademark; we ensure you are registered correctly as an MSME first, so you never pay more than you have to. This cost-saving allows you to protect multiple brands or expand your protection across multiple classes (like 19 and 6) while staying within a startup budget. It is essentially the government partnering with you to secure your brand's future.
                                        </p>
                                        <p className="mb-6">
                                            Moreover, under modern MSME policies, you may be eligible for direct reimbursement of up to 1 lakh for your trademark and patent filing expenses. We keep our clients updated on these evolving policies, ensuring that the total financial burden of legal protection is minimized as much as possible. This is a dynamic legal landscape, and we make sure your business is always on the winning side of it.
                                        </p>
                                    </section>

                                    <section id="global-infrastructure" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Infrastructure: Exporting Stones, Wood & Cement
                                        </h2>
                                        <p className="mb-6">
                                            Indian marble, granite, and high-tech plywood are in massive demand across the Gulf, Europe, and Southeast Asia. If you are exporting, protecting your brand only in India is equivalent to building a house without a fence. A foreign importer or a local competitor in your export country could register your name there and legally seize your shipments or stop you from selling in that market entirely. This "Trademark Hijacking" is a frequent problem in international trade.
                                        </p>
                                        <p className="mb-6">
                                            The **Madrid Protocol** is the solution for the global construction supplier. It allows you to use your Indian Class 19 application as a base to seek protection in over 125 countries simultaneously. This is exponentially cheaper and simpler than managing 125 separate local attorneys. Having a global trademark portfolio significantly increases your leverage when negotiating international distribution agreements, as it proves your brand is a stable, globally recognized entity.
                                        </p>
                                        <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                            <div className="relative z-10">
                                                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">Concrete Security for <br className="hidden md:block" /> YOUR CONCRETE BRAND</h2>
                                                <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                    Your materials build nations. Our trademarks build your authority. Secure your Class 19 assets today and turn your structural craft into a long-term legal monopoly.
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                    <Link href="/contact-us">
                                                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                            Secure My Brand Now
                                                        </button>
                                                    </Link>
                                                    <a href="tel:+919289707648">
                                                        <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                            <FontAwesomeIcon icon={faPhone} className="w-8 h-8 mr-3" />
                                                            +91-9289707648
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
                                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
                                        </div>
                                    </section>

                                    <section className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Green Materials Revolution: Branding Sustainability
                                        </h2>
                                        <p className="mb-6">
                                            As India pushes for a net-zero future, the market for "Green Building Materials" is exploding. Products like fly-ash bricks, low-carbon cement, and sustainably harvested bamboo timber are becoming the preferred choice for premium developers. In this new market, the brand name carries the weight of environmental verification. A registered trademark for your green material ensures that your "eco" status is legally yours and can't be muddied by unauthorized greenwashing attempts.
                                        </p>
                                        <p className="mb-6">
                                            We help green-tech startups in the construction sector build strong, "suggestive" brands that evoke sustainability while remaining legally distinct. This is a critical branding balance, you want to sound environmental, but using purely descriptive words like "Eco Brick" is impossible to trademark. We guide you toward fanciful names that you can own 100%, allowing you to create a unique market identity that resonates with the modern, environmentally conscious contractor.
                                        </p>
                                        <p className="mb-6">
                                            Moreover, as regulation around building materials tightens, having a registered mark becomes a tool for regulatory compliance. It shows that your company is a formal participant in the industrial sector, willing to put its name on its product and take legal responsibility for its quality. This institutional trust is invaluable when negotiating with government development agencies and large-scale infrastructure contractors who are increasingly prioritizing ethical and sustainable supply chains.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Building Trust in Retail: Trademarks for Plywood and Tiles
                                        </h2>
                                        <p className="mb-6">
                                            In the consumer-facing segments of Class 19, like plywood and floor tiles, branding operates much like a consumer good. Customers often walk into a hardware shop and ask for a brand by name because of a TV ad or a recommendation. In this retail landscape, a registered trademark is what prevents a shopkeeper from selling a local imitation as your product. It is the legal shield that protects your multi-crore advertising investment.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark also allows you to enroll in "Brand Protection" programs on e-commerce platforms like Amazon and specialized building material portals. These programs give you the power to instantly take down any listings that use your brand name or images without authorization. This digital enforcement is becoming just as important as physical raids, as more and more contractors and homeowners turn to the internet to source high-end tiles, sanitary non-metal fixtures, and decorative stones.
                                        </p>
                                        <p className="mb-6">
                                            Ultimately, a Class 18 trademark is an investment in the "Asset Profile" of your company. Whether you are a small tile manufacturer in Gujarat or a large cement corporation, owning your brand name increases the enterprise value of your business. It is a sign of industrial maturity. By securing your mark today, you are ensuring that as the buildings of India rise, your brand's reputation rises with them, protected by the full majesty of Indian intellectual property law.
                                        </p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12 text-gray-700">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Frequently Asked Questions: Class 19 Structural Mastery
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

                                    <section className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Pillars of Industry: Client Testimonials
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-inner">
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

                                    <section className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Landscape of Quality Control: Trademarks and Industrial Standards
                                        </h2>
                                        <p className="mb-6">
                                            The construction landscape is increasingly defined by its commitment to safety and regulatory compliance. For non-metallic building materials, this means adhering to Bureau of Indian Standards (BIS) and other international benchmarks like ASTM. A registered trademark does more than just protect a name; it acts as a legal marker of these quality standards. When an engineer sees your registered mark on a batch of cement or a consignment of bricks, they are seeing a commitment to these rigorous structural benchmarks.
                                        </p>
                                        <p className="mb-6">
                                            Trademarking a unique brand name for your sustainable construction line allows you to own that specific market niche. It prevents competitors from using similar "eco-sounding" names that could confuse your environmentally conscious customers. We help structural material startups build strong, defensible brands that communicate both reliability and innovation, ensuring that their material science is protected by the full force of the Trademarks Act.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, as these building materials evolve, the distinction between traditional and high-performance composites becomes a key branding tool. A registered trademark allows you to legally defend the name you use for your specific material, whether it is a proprietary concrete blend or a specialized stone veneer. This legal ownership is what allows you to scale your production and possibly license your material technology to other manufacturers in the future, creating multiple revenue streams for your engineering firm.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Institutional Credibility: Trademarks in Large-Scale Infrastructure
                                        </h2>
                                        <p className="mb-6">
                                            For major construction material brands, entering government-led infrastructure projects or working with Tier-1 contractors requires deep legal documentation. Among these, the Trademark Registration Certificate is one of the most vital. These large-scale projects have strict procurement guidelines that prioritize registered brands to minimize the risk of structural failure and project delays. Without a registration, you are often excluded from the highest-value segments of the market.
                                        </p>
                                        <p className="mb-6">
                                            A trademark acts as your "passport" to professional contracting. It proves to project managers and municipal authorities that you are a legitimate business with a protected identity. This institutional trust is what allows you to secure better credit terms, more consistent orders, and higher project conversion rates. By investing in a Class 19 trademark early, you are laying the groundwork for a professional, scalable industrial presence that can thrive in a highly competitive national infrastructure market.
                                        </p>
                                        <p className="mb-6">
                                            In the logistics and distribution sector, a registered trademark is equally important. Distributors are far more willing to invest in marketing a brand that they know is legally secure. They need the assurance that their investment in stocking and promoting your tiles or bricks won't be wiped out by a trademark dispute six months down the line. Your trademark is effectively the legal insurance policy for your entire distribution and wholesale network.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Detailed Legal Case Studies: Protecting Class 19 Assets in India
                                        </h2>
                                        <p className="mb-6">
                                            The Indian courts have consistently upheld the rights of building material trademark owners against deceptive similarity. Beyond the famous 'MOR CHHAP' case, we have seen numerous disputes involving ceramic tiles and plywood. In these sectors, the "Get-up" or visual identity of the mark (including specific color combinations on the packaging) is often the subject of litigation. Courts have ruled that even if the name is different, if the overall visual impression leads a contractor to believe the product is from a trusted original source, it constitutes infringement.
                                        </p>
                                        <p className="mb-6">
                                            Understanding these cases allows us to build "Infringement-Proof" brands. We don't just focus on the name; we advise on the overall trade dress of your construction supplies. This proactive legal approach ensures that you avoid the mistakes that have cost other manufacturers crores in litigation fees. By learning from the legal history of Class 19 in India, you can build a brand that is not just aesthetically pleasing but is also a legal fortress against modern industrial plagiarism.
                                        </p>
                                        <p className="mb-6">
                                            Another significant area of litigation is the "Prior User" claim. In the building materials industry, many traditional brick kilns or stone quarries have used names for generations without formal registration. However, a new, registered brand can still cause significant problems. We help long-standing industrial businesses secure their "User Date" through detailed evidentiary filings, turning their historical use into a powerful legal shield that can defeat even newer, aggressive registrations. This ensures your legacy is protected for the next generation of builders.
                                        </p>
                                        <p className="mb-6">
                                            A notable trend in recent Indian trademark law is the protection of "Phonetic Similarity" in construction brands. For example, if a brand is registered as 'KRETE', a competitor using 'CRETE' or 'KREET' would likely be blocked. In the construction industry, where many site workers and supervisors order products verbally over the phone or in noisy environments, phonetic clarity is the primary way to prevent market confusion. Our search audits specifically look for these phonetic overlaps to ensure your brand name has a clear, audible "sound-space" that belongs to you alone.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the courts have been increasingly strict about "Trademark Squatting" where individuals register famous international building material names in India before the official brand arrives. If you are an international material scientist or manufacturer planning to enter the Indian market, filing your Class 19 mark before your official launch is essential. We help international clients secure their "Trans-Border Reputation" in India, ensuring that their global brand equity is not hijacked by local opportunistic filers.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Future of Class 19: Digital Integration and QR-Based Authenticity
                                        </h2>
                                        <p className="mb-6">
                                            The construction industry is digitizing rapidly. Modern manufacturers are now integrating QR codes directly onto their cement bags or tile crates, allowing contractors to verify authenticity in real-time. This digital layer of protection works in tandem with your registered trademark. The trademark provides the legal basis, while the digital verification provides the immediate proof. This "Dual-Layer Security" is becoming the gold standard for premium construction brands in India.
                                        </p>
                                        <p className="mb-6">
                                            As building information modeling (BIM) becomes standard for major projects, having your brand registered in Class 19 ensures that your product names are the official identifiers in these digital models. When an architect selects your bricks in a digital twin of a building, they are selecting a legally recognized and protected brand. This integration ensures that your trademark stays relevant in an increasingly automated and software-driven construction landscape.
                                        </p>
                                        <p className="mb-6">
                                            We also see a rising need for "Component-Level Intellectual Property." If your building material is part of a larger structural system, your trademark strategy might need to encompass the entire system brand. At IPR Karo, we help complex industrial manufacturers build a hierarchy of marks (from the overall company brand to specific product names) ensuring that every level of their innovation is legally ring-fenced and ready for the future of smart infrastructure.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Conclusion: Cementing Your Brand's Legacy
                                        </h2>
                                        <p className="mb-6">
                                            Trademark registration for non-metal building materials under Class 19 is not an administrative hurdle; it is a strategic necessity. In an industry where one faulty material can lead to decades of legal liability and brand damage, owning your identity is the only way to ensure your name remains a symbol of safety and trust. It is the legal mortar that holds your market reputation together. Secure your mark today, and build your corporate legacy on a foundation of unshakeable intellectual property.
                                        </p>
                                        <p className="mb-10 text-gray-500 italic">
                                            IPR Karo is India's leading digital platform for intellectual property protection. Our Class 19 specialists understand the physical and legal nuances of the construction industry, providing high-precision filing and enforcement strategies. Join the 50,000+ brands that have built their legal foundations with us.
                                        </p>
                                    </section>

                                </article>
                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Name Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-light">
                                    Before you print your cement bags or tile crates, receive a **Free Class 19 Search Report** from our senior attorneys.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Start Search Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-8 h-8 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Industries</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-firearms" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Metal Building (Class 6)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-paints-coatings" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Paints & Coatings (Class 2)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-rubber-products" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Plastics & Insulation</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Full Service List</span>
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
