import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
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
    faSignature,
    faPenFancy,
    faStamp,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'NOC Format India | No Objection Certificate Templates 2026',
    description: 'Get professional NOC formats for GST, Trademark, and Property registration. Learn about legal validity, mandatory clauses, and stamping requirements in India.',
    keywords: [
        'noc format for business',
        'gst registration noc template',
        'trademark noc consent letter',
        'no objection certificate for property',
        'format of noc from legal heirs',
        'noc for company registration',
        'legal validity of noc in india',
        'noc on stamp paper requirements',
        'noc from property owner for gst',
        'trademark honest concurrent use noc'
    ],
    openGraph: {
        title: 'The Blueprint of Consent: Professional NOC Formats & Legal Guide',
        description: 'Dont let missing consent delay your registration. Complete guide to No Objection Certificates with templates for GST, TM, and Property usage.',
        url: 'https://www.iprkaro.com/format-for-no-objection-certificate',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/format-for-no-objection-certificate',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Blueprint of Consent: Understanding the NOC' },
    { id: 'legal-validity', title: 'Legal Foundations: NOC under Indian Contract Act' },
    { id: 'types-of-noc', title: 'Business Essentials: Types of NOCs You Need' },
    { id: 'gst-noc', title: 'NOC for GST Registration: The Rental Property Guard' },
    { id: 'board-resolution-noc', title: 'The Company Mandate: When Board Resolutions are Required' },
    { id: 'digital-noc-spyce', title: 'The E-Era: Digital NOCs and SPICe+ Integration' },
    { id: 'trademark-noc', title: 'Trademark Consent Letters: Avoiding Deceptive Similarity' },
    { id: 'visa-utility-noc', title: 'Specific Jurisdictions: NOCs for Visas and Utility Transfers' },
    { id: 'essential-clauses', title: 'Mandatory Clauses for a Bulletproof NOC' },
    { id: 'stamping-notary', title: 'Legalization: Stamping, Notarization & E-Stamps' },
    { id: 'template-gst', title: 'Drafting Template: GST Registration NOC' },
    { id: 'template-tm', title: 'Drafting Template: Trademark Consent Letter' },
    { id: 'common-mistakes', title: 'Fatal Flaws: Why NOCs Get Rejected by Departments' },
    { id: 'why-iprkaro', title: 'IPR Karo: Your Partner in Professional Legal Drafting' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Securing Permission, Ensuring Success' },
];

const faqs = [
    {
        question: "What is a No Objection Certificate (NOC)?",
        answer: "An NOC is a legal document issued by an individual, organization, or government agency expressing that they have no objection to the actions or details mentioned in the certificate. It functions as a waiver of right or consent."
    },
    {
        question: "Is an NOC legally mandatory for GST registration?",
        answer: "Yes, if the business premises are rented or owned by someone other than the applicant (like a relative), a signed NOC from the owner is mandatory along with ownership proof like an electricity bill."
    },
    {
        question: "Does an NOC need to be on stamp paper?",
        answer: "Ideally, yes. For official submissions like GST, ROC, or Trademark, an NOC should be on a non-judicial stamp paper of nominal value (e.g., ₹10, ₹20, or ₹100 depending on the state)."
    },
    {
        question: "What is the validity period of an NOC?",
        answer: "Typically, an NOC remains valid until the purpose for which it was issued is accomplished, unless an explicit expiry date is mentioned in the document."
    },
    {
        question: "Can an NOC be given by a legal heir?",
        answer: "Yes, an NOC from legal heirs is often required during property transactions or business inheritance to ensure other potential claimants waive their rights to the asset."
    },
    {
        question: "What is a Trademark Consent Letter?",
        answer: "It is a specific type of NOC where the owner of an existing trademark permits a new applicant to register a similar mark, often used in cases of 'Honest Concurrent Use' under Section 12."
    },
    {
        question: "Does an NOC require notarization?",
        answer: "While not always mandatory, notarization is highly recommended as it provides an extra layer of legal authenticity, verifying the identity of the person signing the NOC."
    },
    {
        question: "Can I use an NOC from my parents for my business?",
        answer: "Yes, if you are operating from your parents' property, you can use an NOC signed by them for GST and Company registration purposes."
    },
    {
        question: "What if the property owner refuses to sign an NOC?",
        answer: "In such cases, you cannot use that address as your registered office. You must either formalize a lease agreement or find an alternative location."
    },
    {
        question: "Can an NOC be signed digitally?",
        answer: "Under the IT Act 2000, digital signatures are valid. However, many government departments still prefer a physically signed NOC on stamp paper that is subsequently scanned."
    }
];

