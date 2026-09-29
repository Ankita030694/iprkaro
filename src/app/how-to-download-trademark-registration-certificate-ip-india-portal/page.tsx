import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFilePdf,
    faDownload,
    faCheckCircle,
    faShieldHalved,
    faStamp,
    faCircleCheck,
    faLightbulb,
    faPhone,
    faClock,
    faTriangleExclamation,
    faCircleInfo,
    faLock,
    faCertificate,
    faGlobe,
    faKey,
    faPrint,
    faBuildingColumns,
    faFileLines,
    faMagnifyingGlass,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Download Trademark Certificate IP India Portal",
    description: validateAndNormalizeDescription(
        "Download your Trademark Registration Certificate (Form O-2) from IP India portal. Step-by-step guide on e-Register status search, PDF export, and legal use.",
        "app/how-to-download-trademark-registration-certificate-ip-india-portal/page.tsx"
    ),
    keywords: [
        "how to download trademark registration certificate from ip india portal",
        "ip india trademark certificate download online",
        "download form o2 trademark certificate india",
        "ip india eregister trademark certificate download",
        "trademark registration certificate pdf download free",
        "how to get registered trademark certificate online india",
        "digital signature verification trademark certificate india",
        "trademark certified copy vs e certificate difference",
        "trademark status registered but certificate not generated",
        "ipindiaonline certificate download step by step"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-download-trademark-registration-certificate-ip-india-portal",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How to Download Trademark Certificate IP India Portal",
        description: "Download your Trademark Registration Certificate (Form O-2) from IP India portal. Step-by-step guide on e-Register status search, PDF export, and legal use.",
        url: "https://www.iprkaro.com/how-to-download-trademark-registration-certificate-ip-india-portal",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-download-trademark-registration-certificate-ip-india-portal.png",
                width: 1200,
                height: 630,
                alt: "How to Download Trademark Registration Certificate from IP India Portal Official Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Download Trademark Certificate IP India Portal",
        description: "Download your Trademark Registration Certificate (Form O-2) from IP India portal. Step-by-step guide on e-Register status search, PDF export, and legal use.",
        images: ["https://www.iprkaro.com/images/og/how-to-download-trademark-registration-certificate-ip-india-portal.jpg"],
    }
};

