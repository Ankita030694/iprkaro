import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
    faSmoking,
    faBox,
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faIndustry,
    faUserShield,
    faExclamationTriangle,
    faFire,
    faFilter
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'TM for Tobacco & Smoking Products (Class 34) Guide',
    description: 'Protect your tobacco brand with India\'s top IP law firm. Expert guide to Trademark Class 34 for cigarettes, cigars, chewing tobacco, and smoking accessories.',
    keywords: [
        'trademark for tobacco',
        'cigarette brand registration india',
        'class 34 trademark smoking',
        'chewing tobacco brand protection',
        'cigar trademark search india',
        'tobacco pipe brand registration',
        'cotpa 2003 compliance',
        'surrogate advertising laws tobacco',
        'electronic cigarette trademark',
        'matches brand registration'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Tobacco Brands in India',
        description: 'Secure your cigarettes, cigars, and tobacco products under Class 34. Professional legal assistance for the complex regulatory landscape of India.',
        url: 'https://www.iprkaro.com/trademark-for-tobacco',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-tobacco',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The High Stakes of Tobacco Branding' },
    { id: 'class-34-scope', title: 'Understanding Trademark Class 34' },
    { id: 'tobacco-products', title: 'Cigarettes, Cigars, and Chewing Tobacco' },
    { id: 'smoking-accessories', title: 'Smoking Accessories & Matches' },
    { id: 'what-is-excluded', title: 'Important Exclusions from Class 34' },
    { id: 'registration-process', title: 'Step-by-Step Registration Guide' },
    { id: 'cotpa-compliance', title: 'COTPA 2003: The Legal Backbone' },
    { id: 'advertising-bans', title: 'Surrogate Advertising & Restrictions' },
    { id: 'search-importance', title: 'Strategic Trademark Search' },
    { id: 'documents-checklist', title: 'Required Documents Checklist' },
    { id: 'objections-handling', title: 'Handling Section 9 & 11' },
    { id: 'global-protection', title: 'Madrid Protocol for Global Exports' },
    { id: 'counterfeit-protection', title: 'Defending Against Counterfeits' },
    { id: 'licensing-scaling', title: 'Licensing & Franchise Models' },
    { id: 'valuation-asset', title: 'Tobacco Brand Valuation' },
    { id: 'pricing-fees', title: 'Pricing and Registration Fees' },
    { id: 'faqs', title: 'Tobacco Trademark FAQs' },
];

