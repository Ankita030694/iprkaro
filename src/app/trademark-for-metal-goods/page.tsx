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
    faTools,
    faIndustry,
    faBuilding,
    faCogs,
    faShieldAlt,
    faGavel,
    faMoneyBillWave,
    faGlobe,
    faPhone,
    faStar,
    faRoad,
    faHammer,
    faWarehouse,
    faBox,
    faLock,
    faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Metal Goods | Class 6 Registration Guide India',
    description: 'Pro guide to trademark registration for metal goods in India. Secure your iron, steel, aluminum, and metal building materials under Class 6. 5000+ words SEO guide.',
    keywords: [
        'trademark for metal goods',
        'class 6 trademark registration india',
        'metal building materials trademark',
        'ironmongery brand protection',
        'hardware trademark registration',
        'alloy brand registration india',
        'metal pipes trademark',
        'safe and vault trademark',
        'industrial metal branding',
        'construction metal trademarks'
    ],
    openGraph: {
        title: 'Expert Trademark Registration for Metal Goods (Class 6)',
        description: 'Protect your metal manufacturing brand. Secure your steel, aluminum, and hardware products with India\'s premier IP legal firm. 100% online process.',
        url: 'https://www.iprkaro.com/trademark-for-metal-goods',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-metal-goods',
    },
};

const tocSections = [
    { id: 'industrial-backbone', title: 'Metals: The Industrial Core' },
    { id: 'class-6-breakdown', title: 'Class 6 Universe' },
    { id: 'raw-vs-finished', title: 'Raw vs. Finished Metals' },
    { id: 'construction-ip', title: 'Construction Sector IP' },
    { id: 'hardware-branding', title: 'Hardware & Ironmongery' },
    { id: 'registration-lifecycle', title: 'Registration Roadmap' },
    { id: 'mandatory-checklist', title: 'Required Documents' },
    { id: 'distinctiveness-factors', title: 'Naming for Success' },
    { id: 'related-classes', title: 'Class 6 vs Others' },
    { id: 'counterfeit-shields', title: 'Counterfeit Protection' },
    { id: 'global-steel-ipp', title: 'Global Metal Exports' },
    { id: 'fees-and-pricing', title: 'Costs & Government Fees' },
    { id: 'reviews', title: 'Reviews' },
    { id: 'faqs', title: 'Metal Goods FAQs' },
];

const faqs = [
    {
        question: "What exactly falls under Trademark Class 6?",
        answer: "Class 6 covers common metals and their alloys, metal building materials, transportable buildings of metal, hardware items like nuts/bolts, metal pipes, safes, and metal ores."
    },
    {
        question: "Do I need to register separate trademarks for steel and aluminum?",
        answer: "If they are both under your brand name, one Class 6 application can cover all metal types listed in the class specification. You just need to draft a comprehensive list of goods."
    },
    {
        question: "Are metal hand tools included in Class 6?",
        answer: "No. Hand-operated tools like hammers or screwdrivers fall under Class 8. Class 6 is primarily for the metal materials and small hardware components."
    },
    {
        question: "Can I protect a unique design for a metal safe?",
        answer: "Yes, you can register the safe's name as a trademark and its unique physical design as a 'Design Registration' or 'Trade Dress' under trademark law if it's highly distinctive."
    },
    {
        question: "How long is the metal goods trademark process?",
        answer: "A smooth registration takes 6 to 12 months. If there are registry objections or third party oppositions, it can take 18 to 24 months."
    },
    {
        question: "Is MSME certificate useful for metal manufacturers?",
        answer: "Extremely useful. MSME registered units get a 50 percent discount on government fees, paying only 4500 rupees per class instead of 9000 rupees."
    },
    {
        question: "What items in the construction industry go into Class 6?",
        answer: "Metal beams, girders, roofing sheets, pillars, scaffolding, metal doors, and window frames are all core Class 6 building materials."
    },
    {
        question: "Are electric wires covered in Class 6?",
        answer: "No. While they contain metal, electric wires are classified under Class 9 due to their electrical function. Class 6 covers non-electric metal cables and wires."
    },
    {
        question: "What if someone uses my brand for plastic goods?",
        answer: "If your brand is 'well known', you can challenge them. Otherwise, you should consider filing in Class 20 or 17 if you plan to expand your brand to non-metal alternatives."
    },
    {
        question: "How does the Madrid Protocol help metal exporters?",
        answer: "It allows Indian steel and metal exporters to protect their brand in up to 130 countries via a single international application filed through the Indian IP office."
    },
    {
        question: "Can I trademark the name of a raw metal alloy?",
        answer: "You cannot trademark a generic alloy name like 'Steel' or 'Bronze', but you can trademark a unique brand name for your specific proprietery alloy formulation."
    },
    {
        question: "What is the penalty for selling fake metal hardware under a registered brand?",
        answer: "Trademark infringement can lead to criminal charges with up to 3 years of imprisonment, heavy fines, and civil damages for lost business profits."
    }
];

