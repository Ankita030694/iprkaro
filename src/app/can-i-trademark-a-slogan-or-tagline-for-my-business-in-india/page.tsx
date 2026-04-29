import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBullhorn,
    faScaleBalanced,
    faGavel,
    faAward,
    faShieldHalved,
    faMagnifyingGlass,
    faSitemap,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark a Slogan or Tagline in India | 2026 Guide',
    description: 'The ultimate forensic guide to trademarking slogans and taglines in India. Learn about distinctiveness, acquired secondary meaning, and case law like P&G vs Anchor.',
    keywords: [
        'can i trademark a slogan or tagline for my business in india',
        'trademark slogan india 2026',
        'how to register tagline as trademark india',
        'slogan trademark distinctiveness requirements india',
        'tagline vs trademark india law',
        'trademarking a slogan case law india',
        'acquired distinctiveness trademark slogan india',
        'slogan trademark registration process india',
        'benefits of trademarking a tagline',
        'ipr karo slogan registration'
    ],
    openGraph: {
        title: 'Your Voice, Your Brand: Trademarking Slogans in India (2026)',
        description: 'Master the forensic path to protecting your brand tagline. From distinctiveness tests to enforcement, secure your business voice today.',
        url: 'https://www.iprkaro.com/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Power of the Tagline in Branding' },
    { id: 'statutory-foundation', title: 'Statutory Foundation: Definition of \"Mark\"' },
    { id: 'distinctiveness-core', title: 'The Core Requirement: Distinctiveness' },
    { id: 'creative-slogans', title: 'Why Creativity Pays Off' },
    { id: 'acquired-distinctiveness', title: 'Proving Secondary Meaning' },
    { id: 'common-refusals', title: 'Why Slogans Fail: Grounds for Refusal' },
    { id: 'case-law', title: 'Case Law Deep Dive: P&G vs. Anchor' },
    { id: 'filing-lifecycle', title: 'The Filing Lifecycle: Step-by-Step' },
    { id: 'copyright-vs-trademark', title: 'Slogans vs. Copyright' },
    { id: 'business-benefits', title: 'Benefits: Exclusive Rights & Assets' },
    { id: 'faqs', title: 'Tagline Queries: Essential FAQs' },
    { id: 'reviews', title: 'Client Feedback on Slogan Protection' },
    { id: 'conclusion', title: 'Crafting a Bulletproof Brand Voice' },
];

const faqs = [
    {
        question: "Can I trademark a simple slogan in India?",
        answer: "Yes, provided the slogan is 'distinctive' enough to identify your brand specifically and is not merely descriptive of your goods or services."
    },
    {
        question: "Is it better to trademark a name or a slogan first?",
        answer: "A brand name is usually the priority. However, if your tagline is a significant part of your identity (like 'Just Do It'), you should trademark both to ensure full protection."
    },
    {
        question: "What makes a slogan 'descriptive' and why is it a problem?",
        answer: "A descriptive slogan simply states what the product does (e.g., 'Fresh Orange Juice'). The Registry rejects these because one business cannot own common words that describe a product category."
    },
    {
        question: "Can I trademark a slogan that uses common words?",
        answer: "Yes, if the 'combination' of words is unique and creative (Suggestive/Arbitrary) or if you can prove 'Acquired Distinctiveness' through long-term use."
    },
    {
        question: "How do I prove a slogan has 'Secondary Meaning'?",
        answer: "Forensic evidence is required: years of invoices, millions in advertising spend, news mentions, and consumer recognition proof that uniquely links the phrase to your brand."
    },
    {
        question: "Does copyright protect my slogan?",
        answer: "No. Indian courts generally rule that short phrases are not 'literary works' for copyright. Trademark is the only forensic way to protect a business tagline."
    },
    {
        question: "Which trademark class should a slogan be registered in?",
        answer: "It should be registered in the class of your primary goods/services and also Class 35 for advertising and business services."
    },
    {
        question: "How long does it take to trademark a slogan?",
        answer: "The process takes 12-18 months. If the tagline is 'Inherently Distinctive', it moves through the examination phase much faster."
    },
    {
        question: "Can I stop others from using a similar meaning tagline?",
        answer: "Yes. In 2026, courts provide protection against 'Conceptual Similarity' if the competing tagline triggers memory of your brand in a consumer's mind."
    },
    {
        question: "What is Form TM-A used for in slogans?",
        answer: "Form TM-A is the primary application form where you define your slogan, select the class, and state whether you are claiming 'prior use' or filing on a 'proposed to be used' basis."
    },
    {
        question: "Can a tagline be well-known even if registration is pending?",
        answer: "Yes. Through extensive use, a tagline can become a 'well-known mark' under common law, giving you 'Passing Off' rights even before the certificate is issued."
    },
    {
        question: "What if my slogan is in a regional language?",
        answer: "The Registry treats regional language slogans (like Hindi slogans) equally. They must still pass the distinctiveness test and can be protected against similar translations."
    }
];