const faqs = [
    {
        question: "Is the electronically downloaded trademark certificate valid for legal and commercial use?",
        answer: "Yes. Under Rule 56 of the Trade Marks Rules, 2017 and Section 23 of the Trade Marks Act, 1999, the digitally signed electronic certificate (Form O-2) generated through the IP India portal is a valid, legally enforceable certificate of registration. It is officially accepted for Amazon Brand Registry 2.0, GeM portal vendor registration, opening bank current accounts, police enforcement raids, customs recordation, and all commercial transactions."
    },
    {
        question: "Does the Trade Marks Registry still send physical paper certificates by post?",
        answer: "No. Since 2016, the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM) has completely discontinued the physical printing and postal dispatch of paper trademark certificates. All certificates are generated exclusively in electronic format (PDF) embedded with a cryptographic SHA-256 digital signature and made available for direct download on the IP India portal."
    },
    {
        question: "What should I do if my trademark status is 'Registered' but the download link is missing?",
        answer: "When a trademark status changes from 'Accepted & Advertised' to 'Registered', the national automated server generates certificates in periodic batches. It typically takes 7 to 15 working days for the downloadable PDF link to appear on the e-Register. If the certificate is still missing after 15 days, you can raise an e-Grievance ticket on the IP India portal or have your trademark attorney submit a formal letter to the appropriate jurisdictional registry branch."
    },
    {
        question: "Is there any official government fee to download the trademark registration certificate?",
        answer: "No. Downloading the official electronic Trademark Registration Certificate (Form O-2) from the IP India e-Register portal or e-Filing gateway is completely free of charge. The statutory registration fee is already covered during the initial application filing. You do not need to pay any extra fee to view, print, or download your e-certificate."
    },
    {
        question: "How do I fix the 'Signature Validity Unknown' question mark in Adobe Acrobat Reader?",
        answer: "A question mark (?) appears when Adobe Acrobat does not have the Trade Marks Registry Root CA digital certificate in its trusted certificates list. To resolve this: open the PDF in Adobe Acrobat, right-click the digital signature box, select 'Signature Properties' -> 'Show Signer's Certificate' -> 'Trust' tab -> 'Add to Trusted Certificates', check 'Certified documents', and click OK. Then click 'Validate Signature' to turn the question mark into a verified green checkmark."
    },
    {
        question: "Can I use the downloaded e-certificate to register for Amazon Brand Registry in India?",
        answer: "Yes. Amazon Brand Registry in India accepts the official e-certificate downloaded from the IP India portal. When submitting your application on Amazon Brand Registry, upload the clear, full-page PDF of Form O-2 along with your 7-digit trademark application number and high-resolution photos of your branded packaging or products bearing the permanent trademark logo."
    },
    {
        question: "What is the difference between a downloaded e-certificate and a Certified Copy of the Register?",
        answer: "The downloaded e-certificate is the primary electronic certificate of title issued to the owner for business use. A 'Certified Copy of Entry in the Register' (Rule 122) is a specialized, physically sealed evidentiary document requested via Form TM-M (with a government statutory fee of ₹900 to ₹1,000) specifically required by Indian High Courts and Commercial Courts under Section 137 of the Trade Marks Act during trademark infringement lawsuits."
    },
    {
        question: "How long is the downloaded trademark registration certificate valid in India?",
        answer: "A trademark registration certificate in India is valid for a statutory period of 10 years calculated from the original date of application filing (not the certificate issue date). You can renew your trademark registration indefinitely every 10 years by filing Form TM-R along with the statutory renewal fee within 6 months prior to the expiration date under Section 25 of the Trade Marks Act, 1999."
    }
];

const tocSections = [
    { id: "statutory-basis", title: "Legal Framework & Issuance" },
    { id: "prerequisites", title: "Prerequisites for Download" },
    { id: "method-1-public-portal", title: "Method 1: Public e-Register" },
    { id: "method-2-efiling-gateway", title: "Method 2: e-Filing Login" },
    { id: "certificate-anatomy", title: "Form O-2 Key Elements" },
    { id: "e-certificate-vs-certified-copy", title: "e-Certificate vs Certified Copy" },
    { id: "troubleshooting-errors", title: "Troubleshooting & Fixes" },
    { id: "post-download-checklist", title: "Post-Download Action Steps" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "expert-assistance", title: "Expert Legal Assistance" },
];

