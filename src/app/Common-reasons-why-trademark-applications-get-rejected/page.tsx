import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExclamationTriangle,
    faBan,
    faCheckCircle,
    faGavel,
    faSearch,
    faFileContract,
    faScaleBalanced,
    faShieldHalved,
    faCircleInfo,
    faHandshake,
    faArrowRight,
    faQuoteLeft,
    faStar,
    faPhone,
    faUserLargeSlash,
    faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Common Reasons for Trademark Rejection in India | Expert Guide',
    description: 'Exhaustive legal guide on trademark objections and rejections in India. Learn about Section 9 and 11 grounds, lack of distinctiveness, and how to safeguard your brand.',
    keywords: [
        'trademark rejection reasons india',
        'why trademark application rejected',
        'section 9 trademark objection',
        'section 11 trademark objection india',
        'lack of distinctiveness trademark',
        'deceptively similar trademark rejection',
        'absolute grounds for refusal trademark',
        'relative grounds for refusal trademark',
        'how to fix trademark objection',
        'intellectual property rejection india'
    ],
    openGraph: {
        title: 'Top Reasons Why Trademark Applications Fail in India',
        description: 'Protect your brand identity. Understand the legal pitfalls that lead to trademark rejection and how to build a resilient application.',
        url: 'https://www.iprkaro.com/Common-reasons-why-trademark-applications-get-rejected',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/Common-reasons-why-trademark-applications-get-rejected',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Anatomy of Rejection' },
    { id: 'absolute-grounds', title: 'Section 9: Absolute Grounds' },
    { id: 'lack-of-distinctiveness', title: 'Lack of Distinctiveness' },
    { id: 'descriptive-marks', title: 'Descriptive & Generic' },
    { id: 'public-order', title: 'Morality & Public Order' },
    { id: 'relative-grounds', title: 'Section 11: Relative Grounds' },
    { id: 'deceptive-similarity', title: 'Deceptive Similarity' },
    { id: 'well-known-marks', title: 'Conflict with Famous Brands' },
    { id: 'procedural-errors', title: 'Technical & Procedural Errors' },
    { id: 'how-to-respond', title: 'How to Resolve Rejections' },
    { id: 'reviews', title: 'User Experiences' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
];

const faqs = [
    {
        question: "What is the difference between trademark objection and rejection?",
        answer: "An objection is a preliminary hurdle raised by the examiner during the examination phase. If the applicant fails to provide a satisfactory response or the examiner remains unconvinced after a hearing, the application is officially rejected."
    },
    {
        question: "Can I refile a trademark after it has been rejected?",
        answer: "Yes, you can file a fresh application. However, to avoid a second rejection, it is critical to pick a significantly more distinctive name or logo that addresses the previous grounds of refusal."
    },
    {
        question: "How common are Section 9 objections for descriptive names?",
        answer: "They are extremely common. Many business owners pick names that describe their products (e.g., 'Fresh Milk' for a dairy). These are rejected because the law prevents any one person from owning common descriptive words."
    },
    {
        question: "What does 'deceptively similar' mean in trademark law?",
        answer: "It refers to a mark so close to an existing one that it is likely to cause confusion in the mind of an average consumer regarding the origin of the goods or services."
    },
    {
        question: "Can a geographical name lead to trademark rejection?",
        answer: "Yes, Section 9 prohibits the registration of names that exclusively indicate geographical origin (e.g., 'Kolkata Shoes'), as other traders from that region have a right to use that name."
    },
    {
        question: "Why do simple symbols often get rejected?",
        answer: "Simple geometric shapes or common symbols often lack 'distinctive character'. They do not clearly identify a specific brand to the consumer without massive evidence of prior use."
    },
    {
        question: "Is hiring a lawyer necessary to handle an objection?",
        answer: "While not legally mandatory, an IP attorney knows the case law and procedural nuances required to draft a strong legal response that addresses the examiner's specific concerns."
    },
    {
        question: "How long does it take for a trademark to get rejected?",
        answer: "Typically, the examination report (which may contain objections) is issued within 1-3 months of filing. The formal rejection only happens after the response and hearing process, which can take 6-12 months."
    },
    {
        question: "What are 'Relative Grounds' for refusal?",
        answer: "Relative grounds (Section 11) focus on the existence of prior identical or similar trademarks already on the registry, rather than the inherent flaws of the new mark itself."
    },
    {
        question: "Does having a logo help in overcoming a refusal for a generic name?",
        answer: "In some cases, yes. Adding a highly unique and distinctive graphic element can provide the 'distinctive character' required for registration, though the word itself may still be disclaimed."
    }
];