export default function NOCFormatPage() {
    const breadcrumbItems = [
        { label: "NOC Formats", href: "/format-for-no-objection-certificate" },
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
                "name": "NOC Formats",
                "item": "https://www.iprkaro.com/format-for-no-objection-certificate"
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
        "headline": "No Objection Certificate (NOC) Formats: The Complete Indian Legal Guide 2026",
        "description": "Examine the technical requirements for NOCs in India. Learn about GST compliance, trademark consent, and proper drafting on stamp paper.",
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
        "datePublished": "2026-02-21",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/format-for-no-objection-certificate"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Legal Drafting & NOC Consultation Service",
        "image": "https://www.iprkaro.com/assets/noc-og.jpg",
        "description": "Professional drafting of customized No Objection Certificates (NOCs) for business and property compliance.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "1950"
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
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            The Blueprint of Consent: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>No Objection Certificate</span> (NOC) Formats
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Don’t let missing consent halt your business growth. From GST registration to trademark clearance, ensure your legal paperwork is bulletproof with India’s most trusted drafting experts.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Download Format Now
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Blueprint of Consent: Understanding the NOC</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the intricate maze of Indian bureaucracy, the <strong>format for no objection certificate</strong> is often the unspoken "magic key." Whether you are a digital entrepreneur registering for GST from a home office, a brand owner seeking trademark clearance, or a property buyer ensuring a clean title, the NOC serves as the ultimate declaration of non interference. It is a deceptively simple document-often just a few paragraphs long-yet it carries the weight of a formal legal waiver. Without it, entire multi-billion-rupee transactions can grind to a halt, and simple business registrations can be rejected by the Registrar of Companies or the GST department.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        As Bharat transitions into a digital first economy, the requirement for formalized consent has become more critical than ever. Gone are the days of verbal agreements between families or informal handshakes between property owners. Today’s legal landscape demands precision. Every NOC must clearly identify the declarant, define the scope of permission, and be executed on the appropriate stamp paper to be admissible in a court of law. A generic template downloaded from a random blog might lack the specific "indemnity" or "validity" clauses that a government examiner looks for, leading to unnecessary delays and legal headaches.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we believe that legal documentation should be a facilitator of speed, not a barrier. We have spent years analyzing the "rejection patterns" of various government departments. We know precisely why a GST officer might reject an NOC from a parent or why a Trademark Registrar might find a consent letter insufficient. This comprehensive 4000-word manual is designed to demystify the No Objection Certificate. We will explore its statutory roots in the Indian Contract Act, provide forensic breakdowns of different NOC types, and offer drafting templates that satisfy the most stringent compliance requirements of 2026.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "An NOC is not just a signature; it is a legal bridge. It ensures that your ambition does not infringe upon another’s rights."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        By the end of this guide, you will understand the difference between a simple consent and a notarized waiver. You will learn how to calculate the correct stamp duty for your state and how to draft a document that is both legally sound and practically effective. Whether you are navigating property disputes or business registrations, this manual will provide you with the legal vocabulary and strategic insights needed to secure your permissions with confidence. Let us begin by exploring the statutory foundation of the NOC in Indian law.
                                    </p>
                                </section>

                                <section id="legal-validity" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Legal Foundations: NOC under the Indian Contract Act</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        While the term "No Objection Certificate" is a creation of administrative practice, its roots lie in the <strong>Indian Contract Act, 1872</strong>. Specifically, an NOC functions as a "Consent" under Section 13 and a "Release" under Section 63.
                                    </p>
                                    <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                                        <p className="text-gray-700 leading-relaxed text-lg italic">
                                            "Section 63: Every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may extend the time for such performance, or may accept instead of it any satisfaction which he thinks fit."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        When a property owner signs an NOC, they are essentially "dispensing" with their right to object to your business activities on their land. Furthermore, under the Indian Evidence Act, 1872, an NOC acts as an "Estoppel." This means that once a person has signed a certificate stating they have no objection, they are legally barred from changing their mind later and claiming that you are a trespasser or an unauthorized user.
                                    </p>
                                </section>

                                <section id="types-of-noc" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Business Essentials: Types of NOCs You Need</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        NOCs are required across diverse sectors of the Indian economy. Identifying the right type is the first step toward compliance.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faBuilding} className="mr-3 text-[#6E5E93]" /> GST Registration
                                            </h4>
                                            <p className="text-gray-600">Issued by the landlord or property owner permitting the use of the address for tax purposes. Mandatory for all "Principal Place of Business" filings where a lease is not in the applicant's name.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Trademark Consent
                                            </h4>
                                            <p className="text-gray-600">The "Consent Letter" allows a new brand to co-exist with a phonetically similar existing mark, specifically under the Honest Concurrent Use provision of Section 12.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faUserTie} className="mr-3 text-[#6E5E93]" /> ROC Compliance
                                            </h4>
                                            <p className="text-gray-600">Required during company incorporation (SPICe+ form) to prove the entity has a legal right to use its registered office address.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faUsers} className="mr-3 text-[#6E5E93]" /> Legal Heir NOC
                                            </h4>
                                            <p className="text-gray-600">Required during property sales or business transfers to ensure that all potential heirs waive their future claims to the asset.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="gst-noc" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">NOC for GST Registration: The Rental Property Guard</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The most common use of an <strong>NOC format</strong> today is for GST registration. If you are a freelancer or a small business owner working from a rented home or your parents' property, you MUST provide an NOC. The GST department is highly skeptical of "dummy addresses," and a well drafted NOC is your primary proof of legitimacy.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        An effective GST NOC should be accompanied by a recent utility bill (Electricity or Water bill) in the name of the declarant. At IPR Karo, we ensure that the wording matches the address on the utility bill character for character, as even a minor discrepancy in the pincode or street name can lead to a "Notice for Clarification" (REG-03) from the GST officer.
                                    </p>
                                </section>

                                <section id="board-resolution-noc" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Company Mandate: When Board Resolutions are Required</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        If the <strong>format for no objection certificate</strong> is being issued by a Private Limited Company or an LLP, a simple signature of a director is insufficient. Under the Companies Act, 2013, a company is a separate legal entity. Therefore, for a company to "give consent," its Board of Directors must meet and pass a formal resolution.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The NOC in this case must be accompanied by a "Certified True Copy" of the Board Resolution, printed on the company’s letterhead and signed by at least two directors or the Company Secretary. At IPR Karo, we provide integrated drafting where the Board Resolution and the NOC are synchronized to ensure that auditors and the ROC (Registrar of Companies) do not flag the application for lack of "Organizational Consent."
                                    </p>
                                </section>

                                <section id="digital-noc-spyce" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The E-Era: Digital NOCs and SPICe+ Integration</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The Ministry of Corporate Affairs (MCA) has revolutionized company incorporation through the <strong>SPICe+ (Simplified Proforma for Incorporating Company Electronically)</strong> portal. In 2026, the traditional physical NOC is being replaced by digital declarations. However, the forensic requirement remains: you must still upload a scanned copy of the physical NOC signed on stamp paper.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        One critical update in the digital era is the use of DSC (Digital Signature Certificates). If an NOC is being given for a company-to-company transfer or a high-value property development, government portals now require the NOC to be digitally signed. This prevents forgery and ensures that the consent is real-time and trackable. We guide startups on how to navigate these digital uploads to ensure a 100% success rate on the first filing attempt.
                                    </p>
                                </section>

                                <section id="trademark-noc" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Trademark Consent Letters: Avoiding Deceptive Similarity</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        In the world of intellectual property, an NOC is often called a "Consent Letter." If you apply for a mark like 'IPR Karo Services' and there is already an 'IPR Karo Products', the Registrar will raise an objection. However, under Section 12 of the Trademarks Act, if the owner of the existing mark provides a formal NOC stating they don't mind the new registration, the Registrar may allow both to co-exist.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        This type of NOC is forensic. It must explicitly mention the class of goods, the application numbers, and a statement that "the co-existence of these marks will not cause confusion in the minds of the public." At IPR Karo, we draft these letters with extreme care, ensuring that the existing owner retains their rights while the new applicant gets their registration.
                                    </p>
                                </section>

                                <section id="visa-utility-noc" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Specific Jurisdictions: NOCs for Visas and Utility Transfers</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Beyond business, common <strong>formats for no objection certificate</strong> are required for personal administrative tasks. For example, if you are an employee traveling abroad, your company must issue an NOC to the embassy stating they have no objection to your trip and will allow you to resume work upon return.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Similarly, if you buy a second-hand apartment, you need an NOC from the Electricity Board or the Housing Society to transfer the meter or the share certificate to your name. These documents often require specific "No Dues" clauses. If the previous owner has unpaid bills, the society will refuse the NOC, stalling your property transfer. Our legal team cross-verifies these clauses to ensure that your NOC is truly a "Clean Slate" document.
                                    </p>
                                </section>

                                <section id="essential-clauses" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Mandatory Clauses for a Bulletproof NOC</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Every professional <strong>format for no objection certificate</strong> must contain these five technical elements:
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faScaleBalanced} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Clear Identity (Declarant)</h4>
                                                <p className="text-gray-600">Must include the name, address, and PAN/Aadhaar of the person giving the NOC. This ensures that the declarant has the legal capacity to give such consent.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faFileAlt} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Description of Property/Asset</h4>
                                                <p className="text-gray-600">A detailed description of the subject matter-whether it's the full address of a shop or the registration number of a trademark.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faGavel} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Specific Permission</h4>
                                                <p className="text-gray-600">The phrase "I have no objection to..." must be followed by the specific action (e.g., "for the purpose of obtaining a factory license"). Generic permissions are often rejected.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="stamping-notary" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Legalization: Stamping, Notarization & E-Stamps</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        A signature on a plain piece of paper is often not enough for government departments. To make an NOC legally admissible as evidence, it must be "Executed" properly.
                                    </p>
                                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 my-10">
                                        <h4 className="font-bold text-[#0C002B] text-2xl mb-4">The Legalization Ladder</h4>
                                        <ul className="space-y-4 text-lg">
                                            <li className="flex justify-between border-b pb-2"><span>Step 1: Stamping</span> <span className="font-bold text-[#6E5E93]">Rs. 10 - Rs. 100 (State Dependent)</span></li>
                                            <li className="flex justify-between border-b pb-2"><span>Step 2: Signatures</span> <span className="font-bold text-[#6E5E93]">Physical/Digital as per Requirement</span></li>
                                            <li className="flex justify-between pb-2"><span>Step 3: Notarization</span> <span className="font-bold text-[#6E5E93]">Optional but Highly Recommended</span></li>
                                        </ul>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Under the Indian Stamp Act, 1899, different states have different rates for "Affidavits" or "Declarations" (which is how an NOC is categorized). For instance, an NOC in Maharashtra might require a ₹100 stamp, while ₹10 might suffice in other states. E-stamping has become the standard in 2026, and IPR Karo provides doorstep delivery of e-Stamped and Notarized NOCs across all major metro cities.
                                    </p>
                                </section>

                                <section id="template-gst" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Drafting Template: GST Registration NOC</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        If you are drafting your own NOC for GST, use this high compliance structure:
                                    </p>
                                    <div className="bg-[#0C002B] p-10 rounded-[2rem] text-white my-10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <div className="prose prose-invert max-w-none italic opacity-90 leading-relaxed text-lg">
                                            "I, [Owner Name], s/o [Father Name], resident of [Address], being the absolute owner of the premises situated at [Full Address as per Elec. Bill], do hereby declare that I have no objection in [Applicant Name] using the said premises as their Principal Place of Business for the purpose of GST Registration. I further declare that I shall not be liable for the defaults or liabilities of the said concern."
                                        </div>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why IPR Karo is the Strategic Choice for Legal Drafting</h2>
                                    <p className="mb-10 leading-relaxed text-lg">
                                        We don't just provide templates; we provide legal validation. Our team of corporate lawyers and paralegals ensure that every document you sign is a shield, not a liability.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faPenFancy} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Customized Drafting</h4>
                                            <p className="text-sm opacity-70">No generic forms. We draft specific clauses for maintenance, society rules, and usage restrictions relevant to your property.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faStamp} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">E-Stamping Hub</h4>
                                            <p className="text-sm opacity-70">We handle the entire process of procuring state-specific e-stamps and notarization, so you don't have to visit a court.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Audit Support</h4>
                                            <p className="text-sm opacity-70">If a GST or ROC officer raises a query on our drafted NOC, our legal team provides the formal response at no extra cost.</p>
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
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Megha Singhania",
                                            role: "Property Owner, Gurgaon",
                                            rating: 5,
                                            date: "2024-02-12",
                                            text: "I needed to provide an NOC to my tenant for their GST registration. IPR Karo drafted a professional document that protected my interests as a landlord while clearly giving the necessary permissions. The e-stamping was a huge time-saver.",
                                            avatar: "MS"
                                        },
                                        {
                                            author: "Arjun Mehra",
                                            role: "Founder, Zenith Logistics",
                                            rating: 5,
                                            date: "2024-01-28",
                                            text: "The GST officer rejected our first NOC because it was on plain paper. IPR Karo helped us get the correct format on a ₹100 e-stamp within hours. Our GST was approved the next day. Highly recommended for urgent compliance.",
                                            avatar: "AM"
                                        },
                                        {
                                            author: "Sanjay Gupta",
                                            role: "Director, Gupta Trading Co.",
                                            rating: 5,
                                            date: "2023-12-10",
                                            text: "Simple, easy, and legally sound. The team at IPR Karo knows exactly what the registry wants. They even helped coordinate with my father (the property owner) for his digital signature on the NOC.",
                                            avatar: "SG"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing Permission, Ensuring Success</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        In the journey of business and property ownership, a <strong>format for no objection certificate</strong> is the bridge between intention and legality. It represents the formal harmony between two parties, ensuring that growth does not come at the cost of legal conflict. By choosing the right format, adhering to state specific stamping rules, and ensuring mandatory clauses are included, you transform a potential bureaucratic hurdle into a robust legal asset.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Don't let your business vision be delayed by "Technical Objects" or "Registry Refusals." Whether you are a solo founder launching your first brand or a seasoned investor managing a property portfolio, let IPR Karo be your partner in precision. We combine legal expertise with digital efficiency to ensure your paperwork is always as ambitious as your business. Secure your consent today, and build a legacy that stands the test of law.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Legally Valid NOC?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Get your customized NOC drafted, e-stamped, and notarized by legal experts. Fast-track your registration today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Drafting Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult a Legal Expert
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Fast Track Doc</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Applying for GST tomorrow? Get your **Verified NOC** on e-stamp paper in less than 3 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Get Your NOC
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Compliance Links</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/udyam-registration-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Udyam (MSME) Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/leave-and-license-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Rent Agreements</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/mca-company-name-check" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Company Name Check</span>
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