const faqs = [
    {
        question: "Does Class 34 cover electronic cigarettes (vapes) in India?",
        answer: "While Class 34 technically covers oral vaporizers, the manufacture and sale of e-cigarettes are prohibited in India. Trademark registration may still be possible for export or defensive purposes, but operational legality is a separate concern."
    },
    {
        question: "Can I use the same brand name for a mouth freshener and tobacco?",
        answer: "This is often viewed as surrogate advertising, which is strictly prohibited under COTPA. Using a tobacco brand name for a non-tobacco product to indirectly promote tobacco can lead to severe penalties."
    },
    {
        question: "What is the role of graphic health warnings on trademarked labels?",
        answer: "COTPA-mandated graphic health warnings must occupy 85% of the principal display area of the pack. Your trademarked logo and brand elements must be positioned within the remaining 15%."
    },
    {
        question: "Is raw tobacco covered under Class 34?",
        answer: "Yes, Class 34 covers both raw tobacco and manufactured tobacco products like cigarettes, cigars, and snuff."
    },
    {
        question: "Can I register a trademark for matches separately?",
        answer: "Yes, matches are explicitly included in Class 34. You can register a brand name specifically for safety matchboxes."
    },
    {
        question: "How long does tobacco trademark registration take?",
        answer: "Typically, the process takes 8 to 12 months if there are no objections or oppositions. Once registered, it provides ten years of protection."
    },
    {
        question: "What if someone else uses my brand for herbal cigarettes?",
        answer: "If your brand is registered in Class 34, you have a strong legal ground to stop others from using it for similar smoking products, even if they are tobacco-free alternatives."
    },
    {
        question: "Can I trademark a unique cigarette packet design?",
        answer: "Yes, unique color combinations and packet designs (trade dress) can be protected as trademarks, provided they are distinctive and not just functional."
    },
    {
        question: "What are the penalties for violating tobacco advertising bans?",
        answer: "Violations can lead to imprisonment for up to two years and fines. For subsequent offenses, the penalties increase. Forfeiture of the advertising material is also common."
    },
    {
        question: "Does trademark registration allow me to advertise my brand?",
        answer: "No, trademark registration provides brand ownership but does not override COTPA's comprehensive ban on tobacco advertising in public places and media."
    },
    {
        question: "Can a foreign tobacco company apply for trademark in India?",
        answer: "Yes, foreign entities can file via the Madrid Protocol or directly with the Indian Trademark Registry, provided they satisfy the distinctiveness criteria."
    },
    {
        question: "What is Section 11 objection in tobacco trademarks?",
        answer: "An objection under Section 11 occurs when your proposed mark is too similar to an existing registered or pending trademark in the same class (Class 34)."
    },
    {
        question: "Can I claim Prior Use for my tobacco brand?",
        answer: "Yes, if you have been selling tobacco under that brand for years, you can file a User Affidavit with evidence (invoices, ads prior to ban) to claim ownership from an earlier date."
    },
    {
        question: "Do smoking pipes need a separate class?",
        answer: "No, smoking pipes, ashtrays, and other smokers' articles are all conveniently grouped under Class 34."
    },
    {
        question: "Is it possible to trademark the name 'Organic Tobacco'?",
        answer: "Purely descriptive names are generally rejected because they describe the nature of the product rather than identifying a specific brand source."
    }
];

const reviews = [
    {
        name: "Vikram S.",
        role: "Director, Heritage Tobacco Co.",
        text: "IPR Karo's deep understanding of COTPA and Class 34 saved our brand from multiple legal hurdles. Their search report was incredibly thorough.",
        rating: 5,
        icon: faSmoking
    },
    {
        name: "Sneha M.",
        role: "Founder, Puro Smokes",
        text: "Navigating the tobacco industry in India is tough, but the trademark part was seamless with their help. They handled our multi-city filing perfectly.",
        rating: 5,
        icon: faFire
    },
    {
        name: "Rajesh K.",
        role: "MD, Golden Leaf Exports",
        text: "We needed bitrthday-fast protection for our export cigarette brand. They managed our Madrid Protocol filing with extreme competence.",
        rating: 5,
        icon: faBox
    }
];

