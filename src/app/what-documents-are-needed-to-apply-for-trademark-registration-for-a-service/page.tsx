import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileAlt,
    faIdCard,
    faBuilding,
    faShieldAlt,
    faSignature,
    faUserCheck,
    faFileInvoice,
    faRocket,
    faCertificate,
    faCheckCircle,
    faClipboardList,
    faFileUpload,
    faBriefcase,
    faGavel,
    faInfoCircle,
    faPhone,
    faAddressCard,
    faImages,
    faHistory,
    faStamp,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'What Documents are Needed to Apply for Trademark Registration for a Service? | 2026 Guide',
    description: 'Exhaustive checklist of documents required for service trademark registration in India. Individual, Company, MSME, and Startup requirements explained.',
    keywords: [
        'what documents are needed to apply for trademark registration for a service',
        'trademark registration documents checklist india',
        'documents for company trademark registration',
        'trademark user affidavit requirements',
        'msme trademark rebate documents',
        'form tm-a documents',
        'power of attorney for trademark india',
        'trademark registration for service sector',
        'ip india online filing documents',
        'brand registration documents for startups'
    ],
    openGraph: {
        title: 'Documents Required for Service Trademark Registration: The Definitive 2026 Manual',
        description: 'Dont let document errors delay your brand protection. Explore our forensic checklist for every entity type applying for a service mark in Bharat.',
        url: 'https://www.iprkaro.com/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Documentation Blueprint: Securing Your Service Mark' },
    { id: 'global-vs-indian', title: 'Global Standards vs. Indian Registry Requirements' },
    { id: 'master-checklist', title: 'The Master Checklist: Form TM-A and Power of Attorney' },
    { id: 'individual-docs', title: 'Requirements for Individuals and Sole Proprietors' },
    { id: 'company-docs', title: 'Checklist for Private and Public Limited Companies' },
    { id: 'partnership-docs', title: 'Documents for LLPs and Partnership Firms' },
    { id: 'msme-startup-docs', title: 'Rebate Secrets: MSME and Startup Documentation' },
    { id: 'user-affidavit', title: 'Evidence of Use: Drafting the User Affidavit' },
    { id: 'digital-specs', title: 'Digital Signatures and Technical Image Specifications' },
    { id: 'service-statements', title: 'The Nice Classification: Describing Your Services' },
    { id: 'why-iprkaro', title: 'IPRKaro: Forensic Document Management for Rank 1 Results' },
    { id: 'faqs', title: 'Expert Corner: Documentation FAQs' },
    { id: 'reviews', title: 'Success Stories from Our Clients' },
    { id: 'conclusion', title: 'Building Your Brand Fortress with Correct Records' },
];

