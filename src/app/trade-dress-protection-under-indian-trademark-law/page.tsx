import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faScaleBalanced,
    faTable,
    faCheckCircle,
    faExclamationTriangle,
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faCheck,
    faPhone,
    faStore,
    faLock,
    faCartShopping,
    faBoxOpen,
    faGavel,
    faBuildingShield,
    faHandshake,
    faStamp,
    faClock,
    faBan,
    faTags,
    faShapes,
    faPalette,
    faCube,
    faShop
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trade Dress Protection in India: Shape & Packaging Guide",
    description: validateAndNormalizeDescription(
        "Learn trade dress protection in India. Master how to trademark product packaging, 3D shape of goods, color combinations, and store layout ambience.",
        "app/trade-dress-protection-under-indian-trademark-law/page.tsx"
    ),
    keywords: [
        "trade dress protection under indian trademark law",
        "can you trademark packaging design in india",
        "trade dress infringement section 2 1 zb trade marks act",
        "bottle shape 3d trademark registration india",
        "store layout trade dress protection india",
        "color combination trademark section 10 india",
        "passing off trade dress delhi high court",
        "shape of goods trademark section 9 3 functionality",
        "product packaging copyright vs trade dress india",
        "3d shape mark graphical representation ip india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trade-dress-protection-under-indian-trademark-law",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trade Dress Protection in India: Shape & Packaging Guide",
        description: "Learn trade dress protection in India. Master how to trademark product packaging, 3D shape of goods, color combinations, and store layout ambience.",
        url: "https://www.iprkaro.com/trade-dress-protection-under-indian-trademark-law",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trade-dress-protection-under-indian-trademark-law.png",
                width: 1200,
                height: 630,
                alt: "Trade Dress Protection in India How to Trademark Product Packaging Shape and Ambience",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trade Dress Protection in India: Shape & Packaging Guide",
        description: "Learn trade dress protection in India. Master how to trademark product packaging, 3D shape of goods, color combinations, and store layout ambience.",
        images: ["https://www.iprkaro.com/images/og/trade-dress-protection-under-indian-trademark-law.png"],
    }
};

