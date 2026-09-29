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
    faRocket,
    faGlobe,
    faClock,
    faRotate,
    faStore,
    faKey,
    faCartShopping,
    faBoxOpen
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Amazon Brand Registry Trademark India: Step-by-Step Guide",
    description: validateAndNormalizeDescription(
        "Complete Amazon Brand Registry trademark requirements guide for India. Learn pending TM filing, documents, attorney verification codes, and protection.",
        "app/amazon-brand-registry-trademark-requirements-india/page.tsx"
    ),
    keywords: [
        "amazon brand registry trademark requirements india",
        "amazon brand registry with pending trademark india",
        "amazon brand registry verification code trademark attorney",
        "documents for amazon brand registry",
        "amazon brand registry eligibility india",
        "amazon brand registry word mark vs device mark",
        "amazon brand registry permanent packaging",
        "brand registry 2.0 india",
        "amazon seller trademark registration india",
        "amazon ip protection india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/amazon-brand-registry-trademark-requirements-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Amazon Brand Registry Trademark India: Step-by-Step Guide",
        description: "Complete Amazon Brand Registry trademark requirements guide for India. Learn pending TM filing, documents, attorney verification codes, and protection.",
        url: "https://www.iprkaro.com/amazon-brand-registry-trademark-requirements-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/amazon-brand-registry-trademark-requirements-india.png",
                width: 1200,
                height: 630,
                alt: "Amazon Brand Registry Trademark Requirements in India Step-by-Step Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Amazon Brand Registry Trademark India: Step-by-Step Guide",
        description: "Complete Amazon Brand Registry trademark requirements guide for India. Learn pending TM filing, documents, attorney verification codes, and protection.",
        images: ["https://www.iprkaro.com/images/og/amazon-brand-registry-trademark-requirements-india.jpg"],
    }
};

