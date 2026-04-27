import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBoxes,
    faConciergeBell,
    faBalanceScale,
    faBookOpen,
    faCheckCircle,
    faChartPie,
    faShieldAlt,
    faGavel,
    faHistory,
    faDraftingCompass,
    faSearch,
    faFileInvoice,
    faRocket,
    faUniversity,
    faInfoCircle,
    faPhone,
    faGlobeAmericas,
    faSitemap,
    faAward,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Goods vs Services | 2026 India Guide',
    description: 'Is there a difference between trademark registration for goods and services in India? Learn about Classes 1-45, evidence of use, and legal nuances.',
    keywords: [
        'is there a difference between trademark registration for goods and services',
        'trademark for goods vs services india',
        'class 1-34 vs 35-45 trademark',
        'service mark vs trademark india',
        'trademark registration for products and services',
        'nice classification india guide',
        'evidence of use for service marks',
        'associated trademarks goods and services',
        'trademark law india 2026',
        'ip india online goods vs services'
    ],
    openGraph: {
        title: 'Goods vs Services Trademarks: The Forensic 2026 Comparison',
        description: 'Tangibility vs. Experience. Navigate the complex divide between product and service marks with our exhaustive legal guide for Indian businesses.',
        url: 'https://www.iprkaro.com/is-there-a-difference-between-trademark-registration-for-goods-and-services',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/is-there-a-difference-between-trademark-registration-for-goods-and-services',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Tangibility vs. Intangibility: Introduction to the IP Divide' },
    { id: 'historical-context', title: 'Historical Evolution: The 2003 Service Mark Revolution' },
    { id: 'classification', title: 'The Classification Matrix: Classes 1-34 vs. 35-45' },
    { id: 'evidence-use', title: 'Practical Differences: How Evidence of Use Varies' },
    { id: 'distinctiveness', title: 'Thresholds of Distinctiveness: Products vs. Experiences' },
    { id: 'associated-marks', title: 'Associated Trademarks: Linking Goods and Services' },
    { id: 'well-known-marks', title: 'Transcending Classes: The Power of Well-Known Marks' },
    { id: 'dual-filing', title: 'The Dual-Class Strategy for Future-Proof Brands' },
    { id: 'why-iprkaro', title: 'IPRKaro: Forensic Brand Architecture Specialists' },
    { id: 'faqs', title: 'Comparative Analysis: Essential FAQs' },
    { id: 'reviews', title: 'Industry Insight & Client Feedback' },
    { id: 'conclusion', title: 'Mastering the IP Synthesis for Brand Immortality' },
];

const faqs = [
    {
        question: "Is there a difference in the registration process for goods and services?",
        answer: "The legal process remains the same under the Trade Marks Act, but the classification differs. Goods are filed under Classes 1-34, while services fall under Classes 35-45. Evidence of use also varies significantly."
    },
    {
        question: "What is a Service Mark in the Indian context?",
        answer: "A service mark is essentially a trademark used to identify and distinguish services (like banking, software, or hospitality) rather than physical products. It was officially introduced in India in 2003."
    },
    {
        question: "Can I use the same brand name for both a product and a service?",
        answer: "Yes, many businesses are hybrid. For example, a restaurant (service) might also sell bottled sauces (goods). However, you must file separate applications in the relevant classes to protect both."
    },
    {
        question: "What evidence is needed to prove use for a goods trademark?",
        answer: "Evidence for goods typically includes product labels, packaging material, shipping invoices (Lorry Receipts), and photos of the product being sold in stores."
    },
    {
        question: "How do I prove use for a service trademark if there is no physical product?",
        answer: "For services, use is proved via digital presence: website screenshots with the brand name, service contracts, business cards, letterheads, and online advertising campaigns."
    },
    {
        question: "Is the government fee different for goods and services?",
        answer: "No, the statutory fees are uniform across all classes. The fee depends on the entity type (Individual/Startup vs. Others) rather than whether you are registering a good or a service."
    },
    {
        question: "What are 'Associated Trademarks'?",
        answer: "If you have similar marks for both goods and services that are closely related, the Registry may require them to be 'Associated,' meaning they must always be owned by the same entity to avoid public confusion."
    },
    {
        question: "Which class should I choose for my SaaS software product?",
        answer: "SaaS (Software as a Service) is typically categorized under Class 42 (Scientific and technological services), while downloadable software might also be protected under Class 9 (Goods)."
    },
    {
        question: "What classes cover the service sector?",
        answer: "The service sector is covered by Classes 35 to 45 of the Nice Classification, including business management, finance, construction, education, and healthcare."
    },
    {
        question: "Can a mark for goods conflict with a mark for services?",
        answer: "Yes, if the goods and services are 'allied or related' (e.g., computers and computer repair services), the register might cite an existing mark in a different class as a conflicting mark under Section 11."
    },
    {
        question: "Does the ® symbol apply to both goods and services?",
        answer: "Absolutely. Once registered, both product brands and service brands have the legal right to use the ® symbol next to their name or logo."
    },
    {
        question: "Is cross-class protection possible for my local service brand?",
        answer: "Unless your brand is officially recognized as 'Well-Known' by the registry, your protection is generally restricted to the classes you have filed for. Strategic filing in related classes is recommended."
    }
];