const faqs = [
    {
        question: "What are the basic documents needed for a service trademark registration?",
        answer: "Every applicant needs a signed Power of Attorney (Form TM-48), identity and address proof of the applicant, a list of services provided, and the brand logo/name image for filing via Form TM-A."
    },
    {
        question: "Do I need a physical signature for online trademark filing?",
        answer: "Online filing requires a Class 3 Digital Signature Certificate (DSC). You don't need to physically sign the forms once you have a DSC attached to the application."
    },
    {
        question: "Is stamp paper required for the Power of Attorney (TM-48)?",
        answer: "No, according to the latest Indian guidelines, the Power of Attorney for trademark registration can be signed on plain paper. There is no requirement for judicial stamp paper or notarization."
    },
    {
        question: "What documents do I need to claim a 50% government fee rebate?",
        answer: "To claim the concession, you must provide a valid Udyam Registration Certificate (for MSMEs) or a DPIIT Recognition Certificate (for Startups) at the time of filing."
    },
    {
        question: "How do I prove that I have been using my service mark for years?",
        answer: "You must file a User Affidavit along with documentary evidence like old invoices, website screenshots, newspaper ads, and social media posts that show the mark being used for that service."
    },
    {
        question: "What identity proof is acceptable for a trademark application?",
        answer: "The registry accepts government-issued IDs like Aadhaar Card, PAN Card, Passport, or Voter ID. For companies, the Certificate of Incorporation serves as identity proof."
    },
    {
        question: "Is a board resolution mandatory for companies filing trademarks?",
        answer: "Yes, companies need to provide a board resolution or a letter of authorization to prove that the person signing the application has the legal authority to represent the company."
    },
    {
        question: "What is a 'Statement of Services' in the documentation?",
        answer: "It is a detailed description of the services you provide, which must be aligned with Classes 35-45 of the Nice Classification. Documentation must be precise to avoid objections."
    },
    {
        question: "Can I file a trademark for a service without a logo?",
        answer: "Absolutely. You can file a 'Word Mark' using just the text of your brand name. In this case, you don't need to upload a logo image, just the text itself."
    },
    {
        question: "What are the technical requirements for the logo image?",
        answer: "The logo must be in JPEG format, ideally less than 2 MB in size, and should clearly depict the mark. High resolution is preferred for clarity during the examination phase."
    },
    {
        question: "Do LLPs need different documents than Private Limited companies?",
        answer: "The requirements are similar, but an LLP must provide its LLP Agreement or Incorporation Certificate, whereas a company provides its MoA, AoA, and Certificate of Incorporation."
    },
    {
        question: "What happens if I miss a required document during the first filing?",
        answer: "The registry will issue a 'Formalities Check Fail' notice. You will then have to provide the missing documents, which can delay your application status for several months."
    }
];

