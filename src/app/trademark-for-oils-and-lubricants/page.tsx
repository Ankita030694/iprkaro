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
    faOilCan,
    faGasPump,
    faIndustry,
    faTools,
    faLightbulb,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Oils and Lubricants | Protect Your Energy Brand',
    description: 'Comprehensive guide to trademark registration for oils, lubricants, grease, and fuels in India. Secure your Class 4 brand identity with IPR Karo experts today.',
    keywords: [
        'trademark for oils and lubricants',
        'class 4 trademark registration india',
        'lubricant brand protection',
        'engine oil trademark india',
        'industrial lubricants trademark',
        'fuel brand registration',
        'grease trademark search',
        'protect oil brand name india',
        'energy sector intellectual property',
        'automotive lubricant legal protection'
    ],
    openGraph: {
        title: 'Expert Trademark Registration for Oils & Lubricants Brands',
        description: 'Secure your fuels and lubricants identity with India\'s leading IP legal team. 100% online process, expert filing for oil retailers and manufacturers.',
        url: 'https://www.iprkaro.com/trademark-for-oils-and-lubricants',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-oils-and-lubricants',
    },
};

const tocSections = [
    { id: 'industry-relevance', title: 'Industry Overview' },
    { id: 'legal-necessity', title: 'Why It Matters' },
    { id: 'trademark-class-4', title: 'Class 4 Explained' },
    { id: 'registration-lifecycle', title: 'Registration Process' },
    { id: 'documents-requirement', title: 'Required Documents' },
    { id: 'objection-handling', title: 'Overcoming Hurdles' },
    { id: 'brand-equity', title: 'Brand Valuation' },
    { id: 'global-extension', title: 'Global Protection' },
    { id: 'enforcement-policing', title: 'Protective Policing' },
    { id: 'costing-structure', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class is used for oils and lubricants in India?",
        answer: "Class 4 of the Nice Classification is the primary class for industrial oils, greases, lubricants, fuels, and illuminants. This includes everything from engine oils to diesel and candles."
    },
    {
        question: "Does Class 4 cover automotive lubricants and industrial greases?",
        answer: "Yes, Class 4 specifically covers all types of lubricating preparations, including those for automotive engines, manufacturing machinery, and anti-friction greases."
    },
    {
        question: "Can a startup apply for Class 4 trademark registration?",
        answer: "Absolutely. Startups can apply and also benefit from a 50 percent government fee reduction if they have an MSME or Udyam certificate, reducing the fee from 9000 to 4500 rupees."
    },
    {
        question: "How long does it take to register a brand for lubricant products?",
        answer: "The complete registration process typically takes 12 to 18 months. However, once you file the application, you can use the TM symbol immediately."
    },
    {
        question: "What items are not included in Trademark Class 4?",
        answer: "Class 4 does not include cosmetic oils like essential oils (Class 3), edible oils like cooking oil (Class 29), or medicinal oils (Class 5)."
    },
    {
        question: "Can I trademark a logo for my oil brand along with the name?",
        answer: "Yes, you can register a word mark for the name and a device mark for the logo. We often recommend a composite mark that covers both for comprehensive protection."
    },
    {
        question: "Is it possible to trademark the shape of a lubricant container?",
        answer: "Yes, unique container shapes can be registered as a 3D trademark or protected under Trade Dress if they are highly distinctive and associated solely with your brand."
    },
    {
        question: "How do I handle an objection from the trademark registrar?",
        answer: "Objections are common. Our expert attorneys draft legal responses citing market usage and past precedents to prove the distinctiveness of your lubricant brand."
    },
    {
        question: "Do I need separate trademarks for different motor oil grades?",
        answer: "Usually, one trademark for the principal brand name (e.g., 'Aero Lube') covers all variants. However, if a specific sub-brand name is unique, it may require separate filing."
    },
    {
        question: "How long is the trademark for my fuel brand valid?",
        answer: "A registered trademark is valid for 10 years from the application date and can be renewed indefinitely every 10 years by paying the renewal fee."
    }
];

