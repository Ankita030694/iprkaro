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
    faCut,
    faRing,
    faGem,
    faPalette,
    faLayerGroup,
    faHome
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Lace and Embroidery | Register Class 26 Brand Online',
    description: 'Protect your lace, embroidery, ribbons, and textile accessory brand with Class 26 trademark registration in India. Expert legal guidance for textile manufacturers.',
    keywords: [
        'trademark for lace',
        'register embroidery brand india',
        'class 26 trademark registration',
        'ribbon brand protection',
        'button manufacturer trademark',
        'artificial flowers trademark india',
        'hair decorations brand security',
        'embroidery patches logo registration',
        'textile trims trademark law',
        'garment accessories brand legal'
    ],
    openGraph: {
        title: 'Premium Trademark Registration for Lace & Embroidery',
        description: 'Secure your Class 26 assets with India\'s elite IP legal team. High-authority brand protection for lace and embroidery designers.',
        url: 'https://www.iprkaro.com/trademark-for-lace-and-embroidery',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-lace-and-embroidery',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Why Protect Your Brand' },
    { id: 'class-26-overview', title: 'Scope of Class 26' },
    { id: 'covered-goods', title: 'Categorized Goods' },
    { id: 'registration-steps', title: 'Filing Process' },
    { id: 'required-docs', title: 'Document Checklist' },
    { id: 'legal-nuances', title: 'Legal Nuances' },
    { id: 'overcoming-objections', title: 'Handling Objections' },
    { id: 'global-strategy', title: 'Global Protection' },
    { id: 'business-valuation', title: 'Brand Valuation' },
    { id: 'traditional-heritage', title: 'Heritage Protection' },
    { id: 'digital-embroidery', title: 'Digital Accessories' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class covers lace and embroidery in India?",
        answer: "Lace, embroidery, ribbons, braids, buttons, hooks, and pins are primarily classified under Class 26 of the International Nice Classification system."
    },
    {
        question: "Can I trademark an embroidery design pattern?",
        answer: "Yes, a distinctive embroidery pattern that functions as a brand identifier can be registered as a trademark or 'Trade Dress.' Alternatively, it can be protected under the Designs Act."
    },
    {
        question: "Does Class 26 cover sewing threads?",
        answer: "No, sewing threads and yarns are classified under Class 23. Class 26 focuses on the decorative and functional accessories like lace and embroidery."
    },
    {
        question: "Is it necessary to trademark individual button designs?",
        answer: "While the brand name under which buttons are sold should be trademarked, unique button shapes or decorative designs are often better protected via Design Registration."
    },
    {
        question: "How long does Class 26 trademark registration take?",
        answer: "In India, the process typically takes 6 to 12 months for a straightforward application without oppositions."
    },
    {
        question: "Are artificial flowers also in Class 26?",
        answer: "Yes, Class 26 includes artificial flowers, along with other items like hair decorations and false hair."
    },
    {
        question: "Can I register a trademark for 'Handmade Embroidery'?",
        answer: "You can register your unique brand name for handmade embroidery, but you cannot claim exclusive rights over the descriptive phrase 'Handmade Embroidery' itself."
    },
    {
        question: "What are hooks and eyes in Class 26?",
        answer: "These are small metal or plastic fasteners used in garments, often paired with zips or buttons, and are protected under Class 26."
    },
    {
        question: "Do I need separate trademarks for lace and ribbons?",
        answer: "No, both lace and ribbons fall under Class 26, so you can cover both in a single multi-item application for that class."
    },
    {
        question: "What is the government fee for Class 26 filing?",
        answer: "For individuals, startups, or MSMEs, the fee is ₹4,500 per class. For other entities, it is ₹9,000 per class."
    },
    {
        question: "Does my trademark protect me on international marketplaces?",
        answer: "A domestic trademark protects you only in India. To protect your brand globally on platforms like Etsy or Amazon International, you should consider filing through the Madrid Protocol."
    },
    {
        question: "What if someone else starts using my embroidery brand name?",
        answer: "With a registered trademark, you can file a suit for infringement and seek an injunction to stop them from using your name."
    }
];

const reviews = [
    {
        name: "Rajesh K.",
        role: "CEO, Elegant Trims",
        text: "IPR Karo helped us secure our embroidery brand in Class 26 with zero hassles. Their understanding of the textile accessory market is unmatched.",
        rating: 5
    },
    {
        name: "Anjali M.",
        role: "Founder, Lace & Love",
        text: "Professional service and very transparent. They made sure our unique lace patterns were well protected under trade dress.",
        rating: 5
    },
    {
        name: "Vikram S.",
        role: "MD, Global Buttons Pvt Ltd",
        text: "The team at IPR Karo is highly efficient. They handled our trademark and design registrations across 10 countries seamlessly.",
        rating: 5
    }
];