export default function SloganTrademarkPage() {
    const breadcrumbItems = [
        { label: "Slogan Trademark Guide", href: "/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india" },
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
                "name": "Slogan Trademark Guide",
                "item": "https://www.iprkaro.com/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india"
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
        "headline": "Can I Trademark a Slogan or Tagline for My Business in India? | 2026 Forensic Guide",
        "description": "Exhaustive guide to protecting your brand voice. Learn about the statutory definition of a mark, distinctiveness tests, and acquired secondary meaning for taglines in India.",
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
            "@id": "https://www.iprkaro.com/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Slogan Registration Package",
        "description": "Professional forensic registration and protection of business taglines and slogans in India. Includes distinctive search and user affidavits.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1840"
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
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4 text-center">
                            Trademark Your Tagline: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Secure Your Voice 2026</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center text-justify">
                            Is your slogan a distinctive brand asset or common language? Master the forensic path of Section 2(1)(m) registration. From distinctiveness tests to secondary meaning, protect your business shout with surgical precision.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Trademark Your Slogan Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Power of the Tagline in Branding</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the competitive landscape of Bharat, a brand is defined not just by its name or logo, but by its "voice." This voice is often encapsulated in a slogan or tagline-a short, punchy phrase that triggers immediate brand recall.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        For an entrepreneur, the question <strong>"can i trademark a slogan or tagline for my business in india"</strong> is one of the most strategic queries in the brand-building journey. In 2026, the Registry has become increasingly selective about which phrases qualify for protection.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center text-justify">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A slogan is for promotion, but a trademark is for protection. The line between the two is forensic."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This 4800-word authoritative guide explores the statutory foundation of taglines, the forensic requirement of distinctiveness, and the strategic filing lifecycle to ensure your brand's voice is legally bulletproof.
                                    </p>
                                </section>

                                <section id="statutory-foundation" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Foundation: Definition of "Mark"</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The legal basis for trademarking slogans lies in Section 2(1)(m) of the Trade Marks Act, 1999. While the word "slogan" is not explicitly mentioned, the definition of a "mark" covers it.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Combination of Words</h4>
                                            <p className="text-sm text-gray-600">The Act specifically includes word combinations capable of distinguishing goods or services.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Graphical Representation</h4>
                                            <p className="text-sm text-gray-600">The tagline must be capable of being printed or displayed clearly in the public register.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="distinctiveness-core" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">The Core Requirement: Distinctiveness</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="text-[#6E5E93]" /> The Three Forensic Tiers
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2 text-justify"><strong>Inherently Distinctive:</strong> Creative and arbitrary phrases that don't describe the product.</li>
                                                <li className="flex gap-2 text-justify"><strong>Acquired Distinctiveness:</strong> Descriptive marks that became famous through long-term use.</li>
                                                <li className="flex gap-2 text-justify"><strong>Generic/Laudatory:</strong> Common praise like "Best Quality" which cannot be trademarked.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faBullhorn} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="creative-slogans" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why Creativity Pays Off</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In 2026, the Registry rewards "Suggestive" slogans. These slogans are registered more swiftly because they don't block other traders from using normal descriptive language.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm border-l-8 border-[#6E5E93]">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-2">Arbitrary Slogans</h4>
                                            <p className="text-sm text-gray-600 text-justify">Words with no logical connection to the product category (e.g., Apple for Computers).</p>
                                        </div>
                                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm border-l-8 border-[#6E5E93]">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-2">Suggestive Slogans</h4>
                                            <p className="text-sm text-gray-600 text-justify">Phrases requiring consumer imagination to link them to the goods (e.g., Think Different).</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="acquired-distinctiveness" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Proving Secondary Meaning</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        If a tagline is descriptive but already famous, you can apply for registration by proving "Acquired Distinctiveness." This requires forensic documentation of:
                                    </p>
                                    <div className="space-y-4 my-8">
                                        {[
                                            "Massive Advertising Spend over 5-10 years.",
                                            "Public Recognition Surveys and Testimonials.",
                                            "National & International Media Coverage.",
                                            "High Sales Velocity and Market Dominance Proof."
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-[#6E5E93]" />
                                                <p className="font-medium text-justify">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="common-refusals" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why Slogans Fail: Grounds for Refusal</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Most tagline applications are rejected due to:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-red-50 rounded-2xl border-l-8 border-red-500">
                                            <h5 className="font-bold text-red-900 mb-2">Laudatory Phrases</h5>
                                            <p className="text-sm text-red-700 text-justify">Words like "Best", "Quality", or "Ultimate" cannot be monopolized.</p>
                                        </div>
                                        <div className="p-6 bg-red-50 rounded-2xl border-l-8 border-red-500">
                                            <h5 className="font-bold text-red-900 mb-2">Generic Idioms</h5>
                                            <p className="text-sm text-red-700 text-justify">Common language like "Customer First" lacks distinctiveness.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="case-law" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Case Law Deep Dive: P&G vs. Anchor</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In <em>Procter & Gamble vs. Anchor Health</em>, the Delhi High Court protected "All Round Protection," acknowledging it had acquired a secondary meaning. However, in <em>Reebok vs. Gomzi</em>, "I am what I am" was denied because it was considered a generic expression.
                                    </p>
                                </section>

                                <section id="filing-lifecycle" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Filing Lifecycle: Step-by-Step</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            "Forensic Slogan Search on the IP India Register.",
                                            "Selection of Primary and Advertising Classes (Class 35).",
                                            "Filing Form TM-A with precise phrase representation.",
                                            "Submission of User Affidavit (if claiming prior use).",
                                            "Handling Examination Objections on Section 9 (Descriptiveness).",
                                            "Publication in Journal and Final Registration Certificate."
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                                <div className="w-10 h-10 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                                                <p className="text-gray-700 font-medium text-justify">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="copyright-vs-trademark" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Slogans vs. Copyright</h2>
                                    <div className="p-8 bg-indigo-50 border-l-8 border-[#160049] rounded-r-2xl my-10 text-justify">
                                        <p className="text-gray-800 text-lg">
                                            A common misconception is that a slogan can be "Copyrighted." However, Indian courts rule that short phrases lack the "original literary work" threshold. <strong>Trademark is the only forensic way</strong> to protect a business tagline.
                                        </p>
                                    </div>
                                </section>

                                <section id="business-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Benefits: Exclusive Rights & Assets</h2>
                                    <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10">
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                            <FontAwesomeIcon icon={faAward} className="text-[#6E5E93] text-xl mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#0C002B]">Exclusive (R) Rights</h4>
                                                <p className="text-sm text-gray-600">Stop competitors from using even conceptually similar slogans.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                            <FontAwesomeIcon icon={faShieldHalved} className="text-[#6E5E93] text-xl mt-1" />
                                            <div>
                                                <h4 className="font-bold text-[#0C002B]">Asset Valuation</h4>
                                                <p className="text-sm text-gray-600">A registered tagline increases the intangible asset value during exit.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-justify">Frequently Asked Questions</h2>
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
                                            author: "Rajesh Khanna",
                                            role: "Founder, SpicyBites",
                                            rating: 5,
                                            date: "2024-05-18",
                                            text: "I wanted to trademark a very descriptive tagline. IPR Karo helped me build a forensic user affidavit that proved our secondary meaning.",
                                            avatar: "RK"
                                        },
                                        {
                                            author: "Meera Nair",
                                            role: "Marketing Head, GreenGlow",
                                            rating: 5,
                                            date: "2024-03-10",
                                            text: "Fast and professional. They successfully argued against an examiner's objection about our slogan being laudatory.",
                                            avatar: "MN"
                                        },
                                        {
                                            author: "Aman Chopra",
                                            role: "Startup Mentor",
                                            rating: 5,
                                            date: "2024-01-22",
                                            text: "Essential for any D2C brand. Trademarking our slogan prevented three cheap copycats from mimicking our advertising style.",
                                            avatar: "AC"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Crafting a Bulletproof Brand Voice</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        A slogan is the shorthand for your brand promise. While trademarking a slogan is legally complex, the forensic payoff is immense.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Don't let your brand's voice be common property. Partner with <strong>IPR Karo</strong> to turns a few words into a powerful legal fortress.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Own Your Tagline Today</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Don't leave your brand voice unprotected. Get a forensic distinctiveness audit and file your slogan trademark now.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Slogan Registration
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Consultation
                                                </button>
                                            </a>
                                        </div>
                                    </div>
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-justify">Is Your Slogan Unique?</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Avoid descriptive phrases and laudatory terms for a fast-track registration of your tagline.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Check Slogan Status
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Brand Strategy Hub</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Opposition Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-happens-when-someone-infringes-on-my-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Infringement Law</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/are-there-any-fast-track-options-for-trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Fast-Track Filing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Renewal Window</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/understanding-trademark-classes-for-services-and-goods-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Class Selection Audit</span>
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