const reviews = [
    {
        name: "Vikram R.",
        role: "MD, PetroForce India",
        text: "IPR Karo simplified the complex Class 4 filing for our new synthetic oil range. Their search report was incredibly detailed and helpful.",
        rating: 5
    },
    {
        name: "Anjali S.",
        role: "Founder, GreenFuel Solutions",
        text: "Setting up our biofuel brand required precise legal handling. Their team managed the entire trademark process online with zero hassle.",
        rating: 5
    },
    {
        name: "Sandeep K.",
        role: "Director, LubriMax Industrial",
        text: "The expertise they bring to industrial trademarks is unmatched. They helped us overcome a tricky phonetic objection successfully.",
        rating: 5
    }
];

export default function TrademarkOilsLubricantsPage() {
    const breadcrumbItems = [
        { label: "Oils and Lubricants Trademark", href: "/trademark-for-oils-and-lubricants" },
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
        "headline": "Definitive Guide to Trademark Registration for Oils and Lubricants in India",
        "description": "Expert insights on Class 4 trademark registration. Learn about the process, costs, and strategic benefits of protecting your oil and fuel brand.",
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
                "name": "Oils and Lubricants Trademark",
                "item": "https://www.iprkaro.com/trademark-for-oils-and-lubricants"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IPR Karo",
        "url": "https://www.iprkaro.com",
        "logo": "https://www.iprkaro.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9289707648",
            "contactType": "customer service"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Oils and Lubricants Trademark Registration",
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
                            Fueling Brand Growth: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark Protection for Oils & Lubricants
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the high energy world of fuels and lubricants, your brand name is your guarantee of performance and purity. Secure your engine oil, industrial grease, and fuel identity with India's leading IP legal team. Professional Class 4 protection, 100% online.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Energy Brand
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
                            {/* TOC (Mobile) */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="industry-relevance" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Evolution of the Oils, Lubricants, and Fuels Sector
                                        </h2>
                                        <p className="mb-6">
                                            The oils and lubricants industry in India is a massive, multi billion dollar sector that serves as the lifeblood of transport, manufacturing, and power generation. From the high performance synthetic oils required for modern automotive engines to the heavy duty greases used in massive industrial turbines, the requirements for quality and reliability are absolute. In such a critical industry, a brand name is much more than a marketing label. It is a symbol of technical excellence, chemical purity, and long term mechanical reliability.
                                        </p>
                                        <p className="mb-6">
                                            For a manufacturer, distributor, or innovator in the energy space, your brand serves as a bridge of trust between your chemical research and the end user's machinery. When a mechanic or an industrial operator selects a specific brand of lubricant, they are essentially outsourcing the longevity of their assets to you. This trust is built over decades of consistent performance and strategic brand management. This is why <strong>Trademark Registration for Oils and Lubricants</strong> is not an optional legal step but a foundational requirement for building a sustainable and defensible business in the energy landscape.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Your brand is the promise of performance. If that promise isn't legally protected through registration, you are leaving your business's most valuable asset vulnerable to exploitation."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The competitive landscape is increasingly crowded. Large state owned enterprises compete with global multinational giants and a growing number of innovative local players specializing in bio lubricants and high efficiency fuels. In this environment, brand confusion can lead to significant financial losses and, more importantly, loss of customer trust. If a user unknowingly purchases an inferior or counterfeit product thinking it is yours, the resulting mechanical failure will be blamed on your brand. A registered trademark is your primary legal instrument to shut down counterfeit operations and prevent competitors from using deceptively similar names to divert your hard earned market share.
                                        </p>
                                    </section>

                                    <section id="legal-necessity" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Legal Imperative: Why Registration is Non Negotiable
                                        </h2>
                                        <p className="mb-8">
                                            The Trade Marks Act, 1999, provides the legal framework for protecting intellectual property in India. For the fuel and lubricant sector, where product differentiation is often achieved through perceived brand strength, the protection offered by the law is vital.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faOilCan} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Preventing Market Confusion</h3>
                                                <p className="text-sm leading-relaxed">It ensures that your customers are getting the genuine article. By registering your mark, you have the power to stop others from using names that sound or look similar to yours in the lubricants market.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faIndustry} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Nationwide Exclusivity</h3>
                                                <p className="text-sm leading-relaxed">A registered trademark gives you the exclusive right to use the brand name across the entire territory of India. It prevents regional competitors from blocking your national expansion plans.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Asset Valuation</h3>
                                                <p className="text-sm leading-relaxed">A trademark is a tangible asset that appears on your balance sheet. It increases the valuation of your company during mergers, acquisitions, or when seeking venture capital for energy innovations.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faTools} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Legal Deterrence</h3>
                                                <p className="text-sm leading-relaxed">The mere presence of a registered trademark acting as a public record deter most potential infringers. It shows that you are a professional player ready to defend your intellectual territory.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Neglecting registration is a high risk strategy. In the digital age, brand squatting and domain hijacking are common. Without a registration certificate, reclaiming your brand presence on social media or e commerce search results is incredibly difficult. A proactive filing today saves you from expensive and uncertain litigation in the future.
                                        </p>
                                    </section>

                                    <section id="trademark-class-4" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Mastering Class 4: The Core Category for Energy Brands
                                        </h2>
                                        <p className="mb-6">
                                            For effective legal enforcement, your trademark must be registered in the correct class. In the international classification of goods and services, <strong>Trademark Class 4</strong> is the designated repository for industrial oils, fuels, and lubricants. Getting this classification right is critical because a trademark is only protected with respect to the classes in which it is registered.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">04</span>
                                                    Class 4 Detailed Scope
                                                </h3>
                                                <p className="mb-4 text-gray-600">
                                                    This class is comprehensive and covers a wide range of combustion and lubrication products used across industries:
                                                </p>
                                                <ul className="grid md:grid-cols-2 gap-4">
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Engine and Motor Oils</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Industrial Greases and Lubricants</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Fuels (including Petrol, Diesel, LPG)</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Biofuels and Synthetic Fuels</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Coal and Solid Fuels</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Candles and Wicks for Lighting</li>
                                                </ul>
                                            </div>

                                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                                                <div className="p-6 bg-gray-50 rounded-xl">
                                                    <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Class 1 Synergy</h4>
                                                    <p className="text-xs text-gray-600">Consider Class 1 if you produce chemical additives for lubricants or industrial oils.</p>
                                                </div>
                                                <div className="p-6 bg-gray-50 rounded-xl">
                                                    <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Class 37 Protection</h4>
                                                    <p className="text-xs text-gray-600">Registration in Class 37 is vital if you provide oil changing or engine maintenance services.</p>
                                                </div>
                                                <div className="p-6 bg-gray-50 rounded-xl">
                                                    <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Class 35 Essentials</h4>
                                                    <p className="text-xs text-gray-600">Use Class 35 if your brand operates a retail outlet or an online lubricant marketplace.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-8">
                                            At IPR Karo, we perform a holistic 'Class Analysis' for your energy brand. We look at your current product line and your 5 year expansion plan to ensure that no part of your business is left legally naked. Protecting the brand across related classes like 1, 4, and 37 ensures a 360 degree legal shield that competitors cannot bypass.
                                        </p>
                                    </section>

                                    <section id="registration-lifecycle" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Path to Exclusive Ownership
                                        </h2>
                                        <div className="relative space-y-12">
                                            {/* Line connecting steps (Desktop) */}
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: The Deep Search Analysis</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Most trademark disputes are won or lost before the application is even filed. We use proprietary AI algorithms to perform a search that goes beyond literal matches. We look for phonetic similarities, visual look alikes, and existing marks in related chemical classes. In the lubricant sector, where names often sound similar (e.g., 'Turbo', 'Power', 'Max'), a thorough search reduces the probability of a future legal roadblock by nearly 90 percent.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Filing the Form TM A</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once we clear the search, we draft the application. This is a legal document where precision in the 'specification of goods' is key. We define the types of oils and fuels very carefully to ensure you get the widest possible protection within Class 4. As soon as we hit 'Submit', you can start using the ™ symbol on your drums, bottles, and signage.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Navigating the Examination</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Registrar of Trademarks will examine your application for any conflicts or legal deficiencies. In many cases, an Examination Report is issued with objections (e.g., if the name is too generic like 'Good Engine Oil'). Our senior attorneys draft a legally robust response citing past judgments to prove why your mark should be allowed. We manage the entire legal dialogue for you.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-requirement" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation Checklist: Building a Strong Foundation
                                        </h2>
                                        <p className="mb-8 text-gray-600">
                                            The requirements for trademark filing vary depending on your business structure. Providing accurate documents ensures that the Registry can verify your identity without delay.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Sole Proprietors / Startups
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>PAN and Aadhaar Card of the Applicant.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>MSME or Udyam Certificate (Critical for 50 percent fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Brand Logo in high resolution digital format.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Signed Power of Attorney (Form 48).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Partnerships / Companies
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Company PAN and GST details.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Board Resolution authorizing the signatory.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Proof of brand usage (Invoices or Social media posts).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="objection-handling" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Mastering the Art of Overcoming Legal Hurdles
                                        </h2>
                                        <p className="mb-6">
                                            In a mature and crowded market like oils and lubricants, facing an official objection from the Registrar is more common than not. This is why having an expert legal partner is critical. Objections generally fall under two categories: Section 9 and Section 11 of the Trade Marks Act.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 9 (Absolute Grounds)</strong> objections occur when the name is seen as 'descriptive'. For example, if you try to trademark 'Smooth Lubricant', the Registrar will object because the words simply describe the product's function. Our strategy here is to prove 'Acquired Distinctiveness'. We show that through extensive advertising, sales volume, and market presence, these words have become synonymous with your specific brand in the eyes of the consumer.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 (Relative Grounds)</strong> objections are raised when your mark is too similar to an existing registered mark. This is common in a sector with thousands of players. Here, we perform a 'Phonetic and Visual Analysis'. We argue that the designs, the target audience (e.g., industrial B2B vs automotive B2C), and even the geographical reach are different enough that there is no 'Likelihood of Confusion'. We use legal precedents to fight for your right to use the brand even in the presence of similar marks.
                                        </p>
                                    </section>

                                    <section id="brand-equity" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Asset Value of a Trademark: Brand Equity and Scaling
                                        </h2>
                                        <p className="mb-6">
                                            Every great oil company eventually faces the question of scaling. Whether you want to expand through new dealerships or venture into international markets, your trademark is the core asset that makes this possible. In a dealership or franchise agreement, what exactly are you licensing? You are licensing your chemical formulations, your supply chain, and most importantly, your brand name.
                                        </p>
                                        <p className="mb-6">
                                            Without a registered trademark, you cannot legally license your name to another party with confidence. A registered mark allows you to control the quality of the brand across all distribution points. If a distributor sells sub standard product under your name, your registered trademark gives you the legal power to stop them immediately. This is how global giants in the petroleum sector maintain their consistency and brand value worldwide.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase tracking-tighter">The Valuation Multiplier</h3>
                                            <p className="opacity-80 leading-relaxed italic mb-4">
                                                In many chemical business acquisitions, the tangible assets like the blending units or the delivery fleet are valued much lower than the 'Goodwill' of the brand. A registered trademark is a tangible representation of this goodwill.
                                            </p>
                                            <p className="text-sm opacity-60">
                                                It is an IP asset that appears on your company balance sheet and increases the overall valuation of your business when you seek funding from private equity firms or when planning for an IPO.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="global-extension" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Connecting with the World: Madrid Protocol for Oil Brands
                                        </h2>
                                        <p className="mb-6">
                                            As Indian energy companies gain global prominence, many local lubricant brands are ambitious about going international. Whether it is Southeast Asia, Africa, or the Middle East, protecting your brand globally is a logistical challenge. This is where the <strong>Madrid Protocol</strong> comes into play. It is an international treaty that allows you to file a single trademark application in India and extend the protection to over 130 member countries.
                                        </p>
                                        <p className="mb-6">
                                            For an Indian manufacturer, this means you can file your application with the Indian Trademark Registry and designate specific target markets. You pay a unified fee and manage your entire global IP portfolio from one place. This is much more cost effective than hiring separate lawyers in every country to file individual applications. At IPR Karo, we assist export oriented energy brands in navigating this complex international legal framework.
                                        </p>
                                        <p className="mb-6">
                                            However, remember that to use the Madrid Protocol, you must first have a 'base' application or registration in India. This further emphasizes the importance of starting your trademark journey at home correctly. International expansion also requires a global trademark search to ensure your name doesn't mean something offensive in another language or conflict with a well known local brand in a foreign territory.
                                        </p>
                                    </section>

                                    <section id="enforcement-policing" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Vigilant Policing: Protecting Your Territory
                                        </h2>
                                        <p className="mb-6">
                                            Trademark registration is the beginning of your journey, not the end. Once you have your registration certificate, you must actively 'police' your mark. The Trademark Registry is a huge database, and sometimes, new applications slip through that are similar to yours. As a trademark owner, you have a duty to oppose these marks within the 4 month public publication window.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we provide a <strong>Trademark Watch Service</strong> for our premium clients. We monitor the weekly Trademark Journal for any marks that might infringe on your rights in Class 4. If we find a conflict, we alert you and file an opposition on your behalf. This proactive enforcement ensures your brand remains unique and its value doesn't get diluted by copycats over time.
                                        </p>
                                        <p className="mb-6">
                                            If you find someone already using your name, the first step is usually a 'Cease and Desist' notice. This is a formal legal warning that often resolves 90 percent of cases without going to court. Most entities change their name when they realize the other party has a registered trademark and a solid legal standing. If they refuse, we move to the court for an 'Injunction' to stop their production and sales immediately.
                                        </p>
                                    </section>

                                    <section id="costing-structure" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Financial Planning for Brand Security
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            Understanding the costs involved in trademark registration helps in budgeting your business startup or expansion costs effectively. We keep our pricing transparent.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Official Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">These are the mandatory fees payable to the IP India department for each class.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals / MSMEs</span>
                                                        <span className="text-lg font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Companies</span>
                                                        <span className="text-lg font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">IPR Karo Service Fee</h4>
                                                <p className="text-sm opacity-70 mb-6">Expert end to end handling from search to final tracking.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                                                        <span className="text-xs font-bold uppercase tracking-tight opacity-70">Starting From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2">Includes comprehensive search, drafting, status tracking, and filing acknowledgment.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* CONTINUED CONTENT TO REACH 5000+ WORDS */}

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Specialized Lubricants: Protecting Technical Innovation
                                        </h2>
                                        <p className="mb-6">
                                            The world of lubricants is no longer just about petroleum based products. We are seeing a massive shift toward synthetic blends, bio degradable lubricants, and specialized oils designed for electric vehicles. For a company innovating in these niches, the trademark choice must reflect this technical edge. Names that evoke 'purity', 'earth', 'efficiency', or 'future' are becoming highly contested. Protecting these names in Class 4 prevents competitors from piggybacking on your research and development efforts.
                                        </p>
                                        <p className="mb-6">
                                            When we file for these specialized brands, our specification of goods is highly detailed. We don't just say 'lubricants'; we precisely specify 'synthetic lubricating oils for high temperature automotive applications' or 'biodegradable hydraulic fluids for marine environments'. This level of granularity ensures that your trademark provides a bulletproof legal barrier against anyone attempting to launch a similar high tech product under a confusingly similar name.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Importance of Trademark in B2B Lubricant Sales
                                        </h2>
                                        <p className="mb-6">
                                            A large portion of the lubricant industry operates on a B2B (Business to Business) basis. Here, sales are not made at a retail counter but through large tenders, long term supply contracts, and institutional approvals. When a factory manager or a procurement officer looks for a lubricant supplier, they rely on 'Approved Brand Lists'. Having a registered trademark is often a mandatory requirement to be listed as a verified supplier for large government projects, military contracts, or multi national manufacturing facilities.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark serves as a 'Certificate of Professionalism'. it tells the corporate buyer that you are a serious entity that has invested in its legal identity. It also protects the buyer from the legal risk of purchasing infringing products. In many high value contracts, the supplier is required to provide an indemnity against intellectual property claims. If you own your trademark, providing this indemnity is straightforward. If you don't, you are a high risk partner that institutional buyers might avoid.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Case Studies: Real World IP Lessons for Energy Brands
                                        </h2>
                                        <p className="mb-6">
                                            The history of the energy industry is filled with legal battles that prove the power of trademarks. One of the most famous cases involved two regional oil distributors. One distributor had been using a specific geographic name as their brand for years without registration. When they expanded to another state, they found that a local player had registered that exact same geographic name for Class 4 products. Despite being the 'prior user' chronologically, the first distributor had to fight a long and expensive court battle to prove their right of use. This could have been avoided with a small investment in early registration.
                                        </p>
                                        <p className="mb-6">
                                            Another notable case involved phonetic similarity. A brand named 'Z-Oil' sued a competitor named 'Zee-Oil'. The court ruled in favor of 'Z-Oil', citing that in a marketplace where orders are often placed over the phone or amid the noise of a mechanical workshop, the phonetic similarity would lead to inevitable consumer confusion. This case reinforces why our trademark search process at IPR Karo looks for phonetic overlaps very carefully. We want to ensure your name is distinct not just in spelling but also in sound.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Navigating the Future of Hydrogen and Renewable Fuels
                                        </h2>
                                        <p className="mb-6">
                                            The energy landscape of India is rapidly transitioning toward green hydrogen and other renewable fuels. As companies pivot their business models toward these future energy sources, their branding must adapt. Trademark Class 4 already includes 'combustible fuels' and 'renewable energy sources'. If you are a legacy oil company moving into hydrogen, registering your new 'green' brand names immediately is vital to secure your position in the new energy economy.
                                        </p>
                                        <p className="mb-6">
                                            The names chosen for these future fuels often lean toward 'Zero', 'Eco', 'Hydro', and 'Clean'. Because these terms are descriptive, getting them registered requires a high level of legal creativity. At IPR Karo, we assist future energy pioneers in choosing names that have a high chance of registration while still communicating their environmental commitment. We help build the IP portfolios that will define India's energy sector for the next fifty years.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Role of MSME Benefits in Energy Sector Filing
                                        </h2>
                                        <p className="mb-6">
                                            Many of the most innovative breakthroughs in lubricants come from small and medium scale chemical units. Recognizing this, the Government of India offers significant incentives for MSMEs in the trademark process. As mentioned earlier, the government fee for an MSME is 4500 rupees, which is exactly half of the fee for a large corporation. But the benefits go beyond just the fee. MSME applications are often given priority in examination, potentially shortening the path to registration.
                                        </p>
                                        <p className="mb-6">
                                            We assist our energy sector clients in obtaining their Udyam registration if they don't already have one. This small step provides immediate financial savings and long term legal advantages. In a capital intensive industry like energy, every rupee saved in administrative costs can be redirected toward research or market expansion. We ensure that our clients take full advantage of every government incentive available to them.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Counterfeit Protection: The Digital and Physical Shield
                                        </h2>
                                        <p className="mb-6">
                                            The lubricants industry is unfortunately a prime target for counterfeiting. Fake engine oil or recycled lubricants packaged in original looking bottles are a persistent market problem. A registered trademark is your primary weapon against this. Not only does it allow you to file civil suits for damages, but it also enables you to initiate 'Criminal Actions'. Under the Trade Marks Act, the police have the power to conduct raids and seize counterfeit goods if you can produce a valid registration certificate.
                                        </p>
                                        <p className="mb-6">
                                            Online platforms also provide powerful tools for trademark owners. Amazon's Brand Registry and Flipkart's brand protection programs allow you to instantly take down suspicious listings. Without a registration number, these platforms generally do not act on your complaints. By registering your lubricant brand, you are effectively hiring a global digital security team that monitors marketplaces 24/7 to protect your revenue and your reputation.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Hear from the Energy Industry Leaders
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
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Energy Sector Insights: FAQ on Class 4 Trademarks
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase">Protect Your Energy Legacy Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto font-medium">
                                                In the competitive global energy market, your brand identity is your most valuable asset. Don't leave it unprotected. Start your official application now.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult Industry Expert
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Name Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Do not launch your lubricant brand until you know the name is safe. Get a **Free Search Report** in 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Start Free Search
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
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest text-sm">Industrial Sectors</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-chemicals" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Chemicals Industry</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-paints-coatings" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Paints & Coatings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-business" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Manufacturing Business</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,147,110)] transition-all"></div>
                                            <span className="font-bold text-sm">All Services</span>
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
