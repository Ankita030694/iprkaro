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
    faCalendarAlt,
    faHandshake,
    faExclamationTriangle,
    faSync,
    faLightbulb,
    faUserTie,
    faBuilding,
    faFileAlt,
    faHandHoldingUsd,
    faScaleBalanced,
    faQuestionCircle,
    faLayerGroup,
    faPalette,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'What is Trademark? | Complete Guide to Brand Identity 2026',
    description: 'Understand the core concepts of trademarks. Learn what is a trademark, why it matters for your business, and the different types of marks protected under Indian law.',
    keywords: [
        'what is trademark',
        'trademark definition',
        'importance of trademark',
        'types of trademark',
        'brand mark vs logo',
        'trademark search meaning',
        'ipr basics india',
        'non-conventional trademarks',
        'protecting brand identity',
        'intellectual property fundamentals'
    ],
    openGraph: {
        title: 'Defining Identity: What is a Trademark?',
        description: 'Explore the foundations of branding. A deep dive into the legal definition, historical context, and business value of a registered trademark.',
        url: 'https://www.iprkaro.com/what-is-trademark',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-is-trademark',
    },
};

const tocSections = [
    { id: 'introduction', title: 'What is a Trademark? Beyond the Legal Jargon' },
    { id: 'fundamental-definition', title: 'The Statutory Definition Under the 1999 Act' },
    { id: 'historical-context', title: 'From Ancient Potters to Modern Titans: A Brief History' },
    { id: 'core-function', title: 'The Triple Role: Identification, Guarantee, and Advertising' },
    { id: 'types-of-marks', title: 'The Spectrum of Marks: From Words to Smells' },
    { id: 'brand-vs-trademark', title: 'The Strategic Difference: Brand vs. Trademark' },
    { id: 'symbols-decoded', title: 'The Symbols: ™, SM, and ® Explained' },
    { id: 'acquired-distinctiveness', title: 'Acquiring Distinctiveness: Secondary Meaning' },
    { id: 'non-conventional-marks', title: 'The Future: Sound, Color, and Shape Marks' },
    { id: 'why-it-matters', title: 'Economic Importance of Trademarks for Startups' },
    { id: 'territorial-nature', title: 'The Principle of Territoriality in IP' },
    { id: 'duration-and-vitality', title: 'Life of a Mark: Duration and Perpetual Renewal' },
    { id: 'why-iprkaro-basics', title: 'IPR Karo: Your Guide to Trademark Mastery' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Your Mark is Your Legacy' },
];

const faqs = [
    {
        question: "What is the simplest definition of a trademark?",
        answer: "In its simplest form, a trademark is a unique sign or identifier that tells consumers that a particular product or service comes from a specific source. It distinguishes your brand from competitors in the marketplace."
    },
    {
        question: "How is a trademark different from a brand name?",
        answer: "A brand is a marketing concept involving the image and reputation of a business. A trademark is the legal protection afforded to specific elements of that brand, such as its name or logo, granting the owner exclusive rights."
    },
    {
        question: "What can be registered as a trademark in India?",
        answer: "You can register words, logos, slogans, device marks, 3D shapes, specific color combinations, and even unique sounds. Any mark that is graphically representable and distinctive qualifies for registration."
    },
    {
        question: "Do I need a trademark for a small home business?",
        answer: "Yes. Even a small business can be harmed if a competitor uses a similar name. A trademark ensures that as you grow, your brand remains exclusively yours, and no one can ride on the coattails of your hard work."
    },
    {
        question: "What is the meaning of the SM symbol?",
        answer: "SM stands for 'Service Mark'. It is identical to a trademark but is used specifically for businesses that provide services (like consultants, banks, or hotels) rather than tangible products."
    },
    {
        question: "Can I trademark my own personal name?",
        answer: "Yes, you can register a personal name as a trademark (like 'Ralph Lauren' or 'Tata'), provided it has acquired a 'secondary meaning' and is recognized by the public as a brand rather than just an individual's identity."
    },
    {
        question: "How long does a trademark last if registered?",
        answer: "A registered trademark in India lasts for 10 years. However, unlike patents or copyrights which eventually expire, a trademark can be renewed every 10 years indefinitely, making it a permanent business asset."
    },
    {
        question: "What is a 'Descriptive' mark and why is it hard to register?",
        answer: "A descriptive mark describes a feature or quality of the product (e.g., 'Cold Ice' for ice cream). The law generally prevents the registration of such terms because no single person should have a monopoly over common descriptive words."
    },
    {
        question: "Is a trademark valid globally automatically?",
        answer: "No. Trademark rights are territorial. A registration in India only protects your mark within the Indian borders. To protect your brand internationally, you must file separate applications in other countries or use the Madrid Protocol."
    },
    {
        question: "Can a slogan be trademarked?",
        answer: "Absolutely. Famous slogans like 'Just Do It' are registered trademarks. A slogan must be distinctive and not a common phrase used in the industry to be eligible for protection."
    }
];

export default function WhatIsTrademarkPage() {
    const breadcrumbItems = [
        { label: "What is Trademark", href: "/what-is-trademark" },
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
                "name": "What is Trademark",
                "item": "https://www.iprkaro.com/what-is-trademark"
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
        "headline": "What is Trademark? The Foundations of Brand Identity in 2026",
        "description": "A comprehensive guide to understanding the concept of trademarks. Explore definitions, types, historical contexts, and the vital role of marks in modern business.",
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
        "datePublished": "2026-02-20",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/what-is-trademark"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Expert Trademark Educational Resources",
        "image": "https://www.iprkaro.com/assets/what-is-trademark-og.jpg",
        "description": "High-quality legal insights and educational guides for understanding intellectual property foundations.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "6240"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>What is Trademark?</span> Understanding Your Brand's Soul
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Journey into the core of intellectual property. Learn how a simple name or logo transforms into a legally protected asset that defines your commercial legacy in Bharat.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Secure Your Identity Today
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: TOC */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>

                        {/* Middle Column: Main Content */}
                        <div className="min-w-0">
                            <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: What is a Trademark? Decoding the Identity</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        If you close your eyes and think of your favorite smartphone, automobile, or soft drink, a specific image, name, or symbol immediately surfaces in your mind. This powerful mental connection is the direct work of a trademark. But <strong>what is trademark</strong> in a deeper, more comprehensive legal sense? Beyond being just a simple "logo" or a casual "brand name", a trademark is the formal legal recognition of a brand&apos;s exclusive right to identify itself in the competitive marketplace.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        In the bustling commercial streets of Bharat, trademarks act as silent but powerful guardians. They ensure that when a discerning customer seeks a specific quality or memorable experience, they can reliably find it without being deceived by counterfeiters or imitators. A trademark is the visual, auditory, or even olfactory representation of a business&apos;s hard-earned reputation - a reputation meticulously built over years of consistent service, innovation, and customer commitment.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        The concept of trademarks extends far beyond mere commercial identification. In modern India, a trademark is a legally enforceable intellectual property right that can be bought, sold, licensed, and even used as collateral for securing business loans. Courts across the country have consistently upheld the sanctity of registered trademarks, awarding substantial damages to owners whose marks have been infringed upon by unscrupulous competitors.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        At IPR Karo, we believe that understanding the "What" is the essential first step toward achieving the "How". This comprehensive guide is carefully designed to strip away the complex legal jargon and provide you with a crystal clear, actionable understanding of the most powerful intangible asset your business will ever own.
                                    </p>
                                    <div className="bg-[#0C002B] text-white p-10 my-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                                        <p className="text-2xl italic font-medium leading-relaxed relative z-10 text-center">
                                            "A brand is a story. A trademark is the legal title to that story. Without it, anyone can rewrite your narrative."
                                        </p>
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6E5E93]/20 to-transparent"></div>
                                    </div>
                                </section>

                                <section id="fundamental-definition" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Statutory Definition: Trademark India 1999</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        According to Section 2(zb) of the Trade Marks Act, 1999, a mark is defined as "a mark capable of being represented graphically and which is capable of distinguishing the goods or services of one person from those of others." To qualify as a trademark, an identifier must meet three critical criteria:
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-center">
                                            <div className="w-12 h-12 bg-[#6E5E93] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">1</div>
                                            <h5 className="font-bold mb-2">Graphic Nature</h5>
                                            <p className="text-xs text-gray-500">It must be something that can be printed or documented on paper/screen.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-center">
                                            <div className="w-12 h-12 bg-[#6E5E93] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">2</div>
                                            <h5 className="font-bold mb-2">Distinctiveness</h5>
                                            <p className="text-xs text-gray-500">It must be unique enough to stand out from existing marks in the same category.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-center">
                                            <div className="w-12 h-12 bg-[#6E5E93] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">3</div>
                                            <h5 className="font-bold mb-2">Trade Usage</h5>
                                            <p className="text-xs text-gray-500">It must be used in connection with actual goods or services in commerce.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="core-function" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Triple Role: Why Every Brand Needs One</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        Trademarks are not just legal hurdles or bureaucratic requirements; they are powerful multi-functional business tools that directly drive commercial value. They perform three primary and indispensable roles in the modern economy:
                                    </p>
                                    <div className="space-y-6 my-10">
                                        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex gap-6">
                                            <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 text-indigo-600 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-indigo-900 mb-1">Source Identifier</h4>
                                                <p className="text-indigo-800 text-sm">It clearly tells the buyer who manufactured or provided the product. This actively prevents consumer confusion in crowded marketplaces and legally protects the accumulated "goodwill" of the original creator. In landmark Indian cases, courts have awarded crores in damages when source identification was compromised.</p>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex gap-6">
                                            <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 text-indigo-600 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-indigo-900 mb-1">Quality Guarantee</h4>
                                                <p className="text-indigo-800 text-sm">A mark acts as a silent but binding promise to consumers. When a customer sees the mark, they naturally expect the same consistent quality they received in previous transactions. This creates brand loyalty, repeat purchases, and long-term customer relationships that form the foundation of business success.</p>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex gap-6">
                                            <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-indigo-600 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-indigo-900 mb-1">Advertising Anchor</h4>
                                                <p className="text-indigo-800 text-sm">It serves as the strategic focal point for all marketing efforts. Without a registered trademark, your advertising spend merely builds awareness for the product category rather than exclusively for your own brand. Every rupee invested in marketing a trademarked brand builds lasting equity exclusively for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        Beyond these three classical roles, trademarks in the digital age also serve as domain name anchors, social media identifiers, and e-commerce brand gates. Platforms like Amazon and Flipkart now require trademark registration proof for brand registry access, making it a practical necessity for online sellers targeting the Indian consumer market.
                                    </p>
                                </section>

                                <section id="types-of-marks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Spectrum of Marks: What Can You Actually Protect?</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        The question <strong>what is trademark</strong> expands as technology evolves. In 2026, the Indian registry recognizes a wide variety of marks:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-[#160049] transition-all">
                                            <h4 className="font-bold text-xl mb-4 group-hover:text-white transition-all">Standard Word Marks</h4>
                                            <p className="text-sm opacity-70 group-hover:text-white/80 transition-all">Plain text characters without any specific design. These provide the broadest protection for your brand name across all fonts and styles.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-[#160049] transition-all">
                                            <h4 className="font-bold text-xl mb-4 group-hover:text-white transition-all">Device Marks (Logos)</h4>
                                            <p className="text-sm opacity-70 group-hover:text-white/80 transition-all">Specific artistic representations, fonts, and graphical elements. These protect the visual "look and feel" of your brand identity.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-[#160049] transition-all">
                                            <h4 className="font-bold text-xl mb-4 group-hover:text-white transition-all">Shape Marks</h4>
                                            <p className="text-sm opacity-70 group-hover:text-white/80 transition-all">Protecting the unique 3D shape of a product or its packaging, provided it is not purely functional (e.g., the Coca-Cola bottle).</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-[#160049] transition-all">
                                            <h4 className="font-bold text-xl mb-4 group-hover:text-white transition-all">Slogans & Taglines</h4>
                                            <p className="text-sm opacity-70 group-hover:text-white/80 transition-all">Short, catchy phrases that become synonymous with a brand's mission or a specific product line.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="symbols-decoded" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Symbols: Decoding ™, SM, and ®</h2>
                                    <p className="mb-8 leading-relaxed text-lg text-gray-800">
                                        Using the right symbol is critical for legal enforcement and marketplace credibility. Here's the roadmap:
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-8 my-12">
                                        <div className="flex-1 p-10 bg-gradient-to-br from-[#0C002B] to-[#160049] rounded-3xl text-white shadow-2xl relative overflow-hidden">
                                            <div className="text-5xl font-extrabold mb-4 text-[#6E5E93]">™</div>
                                            <h4 className="font-bold text-2xl mb-4">Unregistered / Pending</h4>
                                            <p className="text-sm opacity-80 leading-relaxed">Used when you have just filed the application or are claiming rights under common law. It warns others that you consider this your trademark.</p>
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                                        </div>
                                        <div className="flex-1 p-10 bg-white border-2 border-gray-100 rounded-3xl text-[#0C002B] shadow-xl relative overflow-hidden">
                                            <div className="text-5xl font-extrabold mb-4 text-[#6E5E93]">®</div>
                                            <h4 className="font-bold text-2xl mb-4">Registered</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">Can only be used AFTER you receive the official registration certificate. Using this without a certificate is a punishable legal offense in India.</p>
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                                        </div>
                                    </div>
                                </section>

                                <section id="why-it-matters" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Economic Importance for Modern Startups</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        Why should a cash strapped startup care about <strong>what is trademark</strong> registration? The answer lies in valuation. In the digital age, physical assets like office space are secondary. Your "Intellectual Property" is what investors pay for. A registered trademark:
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-4 my-10 list-none p-0">
                                        <li className="p-5 bg-green-50 rounded-xl border border-green-100 flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-600" /> Enables Franchise and Licensing Models</li>
                                        <li className="p-5 bg-green-50 rounded-xl border border-green-100 flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-600" /> Provides Global Expansion Foundations</li>
                                        <li className="p-5 bg-green-50 rounded-xl border border-green-100 flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-600" /> Protects Against Cyber-Squatting</li>
                                        <li className="p-5 bg-green-50 rounded-xl border border-green-100 flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-600" /> Enhances Credit Worthiness</li>
                                    </ul>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm text-gray-800">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <div className="py-16 bg-[#0C002B] rounded-3xl relative overflow-hidden">
                                        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]" />
                                        <div className="max-w-6xl mx-auto px-6">
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">What Our <span className="text-[#FFB703]">Clients Say</span> About IPR Knowledge</h2>
                                            <p className="text-white/70 max-w-2xl mx-auto text-center mb-12">Business owners share how understanding trademarks through IPR Karo transformed their brand strategy.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">PS</div>
                                                        <div><h3 className="text-white font-bold">Priya Sharma</h3><p className="text-white/50 text-xs">Founder, Handloom Startup</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;I had no idea what a trademark actually was before IPR Karo explained it. They showed me how to protect my handloom brand name and logo. Now I sell on Amazon Brand Registry with full confidence!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">KJ</div>
                                                        <div><h3 className="text-white font-bold">Kabir Jain</h3><p className="text-white/50 text-xs">Owner, Specialty Coffee Chain</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;Someone copied my cafe name in another city. Thanks to IPR Karo&apos;s guidance on trademark fundamentals, I understood my rights and filed for protection immediately. Lifesaver!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">NR</div>
                                                        <div><h3 className="text-white font-bold">Neha Reddy</h3><p className="text-white/50 text-xs">Co-Founder, Ayurvedic D2C Brand</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;The educational resources at IPR Karo helped me understand different mark types - word, device, and shape. We registered our unique bottle shape as a trademark. Incredible expertise!&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-gray-800">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Nishkarsh: Your Brand Identity is Your Most Precious Asset</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Understanding <strong>what is trademark</strong> is the essential first step toward building a business that truly transcends a mere sales transaction. It is about constructing a powerful identity that permanently resides in the hearts and minds of your loyal customers. A trademark is your brand&apos;s shield in the competitive arena and its megaphone in the theater of commerce.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        IPR Karo is deeply dedicated to helping Bharat&apos;s ambitious entrepreneurs claim their rightful legal identity in an increasingly complex marketplace. We don&apos;t just file trademarks; we build comprehensive legal fortresses around your entire brand vision. Let us help you define, protect, and confidently scale your identity today. Your mark is not just a symbol; it is the enduring soul of your commercial legacy.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Ready to Own Your Identity?</h2>
                                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                                            Don't leave your brand's soul unprotected. Get an expert consult on your trademark strategy and secure your assets with IPR Karo.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Apply for Your Trademark
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-5 px-14 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult a Specialist
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Expert Basics</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    New to intellectual property? Get our **Founder's IP Starter Kit** for free and learn how to value your brand.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Get Free Kit
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-gray-800">Learn More</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Trademark Ecosystem in India</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Registration Procedures</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Free Availability Search</span>
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