const faqs = [
    {
        question: "What is Trade Dress under Indian Trademark Law?",
        answer: "Trade Dress refers to the overall commercial visual image, appearance, and get-up of a product or commercial service that signifies its source to consumers. While the term 'Trade Dress' is not explicitly defined in a single standalone section of the Trade Marks Act, 1999, it is comprehensively protected under Section 2(1)(zb) and Section 2(1)(m), which define a trade mark as including the 'shape of goods, their packaging, and combination of colours'. It covers product containers, label layouts, unique color schemes, and retail interior ambience."
    },
    {
        question: "Can you register a 3D product shape or bottle design as a trademark in India?",
        answer: "Yes. Under Rule 26 of the Trade Marks Rules, 2017, applicants can register three-dimensional (3D) shape marks by filing Form TM-A with IP India. The application must include a precise graphical representation consisting of at least 5 different perspective views (front, back, top, bottom, and isometric profile) accompanied by a concise written description. The shape must possess distinctiveness and must not fall under the statutory exclusions of Section 9(3)."
    },
    {
        question: "What are the Section 9(3) shape exclusions under the Trade Marks Act, 1999?",
        answer: "Section 9(3) prohibits registration if a shape consists exclusively of: (a) The shape of goods which results from the nature of the goods themselves (e.g., an ordinary banana shape for banana chips), (b) The shape of goods necessary to obtain a technical or functional result (the functionality doctrine), or (c) The shape which gives substantial value to the goods (purely aesthetic shapes that drive purchase value independently of brand recognition)."
    },
    {
        question: "Can store layout, interior design, and restaurant ambience be protected as trade dress?",
        answer: "Yes. Indian courts, including the Delhi High Court in landmark rulings involving Starbucks, McDonald's, and Subway, recognize commercial layout, decor theme, color arrangements, and architectural ambience as protectable trade dress under common law passing off. If the layout is distinctive, non-functional, and consistently used across franchises so that consumers associate the visual ambience exclusively with your enterprise, unauthorized imitation can be injuncted."
    },
    {
        question: "What is the difference between Design Registration and Trade Dress Trademark in India?",
        answer: "A Design registered under the Designs Act, 2000 protects novel, original industrial shapes, surface patterns, or aesthetic ornamentation for a maximum statutory term of 15 years (10 initial + 5 renewal). In contrast, Trade Dress protected under the Trade Marks Act, 1999 serves as a source identifier, requires distinctiveness or secondary meaning, and can be renewed indefinitely every 10 years without expiration."
    },
    {
        question: "How do you prove 'Acquired Distinctiveness' for trade dress or packaging in India?",
        answer: "To prove acquired distinctiveness under the Section 9 proviso, the applicant must file a comprehensive User Affidavit on Form TM-U/Rule 25. Evidence includes: (1) Year-wise sales turnover and volume figures, (2) Extensive advertising and marketing expenditure spanning years across print, TV, and digital media, (3) Invoices and distributor networks across multiple Indian states, (4) Consumer perception surveys, and (5) Media coverage establishing that consumers identify the packaging alone with the brand."
    },
    {
        question: "What legal remedies are available against trade dress infringement and copycats in India?",
        answer: "Brand owners can pursue both statutory infringement (for registered 3D shape/device marks under Section 29) and common law passing off suits (under Section 27(2)). Available civil remedies under Section 135 include: (1) Ex-parte ad-interim injunctions restraining manufacturing and sales (Order 39 Rules 1 & 2 CPC), (2) Appointment of Local Commissioners for search and seizure of duplicate stock (Order 26 Rule 9 CPC), (3) Delivery up and destruction of infringing packaging, and (4) Damages or rendition of illicit profits."
    },
    {
        question: "What is the 'Imperfect Recollection' test in trade dress similarity?",
        answer: "Established by the Supreme Court of India in Parle Products v. J.P. & Co. And Cadila Healthcare, the test evaluates whether an average consumer with ordinary intelligence and 'imperfect recollection' would be deceived by the overall visual get-up, color arrangement, and structural appearance when seeing the competitor's packaging in isolation, without side-by-side comparison."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "legal-definition", title: "Statutory Framework" },
    { id: "core-elements", title: "4 Core Elements" },
    { id: "shape-exclusions", title: "Section 9(3) Exclusions" },
    { id: "landmark-precedents", title: "Landmark Court Rulings" },
    { id: "filing-process", title: "7-Step Filing Workflow" },
    { id: "trade-dress-vs-design", title: "Trade Dress vs Design" },
    { id: "matrix-table", title: "Protection Matrix" },
    { id: "litigation-remedies", title: "Litigation & Enforcement" },
    { id: "action-checklist", title: "Brand Action Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "strategic-takeaway", title: "Strategic IP Advice" },
];

export default function TradeDressProtectionPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Trade Dress Protection in India: How to Trademark Product Packaging, Shape & Ambience",
        "description": "Learn trade dress protection in India. Master how to trademark product packaging, 3D shape of goods, color combinations, and store layout ambience.",
        "image": "https://www.iprkaro.com/images/og/trade-dress-protection-under-indian-trademark-law.png",
        "datePublished": "2026-09-28T09:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": {
            "@type": "Person",
            "name": "Rahul Roy",
            "url": "https://www.iprkaro.com/about-us",
            "image": "https://www.iprkaro.com/images/author/rahul-roy.jpg"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trade-dress-protection-under-indian-trademark-law"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trade Dress Protection in India: Shape & Packaging Guide",
        "url": "https://www.iprkaro.com/trade-dress-protection-under-indian-trademark-law",
        "description": "Learn trade dress protection in India. Master how to trademark product packaging, 3D shape of goods, color combinations, and store layout ambience.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trade-dress-protection-under-indian-trademark-law#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trade-dress-protection-under-indian-trademark-law#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trade Dress Protection Guide", "item": "https://www.iprkaro.com/trade-dress-protection-under-indian-trademark-law" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Register Trade Dress and 3D Shape Trademarks in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Distinctiveness Assessment & Functionality Clearance" },
            { "@type": "ListItem", "position": 2, "name": "Prepare Multi-Angle 2D & 3D Isometric Graphical Representations" },
            { "@type": "ListItem", "position": 3, "name": "Draft Precise Written Shape & Color Get-Up Description" },
            { "@type": "ListItem", "position": 4, "name": "Compile Acquired Distinctiveness Evidence & Rule 25 User Affidavit" },
            { "@type": "ListItem", "position": 5, "name": "E-File Form TM-A under Nice Classification on IP India Portal" },
            { "@type": "ListItem", "position": 6, "name": "Overcome Section 9(3) Functionality Objections during Examination" },
            { "@type": "ListItem", "position": 7, "name": "Secure Registration Certificate & Deploy Market Anti-Counterfeiting Protocol" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-purple-50 border border-purple-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faShapes} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Advanced IP Protection &amp; 3D Trademarks</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trade Dress Protection Under <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Indian Trademark Law</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">In modern commerce, consumer purchasing decisions are heavily influenced by the visual get-up, iconic 3D container shapes, distinctive color palettes, and retail atmosphere of a brand. When competitors slavishly copy your packaging or store layout without using your exact word mark, traditional brand enforcement can falter. Learn how Indian trademark law protects trade dress under Section 2(1)(zb), overcome Section 9(3) shape functionality hurdles, navigate landmark Delhi High Court precedents, and secure perpetual proprietary rights for your product packaging and commercial ambience.</p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Trademark Research Specialist</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 28-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-purple-50 rounded-full px-3 py-1 border border-purple-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-purple-900">🛡️ Statutory Legal Analysis</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Protect Your Trade Dress Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-purple-400" />
                                    Call Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trade-dress-protection-under-indian-trademark-law.png"
                                    alt="Trade Dress Protection in India How to Trademark Product Packaging Shape and Ambience"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Trade Dress Protection Guide", href: "/trade-dress-protection-under-indian-trademark-law" }
                    ]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        <main className="min-w-0">
                            {/* MOBILE TABLE OF CONTENTS - COLLAPSIBLE ACCORDION */}
                            <div className="lg:hidden mb-6 not-prose">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <div>
                                                <span className="text-sm font-bold text-gray-900 block">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Topics)</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:hidden">
                                                Tap to Expand
                                            </span>
                                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full hidden group-open:inline-block">
                                                Close
                                            </span>
                                            <svg className="w-4 h-4 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div></summary><div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70"><nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{tocSections.map((section, idx) => (<a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                ><span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span><span className="truncate">{section.title}</span></a>))}</nav></div></details></div><div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content"><article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal"><div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose"><img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" /><div><p className="text-sm font-bold text-gray-900 m-0">Written by<Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShapes} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trade Dress Protection
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Trade dress in India represents the overall commercial look, get-up, packaging design, 3D container shape, color combinations, and store layout ambience that distinguish a business&apos;s goods or services from competitors. Governed by Section 2(1)(zb) and Section 2(1)(m) of the Trade Marks Act, 1999, non-functional trade dress can be registered as a 3D shape or device mark with IP India on Form TM-A or protected under common law passing off. Once distinctiveness or secondary meaning is established, trade dress enjoys perpetual protection renewable every 10 years.</p>
                                        </div>

                                        <p className="mb-6">When consumers walk into a supermarket aisle, glance at a boutique retail outlet, or scroll through an e-commerce catalog, they rarely read every syllable of a product label. Instead, their cognitive recognition is triggered by familiar visual cues: the golden wrapper and fluted brown cup of a luxury chocolate, the unique bulbous contour of a spirit bottle, the distinctive purple wrapper of a confectionery bar, or the minimalist wood-and-green aesthetic of an international coffeehouse.</p>
                                        <p className="mb-6">In intellectual property law, this holistic visual ensemble is recognized as<strong>Trade Dress</strong>. Unscrupulous competitors frequently attempt to capitalize on established market goodwill by replicating the overall get-up, color placement, and physical proportions of market leaders while placing a slightly altered phonetic name on the front. Under Indian jurisprudence, such conduct is strictly actionable as commercial misappropriation and passing off.</p>
                                        <p className="mb-6">Whether you are scaling a fast-moving consumer goods (FMCG) enterprise, launching cosmetic lines via<Link href="/trademark-for-d2c-brand-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for D2C brands</Link>, designing apparel packaging through<Link href="/trademark-for-clothing-brand" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for clothing brands</Link>, or selling on online portals via<Link href="/trademark-for-ecommerce" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for e-commerce</Link>, building a formidable trade dress protection strategy is critical to securing your market share.</p>
                                    </section>

                                    {/* SECTION 2: STATUTORY FRAMEWORK */}
                                    <section id="legal-definition" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Framework under Trade Marks Act
                                        </h2>
                                        <p className="mb-6">Although the exact term &ldquo;Trade Dress&rdquo; is a common law doctrine originating from US and English jurisprudence, the<strong>Trade Marks Act, 1999</strong>codified expansive statutory definitions to encompass all visual and physical brand signifiers:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Section 2(1)(zb) – The Definition of Trade Mark</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 2(1)(zb) defines a &ldquo;trade mark&rdquo. As a mark capable of being represented graphically and capable of distinguishing goods or services of one person from those of others. Crucially, the section explicitly states that a trade mark<em>&ldquo;may include shape of goods, their packaging and combination of colours.&rdquo;</em>This statutory clause forms the bedrock of Indian trade dress protection.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Section 2(1)(m) – The Expansive Scope of a &lsquo;Mark&rsquo;</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 2(1)(m) clarifies that a &ldquo;mark&rdquo; includes a device, brand, heading, label, ticket, name, signature, word, letter, numeral,<strong>shape of goods, packaging or combination of colours</strong>or any combination thereof. This allows multi-layered registrations uniting structural contours with graphic art. Learn more in our comparative guide on<Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark vs device mark in India</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Section 2(1)(q) – Statutory Scope of &lsquo;Package&rsquo;</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Act broadly defines &ldquo;package&rdquo. To include any case, box, container, covering, folder, receptacle, vessel, casket, bottle, wrapper, label, band, ticket, reel, frame, capsule, cap, lid, stopper, and cork. Every tangible layer enveloping a product falls within the protective scope of Indian trademark law.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Section 27(2) &amp; Section 29 – Dual Protection Tracks</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Trade dress enjoys dual legal remedies: registered trade dress is protected against statutory infringement under Section 29, while unregistered trade dress with established goodwill is protected against passing off under Section 27(2). Understand key differences in our analysis of<Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement in India</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: 4 CORE ELEMENTS OF TRADE DRESS */}
                                    <section id="core-elements" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCube} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            4 Core Elements of Protectable Trade Dress
                                        </h2>
                                        <p className="mb-6">Trade dress extends beyond flat two-dimensional logos. In Indian commercial law, trade dress claims generally fall into four distinct categories:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5 text-[#6E5E93] mr-2.5" />
                                                    1. Product Packaging &amp; Get-Up
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">The total visual arrangement of packaging elements, including typography placement, graphic illustrations, metallic foil finishes, borders, color gradients, and overall box dimensions.</p>
                                                <p className="text-xs text-gray-500 m-0"><strong>Classic Example:</strong>The distinct gold foil wrapping, brown fluted cup, and oval label arrangement of Ferrero Rocher chocolates.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faShapes} className="w-5 h-5 text-[#6E5E93] mr-2.5" />
                                                    2. 3D Shape of Goods &amp; Containers
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">Three-dimensional physical configurations of products or their containers that act as immediate source identifiers independently of written text.</p>
                                                <p className="text-xs text-gray-500 m-0"><strong>Classic Example:</strong>The iconic contour flute of the Coca-Cola glass bottle, the triangular prism shape of Toblerone chocolate, or bulbous perfume flacons.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faPalette} className="w-5 h-5 text-[#6E5E93] mr-2.5" />
                                                    3. Colour Schemes &amp; Combinations
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">Under Section 10 of the Act, unique color combinations applied in specific geometric patterns or proportions that consumers associate with a single manufacturer.</p>
                                                <p className="text-xs text-gray-500 m-0"><strong>Classic Example:</strong>The red and white 50:50 ratio packaging of Colgate toothpaste, or the distinctive yellow-and-green scheme of Subway.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faShop} className="w-5 h-5 text-[#6E5E93] mr-2.5" />
                                                    4. Store Ambience &amp; Service Decor
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">The architectural layout, interior color schemes, seating arrangements, staff uniform styling, lighting motifs, and customer journey in commercial establishments.</p>
                                                <p className="text-xs text-gray-500 m-0"><strong>Classic Example:</strong>The distinctive industrial-rustic store layout, wood counters, and chalk menu boards of Starbucks outlets.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: SECTION 9(3) SHAPE EXCLUSIONS */}
                                    <section id="shape-exclusions" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-red-500" />
                                            Section 9(3) Absolute Exclusions for Shapes
                                        </h2>
                                        <p className="mb-6">While the law encourages registering innovative 3D shapes, Section 9(3) of the Trade Marks Act, 1999 imposes strict statutory prohibitions to prevent anti-competitive monopolies over functional or generic industrial designs. A shape mark will be refused registration if it consists exclusively of:</p>

                                        <div className="space-y-6">
                                            <div className="bg-red-50/60 border border-red-200 p-6 rounded-2xl not-prose">
                                                <h3 className="text-lg font-bold text-red-950 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-600 mr-2" />
                                                    Section 9(3)(a) – Shape Resulting from the Nature of the Goods
                                                </h3>
                                                <p className="text-sm text-red-900 leading-relaxed mb-2">Shapes that naturally or inevitably emerge from the inherent physical characteristics of the product cannot be registered. For example, a spherical shape for tennis balls or an oblong shape for a rugby ball cannot be monopolized by one brand, as all competitors must use that shape to manufacture the good.</p>
                                            </div>

                                            <div className="bg-red-50/60 border border-red-200 p-6 rounded-2xl not-prose">
                                                <h3 className="text-lg font-bold text-red-950 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-600 mr-2" />
                                                    Section 9(3)(b) – Technical Functionality Doctrine
                                                </h3>
                                                <p className="text-sm text-red-900 leading-relaxed mb-2">If a 3D shape is designed purely to achieve a technical, mechanical, or utilitarian result (e.g., grooves engineered for aerodynamic cooling or ergonomic grip that reduces manufacturing friction), it must be protected via patent law, not trademark law. Granting perpetual trademark rights to functional engineering would stifle technological innovation.</p>
                                            </div>

                                            <div className="bg-red-50/60 border border-red-200 p-6 rounded-2xl not-prose">
                                                <h3 className="text-lg font-bold text-red-950 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-600 mr-2" />
                                                    Section 9(3)(c) – Shape Giving Substantial Value to the Goods
                                                </h3>
                                                <p className="text-sm text-red-900 leading-relaxed mb-2">If consumers purchase an item primarily for the intrinsic aesthetic beauty or decorative value of its shape (e.g., a sculptural crystal cut vase or luxury jewelry geometry) rather than recognizing the shape as a brand logo, the shape belongs under the Designs Act, 2000 and is excluded from trademark registration.</p>
                                            </div>
                                        </div>

                                        <p className="mt-6 text-sm text-gray-600"><strong>Key Legal Strategy:</strong>To overcome Section 9(3) examination objections, the applicant must demonstrate that the shape contains arbitrary, capricious, non-functional flourishes, and that through extensive commercial use, the shape has acquired secondary meaning as a source identifier. If your mark faces examination challenges, review our guide on<Link href="/trademark-objected-what-to-do-next" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark objection procedures</Link>and<Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 9 absolute grounds for refusal</Link>.</p>
                                    </section>

                                    {/* SECTION 5: LANDMARK COURT RULINGS */}
                                    <section id="landmark-precedents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Trade Dress Precedents in India
                                        </h2>
                                        <p className="mb-6">Indian jurisprudence on trade dress has evolved through pivotal judgments delivered by the Supreme Court of India and the Delhi and Bombay High Courts:</p>

                                        <div className="space-y-6">
                                            <div className="border border-purple-200 bg-purple-50/30 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Colgate Palmolive Co. v. Anchor Health &amp; Beauty Care Pvt. Ltd. (2003 Delhi HC)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>The Core Ruling:</strong>The Delhi High Court held that trade dress protection is firmly recognized in Indian trademark law. Anchor adopted a red and white color combination in a 50:50 ratio on its dental cream packaging, closely mirroring Colgate&apos;s longstanding packaging get-up.</p>
                                                <p className="text-xs text-gray-600 italic m-0">&ldquo;If another person adopts the same colour combination and get-up for the same goods, a customer of average intelligence and imperfect recollection is bound to be confused. It is the overall get-up and visual impact that matters, not microscopic differences.&rdquo;</p>
                                            </div>

                                            <div className="border border-indigo-200 bg-indigo-50/30 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Gorbatschow Wodka KG v. John Distilleries Ltd. (2011 Bombay HC)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>The 3D Bottle Shape Precedent:</strong>Gorbatschow sued John Distilleries for adopting a bottle shape resembling the bulbous dome architecture of Russian Orthodox churches for its &ldquo;Salute&rdquo; vodka. The Bombay High Court affirmed that under the Trade Marks Act 1999, the shape of goods/containers constitutes a mark, and copying a distinctive non-functional bottle shape amounts to passing off and dilution.</p>
                                            </div>

                                            <div className="border border-purple-200 bg-purple-50/30 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Ferrero Spa v. Ruchi International (Delhi HC)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Packaging Get-Up Protection:</strong>The Delhi High Court protected Ferrero Rocher&apos;s distinctive packaging (golden foil spherical packaging, brown pleated paper cup, white label, and transparent box) against a Chinese copycat product named &ldquo;Golden Passion&rdquo;. The court held that the entire get-up constituted an iconic, protectable trade dress.</p>
                                            </div>

                                            <div className="border border-indigo-200 bg-indigo-50/30 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">4. Parle Products (P) Ltd. v. J.P. &amp; Co. (Supreme Court of India)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>The Imperfect Recollection Doctrine:</strong>The Supreme Court established that when comparing wrapper designs (Parle-G biscuit packet vs a competing brand depicting a girl with hay), the court must not place them side-by-side. Instead, the test is whether an ordinary purchaser remembering the overall visual impression would mistake the defendant&apos;s wrapper for the plaintiff&apos;s.</p>
                                            </div>

                                            <div className="border border-purple-200 bg-purple-50/30 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">5. Starbucks Corp. v. Sardarbukhsh Coffee &amp; Co. (2018 Delhi HC)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>Ambience &amp; Store Branding Protection:</strong>The Delhi High Court restrained the defendants from using a circular green logo, wavy borders, and overall retail aesthetic deceptively similar to Starbucks. This results in the defendant rebranding to &ldquo;Sardar-Ji-Bakhsh Coffee &amp. Co.&rdquo. And altering their visual identity.</p>
                                            </div>
                                        </div>

                                        <p className="mt-6 text-sm text-gray-600">For more landmark judgments, explore our dedicated analysis on<Link href="/famous-trademark-infringement-cases-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">famous trademark infringement cases in India</Link>.</p>
                                    </section>

                                    {/* SECTION 6: STEP-BY-STEP FILING WORKFLOW */}
                                    <section id="filing-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Trade Dress Registration Process
                                        </h2>
                                        <p className="mb-6">Registering a 3D shape or product trade dress on Form TM-A with IP India requires meticulous technical drafting and evidentiary compliance:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 1: Distinctiveness &amp; Non-Functionality Clearance</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Conduct prior art searches on the IP India database, Design Office registers, and global WIPO/TMView archives. Audit the shape to confirm it does not perform a purely utilitarian function under Section 9(3)(b).</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 2: Multi-View Graphical Representation (Rule 26)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Under Rule 26 of the Trade Marks Rules, 2017, generate high-resolution two-dimensional graphical drawings illustrating at least 5 distinct perspective angles: Front, Back, Left Side, Top, and Isometric 3D view. All non-claimed features must be indicated in broken/dashed lines.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 3: Draft Precise Shape &amp; Colour Claim Description</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Draft an unambiguous written description declaring the exact visual features for which protection is claimed (e.g., &ldquo;The trade mark consists of the 3D shape of a hexagonal fluted glass bottle with embossed concentric ridges, as depicted in the accompanying representations&rdquo;). Include Pantone/CMYK codes for color combinations under Section 10.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 4: Execute Rule 25 User Affidavit with Commercial Evidence</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If claiming prior commercial use, draft a stamped User Affidavit under Rule 25 annexing audited sales invoices, advertising spends, packaging print orders, and customer perception surveys proving acquired secondary meaning. Learn the statutory format in our<Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit format guide</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 5: E-File Form TM-A on IP India Portal</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Submit Form TM-A selecting the category &ldquo;Shape of Goods&rdquo; or &ldquo;Device Mark&rdquo; under the appropriate Nice Classification (Classes 1–34 for goods, Classes 35–45 for service ambience). Check your exact class in our<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>and<Link href="/types-of-trademark-classes" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class guide</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 6: Examination &amp; Overcoming Registry Objections</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Respond to Examination Reports issued by the Trademark Examiner under Section 9(1) or 9(3) with robust legal arguments, judicial citations (Colgate, Gorbatschow), and evidence of distinctiveness. Attend virtual hearings before the Senior Examiner if required.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 7: Journal Publication &amp; Registration Certificate</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Upon passing examination, the mark is advertised in the Trade Marks Journal for a 4-month opposition window. In the absence of third-party opposition, IP India issues the official Trademark Registration Certificate on Form TM-RG granting 10 years of statutory monopoly, renewable perpetually.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: TRADE DRESS VS DESIGN REGISTRATION */}
                                    <section id="trade-dress-vs-design" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trade Dress vs Design Registration in India
                                        </h2>
                                        <p className="mb-6">Founders frequently grapple with whether to register a product shape under the<strong>Designs Act, 2000</strong>or the<strong>Trade Marks Act, 1999</strong>. The following comparison highlights the core distinctions:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm text-left">
                                                <thead className="bg-[#6E5E93] text-white">
                                                    <tr>
                                                        <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider">Feature</th>
                                                        <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider">Trade Dress (Trade Marks Act 1999)</th>
                                                        <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider">Design (Designs Act 2000)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Primary Objective</td>
                                                        <td className="py-3 px-4">Source identification and brand reputation protection</td>
                                                        <td className="py-3 px-4">Monopoly over novel visual shape and aesthetic appearance</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Duration of Monopoly</td>
                                                        <td className="py-3 px-4 font-semibold text-green-700">Perpetual (Renewable every 10 years indefinitely)</td>
                                                        <td className="py-3 px-4 font-semibold text-red-700">Maximum 15 Years (10 years + 5 year renewal, then public domain)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Novelty Requirement</td>
                                                        <td className="py-3 px-4">Novelty not required; requires distinctiveness or secondary meaning</td>
                                                        <td className="py-3 px-4">Absolute novelty required (must not be published anywhere before filing)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Prior Commercial Use</td>
                                                        <td className="py-3 px-4 text-green-700 font-semibold">Allowed and highly beneficial to establish goodwill</td>
                                                        <td className="py-3 px-4 text-red-700 font-semibold">Fatal; prior commercial use destroys novelty and invalidates design</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Remedies for Infringement</td>
                                                        <td className="py-3 px-4">Statutory infringement + Common law passing off + Criminal remedies</td>
                                                        <td className="py-3 px-4">Civil piracy suit under Section 22 (Statutory damages capped unless actual loss proven)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Composite Suit Status</td>
                                                        <td className="py-3 px-4" colSpan={2}> Per the Full Bench Delhi High Court ruling in <em>Carlsberg Breweries v. Som Distilleries (2018)</em>, a plaintiff can join a claim for design infringement with a claim for passing off of trade dress in a single composite suit. </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 8: PROTECTION MATRIX TABLE */}
                                    <section id="matrix-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trade Dress Protection Matrix
                                        </h2>
                                        <p className="mb-6">Use this operational decision matrix to determine the optimal intellectual property strategy for your brand assets:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-purple-950 mb-2">3D Shape of Product / Bottle</h3>
                                                <ul className="text-xs text-purple-900 space-y-2 list-disc list-inside">
                                                    <li>File Form TM-A with 5-view graphical drawings under Rule 26.</li>
                                                    <li>Include non-functionality declaration.</li>
                                                    <li>Annex Rule 25 User Affidavit if marketed extensively.</li>
                                                    <li>Best for beverage bottles, cosmetic jars, luxury perfume flacons.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200">
                                                <h3 className="text-base font-bold text-indigo-950 mb-2">Packaging Box / Wrapper Get-Up</h3>
                                                <ul className="text-xs text-indigo-900 space-y-2 list-disc list-inside">
                                                    <li>File as Device Mark with full color claim under Section 10.</li>
                                                    <li>Secure Copyright Registration on Form XIV for artwork layout.</li>
                                                    <li>Register under Nice Classes matching physical goods (Classes 1–34).</li>
                                                    <li>Best for FMCG food packets, pharmaceutical cartons, D2C boxes.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-purple-950 mb-2">Store Layout / Theme Ambience</h3>
                                                <ul className="text-xs text-purple-900 space-y-2 list-disc list-inside">
                                                    <li>Protect via Common Law Passing Off and Section 2(1)(zb).</li>
                                                    <li>Register retail/restaurant service mark under Class 35 or Class 43.</li>
                                                    <li>Document architectural blueprints, color schemes, and photo catalogs.</li>
                                                    <li>Best for restaurant chains, salon franchises, flagship retail outlets.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: LITIGATION & ENFORCEMENT */}
                                    <section id="litigation-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Enforcement &amp; Litigation Remedies in India
                                        </h2>
                                        <p className="mb-6">When a competitor launches a copycat product imitating your trade dress, swift judicial intervention is essential to prevent market dilution. Indian Commercial Courts provide powerful relief mechanisms under the<strong>Commercial Courts Act, 2015</strong>and the<strong>Trade Marks Act, 1999</strong>:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-purple-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Cease-and-Desist Legal Notice</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Issue a comprehensive legal notice detailing your prior user rights, trademark registration, side-by-side photographic comparisons demonstrating deceptive similarity, and statutory demand to recall infringing stock within 7 days. Learn how to draft and respond in our guide on<Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">responding to trademark infringement notices</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Ex-Parte Ad-Interim Injunction (Order 39 Rules 1 &amp; 2 CPC)</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Commercial Courts can grant urgent restraining orders without prior notice to the defendant if the plaintiff establishes a prima facie case, balance of convenience, and irreparable injury. The injunction immediately halts the manufacturing, packaging, marketing, and distribution of the lookalike goods.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Local Commissioner Appointment for Search &amp; Seizure (Order 26 Rule 9 CPC)</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The court appoints an independent advocate as Local Commissioner with police assistance to execute surprise search and seizure operations at the infringer&apos;s factories and warehouses, impounding infringing packaging molds, printing dies, and inventory.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Delivery Up, Destruction &amp; Damages (Section 135)</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Final decrees mandate the complete destruction of all infringing packaging materials, alongside punitive damages or an account of illicit profits under Section 135. Learn more about statutory liabilities in our guide on<Link href="/penalty-for-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">penalties for trademark infringement in India</Link>and<Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">how to stop trademark infringement</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: BRAND ACTION CHECKLIST */}
                                    <section id="action-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trade Dress Protection Action Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Audit Visual Assets:</strong>Identify distinctive 3D bottle shapes, container geometries, wrapper graphics, and store layouts across your product portfolio.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Clear Functionality Obstacles:</strong>Ensure the 3D contour is aesthetic/arbitrary and does not perform an exclusively technical or functional engineering role.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Prepare 5-View Isometric Drawings:</strong>Draft high-precision technical drawings with dashed lines for non-claimed structural parts under Rule 26.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Compile Evidence of Secondary Meaning:</strong>Organize historical sales ledger excerpts, national marketing invoices, and customer recognition surveys.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>E-File Form TM-A with IP India:</strong>Submit applications under Nice goods/services classifications with explicit shape and color claims.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Deploy Brand Gating on E-Commerce:</strong>Register approved packaging marks on<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry</Link>and<Link href="/flipkart-brand-approval-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Flipkart Brand Lock</Link>to block marketplace hijackers.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Continuous Market Surveillance:</strong>Monitor physical wholesale markets and e-commerce portals to detect lookalike packaging early.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 12: FINAL STRATEGIC ADVICE */}
                                    <section id="strategic-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Trade Dress Legal Advice
                                        </h2>
                                        <p className="mb-6">Securing trade dress protection transforms your product packaging and physical architecture from passive commercial wrappers into enduring intangible assets. In an era where copycats rapidly mimic brand names, a fortified trade dress creates an unbreachable moat around your enterprise goodwill.</p>
                                        <p className="mb-6">Do not wait for a counterfeit lookalike to erode your customer trust. Partner with experienced trademark attorneys to audit your visual assets, file compliant 3D shape applications on Form TM-A, and enforce your trade dress across offline distribution networks and online marketplaces. Explore our guides on<Link href="/difference-between-tm-and-r-symbol-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">difference between TM and R symbol</Link>,<Link href="/difference-between-trademark-registration-and-copyright-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark vs copyright registration</Link>, and<Link href="/trademark-refused-what-are-options" className="text-[rgb(110,94,147)] hover:underline font-medium">options when trademark is refused</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        3D Shape &amp; Trade Dress Registration
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Product Packaging &amp; Ambience Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Secure your official 3D trademark registration with IP India, draft airtight graphical descriptions, and stop lookalike competitors from copying your product get-up.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Attorney Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • 3D Shape Clearances • High Court Trade Dress Litigation Support</p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-4 sticky top-24">
                            {/* About Author */}
                            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-16 h-16 rounded-full mb-2.5 shadow-md object-cover border-2 border-[#6E5E93]/20" />
                                <h3 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h3>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in trade dress protection, 3D shape trademarks, color marks, and brand enforcement litigation under Indian IP laws.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Protect Your Trade Dress</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Have a unique packaging, shape, or store design? Consult registered trademark attorneys today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Consult IP Attorney
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Word vs Device Mark</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs Infringement</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit Rules</span></Link></li>
                                    <li><Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Famous TM Cases</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Notice Reply</span></Link></li>
                                    <li><Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStore} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Amazon Brand Registry</span></Link></li>
                                    <li><Link href="/flipkart-brand-approval-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faLock} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Flipkart Brand Lock</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/competitor-bidding-on-my-trademark-google-ads-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Google Ads TM Bidding</span></Link></li>
                                    <li><Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Police Raid Sec 115</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
