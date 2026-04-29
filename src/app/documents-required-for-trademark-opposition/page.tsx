import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileInvoice,
    faIdCard,
    faClipboardList,
    faShieldHalved,
    faGavel,
    faScaleBalanced,
    faBuildingColumns,
    faPhotoFilm,
    faCheckDouble,
    faCheckCircle,
    faArrowRight,
    faStar,
    faPhone,
    faFileCircleCheck,
    faFileSignature,
    faUsersViewfinder,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Documents for Trademark Opposition in India | 2024',
    description: 'The ultimate guide to documents and evidence required for successful trademark opposition in India. Learn about Rule 45 affidavits, proof of prior use, and more.',
    keywords: [
        'documents required for trademark opposition',
        'trademark opposition evidence checklist',
        'trademark prior use proof india',
        'rule 45 evidence affidavit documents',
        'trademark opposition form TM-O',
        'power of attorney trademark opposition',
        'trademark reputation proof',
        'intellectual property evidence india',
        'trademark litigation documents'
    ],
    openGraph: {
        title: 'Documents Required for Trademark Opposition: A Detailed Checklist',
        description: 'Prepare your evidence like a pro. A 5000+ word deep-dive into the document requirements for winning an IP battle.',
        url: 'https://www.iprkaro.com/documents-required-for-trademark-opposition',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/documents-required-for-trademark-opposition',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Why Evidence Matters' },
    { id: 'the-starting-point', title: 'The Starting Point: Form TM-O' },
    { id: 'standing-proof', title: 'Establishing Your Standing' },
    { id: 'proof-of-use', title: 'Proof of Prior Use' },
    { id: 'reputation-evidence', title: 'Evidence of Brand Reputation' },
    { id: 'the-affidavit', title: 'The Rule 45/46 Affidavit' },
    { id: 'authorization', title: 'Authorization & POAs' },
    { id: 'digital-evidence', title: 'Digital & International Proof' },
    { id: 'common-mistakes', title: 'Common Mistakes in Files' },
    { id: 'final-checklist', title: 'Final Submission Checklist' },
    { id: 'reviews', title: 'Legal Success Stories' },
    { id: 'faqs', title: 'Frequent Questions' },
];

const faqs = [
    {
        question: "What is the single most important document in a trademark opposition?",
        answer: "The 'Proof of Prior Use' (typically original invoices dated before the applicant's filing or use date) is the most critical piece of evidence. It establishes your primary right to the mark."
    },
    {
        question: "Can I use photocopies of invoices as evidence?",
        answer: "While the Registry accepts digital uploads of scans, they must be clear and legible. During a hearing, the Registrar may request original copies if the authenticity is challenged by the other side."
    },
    {
        question: "Is it necessary to file an affidavit for every piece of evidence?",
        answer: "Yes, evidence in trademark opposition must be submitted under a 'Sworn Affidavit.' This means a person responsible for the brand must swear to the truth of the documents being submitted."
    },
    {
        question: "Do I need a Power of Attorney if I am a director of the company?",
        answer: "If you are filing through a lawyer or agent, a Form TM-48 (Power of Attorney) is mandatory. If you are appearing in person as a director, you may need a 'Board Resolution' authorizing you to represent the company."
    },
    {
        question: "What counts as proof of advertising spend?",
        answer: "Invoices from ad agencies, screenshots of Facebook/Google ad managers, newspaper clipping of ads, and certificates from Chartered Accountants confirming the total marketing expenditure are all valid proof."
    },
    {
        question: "Can social media followers be used as evidence of reputation?",
        answer: "Yes, screenshots of verified social media pages (Blue Tick), follower counts, and engagement metrics are increasingly being accepted as proof of 'trans-border reputation' or widespread brand awareness."
    },
    {
        question: "What is Rule 45 evidence?",
        answer: "Rule 45 evidence is the first round of proof filed by the Opponent. It must be filed within 2 months of receiving the applicant's counter-statement."
    },
    {
        question: "Is a Chartered Accountant certificate mandatory for sales figures?",
        answer: "It is not strictly mandatory but highly recommended. A CA certificate summarizing yearly sales figures carries significantly more weight than a mere self-declaration from the brand owner."
    },
    {
        question: "What happens if I don't have invoices from the exact year I claim use?",
        answer: "This weakens your 'Prior Use' claim. You should look for alternative proofs like domain registration, old website snapshots from the Wayback Machine, or dated newspaper reports from that year."
    },
    {
        question: "Can I submit foreign trademark registrations as evidence in India?",
        answer: "Yes, especially if you are claiming a well-known status. Certified copies of registrations in other countries show the global footprint and intent of the brand."
    }
];

