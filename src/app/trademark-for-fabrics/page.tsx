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
    faGlobe,
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faMoneyBillWave,
    faCertificate,
    faFileSignature,
    faPhone,
    faChevronRight,
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faSitemap,
    faMicrochip,
    faLeaf,
    faLayerGroup,
    faTshirt,
    faBed,
    faHome
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Fabrics | Register Class 24 Textile Brand Online',
    description: 'Complete guide to trademark registration for fabrics, textiles, bed covers, and table covers in India. Secure your Class 24 brand with expert legal support.',
    keywords: [
        'trademark for fabrics',
        'register textile brand india',
        'class 24 trademark registration',
        'bed linen trademark search',
        'curtain material brand protection',
        'cotton fabric logo registration',
        'silk textile trademark india',
        'wool fabric brand legal protection',
        'textile manufacturer trademark',
        'home furnishing brand security'
    ],
    openGraph: {
        title: 'Premium Trademark Registration for Fabrics & Textiles',
        description: 'Protect your Class 24 textile assets with India\'s top IP legal team. High-authority brand protection for fabric and home furnishing manufacturers.',
        url: 'https://www.iprkaro.com/trademark-for-fabrics',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-fabrics',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Why Protect Your Fabric Brand' },
    { id: 'class-24-overview', title: 'Scope of Class 24' },
    { id: 'covered-goods', title: 'List of Covered Goods' },
    { id: 'registration-steps', title: 'Step-by-Step Filing' },
    { id: 'required-docs', title: 'Document Checklist' },
    { id: 'legal-nuances', title: 'Legal Nuances' },
    { id: 'overcoming-objections', title: 'Handling Objections' },
    { id: 'global-strategy', title: 'Global Protection' },
    { id: 'business-valuation', title: 'Brand Valuation' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class is applicable for fabrics and textiles in India?",
        answer: "Fabrics, textiles, bed covers, and table covers are primarily classified under Class 24 of the International Nice Classification system."
    },
    {
        question: "Does Class 24 cover finished garments?",
        answer: "No, finished garments and clothing fall under Class 25. Class 24 is specifically for the fabrics and textile materials themselves, along with certain home furnishings like bed and table covers."
    },
    {
        question: "Can I trademark a specific textile pattern?",
        answer: "Yes, a unique and distinctive textile pattern can be registered as a trademark (Trade Dress) or as a Design under the Designs Act. Trademark registration is preferable for patterns that serve as brand identifiers."
    },
    {
        question: "What is included under 'home furnishings' in Class 24?",
        answer: "This includes bed sheets, pillowcases, curtains, table runners, towels, and blankets made of textile material."
    },
    {
        question: "How long is a Class 24 trademark valid?",
        answer: "Registration is valid for 10 years and can be renewed indefinitely every 10 years upon payment of renewal fees."
    },
    {
        question: "Can I register a trademark for 'Handloom Fabric'?",
        answer: "You can trademark your brand name for handloom fabrics, but you cannot exclusively claim the descriptive term 'Handloom Fabric' itself."
    },
    {
        question: "Are there any specific exclusions in Class 24?",
        answer: "Yes, electric blankets (Class 10), table linen of paper (Class 16), and certain industrial textiles like geofabrics (often Class 22) may be excluded depending on their specific use."
    },
    {
        question: "Is it possible to trademark a fabric's weave name?",
        answer: "Generic weave names like 'Satin' or 'Twill' cannot be trademarked. However, a unique brand name associated with a specific weave can be protected."
    },
    {
        question: "How much does it cost to register a fabric brand?",
        answer: "The government fee is ₹4,500 for individuals/MSMEs/Startups and ₹9,000 for other entities per class."
    },
    {
        question: "Can I use the TM symbol after filing?",
        answer: "Yes, you can use the ™ symbol as soon as you receive the filing receipt from the Trademark Registry, which typically happens within 24 hours of filing."
    },
    {
        question: "Does a trademark protect me from copycats selling on e-commerce platforms?",
        answer: "Yes, a registered trademark allows you to use 'Brand Registry' programs on platforms like Amazon and Flipkart to take down counterfeit or infringing listings."
    },
    {
        question: "What should I do if my fabric brand is already being used by someone else?",
        answer: "You should immediately consult an IP attorney to evaluate 'Prior Use' rights and consider filing an opposition or a cancellation petition if appropriate."
    }
];

