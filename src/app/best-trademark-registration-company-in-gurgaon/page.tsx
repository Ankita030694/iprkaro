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
    faBuilding,
    faAward,
    faCity,
    faMapMarkerAlt,
    faRocket,
    faHandshake,
    faGavel,
    faStar
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Best Trademark Registration Company in Gurgaon | IPR Karo",
    description: validateAndNormalizeDescription(
        "Discover why IPR Karo is the best trademark registration company in Gurgaon. Expert brand search, filing, and legal IP protection for businesses.",
        "app/best-trademark-registration-company-in-gurgaon/page.tsx"
    ),
    keywords: [
        "best trademark registration company in gurgaon",
        "trademark registration company gurgaon",
        "trademark lawyers gurgaon",
        "top trademark attorney gurgaon",
        "brand registration gurgaon ipr karo",
        "trademark filing cyber city gurgaon",
        "ipr karo gurgaon trademark",
        "delhi registry trademark filing gurgaon"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/best-trademark-registration-company-in-gurgaon",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Best Trademark Registration Company in Gurgaon | IPR Karo",
        description: "Discover why IPR Karo is the best trademark registration company in Gurgaon. Expert brand search, filing, and legal IP protection for businesses.",
        url: "https://www.iprkaro.com/best-trademark-registration-company-in-gurgaon",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/best-trademark-registration-company-in-gurgaon.png",
                width: 1200,
                height: 630,
                alt: "Best Trademark Registration Company in Gurgaon - IPR Karo legal brand protection",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Trademark Registration Company in Gurgaon | IPR Karo",
        description: "Discover why IPR Karo is the best trademark registration company in Gurgaon. Expert brand search, filing, and legal IP protection for businesses.",
        images: ["https://www.iprkaro.com/images/og/best-trademark-registration-company-in-gurgaon.jpg"],
    }
};

const faqs = [
    {
        question: "Why is IPR Karo rated as the best trademark registration company in Gurgaon?",
        answer: "IPR Karo is recognized as the premier trademark registration company in Gurgaon because it blends proprietary AI-driven trademark search with seasoned intellectual property attorneys. We offer end-to-end brand protection, transparent flat pricing, rapid 24-hour filing, and specialized advocacy before the Delhi Trade Marks Registry in Dwarka, protecting over 5,000 corporate brands and startups."
    },
    {
        question: "Which Trademark Registry has jurisdiction over Gurgaon companies?",
        answer: "Although Gurgaon (Gurugram) is situated in Haryana, trademark jurisdiction for all Gurgaon-registered enterprises falls under the Trade Marks Registry in Dwarka, New Delhi. IPR Karo's trademark advocates represent corporate clients directly before the Delhi Registry for examinations, opposition proceedings, and formal hearings."
    },
    {
        question: "Can Gurgaon startups and MSMEs receive government fee discounts?",
        answer: "Yes, eligible startups recognized under the DPIIT Startup India scheme and MSMEs holding valid Udyam certificates receive a 50% statutory fee waiver from the Trade Marks Registry. The government official filing fee drops from ₹9,000 per class for standard companies to ₹4,500 per class for qualifying startups, micro-enterprises, and individual proprietors."
    },
    {
        question: "What documents are required to register a trademark in Gurgaon?",
        answer: "For private limited companies and LLPs, required documents include the Certificate of Incorporation, Udyam MSME certificate (for fee discount), logo or brand representation, and an authorized signatory's Power of Attorney (Form TM-48). Sole proprietors need a PAN card, Aadhaar card, logo, and a signed user affidavit with commercial invoices if claiming prior usage."
    },
    {
        question: "How long does trademark registration take for a Gurgaon business?",
        answer: "Upon filing Form TM-A with IPR Karo, your official trademark application number and government filing receipt are issued within 24 hours, granting immediate rights to display the ™ symbol. The complete registration journey through examination, journal advertisement, and final registration certificate issuance generally takes 6 to 12 months."
    },
    {
        question: "How does IPR Karo overcome trademark objections under Section 9 or 11?",
        answer: "When an examination report raises objections under Section 9 (lack of distinctiveness) or Section 11 (similarity to earlier trademarks), IPR Karo's legal specialists formulate an evidence-backed written response within 30 days. We document acquired goodwill, present comparative distinctions, and argue your case before the Delhi Registry hearing officers."
    },
    {
        question: "Does IPR Karo offer ongoing trademark monitoring after registration?",
        answer: "Yes, IPR Karo provides comprehensive trademark watch and monitoring services across the official Trade Marks Journal and digital marketplaces. If a competitor attempts to register an identical or deceptively similar mark, our surveillance system alerts you immediately so our attorneys can file timely opposition notices within the statutory 4-month window."
    },
    {
        question: "Do Gurgaon founders need to physically visit the Delhi Trademark Registry?",
        answer: "No, physical visits are not required. The entire trademark registration workflow managed by IPR Karo is 100% digitalized. From initial brand clearance and documentation to online filing and virtual registry hearing representations, our legal team manages all procedures while providing live milestone tracking."
    }
];