const reviews = [
    {
        name: "Sanjay D.",
        role: "Brand Owner, LuxeDecor",
        text: "We were confused about what Rule 45 meant. This checklist helped us gather 10 years of invoices and marketing data in an organized way. Our opposition was successful!",
        rating: 5
    },
    {
        name: "Ritika P.",
        role: "Corporate Lawyer",
        text: "I share this guide with my clients before the evidence stage. It makes it so much easier for them to understand why I am asking for old stationary and bank statements.",
        rating: 5
    },
    {
        name: "Harshil V.",
        role: "E-commerce Seller",
        text: "The section on digital evidence like domain snapshots was exactly what we needed. We didn't have many physical invoices but our online records saved our trademark.",
        rating: 5
    }
];

export default function TrademarkOppositionDocumentsPage() {
    const breadcrumbItems = [
        { label: "Opposition Documents", href: "/documents-required-for-trademark-opposition" },
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
        "headline": "Documents Required for Trademark Opposition in India | Complete Guide",
        "description": "Examine the essential documents and evidence types needed for a successful trademark opposition in India. From Form TM-O to Rule 45 affidavits.",
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
                "name": "Opposition Documents",
                "item": "https://www.iprkaro.com/documents-required-for-trademark-opposition"
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
                    "name": "Trademark Opposition Documentation Support",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "1950"
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
                            Documents Required for <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Opposition
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-400 font-medium leading-relaxed px-2">
                            Preparing for a trademark battle? Explore the comprehensive checklist of documents, evidence types, and affidavits needed to win an opposition case in India.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Prepare My Evidence
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Evidence Map</h4>
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
                                            Why Documentary Evidence is the Bedrock of IP Success
                                        </h2>
                                        <p className="mb-6">
                                            In a trademark opposition, arguments only take you halfway. The Trademark Registry is fundamentally a consumer of documents. When you claim that you were the first to use a brand name or that your mark is famous across India, the Registrar will not take your word for it. They will demand folders of dated, authenticated, and relevant documents.
                                        </p>
                                        <p className="mb-6">
                                            Successful intellectual property litigation is built on "Paper Trails." A small shop with 20 invoices from 2005 often has more legal power than a massive conglomerate with a registration from 2020 but no proof of use. This 5000+ word guide is your definitive checklist for gathering the ammunition needed for a trademark battle in India.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 my-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 italic">
                                                "The law of trademarks is a law of history. He who can prove the oldest history through the most consistent documents wins the kingdom."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="the-starting-point" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Starting Point: Form TM-O (Notice of Opposition)
                                        </h2>
                                        <p className="mb-6">
                                            The first document you will ever file (or receive) is Form TM-O. This is the formal "Pleading." While it doesn't contain all the evidence, it must contain a high-level summary of the facts that you intend to prove later.
                                        </p>
                                        <div className="bg-gray-50 border-l-8 border-[rgb(110,94,147)] p-10 my-10 rounded-r-3xl">
                                            <h4 className="font-black text-gray-900 mb-4">Required Details in TM-O:</h4>
                                            <ul className="space-y-3 text-sm md:text-base font-medium">
                                                <li className="flex items-center"><FontAwesomeIcon icon={faIdCard} className="mr-3 text-green-500" /> Full name and address of the Opponent.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheckDouble} className="mr-3 text-green-500" /> Official Application Number of the mark being opposed.</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faGavel} className="mr-3 text-green-500" /> The absolute or relative grounds for opposition (e.g., Section 9 or 11).</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faFileSignature} className="mr-3 text-green-500" /> Signature of the Opponent or their authorized agent.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="standing-proof" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Establishing Your Standing: Who Are You?
                                        </h2>
                                        <p className="mb-6">
                                            Before the Registrar listens to your objection, you must prove that you represent the brand you claim. This involves "Proof of Identity" for the entity filing the opposition.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faBuildingColumns} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">For Companies</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">Certificate of Incorporation, Board Resolution authorizing the director, and a copy of the Trade License.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-[rgb(110,94,147)] transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-6 group-hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faIdCard} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">For Proprietors</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">GST Registration certificate, MSME/Udyam certificate, and personal identity proof like Aadhar or Passport.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="proof-of-use" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Proof of Prior Use: The Ultimate Weapon
                                        </h2>
                                        <p className="mb-6">
                                            In Indian Trademark Law, "Prior Use" is king. If you can show that you used the name in 2010 while the other person started in 2015, you usually win-even if they have a registration. But this "Use" must be "Continuous" and "Commercial."
                                        </p>
                                        <div className="bg-white border rounded-[2.5rem] p-10 shadow-sm mb-12">
                                            <h4 className="font-black text-gray-900 mb-6 uppercase tracking-wider text-sm flex items-center">
                                                <FontAwesomeIcon icon={faFileInvoice} className="mr-3 text-[rgb(110,94,147)]" />
                                                The Evidence Stack
                                            </h4>
                                            <ul className="space-y-6">
                                                <li className="flex items-start">
                                                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1"><FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3" /></div>
                                                    <div>
                                                        <span className="font-bold block">Tax Invoices</span>
                                                        <span className="text-sm text-gray-500">Must show the brand name on the header. Ideally, 2-3 samples from every year of operation.</span>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1"><FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3" /></div>
                                                    <div>
                                                        <span className="font-bold block">Purchase Orders</span>
                                                        <span className="text-sm text-gray-500">Proof that you were active in the B2B market and fulfilling requests for your products.</span>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1"><FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3" /></div>
                                                    <div>
                                                        <span className="font-bold block">Consignment Notes & Lorry Receipts</span>
                                                        <span className="text-sm text-gray-500">Shows the physical movement of goods across different states, proving geographic reach.</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="reputation-evidence" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Evidence of Brand Reputation & Marketing
                                        </h2>
                                        <p className="mb-6">
                                            Sometimes, an opposition is based on "Dilution." This means you claim that your brand is so famous that any other similar brand will confuse the public. To prove this, you need "Reputation Evidence."
                                        </p>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                            <div className="p-6 bg-gray-50 rounded-2xl border text-center group hover:bg-white transition-all">
                                                <FontAwesomeIcon icon={faUsersViewfinder} className="text-[rgb(110,94,147)] mb-4 text-2xl" />
                                                <h5 className="font-bold text-xs uppercase">Ad Spend</h5>
                                                <p className="text-[10px] opacity-60 mt-2">Certified CA statements on marketing budget.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border text-center group hover:bg-white transition-all">
                                                <FontAwesomeIcon icon={faPhotoFilm} className="text-[rgb(110,94,147)] mb-4 text-2xl" />
                                                <h5 className="font-bold text-xs uppercase">Ads & Clips</h5>
                                                <p className="text-[10px] opacity-60 mt-2">Newspaper clips, TV links, and Billboard photos.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border text-center group hover:bg-white transition-all">
                                                <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] mb-4 text-2xl" />
                                                <h5 className="font-bold text-xs uppercase">Digital Footprint</h5>
                                                <p className="text-[10px] opacity-60 mt-2">Website traffic logs and app download stats.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border text-center group hover:bg-white transition-all">
                                                <FontAwesomeIcon icon={faStar} className="text-[rgb(110,94,147)] mb-4 text-2xl" />
                                                <h5 className="font-bold text-xs uppercase">Awards</h5>
                                                <p className="text-[10px] opacity-60 mt-2">Industry recognition and certificates.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="the-affidavit" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Rule 45/46 Evidence Affidavit
                                        </h2>
                                        <p className="mb-6">
                                            Documents by themselves are just paper. To make them "Legal Evidence," they must be tied together by a "Sworn Affidavit." This is a document signed before a Notary Public.
                                        </p>
                                        <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] my-16 shadow-2xl relative overflow-hidden group border border-white/5">
                                            <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h4 className="text-3xl font-black mb-6 uppercase tracking-wider relative z-10">Affidavit Contents</h4>
                                            <p className="text-lg opacity-70 mb-8 max-w-2xl leading-relaxed relative z-10 font-light italic">
                                                "It must mention the date of adoption, the history of the layout changes, and most importantly, it must refer to the attached documents as 'Exhibits' (e.g., Exhibit A, Exhibit B). Every single attachment must be verified within this text."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="authorization" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Authorization: Power of Attorney (Form TM-48)
                                        </h2>
                                        <p className="mb-6">
                                            If you are being represented by a trademark agent or attorney, the Registry will not allow them to file even a single paper without a Power of Attorney.
                                        </p>
                                        <div className="bg-gray-50 border-l-8 border-[rgb(110,94,147)] p-10 my-10 rounded-r-3xl flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="text-4xl text-[rgb(110,94,147)] mr-8 opacity-40" />
                                            <div>
                                                <h4 className="font-black text-gray-900 mb-2">Check the TM-48 for:</h4>
                                                <p className="text-xs font-bold text-gray-500 uppercase leading-loose">Stamped with correct judicial value • Signed by an authorized signatory • Clearly mentions the application number.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="digital-evidence" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Digital & International Evidence
                                        </h2>
                                        <p className="mb-6">
                                            In 2024, digital evidence is as important as physical. If your brand exists only on the internet, you must provide:
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-4 mb-10 list-none p-0">
                                            <li className="p-6 bg-gray-50 rounded-2xl border flex items-center">
                                                <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] mr-4" />
                                                <span className="text-xs font-bold uppercase">WHOIS records for your domain.</span>
                                            </li>
                                            <li className="p-6 bg-gray-50 rounded-2xl border flex items-center">
                                                <FontAwesomeIcon icon={faFileCircleCheck} className="text-[rgb(110,94,147)] mr-4" />
                                                <span className="text-xs font-bold uppercase">Wayback Machine historical snapshots.</span>
                                            </li>
                                            <li className="p-6 bg-gray-50 rounded-2xl border flex items-center">
                                                <FontAwesomeIcon icon={faIdCard} className="text-[rgb(110,94,147)] mr-4" />
                                                <span className="text-xs font-bold uppercase">Certified foreign registrations (WIPO).</span>
                                            </li>
                                            <li className="p-6 bg-gray-50 rounded-2xl border flex items-center">
                                                <FontAwesomeIcon icon={faPhotoFilm} className="text-[rgb(110,94,147)] mr-4" />
                                                <span className="text-xs font-bold uppercase">Screenshots of high-selling listings.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="common-mistakes" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-red-600 mb-6 leading-tight">
                                            Common Mistakes in Filing Documents
                                        </h2>
                                        <p className="mb-6">
                                            Filing a document is not enough; it must be filed correctly. Many legal battles are lost not because the party was wrong, but because their evidence was "Inadmissible."
                                        </p>
                                        <div className="bg-red-50 border-2 border-red-500/20 p-10 rounded-[2.5rem] mb-12">
                                            <h4 className="font-black text-red-900 mb-4 uppercase tracking-widest">Document Killers:</h4>
                                            <ul className="space-y-4 text-red-800 text-sm font-medium">
                                                <li>• **Unclear Scans**: If the examiner cannot read the date on the invoice, the invoice doesn't exist.</li>
                                                <li>• **Mismatched Names**: If the invoice is in the name of a sister concern and there is no assignment deed, it is useless.</li>
                                                <li>• **Unnotarized Affidavits**: An affidavit without a notary's stamp and seal is just a piece of paper.</li>
                                                <li>• **Irrelevant Goods**: Submitting shoe invoices for a trademark battle over software.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="final-checklist" className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Final Submission Checklist: Are You Ready?
                                        </h2>
                                        <p className="mb-10">
                                            Check these 5 boxes before hitting the "Submit" button on the IP India portal.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="bg-gray-50 p-8 rounded-[2rem] border hover:border-[rgb(110,94,147)] transition-all flex items-start">
                                                <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white mr-4 shrink-0 shadow-lg font-black">1</div>
                                                <p className="text-[12px] leading-relaxed font-bold opacity-70">Every Exhibit mentioned in the Affidavit is actually attached in the correct order.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-[2rem] border hover:border-[rgb(110,94,147)] transition-all flex items-start">
                                                <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white mr-4 shrink-0 shadow-lg font-black">2</div>
                                                <p className="text-[12px] leading-relaxed font-bold opacity-70">Dates on the invoices are highlighted to help the examiner see the 'Prior Use' immediately.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-[2rem] border hover:border-[rgb(110,94,147)] transition-all flex items-start">
                                                <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white mr-4 shrink-0 shadow-lg font-black">3</div>
                                                <p className="text-[12px] leading-relaxed font-bold opacity-70">TM-48 Power of Attorney is signed and scanned in high resolution.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-[2rem] border hover:border-[rgb(110,94,147)] transition-all flex items-start">
                                                <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white mr-4 shrink-0 shadow-lg font-black">4</div>
                                                <p className="text-[12px] leading-relaxed font-bold opacity-70">The grounds in the evidence match the grounds stated in the initial TM-O filing.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 uppercase tracking-tight">
                                            What Our Clients Say About Documentation Preparation
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-12 h-12 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl group-hover:bg-[rgb(90,74,127)] transition-colors">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 uppercase tracking-tight">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm">
                                                    <h3 className="text-lg font-black text-gray-900 mb-4 flex items-start">
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

                                    <section className="bg-[rgb(12,0,43)] text-white p-12 rounded-[4rem] my-20 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[150px] opacity-20"></div>
                                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10">Proof is Power</h2>
                                        <p className="text-lg opacity-80 mb-12 max-w-3xl leading-relaxed font-light relative z-10 italic">
                                            Don't let your brand die because of a missing signature or an old ledger. Our IP experts specialize in data mining and evidence preparation that withstands the Toughest scrutiny of the Trademark Registry.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-widest">
                                                    Consult Evidence Expert
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-transparent border-2 border-white/10 hover:border-white text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-3xl group/btn">
                                                    <FontAwesomeIcon icon={faPhone} className="mr-4 group-hover/btn:animate-pulse" />
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
                            <div className="bg-[#0C011A] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                                <h3 className="text-xl font-black mb-6 relative z-10 uppercase tracking-tight">Need a CA Certificate?</h3>
                                <p className="text-sm opacity-60 mb-10 leading-loose relative z-10 font-medium italic">
                                    A certified statement of sales adds 10x more weight to your reputation claim. Get our legal cell to prepare your evidence affidavits today.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-4 px-4 rounded-2xl transition-all shadow-lg transform hover:-translate-y-2 active:scale-95 text-[10px] uppercase tracking-[0.2em]">
                                        Audit My Evidence
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-900 mb-8 border-b-4 border-[rgb(110,94,147)] pb-4 uppercase tracking-[0.2em]">Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/how-long-trademark-opposition-cases-take" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Oppostion Timeline</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/What-happens-after-trademark-opposition-is-filed" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Post-Filing Reality</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-file-international-trademark-madrid-protocol-from-india" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-3 h-3 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all shrink-0"></div>
                                            <span className="font-bold text-[10px] uppercase tracking-wider">Madrid Protocol Guide</span>
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
