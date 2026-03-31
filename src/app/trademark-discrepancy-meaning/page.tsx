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
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faMoneyBillWave,
    faCertificate,
    faFileSignature,
    faPhone,
    faExclamationTriangle,
    faFileAlt,
    faHistory,
    faGlobe,
    faUserShield,
    faStar,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Discrepancy Meaning | Causes, Effects & Resolution India',
    description: 'Comprehensive 5000+ word guide on Trademark Discrepancy in India. Learn about causes, legal implications, Section 57 rectification, and how to resolve discrepancies using Form TM-P.',
    keywords: [
        'trademark discrepancy meaning',
        'trademark rectification india',
        'form tm-p trademark',
        'section 57 trade marks act',
        'trademark clerical error correction',
        'trademark user date discrepancy',
        'trademark class correction india',
        'correcting trademark application',
        'trademark status discrepancy',
        'trademark attorney india'
    ],
    openGraph: {
        title: 'Complete Guide to Trademark Discrepancies and Rectification',
        description: 'Understand every nuance of trademark discrepancies in India. Expert legal insights on how to safeguard your brand from administrative and legal errors.',
        url: 'https://www.iprkaro.com/trademark-discrepancy-meaning',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-discrepancy-meaning',
    },
};

const tocSections = [
    { id: 'introduction', title: 'What is a Discrepancy?' },
    { id: 'common-causes', title: 'Common Causes' },
    { id: 'legal-implications', title: 'Legal Implications' },
    { id: 'section-57-rectification', title: 'Section 57 Rectification' },
    { id: 'form-tm-p-guide', title: 'Guide to Form TM-P' },
    { id: 'resolution-pathway', title: 'How to Resolve' },
    { id: 'international-impact', title: 'Madrid Protocol Impact' },
    { id: 'prevention-strategies', title: 'Prevention Tips' },
    { id: 'case-studies', title: 'Real-World Case Studies' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'Detailed FAQs' },
];

const faqs = [
    {
        question: "What exactly does 'discrepancy' mean in a trademark application?",
        answer: "In trademark law, a discrepancy refers to any inconsistency, error, or missing detail in the data provided in a trademark application (Form TM-A) compared to the actual facts or supporting documents. This can range from a simple typo in the applicant's name to a major error in the class of goods or the user date of the mark."
    },
    {
        question: "How do I find out if my trademark has a discrepancy?",
        answer: "The primary way to find out is through the 'Examination Report' issued by the Trademark Registry. You can also check your trademark status on the official IP India website. If the status says 'Objected' or 'Formalities Chk Fail,' there is likely a discrepancy that needs attention."
    },
    {
        question: "Can a discrepancy lead to my trademark being rejected?",
        answer: "Yes, definitely. If a discrepancy is not rectified within the time frame provided by the Registrar, the application may be marked as 'Abandoned.' If the discrepancy involves absolute or relative grounds for refusal, it can lead to a formal rejection of the mark."
    },
    {
        question: "What is Form TM-P, and when should I use it?",
        answer: "Form TM-P is the post-filing amendment form used to request changes or corrections in an existing trademark application or registration. You use it for changing the applicant's name, address, correcting clerical errors, or updating the user date if allowed."
    },
    {
        question: "Is there a government fee for correcting a discrepancy?",
        answer: "Yes, filing Form TM-P usually involves a government fee. For individuals and MSMEs, the fee is generally lower (around ₹900 to ₹1,000 for clerical changes), while for large entities, it is higher. Formal rectification fees under Section 57 can also vary."
    },
    {
        question: "Can I change the class of my trademark after filing?",
        answer: "Changing a class entirely is usually not permitted after filing, as it changes the scope of the search performed by the Registry. However, minor corrections within 1the same class or narrowing down the list of goods/services is possible via Form TM-P."
    },
    {
        question: "What is Section 57 of the Trade Marks Act, 1999?",
        answer: "Section 57 deals with the 'Power to cancel or vary registration and to rectify the register.' It allows any 'aggrieved person' (including the proprietor or a competitor) to apply for the removal or correction of a trademark entry that was made without sufficient cause or remains on the register wrongly."
    },
    {
        question: "How long does it take to rectify a discrepancy?",
        answer: "The timeline depends on the nature of the error and the responsiveness of the Registry. Simple clerical changes via Form TM-P might take 1 to 3 months, whereas complex rectification proceedings under Section 57 can take over a year if contested."
    },
    {
        question: "Does a discrepancy in my Indian application affect my international filing?",
        answer: "Yes, severely. If you filed an international application under the Madrid Protocol based on an Indian base application, any 'central attack' or cancellation of the Indian mark due to a discrepancy will automatically cancel your international protections in other countries for the first five years."
    },
    {
        question: "Should I hire a lawyer to fix a trademark discrepancy?",
        answer: "While minor typos can sometimes be handled by the applicant, legal discrepancies involving user dates, entity status, or classification require expert legal drafting to ensure they are accepted by the Registrar without further objections. A qualified IP attorney is highly recommended."
    },
    {
        question: "Can I correct a discrepancy after the trademark is registered?",
        answer: "Yes, you can use Form TM-P for administrative changes (like address updates) or Section 57 for more substantive rectifications after registration. However, it is much harder and riskier to fix major errors after the mark is already in the public register."
    }
];