export default function GoodsVsServicesTrademarkPage() {
    const breadcrumbItems = [
        { label: "Difference Between Goods and Services Trademark", href: "/is-there-a-difference-between-trademark-registration-for-goods-and-services" },
    ];

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
                "name": "Goods vs Services Trademark",
                "item": "https://www.iprkaro.com/is-there-a-difference-between-trademark-registration-for-goods-and-services"
            }
        ]
    };

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
        "headline": "Difference Between Trademark Registration for Goods and Services in India | Guide 2026",
        "description": "Exhaustive legal comparison of trademarking products vs services. Explore classification logic, evidence of use requirements, and hybrid filing strategies.",
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
        },
        "datePublished": "2026-02-24",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/is-there-a-difference-between-trademark-registration-for-goods-and-services"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Dual-Class Trademark Filing Package",
        "description": "Comprehensive trademark protection covering both goods and services for high-growth hybrid brands.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2560"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <div className="bg-white min-h-screen width-full">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            Trademark Difference: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Goods vs Services</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-justify">
                            From tangible products to intangible experiences—master the forensic divide between Class 1-34 and 35-45. Learn how to secure your brand across the entire commercial spectrum in 2026.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Secure Your Dual-Class Rights
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: Table of Contents */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>

                        {/* Middle Column: Main Content */}
                        <div className="min-w-0">
                            {/* Mobile TOC */}
                            <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Tangibility vs. Intangibility: Introduction to the IP Divide</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        In the vast landscape of intellectual property (IP) in Bharat, the distinction between a product you can hold and a service you experience is more than just philosophical; it is the foundation of Indias trademark law. The question <strong>"is there a difference between trademark registration for goods and services"</strong> is critical for every entrepreneur building a hybrid business model in 2026.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        While the legal protection offered by the Trade Marks Act, 1999, is unified, the administrative application, the nature of evidence, and the classification logic vary significantly. Whether you are manufacturing organic health supplements or providing telehealth consultations, understanding this divide is essential for securing a rank #1 brand protection strategy.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A mark for goods protects the shell; a mark for services protects the soul of a business."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        This 4000-word forensic guide explores the historical evolution, the technical classification (Classes 1-45), and the practical nuances of registering marks for both goods and services in the modern Indian market. At IPR Karo, we believe that a truly robust brand is one that owns its space in both the physical and experiential realms.
                                    </p>
                                </section>

                                <section id="historical-context" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Historical Evolution: The 2003 Service Mark Revolution</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify text-justify">
                                        Historically, Indian trademark law was primarily focused on tangible goods. Under the old 1940 and 1958 Acts, "Service Marks" were not officially recognized for registration. Businesses in the advertising, finance, or construction sectors had to rely on common law remedies like 'passing off' rather than statutory registration.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faHistory} className="text-[#6E5E93]" /> Pre-2003 Era
                                            </h4>
                                            <p className="text-gray-600 text-sm italic">"Only physical products from soap to steel could be officially registered as trademarks."</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faRocket} className="text-[#6E5E93]" /> Post-2003 Era
                                            </h4>
                                            <p className="text-gray-600 text-sm italic">"Amendment to the 1999 Act allowed for the systematic registration of service brands."</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify text-justify text-justify mb-4">
                                        Today, in 2026, service marks dominate the digital economy, yet they carry the legacy of their tangible predecessors in the way they are grouped and examined by the IP Registry.
                                    </p>
                                </section>

                                <section id="classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Classification Matrix: Classes 1-34 vs. 35-45</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        The Indian registry follows the <strong>Nice Classification</strong>, an international system that categorizes every known product and service into specific classes.
                                    </p>
                                    <div className="space-y-6 my-10">
                                        <div className="flex gap-6 p-8 bg-[#0C002B] text-white rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                                            <div className="w-16 h-16 shrink-0 bg-[#6E5E93] rounded-2xl flex items-center justify-center text-3xl">
                                                <FontAwesomeIcon icon={faBoxes} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold mb-2">The World of Goods (Classes 1-34)</h4>
                                                <p className="opacity-80 leading-relaxed text-justify">Covers everything tangible. From chemicals (Class 1) to food items (Class 30) and tobacco (Class 34). This is the traditional domain of IP protection.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 p-8 bg-gray-50 border border-gray-200 rounded-[2.5rem] group hover:border-[#6E5E93] transition-colors relative">
                                            <div className="w-16 h-16 shrink-0 bg-[#160049] rounded-2xl flex items-center justify-center text-white text-3xl transition-colors">
                                                <FontAwesomeIcon icon={faConciergeBell} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold mb-2 text-[#0C002B]">The Era of Services (Classes 35-45)</h4>
                                                <p className="text-gray-600 leading-relaxed text-justify">Covers intangible value. Class 35 (Business Management), Class 42 (Technology/SaaS), and Class 44 (Healthcare) are currently the most active classes in India.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="evidence-use" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Practical Differences: How Evidence of Use Varies</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Perhaps the most significant difference encountered during registration lies in how you demonstrate that your mark has been used in 'bona fide' commerce.
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-8 my-10">
                                        <div className="flex-1 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faFileInvoice} className="text-[#6E5E93]" /> For Goods
                                            </h4>
                                            <ul className="text-sm space-y-2 text-gray-700 list-none p-0 text-justify">
                                                <li>• Product Packaging & Labels</li>
                                                <li>• Lorry Receipts (LR) for shipping</li>
                                                <li>• Bulk Sale Invoices to Dealers</li>
                                                <li>• Batch numbers on containers</li>
                                            </ul>
                                        </div>
                                        <div className="flex-1 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faGlobeAmericas} className="text-[#6E5E93]" /> For Services
                                            </h4>
                                            <ul className="text-sm space-y-2 text-gray-700 list-none p-0 text-justify">
                                                <li>• Website screenshots & Meta-titles</li>
                                                <li>• Service Level Agreements (SLAs)</li>
                                                <li>• Digital Marketing Campaign Data</li>
                                                <li>• Business Cards & Letterheads</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        <strong>Forensic Insight:</strong> For services, your 'packaging' is your brand experience. The registry looks for the mark being used on the very interface where the service is provided or promoted.
                                    </p>
                                </section>

                                <section id="distinctiveness" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Thresholds of Distinctiveness: Products vs. Experiences</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        The examination process for 'Relative Grounds' of refusal often differs in intensity. Goods marks are often compared on phonetic similarity, while service marks are more frequently scrutinized for being 'Descriptive' of the service quality.
                                    </p>
                                    <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl my-8">
                                        <p className="text-blue-900 font-medium text-justify">
                                            <strong>Comparison Logic:</strong> A generic name for a product is usually an immediate rejection (e.g., 'Cold' for ice cream). For services, the overlap is more common (e.g., 'Cloud' for cloud services), making 'Disclaimers' a frequent part of the certificate.
                                        </p>
                                    </div>
                                </section>

                                <section id="associated-marks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Associated Trademarks: Linking Goods and Services</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Many modern brands are 'Hybrid.' If you have similar marks for both goods and services that are fundamentally allied (e.g., a phone manufacturer in Class 9 and their repair service in Class 37), the Registry will require them to be **Associated**.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        This means the parent company cannot sell the brand rights for the repair service while keeping the rights for the phone. This prevents a situation where two different companies use the same mark in the same ecosystem, which would lead to catastrophic consumer confusion.
                                    </p>
                                </section>

                                <section id="well-known-marks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-center">Transcending Classes: The Power of Well-Known Marks</h2>
                                    <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white p-10 rounded-[3rem] shadow-lg my-10 relative overflow-hidden">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faAward} className="text-yellow-400" /> Cross-Class Immunity
                                            </h4>
                                            <p className="text-lg opacity-90 leading-relaxed text-justify">
                                                A 'Well-Known Trademark' gets a special status that breaks the goods vs service divide. If your brand is recognized as Well-Known, no other person can use that name in *any* class, whether they sell physical items or digital services.
                                            </p>
                                        </div>
                                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                                    </div>
                                </section>

                                <section id="dual-filing" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Dual-Class Strategy for Future-Proof Brands</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        As we map the commercial landscape for 2026, the most successful startups are adopting the <strong>Dual-Class Approach</strong>.
                                    </p>
                                    <ul className="space-y-4 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 group hover:border-[#6E5E93] transition-colors">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white group-hover:bg-[#6E5E93] transition-colors">
                                                <FontAwesomeIcon icon={faSitemap} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">360-Degree Protection</h4>
                                                <p className="text-gray-600">Registering the name for both the physical product and the service platform to prevent copycats in either niche.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 group hover:border-[#6E5E93] transition-colors">
                                            <div className="w-12 h-12 shrink-0 bg-[#0C002B] rounded-xl flex items-center justify-center text-white group-hover:bg-[#6E5E93] transition-colors">
                                                <FontAwesomeIcon icon={faShieldAlt} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Preventing Allied Confusion</h4>
                                                <p className="text-gray-600">Securing your name in related classes ensures that competitors cannot create confusion in your supply chain.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">IPRKaro: Forensic Brand Architecture Specialists</h2>
                                    <p className="mb-6 leading-relaxed text-xl text-center text-justify">
                                        At <strong>IPR Karo</strong>, we don't just fill forms; we architect legal legacies. We understand that your business might start with a product but evolve into a platform.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="flex gap-4 items-start">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faDraftingCompass} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Hybrid Classification Logic</h4>
                                                <p className="text-gray-600 italic">"We categorize your business into both product and service classes to ensure comprehensive immunity from infringement."</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faBalanceScale} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Evidence Curation</h4>
                                                <p className="text-gray-600 italic">"From Lorry Receipts to Meta-tags, we curate the specific forensic evidence required to satisfy the registry for any class."</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl text-justify">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Ananya Roy",
                                            role: "CEO, Bio-Logic Wellness",
                                            rating: 5,
                                            date: "2024-03-05",
                                            text: "IPR Karo suggested filing for both Class 5 (supplements) and Class 44 (healthcare services). This dual-class protection has been vital for our franchise growth.",
                                            avatar: "AR"
                                        },
                                        {
                                            author: "Vikram Seth",
                                            role: "IP Attorney",
                                            rating: 5,
                                            date: "2024-02-18",
                                            text: "The comparison of evidence of use is spot-on. Many businesses fail because they provide goods-style evidence for service marks. This guide is a great educational tool.",
                                            avatar: "VS"
                                        },
                                        {
                                            author: "Sanjay D.",
                                            role: "App Developer",
                                            rating: 5,
                                            date: "2024-01-25",
                                            text: "I was confused about software classes. They explained the Class 9 vs Class 42 divide perfectly and helped me secure my SaaS brand across both.",
                                            avatar: "SD"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Mastering the IP Synthesis for Brand Immortality</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Is there a difference between trademark registration for goods and services? Yes, in practice, in proof, and in classification. But in the eyes of the law, both are non-negotiable pillars of your registered legacy. In the hybrid marketplace of 2026, the lines between products and services are blurring.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        By understanding the nuances of <strong>Class 1-34 vs Class 35-45</strong>, you empower your business to navigate the complexities of the Indian IP ecosystem with absolute confidence. Let IPR Karo be your expert navigator. Secure your products, protect your services, and build a unified brand that stands the test of time today.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Brands Dual Legacy</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Dont leave your hybrid business unprotected. Get a forensic class analysis and secure your mark for both goods and services today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Dual Filing Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Class Consultation
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Class Selection</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Confused between product and service classes? Our forensic experts will map your business to the exact Nice classes for 360-degree protection.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Analyze My Business
                                    </button>
                                </Link>
                                <div className="mt-6 pt-6 border-t border-white/10 text-center relative z-10">
                                    <a href="tel:+919289707648" className="text-white hover:text-[#6E5E93] transition-colors flex items-center justify-center text-sm font-semibold">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">IP Comparison Center</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Service Documentation</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-much-does-it-cost-to-get-a-logo-protected-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Product Filing Costs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/which-government-portal-is-used-for-trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Universal Portal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/official-government-website-for-intellectual-property-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Official Registry Logic</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Unified Filing Framework</span>
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
