
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
    faSuitcase,
    faBriefcase,
    faUmbrella,
    faDog,
    faGem
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Leather Goods | Class 18 Registration India',
    description: 'Complete guide to trademark registration for leather goods, handbags, and luggage in India. Secure your Class 18 brand assets today.',
    keywords: [
        'trademark for leather goods',
        'class 18 trademark india',
        'leather handbags trademark',
        'luggage brand registration',
        'synthetic leather trademark',
        'animal skins trademark india',
        'wallet brand registration',
        'leather accessories trademark',
        'msme trademark benefits leather industry',
        'intellectual property for leather manufacturers'
    ],
    openGraph: {
        title: 'Premium Trademark Registration for Leather & Travel Goods',
        description: 'Protect your leather craft and luxury travel assets with India\'s leading IP team. 100% online, legal expertise for Class 18.',
        url: 'https://www.iprkaro.com/trademark-for-leather-goods',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-leather-goods',
    },
};

const tocSections = [
    { id: 'brand-identity-leather', title: 'The Leather Identity' },
    { id: 'class-18-scope', title: 'Class 18 Spectrum' },
    { id: 'premium-branding', title: 'Premium Positioning' },
    { id: 'leather-vs-footwear', title: 'Class 18 vs Class 25' },
    { id: 'registration-steps', title: 'Registration Path' },
    { id: 'documents-check', title: 'Document Mastery' },
    { id: 'enforcement-raids', title: 'Anti-Counterfeiting' },
    { id: 'msme-schemes', title: 'MSME Rebates' },
    { id: 'global-export', title: 'Global IP & Madrid' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What items fall under Trademark Class 18 in India?",
        answer: "Class 18 primarily covers leather and imitations of leather, animal skins, hides, trunks, travelling bags, umbrellas, parasols, walking sticks, whips, harness, and saddlery. It includes handbags, wallets, and backpacks."
    },
    {
        question: "Does Class 18 cover leather shoes or jackets?",
        answer: "No, leather footwear and clothing fall under Class 25. Class 18 is dedicated to the materials and carrying accessories like bags and wallets."
    },
    {
        question: "Is imitation leather (vegan leather) covered in Class 18?",
        answer: "Yes, imitations of leather and products made from synthetic leather materials are fundamentally classified under Class 18."
    },
    {
        question: "What is the government fee for leather startups in the MSME category?",
        answer: "Leather startups with a valid Udyam certificate get a 50 percent rebate, paying 4500 as the government filing fee instead of the standard 9000 per class."
    },
    {
        question: "Can I trademark a specific leather texture?",
        answer: "While texture itself is hard to trademark, a unique pattern or embossed design as part of a logo can be registered. Distinctive shapes of bags can also be protected as 3D trademarks."
    },
    {
        question: "How long does registration take for a leather brand?",
        answer: "The process usually takes 8 to 12 months, assuming the registry does not raise significant objections or third parties do not file an opposition."
    },
    {
        question: "Do leather belts fall under Class 18?",
        answer: "Standard leather belts for clothing are usually in Class 25. However, industrial leather straps or belts not for clothing can fall in Class 18."
    },
    {
        question: "How can I stop fake copies of my branded leather bags?",
        answer: "With a registered trademark, you can initiate police raids, seize counterfeit goods, and file civil suits for permanent injunctions and damages."
    },
    {
        question: "Does Class 18 include leather watch straps?",
        answer: "No, leather watch straps are classified under Class 14, along with watches and jewellery."
    },
    {
        question: "Can I protect my leather brand globally?",
        answer: "Yes, through the Madrid Protocol, you can use your Indian Class 18 application to seek protection in over 125 countries, which is ideal for leather exporters."
    }
];

const reviews = [
    {
        name: "Vikram S.",
        role: "Founder, LuxeLeather Exports",
        text: "Securing our Class 18 mark was the turning point for our European exports. IPR Karo handled the entire transition from a local unit to a protected brand.",
        rating: 5
    },
    {
        name: "Anjali Gupta",
        role: "Designer, UrbanHides",
        text: "The guidance on the 50 percent MSME rebate was incredibly helpful. Their team is professional and the digital process is seamless for busy entrepreneurs.",
        rating: 5
    },
    {
        name: "Rajesh Khanna",
        role: "Director, Heritage Saddlery",
        text: "Protecting our traditional harness designs required deep legal expertise. They successfully cleared registry objections that other firms found difficult.",
        rating: 5
    }
];