export default function TrademarkForTobaccoPage() {
    const breadcrumbItems = [
        { label: "Trademark for Tobacco", href: "/trademark-for-tobacco" },
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
        "headline": "Definitive Guide to Trademark Registration for Tobacco (Class 34) in India",
        "description": "Exhaustive legal guide on securing tobacco brands, cigarettes, and smoking accessories. Expert analysis of COTPA, Class 34, and advertising restrictions.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.iprkaro.com/logo.png"
            }
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
                "name": "Trademark for Tobacco",
                "item": "https://www.iprkaro.com/trademark-for-tobacco"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Class 34 Trademark Services for Tobacco Brands",
        "image": "https://www.iprkaro.com/logo.png",
        "description": "Professional legal consulting for registering cigarette brand names, logos, and tobacco packaging in India.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "url": "https://www.iprkaro.com/trademark-for-tobacco",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "1520"
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "publisher": {
                "@type": "Organization",
                "name": "IPR Karo"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": review.text
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
                            Safeguarding Legacy: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Superior Trademark Protection for Tobacco Brands
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-400 font-medium leading-relaxed px-2 text-center">
                            In the highly restricted tobacco industry, your trademark is your most resilient asset. Navigate India's stringent Class 34, COTPA, and advertising laws with elite legal expertise. Secure your identity in a market where visibility is legally bound.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Industry Assets
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Breadcrumb Row */}
                <div className="bg-gray-50 border-b border-gray-200 py-4 shadow-sm">
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
                            {/* TOC (Mobile) */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Value of Intellectual Property in Tobacco Commerce
                                        </h2>
                                        <p className="mb-6">
                                            In India, the tobacco industry is a paradox; it is a massive revenue generator for the exchequer while being simultaneously governed by some of the most restrictive consumer laws globally. From traditional bidi manufacturing to the sophisticated world of luxury cigars and premium cigarettes, the brand name is the pivot on which consumer trust and market share rotate. When you cannot run commercials, sponsor high-profile events, or use traditional billboards, your registered trademark becomes the sole vector of your brand identity.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Tobacco</strong> under Class 34 is not merely a legal formality; it is a defensive fortress. The Cigarettes and Other Tobacco Products Act (COTPA) 2003 has essentially eliminated standard marketing channels. Consequently, businesses must rely on the "Silent Ambassador" of the brand name and the unique trade dress of their packaging. Without a registered trademark, any competitor can use a similar color scheme or a phonetic sound-alike name, effectively siphoning off your hard-earned goodwill.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "In a sector where advertising is silenced by law, your trademark speaks the loudest. It is the only legal claim you have to your market presence."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we understand that tobacco IP management involves an intricate dance between the Trade Marks Act 1999 and the public health mandates of COTPA. Protecting a tobacco brand requires more than just filing an application; it involves crafting a strategy that respects the 85% health warning rule while ensuring that your brand's 15% visibility is iconic and legally impregnable. Whether you are a legacy chewing tobacco brand or a startup matchbox manufacturer, we provide the legal architecture required to thrive in this high-complexity environment.
                                        </p>
                                        <p className="mb-6">
                                            The menance of counterfeit tobacco is another critical reason for registration. Fake cigarettes and low-quality bidis sold under your name not only result in financial loss but also disproportionately damage your brand's reputation and can lead to severe regulatory scrutiny. A registered trademark empowers you to work with law enforcement to conduct raids and secure injunctions against these illegal entities.
                                        </p>
                                    </section>

                                    <section id="class-34-scope" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight font-sans">
                                            Understanding Trademark Class 34: The Tobacco Universe
                                        </h2>
                                        <p className="mb-6 text-gray-600 font-medium italic">
                                            Class 34 of the Nice Classification system is the specific category dedicated to tobacco, smokers' articles, and matches.
                                        </p>
                                        <p className="mb-6">
                                            Every product related to tobacco commerce must be categorized correctly during the filing process. Class 34 is surprisingly broad, encompassing everything from the raw leaf to the finished cigarette and even the accessories used to consume them. At IPR Karo, we ensure your application coverage is comprehensive, preventing gaps that competitors could exploit. For instance, registering for "Cigarettes" alone might leave your brand name vulnerable if someone else starts selling branded "Ashtrays" or "Lighters" under the same name.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the classification extends to "Tobacco Substitutes" (not for medicinal use). This is vital for modern brands looking into herbal alternatives or nicotine-free smoking mixes. Our expert attorneys ensure that your "Goods Description" in Form TM-A is drafted with future diversification in mind.
                                        </p>
                                    </section>

                                    <section id="tobacco-products" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Core Tobacco Goods in Class 34
                                        </h2>
                                        <p className="mb-8">
                                            Class 34 provides the primary protection for all forms of tobacco consumption in the Indian market.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faSmoking} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Cigarettes & Cigars</h3>
                                                <p className="text-sm leading-relaxed">Includes standardized cigarettes, cigarillos, and premium cigars. This is the most contested area of Class 34 registration.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBox} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Chewing Tobacco & Snuff</h3>
                                                <p className="text-sm leading-relaxed">Covers Khaini, Gutkha (subject to state bans), snuff, and traditional chewing tobacco preparations widespread in the Indian subcontinent.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faFilter} className="text-xl" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Raw & Smoking Tobacco</h3>
                                                <p className="text-sm leading-relaxed">Includes unmanufactured tobacco, pipe tobacco, and rolling tobacco used by smokers who prefer custom blends.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faGavel} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">ENDS & Vapes</h3>
                                                <p className="text-sm leading-relaxed">Covers electronic cigarettes and oral vaporizers. Note: Trade in these is restricted in India, but IP protection remains a strategic asset.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="smoking-accessories" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Smoking Accessories & Matches: Complete Brand Coverage
                                        </h2>
                                        <p className="mb-6">
                                            A common mistake is overlooking the accessories. Class 34 is the specific home for smokers' articles. If you wish to brand lighters, ashtrays, or even the rolling paper, you must have a valid registration here.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10">
                                            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">Included Accessories</h4>
                                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium text-gray-600">
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Matches & Matchboxes</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Lighters for Smokers</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Cigarette Cases</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Smoking Pipes</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Ashtrays</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Humidors</li>
                                            </ul>
                                        </div>
                                        <p className="mb-6">
                                            Matches, in particular, are a high-volume market in India. Many FMCG giants operate in the matches segment under Class 34. We provide specialized trademark clearance services for matchbox labels, ensuring that the intricate artwork and brand names do not infringe on existing copyrights or trademarks in the industry.
                                        </p>
                                    </section>

                                    <section id="what-is-excluded" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            What Class 34 Excludes: Important Legal Boundaries
                                        </h2>
                                        <p className="mb-6">
                                            Incorrect classification is a leading cause of trademark rejection. Class 34 is not a "catch-all" for every nicotine or cigarette-related item.
                                        </p>
                                        <div className="bg-red-50 border border-red-100 p-8 rounded-2xl space-y-6 shadow-sm">
                                            <div className="flex items-start">
                                                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-lg" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Medicinal Nicotine (Class 5)</h4>
                                                    <p className="text-sm text-gray-600 font-medium">Nicotine gums, patches, and smoking cessation aids are medicinal products and belong in Class 5, not Class 34.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">30</div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Mouth Fresheners (Class 30)</h4>
                                                    <p className="text-sm text-gray-600 font-medium">Pan Masala and Mouth Fresheners (without tobacco) belong in Class 30. Using a Class 34 brand for these often triggers surrogate advertising alarms.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            The 5-Step Process for Tobacco Brand Shielding
                                        </h2>
                                        <div className="relative space-y-8">
                                            {/* Step 1 */}
                                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-3xl border-2 border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="bg-[rgb(110,94,147)] text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">01</div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-3 font-sans">Strategic Search & Analysis</h3>
                                                    <p className="text-base text-gray-600">We conduct an intensive search on the IP India portal. In Class 34, phonetic similarities (e.g., 'Gold' vs 'Golden') are common. We provide a 'Risk Rating' for your brand name, identifying any potential Section 11 conflicts that could block your path. This step is non-negotiable for high-investment tobacco launches.</p>
                                                </div>
                                            </div>
                                            {/* Step 2 */}
                                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-3xl border-2 border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="bg-[rgb(74,59,115)] text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">02</div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-3 font-sans">Precision Filing (TM-A)</h3>
                                                    <p className="text-base text-gray-600">Your application is filed electronically. For tobacco, the 'Description of Goods' must be carefully worded to include current products and logical extensions. We ensure all applicant details, whether Individual or Company, are perfectly aligned to avoid future procedural delays.</p>
                                                </div>
                                            </div>
                                            {/* Step 3 */}
                                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-3xl border-2 border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="bg-[rgb(74,59,115)] text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">03</div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-3 font-sans">Examination Response</h3>
                                                    <p className="text-base text-gray-600">The Registry examiner reviews the mark for distinctiveness (Section 9) and similarity (Section 11). If an Examination Report is issued, our legal team drafts a robust response, often utilizing case laws specific to the FMCG and tobacco sectors to secure an 'Accepted' status.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="cotpa-compliance" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            COTPA 2003: The Legal Backbone of Tobacco Control
                                        </h2>
                                        <p className="mb-6">
                                            The Cigarettes and Other Tobacco Products Act, 2003 (COTPA) is the primary legislation governing how tobacco products can be sold and presented in India. While the Trademark Act gives you ownership of a name, COTPA dictates how that name can exist in the real world.
                                        </p>
                                        <p className="mb-6">
                                            One of the most critical sections of COTPA is the mandate for <strong>Graphic Health Warnings</strong>. Currently, 85% of both sides of a tobacco packet must be covered by government-specified health warnings. This leaves only a tiny 15% window for your trademarked elements. This makes "Symbolic Branding" more important than ever. At IPR Karo, we help you develop trademarks that are recognizable even in the smallest of display areas, ensuring your 15% space works as hard as a traditional billboard.
                                        </p>
                                        <p className="mb-6">
                                            COTPA also restricts the use of words that suggest "Health Benefits" or "Safety" in tobacco branding. Using terms like 'Organic', 'Natural', or 'Light' can lead to your trademark being rejected or, worse, your product being seized for misleading consumers. We vet your brand names against COTPA's strictly interpreted guidelines to ensure long-term operational peace.
                                        </p>
                                    </section>

                                    <section id="advertising-bans" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Surrogate Advertising & Restrictions: A High-Wire Act
                                        </h2>
                                        <p className="mb-6 max-w-4xl mx-auto text-center opacity-80 font-medium italic">
                                            Section 5 of COTPA prohibits all forms of direct and indirect advertising of tobacco products. This has led to the controversial practice of 'Surrogate Advertising'.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Surrogate Advertising</strong> involves using a tobacco brand's name or logo on a non-tobacco product (like mouth fresheners, water, or music festivals) to indirectly promote tobacco. While common, this is increasingly scrutinized by the Central Consumer Protection Authority (CCPA) and the Ministry of Health.
                                        </p>
                                        <div className="bg-orange-50 p-10 rounded-[3rem] border border-orange-100 my-10 shadow-sm">
                                            <h4 className="flex items-center text-orange-800 font-bold mb-4 text-xl">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3" />
                                                The Surrogate Trap
                                            </h4>
                                            <p className="text-orange-900 leading-relaxed font-normal">
                                                If you use your cigarette brand for 'Mouth Fresheners', you must be able to prove that the mouth freshener is a legitimate product with its own manufacturing, sales figures, and distribution that isn't just a front for the cigarette brand. Failure to prove this can lead to massive fines and a ban on the advertisement. We advise on IP isolation strategies that help brands navigate these treacherous waters.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="search-importance" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight font-sans">
                                            Strategic Trademark Search: The Foundation of Security
                                        </h2>
                                        <p className="mb-6">
                                            The Class 34 registry is highly congested. Many brands have existed for over a century. A simple search for exact names is inadequate. We perform a 'Phonetic and Visual Search'. In the tobacco market, consumers often ask for brands by sound. If your brand 'Mighty' sounds too similar to a registered brand 'Mattee', you will likely face an objection under Section 11.
                                        </p>
                                        <p className="mb-6">
                                            Our search reports also include 'Cross-Class Analysis'. We check Class 30 (pan masala) and Class 32 (beverages) to ensure that your tobacco brand doesn't conflict with a major player in a related industry, which could lead to high-stakes 'Passing Off' litigation.
                                        </p>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Checklist for Filing a Tobacco Trademark
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all">
                                                <h3 className="font-bold text-xl text-[rgb(110,94,147)] mb-6">For Individuals/Partnerships</h3>
                                                <ul className="space-y-4 text-sm text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Identity and Address Proof (Aadhaar/PAN).</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> MSME Registration Certificate (for 50% fee discount).</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> High-Resolution Logo (if applicable).</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> User Affidavit for prior use claims.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all">
                                                <h3 className="font-bold text-xl text-gray-500 mb-6">For Companies (Pvt Ltd/LLP)</h3>
                                                <ul className="space-y-4 text-sm text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Certificate of Incorporation.</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Registered Office Address Proof.</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Signed Form 48 (Power of Attorney).</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Board Resolution favoring the signatory.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="objections-handling" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Handling Registry Objections: Section 9 and 11 Mastery
                                        </h2>
                                        <p className="mb-6">
                                            <strong>Section 9 (Absolute Grounds)</strong> objections often target tobacco brands for being descriptive. If you try to register "Cool Mint Tobacco," the registry might say it describes the flavor. We counter this by emphasizing the 'Stylized Logo' or proving the name has acquired 'Secondary Meaning' through long-term market presence.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 (Relative Grounds)</strong> objections occur when your mark is 'Confusingly Similar' to another. In the crowded bidi and chewing tobacco markets, names often overlap. Our expert attorneys use linguistic evidence and market-differentiation arguments (e.g., regional vs. national presence) to overcome these hurdles and move your mark toward publication.
                                        </p>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            International Filing via Madrid Protocol: Exporting Excellence
                                        </h2>
                                        <p className="mb-6">
                                            India is a leading exporter of tobacco. If your brand is going to overseas markets like the UAE, UK, or Southeast Asia, you need protection in those jurisdictions. Waiting until your first container arrives locally is dangerous; 'Trademark Squatting' is common in foreign markets.
                                        </p>
                                        <p className="mb-6">
                                            The <strong>Madrid Protocol</strong> allows you to file for protection in over 120 countries through a single application filed in India. This saves thousands of dollars in foreign attorney fees. We manage your global tobacco IP portfolio, ensuring that as your exports grow, your brand remains untouchable in every port of call.
                                        </p>
                                        <div className="bg-[#0C002B] p-12 rounded-[3.5rem] text-white my-12 relative overflow-hidden shadow-2xl">
                                            <h3 className="text-3xl font-bold mb-6 text-indigo-400">Global Strategy Tip</h3>
                                            <p className="text-lg opacity-80 leading-relaxed font-light">
                                                Protect your brand in major transshipment hubs first. Preventing a competitor from registering your name in a port city can stop them from copying your products at the source.
                                            </p>
                                            <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 bg-[rgb(74,59,115)] rounded-full blur-[80px] opacity-20"></div>
                                        </div>
                                    </section>

                                    <section id="counterfeit-protection" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Anti-Counterfeiting: Protecting Revenue and Public Health
                                        </h2>
                                        <p className="mb-6">
                                            The illegal tobacco trade accounts for billions in lost revenue. More importantly, counterfeit tobacco often contains higher-than-permitted levels of toxins, posing an even greater health risk. A registered trademark is your primary legal tool to initiate criminal proceedings against counterfeiters.
                                        </p>
                                        <p className="mb-6">
                                            With an 'Active' trademark registration, you can record your brand with Indian Customs. This allows Customs officials to seize imported fake goods at the point of entry. Additionally, we help brands set up 'Vigilance Programs' where we work with local police to conduct raids on manufacturing hubs producing look-alike cigarette packs or bidi bundles.
                                        </p>
                                    </section>

                                    <section id="licensing-scaling" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Licensing & Branding Strategy: Building a Modern Powerhouse
                                        </h2>
                                        <p className="mb-6">
                                            Many tobacco brands operate on a licensing model where they outsource manufacturing to third-party units. This business model CRITICALLY relies on a registered trademark. A licensing agreement is only as strong as the underlying trademark registration.
                                        </p>
                                        <p className="mb-6">
                                            We assist in drafting <strong>Trademark Licensing Agreements</strong> that ensure third-party manufacturers do not misuse your brand name or compromise on the packaging quality required by COTPA. This allows you to scale your production across multiple states without losing control over your brand identity.
                                        </p>
                                    </section>

                                    <section id="valuation-asset" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Financial Asset Valuation: The Multi-Crore Brand Name
                                        </h2>
                                        <p className="mb-6">
                                            In the tobacco industry, physical assets (machinery/buildings) are secondary to the 'Brand Value'. Brands like Wills, Marlboro, or local heavyweights like Shikhar are valued in the thousands of crores. A trademark in Class 34 is an 'Intangible Capital Asset'.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark can be used to raise institutional capital, its value can be amortized for tax benefits, and it significantly boosts your company's valuation during a merger or acquisition. Protecting your brand today is not an expense; it is the most profitable investment a tobacco commerce venture can make.
                                        </p>
                                    </section>

                                    <section id="pricing-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Competitive Pricing for High-Value Assets
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8 my-12">
                                            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 text-center flex flex-col items-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md rotate-6">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Official Gov. Fee</h4>
                                                <p className="text-sm opacity-60 mb-8 font-medium">Standard Class 34 Registry Fee.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between p-4 bg-white rounded-2xl border border-gray-100">
                                                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">MSME/Individuals</span>
                                                        <span className="font-black text-xl">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between p-4 bg-white rounded-2xl border border-gray-100">
                                                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Large Companies</span>
                                                        <span className="font-black text-xl">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-10 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl text-center flex flex-col items-center relative overflow-hidden">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-2xl flex items-center justify-center mb-6 shadow-md -rotate-6">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">IPR Karo Prof. Fee</h4>
                                                <p className="text-sm opacity-70 mb-8 font-medium italic">Expert guidance for a highly regulated market.</p>
                                                <div className="flex items-center justify-center p-6 bg-white/10 rounded-2xl backdrop-blur-md w-full border border-white/10">
                                                    <span className="text-3xl font-black italic underline decoration-4 underline-offset-8">₹2,999</span>
                                                </div>
                                                <p className="mt-8 text-[10px] opacity-60 font-medium leading-relaxed italic">Includes complex Class 34 search, high-end precision filing, and 24/7 status escalation.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Voices of Trust in the Industry
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-50 shadow-sm hover:shadow-xl hover:border-[rgb(110,94,147)] transition-all flex flex-col">
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="flex text-yellow-500">
                                                            {[...Array(review.rating)].map((_, i) => (
                                                                <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                            ))}
                                                        </div>
                                                        <FontAwesomeIcon icon={review.icon} className="text-[rgb(110,94,147)] text-2xl opacity-10" />
                                                    </div>
                                                    <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center pt-6 border-t border-gray-50">
                                                        <div className="w-12 h-12 bg-[rgb(110,94,147)] rounded-2xl flex items-center justify-center text-white font-bold mr-4 rotate-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900">{review.name}</p>
                                                            <p className="text-[10px] text-[rgb(110,94,147)] font-black uppercase tracking-widest">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert Insights: Tobacco IP FAQ
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-gray-200 transition-all">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Armor Your Identity Today</h2>
                                            <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                                                In the high-stakes world of tobacco commerce, an unprotected brand is a target. Partner with India's most precise IP firm to secure your Class 34 legacy.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg uppercase tracking-widest">
                                                        Consult Tobacco IP Specialist
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-white/5 border border-white/20 hover:border-white text-white font-bold py-5 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group">
                                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3 rotate-12 group-hover:rotate-0 transition-transform" />
                                                        +91-9289707648
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                        <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-10"></div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2rem] shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Clear Your Brand Name Today</h3>
                                <p className="text-xs opacity-60 mb-8 leading-relaxed relative z-10 font-light italic">
                                    Avoid the trap of 'Deceptive Similarity' in Class 34. Get a legal search report in 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-[10px] uppercase tracking-widest">
                                        Check Brand Availability
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/5 relative z-10 text-center">
                                    <p className="text-[10px] opacity-40 uppercase tracking-widest mb-3 font-semibold">Specialist Hotline</p>
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-[2rem] shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-tighter text-sm">Our Expertise</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-alcoholic-drinks" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-[rgb(110,94,147)] rounded-full mr-4 group-hover:scale-150 transition-all"></div>
                                            <span className="font-bold text-base">Alcoholic Drinks</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-beverages" className="group flex items-center text-gray-600 hover:text-[rgb(74,59,115)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(74,59,115)] transition-all"></div>
                                            <span className="font-bold text-base">Beverages</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-raw-agricultural-products" className="group flex items-center text-gray-600 hover:text-[rgb(74,59,115)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(74,59,115)] transition-all"></div>
                                            <span className="font-bold text-base">Raw Agri Products</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-processed-food" className="group flex items-center text-gray-600 hover:text-[rgb(74,59,115)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(74,59,115)] transition-all"></div>
                                            <span className="font-bold text-base">Processed Food</span>
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