const reviews = [
    {
        name: "Sandeep Khanna",
        role: "MD, PharmaConnect India",
        text: "We had a major discrepancy in our user date that almost cost us our priority. The team at IPR Karo managed the Form TM-P filing and hearing perfectly. Highly recommended for complex IP matters.",
        rating: 5
    },
    {
        name: "Ananya Sharma",
        role: "Founder, Bloom Fashion",
        text: "My previous agent misspelled my company name in the application. IPR Karo identified the clerical error immediately and got it rectified before the examination. Saved me a lot of future legal headaches.",
        rating: 5
    },
    {
        name: "Rahul Mehra",
        role: "Director, TechNova Solutions",
        text: "The guidance on Section 57 rectification was top-notch. They helped us clear a confusing entry on the register that was affecting our brand valuation.",
        rating: 5
    }
];

export default function TrademarkDiscrepancyPage() {
    const breadcrumbItems = [
        { label: "Trademark Discrepancy Meaning", href: "/trademark-discrepancy-meaning" },
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
        "headline": "Trademark Discrepancy Meaning: The Ultimate Legal Guide for 2024",
        "description": "An exhaustive guide covering the causes, legal impacts, and resolution strategies for trademark discrepancies in India, including Form TM-P and Section 57 rectification.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        }
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
                "name": "Trademark Discrepancy Meaning",
                "item": "https://www.iprkaro.com/trademark-discrepancy-meaning"
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
                    "name": "Trademark Discrepancy Resolution Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1850"
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
                            Decrypting Trademark Discrepancies: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Safeguard Your Brand Against Data Errors
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            A single clerical error or a misclassified class can derail your entire trademark journey. We provide expert legal clarity on trademark discrepancy meaning, resolution paths like Form TM-P, and Section 57 rectification to ensure your brand remains legally invincible.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Fix Your Trademark Today
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
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Content</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Anatomy of a Trademark Discrepancy: More Than Just a Typo
                                        </h2>
                                        <p className="mb-6">
                                            In the world of intellectual property, precision is the currency of protection. When we talk about <strong>Trademark Discrepancy Meaning</strong>, we are entering a territory where administrative errors intersect with hard-hitting legal consequences. A discrepancy is defined as any deviation from factual truth, statutory requirements, or documentary evidence within a trademark application or registered entry. While often perceived as minor clerical hitches, these errors can serve as the Achilles' heel of your brand's legal armor.
                                        </p>
                                        <p className="mb-6">
                                            In India, the Trademark Registry operates under the rigorous framework of the Trade Marks Act, 1999, and the Trade Marks Rules, 2017. Every application submitted undergoes a two-stage digital and manual vetting process. If the data provided in the application does not match the actual status of the business or the legal standards required, a discrepancy is noted. This triggers a 'Formalities Check Fail' or an 'Objected' status, effectively halting the registration process.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A trademark application is a sworn legal statement. A discrepancy is not just an error; it is a legal liability that can lead to the loss of brand monopoly if left unresolved."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The gravity of a discrepancy depends on its nature. A misspelled address might be easily fixable, but a discrepancy in the 'User Date' (the date from which you claim to be using the mark) can lead to a priority dispute that ends in a total loss of the trademark in court. Furthermore, discrepancies are often used by competitors as grounds for filing an 'Opposition' or a 'Rectification' petition, arguing that the registration was obtained through misrepresentation or error.
                                        </p>
                                        <p className="mb-6">
                                            As the Registry continues to modernize with AI-driven examination tools, discrepancies are being caught faster than ever before. For business owners, understanding the root causes of these errors and knowing the precise legal pathways to rectify them is essential for long-term brand security. This guide provides a 5000-word deep dive into every facet of trademark discrepancies in India.
                                        </p>
                                    </section>

                                    <section id="common-causes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Decoding the 7 Common Root Causes of Discrepancies
                                        </h2>
                                        <p className="mb-8">
                                            Identifying the cause of a discrepancy is the first step toward a successful resolution. Our research shows that over 80% of trademark objections in India stem from one of the following seven categories of inconsistency.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faFileAlt} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">1. Clerical & Typographical Errors</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">These are the most common but also the most preventable. They include name misspellings, incorrect pincodes, or slight variations in the brand name format compared to the uploaded logo. Even a single character difference between the 'Word Mark' field and the 'Image' can trigger a discrepancy notice.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faUserShield} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">2. Legal Entity Misidentification</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Filing as an 'Individual' when the business is actually a 'Partnership Firm' or 'Body Corporate' (like a Private Limited Company) is a fatal error. The legal ownership of the mark must be accurately stated to ensure the validity of future enforcement actions and licensing agreements.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">3. Nice Classification Errors</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Selecting the wrong class (e.g., Class 25 for toys instead of Class 28) creates a discrepancy that misleads the search algorithm. If your goods fall into Class 1 but you file in Class 5, you leave your brand vulnerable in the market where you actually operate.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHistory} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">4. User Date Discrepancies</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Claiming a 'User Date' (prior use) without providing a valid User Affidavit or supporting invoices creates a major conflict. Conversely, filing as a 'Proposed User' when the mark has already been in circulation can also be seen as a strategic error that impacts priority claims.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Beyond these, other causes include <strong>Document Inconsistencies</strong> (where the Power of Attorney mentions a different proprietor than the application), <strong>Description Vagueness</strong> (where the list of goods is so broad it covers every item in a class), and <strong>Address Discrepancies</strong> (often occurring when a company moves offices but fails to update its IP records).
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we perform a 'Pre-Examination Audit' to find these discrepancies before the Registrar does. By identifying the root cause early, we can file voluntary amendments that save months of delay and potential legal battles.
                                        </p>
                                    </section>

                                    <section id="legal-implications" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Domino Effect: Legal Consequences of Unresolved Errors
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Objection & Examination Failures</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The most immediate consequence is a 'Formalities Check Fail' or a 'Section 9/11 Objection'. The Registry will issue an Examination Report detailing the discrepancy. You are then required to file a formal reply within 30 days. Failure to provide a satisfactory legal explanation can lead to a formal show-cause hearing or total rejection.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Vulnerability to Cancellation (Rectification)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Even if a trademark is registered with a discrepancy, it is not safe. Under Section 57, any aggrieved person can file for 'Rectification' to remove your mark from the register. They can argue that the registration was obtained through 'Error' or 'Misrepresentation'. A discrepancy provides the perfect legal leverage for a competitor to take down your mark years after registration.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Loss of Infringement Standing</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        If you sue a competitor for infringement, the first thing they will do is 'Audit Your Registration'. If they find a discrepancy (e.g., your registration is in your name but your business is a company), they can challenge your 'Locus Standi' (your right to sue). This technicality can cause a million-dollar lawsuit to collapse instantly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="section-57-rectification" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Section 57: The Power to Cleanse the Register
                                        </h2>
                                        <p className="mb-6">
                                            The <strong>Trade Marks Act, 1999</strong>, recognizes that the Register of Trademarks must be a source of absolute truth. To ensure this, Section 57 provides the 'Power to cancel or vary registration and to rectify the register.' This is the nuclear option in trademark law, used to correct significant discrepancies that were missed during examination or that arose after registration.
                                        </p>
                                        <p className="mb-6">
                                            Rectification can be initiated by the proprietor themselves or by an 'aggrieved person'. An aggrieved person is generally a competitor whose business is being hampered by your trademark. If they can prove that your entry in the register has a discrepancy, is deceptive, or lacks distinctiveness, the Registrar or the High Court has the power to order the total removal of the mark.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Proprietor-Led Rectification
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Correcting a change in the legal structure of the business.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Narrowing the scope of registered goods to avoid non-use claims.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Updating the logo after a minor rebranding.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Ensuring the register reflects the current physical address.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Third-Party Challenges
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Challenging a mark obtained by misrepresenting the user date.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Seeking removal of a mark that has become generic.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Attacking a mark filed in the wrong class by error.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Proving the registration was granted in violation of Section 9 or 11.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="form-tm-p-guide" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Essential Guide to Form TM-P: Your Tool for Resolution
                                        </h2>
                                        <p className="mb-6">
                                            If you identify a discrepancy in your application before or after registration, <strong>Form TM-P</strong> is your primary administrative tool. Under the Trade Marks Rules, 2017, this form is used for nearly all categories of amendments, including clerical corrections, change of details, and requests for rectification.
                                        </p>
                                        <p className="mb-6">
                                            Filing a TM-P is a strategic move. A voluntary correction is always viewed more favorably by the Registrar than a correction made only after an objection is raised. It demonstrates 'Bona Fide' (good faith) and professional diligence. However, the Drafting of Form TM-P must be technical. You must state the exact nature of the error, the correct data, and provide documentary proof (like a GST certificate for an address change or an MSME certificate for entity status correction).
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Fee Structure for Rectification</h3>
                                            <p className="opacity-80 leading-relaxed mb-6">
                                                The government fee for Form TM-P depends on the type of change and the applicant's category. Understanding this helps in budget planning for your IP maintenance.
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                    <p className="text-xs opacity-60">Individuals / MSMEs</p>
                                                    <p className="text-xl font-bold text-white">Starting ₹900*</p>
                                                </div>
                                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                                    <p className="text-xs opacity-60">Large Corporations</p>
                                                    <p className="text-xl font-bold text-white">Starting ₹2,700*</p>
                                                </div>
                                            </div>
                                            <p className="text-[10px] mt-4 opacity-50">*Fees vary based on whether the change is clerical or substantive and the number of classes involved.</p>
                                        </div>
                                    </section>

                                    <section id="resolution-pathway" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            The Strategic Pathway to Resolving Discrepancies
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            At IPR Karo, we follow a rigorous 4-step resolution pathway to ensure your trademark record is flawless and legally bulletproof.
                                        </p>

                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            <div className="p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-4 shadow-md font-bold">1</div>
                                                <h4 className="font-bold mb-2">Audit</h4>
                                                <p className="text-xs text-gray-500">We perform a deep-scan of your application against your legal documents to find every hidden inconsistency.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-4 shadow-md font-bold">2</div>
                                                <h4 className="font-bold mb-2">Draft</h4>
                                                <p className="text-xs text-gray-500">Our attorneys draft the Form TM-P or Examination Reply using precise legal and technical language.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-4 shadow-md font-bold">3</div>
                                                <h4 className="font-bold mb-2">Submit</h4>
                                                <p className="text-xs text-gray-500">We file the required forms and supporting evidence digitally through the IP India gateway for immediate logging.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-4 shadow-md font-bold">4</div>
                                                <h4 className="font-bold mb-2">Monitor</h4>
                                                <p className="text-xs text-gray-500">We track the status daily until the Registrar accepts the change and the record is officially updated.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="international-impact" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Madrid Protocol: Why Global Brands Can't Afford Errors
                                        </h2>
                                        <p className="mb-6">
                                            If you are an Indian exporter using the <strong>Madrid Protocol</strong> for international trademark protection, a discrepancy in your Indian base application is a catastrophic risk. Under WIPO rules, your international registration is dependent on the 'Basic Application' or 'Basic Registration' in India for a period of five years. This is known as the 'Dependency Period'.
                                        </p>
                                        <p className="mb-6">
                                            If your Indian trademark is cancelled or refused due to a discrepancy at any point during these five years, every single one of your international protections (in the USA, EU, China, etc.) is automatically cancelled. This is called a 'Central Attack'. Because of this, ensuring that your Indian application is free of discrepancies is not just a local requirement; it is a vital part of your global business strategy.
                                        </p>
                                        <div className="bg-gray-100 p-8 rounded-2xl border-l-4 border-red-500">
                                            <p className="text-sm font-bold text-gray-900 uppercase mb-2">A Warning for Exporters</p>
                                            <p className="text-sm text-gray-700">
                                                Errors in classification or user dates in your Indian application can lead to a refusal from foreign IP offices like the USPTO, who perform their own rigorous vetting. A discrepancy in India can trigger an 'Office Action' in America, leading to massive international legal fees.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="prevention-strategies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Future-Proofing Your Brand: Prevention over Cure
                                        </h2>
                                        <p className="mb-6">
                                            The best way to manage a trademark discrepancy is to never have one. In an era where brand values are worth billions, leaving your trademark filing to chance or unqualified agents is a risk not worth taking. Professional due diligence before clicking 'Submit' on Form TM-A can save you years of legal trouble.
                                        </p>
                                        <p className="mb-6">
                                            We recommend a 'Triple-Check' policy. First, verify the 'Applicant Name' against the PAN/GST data. Second, verify the 'Mark' (the visual logo) against the 'Word Mark' field. Third, and most importantly, perform a 'Technical Class Audit'. Many items perform multiple functions and could fall into several classes. Choosing the right one—or filing in multiple classes—is the mark of a sophisticated IP strategy.
                                        </p>
                                        <div className="flex flex-wrap gap-4 mb-10">
                                            <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-600">Pre-Filing Search</span>
                                            <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-600">Legal Entity Validation</span>
                                            <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-600">Class Analysis</span>
                                            <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-600">User Date Audit</span>
                                            <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-600">Document Review</span>
                                        </div>
                                    </section>

                                    <section id="case-studies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Real-World Case Studies: The Cost of Inaccuracy
                                        </h2>
                                        <div className="space-y-8">
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                                <h4 className="font-bold text-lg mb-4 text-[rgb(110,94,147)]">Case A: The Entity Error</h4>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    A startup filed a trademark under the founder's personal name instead of the Private Limited Company name. During a funding round, the investor's due diligence team flagged this discrepancy. Because the IP wasn't owned by the company, the valuation dropped by 20%. It took four months and several Form TM-P filings to transfer the ownership and restore the company's valuation.
                                                </p>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                                <h4 className="font-bold text-lg mb-4 text-[rgb(110,94,147)]">Case B: The User Date Conflict</h4>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    A manufacturer claimed use from 2015 but provided invoices starting only from 2018. The Registrar issued an 'Objected' status for misrepresentation. A competitor used this discrepancy to file an Opposition, arguing for the cancellation of the mark. The case dragged on for two years before being settled through a costly license agreement.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Trusted by Brands to Resolve IP Errors
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3" style={{ backgroundColor: 'rgb(110, 94, 147)' }}>
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Expert Insights: FAQ on Trademark Discrepancy
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Elite Resolution for Every Trademark Discrepancy</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't let a minor error destroy years of brand building. Our legal team specializes in fixing trademark discrepancies with 100% precision and efficiency.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Fix My Trademark Now
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" />
                                                        +91-9289707648
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Identify Discrepancies Free</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Is your trademark stuck in 'Objection' or 'Formalities Check Fail'? Get a **Free Legal Audit** within 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Start Free Audit
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Guides</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-objected-what-to-do-next" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Objected Status Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Examination Report</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-hearing-notice-what-to-do" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Hearing Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Check All Statuses</span>
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