const reviews = [
    {
        name: "Suresh P.",
        role: "Director, Heritage Silks",
        text: "The expertise of IPR Karo in Class 24 registration was instrumental in protecting our unique hand-woven designs. Their process is smooth and legally sound.",
        rating: 5
    },
    {
        name: "Mamta R.",
        role: "Founder, Urban Home Decor",
        text: "Registering our home furnishing brand was a breeze. We got our TM number quickly and the advice on pattern protection was invaluable.",
        rating: 5
    },
    {
        name: "Abhishek G.",
        role: "VP Marketing, Global Textiles Ltd",
        text: "Professional and highly efficient. They handled our multi-class filing for fabrics and garments with extreme precision.",
        rating: 5
    }
];

export default function TrademarkForFabricsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Fabrics", href: "/trademark-for-fabrics" },
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
        "headline": "2026 Strategy: Trademark Registration for Fabrics and Textiles in India",
        "description": "Comprehensive legal guide on protecting Class 24 brands, including fabrics, bed covers, and home textiles. Covers legal steps, costs, and market advantages.",
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
                "name": "Trademark for Fabrics",
                "item": "https://www.iprkaro.com/trademark-for-fabrics"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration for Fabrics",
        "description": "Expert trademark filing for textile manufacturers, home decor brands, and fabric wholesalers in Class 24.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1050"
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
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            Weaving Brand Excellence: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Premium Trademark Filing for Fabrics
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            From luxury silks to sustainable cottons, your textile creations deserve the highest level of legal protection. Secure your Class 24 brand with India's leading intellectual property firm. 100% online, expert-led, and globally recognized.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Brand Now
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Expert Guide</h4>
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

                                    <section id="importance-of-trademark" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Imperative of Trademark Registration for the Fabric Industry
                                        </h2>
                                        <p className="mb-6">
                                            In the vibrant world of textiles, a brand is not just a name; it is a tapestry of quality, heritage, and innovation. From the historic handlooms of Banaras to the modern high speed textile mills of Ahmedabad, the Indian fabric industry is a global behemoth. However, with great success comes the persistent threat of counterfeiting and brand theft. In a market where visual appeal is paramount, a brand name or a unique pattern serves as the ultimate identifier of origin. Without a registered trademark, your fabric business is essentially standing on a foundation of sand, vulnerable to the tides of competition and intellectual property infringement.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Fabrics</strong> is the most powerful legal tool available to a manufacturer or wholesaler to secure their market share. In the textile industry, customer loyalty is built on the consistent feel, durability, and aesthetic of the product. When a customer asks for a specific brand of linen or a particular designer's silk, they are relying on that brand name as a guarantee of quality. If a competitor uses a deceptively similar name to sell inferior fabrics, they are not just stealing a sale; they are eroding your brand equity. A registered trademark under Class 24 provides you with the exclusive statutory right to use the mark and, more importantly, the right to stop others from exploiting it.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A trademark in the textile sector is the legal anchor for your market reputation. It transforms a mere commodity into a valuable intellectual property asset that can be valued, licensed, and protected with surgical precision."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, the shift toward organized retail and e-commerce has made trademark protection non negotiable. Platforms like Amazon, Myntra, and Indiamart require a registered trademark to participate in their brand protection programs. Without a registration certificate, taking down infringing listings is a slow and often unsuccessful process. With it, you have the power to protect your digital storefront across the globe. At IPR Karo, we understand that for a fabric brand, the name is an investment. We ensure that this investment is protected by a shield of legal invincibility.
                                        </p>
                                        Beyond protection, a trademark is a source of immense financial value. It is an intangible asset that appears on your balance sheet, increasing the enterprise value of your company. Whether you are looking for bank financing or preparing for an exit, a well protected portfolio of Class 24 trademarks is a signal to investors that your business is stable and legally secure. We help textile houses navigate the complexities of filing, ensuring that every nuance of their brand, from the logo to the trade dress, is covered.
                                    </section>

                                    <section id="class-24-overview" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Understanding Trademark Class 24: The Domain of Textiles and Furnishings
                                        </h2>
                                        <p className="mb-8">
                                            Trademarks are categorized into 45 classes according to the International Nice Classification system. For anyone in the business of manufacturing, weaving, or selling fabrics, <strong>Class 24</strong> is the primary legal territory. This class is uniquely positioned because it covers both raw textile fabrics and certain finished functional items for the home.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Textile Fabrics</h3>
                                                <p className="text-sm leading-relaxed">This is the core of Class 24. It covers all types of woven, knitted, and non-woven fabrics made from cotton, silk, wool, linen, or synthetic fibers. Whether sold as rolls or cut pieces, these fall here.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBed} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Bed & Table Linen</h3>
                                                <p className="text-sm leading-relaxed">Finished items like bed sheets, pillowcases, duvets, blankets, and table runners are specifically protected under Class 24. This makes it essential for home decor brands.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faHome} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Curtains & Wall Hangings</h3>
                                                <p className="text-sm leading-relaxed">Textile curtains and blinds, along with decorative wall hangings made of textile, are classified here. This is a high growth segment in the interior design space.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Functional Textiles</h3>
                                                <p className="text-sm leading-relaxed">Towels, handkerchiefs of textile, and filtering materials of textile. These are often overlooked but are vital for brand protection in industrial and household markets.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            It is critical to distinguish Class 24 from its neighbors. While the fabric is in Class 24, the yarn that makes it is in Class 23. If the fabric is converted into a dress, that finished garment moves to Class 25. Many successful textile groups follow a 'Triple Class Strategy' to ensure their brand is protected at every stage of the value chain. IPR Karo provides detailed classification audits to ensure you don't leave any legal gaps in your portfolio.
                                        </p>
                                    </section>

                                    <section id="covered-goods" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Exhaustive Inventory: Goods and Materials in Class 24
                                        </h2>
                                        <p className="mb-6">
                                            When filing a trademark, the 'Specification of Goods' must be both comprehensive and precise. In India, a vague description can lead to unnecessary office actions, while a narrow one can leave your brand vulnerable to competitors in related niches. Below is a detailed list of items covered under Class 24.
                                        </p>
                                        <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm mb-12">
                                            <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-6 flex items-center">
                                                <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">24</span>
                                                Official Class 24 Goods Categories
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Bedsheets and pillowcases</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Cotton, silk, and wool fabrics</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Table linen and runners (textile)</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Curtains and blinds of textile</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Towels and washcloths of textile</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Furniture coverings of textile</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Handkerchiefs of textile</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Quilts, duvets, and blankets</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            A sophisticated strategy also includes 'Defensive Filings' for materials you might use in the future. For instance, even if only currently selling cotton fabrics, you should include silk and synthetic fabrics in your specification to prevent a competitor from using your brand name for those materials later. IPR Karo's drafting team ensures your 'List of Goods' is future proofed for business expansion.
                                        </p>
                                    </section>

                                    <section id="registration-steps" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Roadmap to Absolute Brand Security
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">1. AI-Powered Availability Analysis</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We begin with a deep dive into the Indian Trademark Registry. This is not just a simple name search; our algorithms analyze phonetic similarities, visual likenesses (for logos), and cross-class conflicts. For fabric brands, names are often descriptive (e.g., 'EcoSoft'). We provide a 'Probability of Success' report that evaluates whether your mark is 'arbitrary' enough for easy registration or if it will face 'descriptive' hurdles under Section 9. This upfront research saves you thousands in wasted filing fees.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">2. Drafting & Strategic E-Filing</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The way your application is drafted determines its legal strength over the next 10 years. We focus on the 'User Date' - the date you first started using the brand. If you have been in business since 1995 but file as a 'Proposed to be Used' mark, you lose your prior usage rights. We compile 'User Affidavits' and evidence like sales invoices and ads to prove your history. Once filed, you get your application number and the legal right to use the ™ symbol immediately.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">3. Examination Defense & Journal Publication</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Every application is examined for conflicts. In the textile sector, objections under Section 11 (similarity to existing marks) are common. Our IP attorneys draft powerful, case law backed responses arguing 'distinctiveness' and 'trade channel differences' to overcome these hurdles. Once the Examiner is satisfied, your mark is published in the Trademark Journal for 4 months, which is the final window for public opposition before registration.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="required-docs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Document Checklist for Your Textile IP Portfolio
                                        </h2>
                                        <p className="mb-8 font-medium">To ensure a friction-free filing, your documentation must be absolute. The Registry is highly pedantic about signatures and authorization.</p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-black text-[rgb(110,94,147)] mb-6 uppercase tracking-wider">Startup / MSME / Individual</h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Identity Proof (PAN & Aadhaar)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Udyam Certificate (Critical for 50% fee discount)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> High resolution brand logo (PDF/JPG)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Signed Power of Attorney (Form 48)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-black text-gray-400 mb-6 uppercase tracking-wider">Companies & Partnership Firms</h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Certificate of Incorporation / Deed</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Board Resolution authorizing signee</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> GST registration certificate</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Proof of brand use (Invoices, catalogs)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="legal-nuances" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Nuances in Class 24: Pattern Protection and Trade Dress
                                        </h2>
                                        <p className="mb-6">
                                            The fabric industry is unique because the product itself is often decorative. This leads to complex legal questions about what can be trademarked. While a brand name like 'LinenLove' is a traditional trademark, the visual appearance of your fabric, such as a unique border design or a signature weaving pattern, can sometimes be protected as 'Trade Dress.' This prevents competitors from launching 'lookalike' fabrics that confuse consumers into thinking they are buying your heritage products.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 rounded-3xl my-12 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12 text-[rgb(110,94,147)] mr-4" />
                                                The Doctrine of Acquired Distinctiveness
                                            </h3>
                                            <p className="text-lg opacity-90 leading-relaxed">
                                                Can you trademark a name that was originally descriptive? In the textile world, yes. Under the doctrine of 'Acquired Distinctiveness,' if you can prove that through massive sales and long term advertising, a descriptive term has come to be associated exclusively with your house, the Registry may grant protection. This requires a mountain of evidence, ranging from 10 year old invoices to consumer surveys. IPR Karo specializes in building these 'High Burden' cases for established textile houses.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Another nuance is 'Class Hop Protection.' A competitor selling cushions in Class 24 might try to use your brand name for clothing in Class 25. Under Indian law, if your brand is 'well known' in its class, you can often block these registrations even in unrelated classes by proving that the goods are 'allied and cognate.' This prevents a common situation where a luxury sheet brand is diluted by a low quality t-shirt brand using the same name.
                                        </p>
                                        <p className="mb-6">
                                            We also handle 'Collective Marks' and 'Certification Marks' for textile associations. If you represent a group of weavers or a specific regional handloom cluster, we can help you register a mark that guarantees the origin and quality of all fabrics produced by your members. This is the cornerstone of protecting traditional knowledge like 'Kanchipuram Silk' or 'Chanderi Fabric' from being commercially exploited by mass market manufacturers.
                                        </p>
                                    </section>

                                    <section id="overcoming-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Strategic Defense: Overcoming Registrar Objections
                                        </h2>
                                        <p className="mb-8 font-medium text-gray-900">
                                            Approximately 35% of all fabric trademark applications face some form of official objection. Being prepared for these hurdles is what differentiates a successful brand from a failed application.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-red-100 transition-colors shadow-sm">
                                                <h4 className="text-red-600 font-bold uppercase text-xs tracking-widest mb-4">Obstacle A</h4>
                                                <h3 className="text-xl font-bold mb-4 text-gray-900">Section 9: Descriptive Objections</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    This happens when the name describes the product (e.g., 'SilkySmooth Linen'). We counter this by analyzing the 'Surrounding Context' - arguing that the name is 'Suggestive' rather than purely 'Descriptive' or by submitting proof of extensive prior use to establish distinctiveness.
                                                </p>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-orange-100 transition-colors shadow-sm">
                                                <h4 className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-4">Obstacle B</h4>
                                                <h3 className="text-xl font-bold mb-4 text-gray-900">Section 11: Similar Marks</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    If a similar mark exists, we analyze the specific goods. If their mark is for industrial filter cloth and yours is for luxury bedsheets, we argue that the 'Sophistication of the Buyer' and 'Channels of Trade' (industrial B2B vs high end retail) are different enough to prevent confusion.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            In the event of a third party opposition, where a competitor tries to block your registration during the Journal publication phase, we provide aggressive representation. We handle the drafting of 'Counter Statements' and represent you in hearings before the Trademark Tribunal, ensuring that your brand's right to the market is defended with absolute legal force.
                                        </p>
                                    </section>

                                    <section id="global-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Expanding the Thread: Global Trademark Strategy for Exporters
                                        </h2>
                                        <p className="mb-6">
                                            India is a leading global hub for textile exports. For any fabric brand looking to expand into Europe, North America, or the Middle East, an Indian trademark is only the beginning. Without international protection, your brand is vulnerable to 'Hijacking' in target markets, where local entities register your name before you do. We help you navigate the 'Madrid Protocol', allowing you to secure protection in over 130 countries through a single, centralized application in India.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-10 relative overflow-hidden">
                                            <h3 className="font-bold text-xl mb-4 text-[rgb(110,94,147)]">Key Considerations for Export Brands</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</span>
                                                    <span className="text-gray-700"><strong>Linguistic Clearance:</strong> We check if your brand name has a descriptive or negative meaning in the language of your target market.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</span>
                                                    <span className="text-gray-700"><strong>Port Protection:</strong> By recording your trademark with Customs authorities in export countries, you can have counterfeit shipments of your own brand seized automatically at the point of entry.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</span>
                                                    <span className="text-gray-700"><strong>Priority Rights:</strong> Using the 'Indian Filing Date' to file overseas within 6 months gives you backdated protection, blocking anyone who tried to steal your name in the interim.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="business-valuation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Monetizing the Blueprint: Brand Valuation and Licensing
                                        </h2>
                                        <p className="mb-6">
                                            A registered trademark is more than just a certificate; it is a financial asset that appears on your balance sheet. In the fashion and home styling worlds, the brand name often accounts for over 50% of the company's enterprise value. When seeking venture capital, private equity, or even bank loans, a registered trademark is viewed as 'Collateral' that de-risks the investment.
                                        </p>
                                        <p className="mb-6">
                                            Registration also opens the door to 'Franchising and Licensing.' You can authorize other manufacturers to produce fabrics or home furnishings under your brand name in exchange for a royalty. This allows you to scale your brand footprint into new cities or countries without the capital heavy requirement of building new looms and factories. At IPR Karo, we draft 'Trademark License Agreements' that protect your quality standards while maximizing your passive revenue streams.
                                        </p>
                                        <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-400 my-8 shadow-sm">
                                            <h4 className="font-bold text-yellow-800 mb-2">The Valuation Secret</h4>
                                            <p className="text-yellow-900 text-sm">Industrialists often overlook that machinery depreciates, but a well protected trademark appreciates over time. Protecting your brand today is the most effective way to build long term wealth for your heirs and shareholders.</p>
                                        </div>
                                    </section>

                                    <section id="sustainability" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Future: Sustainability and Digital Textiles
                                        </h2>
                                        <p className="mb-6">
                                            As we move toward 2030, the fabric industry is being redefined by sustainability and digitization. Brands focusing on organic textiles, recycled ocean plastics, or energy efficient weaving are gaining massive traction. We help you protect these 'Green Identities' while navigating the thin line between branding and 'Greenwashing' in the eyes of the Registry.
                                        </p>
                                        <p className="mb-6">
                                            We also see the rise of 'Smart Fabrics', textiles embedded with electronics for health monitoring or climate control. Protecting these innovations requires a 'Dual Protection Strategy' spanning Class 24 (the fabric) and potentially Class 9 (the electronics). IPR Karo's specialized team ensures your high tech textile innovations are securely anchored across all relevant intellectual property domains.
                                        </p>
                                    </section>

                                    <section id="enforcement-playbook" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Enforcement Playbook: Defending Your Fabric Market Share
                                        </h2>
                                        <p className="mb-6">
                                            Registration is the shield, but enforcement is the sword. In a high volume industry like textiles, infringement often starts at the wholesale level. Whether it is a small scale weaver using your brand name on lookalike towels or a large retailer selling bedsheets under a phonetically similar mark, your legal response must be swift and decisive. In India, the 'Trade Marks Act, 1999' provides both civil and criminal remedies for infringement. A civil suit can lead to an 'Ad-interim Injunction', effectively shutting down the competitor's sales within days of filing.
                                        </p>
                                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100 my-10 shadow-sm transition-all">
                                            <h3 className="font-bold text-xl mb-4 text-red-900">Cease and Desist: The First Strike</h3>
                                            <p className="mb-6">
                                                In many cases, a strongly worded 'Cease and Desist' notice from a reputable IP firm like IPR Karo is enough to stop an infringer. We outline your superior rights, the potential for heavy damages, and the risk of criminal search and seizure. This often leads to an out of court settlement where the infringer agrees to stop using the mark and destroy existing stock. This 'Low Cost, High Impact' strategy is our preferred first step to protect your business interests without the immediate expense of a full scale lawsuit.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded-xl border border-red-200">
                                                    <h4 className="font-bold text-red-800 mb-2">Anton Piller Orders</h4>
                                                    <p className="text-xs text-gray-600">We help you obtain 'John Doe' or 'Anton Piller' orders, allowing for surprise inspections of infringer premises to seize counterfeit fabric rolls before they are moved or hidden.</p>
                                                </div>
                                                <div className="bg-white p-4 rounded-xl border border-red-200">
                                                    <h4 className="font-bold text-red-800 mb-2">Damages & Accounts</h4>
                                                    <p className="text-xs text-gray-600">You are entitled to either the 'Loss of Profit' you incurred or the 'Illegal Profits' made by the infringer. We ensure your financial interests are fully pursued in court.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="digital-assets" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Beyond the Loom: Digital Textiles, Metaverses, and NFTs
                                        </h2>
                                        <p className="mb-6">
                                            The definition of 'textiles' is expanding into the digital realm. With the rise of the Metaverse and digital fashion, brands are now selling 'Virtual Fabrics' for avatars. While Class 24 traditionally covers physical goods, the forward thinking fabric house must also consider Class 9 (Downloadable virtual goods) or Class 42 (Software services). If your luxury silk pattern is being sold as a digital asset or an NFT (Non-Fungible Token), you need a trademark strategy that covers these emerging platforms.
                                        </p>
                                        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 my-10 shadow-sm">
                                            <h3 className="font-bold text-xl mb-4 text-indigo-900">The Future of Brand Authenticity</h3>
                                            <p className="mb-6 italic">
                                                In a world of deepfakes and digital clones, a registered trademark serves as the ultimate 'Root of Trust.' We assist labels in linking their physical fabric shipments with digital 'Certificates of Authenticity' backed by their trademark registration. This ensures that a consumer buying your premium linen in London can verify its origin in Ludhiana with a simple QR scan.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            As technologies like 'Smart Textiles', fabrics with embedded fibers for data transmission or temperature control, become mainstream, the legal landscape will shift towards a intersection of Patent and Trademark law. IPR Karo's multidisciplinary team ensures that your fabric brand is not just protected for today's physical markets but is prepared for the digital and technological revolutions of tomorrow. We are your partners in weaving a secure future for your textile empire.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 border-b-4 border-[rgb(110,94,147)] pb-4 inline-block italic">
                                            Trusted by Indian Textile Houses
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="flex text-yellow-400 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                                            <p className="text-xs text-[rgb(110,94,147)]">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert FAQ: Trademarking Fabrics in Class 24
                                        </h2>
                                        <div className="space-y-4 max-w-4xl mx-auto">
                                            {faqs.map((faq, idx) => (
                                                <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                                    <div className="bg-gray-50 p-6">
                                                        <h3 className="font-bold text-lg text-gray-900">{faq.question}</h3>
                                                    </div>
                                                    <div className="p-6 bg-white border-t border-gray-100">
                                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Final CTA Section */}
                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Fabric Legacy Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't leave your brand's thread hanging. Get a registered trademark and enjoy a legal monopoly over your Class 24 creations.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult Expert Now
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" />
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

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Is Your Name Safe?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Counterfeiting in fabrics is a multi-billion dollar problem. Get a **Free Class 24 Search Report** to see if your brand is at risk.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Check Availability Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Industry Specific</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-clothing-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Clothing & Apparel</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-yarns-and-threads" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Yarns & Threads</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-furniture-shop" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Furniture Upholstery</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">All IP Services</span>
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