const faqs = [
    {
        question: "Can I enroll in Amazon Brand Registry India with a pending trademark application?",
        answer: "Yes. Under Amazon Brand Registry 2.0, Indian sellers can enroll using a pending trademark application filed with the Trade Marks Registry (IP India). You only need the official trademark application number from your Form TM-A acknowledgment receipt. You do not need to wait 12 to 18 months for full registration to unlock core brand protection tools."
    },
    {
        question: "Which trademark classes are eligible for Amazon Brand Registry in India?",
        answer: "Amazon accepts trademarks registered or pending under any applicable goods class (Classes 1 to 34) matching the physical products you sell on Amazon.in. While service classes (Classes 35 to 45) can be registered for corporate services, Amazon Brand Registry specifically evaluates whether your trademark coverage aligns with your physical product category."
    },
    {
        question: "What is the Amazon Brand Registry verification code sent to the trademark attorney?",
        answer: "When you submit an application, Amazon automatically retrieves the contact information of the Trademark Attorney or Agent listed on the public IP India portal for that application. Amazon sends an alphanumeric verification code directly to the attorney's official email address. The applicant must obtain this code from their attorney and submit it in the Seller Central case log within 30 days to complete enrollment."
    },
    {
        question: "What are Amazon's permanent branding requirements for product packaging?",
        answer: "Amazon requires clear, unedited photographs of the physical product and packaging displaying the brand name or logo permanently affixed. Permanent branding includes printing directly on the box, laser engraving, embossed metal plates, sewn fabric tags, or screen-printed bottles. Loose adhesive stickers, peelable paper labels, temporary barcodes, and digital mockups are strictly rejected."
    },
    {
        question: "What is the difference between Word Mark and Device Mark for Amazon Brand Registry?",
        answer: "A Word Mark protects the plain text name regardless of font, capitalization, or styling, offering the most versatile protection on Amazon search algorithms. A Device Mark protects a specific stylized logo or graphic representation. Amazon accepts both. However, the brand name entered on the application must match the text in the trademark filing exactly."
    },
    {
        question: "Why was my Amazon Brand Registry application rejected in India?",
        answer: "Common reasons for rejection include: (1) Temporary stickers or digitally edited packaging photos, (2) Mismatch between the applicant name on the trademark and the Amazon Seller account legal entity without an authorized licensee agreement, (3) Failure to submit the attorney verification code within 30 days, or (4) Trademark application status showing Objected, Formalities Chk Fail, or Refused on IP India."
    },
    {
        question: "Does Amazon Brand Registry give me exclusive rights to sell my products?",
        answer: "Amazon Brand Registry gives you powerful brand control tools—including A+ Content, Storefront creation, Amazon Brand Analytics, Project Zero, Transparency serialization, and the Report a Violation tool to remove counterfeiters. However, it does not prevent authorized third-party sellers from listing authentic goods on your ASIN (such as wholesale distributors) unless they violate your intellectual property rights."
    },
    {
        question: "How much does it cost to enroll in Amazon Brand Registry in India?",
        answer: "Amazon does not charge any fee for enrolling in the Brand Registry program. It is completely free for sellers. Your only expenses are the standard government statutory fees (₹4,500 for individuals/startups/MSMEs or ₹9,000 for standard entities per class) and professional legal fees to file the trademark application with the Indian Trade Marks Registry."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "trademark-prerequisites", title: "TM Prerequisites" },
    { id: "wordmark-vs-device", title: "Word Mark vs Logo" },
    { id: "permanent-branding", title: "Packaging Rules" },
    { id: "step-by-step", title: "6-Step Process" },
    { id: "attorney-verification", title: "Attorney Code" },
    { id: "common-rejections", title: "Rejection Causes" },
    { id: "registry-stages-table", title: "Stages & Timelines" },
    { id: "checklist", title: "Seller Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function AmazonBrandRegistryPage() {
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
        "headline": "Amazon Brand Registry Trademark Requirements in India: Step-by-Step Guide",
        "description": "Complete Amazon Brand Registry trademark requirements guide for India. Learn pending TM filing, documents, attorney verification codes, and protection.",
        "image": "https://www.iprkaro.com/images/og/amazon-brand-registry-trademark-requirements-india.png",
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
            "@id": "https://www.iprkaro.com/amazon-brand-registry-trademark-requirements-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Amazon Brand Registry Trademark India: Step-by-Step Guide",
        "url": "https://www.iprkaro.com/amazon-brand-registry-trademark-requirements-india",
        "description": "Complete Amazon Brand Registry trademark requirements guide for India. Learn pending TM filing, documents, attorney verification codes, and protection.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/amazon-brand-registry-trademark-requirements-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/amazon-brand-registry-trademark-requirements-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Amazon Brand Registry Trademark Guide", "item": "https://www.iprkaro.com/amazon-brand-registry-trademark-requirements-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Enroll in Amazon Brand Registry India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "File Form TM-A with Indian Trade Marks Registry to obtain Application Number" },
            { "@type": "ListItem", "position": 2, "name": "Capture Compliant Permanent Branding & Packaging Photographs" },
            { "@type": "ListItem", "position": 3, "name": "Access Amazon Brand Services Portal & Connect Seller Central Account" },
            { "@type": "ListItem", "position": 4, "name": "Submit Trademark Details, Class Selection, and Product Photos" },
            { "@type": "ListItem", "position": 5, "name": "Retrieve Alphanumeric Verification Code from Trademark Attorney" },
            { "@type": "ListItem", "position": 6, "name": "Submit Verification Code to Activate Brand Registry Benefits" }
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
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">E-Commerce Brand Protection</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Amazon Brand Registry <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Requirements</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Enrolling in Amazon Brand Registry 2.0 is the single most critical milestone for Indian e-commerce sellers and D2C brands. It gives you complete control over your product detail pages, unlocks A+ Enhanced Marketing Content, enables custom Brand Stores, and arms you with proactive IP enforcement tools to eliminate listing hijackers and counterfeiters. Discover the mandatory trademark prerequisites, pending application rules, permanent packaging standards, attorney verification code protocols, and step-by-step enrollment blueprint.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Seller Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Trademark for Amazon <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/amazon-brand-registry-trademark-requirements-india.png"
                                    alt="Amazon Brand Registry Trademark Requirements India Step-by-Step Guide"
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
                        { label: "Amazon Brand Registry Trademark Guide", href: "/amazon-brand-registry-trademark-requirements-india" }
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
                                            <FontAwesomeIcon icon={faStore} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Amazon Brand Registry
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">To qualify for Amazon Brand Registry in India, sellers must possess an active registered trademark (R status) or a pending trademark application (TM status) with the Indian Trade Marks Registry (IP India). The mark must be a Word Mark or Device/Logo Mark matching the brand name on your product packaging. Amazon mandates high-resolution photos of permanently branded products and packaging, and requires an alphanumeric security code verified by your registered trademark attorney.</p>
                                        </div>

                                        <p className="mb-6">Selling on Amazon.in without brand protection leaves your business dangerously exposed to listing piggybacking, fraudulent counterfeit sellers, and unauthorized product detail alterations. When an unregistered seller establishes a high-ranking Amazon Standard Identification Number (ASIN), copycats can easily latch onto the Buy Box, undermine pricing with substandard fakes, and dilute consumer goodwill.</p>
                                        <p className="mb-6">Amazon Brand Registry 2.0 solves this vulnerability by transforming intellectual property rights into automated platform enforcement. Brand Registry grants verified brand owners administrative authority over product titles, bullet points, images, and descriptions. It unlocks high-conversion promotional suites like Amazon A+ Content, multi-page Brand Stores, Sponsored Brands video ads, and predictive algorithmic protection that detects counterfeit listings before they go live.</p>
                                        <p className="mb-6">Whether you are an established enterprise or an emerging D2C brand operating through<Link href="/trademark-for-ecommerce" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for e-commerce</Link>, mastering Amazon&apos;s trademark criteria is essential for securing your digital storefront and safeguarding marketplace revenue.</p>
                                    </section>

                                    {/* SECTION 2: TRADEMARK PREREQUISITES */}
                                    <section id="trademark-prerequisites" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Eligibility &amp; Pending TM Rules
                                        </h2>
                                        <p className="mb-6">Historically, Amazon required a fully registered trademark certificate (which takes 12 to 18 months in India). Under the updated Amazon Brand Registry guidelines, sellers can now enroll immediately upon obtaining an official<strong>pending trademark application number</strong>from the Controller General of Patents, Designs and Trade Marks (CGPDTM).</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Pending TM Application (TM Status)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">You can apply for Brand Registry the moment your<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration application</Link>is e-filed on Form TM-A. As soon as the IP India portal issues an official CBR receipt and application number, your brand qualifies for enrollment.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Registered Trademark (R Status)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If your trademark has completed examination, journal advertisement, and opposition windows, you can enroll using your official Trademark Registration Certificate (Form TM-RG). This unlocks advanced tiers like Project Zero and Transparency serialization.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Appropriate Goods Classification
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Your trademark must cover the specific Nice classification corresponding to the physical goods listed on Amazon.in (Classes 1 through 34). Explore relevant classes using our<Link href="/types-of-trademark-classes" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark classes guide</Link>and<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Active Application Standing
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Your application on the public IP India e-register must show an active standing such as &ldquo;New Application&rdquo;, &ldquo;Send to Vienna Codification&rdquo;, or &ldquo;Marked for Exam&rdquo;. Applications marked as Abandoned, Refused, or Formalities Chk Fail will be denied.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: WORD MARK VS DEVICE MARK */}
                                    <section id="wordmark-vs-device" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Word Mark vs Device Mark Requirements
                                        </h2>
                                        <p className="mb-6">When applying on Form TM-A with the Indian Trade Marks Registry, applicants must choose whether to file as a Word Mark or a Device Mark (Logo). Both marks are accepted by Amazon Brand Registry, but they carry distinct advantages for e-commerce sellers:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Text-Based Trademark (Word Mark) — Recommended for Sellers</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">A Word Mark protects the literal alphabetical characters regardless of font style, typography, letter sizing, or background color. Amazon prefers Word Marks because its automated search crawlers index text directly to match product titles and ASIN catalog entries. A Word Mark allows you to redesign your brand logo on packaging without losing your Brand Registry status.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Image-Based Trademark with Words, Letters, or Numbers (Device Mark)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">A Device Mark protects stylized lettering, graphic icons, or artistic emblems. Amazon accepts Device Marks provided the exact brand text is legibly embedded within the design. If you file a purely abstract design mark with zero legible text, Amazon will reject your Brand Registry submission because the system cannot map an abstract graphic to an Amazon text brand name.</p>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                                            <p className="text-sm text-amber-900 m-0 font-medium leading-relaxed"><strong>Critical Naming Rule:</strong>The brand name you enter in your Amazon Brand Registry application must match the Trade Marks Registry record character-for-character, including spacing, hyphenation, and capitalization. Any discrepancy will trigger an automated rejection.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: PACKAGING RULES */}
                                    <section id="permanent-branding" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBoxOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Product &amp; Packaging Branding Rules
                                        </h2>
                                        <p className="mb-6">The number one cause of Brand Registry rejections in India is non-compliant product photography. Amazon enforces rigorous physical branding standards to verify that applicants are genuine brand manufacturers rather than generic drop-shippers.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-600 mr-2" />
                                                    Compliant Permanent Branding
                                                </h3>
                                                <ul className="text-sm text-gray-700 space-y-2.5">
                                                    <li>• Brand name printed directly onto primary retail packaging (corrugated boxes, pouches).</li>
                                                    <li>• Laser-etched, embossed, or engraved logos on metal, wood, or plastic goods.</li>
                                                    <li>• Woven fabric tags stitched directly into collars or seams of apparel items.</li>
                                                    <li>• Screen-printed or heat-transferred brand marks on cosmetic bottles and jars.</li>
                                                    <li>• Real, unedited photos taken from multiple angles showing the product held in hand or on a table.</li>
                                                </ul>
                                            </div>

                                            <div className="border border-red-200 bg-red-50/50 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-600 mr-2" />
                                                    Non-Compliant (Strictly Rejected)
                                                </h3>
                                                <ul className="text-sm text-gray-700 space-y-2.5">
                                                    <li>• Paper adhesive stickers or peelable labels pasted onto unbranded generic boxes.</li>
                                                    <li>• 3D digital computer mockups or Photoshop renders with superimposed logos.</li>
                                                    <li>• Stock photos downloaded from supplier websites (such as Alibaba or IndiaMART).</li>
                                                    <li>• Temporary hang-tags without any brand marking on the actual physical product.</li>
                                                    <li>• Blurry, cropped, or filtered images obscuring manufacturing details.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: 6-STEP APPLICATION PROCESS */}
                                    <section id="step-by-step" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            6-Step Brand Registry Application
                                        </h2>
                                        <p className="mb-6">Enrolling in Amazon Brand Registry India is conducted entirely online through the dedicated Amazon Brand Services portal. Follow this step-by-step procedure:</p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Trademark Filing</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Conduct Clearance Search &amp; E-File Form TM-A</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Before filing, run a comprehensive<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>to ensure your proposed brand name does not conflict with prior registrations under Section 11 of the Trade Marks Act, 1999.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">File Form TM-A on the official IP India portal through a registered trademark attorney. Secure your official government CBR acknowledgment receipt containing your permanent 7 or 8-digit application number.</p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Asset Photography</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Capture High-Resolution Physical Product Images</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Photograph at least 2 to 4 distinct angles of your physical product and retail packaging. Ensure the camera clearly captures the permanently affixed brand name, batch details, manufacturer address, and MRP sticker.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Do not apply digital retouching, watermarks, or studio cutouts. Raw, well-lit smartphone photos showing the product resting naturally on a table or in hand achieve the highest approval rate with Amazon&apos;s automated image review systems.</p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Portal Access</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Log into Amazon Brand Services &amp; Initiate Enrollment</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Navigate to the official<a href="https://brandservices.amazon.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Services India</a>portal. Sign in using your existing Amazon Seller Central or Vendor Central account credentials.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Click on &ldquo;Enroll a new brand&rdquo; and review the eligibility criteria. Linking your primary Seller Central account ensures that brand ownership privileges sync seamlessly across your listing inventory.</p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Trademark Submission</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Enter Trademark &amp; Manufacturing Information</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Select &ldquo;India&rdquo; as the trademark office (India Patent and Trademark Office / CGPDTM). Enter the exact brand name and provide your trademark application or registration number.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">Upload your physical product images and packaging photos. Select the primary product categories (apparel, electronics, home decor, etc.) and indicate your manufacturing relationship (whether you manufacture your own goods or contract through third-party OEM vendors).</p>
                                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                                                <p className="text-xs sm:text-sm text-indigo-950 font-medium m-0"><strong>Seller Entity Match:</strong>Ensure that the trademark applicant name aligns with your Amazon Seller Central legal entity. If the trademark is owned by an individual founder and the seller account is a Private Limited company, upload a formal Trademark Licensing Agreement or Authorization Letter.</p>
                                            </div>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Verification Code</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Coordinate Attorney Verification Code Retrieval</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Within 24 to 48 hours of submission, Amazon automatically parses the public IP India e-register database. Amazon identifies the registered Trademark Attorney or Agent of record associated with your Form TM-A application and sends a secure verification email containing an alphanumeric code.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Contact your trademark attorney immediately to retrieve this verification string. Your attorney must verify that they authorized the application on your behalf.</p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Activation</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Verification Code &amp; Activate Benefits</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Log in to your Amazon Brand Registry case log, paste the verification code provided by your attorney, and submit the response.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">Amazon completes final verification within 1 to 3 business days. Once approved, your brand shield badge activates. This grants immediate access to A+ Content Manager, Amazon Brand Analytics, Brand Stores, and automated listing protection tools.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Ensure ongoing legal compliance by monitoring your filing progress. Read our guide on<Link href="/trademark-application-status" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark application status</Link>to manage examination reports and hearing notices seamlessly.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 6: ATTORNEY VERIFICATION WORKFLOW */}
                                    <section id="attorney-verification" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faKey} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Attorney Verification Code Workflow
                                        </h2>
                                        <p className="mb-6">The Trademark Attorney Verification Code is Amazon&apos;s cryptographic security gate to prevent unauthorized sellers from hijacking third-party brand names. Understanding this mechanism prevents unnecessary delays:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-purple-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Automated Registry Data Extraction</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Amazon&apos;s system queries the Trade Marks Registry public portal (`ipindiaonline.gov.in`) and extracts the correspondent email listed under the &ldquo;Agent / Attorney Information&rdquo; section of your trademark application. Amazon does<em>not</em>send the code to your seller email address.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. 30-Day Expiration Window</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The verification email dispatched by Amazon contains a unique Case ID and alphanumeric authentication code. The seller has exactly 30 days to obtain the code from their attorney and reply through the Brand Registry case log. If 30 days elapse without a response, the case is closed and marked invalid.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. What If You Self-Filed without an Attorney?</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If you filed Form TM-A directly as an individual applicant without legal counsel, Amazon sends the verification code directly to the applicant email address listed on your trademark e-filing profile. Ensure you check your spam and promotional folders for communications from `brand-registry-support@amazon.com`.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: COMMON REJECTIONS */}
                                    <section id="common-rejections" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common Rejection Causes &amp; Solutions
                                        </h2>
                                        <p className="mb-6">Over 35% of initial Amazon Brand Registry applications in India face rejection due to avoidable procedural errors. Review these common pitfalls and their legal remedies:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. &ldquo;Brand Ineligible&rdquo; due to Application Discrepancies</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If your trademark status on IP India is &ldquo;Formalities Chk Fail&rdquo; or &ldquo;Objected&rdquo; with an unresolved compliance notice, Amazon may flag the mark as ineligible. Work with an IP attorney to file a prompt Form TM-M correction or examination response to restore good standing.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Mismatch Between Legal Entity and Trademark Owner</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If your Amazon Seller Central account is registered under &ldquo;ABC Retailers Pvt Ltd&rdquo. But your trademark was filed in the personal name of &ldquo;Founder Name&rdquo;, Amazon requires proof of authorization. Submit a stamped Trademark License Agreement or Board Resolution authorizing the corporate seller account to enroll the brand.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Abusive Conduct / Brand Associated with Prior Infringement</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If the seller account has a history of high policy violations, counterfeit strikes, or abusive IP complaints, Amazon&apos;s risk assessment system will reject Brand Registry enrollment under its &ldquo;Account Health&rdquo. Guidelines. Resolve all open Account Health warnings before re-applying.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Submitting Digital Renders instead of Physical Packaging</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Never submit 3D digital mockups created in Photoshop or CAD software. Amazon&apos;s review algorithms instantly flag artificial lighting and transparent layers. Always capture physical samples showing genuine industrial manufacturing and packaging.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: TABLE OF STAGES & TIMELINES */}
                                    <section id="registry-stages-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Requirements &amp; Timelines Comparison
                                        </h2>
                                        <p className="mb-6">Evaluate the requirements, processing timelines, and unlocked capabilities across different trademark stages for Amazon Brand Registry India:</p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Trademark Stage</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Required Document</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Amazon Approval Time</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">A+ Content &amp; Store</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Report Infringement</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Project Zero / Transparency</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Pending TM (Form TM-A)</td>
                                                        <td className="px-6 py-4">Application No. + CBR Receipt</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">3 – 5 Days</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Unlocked (Full Access)</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Unlocked</td>
                                                        <td className="px-6 py-4 text-amber-600 font-semibold">Limited / On Request</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Registered TM (Form TM-RG)</td>
                                                        <td className="px-6 py-4">Registration Certificate</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">2 – 3 Days</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Unlocked (Full Access)</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Unlocked (Automated)</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Full Access</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Madrid Protocol (Designating IN)</td>
                                                        <td className="px-6 py-4">WIPO International Registration</td>
                                                        <td className="px-6 py-4 text-indigo-700 font-semibold">5 – 7 Days</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Unlocked (Global)</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Global Enforcement</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Global Access</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Unregistered Brand</td>
                                                        <td className="px-6 py-4">None (Generic / GTIN Exemption)</td>
                                                        <td className="px-6 py-4 text-red-600 font-bold">Ineligible</td>
                                                        <td className="px-6 py-4 text-red-600 font-bold">Locked</td>
                                                        <td className="px-6 py-4 text-red-600 font-bold">Locked</td>
                                                        <td className="px-6 py-4 text-red-600 font-bold">Locked</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 9: SELLER CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Amazon Brand Registry Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Trademark Clearance &amp; Filing:</strong>Confirm trademark availability and obtain an active Form TM-A application number from IP India.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Goods Classification Alignment:</strong>Ensure your registered class covers the specific physical products sold on Amazon.in (e.g. Class 25 for apparel, Class 3 for cosmetics).</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Permanent Physical Packaging:</strong>Produce physical samples with permanently printed, engraved, or stitched brand logos.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>High-Resolution Real Photos:</strong>Capture raw, unedited photos of the product and packaging from multiple angles.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Entity Authorization / License:</strong>If trademark owner differs from the Seller Central company entity, prepare a signed Trademark License Agreement.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Attorney Verification Code Sync:</strong>Notify your trademark attorney to expect the Amazon verification email and retrieve the code within 30 days.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>A+ Content &amp; Store Setup:</strong>Once verified, design your multi-page Amazon Brand Store and replace standard descriptions with rich A+ Enhanced Content.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 10: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 11: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Amazon Brand Registry Advice
                                        </h2>
                                        <p className="mb-6">In today&apos;s hyper-competitive e-commerce marketplace, intellectual property is not merely a legal certificate—it is your primary commercial defensive weapon. Amazon Brand Registry transforms your trademark into automated algorithmic protection, locking in your Buy Box share and elevating your brand presentation above generic competitors.</p>
                                        <p className="mb-6">Do not wait for a counterfeit seller to hijack your best-selling ASIN before initiating your trademark filing. By securing a fast-track Form TM-A application through experienced IP counsel, you can enroll in Amazon Brand Registry within days, deploy compelling A+ marketing modules, and build an enduring, defensible consumer brand across India and global marketplaces.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Amazon Brand Registry Assistance
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Amazon Brand Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Fast-track your trademark filing for immediate Amazon Brand Registry enrollment. From clearance search and Form TM-A e-filing to attorney verification code management and brand store activation.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Apply for Trademark Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered IP Advocates • Same-Day Form TM-A Filing • Direct Attorney Verification Support</p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            {/* About Author */}
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h3>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in e-commerce brand protection, marketplace IP enforcement, and trademark prosecution under the Trade Marks Act, 1999. He assists hundreds of Indian D2C brands in securing marketplace exclusivity.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Enroll in Brand Registry</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Get your official trademark application number today and unlock Amazon A+ Content and Buy Box security.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        File Form TM-A Online
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/trademark-for-ecommerce" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">E-Com TM</span></Link></li>
                                    <li><Link href="/trademark-for-d2c-brand-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">D2C Brand</span></Link></li>
                                    <li><Link href="/difference-between-tm-and-r-symbol-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM vs (R) Rules</span></Link></li>
                                    <li><Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Search</span></Link></li>
                                    <li><Link href="/types-of-trademark-classes" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Classes</span></Link></li>
                                    <li><Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Guide</span></Link></li>
                                    <li><Link href="/international-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Global TM</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