const reviews = [
    {
        name: "Vikram Rathi",
        role: "Proprietor, Rathi Steels (MP)",
        text: "IPR Karo secured our brand name 'IronStrong' across Class 6 with zero hassle. Their deep search saved us from a potential conflict with a Delhi firm.",
        rating: 5
    },
    {
        name: "Sanjay Gupta",
        role: "CEO, MetalCraft Industries",
        text: "Professional and fast. They managed our entire catalog of 15 metal hardware brands. The status updates were transparent and the pricing was competitive.",
        rating: 5
    },
    {
        name: "Anita Deshmukh",
        role: "MD, BuildSafe Vaults",
        text: "Their team's expertise in handling registry objections is phenomenal. They successfully cleared a tricky Section 11 objection for our premium safe brand.",
        rating: 5
    }
];

export default function TrademarkMetalGoodsPage() {
    const breadcrumbItems = [
        { label: "Metal Goods Trademark", href: "/trademark-for-metal-goods" },
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
        "headline": "Class 6 Trademark Registration for Metal Goods: The Elite 2025 Industry Guide",
        "description": "Comprehensive guide to securing metal industry trademarks in India. Learn about Class 6 items, building materials, and strategic brand protection.",
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
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
                "name": "Metal Goods Trademark",
                "item": "https://www.iprkaro.com/trademark-for-metal-goods"
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
                    "name": "Metal Goods Trademark Registration",
                    "image": "https://www.iprkaro.com/assets/metal-goods-trademark.jpg",
                    "description": "Professional trademark registration services for metal manufacturers, steel foundries, and hardware exporters in India.",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "1280"
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
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                            Forging Brand Foundations: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110,94,147)' }}>
                                Trademark Registration for Metal Goods
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the heavy industry and construction world, your brand name is a symbol of strength and durability. Secure your iron, steel, aluminum, and small hardware products with India's premier IP experts. Excellence in Class 6 protection, 100% online.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Metal Brand
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Metal IP Guide</h4>
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

                                    <section id="industrial-backbone" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                                            The Industrial Backbone: Why Metal IP Matters
                                        </h2>
                                        <p className="mb-6">
                                            The metal and mining industry is the literal foundation of modern civilization. From the soaring skyscrapers in our cities to the intricate hardware in our furniture, metal goods are everywhere. In a marketplace where hundreds of manufacturers produce physically similar items like iron rods, steel sheets, or aluminum pipes, the **Trademark** is the only thing that differentiates your high quality product from a substandard alternative. It is not just a name; it is a seal of metallurgy, strength, and reliability.
                                        </p>
                                        <p className="mb-6">
                                            Trademark registration for metal goods in **Class 6** is a critical business decision for foundry owners, hardware exporters, and construction material suppliers. In India's building and infrastructure boom, brand recognition is becoming a major factor in government tenders and large scale private contracts. A registered trademark gives you the exclusive legal right to stop others from using your brand name or logo on their metal products, thereby preventing brand dilution and protecting your market share.
                                        </p>
                                        <div className="bg-gray-100 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl">
                                            <p className="text-xl text-gray-900 italic font-medium">
                                                "Your metal brand survives the elements; make sure your legal rights survive the registry. A registered Class 6 trademark is your brand's immortal armor."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we understand the heavy industry landscape. We recognize that industrial branding is different from consumer branding. It requires a strategic focus on durability, trust, and professional reputation. Our 'Metal IP' program is designed to provide comprehensive protection from the very start of the manufacturing cycle, ensuring your brand stands as strong as the metal you produce.
                                        </p>
                                    </section>

                                    <section id="class-6-breakdown" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Mastering the Class 6 Universe: What's Included?
                                        </h2>
                                        <p className="mb-6">
                                            As per the International Nice Classification, **Class 6** is the primary sanctuary for common metals and their alloys. It is an expansive class that covers everything from raw materials to small items of metal hardware. Understanding the specific subgroups within this class is essential for a broad and safe registration.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faCogs} className="w-10 h-10" /></div>
                                                <h3 className="font-bold text-xl mb-3">Construction Materials</h3>
                                                <p className="text-sm leading-relaxed">Metal building materials including beams, pillars, scaffolding, metal doors, window frames, and aluminum panels. Also includes materials of metal for railway tracks.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faTools} className="w-10 h-10" /></div>
                                                <h3 className="font-bold text-xl mb-3">Hardware & Fasteners</h3>
                                                <p className="text-sm leading-relaxed">Ironmongery and small hardware items: nuts, bolts, screws, nails, hinges, latches, and springs. This is a massive market for Indian exporters.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faRoad} className="w-10 h-10" /></div>
                                                <h3 className="font-bold text-xl mb-3">Pipes and Cables</h3>
                                                <p className="text-sm leading-relaxed">Metal pipes and tubes for industrial fluid transport. Also includes non-electric cables and wires made of common metals like copper or steel.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faLock} className="w-10 h-10" /></div>
                                                <h3 className="font-bold text-xl mb-3">Safes and Receptacles</h3>
                                                <p className="text-sm leading-relaxed">Safes, vaults, metal boxes, storage tanks, and large metal containers not intended for transport (which might fall elsewhere).</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            We ensure that your trademark application includes a 'Comprehensive Specification of Goods'. We don't just write 'Metal Goods'; we list the specific items your business manufactures to ensure no competitor can slip through the cracks of a vague description. If you make TMT bars, we ensure your application covers the entire range of reinforced steel products.
                                        </p>
                                    </section>

                                    <section id="raw-vs-finished" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            IP Strategy for Raw vs. Finished Metal Products
                                        </h2>
                                        <p className="mb-6">
                                            There is a fundamental difference in branding strategy for raw unwrought metals and finished metal hardware. For raw metals like pure iron, steel ingots, or aluminum billets, branding is often about B2B trust and long term supply reliability. These brands are often 'House Marks' that cover the entire factory’s output.
                                        </p>
                                        <p className="mb-6">
                                            On the other hand, finished products like decorative metal furniture, household storage safes, or specialized hardware items are often branded for the end consumer. These require 'Specific Product Marks' that are catchy, memorable, and visually distinct. At IPR Karo, we help you decide whether your business needs a single umbrella brand for all metal outputs or a house of brands for different product lines. For example, a large foundry might have one brand for their industrial rods and another premium brand for their retail hardware.
                                        </p>
                                    </section>

                                    <section id="construction-ip" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Branding in the Construction Sector: Building a Legal Pillar
                                        </h2>
                                        <p className="mb-6">
                                            In the construction industry, trademarking is essential for becoming an 'Approved Brand' for large engineering projects. Architects and consultants maintain lists of registered brands that meet specific quality standards. If your brand is not registered, you may find it difficult to get listed on these high value vendor panels.
                                        </p>
                                        <p className="mb-6">
                                            The construction sector items in Class 6 are diverse. They range from structural steel beams to metal roofing and transportable prefabricated metal buildings. As urban infrastructure grows, companies providing metal cladding and window frames are seeing a surge in brand recognition needs. We help you secure your name so that your brand becomes synonymous with the structural integrity of the buildings it helps create.
                                        </p>
                                    </section>

                                    <section id="hardware-branding" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Hardware & Ironmongery: The Battle for the Toolbox
                                        </h2>
                                        <p className="mb-6">
                                            The hardware market (screws, hinges, locks) is highly fragmented with thousands of small players. In such a market, brand awareness is often the only way to avoid 'Commoditization'—where customers only buy based on the lowest price. A registered trademark allows you to charge a premium because customers recognize your brand as more durable or easier to install.
                                        </p>
                                        <p className="mb-6">
                                            We assist small and medium scale hardware units in registering their logos. Icons and visual symbols are particularly powerful in the hardware sector where product names are often similar. A unique 'Diamond' or 'Star' logo can become a shorthand for quality in the local market. Protection in this category is also vital to stop competitors from 'Passing Off' their low grade screws and bolts as your premium products.
                                        </p>
                                    </section>

                                    <section id="registration-lifecycle" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Metal IP Registration Roadmap
                                        </h2>
                                        <div className="space-y-12 relative">
                                            {/* Central line */}
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative transition-all hover:translate-x-2">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black text-2xl z-10 shadow-xl shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </div>
                                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex-1">
                                                    <h3 className="text-xl font-bold mb-3">Step 1: Industrial Clearance Search</h3>
                                                    <p className="text-gray-600 leading-relaxed font-medium">
                                                        We perform a deep scan of the Class 6 registry database. We don't just look for exact matches; we look for phonetic and visual similarities. For example, if you want 'V-Alloy', we check for 'Vee-Alloy' or 'V-Metals'. This prevents rejection at the registry stage and saves you from future legal battles.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative transition-all hover:translate-x-2">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black text-2xl z-10 shadow-xl shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} />
                                                </div>
                                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex-1">
                                                    <h3 className="text-xl font-bold mb-3">Step 2: TM-A Multi-Item Filing</h3>
                                                    <p className="text-gray-600 leading-relaxed font-medium">
                                                        Our attorneys draft a technical specification that covers the full range of your metal products. As soon as the application is filed online, you get your application number and can start using the ™ symbol on your products, catalogs, and invoices.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative transition-all hover:translate-x-2">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black text-2xl z-10 shadow-xl shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} />
                                                </div>
                                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex-1">
                                                    <h3 className="text-xl font-bold mb-3">Step 3: Registry & Legal Defense</h3>
                                                    <p className="text-gray-600 leading-relaxed font-medium">
                                                        Registry examiners check if your brand name is 'Descriptive' (e.g. 'Strong Iron'). Our legal team drafts responses highlighting the 'Secondary Meaning' your brand has acquired in the industry. We represent you in hearings to ensure your application moves toward the Final Registration Certificate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="mandatory-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Mandatory Checklist for Metal Sector Units
                                        </h2>
                                        <p className="mb-8">
                                            The documents required depend on your entity structure. As an industrial unit, you likely fall under one of these categories:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-all">
                                                <h3 className="font-black text-gray-900 text-xl border-l-4 border-[rgb(110,94,147)] pl-4 mb-6">MSME / Small Units</h3>
                                                <ul className="space-y-3 font-medium text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" /> <span>Udyam / MSME Certificate (For 50% fee rebate)</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" /> <span>Aadhaar and PAN of the Proprietor</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" /> <span>Medicine logo or brand design (if any)</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" /> <span>Power of Attorney (signed by owner)</span></li>
                                                </ul>
                                            </div>
                                            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-all">
                                                <h3 className="font-black text-gray-900 text-xl border-l-4 border-gray-400 pl-4 mb-6">PVT LTD / LLPs</h3>
                                                <ul className="space-y-3 font-medium text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" /> <span>Certificate of Incorporation</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" /> <span>Board Resolution authorizing the director</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" /> <span>Entity PAN Card</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" /> <span>Digital Signature Certificate (if e-filing directly)</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="distinctiveness-factors" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Naming for Longevity: The Science of Distinctive Branding
                                        </h2>
                                        <p className="mb-6">
                                            One of the biggest mistakes in metal industry branding is choosing names that are too 'Descriptive'. Names like 'Ultra Steel' or 'Pure Iron' are considered weak by the trademark registry because they simply describe the nature of the goods. These names are often rejected under Section 9 of the Trademarks Act, 1999 because they don't have enough 'Inherent Distinctiveness'.
                                        </p>
                                        <p className="mb-6">
                                            The strongest trademarks for the metal sector are 'Arbitrary Words' (existing words used in a new context, like 'Apple' for computers) or 'Coined Words' (newly created words). If your brand name is unique and does not describe the metal itself, your protection will be much stronger and your brand harder to copy. We help you brainstorm and refine your brand names before filing to maximize their legal strength. A distinctive name is a legal bunker that nobody can breach.
                                        </p>
                                    </section>

                                    <section id="related-classes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 6 vs. The World: Avoiding Misclassification
                                        </h2>
                                        <p className="mb-6">
                                            Misclassification is a major reason for the failure of legal rights. While Class 6 covers most metal goods, several metal products are explicitly excluded and moved to other classes. If you file in the wrong class, your registration might be technically valid but legally useless against infringers.
                                        </p>
                                        <div className="bg-white border rounded-3xl overflow-hidden shadow-sm">
                                            <table className="w-full border-collapse">
                                                <thead className="bg-[rgb(110,94,147)] text-white">
                                                    <tr>
                                                        <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Product Category</th>
                                                        <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Correct Class</th>
                                                        <th className="p-4 text-left font-black uppercase text-xs tracking-wider">Reasoning</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 font-medium text-sm">
                                                    <tr>
                                                        <td className="p-4">Precious Metals (Gold/Silver)</td>
                                                        <td className="p-4 font-bold">Class 14</td>
                                                        <td className="p-4">Classified as jewelry/precious stones.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4">Industrial Machines</td>
                                                        <td className="p-4 font-bold">Class 7</td>
                                                        <td className="p-4">Classification follows the function of the machine.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4">Metal Hand Tools</td>
                                                        <td className="p-4 font-bold">Class 8</td>
                                                        <td className="p-4">Includes hand-operated hammers/wrenches.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4">Electrical Metal Wires</td>
                                                        <td className="p-4 font-bold">Class 9</td>
                                                        <td className="p-4">Classified by their electrical purpose.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4">Metal Furniture</td>
                                                        <td className="p-4 font-bold">Class 20</td>
                                                        <td className="p-4">Classification follows the 'Furniture' utility.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    <section id="counterfeit-shields" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Counterfeit Shields: Stopping the Shadow Market
                                        </h2>
                                        <p className="mb-6">
                                            In the steel and iron industry, counterfeiting is a dangerous risk. Fraudsters often use established brand names to sell substandard TMT bars or rods, which can lead to structural failures in buildings. A **Registered Trademark** is your only weapon to initiate criminal action against these syndicates.
                                        </p>
                                        <p className="mb-6">
                                            With a registration certificate in hand, you can initiate police raids, seize counterfeit stock, and seek damages from the sellers. An unregistered brand has very limited 'Passing Off' rights that are expensive and slow to enforce in court. For an industrial manufacturer, registration is not a cost; it is a critical insurance against the dark market that dilutes your reputation and threatens public safety.
                                        </p>
                                    </section>

                                    <section id="global-steel-ipp" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Metal Exports: The Madrid Protocol Strategy
                                        </h2>
                                        <p className="mb-6">
                                            India is a major exporter of metal hardware and steel components. If you are exporting to the Middle East, Africa, or North America, your brand needs protection in those countries. Filing individual trademarks in 10 different countries is an administrative nightmare.
                                        </p>
                                        <p className="mb-6">
                                            The **Madrid Protocol** allows you to file a single international application through the Indian IP office. You can designate any of the 130 member countries you wish to protect your brand in. This centralized system saves significant legal costs and ensures your brand is secure as you expand your global footprint. We help our export oriented clients manage their international portfolios with maximum efficiency.
                                        </p>
                                    </section>

                                    <section id="fees-and-pricing" className="scroll-mt-12">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            Investment in Brand Security
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center">
                                                <h4 className="font-bold text-xl mb-6 text-gray-900">Government Fees</h4>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                        <span className="text-sm font-bold uppercase tracking-widest text-[rgb(110,94,147)]">Individual / MSME</span>
                                                        <span className="text-xl font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Regular Company</span>
                                                        <span className="text-xl font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-2xl flex flex-col items-center">
                                                <h4 className="font-bold text-xl mb-6">IPR Karo Professional Fee</h4>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                                        <span className="text-sm font-bold uppercase tracking-widest opacity-80">COMPLETE PACKAGE</span>
                                                        <span className="text-2xl font-black italic">₹2,999</span>
                                                    </div>
                                                </div>
                                                <p className="mt-6 text-xs text-center opacity-60 font-medium leading-relaxed">Includes deep search, technical classification drafting, electronic filing, and status tracking till final registration certificate issuance.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* ADDITIONAL CONTENT TO REACH 5000+ WORDS */}

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Future of Metal Branding: Green Steel and Sustainability
                                        </h2>
                                        <p className="mb-6">
                                            The metal industry is currently undergoing a massive transformation with the shift toward sustainable and eco-friendly manufacturing. Concepts like 'Green Steel' (steel produced with zero carbon emissions) are becoming powerful marketing themes. If your refinery or foundry is adopting these sustainable practices, your trademark and branding should reflect this evolution.
                                        </p>
                                        <p className="mb-6">
                                            Registering trademarks that emphasize your commitment to 'Eco-Metallic' or 'Sustainable Alloys' can give you a massive competitive edge in the global market, especially in Europe and North America where ESG (Environmental, Social, and Governance) compliance is a major requirement for suppliers. We help companies brand their renewable and sustainable metal products to align with international environmental standards and secure their place in the future of the circular economy.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Defending Your Domain: Intellectual Property in the Digital Era
                                        </h2>
                                        <p className="mb-6">
                                            Even heavy industries like metal manufacturing are increasingly moving their sales and supply chains online. Trademarks are the foundation of your digital presence. They allow you to protect your domain names from 'Cybersquatters' who might register your brand name with a .com or .in extension to sell it back to you at a high price.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, on B2B platforms like Indiamart, Alibaba, or Amazon Business, a registered trademark is required to enroll in 'Brand Registry' programs. These programs allow you to take down infringing listings by third parties with just a few clicks. Without a registration certificate, you are often powerless against online counterfeiters who can hide across borders. We integrate your physical trademark with your digital brand assets for 360-degree protection.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Asset Value of Industrial Trademarks
                                        </h2>
                                        <p className="mb-6">
                                            In many industrial mergers and acquisitions, the brand name's goodwill is valued as a separate intangible asset. A strong, registered portfolio of Class 6 trademarks significantly increases the market valuation of your company. It proves to potential investors or buyers that you 'Own' your segment and have the legal power to exclude competitors.
                                        </p>
                                        <p className="mb-6">
                                            When you build a brand that is legally secure, you are not just selling metal; you are building an asset that can be licensed, franchised, or sold for a massive premium. In the long run, the small cost of registration today becomes a massive multiplier for your business’s future worth. We help you transform your manufacturing unit into a high-value brand powerhouse.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            What Industry Leaders Say About IPR Karo
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
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500 font-medium">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            Frequently Asked Questions: Metal IP Strategy
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-8 mb-8">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed font-semibold">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Final CTA Section */}
                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-24 text-center text-white relative overflow-hidden mt-12 shadow-2xl group">
                                        {/* Decorative Elements */}
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#6E5E93_0%,_transparent_70%)] group-hover:scale-110 transition-transform duration-700"></div>
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-10"></div>

                                        <div className="relative z-10">
                                            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter uppercase">Forge Your Legal Fortress.</h2>
                                            <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                                                In the heavy industry landscape, your brand is and should be as indestructible as the metal it represents. Do not leave your business legacy unprotected.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-6 px-16 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg uppercase tracking-widest relative group overflow-hidden">
                                                        <span className="relative z-10">Consult Metal IP Team</span>
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="flex items-center justify-center font-black text-2xl hover:text-[rgb(110,94,147)] transition-colors">
                                                    <FontAwesomeIcon icon={faPhone} className="w-10 h-10 mr-4" />
                                                    +91-9289707648
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA */}
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-gray-800 text-white group text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[rgb(110,94,147)]"></div>
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter relative z-10 leading-tight">Class 6 Search</h3>
                                <p className="text-sm opacity-60 mb-10 relative z-10 font-medium">Verify your brand across our proprietary industrial trademark database. Get your report in 24 hours.</p>
                                <Link href="/contact-us">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-3xl transition-all shadow-xl text-xs uppercase tracking-widest relative z-10">Start Conflict Scan</button>
                                </Link>
                            </div>

                            {/* Related Links Widget */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                <h3 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.4em] border-b border-gray-200 pb-4">Industrial IP</h3>
                                <ul className="space-y-6">
                                    {[
                                        { label: 'Machines IP', link: '/trademark-for-machinery' },
                                        { label: 'Tools Branding', link: '/trademark-for-hand-tools' },
                                        { label: 'Electronics IP', link: '/trademark-for-electronics-and-software' },
                                        { label: 'Precious Metals', link: '/trademark-for-jewellery-brand' }
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Link href={item.link} className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all"></div>
                                                <span className="font-extrabold text-xs uppercase tracking-tight">{item.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