export default function LeatherGoodsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Leather Goods", href: "/trademark-for-leather-goods" },
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
        "headline": "Definitive Guide to Trademark Registration for Leather Goods in India (Class 18)",
        "description": "Comprehensive legal insights into Class 18 protection for leather, handbags, and travel gear. Strategy for luxury startups, MSME benefits, and global IP enforcement.",
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
                "name": "Trademark for Leather Goods",
                "item": "https://www.iprkaro.com/trademark-for-leather-goods"
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
                    "name": "Trademark Registration for Leather and Travel Goods",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1840"
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
                            Supple Luxury, <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Immutable Brand Protection for Leather
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            From handcrafted wallets to premium travel luggage, your Class 18 brand is the signature of quality that global buyers demand. Secure your leather and synthetic assets with India's lead IP specialists. 100% digital, zero hidden costs, end-to-end legal support.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Claim Your Leather Trademark
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

                                    <section id="brand-identity-leather" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Power of Branding in the Premium Leather Goods Market
                                        </h2>
                                        <p className="mb-6">
                                            The leather industry in India is a pillar of economic heritage, blending traditional craftsmanship with modern industrial scale. In this sector, the brand name is the primary indicator of material authenticity, tanning standards, and ethical sourcing. Whether you are producing artisanal leather wallets, high-end travel trunks, or specialized animal harnesses, your trademark is the legal certificate of your product's soul. It is the bridge between the hidden workshop and the global stage.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Leather Goods</strong> under Class 18 is the fundamental step in transforming a commodity product into a luxury asset. In an era where "vegan leather" and synthetic alternatives are prominent, a registered mark allows you to clearly communicate the origin and nature of your materials. It acts as a beacon for consumers who value the longevity and tactile experience of genuine leather. Without a registered mark, you are leaving your reputation unprotected against market dilution and unauthorized imitations.
                                        </p>
                                        <div className="bg-purple-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-purple-900 italic font-medium">
                                                "In the world of leather, the brand is the guarantee. If the logo isn't legally yours, the guarantee is worthless, and your market value is vulnerable to every shadow factory."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Under the Trade Marks Act, 1999, registration grants you the exclusive right to use the mark across the vast Indian landscape. For leather manufacturers who supply to international fashion houses or major retail chains, a registered trademark is often a non-negotiable prerequisite for partnership. These large-scale buyers require the legal certainty that the brand they are associating with is secure and defensible. It is not just about a name; it is about providing commercial stability for your entire supply chain.
                                        </p>
                                        <p className="mb-6">
                                            Beyond protection, a trademark is a powerful intangible asset that elevates your company's valuation. For MSMEs in the leather sector, a registered brand is frequently a key requirement for securing bank financing, government grants, and export incentives. It proves that your business is built on a foundation of intellectual property, making it far more attractive to investors and strategic partners. In a globalized economy, where Indian leather is reaching the high streets of London, New York, and Tokyo, a solid domestic trademark is the first milestone toward an international IP empire.
                                        </p>
                                    </section>

                                    <section id="class-18-scope" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 18 Scope: Defining the Universe of Leather and Travel Accessories
                                        </h2>
                                        <p className="mb-8 font-semibold">
                                            Class 18 of the Nice Classification system is the definitive category for carrying and travel goods. Understanding its breadth ensures your brand is protected across all relevant product lines.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faSuitcase} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Luggage & Carrying Bags</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Travel trunks, suitcases, duffel bags, and backpacks. Includes all types of carrying bags whether made of leather, imitation leather, or fabric used in a luggage context.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBriefcase} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Small Leather Goods</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Wallets, pocket purses, credit card cases, and briefcases. Also covers key cases and pouches used for organization of personal items.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faUmbrella} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Umbrellas & Sticks</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Umbrellas, parasols, walking sticks, and alpenstocks. This category also includes the handles and frames for these items.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faDog} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Animal Gear & Hides</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Animal skins, hides, whips, harness, and saddlery. Includes collars, leashes, and blankets for animals, and specialized riding equipment.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            One of the most critical aspects of Class 18 is its inclusion of "imitation leather." This means your protection extends to modern synthetic and vegan leather products. This is vital in today's market where material innovation is rapid. By securing a Class 18 mark, you are protecting the identity of your brand regardless of whether the material is animal-derived or a high-tech polymer.
                                        </p>
                                        <p className="mb-6">
                                            Class 18 also includes niche industrial items like goldbeaters' skin and gut for making sausages. For most of our clients, however, the focus remains on personal accessories and travel gear. At IPR Karo, we perform a "Strategic Goods Audit" to ensure your application description is broad enough to prevent competitors from using similar marks on adjacent carrying goods while being specific enough to clear registry examination.
                                        </p>
                                    </section>

                                    <section id="premium-branding" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Premium Positioning: Trademarks as the Foundation of Luxury
                                        </h2>
                                        <p className="mb-6">
                                            The leather market is unique because it spans from utility (school bags) to extreme luxury (hand-stitched purses). In the luxury segment, the trademark is more than just a name; it is the entire value proposition. When a consumer buys a premium leather bag, they are purchasing the heritage, the craftsmanship, and the social status that the brand represents. The trademark is the legal container for this intangible value.
                                        </p>
                                        <p className="mb-6">
                                            For leather entrepreneurs, we recommend a "Source-Strong" naming strategy. Avoid generic terms like "Genuine Leather Bags" or "Soft Wallets." These are descriptive and cannot be trademarked. Instead, we help you develop fanciful, arbitrary, or suggestive marks that can be clearly distinguished in the market. A strong, non-descriptive name is far easier to register and exponentially simpler to defend against infringers who might try to ride on your brand's coattails.
                                        </p>
                                        <div className="bg-gray-900 text-white p-10 rounded-3xl my-10 shadow-xl overflow-hidden relative">
                                            <div className="relative z-10">
                                                <h3 className="text-2xl font-bold mb-4 text-[#6E5E93] uppercase tracking-tighter">The Craftsmanship Moat</h3>
                                                <p className="opacity-80 leading-relaxed font-light italic">
                                                    "A beautiful leather product can be copied in a week. A beautiful leather brand takes a decade to build, and only a registered trademark ensures that your investment in that time is legally yours."
                                                </p>
                                            </div>
                                            <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                                                <FontAwesomeIcon icon={faGem} className="w-64 h-64" />
                                            </div>
                                        </div>
                                    </section>

                                    <section id="leather-vs-footwear" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 18 vs Class 25: Avoiding the Footwear Classification Trap
                                        </h2>
                                        <p className="mb-6">
                                            A common misconception among leather goods manufacturers is that all leather products fall under Class 18. This is a dangerous assumption that can lead to major legal gaps. While handbags, wallets, and luggage are in Class 18, leather **footwear, clothing, and headgear** are strictly in Class 25. If you sell leather bags and leather boots under the same brand, you MUST register in both Class 18 and Class 25 to be fully protected.
                                        </p>
                                        <p className="mb-6">
                                            Similarly, leather watch straps belong to Class 14, and leather furniture belongs to Class 20. This multi-class landscape is where most brands fail to build a complete "IP Shield." We specialize in "Cross-Class Strategic Filing," ensuring that your brand is protected in every category where you currently operate or plan to expand. This prevents a competitor from launching shoes under your bag brand's name, which would confuse your customers and dilute your market authority.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, if you produce leather care products like creams or polishes, these fall under Class 3. Comprehensive protection means looking at the customer's journey. If they buy your bag, might they also buy your branded polish or shoes? If the answer is yes, then your trademark strategy must encompass those classes. We build a roadmap for your brand's growth, ensuring that as your product line evolves, your legal protection stays one step ahead.
                                        </p>
                                    </section>

                                    <section id="registration-steps" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight leading-[1.1]">
                                            Professional Roadmap to Class 18 Authority
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-purple-100">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 1: Comprehensive Search & Risk Audit</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We execute a deep-dive search of the IP India database, covering phonetically similar marks and potential cross-class conflicts (Class 25 and 14). This data-driven approach minimizes the risk of registry objections and ensures your brand is built on a clear legal foundation.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-purple-100">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 2: Filing & Initial Rights (Form TM-A)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Our attorneys draft your application to maximize protection. For leather brands, the wording of the "Goods and Services" description is critical to clearing examination. Within 24 hours of filing, you receive your application number and the right to use the ™ symbol officially.
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
                                                        We manage all registry interactions. If they raise an objection, we file a professional legal response based on established industrial precedents. Once the journal publication period ends without opposition, your ® certificate is issued, securing your brand for 10 years.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-check" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Document Mastery: Preparing Your Legal Dossier
                                        </h2>
                                        <p className="mb-8">
                                            Efficiency in filing is determined by the readiness of your documents. Having these items organized allows our team to protect your brand in record time.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-purple-50 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    For Individual Designers & SMEs
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Aadhaar or Passport for identity verification.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>PAN Card details for official registry records.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Udyam/MSME Registration (Crucial for 50% fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>High-resolution logo or name graphic in JPEG/PNG format.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-50 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    For Corporations & Leather Units
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>GST Registration Certificate for proof of business.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>Power of Attorney (Form TM-48) authorizing us to act.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>User Affidavit (If you have used the mark before filing).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="enforcement-raids" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stopping the Shadow Markets: Anti-Counterfeiting in Leather
                                        </h2>
                                        <p className="mb-6">
                                            The leather accessories market, especially for handbags and wallets, faces a massive threat from counterfeiters. High-demand designs from premium brands are often replicated using inferior materials and sold under the same brand name in unregulated markets. These fake products don't just steal your revenue; they destroy your brand's reputation. When a "branded" leather bag falls apart in a month, the consumer blames your brand, not the counterfeiter they unknowingly bought from.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark is your legal heavy artillery. It allows you to initiate **Criminal Action** against counterfeiters. Under the Trademarks Act, with a registered mark, the police have the power to raid premises, seize infringing goods, and arrest perpetrators without a warrant. This immediate and forceful action is the only effective way to dismantle illegal manufacturing units and protect your brand across the country.
                                        </p>
                                        <p className="mb-6">
                                            We also handle **Customs IPR Protection**. If you export or import premium leather gear, registering your mark with the Central Board of Indirect Taxes and Customs (CBIC) is vital. It enables port officials to stop, inspect, and seize any shipments carrying counterfeit versions of your brand. This creates a powerful border defense, ensuring that only genuine, high-quality products ever reach your customers and distributors.
                                        </p>
                                    </section>

                                    <section id="msme-schemes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Financial Incentives: The MSME Advantage for Leather Craftsmen
                                        </h2>
                                        <p className="mb-6">
                                            The Indian government recognized the leather industry as a key growth sector and has implemented significant incentives for Micro, Small, and Medium Enterprises (MSMEs). For any leather unit or designer with a valid **Udyam Registration**, the government offers a massive **50 percent rebate** on the official filing fees. This reduces your core cost from 9000 to only 4500 per class, making world-class protection accessible to even the smallest startup.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we view this as a cornerstone of our service. We don't just file your trademark; we guide you on how to optimize your business registration to take full advantage of these government grants. This ensures that you can allocate more of your capital toward inventory, marketing, and design innovation while maintaining a legally bulletproof intellectual property portfolio. It is essentially the government co-funding your brand's legal security.
                                        </p>
                                        <p className="mb-6">
                                            Moreover, under various state-level MSME policies and the "Make in India" initiative, you may be eligible for additional reimbursements for the cost of professional trademark services. We keep our clients updated on these dynamic policies, ensuring that the total cost of securing your brand name is minimized. In the long run, the small investment in a trademark today prevents tens of lakhs in lost revenue and legal costs tomorrow.
                                        </p>
                                    </section>

                                    <section id="global-export" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Ambitions: Madrid Protocol for Leather Exporters
                                        </h2>
                                        <p className="mb-6">
                                            Indian leather goods are a global phenomenon. From Europe to the USA, our products are highly valued for their quality and design. If you are exporting, protecting your brand only in India is a major strategic oversight. A local distributor or a competitor in your export market could register "your" brand name and legally stop you from selling your own products in that country. This is a common and devastating form of commercial sabotage.
                                        </p>
                                        <p className="mb-6">
                                            The **Madrid Protocol** offers a streamlined "One Window" solution. Through your initial Indian application, you can seek protection in over 125 countries simultaneously. This is significantly more cost-effective and legally unified than filing separate applications in every country. A global trademark portfolio is a massive asset when negotiating with international retailers, as it proves that you are a serious, legally-compliant global brand owner.
                                        </p>
                                        <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                            <div className="relative z-10">
                                                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">Your Leather Craft, <br className="hidden md:block" /> LEGALLY PROTECTED</h2>
                                                <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                    Don't build your premium brand on borrowed ground. Secure your Class 18 assets today and turn your craftsmanship into a permanent legal monopoly.
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                    <Link href="/contact-us">
                                                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                            Start My Registration
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
                                            The Rise of Vegan Leather Branding: Protection for Material Innovation
                                        </h2>
                                        <p className="mb-6">
                                            The leather industry is undergoing a sustainability revolution. Manufacturers are increasingly using materials like pineapple, mushroom, and recycled plastic to create "vegan leather" products. For trademarks, this is a critical moment. While the materials are modern, the products (handbags, wallets) are still in Class 18. Secure branding for these innovative materials is essential because the "eco" market relies heavily on trust and verified origin.
                                        </p>
                                        <p className="mb-6">
                                            Trademarking a unique brand name for your sustainable leather line allows you to own that specific market niche. It prevents competitors from using similar "eco-sounding" names that could confuse your environmentally conscious customers. We help sustainable leather startups build strong, defensible brands that communicate both luxury and ethics, ensuring that their material innovation is protected by the full force of the Trademarks Act.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, as these synthetic materials evolve, the distinction between them and genuine leather becomes a key branding tool. A registered trademark allows you to legally defend the name you use for your specific material, whether it is "Pinatex" style or a proprietary recycled blend. This legal ownership is what allows you to scale your production and possibly license your material technology to other brands in the future, creating multiple revenue streams.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Institutional Credibility: Trademarks in Retail and Logistics
                                        </h2>
                                        <p className="mb-6">
                                            For leather goods brands, entering major retail malls or e-commerce platforms like Amazon, Flipkart, or Myntra requires legal documentation. Among these, the Trademark Registration Certificate is the most vital. These platforms have strict "Brand Registry" programs that give registered owners the power to take down infringing listings instantly. Without a registration, you are just another "unbranded" seller, vulnerable to every price-war and copycat on the platform.
                                        </p>
                                        <p className="mb-6">
                                            A trademark acts as your "passport" to professional retail. It proves to mall owners and e-commerce giants that you are a legitimate business with a protected identity. This institutional trust is what allows you to secure better placement, more marketing support, and higher customer conversion rates. By investing in a Class 18 trademark early, you are laying the groundwork for a professional, scalable retail presence that can thrive in a highly competitive digital economy.
                                        </p>
                                        <p className="mb-6">
                                            In the logistics and distribution sector, a registered trademark is equally important. Distributors are far more willing to invest in marketing a brand that they know is legally secure. They need the assurance that their investment in stocking and promoting your bags or wallets won't be wiped out by a trademark dispute six months down the line. Your trademark is effectively the legal insurance policy for your distribution network.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Case Studies: Lessons from the Indian Leather Industry
                                        </h2>
                                        <p className="mb-6">
                                            The Indian courts have dealt with numerous trademark disputes in the leather and travel goods sector. One of the most common issues is the use of "Similar Color Schemes" or "Trade Dress" where one brand mimics the visual identity of a established leader. Courts have consistently ruled that if the overall impression of a bag or suitcase is deceptively similar to a registered brand, it constitutes infringement even if the name is slightly different.
                                        </p>
                                        <p className="mb-6">
                                            Understanding these cases allows us to build "Infringement-Proof" brands. We don't just focus on the name; we advise on the overall visual identity. This proactive legal approach ensures that you avoid the mistakes that have cost other brands lakhs in litigation fees. By learning from the legal history of Class 18 in India, you can build a brand that is not just aesthetically pleasing but is also a legal fortress.
                                        </p>
                                        <p className="mb-6">
                                            Another significant area of litigation is the "Prior User" claim. In the leather industry, many traditional family businesses have used names for decades without registration. However, a new, registered brand can still cause significant problems. We help long-standing businesses secure their "User Date" through detailed evidentiary filings, turning their historical use into a powerful legal shield that can defeat even newer registrations. This ensures your legacy is protected for the next generation.
                                        </p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12 text-gray-700">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Frequently Asked Questions: Class 18 Mastery
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
                                            Voices of Trust: Industrial Client Testimonials
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

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Conclusion: The Long-Term Value of Leather IP
                                        </h2>
                                        <p className="mb-6">
                                            Investing in a Class 18 trademark is a commitment to the permanence of your craftsmanship. It is a one-time process that provides commercial and legal security for decades. As the leather industry moves toward greater transparency and brand-driven value, owning your identity is no longer optional-it is the foundation of survival. Your trademark is the shield that allows your brand to grow from a small local unit to a global household name.
                                        </p>
                                        <p className="mb-10 text-gray-500 italic">
                                            IPR Karo is the premier digital partner for India's intellectual property needs. With a dedicated team of legal experts and technologists, we have powered the protection of over 50,000 brands. Our Class 18 division is specifically tuned to the nuances of the leather and travel gear sector, providing an elite, end-to-end path to brand ownership.
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
                                    Don't start your leather brand on uncertain ground. Receive a **Free Class 18 Search Report** in 24 hours.
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
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Sectors</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-clothing-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Clothing (Class 25)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-jewellery-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Jewellery (Class 14)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-cosmetics-cleaning" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Leather Care (Class 3)</span>
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