const tocSections = [
    { id: "why-choose-ipr-karo", title: "Why Choose IPR Karo?" },
    { id: "our-services", title: "Our Gurgaon TM Services" },
    { id: "corporate-landscape", title: "Gurgaon Business IP Needs" },
    { id: "comparison", title: "IPR Karo vs Other Firms" },
    { id: "registration-process", title: "7-Step Filing Process" },
    { id: "documents-required", title: "Documents Required" },
    { id: "timeline-stages", title: "Timelines & Milestones" },
    { id: "objection-opposition", title: "Objection & Opposition" },
    { id: "business-hubs", title: "Gurgaon Hubs We Serve" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Secure Your Gurgaon Brand" },
];

export default function BestTrademarkRegistrationCompanyGurgaonPage() {
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
        "headline": "Best Trademark Registration Company in Gurgaon: IPR Karo",
        "description": "Discover why IPR Karo is the best trademark registration company in Gurgaon. Expert brand search, filing, and legal IP protection for businesses.",
        "image": "https://www.iprkaro.com/images/og/best-trademark-registration-company-in-gurgaon.png",
        "datePublished": "2024-03-24T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/best-trademark-registration-company-in-gurgaon"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Best Trademark Registration Company in Gurgaon | IPR Karo",
        "url": "https://www.iprkaro.com/best-trademark-registration-company-in-gurgaon",
        "description": "Discover why IPR Karo is the best trademark registration company in Gurgaon. Expert brand search, filing, and legal IP protection for businesses.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/best-trademark-registration-company-in-gurgaon#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/best-trademark-registration-company-in-gurgaon#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Best Trademark Registration Company in Gurgaon", "item": "https://www.iprkaro.com/best-trademark-registration-company-in-gurgaon" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Trademark Registration Process in Gurgaon",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Comprehensive Brand Clearance & AI Search" },
            { "@type": "ListItem", "position": 2, "name": "Appropriate Trademark Class Identification" },
            { "@type": "ListItem", "position": 3, "name": "Document Verification & Power of Attorney Signing" },
            { "@type": "ListItem", "position": 4, "name": "Online Filing of Form TM-A with Immediate TM Receipt" },
            { "@type": "ListItem", "position": 5, "name": "Examination Monitoring & Legal Response to Objections" },
            { "@type": "ListItem", "position": 6, "name": "Publication in Trade Marks Journal & Opposition Defense" },
            { "@type": "ListItem", "position": 7, "name": "Issuance of Final Trademark Registration Certificate" }
        ]
    };

    const legalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "IPR Karo - Trademark Registration Services Gurgaon",
        "image": "https://www.iprkaro.com/images/og/best-trademark-registration-company-in-gurgaon.png",
        "url": "https://www.iprkaro.com/best-trademark-registration-company-in-gurgaon",
        "telephone": "+91-9289707648",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurgaon",
            "addressRegion": "Haryana",
            "addressCountry": "IN"
        },
        "areaServed": [
            "Gurgaon",
            "Gurugram",
            "DLF Cyber City",
            "Udyog Vihar",
            "Golf Course Road",
            "Sohna Road",
            "Manesar",
            "Delhi NCR"
        ],
        "description": "IPR Karo provides premier trademark registration, clearance search, objection handling, and brand protection services for companies and startups across Gurgaon."
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />
            <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />

            {/* HERO SECTION */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faAward} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Top Rated IP Legal Firm in Gurgaon & NCR</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Best <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Registration Company in Gurgaon</span>: IPR Karo
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Fortify your brand identity in the Millennium City with India&apos;s leading tech-enabled intellectual property company. From Cyber City tech innovators and Golf Course Road corporate headquarters to Udyog Vihar manufacturers, IPR Karo delivers end-to-end trademark registration, rigorous clearance searches, and specialized legal advocacy before the Delhi Registry in Dwarka. Protect your logos, slogans, and product names with zero hassle, transparent flat pricing, and maximum legal security.
                            </p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 September 2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 10 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified IP Legal Firm</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/our-services/trademark-registration" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Register Trademark Online <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Expert: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/best-trademark-registration-company-in-gurgaon.png"
                                    alt="Best Trademark Registration Company in Gurgaon - IPR Karo legal and corporate brand protection"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMB NAVIGATION */}
            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Best Trademark Registration Company in Gurgaon", href: "/best-trademark-registration-company-in-gurgaon" }
                    ]} />
                </div>
            </div>

            {/* MAIN CONTENT LAYOUT */}
            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        {/* LEFT SIDEBAR: STICKY TABLE OF CONTENTS */}
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* CENTER CONTENT */}
                        <main className="min-w-0">
                            {/* MOBILE TABLE OF CONTENTS */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    {/* Author Row */}
                                    <div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose">
                                        <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 m-0">Written by <Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist, IPR Karo</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: WHY CHOOSE IPR KARO */}
                                    <section id="why-choose-ipr-karo" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faAward} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Why Choose IPR Karo in Gurgaon?
                                        </h2>

                                        {/* QUICK ANSWER BLOCK */}
                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                IPR Karo is recognized as the best trademark registration company in Gurgaon by uniting artificial intelligence search technology with seasoned intellectual property attorneys. We handle direct online filings before the Delhi Trade Marks Registry (Dwarka), provide immediate 24-hour application numbers, maintain transparent flat pricing without hidden legal fees, and have successfully protected over 5,000 corporate brands across Gurgaon&apos;s dynamic tech, manufacturing, and consumer sectors.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Gurgaon, officially Gurugram, stands as the vibrant economic powerhouse of Northern India. Housing hundreds of multinational corporate giants, fast-scaling venture-backed startups, and pioneering digital enterprises, the city produces intellectual assets at an unprecedented velocity. However, in such a hyper-competitive market, your brand name, logo, tagline, and packaging are vulnerable to copycats, unauthorized imitation, and trademark squatting.
                                        </p>
                                        <p className="mb-6">
                                            IPR Karo has established itself as the top choice for companies seeking reliable <Link href="/trademark-registration-in-gurgaon" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration in Gurgaon</Link>. While traditional law offices often burden clients with hourly billings, unpredictable delays, and complex legal jargon, IPR Karo provides a streamlined, tech-enabled legal experience. We eliminate guesswork by combining sophisticated algorithmic availability checks with meticulous human attorney oversight.
                                        </p>
                                        <p className="mb-6">
                                            Whether you are an early-stage SaaS founder in DLF Cyber City preparing for institutional funding, a D2C retail brand on Golf Course Road expanding pan-India, or an industrial manufacturer in Udyog Vihar exporting overseas, IPR Karo provides comprehensive legal protection designed specifically to scale with your ambitions.
                                        </p>
                                    </section>

                                    {/* SECTION 2: OUR TRADEMARK SERVICES */}
                                    <section id="our-services" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Our Trademark Services in Gurgaon
                                        </h2>
                                        <p className="mb-6">
                                            Securing a trademark is not merely filling an electronic form; it requires strategic planning, precise classification, and proactive legal management throughout the examination lifecycle. IPR Karo offers an integrated suite of IP services tailored to Gurgaon businesses:
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">1. AI-Driven Preliminary Clearance Search</h3>
                                        <p className="mb-6">
                                            Before spending capital on official filing fees, our proprietary screening evaluates your mark across active registry databases. Using our <Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">free AI powered trademark search</Link>, we identify identical matches, close phonetic parallels, and visual resemblances under Section 11 of the Trade Marks Act, 1999, preventing costly rejections before they occur.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">2. Precise Class Selection and Goods Specification</h3>
                                        <p className="mb-6">
                                            Selecting incorrect classes or drafting overly broad goods and services descriptions is the number one cause of registry delays. Our legal analysts leverage our <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link> across all 45 Nice Classification classes, ensuring comprehensive commercial coverage without triggering unnecessary registry queries.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">3. E-Filing of Form TM-A with Delhi Registry</h3>
                                        <p className="mb-6">
                                            We prepare and file your official Form TM-A online through the IP India gateway within 24 hours of receiving your details. You immediately receive an official government acknowledgment containing your unique trademark application number, allowing you to legally display the ™ symbol next to your brand.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">4. Strategic Objection Drafting & Hearing Defense</h3>
                                        <p className="mb-6">
                                            If an examiner issues an adverse examination report, our experienced advocates prepare a comprehensive legal reply citing Supreme Court and High Court precedents. When required, we provide personal or virtual appearance defense at the Delhi Registry office in Dwarka to secure official mark acceptance.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">5. Trademark Journal Monitoring & Opposition Management</h3>
                                        <p className="mb-6">
                                            Once your mark is advertised in the Trade Marks Journal, we monitor competitor filings to protect your exclusive rights. We also defend your brand against hostile third-party oppositions during the statutory four-month window, safeguarding your investments.
                                        </p>
                                    </section>

                                    {/* SECTION 3: CORPORATE LANDSCAPE */}
                                    <section id="corporate-landscape" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCity} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Gurgaon Corporate IP Landscape
                                        </h2>
                                        <p className="mb-6">
                                            Gurgaon is widely recognized as the corporate and financial nerve center of Haryana and the National Capital Region (NCR). With more than 500 Fortune 500 branch offices, hundreds of unicorns, and thousands of disruptive MSMEs, brand creation in the city happens at a rapid pace.
                                        </p>
                                        <p className="mb-6">
                                            However, high density also creates significant legal risk. Trademark registry statistics show that the Delhi Registry (which oversees Gurgaon, Delhi, Haryana, and neighboring northern territories) processes one of the highest volumes of brand conflicts, objections, and oppositions in the country. Businesses operating in prominent hubs like DLF Cyber City, Udyog Vihar, Sohna Road, and Manesar frequently face:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                                            <li><strong>Preemptive Trademark Squatting:</strong> Unscrupulous entities registering trending names before genuine entrepreneurs complete their paperwork.</li>
                                            <li><strong>Deceptive Phonetic Mimicry:</strong> Competitors registering rhyming or phonetically identical words to siphon online traffic and brand reputation.</li>
                                            <li><strong>Cross-Class Clashes:</strong> Conflicts emerging between software providers (Class 9 / 42) and consulting firms (Class 35 / 36) operating under identical trademarks.</li>
                                        </ul>
                                        <p className="mb-6">
                                            Working with the best trademark registration company in Gurgaon ensures that your brand has proactive, airtight defenses from inception. IPR Karo understands this local ecosystem and secures your proprietary rights before copycats can compromise your market position.
                                        </p>
                                    </section>

                                    {/* SECTION 4: COMPARISON TABLE */}
                                    <section id="comparison" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            IPR Karo vs Traditional Firms
                                        </h2>
                                        <p className="mb-6">
                                            Selecting the right partner for your brand protection directly impacts your approval probability, legal expenses, and timeline. The table below illustrates how IPR Karo outperforms both conventional law offices and generic document filing portals:
                                        </p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Parameter</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-[#6E5E93] uppercase">IPR Karo</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Traditional Law Firms</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Generic Aggregator Portals</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold">Search Technology</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">AI Deep Similarity Screening + Attorney Review</td>
                                                        <td className="px-6 py-4 text-gray-600">Manual basic check</td>
                                                        <td className="px-6 py-4 text-orange-500">Superficial string match</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold">Filing Turnaround</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Within 24 Hours (Guaranteed)</td>
                                                        <td className="px-6 py-4 text-gray-600">5 to 10 working days</td>
                                                        <td className="px-6 py-4 text-gray-600">3 to 7 working days</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold">Pricing Transparency</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Transparent Flat Fee (No Hidden Surcharges)</td>
                                                        <td className="px-6 py-4 text-red-500">Unpredictable hourly billings</td>
                                                        <td className="px-6 py-4 text-red-500">Hidden fees for TM-48 & replies</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold">Delhi Registry Jurisdiction Experience</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Direct Daily Presence & Specialized Advocates</td>
                                                        <td className="px-6 py-4 text-gray-600">Variable expertise</td>
                                                        <td className="px-6 py-4 text-red-500">Outsourced to third-party agents</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold">Objection Defense Capability</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Comprehensive Precedent-Backed Legal Drafting</td>
                                                        <td className="px-6 py-4 text-gray-600">High extra costs for replies</td>
                                                        <td className="px-6 py-4 text-red-500">Generic copy-paste responses</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold">Startup & MSME Subsidy Guidance</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Assisted 50% Govt Fee Waiver via Udyam/DPIIT</td>
                                                        <td className="px-6 py-4 text-gray-600">Rarely assisted</td>
                                                        <td className="px-6 py-4 text-gray-600">Often overlooked</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: STEP-BY-STEP PROCESS */}
                                    <section id="registration-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Registration Process
                                        </h2>
                                        <p className="mb-6">
                                            Registering your trademark with IPR Karo is effortless, transparent, and entirely digital. Here is how our legal workflow guides your brand from preliminary idea to registered asset:
                                        </p>

                                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
                                            <h3 className="text-xl font-bold mb-4 border-b pb-2 text-gray-900">IPR Karo 7-Step Trademark Workflow</h3>
                                            <ol className="list-decimal list-inside space-y-4 text-gray-700">
                                                <li>
                                                    <strong>Comprehensive Brand Clearance & AI Search:</strong>
                                                    <span className="block pl-5 text-sm text-gray-600 mt-1">We run your name, slogan, or logo across millions of registered and pending marks to identify phonetic, visual, and conceptual conflicts.</span>
                                                </li>
                                                <li>
                                                    <strong>Appropriate Trademark Class Identification:</strong>
                                                    <span className="block pl-5 text-sm text-gray-600 mt-1">Our attorneys match your commercial activities with the correct classes under the international Nice Classification system.</span>
                                                </li>
                                                <li>
                                                    <strong>Document Verification & Power of Attorney:</strong>
                                                    <span className="block pl-5 text-sm text-gray-600 mt-1">We verify your corporate certificates, logo artwork, and execute Form TM-48 (Authorization) electronically.</span>
                                                </li>
                                                <li>
                                                    <strong>Online Filing of Form TM-A:</strong>
                                                    <span className="block pl-5 text-sm text-gray-600 mt-1">We file your application directly on the IP India portal within 24 hours and issue your official government receipt and TM application number.</span>
                                                </li>
                                                <li>
                                                    <strong>Examination Monitoring & Objection Reply:</strong>
                                                    <span className="block pl-5 text-sm text-gray-600 mt-1">We track your examination report closely. If an objection is raised under Section 9 or 11, we draft and file a targeted legal rebuttal.</span>
                                                </li>
                                                <li>
                                                    <strong>Publication in Trade Marks Journal:</strong>
                                                    <span className="block pl-5 text-sm text-gray-600 mt-1">Upon acceptance, the mark is advertised in the official Trade Marks Journal for the mandatory 4-month public inspection period.</span>
                                                </li>
                                                <li>
                                                    <strong>Issuance of Final Registration Certificate:</strong>
                                                    <span className="block pl-5 text-sm text-gray-600 mt-1">Once no oppositions are raised, the Registrar issues the official digital Trademark Certificate, granting you exclusive 10-year rights to use the ® symbol.</span>
                                                </li>
                                            </ol>
                                        </div>
                                    </section>

                                    {/* SECTION 6: DOCUMENTS REQUIRED */}
                                    <section id="documents-required" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Documents Required for Filing
                                        </h2>
                                        <p className="mb-6">
                                            To ensure seamless compliance without registry queries, ensure you have the following documentation ready based on your entity type:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faBuilding} className="w-5 h-5 text-[rgb(110,94,147)] mr-2" />
                                                    Companies, Startups & LLPs
                                                </h3>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Certificate of Incorporation (COI) / Partnership Deed</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Udyam MSME Certificate or DPIIT Recognition (for 50% discount)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Brand Logo or Device Mark artwork in high resolution</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Signed Form TM-48 (Authorization of Trademark Agent)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Affidavit of User with commercial invoices (if claiming prior use)</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faAward} className="w-5 h-5 text-[rgb(110,94,147)] mr-2" />
                                                    Proprietors & Individuals
                                                </h3>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Identity Proof (PAN Card / Aadhaar Card / Passport)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Address Proof (Voter ID / Driving License / Utility Bill)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>High-resolution mark or logo representation</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Signed Power of Attorney (Form TM-48)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500 mt-1 mr-2 shrink-0" />
                                                        <span>Commercial date of first use details (or Proposed to be Used)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: TIMELINES AND MILESTONES */}
                                    <section id="timeline-stages" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Timeline and Examination Stages
                                        </h2>
                                        <p className="mb-6">
                                            Understanding the statutory milestones set by the Controller General of Patents, Designs, and Trade Marks helps founders plan brand launches with clarity:
                                        </p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Day 1 (Within 24 Hours):</strong> Online filing completed; official TM Application Number issued; instant legal right to use the ™ symbol.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Months 1 to 3:</strong> Formalities check and substantive examination by the Trade Marks Registry (Delhi Dwarka jurisdiction).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Months 3 to 5:</strong> Examination report review. If approved without objection, the mark moves directly to publication; if objected, an attorney response is submitted within 30 days.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Months 5 to 9:</strong> Trade Marks Journal advertisement for a statutory 4-month opposition period.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Months 8 to 12:</strong> Final registration grant; issuance of the digital Trademark Registration Certificate; full legal authorization to use the ® symbol.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 8: OVERCOMING OBJECTIONS */}
                                    <section id="objection-opposition" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Overcoming Objections & Opposition
                                        </h2>
                                        <p className="mb-6">
                                            An examination objection does not mean your trademark is refused. Approximately 40% to 50% of applications in India face preliminary objections under the Trade Marks Act, 1999. Success depends on the quality of your legal representation.
                                        </p>
                                        <p className="mb-6">
                                            The two primary statutory hurdles raised by examiners at the Delhi Registry include:
                                        </p>
                                        <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
                                            <li>
                                                <strong>Section 9 Objections (Absolute Grounds):</strong> Raised when a brand name is considered descriptive of the goods/services, laudatory, or lacking distinctiveness. Our legal team overcomes this by demonstrating secondary meaning through user affidavits, marketing invoices, social metrics, and press coverage. Learn more in our guide on <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome a trademark objection</Link>.
                                            </li>
                                            <li>
                                                <strong>Section 11 Objections (Relative Grounds):</strong> Raised when an examiner believes your mark resembles an existing registered or pending mark in the same or allied class. We draft structured comparative analyses showing phonetic, visual, and conceptual differentiation, narrowing goods descriptions where strategic.
                                            </li>
                                        </ul>
                                        <p className="mb-6">
                                            If an examiner schedules a show-cause hearing, IPR Karo advocates attend hearings directly before the Hearing Officers at the Dwarka Registry, presenting robust legal arguments to secure acceptance.
                                        </p>
                                    </section>

                                    {/* SECTION 9: BUSINESS HUBS WE SERVE */}
                                    <section id="business-hubs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Top Business Hubs We Serve
                                        </h2>
                                        <p className="mb-6">
                                            As the best trademark registration company in Gurgaon, IPR Karo serves enterprises across all major commercial corridors of Gurugram and Manesar:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
                                            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                                <h3 className="font-bold text-gray-900 text-base mb-1">DLF Cyber City & Cyber Hub</h3>
                                                <p className="text-xs text-gray-600">Enterprise software, fintech platforms, global consultancies, and digital agencies requiring rapid multi-class IP protection.</p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                                <h3 className="font-bold text-gray-900 text-base mb-1">Golf Course Road & Extension</h3>
                                                <p className="text-xs text-gray-600">Venture capital firms, luxury lifestyle labels, consumer healthcare brands, and high-growth consumer startups.</p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                                <h3 className="font-bold text-gray-900 text-base mb-1">Udyog Vihar (Phases I to V)</h3>
                                                <p className="text-xs text-gray-600">Apparel exporters, electronics manufacturers, pharmaceutical packaging, and logistics supply chain firms.</p>
                                            </div>
                                            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                                <h3 className="font-bold text-gray-900 text-base mb-1">IMT Manesar & Sohna Road</h3>
                                                <p className="text-xs text-gray-600">Automotive ancillaries, engineering plants, warehousing giants, and regional retail commercial centers.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: FAQS */}
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

                                    {/* SECTION 11: FINAL TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Secure Your Brand with IPR Karo
                                        </h2>
                                        <p className="mb-6">
                                            Building a distinguished company in Gurgaon requires immense dedication, resource allocation, and continuous innovation. Do not leave your most valuable asset—your brand equity—unprotected against competitors and copycats. Registering your trademark transforms your business name and visual identity into an enforceable, defensible intellectual property asset that enhances company valuation.
                                        </p>
                                        <p className="mb-6">
                                            Partnering with IPR Karo guarantees that your trademark application is executed with technological speed and attorney precision. Check your brand availability today with our clearance tools or consult directly with our legal advocates. For official government IP schedules and guidelines, visit the <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India Official Portal</a>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA CARD */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Premier Gurgaon Brand Protection
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Gurgaon Brand Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    File your trademark application in 24 hours with IPR Karo. Enjoy AI brand clearance, expert attorney drafting, and complete legal protection before the Delhi Registry.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/our-services/trademark-registration"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Register Your Trademark Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Same-Day TM Filing • 50% Startup/MSME Fee Subsidy Support • 5,000+ Brands Protected
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        {/* RIGHT SIDEBAR */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            {/* Author Info */}
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h3>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                                    Rahul specializes in trademark clearance searches, brand valuation, and intellectual property strategy for enterprises across Delhi NCR and Gurgaon.
                                </p>
                            </div>

                            {/* Trademark Search CTA Widget */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Check Gurgaon Brand Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">
                                    Run a free AI similarity search before filing your application with the Trade Marks Registry.
                                </p>
                                <Link href="/trademark-search" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Start Free TM Search
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Trademark Registration</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-in-gurgaon" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Gurgaon IP Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">AI Trademark Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faListUl} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Class Finder</span>
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