export default function TrademarkForLaceAndEmbroideryPage() {
    const breadcrumbItems = [
        { label: "Trademark for Lace and Embroidery", href: "/trademark-for-lace-and-embroidery" },
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
        "headline": "The Ultimate 2026 Legal Guide: Trademark Registration for Lace and Embroidery in India",
        "description": "Comprehensive guide on protecting Class 26 brands, including lace, embroidery, ribbons, and garment accessories. Legal steps, costs, and strategic advantages.",
        "author": {
            "@context": "https://schema.org",
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
                "name": "Trademark for Lace and Embroidery",
                "item": "https://www.iprkaro.com/trademark-for-lace-and-embroidery"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Class 26 Trademark Registration Service",
        "description": "Expert trademark filing for lace manufacturers, embroidery designers, and garment accessory wholesalers.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1120"
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
                            Decorating the Future: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Premium Trademark Filing for Lace & Embroidery
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            From intricate embroidery patches to luxury lace trims, your designs are your signature. Secure your Class 26 accessories brand with India's most trusted IP firm. Expert led, fully digital, and designed for global scale.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Design Now
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Brand Security</h4>
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
                                            The Strategic Necessity of Trademark Registration for Lace and Embroidery Designers
                                        </h2>
                                        <p className="mb-6">
                                            In the intricate world of garment accessories, a brand is more than just a label, it is a promise of craftsmanship. From the delicate lace of French origin to the heavy Zardozi embroidery of Lucknow, the industry thrives on visual distinction. However, this sector is also one of the most susceptible to intellectual property theft. In a market where a single design can define a season, protecting the brand name and the aesthetic identifiers of your creations is not optional, it is fundamental to business survival.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Lace and Embroidery</strong> provides the legal bedrock upon which successful textile brands are built. When you register your brand in Class 26, you are not just obtaining a certificate, you are securing a legal monopoly over your identity in the marketplace. In the competitive textile landscape of India and global hubs like Dubai or Paris, imitation is often the first sign of success. Without a registered trademark, fighting copycats who use your brand name or logo to sell inferior ribbons, buttons, or embroidery patches becomes an uphill legal battle.
                                        </p>
                                        <div className="bg-indigo-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-indigo-900 italic font-medium">
                                                "In the textile accessories domain, your brand is the invisible thread that binds quality to consumer trust. Trademarking is the legal needle that ensures that thread remains unbreakable."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, the rise of global e-commerce platforms like Etsy, Amazon, and Myntra has changed the rules of engagement. These platforms prioritize brands with registered trademarks through 'Brand Registry' programs. A registration in Class 26 allows you to take down infringing listings across continents with the click of a button. It transforms your brand from a local shop into a global intellectual property asset. At IPR Karo, we specialize in helping accessory manufacturers navigate this transition from commodity to premium brand.
                                        </p>
                                        <p className="mb-6">
                                            Beyond protection, a trademark is a significant financial instrument. It is an intangible asset that adds value to your balance sheet. Whether you are looking for bank financing to expand your embroidery units or searching for a strategic partner, a clean and robust portfolio of Class 26 trademarks signals that your business is professionally managed and legally secure. We provide the expertise to ensure your filing is wide enough to cover your current products and flexible enough to allow for future expansion into related garment components.
                                        </p>
                                    </section>

                                    <section id="class-26-overview" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Decoding Trademark Class 26: The Home of Embellishments
                                        </h2>
                                        <p className="mb-8">
                                            The International Nice Classification system organizes goods into specific categories. For the textile and fashion industry, <strong>Class 26</strong> is the designated home for lace, embroidery, and various garment fasteners. Understanding the scope of this class is critical to ensuring your application covers all relevant business activities.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faCut} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Lace & Embroidery</h3>
                                                <p className="text-sm leading-relaxed">This covers all types of decorative lace, embroidery in the piece, and embroidery patches. If your brand is known for intricate threadwork or delicate net lace, this is your primary class.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faPalette} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Ribbons & Braids</h3>
                                                <p className="text-sm leading-relaxed">Textile ribbons, elastic ribbons, and braids used in fashion or gift wrapping fall here. These are high volume items where brand recognition drives repeat wholesale orders.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Garment Fasteners</h3>
                                                <p className="text-sm leading-relaxed">Buttons, hooks, eyes, pins, and needles. These functional components are essential for clothing manufacturers and require robust brand protection in the industrial market.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faGem} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Hair & False Hair</h3>
                                                <p className="text-sm leading-relaxed">Interestingly, Class 26 also covers hair decorations, hair bands, and false hair. This makes it relevant for the beauty and grooming accessory industries.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            A common mistake is confusing Class 26 with Class 24 (Fabrics) or Class 25 (Clothing). While the lace itself is in Class 26, a gown made of that lace is in Class 25. Similarly, the embroidery thread used to create the design belongs in Class 23. For designers who operate across these boundaries, a 'Bridge Filing' strategy is essential. IPR Karo conducts comprehensive audits to ensure your brand is protected across the entire garment value chain.
                                        </p>
                                    </section>

                                    <section id="covered-goods" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Inventory of Excellence: Goods Included in Class 26
                                        </h2>
                                        <p className="mb-6">
                                            The Trademark Registry requires a detailed 'Specification of Goods.' Vague descriptions often lead to office actions, while overly narrow ones invite competitors to use your name for related items. Below is the official list of goods that fall under the Class 26 umbrella.
                                        </p>
                                        <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm mb-12">
                                            <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-6 flex items-center">
                                                <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">26</span>
                                                Official Goods in Class 26
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Lace and embroidery in the piece</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Ribbons and braids (textile)</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Buttons, press buttons, and rivets</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Hooks and eyes, pins and needles</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Artificial flowers and fruits</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Hair decorations and scrunchies</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Embroidery patches and trimmings</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Bows for the hair and hair nets</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            In the modern market, brands are also moving toward 'Smart Trims' — buttons or patches with embedded NFC chips for data or temperature tracking. While the physical item is Class 26, the electronic element might require a filing in Class 9. IPR Karo's multidisciplinary team ensures your high tech textile accessories are protected across all relevant digital and physical classes.
                                        </p>
                                    </section>

                                    <section id="registration-steps" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Path to Absolute Design Security
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">1. Forensic Accessibility Audit</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We don't just do a keyword search; we perform a deep dive into the Trademark Registry to identify phonetic, visual, and conceptual similarities. For an embroidery brand, names like 'SilkStitch' might be considered descriptive. We provide a risk assessment report that helps you tweak your brand name or logo to ensure it meets the 'Distinctiveness' criteria of Section 9. This saves you months of potential delays in the examination phase.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">2. Strategic E-Filing & Documentation</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the mark is finalized, we draft the application with a focus on 'User Proof.' In the accessory market, the date you first used the mark is your strongest legal asset. We compile invoices, advertisements, and testimonials into a 'User Affidavit' to prove prior use. This gives you a superior right over anyone who might file a similar mark later. Upon filing, you receive your TM number within 24 hours, allowing you to use the ™ symbol immediately.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">3. Examination Defense & Registration</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Trademark Examiner may raise objections if they find the mark similar to existing ones. Our IP attorneys draft powerful legal responses, citing relevant high court precedents to overcome these hurdles. After passing examination, the mark is published in the Trademark Journal for 4 months. If no one opposes it, your registration certificate is issued, granting you a 10 year legal shield that is renewable indefinitely.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="required-docs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Document Checklist for Your Design House
                                        </h2>
                                        <p className="mb-8 font-medium">To avoid unnecessary office actions, your documentation must be precise. The Registry is particularly strict about authorization and identification.</p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-black text-[rgb(110,94,147)] mb-6 uppercase tracking-wider">Individuals & Startups</h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Identity Proof (Aadhaar & PAN)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Udyam Certificate (For 50% fee discount)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Brand logo in high resolution</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Signed Authorization (Form TM-48)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-black text-gray-400 mb-6 uppercase tracking-wider">Companies & Large Firms</h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Incorporation Certificate / MOA</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Board Resolution for authorized signee</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> GST Registration for business address</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Historical invoices (for User Date)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="legal-nuances" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Nuances in Class 26: Pattern Protection & Trade Dress
                                        </h2>
                                        <p className="mb-6">
                                            The embroidery and lace industry is unique because the product's visual appearance is often its primary selling point. This leads to the complex legal concept of 'Trade Dress.' While a logo is a traditional trademark, the overall 'look and feel' of your lace border or a specific recurring embroidery motif can sometimes be protected as trade dress. This is particularly effective at stopping competitors from creating 'Deceptive Similar' accessory lines that confuse consumers into believing they are buying from your heritage house.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 rounded-3xl my-12 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="w-12 h-12 text-[rgb(110,94,147)] mr-4" />
                                                Avoiding the 'Descriptive' Trap
                                            </h3>
                                            <p className="text-lg opacity-90 leading-relaxed">
                                                One of the most common reasons for rejection in Class 26 is the choice of descriptive names. A brand named 'Golden Embroidery' will likely face an objection under Section 9 because it describes the product. However, if you have used that name for decades, we can argue 'Acquired Distinctiveness' by showing that the public now associates that term exclusively with your business. We help brands move from 'Descriptive' to 'Arbitrary' or 'Suggestive' names that are legally far stronger and easier to defend.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Another important nuance is 'Collective & Certification Marks.' If you are a group of embroidery artisans or a regional lace making association, you can register a mark that certifies the origin, quality, or method of production of the goods. This is crucial for protecting traditional knowledge and geographic indicators from being commercially exploited by mass market factories. IPR Karo supports artisan clusters across India in securing their collective heritage.
                                        </p>
                                        <p className="mb-6">
                                            We also address the issue of 'Class Overlap' in the apparel accessories sector. Many brands sell embroidery patches in Class 26 but also have their own boutique clothing line in Class 25. If your brand becomes 'Well Known' in Class 26, you can block anyone from using that same name in Class 25 by proving that the goods are 'Allied and Cognate.' This prevents brand dilution where a luxury lace brand is marred by a low quality garment manufacturer using the same name.
                                        </p>
                                    </section>

                                    <section id="overcoming-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Defense Strategies: Overcoming Registrar Objections
                                        </h2>
                                        <p className="mb-8 font-medium">
                                            In the accessory sector, nearly 40% of applications receive some form of office action. Your response strategy determines whether your application proceeds to registration or faces a permanent refusal.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-red-100 transition-colors shadow-sm">
                                                <h4 className="text-red-600 font-bold uppercase text-xs tracking-widest mb-4">Challenge A</h4>
                                                <h3 className="text-xl font-bold mb-4 text-gray-900">Section 9: Lack of Distinctiveness</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    If your mark is considered common or descriptive, we file a reply focusing on the 'Suggestive' nature of the mark or by submitting significant evidence of advertising spend and sales turnover to prove that the mark has become distinctive through use.
                                                </p>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-orange-100 transition-colors shadow-sm">
                                                <h4 className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-4">Challenge B</h4>
                                                <h3 className="text-xl font-bold mb-4 text-gray-900">Section 11: Priority Conflicts</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    If the Registrar cites a similar mark, we conduct a 'Discovery Audit.' If the cited mark is for heavy industrial machinery and yours is for luxury fashion lace, we argue that the 'Trade Channels' and 'Target Consumers' are completely different, thereby eliminating any chance of confusion.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            For high stakes cases, we represent our clients in 'Personal Hearings' before the Trademark Registry. Our seasoned IP advocates articulate the legal merits of your application directly to the Registrar, often resolving complex classification and similarity issues that cannot be handled through written replies alone. We ensure that your brand's journey from filing to registration is defended with unrelenting legal rigor.
                                        </p>
                                    </section>

                                    <section id="global-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Global Thread: Trademark Strategy for Exporters
                                        </h2>
                                        <p className="mb-6">
                                            India is one of the world's largest exporters of hand embroidery and machine made lace. For brands supplying to global fashion houses in Milan, New York, or London, an Indian trademark is only the first step. Without international protection, your brand is vulnerable to 'Trademark Squatting' in foreign markets. We help you utilize the 'Madrid Protocol' to file a single international application that can cover over 130 countries, including all major fashion hubs.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-10 relative overflow-hidden">
                                            <h3 className="font-bold text-xl mb-4 text-[rgb(110,94,147)]">Export Protection Checklist</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</span>
                                                    <span className="text-gray-700"><strong>Wait Period Strategy:</strong> We help you use your 'Indian Filing Date' to file overseas within 6 months, giving you backdated priority across the globe.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</span>
                                                    <span className="text-gray-700"><strong>Customs Recording:</strong> By recording your trademark with Customs in target countries, you can have counterfeit shipments of your brand seized at the border by authorities.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</span>
                                                    <span className="text-gray-700"><strong>Linguistic Clearance:</strong> We check if your brand name translates into something descriptive or offensive in the local languages of your export markets.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="business-valuation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Wealth of Design: Brand Valuation and Passive Income
                                        </h2>
                                        <p className="mb-6">
                                            A registered trademark is not just a defensive tool, it is a high performing financial asset. In the world of premium linens and high fashion, the brand name can account for more than 50% of the company's total enterprise value. Protecting your Class 26 trademark increases the 'Goodwill' on your balance sheet, which is critical when seeking venture capital, private equity, or taking out business loans.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, registration enables 'Trademark Licensing.' You can allow other manufacturers or designers to use your brand for specific regions or product sub categories in exchange for 'Royalty Payments.' This allows you to scale your brand presence globally without the capital intensive requirement of building new factories everywhere. IPR Karo drafts bulletproof licensing agreements that ensure your quality standards are maintained while your passive income grows.
                                        </p>
                                        <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-400 my-8 shadow-sm">
                                            <h4 className="font-bold text-yellow-800 mb-2">The Multiplier Effect</h4>
                                            <p className="text-yellow-900 text-sm">Design houses often forget that while machinery depreciates, a well guarded brand name appreciates. Investing in Class 26 protection today is the most effective way to build long term wealth for your heirs and stakeholders.</p>
                                        </div>
                                    </section>

                                    <section id="enforcement" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Enforcement Shield: Solving the Counterfeit Crisis
                                        </h2>
                                        <p className="mb-6">
                                            In the wholesale markets of India, 'Lookalike' lace and embroidery are rampant. Registration gives you the power to stop this. You can file a civil suit for infringement and seek 'Damages' or 'Accounts of Profits' from the infringer. In many cases, a simple 'Cease and Desist' notice from a reputable IP firm like IPR Karo is enough to stop an infringer in their tracks. We act as your brand's legal sentinels, monitoring the market and taking swift action against those who try to profit off your creativity.
                                        </p>
                                        <p className="mb-6">
                                            As we move into 2026, the intersection of 'Digital Textiles' and 'Blockchain Certification' is becoming a reality. We assist forward thinking accessory brands in linking their physical embroidery shipments with digital 'Certificates of Authenticity' backed by their trademark registration. This ensures that a consumer buying your premium trimmings can verify its origin with a simple QR scan, cementing your brand's reputation for authenticity and quality.
                                        </p>
                                    </section>

                                    <section id="traditional-heritage" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Zardozi Legacy: Protecting Traditional Heritage in Class 26
                                        </h2>
                                        <p className="mb-6">
                                            India is home to some of the world's most exquisite traditional embroidery techniques, from the golden 'Zardozi' of Agra to the intricate 'Chikan' work of Lucknow. For businesses that specialize in these heritage crafts, trademark registration is the first line of defense against mass produced imitations. While a 'Geographical Indication' (GI) tag protects the region, a trademark protects your specific design house's reputation for quality. We help heritage brands secure their unique family crests or modern logos, ensuring that their craftsmanship is recognized and protected as an elite intellectual property asset.
                                        </p>
                                        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 my-10 shadow-sm transition-all">
                                            <h3 className="font-bold text-xl mb-4 text-orange-900">Why Heritage Brands Fail Without TM</h3>
                                            <p className="mb-6 italic text-gray-700">
                                                Small scale artisans often believe that their work is too niche to be copied. However, we have seen numerous cases where large scale retailers have adopted similar brand names to sell machine made embroidery labeled as "Handcrafted." Without a Class 26 trademark, the artisan house has no legal standing to stop this deception. IPR Karo works with craft clusters to ensure their collective identity is legally anchored.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="digital-embroidery" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Digital Embroidery: Protecting Software Files vs Physical Output
                                        </h2>
                                        <p className="mb-6">
                                            The industry is shifting toward 'Digitized Embroidery Designs', software files that instruct a machine on how to stitch a pattern. If your brand sells these digital patterns on platforms like Etsy, you face a unique challenge: the theft of the digital file itself. While the physical patch is in Class 26, the software file belongs in Class 9. We implement 'Software Trademark' strategies that cover your brand name in both the digital and physical realms, providing a 360 degree shield against modern piracy.
                                        </p>
                                        <p className="mb-6">
                                            As we look toward 2030, the use of NFC enabled embroidery for product authentication is becoming standard for luxury labels. We assist brands in registering 'Technology Centric' trademarks that reflect their commitment to innovation, ensuring that their tech enabled accessories are protected from both physical counterfeiting and digital cloning. Our team is at the forefront of this legal intersection, ensuring your brand stays ahead of the technological curve.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 border-b-4 border-[rgb(110,94,147)] pb-4 inline-block italic">
                                            Trusted by Indian Accessory Houses
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
                                            Expert FAQ: Trademarking Lace and Embroidery
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
                                            <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">Protect Your Design Legacy</h3>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't let your creativity be pirated. Secure your Class 26 trademark today and enjoy a legal monopoly over your brand.
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
                                    Imitation is the common enemy of design houses. Get a **Free Class 26 Conflict Report** to see if your brand is clear for filing.
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
                                        <Link href="/trademark-for-fabrics" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Fabrics & Textiles</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-yarns-and-threads" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Yarns & Threads</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-clothing-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Clothing & Fashion</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Explore All Classes</span>
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