export default function DownloadTrademarkCertificateGuidePage() {
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
        "headline": "How to Download Trademark Registration Certificate from IP India Portal (Official Guide)",
        "description": "Comprehensive official walkthrough on downloading your Trademark Registration Certificate (Form O-2) from the IP India e-Register portal, verifying digital signatures, and understanding legal validity.",
        "image": "https://www.iprkaro.com/images/og/how-to-download-trademark-registration-certificate-ip-india-portal.png",
        "datePublished": "2026-09-29T10:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/how-to-download-trademark-registration-certificate-ip-india-portal"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Download Trademark Certificate IP India Portal",
        "url": "https://www.iprkaro.com/how-to-download-trademark-registration-certificate-ip-india-portal",
        "description": "Download your Trademark Registration Certificate (Form O-2) from IP India portal. Step-by-step guide on e-Register status search, PDF export, and legal use.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-download-trademark-registration-certificate-ip-india-portal#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-download-trademark-registration-certificate-ip-india-portal#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Download Trademark Certificate Guide", "item": "https://www.iprkaro.com/how-to-download-trademark-registration-certificate-ip-india-portal" }
        ]
    };

    const procedureListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure to Download Trademark Certificate from IP India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Navigate to the Official IP India e-Register Portal (ipindiaonline.gov.in/eregister)" },
            { "@type": "ListItem", "position": 2, "name": "Select Trade Mark Application / Registered Mark Search Option" },
            { "@type": "ListItem", "position": 3, "name": "Choose National / IRDI Number and Enter 7-Digit Application Number" },
            { "@type": "ListItem", "position": 4, "name": "Enter Captcha Verification Code and Click View Details" },
            { "@type": "ListItem", "position": 5, "name": "Verify that Application Status is Marked as Registered" },
            { "@type": "ListItem", "position": 6, "name": "Click on Hyperlinked Application Number or Certificate Tab to Download PDF" }
        ]
    };

    return (
        <div className="w-full max-w-full bg-white text-gray-900">
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureListSchema) }} />

            {/* HERO SECTION */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6] border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 pt-24 pb-8 sm:pb-12 lg:pt-32 lg:pb-16 relative z-10 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="text-left w-full min-w-0 lg:col-span-7">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm max-w-full">
                                <FontAwesomeIcon icon={faCertificate} className="w-3.5 h-3.5 text-[#6E5E93] mr-2 flex-shrink-0" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase truncate">Official IP India Portal • Form O-2 e-Certificate Guide</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-gray-900 tracking-tight break-words">
                                How to Download Trademark Registration Certificate from <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>IP India Portal (Official Guide)</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-700 font-medium leading-relaxed break-words">Has your trademark application reached the final<strong>&ldquo;Registered&rdquo;</strong>stage on the Trade Marks Registry portal? Under<strong>Section 23 of the Trade Marks Act, 1999</strong>, the Government of India issues an official<strong>Form O-2 Registration Certificate</strong>bearing a SHA-256 digital signature. Discover how to search your application status, access the public e-Register, download the verified PDF certificate for free, and resolve common digital signature validation errors.</p>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm flex-shrink-0" />
                                    <div>
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior Trademark Litigator & IP Compliance Specialist</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 29-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🛡️ 100% Free Official Download</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <Link href="/trademark-application-status" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Check Trademark Status <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-xs sm:text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                    IP Helpline: +91-9289707648
                                </a>
                            </div>
                        </div>

                        <div className="w-full min-w-0 lg:col-span-5 mt-4 lg:mt-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group max-w-lg mx-auto lg:max-w-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/how-to-download-trademark-registration-certificate-ip-india-portal.png"
                                    alt="Step by step guide to download trademark registration certificate from IP India official portal"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMBS */}
            <div className="bg-gray-50 border-b border-gray-200 py-3 sm:py-4">
                <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] overflow-x-auto">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Download Trademark Certificate Guide", href: "/how-to-download-trademark-registration-certificate-ip-india-portal" }
                    ]} />
                </div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="w-full max-w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-10 bg-white">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_320px] gap-6 lg:gap-8 items-start relative">

                        {/* DESKTOP TABLE OF CONTENTS */}
                        <aside className="hidden lg:block sticky top-28 xl:top-32 self-start max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar scrollbar-hide pb-8">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* ARTICLE BODY */}
                        <main className="w-full min-w-0 max-w-full overflow-hidden">
                            {/* MOBILE TABLE OF CONTENTS - ACCORDION */}
                            <div className="lg:hidden mb-6 not-prose w-full">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3 min-w-0">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                                            </span>
                                            <div className="min-w-0">
                                                <span className="text-sm font-bold text-gray-900 block truncate">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Sections)</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 flex-shrink-0">
                                            <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:hidden">
                                                Expand
                                            </span>
                                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full hidden group-open:inline-block">
                                                Close
                                            </span>
                                            <svg className="w-4 h-4 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </summary>
                                    <div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70">
                                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {tocSections.map((sec, idx) => (
                                                <a
                                                    key={sec.id}
                                                    href={`#${sec.id}`}
                                                    className="flex items-center space-x-2.5 p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/60 transition-all border border-transparent hover:border-purple-100"
                                                >
                                                    <span className="w-5 h-5 rounded-md bg-purple-100/80 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold flex-shrink-0">{idx + 1}</span>
                                                    <span className="truncate">{sec.title}</span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </details>
                            </div>

                            {/* QUICK ANSWER BLOCK */}
                            <div id="quick-answer" className="bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border-2 border-[#6E5E93]/30 rounded-2xl p-5 sm:p-6 mb-8 shadow-sm">
                                <div className="flex items-start space-x-3 mb-3">
                                    <div className="p-2 bg-[#6E5E93] text-white rounded-lg flex-shrink-0 mt-0.5">
                                        <FontAwesomeIcon icon={faLightbulb} className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#6E5E93] m-0">Quick Answer</p>
                                        <p className="text-base sm:text-lg font-bold text-gray-900 m-0">How to Download Trademark Certificate from IP India Portal?</p>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">To download your official Trademark Registration Certificate (Form O-2) for free, visit the official IP India portal at<strong>ipindiaonline.gov.in/eregister</strong>. Select<strong>&ldquo;Trade Mark Application / Registered Mark&rdquo;</strong>, choose<strong>&ldquo;National / IRDI Number&rdquo;</strong>, enter your 7-digit application number, and solve the captcha. If your status displays<strong>&ldquo;Registered&rdquo;</strong>, click on your application number link and navigate to the<strong>&ldquo;Certificate&rdquo;</strong>tab to download the cryptographically signed official PDF certificate.</p>
                            </div>

                            {/* SECTION 1 */}
                            <section id="statutory-basis" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Legal Basis & Electronic Certificate Issuance
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Under<strong>Section 23 of the Trade Marks Act, 1999</strong>read with<strong>Rule 56 of the Trade Marks Rules, 2017</strong>, when an application for registration of a trademark has been accepted and either has not been opposed, or the opposition has been decided in favor of the applicant, the Registrar of Trade Marks issues a formal Certificate of Registration.</p>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Since 2016, the Trade Marks Registry under the<strong>Controller General of Patents, Designs and Trade Marks (CGPDTM)</strong>has completely transitioned from paper-based dispatches to<strong>100% digital e-Certificates (Form O-2)</strong>. These electronic certificates are generated automatically by the central National Data Centre with an integrated SHA-256 digital signature, eliminating courier delays and risk of physical loss.</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                                    <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-1">Statutory Title Deed</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">Form O-2 serves as prima facie evidence of trademark ownership under Section 31 of the Trade Marks Act, 1999.</p>
                                    </div>
                                    <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faKey} className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-1">Cryptographic e-Sign</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">Embedded with a valid legal digital signature under the Information Technology Act, 2000 for zero forgery.</p>
                                    </div>
                                    <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-1">Zero Download Cost</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">No additional statutory fee is payable; certificate download from the official portal is 100% free forever.</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 2 */}
                            <section id="prerequisites" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Eligibility Checklist Before Downloading
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Before attempting to download your registration certificate, confirm that your application satisfies all legal and procedural requirements. A certificate cannot be downloaded if the file is still undergoing administrative examination or public journal advertisement.</p>

                                <div className="overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm text-xs sm:text-sm">
                                        <thead className="bg-[#FAF9F6] text-gray-900">
                                            <tr>
                                                <th className="p-3.5 border-b border-gray-200 font-bold">Portal Status</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-[#6E5E93]">Certificate Availability</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-gray-700">Required Applicant Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-700">
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-emerald-700 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5 mr-2 text-emerald-600 flex-shrink-0" />
                                                    Registered
                                                </td>
                                                <td className="p-3.5 font-semibold text-emerald-800">✅ Available Immediately</td>
                                                <td className="p-3.5">Proceed to e-Register download portal.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-amber-700">Accepted & Advertised</td>
                                                <td className="p-3.5 text-amber-800">❌ Not Generated Yet</td>
                                                <td className="p-3.5">Wait for mandatory 4-month statutory opposition period to expire.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-rose-700">Marked for Exam / Objected</td>
                                                <td className="p-3.5 text-rose-800">❌ Unavailable</td>
                                                <td className="p-3.5">Submit written examination reply or attend video hearing.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-purple-900">Opposed</td>
                                                <td className="p-3.5 text-purple-900">❌ Suspended</td>
                                                <td className="p-3.5">File Counter Statement (Form TM-O) within 2 months of notice.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-800">Abandoned / Refused</td>
                                                <td className="p-3.5 text-gray-500">❌ Ineligible</td>
                                                <td className="p-3.5">File review petition or fresh trademark application.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* SECTION 3 */}
                            <section id="method-1-public-portal" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Method 1: Download via Public e-Register Portal
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">This is the quickest and most popular method because it<strong>does not require any login credentials or Digital Signature (DSC)</strong>. Any applicant, trademark owner, or authorized agent can download the certificate directly.</p>

                                <div className="space-y-4 my-6">
                                    <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#6E5E93]/40 transition-colors">
                                        <div className="w-7 h-7 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 m-0">Visit the Official IP India Dynamic Portal</h4>
                                            <p className="text-xs text-gray-600 m-0 mt-1">Open your web browser (Chrome, Edge, or Firefox) and navigate to the official IP India Trade Mark Electronic Register at<code className="bg-purple-100 text-[#6E5E93] px-1.5 py-0.5 rounded text-[11px] font-mono ml-1">ipindiaonline.gov.in/eregister/</code>.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#6E5E93]/40 transition-colors">
                                        <div className="w-7 h-7 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 m-0">Select Trade Mark Application Option</h4>
                                            <p className="text-xs text-gray-600 m-0 mt-1">From the left navigation menu, click on<strong>&ldquo;Trade Mark Application / Registered Mark&rdquo;</strong>.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#6E5E93]/40 transition-colors">
                                        <div className="w-7 h-7 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 m-0">Choose National / IRDI Number</h4>
                                            <p className="text-xs text-gray-600 m-0 mt-1">Select the radio button labeled<strong>&ldquo;National / IRDI Number&rdquo;</strong>to search domestic Indian trademark applications.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#6E5E93]/40 transition-colors">
                                        <div className="w-7 h-7 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 m-0">Enter Application Number & Captcha</h4>
                                            <p className="text-xs text-gray-600 m-0 mt-1">Type your 7-digit trademark application number (e.g. 5892143), enter the security captcha shown on the screen, and click the<strong>&ldquo;View&rdquo;</strong>button.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#6E5E93]/40 transition-colors">
                                        <div className="w-7 h-7 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                            5
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 m-0">Click the Hyperlinked Application Number</h4>
                                            <p className="text-xs text-gray-600 m-0 mt-1">The search results table will appear showing your Word Mark, Class, and Status. Click directly on the blue hyperlinked<strong>Application Number</strong>to open the comprehensive e-Register record.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl hover:border-emerald-300 transition-colors">
                                        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                            6
                                        </div>
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold text-emerald-900 m-0">Download the Official PDF Certificate</h4>
                                            <p className="text-xs text-emerald-800 m-0 mt-1">On the top or bottom of the application summary page, locate the button labeled<strong>&ldquo;Certificate&rdquo;</strong>or<strong>&ldquo;View Registration Certificate&rdquo;</strong>. Click it to open and save the high-resolution official PDF file.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 4 */}
                            <section id="method-2-efiling-gateway" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Method 2: Download via e-Filing Login Gateway
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">If you filed your trademark through an registered attorney account or personal proprietor login on the<Link href="/e-filing-trademark" className="text-[#6E5E93] font-semibold underline hover:text-[#5a4c7a]">IP India e-filing comprehensive portal</Link>, you can also retrieve your certificate through your authenticated user dashboard:</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                                        <div className="flex items-center space-x-2 text-indigo-900 font-bold mb-2">
                                            <FontAwesomeIcon icon={faLock} className="w-4 h-4 text-[#6E5E93]" />
                                            <span>Step A: Gateway Authentication</span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Visit <code className="font-mono text-[11px] bg-gray-100 p-0.5 rounded">ipindiaonline.gov.in/trademarkefiling/</code>. Plug in your Class 3 USB Token Digital Signature Certificate (DSC) or enter your registered User ID and Password.</p>
                                    </div>

                                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                                        <div className="flex items-center space-x-2 text-indigo-900 font-bold mb-2">
                                            <FontAwesomeIcon icon={faFilePdf} className="w-4 h-4 text-[#6E5E93]" />
                                            <span>Step B: Certificate Download Tab</span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Navigate to <strong>Downloads & Reports &rarr; Certificate / Order Download</strong>. Enter the Application Number, select Class, and click <strong>Download Certificate</strong> to access the digitally stamped file.</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 5 */}
                            <section id="certificate-anatomy" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Key Details on Form O-2 Registration Certificate
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">The official Certificate of Registration issued under<strong>Form O-2</strong>contains specific statutory elements that substantiate your exclusive rights. Carefully verify every field upon downloading:</p>

                                <div className="space-y-3 my-6">
                                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">1. National Emblem & Trade Marks Registry Seal</p>
                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Displays the Lion Capital of Ashoka and the official bilingual seal of the Controller General of Patents, Designs and Trade Marks.</p>
                                    </div>

                                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">2. Unique Registration Certificate Number</p>
                                        <p className="text-xs text-gray-600 m-0 mt-0.5">A distinct sequential government registration number assigned at the exact moment of certificate compilation.</p>
                                    </div>

                                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">3. Application Number & Date of Registration</p>
                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Crucially, the date of registration is deemed to be the<strong>date of original filing</strong>under Section 23(1), guaranteeing retroactive legal priority.</p>
                                    </div>

                                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">4. Class Number & Specification of Goods/Services</p>
                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Defines the exact <Link href="/types-of-trademark-classes" className="text-[#6E5E93] underline font-semibold">trademark class (1 to 45)</Link> and the exhaustive list of goods and services protected under statutory monopoly.</p>
                                    </div>

                                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">5. Registered Proprietor Name & Principal Place of Business</p>
                                        <p className="text-xs text-gray-600 m-0 mt-0.5">The legal entity name (Individual, Private Limited Company, LLP, or Partnership) and verified legal address on record.</p>
                                    </div>

                                    <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">6. Legal Disclaimers & Association Conditions</p>
                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Any disclaimer imposed by the Registrar (e.g., &ldquo;Registration gives no right to the exclusive use of descriptive words...&rdquo;).</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 6 */}
                            <section id="e-certificate-vs-certified-copy" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    e-Certificate vs Certified Copy of the Register
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">A common point of confusion among business founders is the difference between the freely downloaded e-Certificate and a<strong>Certified Copy of Entry in the Register</strong>. Both serve distinct legal functions:</p>

                                <div className="overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm text-xs sm:text-sm">
                                        <thead className="bg-[#FAF9F6] text-gray-900">
                                            <tr>
                                                <th className="p-3.5 border-b border-gray-200 font-bold">Parameter</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-[#6E5E93]">Downloaded e-Certificate (Form O-2)</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-indigo-900">Certified Copy (Section 137 / Rule 122)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-700">
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Official Purpose</td>
                                                <td className="p-3.5">Standard business verification, Amazon Brand Registry, banking, social media verification.</td>
                                                <td className="p-3.5">Judicial evidence submitted in High Court & Commercial Court trademark infringement trials.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Statutory Fee</td>
                                                <td className="p-3.5 font-semibold text-emerald-700">₹0 (Free Download)</td>
                                                <td className="p-3.5 font-semibold text-gray-900">₹900 (e-filing) / ₹1,000 (physical) via Form TM-M</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Format</td>
                                                <td className="p-3.5">Cryptographically signed digital PDF</td>
                                                <td className="p-3.5">Certified hard copy bearing physical embossing and Registrar seal</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Issuance Time</td>
                                                <td className="p-3.5">Instant online download</td>
                                                <td className="p-3.5">15 to 30 working days from application</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* SECTION 7 */}
                            <section id="troubleshooting-errors" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Troubleshooting Common Download Issues & Errors
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">When downloading certificates from the government server, users may encounter specific technical glitches. Here is how to resolve them:</p>

                                <div className="space-y-4 my-6">
                                    <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
                                        <div className="flex items-start space-x-3">
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="text-xs sm:text-sm font-bold text-gray-900 m-0">Issue 1: Status is Registered but &ldquo;Certificate Not Ready&rdquo;</h4>
                                                <p className="text-xs text-gray-700 m-0 mt-1"><strong>Cause:</strong> The registration order has been passed by the Hearing Officer/Examiner, but the automated PDF generation queue at the National Data Centre has not compiled the document yet.<br /><strong>Solution:</strong> Wait 7 to 14 days. If the issue persists past 15 days, email <code className="font-mono text-[11px] bg-amber-100 px-1 py-0.5 rounded">ipindia-tm@nic.in</code> with your application number.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-indigo-50/80 border border-indigo-200 rounded-xl p-4">
                                        <div className="flex items-start space-x-3">
                                            <FontAwesomeIcon icon={faLock} className="w-4 h-4 text-[#6E5E93] mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="text-xs sm:text-sm font-bold text-gray-900 m-0">Issue 2: Digital Signature Shows &ldquo;Validity Unknown&rdquo; (?)</h4>
                                                <p className="text-xs text-gray-700 m-0 mt-1"><strong>Cause:</strong> Adobe Acrobat Reader has not added the Controller General&apos;s Root Certificate Authority to its local trust store.<br /><strong>Solution:</strong> Open PDF in Adobe Acrobat &rarr; Click Signature Panel &rarr; Right Click Signer Name &rarr; Select &ldquo;Show Signature Properties&rdquo; &rarr; Click &ldquo;Show Signer&apos;s Certificate&rdquo; &rarr; Navigate to &ldquo;Trust&rdquo; tab &rarr; Click &ldquo;Add to Trusted Certificates&rdquo; &rarr; Check &ldquo;Certified documents&rdquo; &rarr; Click OK and &ldquo;Validate Signature&rdquo;.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-4">
                                        <div className="flex items-start space-x-3">
                                            <FontAwesomeIcon icon={faCircleInfo} className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="text-xs sm:text-sm font-bold text-gray-900 m-0">Issue 3: Typographical Errors in Applicant Name or Address</h4>
                                                <p className="text-xs text-gray-700 m-0 mt-1"><strong>Cause:</strong> Data entry clerical errors during initial Form TM-A submission.<br /><strong>Solution:</strong> File <Link href="/how-to-update-or-change-details-in-an-existing-trademark-registation" className="text-[#6E5E93] underline font-semibold">Form TM-M under Section 58</Link> of the Trade Marks Act for correction of clerical errors along with supporting incorporation or identification proofs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 8 */}
                            <section id="post-download-checklist" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Essential Next Steps After Certificate Download
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">Obtaining your registration certificate is a landmark milestone for your brand. Maximize your legal protections by completing this 5-point action plan:</p>

                                <div className="space-y-3 my-6">
                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">1. Switch from ™ to the Registered ® Symbol Immediately</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Now that the certificate has been issued, you can lawfully use the <Link href="/difference-between-tm-and-r-symbol-in-india" className="text-[#6E5E93] underline">® registered symbol</Link> across your website, packaging, social media, and advertising. (Note: Using ® before certificate issuance is an offense under Section 107).</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">2. Enroll in Amazon Brand Registry & E-Commerce Protection</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Upload your PDF certificate to <Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[#6E5E93] underline">Amazon Brand Registry</Link> and Flipkart Brand Approval to unlock A+ Content, Brand Stores, and automated counterfeit listing takedown tools.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">3. Register with Indian Customs for Anti-Counterfeiting Import Blocks</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">File your certificate under the Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007 with <Link href="/customs-recordation-of-trademark-in-india-ipr-rules" className="text-[#6E5E93] underline">Indian Customs Recordation</Link> to seize fake goods at ports.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">4. Update Bank Current Accounts & Government GeM Profiles</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Submit your Form O-2 certificate to your bank to operate merchant accounts under your brand trade name and list products as an OEM on the Government e-Marketplace (GeM).</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">5. Calendar the 10-Year Statutory Renewal Deadline</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">Your registration remains in force for 10 years from the date of application. Mark your corporate compliance calendar to file <Link href="/how-to-renew-a-trademark" className="text-[#6E5E93] underline">trademark renewal (Form TM-R)</Link> before expiration under Section 25.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 9 */}
                            <section id="faqs" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                    Frequently Asked Questions (Certificate Download)
                                </h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:border-[#6E5E93]/40 transition-colors">
                                            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-2 flex items-start">
                                                <span className="text-[#6E5E93] mr-2 font-extrabold flex-shrink-0">Q{index + 1}.</span>
                                                <span>{faq.question}</span>
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0 pl-6 border-l-2 border-purple-100">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* SECTION 10 */}
                            <section id="expert-assistance" className="mb-8 scroll-mt-24">
                                <div className="bg-gradient-to-br from-[#1A1A24] via-[#2A2A38] to-[#1A1A24] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#6E5E93]/20 rounded-full blur-3xl pointer-events-none"></div>
                                    <h2 className="text-lg sm:text-2xl font-extrabold mb-3 text-white">
                                        Get Expert Legal Assistance for Your Trademark
                                    </h2>
                                    <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">Having trouble locating your certificate, resolving digital signature validation issues, filing Form TM-M clerical rectifications, or securing a sealed Certified Copy for court litigation? The senior IP attorneys and registered trademark agents at IPR Karo are ready to assist you at every step.</p>

                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                        <Link href="/contact-us" className="w-full sm:w-auto">
                                            <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                                Consult Trademark Attorney <span className="ml-2 font-black">&rarr;</span>
                                            </button>
                                        </Link>
                                        <a href="tel:+919289707648" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl border border-white/20 transition-all text-xs sm:text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                            Call Attorney: +91-9289707648
                                        </a>
                                    </div>
                                </div>
                            </section>

                        </main>

                        {/* DESKTOP SIDEBAR */}
                        <aside className="hidden lg:block sticky top-28 xl:top-32 self-start space-y-6 max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar scrollbar-hide pb-8">
                            {/* INSTANT STATUS CARD */}
                            <div className="bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 rounded-2xl p-5 border border-purple-100 shadow-sm">
                                <div className="flex items-center space-x-2 text-[#6E5E93] font-bold text-xs uppercase tracking-wider mb-2">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3.5 h-3.5" />
                                    <span>Instant Status Check</span>
                                </div>
                                <p className="text-base font-bold text-gray-900 mb-2">Track Certificate Status</p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-4">Check whether your trademark has reached the &ldquo;Registered&rdquo; milestone or requires response to Registry examination.</p>
                                <Link href="/trademark-application-status" className="block w-full">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm uppercase tracking-wider">
                                        Check Application Status
                                    </button>
                                </Link>
                            </div>

                            {/* EMERGENCY HELPLINE */}
                            <div className="bg-[#1A1A24] rounded-2xl p-5 text-white shadow-md">
                                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                                    <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
                                    <span>Direct Attorney Support</span>
                                </div>
                                <p className="text-base font-bold text-white mb-2">Certificate Not Generated?</p>
                                <p className="text-xs text-gray-300 leading-relaxed mb-4">Get fast assistance with TMR expedited grievance escalations and certified copy requisitions.</p>
                                <a href="tel:+919289707648" className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                    +91-9289707648
                                </a>
                            </div>

                            {/* QUICK LINKS */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Related Guides & Services</p>
                                <ul className="space-y-2.5 text-xs">
                                    <li><Link href="/difference-between-tm-and-r-symbol-in-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>Difference Between TM and ®</Link></li>
                                    <li><Link href="/amazon-brand-registry-trademark-requirements-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>Amazon Brand Registry Setup</Link></li>
                                    <li><Link href="/how-to-renew-a-trademark" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>Trademark 10-Year Renewal</Link></li>
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors"><span className="mr-2 text-purple-400">&rarr;</span>Registration Process & Steps</Link></li>
                                </ul>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </div>
    );
}