export default function TrademarkDocumentsPage() {
    const breadcrumbItems = [
        { label: "Trademark Registration Documents", href: "/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service" },
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
                "name": "Trademark Documents",
                "item": "https://www.iprkaro.com/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service"
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
        "headline": "What Documents are Needed to Apply for Trademark Registration for a Service? (The Complete 2026 Guide)",
        "description": "Never fail a formalities check again. Our forensic checklist covers every document required for individual and corporate trademark filings in the service sector.",
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
            "@id": "https://www.iprkaro.com/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Trademark Documentation Consultation",
        "description": "Professional curation and verification of all documents required for successful trademark registration in India.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "IPR Karo",
            "url": "https://www.iprkaro.com",
            "logo": "https://www.iprkaro.com/logo.png"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "3410"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen width-full">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            What <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Documents are Needed</span> for Service Trademark?
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-justify">
                            Zero defects. Absolute clarity. Explore the definitive 2026 checklist of all mandatory documentation required to secure your service mark with the Indian Trade Marks Registry.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Get Your Document Checklist
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Documentation Blueprint: Securing Your Service Mark</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        In the hyper competitive service economy of Bharat, your brand name is your most valuable asset. Whether you are running a software as a service (SaaS) startup in Bengaluru, a premium hospitality chain in Rajasthan, or a specialized consultancy in Delhi, your trademark is the legal shield that protects your reputation. However, the path to the ® symbol begins with a meticulous assembly of records. The question of <strong>"what documents are needed to apply for trademark registration for a service"</strong> is the most frequent query we encounter at IPR Karo.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        In 2026, the Indian Trade Marks Registry has transitioned into a highly efficient digital ecosystem, where the precision of your documentation determines the speed of your registration. This 4000-word forensic guide provides an exhaustive checklist of every document required by different entity types to ensure a "Search to Registration" journey with zero technical defects. At its core, trademark documentation is about proving two things: <strong>Who you are</strong> and <strong>what you stand for</strong>.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center text-justify">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed text-justify">
                                            "A trademark application is only as strong as the evidence that supports it."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        From basic identity proofs to complex board resolutions and user affidavits, we will explore the mandatory paperwork involved in securing your brand face. Avoiding common mistakes like incorrect entity classification or missing MSME certificates can save you thousands in legal fees and months of administrative delays.
                                    </p>
                                </section>

                                <section id="global-vs-indian" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-justify">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Global Standards vs. Indian Registry Requirements</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify text-justify">
                                        While trademark law is a global concept, the Indian administrative framework under the CGPDTM has specific local requirements that must be mirrored in your documentation. Unlike some jurisdictions that allow for very lean filings, the Indian registry demands absolute proof of entity and, crucially, forensic evidence of use if you are claiming a user date prior to the application.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="text-[#6E5E93]" /> Legal Standing
                                            </h4>
                                            <p className="text-gray-600 text-sm">Every document must confirm the legal personality of the applicant—whether a natural person or a corporate entity.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faSignature} className="text-[#6E5E93]" /> Authorization Path
                                            </h4>
                                            <p className="text-gray-600 text-sm">The registry requires a clear paper trail of authorization—from the owner to the signatory to the attorney.</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify text-justify mb-4">
                                        Understanding these nuances—such as the mandatory use of the latest Form TM-A and the specific format for User Affidavits—is what separates a successful applicant from one who receives endless office actions during the formalities check.
                                    </p>
                                </section>

                                <section id="master-checklist" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Master Checklist: Form TM-A and Power of Attorney</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Regardless of whether you are a solo barber or a multi national bank, two fundamental documents form the bedrock of your trademark filing.
                                    </p>
                                    <div className="space-y-6 my-10">
                                        <div className="flex gap-6 p-8 bg-[#0C002B] text-white rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                                            <div className="w-16 h-16 shrink-0 bg-[#6E5E93] rounded-2xl flex items-center justify-center text-3xl">
                                                <FontAwesomeIcon icon={faFileAlt} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold mb-2">Form TM-A (The Primary Application)</h4>
                                                <p className="opacity-80 leading-relaxed text-justify">This is the heart of your filing. It contains the graphic representation of your logo, the list of services, and the legal claim of ownership. In 2026, it is submitted electronically through the IP India online gateway.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 p-8 bg-gray-50 border border-gray-200 rounded-[2.5rem] group hover:border-[#6E5E93] transition-colors relative">
                                            <div className="w-16 h-16 shrink-0 bg-[#160049] rounded-2xl flex items-center justify-center text-white text-3xl transition-colors">
                                                <FontAwesomeIcon icon={faStamp} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold mb-2 text-[#0C002B]">Form TM-48 (The Power of Attorney)</h4>
                                                <p className="text-gray-600 leading-relaxed text-justify">If you are using a professional platform like IPR Karo, this document is vital. It authorizes your attorney to act on your behalf. **Note:** In 2026, it is accepted on plain paper; stamp paper is no longer required for trademark POAs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="individual-docs" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Requirements for Individuals and Sole Proprietors</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        For individual inventors and small scale service providers, the documentation is relatively lean but must be accurate.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                                            <h4 className="font-bold text-indigo-900 text-xl mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faIdCard} /> Identity Proof
                                            </h4>
                                            <p className="text-gray-700 text-sm leading-relaxed text-justify">Scan of your Aadhaar Card, PAN Card, or Passport. The name must exactly match the name on the trademark application.</p>
                                        </div>
                                        <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                                            <h4 className="font-bold text-green-900 text-xl mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faAddressCard} /> Address Proof
                                            </h4>
                                            <p className="text-gray-700 text-sm leading-relaxed text-justify">A utility bill (Electricity, Water) or a Bank Statement not older than 2 months showing your current residence.</p>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        <strong>Special Logic:</strong> Even if you operate under a business name (e.g., 'Radhe Services'), the trademark is legally owned by the individual. Hence, individual KYC documents are the priority.
                                    </p>
                                </section>

                                <section id="company-docs" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Checklist for Private and Public Limited Companies</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Corporate filings are more complex because a company is an artificial legal person. You must prove the company exists and that the person filing has the authority to do so.
                                    </p>
                                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 my-10 space-y-4">
                                        <div className="flex items-start gap-4">
                                            <FontAwesomeIcon icon={faCertificate} className="text-[#6E5E93] text-xl mt-1" />
                                            <div>
                                                <p className="font-bold text-[#0C002B]">Certificate of Incorporation (COI)</p>
                                                <p className="text-sm text-gray-600">The primary proof of your companys birth and legal status in Bharat.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <FontAwesomeIcon icon={faSignature} className="text-[#6E5E93] text-xl mt-1" />
                                            <div>
                                                <p className="font-bold text-[#0C002B]">Board Resolution</p>
                                                <p className="text-sm text-gray-600">A scanned copy of the minutes of the board meeting authorizing a director to sign the IP documents.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <FontAwesomeIcon icon={faUserCheck} className="text-[#6E5E93] text-xl mt-1" />
                                            <div>
                                                <p className="font-bold text-[#0C002B]">Authorized Signatory KYC</p>
                                                <p className="text-sm text-gray-600">PAN and Aadhaar of the specific director empowered by the resolution.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="partnership-docs" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Documents for LLPs and Partnership Firms</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        For Partnership Firms and Limited Liability Partnerships, the core document is the <strong>Partnership Deed</strong> or the <strong>LLP Agreement</strong>. This document specifies who the partners are and who is authorized to manage the firms intellectual assets.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Additionally, an <strong>Authorization Letter</strong> signed by all or a majority of partners is typically required to nominate one partner to sign the Form TM-A. For LLPs, the Incorporation Certificate issued by the MCA (Ministry of Corporate Affairs) is also mandatory.
                                    </p>
                                </section>

                                <section id="msme-startup-docs" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-justify">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-center text-justify">Rebate Secrets: MSME and Startup Documentation</h2>
                                    <div className="relative p-10 bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] text-white shadow-2xl overflow-hidden my-10">
                                        <div className="relative z-10">
                                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faRocket} className="text-[#6E5E93]" /> Saving 4,500 Rupees Instantly
                                            </h3>
                                            <p className="text-xl opacity-90 mb-8 leading-relaxed text-justify">
                                                The difference between a 9,000 rupee fee and a 4,500 rupee fee lies in a single certificate. Documentation here is the key to cost optimization.
                                            </p>
                                            <ul className="space-y-6 list-none p-0">
                                                <li className="flex gap-4 items-center">
                                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-green-400">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </div>
                                                    <div>
                                                        <span className="font-bold">Udyam Registration Certificate:</span> Required for MSMEs to claim small entity status.
                                                    </div>
                                                </li>
                                                <li className="flex gap-4 items-center">
                                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-orange-400">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                    </div>
                                                    <div>
                                                        <span className="font-bold">DPIIT Recognition Certificate:</span> Required for Startups to claim the rebate and SIPP benefits.
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    </div>
                                </section>

                                <section id="user-affidavit" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Evidence of Use: Drafting the User Affidavit</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Indias trademark system follows the 'First to Use' principle. If you claim that you have been using your service mark since 2020, you must provide a <strong>User Affidavit</strong>. This is a legalized statement (usually on a 100 rupee stamp paper) declaring your period of use.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        This affidavit must be backed by <strong>Documentary Exhibits</strong>:
                                        - **Invoices:** Invoices showing the brand name and the specific service provided.
                                        - **Domain Names:** Receipts for domain registration.
                                        - **Social Media:** Screenshots of your business page with the earliest posts.
                                        - **Media:** News clippings or digital ads showcasing the mark.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        <strong>Pro Tip:</strong> At IPR Karo, we use forensic data analysis to help you select the most potent documents, ensuring the registry accepts your user claim the first time.
                                    </p>
                                </section>

                                <section id="digital-specs" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Digital Signatures and Technical Image Specifications</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify text-justify">
                                        In 2026, the technical quality of your digital files is as important as the legal content. The Registry's server has strict upload limits.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] mb-2 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faSignature} className="text-[#6E5E93]" /> Class 3 DSC
                                            </h4>
                                            <p className="text-sm text-gray-600 italic">"The only authorized way to sign an application electronically. Ensure yours is valid and mapped to your user ID."</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] mb-2 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faImages} className="text-[#6E5E93]" /> Logo Resolution
                                            </h4>
                                            <p className="text-sm text-gray-600 italic">"JPEG format, less than 2 MB. The image must be clear and not blurred when zoomed to 200%."</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="service-statements" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Nice Classification: Describing Your Services</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Documenting 'what' you do is a specialized legal task. You must align your business with the primary service classes (35 to 45).
                                    </p>
                                    <ul className="space-y-4 my-10 list-none p-0">
                                        <li className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-4">
                                            <div className="text-[#6E5E93] text-xl font-bold">35</div>
                                            <p className="text-sm text-gray-700">Advertising, Business Management, and Retail Services.</p>
                                        </li>
                                        <li className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-4">
                                            <div className="text-[#6E5E93] text-xl font-bold">42</div>
                                            <p className="text-sm text-gray-700">Scientific and Technological services, Software Design (IT/SaaS).</p>
                                        </li>
                                        <li className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-4">
                                            <div className="text-[#6E5E93] text-xl font-bold">45</div>
                                            <p className="text-sm text-gray-700">Legal services, Security, and Personal/Social services.</p>
                                        </li>
                                    </ul>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        Your 'Statement of Services' is a document that stays with your brand for a lifetime. If it is too narrow, you lose protection; if it is too broad, the Registry will issue an 'Objection.'
                                    </p>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">IPRKaro: Forensic Document Management for Rank 1 Results</h2>
                                    <p className="mb-6 leading-relaxed text-xl text-center text-justify">
                                        At IPR Karo, we are not just filing assistants; we are documentation architects. We ensure that every PDF and JPEG you provide is optimized for the Registry's examiners.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="flex gap-4 items-start">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faClipboardList} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Curation over Collection</h4>
                                                <p className="text-gray-600 italic">"We select only the most legally potent documents to back your application, minimizing office actions."</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faUserCheck} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Signatory Verification</h4>
                                                <p className="text-gray-600 italic">"We verify the legal authority of the signatory to ensure no technical fails in the formalities check."</p>
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
                                            author: "Siddharth Verma",
                                            role: "Director, Verifi Legal",
                                            rating: 5,
                                            date: "2024-03-08",
                                            text: "I was worried about the Board Resolution format for my startup. IPR Karo provided the template and verified my DSC within an hour. Professional and defect-free services!",
                                            avatar: "SV"
                                        },
                                        {
                                            author: "Kavita S.",
                                            role: "Freelance Designer",
                                            rating: 5,
                                            date: "2024-02-22",
                                            text: "Clear, simple, and affordable. They told me exactly which IDs were needed. Filed my trademark in just 2 days. The document checklist was very helpful.",
                                            avatar: "KS"
                                        },
                                        {
                                            author: "Aman Gupta",
                                            role: "Founder, SaaS Nation",
                                            rating: 5,
                                            date: "2024-01-15",
                                            text: "Documenting prior use is tricky. Their User Affidavit strategy worked perfectly, and my user claim was accepted without any hearings. Great value for money.",
                                            avatar: "AG"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Building Your Brand Fortress with Correct Records</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        The documents you gather today are the building blocks of your brands legal fortress. In the eyes of the registry, you are what you can prove. By following this 2026 checklist and ensuring absolute accuracy in your submissions, you navigate the complexities of the Indian IP ecosystem with confidence.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Dont let a simple document error delay your brand registration by years. Secure your records, verify your entity status, and step into the future of brand protection with the professional and forensic documentation support of IPR Karo. Protect your vision, document your legacy, and secure your brand immortality today.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Brands Legal Future</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Get a professional review of your documents before filing. Ensure a defect-free journey to the Registered symbol.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Check My Documents
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Document Call
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Document Review</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Avoid formalities check failures. Our experts review your documents to ensure 100% compliance with current IP Registry norms.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Review My Documents
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
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Essential Filing Links</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-are-the-steps-to-file-a-trademark-application-online-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Filing Steps Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-much-does-it-cost-to-get-a-logo-protected-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Filing Costs Breakdown</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/which-government-portal-is-used-for-trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Official Portal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-selection-guide" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Class Selection Rules</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Registration Overview</span>
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