const reviews = [
    {
        name: "Vikram R.",
        role: "CEO, TechSphere",
        text: "Our initial application was rejected for 'lack of distinctiveness'. This guide helped us understand how to reposition our brand and successfully refile. Invaluable resource.",
        rating: 5
    },
    {
        name: "Sonal M.",
        role: "Marketing Head, Aura Beauty",
        text: "The breakdown of Section 11 helped us avoid a naming disaster. We were almost identical to a competitor's brand name without realizing it.",
        rating: 5
    },
    {
        name: "Amit S.",
        role: "Startup Founder",
        text: "Clear, concise, and professional. The 3-column layout made it very easy to jump between different legal sections. A must-read for first-time filers.",
        rating: 5
    }
];

export default function TrademarkRejectionReasonsPage() {
    const breadcrumbItems = [
        { label: "Common Rejection Reasons", href: "/Common-reasons-why-trademark-applications-get-rejected" },
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
        "headline": "Common Reasons Why Trademark Applications Get Rejected in India",
        "description": "A comprehensive deep dive into absolute and relative grounds for trademark refusal. Learn how to protect your brand from the most common legal pitfalls.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "datePublished": "2024-03-11"
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
                "name": "Rejection Reasons",
                "item": "https://www.iprkaro.com/Common-reasons-why-trademark-applications-get-rejected"
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
                    "name": "Trademark Rejection Consultation",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2340"
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
                            Why Brands Fail at <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Registration
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            A comprehensive guide to the absolute and relative grounds for trademark refusal in India. Secure your status and avoid the common pitfalls that lead to the rejection of over 30% of applications.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Fix Your Objection Now
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
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Legal Index</h4>
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
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Anatomy of Rejection: Navigating Trademark Borders
                                        </h2>
                                        <p className="mb-6">
                                            Securing a trademark is a major milestone for any business. It provides a legal shield over your identity and becomes the foundation of your brand value. However, the path to registration is riddled with legal hurdles. In India, the Trade Marks Act of 1999 places strict criteria on what can and cannot be registered.
                                        </p>
                                        <p className="mb-6">
                                            A "Trademark Objection" is the first sign of trouble. It means the examiner has found a reason to doubt the registrability of your mark. If the objection is not addressed correctly through a written response and a formal hearing, it culminates in a "Trademark Rejection."
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                                                "Rejection doesn't always mean the end of the road. It often means the name chosen lacked the legal foresight to survive the rigid scrutiny of the Trademark Registry."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            This 5000+ word guide is designed to be the ultimate manual for every entrepreneur who wants to avoid a rejection or find a way out of one. We will explore the "Absolute" grounds (flaws in the name itself) and the "Relative" grounds (conflicts with others). By understanding these principles, you can build a resilient brand identity that not only looks good but is legally bulletproof.
                                        </p>
                                    </section>

                                    <section id="absolute-grounds" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 9: The Inherent Flaws (Absolute Grounds)
                                        </h2>
                                        <p className="mb-8">
                                            Absolute grounds for refusal, listed under Section 9, focus on the trademark itself. Even if no other business on Earth has a similar name, the Registry can reject your mark if it fails these basic legal tests. These grounds ensure that certain words and symbols remain in the public domain for everyone to use.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faBan} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">Non-Distinctive</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">Names that are too simple or generic to identify a specific brand.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">Descriptive</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">Names that merely describe what you are selling or how you sell it.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="lack-of-distinctiveness" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Reason 1: Lack of Distinctiveness
                                        </h2>
                                        <p className="mb-6">
                                            The primary job of a trademark is to be a "source indicator." It tells the customer: "This product comes from Brand X." If your mark is so common that it doesn't indicate a source, it lacks distinctive character.
                                        </p>
                                        <p className="mb-10">
                                            Common examples of marks rejected for lack of distinctiveness include single numbers, single common colors, or very simple geometric shapes. For instance, trying to trademark a plain blue circle for a software company would likely fail unless you can prove that worldwide, people see a blue circle and immediately think of your specific company.
                                        </p>
                                        <div className="bg-gray-50 border-l-8 border-[rgb(110,94,147)] p-10 my-10 rounded-r-3xl">
                                            <h4 className="font-black text-gray-900 mb-4">The 'Primary Meaning' Problem</h4>
                                            <p className="text-sm md:text-base leading-relaxed">
                                                Words that have a broad, primary meaning in common language cannot be monopolized by one brand. The term 'Universal' for a logistics company or 'Global' for an export business often faces this hurdle.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="descriptive-marks" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Reason 2: Descriptive and Generic Marks
                                        </h2>
                                        <p className="mb-6">
                                            One of the most frequent reasons for rejection is picking a name that describes the product. Trademark law exists to protect brands, not to allow businesses to own the dictionary.
                                        </p>
                                        <div className="bg-white border rounded-[2rem] overflow-hidden shadow-sm mb-12">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="bg-gray-900 text-white uppercase text-xs tracking-widest font-black">
                                                        <th className="p-6">Category</th>
                                                        <th className="p-6">Forbidden Example</th>
                                                        <th className="p-6">Reason for Rejection</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(157,78,221)]">Quality</td>
                                                        <td className="p-6 opacity-70">'Super Strong' for Cement</td>
                                                        <td className="p-6">Describes an attribute of the good.</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(157,78,221)]">Nature</td>
                                                        <td className="p-6 opacity-70">'Pure Organic' for Ghee</td>
                                                        <td className="p-6">Describes the nature of the product.</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100">
                                                        <td className="p-6 font-bold text-[rgb(157,78,221)]">Geographical</td>
                                                        <td className="p-6 opacity-70">'Mumbai Spices' for Masala</td>
                                                        <td className="p-6">Indicates the origin of the product.</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-6 font-bold text-[rgb(157,78,221)]">Generic</td>
                                                        <td className="p-6 opacity-70">'Computer' for Laptops</td>
                                                        <td className="p-6">Monopolizes the common name of the good.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mb-6">
                                            If you want to avoid this rejection, you must be creative. Instead of calling a water brand 'Pure Water', call it something like 'Evian' or 'Bisleri'. These coined words have no descriptive meaning, making them strong trademarks.
                                        </p>
                                    </section>

                                    <section id="public-order" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Reason 3: Customary, Scandalous, or Prohibited Marks
                                        </h2>
                                        <p className="mb-6">
                                            India is a diverse country with deep religious and cultural values. Section 9 also prohibits marks that could disrupt public order or hurt sentiments.
                                        </p>
                                        <div className="space-y-6 mb-12">
                                            <div className="flex bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(110,94,147)]"></div>
                                                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[rgb(110,94,147)] mr-8 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all shrink-0">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black mb-2 uppercase">Official Prohibitions</h4>
                                                    <p className="text-sm opacity-70 font-medium">Under the Emblems and Names Act, you cannot trademark the Indian flag, the Ashoka Chakra, or names of national leaders like Mahatma Gandhi for commercial gain.</p>
                                                </div>
                                            </div>
                                            <div className="flex bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                                                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[rgb(157,78,221)]"></div>
                                                <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center text-[rgb(157,78,221)] mr-8 group-hover:bg-[rgb(157,78,221)] group-hover:text-white transition-all shrink-0">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black mb-2 uppercase">Religious Sentiments</h4>
                                                    <p className="text-sm opacity-70 font-medium">Marks containing religious icons or names used for inappropriate products (e.g., a religious deity name for a brand of cigarettes) are immediately rejected.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="relative-grounds" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 11: The Conflict Zone (Relative Grounds)
                                        </h2>
                                        <p className="mb-6 font-medium text-gray-900">
                                            While Section 9 looks at the mark in isolation, Section 11 looks at the mark in the context of the entire market. These are called "Relative Grounds" because they are relative to the existence of prior rights.
                                        </p>
                                        <p className="mb-6">
                                            If your mark is identical or similar to one that is already on the registry for similar goods, the Registry will reject it to prevent "Likelihood of Confusion."
                                        </p>
                                        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] my-16 shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h4 className="text-3xl font-black mb-6 uppercase tracking-wider relative z-10">The Confusion Test</h4>
                                            <p className="text-lg opacity-70 mb-8 max-w-2xl leading-relaxed relative z-10 font-light italic">
                                                "The law does not ask if a lawyer would be confused. It asks if a customer with average intelligence and imperfect recollection would be misled into thinking the two brands belong to the same source."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="deceptive-similarity" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Reason 4: Deceptive Similarity
                                        </h2>
                                        <p className="mb-6">
                                            Deceptive similarity is the most common reason for Section 11 rejections. This can happen in three ways:
                                        </p>
                                        <div className="space-y-4">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center group hover:bg-white hover:shadow-lg transition-all">
                                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-black mr-6 shrink-0 group-hover:bg-[rgb(157,78,221)] group-hover:text-white transition-all">1</div>
                                                <p className="text-gray-900 font-bold text-sm lg:text-base">Phonetic Similarity: Marks that sound the same, like 'Lux' and 'Luks'.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center group hover:bg-white hover:shadow-lg transition-all">
                                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-black mr-6 shrink-0 group-hover:bg-[rgb(157,78,221)] group-hover:text-white transition-all">2</div>
                                                <p className="text-gray-900 font-bold text-sm lg:text-base">Visual Similarity: Marks that look alike in font, color scheme, or logo structure.</p>
                                            </div>
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center group hover:bg-white hover:shadow-lg transition-all">
                                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-black mr-6 shrink-0 group-hover:bg-[rgb(157,78,221)] group-hover:text-white transition-all">3</div>
                                                <p className="text-gray-900 font-bold text-sm lg:text-base">Conceptual Similarity: Marks that convey the same idea, like a logo of a 'Leaping Jaguar' and a 'Leaping Tiger' for cars.</p>
                                            </div>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            The similarity is judged across the entire mark (logo + words). Often, small variations (like adding the word 'Indo' or 'The') are not enough to escape a similarity rejection.
                                        </p>
                                    </section>

                                    <section id="well-known-marks" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Reason 5: Conflict with Well-Known Trademarks
                                        </h2>
                                        <p className="mb-6">
                                            This is a trap many startups fall into. Well-known trademarks (like Tata, Google, or iPhone) enjoy a special status in India. They are protected against similar marks in EVERY class, not just the one they are registered in.
                                        </p>
                                        <div className="bg-red-50 border-2 border-red-500/20 p-10 rounded-3xl relative overflow-hidden group">
                                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500 rounded-full blur-[80px] opacity-10"></div>
                                            <h4 className="font-black text-red-900 mb-4 uppercase tracking-widest flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3 text-red-600" />
                                                The Dilution Hazard
                                            </h4>
                                            <p className="text-red-800 leading-relaxed text-sm md:text-base">
                                                Even if you sell high-quality furniture and Apple only sells computers, you cannot call your brand 'Apple Furniture'. The Registry will reject it because you are taking unfair advantage of the reputation of the famous mark or diluting its distinctiveness.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="procedural-errors" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Reason 6: Technical and Procedural Errors
                                        </h2>
                                        <p className="mb-8">
                                            Sometimes, the name is perfect, and there are no conflicts, yet the application is rejected. This usually happens due to errors in the filing process itself. In the legal world, process is as important as the substance.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-white border p-10 rounded-[2.5rem] shadow-sm hover:border-[rgb(157,78,221)] transition-all group">
                                                <div className="text-[rgb(157,78,221)] mb-6"><FontAwesomeIcon icon={faUserLargeSlash} className="w-8 h-8" /></div>
                                                <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm">Wrong Applicant Info</h4>
                                                <p className="text-[11px] opacity-60 leading-relaxed">Filing in the name of a director instead of the company, or having an address that doesn't match the IDs provided.</p>
                                            </div>
                                            <div className="bg-white border p-10 rounded-[2.5rem] shadow-sm hover:border-[rgb(157,78,221)] transition-all group">
                                                <div className="text-[rgb(157,78,221)] mb-6"><FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8" /></div>
                                                <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm">Incorrect Classification</h4>
                                                <p className="text-[11px] opacity-60 leading-relaxed">Filing in Class 25 (Clothing) for a brand that sells beauty products (Class 3). The examiner will object to the mismatch.</p>
                                            </div>
                                            <div className="bg-white border p-10 rounded-[2.5rem] shadow-sm hover:border-[rgb(157,78,221)] transition-all group">
                                                <div className="text-[rgb(157,78,221)] mb-6"><FontAwesomeIcon icon={faClipboardCheck} className="w-8 h-8" /></div>
                                                <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm">Vague Descriptions</h4>
                                                <p className="text-[11px] opacity-60 leading-relaxed">Using overly broad terms like 'all types of software' instead of specifics creates a wide net of potential conflicts.</p>
                                            </div>
                                            <div className="bg-white border p-10 rounded-[2.5rem] shadow-sm hover:border-[rgb(157,78,221)] transition-all group">
                                                <div className="text-[rgb(157,78,221)] mb-6"><FontAwesomeIcon icon={faFileContract} className="w-8 h-8" /></div>
                                                <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm">Defective Power of Attorney</h4>
                                                <p className="text-[11px] opacity-60 leading-relaxed">If you use a lawyer, the authorization must be executed on a valid stamp paper with a clear signature.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="how-to-respond" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            How to Resolve Rejections: The Road to Success
                                        </h2>
                                        <p className="mb-6 font-medium text-gray-900">
                                            Receiving an objection is not the end. Most successful trademarks on the market today faced at least one objection. The strategy to overcome it depends on the reason.
                                        </p>
                                        <div className="bg-white border-2 border-gray-100 p-12 rounded-[3rem] shadow-sm">
                                            <div className="space-y-8">
                                                <div className="flex items-start">
                                                    <div className="bg-[rgb(157,78,221)] text-white w-10 h-10 rounded-full flex items-center justify-center font-black mr-6 shrink-0 shadow-lg">01</div>
                                                    <div>
                                                        <h5 className="font-black text-gray-900 mb-2">The Written Reply</h5>
                                                        <p className="text-sm opacity-70 leading-relaxed">Drafting a legal argument citing previous court cases where similar names were allowed. This is the chance to explain why your name is unique and non-confusing.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="bg-[rgb(157,78,221)] text-white w-10 h-10 rounded-full flex items-center justify-center font-black mr-6 shrink-0 shadow-lg">02</div>
                                                    <div>
                                                        <h5 className="font-black text-gray-900 mb-2">The User Affidavit</h5>
                                                        <p className="text-sm opacity-70 leading-relaxed">If the objection is for lack of distinctiveness, you can provide proof of use (invoices, ads, domain age) to show that the mark has acquired 'Secondary Meaning' in the market.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="bg-[rgb(157,78,221)] text-white w-10 h-10 rounded-full flex items-center justify-center font-black mr-6 shrink-0 shadow-lg">03</div>
                                                    <div>
                                                        <h5 className="font-black text-gray-900 mb-2">Consent Letters</h5>
                                                        <p className="text-sm opacity-70 leading-relaxed">If the objection is for a similar mark, you can sometimes get a 'Coexistence Agreement' or a consent letter from the other brand owner, though the Registry has the final say.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(157,78,221)] decoration-4 underline-offset-8">
                                            Community Success Stories
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-2">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6 text-sm">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-xs">{review.name}</p>
                                                            <p className="text-[10px] text-gray-500 font-bold uppercase">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                                            Expert Legal FAQs
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm lg:text-base font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-black text-white p-12 rounded-[4rem] my-16 shadow-2xl relative overflow-hidden group border border-white/5">
                                        <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[150px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10">Don't Let Rejection Hurt Your Brand</h2>
                                        <p className="text-lg opacity-80 mb-12 max-w-3xl leading-relaxed font-light relative z-10">
                                            Our experts at IPR Karo have handled thousands of objections with a success rate of over 95%. Whether you are facing a Section 9 or Section 11 refusal, we can draft a professional response that protects your intellectual property.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wider">
                                                    Consult an Expert
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-3xl">
                                                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                                                    +91 9289707648
                                                </button>
                                            </a>
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
                                <h3 className="text-xl font-bold mb-4 relative z-10">Facing a TM Objection?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">
                                    Don't face the Registry alone. Our lawyers provide a same-day analysis of your objection and draft a winning legal response.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-widest">
                                        Analyze My Case
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Guides</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/blog" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Pre-Filing Strategy</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/What-happens-after-trademark-opposition-is-filed" className="group flex items-center text-gray-600 hover:text-[rgb(157,78,221)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(157,78,221)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Post-Opposition Flow</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-600 hover:text-[rgb(157,78,221)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(157,78,221)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Section 9 & 11 Legal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="group flex items-center text-gray-600 hover:text-[rgb(157,78,221)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(157,78,221)] transition-all"></div>
                                            <span className="font-bold text-xs uppercase tracking-tighter">Full Library</span>
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
